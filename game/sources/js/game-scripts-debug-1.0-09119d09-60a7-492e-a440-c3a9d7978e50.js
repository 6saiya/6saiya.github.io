/**
 * 用户自定义脚本.
 */
(function(window, Object, undefined) {

/**
 * @author weism
 * copyright 2015 Qcplay All Rights Reserved.
 */

/**
 * 保持横版或者竖版的组件
 * 在本节点下面的对象都会进行旋转
 * @class qc.Plugins.LockOrientation
 */
var LockOrientation = qc.defineBehaviour('qc.Plugins.LockOrientation', qc.Behaviour, function() {
    var self = this;

    /**
     * @property {int} orientation - 当前是限定为横版还是竖版，有如下取值：
     * Device.AUTO = 0;
     * Device.PORTRAIT = 1;
     * Device.LANDSCAPE = 2;
     */
    self.orientation = self.game.device.orientation;

    // 在PC上默认不启用
    self.desktop = false;

    // 本组件可以在编辑器模式下运行
    self.runInEditor = true;

    self.manualType = 0;
}, {
    orientation: qc.Serializer.INT,
    desktop: qc.Serializer.BOOLEAN,
    manualType: qc.Serializer.INT
});
LockOrientation.__menu = 'Plugins/LockOrientation';

Object.defineProperties(LockOrientation.prototype, {
    orientation: {
        get: function() {
            return this._orientation;
        },
        set: function(v) {
            if (v === this._orientation) return;
            this._orientation = v;
            this._doOrientation(this.game.device.orientation);
        }
    }
});

// 初始化处理，关注横竖版事件并做处理
LockOrientation.prototype.awake = function() {
    var self = this, o = self.gameObject;

    self.addListener(self.game.world.onSizeChange, self._doOrientation, self);
    self.addListener(o.parent.onRelayout, self.assureSize, self);

    // 确保目标节点大小、pivot与世界一致
    self._doOrientation();
    self.assureSize();

    var adapter = o.parent.getScript('qc.ScaleAdapter');

    if (adapter) {
        // 本插件需要重载掉ScaleAdapter，在屏幕宽高缩放时，需要按照旋转后的长宽来获取
        var oldScaleAdapter_getReferenceResolution = adapter.getReferenceResolution;
        adapter.getReferenceResolution = function() {
            var p = oldScaleAdapter_getReferenceResolution.call(this);
            if (self.rotate90) {
                return new qc.Point(p.y, p.x);
            }
            return p;        
        };
    }
};

// 确保和父亲节点的大小保持一致
LockOrientation.prototype.assureSize = function() {
    var self = this, o = self.gameObject;

    var rect = o.parent.rect;
    if (self.rotate90 === true) {
        // 旋转时，对调下长宽，确保和父亲节点重合
        o.width = rect.height;
        o.height = rect.width;
    }
    else {
        o.width = rect.width;
        o.height = rect.height;
    }
    o.setAnchor(new qc.Point(0.5, 0.5), new qc.Point(0.5, 0.5));
    o.anchoredX = 0;
    o.anchoredY = 0;
    o.pivotX = 0.5;
    o.pivotY = 0.5;
};

// 横竖屏发生变化的处理
LockOrientation.prototype._doOrientation = function() {
    var self = this, o = self.gameObject, v = self.game.device.orientation;

    if (!self.desktop && !self.game.editor && self.game.device.desktop) {
        o.rotation = 0;
        self.rotate90 = false;
        return;
    }

    switch (self.orientation) {
    case qc.Device.AUTO:
    default:
        o.rotation = 0;
        self.rotate90 = false;
        return;

    case qc.Device.PORTRAIT:
    case qc.Device.LANDSCAPE:
        if (v === self.orientation) {
            // 一致，就不需要旋转了
            o.rotation = 0;
            self.rotate90 = false;
        }
        else {
            // 不一致，旋转90度
            o.rotation = -Math.PI / 2;
            self.rotate90 = true;
        }
        self.assureSize();
        break;
    }
    var adapter = o.parent.getScript('qc.ScaleAdapter');
    if (adapter) {
        if (self.rotate90) {
            if (self.manualType === qc.ScaleAdapter.MANUAL_WIDTH) {
                adapter.manualType = qc.ScaleAdapter.MANUAL_HEIGHT;
            }
            else if (self.manualType === qc.ScaleAdapter.MANUAL_HEIGHT) {
                adapter.manualType = qc.ScaleAdapter.MANUAL_WIDTH;
            }
            else {
                adapter.manualType = self.manualType;
            }
        }
        else {
            adapter.manualType = self.manualType;
        }
    }
};


/**
 * @author chenqx
 * copyright 2015 Qcplay All Rights Reserved.
 */

/**
 * 负责处理游戏的节点淡入淡出
 * @class qc.NodeFadeInOut
 */
var NodeFadeInOut = qc.defineBehaviour('qc.Plugins.NodeFadeInOut', qc.Tween, function() {
    /**
     * @property {number} fadeType - 淡入淡出类型
     */
    this.fadeType = NodeFadeInOut.FADE_IN;
    /**
     * @property {number} columnCount - 变化的列数
     */
    this.columnCount = 1;
    /**
     * @property {number} rowCount - 变化的列数
     */
    this.rowCount = 1;
    /**
     * @property {number] pivotX - 变化时的原点 x 位置
     */
    this.pivotX = 0.5;
    /**
     * @property {number} pivotY - 变化时的原点 y 坐标
     */
    this.pivotY = 0.5;
    /**
     * @property {number} style - 淡入淡出的类型
     */
    this.fadeStyle = NodeFadeInOut.STYLE_ZOOM;
    /**
     * @property {number} effect - 生效的效果
     */
    this.fadeEffect = NodeFadeInOut.EFFECT_XY;

    /**
     * @property {qc.Node} target - 需要淡入淡出的节点，不设置默认为自身节点
     */
    this.target = null;
}, {
    fadeType : qc.Serializer.NUMBER,
    columnCount : qc.Serializer.NUMBER,
    rowCount : qc.Serializer.NUMBER,
    pivotX : qc.Serializer.NUMBER,
    pivotY : qc.Serializer.NUMBER,
    fadeStyle : qc.Serializer.NUMBER,
    fadeEffect : qc.Serializer.NUMBER,
    target : qc.Serializer.NODE
});
NodeFadeInOut.__menu = 'Plugins/NodeFadeInOut';

Object.defineProperties(NodeFadeInOut.prototype, {
    /**
     * @property {number} columnCount - 分隔的列数
     */
    columnCount : {
        get : function() { return this._columnCount; },
        set : function(v) {
            v = (isNaN(v) || v === 0) ? 1 : v;
            if (v === this._columnCount) {
                return;
            }
            this._columnCount = v;
        }
    },
    /**
     * @property {number} rowCount - 分隔的行数
     */
    rowCount : {
        get : function() { return this._rowCount; },
        set : function(v) {
            v = (isNaN(v) || v === 0) ? 1 : v;
            if (v === this._rowCount) {
                return;
            }
            this._rowCount = v;
        }
    },
    /**
     * @property {qc.Node} _cachedTarget - 缓存的对象
     * @private
     * @readonly
     */
    _cachedTarget : {
        get : function() {
            if (this.target && this.target._destroy) {
                this.target = null;
            }
            return this.target || this.gameObject;
        }
    }
});


/**
 * 生效
 */
NodeFadeInOut.prototype.onEnable = function() {
    var self = this;
    if (self._cachedTarget._destroy) {
        return;
    }
    self._cachedTarget.visible = true;
    if (self._cachedTexture) {
        self._cachedTexture.destroy(true);
        self._cachedTexture = null;
    }
    // 获取缓存信息
    self._cachedBounds = self._cachedTarget.localBounds;
    self._cachedTexture = self._cachedTarget.generateTexture();
    self._cachedSprite = new PIXI.Sprite(self._cachedTexture);
    self._cachedSprite.worldTransform = self._cachedTarget.worldTransform;
    self._cachedTarget.phaser.anchor && (self._cachedSprite.anchor = self._cachedTarget.phaser.anchor);

    // 替换绘制函数
    if (!self._nodeRenderCanvas) {
        self._nodeRenderCanvas = self.gameObject.phaser._renderCanvas;
        self.gameObject.phaser._renderCanvas = self.renderCanvas.bind(this);

        self.gameObject.phaser.getSelfWidth = function() {
            return self._cachedSprite.width;
        };
        self.gameObject.phaser.getSelfHeight = function() {
            return self._cachedSprite.height;
        };
        self.gameObject.phaser._skipChildrenRender = true;
    }

    if (!self._nodeRenderWebGL) {
        self._nodeRenderWebGL = self.gameObject.phaser._renderWebGL;
        self.gameObject.phaser._renderWebGL = self.renderWebGL.bind(this);
    }

    
    // 缓存对象不是自身时，直接隐藏
    //if (this._cachedTarget !== this.gameObject) {
    //    this._cachedTarget.visible = false;
    //}
};

/**
 * 失效
 */
NodeFadeInOut.prototype.onDisable = function() {
    if (this._nodeRenderCanvas) {
        this.gameObject.phaser._renderCanvas = this._nodeRenderCanvas;
        this._nodeRenderCanvas = null;
    }
    if (this._nodeRenderWebGL) {
        this.gameObject.phaser._renderWebGL = this._nodeRenderWebGL;
        this._nodeRenderWebGL = null;
        this.gameObject.phaser.getSelfWidth = null;
        this.gameObject.phaser.getSelfHeight = null;
        this.gameObject.phaser._skipChildrenRender = false;
    }
    if (this._cachedTexture) {
        this._cachedTexture.destroy(true);
        this._cachedTexture = null;
    }
    if (this._cachedSprite) {
        this._cachedSprite = null;
    }
    qc.Tween.prototype.onDisable.call(this);
};

/**
 * 销毁
 */
NodeFadeInOut.prototype.onDestroy = function() {
    if (this._nodeRenderCanvas) {
        this.gameObject.phaser._renderCanvas = this._nodeRenderCanvas;
        this._nodeRenderCanvas = null;
    }
    if (this._nodeRenderWebGL) {
        this.gameObject.phaser._renderWebGL = this._nodeRenderWebGL;
        this._nodeRenderWebGL = null;
    }
    if (this._cachedTexture) {
        this._cachedTexture.destroy(true);
        this._cachedTexture = null;
    }
    if (this._cachedSprite) {
        this._cachedSprite = null;
    }
    if (qc.Tween.prototype.onDestroy)
        qc.Tween.prototype.onDestroy.call(this);
};

// 帧调度: 驱动位置
NodeFadeInOut.prototype.onUpdate = function(factor, isFinished) {
    this._factorValue = this.fadeType === NodeFadeInOut.FADE_IN ? (1 - factor) : factor;
    this.gameObject.phaser.displayChanged(qc.DisplayChangeStatus.TEXTURE | qc.DisplayChangeStatus.SIZE);
    if (isFinished && !this._cachedTarget._destroy && this._cachedTarget === this.gameObject) {
        this._cachedTarget.visible = this.fadeType === NodeFadeInOut.FADE_IN;
    }
};

/**
 * canvas下的绘制
 * @param renderSession
 */
NodeFadeInOut.prototype.renderCanvas = function(renderSession) {
    // 自身不是淡入淡出对象时，绘制自身
    if (this._cachedTarget !== this.gameObject) {
        this._nodeRenderCanvas.call(this.gameObject.phaser, renderSession);
    }

    var texture = this._cachedTexture;
    var sprite = this._cachedSprite;
    var bounds = this._cachedBounds;

    //  Ignore null sources
    if (texture)
    {
        var resolution = texture.baseTexture.resolution / renderSession.resolution;

        renderSession.context.globalAlpha = sprite.worldAlpha;

        //  If smoothingEnabled is supported and we need to change the smoothing property for this texture
        if (renderSession.smoothProperty && renderSession.scaleMode !== texture.baseTexture.scaleMode)
        {
            renderSession.scaleMode = texture.baseTexture.scaleMode;
            renderSession.context[renderSession.smoothProperty] = (renderSession.scaleMode === PIXI.scaleModes.LINEAR);
        }

        //  If the texture is trimmed we offset by the trim x/y, otherwise we use the frame dimensions
        var dx = (texture.trim) ? texture.trim.x - sprite.anchor.x * texture.trim.width : sprite.anchor.x * -texture.frame.width;
        var dy = (texture.trim) ? texture.trim.y - sprite.anchor.y * texture.trim.height : sprite.anchor.y * -texture.frame.height;

        //  Allow for pixel rounding
        if (renderSession.roundPixels)
        {
            renderSession.context.setTransform(
                sprite.worldTransform.a,
                sprite.worldTransform.b,
                sprite.worldTransform.c,
                sprite.worldTransform.d,
                (sprite.worldTransform.tx * renderSession.resolution) | 0,
                (sprite.worldTransform.ty * renderSession.resolution) | 0);
            dx = dx | 0;
            dy = dy | 0;
        }
        else
        {
            renderSession.context.setTransform(
                sprite.worldTransform.a,
                sprite.worldTransform.b,
                sprite.worldTransform.c,
                sprite.worldTransform.d,
                sprite.worldTransform.tx * renderSession.resolution,
                sprite.worldTransform.ty * renderSession.resolution);
        }

        var xStep = texture.crop.width / this.columnCount;
        var yStep = texture.crop.height  / this.rowCount;

        var effectX = this.fadeEffect === NodeFadeInOut.EFFECT_X || this.fadeEffect === NodeFadeInOut.EFFECT_XY;
        var effectY = this.fadeEffect === NodeFadeInOut.EFFECT_Y || this.fadeEffect === NodeFadeInOut.EFFECT_XY;
        var cellShowWidth = (effectX ? (1 - this._factorValue) : 1) * xStep / resolution;
        var cellShowHeight = (effectY ? (1 - this._factorValue) : 1) * yStep / resolution;
        var cellWidth = effectX && this.fadeStyle === NodeFadeInOut.STYLE_CLIP ? xStep * (1 - this._factorValue) : xStep;
        var cellHeight = effectY && this.fadeStyle === NodeFadeInOut.STYLE_CLIP ? yStep * (1 - this._factorValue) : yStep;
        for (var yPos = 0; yPos < texture.crop.height; yPos += yStep) {
            var showY = (dy + yPos + yStep * (effectY ? this._factorValue : 0) * this.pivotY )/ resolution + bounds.y;
            for (var xPos = 0; xPos < texture.crop.width; xPos += xStep) {
                var showX = (dx + xPos + xStep * (effectX ? this._factorValue : 0) * this.pivotX ) / resolution + bounds.x;
                renderSession.context.drawImage(
                    texture.baseTexture.source,
                    texture.crop.x + xPos,
                    texture.crop.y + yPos,
                    cellWidth,
                    cellHeight,
                    showX,
                    showY,
                    cellShowWidth,
                    cellShowHeight);
            }
        }
    }
};

/**
 * webGL 下的绘制
 * @param renderSession
 */
NodeFadeInOut.prototype.renderWebGL = function(renderSession){
    // 自身不是淡入淡出对象时，绘制自身
    if (this._cachedTarget !== this.gameObject) {
        this._nodeRenderWebGL.call(this.gameObject.phaser, renderSession);
    }

    var texture = this._cachedTexture;
    var bounds = this._cachedBounds;
    var sprite = this._cachedSprite;

    var uvs = texture._uvs;
    if (! uvs) return;

    var resolution = texture.baseTexture.resolution / renderSession.resolution;
    var xStep = texture.crop.width / this.columnCount;
    var yStep = texture.crop.height  / this.rowCount;

    var effectX = this.fadeEffect === NodeFadeInOut.EFFECT_X || this.fadeEffect === NodeFadeInOut.EFFECT_XY;
    var effectY = this.fadeEffect === NodeFadeInOut.EFFECT_Y || this.fadeEffect === NodeFadeInOut.EFFECT_XY;
    var cellShowWidth = (effectX ? (1 - this._factorValue) : 1) * xStep / resolution;
    var cellShowHeight = (effectY ? (1 - this._factorValue) : 1) * yStep / resolution;
    var cellWidth = effectX && this.fadeStyle === NodeFadeInOut.STYLE_CLIP ? xStep * (1 - this._factorValue) : xStep;
    var cellHeight = effectY && this.fadeStyle === NodeFadeInOut.STYLE_CLIP ? yStep * (1 - this._factorValue) : yStep;

    var worldTransform = sprite.worldTransform;

    var a = worldTransform.a / resolution;
    var b = worldTransform.b / resolution;
    var c = worldTransform.c / resolution;
    var d = worldTransform.d / resolution;
    var tx = worldTransform.tx;
    var ty = worldTransform.ty;
    var uvWith = uvs.x2 - uvs.x0;
    var uvHeight = uvs.y2 - uvs.y0;
    for (var yPos = 0; yPos < texture.crop.height; yPos += yStep) {
        var showY = (yPos + yStep * (effectY ? this._factorValue : 0) * this.pivotY )/ resolution + bounds.y;
        for (var xPos = 0; xPos < texture.crop.width; xPos += xStep) {
            var showX = (xPos + xStep * (effectX ? this._factorValue : 0) * this.pivotX ) / resolution + bounds.x;
            this._webGLAddQuad(renderSession.spriteBatch,sprite,
                showX, showY, showX + cellShowWidth, showY + cellShowHeight,
                uvs.x0 + uvWith * xPos / texture.crop.width,
                uvs.y0 + uvHeight * yPos / texture.crop.height,
                uvs.x0 + uvWith * (xPos + cellWidth) / texture.crop.width,
                uvs.y0 + uvHeight * (yPos + cellHeight) / texture.crop.height,
                a, b, c, d, tx, ty, sprite.tint);
        }
    }
};


// 增加定点
NodeFadeInOut.prototype._webGLAddQuad = function(spriteBatch, sprite, w1, h1, w0, h0, uvx0, uvy0, uvx1, uvy1, a, b, c, d, tx, ty, tint) {
    if(spriteBatch.currentBatchSize >= spriteBatch.size)
    {
        spriteBatch.flush();
        spriteBatch.currentBaseTexture = sprite.texture.baseTexture;
    }

    var colors = spriteBatch.colors;
    var positions = spriteBatch.positions;

    var index = spriteBatch.currentBatchSize * 4 * spriteBatch.vertSize;


    if(spriteBatch.renderSession.roundPixels)
    {
        // xy
        positions[index] = a * w1 + c * h1 + tx | 0;
        positions[index+1] = d * h1 + b * w1 + ty | 0;

        // xy
        positions[index+5] = a * w0 + c * h1 + tx | 0;
        positions[index+6] = d * h1 + b * w0 + ty | 0;

        // xy
        positions[index+10] = a * w0 + c * h0 + tx | 0;
        positions[index+11] = d * h0 + b * w0 + ty | 0;

        // xy
        positions[index+15] = a * w1 + c * h0 + tx | 0;
        positions[index+16] = d * h0 + b * w1 + ty | 0;
    }
    else
    {
        // xy
        positions[index] = a * w1 + c * h1 + tx;
        positions[index+1] = d * h1 + b * w1 + ty;

        // xy
        positions[index+5] = a * w0 + c * h1 + tx;
        positions[index+6] = d * h1 + b * w0 + ty;

        // xy
        positions[index+10] = a * w0 + c * h0 + tx;
        positions[index+11] = d * h0 + b * w0 + ty;

        // xy
        positions[index+15] = a * w1 + c * h0 + tx;
        positions[index+16] = d * h0 + b * w1 + ty;
    }
    // uv
    positions[index+2] = uvx0;
    positions[index+3] = uvy0;

    // uv
    positions[index+7] = uvx1;
    positions[index+8] = uvy0;

    // uv
    positions[index+12] = uvx1;
    positions[index+13] = uvy1;

    // uv
    positions[index+17] = uvx0;
    positions[index+18] = uvy1;

    // color and alpha
    colors[index+4] = colors[index+9] = colors[index+14] = colors[index+19] = (tint >> 16) + (tint & 0xff00) + ((tint & 0xff) << 16) + (sprite.worldAlpha * 255 << 24);

    // increment the batchsize
    spriteBatch.sprites[spriteBatch.currentBatchSize++] = sprite;
};

/**
 * 淡入
 * @constant
 * @type {number}
 */
NodeFadeInOut.FADE_IN = 0;

/**
 * 淡出
 * @constant
 * @type {number}
 */
NodeFadeInOut.FADE_OUT = 1;

/**
 * 缩放淡入淡出
 * @constant
 * @type {number}
 */
NodeFadeInOut.STYLE_ZOOM = 0;

/**
 * 裁切淡入淡出
 * @constant
 * @type {number}
 */
NodeFadeInOut.STYLE_CLIP = 1;

/**
 * x,y轴同时变化
 * @constant
 * @type {number}
 */
NodeFadeInOut.EFFECT_XY = 0;
/**
 * x轴变化
 * @constant
 * @type {number}
 */
NodeFadeInOut.EFFECT_X = 1;
/**
 * y轴变化
 * @constant
 * @type {number}
 */
NodeFadeInOut.EFFECT_Y = 2;
/**
 * @author weism
 * copyright 2015 Qcplay All Rights Reserved.
 */

/**
 * 初始化入口
 */
var Init = qc.defineBehaviour('qc.demo.Init', qc.Behaviour, function() {

}, {
    // 需要序列化的字段
});

// 初始化处理
Init.prototype.awake = function() {
    // 加载图片字体
    this.game.assets.load('defaultFont', 'Assets/font/desyrel.bin');

    // 存放游戏的全局变量
    if (!this.game.G) this.game.G = {};
}

/**
 * @author weism
 * copyright 2015 Qcplay All Rights Reserved.
 */

/**
 * 动物信息
 */
var Animal = qc.defineBehaviour('qc.demo.Animal', qc.Behaviour, function() {
    var self = this;

    self.type = 0;
    self.index = 0;

    self.explode = null;
}, {
    // 需要序列化的字段
    icon: qc.Serializer.NODE,
    explode: qc.Serializer.NODE
});

// 设置动物的数据
Animal.prototype.setData = function(data) {
    var self = this;
    self.icon.frame = data.icon;
    self.type = data.type;
    self.index = data.index;
    self.name = '' + self.index;
};

/**
 * 播放消失爆炸的效果
 * @param cb
 */
Animal.prototype.disappear = function(cb) {
    var self = this;
    self.icon.visible = false;

    // 播放爆炸特效
    self.explode.visible = true;
    self.explode.onFinished.addOnce(function() {
        self.explode.visible = false;
        cb();
    });
    self.explode.playAnimation('explode');
};

/**
 * 从fromIndex往下掉落
 * @param icon
 * @param fromIndex
 */
Animal.prototype.drop = function(type, icon, fromIndex, cb) {
    var self = this;
    self.icon.frame = icon;
    self.type = type;
    self.icon.visible = true;
    var c = self.getScript('qc.TweenPosition');
    c.from = new qc.Point(((fromIndex + 64) % 8) * 76,
        self.game.math.floorTo(fromIndex / 8) * 72);
    c.to = new qc.Point(((self.index) % 8) * 76,
        self.game.math.floorTo(self.index / 8) * 72);
    c.duration = (c.to.y - c.from.y) / 72 * 0.13;
    c.resetToBeginning();
    c.onFinished.addOnce(function() {
        cb();
    });
    c.playForward();
}
/**
 * @author weism
 * copyright 2015 Qcplay All Rights Reserved.
 */

/**
 * 场景加载的进度提示界面
 */
var LoadingUI = qc.defineBehaviour('qc.demo.LoadingUI', qc.Behaviour,
    function() {
        this.clue = null;
    },
    {
        // 需要序列化的字段
        clue: qc.Serializer.NODE
    }
);

// 初始化处理
LoadingUI.prototype.awake = function() {
    // 关注场景开始切换和切换结束的事件
    var self = this;
    this.addListener(self.game.scene.onStartLoad, function() {
        // 场景加载开始，显示本界面
        self.show();
    });
    this.addListener(self.game.scene.onEndLoad, function() {
        // 场景加载完毕，隐藏本界面
        if (self.gameObject.visible) {
            if (self.duringTween)
                self.nextChange = 1;
            else
                self.hide();
        }
    });
}

// 帧调度，保证本界面永远在其他界面之上
LoadingUI.prototype.update = function() {
    var self = this,
        loaded = self.game.assets.loaded,
        total = self.game.assets.total;
    if (total) {
        self.clue.text = '拼命加载中：' + loaded + '/' + total;
    }
    else {
        self.clue.text = '';
    }
    // 扔到最后面去
    self.gameObject.parent.setChildIndex(this.gameObject, self.gameObject.parent.children.length - 1);
}

// 开始显示本界面
LoadingUI.prototype.show = function() {
    var self = this,
        fadeInOut = self.gameObject.getScript('qc.Plugins.NodeFadeInOut');

    self.gameObject.visible = true;
    self.gameObject.alpha = 0;
    fadeInOut.stop();
    fadeInOut.enable = false;
    fadeInOut.target = self.gameObject.game.world;
    fadeInOut.fadeType = NodeFadeInOut.FADE_OUT;
    fadeInOut.fadeStyle = this.getRandomInt(0, 2);
    fadeInOut.fadeEffect = this.getRandomInt(0, 3);
    fadeInOut.pivotX = Math.random(0, 1);
    fadeInOut.pivotY = Math.random(0, 1);
    fadeInOut.columnCount = this.getRandomInt(1, 32);
    fadeInOut.rowCount = this.getRandomInt(1, 32);
    fadeInOut.resetToBeginning();
    fadeInOut.playForward();
    self.gameObject.alpha = 1;
    self.duringTween = true;
    fadeInOut.onFinished.addOnce(function() {
        self.duringTween = false;
        if (self.nextChange) {
            self.hide();
            self.nextChange = 0;
        }
    });
}

// 结束显示本页面，加载完毕了
LoadingUI.prototype.hide = function() {
    var self = this,
        fadeInOut = self.gameObject.getScript('qc.Plugins.NodeFadeInOut');

    self.gameObject.alpha = 1;
    fadeInOut.enable = false;
    fadeInOut.target = null;
    fadeInOut.fadeType = NodeFadeInOut.FADE_OUT;
    fadeInOut.fadeStyle = this.getRandomInt(0, 2);
    fadeInOut.fadeEffect = this.getRandomInt(0, 3);
    fadeInOut.pivotX = Math.random(0, 1);
    fadeInOut.pivotY = Math.random(0, 1);
    fadeInOut.columnCount = this.getRandomInt(1, 32);
    fadeInOut.rowCount = this.getRandomInt(1, 32);
    fadeInOut.resetToBeginning();
    fadeInOut.playForward();
    self.duringTween = true;
    fadeInOut.onFinished.addOnce(function() {
        self.gameObject.visible = false;
        self.duringTween = false;
        self.nextChange = 0;
    });
}

LoadingUI.prototype.getRandomInt = function(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

/**
 * @author weism
 * copyright 2015 Qcplay All Rights Reserved.
 */

/**
 * 消消乐游戏的实现demo
 */
var SourcesUI = qc.defineBehaviour('qc.demo.SourcesUI', qc.Behaviour, function() {
    var self = this;

    // 6种动物的图标配置
    self.icons = ['bear.png', 'owl.png', 'fox.png', 'hippopotamus.png', 'frog.png', 'chicken.png'];

    // 棋盘配置（测试用）：8*8
    self.grids = [
        0, 2, 1, 1, 0, 0, 1, 0,
        1, 0, 2, 2, 0, 0, 1, 0,
        0, 0, 1, 0, 1, 2, 0, 1,
        1, 1, 2, 1, 2, 2, 1, 2,
        0, 0, 1, 0, 1, 0, 0, 4,
        1, 0, 1, 1, 3, 1, 1, 3,
        0, 1, 0, 1, 1, 2, 2, 1,
        0, 0, 1, 0, 0, 2, 1, 1
    ];

    // 动物的预制
    self.gridPrefab = null;

    // 当前棋盘的信息
    self._animations = [];

    // 当前分数
    self.score = 0;

    // 格子的大小
    self.W = 76;
    self.H = 72;

    // 显示分数
    self.scoreLabel = null;

    // 爆炸音效
    self.explodeAudio = null;
}, {
    // 需要序列化的字段
    gridPrefab: qc.Serializer.PREFAB,
    scoreLabel: qc.Serializer.NODE,
    explodeAudio: qc.Serializer.AUDIO
});

Object.defineProperties(SourcesUI.prototype, {
    score: {
        get: function() { return this._score || 0; },
        set: function(v) {
            this._score = v;
            if (this.scoreLabel)
                this.scoreLabel.text = '' + v;
        }
    }
});

// 初始化处理
SourcesUI.prototype.awake = function() {
    this.resetGame();
}

// 重置下游戏
SourcesUI.prototype.resetGame = function() {
    var self = this;
    self.score = 0;

    // 根据配置生成棋盘信息
    self.gameObject.removeChildren();
    self._animations = [];
    for (var i = 0; i < self.grids.length; i++) {
        var node = self.game.add.clone(self.gridPrefab, self.gameObject);
        node.x = (i % 8) * this.W;
        node.y = self.game.math.floorTo(i / 8) * this.H;
        var c = node.getScript('qc.demo.Animal');
        c.setData({
            index: i,
            icon: self.icons[self.grids[i]],
            type: self.grids[i]
        });
        self._animations.push(c);
    }
}

// 拖拽开始的处理
SourcesUI.prototype.onDragStart = function(e) {
    // 播放交换动画过程中不能操作
    if (this._switch) return;
    var source = e.source,
        gPoint = new qc.Point(source.x, source.y),
        point = this.gameObject.toLocal(gPoint);

    this._dragIndex = this.toIndex(point.x, point.y);
    this._dragging = true;
    this.game.log.trace('开始拖拽: {0}', this._dragIndex);
};

// 拖拽的处理
SourcesUI.prototype.onDrag = function(e) {
    if (!this._dragging) return;

    // 计算当前的位置
    var source = e.source,
        gPoint = new qc.Point(source.x, source.y),
        point = this.gameObject.toLocal(gPoint);
    var index = this.toIndex(point.x, point.y);
    if (index === this._dragIndex) return;

    // 位置发生变化了，拖拽结束
    this._dragging = false;

    //如果两者没有啥关系，则不做其他处理
    var relation = this.getRelation(this._dragIndex, index);
    if (!relation) {
        this.game.log.trace('强制取消拖拽: {0}', index);
        return;
    }

    // 播放交换动画
    this.switch(index, this._dragIndex);
};

// 拖拽结束的处理
SourcesUI.prototype.onDragEnd = function(e) {
    this.game.log.trace('拖拽结束');
    this._dragging = false;
};

// 根据坐标换算为第几个格子
SourcesUI.prototype.toIndex = function(x, y) {
    var len = 8;
    var col = this.game.math.floorTo(x / this.W), row = this.game.math.floorTo(y / this.H);
    return row * len + col;
}

/**
 * 获取两个格子的关系
 * @param a - 第一个格子位置
 * @param b - 第二个格子位置
 * @return
 * left - a在b左边
 * right - a在b右边
 * top - a在b上边
 * bottom - a在b下面
 * undefined - 不相邻
 */
SourcesUI.prototype.getRelation = function(a, b) {
    var size = 8;
    var col1 = a % size, row1 = this.game.math.floorTo(a / size);
    var col2 = b % size, row2 = this.game.math.floorTo(b / size);

    if (col1 + 1 === col2 && row1 === row2) return 'left';
    if (col1 - 1 === col2 && row1 === row2) return 'right';
    if (col1 === col2 && row1 + 1 === row2) return 'top';
    if (col1 === col2 && row1 - 1 === row2) return 'bottom';
}

/**
 * 交换位置，如果有可以消除的则消除之，否则重置回来
 * @param index1
 * @param index2
 */
SourcesUI.prototype.switch = function(index1, index2) {
    var self = this;
    self._switch = true;

    // 复制一份出来，预先交换位置
    var grids = self.grids.concat();
    var a = grids[index1];
    grids[index1] = grids[index2],
    grids[index2] = a;
    var result = qc.demo.SourcesUtil.findResult(grids);

    var count = 2;
    var o1 = self._animations[index1].gameObject,
        o2 = self._animations[index2].gameObject;
    var reset = function() {
        self.moveGrid(o2, index2, function() { self._switch = false; });
        self.moveGrid(o1, index1, function() { self._switch = false; });
    };
    var afterSwitch = function() {
        if (result.length < 1) {
            // 无法消除，重置回去
            self.game.log.trace('无效的移动');
            reset();
        }
        else {
            // 更新下棋盘的最新信息
            self.grids = grids;
            var t = self._animations[index1];
            self._animations[index1] = self._animations[index2];
            self._animations[index2] = t;
            self._animations[index1].index = index1;
            self._animations[index2].index = index2;

            // 消除之
            self.game.log.trace('开始播放消除动画');
            self.disappear(result);
        }
    };
    var waitEnd = function() {
        count--;
        if (count <= 0) {
            // 交换结束的处理
            afterSwitch();
        }
    };
    self.moveGrid(o1, index2, waitEnd);
    self.moveGrid(o2, index1, waitEnd);
};

/**
 * 格子从当前位置移动到目标格子
 * @param grid
 * @param targetIndex
 */
SourcesUI.prototype.moveGrid = function(grid, targetIndex, cb) {
    var self = this, c = grid.getScript('qc.TweenPosition');
    c.from = new qc.Point(grid.x, grid.y);
    c.to = new qc.Point((targetIndex % 8) * this.W,
        this.game.math.floorTo(targetIndex / 8) * this.H);
    c.duration = 0.3;
    c.onFinished.addOnce(function() {
        if (cb)
            self.game.timer.add(1, cb);
    });
    c.resetToBeginning();
    c.playForward();
};

/**
 * 播放格子消失的动画
 * @param result
 */
SourcesUI.prototype.disappear = function(result) {
    var self = this, count = 0, score = 0;

    // 播放爆炸音效
    var sound = self.game.add.sound();
    sound.audio = self.explodeAudio;
    sound.play();

    // 消失动画完毕后的处理
    var waitDisappear = function() {
        if (--count <= 0) {
            // 开始补充新的格子
            self.addAnimations();
        }
    };

    for (var i in result) {
        var line = result[i];

        // 累积分数
        score += 2 + (line.length - 3) * 2;
        self.score += score;
        for (var j in line) {
            // 这个格子消失掉并播放爆炸效果
            var index = line[j];
            self.grids[index] = -1;
            count++;
            self._animations[index].disappear(waitDisappear);
        }
    }
};

/**
 * 补充新的格子
 */
SourcesUI.prototype.addAnimations = function() {
    var self = this, count = 0;

    // 掉落完毕的处理
    var waitDrop = function() {
        if (--count <= 0) {
            var result = qc.demo.SourcesUtil.findResult(self.grids);
            if (result.length === 0)
                self._switch = false;
            else
                self.disappear(result);
        }
    };

    for (var col = 0; col < 8; col++) {
        var empty = 0;
        for (var row = 7; row >= 0; row--) {
            var index = col + row * 8;
            var type = self.grids[index];
            if (type === -1) {
                // 这是个空格
                empty++;
                continue;
            }

            if (empty === 0) continue;

            // 格子(index + 8 * empty)需要从index往下掉落
            count++;
            self.grids[index + 8 * empty] = type;
            self.game.log.trace('drop: {0} -> {1}', index, index + 8 * empty);
            self._animations[index + 8 * empty].drop(type, self.icons[type], index, waitDrop);
        }

        // 需要生成empty个格子，填满前几个空行
        for (var i = 0; i < empty; i++) {
            // TODO: 正确应该是(0, 5)
            // 这里为了演示效果，少放几个
            var type = self.game.math.random(0, 2);
            count++;
            self.grids[i * 8 + col] = type;
            self.game.log.trace('drop: {0} -> {1}', (i - empty) * 8 + col, i * 8 + col);
            self._animations[i * 8 + col].drop(type, self.icons[type], (i - empty) * 8 + col, waitDrop);
        }
    }
};

/**
 * @author wudm
 * copyright 2015 Qcplay All Rights Reserved.
 */
var SourcesUtil = qc.demo.SourcesUtil = {};

/**
 * 查找所有可以被消灭的格子
 * @param sourceTable
 * @param w
 * @param h
 * @param limit
 * @returns {Array}
 */
SourcesUtil.findResult = function(sourceTable, w, h, limit) {
    var list;
    var table = [];
    var i, j, k;
    var head, tail;
    var count, lastType, type;
    var slot;
    var xi, xj, yi, yj, yslot;
    var output = [], singleOutput;
    w = w || 8;
    h = h || 8;
    limit = limit || 3;

    var hash = function(i, j) { return i * w + j; };

    for (i = 0; i < h; i++) {
        table.push([]);
        for (j = 0; j < w; j++) {
            table[i].push({
                type: sourceTable[hash(i, j)]
            });
        }
    }

    // 横向统计
    for (i = 0; i < h; i++) {
        lastType = -1;
        for (j = 0; j <= w; j++) {
            slot = table[i][j] || {};
            type = slot.type;
            if (type !== lastType) {
                // 向前找所有跟我一样的 slot，记录横向数量
                for (k = j - 1; k >= 0; k--) {
                    if (table[i][k].type === lastType)
                        table[i][k].hc = count;
                    else
                        break;
                }
                count = 1;
                lastType = type;
            }
            else count++;
        }
    }

    // 纵向统计
    for (j = 0; j < w; j++) {
        lastType = -1;
        for (i = 0; i <= h; i++) {
            slot = (i == h ? {} : table[i][j]);
            type = slot.type;
            if (type !== lastType) {
                // 向上找所有跟我一样的 slot，记录纵向数量
                for (k = i - 1; k >= 0; k--) {
                    if (table[k][j].type === lastType)
                        table[k][j].vc = count;
                    else
                        break;
                }
                count = 1;
                lastType = type;
            }
            else count++;
        }
    }

    // 来一次广度优先吧
    for (i = 0; i < h; i++) {
        for (j = 0; j < w; j++) {
            // seek for next blank slot
            slot = table[i][j];
            if (slot.hc < limit && slot.vc < limit) continue;
            if (slot.visited) continue;

            // new begin slot
            list = [];
            singleOutput = [hash(i, j)];

            list.push([i, j]);
            slot.visited = true;
            head = 0;
            tail = 1;
            type = slot.type;

            while (head < tail) {
                xi = list[head][0];
                xj = list[head][1];
                head++;

                // 四方查找
                [
                    [-1, 0],  // 上
                    [1, 0],  // 下
                    [0, -1],  // 左
                    [0, 1]  // 右
                ].forEach(function(direction) {
                        yi = xi + direction[0];
                        yj = xj + direction[1];

                        if (!table[yi]) return;
                        if (!(yslot = table[yi][yj])) return;

                        if (yslot.visited ||
                            yslot.type !== type ||
                            (yslot.hc < limit && yslot.vc < limit))
                            return;

                        list.push([yi, yj]);
                        tail++;
                        yslot.visited = true;

                        singleOutput.push(hash(yi, yj));
                    });
            }

            output.push(singleOutput);
        }
    }

    return output;
};

}).call(this, this, Object);

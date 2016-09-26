/**
 * Created by lance on 2016/9/25.
 */
function HTMLActuator() {
    this.tileContainer    = document.querySelector(".tile-container");
    this.scoreContainer   = document.querySelector(".score-container");
    this.bestContainer    = document.querySelector(".best-container");
    this.messageContainer = document.querySelector(".game-message");
    this.sharingContainer = document.querySelector(".score-sharing");

    this.score = 0;
}

HTMLActuator.prototype.actuate = function (grid, metadata) {
    var self = this;

    window.requestAnimationFrame(function () {
        self.clearContainer(self.tileContainer);

        grid.cells.forEach(function (column) {
            column.forEach(function (cell) {
                if (cell) {
                    self.addTile(cell);
                }
            });
        });

        self.updateScore(metadata.score);
        self.updateBestScore(metadata.bestScore);


            if (metadata.terminated) { //
                if (metadata.over) { //
                    self.message(false); // You lose
                } else if (metadata.won) {
                    self.message(true); // You win!
                }
            }
    });
};

// Continues the game (both restart and keep playing)
// Continues the game (both restart and keep playing)
HTMLActuator.prototype.continue = function () {
    this.clearMessage();
};

HTMLActuator.prototype.clearContainer = function (container) {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
};


HTMLActuator.prototype.addTile = function (tile) {
    var text = new Array();
    text[1] = "X先生好"
    text[2] = "支持X吗"
    text[3] = "是否钦定"
    text[4] = "听风是雨"
    text[5] = "我很愤怒"
    text[6] = "搞大新闻"
    text[7] = "作为长者"
    text[8] = "人生哲理"
    text[9] = "naive"
    text[10] = "图样图破"
    text[11] = "扬名国际"
    text[12] = "甲子辉煌"
    text[13] = "继往开来"
    text[14] = "生日快乐"
    var self = this;
    var text2 = function (n) { var r = 0; while (n > 1) r++, n >>= 1; return r; }

    var wrapper   = document.createElement("div");
    var inner     = document.createElement("div");
    var position  = tile.previousPosition || { x: tile.x, y: tile.y };
    var positionClass = this.positionClass(position);

    // We can't use classlist because it somehow glitches when replacing classes
    var classes = ["tile", "tile-" + tile.value, positionClass];
    if (tile.value > 2048) classes.push("tile-super");

    this.applyClasses(wrapper, classes);

    inner.classList.add("tile-inner");
    inner.textContent = text[text2(tile.value)];

    if (tile.previousPosition) {
        // Make sure that the tile gets rendered in the previous position first
        window.requestAnimationFrame(function () {
            classes[2] = self.positionClass({ x: tile.x, y: tile.y });
            self.applyClasses(wrapper, classes); // Update the position
        });
    } else if (tile.mergedFrom) {
        classes.push("tile-merged");
        this.applyClasses(wrapper, classes);

        // Render the tiles that merged
        tile.mergedFrom.forEach(function (merged) {
            self.addTile(merged);
        });
    } else {
        classes.push("tile-new");
        this.applyClasses(wrapper, classes);
    }

    // Add the inner part of the tile to the wrapper
    wrapper.appendChild(inner);

    // Put the tile on the board
    this.tileContainer.appendChild(wrapper);
};

HTMLActuator.prototype.applyClasses = function (element, classes) {
    element.setAttribute("class", classes.join(" "));
};

HTMLActuator.prototype.normalizePosition = function (position) {
    return { x: position.x + 1, y: position.y + 1 };
};

HTMLActuator.prototype.positionClass = function (position) {
    position = this.normalizePosition(position);
    return "tile-position-" + position.x + "-" + position.y;
};

HTMLActuator.prototype.updateScore = function (score) {
    this.clearContainer(this.scoreContainer);

    var difference = score - this.score;
    this.score = score;

    this.scoreContainer.textContent = this.score;

    if (difference > 0) {
        var addition = document.createElement("div");
        addition.classList.add("score-addition");
        addition.textContent = "✿ ";//"献" + difference +"朵花";

        this.scoreContainer.appendChild(addition);
    }
};

HTMLActuator.prototype.updateBestScore = function (bestScore) {
    this.bestContainer.innerHTML = '<span class="font-1">献</span>' + bestScore + '<span class="font-1">朵花</span>';
};

HTMLActuator.prototype.message = function (won) {

    var type    = won ? "game-won" : "game-over";
    var message = won ? "我电已是世界一流学府，您居功至伟！" : "不要停止建设我电，再来再来!";

    this.messageContainer.classList.add(type);
    this.messageContainer.getElementsByTagName("p")[0].textContent = message;

    this.clearContainer(this.sharingContainer);
    //this.scoreTweetButton();
    this.sharingContainer.appendChild(this.scoreTweetButton());

};

HTMLActuator.prototype.clearMessage = function () {
    // IE only takes one value to remove at a time.
    this.messageContainer.classList.remove("game-won");
    this.messageContainer.classList.remove("game-over");
};

HTMLActuator.prototype.scoreTweetButton = function () {
    $(document).attr("title", "【甲子校庆】我为成电献了"+ this.score +"朵花，快来和我一起吧！！");
    var tweet = document.createElement("font");
    //var tweet = tweetp.createElement("a");
    tweet.classList.add("twitter-share-button");
    tweet.setAttribute("id", "share-start");
    tweet.setAttribute("data-clipboard-text", "我已经为电子科大60周年校庆献了"+ this.score +"朵花，快来和我一起吧！！回溯时光，到波澜壮阔的1956年，同母校共同经历六秩风雨。" + "http://elife.sport-rd.com/uestc2048/index.php");
    //tweet.setAttribute("href", "https://twitter.com/share");
    //tweet.setAttribute("data-via", "aenonsun");
    //tweet.setAttribute("data-url", "http://hahagame.github.io/ha");
    //tweet.setAttribute("data-counturl", "http://hahagame.github.io/ha");
    tweet.textContent = "快快分享召唤校友加入建设！";

    //var text = "我为长者搅命 " + this.score + " 小时，这是坠好滴！！ " +
    //tweet.setAttribute("data-text", text);
    wx.onMenuShareTimeline({
        title: '【甲子校庆】我为成电献了'+ this.score +'朵花，快来和我一起吧！！', // 分享标题
        desc: '回溯时光，到波澜壮阔的1956年，同母校共同经历六秩风雨。',
        link: 'http://elife.sport-rd.com/uestc2048/index.php', // 分享链接
        imgUrl: 'http://elife.sport-rd.com/uestc2048/logo1.png?t=<?php echo time();?>', // 分享图标
        trigger: function (res) {
            // alert('用户点击分享到朋友圈');
        },
        complete: function (res) {
            // alert(JSON.stringify(res));
        },
        success: function (res) {
            alert('已分享');
        },
        cancel: function (res) {
            alert('已取消');
        },
        fail: function (res) {
            // alert(JSON.stringify(res));
        }
    });

    wx.onMenuShareQQ({
        title: '【甲子校庆】我为成电献了'+ this.score +'朵花，快来和我一起吧！！',
        desc: '回溯时光，到波澜壮阔的1956年，同母校共同经历六秩风雨。',
        link: 'http://elife.sport-rd.com/uestc2048/index.php',
        imgUrl: 'http://elife.sport-rd.com/uestc2048/logo1.png?t=<?php echo time();?>',
        trigger: function (res) {
            // alert('用户点击分享到QQ');
        },
        complete: function (res) {
            // alert(JSON.stringify(res));
        },
        success: function (res) {
            alert('已分享');
        },
        cancel: function (res) {
            alert('已取消');
        },
        fail: function (res) {
            // alert(JSON.stringify(res));
        }
    });

    wx.onMenuShareWeibo({
        title: '【甲子校庆】我为成电献了'+ this.score +'朵花，快来和我一起吧！！',
        desc: '回溯时光，到波澜壮阔的1956年，同母校共同经历六秩风雨。',
        link: 'http://elife.sport-rd.com/uestc2048/index.php',
        imgUrl: 'http://elife.sport-rd.com/uestc2048/logo1.png?t=<?php echo time();?>',
        trigger: function (res) {
            // alert('用户点击分享到微博');
        },
        complete: function (res) {
            // alert(JSON.stringify(res));
        },
        success: function (res) {
            alert('已分享');
        },
        cancel: function (res) {
            alert('已取消');
        },
        fail: function (res) {
            // alert(JSON.stringify(res));
        }
    });

    wx.onMenuShareQZone({
        title: '【甲子校庆】我为成电献了'+ this.score +'朵花，快来和我一起吧！！',
        desc: '回溯时光，到波澜壮阔的1956年，同母校共同经历六秩风雨。',
        link: 'http://elife.sport-rd.com/uestc2048/index.php',
        imgUrl: 'http://elife.sport-rd.com/uestc2048/logo1.png?t=<?php echo time();?>',
        trigger: function (res) {
            // alert('用户点击分享到QZone');
        },
        complete: function (res) {
            // alert(JSON.stringify(res));
        },
        success: function (res) {
            alert('已分享');
        },
        cancel: function (res) {
            alert('已取消');
        },
        fail: function (res) {
            // alert(JSON.stringify(res));
        }
    });

    $.post("count.php",
        {
            api: 'addScore',
            vid: 1,
            score: this.score
        },
        function(data,status){
            $("#person_count").text(data.person_count);
            $("#highest_score").text(data.highest_score);
            $("#score_count").text(data.score_count);
        },
        'json'
    );
    return tweet;
};
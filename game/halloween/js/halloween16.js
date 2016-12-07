(function() {
    var g, aa = aa || {},
        ba = this,
        k = function(a) {
            return void 0 !== a },
        ca = function() {},
        da = function() {
            throw Error("a"); },
        ea = function(a) { a.ka = function() {
                return a.jc ? a.jc : a.jc = new a } },
        fa = function(a) {
            var b = typeof a;
            if ("object" == b)
                if (a) {
                    if (a instanceof Array) return "array";
                    if (a instanceof Object) return b;
                    var c = Object.prototype.toString.call(a);
                    if ("[object Window]" == c) return "object";
                    if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
                    if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
                } else return "null";
            else if ("function" == b && "undefined" == typeof a.call) return "object";
            return b
        },
        ga = function(a) {
            return "array" == fa(a) },
        ha = function(a) {
            var b = fa(a);
            return "array" == b || "object" == b && "number" == typeof a.length },
        ia = function(a) {
            return "string" == typeof a },
        ka = function(a) {
            return "number" == typeof a },
        la = function(a, b, c) {
            return a.call.apply(a.bind, arguments) },
        ma = function(a, b, c) {
            if (!a) throw Error();
            if (2 < arguments.length) {
                var d = Array.prototype.slice.call(arguments, 2);
                return function() {
                    var c = Array.prototype.slice.call(arguments);
                    Array.prototype.unshift.apply(c, d);
                    return a.apply(b, c) } }
            return function() {
                return a.apply(b, arguments) } },
        na = function(a, b, c) { na = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? la : ma;
            return na.apply(null, arguments) },
        oa = function(a, b) {
            var c = Array.prototype.slice.call(arguments, 1);
            return function() {
                var b =
                    c.slice();
                b.push.apply(b, arguments);
                return a.apply(this, b)
            }
        },
        pa = Date.now || function() {
            return +new Date },
        qa = function(a, b) { a = a.split(".");
            var c = ba;
            a[0] in c || !c.execScript || c.execScript("var " + a[0]);
            for (var d; a.length && (d = a.shift());) !a.length && k(b) ? c[d] = b : c[d] ? c = c[d] : c = c[d] = {} },
        m = function(a, b) {
            function c() {}
            c.prototype = b.prototype;
            a.Da = b.prototype;
            a.prototype = new c;
            a.jd = function(a, c, f) {
                for (var d = Array(arguments.length - 2), e = 2; e < arguments.length; e++) d[e - 2] = arguments[e];
                return b.prototype[c].apply(a, d) } };
    var ra = String.prototype.trim ? function(a) {
            return a.trim() } : function(a) {
            return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "") },
        sa = function(a, b) {
            return a < b ? -1 : a > b ? 1 : 0 };
    var ta = Array.prototype.indexOf ? function(a, b, c) {
            return Array.prototype.indexOf.call(a, b, c) } : function(a, b, c) { c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
            if (ia(a)) return ia(b) && 1 == b.length ? a.indexOf(b, c) : -1;
            for (; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1 },
        ua = Array.prototype.forEach ? function(a, b, c) { Array.prototype.forEach.call(a, b, c) } : function(a, b, c) {
            for (var d = a.length, e = ia(a) ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a) },
        va = Array.prototype.map ? function(a, b, c) {
            return Array.prototype.map.call(a,
                b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = Array(d), f = ia(a) ? a.split("") : a, h = 0; h < d; h++) h in f && (e[h] = b.call(c, f[h], h, a));
            return e },
        wa = Array.prototype.reduce ? function(a, b, c, d) { d && (b = na(b, d));
            return Array.prototype.reduce.call(a, b, c) } : function(a, b, c, d) {
            var e = c;
            ua(a, function(c, h) { e = b.call(d, e, c, h, a) });
            return e },
        xa = function(a, b) { a: {
                for (var c = a.length, d = ia(a) ? a.split("") : a, e = 0; e < c; e++)
                    if (e in d && b.call(void 0, d[e], e, a)) { b = e;
                        break a }
                b = -1 }
            return 0 > b ? null : ia(a) ? a.charAt(b) : a[b] },
        ya = function(a, b) {
            b = ta(a, b);
            var c;
            (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
            return c
        },
        za = function(a) {
            return Array.prototype.concat.apply(Array.prototype, arguments) },
        Aa = function(a) {
            var b = a.length;
            if (0 < b) {
                for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
                return c }
            return [] },
        Ba = function(a, b) {
            for (var c = 1; c < arguments.length; c++) {
                var d = arguments[c];
                if (ha(d)) {
                    var e = a.length || 0,
                        f = d.length || 0;
                    a.length = e + f;
                    for (var h = 0; h < f; h++) a[e + h] = d[h] } else a.push(d) } };
    var Ca = function(a, b, c) {
            return Math.min(Math.max(a, b), c) },
        n = function(a, b, c) {
            return a + c * (b - a) },
        Da = function(a, b) { a = 180 * Math.atan2(b - 0, a - 0) / Math.PI % 360;
            return 0 > 360 * a ? a + 360 : a },
        Ea = function(a) {
            return wa(arguments, function(a, c) {
                return a + c }, 0) },
        Fa = function(a) {
            return Ea.apply(null, arguments) / arguments.length };
    var Ga = "StopIteration" in ba ? ba.StopIteration : { message: "StopIteration", stack: "" },
        Ha = function() {};
    Ha.prototype.next = function() {
        throw Ga; };
    Ha.prototype.S = function() {
        return this };
    var Ia = function(a, b, c) {
            for (var d in a) b.call(c, a[d], d, a) },
        Ja = function(a) {
            var b = [],
                c = 0,
                d;
            for (d in a) b[c++] = a[d];
            return b },
        Ka = function(a) {
            var b = [],
                c = 0,
                d;
            for (d in a) b[c++] = d;
            return b },
        La = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
        Ma = function(a, b) {
            for (var c, d, e = 1; e < arguments.length; e++) { d = arguments[e];
                for (c in d) a[c] = d[c];
                for (var f = 0; f < La.length; f++) c = La[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]) } },
        p = function(a) {
            var b = arguments.length;
            if (1 == b && ga(arguments[0])) return p.apply(null, arguments[0]);
            if (b % 2) throw Error("b");
            for (var c = {}, d = 0; d < b; d += 2) c[arguments[d]] = arguments[d + 1];
            return c
        };
    var Na = function(a, b) { this.s = {};
        this.o = [];
        this.H = this.w = 0;
        var c = arguments.length;
        if (1 < c) {
            if (c % 2) throw Error("b");
            for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1]) } else if (a) { a instanceof Na ? (c = a.Za(), d = a.Ra()) : (c = Ka(a), d = Ja(a));
            for (var e = 0; e < c.length; e++) this.set(c[e], d[e]) } };
    Na.prototype.Ra = function() { Oa(this);
        for (var a = [], b = 0; b < this.o.length; b++) a.push(this.s[this.o[b]]);
        return a };
    Na.prototype.Za = function() { Oa(this);
        return this.o.concat() };
    var Oa = function(a) {
        if (a.w != a.o.length) {
            for (var b = 0, c = 0; b < a.o.length;) {
                var d = a.o[b];
                Pa(a.s, d) && (a.o[c++] = d);
                b++ }
            a.o.length = c }
        if (a.w != a.o.length) {
            for (var e = {}, c = b = 0; b < a.o.length;) d = a.o[b], Pa(e, d) || (a.o[c++] = d, e[d] = 1), b++;
            a.o.length = c } };
    Na.prototype.get = function(a, b) {
        return Pa(this.s, a) ? this.s[a] : b };
    Na.prototype.set = function(a, b) { Pa(this.s, a) || (this.w++, this.o.push(a), this.H++);
        this.s[a] = b };
    Na.prototype.forEach = function(a, b) {
        for (var c = this.Za(), d = 0; d < c.length; d++) {
            var e = c[d],
                f = this.get(e);
            a.call(b, f, e, this) } };
    Na.prototype.S = function(a) { Oa(this);
        var b = 0,
            c = this.H,
            d = this,
            e = new Ha;
        e.next = function() {
            if (c != d.H) throw Error("c");
            if (b >= d.o.length) throw Ga;
            var e = d.o[b++];
            return a ? e : d.s[e] };
        return e };
    var Pa = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b) };
    var Qa = function(a) {
            if (a.Ra && "function" == typeof a.Ra) return a.Ra();
            if (ia(a)) return a.split("");
            if (ha(a)) {
                for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
                return b }
            return Ja(a) },
        Ra = function(a, b) {
            if (a.forEach && "function" == typeof a.forEach) a.forEach(b, void 0);
            else if (ha(a) || ia(a)) ua(a, b, void 0);
            else {
                var c;
                if (a.Za && "function" == typeof a.Za) c = a.Za();
                else if (a.Ra && "function" == typeof a.Ra) c = void 0;
                else if (ha(a) || ia(a)) { c = [];
                    for (var d = a.length, e = 0; e < d; e++) c.push(e) } else c = Ka(a);
                for (var d = Qa(a), e = d.length, f =
                        0; f < e; f++) b.call(void 0, d[f], c && c[f], a)
            }
        };
    var Sa = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/,
        Ta = function(a, b) {
            if (a) { a = a.split("&");
                for (var c = 0; c < a.length; c++) {
                    var d = a[c].indexOf("="),
                        e, f = null;
                    0 <= d ? (e = a[c].substring(0, d), f = a[c].substring(d + 1)) : e = a[c];
                    b(e, f ? decodeURIComponent(f.replace(/\+/g, " ")) : "") } } };
    var Va = function(a, b) { this.H = this.T = this.w = "";
        this.V = null;
        this.R = this.S = "";
        this.o = !1;
        var c;
        a instanceof Va ? (this.o = k(b) ? b : a.o, Wa(this, a.w), this.T = a.T, this.H = a.H, Xa(this, a.V), this.S = a.S, b = a.s, c = new Ya, c.w = b.w, b.o && (c.o = new Na(b.o), c.s = b.s), Za(this, c), this.R = a.R) : a && (c = String(a).match(Sa)) ? (this.o = !!b, Wa(this, c[1] || "", !0), this.T = $a(c[2] || ""), this.H = $a(c[3] || "", !0), Xa(this, c[4]), this.S = $a(c[5] || "", !0), Za(this, c[6] || "", !0), this.R = $a(c[7] || "")) : (this.o = !!b, this.s = new Ya(null, 0, this.o)) };
    Va.prototype.toString = function() {
        var a = [],
            b = this.w;
        b && a.push(ab(b, bb, !0), ":");
        var c = this.H;
        if (c || "file" == b) a.push("//"), (b = this.T) && a.push(ab(b, bb, !0), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.V, null != c && a.push(":", String(c));
        if (c = this.S) this.H && "/" != c.charAt(0) && a.push("/"), a.push(ab(c, "/" == c.charAt(0) ? cb : db, !0));
        (c = this.s.toString()) && a.push("?", c);
        (c = this.R) && a.push("#", ab(c, eb));
        return a.join("") };
    var Wa = function(a, b, c) { a.w = c ? $a(b, !0) : b;
            a.w && (a.w = a.w.replace(/:$/, "")) },
        Xa = function(a, b) {
            if (b) { b = Number(b);
                if (isNaN(b) || 0 > b) throw Error("d`" + b);
                a.V = b } else a.V = null },
        Za = function(a, b, c) { b instanceof Ya ? (a.s = b, fb(a.s, a.o)) : (c || (b = ab(b, gb)), a.s = new Ya(b, 0, a.o)) },
        $a = function(a, b) {
            return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : "" },
        ab = function(a, b, c) {
            return ia(a) ? (a = encodeURI(a).replace(b, ib), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null },
        ib = function(a) {
            a = a.charCodeAt(0);
            return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
        },
        bb = /[#\/\?@]/g,
        db = /[\#\?:]/g,
        cb = /[\#\?]/g,
        gb = /[\#\?@]/g,
        eb = /#/g,
        Ya = function(a, b, c) { this.s = this.o = null;
            this.w = a || null;
            this.H = !!c },
        kb = function(a) { a.o || (a.o = new Na, a.s = 0, a.w && Ta(a.w, function(b, c) { jb(a, decodeURIComponent(b.replace(/\+/g, " ")), c) })) },
        jb = function(a, b, c) { kb(a);
            a.w = null;
            b = lb(a, b);
            var d = a.o.get(b);
            d || a.o.set(b, d = []);
            d.push(c);
            a.s += 1 },
        mb = function(a, b) {
            kb(a);
            b = lb(a, b);
            Pa(a.o.s, b) && (a.w = null, a.s -= a.o.get(b).length, a = a.o, Pa(a.s, b) && (delete a.s[b],
                a.w--, a.H++, a.o.length > 2 * a.w && Oa(a)))
        },
        nb = function(a, b) { kb(a);
            b = lb(a, b);
            return Pa(a.o.s, b) };
    g = Ya.prototype;
    g.Za = function() { kb(this);
        for (var a = this.o.Ra(), b = this.o.Za(), c = [], d = 0; d < b.length; d++)
            for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
        return c };
    g.Ra = function(a) { kb(this);
        var b = [];
        if (ia(a)) nb(this, a) && (b = za(b, this.o.get(lb(this, a))));
        else { a = this.o.Ra();
            for (var c = 0; c < a.length; c++) b = za(b, a[c]) }
        return b };
    g.set = function(a, b) { kb(this);
        this.w = null;
        a = lb(this, a);
        nb(this, a) && (this.s -= this.o.get(a).length);
        this.o.set(a, [b]);
        this.s += 1;
        return this };
    g.get = function(a, b) { a = a ? this.Ra(a) : [];
        return 0 < a.length ? String(a[0]) : b };
    g.toString = function() {
        if (this.w) return this.w;
        if (!this.o) return "";
        for (var a = [], b = this.o.Za(), c = 0; c < b.length; c++)
            for (var d = b[c], e = encodeURIComponent(String(d)), d = this.Ra(d), f = 0; f < d.length; f++) {
                var h = e; "" !== d[f] && (h += "=" + encodeURIComponent(String(d[f])));
                a.push(h) }
        return this.w = a.join("&") };
    var lb = function(a, b) { b = String(b);
            a.H && (b = b.toLowerCase());
            return b },
        fb = function(a, b) { b && !a.H && (kb(a), a.w = null, a.o.forEach(function(a, b) {
                var c = b.toLowerCase();
                b != c && (mb(this, b), mb(this, c), 0 < a.length && (this.w = null, this.o.set(lb(this, c), Aa(a)), this.s += a.length)) }, a));
            a.H = b };
    var qb = function(a) {
            var b = new Image,
                c = ob,
                d = "";
            b.onerror = b.onload = b.onabort = function() { delete pb[c] };
            pb[c] = b; - 1 != a.search("&ei=") || (d = "&ei=");
            // a = "/gen_204?atyp=i&ct=doodle&cad=" + a + d + "&zx=" + pa(); /^http:/i.test(a) && "https:" == window.location.protocol ? delete pb[c] : (b.src = a, ob = c + 1)
             },
        pb = [],
        ob = 0;
    var rb, sb = navigator.userAgent,
        tb = window.location.href,
        ub = -1 != sb.indexOf("iPad") || -1 != sb.indexOf("iPhone") || -1 != sb.indexOf("iPod"),
        vb = -1 != sb.toLowerCase().indexOf("gsa"),
        wb = ub && vb,
        xb = vb && !ub,
        yb = ub || -1 != sb.indexOf("Android") || -1 != sb.indexOf("Mobile") || -1 != sb.indexOf("Silk"),
        zb = 0 <= sb.indexOf("MSIE"),
        Ab = -1 != tb.indexOf("/logos/") && -1 != tb.indexOf(".html"),
        Bb = function() {
            return 0 <= tb.indexOf("fpdoodle=1") && !!document.getElementById("fpdoodle") },
        Cb = function(a, b) {
            for (var c = 1; c < arguments.length; c += 2) {
                var d =
                    arguments[c],
                    e = arguments[c + 1],
                    f = a.style;
                f && d in f ? f[d] = e : d in a ? a[d] = e : zb && f && "opacity" == d && (a.zoom = 1, d = (f.filter || "").replace(/alpha\([^)]*\)/, ""), isNaN(parseFloat(e)) || (d += "alpha(opacity=" + 100 * e + ")"), f.filter = d)
            }
        },
        Db = function() {
            var a = ["Itim"];
            window.WebFontConfig || (qa("WebFontConfig.google.families", a), a = document.createElement("script"), a.src = ("https:" == document.location.protocol ? "https" : "http") + "://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js", a.type = "text/javascript", a.async = "true", (document.getElementById("xjsc") ||
                document.body).appendChild(a))
        },
        Eb = ["Moz", "ms", "O", "webkit"],
        Fb = function(a, b, c) {
            for (var d = 0, e; e = Eb[d++];) a.style[e + b] = c;
            a.style[b.charAt(0).toLowerCase() + b.substr(1)] = c },
        Gb = ["", "moz", "ms", "o", "webkit"],
        Hb = function(a, b) {
            if (!a) return null;
            for (var c = 0; c < Gb.length; c++) {
                var d = Gb[c],
                    e = b;
                0 < d.length && (e = b.charAt(0).toUpperCase() + b.substr(1));
                d += e;
                if ("undefined" != typeof a[d]) return d }
            return null },
        Ib = function() {
            var a = google.doodle ? google.doodle.url : "";
            if (a)
                if (google.nav && google.nav.go) {
                    var b = a;
                    if (0 == a.indexOf("/search")) {
                        b =
                            new Va(window.location);
                        b.S = "/search";
                        for (var a = (a instanceof Va ? new Va(a) : new Va(a, void 0)).s, c = a.Za(), d = 0; d < c.length; d++) {
                            var e = c[d],
                                f = b,
                                h = e,
                                e = a.get(e);
                            f.s.set(h, e) }
                        b = b.toString()
                    }
                    google.nav.go(b)
                } else window.parent ? window.parent.location.assign(a) : window.location.assign(a)
        },
        Jb = function(a, b) {
            var c = window.google ? window.google.doodle : null;
            return c && void 0 != c[a] ? c[a] : b },
        Kb = Jb("alt", ""),
        Lb = Jb("hl", "en"),
        q = function(a) {
            var b;
            if (!(b = Jb("msgs", {})[a])) {
                var c = Jb("alltranslations", {});
                if (c)
                    if (b = c.messages,
                        c = c.translations, b && c) {
                        for (var d = -1, e = 0; e < b.length; e++)
                            if (b[e] == a) { d = e;
                                break }
                        b = -1 == d ? "" : (c[Lb] || c.en).ALL[d] } else b = "";
                else b = ""
            }
            return b || a
        },
        Mb = function() {
            for (var a = ["requestAnimationFrame", "mozRequestAnimationFrame", "msRequestAnimationFrame", "oRequestAnimationFrame", "webkitRequestAnimationFrame"], b = 0; b < a.length; b++) {
                var c = window[a[b]];
                if (c) return function(a, b, d) {
                    return c(function(b) {
                        return a.call(d, b) }, b) } }
            var d = 0,
                e = 33,
                f = 50;
            return function(a, b, c) {
                b && 0 > --f && (1.25 < b / e ? (d = 0, e = Math.min(66, ++e)) : 10 <
                    ++d && (d = 0, e = Math.max(17, --e)));
                window.setTimeout(function(b) { a.call(c, b) }, e)
            }
        },
        Nb = function(a, b, c) { Nb = Mb();
            return Nb(a, b, c) },
        Ob = function(a) { a += "px";
            var b = document.getElementById("lga");
            b && Cb(b, "marginBottom", a);
            document.getElementById("fkbx") || ((b = document.getElementById("tsf") || document.getElementById("gbq2")) && Cb(b, "marginTop", a), a = document.createEvent("UIEvents"), a.initUIEvent("resize", !1, !1, window, 0), window.dispatchEvent(a)) },
        Pb = function(a) {
            if (window.google && window.google.log) {
                var b;
                rb || (b = document.getElementById("hplogoved")) &&
                    (rb = b.getAttribute("data-ved"));
                (b = rb) && (a += "&ved=" + b);
                window.google.log("doodle", a)
            } else qb(a)
        },
        Rb = function(a) {
            for (var b = Qb, c = {}, d = 0, e = b.length; d < e; d++) c[b[d]] = a[d];
            return c };
    var r, Sb = { name: "desktopHomepage", Pa: !0, Qa: !0, Sa: !1, Ta: !1, Ua: !1, Wa: !1, Xa: !1, Va: !1 },
        Tb = { name: "tabletHomepage", Pa: !0, Qa: !0, Sa: !1, Ta: !1, Ua: !1, Wa: !1, Xa: !1, Va: !0 },
        Ub = { name: "igsa", Pa: !0, Qa: !1, Sa: !0, Ta: !0, Ua: !0, Wa: !0, Xa: !1, Va: !1 },
        Vb = { name: "agsa", Pa: !0, Qa: !1, Sa: !1, Ta: !0, Ua: !0, Wa: !0, Xa: !1, Va: !1 },
        Wb = { name: "allo", Pa: !0, Qa: !1, Sa: !1, Ta: !0, Ua: !1, Wa: !1, Xa: !0, Va: !1 },
        Xb = { name: "desktopChromeNTP", Pa: !1, Qa: !0, Sa: !1, Ta: !1, Ua: !1, Wa: !1, Xa: !1, Va: !1 },
        Yb = { name: "fpdoodle", Pa: !0, Qa: !1, Sa: !1, Ta: !0, Ua: !0, Wa: !0, Xa: !1, Va: !1 },
        Zb = { name: "slashdoodlesDesktop", Pa: !0, Qa: !1, Sa: !1, Ta: !0, Ua: !1, Wa: !1, Xa: !1, Va: !1 },
        $b = { name: "slashdoodlesMobile", Pa: !0, Qa: !1, Sa: !1, Ta: !0, Ua: !0, Wa: !0, Xa: !1, Va: !1 },
        ac = { name: "fallbackMobile", Pa: !0, Qa: !1, Sa: !1, Ta: !0, Ua: !0, Wa: !0, Xa: !1, Va: !1 },
        bc = { name: "fallbackDesktop", Pa: !0, Qa: !1, Sa: !1, Ta: !1, Ua: !1, Wa: !1, Xa: !1, Va: !1 };
    var dc = function() { cc();
            return r.Pa },
        ec = function() { cc();
            return r.Qa },
        cc = function() { null == r && (wb ? r = Ub : xb ? r = Vb : -1 != sb.indexOf("Gbot") ? r = Wb : document.getElementById("fkbx") && !yb ? r = Xb : Bb() ? r = Yb : document.querySelector("body.hp") ? r = yb ? Tb : Sb : Ab ? r = yb ? $b : Zb : (window.console && window.console.log("Error: can't determine environment"), r = yb ? ac : bc), window.console && window.console.log("doodle.environment is " + r.name)) };
    var fc = function() { this.V = this.V;
        this.R = this.R };
    fc.prototype.V = !1;
    fc.prototype.dc = function() { this.V || (this.V = !0, this.s()) };
    var gc = function(a, b) { a.V ? k(void 0) ? b.call(void 0) : b() : (a.R || (a.R = []), a.R.push(k(void 0) ? na(b, void 0) : b)) };
    fc.prototype.s = function() {
        if (this.R)
            for (; this.R.length;) this.R.shift()() };
    var hc = function(a) { a && "function" == typeof a.dc && a.dc() };
    var ic = function(a) { ic[" "](a);
        return a };
    ic[" "] = ca;
    var kc = function(a, b) {
        var c = jc;
        return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a) };
    var lc;
    a: {
        var mc = ba.navigator;
        if (mc) {
            var nc = mc.userAgent;
            if (nc) { lc = nc;
                break a } }
        lc = "" }
    var oc = function(a) {
        return -1 != lc.indexOf(a) };
    var pc = oc("Opera"),
        qc = oc("Trident") || oc("MSIE"),
        rc = oc("Edge"),
        sc = oc("Gecko") && !(-1 != lc.toLowerCase().indexOf("webkit") && !oc("Edge")) && !(oc("Trident") || oc("MSIE")) && !oc("Edge"),
        tc = -1 != lc.toLowerCase().indexOf("webkit") && !oc("Edge"),
        uc = function() {
            var a = ba.document;
            return a ? a.documentMode : void 0 },
        vc;
    a: {
        var wc = "",
            xc = function() {
                var a = lc;
                if (sc) return /rv\:([^\);]+)(\)|;)/.exec(a);
                if (rc) return /Edge\/([\d\.]+)/.exec(a);
                if (qc) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (tc) return /WebKit\/(\S+)/.exec(a);
                if (pc) return /(?:Version)[ \/]?(\S+)/.exec(a) }();xc && (wc = xc ? xc[1] : "");
        if (qc) {
            var yc = uc();
            if (null != yc && yc > parseFloat(wc)) { vc = String(yc);
                break a } }
        vc = wc }
    var zc = vc,
        jc = {},
        Ac = function(a) {
            return kc(a, function() {
                for (var b = 0, c = ra(String(zc)).split("."), d = ra(String(a)).split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
                    var h = c[f] || "",
                        l = d[f] || "";
                    do { h = /(\d*)(\D*)(.*)/.exec(h) || ["", "", "", ""];
                        l = /(\d*)(\D*)(.*)/.exec(l) || ["", "", "", ""];
                        if (0 == h[0].length && 0 == l[0].length) break;
                        b = sa(0 == h[1].length ? 0 : parseInt(h[1], 10), 0 == l[1].length ? 0 : parseInt(l[1], 10)) || sa(0 == h[2].length, 0 == l[2].length) || sa(h[2], l[2]);
                        h = h[3];
                        l = l[3] } while (0 == b) }
                return 0 <= b }) },
        Bc;
    var Cc = ba.document;
    Bc = Cc && qc ? uc() || ("CSS1Compat" == Cc.compatMode ? parseInt(zc, 10) : 5) : void 0;
    var Dc = !qc || 9 <= Number(Bc),
        Ec = qc && !Ac("9");
    !tc || Ac("528");
    sc && Ac("1.9b") || qc && Ac("8") || pc && Ac("9.5") || tc && Ac("528");
    sc && !Ac("8") || qc && Ac("9");
    var Fc = function(a, b) { this.type = a;
        this.s = this.H = b;
        this.w = !1;
        this.nc = !0 };
    Fc.prototype.stopPropagation = function() { this.w = !0 };
    Fc.prototype.preventDefault = function() { this.nc = !1 };
    var Gc = function(a, b) {
        Fc.call(this, a ? a.type : "");
        this.s = this.H = null;
        this.S = this.clientY = this.clientX = 0;
        this.o = this.state = null;
        if (a) {
            this.type = a.type;
            var c = a.changedTouches ? a.changedTouches[0] : null;
            this.H = a.target || a.srcElement;
            this.s = b;
            if ((b = a.relatedTarget) && sc) try { ic(b.nodeName) } catch (d) {}
            null === c ? (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY) : (this.clientX = void 0 !== c.clientX ? c.clientX : c.pageX, this.clientY = void 0 !== c.clientY ? c.clientY : c.pageY);
            this.S = a.keyCode || 0;
            this.state = a.state;
            this.o = a;
            a.defaultPrevented && this.preventDefault()
        }
    };
    m(Gc, Fc);
    Gc.prototype.stopPropagation = function() { Gc.Da.stopPropagation.call(this);
        this.o.stopPropagation ? this.o.stopPropagation() : this.o.cancelBubble = !0 };
    Gc.prototype.preventDefault = function() { Gc.Da.preventDefault.call(this);
        var a = this.o;
        if (a.preventDefault) a.preventDefault();
        else if (a.returnValue = !1, Ec) try {
            if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1 } catch (b) {} };
    var Hc = "closure_listenable_" + (1E6 * Math.random() | 0),
        Ic = function(a) {
            return !(!a || !a[Hc]) },
        Jc = 0;
    var Kc = function(a, b, c, d, e) { this.listener = a;
            this.o = null;
            this.src = b;
            this.type = c;
            this.Ib = !!d;
            this.Jb = e;
            this.hc = ++Jc;
            this.wb = this.Hb = !1 },
        Lc = function(a) { a.wb = !0;
            a.listener = null;
            a.o = null;
            a.src = null;
            a.Jb = null };
    var Mc = function(a) { this.src = a;
            this.o = {};
            this.s = 0 },
        Oc = function(a, b, c, d, e, f) {
            var h = b.toString();
            b = a.o[h];
            b || (b = a.o[h] = [], a.s++);
            var l = Nc(b, c, e, f); - 1 < l ? (a = b[l], d || (a.Hb = !1)) : (a = new Kc(c, a.src, h, !!e, f), a.Hb = d, b.push(a));
            return a },
        Pc = function(a, b) {
            var c = b.type;
            if (!(c in a.o)) return !1;
            var d = ya(a.o[c], b);
            d && (Lc(b), 0 == a.o[c].length && (delete a.o[c], a.s--));
            return d },
        Qc = function(a, b, c, d, e) { a = a.o[b.toString()];
            b = -1;
            a && (b = Nc(a, c, d, e));
            return -1 < b ? a[b] : null },
        Nc = function(a, b, c, d) {
            for (var e = 0; e < a.length; ++e) {
                var f =
                    a[e];
                if (!f.wb && f.listener == b && f.Ib == !!c && f.Jb == d) return e
            }
            return -1
        };
    var Rc = "closure_lm_" + (1E6 * Math.random() | 0),
        Sc = {},
        Tc = 0,
        Uc = function(a, b, c, d, e) {
            if (ga(b)) {
                for (var f = 0; f < b.length; f++) Uc(a, b[f], c, d, e);
                return null }
            c = Vc(c);
            return Ic(a) ? a.listen(b, c, d, e) : Wc(a, b, c, !1, d, e) },
        Wc = function(a, b, c, d, e, f) {
            if (!b) throw Error("f");
            var h = !!e,
                l = Xc(a);
            l || (a[Rc] = l = new Mc(a));
            c = Oc(l, b, c, d, e, f);
            if (c.o) return c;
            d = Yc();
            c.o = d;
            d.src = a;
            d.listener = c;
            if (a.addEventListener) a.addEventListener(b.toString(), d, h);
            else if (a.attachEvent) a.attachEvent(Zc(b.toString()), d);
            else throw Error("g");
            Tc++;
            return c },
        Yc = function() {
            var a = $c,
                b = Dc ? function(c) {
                    return a.call(b.src, b.listener, c) } : function(c) { c = a.call(b.src, b.listener, c);
                    if (!c) return c };
            return b },
        ad = function(a, b, c, d, e) {
            if (ga(b))
                for (var f = 0; f < b.length; f++) ad(a, b[f], c, d, e);
            else c = Vc(c), Ic(a) ? Oc(a.w, String(b), c, !0, d, e) : Wc(a, b, c, !0, d, e) },
        bd = function(a, b, c, d, e) {
            if (ga(b))
                for (var f = 0; f < b.length; f++) bd(a, b[f], c, d, e);
            else c = Vc(c), Ic(a) ? a.unlisten(b, c, d, e) : a && (a = Xc(a)) && (b = Qc(a, b, c, !!d, e)) && cd(b) },
        cd = function(a) {
            if (ka(a) || !a || a.wb) return !1;
            var b = a.src;
            if (Ic(b)) return Pc(b.w,
                a);
            var c = a.type,
                d = a.o;
            b.removeEventListener ? b.removeEventListener(c, d, a.Ib) : b.detachEvent && b.detachEvent(Zc(c), d);
            Tc--;
            (c = Xc(b)) ? (Pc(c, a), 0 == c.s && (c.src = null, b[Rc] = null)) : Lc(a);
            return !0
        },
        Zc = function(a) {
            return a in Sc ? Sc[a] : Sc[a] = "on" + a },
        ed = function(a, b, c, d) {
            var e = !0;
            if (a = Xc(a))
                if (b = a.o[b.toString()])
                    for (b = b.concat(), a = 0; a < b.length; a++) {
                        var f = b[a];
                        f && f.Ib == c && !f.wb && (f = dd(f, d), e = e && !1 !== f) }
                return e },
        dd = function(a, b) {
            var c = a.listener,
                d = a.Jb || a.src;
            a.Hb && cd(a);
            return c.call(d, b) },
        $c = function(a, b) {
            if (a.wb) return !0;
            if (!Dc) {
                if (!b) a: { b = ["window", "event"];
                    for (var c = ba, d; d = b.shift();)
                        if (null != c[d]) c = c[d];
                        else { b = null;
                            break a }
                    b = c }
                d = b;
                b = new Gc(d, this);
                c = !0;
                if (!(0 > d.keyCode || void 0 != d.returnValue)) { a: {
                        var e = !1;
                        if (0 == d.keyCode) try { d.keyCode = -1;
                            break a } catch (h) { e = !0 }
                        if (e || void 0 == d.returnValue) d.returnValue = !0 }
                    d = [];
                    for (e = b.s; e; e = e.parentNode) d.push(e);a = a.type;
                    for (e = d.length - 1; !b.w && 0 <= e; e--) { b.s = d[e];
                        var f = ed(d[e], a, !0, b),
                            c = c && f }
                    for (e = 0; !b.w && e < d.length; e++) b.s = d[e], f = ed(d[e], a, !1, b), c = c && f }
                return c }
            return dd(a, new Gc(b,
                this))
        },
        Xc = function(a) { a = a[Rc];
            return a instanceof Mc ? a : null },
        fd = "__closure_events_fn_" + (1E9 * Math.random() >>> 0),
        Vc = function(a) {
            if ("function" == fa(a)) return a;
            a[fd] || (a[fd] = function(b) {
                return a.handleEvent(b) });
            return a[fd] };
    var gd = function(a) { fc.call(this);
        this.$ = a;
        this.o = {} };
    m(gd, fc);
    var hd = [];
    gd.prototype.listen = function(a, b, c, d) { ga(b) || (b && (hd[0] = b.toString()), b = hd);
        for (var e = 0; e < b.length; e++) {
            var f = Uc(a, b[e], c || this.handleEvent, d || !1, this.$ || this);
            if (!f) break;
            this.o[f.hc] = f }
        return this };
    gd.prototype.unlisten = function(a, b, c, d, e) {
        if (ga(b))
            for (var f = 0; f < b.length; f++) this.unlisten(a, b[f], c, d, e);
        else c = c || this.handleEvent, e = e || this.$ || this, c = Vc(c), d = !!d, b = Ic(a) ? Qc(a.w, String(b), c, d, e) : a ? (a = Xc(a)) ? Qc(a, b, c, d, e) : null : null, b && (cd(b), delete this.o[b.hc]);
        return this };
    var id = function(a) { Ia(a.o, function(a, c) { this.o.hasOwnProperty(c) && cd(a) }, a);
        a.o = {} };
    gd.prototype.s = function() { gd.Da.s.call(this);
        id(this) };
    gd.prototype.handleEvent = function() {
        throw Error("h"); };
    var jd = function() {};
    jd.prototype.contains = da;
    jd.prototype.ya = da;
    var nd = function(a, b, c) { fc.call(this);
        this.ha = a;
        this.ra = b;
        this.wa = c;
        this.U = pa();
        this.va = Hb(document, "hidden");
        this.$ = (this.W = Hb(document, "visibilityState")) ? this.W.replace(/state$/i, "change").toLowerCase() : null;
        this.T = kd(this);
        this.w = !1;
        this.H = this.T;
        ld(this);
        md(this) };
    m(nd, fc);
    var ld = function(a) { xb ? od(a, function() { pd(a) }) : pd(a) },
        pd = function(a) { a.o = function() { a.T = kd(a);
                a.T || (a.U = pa(), a.w = !1);
                qd(a) };
            var b = window.agsa_ext;
            b && b.registerPageVisibilityListener ? (google.doodle || (google.doodle = {}), google.doodle.pvc = function() { a.o && a.o() }, b.registerPageVisibilityListener("google.doodle.pvc();")) : a.$ && document.addEventListener(a.$, a.o, !1) },
        od = function(a, b) { window.agsa_ext ? b() : a.ma = window.setTimeout(function() { ld(a) }, 100) };
    nd.prototype.s = function() { window.clearTimeout(this.S);
        window.clearTimeout(this.ma);
        this.o && (window.agsa_ext && window.agsa_ext.registerPageVisibilityListener ? this.o = null : this.$ && document.removeEventListener && document.removeEventListener(this.$, this.o, !1));
        nd.Da.s.call(this) };
    var kd = function(a) {
            if (window.agsa_ext && window.agsa_ext.getPageVisibility && "hidden" == window.agsa_ext.getPageVisibility()) return !0;
            var b = document[a.W];
            return document[a.va] || "hidden" == b },
        qd = function(a) {
            var b = a.T || a.w;
            a.H && !b ? (a.H = !1, a.wa(), md(a)) : !a.H && b && (a.H = !0, a.ra()) },
        md = function(a) { a.S && window.clearTimeout(a.S);
            var b = Math.max(100, a.ha - rd(a));
            a.S = window.setTimeout(function() { a.S = null;
                a.w = rd(a) >= a.ha;
                a.w || md(a);
                qd(a) }, b) },
        rd = function(a) {
            return pa() - a.U };
    var sd = function(a, b, c) { this.H = a;
            this.ha = b;
            this.U = c || null;
            this.o = [];
            this.s = null;
            this.V = this.R = 0;
            this.ra = this.$ = !1;
            this.W = [];
            this.T = this.H.width / this.H.clientWidth;
            this.S = this.H.height / this.H.clientHeight;
            this.va = [this.H];
            this.ma = !1 },
        td = function() {
            var a = new jd;
            a.contains = function() {
                return !0 };
            return a }(),
        ud = function(a, b) { a.T = a.H.width / a.H.clientWidth;
            a.S = a.H.height / a.H.clientHeight;
            a.ma = b },
        xd = function(a, b) {
            for (var c = a.o.length - 1; 0 <= c; c--) a.o[c].o === b && a.o.splice(c, 1);
            a.s && b === a.s.o && (a.s = null, vd(a));
            a.w && b === a.w.o && (a.w = null);
            wd(a, "areamove", a.R, a.V)
        },
        yd = function(a, b) {
            for (var c = null, d = 0; d < a.o.length; d++) a.o[d].o === b && (c = a.o[d]);
            c && (ya(a.o, c), a.o.unshift(c)) };
    sd.prototype.handleEvent = function(a) {
        var b, c;
        c = (c = (c = a.o) || window.event) ? (b = c.targetTouches && c.targetTouches[0] || c.changedTouches && c.changedTouches[0]) && void 0 !== b.pageX ? [b.pageX, b.pageY] : void 0 !== c.clientX ? [c.clientX + ("rtl" == document.dir ? -1 : 1) * (document.body.scrollLeft || document.documentElement.scrollLeft || 0), c.clientY + (document.body.scrollTop || document.documentElement.scrollTop || 0)] : void 0 !== c.pageX ? [c.pageX, c.pageY] : [0, 0] : [0, 0];
        b = this.H;
        var d = 0,
            e = 0;
        if (b) {
            do d += b.offsetLeft, e += b.offsetTop; while (b =
                b.offsetParent)
        }
        b = [d, e];
        b = [c[0] - b[0], c[1] - b[1]];
        d = b[0] * this.T;
        c = b[1] * this.S;
        this.ma && (d = b[1] * this.S, c = 0 - b[0] * this.T);
        b = d;
        this.U && (d = this.U, d.U = pa(), d.w = !1, qd(d));
        this.R = b;
        this.V = c;
        c = a.type;
        this.ra && 0 == c.indexOf("mouse") || (b = { touchstart: "mousedown", touchend: "mouseup", touchmove: "mousemove" }, c in b && (this.ra = !0, c = b[c]), "mousedown" == c && (a.preventDefault(), this.ha && this.ha.focus()), wd(this, c, this.R, this.V))
    };
    var wd = function(a, b, c, d) {
            if (!a.$ && "mousedown" == b) { a.$ = !0;
                for (var e = 0; e < a.W.length; e++) a.W[e]() }
            if ("mousedown" == b) {
                if (!a.w)
                    for (e = 0; e < a.o.length; e++) {
                        var f = a.o[e];
                        if (f.o.contains(c, d)) { a.w = f;
                            f.s("mousedown", c, d);
                            break } } } else if ("mouseup" == b) a.w ? (a.w.s("mouseup", c, d), a.w = null) : a.s && a.s.s("mouseup", c, d);
            else if ("mousemove" == b || "areamove" == b) {
                for (var h = null, e = 0; e < a.o.length; e++)
                    if (f = a.o[e], f.o.contains(c, d)) { h = f;
                        break }
                a.s != h && (a.s && a.s.s("mouseout", c, d), h && h.s("mouseover", c, d), a.s = h);
                if ("mousemove" == b)
                    for (a.w &&
                        a.w.s("mousemove", c, d), e = 0; e < a.o.length; e++) f = a.o[e], f != a.w && f.o.contains(c, d) && f.s("mousemove", c, d)
            } else "mouseout" == b && (a.s && a.s.s("mouseout", c, d), a.w = null, a.s = null);
            vd(a)
        },
        vd = function(a) {
            for (var b = a.s && a.s.o != td ? "pointer" : "default", c = 0, d; d = a.va[c]; c++) Cb(d, "cursor", b) },
        zd = function(a, b) { this.o = a;
            this.s = b };
    var Ad = function() { this.$ = this.U = this.W = this.o = this.H = null;
        this.ha = !1;
        this.R = null;
        this.V = this.s = !1;
        this.w = !0;
        this.T = this.S = !1 };
    ea(Ad);
    Ad.prototype.reset = function() { this.$ = this.U = this.W = this.o = this.H = null;
        this.ha = !1;
        this.R = null;
        this.V = this.s = !1;
        this.w = !0;
        this.T = this.S = !1 };
    cc();
    var Bd = r.Ua,
        Cd = Hb(document, "fullscreenElement"),
        Dd = document[Hb(document, "exitFullscreen")],
        Gd = function(a, b, c, d) {
            var e = Ed;
            e.o = a;
            e.H = b;
            e.W = d;
            e.R = a[Hb(a, "requestFullscreen")];
            a = document[Hb(document, "fullscreenEnabled")] && k(e.R) && k(Dd);
            cc();
            e.s = r.Wa && a;
            cc();
            e.V = r.Ta;
            e.w = !0;
            if (e.s || e.V) Cb(document.body, "margin", "0"), Cb(e.o, "overflow", "visible", "width", "100%", "height", "100%"), document.body.scrollLeft = 0, c.listen(window, "scroll", Fd) },
        Hd = function() {
            var a = Ed;
            return function(b) { "mousedown" == b && (a.T = !0) } };
    Ad.prototype.update = function() {
        if (this.s || this.V) {
            var a = null != document[Cd],
                b = window.innerWidth,
                c = window.innerHeight;
            0 == window.scrollX && 0 == window.scrollY || window.scrollTo(0, 0);
            if (b != this.U || c != this.$ || a != this.ha || this.w) {
                this.S = b < c;
                for (var d = !1, e = 0; e < this.H.length; ++e) {
                    var f = this.H[e],
                        h = f.width,
                        l = f.height;
                    Bd && 0 == e && (d = h < l != this.S);
                    var t = d ? Math.min(b / l, c / h) : Math.min(b / h, c / l),
                        h = t * h,
                        l = t * l,
                        W, L;
                    d ? (t = (b - l) / 2 + l, W = (c - h) / 2, L = "rotate(90deg)") : (t = (b - h) / 2, W = (c - l) / 2, L = "");
                    Fb(f, "TransformOrigin", "0 0");
                    Fb(f, "Transform",
                        L);
                    Cb(f, "position", "absolute", "width", h + "px", "height", l + "px", "left", t + "px", "top", W + "px")
                }
                document.body.clientWidth > b && 0 < b && Cb(document.body, "width", b + "px");
                Cb(this.o, "height", "100%", "width", "100%");
                this.W(this.S && d);
                this.U = b;
                this.$ = c;
                this.ha = a;
                this.w = !1
            }
        }
    };
    var Fd = function(a) { a.preventDefault();
        a.stopPropagation();
        return !1 };
    var u = function(a, b) { this.x = k(a) ? a : 0;
            this.y = k(b) ? b : 0 },
        Id = function(a) {
            return Math.sqrt(a.x * a.x + a.y * a.y) },
        Jd = function(a, b) {
            return new u(a.x - b.x, a.y - b.y) };
    u.prototype.ceil = function() { this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this };
    u.prototype.floor = function() { this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this };
    u.prototype.round = function() { this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this };
    u.prototype.scale = function(a, b) { b = ka(b) ? b : a;
        this.x *= a;
        this.y *= b;
        return this };
    var Kd = function(a) { this.o = a };
    m(Kd, jd);
    var Ld = function(a, b, c, d) {
        return new Kd([a, b, a + c, b, a + c, b + d, a, b + d]) };
    Kd.prototype.contains = function(a, b) {
        var c = this.o;
        if (6 > c.length) return !1;
        for (var d = !1, e = 0, f = c.length - 2; e < c.length; f = e, e += 2) {
            var h = c[e],
                l = c[e + 1],
                t = c[f],
                f = c[f + 1];
            a < h != a < t && b > l + (a - h) * (f - l) / (t - h) && (d = !d) }
        return d };
    Kd.prototype.ya = function(a) { a.beginPath();
        for (var b = 0; b < this.o.length; b += 2) a.lineTo(this.o[b], this.o[b + 1]);
        a.lineTo(this.o[0], this.o[1]);
        a.fill();
        a.stroke() };
    var Ed = Ad.ka(),
        Nd = function(a, b, c, d) {
            fc.call(this);
            this.U = b;
            this.va = b.width;
            this.H = new gd(this);
            gc(this, oa(hc, this.H));
            var e = this;
            this.W = new nd(d || 6E4, function() { e.ha() }, function() { e.wa() });
            gc(this, oa(hc, this.W));
            this.o = new sd(b, a, this.W);
            this.H.listen(a, "mousedown mouseup mousemove mouseout touchstart touchend touchmove".split(" "), function(a) { e.o.handleEvent(a) }, !0);
            Gd(a, k(c) ? [b].concat(c) : [b], this.H, function(a) { ud(e.o, a) });
            this.H.listen(b, "touchstart", function() {
                var a = Ed;
                a.s && (a.T ? (Dd.call(document),
                    a.T = !1) : a.R.call(a.o))
            });
            this.ta = this.ra();
            this.w = this.ma();
            this.T = 1;
            a = this.w[3];
            this.$ = b.width - a;
            this.S = Ld(this.$, 0, a, this.w[4]);
            Md(this, this.S, Hd())
        };
    m(Nd, fc);
    Nd.prototype.s = function() { Ed.reset();
        Nd.Da.s.call(this) };
    Nd.prototype.update = function() { Ed.update();
        if (null != document[Cd] && this.U.width != this.va) { this.va = this.U.width;
            k(window.innerWidth) && (this.T = 30 * this.U.width / (window.innerWidth > window.innerHeight ? window.innerWidth : window.innerHeight) / this.w[3]);
            var a = this.T * this.w[3],
                b = this.T * this.w[4];
            this.$ = this.U.width - a;
            xd(this.o, this.S);
            this.S = Ld(this.$, 0, a, b);
            Md(this, this.S, Hd()) } };
    var Md = function(a, b, c) { a.o.o.push(new zd(b, c)) };
    Nd.prototype.ma = da;
    Nd.prototype.ra = da;
    Nd.prototype.ha = da;
    Nd.prototype.wa = da;
    var Pd = function() { this.W = !0;
        this.U = !1;
        this.H = [];
        this.$ = !1;
        this.o = this.S = this.w = 0;
        this.T = Od };
    m(Pd, fc);
    ea(Pd);
    var Od = 1E3 / 60,
        Rd = function(a) { this.s = Qd;
            this.H = a;
            this.o = Pd.ka().w;
            this.w = 0 },
        Sd = function(a) {
            var b = a.H(a.w);
            a.w++;
            a.o = Pd.ka().w + a.s / Pd.ka().T;
            return b },
        Ud = function(a, b) { b = new Rd(b);
            Td(a, b) },
        Td = function(a, b) { a.H.push(b);
            a.$ = !0 },
        Wd = function(a) {
            if (a.W) a.U = !1;
            else { a.U = !0;
                Vd(a);
                a.$ && (a.H.sort(function(a, b) {
                    return a.o == b.o ? b.s - a.s : a.o - b.o }), a.$ = !1);
                for (var b = 0, c = 0, d; d = a.H[c]; c++)
                    if (d.o <= a.w) Sd(d) && Td(a, d), b++;
                    else break;
                a.H.splice(0, b);
                a.w++;
                Nb(function() { Wd(a) }) } },
        Vd = function(a) {
            var b = (new Date).getTime();
            30 < a.w && a.S && (b - a.S >= 1.05 * a.T ? a.o++ : a.o >>= 1, 20 < a.o && (a.T = Math.min(50, 1.2 * a.T), a.o = 0));
            a.S = b
        };
    Pd.prototype.start = function() { this.W = !1;
        this.U || Wd(this) };
    Pd.prototype.stop = function() { this.W = !0;
        this.S = this.o = 0 };
    Pd.prototype.s = function() { this.reset();
        Pd.Da.s.call(this) };
    Pd.prototype.reset = function() { this.stop();
        this.H = [];
        this.w = 0;
        this.$ = !1;
        this.T = Od;
        this.S = this.o = 0 };
    var Xd = function(a, b) { this.width = a;
        this.height = b };
    Xd.prototype.ceil = function() { this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this };
    Xd.prototype.floor = function() { this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this };
    Xd.prototype.round = function() { this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this };
    Xd.prototype.scale = function(a, b) { b = ka(b) ? b : a;
        this.width *= a;
        this.height *= b;
        return this };
    !sc && !qc || qc && 9 <= Number(Bc) || sc && Ac("1.9.1");
    qc && Ac("9");
    var Yd = function(a, b, c) { fc.call(this);
        this.w = !1;
        this.o = a;
        this.H = null;
        this.S = c };
    m(Yd, fc);
    var Qd = 1E3 / 30,
        Zd = Qd / 400;
    Yd.prototype.s = function() { this.reset();
        this.o = null };
    Yd.prototype.reset = function() { this.w && (Cb(this.o, "width", "", "height", ""), Ob(0), this.o.style.width = "", this.o.style.height = "");
        if (this.H) {
            var a = this.H;
            a && a.parentNode && a.parentNode.removeChild(a) }
        this.H = null;
        this.w = !1 };
    var $d = function(a, b) {
        if (a.o && ec() && !a.w) {
            var c = a.o;
            document.getElementById("fkbx") && Cb(c.parentNode, "width", "100%");
            var d = c.offsetHeight,
                e = c.offsetWidth,
                f = Math.min(640, c.parentNode.clientWidth),
                h = f / (640 / 360),
                l = 0,
                t = Pd.ka();
            a.w = !0;
            Ud(t, function() {
                l = Math.min(1, l + Zd);
                var t = 3 * l * l - 2 * l * l * l,
                    L = d + Math.min(1, Math.max(0, t)) * (h - d),
                    ja = Math.max(0, L - 230) + (document.querySelector("div.og-pdp") ? 36 : 12);
                Cb(c, "width", e + Math.min(1, Math.max(0, t)) * (f - e) + "px", "height", L + "px");
                Ob(ja);
                ud(a.S, !1);
                if (1 <= l) {
                    if (t = document.getElementById("searchform")) c.style.zIndex =
                        parseInt(getComputedStyle(t).zIndex, 10) + 1;
                    b();
                    return !1
                }
                return !0
            })
        }
    };
    var ae = function() { this.R = this.s = null;
        this.o = {};
        this.V = null;
        this.H = Number.MIN_VALUE;
        this.w = Number.MAX_VALUE;
        this.T = this.S = 0 };
    ea(ae);
    ae.prototype.update = function() {
        var a = self.performance ? self.performance.now() : Date.now();
        if (this.s) {
            var b = Math.round(1E3 / (a - this.s));
            b > this.H && (this.H = b);
            b < this.w && (this.w = b);
            this.o[a] = b;
            this.S += b;
            this.T++;
            this.V = { now: b, ld: be(this, 1E3, a), kd: be(this, 5E3, a), md: { Ec: Math.round(this.S / this.T), Mc: this.H, min: this.w } } }
        this.s = a;
        for (var c in this.o) Number(c) + 5100 < a && delete this.o[c];
        return this.V };
    var de = function(a) {
            var b = ce;
            b.R || (b.R = a) },
        be = function(a, b, c) {
            var d = [],
                e = Number.MIN_VALUE,
                f = Number.MAX_VALUE,
                h;
            for (h in a.o) Number(h) + b >= c && (a.o[h] > e && (e = a.o[h]), a.o[h] < f && (f = a.o[h]), d.push(a.o[h]));
            return { Ec: Math.round(Fa.apply(null, d)), Mc: e, min: f } };
    var ee = function(a, b) { google && google.doodle && (b && (google.doodle.cpDestroy = b), google.doodle.cpInit = function() { b && b();
                a() }) },
        fe = function(a, b, c) {
            if (google) {
                var d = function() {
                        var a = google.msg && google.msg.unlisten;
                        a && (a(106, d), c && a(94, c));
                        b();
                        return !0 },
                    e = function() {
                        var a = document.getElementById("hplogo");
                        a && "hidden" != a.style.visibility && (a = google.msg && google.msg.listen, google.psy && google.psy.q && a && (a(106, d), c && a(94, c))) };
                e();
                google.doodle && google.doodle.jesr || (qa("google.doodle.jesr", !0), google.raas && google.raas("doodle", { init: function() { e();
                        google.doodle.jesrd && (a(), google.doodle.jesrd = !1) }, dispose: function() { d();
                        google.doodle.jesrd = !0 } }))
            }
        };
    var ge = function() { fc.call(this);
        this.w = new Mc(this);
        this.Oa = this;
        this.wa = null };
    m(ge, fc);
    ge.prototype[Hc] = !0;
    ge.prototype.removeEventListener = function(a, b, c, d) { bd(this, a, b, c, d) };
    var ie = function(a, b) {
        var c, d = a.wa;
        if (d)
            for (c = []; d; d = d.wa) c.push(d);
        a = a.Oa;
        d = b.type || b;
        if (ia(b)) b = new Fc(b, a);
        else if (b instanceof Fc) b.H = b.H || a;
        else {
            var e = b;
            b = new Fc(d, a);
            Ma(b, e) }
        var e = !0,
            f;
        if (c)
            for (var h = c.length - 1; !b.w && 0 <= h; h--) f = b.s = c[h], e = he(f, d, !0, b) && e;
        b.w || (f = b.s = a, e = he(f, d, !0, b) && e, b.w || (e = he(f, d, !1, b) && e));
        if (c)
            for (h = 0; !b.w && h < c.length; h++) f = b.s = c[h], e = he(f, d, !1, b) && e;
        return e };
    ge.prototype.s = function() { ge.Da.s.call(this);
        this.ta();
        this.wa = null };
    ge.prototype.listen = function(a, b, c, d) {
        return Oc(this.w, String(a), b, !1, c, d) };
    ge.prototype.unlisten = function(a, b, c, d) {
        var e;
        e = this.w;
        a = String(a).toString();
        if (a in e.o) {
            var f = e.o[a];
            b = Nc(f, b, c, d); - 1 < b ? (Lc(f[b]), Array.prototype.splice.call(f, b, 1), 0 == f.length && (delete e.o[a], e.s--), e = !0) : e = !1 } else e = !1;
        return e };
    ge.prototype.ta = function(a) {
        var b;
        if (this.w) { b = this.w;
            a = a && a.toString();
            var c = 0,
                d;
            for (d in b.o)
                if (!a || d == a) {
                    for (var e = b.o[d], f = 0; f < e.length; f++) ++c, Lc(e[f]);
                    delete b.o[d];
                    b.s-- }
            b = c } else b = 0;
        return b };
    var he = function(a, b, c, d) { b = a.w.o[String(b)];
        if (!b) return !0;
        b = b.concat();
        for (var e = !0, f = 0; f < b.length; ++f) {
            var h = b[f];
            if (h && !h.wb && h.Ib == c) {
                var l = h.listener,
                    t = h.Jb || h.src;
                h.Hb && Pc(a.w, h);
                e = !1 !== l.call(t, d) && e } }
        return e && 0 != d.nc };
    var je = function(a, b, c) {
        if ("function" == fa(a)) c && (a = na(a, c));
        else if (a && "function" == typeof a.handleEvent) a = na(a.handleEvent, a);
        else throw Error("i");
        return 2147483647 < Number(b) ? -1 : ba.setTimeout(a, b || 0) };
    var ke = function() {};
    ke.prototype.s = null;
    ke.prototype.o = da;
    var le = function(a) {
        return a.s || (a.s = a.H()) };
    ke.prototype.H = da;
    var me, ne = function() {};
    m(ne, ke);
    ne.prototype.o = function() {
        var a = oe(this);
        return a ? new ActiveXObject(a) : new XMLHttpRequest };
    ne.prototype.H = function() {
        var a = {};
        oe(this) && (a[0] = !0, a[1] = !0);
        return a };
    var oe = function(a) {
        if (!a.w && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
            for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
                var d = b[c];
                try {
                    return new ActiveXObject(d), a.w = d } catch (e) {} }
            throw Error("j"); }
        return a.w };
    me = new ne;
    var pe = function(a) { ge.call(this);
        this.headers = new Na;
        this.ha = a || null;
        this.H = !1;
        this.W = this.o = null;
        this.va = "";
        this.S = this.ra = this.T = this.ma = !1;
        this.Ea = 0;
        this.U = null;
        this.$ = "";
        this.Fa = this.kb = !1 };
    m(pe, ge);
    var qe = /^https?$/i,
        re = ["POST", "PUT"];
    pe.prototype.send = function(a, b, c, d) {
        if (this.o) throw Error("k`" + this.va + "`" + a);
        b = b ? b.toUpperCase() : "GET";
        this.va = a;
        this.ma = !1;
        this.H = !0;
        this.o = this.ha ? this.ha.o() : me.o();
        this.W = this.ha ? le(this.ha) : le(me);
        this.o.onreadystatechange = na(this.Ia, this);
        try { this.ra = !0, this.o.open(b, String(a), !0), this.ra = !1 } catch (f) { se(this);
            return }
        a = c || "";
        var e = new Na(this.headers);
        d && Ra(d, function(a, b) { e.set(b, a) });
        d = xa(e.Za(), te);
        c = ba.FormData && a instanceof ba.FormData;
        !(0 <= ta(re, b)) || d || c || e.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
        e.forEach(function(a, b) { this.o.setRequestHeader(b, a) }, this);
        this.$ && (this.o.responseType = this.$);
        "withCredentials" in this.o && this.o.withCredentials !== this.kb && (this.o.withCredentials = this.kb);
        try { ue(this), 0 < this.Ea && ((this.Fa = ve(this.o)) ? (this.o.timeout = this.Ea, this.o.ontimeout = na(this.Ma, this)) : this.U = je(this.Ma, this.Ea, this)), this.T = !0, this.o.send(a), this.T = !1 } catch (f) { se(this) }
    };
    var ve = function(a) {
            return qc && Ac(9) && ka(a.timeout) && k(a.ontimeout) },
        te = function(a) {
            return "content-type" == a.toLowerCase() };
    pe.prototype.Ma = function() { "undefined" != typeof aa && this.o && (ie(this, "timeout"), this.abort(8)) };
    var se = function(a) { a.H = !1;
            a.o && (a.S = !0, a.o.abort(), a.S = !1);
            we(a);
            xe(a) },
        we = function(a) { a.ma || (a.ma = !0, ie(a, "complete"), ie(a, "error")) };
    pe.prototype.abort = function() { this.o && this.H && (this.H = !1, this.S = !0, this.o.abort(), this.S = !1, ie(this, "complete"), ie(this, "abort"), xe(this)) };
    pe.prototype.s = function() { this.o && (this.H && (this.H = !1, this.S = !0, this.o.abort(), this.S = !1), xe(this, !0));
        pe.Da.s.call(this) };
    pe.prototype.Ia = function() { this.V || (this.ra || this.T || this.S ? ye(this) : this.Ya()) };
    pe.prototype.Ya = function() { ye(this) };
    var ye = function(a) {
            if (a.H && "undefined" != typeof aa && (!a.W[1] || 4 != (a.o ? a.o.readyState : 0) || 2 != ze(a)))
                if (a.T && 4 == (a.o ? a.o.readyState : 0)) je(a.Ia, 0, a);
                else if (ie(a, "readystatechange"), 4 == (a.o ? a.o.readyState : 0)) {
                a.H = !1;
                try {
                    var b = ze(a),
                        c;
                    a: switch (b) {
                        case 200:
                        case 201:
                        case 202:
                        case 204:
                        case 206:
                        case 304:
                        case 1223:
                            c = !0;
                            break a;
                        default:
                            c = !1 }
                    var d;
                    if (!(d = c)) {
                        var e;
                        if (e = 0 === b) {
                            var f = String(a.va).match(Sa)[1] || null;
                            if (!f && ba.self && ba.self.location) var h = ba.self.location.protocol,
                                f = h.substr(0, h.length - 1);
                            e = !qe.test(f ?
                                f.toLowerCase() : "")
                        }
                        d = e
                    }
                    d ? (ie(a, "complete"), ie(a, "success")) : we(a)
                } finally { xe(a) }
            }
        },
        xe = function(a, b) {
            if (a.o) { ue(a);
                var c = a.o,
                    d = a.W[0] ? ca : null;
                a.o = null;
                a.W = null;
                b || ie(a, "ready");
                try { c.onreadystatechange = d } catch (e) {} } },
        ue = function(a) { a.o && a.Fa && (a.o.ontimeout = null);
            ka(a.U) && (ba.clearTimeout(a.U), a.U = null) },
        ze = function(a) {
            try {
                return 2 < (a.o ? a.o.readyState : 0) ? a.o.status : -1 } catch (b) {
                return -1 } },
        Ae = function(a) {
            try {
                if (!a.o) return null;
                if ("response" in a.o) return a.o.response;
                switch (a.$) {
                    case "":
                    case "text":
                        return a.o.responseText;
                    case "arraybuffer":
                        if ("mozResponseArrayBuffer" in a.o) return a.o.mozResponseArrayBuffer
                }
                return null
            } catch (b) {
                return null }
        };
    var Be = function(a) { this.V = a;
            this.w = !1;
            this.H = [] },
        Ce = function(a) {
            if (!a.w) { a.w = !0;
                for (var b = 0, c; c = a.H[b]; b++) c() } };
    Be.prototype.s = da;
    var De = function(a, b) { a.w ? b() : a.H.push(b) },
        Ee = function(a) { Be.call(this, a);
            this.o = new Image };
    m(Ee, Be);
    Ee.prototype.s = function() {
        if (!this.o.src) {
            var a = this;
            this.o.onload = function() { Ce(a) };
            this.o.src = this.V;
            (this.o.complete || "complete" == this.o.readyState) && Ce(this) } };
    var Fe = function(a, b) {
        for (var c = 0, d = 0, e; e = a[d]; d++) De(e, function() { c++;
            c == a.length && b() }), e.s() };
    var Ge = function(a, b) { this.S = a;
            this.H = b;
            this.s = this.w = this.o = null },
        He = !(!window.AudioContext && !window.webkitAudioContext) && !!window.GainNode,
        Le = function(a) {
            var b = Ie;
            if (He && !b.o) { b.o = new(window.AudioContext || window.webkitAudioContext);
                b.w = b.o.createGain();
                b.w.connect(b.o.destination);
                for (var c in b.S) b.S[c].S = b.o;
                for (c in b.H) Je(b.H[c], b.o, b.w);
                ub && (Ke(b), ad(a, "touchend", function() { Ke(b) })) } },
        Me = function(a) {
            a.s = a.o.createBufferSource();
            a.s.buffer = a.o.createBuffer(1, 1, 22050);
            a.s.connect(a.o.destination);
            a.s.start(0)
        },
        Ke = function(a) { a.o && (null == a.s ? Me(a) : k(a.s.playbackState) ? a.s.playbackState !== a.s.PLAYING_STATE && a.s.playbackState !== a.s.FINISHED_STATE && Me(a) : Me(a)) };
    Ge.prototype.reset = function() {
        for (var a in this.S) this.S[a].H = [];
        for (var b in this.H) this.H[b].stop() };
    var Ne = function() {
            var a = Ie;
            a.w && (a.w.gain.value = 0) },
        v = function(a, b, c) { this.nb = a;
            this.R = b;
            this.S = c;
            this.s = {};
            this.w = this.o = this.H = null;
            this.V = 0 },
        Je = function(a, b, c) { a.o = b;
            a.w = c;
            a.o.createGain && (a.H = a.o.createGain()) },
        Oe = document.createElement("audio"),
        Pe = "function" == fa(Oe.canPlayType) && "" != Oe.canPlayType("audio/ogg") ? ".ogg" : ".mp3",
        Qe = function(a) {
            if (a.o) {
                var b = 1E3 * a.o.currentTime,
                    c;
                for (c in a.s) {
                    var d = a.s[c];!d.Jc && d.Nc + a.S < b && delete a.s[c] } } };
    v.prototype.play = function(a, b) {
        if (!this.o || !this.w) return -1;
        Qe(this);
        a = this.o.currentTime + (a || 0) / 1E3;
        var c = this.o.createBufferSource();
        this.H ? (c.connect(this.H), this.H.connect(this.w)) : c.connect(this.w);
        c.loop = !!b;
        try { c.buffer = this.nb.R } catch (f) {
            return b = "UnknownError", f instanceof TypeError && (b = "TypeError"), a = "bufferAssignment," + typeof this.nb.R + "," + this.nb.o, Pb(["t:" + b, "d:((" + (k(a) ? a : "_") + "))"].join()), -1 }
        c.playbackRate.value = 1;
        var d = this.R / 1E3,
            e = this.S / 1E3;
        b ? (c.loopStart = d, c.loopEnd = d + e, c.start(a,
            d)) : c.start(a, d, e);
        d = this.V++;
        this.s[d] = { node: c, Nc: 1E3 * a, Jc: !!b };
        return d
    };
    v.prototype.stop = function(a) { Qe(this);
        if (k(a)) {
            if (this.s[a]) {
                try { this.s[a].node.stop(0) } catch (c) {}
                delete this.s[a] } } else
            for (var b in this.s) this.stop(b) };
    var Re = function(a, b) { Be.call(this, a + b + Pe);
        this.S = this.R = null;
        this.o = 0 };
    m(Re, Be);
    Re.prototype.s = function(a) {
        if ((0 == this.o || a) && this.S) { a = new pe;
            a.$ = "arraybuffer";
            var b = this;
            a.listen("complete", function() { b.S.decodeAudioData(Ae(this), function(a) { a && (b.R = a, b.o = 3, Ce(b)) });
                b.o = 2 });
            a.send(this.V);
            this.o = 1 } };
    var Se = function() { Ge.call(this, w, x) };
    m(Se, Ge);
    var w = { Ga: new Re("./logos/", "main"), Rc: new Re("./logos/", "initial"), yc: new Re("./logos/", "victory"), vb: new Re("./logos/", "end") },
        x = {
            Cc: new v(w.Ga, 0, 3160.816),
            sc: new v(w.Ga, 4160.816, 3233.333),
            Dc: new v(w.Ga, 8394.15, 3533.333),
            Gc: new v(w.Ga, 12927.483, 4966.667),
            Ub: new v(w.vb, 0, 1933.333),
            Hc: new v(w.vb, 2933.333, 4466.667),
            Vb: new v(w.vb, 8400, 5233.333),
            Ic: new v(w.vb, 14633.333, 2309.342),
            Wb: new v(w.vb, 17942.676, 2966.667),
            Kc: new v(w.Ga, 18894.15, 1984.014),
            Lc: new v(w.Ga, 21878.163, 4957.46),
            Pc: new v(w.vb, 21909.342, 3E4),
            Xb: new v(w.Ga, 27835.624, 2472.925),
            Yb: new v(w.Ga, 31308.549, 25263.175),
            Zb: new v(w.Ga, 57571.723, 1741.497),
            Qc: new v(w.Ga, 60313.22, 1335.147),
            Ob: new v(w.yc, 0, 18413.424),
            T: new v(w.Ga, 62648.367, 1851.791),
            Gb: new v(w.Rc, 0, 16921.542),
            $b: new v(w.Ga, 65500.159, 1573.152),
            Sc: new v(w.Ga, 68073.311, 1168.254),
            Pb: new v(w.Ga, 70241.565, 983.56),
            ac: new v(w.Ga, 72225.125, 1160),
            Tc: new v(w.Ga, 74385.125, 1248.005),
            Uc: new v(w.Ga, 76633.129, 1386.667),
            tc: new v(w.Ga, 79019.796,
                1482.653),
            uc: new v(w.Ga, 81502.449, 1271.293),
            vc: new v(w.Ga, 83773.741, 1567.347),
            wc: new v(w.Ga, 86341.088, 1625.397),
            xc: new v(w.Ga, 88966.485, 2066.576)
        };
    ea(Se);
    var Te = function(a, b) { this.o = [];
            this.w = [];
            for (var c = 0, d; d = b[c]; c++) {
                var e = new Ee(a + d.filename);
                d = d.size;
                this.o.push(e);
                this.w.push(d) } },
        Ue = function(a) {
            return ka(a) ? a : a[0] };
    Te.prototype.s = function(a, b) { a = this.o[Ue(a)];
        b && De(a, b);
        a.s() };
    var Ve = function(a, b) {
        return b[3] };
    Te.prototype.ya = function(a, b, c, d, e, f, h, l) {
        var t = a[3],
            W = a[4];
        e = void 0 != e ? e : 1;
        b.save();
        b.translate(c, d);
        b.scale(h ? -e : e, l ? -e : e);
        c = -t * (f ? .5 : h ? 1 : 0);
        d = a[1];
        h = a[2];
        void 0 != c && (d += 0, h += 0);
        a = this.o[Ue(a)];
        if (!a.w) throw Error("l");
        b.drawImage(a.o, d, h, t, W, c, -W * (f ? .5 : l ? 1 : 0), t, W);
        b.restore() };
    var Xe = function() { Te.call(this, "./logos/", We) };
    m(Xe, Te);
    var We = [{ filename: "cta-png-sprite.png", size: [217, 80] }, { filename: "main-png-sprite.png", size: [1381, 1467] }, { filename: "level1-png-sprite.png", size: [3617, 820] }, { filename: "level1-png1-sprite.png", size: [717, 295] }, { filename: "level1-jpg-sprite.png", size: [1283, 360] }, { filename: "gameover-png-sprite.png", size: [441, 119] }, { filename: "level2-png-sprite.png", size: [5929, 378] }, { filename: "level2-jpg-sprite.png", size: [640, 360] }, { filename: "level3-png-sprite.png", size: [2458, 779] }, {
            filename: "level3-jpg-sprite.png",
            size: [640,
                360
            ]
        }, { filename: "level4-png-sprite.png", size: [5586, 393] }, { filename: "level4-jpg-sprite.png", size: [640, 360] }, { filename: "level5-png-sprite.png", size: [1251, 1710] }, { filename: "level5-png1-sprite.png", size: [4187, 723] }, { filename: "level5-png2-sprite.png", size: [2566, 1165] }, { filename: "level5-png3-sprite.png", size: [4035, 360] }, { filename: "level5-jpg-sprite.jpg", size: [2703, 1069] }, { filename: "end-png-sprite.png", size: [2360, 1244] }, { filename: "end-png1-sprite.png", size: [2428, 183] }, {
            filename: "end-jpg-sprite.png",
            size: [640,
                360
            ]
        }, { filename: "main-jpg-sprite.jpg", size: [1283, 280] }],
        Ye = [1, 1315, 1130, 46, 24],
        Ze = [1, 421, 1200, 43, 32],
        $e = [16, 0, 0, 1350, 1069],
        af = [16, 1353, 0, 1350, 1069],
        bf = [2, 1894, 0, 189, 124],
        cf = [20, 0, 0, 640, 280],
        df = [20, 643, 0, 640, 280],
        y = [1, 1313, 0, 68, 27],
        ef = [1, 504, 1302, 69, 68],
        ff = [1, 381, 1322, 59, 53],
        gf = [1, 1313, 226, 61, 53],
        hf = [1, 1313, 170, 61, 53],
        jf = [1, 1313, 226, 61, 53],
        kf = [2, 1438, 0, 453, 140],
        lf = [14, 0, 1089, 159, 41],
        mf = [5, 74, 0, 71, 71],
        nf = [5, 0, 0, 71, 71],
        of = [5, 222, 0, 71, 71],
        pf = [5, 148, 0, 71, 71],
        qf = [5, 370, 0, 71, 71],
        rf = [5, 296, 0, 71, 71],
        sf = [6,
            241, 0, 236, 105
        ],
        tf = [6, 0, 0, 238, 101],
        uf = [2, 2518, 554, 107, 106],
        vf = [2, 1019, 556, 107, 106],
        wf = [2, 0, 560, 107, 106],
        xf = [2, 110, 560, 107, 106],
        yf = [2, 2959, 0, 160, 106],
        zf = [2, 3122, 0, 160, 106],
        Af = [2, 3122, 0, 160, 106],
        Bf = [2, 3285, 0, 160, 106],
        Cf = [2, 3285, 0, 160, 106],
        Df = [2, 3448, 0, 160, 106],
        Ef = [2, 3448, 0, 160, 106],
        Ff = [2, 522, 68, 160, 106],
        Gf = [2, 685, 68, 160, 106],
        Hf = [2, 848, 68, 160, 106],
        If = [2, 1011, 68, 160, 106],
        Jf = [2, 1174, 68, 160, 106],
        Kf = [2, 2086, 90, 160, 106],
        Lf = [2, 2959, 109, 160, 106],
        Mf = [2, 2959, 109, 160, 106],
        Nf = [2, 2959, 109, 160, 106],
        Of = [2, 2959, 109,
            160, 106
        ],
        Pf = [2, 3122, 109, 160, 106],
        Qf = [2, 3285, 109, 160, 106],
        Rf = [2, 3448, 109, 160, 106],
        Sf = [2, 1894, 127, 160, 106],
        Tf = [2, 1337, 143, 160, 106],
        Uf = [2, 1337, 143, 160, 106],
        Vf = [2, 1337, 143, 160, 106],
        Wf = [2, 1337, 143, 160, 106],
        Xf = [2, 1337, 143, 160, 106],
        Yf = [2, 1337, 143, 160, 106],
        Zf = [2, 1337, 143, 160, 106],
        $f = [2, 1337, 143, 160, 106],
        ag = [2, 1337, 143, 160, 106],
        bg = [2, 1337, 143, 160, 106],
        cg = [3, 590, 0, 87, 75],
        dg = [3, 590, 0, 87, 75],
        eg = [3, 590, 0, 87, 75],
        fg = [3, 590, 78, 87, 75],
        gg = [3, 0, 108, 87, 75],
        hg = [3, 90, 108, 87, 75],
        ig = [3, 180, 108, 87, 75],
        jg = [3, 270, 108, 87, 75],
        kg = [3, 270, 108, 87, 75],
        lg = [3, 270, 108, 87, 75],
        mg = [3, 180, 108, 87, 75],
        ng = [3, 90, 108, 87, 75],
        pg = [3, 0, 108, 87, 75],
        qg = [3, 590, 78, 87, 75],
        rg = [3, 590, 0, 87, 75],
        sg = [3, 590, 0, 87, 75],
        tg = [3, 360, 108, 87, 75],
        ug = [3, 450, 108, 87, 75],
        vg = [3, 540, 156, 87, 75],
        wg = [3, 630, 156, 87, 75],
        xg = [3, 0, 186, 87, 75],
        yg = [3, 0, 186, 87, 75],
        zg = [3, 0, 186, 87, 75],
        Ag = [3, 630, 156, 87, 75],
        Bg = [3, 540, 156, 87, 75],
        Cg = [3, 450, 108, 87, 75],
        Dg = [3, 90, 186, 87, 75],
        Eg = [3, 590, 0, 87, 75],
        Fg = [3, 590, 0, 87, 75],
        z = [1, 0, 293, 122, 134],
        Gg = [1, 1101, 300, 122, 134],
        Hg = [1, 1226, 300, 122, 134],
        Ig = [1, 614, 302,
            122, 134
        ],
        Jg = [1, 739, 322, 122, 134],
        Kg = [1, 864, 333, 122, 134],
        Lg = [1, 375, 335, 122, 134],
        Mg = [1, 0, 430, 122, 134],
        Ng = [1, 125, 430, 122, 134],
        Og = [1, 250, 430, 122, 134],
        Pg = [1, 989, 437, 122, 134],
        Qg = [1, 1114, 437, 122, 134],
        Rg = [1, 1239, 437, 122, 134],
        Sg = [1, 500, 439, 122, 134],
        Tg = [1, 750, 470, 122, 134],
        Ug = [1, 125, 567, 122, 134],
        Vg = [1, 250, 567, 122, 134],
        Wg = [1, 875, 574, 122, 134],
        Xg = [1, 1250, 574, 122, 134],
        Yg = [1, 500, 576, 122, 134],
        Zg = [1, 625, 596, 122, 134],
        $g = [1, 750, 607, 122, 134],
        ah = [1, 875, 711, 122, 134],
        bh = [1, 500, 713, 122, 134],
        ch = [1, 625, 733, 122, 134],
        dh = [1, 375,
            746, 122, 134
        ],
        eh = [1, 875, 848, 122, 134],
        fh = [1, 1E3, 848, 122, 134],
        gh = [1, 375, 883, 122, 134],
        hh = [1, 1E3, 985, 118, 85],
        ih = [1, 1121, 985, 118, 85],
        jh = [1, 1242, 985, 118, 85],
        kh = [1, 500, 987, 118, 85],
        lh = [1, 621, 1007, 118, 85],
        mh = [1, 742, 1018, 118, 85],
        nh = [3, 0, 0, 115, 105],
        oh = [3, 118, 0, 115, 105],
        ph = [3, 236, 0, 115, 105],
        qh = [3, 354, 0, 115, 105],
        rh = [3, 472, 0, 115, 105],
        sh = [2, 0, 0, 519, 283],
        th = [2, 2864, 161, 56, 45],
        uh = [0, 166, 54, 26, 26],
        vh = [1, 85, 1115, 82, 78],
        wh = [1, 170, 1115, 82, 78],
        xh = [1, 255, 1115, 82, 78],
        yh = [1, 795, 1122, 82, 78],
        zh = [1, 880, 1122, 82, 78],
        Ah = [0, 166,
            0, 51, 51
        ],
        Bh = [1, 989, 333, 102, 87],
        Ch = [1, 500, 335, 102, 87],
        Dh = [1, 875, 470, 102, 87],
        Eh = [1, 375, 1020, 102, 87],
        Fh = [1, 375, 1020, 102, 87],
        Gh = [4, 0, 0, 640, 360],
        Hh = [19, 0, 0, 640, 360],
        Ih = [2, 522, 0, 455, 65],
        Jh = [2, 980, 0, 455, 65],
        Kh = [2, 3233, 709, 78, 63],
        Lh = [2, 2802, 296, 50, 50],
        Mh = [2, 1286, 177, 42, 31],
        Nh = [2, 2432, 718, 42, 31],
        Oh = [8, 2327, 0, 59, 77],
        Ph = [8, 2148, 564, 154, 205],
        Qh = [8, 2305, 564, 153, 179],
        Rh = [2, 2271, 0, 169, 158],
        Sh = [2, 2086, 0, 182, 87],
        Th = [2, 1134, 177, 149, 95],
        Uh = [2, 2206, 199, 20, 40],
        Vh = [1, 955, 169, 143, 161],
        Wh = [15, 3834, 230, 52, 61],
        Xh = [12, 418,
            624, 390, 360
        ],
        Yh = [12, 811, 624, 390, 360],
        Zh = [12, 0, 936, 390, 360],
        $h = [12, 393, 987, 390, 360],
        A = [1, 653, 0, 179, 158],
        ai = [17, 360, 943, 108, 72],
        B = [1, 421, 1242, 80, 77],
        bi = [1, 900, 1244, 80, 77],
        ci = [1, 983, 1244, 80, 77],
        di = [2, 1813, 522, 50, 50],
        ei = [1, 480, 1165, 81, 74],
        fi = [1, 564, 1185, 81, 74],
        gi = [1, 375, 293, 87, 37],
        hi = [5, 48, 74, 45, 45],
        ii = [5, 0, 74, 45, 45],
        ji = [5, 144, 74, 45, 45],
        ki = [5, 96, 74, 45, 45],
        li = [5, 240, 74, 45, 45],
        mi = [5, 192, 74, 45, 45],
        ni = [5, 288, 74, 45, 45],
        oi = [5, 384, 74, 45, 45],
        pi = [5, 336, 74, 45, 45],
        qi = [1, 1248, 1410, 39, 45],
        ri = [2, 2518, 431, 127, 120],
        si = [2, 2518, 431, 127, 120],
        ti = [2, 0, 437, 127, 120],
        ui = [2, 130, 437, 127, 120],
        vi = [2, 260, 437, 127, 120],
        wi = [2, 390, 443, 127, 120],
        xi = [2, 520, 443, 127, 120],
        yi = [2, 2894, 504, 113, 79],
        zi = [2, 3010, 504, 113, 79],
        Ai = [2, 3126, 504, 113, 79],
        Bi = [2, 3242, 504, 113, 79],
        Ci = [2, 3358, 504, 113, 79],
        Di = [2, 3474, 504, 113, 79],
        Ei = [2, 447, 312, 144, 128],
        Fi = [2, 447, 312, 144, 128],
        Gi = [2, 594, 312, 144, 128],
        Hi = [2, 741, 312, 144, 128],
        Ii = [2, 888, 312, 144, 128],
        Ji = [2, 1957, 350, 144, 128],
        Ki = [2, 2802, 369, 144, 128],
        Li = [2, 2711, 161, 150, 132],
        Mi = [2, 2711, 161, 150, 132],
        Ni = [2, 522, 177, 150,
            132
        ],
        Oi = [2, 675, 177, 150, 132],
        Pi = [2, 828, 177, 150, 132],
        Qi = [2, 981, 177, 150, 132],
        Ri = [2, 981, 177, 150, 132],
        Si = [2, 2949, 369, 139, 132],
        Ti = [2, 2949, 369, 139, 132],
        Ui = [2, 3091, 369, 139, 132],
        Vi = [2, 3233, 369, 139, 132],
        Wi = [2, 3375, 369, 139, 132],
        Xi = [2, 1733, 387, 139, 132],
        Yi = [2, 1283, 403, 139, 132],
        Zi = [2, 1500, 143, 151, 116],
        $i = [2, 1500, 143, 151, 116],
        aj = [2, 1654, 143, 151, 116],
        bj = [2, 2249, 161, 151, 116],
        cj = [2, 2403, 161, 151, 116],
        dj = [2, 2557, 161, 151, 116],
        ej = [2, 2557, 161, 151, 116],
        fj = [2, 650, 443, 120, 130],
        gj = [2, 650, 443, 120, 130],
        hj = [2, 773, 443, 120, 130],
        ij = [2, 896, 443, 120, 130],
        jj = [2, 2648, 447, 120, 130],
        kj = [2, 1875, 481, 120, 130],
        lj = [2, 2771, 500, 120, 130],
        mj = [1, 262, 0, 203, 290],
        nj = [1, 0, 0, 259, 290];
    ea(Xe);
    var oj = new u(320, 180);
    Xe.ka();
    var pj = $e[3] / 2;
    Xe.ka();
    var qj = new u(pj, -$e[4] / 2 + 360 - 40);
    var sj = function(a, b, c, d, e, f) {
            if (6 == arguments.length) rj(this, a, b, c, d, e, f);
            else {
                if (0 != arguments.length) throw Error("m");
                this.w = this.H = 1;
                this.R = this.S = this.s = this.o = 0 } },
        tj = function(a) {
            return new sj(a.w, a.R, a.S, a.H, a.s, a.o) },
        rj = function(a, b, c, d, e, f, h) {
            if (!(ka(b) && ka(c) && ka(d) && ka(e) && ka(f) && ka(h))) throw Error("n");
            a.w = b;
            a.R = c;
            a.S = d;
            a.H = e;
            a.s = f;
            a.o = h;
            return a };
    sj.prototype.scale = function(a, b) { this.w *= a;
        this.R *= a;
        this.S *= b;
        this.H *= b;
        return this };
    var uj = function(a, b, c) { a.s += b * a.w + c * a.S;
        a.o += b * a.R + c * a.H;
        return a };
    sj.prototype.toString = function() {
        return "matrix(" + [this.w, this.R, this.S, this.H, this.s, this.o].join() + ")" };
    var vj = function(a, b) {
            var c = a.w,
                d = a.S;
            a.w = b.w * c + b.R * d;
            a.S = b.S * c + b.H * d;
            a.s += b.s * c + b.o * d;
            c = a.R;
            d = a.H;
            a.R = b.w * c + b.R * d;
            a.H = b.S * c + b.H * d;
            a.o += b.s * c + b.o * d;
            return a },
        wj = function(a, b) {
            var c = Math.cos(b);
            b = Math.sin(b);
            return rj(a, c, b, -b, c, 0 - 0 * c + 0 * b, 0 - 0 * b - 0 * c) };
    var C = function() { this.S = new sj;
            this.Aa = 1;
            this.s = 0;
            this.o = !0;
            this.$ = [];
            this.V = null;
            this.kb = this.Rb = this.Sb = 0;
            this.Ha = new xj },
        D = function(a, b) { null != b.V && b.V.removeChild(b);
            b.V = a;
            a.$.push(b);
            yj(b) };
    C.prototype.removeChild = function(a) {
        var b = this.$.indexOf(a); - 1 != b && (this.$.splice(b, 1), a.V = null);
        yj(a) };
    var E = function(a) { a.V && a.V.removeChild(a) },
        zj = function(a) {
            for (var b = 0; b < a.$.length; b++) a.$[b].V = null;
            a.$ = [] };
    C.prototype.update = function() {};
    C.prototype.ya = function() {};
    var F = function(a, b, c) {
            var d = a.S,
                e = -a.S.o;
            d.s += -a.S.s;
            d.o += e;
            d = a.S;
            e = void 0 === c ? b.y : c;
            d.s += void 0 === c ? b.x : b;
            d.o += e;
            yj(a) },
        Aj = function(a) {
            return new u(a.S.s, a.S.o) },
        G = function(a, b) { a.S.w && a.S.scale(1 / a.S.w, 1 / a.S.H);
            a.S.scale(b, b);
            yj(a) },
        Bj = function(a, b) { a.kb += b;
            var c = a.S;
            b = wj(new sj, b);
            vj(c, b);
            yj(a) },
        Dj = function(a) {
            var b = a.S,
                c = -a.kb,
                c = wj(new sj, c);
            vj(b, c);
            a.kb = 0;
            yj(a) },
        Ej = function(a) {
            if (!a.Qb) {
                var b;
                b = a.V ? uj(vj(tj(Ej(a.V)), a.S), a.Rb, a.Sb) : uj(tj(a.S), a.Rb, a.Sb);
                a.Qb = b }
            return a.Qb },
        yj = function(a) {
            a.Qb =
                null;
            for (var b = 0; b < a.$.length; b++) yj(a.$[b])
        },
        xj = function() { this.order = this.yb = this.o = 0 },
        Fj = function(a, b) {
            for (a.Ha.o = -1; null != a;) {
                var c = a.$; - 1 == a.Ha.o && b(a) && (a.Ha.o = c.length);
                a.Ha.o++;
                a.Ha.o < c.length ? (c[a.Ha.o].Ha.o = -1, a = c[a.Ha.o]) : a = a.V } };
    var Gj = function() { C.call(this);
        this.W = !1 };
    m(Gj, C);
    g = Gj.prototype;
    g.update = function(a) { this.W || (this.W = !0, this.kc());
        this.Tb(a);
        this.rb() && this.ub() };
    g.Tb = function() {};
    g.kc = function() {};
    g.ub = function() {};
    g.rb = function() {
        return !1 };
    var Hj = function(a) { Gj.call(this);
        this.w = !1;
        this.kc = a };
    m(Hj, Gj);
    Hj.prototype.update = function(a) { this.w = !0;
        return Hj.Da.update.call(this, a) };
    Hj.prototype.rb = function() {
        return this.w };
    var H = function(a, b, c) { Gj.call(this);
        this.w = 0;
        this.R = a;
        b && (this.Tb = b);
        c && (this.ub = c) };
    m(H, Gj);
    var Ij = Number.POSITIVE_INFINITY;
    H.prototype.update = function(a) { this.w += a;
        return H.Da.update.call(this, a) };
    H.prototype.rb = function() {
        return this.w >= this.R };
    var Jj = function(a, b, c, d, e, f, h, l) { this.o = a;
            this.T = b;
            this.s = c;
            this.S = d;
            this.w = e;
            this.R = f;
            this.H = h;
            this.V = l },
        Kj = function(a, b) {
            if (0 == b) return a.o;
            if (1 == b) return a.H;
            var c = n(a.o, a.s, b),
                d = n(a.s, a.w, b);
            a = n(a.w, a.H, b);
            c = n(c, d, b);
            d = n(d, a, b);
            return n(c, d, b) },
        Lj = function(a, b) {
            if (0 == b) return a.T;
            if (1 == b) return a.V;
            var c = n(a.T, a.S, b),
                d = n(a.S, a.R, b);
            a = n(a.R, a.V, b);
            c = n(c, d, b);
            d = n(d, a, b);
            return n(c, d, b) },
        Mj = function(a, b) {
            var c = (b - a.o) / (a.H - a.o);
            if (0 >= c) return 0;
            if (1 <= c) return 1;
            for (var d = 0, e = 1, f = 0, h = 0; 8 > h; h++) {
                var f =
                    Kj(a, c),
                    l = (Kj(a, c + 1E-6) - f) / 1E-6;
                if (1E-6 > Math.abs(f - b)) return c;
                if (1E-6 > Math.abs(l)) break;
                else f < b ? d = c : e = c, c -= (f - b) / l
            }
            for (h = 0; 1E-6 < Math.abs(f - b) && 8 > h; h++) f < b ? (d = c, c = (c + e) / 2) : (e = c, c = (c + d) / 2), f = Kj(a, c);
            return c
        };
    var Oj = function(a, b, c, d) {
            return b + (d || Nj)(a) * (c - b) },
        Pj = function(a, b, c) {
            var d = new Jj(0, 0, a, b, c, 1, 1, 1);
            return function(a) {
                return Lj(d, Mj(d, a)) } },
        Qj = function(a) {
            return a },
        Nj = Pj(.25, .1, .25),
        Rj = Pj(.4, 0, 1),
        Sj = Pj(0, 0, .6),
        Tj = Pj(.6, 0, .4);
    var Uj = function(a, b, c, d, e, f) { H.call(this, b, null, e);
        this.Ba = a;
        this.H = c;
        this.T = d;
        this.U = f || Qj };
    m(Uj, H);
    Uj.prototype.update = function(a) { this.H || (this.H = Aj(this.Ba));
        a = Uj.Da.update.call(this, a);
        var b = Ca(this.w / this.R, 0, 1),
            c = Oj(b, this.H.x, this.T.x, this.U),
            b = Oj(b, this.H.y, this.T.y, this.U);
        F(this.Ba, c, b);
        return a };
    var I = function() { C.call(this);
        this.ha = [];
        this.T = [] };
    m(I, C);
    I.prototype.update = function(a) {
        if (0 < this.ha.length && 0 < a) {
            var b = this.ha[0];
            b.update(a);
            b.rb() && this.ha.shift() }
        for (b = 0; b < this.T.length; b++) this.T[b].update(a), this.T[b].rb() && this.T.splice(b--, 1) };
    var J = function(a, b) { a.ha.push(b) },
        Vj = function(a, b) { a.ha.push(new H(b)) },
        K = function(a, b, c) { a.ha.push(new H(b, null, c)) },
        Wj = function(a, b) { K(a, 0, function() { M(a, b) }) },
        Xj = function(a, b, c, d, e, f) { a.ha.push(new Uj(a, b, c, d, e, f)) },
        N = function(a) { a.ha = [] },
        M = function(a, b) { a.T.push(b) };
    var Yj = function() { C.call(this) };
    m(Yj, C);
    Yj.prototype.ya = function(a) { a.clearRect(-320, -180, 640, 360);
        Yj.Da.ya.call(this, a) };
    var O = function(a, b, c, d, e) { H.call(this, b, null, e);
        this.Ba = a;
        this.H = c;
        this.T = d };
    m(O, H);
    O.prototype.update = function(a) { a = O.Da.update.call(this, a);
        var b = Oj(Ca(this.w / this.R, 0, 1), this.H, this.T, Qj);
        this.Ba.Aa = b;
        return a };
    var Zj = Xe.ka(),
        bk = function() { C.call(this);
            this.w = [];
            for (var a = 0; 90 > a; a++) this.w.push(new ak), D(this, this.w[a]) };
    m(bk, C);
    var dk = function(a) {
            for (var b = 0; 90 > b; b++) ck(a.w[b], !0) },
        ek = function(a) {
            for (var b = 0; 90 > b; b++) ck(a.w[b], !1) },
        ak = function() { C.call(this);
            this.ha = !1;
            this.H = 640 * Math.random();
            this.R = 360 * Math.random();
            this.w = 1 - 2 * Math.random();
            this.T = 1 - 2 * Math.random();
            this.W = this.ma = .2;
            this.U = 0 };
    m(ak, C);
    ak.prototype.update = function(a) { this.U += a;
        this.W = this.ha ? Math.min(this.W, this.ma * Ca(1 - this.U / 1E3, 0, 1)) : Math.max(this.W, this.ma * Ca(this.U / 1500, 0, 1));
        var b = 2;
        this.ha ? this.w += 320 > this.H ? -.5 : .5 : (b -= .2, this.w += .2 * (1 - 2 * Math.random()), this.T += .2 * (1 - 2 * Math.random()));
        this.w = Ca(this.w, -b, b);
        this.T = Ca(this.T, -b, b);
        this.H += this.w / 17 * a;
        this.R += this.T / 17 * a;
        this.H = Ca(this.H, 100, 540);
        this.R = Ca(this.R, 110, 250);
        if (100 == this.H || 540 == this.H) this.w = this.ha ? 0 : -this.w;
        if (110 == this.R || 250 == this.R) this.T = -this.T };
    ak.prototype.ya = function(a) { a.globalAlpha = this.W;
        Zj.ya(Ah, a, this.H, this.R, 4, !0);
        a.globalAlpha = 1 };
    var ck = function(a, b) { b || (a.w = 4 * Math.random());
        a.U = 0;
        a.ha = b };
    var ik = function() { I.call(this);
        this.w = new fk;
        D(this, this.w);
        for (var a = 0; 50 > a; a++) {
            for (var b = new gk(8 + a * a * .002, 3E3), c = 0; c < 2 * a; c++) b.update(17);
            b.s = -1;
            D(this, b) }
        var a = new hk(14, 3E3),
            c = new hk(14, 3E3),
            d = new hk(14, 3E3);
        a.s = -1;
        c.s = -1;
        d.s = -1;
        F(c, 0, 113);
        F(d, 100, 56);
        a.t = b.t;
        c.t = b.t + 2 / 3;
        d.t = b.t + 1 / 3;
        D(this, a);
        D(this, c);
        D(this, d) };
    m(ik, I);
    ik.prototype.ya = function(a) { a.fillStyle = "#2c3039";
        a.shadowBlur = 50;
        a.shadowColor = "#fff";
        a.beginPath();
        a.lineTo(0, 113);
        a.lineTo(100, 56);
        a.lineTo(0, 0);
        a.fill();
        a.fill();
        a.shadowBlur = 0 };
    var gk = function(a, b) { C.call(this);
        this.H = a;
        this.R = b;
        this.w = 0 };
    m(gk, C);
    gk.prototype.update = function(a) { this.w += a / this.R;
        var b = this.w % 1;
        b > 2 / 3 ? (a = 100 - 300 * (b - 2 / 3), b = 56 - 168 * (b - 2 / 3)) : b > 1 / 3 ? (a = 300 * (b - 1 / 3), b = 113 - 168 * (b - 1 / 3)) : (a = 0, b *= 339);
        F(this, a, b) };
    gk.prototype.ya = function(a) {
        var b = a.createRadialGradient(0, 0, 0, 0, 0, this.H);
        b.addColorStop(0, "rgba(255, 255, 255, 1)");
        b.addColorStop(.6, "rgba(245, 245, 255, .3)");
        b.addColorStop(.8, "rgba(225, 225, 255, .15)");
        b.addColorStop(1, "rgba(210, 210, 255, 0)");
        a.fillStyle = b;
        a.beginPath();
        a.arc(0, 0, this.H, 0, 2 * Math.PI, !1);
        a.fill() };
    var hk = function(a, b) { C.call(this);
        this.R = a;
        this.H = b;
        this.w = 0 };
    m(hk, C);
    hk.prototype.update = function(a) { this.w += a / this.H;
        a = (this.w + .1) % 1;
        var b = (.8 - .2) / 2,
            b = b + .2 - b * Math.cos(Math.PI * a / .25);
        .25 < a && .75 > a && (b = .8);
        this.Aa = b };
    hk.prototype.ya = function(a) {
        var b = this.R * (.7 + .5 * this.Aa),
            c = a.createRadialGradient(0, 0, 0, 0, 0, b);
        c.addColorStop(0, "rgba(255, 255, 255, 1)");
        c.addColorStop(.6, "rgba(245, 245, 255, .7)");
        c.addColorStop(.8, "rgba(225, 225, 255, .25)");
        c.addColorStop(1, "rgba(210, 210, 255, 0)");
        a.fillStyle = c;
        a.beginPath();
        a.arc(0, this.Aa, b, 0, 2 * Math.PI, !1);
        a.fill() };
    var fk = function() { C.call(this) };
    m(fk, C);
    fk.prototype.ya = function(a) { a.fillStyle = "#fff";
        a.beginPath();
        a.moveTo(-1, -1);
        a.lineTo(-1, 114);
        a.lineTo(101, 56);
        a.lineTo(-1, -1);
        a.fill() };
    var jk = function(a, b, c) { I.call(this);
        this.w = a;
        this.R = b;
        this.H = c };
    m(jk, I);
    jk.prototype.ya = function(a) { a.fillStyle = this.w;
        a.fillRect(0, 0, this.R, this.H) };
    var kk = function() { this.o = new C };
    ea(kk);
    kk.prototype.reset = function() { this.o = new C };
    var nk = function(a, b) {
            var c = lk,
                d = [];
            Fj(c.o, function(a) {
                if (a.o) d.push(a);
                else return !0 });
            for (var e = 0; e < d.length; e++) d[e].update(a);
            var d = [],
                f = 0;
            Fj(c.o, function(a) {
                if (a.o) d.push(a), a.Ha.order = ++f, a.Ha.yb = a.s + (a.V ? a.V.Ha.yb : 0);
                else return !0 });
            d.sort(function(a, b) {
                return a.Ha.yb != b.Ha.yb ? a.Ha.yb - b.Ha.yb : a.Ha.order - b.Ha.order });
            b.save();
            for (e = 0; e < d.length; e++) mk(b, Ej(d[e])), b.globalAlpha = d[e].Aa, d[e].ya(b);
            b.restore() },
        mk = function(a, b) { a.setTransform(b.w, b.S, b.R, b.H, b.s, b.o) };
    var ok = function() { this.w = !1 };
    ok.prototype.update = function() {
        return this.w ? (this.w = !1, 1) : 0 };
    ok.prototype.Ja = ca;
    ok.prototype.Ka = ca;
    var pk = kk.ka(),
        qk = function(a, b) { this.w = !1;
            this.T = a;
            this.$ = b;
            this.V = Ld(25, 25, 590, 310);
            this.R = new Yj;
            F(this.R, 320, 180);
            this.o = new ik;
            F(this.o, 310, 60);
            this.o.s = 2;
            this.S = new bk;
            this.H = new jk("white", 640, 360);
            this.H.s = 460;
            this.s = new I;
            D(this.s, this.R);
            D(this.s, this.S);
            D(this.s, this.o);
            D(this.s, this.H) };
    m(qk, ok);
    qk.prototype.Ja = function() { this.o.w.Aa = 0;
        this.H.Aa = 0;
        var a = this;
        Md(this.T, this.V, function(b) {
            switch (b) {
                case "mouseup":
                    J(a.s, new O(a.H, 150, 0, 1));
                    K(a.s, 300, function() { a.w = !0;
                        a.$ && ($d(a.$, function() { Pd.ka().stop() }), Pd.ka().start()) });
                    break;
                case "mouseover":
                    dk(a.S);
                    a.o.T = [];
                    M(a.o, new O(a.o.w, 200, a.o.w.Aa, 1));
                    break;
                case "mouseout":
                    ek(a.S), a.o.T = [], M(a.o, new O(a.o.w, 200, a.o.w.Aa, 0)) } });
        D(pk.o, this.s) };
    qk.prototype.Ka = function() { E(this.s);
        xd(this.T.o, this.V);
        document.getElementById("hplogo").removeAttribute("title") };
    var rk = Xe.ka(),
        P = function(a, b) { I.call(this);
            this.va = this.ma = this.time = 0;
            this.W = !1;
            ka(a[0]) ? this.R = { Ca: a, duration: 0, x: 0, y: 0, z: null, children: null } : (this.ra = a, this.R = this.ra[this.va]);
            this.Bc = b ? b : ca };
    m(P, I);
    var sk = function(a) {
            for (var b = 0, c = 0; c < a.length; c++) b += 0 < a[c].duration ? a[c].duration : 83;
            return b },
        Q = function(a, b, c, d, e) {
            return va(a, function(a) {
                return { Ca: a, duration: b, x: c, y: d, z: void 0 === e ? null : e, children: null } }) },
        R = function(a, b, c, d, e) { a = Q(a, b, c, d, e);
            0 < a.length && (a[a.length - 1].duration = 0);
            return a },
        tk = function(a, b) { a = va(a, function(a) {
                var c = { Ca: a[0], duration: b, x: a[1], y: a[2], z: null, children: null };
                4 == a.length && a[3] && (c.children = tk(a[3], b));
                return c });
            0 < a.length && (a[a.length - 1].duration = 0);
            return a };
    P.prototype.Ya = function() {
        var a = this.ra[this.va].duration;
        0 < a && this.ma > a && (this.va = ++this.va % this.ra.length, this.ma -= a);
        this.R = this.ra[this.va] };
    P.prototype.update = function(a) { P.Da.update.call(this, a);
        this.Bc(a);
        this.ma += a;
        this.ra && this.Ya() };
    P.prototype.ya = function(a) { P.Da.ya.call(this, a);
        if (this.R.Ca) {
            var b = this.R.x || 0,
                c = this.R.y || 0;
            rk.ya(this.R.Ca, a, b, c, 1, !0, this.W);
            if (this.R.children)
                for (var d = 0, e; e = this.R.children[d]; d++) rk.ya(e.Ca, a, b + (e.x || 0), c + (e.y || 0), 1, !0, this.W) } };
    var uk = function(a) {
            return a.R.Ca[3] },
        vk = function(a, b) { a.ra = null;
            a.R = { Ca: b, duration: 0, x: 0, y: 0, z: null, children: null } };
    var wk = function(a, b, c, d, e, f) { H.call(this, c, null, this.ub);
        this.U = a;
        this.T = f || ca;
        this.ha = b;
        e && (this.H = new Uj(a, c, d, e)) };
    m(wk, H);
    wk.prototype.update = function(a) { this.H && this.H.update(a);
        wk.Da.update.call(this, a) };
    wk.prototype.ub = function() { this.U.qa(this.ha);
        this.T() };
    var S = function(a, b) { this.state = 0;
        this.bc = a;
        this.Oa = b || {};
        P.call(this, this.bc[this.state]) };
    m(S, P);
    S.prototype.Ya = function() {
        var a = this.bc[this.state];
        a && (this.ra = a, S.Da.Ya.call(this)) };
    var T = function(a, b, c, d, e, f) { J(a, new wk(a, b, c, d, e, f)) };
    S.prototype.qa = function(a) { this.Oa.hasOwnProperty(this.state) && this.Oa[this.state].stop();
        this.state = a;
        this.va = this.ma = 0;
        this.Ya();
        this.Oa.hasOwnProperty(a) && this.Oa[a].play() };
    var xk = function(a, b, c, d, e) { a = p([0, a, 1, b, 2, c, 3, d, 4, e]);
        S.call(this, a);
        this.state = 0 };
    m(xk, S);
    var yk = Q([ei, ei, ei, ei, ei, ei, fi, [1, 85, 1196, 81, 74],
            [1, 169, 1196, 81, 74], fi, fi
        ], 83, 0, 0),
        zk = R([
            [1, 648, 1196, 81, 74],
            [1, 337, 1200, 81, 74],
            [1, 732, 1203, 81, 74],
            [1, 816, 1203, 81, 74]
        ], 83, 0, 0),
        Ak = R([
            [17, 2290, 797, 64, 84]
        ], 83, 0, -2),
        Bk = R([
            [17, 2290, 884, 64, 84],
            [17, 387, 1134, 64, 84]
        ], 83, 0, -2),
        Ck = Q([
            [17, 1656, 1014, 100, 113],
            [17, 1759, 1014, 100, 113],
            [17, 1862, 1014, 100, 113],
            [17, 1965, 1014, 100, 113],
            [17, 360, 1018, 100, 113],
            [17, 0, 1032, 100, 113]
        ], 83, 0, -2),
        Dk = Q([B, B, B, B, B, B, B, B, B, B, B, B, B, B, B, B, B, B, B, B, bi, bi, ci, ci, ci, ci, ci, ci, bi, bi], 83, 0, 0),
        Ek = R([
            [17, 792, 1160, 63, 82]
        ], 83, 0, 0),
        Fk = R([
            [17, 858, 1160, 63, 82],
            [17, 924, 1160, 63, 82]
        ], 83, 0, 0),
        Gk = Q([
            [17, 2256, 0, 104, 113],
            [17, 2256, 116, 104, 113],
            [17, 2256, 232, 104, 113],
            [17, 1335, 1014, 104, 113],
            [17, 1442, 1014, 104, 113],
            [17, 1549, 1014, 104, 113]
        ], 83, 0, 0),
        Hk = Q([Bh, Bh, Bh, Bh, Ch, Ch, Dh, Dh, Eh, Eh, Fh, Fh, Fh, Fh, Fh, Fh, Fh, Fh, Fh, Fh, Eh, Eh, Dh, Dh, Ch, Ch, Bh, Bh, Bh, Bh], 83, 0, 0),
        Ik = R([
            [1, 1105, 1073, 102, 87],
            [1, 1210, 1073, 102, 87],
            [1, 480, 1075, 102, 87],
            [1, 585, 1095, 102, 87],
            [1, 690, 1106, 102, 87],
            [1, 375, 1110, 102, 87]
        ], 83, 0, 0),
        Jk = R([
            [17, 990, 1160, 61,
                84
            ]
        ], 83, 0, -6),
        Kk = R([
            [17, 1054, 1160, 61, 84],
            [17, 1118, 1160, 61, 84]
        ], 83, 0, -6),
        Lk = Q([
            [17, 2068, 1122, 92, 113],
            [17, 1335, 1130, 92, 113],
            [17, 1430, 1130, 92, 113],
            [17, 1525, 1130, 92, 113],
            [17, 1620, 1130, 92, 113],
            [17, 1715, 1130, 92, 113]
        ], 83, 0, -6),
        Mk = Q([vh, vh, wh, wh, xh, xh, yh, yh, zh, zh], 83, 0, 0),
        Nk = R([
            [1, 965, 1163, 82, 78],
            [1, 1050, 1163, 82, 78],
            [1, 1135, 1163, 82, 78],
            [1, 1220, 1163, 82, 78]
        ], 83, 0, 0),
        Ok = Q([
            [17, 2278, 975, 76, 75],
            [17, 1986, 1130, 76, 75],
            [17, 103, 1140, 76, 75],
            [17, 182, 1140, 76, 75],
            [17, 0, 1148, 76, 75]
        ], 83, 0, 1),
        Pk = R([
            [17, 1898, 1130, 85, 81],
            [17,
                299, 1134, 85, 81
            ]
        ], 83, 0, 1),
        Qk = Q([
            [17, 2068, 1014, 95, 105],
            [17, 103, 1032, 95, 105],
            [17, 201, 1032, 95, 105],
            [17, 463, 1089, 95, 105],
            [17, 2166, 1121, 95, 105],
            [17, 2264, 1121, 95, 105]
        ], 83, 0, 1),
        Rk = 83 * Pk.length;
    var Sk = function() { C.call(this);
        var a = new jk("#000", 640, 46);
        F(a, 0, 0);
        D(this, a);
        a = new jk("#000", 640, 46);
        F(a, 0, 314);
        D(this, a);
        this.s = 463 };
    m(Sk, C);
    var Tk = /#(.)(.)(.)/,
        Uk = /^#(?:[0-9a-f]{3}){1,2}$/i;
    var Vk = function(a, b, c) { b *= c.length;
            for (var d = 0, e = c[0]; 0 <= b && d < c.length;) {
                var e = c[d],
                    f = Math.min(b, 1);
                if (1 > f) {
                    var h = e = new Jj(e.o, e.T, e.s, e.S, e.w, e.R, e.H, e.V);
                    if (1 != f) {
                        var l = n(h.o, h.s, f),
                            t = n(h.T, h.S, f),
                            W = n(h.s, h.w, f),
                            L = n(h.S, h.R, f),
                            ja = n(h.w, h.H, f),
                            Ua = n(h.R, h.V, f);
                        h.s = l;
                        h.S = t;
                        l = n(l, W, f);
                        t = n(t, L, f);
                        W = n(W, ja, f);
                        L = n(L, Ua, f);
                        h.w = l;
                        h.R = t;
                        h.H = n(l, W, f);
                        h.V = n(t, L, f) } }
                h = a;
                f = e;
                h.save();
                h.beginPath();
                h.moveTo(f.o, f.T);
                h.bezierCurveTo(f.s, f.S, f.w, f.R, f.H, f.V);
                h.stroke();
                h.restore();
                d++;
                b-- }
            return e },
        Wk = [255, 255,
            255
        ];
    var Xk = function(a, b, c) {
            a.save();
            a.translate(b - 73, c - 15);
            a.beginPath();
            a.moveTo(66.7, 352.6);
            a.bezierCurveTo(66.7, 352.6, 67.8, 279.6, 67.8, 263.1);
            a.bezierCurveTo(67.8, 246.6, 50.3, 247.1, 43.3, 234.8);
            a.bezierCurveTo(36.4, 222.6, 8.7, 156.5, 49.7, 150.1);
            a.bezierCurveTo(52.4, 115.5, 56.1, 50.6, 57.7, 29.2);
            a.bezierCurveTo(59.3, 7.9, 90.2, 13.3, 89.7, 29.8);
            a.bezierCurveTo(89.1, 46.3, 87.5, 111.3, 87.5, 111.3);
            a.bezierCurveTo(87.5, 111.3, 93.4, 103.3, 107.2, 105.9);
            a.bezierCurveTo(121.1, 108.6, 124.8, 122.5, 124.8, 122.5);
            a.bezierCurveTo(124.8,
                122.5, 149.9, 98.5, 161, 134.7);
            a.bezierCurveTo(176.5, 117.7, 188.2, 133.6, 189.8, 145.9);
            a.bezierCurveTo(191, 155.5, 196.2, 192.8, 189.3, 215.7);
            a.bezierCurveTo(182.3, 238.6, 163.7, 264.7, 163.7, 264.7);
            a.lineTo(162.6, 352.6);
            a.lineWidth = 9;
            a.strokeStyle = "rgb(255, 255, 255)";
            a.lineCap = "round";
            a.lineJoin = "round";
            a.stroke();
            a.restore()
        },
        Yk = function(a, b, c) {
            a.save();
            a.translate(b, c);
            a.save();
            a.beginPath();
            a.moveTo(12.5, 43.5);
            a.lineTo(.2, 54.7);
            a.lineTo(0, 0);
            a.lineTo(44.9, 33.4);
            a.lineTo(25.9, 36.3);
            a.lineTo(33.4, 53);
            a.lineTo(21,
                59.2);
            a.lineTo(12.5, 43.5);
            a.closePath();
            a.fillStyle = "rgb(255, 255, 255)";
            a.fill();
            a.beginPath();
            a.moveTo(36.8, 31.1);
            a.lineTo(3, 6);
            a.lineTo(3.2, 46.8);
            a.lineTo(13.2, 36.2);
            a.lineTo(22.3, 55.2);
            a.lineTo(29.4, 51.7);
            a.lineTo(20.2, 32.7);
            a.lineTo(36.8, 31.1);
            a.closePath();
            a.fillStyle = "rgb(1, 1, 1)";
            a.fill();
            a.restore();
            a.restore()
        },
        Zk = [new Jj(390.1, 169.5, 406.9, 185.5, 430.7, 194.3, 476, 162.2), new Jj(452.4, 164.3, 455.4, 164.2, 472.5, 162.8, 475.1, 162.6), new Jj(466.6, 183.9, 467.2, 178.4, 472.8, 167.5, 475.7, 162.6)],
        $k = function(a,
            b, c, d) {
            return new Jj(a, b, a, b, c, d, c, d) };
    var Qb = Ja({ Vc: 0, Wc: 1, Xc: 2, Yc: 3, Zc: 4, $c: 5, ad: 6, dd: 7, hd: 8 }),
        al = [
            [$k(0, -100, 0, 100)], null, [$k(175, 0, -175, 0)], null, null, null, [$k(25, -62.5, -25, 0), $k(-25, 0, 31, -4), $k(31, -4, -19, 58.5)], null, null
        ],
        bl = [new u(50, 180), null, new u(320, 240), null, null, null, new u(410, 190), null, null],
        cl = [null, null, null, null, x.wc, null, x.xc, null, null],
        dl = Rb("#0000ff #22ff43 #ff0000 #ffff00 #ff69b4 #4682b4 #ffd700 #800080 #ff9900".split(" ")),
        el = function(a) {
            if (!Uk.test(a)) throw Error("o`" + a);
            4 == a.length && (a = a.replace(Tk, "#$1$1$2$2$3$3"));
            a = a.toLowerCase();
            return [parseInt(a.substr(1, 2), 16), parseInt(a.substr(3, 2), 16), parseInt(a.substr(5, 2), 16)]
        },
        fl = {},
        gl;
    for (gl in dl) fl[gl] = el.call(void 0, dl[gl]);
    var hl = Rb([
            [2, 3611, 0, 6, 20],
            [2, 2923, 161, 21, 19],
            [2, 2057, 171, 21, 6],
            [2, 2057, 149, 22, 19],
            [2, 2057, 127, 24, 19], null, [2, 2249, 90, 17, 19], null, null
        ]),
        il = Rb(al),
        jl = Rb(bl),
        kl = Rb(cl);
    var ll = function(a, b, c) { this.o = a;
            this.s = b;
            this.w = c },
        U = function(a, b, c, d) {
            return new ll(ml(a, b), 1E3 * c, nl(d)) },
        nl = function(a) {
            for (var b = [], c = 0; c < a.length; c++) b.push(ol[a[c]]);
            return b },
        ol = { "|": 0, "^": 1, "-": 2, v: 3, z: 6, 3: 4 },
        ml = function(a, b) { a = 2 * a * Math.PI / 360;
            return new u(320 + Math.cos(a) * b, Math.sin(a) * b + 203) };
    var pl = function() { this.o = [] };
    ea(pl);
    var V = function(a, b, c) {
            for (var d = a.o.slice(0), e = 0; e < d.length; e++) - 1 != a.o.indexOf(d[e]) && d[e].Na(b, c) },
        ql = function(a, b) {
            for (var c = a.o.indexOf(b); - 1 != c;) a.o.splice(c, 1), c = a.o.indexOf(b) };
    pl.prototype.ta = function() { this.o = [] };
    var rl = pl.ka(),
        Ml = function() {
            var a = p([0, sl, 1, tl, 2, ul, 3, vl, 4, wl, 5, xl, 6, yl, 7, zl, 8, Al, 9, Bl, 10, Cl, 11, Dl, 12, El, 13, Fl, 14, Gl, 15, Hl, 16, Il, 17, Jl, 18, Kl, 19, Ll]);
            S.call(this, a) };
    m(Ml, S);
    var tl = tk([
            [Vh, 33, 5, [
                [gi, -2, -27]
            ]]
        ], 83),
        sl = tk([
            [
                [1, 1313, 102, 64, 65], 62, 47
            ],
            [
                [1, 0, 1115, 82, 90], 47, 31
            ],
            [
                [1, 653, 161, 149, 138], 29, 27
            ],
            [
                [1, 999, 0, 159, 166], 28, 0
            ]
        ], 83),
        ul = tk([
            [Vh, 33, 3, [
                [gi, -2, -25]
            ]],
            [Vh, 33, 1, [
                [gi, -2, -23]
            ]]
        ], 83),
        vl = tk([
            [Vh, 33, 5, [
                [gi, -3, -23]
            ]],
            [
                [1, 835, 0, 161, 162], 27, 4
            ],
            [
                [1, 468, 0, 182, 163], 2, 3
            ]
        ], 83),
        wl = tk([
            [A, 0, 1],
            [A, 0, 1],
            [A, 0, 1]
        ], 83),
        xl = tk([
            [A, 0, 1],
            [A, 0, 1],
            [A, 0, 1],
            [A, 0, 1],
            [A, 0, 3],
            [A, 0, -1],
            [A, 0, -3],
            [A, 0, -1],
            [A, 0, 1],
            [A, 0, 3],
            [A, 0, -1],
            [A, 0, -3],
            [A, 0, -1],
            [A, 0, 1],
            [A, 0, 3]
        ], 83),
        yl = tk([
            [
                [1, 805, 165, 147, 154],
                36, 0
            ],
            [
                [1, 1161, 0, 149, 149], 47, 0
            ],
            [
                [1, 1161, 152, 149, 145], 80, 0
            ]
        ], 83),
        zl = R([
            [1, 468, 166, 143, 166]
        ], 83, 33, 0),
        Al = R([Wh, [15, 3889, 230, 52, 61],
            [15, 3944, 230, 52, 61]
        ], 83, 0, 0),
        Cl = R([Wh], 83, 0, 0),
        Dl = R([
            [14, 2514, 0, 52, 61]
        ], 83, 0, 0),
        Bl = Q([
            [14, 2095, 726, 195, 218],
            [14, 2293, 726, 195, 218],
            [14, 2095, 947, 195, 218],
            [14, 2293, 947, 195, 218]
        ], 83, 0, 0),
        El = R([Xh, Yh, Zh, $h, Xh, Yh, Zh, $h, [12, 786, 987, 390, 360],
            [12, 0, 1299, 390, 360],
            [12, 393, 1350, 390, 360],
            [12, 786, 1350, 390, 360]
        ], 83, 0, 0),
        Fl = Q([
            [12, 0, 0, 415, 309],
            [12, 418, 0, 415, 309],
            [12, 836, 0, 415, 309],
            [12,
                0, 312, 415, 309
            ],
            [12, 418, 312, 415, 309],
            [12, 836, 312, 415, 309],
            [12, 0, 624, 415, 309]
        ], 83, 0, 25),
        Gl = R([
            [17, 0, 0, 373, 360],
            [17, 376, 0, 373, 360],
            [17, 752, 0, 373, 360],
            [17, 1128, 0, 373, 360]
        ], 83, 0, 0),
        Hl = Q([
            [17, 1504, 0, 373, 360],
            [17, 1880, 0, 373, 360],
            [17, 0, 363, 373, 360],
            [17, 376, 363, 373, 360]
        ], 83, 0, 0),
        Il = R([
            [17, 620, 726, 59, 67]
        ], 83, 0, 0),
        Jl = R([
            [15, 0, 0, 423, 360],
            [15, 426, 0, 423, 360],
            [15, 852, 0, 423, 360],
            [15, 1278, 0, 423, 360],
            [15, 1704, 0, 423, 360],
            [15, 2130, 0, 423, 360],
            [15, 2556, 0, 423, 360],
            [15, 2982, 0, 423, 360],
            [15, 3408, 0, 423, 360]
        ], 83, 0, 25),
        Kl = R([
            [13,
                0, 0, 416, 360
            ],
            [13, 419, 0, 416, 360],
            [13, 838, 0, 416, 360],
            [13, 1257, 0, 416, 360],
            [13, 1676, 0, 416, 360],
            [13, 2095, 0, 416, 360],
            [13, 2514, 0, 416, 360],
            [13, 2933, 0, 416, 360],
            [13, 3352, 0, 416, 360],
            [13, 3771, 0, 416, 360],
            [13, 0, 363, 416, 360],
            [13, 419, 363, 416, 360],
            [13, 838, 363, 416, 360],
            [13, 1257, 363, 416, 360],
            [13, 1676, 363, 416, 360],
            [13, 2095, 363, 416, 360],
            [13, 2514, 363, 416, 360],
            [13, 2933, 363, 416, 360],
            [13, 3352, 363, 416, 360],
            [13, 3771, 363, 416, 360],
            [14, 0, 0, 416, 360]
        ], 83, 0, 25),
        Ll = R([
            [14, 419, 0, 416, 360],
            [14, 838, 0, 416, 360],
            [14, 1257, 0, 416, 360],
            [14,
                1676, 0, 416, 360
            ],
            [14, 2095, 0, 416, 360],
            [14, 0, 363, 416, 360],
            [14, 419, 363, 416, 360],
            [14, 838, 363, 416, 360],
            [14, 1257, 363, 416, 360],
            [14, 1676, 363, 416, 360],
            [14, 2095, 363, 416, 360],
            [14, 0, 726, 416, 360],
            [14, 419, 726, 416, 360],
            [14, 838, 726, 416, 360],
            [14, 1257, 726, 416, 360],
            [14, 1676, 726, 416, 360]
        ], 83, 0, 25),
        Nl = R([
            [1, 399, 1378, 40, 40],
            [1, 1205, 1405, 40, 40],
            [1, 1149, 1409, 40, 40]
        ], 83, 0, 0),
        Ol = 83 * sl.length,
        Pl = 83 * vl.length,
        Ql = 83 * wl.length,
        Rl = 83 * xl.length,
        Sl = 83 * El.length,
        Tl = 83 * Gl.length,
        Ul = new u(475, 181),
        Vl = new u(Ul.x - 90, Ul.y),
        Wl = 83 * Jl.length,
        Xl = 83 * Kl.length,
        Yl = 83 * Ll.length;
    Ml.prototype.update = function(a) { this.w && 5 == this.w.state && (this.w = null, N(this), this.T = [], x.Ub.stop(), this.qa(17), Xj(this, 300, null, Ul), M(this, new wk(this, 13, Wl)));
        Ml.Da.update.call(this, a) };
    var Zl = function(a) { T(a, 18, 4E3);
        Wj(a, new H(1E3, null, function() { x.Ub.play() }));
        T(a, 19, Xl, Ul, Vl, function() { x.Zb.play();
            V(rl, 6);
            Xj(a, 300, null, Ul);
            Zl(a) });
        T(a, 13, Yl) };
    var $l = Xe.ka(),
        am = 206 + Oh[4] / 2,
        bm = Q([
            [8, 2389, 0, 53, 74],
            [8, 2389, 77, 53, 74],
            [8, 2327, 80, 53, 74],
            [8, 2383, 154, 53, 74],
            [8, 2327, 157, 53, 74],
            [8, 2383, 231, 53, 74],
            [8, 2327, 234, 53, 74],
            [8, 2383, 308, 53, 74],
            [8, 2327, 311, 53, 74],
            [8, 2383, 385, 53, 74],
            [8, 2327, 388, 53, 74],
            [8, 2383, 462, 53, 74],
            [8, 2327, 465, 53, 74],
            [8, 0, 705, 53, 74],
            [8, 56, 705, 53, 74],
            [8, 112, 705, 53, 74],
            [8, 168, 705, 53, 74],
            [8, 224, 705, 53, 74],
            [8, 280, 705, 53, 74],
            [8, 336, 705, 53, 74],
            [8, 392, 705, 53, 74],
            [8, 448, 705, 53, 74],
            [8, 504, 705, 53, 74],
            [8, 560, 705, 53, 74]
        ], 83, 545, 155, am - 1),
        cm = Q([
            [6,
                480, 0, 199, 123
            ],
            [6, 682, 0, 199, 123],
            [6, 884, 0, 199, 123],
            [6, 1086, 0, 199, 123],
            [6, 1288, 0, 199, 123],
            [6, 1490, 0, 199, 123],
            [6, 1692, 0, 199, 123],
            [6, 1894, 0, 199, 123],
            [6, 2096, 0, 199, 123],
            [6, 2298, 0, 199, 123],
            [6, 2500, 0, 199, 123],
            [6, 2702, 0, 199, 123],
            [6, 2904, 0, 199, 123],
            [6, 3106, 0, 199, 123],
            [6, 3308, 0, 199, 123],
            [6, 3510, 0, 199, 123],
            [6, 3712, 0, 199, 123],
            [6, 3914, 0, 199, 123],
            [6, 4116, 0, 199, 123],
            [6, 4318, 0, 199, 123],
            [6, 4520, 0, 199, 123],
            [6, 4722, 0, 199, 123],
            [6, 4924, 0, 199, 123],
            [6, 4924, 0, 199, 123],
            [6, 4924, 0, 199, 123],
            [6, 5126, 0, 199, 123],
            [6, 5328, 0, 199,
                123
            ],
            [6, 5530, 0, 199, 123]
        ], 83, 329, 81, 0),
        dm = Q([Rh, [2, 2443, 0, 169, 158],
            [2, 2615, 0, 169, 158],
            [2, 2787, 0, 169, 158]
        ], 83, Rh[3] / 2, 360 - Rh[4] / 2, 273),
        em = [$l.o[Ue(2)], $l.o[Ue(3)], $l.o[Ue(4)], $l.o[Ue(5)]],
        mm = [{
            title: q("Level Start - Level 1"),
            background: [4, 643, 0, 640, 360],
            Ab: [R([Sh], 83, Sh[3] / 2, 360 - Sh[4] / 2, 360 - Sh[4]), R([Th], 83, 640 - Th[3] / 2, 360 - Th[4] / 2, 360 - Sh[4] / 2), dm],
            Cb: [],
            Db: [6, 7],
            Fb: function(a) {
                var b = function(a) {
                        return X(1E3 * a) },
                    c = function(b) {
                        return fm(a, b) },
                    b = [c([U(-20, 295, 8, "-")]), b(.8), c([U(0, 295, 8, "|")]), b(.8),
                        c([U(150, 295, 8, "-")]), Y(a), c([U(0, 295, 8, "|"), U(160, 295, 8, "-"), U(190, 140, 8, "|")]), Y(a), b(1), c([U(0, 295, 8, "^")]), b(.4), c([U(-20, 295, 8, "-")]), b(.4), c([U(180, 295, 8, "v")]), b(.4), c([U(160, 295, 8, "|")]), Y(a), b(1), c([U(50, 140, 8, "-|")]), b(.5), c([U(190, 140, 8, "|^-")]), Y(a), b(1), c([U(-30, 295, 9, "|"), U(210, 295, 9, "|")]), b(.3), c([U(-10, 295, 9, "^"), U(190, 295, 9, "^")]), b(.3), c([U(10, 295, 9, "-"), U(170, 295, 9, "-")]), b(.3), c([U(30, 295, 9, "v"), U(150, 295, 9, "v")]), b(.3), Y(a), b(1), c([U(-30, 295, 12, "|"), U(150, 295, 12, "|")]), b(.3),
                        c([U(-10, 295, 12, "^"), U(170, 295, 12, "^")]), b(.3), c([U(10, 295, 12, "-"), U(190, 295, 12, "-")]), b(.3), c([U(30, 295, 12, "v"), U(210, 295, 12, "v")]), c([U(-10, 285, 0, "3")]), Y(a), b(2), gm(a), Y(a), b(1)
                    ];
                hm(a, b);
                return b
            },
            state: 13
        }, {
            title: q("Level Start - Level 2"),
            background: [7, 0, 0, 640, 360],
            Ab: [R([sf], 83, sf[3] / 2, 360 - sf[4] / 2, 360 - sf[4] / 2), R([tf], 83, 640 - tf[3] / 2, 360 - tf[4] / 2, 360 - tf[4] / 2), cm],
            Cb: [],
            Db: [8, 9],
            Fb: function(a) {
                var b = function(a) {
                        return X(1E3 * a) },
                    c = function(b) {
                        return fm(a, b) },
                    b = [b(1), c([U(-80, 140, 10, "--"), U(10, 140,
                        10, "|-"), U(100, 140, 10, "^-"), U(190, 140, 10, "v-")]), c([U(0, 295, 10, "z")]), Y(a), b(1), c([U(-80, 140, 10, "-^"), U(10, 140, 10, "|-"), U(100, 140, 10, "^v"), U(190, 140, 10, "v|")]), b(2), c([U(-35, 140, 10, "-^"), U(55, 140, 10, "|-"), U(145, 140, 10, "^v"), U(235, 140, 10, "v|")]), b(1), c([U(130, 217.5, 10, "z")]), Y(a), b(1), c([U(162, 140, 9, "|"), U(90, 140, 9, "-"), U(18, 140, 9, "|"), U(-54, 140, 9, "-"), U(-126, 140, 9, "|")]), b(2), c([U(-162, 217.5, 9, "^-|"), U(-90, 217.5, 9, "v-|"), U(-18, 217.5, 9, "^--"), U(54, 217.5, 9, "v--"), U(126, 217.5, 9, "^-|")]), Y(a), c([U(180,
                        217.5, 0, "3")]), b(1), c([U(-20, 295, 22, "z")]), c([U(-30, 140, 12, "|")]), b(.9), c([U(0, 140, 12, "^")]), b(.9), c([U(30, 140, 12, "v")]), b(.9), c([U(60, 140, 12, "-")]), b(.9), c([U(90, 140, 12, "v|")]), b(.9), c([U(120, 140, 12, "-^")]), b(.9), c([U(150, 140, 12, "|v")]), b(.9), c([U(180, 140, 12, "^-")]), b(.9), c([U(210, 140, 12, "v|")]), b(.9), c([U(240, 140, 12, "-^")]), b(.9), c([U(270, 140, 12, "|v")]), b(.9), c([U(300, 140, 12, "^-")]), Y(a), b(2), im(a), Y(a), b(1)];
                hm(a, b);
                return b
            },
            state: 14
        }, {
            title: q("Level Start - Level 3"),
            background: [9, 0, 0, 640, 360],
            Ab: [R([Ph], 83, Ph[3] / 2, 360 - Ph[4] / 2 - 5, 360 - Ph[4] / 2 - 5), R([Qh], 83, 640 - Qh[3] / 2, 360 - Qh[4] / 2 - 21, 360 - Qh[4] / 2 - 21 - 10), bm, R([Oh], 83, 546, 206, am)],
            Cb: [],
            Db: [10, 11],
            Fb: function(a) {
                var b = function(a) {
                        return X(1E3 * a) },
                    c = function(b) {
                        return fm(a, b) },
                    b = [b(1), c([U(120, 140, 8, "v-^"), U(15, 140, 8, "|-^")]), Y(a), c([U(-20, 295, 15, "-^-v-^-v"), U(20, 295, 15, "|^|v|^|v")]), Y(a), c([U(0, 295, 15, "-v^-"), U(190, 295, 15, "|v|-"), U(150, 295, 15, "|-|^")]), Y(a), b(1), c([U(-30, 295, 12, "^^-"), U(150, 295, 12, "vv-")]), b(1), c([U(170, 295, 20, "z")]), b(2), c([U(10,
                        295, 3, "-")]), b(3), c([U(-30, 295, 12, "|^|-"), U(150, 295, 12, "v|v-")]), b(3), c([U(170, 295, 3, "-")]), Y(a), c([U(0, 295, 15, "v|^-"), U(-30, 217.5, 15, "v-"), U(0, 217.5, 15, "|^-"), U(30, 217.5, 15, "^-"), U(150, 217.5, 15, "v^-"), U(180, 217.5, 15, "v|-"), U(210, 217.5, 15, "|-"), U(90, 140, 15, "|-"), U(0, 140, 15, "-"), U(180, 140, 15, "^-"), U(270, 140, 15, "v-")]), b(2), c([U(170, 295, 13, "z")]), Y(a), c([U(0, 295, 3, "-")]), b(.2), c([U(170, 295, 3, "|")]), b(.2), c([U(10, 295, 3, "^")]), b(.2), c([U(190, 295, 3, "v")]), b(.2), c([U(-15, 295, 3, "-")]), b(.2), c([U(160, 295,
                        3, "|")]), b(.2), c([U(5, 295, 3, "^")]), b(.2), c([U(10, 295, 23, "z")]), c([U(180, 295, 3, "v")]), b(.2), c([U(0, 295, 3, "-")]), b(.2), c([U(0, 295, 3, "-")]), b(.2), c([U(170, 295, 3, "|")]), b(.2), c([U(10, 295, 3, "^")]), b(.2), c([U(190, 295, 3, "v")]), b(.2), c([U(-15, 295, 3, "z")]), b(.2), c([U(160, 295, 3, "|")]), b(.2), c([U(5, 295, 3, "^")]), b(.2), c([U(-20, 295, 0, "3")]), c([U(180, 295, 3, "v")]), b(.2), c([U(0, 295, 3, "-")]), b(.2), Y(a), b(2), jm(a), Y(a), b(1)];
                hm(a, b);
                return b
            },
            state: 15
        }, {
            title: q("Level Start - Level 4"),
            background: [11, 0, 0, 640, 360],
            Ab: [],
            lc: new u(320, 220),
            Cb: [x.Vb],
            Db: [12, 13, 14, 15, 16],
            scale: .8,
            Fb: function(a) {
                var b = function(a) {
                        return X(1E3 * a) },
                    c = function(b) {
                        return fm(a, b) },
                    b = [c([U(0, 295, 12, "^^vv^^")]), b(1), c([U(180, 295, 3, "-")]), b(1.5), c([U(30, 295, 3, "|")]), b(1.5), c([U(150, 295, 3, "-")]), Y(a), c([U(-30, 295, 12, "-v-^-v-^")]), b(1), c([U(20, 295, 2, "|")]), b(2), c([U(20, 295, 2, "|")]), b(2), c([U(20, 295, 2, "|")]), b(2), c([U(20, 295, 2, "|")]), Y(a), c([U(-20, 295, 12, "vvvv"), U(160, 295, 12, "^^^^"), U(90, 140, 12, "||||")]), b(1), c([U(20, 295, 2, "-")]), b(2), c([U(20,
                        295, 2, "-")]), b(2), c([U(20, 295, 2, "-")]), b(2), c([U(20, 295, 2, "-")]), b(2), c([U(20, 295, 2, "-")]), Y(a), c([U(-20, 295, 12, "--v^--v^--")]), b(1), c([U(20, 295, 2, "|")]), b(2), c([U(20, 295, 2, "|")]), b(2), c([U(20, 295, 12, "--||-^-||")]), b(1), c([U(170, 295, 2, "v")]), b(2), c([U(170, 295, 2, "v")]), b(2), c([U(0, 295, 12, "v-v-v-")]), b(1), c([U(180, 295, 2, "^")]), b(2), c([U(180, 295, 2, "^")]), b(2), c([U(180, 295, 2, "^")]), b(2), c([U(180, 295, 2, "^")]), b(2), Y(a), c([U(-30, 295, 2, "|"), U(-10, 295, 3, "-"), U(10, 295, 4, "^"), U(30, 295, 5, "v"), U(150, 295, 6, "v-"),
                        U(170, 295, 7, "^|"), U(190, 295, 8, "v^"), U(210, 295, 9, "^v")
                    ]), Y(a), c([U(162, 217.5, 3, "|"), U(90, 217.5, 3, "-"), U(18, 217.5, 3, "|"), U(-54, 217.5, 3, "-"), U(-126, 217.5, 3, "|"), U(-162, 217.5, 9, "^-|^"), U(-90, 217.5, 9, "v-|v"), U(-18, 217.5, 9, "^--^"), U(54, 217.5, 9, "v--v"), U(126, 217.5, 9, "^-|^")]), Y(a), b(2), km(a), Y(a), b(1)];
                hm(a, b);
                return b
            },
            state: 16
        }, {
            title: q("Level Start - Level 5"),
            background: $e,
            backgroundPosition: new u(-$e[3] / 2 + 640, $e[4] / 2),
            scale: .44,
            Cb: [x.Ob],
            Db: [17, 18, 19],
            Ab: [],
            lc: new u(160, 230),
            Ba: new Ml,
            qc: !0,
            Fc: x.Pc,
            Fb: function(a) {
                var b = function(b) {
                        return fm(a, b) },
                    b = [b([U(230, 217.5, 9, "^")]), X(100), b([U(-90, 217.5, 9, "-")]), X(100), b([U(150, 295, 9, "v")]), X(100), b([U(190, 295, 9, "|")]), X(100), b([U(100, 217.5, 9, "v")]), X(100), b([U(-100, 217.5, 9, "-")]), X(100), b([U(160, 295, 9, "|")]), Y(a), lm(a, "-|-^-^-^z"), Y(a), b([U(-90, 217.5, 12, "vv"), U(160, 295, 12, "^^")]), X(2E3), b([U(-120, 295, 12, "--"), U(180, 295, 12, "||")]), X(2E3), b([U(-90, 217.5, 12, "v|"), U(160, 295, 12, "^-")]), Y(a), lm(a, "^|-v^|-vz"), Y(a), b([U(230, 217.5, 5, "^")]), X(100), b([U(-90,
                        217.5, 4, "-")]), X(100), b([U(150, 295, 5, "v")]), X(100), b([U(190, 295, 4, "|")]), X(100), b([U(100, 217.5, 5, "v")]), X(100), b([U(-100, 217.5, 4, "-")]), X(100), b([U(160, 295, 5, "|")]), X(100), b([U(240, 295, 4, "^")]), Y(a), lm(a, "vv-|vv-|^^vv|||z"), Y(a)];
                hm(a, b);
                return b
            },
            state: 17
        }],
        nm = function() {
            return Z.scale || 1 },
        om = function() {
            return Z.lc || oj },
        pm = function() {
            return Z.Fc || x.Yb },
        qm = function() {
            return va(Z.Cb, function(a) {
                return a.nb }).concat(va(Z.Db, function(a) {
                return $l.o[Ue(a)] })) },
        Z = mm[0];
    var rm = function(a, b, c, d) { H.call(this, Ij);
        this.H = a;
        this.ha = c;
        this.U = b;
        this.T = d || 0 };
    m(rm, H);
    rm.prototype.update = function(a) { rm.Da.update.call(this, a);
        a = Math.sin(this.U * this.w * 2 * Math.PI / 1E3);
        var b = this.H;
        b.Rb = a * this.T;
        yj(b);
        b = this.H;
        b.Sb = a * this.ha;
        yj(b) };
    var sm = pl.ka(),
        Im = function() {
            var a = Q([cg, dg, eg, fg, gg, hg, ig, jg, kg, lg, mg, ng, pg, qg, rg, sg, tg, ug, vg, wg, xg, yg, zg, Ag, Bg, Cg, Dg, Eg, Fg], 83, 0, 0),
                b = R([uf, vf, wf, xf], 83, 0, -31),
                c = Q([yi, zi, Ai, Bi, Ci, Di], 83, 10, -3),
                d = R([ri, si, ti, ui, vi, wi, xi], 83, 12, -21),
                e = R([Ei, Fi, Gi, Hi, Ii, Ji, Ki], 83, 0, -26.5),
                f = R([Zi, $i, aj, bj, cj, dj, ej], 83, 0, -19),
                h = R([fj, gj, hj, ij, jj, kj, lj], 83, 0, -27),
                l = Q([hh, ih, jh, kh, lh, mh], 83, 0, -5),
                t = R([nh, oh, ph, qh], 83, 14, -15),
                W = R([rh, ph, qh], 83, 14, -15),
                L = R([Li, Mi, Ni, Oi, Pi, Qi, Ri], 83, 6, -22),
                ja = R([Si, Ti, Ui, Vi, Wi, Xi, Yi], 83,
                    0, -28),
                Ua = R([yf, zf, Af, Bf, Cf, Df, Ef, Ff, Gf, Hf, If, Jf, Kf, Lf, Mf, Nf, Of, Pf, Qf, Rf, Sf, Tf, Uf, Vf, Wf, Xf, Yf, Zf, $f, ag, bg], 83, 0, 0),
                a = p([10, c, 1, b, 0, a, 14, c, 8, l, 2, d, 3, e, 4, f, 5, h, 6, L, 7, ja, 11, t, 12, W, 13, tm, 9, um, 16, Ua, 17, vm, 18, wm, 19, xm, 20, ym, 21, zm, 22, Am, 23, Bm, 24, Cm, 25, Dm, 26, Em, 27, Fm, 29, Gm, 28, Hm]),
                b = p([8, x.Kc]);
            S.call(this, a, b);
            F(this, 320, 180);
            this.w = 5;
            this.ta = this.w - 1;
            this.state = 0;
            this.Ea = 83 * Ua.length;
            this.Fa = 150;
            this.wa = 0;
            sm.o.push(this)
        };
    m(Im, S);
    var um = R([
            [2, 2057, 199, 146, 148],
            [2, 2057, 199, 146, 148],
            [2, 2864, 218, 146, 148],
            [2, 3013, 218, 146, 148],
            [2, 3162, 218, 146, 148],
            [2, 3311, 218, 146, 148],
            [2, 3460, 218, 146, 148],
            [2, 1808, 236, 146, 148],
            [2, 1286, 252, 146, 148],
            [2, 1435, 262, 146, 148],
            [2, 1584, 262, 146, 148],
            [2, 1134, 275, 146, 148],
            [2, 2206, 280, 146, 148],
            [2, 2355, 280, 146, 148],
            [2, 2504, 280, 146, 148],
            [2, 0, 286, 146, 148],
            [2, 149, 286, 146, 148],
            [2, 298, 286, 146, 148],
            [2, 2653, 296, 146, 148],
            [2, 2653, 296, 146, 148],
            [2, 2653, 296, 146, 148]
        ], 83, 0, -36),
        tm = R([rh], 83, 14, -15),
        vm = R([z, z, z, z, z, z, z, z, z,
            z, z, z, z, z, [1, 125, 293, 122, 134],
            [1, 250, 293, 122, 134], z, z, z, z, z, z, z, Gg, Gg, Hg, Hg, Ig, Ig, Jg, Jg, Kg, Kg, Lg, Lg, Mg, Mg, Ng, Ng, Og, Og, Pg, Pg, Qg, Qg, Rg, Rg, Sg, Sg, Sg, Sg, Sg
        ], 83, 0, -9),
        wm = R([
            [1, 625, 459, 122, 134], Tg, Tg, Tg, Tg, Tg, Tg, Tg, Tg, [1, 375, 472, 122, 134],
            [1, 0, 567, 122, 134], Ug, Ug, Vg, Vg, Vg, Vg, Vg, Vg, Vg, Vg, Vg, Vg, Vg, Vg, Vg, Vg, Vg, Vg, Wg, Wg, Wg, Wg, Wg, Wg, [1, 1E3, 574, 122, 134],
            [1, 1125, 574, 122, 134]
        ], 83, 0, -9),
        xm = R([Xg, Xg, Xg, Xg, Yg, Zg, $g, $g, Yg, Zg, Zg, $g, $g, [1, 125, 704, 122, 134],
            [1, 250, 704, 122, 134]
        ], 83, 0, -9),
        ym = R([ah, ah, ah, ah, ah, [1, 1E3, 711, 122,
                134
            ],
            [1, 1125, 711, 122, 134],
            [1, 1250, 711, 122, 134], bh, bh, bh, ch, ch, ch, ch, [1, 750, 744, 122, 134], dh, dh, dh, dh, dh, dh, dh, dh, dh, dh, [1, 0, 841, 122, 134],
            [1, 125, 841, 122, 134],
            [1, 250, 841, 122, 134], eh, eh, eh, eh, eh, eh, eh, eh, eh, eh, eh, eh, eh, eh, [1, 0, 841, 122, 134], fh, fh, fh, fh, [1, 1125, 848, 122, 134]
        ], 83, 0, -9),
        zm = R([
            [1, 1250, 848, 122, 134],
            [1, 500, 850, 122, 134],
            [1, 625, 870, 122, 134],
            [1, 750, 881, 122, 134], gh, gh, gh, gh, gh, gh, gh, gh, gh, [1, 0, 978, 122, 134],
            [1, 125, 978, 122, 134],
            [1, 250, 978, 122, 134],
            [1, 875, 985, 122, 134]
        ], 83, 0, -9),
        Am = R([
            [15, 3834, 0, 99,
                112
            ],
            [15, 3936, 0, 99, 112],
            [15, 3834, 115, 99, 112],
            [15, 3936, 115, 99, 112]
        ], 83, -2, 17),
        Bm = R([
            [17, 2170, 797, 117, 86]
        ], 83, 20, -2),
        Cm = R([
            [17, 120, 943, 117, 86],
            [17, 240, 943, 117, 86]
        ], 83, 20, -2),
        Dm = R([
            [17, 2170, 886, 117, 86],
            [17, 0, 943, 117, 86]
        ], 83, 20, -2),
        Em = R([
            [17, 752, 363, 307, 214],
            [17, 1062, 363, 307, 214],
            [17, 1372, 363, 307, 214],
            [17, 1682, 363, 307, 214],
            [17, 1992, 363, 307, 214],
            [17, 752, 580, 307, 214],
            [17, 1062, 580, 307, 214],
            [17, 1372, 580, 307, 214],
            [17, 1682, 580, 307, 214],
            [17, 1992, 580, 307, 214],
            [17, 1992, 580, 307, 214],
            [17, 0, 726, 307, 214],
            [17, 310,
                726, 307, 214
            ],
            [17, 620, 797, 307, 214],
            [17, 930, 797, 307, 214],
            [17, 1240, 797, 307, 214],
            [17, 1550, 797, 307, 214],
            [17, 1860, 797, 307, 214]
        ], 83, 60, -35),
        Fm = Q([
            [17, 561, 1160, 74, 81],
            [17, 561, 1160, 74, 81],
            [17, 638, 1160, 74, 81],
            [17, 638, 1160, 74, 81],
            [17, 715, 1160, 74, 81],
            [17, 715, 1160, 74, 81]
        ], 83, -14, 0),
        Hm = R([
            [18, 0, 0, 184, 183],
            [18, 187, 0, 184, 183],
            [18, 374, 0, 184, 183],
            [18, 561, 0, 184, 183],
            [18, 561, 0, 184, 183],
            [18, 561, 0, 184, 183],
            [18, 748, 0, 184, 183],
            [18, 935, 0, 184, 183],
            [18, 1122, 0, 184, 183],
            [18, 1309, 0, 184, 183],
            [18, 1496, 0, 184, 183],
            [18, 1683, 0, 184,
                183
            ],
            [18, 1870, 0, 184, 183],
            [18, 2057, 0, 184, 183],
            [18, 2244, 0, 184, 183]
        ], 83, -62, 38),
        Gm = Q([
            [17, 471, 943, 105, 143],
            [17, 2170, 975, 105, 143],
            [17, 579, 1014, 105, 143],
            [17, 687, 1014, 105, 143],
            [17, 795, 1014, 105, 143],
            [17, 903, 1014, 105, 143],
            [17, 1011, 1014, 105, 143],
            [17, 1119, 1014, 105, 143],
            [17, 1227, 1014, 105, 143]
        ], 83, -124, 65),
        Jm = 83 * um.length,
        Km = 83 * tm.length,
        Lm = 83 * xm.length,
        Mm = 83 * ym.length,
        Nm = 83 * vm.length,
        Om = 83 * zm.length,
        Pm = 83 * Em.length,
        Qm = 83 * Hm.length,
        Rm = p([0, 2, 1, 3, 2, 4, 3, 5, 4, 6, 5, 0, 6, 7, 7, 0, 8, 0]);
    Im.prototype.Kb = function() { 0 >= this.wa && 1 != this.state && (this.w = Math.max(0, this.w - 1), T(this, 1, 0), this.$a() ? (V(sm, 0), T(this, 16, 350), T(this, 0, this.Ea), K(this, 0, function() { V(sm, 16) })) : (this.wa = this.Fa, T(this, 0, 350)));
        this.w <= this.ta && (this.ta--, V(sm, 20)) };
    var Sm = function(a) { 0 != a.state && a.qa(0) };
    Im.prototype.$a = function() {
        return 0 >= this.w };
    var Tm = function(a, b) {
            if (16 == a.state) return !1;
            N(a);
            a.qa(Rm[b]);
            T(a, 0, 500);
            return !0 },
        Um = function(a) { a.w = Math.min(5, 5);
            a.ta = a.w - 1 };
    Im.prototype.reset = function() { Um(this) };
    Im.prototype.update = function(a) { this.wa -= a;
        S.prototype.update.call(this, a) };
    Im.prototype.Na = function(a, b) { 6 == a ? this.Kb() : 5 == a ? this.H = this.H + b : 7 == a || 9 == a ? Vm(this) : 8 == a ? Wm(this) : 18 == a && (this.w = a = this.w + 1, V(sm, 10, a)) };
    var Xm = function(a, b, c) { T(a, 8, 0);
            T(a, 0, 1E3 / a.S.w, null, b, c) },
        Vm = function(a) { 0 == a.state && a.qa(14) },
        Wm = function(a) { 14 == a.state && a.qa(0) },
        Ym = function(a) { a.U ? E(a.U) : (a.U = new P(R([lf], 0, -12, 37)), M(a.U, new rm(a, .7, 3)));
            a.U.s = -1;
            a.U.W = !1;
            D(a, a.U) },
        Zm = function(a) { a.U && E(a.U) };
    var $m = function(a, b, c, d) { H.call(this, a);
        this.U = b;
        this.T = c;
        this.H = d };
    m($m, H);
    $m.prototype.Tb = function() { this.H(n(this.U, this.T, Ca(this.w / this.R, 0, 1))) };
    $m.prototype.ub = function() { this.H(this.T) };
    var an = kk.ka(),
        bn = function(a) {
            this.w = !1;
            this.H = new I;
            this.s = a;
            this.R = new P($e);
            D(this.H, this.R);
            this.ra = new Sk;
            D(this.H, this.ra);
            this.V = new P(ai);
            this.V.s = 3;
            D(this.H, this.V);
            this.ma = new P(lf);
            this.S = new C;
            F(this.S, -qj.x + 320, -qj.y + 180);
            D(this.R, this.S);
            this.W = new xk(Dk, Dk, Ek, Fk, Gk);
            F(this.W, -190, 73);
            D(this.S, this.W);
            this.U = new xk(Hk, Ik, Jk, Kk, Lk);
            F(this.U, -82, 73);
            D(this.S, this.U);
            this.ha = new xk(yk, zk, Ak, Bk, Ck);
            F(this.ha, 26, 73);
            D(this.S, this.ha);
            this.$ = new xk(Mk, Nk, Ok, Pk, Qk);
            F(this.$, 134, 73);
            D(this.S,
                this.$);
            this.T = new jk("#fff", 640, 360);
            this.T.s = 560;
            D(this.H, this.T)
        };
    m(bn, ok);
    bn.prototype.Ja = function() {
        D(an.o, this.H);
        D(this.H, this.s);
        F(this.R, Z.backgroundPosition || oj);
        this.T.s = 560;
        vk(this.R, $e);
        G(this.s, nm());
        this.s.qa(0);
        F(this.s, om());
        this.s.s = 4;
        Ym(this.s);
        this.S.o = !1;
        this.W.qa(2);
        this.ha.qa(2);
        this.$.qa(2);
        this.U.qa(2);
        this.ra.o = !1;
        this.o = Z.Ba;
        D(this.H, this.o);
        G(this.o, 1);
        this.o.s = 2;
        this.o.o = !0;
        this.o.qa(14);
        F(this.o, Ul);
        this.o.Aa = 1;
        G(this.ma, nm());
        F(this.ma, -10, 18);
        this.ma.s = -1;
        this.V.o = !0;
        G(this.V, nm());
        F(this.V, 330, -50);
        this.T.Aa = 0;
        x.Vb.play();
        T(this.o, 15, Tl);
        J(this.o,
            new O(this.T, 1E3, 0, 1));
        var a = this;
        K(this.o, 0, function() { vk(a.R, af);
            a.ra.o = !0;
            a.o.qa(16);
            a.s.qa(23) });
        J(this.o, new O(this.T, 200, 1, 0));
        Wj(this.o, new H(1500, function(b) { Bj(a.o, 3.06 / b) }));
        Xj(this.o, 1E3, null, new u(Ul.x, 410));
        K(this.o, 0, function() { T(a.s, 24, 0);
            T(a.s, 25, 700) });
        J(this.o, new Uj(this.s, 1E3, null, oj, function() { pm().stop();
            x.Ob.play() }, Tj));
        J(this.o, new Uj(this.V, 1E3, null, new u(330, 132), null, Sj));
        K(this.o, 0, function() { a.s.qa(26);
            Zm(a.s);
            a.V.o = !1 });
        K(this.o, Pm, function() {
            x.Wb.play();
            a.s.qa(27);
            a.s.W = !0;
            F(a.s, 345, 200);
            Ym(a.s);
            a.s.U.W = !0;
            a.o.Aa = 0;
            a.S.o = !0
        });
        Wj(this.o, new $m(500, nm(), 1, function(b) { G(a.s, b) }));
        J(this.o, new Uj(this.s, 500, null, new u(420, 100)));
        J(this.o, new Uj(this.R, 2E3, null, qj));
        K(this.o, 100, function() { a.s.W = !1;
            x.Lc.play();
            a.s.qa(28);
            T(a.$, 3, 200);
            T(a.$, 4, Rk);
            T(a.ha, 3, 200);
            T(a.ha, 4, Rk);
            T(a.U, 3, 200);
            T(a.U, 4, Rk);
            T(a.W, 3, 200);
            T(a.W, 4, Rk) });
        K(this.o, Qm, function() { a.s.qa(29) });
        Vj(this.o, 1E3);
        J(this.o, new O(this.T, 1700, 0, 1));
        K(this.o, 700, function() { a.w = !0 })
    };
    bn.prototype.Ka = function() { N(this.R);
        N(this.s);
        Zm(this.s);
        this.s.W = !1;
        N(this.H);
        N(this.o);
        this.o.T = [];
        Dj(this.o);
        this.o.Aa = 1;
        E(this.ma);
        E(this.H);
        pm().stop() };
    var gn = function() {
        var a = p([0, cn, 1, dn, 2, en, 3, fn]);
        S.call(this, a) };
    m(gn, S);
    var cn = tk([
            [y, 115, 206],
            [y, 115, 206],
            [y, 115, 206],
            [y, 115, 206],
            [y, 115, 206],
            [y, 115, 206],
            [y, 115, 206],
            [y, 115, 206],
            [y, 115, 206],
            [y, 115, 206],
            [y, 115, 206],
            [y, 115, 206],
            [y, 115, 206],
            [y, 115, 206],
            [y, 115, 206],
            [y, 115, 206],
            [y, 115, 206],
            [y, 115, 206],
            [y, 115, 206],
            [y, 115, 206],
            [y, 115, 206],
            [y, 115, 206],
            [
                [1, 1300, 1251, 75, 37], 112, 197
            ],
            [
                [1, 0, 1208, 81, 43], 112, 191
            ],
            [
                [1, 0, 1254, 75, 37], 112, 192
            ],
            [
                [1, 1305, 1210, 75, 38], 112, 189
            ],
            [
                [1, 1066, 1244, 75, 38], 112, 187
            ],
            [
                [1, 1144, 1244, 75, 38], 112, 180
            ],
            [
                [1, 1222, 1244, 75, 38], 112, 174
            ],
            [
                [1, 504, 1262, 75, 37], 112,
                165
            ],
            [
                [1, 1305, 1163, 75, 44], 112, 148
            ],
            [
                [1, 232, 1273, 74, 47], 113, 135
            ],
            [
                [1, 155, 1273, 74, 59], 114, 116
            ],
            [
                [1, 78, 1273, 74, 64], 114, 101
            ],
            [
                [1, 658, 1273, 69, 68], 116, 81
            ],
            [
                [1, 309, 1277, 69, 68], 116, 69
            ],
            [
                [1, 730, 1280, 69, 68], 116, 55
            ],
            [
                [1, 802, 1280, 69, 68], 116, 41
            ],
            [
                [1, 1066, 1285, 69, 68], 116, 26
            ],
            [
                [1, 1138, 1285, 69, 68], 116, 21
            ],
            [
                [1, 1210, 1285, 69, 68], 116, 18
            ],
            [
                [1, 1313, 30, 67, 69], 118, 15
            ],
            [
                [1, 1282, 1291, 69, 68], 116, 16
            ],
            [
                [1, 0, 1294, 69, 68], 116, 19
            ],
            [ef, 116, 20],
            [ef, 116, 20],
            [ef, 116, 20],
            [ef, 116, 20],
            [ef, 116, 20],
            [ef, 116, 20]
        ], 83),
        dn = tk([
            [
                [1, 582, 1273, 73,
                    64
                ], 112, 21
            ],
            [
                [1, 72, 1340, 52, 45], 132, 26
            ],
            [
                [1, 232, 1323, 58, 50], 131, 19
            ],
            [
                [1, 738, 1351, 51, 47], 133, 17
            ],
            [
                [1, 1044, 1356, 51, 46], 133, 18
            ],
            [
                [1, 792, 1351, 51, 47], 133, 18
            ],
            [
                [1, 1098, 1356, 51, 46], 133, 19
            ],
            [
                [1, 1205, 1356, 50, 46], 120, 5
            ],
            [
                [1, 1258, 1362, 50, 45], 77, 0
            ],
            [
                [1, 788, 1401, 47, 44], 29, 16
            ],
            [
                [1, 656, 1404, 46, 42], 19, 22
            ],
            [
                [1, 1002, 1405, 46, 42], 19, 20
            ],
            [
                [1, 1051, 1405, 46, 42], 19, 17
            ],
            [
                [1, 1100, 1405, 46, 42], 19, 19
            ]
        ], 83),
        en = tk([
            [ff, 60, 84],
            [ff, 60, 84],
            [ff, 60, 84],
            [ff, 60, 84],
            [
                [1, 1315, 1073, 59, 54], 66, 92
            ],
            [
                [1, 1313, 170, 61, 53], 67, 96
            ],
            [gf, 68, 98],
            [gf, 68,
                98
            ],
            [
                [1, 1315, 1073, 59, 54], 66, 92
            ],
            [hf, 67, 96],
            [hf, 67, 96],
            [jf, 68, 98],
            [jf, 68, 98],
            [
                [1, 443, 1322, 54, 50], 53, 82
            ],
            [
                [1, 1101, 223, 54, 51], 17, 53
            ],
            [
                [1, 576, 1340, 51, 51], 0, 27
            ],
            [
                [1, 874, 1324, 54, 50], 3, 26
            ],
            [
                [1, 931, 1324, 54, 50], 35, 26
            ],
            [
                [1, 988, 1324, 53, 50], 72, 25
            ],
            [
                [1, 1101, 169, 55, 51], 137, 21
            ],
            [
                [1, 155, 1335, 53, 50], 198, 20
            ],
            [
                [1, 630, 1344, 51, 50], 254, 18
            ],
            [
                [1, 293, 1348, 51, 50], 329, 18
            ],
            [
                [1, 684, 1351, 51, 50], 366, 18
            ],
            [
                [1, 1152, 1356, 50, 50], 407, 18
            ],
            [
                [1, 614, 166, 11, 29], 446, 23
            ]
        ], 83),
        fn = R([
            [1, 0, 1365, 49, 66],
            [1, 500, 1373, 49, 66],
            [1, 500, 1373, 49, 66],
            [1,
                500, 1373, 49, 66
            ],
            [1, 500, 1373, 49, 66],
            [1, 500, 1373, 49, 66],
            [1, 443, 1375, 49, 66],
            [1, 211, 1376, 49, 66],
            [1, 846, 1377, 49, 66],
            [1, 898, 1377, 49, 66],
            [1, 898, 1377, 49, 66],
            [1, 898, 1377, 49, 66],
            [1, 898, 1377, 49, 66],
            [1, 898, 1377, 49, 66],
            [1, 950, 1377, 49, 66],
            [1, 347, 1378, 49, 66],
            [1, 52, 1388, 49, 66],
            [1, 104, 1388, 49, 66],
            [1, 156, 1388, 49, 66],
            [1, 552, 1394, 49, 66],
            [1, 604, 1397, 49, 66],
            [1, 604, 1397, 49, 66],
            [1, 604, 1397, 49, 66],
            [1, 263, 1401, 49, 66]
        ], 83, 0, 0),
        hn = 83 * cn.length,
        jn = 83 * fn.length;
    var kn = kk.ka(),
        ln = function(a) { this.w = !1;
            this.H = new I;
            this.s = a;
            this.T = new P($e);
            D(this.H, this.T);
            this.U = new Sk;
            D(this.H, this.U);
            this.V = new P(lf);
            this.$ = new jk("#000", 640, 360);
            this.$.s = 461;
            D(this.H, this.$);
            this.R = new gn;
            this.R.s = 3;
            F(this.R, 500, 90);
            D(this.H, this.R);
            this.S = new jk("#fff", 640, 360);
            D(this.H, this.S);
            this.S.s = 560 };
    m(ln, ok);
    ln.prototype.Ja = function() {
        D(kn.o, this.H);
        D(this.H, this.s);
        F(this.V, 110, 273);
        this.V.s = 2;
        D(this.H, this.V);
        F(this.T, qj);
        this.s.qa(8);
        G(this.s, 1);
        F(this.s, -uk(this.s) / 2 - 5, 272);
        this.s.s = 4;
        this.U.o = !0;
        this.o = Z.Ba;
        D(this.H, this.o);
        G(this.o, 1);
        this.o.s = 2;
        this.o.o = !1;
        this.o.qa(10);
        F(this.o, 540, 130);
        this.R.o = !1;
        this.R.qa(3);
        this.S.o = !1;
        this.S.Aa = 0;
        F(this.$, 0, 0);
        J(this.s, new Uj(this.$, 1E3, null, new u(-640, 0)));
        Xj(this.s, 800, null, new u(Aj(this.V).x + 10, 272));
        var a = this;
        K(this.s, 0, function() {
            a.s.qa(22);
            var b = Aj(a.s);
            F(a.s, b.x + 2, b.y - 30)
        });
        K(this.s, 249, function() { E(a.V);
            Ym(a.s) });
        K(this.s, 300, function() { x.Wb.play();
            Xj(a.T, 1700, null, Z.backgroundPosition || oj, null, Tj) });
        Xj(this.s, 700, null, new u(520, -this.s.R.Ca[4] / 2), function() { G(a.s, nm()) }, Rj);
        Vj(this.s, 300);
        Xj(this.s, 700, new u(-uk(this.s) / 2, 360 + this.s.R.Ca[4] / 2), om(), null, Sj);
        K(this.s, 0, function() { a.o.o = !0 });
        K(this.o, 200, function() { a.R.o = !0 });
        T(this.o, 8, 200);
        T(this.o, 11, jn - 200);
        T(this.o, 9, 83, null, null, function() { x.Hc.play();
            G(a.o, .27) });
        K(this.o, 1E3, function() {
            a.S.o = !0;
            a.S.Aa = 0;
            Vj(a.H, 100);
            J(a.H, new O(a.S, 1400, 0, 1))
        });
        J(this.o, new $m(1500, .27, 1, function(b) { G(a.o, b) }));
        K(this.o, 0, function() { G(a.o, 1);
            F(a.o, Ul);
            a.R.o = !1;
            a.U.o = !1;
            Zm(a.s);
            a.s.qa(0);
            Ym(a.s);
            x.Ic.play() });
        T(this.o, 12, 0);
        Wj(this.o, new O(a.S, 200, 1, 0));
        T(this.o, 13, Sl);
        K(this.o, Sl, function() { a.w = !0 })
    };
    ln.prototype.Ka = function() { N(this.T);
        N(this.s);
        Zm(this.s);
        N(this.H);
        N(this.o);
        13 != this.o.state && this.o.qa(13);
        F(this.o, Ul);
        G(this.o, 1);
        this.o.o = !0;
        this.o.s = 459;
        E(this.V);
        E(this.H) };
    Xe.ka();
    var pn = function(a, b) {
        var c = p([0, [{ Ca: Mh, duration: 0 }], 1, [{ Ca: Mh, duration: 0 }], 2, [{ Ca: Nh, duration: 0 }], 3, R(mn, nn, 0, 0), 4, R(on, nn, -3, 0)]);
        S.call(this, c);
        F(this, a, b) };
    m(pn, S);
    var mn = [Mh, [2, 1286, 211, 42, 31],
            [2, 1621, 543, 42, 31],
            [2, 1813, 575, 42, 31],
            [2, 1621, 577, 42, 31],
            [2, 2828, 633, 42, 31],
            [2, 2828, 667, 42, 31],
            [2, 2432, 684, 42, 31],
            [2, 2677, 703, 42, 31], Nh
        ],
        on = [
            [2, 1985, 719, 41, 38],
            [2, 2029, 719, 41, 38],
            [2, 1721, 724, 41, 38],
            [2, 1765, 724, 41, 38],
            [2, 1809, 729, 41, 38],
            [2, 1853, 729, 41, 38],
            [2, 1615, 731, 41, 38],
            [2, 1659, 731, 41, 38],
            [2, 2677, 737, 41, 38],
            [2, 1529, 745, 41, 38],
            [2, 1116, 747, 41, 38],
            [2, 1160, 747, 41, 38]
        ],
        nn = 1E3 / 12,
        qn = mn.length * nn,
        rn = on.length * nn,
        sn = Mh[3];
    pn.prototype.update = function(a) { pn.Da.update.call(this, a);
        a = 1;
        1 == this.state && (a += .1 * Math.max(0, Math.sin(this.ma / 100)));
        G(this, a) };
    var tn = { 2: !0, 3: !0 },
        un = { 0: !0, 1: !0, 4: !0 };
    pn.prototype.qa = function(a) { this.state == a || 3 == this.state && 2 == a || 4 == this.state && 1 == a || (tn[a] && un[this.state] ? (N(this), T(this, 2, qn), a = 3) : un[a] && tn[this.state] && (N(this), T(this, 0, rn), a = 4), pn.Da.qa.call(this, a)) };
    var vn = function(a, b, c, d, e, f, h, l) { C.call(this);
        this.H = a;
        this.U = e + "px " + d;
        this.fillStyle = f || "#000";
        this.R = h ? h : "left";
        this.T = l;
        F(this, b, c) };
    m(vn, C);
    vn.prototype.ya = function(a) { vn.Da.ya.call(this, a);
        a.save();
        a.font = this.U;
        this.fillStyle && (a.fillStyle = this.fillStyle);
        this.T && (a.shadowColor = this.T, a.shadowBlur = 5);
        a.textAlign = this.R;
        a.fillText(this.H, 0, 0);
        a.restore() };
    var wn = pl.ka(),
        yn = function(a) { I.call(this);
            this.U = a;
            this.H = [];
            for (a = 0; 5 > a; a++) {
                var b = new pn(sn * (a + 1), 25);
                this.H.push(b);
                D(this, b) }
            xn(this);
            this.w = 0;
            this.R = new vn(this.w.toString(), 640 - (wb ? 74 : 25), 37, "'Itim', sans-serif", 40, "orange", "right", "black");
            D(this, this.R);
            wn.o.push(this) };
    m(yn, I);
    yn.prototype.Na = function(a, b) {
        if (10 == a && 5 < b) this.H[this.H.length - 1].qa(2);
        else if (2 == a) { N(this);
            var c = this;
            this.w < b ? J(this, new $m(300, this.w, b, function(a) { c.w = Math.ceil(a);
                c.R.H = c.w.toString() })) : (this.w = b, this.R.H = this.w.toString()) } };
    yn.prototype.update = function(a) { yn.Da.update.call(this, a);
        xn(this) };
    var xn = function(a) {
        for (var b = a.$, c = 0; 5 > c; c++) {
            var d = 0;
            c > a.U.w - 1 ? d = 2 : c == a.U.w - 1 && (d = 1);
            b[c].qa(d) } };
    var zn = function(a) { I.call(this);
        var b = a.position,
            c = new vn("+" + a.ab.toString(), 0, 0, "'Itim', sans-serif", 24, a.color, "center");
        D(this, c);
        F(this, b.x, b.y - 30);
        this.Aa = 0;
        this.s = 470;
        M(this, new Uj(this, 400, null, new u(b.x, b.y - 60), Nj));
        M(this, new O(c, 400, 1, 0, function() { E(c) }));
        M(this, new rm(this, 1.1 * (320 > b.x ? -1 : 1), 0, 2)) };
    m(zn, I);
    var An = pl.ka(),
        Bn = function() { I.call(this);
            this.W = this.H = 0;
            this.R = new I;
            D(this, this.R);
            this.va = 0;
            this.w = new vn("0", 315, 340, "'Itim', sans-serif", 32, "orange", "center", "black");
            this.w.s = 470;
            M(this, new rm(this.w, .7, 3));
            this.w.o = !1;
            this.U = new P(bf);
            this.U.s = -1;
            G(this.U, .5);
            this.U.Aa = .6;
            F(this.U, 5, -10);
            D(this.w, this.U);
            D(this, this.w);
            this.ma = x.Pb;
            pl.ka().o.push(this) };
    m(Bn, I);
    var Cn = [x.ac, x.Tc, x.Uc, x.tc];
    Bn.prototype.Na = function(a, b) {
        !this.o || 5 != a && 11 != a ? this.o && 0 < this.W && (8 == a || 17 == a) ? (N(this.R), Wj(this.R, new O(this.U, 200, .6, 0)), J(this.R, new O(this.w, 200, 1, 0)), this.ra()) : 13 == a && (this.va = this.H) : (N(this.R), this.R.T = [], this.W++, 2 <= this.W ? (2 == this.W ? (M(this, new O(this.w, 200, 0, 1)), M(this, new O(this.U, 200, 0, .6))) : (this.w.Aa = 1, this.U.Aa = .6), this.w.o = !0, this.w.H = " x " + this.W, Vj(this.R, 500), Wj(this.R, new O(this.U, 500, .6, 0)), J(this.R, new O(this.w, 500, 1, 0, na(this.ra, this)))) : K(this.R, 1E3, na(this.ra, this)),
            this.ma = Cn[(this.W - 1) % Cn.length], b.ab *= this.W, Dn(this, this.H + b.ab), D(this, new zn(b)))
    };
    Bn.prototype.ra = function() { this.W = 0;
        this.ma = x.Pb };
    var Dn = function(a, b) { a.H = b;
        V(An, 2, a.H);
        cc();
        r.Xa && (document.cookie = "sessionHighScore=" + Math.floor(a.H)) };
    var En = function(a, b) { this.x = a;
        this.y = b };
    m(En, u);
    var Fn = function(a) {
        return Math.sqrt(a.x * a.x + a.y * a.y) };
    En.prototype.scale = u.prototype.scale;
    var Gn = Xe.ka(),
        Hn = function() { C.call(this);
            this.R = 0;
            this.ha = new u(0, 0);
            this.w = [];
            this.T = [];
            this.H = [];
            this.U = [];
            this.W = [] };
    m(Hn, C);
    Hn.prototype.update = function(a) { this.R += a;
        a = Ej(this);
        this.w = [new u(0, -a.o / a.H), this.ha];
        this.w = In(this, this.w[0], this.w[1], 3);
        this.T = In(this, this.w[parseInt(Math.random() * this.w.length * .2, 10)], null, 2);
        this.H = In(this, this.w[parseInt(Math.random() * this.w.length * .5, 10)], null, 2);
        this.U = In(this, this.H[this.H.length - 1], null, 2);
        this.W = In(this, this.H[this.H.length - 1], null, 2) };
    Hn.prototype.ya = function(a) {
        var b = 8 + 4 * Math.cos(3 * this.R / 1E3);
        a.save();
        a.globalCompositeOperation = "overlay";
        a.shadowColor = "#7fa7fe";
        Jn(a, this.w, b);
        Jn(a, this.T, .5 * b);
        Jn(a, this.H, .3 * b);
        Jn(a, this.U, .2 * b);
        Jn(a, this.W, .1 * b);
        a.restore() };
    var In = function(a, b, c, d) {
            var e = .5 < Math.random() ? -1 : 1;
            d = Math.pow(2, d) + 1 - 1;
            var f = [b];
            c || (c = new u(b.x + (20 * Math.random() + 10) * e, b.y + 10 * Math.random() + 30));
            f[d] = c;
            Kn(a, f, 0, d);
            return f },
        Kn = function(a, b, c, d) {
            if (c + 1 != d) {
                var e = Math.floor((c + d) / 2),
                    f = b[c],
                    h = b[d];
                b[e] = new u((f.x + h.x) / 2 + (20 * Math.random() - 10), (f.y + h.y) / 2 + (10 * Math.random() - 5));
                Kn(a, b, c, e);
                Kn(a, b, e, d) } },
        Jn = function(a, b, c) {
            for (var d = 0; d < b.length - 1; d += 1) {
                var e = b[d],
                    f = b[d + 1];
                a.save();
                a.translate(e.x, e.y);
                a.scale(.2, .2);
                var h = f.x - e.x,
                    e = f.y - e.y,
                    f = Math.sqrt(h *
                        h + e * e);
                a.rotate(Math.atan2(e, h) + .5 * Math.PI);
                a.scale(2 * c, .14 * f);
                Gn.ya(Uh, a, -10, -40, 1);
                a.restore();
                c -= .5;
                c = Math.max(0, c)
            }
            a.beginPath();
            a.moveTo(b[0].x, b[0].y);
            for (d = 1; d < b.length; d++) a.lineTo(b[d].x, b[d].y);
            a.lineWidth = c;
            a.strokeStyle = "white";
            a.stroke();
            a.closePath()
        };
    var Ln = Xe.ka(),
        Mn = function(a) { C.call(this);
            this.w = a };
    m(Mn, C);
    Mn.prototype.ya = function(a) {
        for (var b = this.w.length, c = -5, d = 0; d < b; d++) var e = hl[this.w[d]],
            c = c + (e[3] + 5);
        c = -c / 2;
        for (d = 0; d < b; d++) e = hl[this.w[d]], Ln.ya(e, a, Math.floor(c), Math.floor(-e[4] / 2)), c += e[3] + 5 };
    var Nn = pl.ka(),
        On = function(a, b, c, d, e, f, h) { S.call(this, a, h);
            this.ab = b;
            this.Ma = new Hn;
            this.Ma.o = !1;
            D(this, this.Ma);
            this.w = c;
            this.W = 320 > d;
            this.qb = new Mn(c);
            F(this.qb, this.W ? -7 : 7, f);
            this.qb.s = 1;
            D(this, this.qb);
            this.H = 0;
            this.wa = sk(a[2]);
            this.U = sk(a[3]);
            this.Oc = sk(a[5]);
            F(this, d, e);
            this.s = e + this.R.Ca[4] / 2;
            this.Aa = .8;
            M(this, new rm(this, .8, 5));
            Nn.o.push(this) };
    m(On, S);
    var Pn = R([
            [2, 1957, 236, 83, 105]
        ], 83, 0, 0),
        Qn = R([
            [2, 1701, 522, 109, 91],
            [2, 1173, 538, 109, 91],
            [2, 1285, 538, 109, 91],
            [2, 1397, 543, 109, 91],
            [2, 1509, 543, 109, 91],
            [2, 1509, 543, 109, 91],
            [2, 1509, 543, 109, 91],
            [2, 1509, 543, 109, 91]
        ], 83, 0, 0),
        Rn = R([
            [2, 1998, 604, 97, 112],
            [2, 1813, 614, 97, 112],
            [2, 1621, 616, 97, 112],
            [2, 1129, 632, 97, 112],
            [2, 1229, 632, 97, 112],
            [2, 2728, 633, 97, 112],
            [2, 1329, 637, 97, 112],
            [2, 1429, 637, 97, 112]
        ], 83, 0, 0),
        Sn = R([
            [2, 1957, 236, 83, 105],
            [2, 1035, 312, 83, 105],
            [2, 1173, 426, 83, 105],
            [2, 1721, 616, 83, 105],
            [2, 1529, 637, 83, 105],
            [2, 196,
                683, 83, 105
            ],
            [2, 2098, 684, 83, 105],
            [2, 2184, 684, 83, 105],
            [2, 2184, 684, 83, 105]
        ], 83, 0, 0);
    On.prototype.La = function(a) {
        if (0 < a) { this.H = a;
            var b = Aj(this),
                c = om(),
                d = 1 - .2 * nm();
            T(this, 1, a, Aj(this), new En(n(b.x, c.x, d), n(b.y, c.y, d))) } };
    var Tn = function(a) { a.Aa = 0;
        M(a, new O(a, 1E3, 0, .8)) };
    g = On.prototype;
    g.$a = function() {
        return 6 == this.state };
    g.Bb = function() {
        var a = this;
        T(this, 4, this.wa, null, null, function() { a.Aa = .8;
            M(a, new O(a, 500, .8, 0)) });
        T(a, 6, 500) };
    g.Kb = function(a) {
        return this.w[0] != a ? !1 : 6 == a ? (V(Nn, 19), !0) : this.Lb() };
    g.Lb = function() {
        var a = this.w.shift(),
            a = dl[a];
        if (this.Eb()) Un(this, a);
        else { V(Nn, 11, { ab: this.ab, position: Aj(this), color: a });
            this.qa(3);
            var b = this;
            M(this, new H(this.U, null, function() { b.mc() }));
            this.Mb() }
        return !0 };
    g.mc = function() { this.qa(0) };
    g.Eb = function() {
        return 0 == this.w.length };
    g.Mb = ca;
    var Un = function(a, b) { N(a);
            a.T = [];
            ql(Nn, a);
            a.qa(5);
            T(a, 6, a.Oc);
            V(Nn, 5, { ab: a.ab, position: Aj(a), color: b });
            x.Qc.play() },
        Vn = function(a) { a.Ma.o = !0;
            M(a, new H(500, null, function() { a.Ma.o = !1 })) };
    On.prototype.update = function(a) { On.Da.update.call(this, a);
        this.$a() ? E(this) : 1 == this.state && (N(this), this.T = [], this.qa(2), V(Nn, 6), x.Zb.play(), this.Bb()) };
    On.prototype.Na = function(a) { 19 == a && this.V && this.o && !this.$a() && (Vn(this), this.Lb()) };
    var Wn = function(a, b, c, d) {
        var e = p([0, Pn, 2, Sn, 3, Qn, 5, Rn, 6, [Rn[Rn.length - 1]]]);
        return new On(e, 10, a, b, c, d || -35) };
    var Xn = function(a, b, c, d, e, f) { this.ta = ["^-^|^-^|", "v-^-v-^-", "|-|--|"];
        c = p([5, x.Cc]);
        On.call(this, a, b, nl(this.ta.shift()), d, e, f, c);
        this.Ea = d;
        this.Fa = e };
    m(Xn, On);
    var Yn = R([
            [2, 1733, 262, 69, 105],
            [2, 3314, 709, 69, 105],
            [2, 3386, 709, 69, 105],
            [2, 3458, 709, 69, 105],
            [2, 3530, 709, 69, 105],
            [2, 849, 711, 69, 105],
            [2, 921, 711, 69, 105],
            [2, 1913, 715, 69, 105]
        ], 83, 0, 0),
        Zn = R([
            [2, 1425, 413, 135, 127],
            [2, 1563, 413, 135, 127],
            [2, 1035, 426, 135, 127],
            [2, 2104, 431, 135, 127],
            [2, 2242, 431, 135, 127],
            [2, 2380, 431, 135, 127],
            [2, 2380, 431, 135, 127]
        ], 83, 0, 0),
        $n = R([
            [2, 3517, 369, 97, 120],
            [2, 3517, 369, 97, 120],
            [2, 1998, 481, 97, 120],
            [2, 220, 560, 97, 120],
            [2, 2098, 561, 97, 120],
            [2, 2198, 561, 97, 120],
            [2, 2298, 561, 97, 120],
            [2, 2398, 561, 97, 120],
            [2, 320, 566, 97, 120],
            [2, 420, 566, 97, 120],
            [2, 520, 566, 97, 120],
            [2, 620, 576, 97, 120],
            [2, 620, 576, 97, 120],
            [2, 620, 576, 97, 120],
            [2, 620, 576, 97, 120],
            [2, 620, 576, 97, 120],
            [2, 620, 576, 97, 120],
            [2, 620, 576, 97, 120],
            [2, 620, 576, 97, 120],
            [2, 720, 576, 97, 120],
            [2, 820, 576, 97, 120],
            [2, 2628, 580, 97, 120],
            [2, 2894, 586, 97, 120],
            [2, 2994, 586, 97, 120],
            [2, 3094, 586, 97, 120],
            [2, 3194, 586, 97, 120],
            [2, 3294, 586, 97, 120],
            [2, 3394, 586, 97, 120],
            [2, 3494, 586, 97, 120]
        ], 83, 0, 0),
        ao = R([
            [2, 920, 576, 95, 132],
            [2, 920, 576, 95, 132],
            [2, 2498, 663, 95, 132],
            [2, 1018, 665, 95, 132],
            [2,
                0, 669, 95, 132
            ],
            [2, 98, 669, 95, 132],
            [2, 98, 669, 95, 132]
        ], 83, 0, 0),
        bo = Q([
            [3, 180, 186, 67, 109],
            [3, 250, 186, 67, 109],
            [3, 320, 186, 67, 109],
            [3, 390, 186, 67, 109]
        ], 83, 0, 0);
    Xn.prototype.Bb = function() {
        var a = this;
        T(this, 9, this.wa);
        T(this, 0, this.U, Aj(this), new u(this.Ea, this.Fa), function() { a.La(a.H) }) };
    Xn.prototype.Eb = function() {
        return 0 == this.w.length && 0 == this.ta.length };
    Xn.prototype.Mb = function() {
        if (0 == this.w.length) { N(this);
            var a = this.ta.shift();
            a || Un(this, 0);
            var b = this;
            T(this, 0, this.U, Aj(this), new u(this.Ea, this.Fa), function() { Ba(b.w, nl(a));
                b.H *= .5;
                b.La(b.H) }) } };
    var co = function(a, b, c, d, e, f, h, l) { d = p([5, x.sc]);
        On.call(this, b, c, [], e, f, h, d);
        this.lb = sk(b[7]);
        this.Nb = a;
        this.Ea = 0;
        this.hb = ["--^--", "||v||", "|-^-|"];
        this.mb = [
            [U(-30, 295, 8, "---"), U(20, 140, 8, "|||")],
            [U(-30, 295, 8, "-|-"), U(20, 140, 8, "|-|"), U(30, 295, 9, "^")],
            [U(-20, 295, 8, "^v"), U(20, 295, 8, "v-"), U(30, 295, 9, "-|")]
        ];
        this.ta = [];
        this.zc = e;
        this.Ac = f;
        this.Ia = l;
        this.Fa = 1200 };
    m(co, On);
    var eo = R([
            [6, 1600, 253, 197, 124],
            [6, 1800, 253, 197, 124],
            [6, 2E3, 253, 197, 124],
            [6, 2200, 253, 197, 124],
            [6, 2400, 253, 197, 124],
            [6, 2600, 253, 197, 124],
            [6, 2800, 253, 197, 124],
            [6, 3E3, 253, 197, 124],
            [6, 3200, 253, 197, 124]
        ], 83, 0, 0),
        fo = R([
            [6, 0, 231, 197, 124],
            [6, 200, 235, 197, 124],
            [6, 400, 253, 197, 124],
            [6, 600, 253, 197, 124],
            [6, 800, 253, 197, 124],
            [6, 1E3, 253, 197, 124],
            [6, 1200, 253, 197, 124],
            [6, 1400, 253, 197, 124],
            [6, 1400, 253, 197, 124]
        ], 83, 0, 0),
        go = R([
            [6, 1400, 126, 197, 124],
            [6, 1600, 126, 197, 124],
            [6, 1800, 126, 197, 124],
            [6, 2E3, 126, 197, 124],
            [6, 2200, 126,
                197, 124
            ],
            [6, 2400, 126, 197, 124],
            [6, 2600, 126, 197, 124],
            [6, 2800, 126, 197, 124],
            [6, 3E3, 126, 197, 124],
            [6, 3200, 126, 197, 124],
            [6, 3400, 126, 197, 124],
            [6, 3400, 126, 197, 124],
            [6, 3400, 126, 197, 124],
            [6, 3400, 126, 197, 124],
            [6, 3600, 126, 197, 124],
            [6, 3800, 126, 197, 124],
            [6, 4E3, 126, 197, 124],
            [6, 4200, 126, 197, 124],
            [6, 4200, 126, 197, 124],
            [6, 4200, 126, 197, 124],
            [6, 4200, 126, 197, 124],
            [6, 4200, 126, 197, 124],
            [6, 4400, 126, 197, 124],
            [6, 4600, 126, 197, 124],
            [6, 4800, 126, 197, 124],
            [6, 5E3, 126, 197, 124],
            [6, 5200, 126, 197, 124],
            [6, 5400, 126, 197, 124],
            [6, 5600, 127,
                197, 124
            ]
        ], 83, 0, 0),
        ho = R([
            [6, 5732, 0, 197, 124],
            [6, 0, 104, 197, 124],
            [6, 200, 108, 197, 124],
            [6, 400, 126, 197, 124],
            [6, 600, 126, 197, 124],
            [6, 800, 126, 197, 124],
            [6, 1E3, 126, 197, 124],
            [6, 1200, 126, 197, 124],
            [6, 1200, 126, 197, 124],
            [6, 1200, 126, 197, 124]
        ], 83, 0, 0),
        io = R([
            [6, 3400, 253, 197, 124],
            [6, 3600, 253, 197, 124],
            [6, 3800, 253, 197, 124],
            [6, 4E3, 253, 197, 124],
            [6, 4200, 253, 197, 124],
            [6, 4400, 253, 197, 124],
            [6, 4600, 253, 197, 124],
            [6, 4800, 253, 197, 124]
        ], 83, 0, 0),
        jo = Q([
            [6, 5E3, 253, 197, 124],
            [6, 5200, 253, 197, 124],
            [6, 5400, 253, 197, 124],
            [6, 5600, 254, 197, 124],
            [6, 5600, 254, 197, 124]
        ], 83, 0, 0);
    g = co.prototype;
    g.La = function(a) { this.Ia = a;
        co.Da.La.call(this, a) };
    g.Bb = function() {
        var a = this;
        T(this, 9, this.wa);
        T(this, 0, this.U, Aj(this), new u(this.zc, this.Ac), function() { a.La(a.H) }) };
    g.update = function(a) { co.Da.update.call(this, a);
        for (var b = this.ta.length - 1; 0 <= b; b--) this.ta[b].$a() && this.ta.splice(b, 1);
        0 < this.Fa && (this.Fa -= a);
        0 == this.state && (this.Ia -= a);
        if (8 == this.state && 0 == this.ta.length) this.qa(0), this.Ea = 0, (a = this.hb.shift()) || Un(this, 0), Ba(this.w, nl(a)), this.La(this.Ia);
        else if (0 == this.state && 0 == this.w.length && 0 >= this.Fa) { N(this);
            this.qa(7);
            this.Ea = 7;
            var c = this;
            T(this, 8, this.lb, null, null, function() { c.Ea = 8;
                var a = c.mb.shift();
                a && (a = ko(c.Nb, a), Ba(c.ta, a)) }) } };
    g.mc = function() { this.qa(this.Ea) };
    g.Eb = function() {
        return 0 == this.w.length && 0 == this.hb.length };
    g.Na = function(a, b) { co.Da.Na.call(this, a, b);
        6 == a && 2 != this.state && (a = this.state, T(this, 9, 0), T(this, a, this.U)) };
    var mo = function(a, b, c, d, e, f) { c = p([5, x.Dc]);
        On.call(this, a, b, [], d, e, f, c);
        this.ta = ["-^v", "v|-", "-^v", "-|v", "|^|"];
        this.Ea = d;
        this.Fa = e;
        var h = this;
        T(this, 0, 2E3, null, null, function() { lo(h) }) };
    m(mo, On);
    var no = R([
            [8, 1253, 423, 176, 138],
            [8, 1432, 423, 176, 138],
            [8, 1611, 423, 176, 138],
            [8, 1790, 423, 176, 138],
            [8, 1969, 423, 176, 138],
            [8, 2148, 423, 176, 138],
            [8, 0, 564, 176, 138],
            [8, 179, 564, 176, 138],
            [8, 358, 564, 176, 138],
            [8, 537, 564, 176, 138],
            [8, 716, 564, 176, 138],
            [8, 895, 564, 176, 138],
            [8, 1074, 564, 176, 138],
            [8, 1253, 564, 176, 138]
        ], 83, 0, 0),
        oo = R([
            [8, 0, 423, 176, 138],
            [8, 179, 423, 176, 138],
            [8, 358, 423, 176, 138],
            [8, 537, 423, 176, 138],
            [8, 716, 423, 176, 138],
            [8, 895, 423, 176, 138],
            [8, 1074, 423, 176, 138],
            [8, 1074, 423, 176, 138]
        ], 83, 0, 0),
        po = R([
            [8, 179, 141, 176,
                138
            ],
            [8, 358, 141, 176, 138],
            [8, 537, 141, 176, 138],
            [8, 716, 141, 176, 138],
            [8, 895, 141, 176, 138],
            [8, 1074, 141, 176, 138],
            [8, 1253, 141, 176, 138],
            [8, 1432, 141, 176, 138],
            [8, 1611, 141, 176, 138],
            [8, 1790, 141, 176, 138],
            [8, 1969, 141, 176, 138],
            [8, 2148, 141, 176, 138],
            [8, 0, 282, 176, 138],
            [8, 179, 282, 176, 138],
            [8, 358, 282, 176, 138],
            [8, 358, 282, 176, 138],
            [8, 358, 282, 176, 138],
            [8, 358, 282, 176, 138],
            [8, 358, 282, 176, 138],
            [8, 358, 282, 176, 138],
            [8, 358, 282, 176, 138],
            [8, 537, 282, 176, 138],
            [8, 716, 282, 176, 138],
            [8, 895, 282, 176, 138],
            [8, 1074, 282, 176, 138],
            [8, 1253, 282,
                176, 138
            ],
            [8, 1432, 282, 176, 138],
            [8, 1611, 282, 176, 138],
            [8, 1790, 282, 176, 138],
            [8, 1969, 282, 176, 138],
            [8, 2148, 282, 176, 138]
        ], 83, 0, 0),
        qo = R([
            [8, 0, 0, 176, 138],
            [8, 179, 0, 176, 138],
            [8, 358, 0, 176, 138],
            [8, 537, 0, 176, 138],
            [8, 716, 0, 176, 138],
            [8, 895, 0, 176, 138],
            [8, 1074, 0, 176, 138],
            [8, 1253, 0, 176, 138],
            [8, 1432, 0, 176, 138],
            [8, 1611, 0, 176, 138],
            [8, 1790, 0, 176, 138],
            [8, 1969, 0, 176, 138],
            [8, 2148, 0, 176, 138],
            [8, 0, 141, 176, 138]
        ], 83, 0, 0),
        ro = Q([
            [8, 1432, 564, 176, 138],
            [8, 1611, 564, 176, 138],
            [8, 1790, 564, 176, 138],
            [8, 1969, 564, 176, 138]
        ], 83, 0, 0);
    mo.prototype.Bb = function() {
        var a = this;
        T(this, 9, this.wa);
        T(this, 0, this.U, Aj(this), new u(this.Ea, this.Fa), function() { a.La(a.H) }) };
    mo.prototype.Eb = function() {
        return 0 == this.w.length && 0 == this.ta.length };
    mo.prototype.Mb = function() {
        if (0 == this.w.length) { N(this);
            T(this, 0, this.U, Aj(this), new u(this.Ea, this.Fa));
            var a = this;
            T(this, 0, this.U + 1E3, null, null, function() { lo(a) }) } };
    var lo = function(a) {
        var b = a.ta.shift();
        b || Un(a, 0);
        Ba(a.w, nl(b));
        a.H *= .8;
        a.La(a.H) };
    var so = function(a, b, c, d, e, f, h) {
        this.Fa = ["^^vv^^vv", "||-||-v-", "--^-|--v"];
        d = p([5, x.Gc]);
        On.call(this, b, c, nl(this.Fa.shift()), e, f, h, d);
        this.Nb = a;
        this.hb = [
            [U(200, 295, 999, "-")],
            [U(160, 295, 999, "|")],
            [U(200, 295, 999, "^")],
            [U(200, 295, 999, "v")],
            [U(160, 295, 999, "--")],
            [U(200, 295, 999, "-|")],
            [U(160, 295, 999, "-v")],
            [U(200, 295, 999, "-^")],
            [U(160, 295, 999, "|-")],
            [U(200, 295, 999, "||")],
            [U(160, 295, 999, "|v")],
            [U(200, 295, 999, "|^")],
            [U(160, 295, 999, "v-")],
            [U(200, 295, 999, "v|")],
            [U(160, 295, 999, "^-")],
            [U(200, 295, 999, "^|")],
            [U(160, 295, 999, "-"), U(200, 295, 999, "-")],
            [U(160, 295, 999, "-"), U(200, 295, 999, "|")],
            [U(160, 295, 999, "-"), U(200, 295, 999, "v")],
            [U(160, 295, 999, "-"), U(200, 295, 999, "^")],
            [U(160, 295, 999, "|"), U(200, 295, 999, "-")],
            [U(160, 295, 999, "|"), U(200, 295, 999, "|")],
            [U(160, 295, 999, "|"), U(200, 295, 999, "v")],
            [U(160, 295, 999, "|"), U(200, 295, 999, "^")],
            [U(160, 295, 999, "v"), U(200, 295, 999, "-")],
            [U(160, 295, 999, "v"), U(200, 295, 999, "|")],
            [U(160, 295, 999, "^"), U(200, 295, 999, "-")],
            [U(160, 295, 999, "^"), U(200, 295, 999, "|")]
        ];
        this.Ia = 2500;
        this.ta = [];
        this.lb = e;
        this.mb = f;
        this.Ea = 1E3
    };
    m(so, On);
    var to = R([
            [10, 2691, 198, 204, 195],
            [10, 2898, 198, 204, 195],
            [10, 3105, 198, 204, 195],
            [10, 3312, 198, 204, 195],
            [10, 3519, 198, 204, 195],
            [10, 3726, 198, 204, 195],
            [10, 3933, 198, 204, 195]
        ], 83, 0, 0),
        uo = R([
            [10, 1449, 198, 204, 195],
            [10, 1656, 198, 204, 195],
            [10, 1863, 198, 204, 195],
            [10, 2070, 198, 204, 195],
            [10, 2277, 198, 204, 195],
            [10, 2484, 198, 204, 195],
            [10, 2484, 198, 204, 195]
        ], 83, 0, 0),
        vo = R([
            [10, 1242, 0, 204, 195],
            [10, 1449, 0, 204, 195],
            [10, 1656, 0, 204, 195],
            [10, 1449, 0, 204, 195],
            [10, 1863, 0, 204, 195],
            [10, 2070, 0, 204, 195],
            [10, 2277, 0, 204, 195],
            [10, 2484, 0, 204,
                195
            ],
            [10, 2691, 0, 204, 195],
            [10, 2484, 0, 204, 195],
            [10, 2898, 0, 204, 195],
            [10, 3105, 0, 204, 195],
            [10, 3312, 0, 204, 195],
            [10, 3519, 0, 204, 195],
            [10, 3726, 0, 204, 195],
            [10, 3933, 0, 204, 195],
            [10, 3933, 0, 204, 195],
            [10, 3933, 0, 204, 195],
            [10, 3933, 0, 204, 195],
            [10, 3933, 0, 204, 195],
            [10, 3933, 0, 204, 195],
            [10, 3933, 0, 204, 195],
            [10, 3933, 0, 204, 195],
            [10, 4140, 0, 204, 195],
            [10, 4347, 0, 204, 195],
            [10, 4554, 0, 204, 195],
            [10, 4554, 0, 204, 195],
            [10, 4554, 0, 204, 195],
            [10, 4554, 0, 204, 195],
            [10, 4554, 0, 204, 195],
            [10, 4554, 0, 204, 195],
            [10, 4554, 0, 204, 195],
            [10, 4554, 0, 204, 195],
            [10, 4554, 0, 204, 195],
            [10, 4761, 0, 204, 195],
            [10, 4968, 0, 204, 195],
            [10, 5175, 0, 204, 195],
            [10, 5382, 0, 204, 195],
            [10, 0, 198, 204, 195],
            [10, 207, 198, 204, 195],
            [10, 207, 198, 204, 195],
            [10, 207, 198, 204, 195],
            [10, 207, 198, 204, 195],
            [10, 207, 198, 204, 195],
            [10, 207, 198, 204, 195],
            [10, 207, 198, 204, 195],
            [10, 207, 198, 204, 195],
            [10, 414, 198, 204, 195],
            [10, 621, 198, 204, 195],
            [10, 828, 198, 204, 195],
            [10, 1035, 198, 204, 195],
            [10, 1242, 198, 204, 195]
        ], 83, 0, 0),
        wo = R([
            [10, 0, 0, 204, 195],
            [10, 207, 0, 204, 195],
            [10, 414, 0, 204, 195],
            [10, 621, 0, 204, 195],
            [10, 828, 0, 204, 195],
            [10, 1035, 0, 204, 195],
            [10, 1035, 0, 204, 195]
        ], 83, 0, 0),
        xo = Q([
            [10, 4140, 198, 204, 195],
            [10, 4347, 198, 204, 195],
            [10, 4554, 198, 204, 195],
            [10, 4761, 198, 204, 195],
            [10, 4968, 198, 204, 195],
            [10, 5175, 198, 204, 195],
            [10, 5175, 198, 204, 195],
            [10, 5175, 198, 204, 195],
            [10, 5175, 198, 204, 195]
        ], 83, 0, 0),
        yo = 83 * xo.length;
    so.prototype.Bb = function() {
        var a = this;
        T(this, 9, this.wa);
        T(this, 0, yo, Aj(this), new u(this.lb, this.mb), function() { a.La(a.H) }) };
    so.prototype.update = function(a) { so.Da.update.call(this, a);
        for (var b = this.ta.length - 1; 0 <= b; b--) this.ta[b].$a() && this.ta.splice(b, 1);
        if (0 == this.state && 0 == this.ta.length)
            if (0 < this.Ea) this.Ea -= a;
            else { a = this.hb[Math.floor(Math.random() * this.hb.length)];
                for (b = 0; b < a.length; b++) a[b].s = this.Ia;
                a = ko(this.Nb, a);
                Ba(this.ta, a);
                this.Ea = 500 } };
    so.prototype.Eb = function() {
        return 0 == this.w.length && 0 == this.Fa.length };
    so.prototype.Mb = function() {
        if (0 == this.w.length) { N(this);
            var a = this.Fa.shift();
            a || Un(this, 0);
            var b = this;
            T(this, 0, this.U, Aj(this), new u(this.lb, this.mb), function() { Ba(b.w, nl(a));
                b.Ia *= .8;
                b.La(b.H) }) } };
    var zo = pl.ka(),
        Co = function(a, b) {
            var c = p([0, Ao, 2, Ao, 3, Ao, 5, Bo, 6, [Bo[Bo.length - 1]]]);
            On.call(this, c, 20, [4], a, b, -35) };
    m(Co, On);
    var Ao = Q([
            [2, 2990, 709, 78, 63],
            [2, 3071, 709, 78, 63],
            [2, 3152, 709, 78, 63], Kh, Kh, Kh, Kh, Kh
        ], 83, 0, 0),
        Bo = R([
            [2, 1337, 68, 78, 63],
            [2, 1808, 143, 78, 63],
            [2, 2104, 350, 78, 63],
            [2, 1875, 387, 78, 63],
            [2, 687, 699, 78, 63],
            [2, 768, 699, 78, 63],
            [2, 2596, 703, 78, 63],
            [2, 2828, 709, 78, 63],
            [2, 2909, 709, 78, 63],
            [2, 2909, 709, 78, 63],
            [2, 2909, 709, 78, 63],
            [2, 2909, 709, 78, 63]
        ], 83, 0, 0);
    Co.prototype.Lb = function() { V(zo, 18);
        return Co.Da.Lb.call(this) };
    var Do = pl.ka(),
        Eo = function(a, b) { C.call(this);
            this.w = a;
            this.H = null;
            this.T = b;
            this.R = null;
            Do.o.push(this) };
    m(Eo, C);
    Eo.prototype.reset = function() {
        var a = Z.Fb(this)[0];
        this.H && E(this.H);
        this.H = a;
        D(this, a);
        this.R = null };
    var X = function(a) {
            return new H(a) },
        Y = function(a) {
            var b = new Gj;
            b.rb = function() {
                return a.w.$.length == (a.R && !a.R.$a() ? 1 : 0) };
            return b },
        fm = function(a, b) {
            return new Hj(function() { ko(a, b) }) },
        ko = function(a, b) {
            for (var c = [], d = 0; d < b.length; d++) {
                var e = b[d];
                if (!(4 == e.w[0] && 5 <= a.T.w)) {
                    var f;
                    0 < e.w.length && 4 == e.w[0] ? f = new Co(e.o.x, e.o.y) : f = Wn(e.w.slice(), e.o.x, e.o.y);
                    Tn(f);
                    0 < e.s && f.La(e.s);
                    G(f, nm());
                    D(a.w, f);
                    c.push(f) } }
            return c },
        gm = function(a) {
            var b = U(5, 295, 14, "");
            return new Hj(function() {
                var c;
                c = b.o.x;
                var d = b.o.y,
                    e = p([0, Yn, 2, ao, 9, bo, 3, Zn, 5, $n, 6, [$n[$n.length - 1]]]);
                c = new Xn(e, 100, 0, c, d, -60);
                Tn(c);
                c.La(b.s);
                D(a.w, c)
            })
        },
        im = function(a) {
            var b = U(-5, 217.5, 12, "");
            return new Hj(function() {
                var c;
                c = b.o.x;
                var d = b.o.y,
                    e = b.s,
                    f = p([0, eo, 8, eo, 7, io, 2, ho, 9, jo, 3, fo, 5, go, 6, [go[go.length - 1]]]);
                c = new co(a, f, 100, 0, c, d, -60, e);
                Tn(c);
                D(a.w, c) }) },
        jm = function(a) {
            var b = U(20, 245, 3.8, "");
            return new Hj(function() {
                var c;
                c = b.o.x;
                var d = b.o.y,
                    e = p([0, no, 2, qo, 9, ro, 3, oo, 5, po, 6, [po[po.length - 1]]]);
                c = new mo(e, 100, 0, c, d, -60);
                Tn(c);
                c.La(b.s);
                D(a.w,
                    c)
            })
        },
        km = function(a) {
            var b = U(5, 295, 12, "");
            return new Hj(function() {
                var c;
                c = b.o.x;
                var d = b.o.y,
                    e = p([0, to, 2, wo, 9, xo, 3, uo, 5, vo, 6, [vo[vo.length - 1]]]);
                c = new so(a, e, 100, 0, c, d, -60);
                Tn(c);
                c.La(b.s);
                D(a.w, c) }) },
        lm = function(a, b) {
            return new Hj(function() {
                var c = Wn(nl(b), 0, 0, -105),
                    d = Z.Ba;
                d.w = c;
                var e = Aj(d);
                F(d.w, e.x - 50, e.y);
                d.w.ab = 200;
                d.w.Aa = 0;
                d.w.s = d.s + 1;
                Zl(d);
                D(a.w, c) }) },
        hm = function(a, b) {
            for (var c = function(c) {
                    return function() { E(b[c]);
                        if (c < b.length - 1) {
                            var d = b[c + 1];
                            a.H && E(a.H);
                            a.H = d;
                            D(a, d) } else V(Do, 1) } }, d = 0; d <
                b.length; d++) b[d].ub = c(d)
        };
    Eo.prototype.Na = function(a) { 20 != a || this.R && !this.R.$a() || (a = ml(190, 295), a = new Co(a.x, a.y), Tn(a), G(a, nm()), D(this.w, a), this.R = a) };
    var Fo = pl.ka(),
        Go = kk.ka(),
        Ho = function(a, b) { this.o = a;
            this.T = b;
            this.S = new C;
            this.R = new Eo(this.S, this.o);
            this.$ = new yn(this.o);
            this.H = new Bn;
            this.H.o = !1;
            this.s = new C;
            this.s.o = !1;
            this.V = 0;
            Fo.o.push(this);
            D(this.s, this.o);
            D(this.s, this.S);
            D(this.s, this.R);
            D(this.s, this.H);
            this.$.s = 462;
            D(this.s, this.$) };
    m(Ho, ok);
    Ho.prototype.Na = function(a, b) {
        switch (a) {
            case 4:
                if (!this.s.o) break;
                if (!Tm(this.o, b)) break;
                a = this.S.$;
                for (var c = !1, d = 0, e; e = a[d++];) e.$a() || (c = e.Kb(b) || c);
                c || V(Fo, 17);
                kl[b] ? kl[b].play() : this.H.ma.play();
                break;
            case 7:
            case 9:
                if (!this.s.o) break;
                Vm(this.o);
                break;
            case 8:
                if (!this.s.o) break;
                Wm(this.o);
                break;
            case 1:
                N(this.o);
                V(Fo, 13);
                this.V = 1;
                break;
            case 0:
                Io(this.T);
                this.R.o = !1;
                break;
            case 16:
                this.V = 7;
                break;
            case 15:
                E(this.s);
                this.o.reset();
                b = this.H;
                Dn(b, 0);
                b.va = 0;
                break;
            case 14:
                Um(this.o), b = this.H, Dn(b, b.va),
                    Jo(this)
        }
    };
    var Jo = function(a) { Sm(a.o);
        zj(a.S);
        a.R.reset() };
    Ho.prototype.Ja = function() { this.s.o = !0;
        this.V = 0;
        D(this.s, this.o);
        N(this.o);
        F(this.o, om());
        Sm(this.o);
        this.o.s = 180 + this.o.R.Ca[4] / 2;
        G(this.o, nm());
        this.H.o = !0;
        this.R.o = !0;
        Z.Ba && D(this.s, Z.Ba);
        Z.qc && Ym(this.o);
        D(Go.o, this.s);
        Ko(this.T) };
    Ho.prototype.Ka = function() { this.s.o = !1;
        this.H.o = !1;
        Z.Ba && (N(Z.Ba), Z.Ba.T = [], E(Z.Ba));
        Zm(this.o);
        E(this.s);
        Io(this.T);
        N(this.o);
        x.Yb.stop() };
    Ho.prototype.update = function() {
        return this.V };
    var Lo = function(a, b, c, d) { this.o = a;
        this.s = b;
        this.w = Math.abs(c);
        this.H = d || !1;
        this.H || (this.o += this.w, this.s += this.w) };
    m(Lo, jd);
    var Mo = function(a, b, c) { a.o = b;
        a.s = c;
        a.H || (a.o += a.w, a.s += a.w) };
    Lo.prototype.contains = function(a, b) {
        return Math.sqrt((this.o - a) * (this.o - a) + (this.s - b) * (this.s - b)) <= this.w };
    Lo.prototype.ya = function(a) { a.beginPath();
        a.arc(this.o, this.s, this.w, 0, 2 * Math.PI, !0);
        a.fill();
        a.stroke() };
    var No = function(a, b, c, d, e, f, h, l, t) { e = p([0, R([e], 0, 0, 0), 1, R([f || e], 0, 0, 0)]);
        S.call(this, e);
        this.wa = h;
        this.w = new Lo(a, b, c, !0);
        this.H = d;
        this.ta = l;
        this.U = t || ca;
        F(this, a, b) };
    m(No, S);
    var Po = function(a, b, c, d, e, f) {
            var h = Oo;
            f = f || 0;
            var h = xa(h, function(a) { a: if (a = a.Ca, ha(a) && ha(b) && a.length == b.length) {
                        for (var c = a.length, d = 0; d < c; d++)
                            if (a[d] !== b[d]) { a = !1;
                                break a }
                        a = !0 } else a = !1;return a }) || { x: 0, y: 0 },
                l = Ve(Xe.ka(), b) / 2;
            return new No(h.x + l + f, h.y + l, l, a, b, c, d, e) },
        Qo = function(a) {
            var b = Ej(a);
            Mo(a.w, b.s, b.o);
            a.qa(0);
            a.U(!1);
            Md(a.H, a.w, function(b) {
                "mouseup" == b ? a.wa() : "mouseover" == b ? (a.qa(1), a.U(!0), document.getElementById("hplogo").title = a.ta) : "mouseout" == b && (a.qa(0), a.U(!1), document.getElementById("hplogo").title =
                    "")
            });
            yd(a.H.o, a.w)
        },
        Ro = function(a) { xd(a.H.o, a.w);
            document.getElementById("hplogo").title = "" };
    var Uo = function(a, b, c, d, e, f, h) {
            var l = a.font;
            a.font = So("", d, c);
            for (var t = To(a, b, f); t.length > h && d > e;) a.font = So("", --d, c), t = To(a, b, f);
            for (b = 0; b < t.length; b++)
                for (; a.measureText(t[b]).width > f && d > e;) a.font = So("", --d, c);
            a.font = l;
            return { tb: t, fontFamily: c, fontSize: d, fontStyle: "" } },
        So = function(a, b, c) {
            return a + " " + b + "px " + c },
        To = function(a, b, c) { b = b.match(/[^\s-]+-?/g);
            for (var d = b[0], e = [], f = 1; f < b.length; f++) {
                var h = d + ("-" == d[d.length - 1] ? "" : " ") + b[f];
                a.measureText(h).width > c ? (e.push(d), d = b[f]) : d = h }
            e.push(d);
            return e };
    var Vo = function(a, b, c, d, e, f, h, l, t, W, L, ja) {
        vn.call(this, b, c, d, h, l, e, f);
        this.w = Uo(a, b, h, l, t, W, L);
        if (ja) {
            a = new C;
            var Ua = this;
            a.ya = function(a) {
                a.fillStyle = "#000";
                var b = Ua.w;
                a.font = So(b.fontStyle, b.fontSize, b.fontFamily);
                for (var c = 0, d = 0; d < b.tb.length; d++) c = Math.max(c, a.measureText(b.tb[d]).width);
                var e = c + 40,
                    d = Ua.w.tb.length * l + 20,
                    b = -d / 2,
                    c = -e / 2,
                    e = e / 2,
                    d = d / 2;
                a.beginPath();
                a.moveTo(c + 20, b);
                a.lineTo(e - 20, b);
                a.quadraticCurveTo(e, b, e, b + 20);
                a.lineTo(e, d - 20);
                a.quadraticCurveTo(e, d, e - 20, d);
                a.lineTo(c + 20, d);
                a.quadraticCurveTo(c,
                    d, c, d - 20);
                a.lineTo(c, b + 20);
                a.quadraticCurveTo(c, b, c + 20, b);
                a.fill()
            };
            a.Aa = .7;
            a.s = -1;
            F(a, 0, -5);
            D(this, a)
        }
    };
    m(Vo, vn);
    Vo.prototype.ya = function(a) { a.fillStyle = this.fillStyle;
        a.textAlign = this.R;
        var b = this.w,
            c = this.w.fontSize / 4 - (this.w.tb.length - 1) / 2 * this.w.fontSize,
            d = this.w.fontSize,
            e = a.font;
        a.font = So(b.fontStyle, b.fontSize, b.fontFamily);
        for (var f = 0; f < b.tb.length; f++) a.fillText(b.tb[f], 0, c + f * d);
        a.font = e };
    var Xo = function(a) { ge.call(this);
        this.o = a;
        Uc(a, Wo, this.S, !1, this);
        Uc(a, "click", this.H, !1, this) };
    m(Xo, ge);
    var Wo = sc ? "keypress" : "keydown";
    Xo.prototype.S = function(a) {
        (13 == a.S || tc && 3 == a.S) && Yo(this, a) };
    Xo.prototype.H = function(a) { Yo(this, a) };
    var Yo = function(a, b) {
        var c = new Zo(b);
        if (ie(a, c)) { c = new $o(b);
            try { ie(a, c) } finally { b.stopPropagation() } } };
    Xo.prototype.s = function() { Xo.Da.s.call(this);
        bd(this.o, Wo, this.S, !1, this);
        bd(this.o, "click", this.H, !1, this);
        delete this.o };
    var $o = function(a) { Gc.call(this, a.o);
        this.type = "action" };
    m($o, Gc);
    var Zo = function(a) { Gc.call(this, a.o);
        this.type = "beforeaction" };
    m(Zo, Gc);
    var ap = function(a, b, c, d, e) { gd.call(this);
        this.U = a;
        this.ma = b;
        this.ha = c;
        this.W = d;
        e && (this.w && this.unlisten(this.w, "action", this.H), e && (this.w = new Xo(e), gc(this, oa(hc, this.w)), this.H = na(this.S, this), this.listen(this.w, "action", this.H))) };
    m(ap, gd);
    ap.prototype.S = function() { bp() && !oc("Trident") && !oc("MSIE") && window.gapi && window.gapi.load ? (window.gapi.load("share", na(this.T, this)), Pb("gplus,li")) : (window.open("https://plus.google.com/share?url=" + this.U), Pb("gplus,lo")) };
    var bp = function() {
        if (!window.gbar) return !1;
        var a = !!(window.gbar.sos && 0 < window.gbar.sos().length),
            b = !(!window.gbar.so || !window.gbar.so());
        return a || b };
    ap.prototype.T = function() {
        if (window.gapi && window.gapi.share) {
            var a = { items: [{ type: "http://schema.org/WebPage", id: location.protocol + "//" + location.host, properties: { url: [this.U], name: [this.ma], image: [this.W] } }] },
                b = window.location.toString().match(/[?&]authuser=(\d+)/),
                b = b && b[1],
                c = bp() || !!window.google.doodle.sf;
            window.gapi.share.lightbox(a, {
                isLoggedInForGooglePlus: c,
                onLoginPopupBlocked: function() { Pb("gplus,popupblocked") },
                onLoginStateChanged: na(function() { qa("google.doodle.sf", !0);
                    this.T() }, this),
                editorText: this.ha,
                sessionIndex: b || "",
                sourceForLogging: "doodle"
            })
        }
    };
    var cp = function(a) {
            return 0 == a.indexOf("//") ? "https:" + a : a },
        dp = function(a) { Pb(["share", a, "x"].join()) };
    var ep = function() {
            return Jb("shortlink", "http://www.google.com/?doodle=26979449") },
        gp = function(a) {
            return q("Share Message").replace(/\[.*\]/, "" + a) },
        hp = function() {
            var a = ep(),
                a = cp(a),
                b = new Va("http://www.facebook.com/sharer.php"),
                c = new Ya;
            jb(c, "u", a);
            Za(b, c);
            window.open(b.toString());
            dp(2) };
    var Oo = [{ Ca: mf, x: 350, y: 141 }, { Ca: nf, x: 350, y: 141 }, { Ca: of, x: 431, y: 141 }, { Ca: pf, x: 431, y: 141 }, { Ca: qf, x: 511, y: 141 }, { Ca: rf, x: 511, y: 141 }, { Ca: Hh, x: 0, y: 0 }, { Ca: hi, x: 528, y: 231 }, { Ca: ii, x: 528, y: 231 }, { Ca: ji, x: 474, y: 231 }, { Ca: ki, x: 474, y: 231 }, { Ca: li, x: 366, y: 231 }, { Ca: mi, x: 366, y: 231 }, { Ca: ni, x: 445, y: 231 }, { Ca: oi, x: 420, y: 231 }, { Ca: pi, x: 420, y: 231 }];
    var ip = pl.ka(),
        jp = function(a, b, c) {
            this.va = b;
            this.ma = c;
            this.V = this.T = !1;
            this.H = 0;
            var d = this;
            c = b ? -40 : 0;
            this.ta = Po(a, mf, nf, function() { d.T = !0 }, q("End Screen - Replay"));
            this.wa = Po(a, of, pf, function() { d.V = !0 }, q("End Screen - New Game"), c);
            this.Ea = Po(a, qf, rf, Ib, q("Search - Icon"), c);
            this.ha = Po(a, li, mi, function() {
                var a = ep(),
                    b = gp(d.H),
                    a = cp(a);
                (new ap(a, window.google.doodle.alt || "", b, "https://www.google.com/logos/2016/halloween16/share.png")).S() }, q("Share - G+"));
            this.Fa = Po(a, oi, pi, function() {
                var a = ep(),
                    b =
                    gp(d.H),
                    a = cp(a);
                window.open("http://twitter.com/intent/tweet?status=" + encodeURIComponent(String(b + "\n" + a)));
                dp(3)
            }, q("Share - Twitter"));
            this.W = Po(a, ji, ki, hp, q("Share - Facebook"));
            this.U = Po(a, hi, ii, function() {
                var a = d.H;
                dp(5);
                var b = window.location,
                    c = ep(),
                    a = gp(a),
                    c = cp(c),
                    a = { subject: Kb, body: a + "\n" + c },
                    c = new Ya,
                    l;
                for (l in a) jb(c, l, a[l]);
                l = new Va("mailto:");
                Za(l, c);
                b.href = l.toString() }, q("Share - E-mail"));
            this.ra = Po(a, ni, ni, function() {
                window.location = "http://www.google.com/doodles/_SHARE?description=" +
                    encodeURIComponent(String(gp(d.H))) + "&url=" + encodeURIComponent(String(ep()))
            }, q("Share"));
            this.o = [this.wa, this.Ea];
            b || this.o.push(this.ta);
            cc();
            r.Sa ? this.o.push(this.ra) : this.o = this.o.concat([this.ha, this.Fa, this.W, this.U]);
            this.s = new C;
            this.s.s = 461;
            a = new P(b ? Hh : Gh);
            F(a, 320, 180);
            D(this.s, a);
            this.S = new C;
            D(this.s, this.S);
            G(this.S, .9);
            F(this.S, 46, 45);
            ua(this.o, function(a) { D(d.S, a) });
            this.R = null;
            this.$ = new vn("0", 466, 150, "'Itim', sans-serif", 40, "white", "center");
            D(this.s, this.$);
            ip.o.push(this)
        };
    m(jp, ok);
    jp.prototype.Ja = function() { this.V = this.T = !1;
        this.R || (this.R = new Vo(this.ma, q("Happy Halloween!"), 466, 85, "white", "center", "'Itim', sans-serif", 36, 20, 244, 1, !1), D(this.s, this.R));
        D(kk.ka().o, this.s);
        ua(this.o, function(a) { Qo(a) });
        this.va || (pm().stop(), x.Xb.play()) };
    jp.prototype.Ka = function() { E(this.s);
        x.Ob.stop();
        x.Xb.stop();
        ua(this.o, function(a) { Ro(a) }) };
    jp.prototype.update = function() {
        return this.T ? (V(ip, 14), Z.state) : this.V ? (V(ip, 15), 13) : 0 };
    jp.prototype.Na = function(a, b) { 2 == a && (this.H = b, this.$.H = "" + this.H) };
    var kp = Xe.ka(),
        mp = function() { this.H = 0;
            lp(this, 0, 0) },
        lp = function(a, b, c) { a.w = b;
            a.o = c;
            a.V = .8 * Math.random();
            a.T = .5 * Math.random() + .9;
            a.s = Math.random() + 2;
            a.S = -.2;
            a.R = 2 * Math.random() * Math.PI };
    mp.prototype.update = function(a, b, c) { this.$ = b;
        this.U = c;
        this.H = a;
        this.w += Math.cos(this.R) * this.T;
        this.o += Math.sin(this.R) * this.T;
        this.o += this.S;
        this.s -= .05;
        this.S += .04;
        2 >= this.s && lp(this, this.$, this.U) };
    mp.prototype.ya = function(a) { a.save();
        a.globalAlpha = .2 * Math.sin(this.s) * this.s;
        var b = this.H * (.5 - 2 * this.V + .2 * this.H);
        kp.ya(Lh, a, this.w - 4, this.o - 4, .1 * b, !0);
        a.globalAlpha = .5 * this.s + .2 * this.H;
        b = Math.sin(this.w) + .15 * this.V + .2 * this.H;
        kp.ya(di, a, this.w - 4, this.o - 4, .3 * b, !0);
        a.restore() };
    var np = pl.ka(),
        qp = function(a) { C.call(this);
            this.w = [];
            this.qb = [];
            this.Ya = [];
            this.lb = this.mb = this.Ma = 0;
            this.U = new u(0, 0);
            this.T = new u(0, 0);
            this.ma = new u(0, 0);
            this.va = new u(0, 0);
            this.Fa = new u(0, 0);
            this.W = new u(0, 0);
            op(this);
            this.hb = a;
            this.wa = [];
            if (pp)
                for (a = 0; 100 > a; a++) this.wa.push(new mp);
            this.Ia = !1;
            this.R = this.H = this.Ea = this.ta = this.Oa = this.ra = 0 };
    m(qp, C);
    var Ko = function(a) { a.Ia || (Md(a.hb, td, function(b, c, d) { a.handleEvent(b, c, d) }), a.Ia = !0) },
        Io = function(a) { a.Ia && (xd(a.hb.o, td), a.Ia = !1, a.ha = !1, op(a)) },
        op = function(a) { a.w = [];
            a.Ya = [];
            a.Ma = 0;
            a.U.x = 640;
            a.U.y = 360;
            a.T.x = 0;
            a.T.y = 0;
            a.va.y = 360;
            a.ma.y = 0;
            a.ra = 0;
            a.Oa = 0;
            a.ta = 0;
            a.Ea = 0;
            a.H = 0;
            a.R = 0 },
        rp = function(a) {
            if (3 > a.Ma || 3 > a.w.length) return null;
            var b, c = a.T,
                d = a.U;
            b = new En(c.x - d.x, c.y - d.y);
            var e = Fn(b),
                f = a.U.y,
                h = a.T.y,
                d = a.Fa,
                c = a.W,
                l = b.y / 3,
                t = Ca(e / 320, 0, 1),
                W = 10 < a.Ma / ((b.x / 2 + b.y / 2) / 2);
            if (3 < b.x / b.y) return [2, t];
            if (3 > a.Oa &&
                (3 < b.y / b.x && 2 > a.ra || 5 < b.y / b.x && 4 > a.ra)) return [0, t];
            var L = [
                [0],
                [0, 0],
                [0, 0, 0]
            ];
            if (0 < b.y)
                for (var ja = 0, Ua = a.w.length; ja < Ua - 1; ja++)
                    for (var Xp = a.Ya[ja], Cj = (a.w[ja][1] - f) / b.y, hb = 0; hb < L.length; hb++) L[hb][Math.floor(Ca(Cj * (hb + 1), 0, hb))] += Xp;
            b = Fn(new En(c.x - d.x, c.y - d.y));
            ja = e / 3;
            if (b < ja && (t = 1 - Ca(b / ja, 0, 1), L[1][0] > L[1][1] && !W)) return [4, t];
            if (3 == a.ra || L[2][1] > .4 * L[0][0] && (d.y < f + l && c.y > h - l || c.y < f + l && d.y > h - l)) return [6, t];
            e /= 6;
            t = Jd(a.va, d);
            f = Id(t);
            l = Jd(c, a.va);
            h = Id(l);
            if (f > e && h > e && (t = Da(t.x, t.y), l = Da(l.x, l.y), 270 <
                    t && 90 > l || 180 < t && 270 > t && 90 < l && 180 > l)) return t = Ca(1 - Math.abs(f - Math.min(f, h)) / f, 0, 1), [1, t];
            f = Jd(a.ma, d);
            d = Id(f);
            c = Jd(c, a.ma);
            a = Id(c);
            return d > e && a > e && (e = Da(f.x, f.y), c = Da(c.x, c.y), 90 > e && 270 < c || 90 < e && 180 > e && 180 < c && 270 > c) ? (t = Ca(1 - Math.abs(d - Math.min(d, a)) / d, 0, 1), [3, t]) : null
        };
    qp.prototype.ya = function(a) {
        a.save();
        var b = pa() - this.lb,
            c = !this.ha && 500 > b;
        if (this.ha || c)
            if (c && (a.globalAlpha = 1 - b / 500), this.Fa && this.w.length) {
                (c = rp(this)) ? (b = fl[c[0]], c = c[1], c = Ca(c, 0, 1), b = "rgb(" + [Math.round(c * b[0] + (1 - c) * Wk[0]), Math.round(c * b[1] + (1 - c) * Wk[1]), Math.round(c * b[2] + (1 - c) * Wk[2])].join() + ")") : b = "white";
                a.strokeStyle = b;
                a.lineWidth = 10;
                a.lineCap = "round";
                a.beginPath();
                a.moveTo(this.Fa.x, this.Fa.y);
                b = this.w.length;
                for (c = 0; c < b - 2; c++) a.quadraticCurveTo(this.w[c][0], this.w[c][1], (this.w[c][0] + this.w[c +
                    1][0]) / 2, (this.w[c][1] + this.w[c + 1][1]) / 2);
                1 < b && a.quadraticCurveTo(this.w[c][0], this.w[c][1], this.w[c + 1][0], this.w[c + 1][1]);
                a.stroke();
                b = this.w.length;
                if (0 < b && (a.beginPath(), a.arc(this.w[b - 1][0], this.w[b - 1][1], 10, 0, 2 * Math.PI), a.fillStyle = "white", a.fill(), pp))
                    for (a.globalCompositeOperation = "lighter", c = b - 1, b = this.W.x - (0 < c ? this.w[c - 1][0] : 0), c = this.W.y - (0 < c ? this.w[c - 1][1] : 0), b = Math.sqrt(b * b + c * c), b = Math.min(b, 1.5), c = 0; c < this.wa.length; c++) this.ha && this.wa[c].ya(a), this.wa[c].update(b, this.W.x, this.W.y)
            }
        a.restore()
    };
    var pp = !yb,
        sp = function(a, b, c) { a.ha && (a.ha = !1, a.W = new u(b, c), a.lb = pa(), b = rp(a), ga(b) && 0 < b.length ? (a.mb = b[0], V(np, 4, a.mb)) : V(np, 8)) };
    qp.prototype.handleEvent = function(a, b, c) {
        switch (a) {
            case "mousemove":
                if (8 > b || 8 > c || 632 < b || 352 < c) sp(this, b, c);
                else if (this.ha) {
                    this.w.push([b, c]);
                    this.qb.push(new u(b, c));
                    a = this.w.length - 1;
                    if (0 < a) {
                        a = this.w[a - 1];
                        var d = a[1] - c,
                            e = Math.abs(d);
                        0 == this.Ea && 3.75 < e ? (this.Oa++, this.Ea = d / e) : 0 > d * this.Ea ? (this.R += e, 15 < this.R && (this.Oa++, this.R = 0, this.Ea = d / e)) : 0 < d * this.Ea && (this.R -= e, -7.5 > this.R && (this.R = 0));
                        d = a[0] - b;
                        e = Math.abs(d);
                        0 == this.ta && 3.75 < e ? (this.ra++, this.ta = d / e) : 0 > d * this.ta ? (this.H += e, 15 < this.H && (this.ra++,
                            this.H = 0, this.ta = d / e)) : 0 < d * this.ta && (this.H -= e, -7.5 > this.H && (this.H = 0));
                        a = Math.sqrt(Math.pow(b - a[0], 2) + Math.pow(c - a[1], 2));
                        this.Ya.push(a);
                        this.Ma += a
                    }
                    this.U.x = Math.min(this.U.x, b);
                    this.U.y = Math.min(this.U.y, c);
                    this.T.x = Math.max(this.T.x, b);
                    this.T.y = Math.max(this.T.y, c);
                    c > this.ma.y && (this.ma.x = b, this.ma.y = c);
                    c < this.va.y && (this.va.x = b, this.va.y = c);
                    this.W = new u(b, c);
                    V(np, 9)
                }
                break;
            case "mousedown":
                op(this);
                for (a = 0; a < this.wa.length; a++) lp(this.wa[a], b, c);
                this.w = [];
                this.qb = [];
                this.ha = !0;
                this.Fa = new u(b,
                    c);
                V(np, 7);
                break;
            case "mouseup":
                sp(this, b, c);
                break;
            case "mouseout":
                sp(this, b, c)
        }
    };
    var tp = kk.ka(),
        up = function(a, b) { this.o = a;
            this.T = this.R = 0;
            Xe.ka();
            a = Ih[3];
            this.W = new u(-a / 2, 40);
            this.ma = new u(a / 2, 40);
            this.ha = new u(-a / 2, 120);
            this.ra = new u(a / 2, 120);
            this.V = b };
    m(up, ok);
    var vp = p([0, 1400, 1, 900, 2, 900, 3, 1200]);
    up.prototype.Ja = function() {
        this.s = new C;
        this.s.s = 461;
        this.H = new P(Ih);
        F(this.H, this.W);
        D(this.H, new Vo(this.V, q("Level Start - Ready"), -90, 3, "black", "left", "'Itim', sans-serif", 53, 20, 260, 1, !1));
        this.S = new P(Jh);
        F(this.S, this.ha);
        D(this.S, new Vo(this.V, q("Level Start - Set"), -90, 3, "black", "left", "'Itim', sans-serif", 53, 20, 260, 1, !1));
        this.$ = new Vo(this.V, q("Level Start - Draw!"), 320, 80, "white", "center", "'Itim', sans-serif", 53, 26.5, 640, 1, !0);
        F(this.$, 320, 80);
        this.U = new Vo(this.V, Z.title, 320, 105, "white",
            "center", "'Itim', sans-serif", 53, 26.5, 640, 2, !0);
        this.R = 0;
        D(tp.o, this.s);
        D(tp.o, this.o);
        this.o.s = 2;
        F(this.o, om());
        G(this.o, nm());
        Sm(this.o);
        Z.Ba && D(tp.o, Z.Ba);
        Z.qc && Ym(this.o);
        wp(this, 0)
    };
    up.prototype.Ka = function() { E(this.s);
        E(this.o);
        this.o.s = 0;
        Zm(this.o);
        Z.Ba && E(Z.Ba) };
    up.prototype.update = function(a) { this.R += a;
        if (this.R >= vp[this.T]) { this.R = 0;
            if (3 == this.T) return 1;
            wp(this, this.T + 1) }
        return 0 };
    var wp = function(a, b) {
        switch (b) {
            case 0:
                D(a.s, a.U);
                break;
            case 1:
                E(a.U);
                D(a.s, a.H);
                Xj(a.H, 500, null, a.ma);
                break;
            case 2:
                D(a.s, a.S);
                Xj(a.S, 500, null, a.ra);
                break;
            case 3:
                Xj(a.H, 300, null, a.W), Xj(a.S, 300, null, a.ha), D(a.s, a.$) }
        a.T = b };
    var xp = Xe.ka(),
        yp = kk.ka(),
        zp = function(a, b) {
            this.w = !1;
            this.s = new I;
            this.S = a;
            this.ra = new P(cf);
            F(this.ra, 320, 180);
            D(this.s, this.ra);
            D(this.s, new Sk);
            this.ha = new xk(yk, zk, Ak, Bk, Ck);
            F(this.ha, 160, 170);
            D(this.s, this.ha);
            this.ma = new xk(Dk, Dk, Ek, Fk, Gk);
            F(this.ma, 65, 250);
            D(this.s, this.ma);
            this.W = new xk(Hk, Ik, Jk, Kk, Lk);
            F(this.W, 480, 170);
            D(this.s, this.W);
            this.U = new xk(Mk, Nk, Ok, Pk, Qk);
            F(this.U, 575, 230);
            D(this.s, this.U);
            this.R = new I;
            a = new P(mj);
            F(a, uk(a) / 2, 180);
            var c = new jk("#fff", 869, 360);
            F(c, uk(a) - 2, 0);
            var d =
                new P(nj);
            F(d, uk(a) + 865 + uk(d) / 2, 180);
            D(this.R, a);
            D(this.R, c);
            D(this.R, d);
            this.R.s = 462;
            D(this.s, this.R);
            this.o = new Ml;
            D(this.s, this.o);
            this.$ = new gn;
            F(this.$, 212, 89);
            this.$.s = 461;
            D(this.s, this.$);
            this.wa = new jk("#000", 640, 360);
            this.wa.s = 461;
            D(this.s, this.wa);
            var e = this;
            this.T = new No(600, 337, 20, b, qi, null, function() { e.w = !0 }, "", function(a) { this.Aa = a ? 1 : .8 });
            G(this.T, .5);
            this.T.Aa = .8;
            this.T.s = 470;
            D(this.s, this.T);
            this.V = new P(Ye);
            this.H = new P(Ze);
            D(this.V, this.H);
            F(this.V, 48, 337);
            this.V.s = 470;
            G(this.V,
                .8);
            D(this.s, this.V)
        };
    m(zp, ok);
    var Ap = [xp.o[Ue(1)], xp.o[Ue(20)], x.Gb.nb];
    zp.prototype.Ja = function() {
        Db();
        x.ac.nb.s();
        Qo(this.T);
        this.T.o = !0;
        this.H.Aa = 0;
        this.V.o = !0;
        this.V.Aa = .8;
        J(this.H, new O(this.H, 600, 0, .8));
        J(this.H, new O(this.H, 600, .8, 0));
        J(this.H, new O(this.H, 600, 0, .8));
        J(this.H, new O(this.H, 600, .8, 0));
        J(this.H, new O(this.H, 600, 0, .8));
        Wj(this.H, new O(this.V, 600, .8, 0));
        J(this.H, new O(this.H, 600, .8, 0));
        vk(this.ra, cf);
        F(this.S, 320, 224);
        this.S.qa(17);
        D(this.s, this.S);
        this.U.o = !0;
        this.W.o = !0;
        this.ma.o = !0;
        this.ha.o = !0;
        this.R.o = !1;
        this.o.o = !1;
        this.o.qa(0);
        F(this.wa, 640,
            0);
        this.va = new P(Nl);
        F(this.va, -35, 60);
        this.$.qa(0);
        T(this.$, 1, hn);
        D(yp.o, this.s);
        K(this.s, 0, function() { x.Gb.play(0, !1) });
        var a = this;
        T(this.S, 18, Nm, null, null, function() { T(a.ha, 1, 0);
            T(a.W, 1, 83);
            T(a.U, 1, 166) });
        K(this.s, 4731, function() { F(a.o, 300, 125);
            a.o.o = !0 });
        T(this.o, 1, Ol);
        T(this.o, 2, 498);
        T(this.o, 3, 996);
        K(this.o, 0, function() { F(a.R, -1958, 0);
            a.R.o = !0;
            Vj(a.R, 996);
            Xj(a.R, 1660, null, new u(640, 0)) });
        T(this.o, 4, Pl, null, null, function() { D(a.o, a.va) });
        T(this.o, 5, Ql, null, null, function() { a.o.removeChild(a.va) });
        T(this.o, 7, Rl);
        K(this.o, 240, function() { Bp(a) });
        Fe(em, ca)
    };
    var Bp = function(a) { vk(a.ra, df);
        a.U.o = !1;
        a.W.o = !1;
        a.ma.o = !1;
        a.ha.o = !1;
        T(a.S, 19, 0);
        T(a.$, 2, 0);
        K(a.o, 1162, function() { T(a.o, 6, 0);
            Xj(a.o, 830, null, new u(640 + uk(a.o) / 2, 125)) });
        T(a.S, 20, Lm);
        T(a.S, 21, Mm);
        T(a.S, 8, Om, null, null, function() { Xj(a.wa, 1E3, null, new u(0, 0));
            a.T.o = !1;
            a.V.o = !1 });
        Xj(a.S, 1E3, new u(340, 224), new u(640 + uk(a.S) / 2, 224));
        K(a.S, 1E3, function() { a.w = !0 }) };
    zp.prototype.Ka = function() { E(this.va);
        Ro(this.T);
        N(this.s);
        N(this.U);
        N(this.W);
        N(this.ma);
        N(this.ha);
        N(this.o);
        N(this.R);
        N(this.S);
        N(this.H);
        x.Gb.stop();
        E(this.s) };
    var Cp = pl.ka(),
        Dp = kk.ka(),
        Ep = function(a) { this.w = !1;
            this.S = new I;
            this.o = a;
            this.s = new P(sh);
            this.s.s = 461;
            M(this.s, new rm(this.s, .5, 4));
            D(this.S, this.s);
            this.V = new vn(q("Level Complete"), 0, -60, "'Itim', sans-serif", 53, "white", "center");
            this.V.Aa = .8;
            D(this.s, this.V);
            this.H = new P(kf);
            F(this.H, 0, 40);
            D(this.s, this.H);
            this.R = 0;
            Cp.o.push(this) };
    m(Ep, ok);
    var Fp = [new u(-190, 40), new u(-98, 40), new u(5, 40), new u(111, 40), new u(220, 40)];
    Ep.prototype.Ja = function() {
        x.$b.play();
        F(this.o, om());
        D(this.S, this.o);
        D(Dp.o, this.S);
        for (var a = 0; a < this.R; a++) {
            var b = new P(th);
            F(b, Fp[a]);
            D(this.H, b) }
        a = new P(th);
        F(a, Fp[this.R]);
        a.Aa = 0;
        D(this.H, a);
        F(this.s, 640 + uk(this.s) / 2, 180);
        T(this.o, 9, 500);
        K(this.o, 0, function() { x.vc.play() });
        K(this.o, 1E3, function() { x.uc.play() });
        Vj(this.o, Jm - 1E3);
        pm().stop();
        x.$b.play();
        J(this.o, new Uj(this.s, 500, null, new u(320, 180)));
        Vj(this.o, 200);
        K(this.o, 0, function() { x.Sc.play() });
        J(this.o, new O(a, 200, 0, 1));
        var c = this;
        Vj(this.o,
            200);
        T(this.o, 0, 0);
        Vj(this.o, 1E3);
        J(this.o, new Uj(this.s, 500, null, new u(-uk(this.s) / 2, 180)));
        K(this.o, 500, function() { c.w = !0 })
    };
    Ep.prototype.Ka = function() { N(this.o);
        zj(this.H);
        E(this.S) };
    Ep.prototype.Na = function(a, b) { 12 == a && (this.R = b) };
    var Gp = pl.ka(),
        Hp = kk.ka(),
        Ip = function(a, b) { this.w = !1;
            this.s = a;
            this.H = b;
            this.o = new jk("black", 640, 360);
            this.o.s = 461 };
    m(Ip, ok);
    var Jp = null,
        Kp = null;
    Ip.prototype.Ja = function() { Z = mm[this.s];
        Fe(qm(), ca);
        Jp ? vk(Jp, Z.background) : (Jp = new P(Z.background), Jp.s = -1, F(Jp, 320, 180), D(Hp.o, Jp));
        F(Jp, Z.backgroundPosition || oj);
        Kp ? zj(Kp) : (Kp = new C, D(Hp.o, Kp));
        for (var a = Z.Ab, b = 0; b < a.length; b++) {
            var c = new P(a[b]);
            void 0 != a[b][0].z && (c.s = a[b][0].z);
            D(Kp, c) }
        Jo(this.H);
        V(Gp, 12, this.s);
        this.w = !0;
        D(Hp.o, this.o);
        pm().play(0, !0) };
    Ip.prototype.reset = function() { Kp = Jp = null };
    Ip.prototype.Ka = function() { E(this.o) };
    var Lp = function(a) { P.call(this, a);
        this.s = 462;
        F(this, oj) };
    m(Lp, P);
    var Mp = function(a) { J(a, new H(2E3, function(b) { Bj(a, .1 * 17 / b) }));
        K(a, 0, function() { Mp(a) }) };
    var Np = kk.ka(),
        Qp = function(a, b) { this.w = !1;
            this.S = a;
            this.R = b || null;
            this.o = new I;
            this.H = new jk(Op[this.S], 640, 360);
            this.H.s = 461;
            D(this.o, this.H);
            this.s = new Lp(Pp[this.S]);
            D(this.o, this.s) };
    m(Qp, ok);
    var Op = p([0, "white", 1, "black"]),
        Pp = p([0, [0, 83, 0, 80, 80], 1, [0, 0, 0, 80, 80]]);
    Qp.prototype.Ja = function() { this.s.Aa = 0;
        Dj(this.s);
        Bj(this.s, -20);
        Mp(this.s);
        Rp(this);
        D(Np.o, this.o) };
    Qp.prototype.Ka = function() { E(this.o);
        N(this.o);
        N(this.s) };
    var Rp = function(a) { Fe(a.R || qm(), function() { N(a.o);
            0 < a.s.Aa && J(a.o, new O(a.s, 200, a.s.Aa, 0));
            K(a.o, 0, function() { a.w = !0 }) });
        Vj(a.o, 500);
        J(a.o, new O(a.s, 200, 0, 1)) };
    var Sp = kk.ka(),
        Tp = function(a) { this.w = !1;
            this.H = new C;
            this.o = a;
            this.s = new jk("#000", 640, 360);
            this.s.s = 461;
            D(this.H, this.s) };
    m(Tp, ok);
    Tp.prototype.Ja = function() { D(this.H, this.o);
        D(Sp.o, this.H);
        F(this.s, 0, 0);
        var a = om();
        F(this.o, -uk(this.o) / 2, a.y);
        G(this.o, nm());
        var b = this;
        J(this.s, new Uj(this.s, 1E3, null, new u(-640, 0)));
        Vj(this.o, 200);
        Xm(this.o, a, function() { b.w = !0 }) };
    Tp.prototype.Ka = function() { N(this.o);
        N(this.s);
        E(this.H) };
    var Up = kk.ka(),
        Vp = function(a) { this.w = !1;
            this.s = new C;
            this.o = a };
    m(Vp, ok);
    Vp.prototype.Ja = function() { D(this.s, this.o);
        D(Up.o, this.s);
        var a = om(),
            b = this;
        F(this.o, a);
        G(this.o, nm());
        Xm(this.o, new u(640 + uk(this.o) / 2, a.y), function() { b.w = !0 }) };
    Vp.prototype.Ka = function() { N(this.o);
        E(this.s) };
    var Wp = function() { this.o = this.s = this.H = 0;
        pl.ka().o.push(this) };
    ea(Wp);
    var Yp = { 0: !0, 1: !0, 5: !0, 10: !0, 11: !0, 12: !0 };
    Wp.prototype.reset = function() { this.o = this.s = this.H = 0 };
    Wp.prototype.Na = function(a, b) { 2 == a ? this.H = b : 3 == a ? this.s = b : 12 == a ? this.o = b : 15 == a && this.reset() };
    Wp.prototype.log = function(a, b) {
        if (!Yp[a]) {
            var c = pa(),
                d = this.w ? c - this.w : 0;
            this.w = c;
            c = window.document;
            c = "CSS1Compat" == c.compatMode ? c.documentElement : c.body;
            c = new Xd(c.clientWidth, c.clientHeight);
            c = c.width > c.height;
            Pb(["halloween16", "s:" + a, "v:" + (k(b) ? b : "_"), "gs:" + this.H, "ls:" + this.s, "l:" + this.o, "dt:" + d, "t:" + (k(yb) ? yb ? "1" : "0" : "_"), "w:" + (k(c) ? c ? "1" : "0" : "_"), "o:" + ("orientation" in window ? parseInt(window.orientation, 10) : "_")].join()) } };
    var Zp = Wp.ka(),
        aq = function(a) { this.H = a;
            $p(this);
            this.H[this.w].Ja() },
        $p = function(a) { k(a.w) && a.H[a.w] && a.H[a.w].Ka();
            a.R = 0;
            if (!dc() || Bb() && (!ub || wb)) a.R = 1;
            a.w = bq[a.R] },
        bq = [2, 22, 3, 24, 13, 10, 4, 9, 5, 6, 19, 11, 12, 21, 14, 10, 5, 6, 19, 11, 12, 21, 15, 10, 5, 6, 19, 11, 12, 21, 16, 10, 5, 6, 19, 11, 12, 21, 17, 18, 5, 6, 20, 8, 23];
    aq.prototype.update = function(a) {
        if (a = this.H[this.w].update(a)) {
            if (1 == a && this.R < bq.length - 1) a = bq[++this.R];
            else {
                var b = bq.indexOf(a); - 1 != b && (this.R = b) }
            this.H[this.w].Ka();
            this.w = a;
            this.H[this.w].Ja();
            Zp.log(a) } };
    var cq = function(a, b) { C.call(this);
        this.w = 0;
        F(this, a, b) };
    m(cq, C);
    cq.prototype.update = function(a) { this.w += a };
    cq.prototype.ya = function(a) {
        var b = Math.min(1, this.w / 1500);
        a.save();
        a.lineCap = "round";
        a.lineJoin = "round";
        a.lineWidth = 3;
        a.strokeStyle = "white";
        a.translate(-476, -163);
        Vk(a, b, Zk);
        a.restore() };
    var dq = function(a) { C.call(this);
        this.H = this.w = 0;
        this.T = il[a];
        this.R = dl[a];
        this.U = yb ? Xk : Yk;
        F(this, jl[a].x, jl[a].y) };
    m(dq, C);
    dq.prototype.update = function(a) { this.w += a;
        a = Ca(this.w % 2E3 / 1E3, 0, 1);
        this.H = 3 * a * a - 2 * a * a * a };
    dq.prototype.ya = function(a) { a.save();
        a.lineWidth = 10;
        a.lineCap = "round";
        a.lineJoin = "round";
        a.strokeStyle = this.R;
        var b;
        b = Vk(a, this.H, this.T);
        b = new u(Kj(b, 1), Lj(b, 1));
        this.U(a, b.x, b.y);
        a.restore() };
    var eq = pl.ka(),
        fq = kk.ka(),
        gq = function(a, b, c, d, e) { this.w = !1;
            this.$ = d;
            this.o = e;
            this.Ba = new I;
            this.U = b;
            this.V = [];
            this.W = a;
            this.H = new C;
            F(this.H, 320, 70);
            this.H.s = 465;
            D(this.Ba, this.H);
            this.H.o = !1;
            D(this.H, new Vo(this.W, q("Tutorial"), 0, 0, "white", "center", "'Itim', sans-serif", 50, 20, 400, 2, !0));
            this.R = new dq(b);
            this.R.s = 464;
            this.R.o = !1;
            D(this.Ba, this.R);
            this.s = 0 };
    m(gq, ok);
    g = gq.prototype;
    g.Ja = function() { eq.o.push(this);
        F(this.o, 320, 180);
        Sm(this.o);
        D(this.Ba, this.o);
        this.T = Wn([this.U], 550, 198);
        F(this.T, 690, 180);
        this.S = new cq(-20, -30);
        this.S.o = !1;
        D(this.T, this.S);
        this.V.push(this.T);
        D(this.Ba, this.T);
        this.S && (this.S.o = !1);
        this.R.o = !1;
        D(fq.o, this.Ba);
        this.qa(1);
        Ko(this.$) };
    g.Ka = function() { Io(this.$);
        N(this.Ba);
        N(this.o);
        ql(eq, this);
        for (var a = 0; a < this.V.length; a++) this.Ba.removeChild(this.V[a]);
        this.V = [];
        E(this.Ba);
        this.s = 0 };
    g.update = function() {
        return 6 == this.s ? 1 : 0 };
    g.Na = function(a, b) {
        switch (a) {
            case 4:
                if (b != this.U) { this.qa(3);
                    Wm(this.o);
                    break }
                Tm(this.o, b);
                for (a = 0; a < this.V.length; a++) this.V[a].Kb(b);
                kl[b] ? kl[b].play() : x.Pb.play();
                this.S && this.S.o && M(this.Ba, new O(this.S, 200, 1, 0));
                break;
            case 5:
                var c = this;
                J(this.Ba, new H(500, null, function() { c.qa(5) }));
                break;
            case 8:
                if (3 == this.s || 2 == this.s) this.qa(3), Wm(this.o);
                break;
            case 7:
                if (3 == this.s || 2 == this.s) this.qa(4), Vm(this.o);
                break;
            case 9:
                3 != this.s && 2 != this.s && 4 != this.s || Vm(this.o) } };
    g.qa = function(a) {
        switch (a) {
            case 1:
                hq(this);
                break;
            case 2:
                iq(this);
                break;
            case 3:
                this.H.o = !0;
                this.R.o = !0;
                break;
            case 4:
                N(this.Ba);
                this.H.o = !1;
                this.R.o = !1;
                break;
            case 5:
                Io(this.$);
                this.H.o = !1;
                this.R.o = !1;
                this.H.o = !1;
                var b = this;
                K(this.o, 1E3, function() { b.qa(6) }) }
        this.s = a };
    var hq = function(a) { T(a.o, 12, 500);
            T(a.o, 13, 1E3);
            T(a.o, 0, Km);
            Xj(a.T, 2E3, null, new u(490, 180), function() { a.qa(2) }) },
        iq = function(a) { Sm(a.o);
            a.H.o = !0;
            a.S && (a.S.o = !0);
            J(a.Ba, new H(2E3, null, function() { a.qa(3) })) };
    var jq = kk.ka(),
        kq = function() { this.w = !1;
            this.o = new jk("#000", 640, 360);
            this.o.s = 461 };
    m(kq, ok);
    kq.prototype.Ja = function() { D(jq.o, this.o);
        F(this.o, 640, 0);
        J(this.o, new Uj(this.o, 1E3, new u(640, 0), new u(0, 0)));
        var a = this;
        J(this.o, new H(1E3, null, function() { a.w = !0 })) };
    kq.prototype.Ka = function() { N(this.o);
        E(this.o) };
    var Ie = Se.ka(),
        lq = Xe.ka(),
        ce = ae.ka(),
        lk = kk.ka(),
        mq = function(a, b) { Nd.call(this, a, b) };
    m(mq, Nd);
    mq.prototype.ma = function() {
        return uh };
    mq.prototype.ra = function() {
        return lq };
    mq.prototype.ha = function() { nq();
        Ne() };
    mq.prototype.wa = function() {
        var a = oq;
        a && !a.T && (a.T = !0, a.U = pa(), a.S || (a.S = !0, a.$()));
        a = Ie;
        a.w && (a.w.gain.value = 1) };
    var pq = function(a, b) {
        fc.call(this);
        this.w = b.getContext("2d");
        de(this.w);
        this.o = new mq(a, b);
        gc(this, oa(hc, this.o));
        var c = this.o.o;
        b = this.o.H;
        this.T = !0;
        this.S = !1;
        this.U = pa();
        this.H = null;
        ec() && (this.H = new Yd(a, 0, c), gc(this, oa(hc, this.H)), dc() || ($d(this.H, function() { Pd.ka().stop() }), Pd.ka().start()));
        var c = new Im,
            d = new qp(this.o);
        d.s = 461;
        D(lk.o, d);
        var e = new Ho(c, d),
            c = p([2, new qk(this.o, this.H), 6, e, 3, new zp(c, this.o), 5, new up(c, this.w), 7, new jp(this.o, !1, this.w), 8, new jp(this.o, !0, this.w), 4, new gq(this.w,
                2, 0, d, c), 9, new gq(this.w, 0, 0, d, c), 10, new Tp(c), 11, new Vp(c), 12, new kq, 13, new Ip(0, e), 14, new Ip(1, e), 15, new Ip(2, e), 16, new Ip(3, e), 17, new Ip(4, e), 18, new ln(c), 19, new Ep(c), 20, new bn(c), 21, new Qp(1), 22, new Qp(0, Ap), 23, new Qp(0), 24, new Qp(1, em)]);
        this.ha = [c[13], c[14], c[15], c[16], c[17]];
        this.W = new aq(c);
        b.listen(a, "contextmenu", function(a) { a.preventDefault() }, !1)
    };
    m(pq, fc);
    pq.prototype.s = function() {
        for (var a = 0, b; b = this.ha[a++];) b.reset();
        $p(this.W);
        lk.reset();
        pq.Da.s.call(this) };
    pq.prototype.start = function() {!this.o.W.H || xb ? (this.S = !0, this.$()) : nq() };
    pq.prototype.$ = function() {
        if (this.T) { Nb(this.$, 17, this);
            var a = pa(),
                b = Math.min(a - this.U, 50);
            this.U = a;
            this.W.update(b);
            nk(b, this.w);
            this.o.update();
            a = this.o;
            null != document[Cd] && a.ta.ya(a.w, this.w, a.$, 0, a.T) } else this.S = !1 };
    var oq = null,
        qq = function() {
            var a = document.getElementById("hplogo"),
                b = a ? a.querySelector("canvas") : null;
            lq.s(0, function() { oq = new pq(a, b);
                oq.start() });
            Le(a);
            x.Gb.nb.s() },
        nq = function() {
            var a = oq;
            a && (a.T = !1) };
    (function(a, b, c) {
        var d = function() { a();
                window.lol && window.lol() },
            e = function() { fe(d, b, c);
                ee(d, b);
                d() };
        google && google.x ? google.x({ id: "DOODLE" }, e) : e() })(function() {
        var a = document.getElementById("hplogo"),
            b = a ? a.querySelector("canvas") : null;
        if (b) {
            cc();
            if (r.Va) {
                var c = document.querySelector("meta[name=viewport]");
                c && -1 == c.content.indexOf("user-scalable=no") ? c.setAttribute("content", c.content + ",user-scalable=no") : (c = document.createElement("meta"), c.setAttribute("name", "viewport"), c.setAttribute("content",
                    "width=device-width,user-scalable=no"), a.appendChild(c))
            }
            dc() ? qq() : Uc(b, "click", function() { qq();
                if (b)
                    if (Ic(b)) b.ta("click");
                    else {
                        var a = Xc(b);
                        if (a) {
                            var c = 0,
                                f = "click".toString(),
                                h;
                            for (h in a.o)
                                if (!f || h == f)
                                    for (var l = a.o[h].concat(), t = 0; t < l.length; ++t) cd(l[t]) && ++c } } })
        }
    }, function() { Ne();
        for (var a = 0, b; b = lq.o[a]; a++) b.H = [];
        nq();
        hc(oq);
        oq = null });
})();

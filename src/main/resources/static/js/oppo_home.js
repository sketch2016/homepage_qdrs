!function (e) {
    function t(n) {
        if (i[n]) return i[n].exports;
        var o = i[n] = {exports: {}, id: n, loaded: !1};
        return e[n].call(o.exports, o, o.exports, t), o.loaded = !0, o.exports
    }

    var i = {};
    t.m = e, t.c = i, t.p = "", t(0)
}([function (e, t, i) {
    "use strict";

    function n(e) {
        return e && e.__esModule ? e : {default: e}
    }

    var o = i(1), a = n(o), r = i(2), s = n(r), u = i(27), d = n(u);
    (0, a.default)(function () {
        (0, d.default)(), (0, s.default)()
    })
}, function (e, t, i) {
    !function (t, i) {
        e.exports = i()
    }(0, function () {
        var e, t = [], i = document, n = i.documentElement.doScroll,
            o = (n ? /^loaded|^c/ : /^loaded|^i|^c/).test(i.readyState);
        return o || i.addEventListener("DOMContentLoaded", e = function () {
            for (i.removeEventListener("DOMContentLoaded", e), o = 1; e = t.shift();) e()
        }), function (e) {
            o ? setTimeout(e, 0) : t.push(e)
        }
    })
}, function (e, t, i) {
    "use strict";

    function n(e) {
        return e && e.__esModule ? e : {default: e}
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var o = i(3), a = n(o), r = i(4), s = n(r);
    i(5);
    var u = i(6), d = n(u);
    t.default = function () {
        var e = {}, t = void 0, i = ["white", "black"], n = function () {
            var i = e, n = i.pc, a = i.mobile, r = i.$high;
            e.winHeight = $(window).height(), e.winWidth = $(window).width(), t.platform() ? (e.ismobile = !0, f(!0), void 0 === a && (u(), e.mobile = !0, r.css({height: e.winHeight}))) : (e.ismobile = !1, f(!1), void 0 === n && (o(), e.pc = !0, r.css({height: ""})))
        }, o = function () {
            void 0 === e.curItem && (e.curItem = 0);
            var t = e, i = t.$highItem, n = t.$paginationWrap, o = (t.curItem, ""), a = i.length;
            i.each(function (e, t) {
                var i = $(t);
                0 === e && (i.addClass("jumpin"), c(i), i[0].videoHandle && i[0].videoHandle.play()), o += '<li class="pagination-item">\n                \t\t\t\t\t<a href="#' + e + '">\n                \t\t\t\t\t<b></b>\n                \t\t\t\t\t<i>\n\t\t\t\t\t\t\t\t\t\t<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"preserveAspectRatio="none"><circle cx="7" cy="7" r="6"/></svg>\n                \t\t\t\t\t</i>\n                \t\t\t\t\t</a>\n            \t\t\t\t\t</li>'
            }), a > 1 && (n.html(o), r());
            var s = !1;
            a > 1 && document.addEventListener("lazybeforeunveil", function (e) {
                $(e.target).hasClass("lazypreload") && !s && (s = !0, setTimeout(function (e) {
                    return i.first().siblings().find(".lazyload").addClass("lazypreload")
                }))
            })
        }, r = function () {
            function t() {
                f = !0, r = r >= o.length - 1 ? 0 : ++r, u.eq(r).trigger("click.pagin")
            }

            function i(i) {
                if (i.preventDefault(), !$(this).hasClass("active") && e.iscanplay) {
                    clearTimeout(d), clearTimeout(c), e.iscanplay = !1, $(this).addClass("active").siblings().removeClass("active"), r = $(this).index();
                    var n = o.eq(r), a = n.find("._title"), u = n.find("._figure"), p = o.eq(s), v = p.find("._title"),
                        m = p.find("._figure"), g = n.data("theme") || "white", y = n.data("delay") || e.delayTime;
                    l({
                        curItem: r,
                        oldItem: s,
                        $cur: n,
                        $cur_title: a,
                        $cur_figure: u,
                        $old: p,
                        $old_title: v,
                        $old_figure: m,
                        isClickEvent: f
                    }), d = setTimeout(function (e) {
                        h(g)
                    }, 500), setTimeout(function (t) {
                        return e.iscanplay = !0
                    }, 500), f = !1, s = r, clearTimeout(c), c = setTimeout(t, y)
                }
            }

            void 0 === e.curItem && (e.curItem = 0), void 0 === e.iscanplay && (e.iscanplay = !0);
            var n = e, o = n.$highItem, a = n.$paginationWrap, r = n.curItem, s = 0, u = a.find("li"), d = null,
                c = null, f = !1;
            u.on("click.pagin", i), setTimeout(function (e) {
                return u.eq(r).trigger("click.pagin")
            }, h(o.eq(r).data("theme")))
        }, u = function () {
            var t = e, i = t.$highItem, n = t.$paginationWrap, o = t.curItem, a = 0, r = !1, s = [];
            if (i.each(function () {
                s.push($(this))
            }), !(s.length <= 1)) {
                new Swiper(".high-swiper-container", {
                    speed: 600,
                    pagination: ".high-swiper-pagination",
                    paginationClickable: !0,
                    loop: !0,
                    autoplay: e.delayTime,
                    autoplayDisableOnInteraction: !1,
                    onSlideChangeStart: function (e) {
                        o = e.realIndex, h(i.eq(o).data("theme")), n.find(".pagination-item").eq(o).addClass("active").siblings().removeClass("active");
                        var t = $(".high-swiper-container").find(".swiper-slide-active"), s = t.find("._title"),
                            u = t.find("._figure"), d = $(".high-swiper-container").find(".swiper-slide-prev"),
                            c = d.find("._title"), f = d.find("._figure");
                        [s, u, c, f].forEach(function (e) {
                            return e.removeAttr("style")
                        }), !r && o != a && l({
                            curItem: o,
                            oldItem: a,
                            $cur: t,
                            $cur_title: s,
                            $cur_figure: u,
                            $old: d,
                            $old_title: c,
                            $old_figure: f,
                            isClickEvent: !1
                        }), r = !1, a = o
                    },
                    onSliderMove: function (e, t) {
                        r = !0
                    },
                    paginationBulletRender: function (e, t, i) {
                        return '<li class="pagination-item">\n                \t\t<a href="#' + t + '">\n\t                \t\t<b></b>\n\t                \t\t<i>\n\t                \t\t<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"preserveAspectRatio="none"><circle cx="7" cy="7" r="6"/></svg>\n\t                \t\t</i>\n                \t\t</a>\n                \t\t</li>'
                    },
                    onAutoplayStart: function (e) {
                        setTimeout(function (t) {
                            return n.find(".pagination-item").eq(e.realIndex).addClass("active")
                        }, 100)
                    },
                    onAfterResize: function (e) {
                        setTimeout(function (t) {
                            return n.find(".pagination-item").eq(e.realIndex).addClass("active")
                        })
                    }
                });
                n.find(".pagination-item").on("click.stop", function (e) {
                    return e.preventDefault()
                })
            }
        }, l = function (t) {
            var i = e, n = i.easeingIn, o = t.curItem, a = t.oldItem, r = t.$cur, s = t.$cur_title, u = t.$cur_figure,
                d = t.$old, l = t.$old_title, f = t.$old_figure, h = t.isClickEvent;
            o > a || h || e.ismobile ? (TweenMax.set(s, {x: 500, autoAlpha: 0}), TweenMax.set(u, {
                x: 50,
                scale: .7,
                transformOrigin: "250% 100%"
            }), TweenMax.set(l, {x: 0}), TweenMax.set(f, {
                x: 0,
                transformOrigin: "-250% 100%"
            }), !e.ismobile && TweenMax.set(r, {
                x: e.winWidth,
                display: "block",
                zIndex: 9
            }), !e.ismobile && TweenMax.set(d, {x: 0, zIndex: 1}), c(r), setTimeout(function (t) {
                r[0].videoHandle && r[0].videoHandle.play(), !e.ismobile && TweenMax.to(r, 1.2, {
                    x: 0,
                    ease: n
                }), TweenMax.to(s, e.ismobile ? 1 : .8, {
                    x: 0,
                    autoAlpha: 1,
                    delay: (e.ismobile, .5),
                    ease: Cubic.easeOut,
                    onComplete: function () {
                        s.removeAttr("style")
                    }
                }), TweenMax.to(u, e.ismobile ? 1 : 1.2, {
                    x: 0, scale: 1, ease: n, onComplete: function () {
                        u.removeAttr("style")
                    }
                }), !e.ismobile && TweenMax.to(d, e.ismobile ? .8 : 1.2, {
                    x: -e.winWidth / 4,
                    ease: n,
                    onComplete: function () {
                        d.hide(), l.removeAttr("style"), f.removeAttr("style"), d[0].videoHandle && d[0].videoHandle.pause()
                    }
                }), TweenMax.to(l, 1, {x: -500, delay: .3, ease: Cubic.easeOut}), TweenMax.to(f, 1.3, {
                    x: -50,
                    scale: .8,
                    ease: n
                })
            }, 10)) : o < a && (TweenMax.set(s, {x: -500, autoAlpha: 0}), TweenMax.set(u, {
                x: -50,
                scale: .8,
                transformOrigin: "-250% 100%"
            }), TweenMax.set(l, {x: 0}), TweenMax.set(f, {
                x: 0,
                transformOrigin: "250% 100%"
            }), !e.ismobile && TweenMax.set(r, {
                x: -e.winWidth,
                display: "block",
                zIndex: 9
            }), !e.ismobile && TweenMax.set(d, {x: 0, zIndex: 1}), c(r), setTimeout(function (t) {
                r[0].videoHandle && r[0].videoHandle.play(), !e.ismobile && TweenMax.to(r, 1.2, {
                    x: 0,
                    ease: n
                }), TweenMax.to(s, .8, {
                    x: 0, autoAlpha: 1, delay: .8, ease: Cubic.easeOut, onComplete: function () {
                        s.removeAttr("style")
                    }
                }), TweenMax.to(u, 1.2, {
                    x: 0, scale: 1, ease: n, onComplete: function () {
                        u.removeAttr("style")
                    }
                }), !e.ismobile && TweenMax.to(d, 1.2, {
                    x: e.winWidth / 4, ease: n, onComplete: function () {
                        d.hide(), f.removeAttr("style"), f.removeAttr("style"), d[0].videoHandle && d[0].videoHandle.pause()
                    }
                }), TweenMax.to(l, 1, {x: 500, delay: .3, ease: Cubic.easeOut}), TweenMax.to(f, 1.3, {
                    x: 50,
                    scale: .8,
                    ease: n
                })
            }, 10))
        }, c = function (t) {
            if (!e.ismobile && Modernizr.video && void 0 !== t.data("video") && "" != t.data("video") && void 0 === t[0].videoHandle) {
                var i = t.data("video").split(","), n = "banner-item-video" + (t.index() + 1),
                    o = '<div class="banner-video"><video id="' + n + '">';
                i.forEach(function (e) {
                    var t = "mp4";
                    e.indexOf("webm") > -1 && (t = "webm"), e.indexOf("ogg") > -1 && (t = "ogg"), o += '<source src="' + e + '" type="video/' + t + '">'
                }), o += "</video></div>", t.find(".banner-bg").append(o);
                var a = new d.default(n);
                a.execute(), t[0].videoHandle = a
            }
        }, f = function (t) {
            var i = e, n = (i.$high, i.$highWrap), o = i.$highList, a = i.$highItem,
                r = (i.$pagination, i.$paginationWrap);
            t ? (n.addClass("high-swiper-container"), o.addClass("swiper-wrapper"), a.addClass("swiper-slide"), r.addClass("high-swiper-pagination")) : (n.removeClass("high-swiper-container"), o.removeClass("swiper-wrapper"), a.removeClass("swiper-slide"), r.removeClass("high-swiper-pagination"))
        }, h = function (t) {
            var n = e, o = n.$high;
            return OPPO_MODULE_FN.common && OPPO_MODULE_FN.common.changeNavTheme(t), o.hasClass("ohigh-theme-" + t) || o.addClass("ohigh-theme-" + t), i.forEach(function (e) {
                e !== t && o.removeClass("ohigh-theme-" + e)
            }), !0
        };
        return function () {
            t = (0, a.default)();
            var i = $(".oc-high"), o = i.find(".ohigh-wrapper"), r = i.find(".ohw-banner-list"),
                u = r.find(".banner-item"), d = i.find(".ohw-pagination"), l = d.find("ul");
            if (!(0, s.default)(i)) return !1;
            var c = CustomEase.create("custom", "M0,0 C0.303,0 0,1 1,1") || Cubic.easeInOut;
            e = {
                delayTime: 5e3,
                $high: i,
                $highWrap: o,
                $highList: r,
                $highItem: u,
                $pagination: d,
                $paginationWrap: l,
                easeingIn: c
            }, n(), window.addEventListener("resize", n)
        }()
    }
}, function (e, t) {
    "use strict";
    e.exports = function () {
        return {
            platform: function () {
                return Modernizr.mobile || !1
            }, screen: function () {
                return Modernizr.mq("(max-width: 768px)")
            }, touch: function () {
                return Modernizr.touchevents || !1
            }
        }
    }
}, function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e) {
        var t = "string" == typeof e ? $(e) : e;
        return !!(t && t.length > 0)
    }
}, function (e, t) {
    "use strict";
    "undefined" == typeof OPPO_MODULE_FN && (window.OPPO_MODULE_FN = {}), "undefined" == typeof OPPO_CONFIG_ATTR && (window.OPPO_CONFIG_ATTR = {})
}, function (e, t, i) {
    "use strict";

    function n(e) {
        return e && e.__esModule ? e : {default: e}
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var o = i(7), a = n(o), r = i(8), s = n(r), u = {
        regClassCache: {}, hasClass: function (e, t) {
            return u.regClassCache[t] || (u.regClassCache[t] = new RegExp("(\\s|^)" + t + "(\\s|$)")), u.regClassCache[t].test(e.getAttribute("class") || "") && u.regClassCache[t]
        }, addClass: function (e, t) {
            u.hasClass(e, t) || e.setAttribute("class", (e.getAttribute("class") || "").trim() + " " + t)
        }, removeClass: function (e, t) {
            var i;
            (i = u.hasClass(e, t)) && e.setAttribute("class", (e.getAttribute("class") || "").replace(i, " "))
        }
    }, d = function () {
        function e(t, i) {
            return (0, a.default)(this, e), this.videoNode = document.getElementById(t), this.iscanplay = !1, this.isplaying = !1, this.cb = null, this.getUpdate = null, this.parent = this.videoNode.parentNode, i && (i.loop && (this.loop = i.loop || !1), i.unmuted && (this.unmuted = i.unmuted || !1), i.url && (this.url = i.url || !1), this.unmuted && this.videoNode.setAttribute("muted", !1), this.loop && this.videoNode.setAttribute("loop", !0)), this.onEnd = this.onEnd.bind(this), this.onPlay = this.onPlay.bind(this), this.play = this.play.bind(this), this.pause = this.pause.bind(this), this.onTimeupdate = this.onTimeupdate.bind(this), this.videoNode && (this.videoNode.setAttribute("playsinline", "true"), this.videoNode.setAttribute("webkit-playsinline", "true"), this.onComplete = this.onComplete.bind(this), this.onMetaData = this.onMetaData.bind(this), this.videoNode.addEventListener("loadmetadata", this.onMetaDta), this.onProgress = this.onProgress.bind(this), this.videoNode.addEventListener("progress", this.onProgress)), this
        }

        return (0, s.default)(e, [{
            key: "execute", value: function () {
                this.url && (this.videoNode.src = this.url), this.videoNode.addEventListener("canplaythrough", this.onComplete), this.videoNode.addEventListener("ended", this.onEnd), this.videoNode.addEventListener("play", this.onPlay), this.videoNode.addEventListener("timeupdate", this.onTimeupdate), this.videoNode.load()
            }
        }, {
            key: "onProgress", value: function (e) {
                if (!0 === this.videoNode.buffered.length) {
                    var t = this.videoNode.buffered.end(0);
                    e && "function" == typeof e && e(t / this.videoNode.duration * 100)
                }
            }
        }, {
            key: "onComplete", value: function () {
                !u.hasClass(this.videoNode, "loaded") && u.addClass(this.videoNode, "loaded"), this.videoNode.removeEventListener("canplaythrough", this.onComplete), this.iscanplay = !0
            }
        }, {
            key: "onEnd", value: function () {
                u.hasClass(this.parent, "active") && u.removeClass(this.parent, "active"), this.cb && "function" == typeof this.cb && this.cb()
            }
        }, {
            key: "onTimeupdate", value: function () {
                var e = {currenttime: this.videoNode.currentTime, duration: this.videoNode.duration};
                this.getUpdate && "function" == typeof this.getUpdate && this.getUpdate(e)
            }
        }, {
            key: "onPlay", value: function () {
                !u.hasClass(this.parent, "active") && u.addClass(this.parent, "active")
            }
        }, {
            key: "play", value: function (e) {
                this.currenttime = null, this.cb = null;
                try {
                    this.videoNode && (this.videoNode.currentTime = 0)
                } catch (e) {
                }
                !u.hasClass(this.videoNode, "play") && u.addClass(this.videoNode, "play"), this.videoNode && this.videoNode.play(), this.isplaying = !0, e && "function" == typeof e && (this.cb = e)
            }
        }, {
            key: "pause", value: function (e) {
                this.cb = null, u.hasClass(this.videoNode, "play") && u.removeClass(this.videoNode, "play"), this.videoNode && this.videoNode.pause(), this.currenttime = this.videoNode.currentTime, this.isplaying = !1, e && "function" == typeof e && (this.cb = e)
            }
        }, {
            key: "stop", value: function (e) {
                this.videoNode && this.videoNode.pause(), this.videoNode.currentTime = 0, this.isplaying = !1
            }
        }, {
            key: "resume", value: function (e) {
                this.cb = null, u.hasClass(this.videoNode, "play") && u.removeClass(this.videoNode, "play"), this.videoNode && this.videoNode.play(), this.currenttime && (this.videoNode.currentTime = this.currenttime), this.isplaying = !0, this.currenttime = null, e && "function" == typeof e && (this.cb = e)
            }
        }, {
            key: "setAttribute", value: function (e) {
                for (var t in e) this.videoNode.setAttribute(t.toString(), e[t].toString())
            }
        }, {
            key: "setUpdate", value: function (e) {
            }
        }, {
            key: "onMetaData", value: function () {
            }
        }, {
            key: "revert", value: function () {
            }
        }, {
            key: "destroy", value: function () {
            }
        }]), e
    }();
    t.default = d
}, function (e, t) {
    "use strict";
    t.__esModule = !0, t.default = function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
}, function (e, t, i) {
    "use strict";
    t.__esModule = !0;
    var n = i(9), o = function (e) {
        return e && e.__esModule ? e : {default: e}
    }(n);
    t.default = function () {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), (0, o.default)(e, n.key, n)
            }
        }

        return function (t, i, n) {
            return i && e(t.prototype, i), n && e(t, n), t
        }
    }()
}, function (e, t, i) {
    e.exports = {default: i(10), __esModule: !0}
}, function (e, t, i) {
    i(11);
    var n = i(14).Object;
    e.exports = function (e, t, i) {
        return n.defineProperty(e, t, i)
    }
}, function (e, t, i) {
    var n = i(12);
    n(n.S + n.F * !i(22), "Object", {defineProperty: i(18).f})
}, function (e, t, i) {
    var n = i(13), o = i(14), a = i(15), r = i(17), s = function (e, t, i) {
        var u, d, l, c = e & s.F, f = e & s.G, h = e & s.S, p = e & s.P, v = e & s.B, m = e & s.W,
            g = f ? o : o[t] || (o[t] = {}), y = g.prototype, w = f ? n : h ? n[t] : (n[t] || {}).prototype;
        f && (i = t);
        for (u in i) (d = !c && w && void 0 !== w[u]) && u in g || (l = d ? w[u] : i[u], g[u] = f && "function" != typeof w[u] ? i[u] : v && d ? a(l, n) : m && w[u] == l ? function (e) {
            var t = function (t, i, n) {
                if (this instanceof e) {
                    switch (arguments.length) {
                        case 0:
                            return new e;
                        case 1:
                            return new e(t);
                        case 2:
                            return new e(t, i)
                    }
                    return new e(t, i, n)
                }
                return e.apply(this, arguments)
            };
            return t.prototype = e.prototype, t
        }(l) : p && "function" == typeof l ? a(Function.call, l) : l, p && ((g.virtual || (g.virtual = {}))[u] = l, e & s.R && y && !y[u] && r(y, u, l)))
    };
    s.F = 1, s.G = 2, s.S = 4, s.P = 8, s.B = 16, s.W = 32, s.U = 64, s.R = 128, e.exports = s
}, function (e, t) {
    var i = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = i)
}, function (e, t) {
    var i = e.exports = {version: "2.4.0"};
    "number" == typeof __e && (__e = i)
}, function (e, t, i) {
    var n = i(16);
    e.exports = function (e, t, i) {
        if (n(e), void 0 === t) return e;
        switch (i) {
            case 1:
                return function (i) {
                    return e.call(t, i)
                };
            case 2:
                return function (i, n) {
                    return e.call(t, i, n)
                };
            case 3:
                return function (i, n, o) {
                    return e.call(t, i, n, o)
                }
        }
        return function () {
            return e.apply(t, arguments)
        }
    }
}, function (e, t) {
    e.exports = function (e) {
        if ("function" != typeof e) throw TypeError(e + " is not a function!");
        return e
    }
}, function (e, t, i) {
    var n = i(18), o = i(26);
    e.exports = i(22) ? function (e, t, i) {
        return n.f(e, t, o(1, i))
    } : function (e, t, i) {
        return e[t] = i, e
    }
}, function (e, t, i) {
    var n = i(19), o = i(21), a = i(25), r = Object.defineProperty;
    t.f = i(22) ? Object.defineProperty : function (e, t, i) {
        if (n(e), t = a(t, !0), n(i), o) try {
            return r(e, t, i)
        } catch (e) {
        }
        if ("get" in i || "set" in i) throw TypeError("Accessors not supported!");
        return "value" in i && (e[t] = i.value), e
    }
}, function (e, t, i) {
    var n = i(20);
    e.exports = function (e) {
        if (!n(e)) throw TypeError(e + " is not an object!");
        return e
    }
}, function (e, t) {
    e.exports = function (e) {
        return "object" == typeof e ? null !== e : "function" == typeof e
    }
}, function (e, t, i) {
    e.exports = !i(22) && !i(23)(function () {
        return 7 != Object.defineProperty(i(24)("div"), "a", {
            get: function () {
                return 7
            }
        }).a
    })
}, function (e, t, i) {
    e.exports = !i(23)(function () {
        return 7 != Object.defineProperty({}, "a", {
            get: function () {
                return 7
            }
        }).a
    })
}, function (e, t) {
    e.exports = function (e) {
        try {
            return !!e()
        } catch (e) {
            return !0
        }
    }
}, function (e, t, i) {
    var n = i(20), o = i(13).document, a = n(o) && n(o.createElement);
    e.exports = function (e) {
        return a ? o.createElement(e) : {}
    }
}, function (e, t, i) {
    var n = i(20);
    e.exports = function (e, t) {
        if (!n(e)) return e;
        var i, o;
        if (t && "function" == typeof(i = e.toString) && !n(o = i.call(e))) return o;
        if ("function" == typeof(i = e.valueOf) && !n(o = i.call(e))) return o;
        if (!t && "function" == typeof(i = e.toString) && !n(o = i.call(e))) return o;
        throw TypeError("Can't convert object to primitive value")
    }
}, function (e, t) {
    e.exports = function (e, t) {
        return {enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t}
    }
}, function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = function () {
        return function () {
            if (OPPO_MODULE_FN.common) {
                var e = (new Date).getTime() / 1e3, t = OPPO_CONFIG_ATTR.mulian_start_time,
                    i = OPPO_CONFIG_ATTR.mulian_end_time, n = OPPO_CONFIG_ATTR.mulian_url,
                    o = OPPO_CONFIG_ATTR.mulian_md5, a = OPPO_MODULE_FN.common.getCookies("oc_mulian_id");
                OPPO_MODULE_FN.common.setCookies("oc_mulian_id", o), o && null != o && o != a && e > t && e < i && (window.location.href = n + window.location.search)
            }
        }()
    }
}]);
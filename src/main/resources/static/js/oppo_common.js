!function (e) {
    function n(t) {
        if (o[t]) return o[t].exports;
        var i = o[t] = {exports: {}, id: t, loaded: !1};
        return e[t].call(i.exports, i, i.exports, n), i.loaded = !0, i.exports
    }

    var o = {};
    n.m = e, n.c = o, n.p = "", n(0)
}([function (e, n, o) {
    "use strict";

    function t(e) {
        return e && e.__esModule ? e : {default: e}
    }

    var i = o(1), r = t(i);
    o(2), o(3);
    var a = o(4), s = t(a), c = o(12), u = t(c);
    (0, r.default)(function () {
        var e = (0, s.default)();
        OPPO_MODULE_FN.common = e, OPPO_MODULE_FN.common.readyInMiniprogram(function () {
            document.getElementsByTagName("html")[0].classList.add("miniprogram")
        });
        (0, u.default)()
    })
}, function (e, n, o) {
    !function (n, o) {
        e.exports = o()
    }(0, function () {
        var e, n = [], o = document, t = o.documentElement.doScroll,
            i = (t ? /^loaded|^c/ : /^loaded|^i|^c/).test(o.readyState);
        return i || o.addEventListener("DOMContentLoaded", e = function () {
            for (o.removeEventListener("DOMContentLoaded", e), i = 1; e = n.shift();) e()
        }), function (e) {
            i ? setTimeout(e, 0) : n.push(e)
        }
    })
}, function (e, n) {
    "use strict";
    !function (e) {
        e.fn.scrollUnique = function () {
            return e(this).each(function () {
                var n = "mousewheel";
                void 0 !== document.mozHidden && (n = "DOMMouseScroll"), e(this).on(n, function (e) {
                    var n = this.scrollTop, o = this.scrollHeight, t = this.clientHeight,
                        i = e.originalEvent.wheelDelta ? e.originalEvent.wheelDelta : -(e.originalEvent.detail || 0);
                    (i > 0 && n <= i || i < 0 && o - t - n <= -1 * i) && (this.scrollTop = i > 0 ? 0 : o, e.preventDefault())
                })
            })
        }, e.extend({
            trigger: function (n) {
                var o = void 0;
                return o = n && "*" !== n ? '[data-trigger*="' + n + '"]' : "[data-trigger]", e(o)
            }
        });
        var n = window.navigator.userAgent, o = 999, t = void 0, i = void 0;
        n.indexOf("Edge") > -1 && (t = "edge", o = n.match(/Edge\/([\d.]+)/)), n.indexOf("Safari") > -1 && (t = "safari", o = n.match(/Version\/([\d.]+).*Safari/) ? n.match(/Version\/([\d.]+).*Safari/) : n.match(/Safari\/([\d.]+)/)), n.indexOf("Chrome") > -1 && (t = "chrome", o = n.match(/Chrome\/([\d.]+)/)), n.indexOf("Firefox") > -1 && (t = "firefox", o = n.match(/Firefox\/([\d.]+)/)), n.indexOf("Opera") > -1 && (t = "opera", o = n.match(/Opera.([\d.]+)/)), n.indexOf("UBrowser") > -1 && (t = "uc", o = n.match(/UBrowser\/([\d.]+)/)), n.indexOf("UCBrowser") > -1 && (t = "uc", o = n.match(/UCBrowser\/([\d.]+)/)), n.indexOf("HUAWEI") > -1 && (t = "huawei", o = n.match(/Version\/([\d.]+)/)), n.indexOf("Windows") > -1 && (i = "win"), n.indexOf("Mac OS") > -1 && (i = "mac"), n.indexOf("Linux") > -1 && (i = "linux"), n.indexOf("MSIE") > -1 && (!0, o = n.match(/MSIE (\d+)./), t = "ie"), n.indexOf("Trident/7") > -1 && (!0, t = "ie");
        var r = {
            ios: !!n.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
            android: n.indexOf("Android") > -1 || n.indexOf("Linux") > -1,
            mobile: !!n.match(/AppleWebKit.*Mobile.*/) || !!n.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) || n.indexOf("Android") > -1 || !!n.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i),
            weixin: "MicroMessenger" == !!n.match(/MicroMessenger/i),
            hd: !!function () {
                return window.devicePixelRatio > 1 || !(!window.matchMedia || !window.matchMedia("(-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-resolution: 1.5dppx)").matches)
            }(),
            aliapp: n.indexOf("AliApp") > -1
        };
        for (var a in r) !function (e) {
            r[e] && Modernizr.addTest(e, function () {
                return r[e]
            })
        }(a);
        t && Modernizr.addTest(t, function () {
            return !0
        }), i && Modernizr.addTest(i, function () {
            return !0
        }), "ie" == t && o[1] <= 10 && Modernizr.addTest("lt-10", function () {
            return !0
        }), "ie" == t && o[1] < 10 && Modernizr.addTest("lt-9", function () {
            return !0
        }), o && (Modernizr.browserVersion = o[1]), Modernizr.browserName = t, Modernizr.aliapp && "undefined" != typeof NTKF_PARAM && (NTKF_PARAM.settingid = NTKF_PARAM.settingid2)
    }(jQuery)
}, function (e, n) {
    "use strict";
    "undefined" == typeof OPPO_MODULE_FN && (window.OPPO_MODULE_FN = {}), "undefined" == typeof OPPO_CONFIG_ATTR && (window.OPPO_CONFIG_ATTR = {})
}, function (e, n, o) {
    "use strict";

    function t(e) {
        return e && e.__esModule ? e : {default: e}
    }

    Object.defineProperty(n, "__esModule", {value: !0});
    var i = o(5), r = t(i), a = o(9), s = t(a), c = o(10), u = t(c), d = o(11), l = t(d);
    n.default = function () {
        var e = {}, n = void 0, o = (0, l.default)(), t = ["white", "black"], i = {}, a = function () {
            var o = e, t = o.mobile, r = o.pc, a = o.$wrap, s = o.$navList, c = o.$menuBtn,
                u = (o.$productsLinkItem, o.$bagBtn);
            o.$header;
            n.screen() ? (void 0 === t && (i.navProductsWap(), e.mobile = !0), e.ismobile = !0, i.domReset(!0), u && u[0].isopen && f(!0), s.css("display", "none")) : (void 0 === r && (i.navProducts(), e.pc = !0), e.ismobile = !1, i.domReset(!1), c && c[0].isopen && c.trigger("click.list"), u && u[0].isopen && f(!1), s.is(":hidden") && s.css("display", "")), void 0 === t && void 0 === r && (e.main = !!a.hasClass("main"), i.navBagWap(), i.notice()), i.utmsource()
        };
        i.navProducts = function () {
            function n(t) {
                if (e.ismobile) return void o();
                p.is(":visible") && p.width() > 100 ? l.find("a").css({height: p.width()}) : setTimeout(n)
            }

            function o(e) {
                l.find("a").css({height: ""})
            }

            var t = e, i = t.$win, r = t.$header, a = t.$navList, s = t.$productsLink, c = t.$productsMenu,
                u = t.$queue, d = t.$wrap, l = a.find("ul li"), p = l.first().find("a").find("img").first();
            a.css("display", "");
            var h = new TimelineMax({paused: !0});
            h.from(c, .3, {autoAlpha: 0}).staggerFrom(u, .5, {
                autoAlpha: 0,
                y: 13,
                ease: Cubic.easeOut
            }, .05, "-=.1"), h.eventCallback("onReverseComplete", function () {
                TweenMax.set(c, {display: ""}), s[0].isopen = !1
            });
            var m = !1, v = function (n) {
                m || (!e.ismobile && h.timeScale(2).reverse(), f(!1), void 0 !== e.productsList && e.productsList.out(), r.removeClass("oh-productslist-show"))
            };
            s.children("a").on({
                mouseenter: function (o) {
                    e.ismobile || s[0].isopen || (m = !0, s[0].isopen = !0, TweenMax.set(c, {display: "block"}), setTimeout(function () {
                        h.timeScale(1).seek(0).play(), f(!0), n()
                    }, 10), d.hasClass("main") && r.addClass("oh-productslist-show"), void 0 !== e.productsList && e.productsList.in())
                }, mouseleave: function (e) {
                    m = !1, setTimeout(v)
                }, click: function (e) {
                    e.preventDefault()
                }
            }), c.find(".oh-navpro-content").on({
                mouseenter: function (e) {
                    m = !0
                }, mouseleave: function (e) {
                    m = !1, setTimeout(v)
                }
            }), i.on("resize.imgresize", n), e.animate = h
        }, i.navProductsWap = function () {
            function n(n) {
                n.preventDefault(), c.is(":hidden") && c.css("display", ""), setTimeout(function (e) {
                    return $(".oh-navlist-wrapper").scrollTop(0)
                }, 500), e.$bagBtn && e.$bagBtn[0].isopen && e.$bagBtn.trigger("click.open"), this.isopen ? (s.removeClass("openHeaderMenu"), this.isopen = !1, f(!1), h(!1), d && d[0].isopen && d.trigger("click.menu"), i.showNotice(!0)) : (s.addClass("openHeaderMenu"), this.isopen = !0, f(!0), h(!0), i.showNotice(!1), a.off("click").on("click.navmenulayer", function (e) {
                    t.trigger("click")
                }), "undefined" != typeof _optj && _optj.push(["_trackEvent", "www", "nav", "menu", "open"]))
            }

            function o(e) {
                e.preventDefault(), this.isopen ? (u.removeClass("active"), this.isopen = !1) : (u.addClass("active"), this.isopen = !0, "undefined" != typeof _optj && _optj.push(["_trackEvent", "www", "nav", "products", "open"]))
            }

            var t = $.trigger("open:navList@mobile"), r = e, a = r.$mask, s = r.$header, c = (r.$nav, r.$navList),
                u = r.$productsLink, d = u.find(".oh-navitem-link");
            s.on("touchstart touchmove", function (e) {
                e.stopPropagation()
            }), t.on("click.list", n), d.on("click.menu", o), e.$menuBtn = t
        }, i.navBag = function () {
            function n(n) {
                if (n.preventDefault(), !e.ismobile) {
                    var o = this;
                    o.isopen ? (c = !1, u && clearTimeout(u), u = setTimeout(function () {
                        !c && (r.removeClass("openNavBag"), o.isopen = !1)
                    }, 100)) : (u && clearTimeout(u), r.addClass("openNavBag"), o.isopen = !0, s[0].isopen = !1, c = !0)
                }
            }

            function o(n) {
                !e.ismobile && n.preventDefault()
            }

            function t(n) {
                var o = this;
                e.ismobile || (o.isopen ? (c = !1, u && clearTimeout(u), u = setTimeout(function () {
                    !c && (r.removeClass("openNavBag"), o.isopen = !1)
                }, 100)) : (u && clearTimeout(u), o.isopen = !0, e.$bagBtn[0].isopen = !1, c = !0))
            }

            var i = e, r = i.$header, a = i.$nav, s = (i.$bagBtn, a.find("#oh-navpopup-bag")), c = !1, u = null;
            void 0 === e.$bagBtn && (e.$bagBtn = a.find(".oh-nav-link")), e.$bagBtn.on("mouseenter.open mouseleave.open", n).on("click.show", o), s.on("mouseenter.show mouseleave.show", t)
        }, i.navBagWap = function () {
            function o(o) {
                o.preventDefault(), !n.platform() && o.stopPropagation(), e.$menuBtn && e.$menuBtn[0].isopen && e.$menuBtn.trigger("click.list"), this.isopen ? (a.removeClass("openNavBag"), this.isopen = !1, i.showNotice(!0), e.ismobile && f(!1)) : (a.addClass("openNavBag"), this.isopen = !0, i.showNotice(!1), e.ismobile && f(!0), c.off("click").on("click.closeBag", t), "undefined" != typeof _optj && _optj.push(["_trackEvent", "www", "a", "bag", "icon"]))
            }

            function t(n) {
                e.$bagBtn[0].isopen && e.$bagBtn.trigger("click.open")
            }

            var r = e, a = r.$header, s = r.$nav, c = (r.$bagBtn, r.$mask);
            void 0 === e.$bagBtn && (e.$bagBtn = s.find(".oh-nav-link")), $("#oh-navpopup-bag a").on("click", t), e.$bagBtn.on("touchstart.open click.open", o), document.addEventListener("scroll", t)
        }, i.notice = function (n) {
            var o = !1, t = e, i = t.$notice, a = (new Date).getTime() / 1e3, s = i.data("start-time"),
                c = i.data("end-time");
            if ((0, u.default)(i) && !v((0, r.default)("oc_notice_id" + i.data("id"))) && a > s && a < c) {
                var d = function (n) {
                    if (n.preventDefault(), o) {
                        var t = {autoAlpha: 0};
                        e.main || (t = {height: 0}), TweenMax.to(i, .5, {
                            css: t, onComplete: function () {
                                i.hide(), i[0].isshow = !1
                            }
                        }), g((0, r.default)("oc_notice_id" + i.data("id")), !0), l.off(".close")
                    }
                };
                i[0].isshow = !0;
                var l = i.find(".ont-close"), f = i.find(".ont-layer"), p = e.ismobile ? 44 : 55,
                    h = e.main ? Cubic.easeInOut : Ease.easeLinear, m = e.main ? .8 : .5;
                i.show(), TweenMax.from(f, m, {
                    y: -p, delay: 1, ease: h, onComplete: function () {
                        setTimeout(function (e) {
                            i.addClass("show-notice")
                        }, 100), o = !0
                    }
                }), e.main || (i.css({height: 0}), setTimeout(function (e) {
                    TweenMax.to(i, m, {
                        height: p, delay: 1, ease: h, onComplete: function () {
                        }
                    })
                })), l.off(".close").on("click.close", d)
            }
        }, i.showNotice = function (n) {
            var o = e, t = o.$notice;
            (0, u.default)(t) && (n ? t[0].isshow && t.is(":hidden") && e.main && e.ismobile && t.show() : t[0].isshow && t.is(":visible") && e.main && e.ismobile && t.hide())
        }, i.utmsource = function () {
            var e = w("utm_source"), n = w("utm_medium");
            n || (n = ""), e && g("utm_source", encodeURIComponent(e + ":" + n), 15)
        }, i.domReset = function (n) {
            var o = e, t = o.$queue, i = o.$productsMenu, r = o.animate;
            n ? [t, i].forEach(function (e) {
                return e.removeAttr("style")
            }) : r && [t].forEach(function (e) {
                return e.css("opacity", 0)
            })
        };
        var c = function (n) {
            var o = e, i = o.$header;
            if ((0, u.default)(i)) return i.hasClass("oh-theme-" + n) || i.addClass("oh-theme-" + n), t.forEach(function (e) {
                e !== n && i.removeClass("oh-theme-" + e)
            }), !0
        }, d = function (n) {
            var o = e, t = o.$header, i = o.$mask, r = o.$win;
            if (o.$html.hasClass("oc-noscroll")) return void i.css({top: ""});
            t.hasClass("show-mask") && r.scrollTop() <= t.height() ? i.css({top: t.height() - r.scrollTop()}) : i.css({top: ""})
        }, f = function (n) {
            var o = e, t = o.$header;
            n ? !t.hasClass("show-mask") && t.addClass("show-mask") : t.hasClass("show-mask") && t.removeClass("show-mask")
        }, p = function (n) {
            var o = e, t = o.$wrap;
            t.size() < 1 || ($("#oc-top-mask").size() < 1 && t.append('<i id="oc-top-mask" />'), n ? !t.hasClass("show-mask") && t.addClass("show-mask") : t.hasClass("show-mask") && t.removeClass("show-mask"))
        }, h = function (n, o) {
            var t = e, i = t.$doc, r = t.$win, a = t.$html, s = t.$wrap, c = (t.$header, t._winTop, o || "oc-noscroll"),
                u = n ? r.scrollTop() : e._winTop, d = i.height();
            n ? (a.addClass(c), s.size() > 0 && TweenMax.set(s, {
                height: d,
                marginTop: -u
            }), r.scrollTop(0)) : (a.removeClass(c), s.size() > 0 && TweenMax.set(s, {
                height: "",
                marginTop: ""
            }), r.scrollTop(u)), n && (e._winTop = u)
        }, m = function (e, n) {
            function o(e) {
                void 0 !== n && t.is(":visible") && n()
            }

            var t = "string" == typeof e ? $(e) : e;
            t.on("click.stop", function (e) {
                e.stopPropagation()
            }), $(document).on("click.outside", o)
        }, v = function (e) {
            return Cookies(e)
        }, g = function (e, n) {
            var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 365,
                t = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : location.hostname.indexOf("oppo") > -1 ? "." + location.hostname : location.hostname,
                i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "/";
            Cookies.set(e, n, {expires: o, domain: t, path: i})
        }, w = function (e) {
            var n = new RegExp("(^|&)" + e + "=([^&]*)(&|$)", "i"), o = window.location.search.substr(1).match(n);
            return null != o ? unescape(o[2]) : null
        }, _ = function (e) {
            function n() {
                "miniprogram" === window.__wxjs_environment && (g("utm_source", encodeURIComponent("miniprogram:shopping"), 15), "function" == typeof e && e())
            }

            window.WeixinJSBridge && WeixinJSBridge.invoke ? n() : document.addEventListener("WeixinJSBridgeReady", n, !1)
        };
        return function () {
            n = (0, s.default)();
            var t = $("#oc-header"), i = t.find(".oh-nav"), r = i.find(".oh-nav-list"), c = r.find(".oh-item-products"),
                l = $("#oh-navpopup-products"), f = l.find("._queue");
            if (!(0, u.default)(t)) return !1;
            t.after('<i id="oc-mask" />');
            var p = $("#oc-mask");
            e = {
                $doc: $(document),
                $win: $(window),
                $html: $("html"),
                $notice: $("#oc-notice"),
                $wrap: $("#oc-wrapper"),
                $header: t,
                $nav: i,
                $navList: r,
                $productsLink: c,
                $productsMenu: l,
                $queue: f,
                $mask: p
            }, a(), window.addEventListener("resize", a), window.addEventListener("scroll", d), o.init()
        }(), {
            changeNavTheme: c,
            openMask: f,
            openTopMask: p,
            noscroll: h,
            outsideScope: m,
            getCookies: v,
            setCookies: g,
            getQueryString: w,
            readyInMiniprogram: _
        }
    }
}, function (e, n, o) {
    !function () {
        var n = o(6), t = o(7).utf8, i = o(8), r = o(7).bin, a = function (e, o) {
            e.constructor == String ? e = o && "binary" === o.encoding ? r.stringToBytes(e) : t.stringToBytes(e) : i(e) ? e = Array.prototype.slice.call(e, 0) : Array.isArray(e) || (e = e.toString());
            for (var s = n.bytesToWords(e), c = 8 * e.length, u = 1732584193, d = -271733879, l = -1732584194, f = 271733878, p = 0; p < s.length; p++) s[p] = 16711935 & (s[p] << 8 | s[p] >>> 24) | 4278255360 & (s[p] << 24 | s[p] >>> 8);
            s[c >>> 5] |= 128 << c % 32, s[14 + (c + 64 >>> 9 << 4)] = c;
            for (var h = a._ff, m = a._gg, v = a._hh, g = a._ii, p = 0; p < s.length; p += 16) {
                var w = u, $ = d, _ = l, b = f;
                u = h(u, d, l, f, s[p + 0], 7, -680876936), f = h(f, u, d, l, s[p + 1], 12, -389564586), l = h(l, f, u, d, s[p + 2], 17, 606105819), d = h(d, l, f, u, s[p + 3], 22, -1044525330), u = h(u, d, l, f, s[p + 4], 7, -176418897), f = h(f, u, d, l, s[p + 5], 12, 1200080426), l = h(l, f, u, d, s[p + 6], 17, -1473231341), d = h(d, l, f, u, s[p + 7], 22, -45705983), u = h(u, d, l, f, s[p + 8], 7, 1770035416), f = h(f, u, d, l, s[p + 9], 12, -1958414417), l = h(l, f, u, d, s[p + 10], 17, -42063), d = h(d, l, f, u, s[p + 11], 22, -1990404162), u = h(u, d, l, f, s[p + 12], 7, 1804603682), f = h(f, u, d, l, s[p + 13], 12, -40341101), l = h(l, f, u, d, s[p + 14], 17, -1502002290), d = h(d, l, f, u, s[p + 15], 22, 1236535329), u = m(u, d, l, f, s[p + 1], 5, -165796510), f = m(f, u, d, l, s[p + 6], 9, -1069501632), l = m(l, f, u, d, s[p + 11], 14, 643717713), d = m(d, l, f, u, s[p + 0], 20, -373897302), u = m(u, d, l, f, s[p + 5], 5, -701558691), f = m(f, u, d, l, s[p + 10], 9, 38016083), l = m(l, f, u, d, s[p + 15], 14, -660478335), d = m(d, l, f, u, s[p + 4], 20, -405537848), u = m(u, d, l, f, s[p + 9], 5, 568446438), f = m(f, u, d, l, s[p + 14], 9, -1019803690), l = m(l, f, u, d, s[p + 3], 14, -187363961), d = m(d, l, f, u, s[p + 8], 20, 1163531501), u = m(u, d, l, f, s[p + 13], 5, -1444681467), f = m(f, u, d, l, s[p + 2], 9, -51403784), l = m(l, f, u, d, s[p + 7], 14, 1735328473), d = m(d, l, f, u, s[p + 12], 20, -1926607734), u = v(u, d, l, f, s[p + 5], 4, -378558), f = v(f, u, d, l, s[p + 8], 11, -2022574463), l = v(l, f, u, d, s[p + 11], 16, 1839030562), d = v(d, l, f, u, s[p + 14], 23, -35309556), u = v(u, d, l, f, s[p + 1], 4, -1530992060), f = v(f, u, d, l, s[p + 4], 11, 1272893353), l = v(l, f, u, d, s[p + 7], 16, -155497632), d = v(d, l, f, u, s[p + 10], 23, -1094730640), u = v(u, d, l, f, s[p + 13], 4, 681279174), f = v(f, u, d, l, s[p + 0], 11, -358537222), l = v(l, f, u, d, s[p + 3], 16, -722521979), d = v(d, l, f, u, s[p + 6], 23, 76029189), u = v(u, d, l, f, s[p + 9], 4, -640364487), f = v(f, u, d, l, s[p + 12], 11, -421815835), l = v(l, f, u, d, s[p + 15], 16, 530742520), d = v(d, l, f, u, s[p + 2], 23, -995338651), u = g(u, d, l, f, s[p + 0], 6, -198630844), f = g(f, u, d, l, s[p + 7], 10, 1126891415), l = g(l, f, u, d, s[p + 14], 15, -1416354905), d = g(d, l, f, u, s[p + 5], 21, -57434055), u = g(u, d, l, f, s[p + 12], 6, 1700485571), f = g(f, u, d, l, s[p + 3], 10, -1894986606), l = g(l, f, u, d, s[p + 10], 15, -1051523), d = g(d, l, f, u, s[p + 1], 21, -2054922799), u = g(u, d, l, f, s[p + 8], 6, 1873313359), f = g(f, u, d, l, s[p + 15], 10, -30611744), l = g(l, f, u, d, s[p + 6], 15, -1560198380), d = g(d, l, f, u, s[p + 13], 21, 1309151649), u = g(u, d, l, f, s[p + 4], 6, -145523070), f = g(f, u, d, l, s[p + 11], 10, -1120210379), l = g(l, f, u, d, s[p + 2], 15, 718787259), d = g(d, l, f, u, s[p + 9], 21, -343485551), u = u + w >>> 0, d = d + $ >>> 0, l = l + _ >>> 0, f = f + b >>> 0
            }
            return n.endian([u, d, l, f])
        };
        a._ff = function (e, n, o, t, i, r, a) {
            var s = e + (n & o | ~n & t) + (i >>> 0) + a;
            return (s << r | s >>> 32 - r) + n
        }, a._gg = function (e, n, o, t, i, r, a) {
            var s = e + (n & t | o & ~t) + (i >>> 0) + a;
            return (s << r | s >>> 32 - r) + n
        }, a._hh = function (e, n, o, t, i, r, a) {
            var s = e + (n ^ o ^ t) + (i >>> 0) + a;
            return (s << r | s >>> 32 - r) + n
        }, a._ii = function (e, n, o, t, i, r, a) {
            var s = e + (o ^ (n | ~t)) + (i >>> 0) + a;
            return (s << r | s >>> 32 - r) + n
        }, a._blocksize = 16, a._digestsize = 16, e.exports = function (e, o) {
            if (void 0 === e || null === e) throw new Error("Illegal argument " + e);
            var t = n.wordsToBytes(a(e, o));
            return o && o.asBytes ? t : o && o.asString ? r.bytesToString(t) : n.bytesToHex(t)
        }
    }()
}, function (e, n) {
    !function () {
        var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", o = {
            rotl: function (e, n) {
                return e << n | e >>> 32 - n
            }, rotr: function (e, n) {
                return e << 32 - n | e >>> n
            }, endian: function (e) {
                if (e.constructor == Number) return 16711935 & o.rotl(e, 8) | 4278255360 & o.rotl(e, 24);
                for (var n = 0; n < e.length; n++) e[n] = o.endian(e[n]);
                return e
            }, randomBytes: function (e) {
                for (var n = []; e > 0; e--) n.push(Math.floor(256 * Math.random()));
                return n
            }, bytesToWords: function (e) {
                for (var n = [], o = 0, t = 0; o < e.length; o++, t += 8) n[t >>> 5] |= e[o] << 24 - t % 32;
                return n
            }, wordsToBytes: function (e) {
                for (var n = [], o = 0; o < 32 * e.length; o += 8) n.push(e[o >>> 5] >>> 24 - o % 32 & 255);
                return n
            }, bytesToHex: function (e) {
                for (var n = [], o = 0; o < e.length; o++) n.push((e[o] >>> 4).toString(16)), n.push((15 & e[o]).toString(16));
                return n.join("")
            }, hexToBytes: function (e) {
                for (var n = [], o = 0; o < e.length; o += 2) n.push(parseInt(e.substr(o, 2), 16));
                return n
            }, bytesToBase64: function (e) {
                for (var o = [], t = 0; t < e.length; t += 3) for (var i = e[t] << 16 | e[t + 1] << 8 | e[t + 2], r = 0; r < 4; r++) 8 * t + 6 * r <= 8 * e.length ? o.push(n.charAt(i >>> 6 * (3 - r) & 63)) : o.push("=");
                return o.join("")
            }, base64ToBytes: function (e) {
                e = e.replace(/[^A-Z0-9+\/]/gi, "");
                for (var o = [], t = 0, i = 0; t < e.length; i = ++t % 4) 0 != i && o.push((n.indexOf(e.charAt(t - 1)) & Math.pow(2, -2 * i + 8) - 1) << 2 * i | n.indexOf(e.charAt(t)) >>> 6 - 2 * i);
                return o
            }
        };
        e.exports = o
    }()
}, function (e, n) {
    var o = {
        utf8: {
            stringToBytes: function (e) {
                return o.bin.stringToBytes(unescape(encodeURIComponent(e)))
            }, bytesToString: function (e) {
                return decodeURIComponent(escape(o.bin.bytesToString(e)))
            }
        }, bin: {
            stringToBytes: function (e) {
                for (var n = [], o = 0; o < e.length; o++) n.push(255 & e.charCodeAt(o));
                return n
            }, bytesToString: function (e) {
                for (var n = [], o = 0; o < e.length; o++) n.push(String.fromCharCode(e[o]));
                return n.join("")
            }
        }
    };
    e.exports = o
}, function (e, n) {
    function o(e) {
        return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
    }

    function t(e) {
        return "function" == typeof e.readFloatLE && "function" == typeof e.slice && o(e.slice(0, 0))
    }

    e.exports = function (e) {
        return null != e && (o(e) || t(e) || !!e._isBuffer)
    }
}, function (e, n) {
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
}, function (e, n) {
    "use strict";
    Object.defineProperty(n, "__esModule", {value: !0}), n.default = function (e) {
        var n = "string" == typeof e ? $(e) : e;
        return !!(n && n.length > 0)
    }
}, function (e, n) {
    "use strict";
    Object.defineProperty(n, "__esModule", {value: !0}), n.default = function () {
        var e = $("#oh-navbag-cart"), n = $("#oh-navbag-order"), o = $("#oh-navbag-login"), t = $("#oh-bag-tip"),
            i = function () {
                $.ajax({url: OPPO_CONFIG_ATTR.auth_check, type: "GET", dataType: "jsonp"}).done(function (e) {
                    r(e)
                }).fail(function () {
                    a()
                })
            }, r = function (i) {
                i.cart_number && i.cart_number > 0 && e.find("span").html("璐墿杞� <em>(" + i.cart_number + ")</em>"), o.on("click.logout", d).find("span").text("娉ㄩ攢"), i.unpaid && i.unpaid > 0 && (t.removeClass("hide"), n.find("span").html("鎴戠殑璁㈠崟 <em>(" + i.unpaid + " 鍗曟湭鏀粯)</em>")), "" != i.append && $("body").append(i.append), c(i), $(".repair").length > 0 && s(i)
            }, a = function () {
                o.on("click.login", u)
            }, s = function (e) {
                var n = OPPO_CONFIG_ATTR.base_url + "/service/repair" + window.location.search,
                    o = OPPO_CONFIG_ATTR.sso_logout_url + "?callback=" + encodeURIComponent(n);
                $(".repair-header-left span").html(e.name), $(".repair-header-left a").attr("href", o), ($(".repair-dealer-search").length > 0 || $(".repair-list").length > 0) && $(".repair-header-right a").attr("href", n).html("杩斿洖棣栭〉")
            }, c = function e(n) {
                "undefined" != typeof NTKF_PARAM && setTimeout(function () {
                    "undefined" == typeof NTKF ? e(n) : NTKF.im_updatePageInfo({uid: n.oid, uname: n.name})
                }, 300)
            }, u = function () {
                window.location.href = OPPO_CONFIG_ATTR.sso_login_url + "?callback=" + encodeURIComponent(window.location.href)
            }, d = function () {
                window.location.href = OPPO_CONFIG_ATTR.sso_logout_url + "?callback=" + encodeURIComponent(window.location.href)
            };
        return {
            init: i, login: u, logout: d, isLogin: function (e, n) {
                return !(!e || !e.status) && ("-100" !== e.status || void(n ? window.location.href = OPPO_CONFIG_ATTR.sso_login_url + "?callback=" + encodeURIComponent(n) : u()))
            }
        }
    }
}, function (e, n, o) {
    "use strict";

    function t(e) {
        return e && e.__esModule ? e : {default: e}
    }

    Object.defineProperty(n, "__esModule", {value: !0});
    var i = o(9), r = t(i), a = o(10), s = t(a);
    n.default = function () {
        var e = {}, n = void 0, o = function () {
            var o = e, r = o.pc, s = o.mobile;
            n.screen() ? (void 0 === s && (t(), e.mobile = !0), e.ismobile = !0, a(!0)) : (void 0 === r && (e.pc = !0), e.ismobile = !1, a(!1)), void 0 === s && void 0 === r && i()
        }, t = function () {
            function n(n) {
                n.preventDefault(), this.isopen ? ($(this).parent().removeClass("active"), this.isopen = !1) : ($(this).parent().addClass("active"), this.isopen = !0, e.$directory = $(this))
            }

            e.$footer.find(".of-nav").find(".of-directory dl").each(function (e, o) {
                $(this).find("dt").on("click.open", n)
            })
        }, i = function () {
            function o(e) {
                e.preventDefault(), s.addClass("openModel"), s[0].isopen = !0, n.screen() && s.addClass("mask-index-top") && OPPO_MODULE_FN.common.noscroll(!0), setTimeout(function (e) {
                    return l.play()
                })
            }

            function t() {
                s[0].isopen = !1, n.screen() && s.removeClass("mask-index-top") && OPPO_MODULE_FN.common.noscroll(!1), setTimeout(function (e) {
                    return l.reverse()
                })
            }

            function i(e) {
                e.preventDefault(), e.stopPropagation(), s[0].isopen && s.hasClass("openWechat") ? t() : o(e), s.removeClass("openAlipay").addClass("openWechat")
            }

            function r(n) {
                e.ismobile || (n.preventDefault(), n.stopPropagation(), s[0].isopen && s.hasClass("openAlipay") ? t() : o(n), s.removeClass("openWechat").addClass("openAlipay"))
            }

            var a = e, s = (a.$footer, $(".of-qrcode-model")), c = s.find(".of-qrcode-view"),
                u = $.trigger("qrcode-wechat"), d = $.trigger("qrcode-alipay"), l = new TimelineMax({paused: !0});
            l.from(s, .3, {
                y: 15,
                autoAlpha: 0
            }), u.on("click.qrcode", i), d.on("click.qrcode", r), c.click(function (e) {
                e.stopPropagation()
            }), s.click(function (e) {
                s[0].isopen && t()
            }), OPPO_MODULE_FN.common.outsideScope(c, function () {
                s[0].isopen && t()
            })
        }, a = function (n) {
            var o = e, t = o.$directory;
            n || t && t[0].isopen && t.trigger("click.open"), t = null
        };
        return function () {
            n = (0, r.default)();
            var t = $("#oc-footer");
            if (!(0, s.default)(t)) return !1;
            e = {$footer: t}, o(), window.addEventListener("resize", o, !0)
        }()
    }
}]);
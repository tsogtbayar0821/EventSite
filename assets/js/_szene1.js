var hexcase = 0;
var b64pad = "";
var chrsz = 8;

function hex_md5(A) {
    return binl2hex(core_md5(str2binl(A), A.length * chrsz))
}

function b64_md5(A) {
    return binl2b64(core_md5(str2binl(A), A.length * chrsz))
}

function str_md5(A) {
    return binl2str(core_md5(str2binl(A), A.length * chrsz))
}

function hex_hmac_md5(A, B) {
    return binl2hex(core_hmac_md5(A, B))
}

function b64_hmac_md5(A, B) {
    return binl2b64(core_hmac_md5(A, B))
}

function str_hmac_md5(A, B) {
    return binl2str(core_hmac_md5(A, B))
}

function md5_vm_test() {
    return hex_md5("abc") == "900150983cd24fb0d6963f7d28e17f72"
}

function core_md5(K, F) {
    K[F >> 5] |= 128 << ((F) % 32);
    K[(((F + 64) >>> 9) << 4) + 14] = F;
    var J = 1732584193;
    var I = -271733879;
    var H = -1732584194;
    var G = 271733878;
    for (var C = 0; C < K.length; C += 16) {
        var E = J;
        var D = I;
        var B = H;
        var A = G;
        J = md5_ff(J, I, H, G, K[C + 0], 7, -680876936);
        G = md5_ff(G, J, I, H, K[C + 1], 12, -389564586);
        H = md5_ff(H, G, J, I, K[C + 2], 17, 606105819);
        I = md5_ff(I, H, G, J, K[C + 3], 22, -1044525330);
        J = md5_ff(J, I, H, G, K[C + 4], 7, -176418897);
        G = md5_ff(G, J, I, H, K[C + 5], 12, 1200080426);
        H = md5_ff(H, G, J, I, K[C + 6], 17, -1473231341);
        I = md5_ff(I, H, G, J, K[C + 7], 22, -45705983);
        J = md5_ff(J, I, H, G, K[C + 8], 7, 1770035416);
        G = md5_ff(G, J, I, H, K[C + 9], 12, -1958414417);
        H = md5_ff(H, G, J, I, K[C + 10], 17, -42063);
        I = md5_ff(I, H, G, J, K[C + 11], 22, -1990404162);
        J = md5_ff(J, I, H, G, K[C + 12], 7, 1804603682);
        G = md5_ff(G, J, I, H, K[C + 13], 12, -40341101);
        H = md5_ff(H, G, J, I, K[C + 14], 17, -1502002290);
        I = md5_ff(I, H, G, J, K[C + 15], 22, 1236535329);
        J = md5_gg(J, I, H, G, K[C + 1], 5, -165796510);
        G = md5_gg(G, J, I, H, K[C + 6], 9, -1069501632);
        H = md5_gg(H, G, J, I, K[C + 11], 14, 643717713);
        I = md5_gg(I, H, G, J, K[C + 0], 20, -373897302);
        J = md5_gg(J, I, H, G, K[C + 5], 5, -701558691);
        G = md5_gg(G, J, I, H, K[C + 10], 9, 38016083);
        H = md5_gg(H, G, J, I, K[C + 15], 14, -660478335);
        I = md5_gg(I, H, G, J, K[C + 4], 20, -405537848);
        J = md5_gg(J, I, H, G, K[C + 9], 5, 568446438);
        G = md5_gg(G, J, I, H, K[C + 14], 9, -1019803690);
        H = md5_gg(H, G, J, I, K[C + 3], 14, -187363961);
        I = md5_gg(I, H, G, J, K[C + 8], 20, 1163531501);
        J = md5_gg(J, I, H, G, K[C + 13], 5, -1444681467);
        G = md5_gg(G, J, I, H, K[C + 2], 9, -51403784);
        H = md5_gg(H, G, J, I, K[C + 7], 14, 1735328473);
        I = md5_gg(I, H, G, J, K[C + 12], 20, -1926607734);
        J = md5_hh(J, I, H, G, K[C + 5], 4, -378558);
        G = md5_hh(G, J, I, H, K[C + 8], 11, -2022574463);
        H = md5_hh(H, G, J, I, K[C + 11], 16, 1839030562);
        I = md5_hh(I, H, G, J, K[C + 14], 23, -35309556);
        J = md5_hh(J, I, H, G, K[C + 1], 4, -1530992060);
        G = md5_hh(G, J, I, H, K[C + 4], 11, 1272893353);
        H = md5_hh(H, G, J, I, K[C + 7], 16, -155497632);
        I = md5_hh(I, H, G, J, K[C + 10], 23, -1094730640);
        J = md5_hh(J, I, H, G, K[C + 13], 4, 681279174);
        G = md5_hh(G, J, I, H, K[C + 0], 11, -358537222);
        H = md5_hh(H, G, J, I, K[C + 3], 16, -722521979);
        I = md5_hh(I, H, G, J, K[C + 6], 23, 76029189);
        J = md5_hh(J, I, H, G, K[C + 9], 4, -640364487);
        G = md5_hh(G, J, I, H, K[C + 12], 11, -421815835);
        H = md5_hh(H, G, J, I, K[C + 15], 16, 530742520);
        I = md5_hh(I, H, G, J, K[C + 2], 23, -995338651);
        J = md5_ii(J, I, H, G, K[C + 0], 6, -198630844);
        G = md5_ii(G, J, I, H, K[C + 7], 10, 1126891415);
        H = md5_ii(H, G, J, I, K[C + 14], 15, -1416354905);
        I = md5_ii(I, H, G, J, K[C + 5], 21, -57434055);
        J = md5_ii(J, I, H, G, K[C + 12], 6, 1700485571);
        G = md5_ii(G, J, I, H, K[C + 3], 10, -1894986606);
        H = md5_ii(H, G, J, I, K[C + 10], 15, -1051523);
        I = md5_ii(I, H, G, J, K[C + 1], 21, -2054922799);
        J = md5_ii(J, I, H, G, K[C + 8], 6, 1873313359);
        G = md5_ii(G, J, I, H, K[C + 15], 10, -30611744);
        H = md5_ii(H, G, J, I, K[C + 6], 15, -1560198380);
        I = md5_ii(I, H, G, J, K[C + 13], 21, 1309151649);
        J = md5_ii(J, I, H, G, K[C + 4], 6, -145523070);
        G = md5_ii(G, J, I, H, K[C + 11], 10, -1120210379);
        H = md5_ii(H, G, J, I, K[C + 2], 15, 718787259);
        I = md5_ii(I, H, G, J, K[C + 9], 21, -343485551);
        J = safe_add(J, E);
        I = safe_add(I, D);
        H = safe_add(H, B);
        G = safe_add(G, A)
    }
    return Array(J, I, H, G)
}

function md5_cmn(F, C, B, A, E, D) {
    return safe_add(bit_rol(safe_add(safe_add(C, F), safe_add(A, D)), E), B)
}

function md5_ff(C, B, G, F, A, E, D) {
    return md5_cmn((B & G) | ((~B) & F), C, B, A, E, D)
}

function md5_gg(C, B, G, F, A, E, D) {
    return md5_cmn((B & F) | (G & (~F)), C, B, A, E, D)
}

function md5_hh(C, B, G, F, A, E, D) {
    return md5_cmn(B ^ G ^ F, C, B, A, E, D)
}

function md5_ii(C, B, G, F, A, E, D) {
    return md5_cmn(G ^ (B | (~F)), C, B, A, E, D)
}

function core_hmac_md5(C, F) {
    var E = str2binl(C);
    if (E.length > 16) {
        E = core_md5(E, C.length * chrsz)
    }
    var A = Array(16),
        D = Array(16);
    for (var B = 0; B < 16; B++) {
        A[B] = E[B] ^ 909522486;
        D[B] = E[B] ^ 1549556828
    }
    var G = core_md5(A.concat(str2binl(F)), 512 + F.length * chrsz);
    return core_md5(D.concat(G), 512 + 128)
}

function safe_add(A, D) {
    var C = (A & 65535) + (D & 65535);
    var B = (A >> 16) + (D >> 16) + (C >> 16);
    return (B << 16) | (C & 65535)
}

function bit_rol(A, B) {
    return (A << B) | (A >>> (32 - B))
}

function str2binl(D) {
    var C = Array();
    var A = (1 << chrsz) - 1;
    for (var B = 0; B < D.length * chrsz; B += chrsz) {
        C[B >> 5] |= (D.charCodeAt(B / chrsz) & A) << (B % 32)
    }
    return C
}

function binl2str(C) {
    var D = "";
    var A = (1 << chrsz) - 1;
    for (var B = 0; B < C.length * 32; B += chrsz) {
        D += String.fromCharCode((C[B >> 5] >>> (B % 32)) & A)
    }
    return D
}

function binl2hex(C) {
    var B = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
    var D = "";
    for (var A = 0; A < C.length * 4; A++) {
        D += B.charAt((C[A >> 2] >> ((A % 4) * 8 + 4)) & 15) + B.charAt((C[A >> 2] >> ((A % 4) * 8)) & 15)
    }
    return D
}

function binl2b64(D) {
    var C = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    var F = "";
    for (var B = 0; B < D.length * 4; B += 3) {
        var E = (((D[B >> 2] >> 8 * (B % 4)) & 255) << 16) | (((D[B + 1 >> 2] >> 8 * ((B + 1) % 4)) & 255) << 8) | ((D[B + 2 >> 2] >> 8 * ((B + 2) % 4)) & 255);
        for (var A = 0; A < 4; A++) {
            if (B * 8 + A * 6 > D.length * 32) {
                F += b64pad
            } else {
                F += C.charAt((E >> 6 * (3 - A)) & 63)
            }
        }
    }
    return F
}
var H5F = H5F || {};
(function(F) {
    var H = F.createElement("input"),
        B = new RegExp("^([a-z0-9_.-]+)@([0-9a-z.-]+).([a-z.]{2,6})$", "i"),
        I = new RegExp("[a-z][-.+a-z]*://", "i"),
        A = new RegExp("^(input|select|textarea)$", "i"),
        D, C, G, E = "";
    H5F.setup = function(P, M) {
        var O = !P.nodeType || false;
        var N = {
            validClass: "valid",
            invalidClass: "error",
            requiredClass: "required"
        };
        if (typeof M == "object") {
            for (var L in N) {
                if (typeof M[L] == "undefined") {
                    M[L] = N[L]
                }
            }
        }
        G = M || N;
        if (O) {
            for (var K = 0, J = P.length; K < J; K++) {
                H5F.validation(P[K])
            }
        } else {
            H5F.validation(P)
        }
    };
    H5F.validation = function(K) {
        var M = K.elements,
            J = M.length,
            L;
        H5F.listen(K, "invalid", H5F.checkField, true);
        H5F.listen(K, "blur", H5F.checkField, true);
        H5F.listen(K, "input", H5F.checkField, true);
        H5F.listen(K, "keyup", H5F.checkField, true);
        H5F.listen(K, "focus", H5F.checkField, true);
        if (!H5F.support()) {
            K.checkValidity = function() {
                return H5F.checkValidity(K)
            };
            while (J--) {
                L = !!(M[J].attributes.required);
                if (M[J].nodeName !== "FIELDSET") {
                    H5F.validity(M[J])
                }
            }
        }
    };
    H5F.validity = function(K) {
        var M = K,
            Q = H5F.valueMissing(M),
            T = M.getAttribute("type"),
            S = M.getAttribute("pattern"),
            V = M.getAttribute("placeholder"),
            N = /^(email|url)$/i,
            W = /^(input|keyup)$/i,
            J = ((N.test(T)) ? T : ((S) ? S : false)),
            R = H5F.pattern(M, J),
            L = H5F.range(M, "step"),
            P = H5F.range(M, "min"),
            U = H5F.range(M, "max"),
            O = (E !== "");
        M.checkValidity = function() {
            return H5F.checkValidity(M)
        };
        M.setCustomValidity = function(X) {
            H5F.setCustomValidity.call(M, X)
        };
        M.validationMessage = E;
        M.validity = {
            valueMissing: Q,
            patternMismatch: R,
            rangeUnderflow: P,
            rangeOverflow: U,
            stepMismatch: L,
            customError: O,
            valid: (!Q && !R && !L && !P && !U && !O)
        };
        if (V && !W.test(C)) {
            H5F.placeholder(M)
        }
    };
    H5F.checkField = function(M) {
        var L = H5F.getTarget(M) || M,
            K = /^(input|keyup|focusin|focus)$/i,
            J = true;
        if (A.test(L.nodeName)) {
            C = M.type;
            if (!H5F.support()) {
                H5F.validity(L)
            }
            if (L.validity.valid) {
                H5F.removeClass(L, [G.invalidClass, G.requiredClass]);
                H5F.addClass(L, G.validClass)
            } else {
                if (!K.test(C)) {
                    if (L.validity.valueMissing) {
                        H5F.removeClass(L, [G.invalidClass, G.validClass]);
                        H5F.addClass(L, G.requiredClass)
                    } else {
                        H5F.removeClass(L, [G.validClass, G.requiredClass]);
                        H5F.addClass(L, G.invalidClass)
                    }
                } else {
                    if (L.validity.valueMissing) {
                        H5F.removeClass(L, [G.requiredClass, G.invalidClass, G.validClass])
                    }
                }
            }
            if (C === "input" && J) {
                H5F.unlisten(L.form, "keyup", H5F.checkField, true);
                J = false
            }
        }
    };
    H5F.checkValidity = function(N) {
        var Q, L, P, K, O = false;
        if (N.nodeName === "FORM") {
            Q = N.elements;
            for (var M = 0, J = Q.length; M < J; M++) {
                L = Q[M];
                P = !!(L.attributes.required);
                K = !!(L.attributes.pattern);
                if (L.nodeName !== "FIELDSET" && (P || K)) {
                    H5F.checkField(L);
                    if (!L.validity.valid && !O) {
                        L.focus();
                        O = true
                    }
                }
            }
            return !O
        } else {
            H5F.checkField(N);
            return N.validity.valid
        }
    };
    H5F.setCustomValidity = function(K) {
        var J = this;
        E = K;
        J.validationMessage = E
    };
    H5F.support = function() {
        return (H5F.isHostMethod(H, "validity") && H5F.isHostMethod(H, "checkValidity"))
    };
    H5F.pattern = function(K, J) {
        if (J === "email") {
            return !B.test(K.value)
        } else {
            if (J === "url") {
                return !I.test(K.value)
            } else {
                if (!J) {
                    return false
                } else {
                    var M = K.getAttribute("placeholder"),
                        L = K.value;
                    D = new RegExp(J);
                    if (L === M) {
                        return true
                    } else {
                        if (L === "") {
                            return false
                        } else {
                            return !D.test(K.value)
                        }
                    }
                }
            }
        }
    };
    H5F.placeholder = function(L) {
        var N = L.getAttribute("placeholder"),
            J = /^(focus|focusin)$/i,
            M = /^(input|textarea)$/i,
            K = !!("placeholder" in H);
        if (!K && M.test(L.nodeName)) {
            if (L.value === "" && !J.test(C)) {
                L.value = N
            } else {
                if (L.value === N && J.test(C)) {
                    L.value = ""
                }
            }
        }
    };
    H5F.range = function(N, M) {
        var L = parseInt(N.getAttribute("min"), 10) || 0,
            J = parseInt(N.getAttribute("max"), 10) || false,
            O = parseInt(N.getAttribute("step"), 10) || 1,
            P = parseInt(N.value, 10),
            K = (P - L) % O;
        if (!H5F.valueMissing(N) && !isNaN(P)) {
            if (M === "step") {
                return (N.getAttribute("step")) ? (K !== 0) : false
            } else {
                if (M === "min") {
                    return (N.getAttribute("min")) ? (P < L) : false
                } else {
                    if (M === "max") {
                        return (N.getAttribute("max")) ? (P > J) : false
                    }
                }
            }
        } else {
            if (N.getAttribute("type") === "number") {
                return true
            } else {
                return false
            }
        }
    };
    H5F.required = function(J) {
        var K = !!(J.attributes.required);
        return (K) ? H5F.valueMissing(J) : false
    };
    H5F.valueMissing = function(J) {
        var L = J.getAttribute("placeholder"),
            K = !!(J.attributes.required);
        return !!(K && (J.value === "" || J.value === L))
    };
    H5F.listen = function(M, L, K, J) {
        if (H5F.isHostMethod(window, "addEventListener")) {
            M.addEventListener(L, K, J)
        } else {
            if (H5F.isHostMethod(window, "attachEvent") && typeof window.event !== "undefined") {
                if (L === "blur") {
                    L = "focusout"
                } else {
                    if (L === "focus") {
                        L = "focusin"
                    }
                }
                M.attachEvent("on" + L, K)
            }
        }
    };
    H5F.unlisten = function(M, L, K, J) {
        if (H5F.isHostMethod(window, "removeEventListener")) {
            M.removeEventListener(L, K, J)
        } else {
            if (H5F.isHostMethod(window, "detachEvent") && typeof window.event !== "undefined") {
                M.detachEvent("on" + L, K)
            }
        }
    };
    H5F.preventActions = function(J) {
        J = J || window.event;
        if (J.stopPropagation && J.preventDefault) {
            J.stopPropagation();
            J.preventDefault()
        } else {
            J.cancelBubble = true;
            J.returnValue = false
        }
    };
    H5F.getTarget = function(J) {
        J = J || window.event;
        return J.target || J.srcElement
    };
    H5F.addClass = function(K, L) {
        var J;
        if (!K.className) {
            K.className = L
        } else {
            J = new RegExp("(^|\\s)" + L + "(\\s|$)");
            if (!J.test(K.className)) {
                K.className += " " + L
            }
        }
    };
    H5F.removeClass = function(N, O) {
        var M, L, K = (typeof O === "object") ? O.length : 1,
            J = K;
        if (N.className) {
            if (N.className == O) {
                N.className = ""
            } else {
                while (K--) {
                    M = new RegExp("(^|\\s)" + ((J > 1) ? O[K] : O) + "(\\s|$)");
                    L = N.className.match(M);
                    if (L && L.length == 3) {
                        N.className = N.className.replace(M, (L[1] && L[2]) ? " " : "")
                    }
                }
            }
        }
    };
    H5F.isHostMethod = function(M, J) {
        var L = typeof M[J],
            K = new RegExp("^function|object$", "i");
        return !!((K.test(L) && M[J]) || L == "unknown")
    }
})(document);
var swfobject = function() {
    var AQ = "undefined",
        Ac = "object",
        AB = "Shockwave Flash",
        X = "ShockwaveFlash.ShockwaveFlash",
        Ad = "application/x-shockwave-flash",
        AC = "SWFObjectExprInst",
        AW = "onreadystatechange",
        AF = window,
        Ak = document,
        Aa = navigator,
        AA = false,
        Z = [Am],
        Af = [],
        AG = [],
        AL = [],
        Ai, AD, AP, AS, AK = false,
        At = false,
        Ag, AN, Ah = true,
        AH = function() {
            var A = typeof Ak.getElementById != AQ && typeof Ak.getElementsByTagName != AQ && typeof Ak.createElement != AQ,
                E = Aa.userAgent.toLowerCase(),
                C = Aa.platform.toLowerCase(),
                H = C ? /win/.test(C) : /win/.test(E),
                J = C ? /mac/.test(C) : /mac/.test(E),
                G = /webkit/.test(E) ? parseFloat(E.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : false,
                D = !+"\v1",
                F = [0, 0, 0],
                K = null;
            if (typeof Aa.plugins != AQ && typeof Aa.plugins[AB] == Ac) {
                K = Aa.plugins[AB].description;
                if (K && !(typeof Aa.mimeTypes != AQ && Aa.mimeTypes[Ad] && !Aa.mimeTypes[Ad].enabledPlugin)) {
                    AA = true;
                    D = false;
                    K = K.replace(/^.*\s+(\S+\s+\S+$)/, "$1");
                    F[0] = parseInt(K.replace(/^(.*)\..*$/, "$1"), 10);
                    F[1] = parseInt(K.replace(/^.*\.(.*)\s.*$/, "$1"), 10);
                    F[2] = /[a-zA-Z]/.test(K) ? parseInt(K.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0
                }
            } else {
                if (typeof AF.ActiveXObject != AQ) {
                    try {
                        var I = new ActiveXObject(X);
                        if (I) {
                            K = I.GetVariable("$version");
                            if (K) {
                                D = true;
                                K = K.split(" ")[1].split(",");
                                F = [parseInt(K[0], 10), parseInt(K[1], 10), parseInt(K[2], 10)]
                            }
                        }
                    } catch (B) {}
                }
            }
            return {
                w3: A,
                pv: F,
                wk: G,
                ie: D,
                win: H,
                mac: J
            }
        }(),
        Aj = function() {
            if (!AH.w3) {
                return
            }
            if ((typeof Ak.readyState != AQ && Ak.readyState == "complete") || (typeof Ak.readyState == AQ && (Ak.getElementsByTagName("body")[0] || Ak.body))) {
                Ao()
            }
            if (!AK) {
                if (typeof Ak.addEventListener != AQ) {
                    Ak.addEventListener("DOMContentLoaded", Ao, false)
                }
                if (AH.ie && AH.win) {
                    Ak.attachEvent(AW, function() {
                        if (Ak.readyState == "complete") {
                            Ak.detachEvent(AW, arguments.callee);
                            Ao()
                        }
                    });
                    if (AF == top) {
                        (function() {
                            if (AK) {
                                return
                            }
                            try {
                                Ak.documentElement.doScroll("left")
                            } catch (A) {
                                setTimeout(arguments.callee, 0);
                                return
                            }
                            Ao()
                        })()
                    }
                }
                if (AH.wk) {
                    (function() {
                        if (AK) {
                            return
                        }
                        if (!/loaded|complete/.test(Ak.readyState)) {
                            setTimeout(arguments.callee, 0);
                            return
                        }
                        Ao()
                    })()
                }
                Ab(Ao)
            }
        }();

    function Ao() {
        if (AK) {
            return
        }
        try {
            var B = Ak.getElementsByTagName("body")[0].appendChild(AR("span"));
            B.parentNode.removeChild(B)
        } catch (A) {
            return
        }
        AK = true;
        var D = Z.length;
        for (var C = 0; C < D; C++) {
            Z[C]()
        }
    }

    function AJ(A) {
        if (AK) {
            A()
        } else {
            Z[Z.length] = A
        }
    }

    function Ab(A) {
        if (typeof AF.addEventListener != AQ) {
            AF.addEventListener("load", A, false)
        } else {
            if (typeof Ak.addEventListener != AQ) {
                Ak.addEventListener("load", A, false)
            } else {
                if (typeof AF.attachEvent != AQ) {
                    Al(AF, "onload", A)
                } else {
                    if (typeof AF.onload == "function") {
                        var B = AF.onload;
                        AF.onload = function() {
                            B();
                            A()
                        }
                    } else {
                        AF.onload = A
                    }
                }
            }
        }
    }

    function Am() {
        if (AA) {
            Y()
        } else {
            AM()
        }
    }

    function Y() {
        var D = Ak.getElementsByTagName("body")[0];
        var B = AR(Ac);
        B.setAttribute("type", Ad);
        var A = D.appendChild(B);
        if (A) {
            var C = 0;
            (function() {
                if (typeof A.GetVariable != AQ) {
                    var E = A.GetVariable("$version");
                    if (E) {
                        E = E.split(" ")[1].split(",");
                        AH.pv = [parseInt(E[0], 10), parseInt(E[1], 10), parseInt(E[2], 10)]
                    }
                } else {
                    if (C < 10) {
                        C++;
                        setTimeout(arguments.callee, 10);
                        return
                    }
                }
                D.removeChild(B);
                A = null;
                AM()
            })()
        } else {
            AM()
        }
    }

    function AM() {
        var G = Af.length;
        if (G > 0) {
            for (var H = 0; H < G; H++) {
                var C = Af[H].id;
                var L = Af[H].callbackFn;
                var A = {
                    success: false,
                    id: C
                };
                if (AH.pv[0] > 0) {
                    var I = Ar(C);
                    if (I) {
                        if (AO(Af[H].swfVersion) && !(AH.wk && AH.wk < 312)) {
                            AX(C, true);
                            if (L) {
                                A.success = true;
                                A.ref = AU(C);
                                L(A)
                            }
                        } else {
                            if (Af[H].expressInstall && AT()) {
                                var E = {};
                                E.data = Af[H].expressInstall;
                                E.width = I.getAttribute("width") || "0";
                                E.height = I.getAttribute("height") || "0";
                                if (I.getAttribute("class")) {
                                    E.styleclass = I.getAttribute("class")
                                }
                                if (I.getAttribute("align")) {
                                    E.align = I.getAttribute("align")
                                }
                                var F = {};
                                var D = I.getElementsByTagName("param");
                                var K = D.length;
                                for (var J = 0; J < K; J++) {
                                    if (D[J].getAttribute("name").toLowerCase() != "movie") {
                                        F[D[J].getAttribute("name")] = D[J].getAttribute("value")
                                    }
                                }
                                AE(E, F, C, L)
                            } else {
                                Ae(I);
                                if (L) {
                                    L(A)
                                }
                            }
                        }
                    }
                } else {
                    AX(C, true);
                    if (L) {
                        var B = AU(C);
                        if (B && typeof B.SetVariable != AQ) {
                            A.success = true;
                            A.ref = B
                        }
                        L(A)
                    }
                }
            }
        }
    }

    function AU(B) {
        var D = null;
        var C = Ar(B);
        if (C && C.nodeName == "OBJECT") {
            if (typeof C.SetVariable != AQ) {
                D = C
            } else {
                var A = C.getElementsByTagName(Ac)[0];
                if (A) {
                    D = A
                }
            }
        }
        return D
    }

    function AT() {
        return !At && AO("6.0.65") && (AH.win || AH.mac) && !(AH.wk && AH.wk < 312)
    }

    function AE(F, D, H, E) {
        At = true;
        AP = E || null;
        AS = {
            success: false,
            id: H
        };
        var A = Ar(H);
        if (A) {
            if (A.nodeName == "OBJECT") {
                Ai = An(A);
                AD = null
            } else {
                Ai = A;
                AD = H
            }
            F.id = AC;
            if (typeof F.width == AQ || (!/%$/.test(F.width) && parseInt(F.width, 10) < 310)) {
                F.width = "310"
            }
            if (typeof F.height == AQ || (!/%$/.test(F.height) && parseInt(F.height, 10) < 137)) {
                F.height = "137"
            }
            Ak.title = Ak.title.slice(0, 47) + " - Flash Player Installation";
            var B = AH.ie && AH.win ? "ActiveX" : "PlugIn",
                C = "MMredirectURL=" + encodeURI(AF.location).toString().replace(/&/g, "%26") + "&MMplayerType=" + B + "&MMdoctitle=" + Ak.title;
            if (typeof D.flashvars != AQ) {
                D.flashvars += "&" + C
            } else {
                D.flashvars = C
            }
            if (AH.ie && AH.win && A.readyState != 4) {
                var G = AR("div");
                H += "SWFObjectNew";
                G.setAttribute("id", H);
                A.parentNode.insertBefore(G, A);
                A.style.display = "none";
                (function() {
                    if (A.readyState == 4) {
                        A.parentNode.removeChild(A)
                    } else {
                        setTimeout(arguments.callee, 10)
                    }
                })()
            }
            AZ(F, D, H)
        }
    }

    function Ae(A) {
        if (AH.ie && AH.win && A.readyState != 4) {
            var B = AR("div");
            A.parentNode.insertBefore(B, A);
            B.parentNode.replaceChild(An(A), B);
            A.style.display = "none";
            (function() {
                if (A.readyState == 4) {
                    A.parentNode.removeChild(A)
                } else {
                    setTimeout(arguments.callee, 10)
                }
            })()
        } else {
            A.parentNode.replaceChild(An(A), A)
        }
    }

    function An(B) {
        var D = AR("div");
        if (AH.win && AH.ie) {
            D.innerHTML = B.innerHTML
        } else {
            var E = B.getElementsByTagName(Ac)[0];
            if (E) {
                var A = E.childNodes;
                if (A) {
                    var F = A.length;
                    for (var C = 0; C < F; C++) {
                        if (!(A[C].nodeType == 1 && A[C].nodeName == "PARAM") && !(A[C].nodeType == 8)) {
                            D.appendChild(A[C].cloneNode(true))
                        }
                    }
                }
            }
        }
        return D
    }

    function AZ(E, G, C) {
        var D, A = Ar(C);
        if (AH.wk && AH.wk < 312) {
            return D
        }
        if (A) {
            if (typeof E.id == AQ) {
                E.id = C
            }
            if (AH.ie && AH.win) {
                var F = "";
                for (var I in E) {
                    if (E[I] != Object.prototype[I]) {
                        if (I.toLowerCase() == "data") {
                            G.movie = E[I]
                        } else {
                            if (I.toLowerCase() == "styleclass") {
                                F += ' class="' + E[I] + '"'
                            } else {
                                if (I.toLowerCase() != "classid") {
                                    F += " " + I + '="' + E[I] + '"'
                                }
                            }
                        }
                    }
                }
                var H = "";
                for (var J in G) {
                    if (G[J] != Object.prototype[J]) {
                        H += '<param name="' + J + '" value="' + G[J] + '" />'
                    }
                }
                A.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + F + ">" + H + "</object>";
                AG[AG.length] = E.id;
                D = Ar(E.id)
            } else {
                var B = AR(Ac);
                B.setAttribute("type", Ad);
                for (var K in E) {
                    if (E[K] != Object.prototype[K]) {
                        if (K.toLowerCase() == "styleclass") {
                            B.setAttribute("class", E[K])
                        } else {
                            if (K.toLowerCase() != "classid") {
                                B.setAttribute(K, E[K])
                            }
                        }
                    }
                }
                for (var L in G) {
                    if (G[L] != Object.prototype[L] && L.toLowerCase() != "movie") {
                        Ap(B, L, G[L])
                    }
                }
                A.parentNode.replaceChild(B, A);
                D = B
            }
        }
        return D
    }

    function Ap(B, D, C) {
        var A = AR("param");
        A.setAttribute("name", D);
        A.setAttribute("value", C);
        B.appendChild(A)
    }

    function AV(A) {
        var B = Ar(A);
        if (B && B.nodeName == "OBJECT") {
            if (AH.ie && AH.win) {
                B.style.display = "none";
                (function() {
                    if (B.readyState == 4) {
                        As(A)
                    } else {
                        setTimeout(arguments.callee, 10)
                    }
                })()
            } else {
                B.parentNode.removeChild(B)
            }
        }
    }

    function As(A) {
        var B = Ar(A);
        if (B) {
            for (var C in B) {
                if (typeof B[C] == "function") {
                    B[C] = null
                }
            }
            B.parentNode.removeChild(B)
        }
    }

    function Ar(A) {
        var C = null;
        try {
            C = Ak.getElementById(A)
        } catch (B) {}
        return C
    }

    function AR(A) {
        return Ak.createElement(A)
    }

    function Al(A, C, B) {
        A.attachEvent(C, B);
        AL[AL.length] = [A, C, B]
    }

    function AO(A) {
        var B = AH.pv,
            C = A.split(".");
        C[0] = parseInt(C[0], 10);
        C[1] = parseInt(C[1], 10) || 0;
        C[2] = parseInt(C[2], 10) || 0;
        return (B[0] > C[0] || (B[0] == C[0] && B[1] > C[1]) || (B[0] == C[0] && B[1] == C[1] && B[2] >= C[2])) ? true : false
    }

    function AY(B, F, A, C) {
        if (AH.ie && AH.mac) {
            return
        }
        var E = Ak.getElementsByTagName("head")[0];
        if (!E) {
            return
        }
        var G = (A && typeof A == "string") ? A : "screen";
        if (C) {
            Ag = null;
            AN = null
        }
        if (!Ag || AN != G) {
            var D = AR("style");
            D.setAttribute("type", "text/css");
            D.setAttribute("media", G);
            Ag = E.appendChild(D);
            if (AH.ie && AH.win && typeof Ak.styleSheets != AQ && Ak.styleSheets.length > 0) {
                Ag = Ak.styleSheets[Ak.styleSheets.length - 1]
            }
            AN = G
        }
        if (AH.ie && AH.win) {
            if (Ag && typeof Ag.addRule == Ac) {
                Ag.addRule(B, F)
            }
        } else {
            if (Ag && typeof Ak.createTextNode != AQ) {
                Ag.appendChild(Ak.createTextNode(B + " {" + F + "}"))
            }
        }
    }

    function AX(A, C) {
        if (!Ah) {
            return
        }
        var B = C ? "visible" : "hidden";
        if (AK && Ar(A)) {
            Ar(A).style.visibility = B
        } else {
            AY("#" + A, "visibility:" + B)
        }
    }

    function AI(B) {
        var A = /[\\\"<>\.;]/;
        var C = A.exec(B) != null;
        return C && typeof encodeURIComponent != AQ ? encodeURIComponent(B) : B
    }
    var Aq = function() {
        if (AH.ie && AH.win) {
            window.attachEvent("onunload", function() {
                var A = AL.length;
                for (var B = 0; B < A; B++) {
                    AL[B][0].detachEvent(AL[B][1], AL[B][2])
                }
                var D = AG.length;
                for (var C = 0; C < D; C++) {
                    AV(AG[C])
                }
                for (var E in AH) {
                    AH[E] = null
                }
                AH = null;
                for (var F in swfobject) {
                    swfobject[F] = null
                }
                swfobject = null
            })
        }
    }();
    return {
        registerObject: function(A, E, C, B) {
            if (AH.w3 && A && E) {
                var D = {};
                D.id = A;
                D.swfVersion = E;
                D.expressInstall = C;
                D.callbackFn = B;
                Af[Af.length] = D;
                AX(A, false)
            } else {
                if (B) {
                    B({
                        success: false,
                        id: A
                    })
                }
            }
        },
        getObjectById: function(A) {
            if (AH.w3) {
                return AU(A)
            }
        },
        embedSWF: function(K, E, H, F, C, A, B, I, G, J) {
            var D = {
                success: false,
                id: E
            };
            if (AH.w3 && !(AH.wk && AH.wk < 312) && K && E && H && F && C) {
                AX(E, false);
                AJ(function() {
                    H += "";
                    F += "";
                    var Q = {};
                    if (G && typeof G === Ac) {
                        for (var O in G) {
                            Q[O] = G[O]
                        }
                    }
                    Q.data = K;
                    Q.width = H;
                    Q.height = F;
                    var N = {};
                    if (I && typeof I === Ac) {
                        for (var P in I) {
                            N[P] = I[P]
                        }
                    }
                    if (B && typeof B === Ac) {
                        for (var L in B) {
                            if (typeof N.flashvars != AQ) {
                                N.flashvars += "&" + L + "=" + B[L]
                            } else {
                                N.flashvars = L + "=" + B[L]
                            }
                        }
                    }
                    if (AO(C)) {
                        var M = AZ(Q, N, E);
                        if (Q.id == E) {
                            AX(E, true)
                        }
                        D.success = true;
                        D.ref = M
                    } else {
                        if (A && AT()) {
                            Q.data = A;
                            AE(Q, N, E, J);
                            return
                        } else {
                            AX(E, true)
                        }
                    }
                    if (J) {
                        J(D)
                    }
                })
            } else {
                if (J) {
                    J(D)
                }
            }
        },
        switchOffAutoHideShow: function() {
            Ah = false
        },
        ua: AH,
        getFlashPlayerVersion: function() {
            return {
                major: AH.pv[0],
                minor: AH.pv[1],
                release: AH.pv[2]
            }
        },
        hasFlashPlayerVersion: AO,
        createSWF: function(A, B, C) {
            if (AH.w3) {
                return AZ(A, B, C)
            } else {
                return undefined
            }
        },
        showExpressInstall: function(B, A, D, C) {
            if (AH.w3 && AT()) {
                AE(B, A, D, C)
            }
        },
        removeSWF: function(A) {
            if (AH.w3) {
                AV(A)
            }
        },
        createCSS: function(B, A, C, D) {
            if (AH.w3) {
                AY(B, A, C, D)
            }
        },
        addDomLoadEvent: AJ,
        addLoadEvent: Ab,
        getQueryParamValue: function(B) {
            var A = Ak.location.search || Ak.location.hash;
            if (A) {
                if (/\?/.test(A)) {
                    A = A.split("?")[1]
                }
                if (B == null) {
                    return AI(A)
                }
                var C = A.split("&");
                for (var D = 0; D < C.length; D++) {
                    if (C[D].substring(0, C[D].indexOf("=")) == B) {
                        return AI(C[D].substring((C[D].indexOf("=") + 1)))
                    }
                }
            }
            return ""
        },
        expressInstallCallback: function() {
            if (At) {
                var A = Ar(AC);
                if (A && Ai) {
                    A.parentNode.replaceChild(Ai, A);
                    if (AD) {
                        AX(AD, true);
                        if (AH.ie && AH.win) {
                            Ai.style.display = "block"
                        }
                    }
                    if (AP) {
                        AP(AS)
                    }
                }
                At = false
            }
        }
    }
}();
/*
 * JS Signals <https://github.com/millermedeiros/js-signals>
 * Released under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 * @author Miller Medeiros <http://millermedeiros.com>
 * @version 0.5
 * @build 100 12/03/2010 05:27 PM
 */
(function() {
    var A = window.signals = {};
    A.VERSION = "0.5";
    A.isDef = function(B) {
        return typeof B !== "undefined"
    };
    A.Signal = function() {
        this._bindings = []
    };
    A.Signal.prototype = {
        _shouldPropagate: true,
        _isEnabled: true,
        _registerListener: function(D, E, F) {
            if (!A.isDef(D)) {
                throw new Error("listener is a required param of add() and addOnce().")
            }
            var B = this._indexOfListener(D),
                C;
            if (B !== -1) {
                C = this._bindings[B];
                if (C.isOnce() !== E) {
                    throw new Error("You cannot add" + (E ? "" : "Once") + "() then add" + (!E ? "" : "Once") + "() the same listener without removing the relationship first.")
                }
            } else {
                C = new A.SignalBinding(D, E, F, this);
                this._addBinding(C)
            }
            return C
        },
        _addBinding: function(B) {
            this._bindings.push(B)
        },
        _indexOfListener: function(B) {
            var C = this._bindings.length;
            while (C--) {
                if (this._bindings[C]._listener === B) {
                    return C
                }
            }
            return -1
        },
        add: function(C, B) {
            return this._registerListener(C, false, B)
        },
        addOnce: function(C, B) {
            return this._registerListener(C, true, B)
        },
        _removeByIndex: function(B) {
            this._bindings[B]._destroy();
            this._bindings.splice(B, 1)
        },
        remove: function(C) {
            if (!A.isDef(C)) {
                throw new Error("listener is a required param of remove().")
            }
            var B = this._indexOfListener(C);
            if (B !== -1) {
                this._removeByIndex(B)
            }
            return C
        },
        removeAll: function() {
            var B = this._bindings.length;
            while (B--) {
                this._removeByIndex(B)
            }
        },
        getNumListeners: function() {
            return this._bindings.length
        },
        disable: function() {
            this._isEnabled = false
        },
        enable: function() {
            this._isEnabled = true
        },
        isEnabled: function() {
            return this._isEnabled
        },
        halt: function() {
            this._shouldPropagate = false
        },
        dispatch: function(D) {
            if (!this._isEnabled) {
                return
            }
            var B = Array.prototype.slice.call(arguments),
                C = this._bindings.slice(),
                F = 0,
                E;
            this._shouldPropagate = true;
            while (E = C[F++]) {
                if (E.execute(B) === false || !this._shouldPropagate) {
                    break
                }
            }
        },
        dispose: function() {
            this.removeAll();
            delete this._bindings
        },
        toString: function() {
            return "[Signal isEnabled: " + this._isEnabled + " numListeners: " + this.getNumListeners() + "]"
        }
    };
    A.SignalBinding = function(C, B, D, E) {
        this._listener = C;
        this._isOnce = B;
        this.context = D;
        this._signal = E
    };
    A.SignalBinding.prototype = {
        _isEnabled: true,
        execute: function(B) {
            var C;
            if (this._isEnabled) {
                C = this._listener.apply(this.context, B);
                if (this._isOnce) {
                    this.detach()
                }
            }
            return C
        },
        detach: function() {
            return this._signal.remove(this._listener)
        },
        getListener: function() {
            return this._listener
        },
        dispose: function() {
            this.detach();
            this._destroy()
        },
        _destroy: function() {
            delete this._signal;
            delete this._isOnce;
            delete this._listener;
            delete this.context
        },
        disable: function() {
            this._isEnabled = false
        },
        enable: function() {
            this._isEnabled = true
        },
        isEnabled: function() {
            return this._isEnabled
        },
        isOnce: function() {
            return this._isOnce
        },
        toString: function() {
            return "[SignalBinding isOnce: " + this._isOnce + ", isEnabled: " + this._isEnabled + "]"
        }
    }
}());
(function(G) {
    var O = /^<([\-A-Za-z0-9_]+)((?:\s+\w+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
        E = /^<\/([\-A-Za-z0-9_]+)[^>]*>/,
        J = /([\-A-Za-z0-9_]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g;
    var I = D("area,base,basefont,br,col,frame,hr,img,input,isindex,link,meta,param,embed");
    var C = D("address,applet,blockquote,button,center,dd,del,dir,div,dl,dt,fieldset,form,frameset,hr,iframe,ins,isindex,li,map,menu,noframes,noscript,object,ol,p,pre,script,table,tbody,td,tfoot,th,thead,tr,ul");
    var M = D("a,abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,code,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var");
    var F = D("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr");
    var L = D("checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected");
    var K = D("script,style");

    function H(c) {
        var W, X, U, Y = [],
            Z = "",
            P;
        Y.last = function() {
            return this[this.length - 1]
        };

        function T(d, e) {
            e = e.replace(/<!--([\s\S]*?)-->/g, "$1").replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1");
            if (c.chars) {
                c.chars(e)
            }
            return ""
        }

        function S(f) {
            f = Z + f;
            Z = f;
            if (A.debug.parse) {
                console.log("PARSE parseMore", f)
            }
            while (f) {
                X = true;
                if (P || (Y.last() && K[Y.last()])) {
                    P = false;
                    var e = new RegExp("([\\s\\S]*?)</" + Y.last() + "[^>]*>");
                    if (!f.match(e)) {
                        P = true;
                        return a
                    }
                    f = f.replace(e, T);
                    V("", Y.last())
                } else {
                    if (f.indexOf("<!--") === 0) {
                        W = f.indexOf("-->");
                        if (W >= 0) {
                            if (A.debug.parse) {
                                console.log("PARSE comment", U)
                            }
                            if (c.comment) {
                                c.comment(f.substring(4, W))
                            }
                            f = f.substring(W + 3);
                            X = false
                        }
                    } else {
                        if (f.indexOf("</") === 0) {
                            U = f.match(E);
                            if (U) {
                                if (A.debug.parse) {
                                    console.log("PARSE end tag", U)
                                }
                                f = f.substring(U[0].length);
                                U[0].replace(E, V);
                                X = false
                            }
                        } else {
                            if (f.indexOf("<") === 0) {
                                U = f.match(O);
                                if (U) {
                                    if (A.debug.parse) {
                                        console.log("PARSE start tag", U)
                                    }
                                    f = f.substring(U[0].length);
                                    U[0].replace(O, Q);
                                    X = false
                                }
                            }
                        }
                    }
                    if (X) {
                        W = f.indexOf("<");
                        var g = W < 0 ? f : f.substring(0, W);
                        f = W < 0 ? "" : f.substring(W);
                        if (A.debug.parse) {
                            console.log("PARSE chars", g)
                        }
                        if (c.chars) {
                            c.chars(g)
                        }
                    }
                }
                var d = f == Z;
                Z = f;
                if (d) {
                    break
                }
            }
            if (A.debug.parse) {
                console.log("PARSE end parse")
            }
            return a
        }

        function Q(d, g, h, e) {
            g = g.toLowerCase();
            if (C[g]) {
                while (Y.last() && M[Y.last()]) {
                    V("", Y.last())
                }
            }
            if (F[g] && Y.last() == g) {
                V("", g)
            }
            e = I[g] || !!e;
            if (!e) {
                Y.push(g)
            }
            if (c.start) {
                var f = [];
                h.replace(J, function(j, i) {
                    var k = arguments[2] ? arguments[2] : arguments[3] ? arguments[3] : arguments[4] ? arguments[4] : L[i] ? i : "";
                    f.push({
                        name: i,
                        value: k,
                        escaped: k.replace(/(^|[^\\])"/g, '$1\\"')
                    })
                });
                if (c.start) {
                    c.start(g, f, e)
                }
            }
        }

        function V(d, f) {
            if (A.debug.parse) {
                console.log("PARSE parseEndTag", d, f)
            }
            var g;
            if (!f) {
                g = 0
            } else {
                for (g = Y.length - 1; g >= 0; g--) {
                    if (Y[g] == f) {
                        break
                    }
                }
            }
            if (g >= 0) {
                for (var e = Y.length - 1; e >= g; e--) {
                    if (c.end) {
                        c.end(Y[e])
                    }
                }
                if (A.debug.parse) {
                    console.log("PARSE parseEndTag pop", Y.slice(g))
                }
                Y.length = g
            }
        }

        function R(d) {
            if (d) {
                S(d)
            }
            V()
        }
        var a = {
            parseMore: S,
            end: R
        };
        return a
    }

    function B(U, V) {
        V = V || {};
        var X = U;
        var R = [X],
            W = U.ownerDocument || U.getOwnerDocument && U.getOwnerDocument();
        R.last = function() {
            return this[this.length - 1]
        };
        R.pop = function() {
            var Y = Array.prototype.pop.call(this);
            X = this.last();
            return Y
        };
        R.push = function(Y) {
            Array.prototype.push.call(this, Y);
            X = Y
        };

        function T(Y) {
            if (V[Y]) {
                return V[Y].apply(V, N(arguments, 1).concat([Q()]))
            }
        }

        function Q() {
            return {
                stack: R
            }
        }
        var S, P = H(S = {
            start: function(c, a, Z) {
                if (T("start", c, a, Z) === false) {
                    return
                }
                if (A.debug.write) {
                    console.log("WRITE start", c, a, Z)
                }
                var d = W.createElement(c);
                for (var Y in a) {
                    d.setAttribute(a[Y].name, a[Y].value)
                }
                if (X && X.appendChild) {
                    X.appendChild(d);
                    if (A.debug.write) {
                        console.log("WRITE start append", d, "to", X)
                    }
                }
                if (!Z) {
                    if (A.debug.write) {
                        console.log("WRITE push", d, R.slice(0))
                    }
                    R.push(d)
                }
                if (A.debug.write) {
                    console.log("WRITE start done - parent:", X)
                }
            },
            end: function(Y) {
                if (T("end", Y) === false) {
                    return
                }
                R.pop();
                if (A.debug.write) {
                    console.log("WRITE end", Y, "new parent:", X, "elems", R)
                }
            },
            chars: function(Y) {
                if (T("chars", Y) === false) {
                    return
                }
                if (A.debug.write) {
                    console.log("WRITE chars", Y, "el:", U)
                }
                X.appendChild(W.createTextNode(Y))
            },
            comment: function(Y) {
                if (T("comment", Y) === false) {
                    return
                }
            },
            close: function() {
                if (T("close") === false) {
                    return
                }
                if (A.debug.write) {
                    console.log("WRITE close el:", U)
                }
            },
            _handle: function(Y) {
                T.apply(this, arguments)
            }
        });
        return V.writer = {
            handle: function(Z, Y) {
                if (S[Z]) {
                    S[Z].apply(S, Y || [])
                } else {
                    S._handle.apply(S, arguments)
                }
            },
            write: function(Y) {
                P.parseMore(Y);
                return this
            },
            writeln: function(Y) {
                this.write(Y + "\n");
                return this
            },
            close: function(Y) {
                P.end(Y);
                S.close();
                return this
            }
        }
    }

    function D(S) {
        var R = {},
            P = S.split(",");
        for (var Q = 0; Q < P.length; Q++) {
            R[P[Q]] = true
        }
        return R
    }

    function N(Q, P) {
        return Array.prototype.slice.call(Q, P)
    }
    var A = {
        toElement: B,
        HTMLParser: H,
        debug: {
            parse: false,
            write: false
        }
    };
    G(A)
})(typeof define == "function" ? define : function(A) {
    if (typeof exports === "object") {
        module.exports = A
    } else {
        this.elementWrite = A
    }
});
(function(H) {
    var E = this.console || {
        log: function() {}
    };
    var B = (function() {
        var N = document.createElement("script");
        var P = "script" + (new Date).getTime();
        var M = document.documentElement;
        N.type = "text/javascript";
        try {
            N.appendChild(document.createTextNode("window." + P + "=1;"))
        } catch (O) {}
        M.insertBefore(N, M.firstChild);
        if (window[P]) {
            delete window[P];
            return true
        }
        return false
    })();
    var J;

    function K(O, Q) {
        var P, M, N;
        Q = Q || function() {};
        P = J.toElement(O, G({
            start: function(R, T, S, U) {
                if (R.toLowerCase() === "script") {
                    E.log("WC element:", O, "start script. attrs:", T, this.id);
                    N = "";
                    M = T || {};
                    return false
                }
            },
            chars: function(S, R) {
                if (M) {
                    E.log("WC element:", O, "chars:", S, this.id);
                    N += S;
                    return false
                }
            },
            end: function(R, T) {
                if (M) {
                    var S = M;
                    M = false;
                    L(N, S, T.stack.last(), P);
                    return false
                }
            },
            comment: function(S, R) {
                return false
            },
            done: Q
        }));
        return P
    }

    function L(M, N, P, R) {
        var S = K(P, Q),
            O;
        E.log("WC captureScript attrs:", N, "body:", M, "in parent:", P);
        R.handle("pause");
        setTimeout(function() {
            O = I(F(P), S);
            C(M, N, P, function() {
                S.close()
            })
        }, 25);

        function Q() {
            O();
            R.handle("resume")
        }
    }

    function C(Q, U, T, O) {
        var R = F(T),
            N = R.createElement("script"),
            M, S;
        for (var P in U) {
            M = U[P].name;
            S = U[P].value;
            if (K.fixUrls && M === "src") {
                S = K.fixUrls(S)
            }
            N.setAttribute(M, S)
        }
        if (Q) {
            if (B) {
                N.appendChild(R.createTextNode(Q))
            } else {
                N.text = Q
            }
        }
        if (O && N.src) {
            N.onload = N.onreadystatechange = function(W, V) {
                if (V || !N.readyState || /loaded|complete/.test(N.readyState)) {
                    N.onload = N.onreadystatechange = null;
                    N = undefined;
                    if (!V) {
                        O()
                    }
                }
            }
        }
        T.appendChild(N);
        if (O && !N.src) {
            O()
        }
    }

    function I(M, O) {
        var N = {
            write: M.write,
            writeln: M.writeln
        };
        M.write = function(P) {
            O.handle("write", [P])
        };
        M.writeln = function(P) {
            M.write(P + "\n")
        };
        return function() {
            M.write = N.write;
            M.writeln = N.writeln
        }
    }
    var A = 0;

    function G(O) {
        var M = [],
            N, P = A++;
        return {
            pause: function() {
                E.log("WC PAUSE", P);
                N = true
            },
            resume: function() {
                E.log("WC RESUME", P, M.slice(0));
                N = false;
                while (!N && M.length) {
                    var Q = M.shift();
                    this.writer.handle(Q[0], Q[1])
                }
            },
            start: function(Q, S, R, T) {
                E.log("WC start", N, "args", Q, S, R, T, P);
                if (N) {
                    M.push(["start", [Q, S, R]]);
                    return false
                } else {
                    return O.start(Q, S, R, T)
                }
            },
            chars: function(R, Q) {
                E.log("WC chars", N, "args", R, Q, P);
                if (N) {
                    M.push(["chars", [R]]);
                    return false
                } else {
                    return O.chars(R, Q)
                }
            },
            end: function(Q, R) {
                E.log("WC end", N, "args", Q, R, P);
                if (N) {
                    M.push(["end", [Q]]);
                    return false
                } else {
                    return O.end(Q, R)
                }
            },
            comment: function(R, Q) {
                if (N) {
                    M.push(["comment", [R]]);
                    return false
                } else {
                    return O.comment(R, Q)
                }
            },
            write: function(Q) {
                E.log("WC queue.write", N, P);
                if (N) {
                    M.push(["write", [Q]]);
                    return false
                } else {
                    this.writer.write(Q);
                    return false
                }
            },
            close: function() {
                E.log("WC close", N, P);
                if (N) {
                    M.push(["close", []]);
                    return false
                } else {
                    if (O.done) {
                        return O.done()
                    }
                }
            }
        }
    }

    function F(M) {
        return M.ownerDocument || M.getOwnerDocument && M.getOwnerDocument()
    }

    function D(N) {
        function M() {}
        M.prototype = N;
        return new M
    }
    H(["element.write"], function(M) {
        J = K.elementWrite = M;
        K.fixUrls = function(N) {
            return N.replace(/&amp;/g, "&")
        };
        return K
    })
})(typeof define == "function" ? define : function(B, A) {
    if (typeof exports === "object") {
        module.exports = A(require(B[0]))
    } else {
        this.writeCapture = A(this.elementWrite)
    }
});
Function.ABSTRACT = function() {
    throw new Error("Abstract Method. Implement in Subclass.")
};
Object.extend(String.prototype, function() {
    var E = ["%3A%29", "%3B%28", "%3B%29", "%3AD"],
        B = ["smile", "traurig", "zwinker", "grins"];

    function G(K) {
        var I = "";
        I = escape(K);
        for (var L = 0; L < E.length; L++) {
            var M = new RegExp(E[L], "gi");
            var J = '<img src="/images/smilies/smile_' + B[L] + '.gif" />';
            I = I.replace(M, J)
        }
        return unescape(I)
    }

    function F(J) {
        var I = "";
        I = J.replace(/((https?\:\/\/)|(www\.))(\S+)(\w{2,4})(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/ig, function(L) {
            var K = L;
            if (!K.match("^https?://")) {
                K = "http://" + K
            }
            return '<a href="' + K + '" target="_blank">' + L + "</a>"
        });
        return I
    }

    function A(I, J) {
        J = J || "\\s";
        return H(D(I, J), J)
    }

    function H(I, J) {
        J = J || "\\s";
        return I.replace(new RegExp("^[" + J + "]+", "g"), "")
    }

    function D(I, J) {
        J = J || "\\s";
        return I.replace(new RegExp("[" + J + "]+$", "g"), "")
    }
    var C = {
        linkify: F,
        smiley: G,
        trim: A,
        ltrim: H,
        rtrim: D
    };
    $H(C).keys().each(function(I) {
        C[I] = C[I].methodize()
    });
    return C
}());
(function(C) {
    var E = 0,
        A = /^(\w+:)?\/\/([^\/?#]+)/,
        F = /\=\?(&|$)/,
        D = /\?/,
        B = Element.select(document, "head")[0];
    var G = Class.create({
        initialize: function(J, L, I) {
            var J = J || document.location,
                M = "jsonp" + E++,
                H;
            if (typeof L === "object") {
                L = $H(Object.clone(L || {}));
                var N;
                if (N = L.index("?")) {
                    L.set(N, M)
                } else {
                    var K = L.unset("callbackParameter") || "callback";
                    L.set(K, M)
                }
                L = L.toQueryString();
                J += (D.test(J) ? "&" : "?") + L
            } else {
                if (!F.test(J)) {
                    J += (D.test(J) ? "&" : "?") + K + "=?"
                }
                J = J.replace(F, "=" + M + "$1")
            }
            if ((typeof L === "function") && (typeof I === "undefined")) {
                I = L
            }
            window[M] = function(O) {
                alert("jspnü");
                H.remove();
                H = null;
                window[M] = undefined;
                I(O)
            };
            console.log(J);
            H = new Element("script", {
                src: J,
                type: "text/javascript"
            });
            B.insert(H);
            alert("muha")
        }
    });
    C.JSONP = G
})(Ajax);
var onNewContentRelink = new Array();

function rerelink() {
    onNewContentRelink.each(function(A) {
        relink(A.area, A.ltparam)
    })
}

function relink(A, B) {
    $("content").select(A).each(function(C) {
        C.select("a").each(function(E) {
            var D = E.readAttribute("href");
            if (D) {
                var F = B;
                if ((D.indexOf("#") != -1) || (D.indexOf(F) != -1)) {
                    return
                }
                F = (D.indexOf("?") == -1) ? "?" + F : "&" + F;
                if (!D.endsWith("/")) {
                    F = "/" + F
                }
                E.writeAttribute("href", D + F)
            }
        })
    })
}
// Event.observe(window, "load", function() {
//     if (Config.lt && Config.lt.data) {
//         Config.lt.data.each(function(A) {
//             if (A.area == "ul.wall-list") {
//                 onNewContentRelink.push(A)
//             }
//             relink(A.area, A.ltparam)
//         })
//     }
// });
var szene1;
// $(document).observe("dom:loaded", function() {
//     var B = $("navigation");
//     if (B) {
//         UI.viewportOffset.top = B.getHeight()
//     }
//     var C = false;
//     var E = 0;
//     szene1 = $("szene1");
//     Initializer.go();
//     if ($("signin-op")) {
//         LoginPanel.init()
//     } else {
//         if ($("user-panel")) {
//             $("user-panel").select("a[data-userpanel]").invoke("userpanel")
//         }
//     }
//     if ($("szene1TopSearchForm")) {
//         new AjaxSearch("topSearchId")
//     }
//     if ((typeof Config.str.streamBlind == "undefined") || (Config.str.streamBlind == true)) {
//         FbLogin.init()
//     }
//     if (Config.str.uid) {
//         window.streamChannelSrc = "http://" + window.sName + "." + document.domain + "/talk/";
//         theChat = new Chat(Config.str.uname, false, Config.str.streamBlind)
//     }
//     var D = $("wall-publish-text");
//     if (D) {
//         new UI.Publisher("wall-publish-text")
//     }
//     szene1.observe("mouse:init", function(F) {
//         $("content").on("click", ".wall-attachment .play", function(H) {
//             var J = H.findElement("a.play"),
//                 I = J.readAttribute("data-embed").evalJSON();
//             var G = H.findElement("div.wall-attachment");
//             G.addClassName("video-play");
//             J.tooltip().remove();
//             J = J.replace(I.html);
//             H.stop()
//         })
//     });
//     $(document).fire("base:ready");
//     if (szene1 && szene1.hasClassName("szene1_pn")) {
//         var A = new PeriodicalExecuter(PNPopup.checkForNewPn, 20)
//     }
//     new PeriodicalExecuter(function() {
//         new Ajax.Request("/ajax/user/checkstate", {
//             method: "post",
//             postBody: "&id=0",
//             onSuccess: function(F) {
//                 if (F.responseText == "-1") {
//                     window.location.reload()
//                 }
//             }
//         })
//     }, 600);
//     if (Config.str.uid == 0 && Config.str.up == 0) {
//         Login.doAjaxLogin(2)
//     }
//     if (Config.str.up == 1) {
//         Login.doAjaxLogin(3)
//     }
//     if (Config.str.udata == 1) {
//         Userprogress.checkprogress(5)
//     }
// });
// var TabSelector = {
//     timeline: function(C) {
//         var A = {};
//         switch (C) {
//             case "st_szene1":
//                 A = {
//                     type: "wall",
//                     oType: 23,
//                     oId: 5266,
//                     offset: 0,
//                     limit: 15,
//                     community: 0,
//                     getmore: 0,
//                     tags: [],
//                     filter: [],
//                     outm: "none"
//                 };
//                 if ($("wall_form")) {
//                     $("wall_form").up().hide()
//                 }
//                 break;
//             case "st_newsfeed_community":
//                 A = {
//                     type: "feed",
//                     oType: 23,
//                     oId: Config.str.uid,
//                     offset: 0,
//                     limit: 15,
//                     community: 1,
//                     tags: [],
//                     filter: ["news", "activity"],
//                     outm: "min"
//                 };
//                 if ($("wall_form")) {
//                     $("wall_form").up().show()
//                 }
//                 break;
//             case "st_news_community":
//                 A = {
//                     type: "feed",
//                     oType: 23,
//                     oId: Config.str.uid,
//                     offset: 0,
//                     limit: 15,
//                     community: 1,
//                     tags: [],
//                     filter: ["news"],
//                     outm: "normal"
//                 };
//                 if ($("wall_form")) {
//                     $("wall_form").up().show()
//                 }
//                 break;
//             case "st_newsfeed_friends":
//                 A = {
//                     type: "feed",
//                     oType: 23,
//                     oId: Config.str.uid,
//                     offset: 0,
//                     limit: 15,
//                     community: 0,
//                     tags: [],
//                     filter: ["news", "activity"],
//                     outm: "normal"
//                 };
//                 if ($("wall_form")) {
//                     $("wall_form").up().show()
//                 }
//                 break;
//             case "st_news_friends":
//                 A = {
//                     type: "feed",
//                     oType: 23,
//                     oId: Config.str.uid,
//                     offset: 0,
//                     limit: 15,
//                     community: 0,
//                     tags: [],
//                     filter: ["news"],
//                     outm: "normal"
//                 };
//                 if ($("wall_form")) {
//                     $("wall_form").up().show()
//                 }
//                 break;
//             case "st_newsfeed_media":
//                 A = {
//                     type: "feed",
//                     oType: 23,
//                     oId: Config.str.uid,
//                     offset: 0,
//                     limit: 15,
//                     community: 1,
//                     tags: [1],
//                     filter: ["news"]
//                 };
//                 if ($("wall_form")) {
//                     $("wall_form").up().show()
//                 }
//                 break;
//             case "st_newsfeed_friends_media":
//                 A = {
//                     type: "feed",
//                     oType: 23,
//                     oId: Config.str.uid,
//                     offset: 0,
//                     limit: 15,
//                     community: 0,
//                     tags: [1],
//                     filter: ["news"]
//                 };
//                 if ($("wall_form")) {
//                     $("wall_form").up().show()
//                 }
//                 break;
//             case "us_wall":
//                 A = {
//                     type: "wall",
//                     offset: 0,
//                     limit: 15,
//                     tags: [],
//                     filter: ["news", "activity"],
//                     outm: "normal"
//                 };
//                 break;
//             case "us_activity":
//                 A = {
//                     type: "wall",
//                     offset: 0,
//                     limit: 15,
//                     tags: [],
//                     filter: ["activity"]
//                 };
//                 break;
//             case "us_media":
//                 A = {
//                     type: "wall",
//                     offset: 0,
//                     limit: 15,
//                     tags: [1, 2, 3],
//                     filter: ["news"]
//                 };
//                 break
//         }
//         try {
//             Timeline.instance().getStart(A)
//         } catch (B) {
//             unotify("something went wrong,...");
//             return true
//         }
//         return false
//     }
// };
var Szene1Report = {
    requestUrl: "/ajax/report",
    contentBoxId: "reportFormBox",
    dialog: null,
    doRequest: function(A) {
        new Ajax.Request(Szene1Report.requestUrl, {
            method: "post",
            parameters: A,
            showLoader: true,
            onSuccess: function(C) {
                var D = C.responseJSON;
                if (D.valid == true) {
                    if (A.mode == "form") {
                        var B = {
                            modal: true,
                            hideOnClick: true,
                            drag: true
                        };
                        Szene1Report.dialog = UI.Dialog.fromString(D.html, B);
                        Szene1Report.dialog.show()
                    } else {
                        if (A.mode == "save") {
                            unotify(D.html, {
                                hideDelay: 5
                            });
                            if (Szene1Report.dialog) {
                                Szene1Report.dialog.hide();
                                Szene1Report.dialog = null
                            }
                        }
                    }
                    return
                } else {
                    unotify("Error while loading, please try again.")
                }
            },
            onFailure: function(B) {
                unotify("Error while loading, please try again.")
            }
        })
    },
    open: function(C, B) {
        var A = {
            type: C,
            typeid: B,
            mode: "form"
        };
        Szene1Report.doRequest(A)
    },
    send: function() {
        var C = ($("reportform_type")) ? $("reportform_type").value : null;
        var B = ($("reportform_typeid")) ? $("reportform_typeid").value : null;
        var E = ($("reportform_criteria_type_" + C)) ? $("reportform_criteria_type_" + C).value : null;
        var D = ($("reportform_text")) ? encodeURIComponent($("reportform_text").value.strip()) : null;
        if (C && B && E && D) {
            var A = {
                type: C,
                typeid: B,
                criteriaid: E,
                reason: D,
                mode: "save"
            };
            Szene1Report.doRequest(A)
        } else {
            Effect.Shake($("dialog-reporting"))
        }
    }
};
var loaderT = new Template('<span id="loadingbox_#{id}" class="icon-#{size}-loading#{type} center"></span>');
var Loader = {
    els: new Array(),
    get: function(A) {
        return this.build(A)
    },
    getDark: function(A) {
        return this.build(A, {
            type: "-dark"
        })
    },
    build: function(A, C) {
        var B = A || "16";
        var D = new Date().getTime();
        this.els.push(D);
        return loaderT.evaluate(Object.extend(C || {}, {
            size: B,
            id: D
        }))
    },
    remove: function() {
        this.els.each(function(A) {
            if ($("loadingbox_" + A)) {
                $("loadingbox_" + A).remove()
            }
        });
        this.els.clear()
    }
};
var AjaxLoader = {
    loader: null,
    tid: null,
    delay: 0.6,
    show: function(A) {
        A = A || AjaxLoader.delay;
        AjaxLoader.tid = AjaxLoader.doShow.delay(A)
    },
    cancel: function() {
        if (AjaxLoader.tid) {
            window.clearTimeout(AjaxLoader.tid)
        }
        if (AjaxLoader.loader) {
            AjaxLoader.loader.cancel()
        }
        AjaxLoader.loader = null;
        AjaxLoader.tid = null
    },
    doShow: function() {
        AjaxLoader.loader = unotify(Loader.getDark(), {
            autoHide: false
        })
    }
};
Ajax.Responders.register({
    onCreate: function(A) {
        if (A.options.showLoader == true) {
            AjaxLoader.show()
        }
    },
    onComplete: function(B) {
        AjaxLoader.cancel();
        var A = B.transport.response.evalJSON();
        if (A.showLogin == true) {
            Login.doAjaxLogin()
        }
    }
});

function constrainSnap(B, H, A) {
    function G(K, I, J) {
        if (K > J) {
            return J
        } else {
            if (K < I) {
                return I
            } else {
                return K
            }
        }
    }
    var E = A.element,
        C = Element.getDimensions(E),
        F = Element.getDimensions(document.body),
        D = document.viewport.getDimensions();
    return [G(B, 0, F.width - C.width), G(H, 0, D.height - C.height)]
}
var FlashHelper = {
    movieIsLoaded: function(A) {
        if (typeof(A) != "undefined") {
            return A.PercentLoaded() == 100
        } else {
            return false
        }
    },
    getMovie: function(A) {
        if (navigator.appName.indexOf("Microsoft") != -1) {
            return window[A]
        } else {
            return document[A]
        }
    }
};

function niftyplayer(A) {
    this.obj = FlashHelper.getMovie(A);
    this.play = function() {
        if (this.obj) {
            this.obj.TCallLabel("/", "play")
        }
    };
    this.stop = function() {
        this.obj.TCallLabel("/", "stop")
    };
    this.pause = function() {
        this.obj.TCallLabel("/", "pause")
    };
    this.playToggle = function() {
        this.obj.TCallLabel("/", "playToggle")
    };
    this.reset = function() {
        this.obj.TCallLabel("/", "reset")
    };
    this.load = function(B) {
        this.obj.SetVariable("currentSong", B);
        this.obj.TCallLabel("/", "load")
    };
    this.loadAndPlay = function(B) {
        this.load(B);
        this.play()
    };
    this.getState = function() {
        var C = this.obj.GetVariable("playingState");
        var B = this.obj.GetVariable("loadingState");
        if (C == "playing") {
            if (B == "loaded") {
                return C
            } else {
                return B
            }
        }
        if (C == "stopped") {
            if (B == "empty") {
                return B
            }
        }
        if (B == "error") {
            return B
        } else {
            return C
        }
        return C
    };
    this.getPlayingState = function() {
        return this.obj.GetVariable("playingState")
    };
    this.getLoadingState = function() {
        return this.obj.GetVariable("loadingState")
    };
    this.registerEvent = function(B, C) {
        this.obj.SetVariable(B, C)
    };
    return this
}(function(A) {
    var B = Element.select(A, "form[data-validate=true]");
    H5F.setup(B)
})($$("body")[0]);
(function() {
    Event.observe(document, "keyup", A);
    Event.observe(document, "cut", F);
    Event.observe(document, "paste", F);

    function A(G) {
        E(G.element())
    }

    function F(G) {
        (function() {
            E(G.element())
        }).defer()
    }

    function E(G) {
        G = Element.extend(G);
        if (!G.match("textarea") && !G.match("input") && !G.match("*[contenteditable]")) {
            return
        }
        var H = G.readAttribute("contenteditable") ? G.innerHTML : G.getValue();
        if (H !== G.retrieve("lastValue", " ")) {
            Event.fire(G, "text:change", H);
            G.store("lastValue", H)
        }
    }

    function C(H, G) {
        Event.observe(H, "text:hastext", G)
    }

    function B(H, G) {
        Event.observe(H, "text:notext", G)
    }

    function D(H, G) {
        Event.observe(H, "text:change", G)
    }
    Event.observe(document, "text:change", function(H) {
        var G = H.element().retrieve("lastValue");
        if (G === H.memo) {
            return
        }
        if (H.memo === "") {
            Event.fire(H.element(), "text:notext", H.memo)
        } else {
            if ((G === "") || (G === " ")) {
                Event.fire(H.element(), "text:hastext", H.memo)
            }
        }
    });
    Element.addMethods(["INPUT", "TEXTAREA"], {
        hasText: C,
        noText: B,
        textChange: D
    })
})();

function getDate(C) {
    var A = new Date();
    A.setTime((C) * 1000);
    var B = leadingZero(A.getUTCDate()) + "." + leadingZero(A.getUTCMonth() + 1) + " um " + leadingZero(A.getUTCHours()) + ":" + leadingZero(A.getUTCMinutes());
    return B
}

function leadingZero(A) {
    A = "" + A;
    return A.length == 1 ? "0" + A : A
}
var PNPopup = {
    pnPopUpStandAlone: function(C, B) {
        if (!B) {
            B = new Date().getTime()
        }
        if (szene1 && $("szene1").hasClassName("szene1_pn_sound")) {
            playPNFlashSound()
        }
        var E = "/pn/popup/1";
        var D = "pns_" + B;
        var A = window.open(E, D, "width=650,height=450,scrollbars=1,resizable=0,menubar=no,location=no,status=no");
        A.focus()
    },
    checkForNewPn: function() {
        var B = "/ajax/pn/hasnew";
        var A = "&id=0";
        new Ajax.Request(B, {
            method: "post",
            postBody: A,
            onSuccess: PNPopup.pnHasNewSuccess
        })
    },
    pnHasNewSuccess: function(A) {
        var B = parseInt(A.responseText);
        if (B > 0) {
            PNPopup.pnPopUpStandAlone(B)
        }
    }
};

function playPNFlashSound() {
    var A = new Element.insert("szene1", '<div id="flashSound">sound</div>');
    swfobject.embedSWF("/flash/new_pn.swf", "flashSound", "1", "1", "6.0.0")
}
// var Initializer = {
//     mcount: 0,
//     handler: 0,
//     threshold: 10,
//     go: function() {
//         this.handler = $(document).on("mousemove", this.handleMouse.bind(this))
//     },
//     handleMouse: function(A) {
//         ++this.mcount;
//         if (this.mcount >= this.threshold) {
//             this.handler.stop();
//             szene1.fire("mouse:init", {
//                 moved: this.mcount
//             });
//             this.handler = null
//         }
//     }
// };
var ajaxPNForm = {
    dialog: null,
    doajaxpnpost: function(A) {
        var C = $F("quickform_pn_recipient");
        var B = $F("quickform_pn_text").strip();
        B = encodeURIComponent(B);
        if (B && C && B != "" && C != "") {
            new Ajax.Request("/ajax/pn/quickform/send", {
                method: "post",
                postBody: "rec=" + C + "&msg=" + B,
                onSuccess: function(D) {
                    unotify(D.responseJSON.content);
                    if (ajaxPNForm.dialog) {
                        ajaxPNForm.dialog.close();
                        ajaxPNForm.dialog = null
                    }
                },
                onFailure: function(D) {
                    unotify(Szene1Translator.translate("anErrorOccurred", null))
                },
                onComplete: function() {
                    Util.oewaReload("user_new_pn")
                }
            })
        } else {
            unotify(Szene1Translator.translate("noValidAddresseeOrMessageMissing", null))
        }
    },
    openAjaxPNForm: function(B) {
        new Ajax.Request("/ajax/pn/quickform", {
            method: "post",
            postBody: "user=" + B.id.split("#").last(),
            onSuccess: C,
            onFailure: A
        });

        function C(D) {
            if (D.responseJSON.valid) {
                ajaxPNForm.dialog = UI.Dialog.fromString(D.responseJSON.content, {
                    modal: true,
                    hideOnClick: true,
                    drag: true
                }).show()
            } else {
                unotify(D.responseJSON.content)
            }
        }

        function A(D) {
            unotify(Szene1Translator.translate("errorLoadingPMForm", null))
        }
    }
};

function loadfile(A, B) {
    if (B == "js") {
        var C = document.createElement("script");
        C.setAttribute("type", "text/javascript");
        C.setAttribute("src", A)
    } else {
        if (B == "css") {
            var C = document.createElement("link");
            C.setAttribute("rel", "stylesheet");
            C.setAttribute("type", "text/css");
            C.setAttribute("href", A)
        }
    }
    if (typeof C != "undefined") {
        document.getElementsByTagName("head")[0].appendChild(C)
    }
}

function fakeAdClick() {
    var H = 60;
    var C = 40;
    var L = "width=800,height=510,scrollbars=1,resizable=1,toolbar=1,location=1,menubar=1,status=1,directories=0";
    var D = $("szene1_mainlogin_button");
    var G = D.readAttribute("href");
    var A = new Element("div");
    A.id = "fc_container";
    A.style.position = "absolute";
    A.style.padding = 0;
    A.style.margin = 0;
    A.style.cursor = "pointer";
    A.style.visiblity = "hidden";
    A.style.width = "150px";
    A.style.height = "50px";
    A.style.zIndex = 1000;
    szene1.insert(A);
    var K = '<a href="http://eas4.emediate.eu/eas?camp=163849;ty=ct" style="text-decoration:none;" target="_blank"><div style="width:150px;height:50px;">&nbsp;</div></a>';
    A.update(K);
    var J = A.down("a").href;
    A.down("a").removeAttribute("href");
    A.down("a").removeAttribute("target");
    var I = function(N) {
        var M = window.open(J, "Neckermann", L);
        M.blur();
        window.focus();
        $("szene1_mainlogout").submit();
        return false
    };
    A.down("a").observe("mousedown", I);
    var F = function(M) {
        document.location.href = G;
        window.focus();
        A.style.width = C + "px";
        A.style.height = H + "px";
        window.focus();
        return true
    };
    var B = function(N) {
        A.style.width = "0px";
        A.style.height = "0px";
        var M = N.findElement();
        if (M === A || M.up(A.tagName) === A) {
            A.style.width = C + "px";
            A.style.height = H + "px"
        } else {}
    };
    var E = function(N) {
        var M = y = 0;
        M = Event.pointerX(N);
        y = Event.pointerY(N);
        A.style.left = M - 20 + "px";
        A.style.top = y - 40 + "px"
    };
    D.observe("mousemove", E)
}
if (typeof(Prototype) == "undefined") {
    throw "Cookie requires Prototype to be loaded."
}
var Cookie = {
    build: function() {
        return $A(arguments).compact().join("; ")
    },
    secondsFromNow: function(B) {
        var A = new Date();
        A.setTime(A.getTime() + (B * 1000));
        return A.toGMTString()
    },
    set: function(A, C, D) {
        var B = D ? "expires=" + Cookie.secondsFromNow(D) : null;
        document.cookie = Cookie.build(A + "=" + C, B, "path=/")
    },
    get: function(A) {
        var B = new RegExp(A + "=([^;]+)").exec(document.cookie);
        return B ? B[1] : null
    },
    unset: function(A) {
        Cookie.set(A, "", -1)
    }
};
var AjaxSearch = Class.create({
    options: {
        startTags: "",
        url: "/ajax/topsearch",
        selectedClass: "selected"
    },
    initialize: function(A, B) {
        Object.extend(this.options, B || {});
        if (!$(A)) {
            throw new Error("search could not be initialized!")
        }
        this.input = $(A);
        this.focusHandler = this.input.on("focus", this.startObserver.bindAsEventListener(this));
        this.blurHandler = this.input.on("blur", this.stopObserver.bindAsEventListener(this));
        this.blurHandler.stop();
        this.observer = this.hideHandler = this.navHandler = null;
        this.eventReq = this.photoReq = this.userReq = null;
        this.selectedElement = null;
        this.suggestionLoaded = false;
        this.resBox = $("search-top");
        this.results = new Hash()
    },
    startObserver: function(A) {
        this.observer = new AjaxSearch.Observer(this.input, 0.6, this.checkSearch.bind(this));
        this.focusHandler.stop();
        this.blurHandler.start();
        if (this.input.getValue() == "") {
            this.doSearch("")
        }
    },
    stopObserver: function(A) {
        this.observer.stop();
        this.blurHandler.stop();
        this.focusHandler.start()
    },
    checkSearch: function(A, B) {
        if (B && (B.length > 1)) {
            this.doSearch(B)
        } else {
            if ((B.length == 0) && this.resBox.visible()) {
                this.hideResBox()
            }
        }
    },
    doSearch: function(A) {
        this.lastSearch = A;
        this.stopRequests();
        this.selectedElement = null;
        this.eventReq = this.doRequest(A, "event");
        this.photoReq = this.doRequest(A, "photo");
        this.userReq = this.doRequest(A, "user");
        this.showResBox();
        Util.oewaReload("user_quick_search", false, true);
        Util.trackGaqEvent("Schnellsuche", A, "SS_" + window.location.href)
    },
    doRequest: function(A, B) {
        var D = this.results.get(B + "~~" + A);
        if (D) {
            this.searchResult(B, D);
            return
        }
        var C = this.resBox.down("div#sr_" + B).firstDescendant();
        if (!C || (C && (C.tagName != "SPAN"))) {
            this.resBox.down("div#sr_" + B).insert({
                top: Loader.getDark(16)
            })
        }
        return new Ajax.Request(this.options.url, {
            parameters: {
                q: A,
                mode: B
            },
            onSuccess: this.handleSearchResult.bind(this),
            onFailure: this.handleFailure.bind(this)
        })
    },
    handleSearchResult: function(A) {
        var B = A.responseJSON;
        if (B.valid == true) {
            this.searchResult(B.mode, B.content)
        } else {
            this.handleFailure(A)
        }
    },
    searchResult: function(C, B) {
        this.updateResult(C, B);
        if (!this.selectedElement) {
            this.selectFirst(C)
        }
        var A = C + "~~" + this.lastSearch;
        if (!this.results.get(A)) {
            this.results.set(A, B)
        }
    },
    handleFailure: function(A) {
        var B = "error";
        if (A) {
            if (A.responseJSON.content) {
                B = A.responseJSON.content
            } else {
                if (A.responseJSON.mode) {
                    this.updateResult(A.responseJSON.mode, "")
                }
            }
        }
        unotify(B)
    },
    stopRequests: function() {
        if (this.eventReq) {
            this.eventReq.transport.abort()
        }
        if (this.photoReq) {
            this.photoReq.transport.abort()
        }
        if (this.userReq) {
            this.userReq.transport.abort()
        }
    },
    updateResult: function(B, A) {
        this.resBox.down("div#sr_" + B).update(A)
    },
    navigate: function(C) {
        if (!this.resBox.visible() || !this.selectedElement) {
            this.navHandler.stop();
            this.hideHandler.stop();
            return
        }
        var E = null;
        switch (C.keyCode) {
            case Event.KEY_LEFT:
            case Event.KEY_RIGHT:
                var A = this.findNextColumn(C.keyCode);
                if (A) {
                    var D = this.selectedElement.previousSiblings().length;
                    E = A.down("li.clearfix", D) || A.select("li.clearfix").last()
                }
                break;
            case Event.KEY_DOWN:
                E = this.selectedElement.next() || this.selectedElement.siblings().first();
                break;
            case Event.KEY_UP:
                E = this.selectedElement.previous() || this.selectedElement.siblings().last();
                break;
            case Event.KEY_RETURN:
                var B = this.selectedElement.down("a").readAttribute("href");
                if (B) {
                    window.location.href = B
                }
                break;
            default:
                return
        }
        if (E) {
            C.stop();
            this.select(E)
        }
    },
    findNextColumn: function(B) {
        var C;
        var A = this.selectedElement.up("div.col");
        if (A) {
            if (B == Event.KEY_LEFT) {
                C = A.previous() || $("sResult").childElements().last()
            } else {
                C = A.next() || $("sResult").firstDescendant()
            }
        }
        return C
    },
    select: function(A) {
        if (this.selectedElement) {
            this.selectedElement.toggleClassName(this.options.selectedClass)
        }
        this.selectedElement = A;
        this.selectedElement.toggleClassName(this.options.selectedClass)
    },
    selectFirst: function(B) {
        var A = $("sr_" + B).down("li.clearfix");
        if (A) {
            this.selectedElement = A;
            A.toggleClassName(this.options.selectedClass)
        }
    },
    showResBox: function() {
        this.resBox.show();
        if (this.hideHandler == null) {
            this.hideHandler = $(document).on("click", this.hideResBox.bindAsEventListener(this));
            $(document).on("touchend", this.hideResBox.bindAsEventListener(this))
        } else {
            this.hideHandler.start()
        }
        if (this.navHandler == null) {
            this.navHandler = $(document).on("keydown", this.navigate.bindAsEventListener(this))
        } else {
            this.navHandler.start()
        }
    },
    hideResBox: function(A) {
        if (A && A.type == "click") {
            if ((A.findElement() == this.input) || (A.findElement("div#" + this.resBox.id) == this.resBox)) {
                return
            }
        }
        this.resBox.hide();
        this.stopRequests();
        this.hideHandler.stop();
        this.navHandler.stop();
        this.input.blur()
    }
});
var Suggest_Template = new Template('<li><a #{style} title="#{n1}" data-uid="#{key}" data-udata=\'#{jsonObject}\'>#{n1} <span style="color:#ccc;">#{n2}</span></a></li>');
var Suggest = Class.create({
    options: {
        callBack: null,
        sibling: null,
        limit: 10,
        onSelectClose: true,
        onEmptyClickSuggest: false,
        baseUrl: "/ajax/friendship/suggestFriend",
        selectedClass: "selected",
        mode: "all",
        lastValue: null,
        additionalStyle: ""
    },
    initialize: function(A, B) {
        Object.extend(this.options, B || {});
        this.baseUrl = this.options.baseUrl;
        this.callBack = this.options.callBack;
        this.lastValue = this.options.lastValue;
        this.sibling = this.options.sibling;
        this.limit = this.options.limit;
        this.onEmptyClickSuggest = this.options.onEmptyClickSuggest;
        this.additionalStyle = this.options.additionalStyle;
        this.selected = null;
        this.valueInserted = null;
        if (!$(A)) {
            throw new Error("Suggest could not be initialized, no input element found!")
        }
        this.input = $(A);
        if (!$(this.sibling)) {
            this.sibling = this.input
        }
        if (this.input.value.trim()) {
            this.valueInserted = this.input.value.trim()
        }
        this.sibling = $(this.sibling);
        this.start();
        this.selectHandler = this.list.observe("click", this.handleSelect.bind(this));
        this.clickHandler = this.sibling.up("form").observe("click", this.handleClick.bind(this));
        this.focusHandler = this.input.observe("focus", this.handleClick.bind(this));
        this.keyHandler = $(document).on("keydown", this.handleKey.bindAsEventListener(this));
        this.inputFocusAttribute = this.input.readAttribute("onfocus");
        this.input.removeAttribute("onfocus");
        this.sCache = new Hash()
    },
    destroy: function() {
        this.observer = null;
        this.container.remove();
        this.list.remove();
        this.sCache = null
    },
    handleClick: function(C) {
        var B = C.findElement();
        if (B == this.input) {
            var A = B.value.trim();
            if (this.onEmptyClickSuggest && ((A == "") || (this.valueInserted && A == this.valueInserted))) {
                if (this.valueInserted) {
                    this.input.select();
                    this.valueInserted = null
                }
                this.suggest("")
            }
            if (A != "") {
                this.container.show()
            }
            return false
        } else {
            if (B.up("ul") == this.list) {
                return
            }
        }
        this.container.hide()
    },
    handleSelect: function(B) {
        var A = B.findElement("li").down("a");
        this.select(A);
        return
    },
    select: function(B) {
        var A = B.readAttribute("data-uid");
        var C = B.readAttribute("data-udata");
        if (A) {
            this.callBack(A, C.evalJSON());
            if (this.options.onSelectClose) {
                this.container.hide()
            }
        }
    },
    start: function(A) {
        this.createDom();
        this.observer = new AjaxSearch.Observer(this.input, 0.4, this.checkSearch.bind(this))
    },
    createDom: function() {
        var A = "";
        if (this.additionalStyle == "") {
            var A = "width:160px;"
        }
        this.container = new Element("div", {
            id: "sC_" + this.input.id,
            style: "overflow-y:auto; display:none;" + A + this.additionalStyle,
            "class": "searchSuggestios"
        });
        this.list = new Element("ul", {
            "class": "ul-default"
        });
        this.container.insert(this.list);
        this.sibling.insert({
            after: this.container
        })
    },
    checkSearch: function(A, B) {
        if (B == this.valueInserted) {
            return
        }
        if (!B) {
            this.list.update();
            this.container.hide();
            return
        }
        this.suggest(B)
    },
    suggest: function(B) {
        this.lastValue = B;
        var A = this.sCache.get(B);
        if (A) {
            this.list.update(A);
            this.container.show();
            this.finishResList();
            return
        }
        this.loadSuggestions(B)
    },
    loadSuggestions: function(A) {
        if (this.req) {
            this.req.transport.abort()
        }
        this.req = new Ajax.Request(this.baseUrl, {
            parameters: {
                value: A,
                mode: this.options.mode,
                suggall: (this.options.mode == "friends") ? 0 : 1,
                limit: this.limit
            },
            onLoading: function() {
                this.list.setOpacity(0.4)
            }.bind(this),
            onSuccess: this.handleResult.bind(this),
            onFailure: this.handleFailure.bind(this),
            onComplete: this.finished.bind(this)
        })
    },
    handleResult: function(A) {
        var B = A.responseJSON;
        if (B.valid) {
            if (B.data && !Object.isArray(B.data)) {
                this.evaluateResponse(B.data);
                if (this.lastValue) {
                    this.sCache.set(this.lastValue, this.list.innerHTML);
                    this.lastValue = null
                }
            } else {
                this.list.update();
                this.container.hide()
            }
        } else {
            this.handleFailure(A)
        }
    },
    evaluateResponse: function(B) {
        if (Object.isArray(B) && !B.size()) {
            return false
        }
        var C = new Array();
        C = $H(B).collect(function(E) {
            var G = E.value;
            var D = Object.toJSON(G);
            var F = "";
            if (G.f1 == true) {
                F = ' style="color:#008048;"'
            }
            G.n2 = G.n2 ? "(" + G.n2 + ")" : "";
            var H = Object.extend(G, {
                style: F,
                key: E.key,
                jsonObject: D
            });
            return Suggest_Template.evaluate(H)
        }.bind(this));
        var A = C.length;
        if (A) {
            if (A > 8) {
                this.container.setStyle({
                    overflowY: "scroll",
                    maxHeight: "220px"
                })
            } else {
                this.container.setStyle({
                    overflowY: "auto"
                })
            }
            this.list.update(C.join(" "));
            this.container.show();
            this.finishResList()
        }
    },
    finishResList: function() {
        var A = this.list.down("li");
        if (A) {
            this.selected = A;
            A.addClassName(this.options.selectedClass)
        }
    },
    handleKey: function(A) {
        if (!this.container.visible() || !this.selected) {
            return true
        }
        var B = null;
        switch (A.keyCode) {
            case Event.KEY_RETURN:
                this.select(this.selected.down("a"));
                return true;
            case Event.KEY_DOWN:
            case Event.KEY_RIGHT:
                B = this.selected.next() || this.selected.siblings().first();
                break;
            case Event.KEY_UP:
            case Event.KEY_LEFT:
                B = this.selected.previous() || this.selected.siblings().last();
                break;
            default:
                return
        }
        if (B) {
            this.markElement(B)
        }
    },
    markElement: function(A) {
        if (this.selected) {
            this.selected.toggleClassName(this.options.selectedClass)
        }
        this.selected = A;
        this.selected.toggleClassName(this.options.selectedClass)
    },
    handleFailure: function(A) {
        unotify("Error loading suggestions")
    },
    finished: function() {
        this.req = null;
        this.list.setOpacity(1);
        Util.oewaReload("user_name_suggest")
    }
});
AjaxSearch.Observer = Class.create(Abstract.TimedObserver, {
    getValue: function() {
        return Form.Element.getValue(this.element).trim()
    }
});
var Comments = {
    cAreas: new Hash(),
    ignoreText: "Dein Kommentar",
    init: function(D) {
        var G = this.buildCid(D);
        if (this.cAreas.get(G)) {}
        var F = $("c_" + G);
        if (!F) {
            throw new Error("Main Comment Div not found " + G)
        }
        var A = $("cf_" + G);
        if (A) {
            A.observe("blur", this.handleBlur.bindAsEventListener(this));
            A.observe("focus", this.handleFocus.bindAsEventListener(this));
            var C = this;
            A.observe("keydown", function(H) {
                if (H.keyCode == Event.KEY_RETURN) {
                    C.write(G)
                }
                return false
            });
            var B = $("cb_" + G);
            if (B) {
                B.observe("click", function(H) {
                    return C.write(G)
                })
            }
        }
        var E = {
            id: G,
            commentableId: D.commentableId,
            commentableType: D.commentableType,
            ownerId: D.ownerId,
            ownerType: D.ownerType,
            eventId: 0,
            page: 1,
            loggedIn: D.loggedIn || !Config.str.streamBlind,
            comments: new Array()
        };
        this.cAreas.set(G, E)
    },
    write: function(E) {
        var C = this.cAreas.get(E);
        if (!C) {
            throw new Error("Error. CommentAreaObject not found or not registered : " + E)
        }
        if (!C.loggedIn) {
            var D = Szene1Translator.translate("youHaveToBeLoggedInToComment");
            Notifications.createNotification(null, null, D).show();
            return
        }
        var A = $("cf_" + E);
        var B = $F(A).trim();
        if ((B == this.ignoreText) || B == "") {
            A.focus();
            return false
        }
        this.send(B, C)
    },
    send: function(F, D) {
        var A = Loader.get("24");
        $("commentOutput_" + D.id).insert({
            top: A
        });

        function B(G) {
            Notifications.createNotification(null, null, G.responseJSON.error).show();
            Loader.remove()
        }

        function E(H) {
            if (H.responseJSON.valid != true) {
                B(H);
                return
            }($$(".ccDisplay")).each(function(M) {
                var L = parseInt(M.textContent);
                M.update(L + 1)
            });
            if ($("nocomments_" + D.id)) {
                $("nocomments_" + D.id).remove()
            }
            var I = false;
            try {
                if (!RealTime.instance().haveEvDataId(H.responseJSON.dataid)) {
                    RealTime.instance().addEvDataId(H.responseJSON.dataid);
                    I = true
                }
            } catch (J) {
                I = true
            }
            if (I) {
                $("commentOutput_" + D.id).insert({
                    top: H.responseJSON.html
                });
                var K = $("commentOutput_" + D.id).firstDescendant();
                var G = K.select("a.tooltip");
                G.invoke("tooltip")
            }
            $("cf_" + D.id).value = this.ignoreText;
            $("cf_" + D.id).blur();
            this.hideThumbAndButton($("cf_" + D.id));
            Util.oewaReload("comment_add");
            return false
        }
        var C = {
            commentableId: D.commentableId,
            commentableType: D.commentableType,
            ownerId: D.ownerId,
            ownerType: D.ownerType,
            commentText: F,
            ev_id: D.eventId
        };
        new Ajax.Request("/ajax/comment", {
            parameters: {
                mode: "add_comment",
                info: Object.toJSON(C)
            },
            onSuccess: E.bind(this),
            onFailure: B.bind(this),
            onComplete: function() {
                Loader.remove()
            }
        })
    },
    load: function(A) {
        var D = this.cAreas.get(A);
        if (!D) {
            throw new Error("Error, element with " + A + " not found")
        }
        var F = parseInt(D.page) + 1;
        var H = Loader.get("24");
        var E = $("pg_" + A);
        E.down("a").hide();
        E.insert({
            top: H
        });

        function G() {
            if (E) {
                E.down("a").show()
            }
            Loader.remove()
        }

        function B() {
            Notifications.createNotification(null, null, Szene1Translator.translate("error")).show();
            G()
        }

        function I(J) {
            if (J.responseJSON.valid != true) {
                B();
                return
            }
            $("commentOutput_" + A).insert({
                bottom: J.responseJSON.html
            });
            D.page = F;
            if (!parseInt(J.responseJSON.more)) {
                var K = $("pg_" + A);
                if (K) {
                    K.remove()
                }
            }
            G()
        }
        var C = {
            page: F,
            commentableId: D.commentableId,
            commentableType: D.commentableType,
            ownerId: D.ownerId,
            ownerType: D.ownerType
        };
        new Ajax.Request("/ajax/comment", {
            parameters: {
                mode: "reload_comments",
                info: Object.toJSON(C)
            },
            onSuccess: I.bind(this),
            onFailure: B.bind(this)
        })
    },
    deleteComment: function(B, A) {
        uconfirm("Willst du diesen Kommentar wirklich entfernen?", function() {
            Comments.doDeleteComment(B, A)
        }, "Löschen bestätigen")
    },
    doDeleteComment: function(A, G) {
        var I = $("commentOutput_" + G).down("li#c_" + A);
        var D = this.cAreas.get(G);
        if (!I || !D) {
            B();
            return
        }
        var F = Loader.get("24");
        var E = I.innerHTML;
        I.update(F);

        function B(J) {
            Notifications.createNotification(null, null, Szene1Translator.translate("error")).show();
            I.update(E)
        }

        function H(J) {
            if (J.responseJSON.valid != true) {
                B(J);
                return
            }($$(".ccDisplay")).each(function(L) {
                var K = parseInt(L.textContent);
                L.update(K - 1)
            });
            finish = function() {};
            new Effect.DropOut(I, {
                afterFinish: finish.bind(this)
            });
            Util.oewaReload("comment_delete")
        }
        var C = {
            commentId: A,
            commentableId: D.commentableId,
            commentableType: D.commentableType,
            ownerId: D.ownerId,
            ownerType: D.ownerType
        };
        new Ajax.Request("/ajax/comment", {
            parameters: {
                mode: "delete_comment",
                info: Object.toJSON(C)
            },
            onSuccess: H.bind(this),
            onFailure: B.bind(this)
        })
    },
    buildCid: function(A) {
        return A.commentableId + "_" + A.commentableType
    },
    handleBlur: function(B) {
        var A = Event.findElement(B);
        A.className = "commentfield";
        if ($F(A) == "") {
            A.value = this.ignoreText
        }
    },
    handleFocus: function(B) {
        var A = Event.findElement(B);
        A.className = "commentfield_active";
        if ($F(A) == this.ignoreText) {
            A.value = ""
        }
    },
    showThumbAndButton: function(A) {
        A.up("div.szene1_comments").down("a[data-quickpage]").show();
        A.next().show()
    },
    hideThumbAndButton: function(A) {
        A.up("div.szene1_comments").down("a[data-quickpage]").hide();
        A.next().hide()
    }
};
Request = function() {
    var B = Loader.get();

    function D() {
        B = B || '<span class="ajax_loading">' + Szene1Translator.translate("loadingDots") + "</span>";
        return B
    }

    function A(E) {
        element = $(E);
        element.observe("click", function(G) {
            var F = G.findElement(".actions a");
            if (!F || !F.readAttribute("href")) {
                return false
            }
            if (F.readAttribute("href").include("decline")) {
                UI.Dialog.confirm("Willst du diese Anfrage ablehnen ?", function() {
                    Request.process(F)
                }, function() {
                    return false
                })
            } else {
                Request.process(F)
            }
            G.stop();
            return false
        })
    }

    function C(I) {
        var H = I.up("li").select("form");
        if (H.length > 0) {
            var J = H[0].serialize()
        }
        var E = D();
        unotify(E);
        var F = typeof(I.up("div.actions")) != "undefined";
        var G = new Ajax.Request(I.readAttribute("href"), {
            parameters: J,
            onSuccess: function(M) {
                unotify(M.responseText);
                if (F) {
                    var K = I.up("li");
                    K.remove()
                }
                var L = UI.UserPanel.reg.get("up-requests");
                if (L) {
                    L.hide();
                    L.lastLoaded = 0;
                    L.updateCounter(L.count - 1)
                }
            },
            onComplete: Util.oewaReload("user_handle_request")
        })
    }
    return {
        handleActions: A,
        process: C
    }
}();
var inviteopen = false;
EventInvite = function() {
    function A(B) {
        new Ajax.Request("/ajax/user/eventinvite", {
            parameters: {
                mode: "invite",
                typeId: B
            },
            showLoader: true,
            onSuccess: function(C) {
                if (inviteopen) {
                    return
                }
                var E = UI.Dialog.fromString(C.responseJSON.content, {
                    modal: true
                }).show();
                inviteopen = true;
                var D = new UI.UserFacelist("userId");
                $("inviteForm").observe("submit", function(L) {
                    L.stop();
                    var J = L.findElement("form"),
                        M = Loader.get(),
                        G = new Element("span", {
                            "class": "attention"
                        });
                    G.update(Szene1Translator.translate("youHaveNoFriendsSelectedForInvite"));
                    var H = D.getSelected();
                    if (H.length == 0) {
                        attention = G.wrap("div");
                        J.insert({
                            top: attention
                        });
                        (function(N) {
                            attention.remove();
                            N.stop()
                        }.delay(4));
                        return
                    }
                    var K = {
                        userId: H,
                        typeId: B
                    };
                    J.insert(M);
                    D.disable();
                    var F = function() {
                        unotify("errorOcurred")
                    };
                    var I = new Ajax.Request("/ajax/user/eventinvite", {
                        parameters: {
                            data: Object.toJSON(K)
                        },
                        onSuccess: function(N) {
                            if (!N.responseJSON.valid) {
                                F();
                                return
                            }
                            unotify(N.responseJSON.content);
                            D.clearSelected();
                            (function(O) {
                                E.remove()
                            }.delay(1))
                        },
                        onFailure: F
                    })
                })
            }
        });
        Util.oewaReload("user_event_invite")
    }
    return {
        invite: A
    }
}();
$(document).observe("click", function(B) {
    var A = B.findElement("a.event_invite_btn");
    if (!A) {
        return
    }
    inviteopen = false;
    if ($("dialog-friendsInvite")) {
        $("dialog-friendsInvite").style.display = "block";
        inviteopen = true
    }
    EventInvite.invite(A.readAttribute("data-type-id"));
    B.stop()
});
$(document).observe("dom:loaded", function(A) {
    var B = $$(".requests");
    if (B.length > 0) {
        B.each(function(C) {
            Request.handleActions(C)
        })
    }
});
var Szene1GeoMatch = {
    requestUrl: "/ajax/geo/match",
    notifyBoxContentId: "geoMatchNotify",
    load: function(searchString, param) {
        var defaults = {
            mapHeight: 200,
            mapWidth: 200,
            mapZoomLevel: 11,
            ajaxCallback: false
        };
        var mapSettings = Object.extend(defaults, param || {});
        var postBodyArgs = "lookup=" + encodeURIComponent(searchString) + "&mapzoom=" + mapSettings.mapZoomLevel + "&mapwidth=" + mapSettings.mapWidth + "&mapheight=" + mapSettings.mapHeight + "&callback=" + encodeURIComponent(mapSettings.ajaxCallback);
        if (!mapSettings.ajaxCallback) {
            var translationReq = new Ajax.Request(Szene1GeoMatch.requestUrl, {
                asynchronous: false,
                method: "post",
                postBody: postBodyArgs
            });
            var json = unescape(translationReq.transport.responseText);
            if (json.substring(0, 1) != "{") {
                return false
            }
            var srvObj = eval("(" + json + ")");
            return Szene1GeoMatch.buildGeoObject(srvObj)
        } else {
            Szene1GeoMatch.showLoadingDots();
            new Ajax.Request(Szene1GeoMatch.requestUrl, {
                method: "post",
                postBody: postBodyArgs,
                onSuccess: function(t) {
                    var json = unescape(t.responseText);
                    if (json.substring(0, 1) != "{") {
                        Szene1GeoMatch.showError();
                        return false
                    }
                    var srvObj = eval("(" + json + ")");
                    var geoObj = Szene1GeoMatch.buildGeoObject(srvObj);
                    Szene1GeoMatch.removeNotifyBoxes();
                    if ((srvObj instanceof Object) && !srvObj.callback.empty()) {
                        eval(srvObj.callback + "(geoObj)")
                    } else {
                        Szene1GeoMatch.showError()
                    }
                },
                onFailure: function(t) {
                    Szene1GeoMatch.showError()
                }
            })
        }
    },
    buildGeoObject: function(A) {
        var B = false;
        if (!(A instanceof Object) || A.error) {
            return false
        } else {
            try {
                B = new Szene1GeoResult({
                    districtName: (A.geoDistrictName) ? A.geoDistrictName : null,
                    districtId: (A.geoDistrictId) ? A.geoDistrictId : null,
                    provinceName: (A.geoProvinceName) ? A.geoProvinceName : null,
                    provinceId: (A.geoProvinceId) ? A.geoProvinceId : null,
                    countryName: (A.geoCountryName) ? A.geoCountryName : null,
                    countryCode: (A.geoCountry) ? A.geoCountry : null,
                    latitude: (A.geoLatitude) ? A.geoLatitude : null,
                    longitude: (A.geoLongitude) ? A.geoLongitude : null,
                    mapUrl: (A.mapUrl) ? A.mapUrl : null
                })
            } catch (C) {}
        }
        return B
    },
    showNotify: function(A) {
        if ((typeof SimpleWindowManager) == "object") {
            SimpleWindowManager.generateContentBox(A, Szene1GeoMatch.notifyBoxContentId)
        }
        return
    },
    showError: function(A) {
        if ((typeof SimpleWindowManager) == "object") {
            SimpleWindowManager.printErrorMessage(((A) ? A : Szene1Translator.translate("anErrorOccurred", null)), Szene1GeoMatch.notifyBoxContentId, true)
        } else {
            alert(A)
        }
        return
    },
    showLoadingDots: function() {
        if ((typeof SimpleWindowManager) == "object") {
            SimpleWindowManager.generateLoadingBox(Szene1GeoMatch.notifyBoxContentId)
        }
        return
    },
    removeNotifyBoxes: function() {
        if ((typeof SimpleWindowManager) == "object") {
            SimpleWindowManager.clearWindow()
        }
        return
    }
};
var Szene1GeoResult = Class.create();
Szene1GeoResult.prototype = {
    initialize: function(C) {
        var B = {
            districtName: null,
            districtId: 0,
            provinceName: null,
            provinceId: 0,
            countryName: null,
            countryCode: "DE",
            longitude: 0,
            latitude: 0,
            mapUrl: null
        };
        var A = Object.extend(B, C || {});
        this.geoDistrictName = A.districtName;
        this.geoDistrictId = parseInt(A.districtId);
        this.geoProvinceName = A.provinceName;
        this.geoProvinceId = parseInt(A.provinceId);
        this.geoCountryName = A.countryName;
        this.geoCountryCode = A.countryCode;
        this.geoLongitude = parseFloat(A.longitude);
        this.geoLatitude = parseFloat(A.latitude);
        this.geoMapUrl = A.mapUrl
    },
    isValid: function() {
        if (this.geoDistrictId > 0 && this.geoProvinceId > 0 && this.geoCountryCode.length == 2 && this.geoLongitude != 0 && this.geoLatitude != 0) {
            return true
        } else {
            return false
        }
    },
    getDistrictName: function() {
        return this.geoDistrictName
    },
    getDistrictId: function() {
        return this.geoDistrictId
    },
    getProvinceName: function() {
        return this.geoProvinceName
    },
    getProvinceId: function() {
        return this.geoProvinceId
    },
    getCountryName: function() {
        return this.geoCountryName
    },
    getCountryCode: function() {
        return this.geoCountryCode
    },
    getLongitude: function() {
        return this.geoLongitude
    },
    getLatitude: function() {
        return this.geoLatitude
    },
    getMapUrl: function() {
        return this.geoMapUrl
    }
};
var Friendship = Class.create({
    dialog: null,
    initialize: function(B, A) {
        var C = {};
        this.options = Object.extend(C, A || {});
        this.addUrl = "/ajax/friendship/add"
    },
    add: function(A) {
        var B = {
            user: A
        };
        this.request = new Ajax.Request(this.addUrl, {
            parameters: B,
            method: "post",
            onSuccess: this.handleAddResponse.bind(this),
            onFailure: this.handleFailure.bind(this),
            onComplete: Util.oewaReload("friend_add_request")
        })
    },
    handleAddResponse: function(A) {
        if (!A.responseJSON.showLogin) {
            if (!A.responseJSON.valid) {
                if (A.responseJSON.progress) {
                    Friendship.dialog = UI.Dialog.fromString(A.responseJSON.content, {
                        modal: true,
                        drag: true,
                        hideOnClick: false
                    }).show()
                } else {
                    this.handleFailure(A)
                }
                return false
            }
            Friendship.dialog = UI.Dialog.fromString(A.responseJSON.content, {
                modal: true,
                hideOnClick: true
            });
            Friendship.dialog.show()
        }
    },
    handleFailure: function(A) {
        unotify(A.responseJSON.content)
    }
});
Friendship.move = function(B) {
    var A = "/ajax/friendship/friendmove";
    Friendship.groupEditCall(A, {
        user: B,
        mode: "form"
    }, true)
};
Friendship.saveMove = function(B) {
    var A = "/ajax/friendship/friendmove";
    Friendship.groupEditCall(A, $(B).serialize(true), false, function(E) {
        unotify(E.content);
        var D = $("uf_" + E.editResult.fid);
        if (D) {
            var C = $("grp_" + E.editResult.gid);
            if (C.down("span.info")) {
                C.down("span.info").remove()
            }
            C.insert(D.remove())
        }
    })
};
Friendship.createGroup = function(A) {
    var B = '<div class="box-dynamic box-ajax"><h3>Gruppe erstellen</h3>';
    B += '<a class="icon-16-delete" data-close="kill" title="close"></a>';
    B += '<div class="box-inner box-form">';
    B += "<b>Gruppenname:</b>";
    B += '<input value="" maxlength="25" name="_newgroupName" id="_newgroupName" />';
    B += '<br/><br/><a id="_docreatenewgroup" class="button" >SPEICHERN</a></div>';
    var C = UI.Dialog.fromString(B, {
        modal: true,
        hideOnClick: true,
        draggable: true
    });
    C.show();
    $("_docreatenewgroup").on("click", function() {
        Friendship.groupEditCall("/ajax/friendship/group_create", {
            groupName: $F("_newgroupName")
        }, false, function(D) {
            if (D.content) {
                unotify(D.content)
            }
            if (D.editResult.html) {
                window.location.reload();
                $(A).insert(D.editResult.html)
            }
            C.close()
        })
    })
};
Friendship.deleteGroup = function(B) {
    var A = $("grp_" + B);
    var C = "<p>" + Szene1Translator.translate("doYouReallyWantToDeleteThisGroup", null) + "</p>";
    if (A.down("li.user")) {
        C += "<br /><p>" + Szene1Translator.translate("thisGroupStillHasMembers", null) + "</p>"
    }
    UI.Dialog.confirm(C, function() {
        D(B)
    }.bind(this));
    var D = function(E) {
        Friendship.groupEditCall("/ajax/friendship/group_delete", {
            groupId: E
        }, false, function(F) {
            unotify(F.content);
            $("grp_" + F.editResult.id).remove()
        })
    }
};
Friendship.groupRename = function(C, B) {
    var A = "/ajax/friendship/group_ren";
    Friendship.groupEditCall(A, {
        groupName: $(C).textContent,
        groupId: B,
        mode: "form"
    }, true)
};
Friendship.saveGroupName = function(B) {
    var A = "/ajax/friendship/group_ren";
    Friendship.groupEditCall(A, $(B).serialize(true), false, function(C) {
        unotify(C.content);
        $("gn_" + C.editResult.id).textContent = C.editResult.name
    })
};
Friendship.groupEditCall = function(B, E, G, A) {
    var D = {
        parameters: E,
        method: "post",
        onSuccess: C,
        onFailure: F
    };
    if (!G) {
        D.onComplete = function() {
            if (Friendship.groupEditDialog) {
                Friendship.groupEditDialog.close();
                Friendship.groupEditDialog = null
            }
        }
    }
    new Ajax.Request(B, D);

    function C(H) {
        if (!H.responseJSON.valid) {
            F(H)
        }
        if (G) {
            Friendship.groupEditDialog = UI.Dialog.fromString(H.responseJSON.content, {
                modal: true,
                hideOnClick: true,
                draggable: true
            });
            Friendship.groupEditDialog.show()
        } else {
            if (typeof A == "function") {
                A(H.responseJSON)
            }
        }
        Util.oewaReload("friendship_group_" + B.split("/").last)
    }

    function F(I) {
        var H = "Error, please try again";
        if (I.responseJSON.content) {
            H = I.responseJSON.content
        }
        unotify(H)
    }
};
Friendship.formSubmit = function(B) {
    var A = "/ajax/friendship/submit";
    new Ajax.Request(A, {
        parameters: $(B).up("form").serialize(true),
        method: "post",
        onSuccess: C,
        onFailure: D,
        onComplete: function() {
            if (Friendship.dialog) {
                Friendship.dialog.close()
            }
        }
    });

    function C(E) {
        unotify(E.responseJSON.content)
    }

    function D(F) {
        var E = "Error, please try again";
        if (F.responseJSON.content) {
            E = F.responseJSON.content
        }
        unotify(E)
    }
};
var Ignorelist = {
    dialog: null,
    url: "/ajax/user/ignorelist/",
    ignorelistAction: function(E) {
        var D, G, I, A, J;
        var C = E.id;
        C = C.split("#");
        D = C[1];
        G = C[2];
        A = "/ajax/user/ignorelist/";
        if (C[3]) {
            I = C[3]
        } else {
            if ($("ignorelist_user_" + G)) {
                I = $("ignorelist_user#" + G).innerHTML
            } else {
                I = ""
            }
        }
        if (D == "delete") {
            UI.Dialog.confirm($(E).readAttribute("title"), function() {
                H()
            });
            var H = function() {
                new Ajax.Request(A + "delete", {
                    method: "post",
                    postBody: "user=" + G,
                    onSuccess: function(K) {
                        if (K.responseJSON.valid == true) {
                            unotify(Szene1Translator.translate("XWasDeletedFromIgnorelist", I));
                            if ($("ignore_" + G)) {
                                $("ignore_" + G).remove()
                            }
                        } else {
                            B()
                        }
                    },
                    onFailure: B
                })
            }
        } else {
            if (D == "newuser") {
                new Ajax.Request(A + "newuserform", {
                    method: "post",
                    postBody: "username=" + I,
                    onSuccess: F,
                    onFailure: B
                })
            }
        }

        function F(K) {
            var L = K.responseJSON;
            if (L.valid == true) {
                Ignorelist.dialog = UI.Dialog.fromString(L.content, {
                    modal: true,
                    hideOnClick: true
                }).show()
            } else {
                B()
            }
        }

        function B() {
            unotify(Szene1Translator.translate("errorOnIgnorelistWhileInteractingWithUserX", I))
        }
    },
    ignorelistRemove: function(B) {
        var A = $("ignoreUserId");
        new Ajax.Request("/ajax/user/ignorelist/delete", {
            method: "post",
            postBody: "user=" + A.value,
            onSuccess: function(C) {
                if (C.responseText > 0) {
                    unotify(Szene1Translator.translate("deleted", null))
                } else {
                    unotify(Szene1Translator.translate("error", null))
                }
            },
            onFailure: function() {
                unotify(Szene1Translator.translate("error", null))
            },
            onComplete: Util.oewaReload("user_ignorelist_remove")
        });
        new Effect.Fade($("notificationbox_container"), {
            duration: 1
        })
    },
    ignorelistAdd: function(C) {
        C = $(C);
        var B = "";
        var F = /^([a-zA-Z0-9_-]{3,})$/;
        var A = false;
        if ($("ignoreList")) {
            var H = $("content").select(".ignored_users", $("ignoreList"));
            H.each(function(I) {
                if (I.innerHTML.toLowerCase() == $F("ignore_user").toLowerCase()) {
                    A = true
                }
            })
        }
        if (A) {
            unotify(Szene1Translator.translate("youAlreadyHaveThisUserOnTheIgnorelist", null))
        } else {
            if (F.match($F("ignore_user"))) {
                B = ($F("notify_yes") == "y") ? $F("notify_yes") : "";
                B += ($F("notify_no") == "n") ? $F("notify_no") : "";
                if (B == "y" || B == "n") {
                    new Ajax.Request("/ajax/user/ignorelist/getuser", {
                        method: "post",
                        postBody: "user=" + $F("ignore_user"),
                        onSuccess: function(I) {
                            E(I)
                        },
                        onFailure: G
                    })
                } else {
                    unotify(Szene1Translator.translate("pleaseSpecifyWhetherTheUserShouldBeNotified", null))
                }
            } else {
                D()
            }
        }

        function E(I) {
            if (I.responseJSON && (I.responseJSON.valid == true)) {
                var J = I.responseJSON;
                var K = {
                    user: J.content,
                    notify: B
                };
                new Ajax.Request("/ajax/user/ignorelist/adduser", {
                    method: "post",
                    parameters: K,
                    onSuccess: function(L) {
                        if (L.responseJSON.valid == true) {
                            if (L.responseJSON.content) {
                                if ($("ignorelistCont")) {
                                    $("ignorelistCont").insert({
                                        bottom: L.responseJSON.content
                                    })
                                }
                                unotify(Szene1Translator.translate("userAddedToIgnoreListSuccessfully", null))
                            } else {
                                if (L.responseJSON.content == "-1") {
                                    unotify(Szene1Translator.translate("userIsOnTheGlobalWhitelistAndCantBeIgnored", null));
                                    $("ignore_user").clear()
                                }
                            }
                        } else {
                            G()
                        }
                    },
                    onFailure: G,
                    onComplete: function() {
                        Util.oewaReload("user_ignorelist_remove");
                        if (Ignorelist.dialog) {
                            Ignorelist.dialog.close()
                        }
                    }
                })
            } else {
                D()
            }
        }

        function D() {
            unotify(Szene1Translator.translate("pleaseSpecifyUserToBeIgnored", null));
            $("ignore_user").focus()
        }

        function G() {
            unotify(Szene1Translator.translate("errorSavingUserOnIgnorelist", null))
        }
    }
};
var UserActions = {
    winkAt: function(A, B, C) {
        new Ajax.Request("/ajax/singles/action", {
            parameters: {
                sid: A,
                action: B
            },
            showLoader: true,
            onSuccess: function(E) {
                var D = E.responseJSON;
                if (D.valid == true) {
                    if (D.content) {
                        uconfirm(D.content, function() {
                            if (typeof Singles != "undefined" && typeof Singles.carousel != "undefined") {
                                Singles.carousel.next()
                            }
                        }, false, false, {}, true)
                    }
                    Util.oewaReload("user_wink_at", true, true);
                    Util.trackGaqEvent("UserWink", "_at_", "WS_" + window.location.href)
                } else {
                    if (D.content) {
                        ualert(D.content)
                    }
                }
            },
            onComplete: function(D) {
                if (typeof C == "function") {
                    C()
                }
            },
            onFailure: function(D) {
                ualert("Es ist ein Fehler aufgetreten, bitte versuch es noch einmal")
            }
        })
    },
    validatePassword: function(B, A) {
        B = $(B);
        A = $(A);
        lenPwd1 = B.value.length;
        lenPwd2 = A.value.length;
        if (lenPwd1 < 6) {
            UserActions.outputValidationNotify(Szene1Translator.translate("passwordToShort"), B);
            return false
        } else {
            if (lenPwd1 > 0 && lenPwd2 > 0 && B.value != A.value) {
                UserActions.outputValidationNotify(Szene1Translator.translate("passwordsDontMatch"), A);
                return false
            } else {
                UserActions.clearNotifies(B.id);
                UserActions.clearNotifies(A.id);
                return true
            }
        }
    },
    validateEmail: function(emailElement) {
        emailElement = $(emailElement);
        if (emailElement.value.empty() || !/\w{1,}[@][\w\-]{1,}([.]([\w\-]{1,})){1,3}$/.test(emailElement.value)) {
            UserActions.outputValidationNotify(Szene1Translator.translate("pleaseProvideAValidEmailAddress"), emailElement)
        } else {
            new Ajax.Request("/ajax/user/validate", {
                method: "post",
                postBody: "check=email&name=" + emailElement.value + "&field=" + emailElement.id,
                onSuccess: function(t) {
                    emailElement.writeAttribute("rel", "0");
                    var json = unescape(t.responseText);
                    if (json.substring(0, 1) != "{") {
                        UserActions.outputValidationNotify(Szene1Translator.translate("Ajax error while loading..."), emailElement);
                        return false
                    }
                    var srvObj = eval("(" + json + ")");
                    if ((srvObj instanceof Object) && srvObj.valid < 1) {
                        if (srvObj.valid == -1) {
                            var str = "Wegwerf-E-Mail-Adressen können nicht verwendet werden."
                        } else {
                            str = Szene1Translator.translate("emailAddressAlreadyInUse") + '<br/>Password vergessen? klicke <a href="javascript:;" onclick="Login.doSendPassword(\'passwordForm\');" title=""><strong>hier</strong></a>'
                        }
                        UserActions.outputValidationNotify(str, emailElement);
                        return false
                    }
                    emailElement.writeAttribute("rel", "1");
                    return true
                }
            });
            UserActions.clearNotifies(emailElement.id)
        }
    },
    validateUsername: function(usernameElement, mode) {
        usernameElement = $(usernameElement);
        var eId = usernameElement.id;
        var eValue = usernameElement.value;
        if (mode) {
            eValue = eValue.slice(0, eValue.length - 1);
            eValue = eValue.replace(".", "_")
        }
        if ((eValue.empty() || !/^[a-zA-Z0-9_-]{3,}$/.test(eValue)) && !mode) {
            UserActions.outputValidationNotify(Szene1Translator.translate("pleaseEnterAValidUserName"), usernameElement)
        } else {
            new Ajax.Request("/ajax/user/validate", {
                method: "post",
                postBody: "check=username&name=" + eValue + "&field=" + eId,
                onSuccess: function(t) {
                    var json = unescape(t.responseText);
                    if (json.substring(0, 1) != "{" && !mode) {
                        UserActions.outputValidationNotify(Szene1Translator.translate("Ajax error while loading..."), usernameElement);
                        return false
                    }
                    var srvObj = eval("(" + json + ")");
                    if ((srvObj instanceof Object)) {
                        if (mode || srvObj.valid == 1) {
                            $("ajax_register_username").value = srvObj.suggestions[0]
                        } else {
                            UserActions.userNameSuggestion(srvObj.suggestions, srvObj.field, usernameElement)
                        }
                    }
                }
            });
            UserActions.clearNotifies(eId)
        }
    },
    userNameSuggestion: function(A, D, C, E) {
        var B = "" + Szene1Translator.translate("usernameAlreadyInUse") + " / " + Szene1Translator.translate("otherSamples") + ':<br /><ul class="ul-inline font-small" style="max-width:508px; _width:508px;">';
        for (count = 0; count < A.length; count += 1) {
            B += '<li class="mr"><a href="javascript:void(0);" title="' + A[count] + '" onclick="$(\'' + D + "').value = '" + A[count] + "';UserActions.clearNotifies(" + C.id + ');">' + A[count] + "</a></li>"
        }
        B += "</ul>";
        UserActions.outputValidationNotify(B, C)
    },
    outputValidationNotify: function(B, A) {
        if ((typeof SimpleWindowManager) == "object") {
            ualert(B)
        } else {}
        if ($("box-ajax-black-feedback")) {
            $("feedback-message").show();
            $("feedback-message").update(B);
            Effect.toggle("box-ajax-black-feedback", "appear")
        } else {
            if (!$(A.id + "_error")) {
                A.next("label").insert('<span class="error" id="' + A.id + '_error"><strong class="red-text">' + B + "</strong></span>")
            }
        }
    },
    clearNotifies: function(A) {
        if ($(A + "_error")) {
            $(A + "_error").remove()
        }
        if ($("box-ajax-black-feedback")) {
            $("box-ajax-black-feedback").hide()
        }
        return
    }
};
var Userprogress = {
    dialog: null,
    showAddress: function() {
        if ($("basedata_street").value.length > 0 && $("basedata_zip_code").value.length > 0 && $("basedata_canton").value.length > 0) {
            Userprogress.doCheckFormData()
        }
    },
    showGeoInfo: function(A) {
        if (A instanceof Szene1GeoResult && A.isValid()) {
            $("basedataCountryName").value = A.getCountryName();
            $("basedataProvinceName").value = A.getProvinceName();
            $("basedataDistrictName").value = A.getDistrictName();
            $("basedataCorrectAddressGiven").value = "yes";
            $("basedataCorrectAddressCheck").update("Ok");
            return true
        } else {
            $("basedataCorrectAddressCheck").update("");
            $("basedataNotify_InvalidAddress").show();
            return false
        }
    },
    checkGeoInfo: function(A) {
        console.log("checkGeoInfo");
        if (A instanceof Szene1GeoResult && A.isValid()) {
            $(document).fire("geocheck:valid");
            return true
        }
    },
    resetCheckFormPart: function() {
        $("basedataCorrectAddressGiven").value = ""
    },
    doCheckFormData: function(B) {
        $("basedataNotify_InvalidAddress").hide();
        $("basedataNotify_AllFields").hide();
        if ($("basedata_street").value.empty() || $("basedata_zip_code").value.empty() || $("basedata_canton").value.empty()) {
            $("basedataNotify_AllFields").show();
            return false
        }
        var A = "";
        if ($("basedata_zip_code").value.length > 0) {
            A += $("basedata_zip_code").value
        }
        if ($("basedata_canton").value.length > 0) {
            A += "+" + $("basedata_canton").value
        }
        if ($("basedata_street").value.length > 0) {
            A += "+" + $("basedata_street").value
        }
        var C = "Userprogress.showGeoInfo";
        if (B) {
            C = "Userprogress.checkGeoInfo"
        }
        Szene1GeoMatch.load(A, {
            mapWidth: 230,
            ajaxCallback: C
        })
    },
    checkprogress: function(D, E) {
        var C = true;
        var A = "/ajax/user/checkprogress";
        if (D == 1) {
            C = false
        }
        var B = "type=" + D;
        new Ajax.Request(A, {
            method: "post",
            postBody: B,
            onSuccess: function(F) {
                if (F.responseJSON.valid) {
                    Userprogress.dialog = UI.Dialog.fromString(F.responseJSON.content, {
                        modal: true,
                        hideOnClick: C,
                        drag: true
                    }).show();
                    return true
                }
                E();
                return false
            },
            onFailure: function(F) {
                unotify(Szene1Translator.translate("anErrorOccurred", null))
            }
        })
    },
    save: function() {
        var B;
        var D;
        var C;
        if ($("saveBasicDataSubmit")) {
            if (!$("basedataFormId").getElements().all(function(E) {
                    return E.present()
                })) {
                unotify(Szene1Translator.translate("haveToFillAllFields", null));
                return
            }
            if ($("basedata_zip_code")) {
                Userprogress.doCheckFormData(this);
                B = "&zip_code=" + $("basedata_zip_code").value + "&canton=" + $("basedata_canton").value + "&street=" + $("basedata_street").value + "&country=" + $("basedataCountryName").value + "&province=" + $("basedataProvinceName").value + "&district=" + $("basedataDistrictName").value
            }
            if ($("basedata_gender_male")) {
                if (!$("basedata_gender_male").checked && !$("basedata_gender_female").checked) {
                    unotify(Szene1Translator.translate("haveToFillAllFields", null));
                    return
                }
                if ($("basedata_gender_male").checked) {
                    D = $("basedata_gender_male").value
                }
                if ($("basedata_gender_female").checked) {
                    D = $("basedata_gender_female").value
                }
                C = $("register_birthdate_year").value + "-" + $("register_birthdate_month").value + "-" + $("register_birthdate_day").value;
                B = "gender=" + D + "&bday=" + C + "&forename=" + $("basedata_forename").value + "&surname=" + $("basedata_surname").value
            }
        }
        var A = "/ajax/user/progress";
        new Ajax.Request(A, {
            method: "post",
            postBody: B,
            onSuccess: function(E) {
                if (E.responseJSON.valid) {
                    if (Friendship.dialog) {
                        Friendship.dialog.close()
                    }
                    if (ajaxPNForm.dialog) {
                        ajaxPNForm.dialog.close()
                    }
                    if (Userprogress.dialog) {
                        Userprogress.dialog.close()
                    }
                }
            },
            onFailure: function(E) {
                unotify(Szene1Translator.translate("anErrorOccurred", null))
            }
        })
    },
    doCoReg: function(C) {
        var B = "/ajax/user/coreg";
        var A = new Array();
        $$("#co-registrations input:checkbox:checked").each(function(D) {
            A.push(D.name)
        });
        if (typeof A[0] == "undefined" && A[0] == null && C) {
            unotify(Szene1Translator.translate("youHaveToChooseAValidOption", null));
            return
        }
        console.log(C);
        new Ajax.Request(B, {
            method: "post",
            parameters: {
                regselection: C,
                "coreg[]": A
            },
            onSuccess: function(D) {
                if (D.responseJSON.valid) {
                    if (Userprogress.dialog) {
                        Userprogress.dialog.close()
                    }
                }
            },
            onFailure: function(D) {
                unotify(Szene1Translator.translate("anErrorOccurred", null))
            }
        })
    }
};
var Freetickets = {
    dialog: null,
    load: function(A) {
        var B = "";
        B += '<div class="box-ajax" id="notificationbox_container" style="width:350px;>';
        B += '<div class="box-inner" id="userSearch_body">';
        B += Loader.get();
        B += "  </div>";
        B += "</div>";
        new Ajax.Request("/ajax/event/loadfreetickets/" + A.rel, {
            method: "post",
            postBody: null,
            onSuccess: function(C) {
                Freetickets.dialog = UI.Dialog.fromString(C.responseText, {
                    modal: true,
                    hideOnClick: true,
                    drag: true
                }).show()
            },
            onFailure: function(C) {
                Freetickets.failure(C)
            }
        })
    },
    failure: function(A) {
        unotify(A.responseText)
    },
    save: function(B) {
        var A;
        if ($("eventFreeticketsSubmit")) {
            if (!$("eventFreetickets").getElements().all(function(C) {
                    return C.present()
                })) {
                unotify(Szene1Translator.translate("haveToFillAllFields", null));
                return
            }
            A = "eventFreeticketsForename=" + $("eventFreeticketsForename").value + "&eventFreeticketsSurname=" + $("eventFreeticketsSurname").value + "&eventFreeticketsStreet=" + $("eventFreeticketsStreet").value + "&eventFreeticketsZipCode=" + $("eventFreeticketsZipCode").value + "&eventFreeticketsCity=" + $("eventFreeticketsCity").value + "&eventFreeticketsMobNetwork=" + $("eventFreeticketsMobNetwork").value + "&eventFreeticketsMobNr=" + $("eventFreeticketsMobNr").value + "&eventFreeticketsSubmit=" + $("eventFreeticketsSubmit").value + "&eventFreeticketsEventId=" + $("eventFreeticketsEventId").value
        }
        new Ajax.Request("/ajax/event/savefreetickets", {
            method: "post",
            postBody: A,
            onSuccess: function(C) {
                if (Freetickets.dialog) {
                    Freetickets.dialog.close();
                    Freetickets.dialog = null
                }
                Freetickets.dialog = UI.Dialog.fromString(C.responseText, {
                    modal: true,
                    hideOnClick: true,
                    drag: true
                }).show()
            },
            onFailure: function(C) {
                Freetickets.failure(C)
            },
            onComplete: Util.oewaReload("user_freetickets_register")
        })
    }
};
(function() {
    var A = {
        displayed: new signals.Signal,
        closed: new signals.Signal
    };
    var B = {
        ALLOWED: 0,
        NOT_ALLOWED: 1,
        DENIED: 2
    };
    var D = Class.create({
        initialize: function(F, G, E) {
            this.icon = F;
            this.title = G;
            this.body = E
        },
        show: function() {
            A.displayed.dispatch(this)
        },
        cancel: function() {
            A.closed.dispatch(this)
        }
    });
    var C = (function() {
        var E = $A();

        function H(K, L, I, J) {
            if (UI.NotificationBar.instance == null) {
                new UI.NotificationBar("notifications", J)
            }
            n = new D(K, L, I);
            E.push(n);
            return n
        }

        function G() {
            return B.ALLOWED
        }

        function F(I) {
            I.call()
        }
        return {
            createNotification: H,
            checkPermission: G,
            requestPermission: F
        }
    })();
    $H(B).keys().each(function(E) {
        D["PERMISSION_" + E] = B[E]
    });
    Object.extend(D, A);
    window.Notifications = C;
    window.Notification = D;
    window.unotify = function(F, E) {
        var G = Notifications.createNotification(null, null, F, E);
        G.show();
        return G
    }
})();
var Stream = {};
Stream.setMode = function(A) {
    window.Config.str.omode = A;
    theChat.postUpdate("mode_update=" + A)
};
Stream.addMode = function(A) {
    window.Config.str.omode += ("," + A)
};
Stream.addContext = function(A) {
    window.Config.str.contxt += ("," + A)
};
var SChannel = Class.create({
    initialize: function(A) {
        this.iframeSrc = window.streamChannelSrc + me;
        this.createChannel();
        this.stream = $("app_channel").contentWindow;
        this.handler = A;
        this.notificationContainer = $("as_not_container");
        Event.observe($("as_not_cont_close"), "click", this.notContainerHide.bindAsEventListener(this));
        this.notContBody = $("as_not_ch_widget_body");
        this.notTimeOut = null;
        this.lastMessageId = null
    },
    createChannel: function() {
        $("app_channel").src = this.iframeSrc
    },
    notContainerHide: function() {
        this.notificationContainer.style.display = "none"
    },
    responseCallback: function(A) {
        var B = true;
        A.each(function(D) {
            switch (D.type) {
                case "ct_mess":
                    this.handler.handleNewMessage(D.data);
                    break;
                case "ct_state":
                    this.handler.handleStateMessage(D.data);
                    break;
                case "ct_pstate":
                    this.handler.handlePeerStateMessage(D.data);
                    break;
                case "ct_vchat":
                    this.handler.handleCamChatInvite(D.data);
                    break;
                case "as_not":
                    var C = true;
                    if (D.data) {
                        $(document).fire("stream:newevent", {
                            message: D.data
                        });
                        if (!D.data.txt || D.data.nonotify || D.data.actorId == Config.str.uid) {
                            C = false
                        } else {
                            this.showNotification(D.data)
                        }
                    }
                    if (!C) {
                        break
                    }
                    var F = "timeline";
                    switch (D.data.className) {
                        case "TimelineEvent_NewPn":
                            F = "pns";
                            break;
                        case "TimelineEvent_EventInviteRequest":
                        case "TimelineEvent_FriendshipRequest":
                            F = "requests";
                            break;
                        default:
                            break
                    }
                    var E = UI.UserPanel.reg.get("up-" + F);
                    if (E) {
                        E.updateCounter(E.count + 1)
                    }
                    if (!this.handler.myWindowHasFocus && this.handler.isMaster) {
                        this.handler.startAni(E.count + " neue " + E.element.down().readAttribute("title"))
                    }
                    B = false;
                case "as_upup":
                    this.updateUserPanel(D.data);
                    B = false
            }
        }.bind(this));
        if (B) {
            this.handler.updateWidgets()
        }
        this.handler.histLoaded = true
    },
    updateUserPanel: function(A) {
        if ($("up-" + A.area)) {
            UI.UserPanel.reg.get("up-" + A.area).updateCounter(A.count)
        }
    },
    showNotification: function(A) {
        $("notContUserPic").src = A.picURL;
        this.notificationContainer.appear({
            duration: 0.5
        });
        this.notContBody.innerHTML = A.txt;
        this.notificationContainer.highlight();
        var B = function() {
            this.notificationContainer.fade({
                duration: 0.4
            })
        }.bind(this);
        this.notTimeOut = window.setTimeout(B, 30000);
        this.notContainerHide()
    },
    sigMaster: function(A) {
        this.handler.master(A)
    },
    postRequest: function(C, A, B) {
        this.stream.postRequest(C, A, B);
        return false
    },
    sendPost: function(B, A) {
        this.stream.postUpdateRequest(B)
    },
    postUpdateState: function(A) {
        this.stream.postUpdateRequest(A, false);
        return false
    },
    newChatWindow: function(A) {
        this.stream.requestChatId(A, me);
        Util.oewaReload("chat_start_new");
        return false
    }
});
var tString = '<div id="#{mid}"><span class="username">#{from}</span><span class="timestamp floatRight">#{date}</span></div><div class="messagebody" id="message_#{mid}">#{content}</div>';
var peers = new Hash();
var peerIds = new Hash();
var friendlist;
var widgets = new Array();
widgets = $A(widgets);
var me;
var _stream_channel;
var _videochat_w_width = "340";
var _videochat_w_height = "545";
var _videochat_w_urlparams = "&namespace=Szene1&adoverlaytime=20&adoverlaytext=Verbindungsaufbau ...";
var Chat = Class.create({
    initialize: function(A, C, B) {
        this.blindMode = B;
        this.soPeer = C;
        this.visible = this.histLoaded = this.isMaster = false;
        this.owner = me = A;
        this.myWindowHasFocus = true;
        this.oldTitle = window.document.title;
        this.panel = this.soPeer ? $("chatWidgetSO") : $("chatPanel");
        this.titlePex = null;
        this.aniCount = 0;
        this.lastPeer = "";
        this.lastMessageId = null;
        this.toggleMessage = null;
        this.channel = _stream_channel = new SChannel(this);
        if (this.blindMode) {
            $("chatPanel").remove()
        } else {
            this.init();
            Event.observe(window, "blur", this.handleWindowBlur.bindAsEventListener(this));
            Event.observe(window, "focus", this.handleWindowFocus.bindAsEventListener(this));
            Event.observe(document.body, "on:titleChanged", this.handleTitleChanged.bindAsEventListener(this))
        }
    },
    init: function() {
        var B = "";
        if (!this.soPeer) {
            B += '<h4 id="chatBoxTitle">Friends-Talk  <a class="icon-16-edit-circle chat-settings tooltip mr" onmouseover="this.tooltip().show();" href="/cockpit/privacy/#!chatblocking" data-orig-title="Privacy-Einstellungen bearbeiten" style="text-decoration:none;">&nbsp;</a>';
            B += "</h4>"
        }
        B += '<div id="niftyplayer" style="position:absolute;top:-333px;" ><p>&nbsp;</p></div>';
        this.panel.innerHTML = B;
        var A = {};
        var D = {
            allowScriptAccess: "always"
        };
        var C = {
            id: "niftyplayer1",
            name: "niftyplayer1",
            movie: "/flash/fxplayer.swf?file=/sound/newm_frcht.mp3"
        };
        swfobject.embedSWF("/flash/fxplayer.swf?file=/sound/newm_frcht.mp3", "niftyplayer", "1", "1", "9.0.0", "", A, D, C);
        if (!this.soPeer) {
            var E = getCookieChatPos();
            if (E) {
                this.panel.style.top = E.top;
                this.panel.style.left = E.left
            }
            new Draggable(this.panel, {
                handle: "chatBoxTitle",
                snap: constrainSnap,
                onEnd: setChatPosCookie
            })
        }
        this.widgets = new Hash();
        this.soundNewMessage = "/sound/newm_frcht.mp3"
    },
    show: function() {
        setChatStateCookie("1");
        this.panel.removeClassName("hide");
        $$("body")[0].addClassName("chat-visible");
        this.visible = true
    },
    hide: function() {
        this.panel.addClassName("hide");
        $$("body")[0].removeClassName("chat-visible");
        this.visible = false
    },
    master: function(A) {
        this.isMaster = A
    },
    handleTitleChanged: function(A) {
        this.oldTitle = window.document.title
    },
    handleWindowBlur: function(A) {
        this.myWindowHasFocus = false;
        return false
    },
    handleWindowFocus: function(A) {
        this.myWindowHasFocus = true;
        this.stopTitleAni();
        return false
    },
    handleChatWindowClose: function(A) {
        this.visible = false;
        this.hide();
        setChatStateCookie("0")
    },
    stopTitleAni: function(A) {
        if (this.titlePex != null) {
            try {
                this.titlePex.stop();
                this.titlePex = null
            } catch (B) {}
        }
        window.document.title = this.oldTitle;
        return false
    },
    startAni: function(A) {
        if (A) {
            this.toggleMessage = A
        } else {
            this.toggleMessage = "Nachricht von " + this.lastPeer
        }
        if (this.titlePex == null) {
            this.titlePex = new PeriodicalExecuter(this.toggleTitle.bind(this), 1)
        }
    },
    playSound: function() {
        niftyplayer("niftyplayer1").play()
    },
    toggleTitle: function() {
        if ((this.aniCount % 2) == 0) {
            window.document.title = this.toggleMessage
        } else {
            window.document.title = this.oldTitle
        }++this.aniCount
    },
    newMessage: function(A) {
        this.channel.postRequest(A.memo.text, A.memo.cwid, false);
        Event.stop(A);
        return false
    },
    handleNewMessage: function(C) {
        if (this.soPeer && (peers.get(C.ct_id) != this.soPeer)) {
            return false
        }
        var A = (C.s_id == me) ? "undefined" : C.s_id;
        var B = parseInt(C.ct_id);
        var D = this.getWidget(B, A);
        D.appendMessage(C);
        this.lastPeer = C.s_id;
        if ((C.s_id != me) && this.isMaster) {
            if (!this.myWindowHasFocus) {
                this.startAni()
            }
            if (this.histLoaded && this.visible) {
                this.playSound()
            }
        }
        return false
    },
    handleCamChatInvite: function(E) {
        var D = parseInt(E.ct_id);
        var A = (E.s_id == me) ? "undefined" : E.s_id;
        var F = this.getWidget(D, A);
        var C = "/videochat/?streamout=" + me + "&streamin=" + F.peer + _videochat_w_urlparams;
        var B = "videochat with " + F.peer;
        E.mess = '<a title="Start Video-Chat" onclick="showVChatPopup(\'' + C + "', '" + B + "');return false;\"  ";
        E.mess += 'href="#"><span class="icon-16-video">&nbsp;</span><span>';
        E.mess += "Einladung zum VideoChat mit <strong>" + E.s_id + "</strong> annehmen.</span></a>";
        F.appendMessage(E)
    },
    handleStateMessage: function(D) {
        if (this.soPeer && (D.peer != this.soPeer)) {
            return false
        }
        var A = parseInt(D.ct_id);
        var F = parseInt(D.state);
        if (F == 0) {
            if (typeof this.widgets.get(A) != "undefined") {
                $("chatPanel").removeChild($(this.widgets.get(A).widgetId));
                this.widgets.unset(A)
            }
            if (this.widgets.size() < 1) {
                this.hide()
            }
        } else {
            if (this.visible) {
                this.show()
            }
            if (D.peer != "0" && D.peer != "undefined") {
                peers.set(A, D.peer)
            }
            var C = parseInt(D.pstate);
            var B = parseInt(D.unrd);
            var E = this.getWidget(A, peers.get(A));
            E.setState(F);
            E.setUnread(B);
            E.setPeerState(C)
        }
        return false
    },
    handlePeerStateMessage: function(C) {
        var A = parseInt(C.ct_id);
        var B = parseInt(C.pstate);
        var D = this.getWidget(A);
        D.setPeerState(B)
    },
    updateWidgets: function() {
        this.widgets.each(function(A) {
            A.value.update(this.histLoaded)
        }.bind(this))
    },
    getWidget: function(A, C) {
        if (typeof C == "undefined") {
            C = peers.get(A)
        }
        if (typeof this.widgets.get(A) != "undefined") {
            var D = this.widgets.get(A);
            if (typeof D.peer == "undefined" && (typeof C != "undefined")) {
                D.setPeer(C)
            }
            return D
        } else {
            var B = new ChatWidget(A, C, (this.soPeer == C));
            this.widgets.set(A, B);
            B.render();
            Event.observe($(B.widgetId), "on:widgetStateChange", this.handleWidgetState.bindAsEventListener(this));
            Event.observe($(B.widgetId), "focus", this.stopTitleAni.bindAsEventListener(this));
            Event.observe($(B.widgetId), "on:newChatMessage", this.newMessage.bindAsEventListener(this));
            this.show();
            return B
        }
    },
    getWidgetId: function(A) {
        return A.split("_").first()
    },
    handleWidgetState: function(D) {
        var C = Event.element(D);
        var F = this.getWidgetId(C.id);
        var E = this.widgets.get(F);
        E.indicateBusy();
        var B;
        B = E.getState();
        var A = {
            sessionid: F,
            state: B,
            peer: me,
            error: 0,
            type: "chat_stateupdate"
        };
        this.channel.postUpdateState(Object.toQueryString(A))
    },
    createChat: function(A) {
        new Ajax.Request("/ajax/user/priv", {
            parameters: {
                uname: A
            },
            showLoader: true,
            onSuccess: function(B) {
                if (B.responseJSON.valid) {
                    if (B.responseJSON.access) {
                        return this.channel.newChatWindow(A)
                    }
                }
                uconfirm(B.responseJSON.content, null, "Chat - " + A, null, {
                    boxstyle: "width:420px;"
                });
                return false
            }.bind(this)
        })
    },
    callBackNewWidget: function(A) {
        return this.getWidget(A.created)
    },
    postUpdate: function(A) {
        this.channel.sendPost(A)
    }
});

function setChatPosCookie(A, B) {
    A = A.element;
    var C = A.style.top + ":" + A.style.left;
    setChatCookie("chatpos", C)
}

function setChatCookie(D, E) {
    var A = D + "=" + unescape(E);
    A += "; domain=" + window.location.hostname;
    var B = new Date();
    var C = B.getTime() + (30 * 24 * 60 * 60 * 1000);
    B.setTime(C);
    A += "; expires=" + B.toGMTString();
    A += "; path=/";
    document.cookie = A
}

function setChatStateCookie(A) {
    setChatCookie("chatstate", A)
}

function getCookieChatPos() {
    var A = readCookie("chatpos");
    if (A != null) {
        A = A.split(":");
        return {
            top: A[0],
            left: A[1]
        }
    }
    return false
}

function getCookieChatState() {
    var A = readCookie("chatstate");
    if (A != null) {
        return A
    }
    return false
}

function readCookie(B) {
    var D = B + "=";
    var A = document.cookie.split(";");
    for (var C = 0; C < A.length; C++) {
        var E = A[C];
        while (E.charAt(0) == " ") {
            E = E.substring(1, E.length)
        }
        if (E.indexOf(D) == 0) {
            return E.substring(D.length, E.length)
        }
    }
    return null
}

function showVChatPopup(C, B) {
    var A = window.open(C, null, "width=" + _videochat_w_width + ",height=" + _videochat_w_height + ",scrollbars=1,resizable=0,menubar=no,location=no,status=no");
    A.focus()
}
var ChatWidget = Class.create({
    initialize: function(B, A, C) {
        this.id = B;
        this.peer = A;
        this.isStandalone = C;
        this.peerState = 0;
        this.state = 0;
        this.hasUnread = 0;
        this.lastElement = null;
        this.textInput = null;
        this.pStateInd = null;
        this.element = null;
        this.counterNew = null;
        this.widgetId = this.id + "_ch_widget"
    },
    appendMessage: function(D) {
        var A = new Template(tString);
        var E = document.createElement("div");
        E.className = "message";
        E.id = "m_" + D.mess_id;
        if (D.mess_id == "0") {
            E.title = "no_message"
        }
        var C = (D.s_id == me) ? me : "<strong>" + D.s_id + "</strong>";
        E.innerHTML = A.evaluate({
            from: C,
            date: getDate(D.date),
            mid: D.mess_id,
            content: D.mess.linkify().smiley()
        });
        $(this.widgetId + "_printarea").appendChild(E);
        if (D.s_id != me) {
            this.lastElement = E
        }
        var B = this.getBodyElement();
        B.scrollTop = B.scrollHeight
    },
    setUnread: function(A) {
        this.hasUnread = A
    },
    setPeerState: function(A) {
        this.peerState = A
    },
    setPeer: function(A) {
        this.peer = A;
        document.removeChild($(this.widgetId()));
        this.render()
    },
    setState: function(A) {
        this.state = A;
        switch (A) {
            case 0:
                this.hide();
                break;
            case 1:
                this.compact();
                break;
            case 2:
                this.open();
                break
        }
    },
    getState: function() {
        return this.state
    },
    update: function(A) {
        var B = $(this.widgetId + "_printarea");
        B.scrollTop = B.scrollHeight + 200;
        if (this.hasUnread > 0) {
            this.indicateNewMessage()
        } else {
            this.resetIndicator()
        }
        if (this.peerState == 1) {
            this.showPeerOnline()
        } else {
            this.showPeerOffline()
        }
        $(this.widgetId).setOpacity(1);
        if (this.lastElement && A) {
            new Effect.Highlight(this.lastElement, {
                duration: 0.8
            })
        }
        this.lastElement = null
    },
    widgetId: function() {
        return this.id + "_ch_widget"
    },
    indicateNewMessage: function() {
        $(this.widgetId).className = "box_dynamic chat_widget widget_head_new";
        this.counterNew.style.display = "";
        this.counterNew.innerHTML = this.hasUnread
    },
    resetIndicator: function() {
        $(this.widgetId).className = "box_dynamic chat_widget";
        this.counterNew.style.display = "none";
        this.counterNew.innerHTML = ""
    },
    indicateBusy: function() {
        $(this.widgetId).setOpacity(0.5)
    },
    showPeerOnline: function() {
        this.pStateInd.innerHTML = '<em class="online"> online</em>'
    },
    showPeerOffline: function() {
        this.pStateInd.innerHTML = '<em class="offline"> offline</em>'
    },
    toggleCompact: function(B) {
        Event.stop(B);
        var A = Event.element(B).up("a");
        if (A && (A.className == "szene1_status_thumb")) {
            window.location.href = A.href;
            return false
        }
        if (this.state == 1) {
            this.state = 2
        } else {
            this.state = 1
        }
        Event.fire($(this.widgetId), "on:widgetStateChange");
        return false
    },
    getBodyElement: function() {
        return $(this.widgetId + "_body")
    },
    open: function() {
        this.show();
        this.getBodyElement().style.display = ""
    },
    compact: function() {
        this.getBodyElement().style.display = "none"
    },
    hide: function() {
        $(this.widgetId).style.display = "none"
    },
    show: function() {
        $(this.widgetId).style.display = ""
    },
    closing: function(A) {
        Event.stop(A);
        this.state = 0;
        Event.fire($(this.widgetId), "on:widgetStateChange");
        return false
    },
    startVideoChat: function(E) {
        Event.stop(E);
        var C = "/videochat/?streamout=" + me + "&streamin=" + this.peer + _videochat_w_urlparams;
        var B = "videochat with " + this.peer;
        var A = window.open(C, null, "width=" + _videochat_w_width + ",height=" + _videochat_w_height + ",scrollbars=1,resizable=0,menubar=no,location=no,status=no");
        A.focus();
        var D = $("app_channel").contentWindow.fullDomain + "/chatinvite/" + me;
        $("app_channel").contentWindow.postRequest("", this.id, D);
        return false
    },
    render: function() {
        var G = this;
        var D = document.createElement("div");
        D.id = this.widgetId;
        D.className = "box_dynamic chat_widget";
        if (!this.isStandalone) {
            var C = document.createElement("div");
            C.id = this.id + "_head";
            C.className = "widget_head clearfix";
            D.appendChild(C);
            var A = document.createElement("div");
            A.className = "widget_thumb";
            A.innerHTML = '<a href="/user/' + this.peer + '" class="szene1_status_thumb" title="userpage v ' + this.peer + '"><span><img border="0" src="/xhr/userpic.php?name=' + this.peer + '" alt="' + this.peer + '" /></span></a>';
            C.appendChild(A);
            var I = document.createElement("div");
            I.id = this.id + "_chat_title";
            I.innerHTML = "<h3>" + this.peer + "</h3>";
            I.className = "widget_title";
            this.pStateInd = document.createElement("span");
            this.pStateInd.innerHTML = '<em class="online"> online</em>';
            I.appendChild(this.pStateInd);
            C.appendChild(I);
            var K = document.createElement("span").update("&nbsp;");
            K.title = "Video-Chat mit " + this.peer + " starten";
            K.className = "icon-16-video mr icon-op";
            Event.observe(K, "click", this.startVideoChat.bindAsEventListener(this));
            var F = document.createElement("div");
            F.className = "widget_icon floatRight";
            Event.observe(C, "click", this.toggleCompact.bindAsEventListener(this));
            var B = document.createElement("span");
            B.rel = this.id;
            B.className = "icon-16-delete icon-op";
            B.title = "close";
            B.innerHTML = "&nbsp;";
            Event.observe(B, "click", this.closing.bindAsEventListener(this));
            this.counterNew = document.createElement("span");
            this.counterNew.className = "widget_counter_new floatRight";
            this.counterNew.title = "neue nachrichten";
            this.counterNew.style.display = "none";
            this.counterNew.id = "cnt_new_" + this.id;
            F.appendChild(K);
            F.appendChild(B);
            F.appendChild(this.counterNew);
            C.appendChild(F)
        }
        var N = document.createElement("div");
        N.className = "dottedline";
        N.innerHTML = "&nbsp;";
        var E = document.createElement("div");
        E.id = this.widgetId + "_body";
        E.className = "widget_body";
        D.appendChild(E);
        var M = this.widgetId + "_printarea";
        var J = document.createElement("div");
        J.id = M;
        J.className = "printarea";
        E.appendChild(N);
        E.appendChild(J);
        var H = document.createElement("div");
        H.className = "widget_send box-form";
        E.appendChild(H);
        this.textInput = document.createElement("input");
        this.textInput.id = this.widgetId + "_input";
        this.textInput.type = "text";
        this.textInput.name = this.textInput.id + "_name";
        this.textInput.style.width = "150px";
        H.appendChild(this.textInput);
        var L = document.createElement("a");
        L.className = "button float-r";
        L.innerHTML = "Send";
        L.id = this.id + "_send";
        H.appendChild(L);
        theChat.panel.appendChild(D);
        Event.observe(this.textInput, "keypress", this.sendMessage.bindAsEventListener(this));
        Event.observe(L, "click", this.sendMessage.bindAsEventListener(this));
        this.state = 2;
        return D
    },
    sendMessage: function(B) {
        var A;
        if ((B.keyCode == Event.KEY_RETURN) || (Event.element(B).id == this.id + "_send")) {
            Event.stop(B);
            A = $F(this.textInput).trim();
            if (A) {
                $(this.widgetId).fire("on:newChatMessage", {
                    text: A,
                    cwid: this.id
                })
            }
            this.textInput.value = ""
        }
        return false
    }
});
var Timeline = Class.create({
    options: {
        type: "wall",
        oType: 0,
        oId: 0,
        offset: 0,
        limit: 15,
        geo: {},
        community: 0,
        getmore: 0,
        tags: [],
        filter: [],
        outm: "normal"
    },
    doAfterLoad: false,
    setDoAfterLoad: function(A) {
        this.doAfterLoad = A
    },
    initialize: function(B, A) {
        if (A) {
            Object.extend(this.options, A || {})
        }
        if (B) {
            this.container = $(B)
        }
        Timeline.inst = this
    },
    observeMoreButton: function() {
        var A = $$(".button-timeline-showmore")[0];
        A.style.display = "block";
        if (this.scrollObserve) {
            this.scrollObserve.stop()
        }
        this.scrollObserve = Event.on(window, "scroll", function() {
            if (this.triggerMore(A)) {
                A.style.display = "none";
                this.scrollObserve.stop();
                this.getMore()
            }
        }.bind(this))
    },
    triggerMore: function(A) {
        var B = A.getBoundingClientRect();
        return (B.top >= 0 && B.left >= 0 && B.bottom <= window.innerHeight && B.right <= window.innerWidth)
    },
    ownNewEventHandler: function() {
        this.options.handlewallposts = false
    },
    getStart: function(B) {
        if (B) {
            Object.extend(this.options, B || {})
        }
        var A = Loader.get("24");
        this.container.update(A);
        this.request = new Ajax.Request("/ajax/timeline/more", {
            parameters: {
                type: this.options.type,
                otype: this.options.oType,
                oid: this.options.oId,
                limit: this.options.limit,
                offset: 0,
                geo: Object.toJSON(this.options.geo),
                community: this.options.community,
                getmore: this.options.getmore,
                filter: Object.toJSON(this.options.filter),
                tags: Object.toJSON(this.options.tags),
                outm: this.options.outm
            },
            onSuccess: this.handleStartResult.bindAsEventListener(this),
            onComplete: function(C) {
                Loader.remove()
            }
        });
        return false
    },
    handleStartResult: function(B) {
        var A = B.responseJSON;
        if (A.content == null) {
            $("addContent").innerHTML = "nothing more to see";
            return
        }
        this.container.update(A.content);
        jQuery("img.lazy-load").unveil(300);
        this.options.offset = A.offset;
        rerelink()
    },
    getMore: function() {
        var A = Loader.get("24");
        $("addContent").insert({
            after: A
        });
        this.request = new Ajax.Request("/ajax/timeline/more", {
            parameters: {
                type: this.options.type,
                otype: this.options.oType,
                oid: this.options.oId,
                limit: this.options.limit,
                offset: Object.toJSON(this.options.offset),
                geo: Object.toJSON(this.options.geo),
                community: this.options.community,
                getmore: this.options.getmore,
                filter: Object.toJSON(this.options.filter),
                tags: Object.toJSON(this.options.tags),
                outm: this.options.outm
            },
            onSuccess: this.handleMoreResult.bindAsEventListener(this),
            onComplete: function(B) {
                Util.oewaReload(this.options.type + "_show_more");
                Loader.remove()
            }.bindAsEventListener(this)
        })
    },
    handleMoreResult: function(C) {
        var B = C.responseJSON;
        if (B.content == null) {
            $("addContent").innerHTML += '<span class="info">' + Szene1Translator.translate("noResultsFound") + "</span>";
            var A = $("addContent").next("a.button-showmore");
            if (A) {
                A.remove()
            }
            return
        }
        this.container.insert(B.content);
        jQuery("img.lazy-load").unveil(300);
        this.observeMoreButton();
        this.options.offset = B.offset;
        rerelink();
        if (this.doAfterLoad) {
            this.doAfterLoad()
        }
    },
    setGeo: function(C, B, A) {
        this.options.geo.lng = C;
        this.options.geo.lat = B;
        this.options.geo.radius = A;
        if ($("wall-publish-geo-value")) {
            $("wall-publish-geo-value").param = {
                lng: C,
                lat: B
            };
            return true
        }
        return false
    }
});
Timeline.prepareReaction = function(B) {
    if (B.idx) {
        var A = B.idx.split(":");
        Timeline.addReaction(A[0], A[1], B.data.id)
    }
};
Timeline.showReactionBox = function(A, B) {
    new Ajax.Request("/ajax/timeline/getreactions", {
        showLoader: true,
        parameters: {
            type: A,
            id: B
        },
        onSuccess: Timeline.handleShowReactionsResult,
        onComplete: Util.oewaReload("newsfeed_show_reactions")
    })
};
Timeline.addReaction = function(C, E, A, B, D) {
    new Ajax.Request("/ajax/timeline/addreaction", {
        showLoader: true,
        parameters: {
            type: C,
            id: E,
            smiley: A,
            outm: B
        },
        onSuccess: Timeline.handleReactionResult,
        onComplete: function() {
            Util.oewaReload("newsfeed_user_add_reaction");
            if (D) {
                D()
            }
        }
    })
};
Timeline.delReaction = function(A, B) {
    new Ajax.Request("/ajax/timeline/removereaction", {
        showLoader: true,
        parameters: {
            type: A,
            id: B
        },
        onSuccess: Timeline.handleReactionResult,
        onFailure: function() {
            unotify("Error, please try again!")
        },
        onComplete: Util.oewaReload("newsfeed_user_del_reaction")
    })
};
Timeline.handleShowReactionsResult = function(B) {
    var A = B.responseJSON;
    if (A.valid && A.reactions) {
        if (typeof Timeline.reactionFormDialog != "undefined") {
            Timeline.reactionFormDialog.hide()
        }
        Timeline.reactionFormDialog = UI.Dialog.fromString(A.reactions, {
            modal: true,
            hideOnClick: true,
            drag: true
        });
        Timeline.reactionFormDialog.show()
    } else {
        unotify("Keine Reaktionen vorhanden!")
    }
};
Timeline.handleReactionResult = function(C) {
    var B = C.responseJSON;
    if (B.valid && B.reaction) {
        if (typeof Timeline.reactionFormDialog != "undefined") {
            Timeline.reactionFormDialog.hide()
        }
        if (B.txt_activities) {
            var A = $("txt_cnt_activities_" + B.dataid);
            if (A != null) {
                A.update(B.txt_activities)
            }
        }
        $("reaction_container_" + B.dataid).update(B.reaction);
        return
    }
    unotify(B.error)
};
Timeline.deleteEntry = function(A) {
    new Ajax.Request("/ajax/timeline/delentry", {
        showLoader: true,
        parameters: {
            dataid: A
        },
        onSuccess: B,
        onComplete: Util.oewaReload("newsfeed_user_del_entry")
    });

    function B(C) {
        if (C.responseJSON.valid) {
            var D = $("wlea_" + C.responseJSON.id).up("li.clearfix");
            if (D) {
                new Effect.DropOut(D);
                D.remove()
            }
            return
        }
        unotify(C.responseJSON.content)
    }
};
Timeline.inst = null;
Timeline.instance = function() {
    if (Timeline.inst == null) {
        throw new Error("Timeline(loader) not startet!")
    }
    return Timeline.inst
};
var RealTime = Class.create({
    options: {
        evdataids: new Array(),
        handlewallposts: true
    },
    initialize: function() {
        RealTime.inst = this
    },
    ownNewEventHandler: function() {
        this.options.handlewallposts = false
    },
    haveEvDataId: function(A) {
        return (this.options.evdataids.find(function(B) {
            return (B == A)
        }) ? true : false)
    },
    addEvDataId: function(A) {
        this.options.evdataids.push(A)
    }
});
$(document).observe("stream:newevent", function(B) {
    var A = RealTime.instance();
    if (!A.haveEvDataId(B.memo.message.dataid)) {
        if (B.memo.message.obj_id && (elem = $("commentOutput_" + B.memo.message.obj_id + "_" + B.memo.message.obj_type))) {
            A.addEvDataId(B.memo.message.dataid);
            elem.insert({
                top: B.memo.message.obj_comment
            });
            new Effect.Highlight(elem.firstDescendant())
        }
        if (A.options.handlewallposts && B.memo.message.wallpost && Timeline.instance().container) {
            A.addEvDataId(B.memo.message.dataid);
            if (Timeline.instance().options.oType == B.memo.message.dstType && Timeline.instance().options.oId == B.memo.message.dstId) {
                Timeline.instance().container.insert({
                    top: B.memo.message.wallpost
                });
                new Effect.Highlight(Timeline.instance().container.firstDescendant())
            }
        }
    }
});
RealTime.inst = null;
RealTime.instance = function() {
    if (RealTime.inst == null) {
        throw new Error("RealTime(loader) not startet!")
    }
    return RealTime.inst
};
new RealTime();
var UI = {
    getFragment: function(A) {
        if (!A.include("#")) {
            return false
        } else {
            return A.split("#").last()
        }
    }
};
UI.viewportOffset = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
};
Object.extend(UI, function() {
    function C(E, D) {
        return Math.abs((E - D) / 2)
    }
    var B = Class.create({
        initialize: function(D, F) {
            var G = {
                show: Element.show,
                hide: Element.hide,
                hideOnClick: true
            };
            this.parent = $(F);
            this.options = Object.extend(G, D || {});
            this.element = new Element("div");
            if (this.options.hideOnClick) {
                this.element.observe("click", this.remove.bindAsEventListener(this))
            }
            this.element.addClassName("ui-widget-overlay");
            var E = {
                position: "fixed",
                top: "0px",
                left: "0px",
                height: "100%",
                width: "100%",
                backgroundColor: "#000",
                opacity: 0.5,
                zIndex: B.baseZIndex++,
                filter: "alpha(opacity=50)",
                display: "none"
            };
            Object.extend(E, this.options.style);
            this.element.setStyle(E)
        },
        show: function() {
            var D = $$("body")[0];
            if (this.options.lockScrolling) {
                this._lockScrolling(true)
            }
            D.insert(this.element);
            this.options.show(this.element);
            return this
        },
        hide: function() {
            $$("body")[0].removeClassName("dialog-visible");
            if (this.options.lockScrolling) {
                this._lockScrolling(false)
            }
            this.options.hide(this.element);
            if (this.parent) {
                this.options.hide(this.parent)
            }
            return this
        },
        remove: function() {
            this.hide();
            this.element.remove();
            if (this.parent) {
                this.parent.remove()
            }
            return this
        },
        toElement: function() {
            return this.element
        },
        _lockScrolling: function(E) {
            var D = $$("body")[0]
        }
    });
    B.baseZIndex = 1000;
    var A = Class.create({
        initialize: function(E, D) {
            var H = {
                show: Element.show,
                hide: Element.hide
            };
            this.element = $(E);
            this.options = Object.extend(H, D || {});
            var I = this.element.getDimensions();
            var G = document.viewport.getDimensions();
            var F = Object.extend({
                position: "fixed",
                zIndex: ++A.baseZIndex,
                top: C(G.height, I.height) + UI.viewportOffset.top / 2 + "px",
                left: C(G.width, I.width) + "px"
            }, this.options.style || {});
            this.element.setStyle(F);
            this.element.observe("click", function(K) {
                var J = K.findElement("[data-close]");
                if (!J) {
                    return
                }
                this.remove()
            }.bindAsEventListener(this))
        },
        open: function() {
            return this.show()
        },
        show: function() {
            var E = this.element,
                D = this.options;
            D.show(E);
            if (D.modal) {
                if (!this.overlay) {
                    var H = Object.extend({
                        lockScrolling: true,
                        style: {
                            zIndex: (A.baseZIndex - 1)
                        },
                        hideOnClick: D.hideOnClick
                    }, this.options.overlay);
                    this.overlay = new B(H, this.element)
                }
                this.overlay.show()
            }
            if (D.drag) {
                var F = this.element.down("h3");
                var G = {};
                if (F) {
                    G.handle = F;
                    F.setStyle({
                        cursor: "move"
                    })
                }
                new Draggable(this.element, G)
            }
            this.element.fire("dialog:open");
            $$("body")[0].addClassName("dialog-visible");
            return this
        },
        hide: function() {
            this.element.fire("dialog:close");
            $$("body")[0].removeClassName("dialog-visible");
            if (this.overlay) {
                this.overlay.hide()
            }
            this.options.hide(this.element);
            return this
        },
        close: function() {
            this.remove()
        },
        remove: function() {
            this.hide();
            if (this.overlay) {
                this.overlay.remove()
            }
            return this
        },
        setOverlay: function(D) {
            this.overlay = D;
            return this
        },
        setOptions: function(D) {
            this.options = Object.extend(this.options || {}, D || {});
            return this
        },
        toElement: function() {
            return this.element
        }
    });
    A.baseZIndex = 1001;
    A.confirmTemplate = "";
    Object.extend(A, {
        fromString: function(F, D) {
            D = D || {};
            var E = Builder.build(F);
            E.setStyle({
                display: "none"
            });
            $$("body")[0].insert(E);
            return new A(E, D)
        }
    });
    Object.extend(A, {
        confirm: function(N, P, F, R, I) {
            var E = false;
            var G = function() {
                return false
            };
            if (typeof F != "function") {
                F = false
            }
            if (typeof P != "function") {
                P = false
            }
            if (P === false && F === false) {
                E = true
            }
            if (I) {
                E = true
            }
            P = P || G;
            F = F || G;
            R = R || {};
            R.modal = true;
            var J = new Element("div", {
                "class": "box-ajax",
                style: (R.boxstyle || "")
            });
            var Q = new Element("div", {
                "class": "box-inner"
            }).update(N);
            var H = new Element("form", {
                "class": "box-form center",
                style: "margin-top:10px;"
            });
            Q.insert(H);
            if (R.title) {
                var D = R.title ? R.title : ""
            }
            var M = new Element("h3").update(D);
            var L = new Element("button", {
                "class": "btn confirm-ok",
                type: "button"
            }).update("OK");
            J.insert(M);
            if (R.autoCloseButton) {
                J.insert('<a class="icon-16-delete" data-close="kill" title="close"></a>')
            }
            J.insert(Q);
            H.insert(L);
            if (!E) {
                var O = new Element("button", {
                    "class": "btn confirm-cancel",
                    type: "button"
                }).update("Cancel");
                H.insert(O)
            }
            $("szene1").insert(J);
            var K;
            L.observe("click", function(S) {
                S.stop();
                K.close();
                P();
                return false
            });
            if (!E) {
                O.observe("click", function(S) {
                    S.stop();
                    K.close();
                    F();
                    return false
                })
            }
            K = new A(J, R);
            K.show();
            return K
        }
    });
    return {
        Dialog: A,
        Overlay: B
    }
}());
window.uconfirm = function(E, C, D, F, B, A) {
    B = B || {};
    B.title = D;
    return UI.Dialog.confirm(E, C, F, B, A)
};
window.ualert = function(B, A) {
    uconfirm(B, null, A, false, {}, true)
};
window.uimage = function(B, C) {
    var A = new Image();
    A.src = B;
    C = C || B.substr(B.lastIndexOf("/") + 1);
    AjaxLoader.show(0.3);
    A.onload = function() {
        AjaxLoader.cancel();
        var G = document.viewport.getDimensions();
        var D = 0;
        var K = 25;
        G.width -= 0;
        G.height -= (25 + UI.viewportOffset.top);
        var E = A.width;
        var M = A.height;
        var I = Math.min(G.width / (E + D), G.height / (M + K));
        if (I < 1) {
            E = Math.floor(E * I);
            M = Math.floor(M * I)
        }
        var L = '<img src="' + B + '" style="height:' + (M) + 'px;" />';
        var F = new Element("div", {
            "class": "box-ajax",
            style: "margin:0px;padding:0px;height:" + (M + K) + "px;width:" + (E + D) + "px;"
        });
        var N = new Element("div", {
            "class": "box-inner",
            style: "margin:0px;padding:0px;"
        }).update(L);
        var J = new Element("h3", {
            style: "margin:0px;padding:5px;"
        }).update(C);
        F.insert(J);
        F.insert('<a class="icon-16-delete" data-close="kill" title="close"></a>');
        F.insert(N);
        $("szene1").insert(F);
        var H = new UI.Dialog(F, {
            hideOnClick: true,
            modal: true
        });
        H.show();
        return H
    }
};
var LoginPanel = {
    init: function() {
        this.butt = $("signin-op");
        this.panel = $("menu-signin");
        if (!this.butt || !this.panel) {
            throw new Error("cannot initialize loginPanel funcs")
        }
        this.butt.observe("click", this.toggle.bindAsEventListener(this));
        this.boundDocClick = this.docClick.bindAsEventListener(this);
        $("szene1_mainlogin").observe("submit", function() {
            this.panel.hide();
            return true
        }.bind(this));
        return false
    },
    toggle: function(A) {
        if (Modernizr.touch) {
            return true
        }
        Event.stop(A);
        if (this.butt.hasClassName("menu-open")) {
            this.hide()
        } else {
            this.show()
        }
        return false
    },
    docClick: function(B) {
        var A = Event.findElement(B, "div#menu-signin");
        if (!A || (A != this.panel)) {
            this.hide();
            return
        }
        return false
    },
    show: function() {
        this.butt.addClassName("menu-open");
        Util.hideAllContentAds();
        this.panel.style.display = "block";
        this.panel.down("input").focus();
        document.observe("click", this.boundDocClick)
    },
    hide: function() {
        this.butt.removeClassName("menu-open");
        this.panel.style.display = "none";
        Util.restoreAllContentAds();
        Event.stopObserving(document, "click", this.boundDocClick);
        return
    }
};
UI.UserPanel = function() {
    var UserPanel = Class.create({
        initialize: function(element, options) {
            var defaults = {
                className: "selected",
                triggerAction: "mousedown",
                cancelTrigger: "click",
                loadCacheTime: 5000
            };
            this.options = Object.extend(defaults, options || {});
            element = $(element);
            var url = element.readAttribute("data-userpanel");
            this.url = (!url || (url == "null")) ? false : url;
            this.element = element.up("li");
            this.iconElement = this.element.down("span");
            this.panel = this.element.down("ul");
            this.counter = element.down("sup");
            this.lastLoaded = 0;
            this.count = 0;
            element.observe(this.options.triggerAction, this.toggle.bindAsEventListener(this));
            element.observe(this.options.cancelTrigger, this.canc.bindAsEventListener(this));
            this.boundDocClick = this.handleDocClick.bindAsEventListener(this);
            this.boundHide = this.hide.bindAsEventListener(this);
            UI.UserPanel.reg.set(element.id, this)
        },
        canc: function(e) {
            Event.stop(e);
            return false
        },
        toggle: function(e) {
            Event.stop(e);
            if (this.element.hasClassName(this.options.className)) {
                this.hide()
            } else {
                this.element.fire("on:upEleShow");
                if (this.url && (this.lastLoaded + this.options.loadCacheTime < (new Date().getTime()))) {
                    this.loadShow()
                } else {
                    this.show()
                }
            }
            return false
        },
        loadShow: function() {
            var loader = Loader.getDark(24);
            this.panel.update("<li>" + loader + "</li>");
            this.show();
            this.request = new Ajax.Request(this.url, {
                method: "get",
                onSuccess: this.handleResponse.bind(this),
                onFailure: this.handleFailure.bind(this),
                onComplete: this.requestComplete.bind(this)
            })
        },
        show: function() {
            Util.hideAllContentAds();
            this.element.addClassName(this.options.className);
            this.iconElement.removeClassName("icon-op");
            document.observe("click", this.boundDocClick);
            document.observe("on:upEleShow", this.boundHide)
        },
        hide: function() {
            if (this.element.hasClassName(this.options.className)) {
                if (this.request) {
                    this.request.transport.abort()
                }
                this.element.removeClassName(this.options.className);
                if (!this.count) {
                    this.iconElement.addClassName("icon-op")
                }
                Util.restoreAllContentAds();
                Event.stopObserving(document, "click", this.boundDocClick);
                Event.stopObserving(document, "on:upEleShow", this.boundHide)
            }
            return false
        },
        updateCounter: function(num, req) {
            num = parseInt(num);
            if (this.counter && (typeof num != "NaN") && (num > 0)) {
                this.counter.update(num);
                this.setActive(req)
            } else {
                this.setInactive()
            }
            this.count = num || 0
        },
        handleResponse: function(response) {
            var resp = response.responseJSON;
            this.panel.update(resp.content);
            var count = parseInt(resp.count);
            this.updateCounter(count, true);
            if (resp.evalFn) {
                this.panel.stopObserving();
                var fnString = resp.evalFn + '($("' + this.panel.id + '"))';
                eval(fnString)
            }
            this.lastLoaded = new Date().getTime();
            return false
        },
        handleFailure: function() {
            this.panel.update("<li>Fehler. Anfrage konnte nicht beendet werden.</li>");
            this.show()
        },
        requestComplete: function(res) {
            Util.oewaReload("userpanel_get_" + this.panel.id, true);
            if (!res.responseJSON) {
                this.hide()
            }
        },
        handleDocClick: function(e) {
            var ele = Event.findElement(e);
            if (!$(ele).descendantOf(this.element)) {
                this.hide()
            }
        },
        setInactive: function(req) {
            this.counter.writeAttribute({
                "class": "hide"
            });
            if (req) {
                this.iconElement.addClassName("icon-op")
            }
        },
        setActive: function() {
            this.counter.removeAttribute("class");
            this.iconElement.removeClassName("icon-op")
        }
    });
    Element.addMethods("a", {
        userpanel: function(element, options) {
            if (!element._userpanel) {
                element._userpanel = new UserPanel(element, options || {})
            }
            return element._userpanel
        }
    });
    return UserPanel
}();
UI.UserPanel.reg = new Hash();
(function(F) {
    var M;
    var E = "north",
        I = "south",
        G = "east",
        J = "west",
        H = "north-east",
        K = "north-west",
        O = "south-east",
        B = "south-west",
        C = [E, G, I, J, H, K, O, B];

    function D(P) {
        switch (P) {
            case E:
                return I;
            case I:
                return E;
            case J:
                return G;
            case G:
                return J;
            case H:
                return O;
            case K:
                return B;
            case O:
                return H;
            case B:
                return K
        }
    }

    function A(R, P) {
        var Q = $(P).cumulativeOffset();
        R = R || {
            top: 0,
            left: 0
        };
        return {
            top: R.top - Q.top,
            left: R.left - Q.left
        }
    }

    function N(S, R) {
        var P = document.viewport.getDimensions(),
            Q = document.viewport.getScrollOffsets();
        S = Object.extend({
            top: 0,
            left: 0
        }, S);
        viewportBottom = function() {
            return (Q.top + P.height)
        };
        viewportRight = function() {
            return (Q.left + P.width)
        };
        yInViewport = function(T) {
            if (R == "left") {
                return true
            } else {
                return ((T >= (Q.top + F.viewportOffset.top)) && (T <= viewportBottom()))
            }
        };
        xInViewport = function(T) {
            if (R == "top") {
                return true
            } else {
                return ((T >= Q.left) && (T <= viewportRight()))
            }
        };
        return (xInViewport(S.left) && yInViewport(S.top))
    }
    var L = Class.create({
        initialize: function(Q, P) {
            var S = {
                showDelay: 0,
                hideDelay: 0.2,
                show: Element.show,
                hide: Element.hide,
                offset: 8,
                gravity: I,
                maxWidth: 140,
                className: "ui-tooltip",
                onFocus: false,
                content: function(T) {
                    var U;
                    if (T.hasAttribute("data-orig-title")) {
                        return T.readAttribute("data-orig-title")
                    }
                    U = T.readAttribute("title") || T.readAttribute("alt");
                    T.writeAttribute("data-orig-title", U);
                    T.removeAttribute("title");
                    T.removeAttribute("alt");
                    return U
                }
            };
            this.options = Object.extend(S, P || {});
            if (!C.include(this.options.gravity)) {
                throw new Error("Gravity " + this.options.gravity + " not available")
            }
            this.element = $(Q);
            this.element.on("mouseup", this.onElementDestruct.bindAsEventListener(this));
            if (this.element.match("input, textarea")) {
                this.options.onFocus = true
            }
            this.innerHtml = new Element("div", {
                "class": "ui-inner"
            });
            this.target = this.innerHtml.wrap("div");
            $("szene1").insert({
                bottom: this.target
            });
            if (!this.target.hasClassName(this.options.className)) {
                this.target.addClassName(this.options.className)
            }
            var R = new Element("span", {
                "class": "ui-arrow"
            });
            this.target.insert({
                top: R
            });
            this.target.setStyle({
                position: "absolute",
                display: "none"
            });
            this.onMouseover = this.show.bindAsEventListener(this);
            this.onMouseout = this.hide.bindAsEventListener(this);
            this.enable()
        },
        onElementDestruct: function(P) {
            this.destroyd.delay(0.25, this)
        },
        destroyd: function(P) {
            if (!$(P.element.id)) {
                P.remove()
            }
        },
        hide: function() {
            if (this.timeout) {
                clearTimeout(this.timeout)
            }
            var P = this.options.hide;
            P = P.curry(this.target);
            this.timeout = setTimeout(P, this.options.hideDelay * 1000);
            return this
        },
        show: function(T) {
            if (M) {
                M.target.hide();
                M = null
            }
            if (this.target.visible()) {
                return this
            }
            var S = $("szene1"),
                W = this.options.gravity,
                U = this.options.offset,
                Q, R = this.options.content(this.element);
            if (!R) {
                return this
            }
            this.innerHtml.update(R);
            if (this.options.maxWidth) {
                if (this.target.getWidth() > this.options.maxWidth) {
                    this.target.setStyle({
                        width: this.options.maxWidth + "px"
                    })
                }
            }

            function V(X, a, c, d) {
                var Z = X.cumulativeOffset(),
                    Y = {
                        top: 0,
                        left: 0
                    };
                Y.top = Z.top + ((X.getHeight() - a.getHeight()) / 2);
                Y.left = Z.left + ((X.getWidth() - a.getWidth()) / 2);
                switch (d) {
                    case O:
                        Y = {
                            top: V(X, a, c, I).top,
                            left: Z.left - (a.getWidth() - (X.getWidth() / 2))
                        };
                        break;
                    case B:
                        Y = {
                            top: V(X, a, c, I).top,
                            left: Z.left + (X.getWidth() / 2)
                        };
                        break;
                    case I:
                        Y.top = Z.top - a.getHeight() - c;
                        break;
                    case H:
                        Y = {
                            top: V(X, a, c, E).top,
                            left: Z.left - (a.getWidth() - (X.getWidth() / 2))
                        };
                        break;
                    case K:
                        Y = {
                            top: V(X, a, c, E).top,
                            left: Z.left + (X.getWidth() / 2)
                        };
                        break;
                    case E:
                        Y.top = Z.top + X.getHeight() + c;
                        break;
                    case G:
                        Y.left = Z.left - a.getWidth() - c;
                        break;
                    case J:
                        Y.left = Z.left + X.getWidth() + c;
                        break
                }
                return Y
            }
            Q = V.curry(this.element, this.target, this.options.offset);
            if (("n" == W.charAt(0)) || ("s" == W.charAt(0))) {
                if (!N(Q(W), "top") || !N({
                        top: Q(W).top + this.target.getHeight()
                    }, "top")) {
                    W = D(W)
                }
            }
            if (!N(Q(W), "left")) {
                if ((W === G) || (W === J)) {
                    W = D(W)
                } else {
                    if ((W === E) || (W === H)) {
                        W = K
                    } else {
                        if ((W === I) || (W === O)) {
                            W = B
                        }
                    }
                }
            } else {
                if (!N({
                        left: Q(W).left + this.target.getWidth()
                    }, "left")) {
                    if ((W === G) || (W === J)) {
                        W = D(W)
                    } else {
                        if ((W === E) || (W === K)) {
                            W = H
                        } else {
                            if ((W === I) || (W === B)) {
                                W = O
                            }
                        }
                    }
                }
            }
            this.target.removeClassName(this.options.className + "-" + this.gravity);
            this.target.addClassName(this.options.className + "-" + W);
            this.gravity = W;
            this.target.style.top = A(Q(W), S).top + "px";
            this.target.style.left = A(Q(W), S).left + "px";
            M = this;
            var P = function() {
                var X = this.options.show;
                X(this.target)
            }.bind(this);
            if (this.options.showDelay > 0) {
                this.timeout = setTimeout(P, this.options.showDelay * 1000)
            } else {
                P()
            }
            return this
        },
        enable: function() {
            if (this.options.onFocus) {
                this.element.observe("focusin", this.onMouseover);
                this.element.observe("focusout", this.onMouseout)
            } else {
                this.element.observe("mouseover", this.onMouseover);
                this.element.observe("mouseout", this.onMouseout)
            }
            return this
        },
        disable: function() {
            if (this.options.onFocus) {
                this.element.stopObserving("focusin", this.onMouseover);
                this.element.stopObserving("focusout", this.onMouseout)
            } else {
                this.element.stopObserving("mouseover", this.onMouseover);
                this.element.stopObserving("mouseout", this.onMouseout)
            }
            return this
        },
        remove: function() {
            if (!this.element._tooltip) {
                return
            }
            this.element._tooltip = undefined;
            this.target.remove()
        }
    });
    Element.addMethods({
        tooltip: function(Q, P) {
            if (!Q._tooltip) {
                Q._tooltip = new L(Q, P || {})
            }
            return Q._tooltip
        }
    });
    F.Tooltip = L
})(UI);
UI.Quickpage = function() {
    var B = new Hash();
    var A = Class.create({
        initialize: function(E, D) {
            var F = {
                showDelay: 0.75,
                hideDelay: 0.5,
                onInitShow: false,
                className: "ui-quickpage",
                maxWidth: 0
            };
            this.options = Object.extend(F, D || {});
            E = $(E);
            var C = E.readAttribute("data-quickpage");
            if (!C) {
                throw new Error("No URL for Quickpage fetching found, please make sure that the html-element's data-quickpage attribute contains a valid URL")
            }
            this.url = C;
            this.tooltip = new UI.Tooltip(E, this.options).disable();
            E.observe("mouseover", this.show.bindAsEventListener(this));
            E.observe("mouseout", this.hide.bindAsEventListener(this));
            this.mousedownHandler = null;
            this.tooltip.target.observe("mouseout", this.hide.bindAsEventListener(this));
            this.tooltip.target.observe("mouseover", function(G) {
                clearTimeout(this.tooltip.timeout)
            }.bindAsEventListener(this));
            if (this.options.onInitShow) {
                this.show()
            }
        },
        handlePageLoad: function() {
            this.tooltip.hide()
        },
        show: function(E) {
            if (E) {
                var D = E.findElement().up("a");
                if (D) {
                    this.mousedownHandler = D.on("mousedown", this.handlePageLoad.bindAsEventListener(this))
                }
            }
            if (this.tooltip.target.visible()) {
                clearTimeout(this.tooltip.timeout);
                return
            }
            if (this.quickpage) {
                this.tooltip.options.content = function() {
                    return this.quickpage
                }.bind(this);
                return this.tooltip.show()
            }
            var C = B.get(this.url);
            if (C) {
                this.handleResponse(C)
            } else {
                this.request = new Ajax.Request(this.url, {
                    method: "get",
                    onSuccess: this.handleResponse.bind(this)
                })
            }
        },
        hide: function(D) {
            if (this.mousedownHandler) {
                this.mousedownHandler.stop();
                this.mousedownHandler = null
            }
            var C = D.relatedTarget;
            if (!C) {
                return
            }
            if (C.hasClassName(this.options.className) || C.up(this.options.className)) {
                return D.stop()
            }
            if (this.request) {
                this.request.transport.abort()
            }
            this.tooltip.hide()
        },
        handleResponse: function(C) {
            this.quickpage = C.responseText;
            if (C.responseText) {
                B.set(this.url, C)
            }
            this.tooltip.options.content = function() {
                return C.responseText
            };
            this.tooltip.show()
        },
        remove: function() {
            this.tooltip.remove()
        }
    });
    Element.addMethods("A", {
        quickpage: function(D, C) {
            if (!D._quickpage) {
                D._quickpage = new A(D, C || {})
            }
            return D._quickpage
        }
    });
    return A
}();
var Pager = {
    jumpToSelected: function(A) {
        window.location.href = $F(A)
    },
    pagerSelect2PostClick: function(A) {
        $("pager_pagenumber").value = A;
        $("pagerSaveForm").submit()
    },
    pagerSelect2PostChange: function(A) {
        $("pager_pagenumber").value = A.value;
        $("pagerSaveForm").submit()
    },
    call: function(callbackFunc, callbackField, page) {
        callbackField = $(callbackField);
        callbackField.value = page;
        lastParam = callbackFunc.substr((callbackFunc.length - 1), 1);
        if (lastParam == ";" || lastParam == ")") {
            eval(callbackFunc)
        } else {
            eval(callbackFunc + "()")
        }
    },
    callWithChange: function(C, A, B) {
        C = $(C);
        Pager.call(A, B, C.value)
    }
};
UI.PullDownMenu = function() {
    return Class.create({
        initialize: function(B, A) {
            var D = {},
                C;
            this.options = Object.extend(D, A || {});
            this.element = $(B);
            C = UI.getFragment(this.element.readAttribute("href"));
            if (!C) {
                throw new Error("No target given in link")
            }
            this.menu = $(C);
            this.menu.setStyle({
                display: "none"
            });
            this.onClickHandler = this.onClick.bindAsEventListener(this);
            this.element.observe("click", this.onClickHandler)
        },
        onClick: function(A) {
            A.stop();
            this.menu.toggle()
        },
        show: function() {
            this.menu.show()
        },
        hide: function() {
            this.menu.hide()
        }
    })
}();
UI.UserFacelist = Class.create({
    initialize: function(B, A) {
        var C = {
            groups: ".groups",
            friends: ".friends",
            actions: ".actions",
            selectedClass: "selected",
            visibleClass: "visible",
            disabledClass: "ui-disabled",
            actionSelectAllClass: ".select-all a",
            actionSelectNoneClass: ".select-nothing a"
        };
        this.checked = $A();
        this.options = Object.extend(C, A || {});
        this.element = $(B);
        this._initTranslations();
        this._initDOMReferences();
        this._initEventHandlers()
    },
    setOptions: function(A) {
        this.options = Object.extend(this.options, A)
    },
    getOptions: function() {
        return this.options
    },
    getSelected: function() {
        data = $A();
        for (var B = 0, A = this.checked.length; B < A; ++B) {
            data[B] = $F(this.checked[B])
        }
        return data
    },
    clearSelected: function() {
        this.checked = this.checked.clear()
    },
    disable: function() {
        this.element.addClassName(this.options.disabledClass);
        this.friends.stopObserving("click", this.friendSelectHandler);
        this.friends.stopObserving("click", this.groupSelectHandler);
        this.actions.stopObserving("click", this.actionHandler)
    },
    enable: function() {
        this.element.removeClassName(this.options.disabledClass);
        this._initEventHandlers()
    },
    _handleFriendSelect: function(C) {
        C.stop();
        var B = C.findElement("li");
        var A = B.toggleClassName(this.options.selectedClass).down("input[type=checkbox]");
        if (A.checked) {
            A.checked = false;
            this.checked = this.checked.without(A)
        } else {
            A.checked = true;
            this.checked.push(A)
        }
        this._markAction()
    },
    _handleGroupSelect: function(F) {
        F.stop();
        var D = F.findElement("a");
        if (!D) {
            return
        }
        this.groups.down("a." + this.options.selectedClass).removeClassName(this.options.selectedClass);
        D.addClassName(this.options.selectedClass);
        var B = D.readAttribute("href");
        if (!B.include("#")) {
            return
        }
        var C = B.split("#").last();
        if (C == "all-friends") {
            var E = this.translations.selectAll;
            var A = this.translations.selectNothing;
            this.friends.childElements().each(function(G) {
                G.setStyle({
                    display: "block"
                }).addClassName(this.options.visibleClass)
            }.bind(this))
        } else {
            var E = this.translations.allFromGroup + ": " + D.textContent;
            var A = this.translations.noneFromGroup + ": " + D.textContent;
            this.friends.select(".group." + this.options.visibleClass).each(function(G) {
                G.hide().removeClassName(this.options.visibleClass)
            }.bind(this));
            $(C).show().addClassName(this.options.visibleClass)
        }
        this.actions.down(this.options.actionSelectAllClass).update(E);
        this.actions.down(this.options.actionSelectNoneClass).update(A)
    },
    _handleActions: function(F) {
        F.stop();
        var I = F.findElement("li");
        if (!I) {
            return
        }
        var B = I.hasClassName("select-all") ? "select-all" : "select-none";
        var G = this.groups.select("a." + this.options.selectedClass)[0];
        var A = G.readAttribute("href");
        if (!A.include("#")) {
            return
        }
        var H = A.split("#").last();
        if (H != "all-friends") {
            var D = $(H).select("input[type=checkbox]")
        } else {
            var D = this.friends.select("input[type=checkbox]")
        }
        for (var C = 0, E = D.length; C < E; ++C) {
            D[C].checked = (B == "select-all") ? true : false;
            if (B == "select-all") {
                this.checked[C] = D[C];
                D[C].up().addClassName(this.options.selectedClass)
            } else {
                this.checked = this.checked.clear();
                D[C].up().removeClassName(this.options.selectedClass)
            }
        }
        this._markAction()
    },
    _markAction: function() {
        var A = this.actions.down("a." + this.options.selectedClass);
        if (A) {
            A.removeClassName(this.options.selectedClass)
        }
        if (this.checked.length == 0) {
            this.actions.down(".select-nothing a").addClassName(this.options.selectedClass)
        } else {
            if (this.friends.select("input[type=checkbox]").length == this.checked.length) {
                this.actions.down(".select-all a").addClassName(this.options.selectedClass)
            }
        }
    },
    _initDOMReferences: function() {
        this.groups = this.element.down(this.options.groups);
        this.friends = this.element.down(this.options.friends);
        this.actions = this.element.down(this.options.actions);
        this.groups.down("li:first-child a").addClassName(this.options.selectedClass)
    },
    _initEventHandlers: function() {
        this.friendSelectHandler = this._handleFriendSelect.bindAsEventListener(this);
        this.groupSelectHandler = this._handleGroupSelect.bindAsEventListener(this);
        this.actionHandler = this._handleActions.bindAsEventListener(this);
        this.friends.observe("click", this.friendSelectHandler);
        this.groups.observe("click", this.groupSelectHandler);
        this.actions.observe("click", this.actionHandler)
    },
    _initTranslations: function() {
        this.translations = {
            selectAll: Szene1Translator.translate("all"),
            selectNothing: Szene1Translator.translate("statusPermNobody"),
            allFromGroup: Szene1Translator.translate("allFromGroup"),
            noneFromGroup: Szene1Translator.translate("noneFromGroup")
        }
    }
});
UI.NotificationBar = Class.create({
    template: '<div class="ui-notification">#{body}</div>',
    initialize: function(A, B) {
        var C = {
            hideDelay: 3.5,
            autoHide: true
        };
        this.options = Object.extend(C, B || {});
        this.container = $(A);
        this.boundOnDisplay = this.onDisplay.bindAsEventListener(this);
        this.boundOnClose = this.onClose.bindAsEventListener(this);
        window.Notification.displayed.add(this.boundOnDisplay);
        window.Notification.closed.add(this.boundOnClose)
    },
    onDisplay: function(A) {
        Util.hideAds();
        var B = new Element("div", {
            style: "display: none;"
        });
        B.update(this.template.interpolate(A));
        this.container.insert(B);
        this.toggleVisible(B);
        if (this.options.autoHide) {
            this.timeout = setTimeout(this.boundOnClose, this.options.hideDelay * 1000)
        }
        return false
    },
    onClose: function(A) {
        Util.showAds();
        if (this.timeout) {
            clearTimeout(this.timeout)
        }
        this.toggleVisible(A);
        return false
    },
    toggleVisible: function(A) {
        if (this.actualNotification) {
            new Effect.SlideUp($(this.actualNotification), {
                duration: 0.2,
                afterFinish: function(B) {
                    try {
                        B.element.remove()
                    } catch (C) {}
                }
            });
            this.actualNotification = null
        }
        if (A && A.tagName) {
            new Effect.SlideDown($(A), {
                duration: 0.2
            });
            this.actualNotification = A
        }
        return false
    }
});
UI.Publisher = Class.create({
    initialize: function(B, A) {
        var C = {
            previewTemplate: "##preview##",
            attachmentUrl: "/ajax/timeline/attachment",
            minHeight: 30
        };
        this.options = Object.extend(C, A || {});
        this.element = $(B);
        this.privacyPanel = $("wall-privacy");
        this.showPlaceholder = true;
        this.attachUrl = "";
        this.attachmentReq = null;
        this.createShadow();
        this.initPreview();
        this.initInput();
        $("wall_form").onmouseover = function(D) {
            this.mouseIn = true
        }.bind(this);
        $("wall_form").onmouseout = function(D) {
            this.mouseIn = false
        }.bind(this);
        this.prepareSubmit()
    },
    prepareSubmit: function() {
        var C = new Element("iframe");
        var A = "postFrame_" + Math.floor(Math.random() * 10001);
        C.name = A;
        C.id = A;
        C.src = "about:blank";
        C.style.display = "none";
        C.style.width = "0";
        C.style.height = "0";
        C.style.marginheight = "0";
        C.style.marginwidth = "0";
        var B = 'javascript:(function(){document.open();document.domain="' + document.domain + '";document.write("AA");document.close();})()';
        C.src = B;
        Publisher.iframe = C;
        $("wall_form").target = C.name;
        $("wall_form").action = "/ajax/timeline/post";
        $("wall_form").up().insert(C)
    },
    initPreview: function() {
        this.preview = new Element("div", {
            id: this.element.readAttribute("id") + "-preview",
            "class": "ui-publisher-preview"
        });
        this.preview.hide();
        this.privacyPanel.insert({
            after: this.preview
        });
        Publisher.preview = this.preview;
        this.attachment = new Element("input", {
            type: "hidden",
            id: this.element.readAttribute("id") + "-attachment",
            name: this.element.readAttribute("id") + "-attachment"
        });
        this.privacyPanel.insert({
            after: this.attachment
        })
    },
    initInput: function() {
        if (this.showPlaceholder) {
            this.createPlaceHolder(this.element);
            this.element.observe("focus", this.focus.bindAsEventListener(this, this.element));
            this.element.observe("blur", this.blur.bindAsEventListener(this, this.element))
        } else {
            this.resize(this.element, "")
        }
        this.element.observe("text:change", this.onTextChange.bindAsEventListener(this));
        $("wall_form").observe("submit", this.submitPosting.bindAsEventListener(this))
    },
    focus: function(B, A) {
        if ($F(A) == A.readAttribute("data-placeholder").trim()) {
            A.setValue("");
            this.privacyPanel.show();
            $("wall_form").setStyle({
                background: "#F7F7F7"
            })
        }
        return true
    },
    blur: function(B, A) {
        if (this.showPlaceholder && $F(A) == "") {
            this.createPlaceHolder(A)
        }
        return true
    },
    resize: function(C, D) {
        this._shadow.innerHTML = D.replace(/\n/g, "<br/>");
        var A = parseInt(C.getStyle("lineHeight").replace("px", "")) || 15;
        var B = Math.max(parseInt(this._shadow.getHeight()) + A, this.options.minHeight);
        C.setStyle({
            height: B + "px"
        })
    },
    onTextChange: function(A) {
        var B = this.getValidValue(this.element);
        this.resize(this.element, B);
        if (!B) {
            this.showPlaceholder = true;
            return
        } else {
            this.showPlaceholder = false
        }
        linkRegex = /((mailto\:|(news|(ht|f)tp(s?))\:\/\/){1}\S+)/, szene1Regex = /http:\/\/(local\.szene1\/event\/.*|local\.szene1\/user\/.*\/album\/\d+)/, matched = $A();
        B.scan(linkRegex, function(C) {
            matched.push(C[0])
        });
        if ((matched.length > 0) && (matched.last() != this.lastMatch)) {
            if (this.attachmentReq) {
                this.attachmentReq.transport.abort()
            }
            this.attachmentReq = new Ajax.Request(this.options.attachmentUrl, {
                parameters: {
                    url: matched.last()
                },
                onLoading: function() {
                    this.preview.update(Loader.get());
                    this.preview.down("span.icon-16-loading").setOpacity(0.3)
                }.bind(this),
                onSuccess: this.attachmentResponse.bindAsEventListener(this),
                onComplete: Loader.remove()
            })
        }
    },
    attachmentResponse: function(C) {
        var A = C.responseJSON;
        this.lastMatch = matched.last();
        if (A.description) {
            A.description = A.description.truncate(200)
        }
        this.attachUrl = A.attachmentUri;
        if (A.preview) {
            var B = new Element("a", {
                href: "#",
                "class": "icon-16-delete-circle clear-preview tooltip icon-op",
                title: "Preview entfernen",
                onmouseover: "this.tooltip().show();"
            });
            $(B).observe("click", function(D) {
                D.stop();
                this.resetPreview()
            }.bindAsEventListener(this));
            this.preview.update(this.options.previewTemplate.sub("##preview##", A.preview)).insert(B);
            this.preview.show();
            this.attachment.setValue(Object.toJSON(A))
        } else {
            this.resetPreview()
        }
        this.attachmentReq = null
    },
    resetPreview: function() {
        this.attachment.setValue();
        this.attachUrl = "";
        this.preview.hide().update();
        this.lastMatch = undefined
    },
    submitPosting: function(F) {
        var G = this.getValidValue(this.element);
        if (!G) {
            this.element.focus();
            return false
        }
        var C = this.element.up("form");
        this.element.insert({
            after: Loader.get("24")
        });
        var E = Form.serializeElements(C.getInputs("checkbox"), {
            hash: true
        });
        if ($("wall-publish-priv")) {
            E = Object.extend(E, {
                "wall-publish-priv": $F("wall-publish-priv")
            })
        }
        var A = Timeline.instance();
        var B = $("wall-publish-geo-value");
        if (B) {
            B = Object.toJSON(B.param)
        }
        E = Object.extend(E, {
            "wall-destination-type": A.options.oType,
            "wall-destination-id": A.options.oId,
            "wall-publish-geo-value": B,
            "wall-publish-text-value": G,
            "wall-attachment-uri": this.attachUrl,
            "wall-posting-type": (A.options.postingtype ? A.options.postingtype : "default"),
            gfk: $F("gfk")
        });
        var D = new Array();
        $H(E).each(function(H) {
            ele = new Element("input", {
                type: "hidden",
                name: H.key,
                value: H.value
            });
            D.push(ele);
            C.appendChild(ele)
        });
        C.submit();
        Publisher.iframe.observe("load", Publisher.onloadCallback.bindAsEventListener(this));
        Publisher.elements_cleanup = D;
        this.doSubmit();
        return false
    },
    doSubmit: function() {},
    afterSubmit: function(A) {
        return false
    },
    resetView: function() {
        this.createPlaceHolder(this.element)
    },
    handlePostResponse: function(B) {
        if (B.valid != true || !B.wallpost) {
            if (B.showLogin) {
                Login.doAjaxLogin()
            } else {
                if (B.doublecontent) {
                    ualert("Fehler, dieser Inhalt wurde bereits gepostet!")
                } else {
                    unotify("Fehler, bitte versuch es nocheinmal.")
                }
            }
            this.afterSubmit(false)
        } else {
            this.afterSubmit(true);
            this.resetPreview();
            this.resetView();
            this.privacyPanel.hide();
            if (!RealTime.instance().haveEvDataId(B.dataid)) {
                RealTime.instance().addEvDataId(B.dataid);
                Timeline.instance().container.insert({
                    top: '<li class="clearfix">' + B.wallpost + "</li>"
                });
                Timeline.instance().container.firstDescendant().setStyle({
                    backgroundColor: "#f9f9f9"
                })
            }
        }
        var A = $("loadingbox_");
        if (A) {
            new Effect.BlindUp(A, {
                duration: 0.3
            })
        }
        Loader.remove()
    },
    getValidValue: function(A) {
        var B = $F(A).trim();
        if (!B || (B == "") || B == A.readAttribute("data-placeholder").trim()) {
            return ""
        }
        return B
    },
    createPlaceHolder: function(A) {
        if (!A) {
            A = this.element
        }
        A.setValue(A.readAttribute("data-placeholder").trim());
        this.resize(A, A.readAttribute("data-placeholder").trim())
    },
    createShadow: function() {
        this._shadow = new Element("div").setStyle({
            lineHeight: this.element.getStyle("line-height"),
            fontSize: this.element.getStyle("fontSize"),
            fontFamily: this.element.getStyle("fontFamily"),
            position: "absolute",
            top: "-10000px",
            left: "-10000px",
            width: this.element.getWidth() + "px"
        });
        this.privacyPanel.insert({
            after: this._shadow
        })
    }
});
var Publisher = {
    setGeo: function(B, A) {
        if ($("wall-publish-geo-value")) {
            $("wall-publish-geo-value").setValue("{long:" + B + ", lat:" + A + "}");
            return true
        }
        return false
    },
    onloadCallback: function(B) {
        Loader.remove();
        var C = this.element.up("form");
        C.enable();
        Util.oewaReload("feed_user_publish");
        Publisher.elements_cleanup.each(function(D) {
            C.removeChild(D)
        });
        var A = null;
        if (Publisher.iframe.contentWindow) {
            A = Publisher.iframe.contentWindow
        } else {
            if (Publisher.iframe.contentDocument) {
                A = Publisher.iframe.contentDocument.defaultView
            }
        }
        this.handlePostResponse(A.response)
    },
    showPreview: function() {
        var A = '<div class="box-dynamic box-ajax" style="width:430px;"> 				<h3>Vorschau</h3> 				<a class="icon-16-delete" data-close="kill" title="close"></a> 				<div class="box-inner">' + Publisher.preview.innerHTML + "</div> 				</div>";
        var B = UI.Dialog.fromString(A, {
            modal: true,
            hideOnClick: true,
            drag: true
        });
        B.show()
    }
};
UI.fbShare = function(B) {
    var C = 640;
    var F = 460;
    var A = window.screen.height / 2 - (F / 2);
    var D = window.screen.width / 2 - (C / 2);
    var E = window.open(B, "Share", "status=1,height=" + F + ",width=" + C + ",top=" + A + ",left=" + D + ",resizable=0")
};
UI.FunPublisher = Class.create(UI.Publisher, {
    initialize: function(A, D, B) {
        var C = {
            previewTemplate: "##preview##",
            attachmentUrl: "/ajax/timeline/attachment",
            minHeight: 30
        };
        this.options = Object.extend(C, B || {});
        this.element = $(A);
        this.urlElement = $(D);
        this.privacyPanel = $("wall-placeholder");
        this.showPlaceholder = true;
        this.attachUrl = "";
        this.attachmentReq = null;
        this.createShadow();
        this.initPreview();
        this.initInput();
        $("wall_form").onmouseover = function(E) {
            this.mouseIn = true
        }.bind(this);
        $("wall_form").onmouseout = function(E) {
            this.mouseIn = false
        }.bind(this);
        this.prepareSubmit()
    },
    resetPreview: function() {
        this.attachment.setValue();
        this.attachUrl = "";
        this.preview.update();
        this.lastMatch = undefined;
        $("attachment-status").update("Status: Kein Attachment.")
    },
    attachmentResponse: function(B) {
        var A = B.responseJSON;
        this.lastMatch = matched.last();
        if (A.description) {
            A.description = A.description.truncate(200)
        }
        this.attachUrl = A.attachmentUri;
        if (A.preview) {
            $("attachment-status").update("Status: Attachment gefunden. (Typ: " + A.prettytype + ', <a onclick="Publisher.showPreview()">Vorschau</a>)');
            this.preview.update(this.options.previewTemplate.sub("##preview##", A.preview)).insert(clearButton);
            this.attachment.setValue(Object.toJSON(A))
        } else {
            this.resetPreview();
            $("attachment-status").update("Status: <font color=red>Fehlerhafte URL!</font>")
        }
        this.attachmentReq = null
    },
    resetView: function() {
        $("wall_form").reset();
        this.createPlaceHolder(this.element);
        this.createPlaceHolder(this.urlElement)
    },
    initInput: function() {
        if (this.showPlaceholder) {
            this.createPlaceHolder(this.element);
            this.createPlaceHolder(this.urlElement);
            this.urlElement.observe("focus", this.focus.bindAsEventListener(this, this.urlElement));
            this.urlElement.observe("blur", this.blur.bindAsEventListener(this, this.urlElement));
            this.element.observe("focus", this.focus.bindAsEventListener(this, this.element));
            this.element.observe("blur", this.blur.bindAsEventListener(this, this.element))
        } else {
            this.resize(element, "")
        }
        this.urlElement.observe("blur", this.onUrlChange.bindAsEventListener(this));
        $("wall_form").observe("submit", this.submitPosting.bindAsEventListener(this))
    },
    onTextChange: function(A) {},
    doSubmit: function() {
        $("wall_form").hide();
        $("do_upload").show()
    },
    afterSubmit: function(A) {
        if (A) {
            $("do_upload").hide();
            $("success_uploaded").show()
        } else {
            $("wall_form").show();
            $("do_upload").hide()
        }
    },
    onUrlChange: function(A) {
        var B = this.getValidValue(this.urlElement);
        this.lastUrl = B;
        this.resize(this.urlElement, B);
        if (!B) {
            this.showPlaceholder = true;
            return
        } else {
            this.showPlaceholder = false
        }
        if (B.substr(0, 7) != "http://" && B.substr(0, 8) != "https://") {
            B = "http://" + B
        }
        linkRegex = /((mailto\:|(news|(ht|f)tp(s?))\:\/\/){1}\S+)/, szene1Regex = /http:\/\/(local\.szene1\/event\/.*|local\.szene1\/user\/.*\/album\/\d+)/, matched = $A();
        B.scan(linkRegex, function(C) {
            matched.push(C[0])
        });
        if ((matched.length > 0) && (matched.last() != this.lastMatch)) {
            $("attachment-status").update("<span style='float:left'>" + Loader.get(16) + "</span>&nbsp; Adresse wird überprüft...");
            if (this.attachmentReq) {
                this.attachmentReq.transport.abort()
            }
            this.attachmentReq = new Ajax.Request(this.options.attachmentUrl, {
                parameters: {
                    url: matched.last()
                },
                onLoading: function() {
                    this.preview.update(Loader.get());
                    this.preview.down("span.icon-16-loading").setOpacity(0.3)
                }.bind(this),
                onSuccess: this.attachmentResponse.bindAsEventListener(this)
            })
        }
    }
});
UI.CalIntInit = function() {
    Date.ABBR_MONTHNAMES = "Jan Feb Mar Apr Mai Jun Jul Aug Sep Okt Nov Dez".split(" ");
    Date.ABBR_DAYNAMES = "So Mo Di Mi Do Fr Sa".split(" ");
    Date.addPattern(Date.removePattern("us"), "world_urlsafe")
};
UI.CalHtml = '<div class="datepicker_inside"><span class="arrow left"><a href="" class="icon-24-arrow-left tooltip icon-op" title="Datum -"></a></span><ul class="ul-calendar day float-l"></ul><span class="arrow right" ><a href="" class="icon-24-arrow-right tooltip icon-op" title="Datum +"></a></span><span class="full_calendar_button" ><a href="" class="icon-32-calendar tooltip icon-op" title="full calendar"></a></span><br class="clearfix"/><ul id="cal_months" style="display:none;" class="ul-calendar mt month clearfix"></ul><ul id="cal_years" style="display:none;" class="ul-calendar mt year clearfix"></ul></div>';
UI.DatePicker = function() {
    var A = Class.create({
        initialize: function(B) {
            var C = {
                startDate: null,
                callBackFunc: null,
                onInitCallback: false,
                dateOutFormat: "%A, %d %B %Y",
                selectedClass: "selected",
                weekendClass: "weekend",
                cellClass: "li.clearfix",
                dayRange: 14,
                incRange: 1,
                incIntervall: 0.2,
                templDay: new Template('<li class="clearfix" style="cursor:pointer;" ><a>#{dayName}<span>#{dayNum}</span>#{monthName}</a></li>'),
                templExtendedElement: new Template('<li id="#{id}"><a href="">#{name}</a></li>')
            };
            UI.CalIntInit();
            this.options = Object.extend(C, B || {});
            this.cellClass = this.options.cellClass;
            this.container = $("cal_datepicker");
            this.container.insert(UI.CalHtml);
            this.container.addClassName("number_days_" + this.options.dayRange);
            this.calendarElement = this.container.down("ul.ul-calendar");
            this.leftArrow = this.calendarElement.previous();
            this.rightArrow = this.calendarElement.next();
            this.extendedHandle = this.rightArrow.next();
            this.monthsElement = $("cal_months");
            this.yearsElement = $("cal_years");
            this.today = Date.current();
            this.todayString = this.dateString(this.today);
            var D;
            if (this.container.hasAttribute("data-startdate")) {
                D = Date.create(this.container.readAttribute("data-startdate"))
            } else {
                if (this.options.startDate == null) {
                    D = this.today.clone()
                } else {
                    D = Date.create(this.options.startDate)
                }
            }
            if (!(D instanceof Date)) {
                throw new Error("no valid Date [String or Object] given for DatePicker#initialize")
            }
            if (this.options.onInitCallback) {
                this.newDateSelected(D)
            } else {
                this.selectedDate = D.clone()
            }
            this.centerDay = this.selectedDate.clone();
            this.init();
            this.newDayRange()
        },
        init: function() {
            this.monthsElement.update();
            Date.ABBR_MONTHNAMES.each(function(B) {
                this.monthsElement.insert(this.options.templExtendedElement.evaluate({
                    id: "_m_" + Date.ABBR_MONTHNAMES.indexOf(B),
                    name: B
                }))
            }.bind(this));
            this.updateMonthList(this.centerDay);
            this.updateYearList(this.centerDay);
            this.leftArrow.on("click", this.handleDateClickInc.bindAsEventListener(this));
            this.rightArrow.on("click", this.handleDateClickInc.bindAsEventListener(this));
            this.leftArrow.on("mousedown", this.handleDateInc.bindAsEventListener(this));
            this.rightArrow.on("mousedown", this.handleDateInc.bindAsEventListener(this));
            this.leftArrow.on("mouseup", this.stopDateInc.bindAsEventListener(this));
            this.rightArrow.on("mouseup", this.stopDateInc.bindAsEventListener(this));
            this.dayClickHandler = this.calendarElement.on("click", this.cellClass, this.dayClicked.bindAsEventListener(this));
            this.monthClickHandler = this.monthsElement.on("click", this.monthClicked.bindAsEventListener(this));
            this.yearClickHandler = this.yearsElement.on("click", this.yearClicked.bindAsEventListener(this));
            this.extendedHandler = this.extendedHandle.on("click", this.handleShowExtended.bindAsEventListener(this));
            this.wheelHandler = this.container.on("mousewheel", this.handleWheel.bindAsEventListener(this));
            this.wheelHandler = this.container.on("DOMMouseScroll", this.handleWheel.bindAsEventListener(this))
        },
        over: function(B) {
            this.toggleTools("show")
        },
        out: function(B) {
            this.toggleTools("hide")
        },
        toggleTools: function(B) {
            this.tools.invoke(B);
            return
        },
        handleShowExtended: function(B) {
            B.stop();
            this.extendedHandle.down("a").toggleClassName("icon-32-calendar-active");
            this.monthsElement.toggle();
            this.yearsElement.toggle()
        },
        handleWheel: function(C) {
            C.stop();
            var B = (Event.wheel(C) > 0) ? this.options.incRange : -this.options.incRange;
            this.centerDay.add(B);
            this.newDayRange()
        },
        handleDateClickInc: function(C) {
            var B = C.findElement("span.arrow");
            C.stop();
            if (B) {
                this.stopDateInc();
                if (B == this.leftArrow) {
                    this.centerDay.add(-this.options.incRange)
                } else {
                    if (B == this.rightArrow) {
                        this.centerDay.add(this.options.incRange)
                    }
                }
                this.newDayRange()
            }
            return false
        },
        handleDateInc: function(C) {
            var B = C.findElement("span.arrow");
            C.stop();
            if (B) {
                if (B == this.leftArrow) {
                    this.pInc = -this.options.incRange
                } else {
                    if (B == this.rightArrow) {
                        this.pInc = this.options.incRange
                    }
                }
                this.pex = new PeriodicalExecuter(this.incDate.bind(this), this.options.incIntervall)
            }
            return false
        },
        stopDateInc: function() {
            if (this.pex) {
                this.pex.stop();
                this.pex = null
            }
            return false
        },
        incDate: function(B) {
            this.centerDay.add(this.pInc);
            this.newDayRange()
        },
        newDayRange: function() {
            this.wheelHandler.stop();
            var B = this.centerDay.clone().add(-(Math.floor(this.options.dayRange / 2)));
            var E = new Array();
            for (var C = 0; C < this.options.dayRange; C++) {
                var D = B.clone().add(C);
                E[C] = D
            }
            this.writeDays(E);
            this.wheelHandler.start()
        },
        writeDays: function(B) {
            this.calendarElement.update();
            B.each(function(D) {
                var E = {
                    dayName: D.getAbbrDayName(),
                    dayNum: D.getDate(),
                    monthName: D.getAbbrMonthName()
                };
                this.calendarElement.insert(this.options.templDay.evaluate(E));
                var C = this.calendarElement.childElements().last();
                C.mydate = D;
                if (this.isWeekendDay(D)) {
                    C.addClassName(this.options.weekendClass)
                }
                if (this.dateString(D) == this.dateString(this.selectedDate)) {
                    C.addClassName(this.options.selectedClass)
                } else {
                    if (this.isToday(D)) {
                        C.addClassName(this.options.weekendClass);
                        C.setStyle({
                            backgroundColor: "#D2EC81"
                        })
                    }
                }
            }.bind(this))
        },
        updateYearList: function(C) {
            this.yearsElement.update();
            var B = C.getFullYear();
            [B - 1, B, B + 1].each(function(D) {
                this.yearsElement.insert(this.options.templExtendedElement.evaluate({
                    id: "_y_" + D,
                    name: D
                }))
            }.bind(this));
            $("_y_" + B).addClassName(this.options.selectedClass)
        },
        updateMonthList: function(B) {
            this.monthsElement.select("li." + this.options.selectedClass).each(function(C) {
                C.removeClassName(this.options.selectedClass)
            }.bind(this));
            $("_m_" + B.getMonth()).addClassName(this.options.selectedClass)
        },
        isWeekendDay: function(B) {
            return [6].any(function(C) {
                return B.getDay() == C
            })
        },
        isToday: function(B) {
            return this.dateString(B) == this.todayString
        },
        dayClicked: function(C) {
            var B = C.findElement(this.cellClass);
            C.stop();
            if (B) {
                this.calendarElement.select("li." + this.options.selectedClass).each(function(D) {
                    D.removeClassName(this.options.selectedClass)
                }.bind(this));
                B.addClassName(this.options.selectedClass);
                this.newDateSelected(B.mydate);
                this.updateMonthList(this.selectedDate);
                this.updateYearList(this.selectedDate)
            }
        },
        monthClicked: function(D) {
            var C = D.findElement("li");
            D.stop();
            if (C) {
                var B = C.id.split("_m_").last();
                this.centerDay.setMonth(B);
                this.centerDay.setDate(1);
                this.newDateSelected(this.centerDay.clone());
                this.updateMonthList(this.selectedDate);
                this.newDayRange();
            }
            return false
        },
        yearClicked: function(C) {
            var B = C.findElement("li");
            C.stop();
            if (B) {
                var D = B.id.split("_y_").last();
                this.centerDay.setFullYear(D);
                this.newDateSelected(this.centerDay.clone());
                this.updateYearList(this.selectedDate);
                this.newDayRange()
            }
            return false
        },
        newDateSelected: function(B) {
            this.selectedDate = B;
            if (this.options.callBackFunc) {
                this.options.callBackFunc(this.selectedDate.strftime(this.options.dateOutFormat))
            } else {
                this.container.fire("date:selected", {
                    date: this.selectedDate
                })
            }
        },
        showDate: function(B, C) {
            this.centerDay = Date.create(B);
            if (!(this.centerDay instanceof Date)) {
                throw new Error("no valid Date [String or Object] given for DatePicker#showDate")
            }
            this.selectedDate = this.centerDay.clone();
            this.updateMonthList(this.centerDay);
            this.updateYearList(this.centerDay);
            this.newDayRange();
            if (C) {
                this.newDateSelected(this.centerDay)
            }
        },
        dateString: function(B) {
            return B.getDate() + "-" + B.getMonth() + "-" + B.getYear()
        }
    });
    return A
}();
Object.extend(Event, {
    wheel: function(A) {
        var B = 0;
        if (!A) {
            A = window.event
        }
        if (A.wheelDelta) {
            B = A.wheelDelta / 120;
            if (window.opera) {
                B = -B
            }
        } else {
            if (A.detail) {
                B = -A.detail / 3
            }
        }
        return Math.round(B)
    }
});
(function(A) {
    var J = 24 * 60 * 60 * 1000;

    function F(N, O) {
        N = N + "";
        var M = O - N.length;
        if (M <= 0) {
            return N
        }
        return Array(M + 1).join("0") + N
    }

    function G(O, M) {
        for (var N in M) {
            if (Object.prototype.hasOwnProperty.call(M, N)) {
                O[N] = M[N]
            }
        }
    }
    var C = {
        millisecond: 1,
        second: 1000,
        minute: 60 * 1000,
        hour: 60 * 60 * 1000,
        day: J,
        week: 7 * J,
        month: {
            add: function(P, N) {
                var M = P.getDate();
                C.year.add(P, Math[N > 0 ? "floor" : "ceil"](N / 12));
                var O = P.getMonth() + (N % 12);
                if (O == 12) {
                    O = 0;
                    P.setYear(P.getFullYear() + 1)
                } else {
                    if (O == -1) {
                        O = 11;
                        P.setYear(P.getFullYear() - 1)
                    }
                }
                P.setMonth(O);
                if (P.getDate() != M) {
                    P.add(-1, "month");
                    P.setDate(P.daysInMonth())
                }
            },
            diff: function(Q, O) {
                var M = Q.getFullYear() - O.getFullYear();
                var N = Q.getMonth() - O.getMonth() + (M * 12);
                var P = Q.getDate() - O.getDate();
                return N + (P / 30)
            }
        },
        year: {
            add: function(N, M) {
                N.setYear(N.getFullYear() + Math[M > 0 ? "floor" : "ceil"](M))
            },
            diff: function(N, M) {
                return C.month.diff(N, M) / 12
            }
        }
    };
    var B = C;
    B.milliseconds = B.millisecond;
    B.seconds = B.second;
    B.minutes = B.minute;
    B.hours = B.hour;
    B.weeks = B.week;
    B.days = B.day;
    B.months = B.month;
    B.years = B.year;
    var I = {
        succ: function(M) {
            return this.clone().add(1, M)
        },
        add: function(O, N) {
            var M = C[N] || C.day;
            if (typeof M == "number") {
                this.setTime(this.getTime() + (M * O))
            } else {
                M.add(this, O)
            }
            return this
        },
        diff: function(N, Q, M) {
            var P;
            N = Date.create(N);
            if (N === null) {
                return NaN
            }
            var O = C[Q] || C.day;
            if (typeof O == "number") {
                P = (this.getTime() - N.getTime()) / O
            } else {
                P = O.diff(this, N)
            }
            return (M ? P : Math[P > 0 ? "floor" : "ceil"](P))
        },
        _applyFormat: function(N, O) {
            var Q = N || O.defaultFormat,
                M = "",
                P;
            while (Q.length > 0) {
                if ((P = Q.match(O.matcher))) {
                    M += Q.slice(0, P.index);
                    M += (P[1] || "") + this._applyFormatChar(P[2], O);
                    Q = Q.slice(P.index + P[0].length)
                } else {
                    M += Q, Q = ""
                }
            }
            return M
        },
        _applyFormatChar: function(P, N) {
            if (N.shortcuts && N.shortcuts[P]) {
                return this._applyFormat(N.shortcuts[P], N)
            } else {
                if (N.codes && N.codes[P]) {
                    var M = N.codes[P].split(".");
                    var O = this["get" + M[0]] ? this["get" + M[0]]() : "";
                    if (M[1]) {
                        O = F(O, M[1])
                    }
                    return O
                }
            }
            return P
        },
        format: function(M) {
            M = M || Date.formatting.strftime.defaultFormat;
            if (M.indexOf("%") > -1) {
                return this.strftime(M)
            }
            return this.formatPhp(M)
        },
        getShortYear: function() {
            return this.getYear() % 100
        },
        getMonthNumber: function() {
            return this.getMonth() + 1
        },
        getMonthName: function() {
            return Date.MONTHNAMES[this.getMonth()]
        },
        getAbbrMonthName: function() {
            return Date.ABBR_MONTHNAMES[this.getMonth()]
        },
        getDayName: function() {
            return Date.DAYNAMES[this.getDay()]
        },
        getAbbrDayName: function() {
            return Date.ABBR_DAYNAMES[this.getDay()]
        },
        getDayOrdinal: function() {
            return Date.ORDINALNAMES[this.getDate() % 10]
        },
        getHours12: function() {
            var M = this.getHours();
            return M > 12 ? M - 12 : (M == 0 ? 12 : M)
        },
        getAmPm: function() {
            return this.getHours() >= 12 ? "PM" : "AM"
        },
        getAmPmLower: function() {
            return this.getHours() >= 12 ? "pm" : "am"
        },
        getUnix: function() {
            return Math.round(this.getTime() / 1000, 0)
        },
        getUTCOffset: function() {
            var M = this.getTimezoneOffset() / 60;
            var N = M < 0 ? "+" : "-";
            M = Math.abs(M);
            return N + F(Math.floor(M), 2) + ":" + F((M % 1) * 60, 2)
        },
        setUTCOffset: function(O) {
            var N = this.getTimezoneOffset();
            var M = this.getTime() + (N * 60000);
            this.setTime(M - (O * 60000));
            return this
        },
        setUTCOffsetString: function(O) {
            var M = O.match(/([+-]?)([01]\d|2[0-3])\:?([0-5]\d)/);
            if (M) {
                var N = parseFloat(M[2]) * 60;
                N += parseFloat(M[3]);
                if (M[1] == "-") {
                    N *= -1
                }
                this.setUTCOffset(N)
            }
            return this
        },
        getUTCOffsetNumber: function() {
            return this.getUTCOffset().replace(":", "")
        },
        getTimezoneName: function() {
            var M = /(?:\((.+)\)$| ([A-Z]{3}) )/.exec(this.toString());
            return M[1] || M[2] || "GMT" + this.getUTCOffset()
        },
        toYmdInt: function() {
            return (this.getFullYear() * 10000) + (this.getMonthNumber() * 100) + this.getDate()
        },
        clone: function() {
            return new Date(this.getTime())
        },
        diffText: function(P) {
            var R = this.diff(P || Date.current(), "seconds");
            var Q = Math.abs(R);
            var N;
            if (Q < 120) {
                return R >= 0 ? "in a moment" : "moments ago"
            } else {
                if (Q < 3600) {
                    N = floor(Q / 60) + " minutes"
                } else {
                    if (Q < 86400) {
                        var M = floor(Q / 3600);
                        var O = hour == 1 ? "" : "s";
                        N = M + " hour" + O + " ago"
                    } else {
                        if (Q < 172800) {
                            return R > 0 ? "tomorrow" : "yesterday"
                        } else {
                            if (Q < 604800) {
                                N = floor(Q / 86400) + " days"
                            } else {
                                if (Q < 1209600) {
                                    return R > 0 ? "next week" : "last week"
                                } else {
                                    if (Q < 2419200) {
                                        N = floor(Q / 604800) + " weeks"
                                    } else {
                                        if (Q < 5184000) {
                                            return R > 0 ? "next month" : "last month"
                                        } else {
                                            if (Q < 31536000) {
                                                N = floor(Q / 2592000) + " months"
                                            } else {
                                                if (Q < 63072000) {
                                                    return R > 0 ? "next year" : "last year"
                                                } else {
                                                    N = floor(Q / 31536000) + " years"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            return (R > 0 ? "in " + N : N + " ago")
        },
        daysInMonth: function() {
            return Date.daysInMonth(this.getFullYear(), this.getMonth() + 1)
        },
        isLeapYear: function() {
            return Date.daysInMonth(this.getFullYear(), 1) == 29 ? 1 : 0
        }
    };
    G(Date.prototype, I);
    if (!Date.prototype.toISOString) {
        Date.prototype.toISOString = function() {
            return this.setUTCOffset(0).strftime(Date.ISO)
        }
    }
    var D = {
        create: function(N) {
            if (typeof N == "undefined") {
                return Date.current()
            }
            if (N instanceof Date) {
                return N
            }
            var U = arguments;
            switch (U.length) {
                case 1:
                    if (Object.prototype.toString.call(N) == "[object Number]") {
                        return new Date(N)
                    }
                    N = String(N).replace(/^\s*(.*)\s*$/, "$1");
                    if (N === "") {
                        return Date.current()
                    }
                    var P = 0,
                        R, M, O, Q, T, S;
                    while ((R = Date.create.patterns[P++])) {
                        if (typeof R[0] == "string") {
                            T = R[1];
                            S = R[2]
                        } else {
                            T = R[0];
                            S = R[1]
                        }
                        if (!(Q = N.match(T))) {
                            continue
                        }
                        if (typeof S == "function") {
                            O = S(Q, N);
                            if (O instanceof Date) {
                                return O
                            }
                        } else {
                            M = Date.parse(N.replace(T, S));
                            if (!isNaN(M)) {
                                return new Date(M)
                            }
                        }
                    }
                    return NaN;
                case 2:
                    return new Date(U[0], U[1], 1);
                case 3:
                    return new Date(U[0], U[1], U[2]);
                case 4:
                    return new Date(U[0], U[1], U[2], U[3]);
                case 5:
                    return new Date(U[0], U[1], U[2], U[3], U[4]);
                case 6:
                    return new Date(U[0], U[1], U[2], U[3], U[4], U[5]);
                default:
                    return new Date(U[0], U[1], U[2], U[3], U[4], U[5], U[6])
            }
        },
        MONTHNAMES: "January February March April May June July August September October November December".split(" "),
        ABBR_MONTHNAMES: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
        DAYNAMES: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
        ABBR_DAYNAMES: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
        ORDINALNAMES: "th st nd rd th th th th th th".split(" "),
        ISO: "%Y-%m-%dT%H:%M:%S.%N%G",
        SQL: "%Y-%m-%d %H:%M:%S",
        SCRIPT_LOAD: new Date,
        daysInMonth: function(M, N) {
            if (N == 2) {
                return new Date(M, 1, 29).getDate() == 29 ? 29 : 28
            }
            return [undefined, 31, undefined, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][N]
        },
        autoFormat: function(N, M) {
            N = (typeof N == "string" ? document.getElementById(N) : N);

            function O() {
                var P = Date.create(N.value);
                if (P) {
                    N.value = P.format(M)
                }
            }
            if (typeof N.attachEvent == "function") {
                N.attachEvent("onblur", O)
            } else {
                if (typeof N.addEventListener == "function") {
                    N.addEventListener("blur", O, false)
                } else {
                    N.onblur = O
                }
            }
            return N
        },
        addFormat: function(M, N) {
            Date.prototype[M] = function(O) {
                return this._applyFormat(O, N)
            };
            return this
        },
        addPattern: function(M, O) {
            if (O) {
                var N = 0,
                    P;
                while ((P = Date.create.patterns[N++])) {
                    if (P[0] == O || P[1] == O) {
                        Date.create.patterns.splice(N, 0, M);
                        return this
                    }
                }
            }
            Date.create.patterns.unshift(M);
            return this
        },
        removePattern: function(M) {
            var N = 0,
                O;
            while ((O = Date.create.patterns[N++])) {
                if (O[0] == M || O[1] == M) {
                    return Date.create.patterns.splice(N - 1, 1)[0]
                }
            }
            return false
        },
        current: function() {
            return new Date
        }
    };
    G(Date, D);
    if (!("now" in Date)) {
        Date.now = function() {
            return Date.current().setUTCOffset(0).getTime()
        }
    }
    Date.addFormat("strftime", {
        matcher: /()%(#?(%|[a-z]))/i,
        defaultFormat: "%Y-%m-%d %H:%M:%s",
        codes: {
            Y: "FullYear",
            y: "ShortYear.2",
            m: "MonthNumber.2",
            "#m": "MonthNumber",
            B: "MonthName",
            b: "AbbrMonthName",
            d: "Date.2",
            "#d": "Date",
            e: "Date",
            A: "DayName",
            a: "AbbrDayName",
            w: "Day",
            o: "DayOrdinal",
            H: "Hours.2",
            "#H": "Hours",
            I: "Hours12.2",
            "#I": "Hours12",
            P: "AmPmLower",
            p: "AmPm",
            M: "Minutes.2",
            "#M": "Minutes",
            S: "Seconds.2",
            "#S": "Seconds",
            s: "Unix",
            N: "Milliseconds.3",
            "#N": "Milliseconds",
            O: "TimezoneOffset",
            Z: "TimezoneName",
            G: "UTCOffset"
        },
        shortcuts: {
            F: "%Y-%m-%d",
            T: "%H:%M:%S",
            X: "%H:%M:%S",
            x: "%m/%d/%y",
            D: "%m/%d/%y",
            "#c": "%a %b %e %H:%M:%S %Y",
            v: "%e-%b-%Y",
            R: "%H:%M",
            r: "%I:%M:%S %p",
            t: "\t",
            n: "\n",
            "%": "%"
        }
    });
    Date.addFormat("formatPhp", {
        matcher: /(\\)?([a-z])/i,
        defaultFormat: "Y-m-d H:i:s",
        codes: {
            Y: "FullYear",
            y: "ShortYear.2",
            L: "isLeapYear",
            m: "MonthNumber.2",
            n: "MonthNumber",
            F: "MonthName",
            M: "AbbrMonthName",
            t: "daysInMonth",
            d: "Date.2",
            j: "Date",
            l: "DayName",
            D: "AbbrDayName",
            w: "Day",
            S: "DayOrdinal",
            H: "Hours.2",
            G: "Hours",
            h: "Hours12.2",
            g: "Hours12",
            a: "AmPmLower",
            A: "AmPm",
            i: "Minutes.2",
            s: "Seconds.2",
            U: "Unix",
            Z: "TimezoneOffset",
            e: "TimezoneName",
            P: "UTCOffset",
            O: "UTCOffsetNumber"
        },
        shortcuts: {
            c: "Y-m-d\\TH:i:sP",
            r: "D, j M Y H:i:s O"
        }
    });
    var H = {
        matcher: /()(mi|am|pm|ss|yyyy|yy|m{1,4}|d{1,4}|w|hh?24|hh?12)/i,
        defaultFormat: "yyyy-mm-dd hh24:mi:ss",
        codes: {
            yyyy: "FullYear",
            yy: "ShortYear.2",
            mm: "MonthNumber.2",
            m: "MonthNumber",
            mmm: "AbbrMonthName",
            mmmm: "MonthName",
            dd: "Date.2",
            d: "Date",
            ddd: "AbbrDayName",
            dddd: "DayName",
            w: "Day",
            hh24: "Hours.2",
            h24: "Hours",
            hh: "Hours12.2",
            hh12: "Hours12.2",
            h12: "Hours12",
            am: "AmPm",
            pm: "AmPm",
            mi: "Minutes.2",
            ss: "Seconds.2"
        },
        shortcuts: {}
    };
    var L = "yyyy yy mm m mmm mmmm dd d ddd dddd w hh24 h24 hh12 h12 am pm mi ss".split(" "),
        E = 0,
        K;
    while ((K = L[E++])) {
        H.codes[K.toUpperCase()] = H.codes[K]
    }
    Date.addFormat("formatSql", H);
    Date.create.patterns = [
        ["iso_8601", /^([1-9]\d{3})\s*-\s*(1[0-2]|0?[1-9])\s*-\s*(3[01]|[12]\d|0?[1-9])$/, "$2/$3/$1"],
        ["us", /^(1[0-2]|0?[1-9])\s*[\/-]\s*(3[01]|[12]\d|0?[1-9])\s*[\/-]\s*([1-9]\d{3})$/, "$1/$2/$3"],
        ["world_urlsafe", /^(3[01]|[12]\d|0?[1-9])\s*([\/-])s*(1[0-2]|0?[1-9])\s*\2\s*([1-9]\d{3})$/, "$3/$1/$4"],
        ["world", /^(3[01]|[12]\d|0?[1-9])\s*([\.\/])s*(1[0-2]|0?[1-9])\s*\2\s*([1-9]\d{3})$/, "$3/$1/$4"],
        ["chicago", /^(?:(?:mon|tue|wed|thu|fri|sat|sun)[a-z]*,\s+)?(3[01]|[0-2]\d|\d)\s*([ -])\s*(?:(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)[a-z]*)\s*\2\s*([1-9]\d{3})$/i, "$3 $1, $4"],
        ["conversational", /^(?:(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)[a-z]*)\s+(3[01]|[0-2]\d|\d),?\s*([1-9]\d{3})$/i, "$1 $2, $3"],
        ["unix", /^@(-?\d+)$/, function(M) {
            return Date.create(M[1] * 1000)
        }],
        ["24_hour", /^(?:(.+?)(?:\s+|T))?([01]\d|2[0-3])(?:\s*\:\s*([0-5]\d))(?:\s*\:\s*([0-5]\d))?\s*(?:\.(\d+))?(\s*[+-](?:[01]\d|2[0-3])\:?[0-5]\d)?$/i, function(M) {
            var N;
            if (M[1]) {
                N = Date.create(M[1]);
                if (isNaN(N)) {
                    return false
                }
            } else {
                N = Date.current();
                N.setMilliseconds(0)
            }
            N.setHours(parseFloat(M[2]), parseFloat(M[3]), parseFloat(M[4] || 0));
            if (M[5]) {
                N.setMilliseconds(M[5])
            }
            if (M[6]) {
                N.setUTCOffsetString(M[6])
            }
            return N
        }],
        ["12_hour", /^(?:(.+)\s+)?(0?[1-9]|1[012])(?:\s*\:\s*([0-5]\d))?(?:\s*\:\s*([0-5]\d))?\s*(am|pm)\s*$/i, function(N) {
            var O;
            if (N[1]) {
                O = Date.create(N[1]);
                if (isNaN(O)) {
                    return false
                }
            } else {
                O = Date.current();
                O.setMilliseconds(0)
            }
            var M = parseFloat(N[2]);
            M = N[5].toLowerCase() == "am" ? (M == 12 ? 0 : M) : (M == 12 ? 12 : M + 12);
            O.setHours(M, parseFloat(N[3] || 0), parseFloat(N[4] || 0));
            return O
        }],
        ["weeks_months_before_after", /^(\d+)\s+(year|month|week|day|hour|minute|second)s?\s+(before|from|after)\s+(.+)$/i, function(M) {
            var N = Date.create(M[4]);
            if (N instanceof Date) {
                return N.add((M[3].toLowerCase() == "before" ? -1 : 1) * M[1], M[2])
            }
            return false
        }],
        ["time_ago", /^(\d+)\s+(year|month|week|day|hour|minute|second)s?\s+ago$/i, function(M) {
            return Date.current().add(-1 * M[1], M[2])
        }],
        ["in_time", /^in\s+(\d+)\s+(year|month|week|day|hour|minute|second)s?$/i, function(M) {
            return Date.current().add(M[1], M[2])
        }],
        ["today_tomorrow", /^(tod|now|tom|yes)/i, function(N) {
            var M = Date.current();
            switch (N[1].toLowerCase()) {
                case "tod":
                case "now":
                    return M;
                case "tom":
                    return M.add(1, "day");
                case "yes":
                    return M.add(-1, "day")
            }
        }],
        ["this_next_last", /^(this|next|last)\s+(?:(year|month|week|day|hour|minute|second)|(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)|(sun|mon|tue|wed|thu|fri|sat))/i, function(P) {
            var U = P[1].toLowerCase() == "last" ? -1 : 1;
            var M = Date.current();
            var N = Date.ABBR_MONTHNAMES;
            var O;
            if (P[2]) {
                return M.add(U, P[2])
            } else {
                if (P[3]) {
                    var R = P[3].toLowerCase(),
                        S;
                    for (O = 0; O < N.length; O++) {
                        if (R == N[O].toLowerCase()) {
                            S = 12 - (M.getMonth() - O);
                            S = S > 12 ? S - 12 : S;
                            return M.add(U * S, "month")
                        }
                    }
                } else {
                    if (P[4]) {
                        var Q = P[4].toLowerCase();
                        var T = Date.ABBR_DAYNAMES;
                        for (O = 0; O < T.length; O++) {
                            if (Q == T[O].toLowerCase()) {
                                S = M.getDay() - O + 7;
                                return M.add(U * (S == 0 ? 7 : S), "day")
                            }
                        }
                    }
                }
            }
            return false
        }],
        ["conversational_sans_year", /^(?:(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)[a-z]*\s+)(?:the\s+)?(\d+)(?:st|nd|rd|th)?$/i, function(M) {
            var O = Date.current();
            if (M[1]) {
                var N = Date.ABBR_MONTHNAMES.length;
                while (N--) {
                    if (Date.ABBR_MONTHNAMES[N].toLowerCase() == M[1].toLowerCase()) {
                        O.setMonth(N);
                        break
                    }
                }
            }
            O.setDate(M[2]);
            return O
        }]
    ];
    A.$D = A.$D || Date.create
})(this);
UI.Tabs = Class.create({
    initialize: function(B, A) {
        var D = {
            activeClass: "active",
            stopClickPropagation: true,
            autoMode: false,
            acttab: ""
        };
        this.options = Object.extend(D, A || {});
        this.element = $(B);
        if (this.element.hasAttribute("rel") && this.element.readAttribute("rel")) {
            this.refId = this.element.readAttribute("rel")
        } else {
            this.refId = this.element.id
        }
        this.element.on("click", this.handleClick.bindAsEventListener(this));
        this.activeTab = this.element.down("li." + this.options.activeClass);
        try {
            if (this.options.autoMode) {
                var E = this.element.select("li.wall-tab");
                this.panes = E.collect(function(F) {
                    return F.down("a").readAttribute("data-action")
                });
                this.update()
            }
        } catch (C) {}
    },
    update: function(D) {
        if (!this.options.autoMode) {
            return false
        }
        var C = D ? D : window.location.hash.substring(5);
        C = C ? C : this.options.acttab;
        var A = this.panes.indexOf(C);
        if (C && A != -1) {
            var B = this.element.select("li.wall-tab").detect(function(E) {
                return E.down("a").readAttribute("data-action") == C
            }.bind(this));
            if (B) {
                this.select($(B))
            }
        }
        return false
    },
    handleClick: function(B) {
        var A = B.findElement("li.wall-tab");
        var C = true;
        if (this.options.stopClickPropagation) {
            B.stop();
            C = false
        }
        if (!A || A == this.activeTab) {
            return C
        }
        this.select(A);
        return C
    },
    select: function(A) {
        if (this.activeTab) {
            this.activeTab.removeClassName(this.options.activeClass)
        }
        this.activeTab = A;
        this.activeTab.addClassName(this.options.activeClass);
        var B = this.activeTab.down("a").readAttribute("data-action");
        if (this.options.autoMode) {
            $(B).show();
            this.panes.without(B).each(function(C) {
                $(C).hide()
            })
        }
        Event.fire(window.document, "tab:selected", {
            action: B,
            refId: this.refId
        })
    },
    newTab: function(D, C, E) {
        var A = new Element("li");
        A.setAttribute("class", "wall-tab");
        var B = new Element("a");
        B.setAttribute("href", C);
        B.setAttribute("onclick", "return " + E);
        B.setAttribute("title", D);
        B.setAttribute("class", "tab-text");
        B.update(D);
        A.update(B);
        return A
    }
});
jQuery(document).ready(function($) {

    var tabOptions = {
        onClick: function() {
            this.getTabs().parent().removeClass("active");
            this.getCurrentTab().parent().addClass("active");
            var selectedLink = jQuery(this.getCurrentTab());
            var onclick = selectedLink.data("onclick");
            var action = selectedLink.data("action");
            if (onclick) {
                eval(onclick)
            }
            var tabBarHelper = this.getCurrentTab().closest(".tabs-panel-container").find(".tabs-panel-select").first();
            if (tabBarHelper.prop("selectedIndex") != this.getIndex()) {
                tabBarHelper.prop("selectedIndex", this.getIndex())
            }
            jQuery("img.lazy-load").unveil(300)
        },
        history: false,
        current: "active",
        tabs: "a",
        initialIndex: false
    };
    jQuery(".tabs-panel-tabs").tabs(".panes .pane", tabOptions);
    jQuery(".tabs-panel-select").change(function(event) {
        var tabBar = jQuery(this).closest(".tabs-panel-container").children(".wall-tabs").first().data("tabs");
        var selectedIndex = event.currentTarget.selectedIndex;
        if (tabBar.getIndex() != selectedIndex) {
            tabBar.click(selectedIndex)
        }
    });
});
var SmileyBox = {
    ajaxUrl: "/ajax/smilybox",
    container: null,
    callback: null,
    selectEvent: "smiley:selected",
    box: null,
    boxId: "s1_sml_box",
    toggle: function(A, B) {
        if (!Object.isElement(A)) {
            A = $(A)
        }
        if (A == this.container) {
            if (this.container.visible()) {
                this.container.hide()
            } else {
                this.container.show()
            }
        } else {
            this.get(A, B)
        }
    },
    get: function(A, B) {
        if (this.container) {
            this.container.hide();
            this.container.update()
        }
        this.container = $(A);
        this.callback = B;
        if (!this.box) {
            this.load();
            return
        }
        this.show()
    },
    show: function() {
        this.container.update(this.box);
        this.container.show();
        $(this.boxId).observe("click", this.handleClick.bind(this))
    },
    build: function(B) {
        var A = $H(B).collect(function(E) {
            var C = E.value;
            var D = SmileyBox.tmpl.evaluate({
                id: E.key,
                url: C.url,
                sign: C.sign
            });
            return D
        });
        this.box = SmileyBox.boxTmpl.evaluate({
            id: this.boxId,
            content: A.join("")
        })
    },
    handleClick: function(F) {
        var D = F.findElement("img");
        if (D) {
            var G = D.readAttribute("data-smile-id");
            var B = D.readAttribute("data-smile-sign");
            var C = D.readAttribute("data-smile-url");
            var A = this.container.readAttribute("data-idx");
            this.container.hide();
            var E = {
                data: {
                    id: G,
                    sign: B,
                    url: C
                },
                idx: A
            };
            if (this.callback) {
                this.callback(E)
            } else {
                document.body.fire(this.selectEvent, E)
            }
        }
        return false
    },
    load: function() {
        new Ajax.Request(this.ajaxUrl, {
            parameters: {},
            onSuccess: this.loadSuccess.bind(this),
            onFailure: this.failure
        })
    },
    loadSuccess: function(A) {
        var B = A.responseJSON;
        if (B && B.valid) {
            this.build(B.content);
            this.show();
            return
        }
        this.failure()
    },
    failure: function() {
        unotify("Could not load smilies ;( ")
    }
};
SmileyBox.tmpl = new Template('<img data-smile-id="#{id}" data-smile-sign="#{sign}" data-smile-url="#{url}" src="#{url}" />');
SmileyBox.boxTmpl = new Template('<div id="#{id}">#{content}</div>');
UI.Forms = {
    addFile: function(E, C) {
        E = $(E);
        var A = E.readAttribute("name");
        var B = E.readAttribute("id");
        var I = E.readAttribute("size");
        var H = E.up("li").down("label").firstChild.nodeValue;
        var D = parseInt(Math.random() * 1000000000);
        var G = A + "_" + D;
        var F = '<div id="FormElement_' + G + '">\n';
        F += '    <label for="' + G + '">' + H + "</label>\n";
        F += '    <input type="file" size="' + I + '" name="' + G + '" ';
        F += 'id="' + G + '" class="FormField" />\n';
        F += '    <span style="float:left;margin:0px 0px 0px 10px;">\n';
        F += '        (<a href="javascript:;" onclick="javascript:Element.remove(\'FormElement_' + G + "');\">" + C + "</a>)\n";
        F += "    </span>\n";
        F += "</div>\n";
        E.insert({
            after: F
        })
    }
};
if (typeof window.JSON === "undefined") {
    var JSON;
    if (!JSON) {
        JSON = {}
    }(function() {
        function f(n) {
            return n < 10 ? "0" + n : n
        }
        if (typeof Date.prototype.toJSON !== "function") {
            Date.prototype.toJSON = function(key) {
                return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
            };
            String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function(key) {
                return this.valueOf()
            }
        }
        var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            gap, indent, meta = {
                "\b": "\\b",
                "\t": "\\t",
                "\n": "\\n",
                "\f": "\\f",
                "\r": "\\r",
                '"': '\\"',
                "\\": "\\\\"
            },
            rep;

        function quote(string) {
            escapable.lastIndex = 0;
            return escapable.test(string) ? '"' + string.replace(escapable, function(a) {
                var c = meta[a];
                return typeof c === "string" ? c : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
            }) + '"' : '"' + string + '"'
        }

        function str(key, holder) {
            var i, k, v, length, mind = gap,
                partial, value = holder[key];
            if (value && typeof value === "object" && typeof value.toJSON === "function") {
                value = value.toJSON(key)
            }
            if (typeof rep === "function") {
                value = rep.call(holder, key, value)
            }
            switch (typeof value) {
                case "string":
                    return quote(value);
                case "number":
                    return isFinite(value) ? String(value) : "null";
                case "boolean":
                case "null":
                    return String(value);
                case "object":
                    if (!value) {
                        return "null"
                    }
                    gap += indent;
                    partial = [];
                    if (Object.prototype.toString.apply(value) === "[object Array]") {
                        length = value.length;
                        for (i = 0; i < length; i += 1) {
                            partial[i] = str(i, value) || "null"
                        }
                        v = partial.length === 0 ? "[]" : gap ? "[\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "]" : "[" + partial.join(",") + "]";
                        gap = mind;
                        return v
                    }
                    if (rep && typeof rep === "object") {
                        length = rep.length;
                        for (i = 0; i < length; i += 1) {
                            k = rep[i];
                            if (typeof k === "string") {
                                v = str(k, value);
                                if (v) {
                                    partial.push(quote(k) + (gap ? ": " : ":") + v)
                                }
                            }
                        }
                    } else {
                        for (k in value) {
                            if (Object.hasOwnProperty.call(value, k)) {
                                v = str(k, value);
                                if (v) {
                                    partial.push(quote(k) + (gap ? ": " : ":") + v)
                                }
                            }
                        }
                    }
                    v = partial.length === 0 ? "{}" : gap ? "{\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "}" : "{" + partial.join(",") + "}";
                    gap = mind;
                    return v
            }
        }
        if (typeof JSON.stringify !== "function") {
            JSON.stringify = function(value, replacer, space) {
                var i;
                gap = "";
                indent = "";
                if (typeof space === "number") {
                    for (i = 0; i < space; i += 1) {
                        indent += " "
                    }
                } else {
                    if (typeof space === "string") {
                        indent = space
                    }
                }
                rep = replacer;
                if (replacer && typeof replacer !== "function" && (typeof replacer !== "object" || typeof replacer.length !== "number")) {
                    throw new Error("JSON.stringify")
                }
                return str("", {
                    "": value
                })
            }
        }
        if (typeof JSON.parse !== "function") {
            JSON.parse = function(text, reviver) {
                var j;

                function walk(holder, key) {
                    var k, v, value = holder[key];
                    if (value && typeof value === "object") {
                        for (k in value) {
                            if (Object.hasOwnProperty.call(value, k)) {
                                v = walk(value, k);
                                if (v !== undefined) {
                                    value[k] = v
                                } else {
                                    delete value[k]
                                }
                            }
                        }
                    }
                    return reviver.call(holder, key, value)
                }
                text = String(text);
                cx.lastIndex = 0;
                if (cx.test(text)) {
                    text = text.replace(cx, function(a) {
                        return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
                    })
                }
                if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) {
                    j = eval("(" + text + ")");
                    return typeof reviver === "function" ? walk({
                        "": j
                    }, "") : j
                }
                throw new SyntaxError("JSON.parse")
            }
        }
    }())
}
// (function(E, G) {
//     var D = E.History = E.History || {},
//         C = E.Prototype,
//         B = E.Element,
//         A = E.Event,
//         F = E.$;
//     if (typeof D.Adapter !== "undefined") {
//         throw new Error("History.js Adapter has already been loaded...")
//     }
//     if (typeof E.fireEvent === "undefined" && typeof E.dispatchEvent === "undefined") {}(function() {
//         var I = {
//                 HTMLEvents: /^(?:load|unload|abort|error|select|hashchange|popstate|change|submit|reset|focus|blur|resize|scroll)$/,
//                 MouseEvents: /^(?:click|mouse(?:down|up|over|move|out))$/
//             },
//             H = {
//                 pointerX: 0,
//                 pointerY: 0,
//                 button: 0,
//                 ctrlKey: false,
//                 altKey: false,
//                 shiftKey: false,
//                 metaKey: false,
//                 bubbles: true,
//                 cancelable: true
//             };
//         A.hasNativeEvent = function(N, K) {
//             var M = null,
//                 J;
//             N = F(N);
//             for (var L in I) {
//                 if (I[L].test(K)) {
//                     M = L;
//                     break
//                 }
//             }
//             J = M ? true : false;
//             return J
//         };
//         A.bind = function(L, J, K) {
//             L = F(L);
//             if (B.hasNativeEvent(L, J)) {
//                 return B.observe(L, J, K)
//             } else {
//                 return B.observe(L, "custom:" + J, K)
//             }
//             return L
//         };
//         A.trigger = function(O, K) {
//             if (O == E) {
//                 O = E.document
//             }
//             var M = Object.extend(H, arguments[2] || {});
//             var J, N = null;
//             O = F(O);
//             var L;
//             for (L in I) {
//                 if (I[L].test(K)) {
//                     N = L;
//                     break
//                 }
//             }
//             if (!N) {
//                 return B.fire(O, "custom:" + K)
//             }
//             if (document.createEvent) {
//                 J = document.createEvent(N);
//                 if (N === "HTMLEvents") {
//                     J.initEvent(K, M.bubbles, M.cancelable)
//                 } else {
//                     if (N) {
//                         J.initMouseEvent(K, M.bubbles, M.cancelable, document.defaultView, M.button, M.pointerX, M.pointerY, M.pointerX, M.pointerY, M.ctrlKey, M.altKey, M.shiftKey, M.metaKey, M.button, O)
//                     }
//                 }
//             } else {
//                 if (document.createEventObject) {
//                     M.clientX = M.pointerX;
//                     M.clientY = M.pointerY;
//                     J = Object.extend(document.createEventObject(), M)
//                 }
//             }
//             if (O.fireEvent) {
//                 O.fireEvent("on" + K, J)
//             } else {
//                 if (O.dispatchEvent) {
//                     O.dispatchEvent(J)
//                 } else {
//                     throw new Error("Cannot dispatch the event")
//                 }
//             }
//             return O
//         };
//         B.addMethods({
//             simulate: A.trigger,
//             trigger: A.trigger,
//             bind: A.bind,
//             hasNativeEvent: A.hasNativeEvent
//         })
//     })();
//     D.Adapter = {
//         bind: function(H, I, J) {
//             B.bind(H, I, J)
//         },
//         trigger: function(H, I) {
//             B.trigger(H, I)
//         },
//         onDomLoad: function(H) {
//             A.observe(E.document, "dom:loaded", H)
//         }
//     }
// })(window);
(function(H, B) {
    var E = H.console || B,
        I = H.document,
        K = H.navigator,
        A = H.amplify || false,
        D = H.setTimeout,
        J = H.clearTimeout,
        F = H.setInterval,
        M = H.clearInterval,
        L = H.JSON,
        C = H.History = H.History || {},
        G = H.history;
    L.stringify = L.stringify || L.encode;
    L.parse = L.parse || L.decode;
    // if (typeof C.init !== "undefined") {
    //     throw new Error("History.js Core has already been loaded...")
    // }
    C.init = function() {
        if (typeof C.Adapter === "undefined") {
            return false
        }
        if (typeof C.initCore !== "undefined") {
            C.initCore()
        }
        if (typeof C.initHtml4 !== "undefined") {
            C.initHtml4()
        }
        return true
    };
    C.initCore = function() {
        if (typeof C.initCore.initialized !== "undefined") {
            return false
        } else {
            C.initCore.initialized = true
        }
        C.options = C.options || {};
        C.options.hashChangeInterval = C.options.hashChangeInterval || 100;
        C.options.safariPollInterval = C.options.safariPollInterval || 500;
        C.options.doubleCheckInterval = C.options.doubleCheckInterval || 500;
        C.options.storeInterval = C.options.storeInterval || 1000;
        C.options.busyDelay = C.options.busyDelay || 250;
        C.options.debug = C.options.debug || false;
        C.options.initialTitle = C.options.initialTitle || I.title;
        C.intervalList = [];
        C.clearAllIntervals = function() {
            var P, O = C.intervalList;
            if (typeof O !== "undefined" && O !== null) {
                for (P = 0; P < O.length; P++) {
                    M(O[P])
                }
                C.intervalList = null
            }
        };
        C.Adapter.bind(H, "beforeunload", C.clearAllIntervals);
        C.Adapter.bind(H, "unload", C.clearAllIntervals);
        C.debug = function() {
            if ((C.options.debug || false)) {
                C.log.apply(C, arguments)
            }
        };
        C.log = function() {
            var U = !(typeof E === "undefined" || typeof E.log === "undefined" || typeof E.log.apply === "undefined"),
                P = I.getElementById("log"),
                T, S, V;
            if (U) {
                var Q = Array.prototype.slice.call(arguments);
                T = Q.shift();
                if (typeof E.debug !== "undefined") {
                    E.debug.apply(E, [T, Q])
                } else {
                    E.log.apply(E, [T, Q])
                }
            } else {
                T = ("\n" + arguments[0] + "\n")
            }
            for (S = 1, V = arguments.length; S < V; ++S) {
                var O = arguments[S];
                if (typeof O === "object" && typeof L !== "undefined") {
                    try {
                        O = L.stringify(O)
                    } catch (R) {}
                }
                T += "\n" + O + "\n"
            }
            if (P) {
                P.value += T + "\n-----\n";
                P.scrollTop = P.scrollHeight - P.clientHeight
            } else {
                if (!U) {
                    alert(T)
                }
            }
            return true
        };
        C.getInternetExplorerMajorVersion = function() {
            var O = C.getInternetExplorerMajorVersion.cached = (typeof C.getInternetExplorerMajorVersion.cached !== "undefined") ? C.getInternetExplorerMajorVersion.cached : (function() {
                var P = 3,
                    R = I.createElement("div"),
                    Q = R.getElementsByTagName("i");
                while ((R.innerHTML = "<!--[if gt IE " + (++P) + "]><i></i><![endif]-->") && Q[0]) {}
                return (P > 4) ? P : false
            })();
            return O
        };
        C.isInternetExplorer = function() {
            var O = C.isInternetExplorer.cached = (typeof C.isInternetExplorer.cached !== "undefined") ? C.isInternetExplorer.cached : Boolean(C.getInternetExplorerMajorVersion());
            return O
        };
        C.emulated = {
            pushState: !Boolean(H.history && H.history.pushState && H.history.replaceState && !((/ Mobile\/([1-7][a-z]|(8([abcde]|f(1[0-8]))))/i).test(K.userAgent) || (/AppleWebKit\/5([0-2]|3[0-2])/i).test(K.userAgent))),
            hashChange: Boolean(!(("onhashchange" in H) || ("onhashchange" in I)) || (C.isInternetExplorer() && C.getInternetExplorerMajorVersion() < 8))
        };
        C.enabled = !C.emulated.pushState;
        C.bugs = {
            setHash: Boolean(!C.emulated.pushState && K.vendor === "Apple Computer, Inc." && /AppleWebKit\/5([0-2]|3[0-3])/.test(K.userAgent)),
            safariPoll: Boolean(!C.emulated.pushState && K.vendor === "Apple Computer, Inc." && /AppleWebKit\/5([0-2]|3[0-3])/.test(K.userAgent)),
            ieDoubleCheck: Boolean(C.isInternetExplorer() && C.getInternetExplorerMajorVersion() < 8),
            hashEscape: Boolean(C.isInternetExplorer() && C.getInternetExplorerMajorVersion() < 7)
        };
        C.isEmptyObject = function(P) {
            for (var O in P) {
                return false
            }
            return true
        };
        C.cloneObject = function(Q) {
            var P, O;
            if (Q) {
                P = L.stringify(Q);
                O = L.parse(P)
            } else {
                O = {}
            }
            return O
        };
        C.getRootUrl = function() {
            var O = I.location.protocol + "//" + (I.location.hostname || I.location.host);
            if (I.location.port || false) {
                O += ":" + I.location.port
            }
            O += "/";
            return O
        };
        C.getBaseHref = function() {
            var O = I.getElementsByTagName("base"),
                Q = null,
                P = "";
            if (O.length === 1) {
                Q = O[0];
                P = Q.href.replace(/[^\/]+$/, "")
            }
            P = P.replace(/\/+$/, "");
            if (P) {
                P += "/"
            }
            return P
        };
        C.getBaseUrl = function() {
            var O = C.getBaseHref() || C.getBasePageUrl() || C.getRootUrl();
            return O
        };
        C.getPageUrl = function() {
            var O = C.getState(false, false),
                Q = (O || {}).url || I.location.href;
            var P = Q.replace(/\/+$/, "").replace(/[^\/]+$/, function(T, S, R) {
                return (/\./).test(T) ? T : T + "/"
            });
            return P
        };
        C.getBasePageUrl = function() {
            var O = I.location.href.replace(/[#\?].*/, "").replace(/[^\/]+$/, function(R, Q, P) {
                return (/[^\/]$/).test(R) ? "" : R
            }).replace(/\/+$/, "") + "/";
            return O
        };
        C.getFullUrl = function(P, R) {
            var O = P,
                Q = P.substring(0, 1);
            R = (typeof R === "undefined") ? true : R;
            if (/[a-z]+\:\/\//.test(P)) {} else {
                if (Q === "/") {
                    O = C.getRootUrl() + P.replace(/^\/+/, "")
                } else {
                    if (Q === "#") {
                        O = C.getPageUrl().replace(/#.*/, "") + P
                    } else {
                        if (Q === "?") {
                            O = C.getPageUrl().replace(/[\?#].*/, "") + P
                        } else {
                            if (R) {
                                O = C.getBaseUrl() + P.replace(/^(\.\/)+/, "")
                            } else {
                                O = C.getBasePageUrl() + P.replace(/^(\.\/)+/, "")
                            }
                        }
                    }
                }
            }
            return O.replace(/\#$/, "")
        };
        C.getShortUrl = function(Q) {
            var P = Q,
                R = C.getBaseUrl(),
                O = C.getRootUrl();
            if (C.emulated.pushState) {
                P = P.replace(R, "")
            }
            P = P.replace(O, "/");
            if (C.isTraditionalAnchor(P)) {
                P = "./" + P
            }
            P = P.replace(/^(\.\/)+/g, "./").replace(/\#$/, "");
            return P
        };
        C.store = A ? (A.store("History.store") || {}) : {};
        C.store.idToState = C.store.idToState || {};
        C.store.urlToId = C.store.urlToId || {};
        C.store.stateToId = C.store.stateToId || {};
        C.idToState = C.idToState || {};
        C.stateToId = C.stateToId || {};
        C.urlToId = C.urlToId || {};
        C.storedStates = C.storedStates || [];
        C.savedStates = C.savedStates || [];
        C.getState = function(Q, P) {
            if (typeof Q === "undefined") {
                Q = true
            }
            if (typeof P === "undefined") {
                P = true
            }
            var O = C.getLastSavedState();
            if (!O && P) {
                O = C.createStateObject()
            }
            if (Q) {
                O = C.cloneObject(O);
                O.url = O.cleanUrl || O.url
            }
            return O
        };
        C.getIdByState = function(O) {
            var Q = C.extractId(O.url);
            if (!Q) {
                var P = C.getStateString(O);
                if (typeof C.stateToId[P] !== "undefined") {
                    Q = C.stateToId[P]
                } else {
                    if (typeof C.store.stateToId[P] !== "undefined") {
                        Q = C.store.stateToId[P]
                    } else {
                        while (true) {
                            Q = String(Math.floor(Math.random() * 1000));
                            if (typeof C.idToState[Q] === "undefined" && typeof C.store.idToState[Q] === "undefined") {
                                break
                            }
                        }
                        C.stateToId[P] = Q;
                        C.idToState[Q] = O
                    }
                }
            }
            return Q
        };
        C.normalizeState = function(P) {
            if (!P || (typeof P !== "object")) {
                P = {}
            }
            if (typeof P.normalized !== "undefined") {
                return P
            }
            if (!P.data || (typeof P.data !== "object")) {
                P.data = {}
            }
            var Q = {};
            Q.normalized = true;
            Q.title = P.title || "";
            Q.url = C.getFullUrl(C.unescapeString(P.url || I.location.href));
            Q.hash = C.getShortUrl(Q.url);
            Q.data = C.cloneObject(P.data);
            Q.id = C.getIdByState(Q);
            Q.cleanUrl = Q.url.replace(/\??\&_suid.*/, "");
            Q.url = Q.cleanUrl;
            var O = !C.isEmptyObject(Q.data);
            if (Q.title || O) {
                Q.hash = C.getShortUrl(Q.url).replace(/\??\&_suid.*/, "");
                if (!/\?/.test(Q.hash)) {
                    Q.hash += "?"
                }
                Q.hash += "&_suid=" + Q.id
            }
            Q.hashedUrl = C.getFullUrl(Q.hash);
            if ((C.emulated.pushState || C.bugs.safariPoll) && C.hasUrlDuplicate(Q)) {
                Q.url = Q.hashedUrl
            }
            return Q
        };
        C.createStateObject = function(Q, R, P) {
            var O = {
                data: Q,
                title: R,
                url: P
            };
            O = C.normalizeState(O);
            return O
        };
        C.getStateById = function(P) {
            P = String(P);
            var O = C.idToState[P] || C.store.idToState[P] || B;
            return O
        };
        C.getStateString = function(P) {
            var O = C.normalizeState(P);
            var Q = {
                data: O.data,
                title: P.title,
                url: P.url
            };
            var R = L.stringify(Q);
            return R
        };
        C.getStateId = function(P) {
            var O = C.normalizeState(P);
            var Q = O.id;
            return Q
        };
        C.getHashByState = function(P) {
            var Q, O = C.normalizeState(P);
            Q = O.hash;
            return Q
        };
        C.extractId = function(Q) {
            var R;
            var P, O;
            P = /(.*)\&_suid=([0-9]+)$/.exec(Q);
            O = P ? (P[1] || Q) : Q;
            R = P ? String(P[2] || "") : "";
            return R || false
        };
        C.isTraditionalAnchor = function(P) {
            var O = !(/[\/\?\.]/.test(P));
            return O
        };
        C.extractState = function(R, Q) {
            var O = null;
            Q = Q || false;
            var S = C.extractId(R);
            if (S) {
                O = C.getStateById(S)
            }
            if (!O) {
                var P = C.getFullUrl(R);
                S = C.getIdByUrl(P) || false;
                if (S) {
                    O = C.getStateById(S)
                }
                if (!O && Q && !C.isTraditionalAnchor(R)) {
                    O = C.createStateObject(null, null, P)
                }
            }
            return O
        };
        C.getIdByUrl = function(O) {
            var P = C.urlToId[O] || C.store.urlToId[O] || B;
            return P
        };
        C.getLastSavedState = function() {
            return C.savedStates[C.savedStates.length - 1] || B
        };
        C.getLastStoredState = function() {
            return C.storedStates[C.storedStates.length - 1] || B
        };
        C.hasUrlDuplicate = function(Q) {
            var P = false;
            var O = C.extractState(Q.url);
            P = O && O.id !== Q.id;
            return P
        };
        C.storeState = function(O) {
            C.urlToId[O.url] = O.id;
            C.storedStates.push(C.cloneObject(O));
            return O
        };
        C.isLastSavedState = function(R) {
            var Q = false;
            if (C.savedStates.length) {
                var P = R.id,
                    O = C.getLastSavedState(),
                    S = O.id;
                Q = (P === S)
            }
            return Q
        };
        C.saveState = function(O) {
            if (C.isLastSavedState(O)) {
                return false
            }
            C.savedStates.push(C.cloneObject(O));
            return true
        };
        C.getStateByIndex = function(P) {
            var O = null;
            if (typeof P === "undefined") {
                O = C.savedStates[C.savedStates.length - 1]
            } else {
                if (P < 0) {
                    O = C.savedStates[C.savedStates.length + P]
                } else {
                    O = C.savedStates[P]
                }
            }
            return O
        };
        C.getHash = function() {
            var O = C.unescapeHash(I.location.hash);
            return O
        };
        C.unescapeString = function(Q) {
            var O = Q;
            var P;
            while (true) {
                P = H.unescape(O);
                if (P === O) {
                    break
                }
                O = P
            }
            return O
        };
        C.unescapeHash = function(P) {
            var O = C.normalizeHash(P);
            O = C.unescapeString(O);
            return O
        };
        C.normalizeHash = function(P) {
            var O = P.replace(/[^#]*#/, "").replace(/#.*/, "");
            return O
        };
        C.setHash = function(S, P) {
            if (P !== false && C.busy()) {
                C.pushQueue({
                    scope: C,
                    callback: C.setHash,
                    args: arguments,
                    queue: P
                });
                return false
            }
            var O = C.escapeHash(S);
            C.busy(true);
            var Q = C.extractState(S, true);
            if (Q && !C.emulated.pushState) {
                C.pushState(Q.data, Q.title, Q.url, false)
            } else {
                if (I.location.hash !== O) {
                    if (C.bugs.setHash) {
                        var R = C.getPageUrl();
                        C.pushState(null, null, R + "#" + O, false)
                    } else {
                        I.location.hash = O
                    }
                }
            }
            return C
        };
        C.escapeHash = function(P) {
            var O = C.normalizeHash(P);
            O = H.escape(O);
            if (!C.bugs.hashEscape) {
                O = O.replace(/\%21/g, "!").replace(/\%26/g, "&").replace(/\%3D/g, "=").replace(/\%3F/g, "?")
            }
            return O
        };
        C.getHashByUrl = function(O) {
            var P = String(O).replace(/([^#]*)#?([^#]*)#?(.*)/, "$2");
            P = C.unescapeHash(P);
            return P
        };
        C.setTitle = function(Q) {
            var R = Q.title;
            if (!R) {
                var P = C.getStateByIndex(0);
                if (P && P.url === Q.url) {
                    R = P.title || C.options.initialTitle
                }
            }
            try {
                I.getElementsByTagName("title")[0].innerHTML = R.replace("<", "&lt;").replace(">", "&gt;").replace(" & ", " &amp; ")
            } catch (O) {}
            I.title = R;
            return C
        };
        C.queues = [];
        C.busy = function(P) {
            if (typeof P !== "undefined") {
                C.busy.flag = P
            } else {
                if (typeof C.busy.flag === "undefined") {
                    C.busy.flag = false
                }
            }
            if (!C.busy.flag) {
                J(C.busy.timeout);
                var O = function() {
                    if (C.busy.flag) {
                        return
                    }
                    for (var R = C.queues.length - 1; R >= 0; --R) {
                        var Q = C.queues[R];
                        if (Q.length === 0) {
                            continue
                        }
                        var S = Q.shift();
                        C.fireQueueItem(S);
                        C.busy.timeout = D(O, C.options.busyDelay)
                    }
                };
                C.busy.timeout = D(O, C.options.busyDelay)
            }
            return C.busy.flag
        };
        C.fireQueueItem = function(O) {
            return O.callback.apply(O.scope || C, O.args || [])
        };
        C.pushQueue = function(O) {
            C.queues[O.queue || 0] = C.queues[O.queue || 0] || [];
            C.queues[O.queue || 0].push(O);
            return C
        };
        C.queue = function(P, O) {
            if (typeof P === "function") {
                P = {
                    callback: P
                }
            }
            if (typeof O !== "undefined") {
                P.queue = O
            }
            if (C.busy()) {
                C.pushQueue(P)
            } else {
                C.fireQueueItem(P)
            }
            return C
        };
        C.clearQueue = function() {
            C.busy.flag = false;
            C.queues = [];
            return C
        };
        C.stateChanged = false;
        C.doubleChecker = false;
        C.doubleCheckComplete = function() {
            C.stateChanged = true;
            C.doubleCheckClear();
            return C
        };
        C.doubleCheckClear = function() {
            if (C.doubleChecker) {
                J(C.doubleChecker);
                C.doubleChecker = false
            }
            return C
        };
        C.doubleCheck = function(O) {
            C.stateChanged = false;
            C.doubleCheckClear();
            if (C.bugs.ieDoubleCheck) {
                C.doubleChecker = D(function() {
                    C.doubleCheckClear();
                    if (!C.stateChanged) {
                        O()
                    }
                    return true
                }, C.options.doubleCheckInterval)
            }
            return C
        };
        C.safariStatePoll = function() {
            var P = C.extractState(I.location.href),
                O;
            if (!C.isLastSavedState(P)) {
                O = P
            } else {
                return
            }
            if (!O) {
                O = C.createStateObject()
            }
            C.Adapter.trigger(H, "popstate");
            return C
        };
        C.back = function(O) {
            if (O !== false && C.busy()) {
                C.pushQueue({
                    scope: C,
                    callback: C.back,
                    args: arguments,
                    queue: O
                });
                return false
            }
            C.busy(true);
            C.doubleCheck(function() {
                C.back(false)
            });
            G.go(-1);
            return true
        };
        C.forward = function(O) {
            if (O !== false && C.busy()) {
                C.pushQueue({
                    scope: C,
                    callback: C.forward,
                    args: arguments,
                    queue: O
                });
                return false
            }
            C.busy(true);
            C.doubleCheck(function() {
                C.forward(false)
            });
            G.go(1);
            return true
        };
        C.go = function(P, O) {
            var Q;
            if (P > 0) {
                for (Q = 1; Q <= P; ++Q) {
                    C.forward(O)
                }
            } else {
                if (P < 0) {
                    for (Q = -1; Q >= P; --Q) {
                        C.back(O)
                    }
                } else {
                    throw new Error("History.go: History.go requires a positive or negative integer passed.")
                }
            }
            return C
        };
        C.saveState(C.storeState(C.extractState(I.location.href, true)));
        if (A) {
            C.onUnload = function() {
                var O = A.store("History.store") || {},
                    P;
                O.idToState = O.idToState || {};
                O.urlToId = O.urlToId || {};
                O.stateToId = O.stateToId || {};
                for (P in C.idToState) {
                    if (!C.idToState.hasOwnProperty(P)) {
                        continue
                    }
                    O.idToState[P] = C.idToState[P]
                }
                for (P in C.urlToId) {
                    if (!C.urlToId.hasOwnProperty(P)) {
                        continue
                    }
                    O.urlToId[P] = C.urlToId[P]
                }
                for (P in C.stateToId) {
                    if (!C.stateToId.hasOwnProperty(P)) {
                        continue
                    }
                    O.stateToId[P] = C.stateToId[P]
                }
                C.store = O;
                A.store("History.store", O)
            };
            C.intervalList.push(F(C.onUnload, C.options.storeInterval));
            C.Adapter.bind(H, "beforeunload", C.onUnload);
            C.Adapter.bind(H, "unload", C.onUnload)
        }
        if (C.emulated.pushState) {
            var N = function() {};
            C.pushState = C.pushState || N;
            C.replaceState = C.replaceState || N
        } else {
            C.onPopState = function(Q) {
                C.doubleCheckComplete();
                var P = C.getHash();
                if (P) {
                    var O = C.extractState(P || I.location.href, true);
                    if (O) {
                        C.replaceState(O.data, O.title, O.url, false)
                    } else {
                        C.Adapter.trigger(H, "anchorchange");
                        C.busy(false)
                    }
                    C.expectedStateId = false;
                    return false
                }
                var R = false;
                Q = Q || {};
                if (typeof Q.state === "undefined") {
                    if (typeof Q.originalEvent !== "undefined" && typeof Q.originalEvent.state !== "undefined") {
                        Q.state = Q.originalEvent.state || false
                    } else {
                        if (typeof Q.event !== "undefined" && typeof Q.event.state !== "undefined") {
                            Q.state = Q.event.state || false
                        }
                    }
                }
                Q.state = (Q.state || false);
                if (Q.state) {
                    R = C.getStateById(Q.state)
                } else {
                    if (C.expectedStateId) {
                        R = C.getStateById(C.expectedStateId)
                    } else {
                        R = C.extractState(I.location.href)
                    }
                }
                if (!R) {
                    R = C.createStateObject(null, null, I.location.href)
                }
                C.expectedStateId = false;
                if (C.isLastSavedState(R)) {
                    C.busy(false);
                    return false
                }
                C.storeState(R);
                C.saveState(R);
                C.setTitle(R);
                C.Adapter.trigger(H, "statechange");
                C.busy(false);
                return true
            };
            C.Adapter.bind(H, "popstate", C.onPopState);
            C.pushState = function(Q, S, P, O) {
                if (C.getHashByUrl(P) && C.emulated.pushState) {
                    throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).")
                }
                if (O !== false && C.busy()) {
                    C.pushQueue({
                        scope: C,
                        callback: C.pushState,
                        args: arguments,
                        queue: O
                    });
                    return false
                }
                C.busy(true);
                var R = C.createStateObject(Q, S, P);
                if (C.isLastSavedState(R)) {
                    C.busy(false)
                } else {
                    C.storeState(R);
                    C.expectedStateId = R.id;
                    G.pushState(R.id, R.title, R.url);
                    C.Adapter.trigger(H, "popstate")
                }
                return true
            };
            C.replaceState = function(Q, S, P, O) {
                if (C.getHashByUrl(P) && C.emulated.pushState) {
                    throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).")
                }
                if (O !== false && C.busy()) {
                    C.pushQueue({
                        scope: C,
                        callback: C.replaceState,
                        args: arguments,
                        queue: O
                    });
                    return false
                }
                C.busy(true);
                var R = C.createStateObject(Q, S, P);
                if (C.isLastSavedState(R)) {
                    C.busy(false)
                } else {
                    C.storeState(R);
                    C.expectedStateId = R.id;
                    G.replaceState(R.id, R.title, R.url);
                    C.Adapter.trigger(H, "popstate")
                }
                return true
            };
            if (C.bugs.safariPoll) {
                C.intervalList.push(F(C.safariStatePoll, C.options.safariPollInterval))
            }
            if (K.vendor === "Apple Computer, Inc." || (K.appCodeName || "") === "Mozilla") {
                C.Adapter.bind(H, "hashchange", function() {
                    C.Adapter.trigger(H, "popstate")
                });
                if (C.getHash()) {
                    C.Adapter.onDomLoad(function() {
                        C.Adapter.trigger(H, "hashchange")
                    })
                }
            }
        }
    };
    C.init()
})(window);
(function(D, G) {
    var A = D.document,
        E = D.setTimeout || E,
        F = D.clearTimeout || F,
        B = D.setInterval || B,
        C = D.History = D.History || {};
    // if (typeof C.initHtml4 !== "undefined") {
    //     throw new Error("History.js HTML4 Support has already been loaded...")
    // }
    C.initHtml4 = function() {
        if (typeof C.initHtml4.initialized !== "undefined") {
            return false
        } else {
            C.initHtml4.initialized = true
        }
        C.enabled = true;
        C.savedHashes = [];
        C.isLastHash = function(H) {
            var J = C.getHashByIndex();
            var I = H === J;
            return I
        };
        C.saveHash = function(H) {
            if (C.isLastHash(H)) {
                return false
            }
            C.savedHashes.push(H);
            return true
        };
        C.getHashByIndex = function(H) {
            var I = null;
            if (typeof H === "undefined") {
                I = C.savedHashes[C.savedHashes.length - 1]
            } else {
                if (H < 0) {
                    I = C.savedHashes[C.savedHashes.length + H]
                } else {
                    I = C.savedHashes[H]
                }
            }
            return I
        };
        C.discardedHashes = {};
        C.discardedStates = {};
        C.discardState = function(L, H, K) {
            var I = C.getHashByState(L);
            var J = {
                discardedState: L,
                backState: K,
                forwardState: H
            };
            C.discardedStates[I] = J;
            return true
        };
        C.discardHash = function(I, H, K) {
            var J = {
                discardedHash: I,
                backState: K,
                forwardState: H
            };
            C.discardedHashes[I] = J;
            return true
        };
        C.discardedState = function(H) {
            var J = C.getHashByState(H);
            var I = C.discardedStates[J] || false;
            return I
        };
        C.discardedHash = function(I) {
            var H = C.discardedHashes[I] || false;
            return H
        };
        C.recycleState = function(H) {
            var I = C.getHashByState(H);
            if (C.discardedState(H)) {
                delete C.discardedStates[I]
            }
            return true
        };
        if (C.emulated.hashChange) {
            C.hashChangeInit = function() {
                C.checkerFunction = null;
                var H = "";
                if (C.isInternetExplorer()) {
                    var L = "historyjs-iframe",
                        I = A.createElement("iframe");
                    I.setAttribute("id", L);
                    I.style.display = "none";
                    A.body.appendChild(I);
                    I.contentWindow.document.open();
                    I.contentWindow.document.close();
                    var J = "",
                        K = false;
                    C.checkerFunction = function() {
                        if (K) {
                            return false
                        }
                        K = true;
                        var N = C.getHash() || "",
                            M = C.unescapeHash(I.contentWindow.document.location.hash) || "";
                        if (N !== H) {
                            H = N;
                            if (M !== N) {
                                J = M = N;
                                I.contentWindow.document.open();
                                I.contentWindow.document.close();
                                I.contentWindow.document.location.hash = C.escapeHash(N)
                            }
                            C.Adapter.trigger(D, "hashchange")
                        } else {
                            if (M !== J) {
                                J = M;
                                C.setHash(M, false)
                            }
                        }
                        K = false;
                        return true
                    }
                } else {
                    C.checkerFunction = function() {
                        var M = C.getHash();
                        if (M !== H) {
                            H = M;
                            C.Adapter.trigger(D, "hashchange")
                        }
                        return true
                    }
                }
                C.intervalList.push(B(C.checkerFunction, C.options.hashChangeInterval));
                return true
            };
            C.Adapter.onDomLoad(C.hashChangeInit)
        }
        if (C.emulated.pushState) {
            C.onHashChange = function(L) {
                var M = ((L && L.newURL) || A.location.href),
                    K = C.getHashByUrl(M),
                    J = null,
                    H = null,
                    N = null;
                if (C.isLastHash(K)) {
                    C.busy(false);
                    return false
                }
                C.doubleCheckComplete();
                C.saveHash(K);
                if (K && C.isTraditionalAnchor(K)) {
                    C.Adapter.trigger(D, "anchorchange");
                    C.busy(false);
                    return false
                }
                J = C.extractState(C.getFullUrl(K || A.location.href, false), true);
                if (C.isLastSavedState(J)) {
                    C.busy(false);
                    return false
                }
                H = C.getHashByState(J);
                var I = C.discardedState(J);
                if (I) {
                    if (C.getHashByIndex(-2) === C.getHashByState(I.forwardState)) {
                        C.back(false)
                    } else {
                        C.forward(false)
                    }
                    return false
                }
                C.pushState(J.data, J.title, J.url, false);
                return true
            };
            C.Adapter.bind(D, "hashchange", C.onHashChange);
            C.pushState = function(L, P, H, N) {
                if (C.getHashByUrl(H)) {
                    throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).")
                }
                if (N !== false && C.busy()) {
                    C.pushQueue({
                        scope: C,
                        callback: C.pushState,
                        args: arguments,
                        queue: N
                    });
                    return false
                }
                C.busy(true);
                var K = C.createStateObject(L, P, H),
                    I = C.getHashByState(K),
                    J = C.getState(false),
                    M = C.getHashByState(J),
                    O = C.getHash();
                C.storeState(K);
                C.expectedStateId = K.id;
                C.recycleState(K);
                C.setTitle(K);
                if (I === M) {
                    C.busy(false);
                    return false
                }
                if (I !== O && I !== C.getShortUrl(A.location.href)) {
                    C.setHash(I, false);
                    return false
                }
                C.saveState(K);
                C.Adapter.trigger(D, "statechange");
                C.busy(false);
                return true
            };
            C.replaceState = function(L, N, K, H) {
                if (C.getHashByUrl(K)) {
                    throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).")
                }
                if (H !== false && C.busy()) {
                    C.pushQueue({
                        scope: C,
                        callback: C.replaceState,
                        args: arguments,
                        queue: H
                    });
                    return false
                }
                C.busy(true);
                var M = C.createStateObject(L, N, K),
                    J = C.getState(false),
                    I = C.getStateByIndex(-2);
                C.discardState(J, M, I);
                C.pushState(M.data, M.title, M.url, false);
                return true
            };
            if (C.getHash() && !C.emulated.hashChange) {
                C.Adapter.onDomLoad(function() {
                    C.Adapter.trigger(D, "hashchange")
                })
            }
        }
    };
    C.init()
})(window);
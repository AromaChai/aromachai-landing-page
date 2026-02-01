module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/Desktop/aroma-chai-franchise---premium-landing-page/src/app/thankyou/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ThankYouPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aroma$2d$chai$2d$franchise$2d2d2d$premium$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/aroma-chai-franchise---premium-landing-page/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aroma$2d$chai$2d$franchise$2d2d2d$premium$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/aroma-chai-franchise---premium-landing-page/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aroma$2d$chai$2d$franchise$2d2d2d$premium$2d$landing$2d$page$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/aroma-chai-franchise---premium-landing-page/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aroma$2d$chai$2d$franchise$2d2d2d$premium$2d$landing$2d$page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/Desktop/aroma-chai-franchise---premium-landing-page/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-ssr] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aroma$2d$chai$2d$franchise$2d2d2d$premium$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/aroma-chai-franchise---premium-landing-page/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aroma$2d$chai$2d$franchise$2d2d2d$premium$2d$landing$2d$page$2f$node_modules$2f$canvas$2d$confetti$2f$dist$2f$confetti$2e$module$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/aroma-chai-franchise---premium-landing-page/node_modules/canvas-confetti/dist/confetti.module.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function ThankYouPage() {
    const [showConfetti, setShowConfetti] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aroma$2d$chai$2d$franchise$2d2d2d$premium$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aroma$2d$chai$2d$franchise$2d2d2d$premium$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const duration = 5000; // 5 seconds
        const interval = setInterval(()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aroma$2d$chai$2d$franchise$2d2d2d$premium$2d$landing$2d$page$2f$node_modules$2f$canvas$2d$confetti$2f$dist$2f$confetti$2e$module$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
                particleCount: 40,
                spread: 70,
                origin: {
                    y: 0.6
                }
            });
        }, 300);
        const timeout = setTimeout(()=>{
            clearInterval(interval);
            setShowConfetti(false);
        }, duration);
        return ()=>{
            clearInterval(interval);
            clearTimeout(timeout);
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aroma$2d$chai$2d$franchise$2d2d2d$premium$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 p-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aroma$2d$chai$2d$franchise$2d2d2d$premium$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aroma$2d$chai$2d$franchise$2d2d2d$premium$2d$landing$2d$page$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0,
                y: 20,
                scale: 0.98
            },
            animate: {
                opacity: 1,
                y: 0,
                scale: 1
            },
            transition: {
                duration: 0.6,
                ease: 'easeOut'
            },
            className: "bg-white rounded-3xl shadow-2xl max-w-xl w-full p-10 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aroma$2d$chai$2d$franchise$2d2d2d$premium$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-center mb-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aroma$2d$chai$2d$franchise$2d2d2d$premium$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aroma$2d$chai$2d$franchise$2d2d2d$premium$2d$landing$2d$page$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            scale: 0
                        },
                        animate: {
                            scale: 1
                        },
                        transition: {
                            type: 'spring',
                            stiffness: 260,
                            damping: 20
                        },
                        className: "w-20 h-20 rounded-full bg-green-50 flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aroma$2d$chai$2d$franchise$2d2d2d$premium$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aroma$2d$chai$2d$franchise$2d2d2d$premium$2d$landing$2d$page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                            className: "text-green-600",
                            size: 44
                        }, void 0, false, {
                            fileName: "[project]/Desktop/aroma-chai-franchise---premium-landing-page/src/app/thankyou/page.tsx",
                            lineNumber: 48,
                            columnNumber: 7
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/aroma-chai-franchise---premium-landing-page/src/app/thankyou/page.tsx",
                        lineNumber: 42,
                        columnNumber: 6
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/aroma-chai-franchise---premium-landing-page/src/app/thankyou/page.tsx",
                    lineNumber: 41,
                    columnNumber: 5
                }, this),
                showConfetti && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aroma$2d$chai$2d$franchise$2d2d2d$premium$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aroma$2d$chai$2d$franchise$2d2d2d$premium$2d$landing$2d$page$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].p, {
                    initial: {
                        opacity: 0,
                        y: -6
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    className: "text-green-600 font-semibold mb-3",
                    children: "Celebration! 🎉"
                }, void 0, false, {
                    fileName: "[project]/Desktop/aroma-chai-franchise---premium-landing-page/src/app/thankyou/page.tsx",
                    lineNumber: 53,
                    columnNumber: 6
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aroma$2d$chai$2d$franchise$2d2d2d$premium$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-2xl md:text-3xl font-bold text-gray-900 mb-3",
                    children: "Thank you for contacting us!"
                }, void 0, false, {
                    fileName: "[project]/Desktop/aroma-chai-franchise---premium-landing-page/src/app/thankyou/page.tsx",
                    lineNumber: 58,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aroma$2d$chai$2d$franchise$2d2d2d$premium$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-600 mb-6",
                    children: "We have received your enquiry. Our franchise team will review your details and get back to you within 24 hours."
                }, void 0, false, {
                    fileName: "[project]/Desktop/aroma-chai-franchise---premium-landing-page/src/app/thankyou/page.tsx",
                    lineNumber: 59,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aroma$2d$chai$2d$franchise$2d2d2d$premium$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aroma$2d$chai$2d$franchise$2d2d2d$premium$2d$landing$2d$page$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    whileHover: {
                        scale: 1.02
                    },
                    whileTap: {
                        scale: 0.98
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aroma$2d$chai$2d$franchise$2d2d2d$premium$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$aroma$2d$chai$2d$franchise$2d2d2d$premium$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "inline-block bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg font-semibold",
                        children: "Back to Home"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/aroma-chai-franchise---premium-landing-page/src/app/thankyou/page.tsx",
                        lineNumber: 64,
                        columnNumber: 6
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/aroma-chai-franchise---premium-landing-page/src/app/thankyou/page.tsx",
                    lineNumber: 63,
                    columnNumber: 5
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/aroma-chai-franchise---premium-landing-page/src/app/thankyou/page.tsx",
            lineNumber: 35,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/aroma-chai-franchise---premium-landing-page/src/app/thankyou/page.tsx",
        lineNumber: 34,
        columnNumber: 3
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__71a45b7b._.js.map
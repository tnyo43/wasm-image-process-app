(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "../pkg/image_process_app.js":
/*!***********************************!*\
  !*** ../pkg/image_process_app.js ***!
  \***********************************/
/*! exports provided: greet, swap_color_channels, __wbg_alert_aa99e4c5aa939754, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _image_process_app_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image_process_app_bg.wasm */ \"../pkg/image_process_app_bg.wasm\");\n/* harmony import */ var _image_process_app_bg_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image_process_app_bg.js */ \"../pkg/image_process_app_bg.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"greet\", function() { return _image_process_app_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"greet\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"swap_color_channels\", function() { return _image_process_app_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"swap_color_channels\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_alert_aa99e4c5aa939754\", function() { return _image_process_app_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_alert_aa99e4c5aa939754\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return _image_process_app_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_throw\"]; });\n\n\n\n\n//# sourceURL=webpack:///../pkg/image_process_app.js?");

/***/ }),

/***/ "../pkg/image_process_app_bg.js":
/*!**************************************!*\
  !*** ../pkg/image_process_app_bg.js ***!
  \**************************************/
/*! exports provided: greet, swap_color_channels, __wbg_alert_aa99e4c5aa939754, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"greet\", function() { return greet; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"swap_color_channels\", function() { return swap_color_channels; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_alert_aa99e4c5aa939754\", function() { return __wbg_alert_aa99e4c5aa939754; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return __wbindgen_throw; });\n/* harmony import */ var _image_process_app_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image_process_app_bg.wasm */ \"../pkg/image_process_app_bg.wasm\");\n\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nlet cachedUint8Memory0 = new Uint8Array();\n\nfunction getUint8Memory0() {\n    if (cachedUint8Memory0.byteLength === 0) {\n        cachedUint8Memory0 = new Uint8Array(_image_process_app_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachedUint8Memory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n/**\n*/\nfunction greet() {\n    _image_process_app_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"greet\"]();\n}\n\nlet WASM_VECTOR_LEN = 0;\n\nfunction passArray8ToWasm0(arg, malloc) {\n    const ptr = malloc(arg.length * 1);\n    getUint8Memory0().set(arg, ptr / 1);\n    WASM_VECTOR_LEN = arg.length;\n    return ptr;\n}\n\nlet cachedInt32Memory0 = new Int32Array();\n\nfunction getInt32Memory0() {\n    if (cachedInt32Memory0.byteLength === 0) {\n        cachedInt32Memory0 = new Int32Array(_image_process_app_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachedInt32Memory0;\n}\n\nfunction getArrayU8FromWasm0(ptr, len) {\n    return getUint8Memory0().subarray(ptr / 1, ptr / 1 + len);\n}\n/**\n* @param {Uint8ClampedArray} buf\n* @param {number} width\n* @param {number} height\n* @returns {Uint8Array}\n*/\nfunction swap_color_channels(buf, width, height) {\n    try {\n        const retptr = _image_process_app_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_add_to_stack_pointer\"](-16);\n        const ptr0 = passArray8ToWasm0(buf, _image_process_app_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"]);\n        const len0 = WASM_VECTOR_LEN;\n        _image_process_app_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"swap_color_channels\"](retptr, ptr0, len0, width, height);\n        var r0 = getInt32Memory0()[retptr / 4 + 0];\n        var r1 = getInt32Memory0()[retptr / 4 + 1];\n        var v1 = getArrayU8FromWasm0(r0, r1).slice();\n        _image_process_app_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_free\"](r0, r1 * 1);\n        return v1;\n    } finally {\n        _image_process_app_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_add_to_stack_pointer\"](16);\n    }\n}\n\nfunction __wbg_alert_aa99e4c5aa939754(arg0, arg1) {\n    alert(getStringFromWasm0(arg0, arg1));\n};\n\nfunction __wbindgen_throw(arg0, arg1) {\n    throw new Error(getStringFromWasm0(arg0, arg1));\n};\n\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../www/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///../pkg/image_process_app_bg.js?");

/***/ }),

/***/ "../pkg/image_process_app_bg.wasm":
/*!****************************************!*\
  !*** ../pkg/image_process_app_bg.wasm ***!
  \****************************************/
/*! exports provided: memory, swap_color_channels, greet, __wbindgen_add_to_stack_pointer, __wbindgen_malloc, __wbindgen_free */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./image_process_app_bg.js */ \"../pkg/image_process_app_bg.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///../pkg/image_process_app_bg.wasm?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pkg_image_process_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pkg/image_process_app */ \"../pkg/image_process_app.js\");\n\n\nwindow.onload = () => {\n  const imageInput = document.getElementById('input-image');\n  console.log(imageInput);\n\n  imageInput.addEventListener('change', (event) => {\n    const image = new Image();\n    image.onload = () => {\n      const { width, height } = image;\n\n      const canvas = document.getElementById('original-canvas');\n      canvas.width = width;\n      canvas.height = height;\n      canvas.getContext('2d').drawImage(image, 0, 0, width, height);\n      const { data } = canvas\n        .getContext('2d')\n        .getImageData(0, 0, width, height);\n\n      const converted = Object(_pkg_image_process_app__WEBPACK_IMPORTED_MODULE_0__[\"swap_color_channels\"])(data, width, height);\n      const convertedImage = new ImageData(\n        new Uint8ClampedArray(converted),\n        width\n      );\n      const convertedCanvas = document.getElementById('converted-canvas');\n      convertedCanvas.width = width;\n      convertedCanvas.height = height;\n      convertedCanvas\n        .getContext('2d')\n        .putImageData(convertedImage, 0, 0, 0, 0, width, height);\n    };\n\n    const reader = new FileReader();\n    reader.onload = () => {\n      image.src = reader.result;\n    };\n\n    reader.readAsDataURL(event.target.files[0]);\n  });\n};\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(originalModule) {\n\tif (!originalModule.webpackPolyfill) {\n\t\tvar module = Object.create(originalModule);\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"exports\", {\n\t\t\tenumerable: true\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/harmony-module.js?");

/***/ })

}]);
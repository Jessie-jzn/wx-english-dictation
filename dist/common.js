"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["common"],{

/***/ "./src/services/sentence.ts":
/*!**********************************!*\
  !*** ./src/services/sentence.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSentenceList": function() { return /* binding */ getSentenceList; }
/* harmony export */ });
/* harmony import */ var _Users_jessie_chen_project_wx_english_dictation_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_jessie_chen_project_wx_english_dictation_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);



var db = _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__.cloud.database();
var sentencesCollection = db.collection('sentences');
var getSentenceList = /*#__PURE__*/function () {
  var _ref = (0,_Users_jessie_chen_project_wx_english_dictation_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(/*#__PURE__*/(0,_Users_jessie_chen_project_wx_english_dictation_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__["default"])().mark(function _callee() {
    var _yield$sentencesColle, data;
    return (0,_Users_jessie_chen_project_wx_english_dictation_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__["default"])().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return sentencesCollection.orderBy('createdAt', 'desc').limit(20).get();
        case 3:
          _yield$sentencesColle = _context.sent;
          data = _yield$sentencesColle.data;
          return _context.abrupt("return", data);
        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          console.error('获取句子列表失败：', _context.t0);
          return _context.abrupt("return", []);
        case 12:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 8]]);
  }));
  return function getSentenceList() {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./src/store/index.ts":
/*!****************************!*\
  !*** ./src/store/index.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useStore": function() { return /* binding */ useStore; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sentence__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sentence */ "./src/store/sentence.ts");


var store = {
  sentenceStore: new _sentence__WEBPACK_IMPORTED_MODULE_1__["default"]()
};
var StoreContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(store);
var useStore = function useStore() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(StoreContext);
};
/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),

/***/ "./src/store/sentence.ts":
/*!*******************************!*\
  !*** ./src/store/sentence.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _Users_jessie_chen_project_wx_english_dictation_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_jessie_chen_project_wx_english_dictation_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_jessie_chen_project_wx_english_dictation_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_jessie_chen_project_wx_english_dictation_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_jessie_chen_project_wx_english_dictation_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/dist/mobx.esm.js");
/* harmony import */ var _services_sentence__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/sentence */ "./src/services/sentence.ts");







var SentenceStore = /*#__PURE__*/function () {
  function SentenceStore() {
    (0,_Users_jessie_chen_project_wx_english_dictation_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, SentenceStore);
    (0,_Users_jessie_chen_project_wx_english_dictation_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "sentences", []);
    (0,_Users_jessie_chen_project_wx_english_dictation_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "loading", false);
    (0,mobx__WEBPACK_IMPORTED_MODULE_3__.makeAutoObservable)(this);
  }
  return (0,_Users_jessie_chen_project_wx_english_dictation_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_4__["default"])(SentenceStore, [{
    key: "fetchSentences",
    value: function () {
      var _fetchSentences = (0,_Users_jessie_chen_project_wx_english_dictation_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__["default"])(/*#__PURE__*/(0,_Users_jessie_chen_project_wx_english_dictation_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_6__["default"])().mark(function _callee() {
        var list;
        return (0,_Users_jessie_chen_project_wx_english_dictation_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_6__["default"])().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              this.loading = true;
              _context.prev = 1;
              _context.next = 4;
              return (0,_services_sentence__WEBPACK_IMPORTED_MODULE_0__.getSentenceList)();
            case 4:
              list = _context.sent;
              this.sentences = list;
            case 6:
              _context.prev = 6;
              this.loading = false;
              return _context.finish(6);
            case 9:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[1,, 6, 9]]);
      }));
      function fetchSentences() {
        return _fetchSentences.apply(this, arguments);
      }
      return fetchSentences;
    }()
  }]);
}();
/* harmony default export */ __webpack_exports__["default"] = (SentenceStore);

/***/ })

}]);
//# sourceMappingURL=common.js.map
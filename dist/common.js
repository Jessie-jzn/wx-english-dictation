"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["common"],{

/***/ "./src/mock/sentences.ts":
/*!*******************************!*\
  !*** ./src/mock/sentences.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mockData: function() { return /* binding */ mockData; }
/* harmony export */ });
var mockData = {
  list: [{
    audioClip: {
      _id: '1',
      sentence_id: '1',
      url: '/assets/audio/common_voice_en_40865211.mp3',
      duration: 3
    },
    sentence: {
      _id: '1',
      text: 'Hello, how are you?',
      translation: '你好，你好吗？',
      level: 1,
      category: '日常对话'
    }
  }, {
    audioClip: {
      _id: '2',
      sentence_id: '2',
      url: '/assets/audio/common_voice_en_40865211.mp3',
      duration: 4
    },
    sentence: {
      _id: '2',
      text: 'Nice to meet you.',
      translation: '很高兴见到你。',
      level: 1,
      category: '日常对话'
    }
  }]
};

/***/ }),

/***/ "./src/services/wechatCloudDataService.ts":
/*!************************************************!*\
  !*** ./src/services/wechatCloudDataService.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WechatCloudDataService: function() { return /* binding */ WechatCloudDataService; }
/* harmony export */ });
/* harmony import */ var _Users_jessie_chen_project_wx_english_dictation_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_jessie_chen_project_wx_english_dictation_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_jessie_chen_project_wx_english_dictation_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_jessie_chen_project_wx_english_dictation_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _mock_sentences__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mock/sentences */ "./src/mock/sentences.ts");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);






var WechatCloudDataService = /*#__PURE__*/function () {
  function WechatCloudDataService() {
    (0,_Users_jessie_chen_project_wx_english_dictation_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, WechatCloudDataService);
  }
  return (0,_Users_jessie_chen_project_wx_english_dictation_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_3__["default"])(WechatCloudDataService, [{
    key: "isCloudAvailable",
    value: function isCloudAvailable() {
      return  true && !!(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().cloud);
    }
  }, {
    key: "getSentenceList",
    value: function () {
      var _getSentenceList = (0,_Users_jessie_chen_project_wx_english_dictation_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__["default"])(/*#__PURE__*/(0,_Users_jessie_chen_project_wx_english_dictation_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee() {
        var _ref, result;
        return (0,_Users_jessie_chen_project_wx_english_dictation_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (this.isCloudAvailable()) {
                _context.next = 3;
                break;
              }
              console.log('使用mock数据');
              return _context.abrupt("return", Promise.resolve(_mock_sentences__WEBPACK_IMPORTED_MODULE_0__.mockData.list));
            case 3:
              _context.prev = 3;
              _context.next = 6;
              return wx.cloud.callFunction({
                name: 'getSentenceList',
                data: {}
              });
            case 6:
              _ref = _context.sent;
              result = _ref.result;
              if (result.list) {
                _context.next = 10;
                break;
              }
              throw new Error('No data returned');
            case 10:
              return _context.abrupt("return", result.list);
            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](3);
              console.error('获取句子列表失败:', _context.t0);
              return _context.abrupt("return", _mock_sentences__WEBPACK_IMPORTED_MODULE_0__.mockData.list);
            case 17:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[3, 13]]);
      }));
      function getSentenceList() {
        return _getSentenceList.apply(this, arguments);
      }
      return getSentenceList;
    }()
  }, {
    key: "getAudioDetail",
    value: function () {
      var _getAudioDetail = (0,_Users_jessie_chen_project_wx_english_dictation_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__["default"])(/*#__PURE__*/(0,_Users_jessie_chen_project_wx_english_dictation_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee2(audio_id) {
        var detail, _ref2, result, _detail;
        return (0,_Users_jessie_chen_project_wx_english_dictation_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (this.isCloudAvailable()) {
                _context2.next = 5;
                break;
              }
              detail = _mock_sentences__WEBPACK_IMPORTED_MODULE_0__.mockData.list.find(function (item) {
                return item.audioClip._id === audio_id;
              });
              if (detail) {
                _context2.next = 4;
                break;
              }
              throw new Error('Audio not found');
            case 4:
              return _context2.abrupt("return", detail);
            case 5:
              _context2.prev = 5;
              _context2.next = 8;
              return wx.cloud.callFunction({
                name: 'getAudioDetail',
                data: {
                  audio_id: audio_id
                }
              });
            case 8:
              _ref2 = _context2.sent;
              result = _ref2.result;
              if (!(result.errMsg !== 'ok')) {
                _context2.next = 12;
                break;
              }
              throw new Error(result.errMsg);
            case 12:
              return _context2.abrupt("return", {
                audioClip: result.audioClip,
                sentence: result.sentence
              });
            case 15:
              _context2.prev = 15;
              _context2.t0 = _context2["catch"](5);
              console.error('获取音频详情失败:', _context2.t0);
              _detail = _mock_sentences__WEBPACK_IMPORTED_MODULE_0__.mockData.list.find(function (item) {
                return item.audioClip._id === audio_id;
              });
              if (_detail) {
                _context2.next = 21;
                break;
              }
              throw new Error('Audio not found');
            case 21:
              return _context2.abrupt("return", _detail);
            case 22:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this, [[5, 15]]);
      }));
      function getAudioDetail(_x) {
        return _getAudioDetail.apply(this, arguments);
      }
      return getAudioDetail;
    }()
  }]);
}();

/***/ }),

/***/ "./src/store/index.ts":
/*!****************************!*\
  !*** ./src/store/index.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useStore: function() { return /* binding */ useStore; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sentence__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sentence */ "./src/store/sentence.ts");
/* harmony import */ var _services_wechatCloudDataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/wechatCloudDataService */ "./src/services/wechatCloudDataService.ts");



var dataService = new _services_wechatCloudDataService__WEBPACK_IMPORTED_MODULE_1__.WechatCloudDataService();
var store = {
  sentenceStore: new _sentence__WEBPACK_IMPORTED_MODULE_2__["default"](dataService)
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

/* harmony import */ var _Users_jessie_chen_project_wx_english_dictation_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_jessie_chen_project_wx_english_dictation_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_jessie_chen_project_wx_english_dictation_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_jessie_chen_project_wx_english_dictation_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_jessie_chen_project_wx_english_dictation_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/dist/mobx.esm.js");






var SentenceStore = /*#__PURE__*/function () {
  // 记录已尝试的题目ID

  function SentenceStore(dataService) {
    (0,_Users_jessie_chen_project_wx_english_dictation_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SentenceStore);
    (0,_Users_jessie_chen_project_wx_english_dictation_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "audioList", []);
    (0,_Users_jessie_chen_project_wx_english_dictation_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "currentAudio", null);
    (0,_Users_jessie_chen_project_wx_english_dictation_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "loading", false);
    (0,_Users_jessie_chen_project_wx_english_dictation_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "dataService", void 0);
    (0,_Users_jessie_chen_project_wx_english_dictation_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "currentIndex", 0);
    (0,_Users_jessie_chen_project_wx_english_dictation_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "correctCount", 0);
    (0,_Users_jessie_chen_project_wx_english_dictation_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "wrongCount", 0);
    (0,_Users_jessie_chen_project_wx_english_dictation_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "attemptedQuestions", new Set());
    (0,mobx__WEBPACK_IMPORTED_MODULE_2__.makeAutoObservable)(this);
    this.dataService = dataService;
  }
  return (0,_Users_jessie_chen_project_wx_english_dictation_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_3__["default"])(SentenceStore, [{
    key: "totalAttempted",
    get: function get() {
      return this.attemptedQuestions.size;
    }
  }, {
    key: "accuracy",
    get: function get() {
      if (this.totalAttempted === 0) return 0;
      return Math.round(this.correctCount / this.totalAttempted * 100);
    }
  }, {
    key: "fetchAudioList",
    value: function () {
      var _fetchAudioList = (0,_Users_jessie_chen_project_wx_english_dictation_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__["default"])(/*#__PURE__*/(0,_Users_jessie_chen_project_wx_english_dictation_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee() {
        var list;
        return (0,_Users_jessie_chen_project_wx_english_dictation_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              this.loading = true;
              _context.prev = 1;
              _context.next = 4;
              return this.dataService.getSentenceList();
            case 4:
              list = _context.sent;
              this.audioList = list;
              if (!this.currentAudio && (list === null || list === void 0 ? void 0 : list.length) > 0) {
                this.currentAudio = list[0];
                this.currentIndex = 0;
              }
            case 7:
              _context.prev = 7;
              this.loading = false;
              return _context.finish(7);
            case 10:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[1,, 7, 10]]);
      }));
      function fetchAudioList() {
        return _fetchAudioList.apply(this, arguments);
      }
      return fetchAudioList;
    }()
  }, {
    key: "setCurrentAudio",
    value: function setCurrentAudio(audio) {
      this.currentAudio = audio;
      this.currentIndex = this.audioList.findIndex(function (a) {
        return a.audioClip._id === audio.audioClip._id;
      });
    }
  }, {
    key: "nextSentence",
    value: function nextSentence() {
      var _this$audioList;
      var nextIndex = this.currentIndex + 1;
      if (nextIndex < ((_this$audioList = this.audioList) === null || _this$audioList === void 0 ? void 0 : _this$audioList.length)) {
        this.currentIndex = nextIndex;
        this.currentAudio = this.audioList[nextIndex];
      } else {
        // 回到第一题
        this.currentIndex = 0;
        this.currentAudio = this.audioList[0];
      }
    }
  }, {
    key: "checkAnswer",
    value: function checkAnswer(userInput) {
      if (!this.currentAudio) return false;
      var isCorrect = userInput.trim().toLowerCase() === this.currentAudio.sentence.text.trim().toLowerCase();

      // 只在第一次回答时计入统计
      if (!this.attemptedQuestions.has(this.currentAudio.audioClip._id)) {
        this.attemptedQuestions.add(this.currentAudio.audioClip._id);
        if (isCorrect) {
          this.correctCount++;
        } else {
          this.wrongCount++;
        }
      }
      return isCorrect;
    }
  }, {
    key: "resetStats",
    value: function resetStats() {
      this.correctCount = 0;
      this.wrongCount = 0;
      this.attemptedQuestions.clear();
    }
  }]);
}();
/* harmony default export */ __webpack_exports__["default"] = (SentenceStore);

/***/ })

}]);
//# sourceMappingURL=common.js.map
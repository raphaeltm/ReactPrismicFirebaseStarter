(function(e, a) { for(var i in a) e[i] = a[i]; }(this, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTypeTitle = exports.getFormat = exports.getContent = exports.loadSettings = exports.linkResolver = exports.getApi = exports.apiEndpoint = exports.CONTENT_FORMATS = undefined;

var _prismicJavascript = __webpack_require__(7);

var _prismicJavascript2 = _interopRequireDefault(_prismicJavascript);

var _content = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var CONTENT_FORMATS = exports.CONTENT_FORMATS = {
  LIST: 'LIST',
  SINGLE: 'SINGLE',
  REPEATABLE: 'REPEATABLE'
};

var apiEndpoint = exports.apiEndpoint = "https://raphaeltm.prismic.io/api/v2";

var getApi = exports.getApi = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _prismicJavascript2.default.getApi(apiEndpoint);

          case 2:
            return _context.abrupt("return", _context.sent);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function getApi() {
    return _ref.apply(this, arguments);
  };
}();

var linkResolver = exports.linkResolver = function linkResolver(doc) {
  if (doc.type === "homepage") {
    return '/';
  }
  return "/" + doc.type + "/" + (doc.uid || '');
};

var loadSettings = exports.loadSettings = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(store) {
    var settings;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return getContent('settings');

          case 2:
            settings = _context2.sent;

            store.dispatch((0, _content.contentLoaded)(settings, 'settings'));

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, undefined);
  }));

  return function loadSettings(_x) {
    return _ref2.apply(this, arguments);
  };
}();

var getContent = exports.getContent = function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(type, uid) {
    var api, page, response;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return getApi();

          case 2:
            api = _context3.sent;

            if (!(!type && !uid)) {
              _context3.next = 7;
              break;
            }

            _context3.next = 6;
            return getContent('homepage');

          case 6:
            return _context3.abrupt("return", _context3.sent);

          case 7:
            if (!uid) {
              _context3.next = 18;
              break;
            }

            _context3.next = 10;
            return api.getByUID(type, uid);

          case 10:
            page = _context3.sent;

            if (!page) {
              _context3.next = 15;
              break;
            }

            return _context3.abrupt("return", page);

          case 15:
            return _context3.abrupt("return", null);

          case 16:
            _context3.next = 30;
            break;

          case 18:
            _context3.next = 20;
            return api.query(_prismicJavascript2.default.Predicates.at('document.type', type), { pageSize: 100 });

          case 20:
            response = _context3.sent;

            if (!(response.results.length === 0)) {
              _context3.next = 25;
              break;
            }

            return _context3.abrupt("return", null);

          case 25:
            if (!response.results[0].uid) {
              _context3.next = 29;
              break;
            }

            return _context3.abrupt("return", response.results);

          case 29:
            return _context3.abrupt("return", response.results[0]);

          case 30:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, undefined);
  }));

  return function getContent(_x2, _x3) {
    return _ref3.apply(this, arguments);
  };
}();

var getFormat = exports.getFormat = function getFormat(content) {
  if (typeof content.length !== 'undefined') {
    return CONTENT_FORMATS.LIST;
  } else if (content.uid) {
    return CONTENT_FORMATS.REPEATABLE;
  } else {
    return CONTENT_FORMATS.SINGLE;
  }
};

var getTypeTitle = exports.getTypeTitle = function getTypeTitle(type) {
  var typeSpaces = type.replace('-', ' ');
  return titleCase(typeSpaces);
};

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("firebase-functions");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("prismic-dom");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(4);

var _sitemap = __webpack_require__(5);

var _seoPrep = __webpack_require__(9);

exports.seoPrep = _seoPrep.seoPrep;

exports.siteMap = _sitemap.siteMap;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.siteMap = undefined;

var _firebaseFunctions = __webpack_require__(1);

var functions = _interopRequireWildcard(_firebaseFunctions);

var _sitemap = __webpack_require__(6);

var sm = _interopRequireWildcard(_sitemap);

var _prismic = __webpack_require__(0);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var fetchAllPages = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var pageSize, api, allResults, initial, currentPage, response;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            pageSize = 50;
            _context.next = 3;
            return (0, _prismic.getApi)();

          case 3:
            api = _context.sent;
            allResults = [];
            _context.next = 7;
            return api.query([], { pageSize: pageSize, page: 1 });

          case 7:
            initial = _context.sent;

            allResults = [].concat(_toConsumableArray(allResults), _toConsumableArray(initial.results));
            currentPage = 2;

          case 10:
            if (!(currentPage <= initial.total_pages)) {
              _context.next = 18;
              break;
            }

            _context.next = 13;
            return api.query([], { pageSize: pageSize, page: currentPage });

          case 13:
            response = _context.sent;

            allResults = [].concat(_toConsumableArray(allResults), _toConsumableArray(response.results));

          case 15:
            currentPage++;
            _context.next = 10;
            break;

          case 18:
            return _context.abrupt("return", allResults);

          case 19:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function fetchAllPages() {
    return _ref.apply(this, arguments);
  };
}();

var getURLsFromPages = function getURLsFromPages(pages) {
  var urls = [];
  pages.map(function (document) {
    urls.push({
      url: (0, _prismic.linkResolver)(document)
    });
  });
  return urls;
};

var siteMap = exports.siteMap = functions.https.onRequest(function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var pages, sitemap;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return fetchAllPages();

          case 2:
            pages = _context2.sent;
            sitemap = sm.createSitemap({
              hostname: req.protocol + "://" + req.hostname,
              cacheTime: 600000,
              urls: getURLsFromPages(pages)
            });


            sitemap.toXML(function (err, xml) {
              if (err) {
                return res.status(500).end();
              }
              res.header('Content-Type', 'application/xml');
              res.set('Cache-Control', 'public, max-age=1800, s-maxage=3600');
              res.send(xml);
            });

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, undefined);
  }));

  return function (_x, _x2) {
    return _ref2.apply(this, arguments);
  };
}());

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("sitemap");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("prismic-javascript");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var CONTENT_LOADED = exports.CONTENT_LOADED = "CONTENT_LOADED";
var CONTENT_FETCHING = exports.CONTENT_FETCHING = "CONTENT_FETCHING";

var contentFetching = exports.contentFetching = function contentFetching() {
  return {
    type: CONTENT_FETCHING
  };
};

var contentLoaded = exports.contentLoaded = function contentLoaded(content, type, uid) {
  return {
    type: CONTENT_LOADED,
    payload: {
      content: content,
      type: type,
      uid: uid
    }
  };
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.seoPrep = undefined;

var _firebaseFunctions = __webpack_require__(1);

var functions = _interopRequireWildcard(_firebaseFunctions);

var _express = __webpack_require__(10);

var _express2 = _interopRequireDefault(_express);

var _cookieParser = __webpack_require__(11);

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _bodyParser = __webpack_require__(12);

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _prismic = __webpack_require__(0);

var _pug = __webpack_require__(13);

var pug = _interopRequireWildcard(_pug);

var _prismicDom = __webpack_require__(2);

var Prismic = _interopRequireWildcard(_prismicDom);

var _index = __webpack_require__(14);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var cors = __webpack_require__(16)({ origin: true });


var app = (0, _express2.default)();

app.use(cors);
app.use((0, _cookieParser2.default)());
app.use(_bodyParser2.default.json());

var buildState = function buildState(settings, content, type) {
  var state = {
    content: {
      settings: settings
    }
  };

  if ((0, _prismic.getFormat)(content) === _prismic.CONTENT_FORMATS.LIST) {
    state.content[type] = {};
    content.map(function (page) {
      state.content[type][page.uid] = page;
    });
  } else if ((0, _prismic.getFormat)(content) === _prismic.CONTENT_FORMATS.SINGLE) {
    state.content[type] = content;
  } else {
    state.content[type] = _defineProperty({}, content.uid, content);
  }

  return state;
};

var handler = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$params, type, uid, renderIndex, render404, settings, content, context;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$params = req.params, type = _req$params.type, uid = _req$params.uid;
            renderIndex = pug.compileFile('./src/index.pug');
            render404 = pug.compileFile('./src/404.pug');
            _context.next = 5;
            return (0, _prismic.getContent)('settings');

          case 5:
            settings = _context.sent;
            _context.next = 8;
            return (0, _prismic.getContent)(type, uid);

          case 8:
            content = _context.sent;


            if (!content) {
              res.status(404);
              res.set('Content-Type', 'text/html');
              res.send(render404());
            }

            context = {
              data: (0, _index.buildSEOData)(content, settings, type, uid),
              state: JSON.stringify(buildState(settings, content, type)),
              Prismic: Prismic
            };


            res.set('Content-Type', 'text/html');
            res.send(renderIndex(context));

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function handler(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

app.get('/:type/:uid', handler);
app.get('/:type', handler);
app.get('/', handler);

var seoPrep = exports.seoPrep = functions.https.onRequest(app);

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("pug");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildSEOData = undefined;

var _basic = __webpack_require__(15);

var SEOBasics = _interopRequireWildcard(_basic);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var buildSEOData = exports.buildSEOData = function buildSEOData(content, settings, type, uid) {
  return {
    title: SEOBasics.getTitle(content, settings, type)
  };
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTitle = undefined;

var _prismicDom = __webpack_require__(2);

var PrismicDOM = _interopRequireWildcard(_prismicDom);

var _prismic = __webpack_require__(0);

var PrismicUtils = _interopRequireWildcard(_prismic);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var getTitle = exports.getTitle = function getTitle(content, settings, type) {
  var settingsData = settings.data;
  if (PrismicUtils.getFormat(content) === PrismicUtils.CONTENT_FORMATS.LIST) {
    return PrismicUtils.getTypeTitle(type) + " | " + settingsData.site_title;
  } else {
    var data = content.data;
    return "" + (data.title && PrismicDOM.RichText.asText(data.title) + " | ") + settingsData.site_title;
  }
};

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ })
/******/ ])));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMDFmZTljNjBlYTY3N2I5NGQ5ZDAiLCJ3ZWJwYWNrOi8vLy4vLi4vY29tbW9uL3ByaXNtaWMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlyZWJhc2UtZnVuY3Rpb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJpc21pYy1kb21cIiIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYmFiZWwtcG9seWZpbGxcIiIsIndlYnBhY2s6Ly8vLi9zcmMvc2l0ZW1hcC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzaXRlbWFwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJpc21pYy1qYXZhc2NyaXB0XCIiLCJ3ZWJwYWNrOi8vLy4vLi4vc3JjL2FjdGlvbnMvY29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VvUHJlcC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29va2llLXBhcnNlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImJvZHktcGFyc2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHVnXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nlby9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VvL2Jhc2ljLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcnNcIiJdLCJuYW1lcyI6WyJDT05URU5UX0ZPUk1BVFMiLCJMSVNUIiwiU0lOR0xFIiwiUkVQRUFUQUJMRSIsImFwaUVuZHBvaW50IiwiZ2V0QXBpIiwibGlua1Jlc29sdmVyIiwiZG9jIiwidHlwZSIsInVpZCIsImxvYWRTZXR0aW5ncyIsInN0b3JlIiwiZ2V0Q29udGVudCIsInNldHRpbmdzIiwiZGlzcGF0Y2giLCJhcGkiLCJnZXRCeVVJRCIsInBhZ2UiLCJxdWVyeSIsIlByZWRpY2F0ZXMiLCJhdCIsInBhZ2VTaXplIiwicmVzcG9uc2UiLCJyZXN1bHRzIiwibGVuZ3RoIiwiZ2V0Rm9ybWF0IiwiY29udGVudCIsImdldFR5cGVUaXRsZSIsInR5cGVTcGFjZXMiLCJyZXBsYWNlIiwidGl0bGVDYXNlIiwiZXhwb3J0cyIsInNlb1ByZXAiLCJzaXRlTWFwIiwiZnVuY3Rpb25zIiwic20iLCJmZXRjaEFsbFBhZ2VzIiwiYWxsUmVzdWx0cyIsImluaXRpYWwiLCJjdXJyZW50UGFnZSIsInRvdGFsX3BhZ2VzIiwiZ2V0VVJMc0Zyb21QYWdlcyIsInBhZ2VzIiwidXJscyIsIm1hcCIsImRvY3VtZW50IiwicHVzaCIsInVybCIsImh0dHBzIiwib25SZXF1ZXN0IiwicmVxIiwicmVzIiwic2l0ZW1hcCIsImNyZWF0ZVNpdGVtYXAiLCJob3N0bmFtZSIsInByb3RvY29sIiwiY2FjaGVUaW1lIiwidG9YTUwiLCJlcnIiLCJ4bWwiLCJzdGF0dXMiLCJlbmQiLCJoZWFkZXIiLCJzZXQiLCJzZW5kIiwiQ09OVEVOVF9MT0FERUQiLCJDT05URU5UX0ZFVENISU5HIiwiY29udGVudEZldGNoaW5nIiwiY29udGVudExvYWRlZCIsInBheWxvYWQiLCJwdWciLCJQcmlzbWljIiwiY29ycyIsInJlcXVpcmUiLCJvcmlnaW4iLCJhcHAiLCJ1c2UiLCJqc29uIiwiYnVpbGRTdGF0ZSIsInN0YXRlIiwiaGFuZGxlciIsInBhcmFtcyIsInJlbmRlckluZGV4IiwiY29tcGlsZUZpbGUiLCJyZW5kZXI0MDQiLCJjb250ZXh0IiwiZGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJnZXQiLCJTRU9CYXNpY3MiLCJidWlsZFNFT0RhdGEiLCJ0aXRsZSIsImdldFRpdGxlIiwiUHJpc21pY0RPTSIsIlByaXNtaWNVdGlscyIsInNldHRpbmdzRGF0YSIsInNpdGVfdGl0bGUiLCJSaWNoVGV4dCIsImFzVGV4dCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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R0QsQ0FKTSxDOzs7Ozs7Ozs7Ozs7OztBQ0ZQOztJQUFZc0YsVTs7QUFDWjs7SUFBWUMsWTs7OztBQUVMLElBQU1GLDhCQUFXLFNBQVhBLFFBQVcsQ0FBQ25FLE9BQUQsRUFBVWIsUUFBVixFQUFvQkwsSUFBcEIsRUFBNkI7QUFDbkQsTUFBTXdGLGVBQWVuRixTQUFTeUUsSUFBOUI7QUFDQSxNQUFJUyxhQUFhdEUsU0FBYixDQUF1QkMsT0FBdkIsTUFBb0NxRSxhQUFhL0YsZUFBYixDQUE2QkMsSUFBckUsRUFBMkU7QUFDekUsV0FBVThGLGFBQWFwRSxZQUFiLENBQTBCbkIsSUFBMUIsQ0FBVixXQUErQ3dGLGFBQWFDLFVBQTVEO0FBQ0QsR0FGRCxNQUdLO0FBQ0gsUUFBTVgsT0FBTzVELFFBQVE0RCxJQUFyQjtBQUNBLGlCQUFVQSxLQUFLTSxLQUFMLElBQWlCRSxXQUFXSSxRQUFYLENBQW9CQyxNQUFwQixDQUEyQmIsS0FBS00sS0FBaEMsQ0FBakIsUUFBVixJQUF5RUksYUFBYUMsVUFBdEY7QUFDRDtBQUNGLENBVE0sQzs7Ozs7O0FDSFAsaUMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAwMWZlOWM2MGVhNjc3Yjk0ZDlkMCIsImltcG9ydCBQcmlzbWljIGZyb20gXCJwcmlzbWljLWphdmFzY3JpcHRcIjtcclxuaW1wb3J0IHtjb250ZW50TG9hZGVkfSBmcm9tIFwiLi4vc3JjL2FjdGlvbnMvY29udGVudFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IENPTlRFTlRfRk9STUFUUyA9IHtcclxuICBMSVNUOiAnTElTVCcsXHJcbiAgU0lOR0xFOiAnU0lOR0xFJyxcclxuICBSRVBFQVRBQkxFOiAnUkVQRUFUQUJMRScsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgYXBpRW5kcG9pbnQgPSBcImh0dHBzOi8vcmFwaGFlbHRtLnByaXNtaWMuaW8vYXBpL3YyXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0QXBpID0gYXN5bmMgKCkgPT4ge1xyXG4gIHJldHVybiBhd2FpdCBQcmlzbWljLmdldEFwaShhcGlFbmRwb2ludCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbGlua1Jlc29sdmVyID0gKGRvYykgPT4ge1xyXG4gIGlmIChkb2MudHlwZSA9PT0gXCJob21lcGFnZVwiKSB7XHJcbiAgICByZXR1cm4gJy8nO1xyXG4gIH1cclxuICByZXR1cm4gYC8ke2RvYy50eXBlfS9gICsgKGRvYy51aWQgfHwgJycpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvYWRTZXR0aW5ncyA9IGFzeW5jIChzdG9yZSkgPT4ge1xyXG4gIGxldCBzZXR0aW5ncyA9IGF3YWl0IGdldENvbnRlbnQoJ3NldHRpbmdzJyk7XHJcbiAgc3RvcmUuZGlzcGF0Y2goY29udGVudExvYWRlZChzZXR0aW5ncywgJ3NldHRpbmdzJykpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldENvbnRlbnQgPSBhc3luYyAodHlwZSwgdWlkKSA9PiB7XHJcbiAgY29uc3QgYXBpID0gYXdhaXQgZ2V0QXBpKCk7XHJcblxyXG4gIGlmICghdHlwZSAmJiAhdWlkKSB7XHJcbiAgICByZXR1cm4gYXdhaXQgZ2V0Q29udGVudCgnaG9tZXBhZ2UnKTtcclxuICB9XHJcblxyXG4gIGlmICh1aWQpIHtcclxuICAgIGNvbnN0IHBhZ2UgPSBhd2FpdCBhcGkuZ2V0QnlVSUQodHlwZSwgdWlkKTtcclxuICAgIGlmIChwYWdlKSB7XHJcbiAgICAgIHJldHVybiBwYWdlO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxuICBlbHNlIHtcclxuICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGFwaS5xdWVyeShcclxuICAgICAgUHJpc21pYy5QcmVkaWNhdGVzLmF0KCdkb2N1bWVudC50eXBlJywgdHlwZSksXHJcbiAgICAgIHtwYWdlU2l6ZTogMTAwfVxyXG4gICAgKTtcclxuXHJcbiAgICBpZiAocmVzcG9uc2UucmVzdWx0cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICghIXJlc3BvbnNlLnJlc3VsdHNbMF0udWlkKSB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5yZXN1bHRzO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5yZXN1bHRzWzBdO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRGb3JtYXQgPSAoY29udGVudCkgPT4ge1xyXG4gIGlmKHR5cGVvZiBjb250ZW50Lmxlbmd0aCAhPT0gJ3VuZGVmaW5lZCcpe1xyXG4gICAgcmV0dXJuIENPTlRFTlRfRk9STUFUUy5MSVNUO1xyXG4gIH1cclxuICBlbHNlIGlmKGNvbnRlbnQudWlkKXtcclxuICAgIHJldHVybiBDT05URU5UX0ZPUk1BVFMuUkVQRUFUQUJMRTtcclxuICB9XHJcbiAgZWxzZSB7XHJcbiAgICByZXR1cm4gQ09OVEVOVF9GT1JNQVRTLlNJTkdMRTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0VHlwZVRpdGxlID0gKHR5cGUpID0+IHtcclxuICBjb25zdCB0eXBlU3BhY2VzID0gdHlwZS5yZXBsYWNlKCctJywgJyAnKTtcclxuICByZXR1cm4gdGl0bGVDYXNlKHR5cGVTcGFjZXMpO1xyXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLy4uL2NvbW1vbi9wcmlzbWljLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UtZnVuY3Rpb25zXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZmlyZWJhc2UtZnVuY3Rpb25zXCJcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJpc21pYy1kb21cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJwcmlzbWljLWRvbVwiXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBcImJhYmVsLXBvbHlmaWxsXCI7XG5pbXBvcnQge3NpdGVNYXB9IGZyb20gXCIuL3NpdGVtYXBcIjtcbmltcG9ydCB7c2VvUHJlcH0gZnJvbSBcIi4vc2VvUHJlcFwiO1xuXG5leHBvcnRzLnNlb1ByZXAgPSBzZW9QcmVwO1xuXG5leHBvcnRzLnNpdGVNYXAgPSBzaXRlTWFwO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmFiZWwtcG9seWZpbGxcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJiYWJlbC1wb2x5ZmlsbFwiXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCAqIGFzIGZ1bmN0aW9ucyBmcm9tIFwiZmlyZWJhc2UtZnVuY3Rpb25zXCI7XG5pbXBvcnQgKiBhcyBzbSBmcm9tIFwic2l0ZW1hcFwiO1xuaW1wb3J0IHtnZXRBcGksIGxpbmtSZXNvbHZlcn0gZnJvbSBcIi4uLy4uL2NvbW1vbi9wcmlzbWljXCI7XG5cbmNvbnN0IGZldGNoQWxsUGFnZXMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHBhZ2VTaXplID0gNTA7XG4gIGNvbnN0IGFwaSA9IGF3YWl0IGdldEFwaSgpO1xuICBsZXQgYWxsUmVzdWx0cyA9IFtdO1xuICBjb25zdCBpbml0aWFsID0gYXdhaXQgYXBpLnF1ZXJ5KFtdLCB7cGFnZVNpemU6IHBhZ2VTaXplLCBwYWdlOiAxfSk7XG4gIGFsbFJlc3VsdHMgPSBbLi4uYWxsUmVzdWx0cywgLi4uaW5pdGlhbC5yZXN1bHRzXTtcbiAgZm9yIChsZXQgY3VycmVudFBhZ2UgPSAyOyBjdXJyZW50UGFnZSA8PSBpbml0aWFsLnRvdGFsX3BhZ2VzOyBjdXJyZW50UGFnZSsrKSB7XG4gICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgYXBpLnF1ZXJ5KFtdLCB7cGFnZVNpemU6IHBhZ2VTaXplLCBwYWdlOiBjdXJyZW50UGFnZX0pO1xuICAgIGFsbFJlc3VsdHMgPSBbLi4uYWxsUmVzdWx0cywgLi4ucmVzcG9uc2UucmVzdWx0c107XG4gIH1cbiAgcmV0dXJuIGFsbFJlc3VsdHM7XG59O1xuXG5jb25zdCBnZXRVUkxzRnJvbVBhZ2VzID0gKHBhZ2VzKSA9PiB7XG4gIGxldCB1cmxzID0gW107XG4gIHBhZ2VzLm1hcCgoZG9jdW1lbnQpID0+IHtcbiAgICB1cmxzLnB1c2goe1xuICAgICAgdXJsOiBsaW5rUmVzb2x2ZXIoZG9jdW1lbnQpXG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gdXJscztcbn07XG5cbmV4cG9ydCBjb25zdCBzaXRlTWFwID0gZnVuY3Rpb25zLmh0dHBzLm9uUmVxdWVzdChhc3luYyAocmVxLCByZXMpID0+IHtcbiAgY29uc3QgcGFnZXMgPSBhd2FpdCBmZXRjaEFsbFBhZ2VzKCk7XG5cbiAgY29uc3Qgc2l0ZW1hcCA9IHNtLmNyZWF0ZVNpdGVtYXAoe1xuICAgIGhvc3RuYW1lOiBgJHtyZXEucHJvdG9jb2x9Oi8vJHtyZXEuaG9zdG5hbWV9YCxcbiAgICBjYWNoZVRpbWU6IDYwMDAwMCxcbiAgICB1cmxzOiBnZXRVUkxzRnJvbVBhZ2VzKHBhZ2VzKVxuICB9KTtcblxuICBzaXRlbWFwLnRvWE1MKGZ1bmN0aW9uIChlcnIsIHhtbCkge1xuICAgIGlmIChlcnIpIHtcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuZW5kKCk7XG4gICAgfVxuICAgIHJlcy5oZWFkZXIoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi94bWwnKTtcbiAgICByZXMuc2V0KCdDYWNoZS1Db250cm9sJywgJ3B1YmxpYywgbWF4LWFnZT0xODAwLCBzLW1heGFnZT0zNjAwJyk7XG4gICAgcmVzLnNlbmQoeG1sKTtcbiAgfSk7XG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2l0ZW1hcC5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNpdGVtYXBcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJzaXRlbWFwXCJcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJpc21pYy1qYXZhc2NyaXB0XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicHJpc21pYy1qYXZhc2NyaXB0XCJcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGNvbnN0IENPTlRFTlRfTE9BREVEID0gXCJDT05URU5UX0xPQURFRFwiO1xuZXhwb3J0IGNvbnN0IENPTlRFTlRfRkVUQ0hJTkcgPSBcIkNPTlRFTlRfRkVUQ0hJTkdcIjtcblxuZXhwb3J0IGNvbnN0IGNvbnRlbnRGZXRjaGluZyA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBDT05URU5UX0ZFVENISU5HXG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBjb250ZW50TG9hZGVkID0gKGNvbnRlbnQsIHR5cGUsIHVpZCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IENPTlRFTlRfTE9BREVELFxuICAgIHBheWxvYWQ6IHtcbiAgICAgIGNvbnRlbnQsXG4gICAgICB0eXBlLFxuICAgICAgdWlkLFxuICAgIH1cbiAgfTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vLi4vc3JjL2FjdGlvbnMvY29udGVudC5qcyIsImltcG9ydCAqIGFzIGZ1bmN0aW9ucyBmcm9tIFwiZmlyZWJhc2UtZnVuY3Rpb25zXCI7XG5pbXBvcnQgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xuaW1wb3J0IGNvb2tpZVBhcnNlciBmcm9tIFwiY29va2llLXBhcnNlclwiO1xuaW1wb3J0IGJvZHlQYXJzZXIgZnJvbSBcImJvZHktcGFyc2VyXCI7XG5pbXBvcnQge2dldENvbnRlbnQsIGdldEZvcm1hdCwgQ09OVEVOVF9GT1JNQVRTfSBmcm9tIFwiLi4vLi4vY29tbW9uL3ByaXNtaWNcIjtcbmltcG9ydCAqIGFzIHB1ZyBmcm9tIFwicHVnXCI7XG5jb25zdCBjb3JzID0gcmVxdWlyZSgnY29ycycpKHtvcmlnaW46IHRydWV9KTtcbmltcG9ydCAqIGFzIFByaXNtaWMgZnJvbSBcInByaXNtaWMtZG9tXCI7XG5pbXBvcnQge2J1aWxkU0VPRGF0YX0gZnJvbSBcIi4vc2VvL2luZGV4XCI7XG5cbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcblxuYXBwLnVzZShjb3JzKTtcbmFwcC51c2UoY29va2llUGFyc2VyKCkpO1xuYXBwLnVzZShib2R5UGFyc2VyLmpzb24oKSk7XG5cbmNvbnN0IGJ1aWxkU3RhdGUgPSAoc2V0dGluZ3MsIGNvbnRlbnQsIHR5cGUpID0+IHtcbiAgbGV0IHN0YXRlID0ge1xuICAgIGNvbnRlbnQ6IHtcbiAgICAgIHNldHRpbmdzOiBzZXR0aW5nc1xuICAgIH1cbiAgfTtcblxuICBpZihnZXRGb3JtYXQoY29udGVudCkgPT09IENPTlRFTlRfRk9STUFUUy5MSVNUKXtcbiAgICBzdGF0ZS5jb250ZW50W3R5cGVdID0ge307XG4gICAgY29udGVudC5tYXAoKHBhZ2UpID0+IHtcbiAgICAgIHN0YXRlLmNvbnRlbnRbdHlwZV1bcGFnZS51aWRdID0gcGFnZTtcbiAgICB9KTtcbiAgfVxuICBlbHNlIGlmKGdldEZvcm1hdChjb250ZW50KSA9PT0gQ09OVEVOVF9GT1JNQVRTLlNJTkdMRSl7XG4gICAgc3RhdGUuY29udGVudFt0eXBlXSA9IGNvbnRlbnQ7XG4gIH1cbiAgZWxzZSB7XG4gICAgc3RhdGUuY29udGVudFt0eXBlXSA9IHtcbiAgICAgIFtjb250ZW50LnVpZF06IGNvbnRlbnRcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGU7XG59O1xuXG5jb25zdCBoYW5kbGVyID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIGNvbnN0IHt0eXBlLCB1aWR9ID0gcmVxLnBhcmFtcztcblxuICBjb25zdCByZW5kZXJJbmRleCA9IHB1Zy5jb21waWxlRmlsZSgnLi9zcmMvaW5kZXgucHVnJyk7XG4gIGNvbnN0IHJlbmRlcjQwNCA9IHB1Zy5jb21waWxlRmlsZSgnLi9zcmMvNDA0LnB1ZycpO1xuXG4gIGNvbnN0IHNldHRpbmdzID0gYXdhaXQgZ2V0Q29udGVudCgnc2V0dGluZ3MnKTtcbiAgY29uc3QgY29udGVudCA9IGF3YWl0IGdldENvbnRlbnQodHlwZSwgdWlkKTtcblxuICBpZighY29udGVudCl7XG4gICAgcmVzLnN0YXR1cyg0MDQpO1xuICAgIHJlcy5zZXQoJ0NvbnRlbnQtVHlwZScsICd0ZXh0L2h0bWwnKTtcbiAgICByZXMuc2VuZChyZW5kZXI0MDQoKSk7XG4gIH1cblxuICBjb25zdCBjb250ZXh0ID0ge1xuICAgIGRhdGE6IGJ1aWxkU0VPRGF0YShjb250ZW50LCBzZXR0aW5ncywgdHlwZSwgdWlkKSxcbiAgICBzdGF0ZTogSlNPTi5zdHJpbmdpZnkoYnVpbGRTdGF0ZShzZXR0aW5ncywgY29udGVudCwgdHlwZSkpLFxuICAgIFByaXNtaWM6IFByaXNtaWMsXG4gIH07XG5cbiAgcmVzLnNldCgnQ29udGVudC1UeXBlJywgJ3RleHQvaHRtbCcpO1xuICByZXMuc2VuZChyZW5kZXJJbmRleChjb250ZXh0KSk7XG59O1xuXG5hcHAuZ2V0KCcvOnR5cGUvOnVpZCcsIGhhbmRsZXIpO1xuYXBwLmdldCgnLzp0eXBlJywgaGFuZGxlcik7XG5hcHAuZ2V0KCcvJywgaGFuZGxlcik7XG5cbmV4cG9ydCBjb25zdCBzZW9QcmVwID0gZnVuY3Rpb25zLmh0dHBzLm9uUmVxdWVzdChhcHApO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZW9QcmVwLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImV4cHJlc3NcIlxuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29va2llLXBhcnNlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvb2tpZS1wYXJzZXJcIlxuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYm9keS1wYXJzZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJib2R5LXBhcnNlclwiXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwdWdcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJwdWdcIlxuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0ICogYXMgU0VPQmFzaWNzIGZyb20gXCIuL2Jhc2ljXCI7XG5cbmV4cG9ydCBjb25zdCBidWlsZFNFT0RhdGEgPSAoY29udGVudCwgc2V0dGluZ3MsIHR5cGUsIHVpZCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHRpdGxlOiBTRU9CYXNpY3MuZ2V0VGl0bGUoY29udGVudCwgc2V0dGluZ3MsIHR5cGUpXG4gIH07XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZW8vaW5kZXguanMiLCJpbXBvcnQgKiBhcyBQcmlzbWljRE9NIGZyb20gXCJwcmlzbWljLWRvbVwiO1xuaW1wb3J0ICogYXMgUHJpc21pY1V0aWxzIGZyb20gXCIuLi8uLi8uLi9jb21tb24vcHJpc21pY1wiO1xuXG5leHBvcnQgY29uc3QgZ2V0VGl0bGUgPSAoY29udGVudCwgc2V0dGluZ3MsIHR5cGUpID0+IHtcbiAgY29uc3Qgc2V0dGluZ3NEYXRhID0gc2V0dGluZ3MuZGF0YTtcbiAgaWYgKFByaXNtaWNVdGlscy5nZXRGb3JtYXQoY29udGVudCkgPT09IFByaXNtaWNVdGlscy5DT05URU5UX0ZPUk1BVFMuTElTVCkge1xuICAgIHJldHVybiBgJHtQcmlzbWljVXRpbHMuZ2V0VHlwZVRpdGxlKHR5cGUpfSB8ICR7c2V0dGluZ3NEYXRhLnNpdGVfdGl0bGV9YDtcbiAgfVxuICBlbHNlIHtcbiAgICBjb25zdCBkYXRhID0gY29udGVudC5kYXRhO1xuICAgIHJldHVybiBgJHtkYXRhLnRpdGxlICYmIGAke1ByaXNtaWNET00uUmljaFRleHQuYXNUZXh0KGRhdGEudGl0bGUpfSB8IGB9JHtzZXR0aW5nc0RhdGEuc2l0ZV90aXRsZX1gXG4gIH1cbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Nlby9iYXNpYy5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcnNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JzXCJcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=
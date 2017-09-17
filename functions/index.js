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

var _utils = __webpack_require__(9);

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
  return (0, _utils.titleCase)(typeSpaces);
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

var _seoPrep = __webpack_require__(10);

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
// https://stackoverflow.com/questions/31495239/title-case-a-sentence
var titleCase = exports.titleCase = function titleCase(str) {
  var newstr = str.split(" ");
  for (var i = 0; i < newstr.length; i++) {
    if (newstr[i] === "") continue;
    var copy = newstr[i].substring(1).toLowerCase();
    newstr[i] = newstr[i][0].toUpperCase() + copy;
  }
  newstr = newstr.join(" ");
  return newstr;
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.seoPrep = undefined;

var _firebaseFunctions = __webpack_require__(1);

var functions = _interopRequireWildcard(_firebaseFunctions);

var _express = __webpack_require__(11);

var _express2 = _interopRequireDefault(_express);

var _cookieParser = __webpack_require__(12);

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _bodyParser = __webpack_require__(13);

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _prismic = __webpack_require__(0);

var _pug = __webpack_require__(14);

var pug = _interopRequireWildcard(_pug);

var _prismicDom = __webpack_require__(2);

var Prismic = _interopRequireWildcard(_prismicDom);

var _index = __webpack_require__(15);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var cors = __webpack_require__(17)({ origin: true });


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
    state.content[content.type] = content;
  } else {
    state.content[content.type] = _defineProperty({}, content.uid, content);
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
/* 11 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("pug");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildSEOData = undefined;

var _basic = __webpack_require__(16);

var SEOBasics = _interopRequireWildcard(_basic);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var buildSEOData = exports.buildSEOData = function buildSEOData(content, settings, type, uid) {
  return {
    title: SEOBasics.getTitle(content, settings, type)
  };
};

/***/ }),
/* 16 */
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
  var typeTitle = type ? PrismicUtils.getTypeTitle(type) : '';
  if (PrismicUtils.getFormat(content) === PrismicUtils.CONTENT_FORMATS.LIST) {
    return typeTitle + " Index | " + settingsData.site_title;
  } else {
    var data = content.data;
    return "" + (data.title && PrismicDOM.RichText.asText(data.title) + " | " + typeTitle + " | ") + settingsData.site_title;
  }
};

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ })
/******/ ])));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMGU0NjMxYjIzNTQ4MmMyYjNiM2YiLCJ3ZWJwYWNrOi8vLy4vLi4vY29tbW9uL3ByaXNtaWMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlyZWJhc2UtZnVuY3Rpb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJpc21pYy1kb21cIiIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYmFiZWwtcG9seWZpbGxcIiIsIndlYnBhY2s6Ly8vLi9zcmMvc2l0ZW1hcC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzaXRlbWFwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJpc21pYy1qYXZhc2NyaXB0XCIiLCJ3ZWJwYWNrOi8vLy4vLi4vc3JjL2FjdGlvbnMvY29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi8uLi9jb21tb24vdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nlb1ByZXAuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvb2tpZS1wYXJzZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJib2R5LXBhcnNlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInB1Z1wiIiwid2VicGFjazovLy8uL3NyYy9zZW8vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nlby9iYXNpYy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JzXCIiXSwibmFtZXMiOlsiQ09OVEVOVF9GT1JNQVRTIiwiTElTVCIsIlNJTkdMRSIsIlJFUEVBVEFCTEUiLCJhcGlFbmRwb2ludCIsImdldEFwaSIsImxpbmtSZXNvbHZlciIsImRvYyIsInR5cGUiLCJ1aWQiLCJsb2FkU2V0dGluZ3MiLCJzdG9yZSIsImdldENvbnRlbnQiLCJzZXR0aW5ncyIsImRpc3BhdGNoIiwiYXBpIiwiZ2V0QnlVSUQiLCJwYWdlIiwicXVlcnkiLCJQcmVkaWNhdGVzIiwiYXQiLCJwYWdlU2l6ZSIsInJlc3BvbnNlIiwicmVzdWx0cyIsImxlbmd0aCIsImdldEZvcm1hdCIsImNvbnRlbnQiLCJnZXRUeXBlVGl0bGUiLCJ0eXBlU3BhY2VzIiwicmVwbGFjZSIsImV4cG9ydHMiLCJzZW9QcmVwIiwic2l0ZU1hcCIsImZ1bmN0aW9ucyIsInNtIiwiZmV0Y2hBbGxQYWdlcyIsImFsbFJlc3VsdHMiLCJpbml0aWFsIiwiY3VycmVudFBhZ2UiLCJ0b3RhbF9wYWdlcyIsImdldFVSTHNGcm9tUGFnZXMiLCJwYWdlcyIsInVybHMiLCJtYXAiLCJkb2N1bWVudCIsInB1c2giLCJ1cmwiLCJodHRwcyIsIm9uUmVxdWVzdCIsInJlcSIsInJlcyIsInNpdGVtYXAiLCJjcmVhdGVTaXRlbWFwIiwiaG9zdG5hbWUiLCJwcm90b2NvbCIsImNhY2hlVGltZSIsInRvWE1MIiwiZXJyIiwieG1sIiwic3RhdHVzIiwiZW5kIiwiaGVhZGVyIiwic2V0Iiwic2VuZCIsIkNPTlRFTlRfTE9BREVEIiwiQ09OVEVOVF9GRVRDSElORyIsImNvbnRlbnRGZXRjaGluZyIsImNvbnRlbnRMb2FkZWQiLCJwYXlsb2FkIiwidGl0bGVDYXNlIiwic3RyIiwibmV3c3RyIiwic3BsaXQiLCJpIiwiY29weSIsInN1YnN0cmluZyIsInRvTG93ZXJDYXNlIiwidG9VcHBlckNhc2UiLCJqb2luIiwicHVnIiwiUHJpc21pYyIsImNvcnMiLCJyZXF1aXJlIiwib3JpZ2luIiwiYXBwIiwidXNlIiwianNvbiIsImJ1aWxkU3RhdGUiLCJzdGF0ZSIsImhhbmRsZXIiLCJwYXJhbXMiLCJyZW5kZXJJbmRleCIsImNvbXBpbGVGaWxlIiwicmVuZGVyNDA0IiwiY29udGV4dCIsImRhdGEiLCJKU09OIiwic3RyaW5naWZ5IiwiZ2V0IiwiU0VPQmFzaWNzIiwiYnVpbGRTRU9EYXRhIiwidGl0bGUiLCJnZXRUaXRsZSIsIlByaXNtaWNET00iLCJQcmlzbWljVXRpbHMiLCJzZXR0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LGFBQWFFLFVBQTVDO0FBQ0QsR0FGRCxNQUdLO0FBQ0gsUUFBTVosT0FBT3JFLFFBQVFxRSxJQUFyQjtBQUNBLGlCQUFVQSxLQUFLTSxLQUFMLElBQWlCRSxXQUFXSyxRQUFYLENBQW9CQyxNQUFwQixDQUEyQmQsS0FBS00sS0FBaEMsQ0FBakIsV0FBNkRLLFNBQTdELFFBQVYsSUFBd0ZELGFBQWFFLFVBQXJHO0FBQ0Q7QUFDRixDQVZNLEM7Ozs7OztBQ0hQLGlDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMGU0NjMxYjIzNTQ4MmMyYjNiM2YiLCJpbXBvcnQgUHJpc21pYyBmcm9tIFwicHJpc21pYy1qYXZhc2NyaXB0XCI7XHJcbmltcG9ydCB7Y29udGVudExvYWRlZH0gZnJvbSBcIi4uL3NyYy9hY3Rpb25zL2NvbnRlbnRcIjtcclxuaW1wb3J0IHt0aXRsZUNhc2V9IGZyb20gXCIuL3V0aWxzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQ09OVEVOVF9GT1JNQVRTID0ge1xyXG4gIExJU1Q6ICdMSVNUJyxcclxuICBTSU5HTEU6ICdTSU5HTEUnLFxyXG4gIFJFUEVBVEFCTEU6ICdSRVBFQVRBQkxFJyxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBhcGlFbmRwb2ludCA9IFwiaHR0cHM6Ly9yYXBoYWVsdG0ucHJpc21pYy5pby9hcGkvdjJcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRBcGkgPSBhc3luYyAoKSA9PiB7XHJcbiAgcmV0dXJuIGF3YWl0IFByaXNtaWMuZ2V0QXBpKGFwaUVuZHBvaW50KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBsaW5rUmVzb2x2ZXIgPSAoZG9jKSA9PiB7XHJcbiAgaWYgKGRvYy50eXBlID09PSBcImhvbWVwYWdlXCIpIHtcclxuICAgIHJldHVybiAnLyc7XHJcbiAgfVxyXG4gIHJldHVybiBgLyR7ZG9jLnR5cGV9L2AgKyAoZG9jLnVpZCB8fCAnJyk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbG9hZFNldHRpbmdzID0gYXN5bmMgKHN0b3JlKSA9PiB7XHJcbiAgbGV0IHNldHRpbmdzID0gYXdhaXQgZ2V0Q29udGVudCgnc2V0dGluZ3MnKTtcclxuICBzdG9yZS5kaXNwYXRjaChjb250ZW50TG9hZGVkKHNldHRpbmdzLCAnc2V0dGluZ3MnKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Q29udGVudCA9IGFzeW5jICh0eXBlLCB1aWQpID0+IHtcclxuICBjb25zdCBhcGkgPSBhd2FpdCBnZXRBcGkoKTtcclxuXHJcbiAgaWYgKCF0eXBlICYmICF1aWQpIHtcclxuICAgIHJldHVybiBhd2FpdCBnZXRDb250ZW50KCdob21lcGFnZScpO1xyXG4gIH1cclxuXHJcbiAgaWYgKHVpZCkge1xyXG4gICAgY29uc3QgcGFnZSA9IGF3YWl0IGFwaS5nZXRCeVVJRCh0eXBlLCB1aWQpO1xyXG4gICAgaWYgKHBhZ2UpIHtcclxuICAgICAgcmV0dXJuIHBhZ2U7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGVsc2Uge1xyXG4gICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgYXBpLnF1ZXJ5KFxyXG4gICAgICBQcmlzbWljLlByZWRpY2F0ZXMuYXQoJ2RvY3VtZW50LnR5cGUnLCB0eXBlKSxcclxuICAgICAge3BhZ2VTaXplOiAxMDB9XHJcbiAgICApO1xyXG5cclxuICAgIGlmIChyZXNwb25zZS5yZXN1bHRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKCEhcmVzcG9uc2UucmVzdWx0c1swXS51aWQpIHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLnJlc3VsdHM7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLnJlc3VsdHNbMF07XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldEZvcm1hdCA9IChjb250ZW50KSA9PiB7XHJcbiAgaWYgKHR5cGVvZiBjb250ZW50Lmxlbmd0aCAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIHJldHVybiBDT05URU5UX0ZPUk1BVFMuTElTVDtcclxuICB9XHJcbiAgZWxzZSBpZiAoY29udGVudC51aWQpIHtcclxuICAgIHJldHVybiBDT05URU5UX0ZPUk1BVFMuUkVQRUFUQUJMRTtcclxuICB9XHJcbiAgZWxzZSB7XHJcbiAgICByZXR1cm4gQ09OVEVOVF9GT1JNQVRTLlNJTkdMRTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0VHlwZVRpdGxlID0gKHR5cGUpID0+IHtcclxuICBjb25zdCB0eXBlU3BhY2VzID0gdHlwZS5yZXBsYWNlKCctJywgJyAnKTtcclxuICByZXR1cm4gdGl0bGVDYXNlKHR5cGVTcGFjZXMpO1xyXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLy4uL2NvbW1vbi9wcmlzbWljLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UtZnVuY3Rpb25zXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZmlyZWJhc2UtZnVuY3Rpb25zXCJcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJpc21pYy1kb21cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJwcmlzbWljLWRvbVwiXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBcImJhYmVsLXBvbHlmaWxsXCI7XG5pbXBvcnQge3NpdGVNYXB9IGZyb20gXCIuL3NpdGVtYXBcIjtcbmltcG9ydCB7c2VvUHJlcH0gZnJvbSBcIi4vc2VvUHJlcFwiO1xuXG5leHBvcnRzLnNlb1ByZXAgPSBzZW9QcmVwO1xuXG5leHBvcnRzLnNpdGVNYXAgPSBzaXRlTWFwO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmFiZWwtcG9seWZpbGxcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJiYWJlbC1wb2x5ZmlsbFwiXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCAqIGFzIGZ1bmN0aW9ucyBmcm9tIFwiZmlyZWJhc2UtZnVuY3Rpb25zXCI7XG5pbXBvcnQgKiBhcyBzbSBmcm9tIFwic2l0ZW1hcFwiO1xuaW1wb3J0IHtnZXRBcGksIGxpbmtSZXNvbHZlcn0gZnJvbSBcIi4uLy4uL2NvbW1vbi9wcmlzbWljXCI7XG5cbmNvbnN0IGZldGNoQWxsUGFnZXMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHBhZ2VTaXplID0gNTA7XG4gIGNvbnN0IGFwaSA9IGF3YWl0IGdldEFwaSgpO1xuICBsZXQgYWxsUmVzdWx0cyA9IFtdO1xuICBjb25zdCBpbml0aWFsID0gYXdhaXQgYXBpLnF1ZXJ5KFtdLCB7cGFnZVNpemU6IHBhZ2VTaXplLCBwYWdlOiAxfSk7XG4gIGFsbFJlc3VsdHMgPSBbLi4uYWxsUmVzdWx0cywgLi4uaW5pdGlhbC5yZXN1bHRzXTtcbiAgZm9yIChsZXQgY3VycmVudFBhZ2UgPSAyOyBjdXJyZW50UGFnZSA8PSBpbml0aWFsLnRvdGFsX3BhZ2VzOyBjdXJyZW50UGFnZSsrKSB7XG4gICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgYXBpLnF1ZXJ5KFtdLCB7cGFnZVNpemU6IHBhZ2VTaXplLCBwYWdlOiBjdXJyZW50UGFnZX0pO1xuICAgIGFsbFJlc3VsdHMgPSBbLi4uYWxsUmVzdWx0cywgLi4ucmVzcG9uc2UucmVzdWx0c107XG4gIH1cbiAgcmV0dXJuIGFsbFJlc3VsdHM7XG59O1xuXG5jb25zdCBnZXRVUkxzRnJvbVBhZ2VzID0gKHBhZ2VzKSA9PiB7XG4gIGxldCB1cmxzID0gW107XG4gIHBhZ2VzLm1hcCgoZG9jdW1lbnQpID0+IHtcbiAgICB1cmxzLnB1c2goe1xuICAgICAgdXJsOiBsaW5rUmVzb2x2ZXIoZG9jdW1lbnQpXG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gdXJscztcbn07XG5cbmV4cG9ydCBjb25zdCBzaXRlTWFwID0gZnVuY3Rpb25zLmh0dHBzLm9uUmVxdWVzdChhc3luYyAocmVxLCByZXMpID0+IHtcbiAgY29uc3QgcGFnZXMgPSBhd2FpdCBmZXRjaEFsbFBhZ2VzKCk7XG5cbiAgY29uc3Qgc2l0ZW1hcCA9IHNtLmNyZWF0ZVNpdGVtYXAoe1xuICAgIGhvc3RuYW1lOiBgJHtyZXEucHJvdG9jb2x9Oi8vJHtyZXEuaG9zdG5hbWV9YCxcbiAgICBjYWNoZVRpbWU6IDYwMDAwMCxcbiAgICB1cmxzOiBnZXRVUkxzRnJvbVBhZ2VzKHBhZ2VzKVxuICB9KTtcblxuICBzaXRlbWFwLnRvWE1MKGZ1bmN0aW9uIChlcnIsIHhtbCkge1xuICAgIGlmIChlcnIpIHtcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuZW5kKCk7XG4gICAgfVxuICAgIHJlcy5oZWFkZXIoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi94bWwnKTtcbiAgICByZXMuc2V0KCdDYWNoZS1Db250cm9sJywgJ3B1YmxpYywgbWF4LWFnZT0xODAwLCBzLW1heGFnZT0zNjAwJyk7XG4gICAgcmVzLnNlbmQoeG1sKTtcbiAgfSk7XG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2l0ZW1hcC5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNpdGVtYXBcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJzaXRlbWFwXCJcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJpc21pYy1qYXZhc2NyaXB0XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicHJpc21pYy1qYXZhc2NyaXB0XCJcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGNvbnN0IENPTlRFTlRfTE9BREVEID0gXCJDT05URU5UX0xPQURFRFwiO1xuZXhwb3J0IGNvbnN0IENPTlRFTlRfRkVUQ0hJTkcgPSBcIkNPTlRFTlRfRkVUQ0hJTkdcIjtcblxuZXhwb3J0IGNvbnN0IGNvbnRlbnRGZXRjaGluZyA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBDT05URU5UX0ZFVENISU5HXG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBjb250ZW50TG9hZGVkID0gKGNvbnRlbnQsIHR5cGUsIHVpZCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IENPTlRFTlRfTE9BREVELFxuICAgIHBheWxvYWQ6IHtcbiAgICAgIGNvbnRlbnQsXG4gICAgICB0eXBlLFxuICAgICAgdWlkLFxuICAgIH1cbiAgfTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vLi4vc3JjL2FjdGlvbnMvY29udGVudC5qcyIsIi8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzMxNDk1MjM5L3RpdGxlLWNhc2UtYS1zZW50ZW5jZVxuZXhwb3J0IGNvbnN0IHRpdGxlQ2FzZSA9IChzdHIpID0+IHtcbiAgbGV0IG5ld3N0ciA9IHN0ci5zcGxpdChcIiBcIik7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbmV3c3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKG5ld3N0cltpXSA9PT0gXCJcIikgY29udGludWU7XG4gICAgbGV0IGNvcHkgPSBuZXdzdHJbaV0uc3Vic3RyaW5nKDEpLnRvTG93ZXJDYXNlKCk7XG4gICAgbmV3c3RyW2ldID0gbmV3c3RyW2ldWzBdLnRvVXBwZXJDYXNlKCkgKyBjb3B5O1xuICB9XG4gIG5ld3N0ciA9IG5ld3N0ci5qb2luKFwiIFwiKTtcbiAgcmV0dXJuIG5ld3N0cjtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vLi4vY29tbW9uL3V0aWxzLmpzIiwiaW1wb3J0ICogYXMgZnVuY3Rpb25zIGZyb20gXCJmaXJlYmFzZS1mdW5jdGlvbnNcIjtcbmltcG9ydCBleHByZXNzIGZyb20gXCJleHByZXNzXCI7XG5pbXBvcnQgY29va2llUGFyc2VyIGZyb20gXCJjb29raWUtcGFyc2VyXCI7XG5pbXBvcnQgYm9keVBhcnNlciBmcm9tIFwiYm9keS1wYXJzZXJcIjtcbmltcG9ydCB7Z2V0Q29udGVudCwgZ2V0Rm9ybWF0LCBDT05URU5UX0ZPUk1BVFN9IGZyb20gXCIuLi8uLi9jb21tb24vcHJpc21pY1wiO1xuaW1wb3J0ICogYXMgcHVnIGZyb20gXCJwdWdcIjtcbmNvbnN0IGNvcnMgPSByZXF1aXJlKCdjb3JzJykoe29yaWdpbjogdHJ1ZX0pO1xuaW1wb3J0ICogYXMgUHJpc21pYyBmcm9tIFwicHJpc21pYy1kb21cIjtcbmltcG9ydCB7YnVpbGRTRU9EYXRhfSBmcm9tIFwiLi9zZW8vaW5kZXhcIjtcblxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuXG5hcHAudXNlKGNvcnMpO1xuYXBwLnVzZShjb29raWVQYXJzZXIoKSk7XG5hcHAudXNlKGJvZHlQYXJzZXIuanNvbigpKTtcblxuY29uc3QgYnVpbGRTdGF0ZSA9IChzZXR0aW5ncywgY29udGVudCwgdHlwZSkgPT4ge1xuICBsZXQgc3RhdGUgPSB7XG4gICAgY29udGVudDoge1xuICAgICAgc2V0dGluZ3M6IHNldHRpbmdzXG4gICAgfVxuICB9O1xuXG4gIGlmKGdldEZvcm1hdChjb250ZW50KSA9PT0gQ09OVEVOVF9GT1JNQVRTLkxJU1Qpe1xuICAgIHN0YXRlLmNvbnRlbnRbdHlwZV0gPSB7fTtcbiAgICBjb250ZW50Lm1hcCgocGFnZSkgPT4ge1xuICAgICAgc3RhdGUuY29udGVudFt0eXBlXVtwYWdlLnVpZF0gPSBwYWdlO1xuICAgIH0pO1xuICB9XG4gIGVsc2UgaWYoZ2V0Rm9ybWF0KGNvbnRlbnQpID09PSBDT05URU5UX0ZPUk1BVFMuU0lOR0xFKXtcbiAgICBzdGF0ZS5jb250ZW50W2NvbnRlbnQudHlwZV0gPSBjb250ZW50O1xuICB9XG4gIGVsc2Uge1xuICAgIHN0YXRlLmNvbnRlbnRbY29udGVudC50eXBlXSA9IHtcbiAgICAgIFtjb250ZW50LnVpZF06IGNvbnRlbnRcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGU7XG59O1xuXG5jb25zdCBoYW5kbGVyID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIGNvbnN0IHt0eXBlLCB1aWR9ID0gcmVxLnBhcmFtcztcblxuICBjb25zdCByZW5kZXJJbmRleCA9IHB1Zy5jb21waWxlRmlsZSgnLi9zcmMvaW5kZXgucHVnJyk7XG4gIGNvbnN0IHJlbmRlcjQwNCA9IHB1Zy5jb21waWxlRmlsZSgnLi9zcmMvNDA0LnB1ZycpO1xuXG4gIGNvbnN0IHNldHRpbmdzID0gYXdhaXQgZ2V0Q29udGVudCgnc2V0dGluZ3MnKTtcbiAgY29uc3QgY29udGVudCA9IGF3YWl0IGdldENvbnRlbnQodHlwZSwgdWlkKTtcblxuICBpZighY29udGVudCl7XG4gICAgcmVzLnN0YXR1cyg0MDQpO1xuICAgIHJlcy5zZXQoJ0NvbnRlbnQtVHlwZScsICd0ZXh0L2h0bWwnKTtcbiAgICByZXMuc2VuZChyZW5kZXI0MDQoKSk7XG4gIH1cblxuICBjb25zdCBjb250ZXh0ID0ge1xuICAgIGRhdGE6IGJ1aWxkU0VPRGF0YShjb250ZW50LCBzZXR0aW5ncywgdHlwZSwgdWlkKSxcbiAgICBzdGF0ZTogSlNPTi5zdHJpbmdpZnkoYnVpbGRTdGF0ZShzZXR0aW5ncywgY29udGVudCwgdHlwZSkpLFxuICAgIFByaXNtaWM6IFByaXNtaWMsXG4gIH07XG5cbiAgcmVzLnNldCgnQ29udGVudC1UeXBlJywgJ3RleHQvaHRtbCcpO1xuICByZXMuc2VuZChyZW5kZXJJbmRleChjb250ZXh0KSk7XG59O1xuXG5hcHAuZ2V0KCcvOnR5cGUvOnVpZCcsIGhhbmRsZXIpO1xuYXBwLmdldCgnLzp0eXBlJywgaGFuZGxlcik7XG5hcHAuZ2V0KCcvJywgaGFuZGxlcik7XG5cbmV4cG9ydCBjb25zdCBzZW9QcmVwID0gZnVuY3Rpb25zLmh0dHBzLm9uUmVxdWVzdChhcHApO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZW9QcmVwLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImV4cHJlc3NcIlxuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29va2llLXBhcnNlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvb2tpZS1wYXJzZXJcIlxuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYm9keS1wYXJzZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJib2R5LXBhcnNlclwiXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwdWdcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJwdWdcIlxuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0ICogYXMgU0VPQmFzaWNzIGZyb20gXCIuL2Jhc2ljXCI7XG5cbmV4cG9ydCBjb25zdCBidWlsZFNFT0RhdGEgPSAoY29udGVudCwgc2V0dGluZ3MsIHR5cGUsIHVpZCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHRpdGxlOiBTRU9CYXNpY3MuZ2V0VGl0bGUoY29udGVudCwgc2V0dGluZ3MsIHR5cGUpXG4gIH07XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZW8vaW5kZXguanMiLCJpbXBvcnQgKiBhcyBQcmlzbWljRE9NIGZyb20gXCJwcmlzbWljLWRvbVwiO1xuaW1wb3J0ICogYXMgUHJpc21pY1V0aWxzIGZyb20gXCIuLi8uLi8uLi9jb21tb24vcHJpc21pY1wiO1xuXG5leHBvcnQgY29uc3QgZ2V0VGl0bGUgPSAoY29udGVudCwgc2V0dGluZ3MsIHR5cGUpID0+IHtcbiAgY29uc3Qgc2V0dGluZ3NEYXRhID0gc2V0dGluZ3MuZGF0YTtcbiAgY29uc3QgdHlwZVRpdGxlID0gdHlwZSA/IFByaXNtaWNVdGlscy5nZXRUeXBlVGl0bGUodHlwZSkgOiAnJztcbiAgaWYgKFByaXNtaWNVdGlscy5nZXRGb3JtYXQoY29udGVudCkgPT09IFByaXNtaWNVdGlscy5DT05URU5UX0ZPUk1BVFMuTElTVCkge1xuICAgIHJldHVybiBgJHt0eXBlVGl0bGV9IEluZGV4IHwgJHtzZXR0aW5nc0RhdGEuc2l0ZV90aXRsZX1gO1xuICB9XG4gIGVsc2Uge1xuICAgIGNvbnN0IGRhdGEgPSBjb250ZW50LmRhdGE7XG4gICAgcmV0dXJuIGAke2RhdGEudGl0bGUgJiYgYCR7UHJpc21pY0RPTS5SaWNoVGV4dC5hc1RleHQoZGF0YS50aXRsZSl9IHwgJHt0eXBlVGl0bGV9IHwgYH0ke3NldHRpbmdzRGF0YS5zaXRlX3RpdGxlfWBcbiAgfVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2VvL2Jhc2ljLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcnNcIlxuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==
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
              res.set('Cache-Control', 'public, max-age=300, s-maxage=600');
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
            res.set('Cache-Control', 'public, max-age=300, s-maxage=600');
            res.send(renderIndex(context));

          case 14:
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
    title: SEOBasics.getTitle(content, settings, type),
    simpleTitle: SEOBasics.getSimpleTitle(content, type),
    featuredImage: SEOBasics.getImage(content)
  };
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getImage = exports.getSimpleTitle = exports.getTitle = undefined;

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

var getSimpleTitle = exports.getSimpleTitle = function getSimpleTitle(content, type) {
  if (PrismicUtils.getFormat(content) === PrismicUtils.CONTENT_FORMATS.LIST) {
    return PrismicUtils.getTypeTitle(type);
  } else {
    return content.data.title ? PrismicDOM.RichText.asText(content.data.title) : null;
  }
};

var getImage = exports.getImage = function getImage(content) {
  if (PrismicUtils.getFormat(content) === PrismicUtils.CONTENT_FORMATS.LIST) {
    content = content[0];
  }
  var data = content.data;
  var hasFeaturedImageField = !!data.featured_image;
  var hasFeaturedImage = hasFeaturedImageField && !!data.featured_image.url;
  return hasFeaturedImage && data.featured_image.url;
};

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ })
/******/ ])));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgODBmZWM1OTk5OWRiNDY2YWY1ZjYiLCJ3ZWJwYWNrOi8vLy4vLi4vY29tbW9uL3ByaXNtaWMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlyZWJhc2UtZnVuY3Rpb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJpc21pYy1kb21cIiIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYmFiZWwtcG9seWZpbGxcIiIsIndlYnBhY2s6Ly8vLi9zcmMvc2l0ZW1hcC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzaXRlbWFwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJpc21pYy1qYXZhc2NyaXB0XCIiLCJ3ZWJwYWNrOi8vLy4vLi4vc3JjL2FjdGlvbnMvY29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi8uLi9jb21tb24vdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nlb1ByZXAuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvb2tpZS1wYXJzZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJib2R5LXBhcnNlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInB1Z1wiIiwid2VicGFjazovLy8uL3NyYy9zZW8vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nlby9iYXNpYy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JzXCIiXSwibmFtZXMiOlsiQ09OVEVOVF9GT1JNQVRTIiwiTElTVCIsIlNJTkdMRSIsIlJFUEVBVEFCTEUiLCJhcGlFbmRwb2ludCIsImdldEFwaSIsImxpbmtSZXNvbHZlciIsImRvYyIsInR5cGUiLCJ1aWQiLCJsb2FkU2V0dGluZ3MiLCJzdG9yZSIsImdldENvbnRlbnQiLCJzZXR0aW5ncyIsImRpc3BhdGNoIiwiYXBpIiwiZ2V0QnlVSUQiLCJwYWdlIiwicXVlcnkiLCJQcmVkaWNhdGVzIiwiYXQiLCJwYWdlU2l6ZSIsInJlc3BvbnNlIiwicmVzdWx0cyIsImxlbmd0aCIsImdldEZvcm1hdCIsImNvbnRlbnQiLCJnZXRUeXBlVGl0bGUiLCJ0eXBlU3BhY2VzIiwicmVwbGFjZSIsImV4cG9ydHMiLCJzZW9QcmVwIiwic2l0ZU1hcCIsImZ1bmN0aW9ucyIsInNtIiwiZmV0Y2hBbGxQYWdlcyIsImFsbFJlc3VsdHMiLCJpbml0aWFsIiwiY3VycmVudFBhZ2UiLCJ0b3RhbF9wYWdlcyIsImdldFVSTHNGcm9tUGFnZXMiLCJwYWdlcyIsInVybHMiLCJtYXAiLCJkb2N1bWVudCIsInB1c2giLCJ1cmwiLCJodHRwcyIsIm9uUmVxdWVzdCIsInJlcSIsInJlcyIsInNpdGVtYXAiLCJjcmVhdGVTaXRlbWFwIiwiaG9zdG5hbWUiLCJwcm90b2NvbCIsImNhY2hlVGltZSIsInRvWE1MIiwiZXJyIiwieG1sIiwic3RhdHVzIiwiZW5kIiwiaGVhZGVyIiwic2V0Iiwic2VuZCIsIkNPTlRFTlRfTE9BREVEIiwiQ09OVEVOVF9GRVRDSElORyIsImNvbnRlbnRGZXRjaGluZyIsImNvbnRlbnRMb2FkZWQiLCJwYXlsb2FkIiwidGl0bGVDYXNlIiwic3RyIiwibmV3c3RyIiwic3BsaXQiLCJpIiwiY29weSIsInN1YnN0cmluZyIsInRvTG93ZXJDYXNlIiwidG9VcHBlckNhc2UiLCJqb2luIiwicHVnIiwiUHJpc21pYyIsImNvcnMiLCJyZXF1aXJlIiwib3JpZ2luIiwiYXBwIiwidXNlIiwianNvbiIsImJ1aWxkU3RhdGUiLCJzdGF0ZSIsImhhbmRsZXIiLCJwYXJhbXMiLCJyZW5kZXJJbmRleCIsImNvbXBpbGVGaWxlIiwicmVuZGVyNDA0IiwiY29udGV4dCIsImRhdGEiLCJKU09OIiwic3RyaW5naWZ5IiwiZ2V0IiwiU0VPQmFzaWNzIiwiYnVpbGRTRU9EYXRhIiwidGl0bGUiLCJnZXRUaXRsZSIsInNpbXBsZVRpdGxlIiwiZ2V0U2ltcGxlVGl0bGUiLCJmZWF0dXJlZEltYWdlIiwiZ2V0SW1hZ2UiLCJQcmlzbWljRE9NIiwiUHJpc21pY1V0aWxzIiwic2V0dGluZ3NEYXRhIiwidHlwZVRpdGxlIiwic2l0ZV90aXRsZSIsIlJpY2hUZXh0IiwiYXNUZXh0IiwiaGFzRmVhdHVyZWRJbWFnZUZpZWxkIiwiZmVhdHVyZWRfaW1hZ2UiLCJoYXNGZWF0dXJlZEltYWdlIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzdEQTs7OztBQUNBOztBQUNBOzs7Ozs7QUFFTyxJQUFNQSw0Q0FBa0I7QUFDN0JDLFFBQU0sTUFEdUI7QUFFN0JDLFVBQVEsUUFGcUI7QUFHN0JDLGNBQVk7QUFIaUIsQ0FBeEI7O0FBTUEsSUFBTUMsb0NBQWMscUNBQXBCOztBQUVBLElBQU1DO0FBQUEscUVBQVM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ1AsNEJBQVFBLE1BQVIsQ0FBZUQsV0FBZixDQURPOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBVDs7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFOOztBQUlBLElBQU1FLHNDQUFlLFNBQWZBLFlBQWUsQ0FBQ0MsR0FBRCxFQUFTO0FBQ25DLE1BQUlBLElBQUlDLElBQUosS0FBYSxVQUFqQixFQUE2QjtBQUMzQixXQUFP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QUF5RTtBQUN2RXlCLGNBQVVBLFFBQVEsQ0FBUixDQUFWO0FBQ0Q7QUFDRCxNQUFNcUUsT0FBT3JFLFFBQVFxRSxJQUFyQjtBQUNBLE1BQU1tQix3QkFBd0IsQ0FBQyxDQUFDbkIsS0FBS29CLGNBQXJDO0FBQ0EsTUFBTUMsbUJBQW1CRix5QkFBeUIsQ0FBQyxDQUFDbkIsS0FBS29CLGNBQUwsQ0FBb0JyRSxHQUF4RTtBQUNBLFNBQU9zRSxvQkFBb0JyQixLQUFLb0IsY0FBTCxDQUFvQnJFLEdBQS9DO0FBQ0QsQ0FSTSxDOzs7Ozs7QUN4QlAsaUMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA4MGZlYzU5OTk5ZGI0NjZhZjVmNiIsImltcG9ydCBQcmlzbWljIGZyb20gXCJwcmlzbWljLWphdmFzY3JpcHRcIjtcclxuaW1wb3J0IHtjb250ZW50TG9hZGVkfSBmcm9tIFwiLi4vc3JjL2FjdGlvbnMvY29udGVudFwiO1xyXG5pbXBvcnQge3RpdGxlQ2FzZX0gZnJvbSBcIi4vdXRpbHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBDT05URU5UX0ZPUk1BVFMgPSB7XHJcbiAgTElTVDogJ0xJU1QnLFxyXG4gIFNJTkdMRTogJ1NJTkdMRScsXHJcbiAgUkVQRUFUQUJMRTogJ1JFUEVBVEFCTEUnLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGFwaUVuZHBvaW50ID0gXCJodHRwczovL3JhcGhhZWx0bS5wcmlzbWljLmlvL2FwaS92MlwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldEFwaSA9IGFzeW5jICgpID0+IHtcclxuICByZXR1cm4gYXdhaXQgUHJpc21pYy5nZXRBcGkoYXBpRW5kcG9pbnQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGxpbmtSZXNvbHZlciA9IChkb2MpID0+IHtcclxuICBpZiAoZG9jLnR5cGUgPT09IFwiaG9tZXBhZ2VcIikge1xyXG4gICAgcmV0dXJuICcvJztcclxuICB9XHJcbiAgcmV0dXJuIGAvJHtkb2MudHlwZX0vYCArIChkb2MudWlkIHx8ICcnKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2FkU2V0dGluZ3MgPSBhc3luYyAoc3RvcmUpID0+IHtcclxuICBsZXQgc2V0dGluZ3MgPSBhd2FpdCBnZXRDb250ZW50KCdzZXR0aW5ncycpO1xyXG4gIHN0b3JlLmRpc3BhdGNoKGNvbnRlbnRMb2FkZWQoc2V0dGluZ3MsICdzZXR0aW5ncycpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDb250ZW50ID0gYXN5bmMgKHR5cGUsIHVpZCkgPT4ge1xyXG4gIGNvbnN0IGFwaSA9IGF3YWl0IGdldEFwaSgpO1xyXG5cclxuICBpZiAoIXR5cGUgJiYgIXVpZCkge1xyXG4gICAgcmV0dXJuIGF3YWl0IGdldENvbnRlbnQoJ2hvbWVwYWdlJyk7XHJcbiAgfVxyXG5cclxuICBpZiAodWlkKSB7XHJcbiAgICBjb25zdCBwYWdlID0gYXdhaXQgYXBpLmdldEJ5VUlEKHR5cGUsIHVpZCk7XHJcbiAgICBpZiAocGFnZSkge1xyXG4gICAgICByZXR1cm4gcGFnZTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICB9XHJcbiAgZWxzZSB7XHJcbiAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBhcGkucXVlcnkoXHJcbiAgICAgIFByaXNtaWMuUHJlZGljYXRlcy5hdCgnZG9jdW1lbnQudHlwZScsIHR5cGUpLFxyXG4gICAgICB7cGFnZVNpemU6IDEwMH1cclxuICAgICk7XHJcblxyXG4gICAgaWYgKHJlc3BvbnNlLnJlc3VsdHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoISFyZXNwb25zZS5yZXN1bHRzWzBdLnVpZCkge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UucmVzdWx0cztcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UucmVzdWx0c1swXTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Rm9ybWF0ID0gKGNvbnRlbnQpID0+IHtcclxuICBpZiAodHlwZW9mIGNvbnRlbnQubGVuZ3RoICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgcmV0dXJuIENPTlRFTlRfRk9STUFUUy5MSVNUO1xyXG4gIH1cclxuICBlbHNlIGlmIChjb250ZW50LnVpZCkge1xyXG4gICAgcmV0dXJuIENPTlRFTlRfRk9STUFUUy5SRVBFQVRBQkxFO1xyXG4gIH1cclxuICBlbHNlIHtcclxuICAgIHJldHVybiBDT05URU5UX0ZPUk1BVFMuU0lOR0xFO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRUeXBlVGl0bGUgPSAodHlwZSkgPT4ge1xyXG4gIGNvbnN0IHR5cGVTcGFjZXMgPSB0eXBlLnJlcGxhY2UoJy0nLCAnICcpO1xyXG4gIHJldHVybiB0aXRsZUNhc2UodHlwZVNwYWNlcyk7XHJcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vLi4vY29tbW9uL3ByaXNtaWMuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS1mdW5jdGlvbnNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJmaXJlYmFzZS1mdW5jdGlvbnNcIlxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcmlzbWljLWRvbVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInByaXNtaWMtZG9tXCJcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFwiYmFiZWwtcG9seWZpbGxcIjtcbmltcG9ydCB7c2l0ZU1hcH0gZnJvbSBcIi4vc2l0ZW1hcFwiO1xuaW1wb3J0IHtzZW9QcmVwfSBmcm9tIFwiLi9zZW9QcmVwXCI7XG5cbmV4cG9ydHMuc2VvUHJlcCA9IHNlb1ByZXA7XG5cbmV4cG9ydHMuc2l0ZU1hcCA9IHNpdGVNYXA7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiYWJlbC1wb2x5ZmlsbFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImJhYmVsLXBvbHlmaWxsXCJcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0ICogYXMgZnVuY3Rpb25zIGZyb20gXCJmaXJlYmFzZS1mdW5jdGlvbnNcIjtcbmltcG9ydCAqIGFzIHNtIGZyb20gXCJzaXRlbWFwXCI7XG5pbXBvcnQge2dldEFwaSwgbGlua1Jlc29sdmVyfSBmcm9tIFwiLi4vLi4vY29tbW9uL3ByaXNtaWNcIjtcblxuY29uc3QgZmV0Y2hBbGxQYWdlcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcGFnZVNpemUgPSA1MDtcbiAgY29uc3QgYXBpID0gYXdhaXQgZ2V0QXBpKCk7XG4gIGxldCBhbGxSZXN1bHRzID0gW107XG4gIGNvbnN0IGluaXRpYWwgPSBhd2FpdCBhcGkucXVlcnkoW10sIHtwYWdlU2l6ZTogcGFnZVNpemUsIHBhZ2U6IDF9KTtcbiAgYWxsUmVzdWx0cyA9IFsuLi5hbGxSZXN1bHRzLCAuLi5pbml0aWFsLnJlc3VsdHNdO1xuICBmb3IgKGxldCBjdXJyZW50UGFnZSA9IDI7IGN1cnJlbnRQYWdlIDw9IGluaXRpYWwudG90YWxfcGFnZXM7IGN1cnJlbnRQYWdlKyspIHtcbiAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBhcGkucXVlcnkoW10sIHtwYWdlU2l6ZTogcGFnZVNpemUsIHBhZ2U6IGN1cnJlbnRQYWdlfSk7XG4gICAgYWxsUmVzdWx0cyA9IFsuLi5hbGxSZXN1bHRzLCAuLi5yZXNwb25zZS5yZXN1bHRzXTtcbiAgfVxuICByZXR1cm4gYWxsUmVzdWx0cztcbn07XG5cbmNvbnN0IGdldFVSTHNGcm9tUGFnZXMgPSAocGFnZXMpID0+IHtcbiAgbGV0IHVybHMgPSBbXTtcbiAgcGFnZXMubWFwKChkb2N1bWVudCkgPT4ge1xuICAgIHVybHMucHVzaCh7XG4gICAgICB1cmw6IGxpbmtSZXNvbHZlcihkb2N1bWVudClcbiAgICB9KTtcbiAgfSk7XG4gIHJldHVybiB1cmxzO1xufTtcblxuZXhwb3J0IGNvbnN0IHNpdGVNYXAgPSBmdW5jdGlvbnMuaHR0cHMub25SZXF1ZXN0KGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICBjb25zdCBwYWdlcyA9IGF3YWl0IGZldGNoQWxsUGFnZXMoKTtcblxuICBjb25zdCBzaXRlbWFwID0gc20uY3JlYXRlU2l0ZW1hcCh7XG4gICAgaG9zdG5hbWU6IGAke3JlcS5wcm90b2NvbH06Ly8ke3JlcS5ob3N0bmFtZX1gLFxuICAgIGNhY2hlVGltZTogNjAwMDAwLFxuICAgIHVybHM6IGdldFVSTHNGcm9tUGFnZXMocGFnZXMpXG4gIH0pO1xuXG4gIHNpdGVtYXAudG9YTUwoZnVuY3Rpb24gKGVyciwgeG1sKSB7XG4gICAgaWYgKGVycikge1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5lbmQoKTtcbiAgICB9XG4gICAgcmVzLmhlYWRlcignQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL3htbCcpO1xuICAgIHJlcy5zZXQoJ0NhY2hlLUNvbnRyb2wnLCAncHVibGljLCBtYXgtYWdlPTMwMCwgcy1tYXhhZ2U9NjAwJyk7XG4gICAgcmVzLnNlbmQoeG1sKTtcbiAgfSk7XG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2l0ZW1hcC5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNpdGVtYXBcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJzaXRlbWFwXCJcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJpc21pYy1qYXZhc2NyaXB0XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicHJpc21pYy1qYXZhc2NyaXB0XCJcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGNvbnN0IENPTlRFTlRfTE9BREVEID0gXCJDT05URU5UX0xPQURFRFwiO1xuZXhwb3J0IGNvbnN0IENPTlRFTlRfRkVUQ0hJTkcgPSBcIkNPTlRFTlRfRkVUQ0hJTkdcIjtcblxuZXhwb3J0IGNvbnN0IGNvbnRlbnRGZXRjaGluZyA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBDT05URU5UX0ZFVENISU5HXG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBjb250ZW50TG9hZGVkID0gKGNvbnRlbnQsIHR5cGUsIHVpZCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IENPTlRFTlRfTE9BREVELFxuICAgIHBheWxvYWQ6IHtcbiAgICAgIGNvbnRlbnQsXG4gICAgICB0eXBlLFxuICAgICAgdWlkLFxuICAgIH1cbiAgfTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vLi4vc3JjL2FjdGlvbnMvY29udGVudC5qcyIsIi8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzMxNDk1MjM5L3RpdGxlLWNhc2UtYS1zZW50ZW5jZVxuZXhwb3J0IGNvbnN0IHRpdGxlQ2FzZSA9IChzdHIpID0+IHtcbiAgbGV0IG5ld3N0ciA9IHN0ci5zcGxpdChcIiBcIik7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbmV3c3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKG5ld3N0cltpXSA9PT0gXCJcIikgY29udGludWU7XG4gICAgbGV0IGNvcHkgPSBuZXdzdHJbaV0uc3Vic3RyaW5nKDEpLnRvTG93ZXJDYXNlKCk7XG4gICAgbmV3c3RyW2ldID0gbmV3c3RyW2ldWzBdLnRvVXBwZXJDYXNlKCkgKyBjb3B5O1xuICB9XG4gIG5ld3N0ciA9IG5ld3N0ci5qb2luKFwiIFwiKTtcbiAgcmV0dXJuIG5ld3N0cjtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vLi4vY29tbW9uL3V0aWxzLmpzIiwiaW1wb3J0ICogYXMgZnVuY3Rpb25zIGZyb20gXCJmaXJlYmFzZS1mdW5jdGlvbnNcIjtcbmltcG9ydCBleHByZXNzIGZyb20gXCJleHByZXNzXCI7XG5pbXBvcnQgY29va2llUGFyc2VyIGZyb20gXCJjb29raWUtcGFyc2VyXCI7XG5pbXBvcnQgYm9keVBhcnNlciBmcm9tIFwiYm9keS1wYXJzZXJcIjtcbmltcG9ydCB7Z2V0Q29udGVudCwgZ2V0Rm9ybWF0LCBDT05URU5UX0ZPUk1BVFN9IGZyb20gXCIuLi8uLi9jb21tb24vcHJpc21pY1wiO1xuaW1wb3J0ICogYXMgcHVnIGZyb20gXCJwdWdcIjtcbmNvbnN0IGNvcnMgPSByZXF1aXJlKCdjb3JzJykoe29yaWdpbjogdHJ1ZX0pO1xuaW1wb3J0ICogYXMgUHJpc21pYyBmcm9tIFwicHJpc21pYy1kb21cIjtcbmltcG9ydCB7YnVpbGRTRU9EYXRhfSBmcm9tIFwiLi9zZW8vaW5kZXhcIjtcblxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuXG5hcHAudXNlKGNvcnMpO1xuYXBwLnVzZShjb29raWVQYXJzZXIoKSk7XG5hcHAudXNlKGJvZHlQYXJzZXIuanNvbigpKTtcblxuY29uc3QgYnVpbGRTdGF0ZSA9IChzZXR0aW5ncywgY29udGVudCwgdHlwZSkgPT4ge1xuICBsZXQgc3RhdGUgPSB7XG4gICAgY29udGVudDoge1xuICAgICAgc2V0dGluZ3M6IHNldHRpbmdzXG4gICAgfVxuICB9O1xuXG4gIGlmKGdldEZvcm1hdChjb250ZW50KSA9PT0gQ09OVEVOVF9GT1JNQVRTLkxJU1Qpe1xuICAgIHN0YXRlLmNvbnRlbnRbdHlwZV0gPSB7fTtcbiAgICBjb250ZW50Lm1hcCgocGFnZSkgPT4ge1xuICAgICAgc3RhdGUuY29udGVudFt0eXBlXVtwYWdlLnVpZF0gPSBwYWdlO1xuICAgIH0pO1xuICB9XG4gIGVsc2UgaWYoZ2V0Rm9ybWF0KGNvbnRlbnQpID09PSBDT05URU5UX0ZPUk1BVFMuU0lOR0xFKXtcbiAgICBzdGF0ZS5jb250ZW50W2NvbnRlbnQudHlwZV0gPSBjb250ZW50O1xuICB9XG4gIGVsc2Uge1xuICAgIHN0YXRlLmNvbnRlbnRbY29udGVudC50eXBlXSA9IHtcbiAgICAgIFtjb250ZW50LnVpZF06IGNvbnRlbnRcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGU7XG59O1xuXG5jb25zdCBoYW5kbGVyID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIGNvbnN0IHt0eXBlLCB1aWR9ID0gcmVxLnBhcmFtcztcblxuICBjb25zdCByZW5kZXJJbmRleCA9IHB1Zy5jb21waWxlRmlsZSgnLi9zcmMvaW5kZXgucHVnJyk7XG4gIGNvbnN0IHJlbmRlcjQwNCA9IHB1Zy5jb21waWxlRmlsZSgnLi9zcmMvNDA0LnB1ZycpO1xuXG4gIGNvbnN0IHNldHRpbmdzID0gYXdhaXQgZ2V0Q29udGVudCgnc2V0dGluZ3MnKTtcbiAgY29uc3QgY29udGVudCA9IGF3YWl0IGdldENvbnRlbnQodHlwZSwgdWlkKTtcblxuICBpZighY29udGVudCl7XG4gICAgcmVzLnN0YXR1cyg0MDQpO1xuICAgIHJlcy5zZXQoJ0NvbnRlbnQtVHlwZScsICd0ZXh0L2h0bWwnKTtcbiAgICByZXMuc2VuZChyZW5kZXI0MDQoKSk7XG4gIH1cblxuICBjb25zdCBjb250ZXh0ID0ge1xuICAgIGRhdGE6IGJ1aWxkU0VPRGF0YShjb250ZW50LCBzZXR0aW5ncywgdHlwZSwgdWlkKSxcbiAgICBzdGF0ZTogSlNPTi5zdHJpbmdpZnkoYnVpbGRTdGF0ZShzZXR0aW5ncywgY29udGVudCwgdHlwZSkpLFxuICAgIFByaXNtaWM6IFByaXNtaWMsXG4gIH07XG5cbiAgcmVzLnNldCgnQ29udGVudC1UeXBlJywgJ3RleHQvaHRtbCcpO1xuICByZXMuc2V0KCdDYWNoZS1Db250cm9sJywgJ3B1YmxpYywgbWF4LWFnZT0zMDAsIHMtbWF4YWdlPTYwMCcpO1xuICByZXMuc2VuZChyZW5kZXJJbmRleChjb250ZXh0KSk7XG59O1xuXG5hcHAuZ2V0KCcvOnR5cGUvOnVpZCcsIGhhbmRsZXIpO1xuYXBwLmdldCgnLzp0eXBlJywgaGFuZGxlcik7XG5hcHAuZ2V0KCcvJywgaGFuZGxlcik7XG5cbmV4cG9ydCBjb25zdCBzZW9QcmVwID0gZnVuY3Rpb25zLmh0dHBzLm9uUmVxdWVzdChhcHApO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZW9QcmVwLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImV4cHJlc3NcIlxuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29va2llLXBhcnNlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvb2tpZS1wYXJzZXJcIlxuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYm9keS1wYXJzZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJib2R5LXBhcnNlclwiXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwdWdcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJwdWdcIlxuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0ICogYXMgU0VPQmFzaWNzIGZyb20gXCIuL2Jhc2ljXCI7XG5cbmV4cG9ydCBjb25zdCBidWlsZFNFT0RhdGEgPSAoY29udGVudCwgc2V0dGluZ3MsIHR5cGUsIHVpZCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHRpdGxlOiBTRU9CYXNpY3MuZ2V0VGl0bGUoY29udGVudCwgc2V0dGluZ3MsIHR5cGUpLFxuICAgIHNpbXBsZVRpdGxlOiBTRU9CYXNpY3MuZ2V0U2ltcGxlVGl0bGUoY29udGVudCwgdHlwZSksXG4gICAgZmVhdHVyZWRJbWFnZTogU0VPQmFzaWNzLmdldEltYWdlKGNvbnRlbnQpLFxuICB9O1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2VvL2luZGV4LmpzIiwiaW1wb3J0ICogYXMgUHJpc21pY0RPTSBmcm9tIFwicHJpc21pYy1kb21cIjtcbmltcG9ydCAqIGFzIFByaXNtaWNVdGlscyBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL3ByaXNtaWNcIjtcblxuZXhwb3J0IGNvbnN0IGdldFRpdGxlID0gKGNvbnRlbnQsIHNldHRpbmdzLCB0eXBlKSA9PiB7XG4gIGNvbnN0IHNldHRpbmdzRGF0YSA9IHNldHRpbmdzLmRhdGE7XG4gIGNvbnN0IHR5cGVUaXRsZSA9IHR5cGUgPyBQcmlzbWljVXRpbHMuZ2V0VHlwZVRpdGxlKHR5cGUpIDogJyc7XG4gIGlmIChQcmlzbWljVXRpbHMuZ2V0Rm9ybWF0KGNvbnRlbnQpID09PSBQcmlzbWljVXRpbHMuQ09OVEVOVF9GT1JNQVRTLkxJU1QpIHtcbiAgICByZXR1cm4gYCR7dHlwZVRpdGxlfSBJbmRleCB8ICR7c2V0dGluZ3NEYXRhLnNpdGVfdGl0bGV9YDtcbiAgfVxuICBlbHNlIHtcbiAgICBjb25zdCBkYXRhID0gY29udGVudC5kYXRhO1xuICAgIHJldHVybiBgJHtkYXRhLnRpdGxlICYmIGAke1ByaXNtaWNET00uUmljaFRleHQuYXNUZXh0KGRhdGEudGl0bGUpfSB8ICR7dHlwZVRpdGxlfSB8IGB9JHtzZXR0aW5nc0RhdGEuc2l0ZV90aXRsZX1gXG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTaW1wbGVUaXRsZSA9IChjb250ZW50LCB0eXBlKSA9PiB7XG4gIGlmKFByaXNtaWNVdGlscy5nZXRGb3JtYXQoY29udGVudCkgPT09IFByaXNtaWNVdGlscy5DT05URU5UX0ZPUk1BVFMuTElTVCl7XG4gICAgcmV0dXJuIFByaXNtaWNVdGlscy5nZXRUeXBlVGl0bGUodHlwZSk7XG4gIH1cbiAgZWxzZSB7XG4gICAgcmV0dXJuIGNvbnRlbnQuZGF0YS50aXRsZSA/IFByaXNtaWNET00uUmljaFRleHQuYXNUZXh0KGNvbnRlbnQuZGF0YS50aXRsZSkgOiBudWxsO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0SW1hZ2UgPSAoY29udGVudCkgPT4ge1xuICBpZihQcmlzbWljVXRpbHMuZ2V0Rm9ybWF0KGNvbnRlbnQpID09PSBQcmlzbWljVXRpbHMuQ09OVEVOVF9GT1JNQVRTLkxJU1Qpe1xuICAgIGNvbnRlbnQgPSBjb250ZW50WzBdO1xuICB9XG4gIGNvbnN0IGRhdGEgPSBjb250ZW50LmRhdGE7XG4gIGNvbnN0IGhhc0ZlYXR1cmVkSW1hZ2VGaWVsZCA9ICEhZGF0YS5mZWF0dXJlZF9pbWFnZTtcbiAgY29uc3QgaGFzRmVhdHVyZWRJbWFnZSA9IGhhc0ZlYXR1cmVkSW1hZ2VGaWVsZCAmJiAhIWRhdGEuZmVhdHVyZWRfaW1hZ2UudXJsO1xuICByZXR1cm4gaGFzRmVhdHVyZWRJbWFnZSAmJiBkYXRhLmZlYXR1cmVkX2ltYWdlLnVybDtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Nlby9iYXNpYy5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcnNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JzXCJcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=
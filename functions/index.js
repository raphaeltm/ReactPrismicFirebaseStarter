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
exports.PRISMIC_SETTINGS = exports.getTypeTitle = exports.getFormat = exports.getContent = exports.loadSettings = exports.linkResolver = exports.getApi = exports.apiEndpoint = exports.CONTENT_FORMATS = undefined;

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
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(type, uid, page) {
    var api, _page, options, response;

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
            _page = _context3.sent;

            if (!_page) {
              _context3.next = 15;
              break;
            }

            return _context3.abrupt("return", _page);

          case 15:
            return _context3.abrupt("return", null);

          case 16:
            _context3.next = 32;
            break;

          case 18:
            options = {
              pageSize: PRISMIC_SETTINGS.NUM_PER_PAGE
            };

            if (page) {
              options.page = page;
            }
            _context3.next = 22;
            return api.query(_prismicJavascript2.default.Predicates.at('document.type', type), options);

          case 22:
            response = _context3.sent;

            if (!(response.results.length === 0)) {
              _context3.next = 27;
              break;
            }

            return _context3.abrupt("return", null);

          case 27:
            if (!response.results[0].uid) {
              _context3.next = 31;
              break;
            }

            return _context3.abrupt("return", response.results);

          case 31:
            return _context3.abrupt("return", response.results[0]);

          case 32:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, undefined);
  }));

  return function getContent(_x2, _x3, _x4) {
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

var PRISMIC_SETTINGS = exports.PRISMIC_SETTINGS = {
  NUM_PER_PAGE: 1
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
exports.loadMoreContent = exports.contentTypeSetPage = exports.contentLoaded = exports.contentFetching = exports.CONTENT_SET_PAGE = exports.CONTENT_FETCHING = exports.CONTENT_LOADED = undefined;

var _prismic = __webpack_require__(0);

var _content = __webpack_require__(18);

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var CONTENT_LOADED = exports.CONTENT_LOADED = "CONTENT_LOADED";
var CONTENT_FETCHING = exports.CONTENT_FETCHING = "CONTENT_FETCHING";
var CONTENT_SET_PAGE = exports.CONTENT_SET_PAGE = "CONTENT_SET_PAGE";

/**
 * Set the content fetching status to true.
 * @returns {{type: string}}
 */
var contentFetching = exports.contentFetching = function contentFetching() {
  return {
    type: CONTENT_FETCHING
  };
};

/**
 * Dispatched upon completion of content load.
 * @param content
 * @param type
 * @param uid
 * @returns {{type: string, payload: {content: *, type: *, uid: *}}}
 */
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

/**
 * Set the currently loaded number of pages for a given type.
 * @param type
 * @param page
 * @returns {{type: string, payload: {type: *, page: *}}}
 */
var contentTypeSetPage = exports.contentTypeSetPage = function contentTypeSetPage(type, page) {
  console.warn("Setting page for " + type + " to " + page);
  return {
    type: CONTENT_SET_PAGE,
    payload: {
      type: type,
      page: page
    }
  };
};

/**
 * Load the next page of content for a given type.
 * @param type
 * @returns {function(*, *)}
 */
var loadMoreContent = exports.loadMoreContent = function loadMoreContent(type) {
  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState) {
      var number, content;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              number = (0, _content.getTypePage)(getState(), type) || 1;

              dispatch(contentFetching());
              _context.next = 4;
              return (0, _prismic.getContent)(type, null, number + 1);

            case 4:
              content = _context.sent;

              if (!(!content.length || content.length === 0)) {
                _context.next = 7;
                break;
              }

              return _context.abrupt("return");

            case 7:
              dispatch(contentTypeSetPage(type, number + 1));
              content.map(function (page) {
                dispatch(contentLoaded(page, page.type, page.uid));
              });
              return _context.abrupt("return", (0, _content.getTypeContent)(getState(), type));

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();
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

// https://stackoverflow.com/questions/679915/how-do-i-test-for-an-empty-javascript-object
var isEmptyObject = exports.isEmptyObject = function isEmptyObject(obj) {
  return Object.keys(obj).length === 0 && obj.constructor === Object;
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
      settings: {
        content: settings
      }
    }
  };

  if ((0, _prismic.getFormat)(content) === _prismic.CONTENT_FORMATS.LIST) {
    state.content[type] = { content: {} };
    content.map(function (page) {
      state.content[type].content[page.uid] = page;
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

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTypeFormat = exports.getOrderedContent = exports.getTypePage = exports.getTypeByUID = exports.getFormattedContent = exports.getTypeContent = exports.getTypeRoot = undefined;

var _utils = __webpack_require__(9);

var _prismic = __webpack_require__(0);

/**
 * Get the root for a type.
 * @param state
 * @param type
 */
var getTypeRoot = exports.getTypeRoot = function getTypeRoot(state, type) {
  var content = state.content;
  return content[type];
};

/**
 * Get the raw content for a type.
 * @param state
 * @param type
 * @returns {null}
 */
var getTypeContent = exports.getTypeContent = function getTypeContent(state, type) {
  var root = getTypeRoot(state, type);
  if (!root) {
    return null;
  }
  return root.content;
};

/**
 * Get the content for a given type (optional UID) formatted appropriately.
 * @param state
 * @param type
 * @param uid
 * @returns {*}
 */
var getFormattedContent = exports.getFormattedContent = function getFormattedContent(state, type, uid) {
  var baseContent = getTypeContent(state, type);
  if (!baseContent) {
    return null;
  }
  if (uid) {
    return getTypeByUID();
  } else {
    return getTypeFormat(state, type) === _prismic.CONTENT_FORMATS.REPEATABLE ? getOrderedContent(state, type) : getTypeContent(state, type);
  }
};

/**
 * Get a page by type and uid.
 * @param state
 * @param type
 * @param uid
 * @returns {null}
 */
var getTypeByUID = exports.getTypeByUID = function getTypeByUID(state, type, uid) {
  var content = getTypeContent(state, type);
  if (!content) {
    return null;
  }
  if (content[uid]) {
    return content[uid];
  } else {
    return null;
  }
};

/**
 * Get the current loaded page.
 * @param state
 * @param type
 * @returns {null}
 */
var getTypePage = exports.getTypePage = function getTypePage(state, type) {
  var root = getTypeRoot(state, type);
  if (root.page) {
    return root.page;
  } else {
    return null;
  }
};

/**
 * For repeatable types, get content in order.
 * @param state
 * @param type
 * @param predicate
 * @param order
 * @returns {Array.<*>}
 */
var getOrderedContent = exports.getOrderedContent = function getOrderedContent(state, type, predicate, order) {
  if (!predicate) {
    predicate = function predicate(page) {
      return page.first_publication_date;
    };
  }
  if (!order) {
    order = 'DESC';
  }
  var content = getTypeContent(state, type);
  var contentArray = Object.keys(content).map(function (page) {
    return content[page];
  });
  return contentArray.sort(function (pageA, pageB) {
    if (order === 'ASC') {
      return predicate(pageA) > predicate(pageB);
    } else {
      return predicate(pageA) < predicate(pageB);
    }
  });
};

/**
 * Get the format of the type based on loaded content.
 * @param state
 * @param type
 * @returns {*}
 */
var getTypeFormat = exports.getTypeFormat = function getTypeFormat(state, type) {
  var content = getTypeContent(state, type);
  if (!content || (0, _utils.isEmptyObject)(content)) {
    return null;
  }
  if (content.id) {
    return _prismic.CONTENT_FORMATS.SINGLE;
  } else {
    return _prismic.CONTENT_FORMATS.REPEATABLE;
  }
};

/***/ })
/******/ ])));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNjY3ZTQ0MDVjZDk5NjY1NDM1YmUiLCJ3ZWJwYWNrOi8vLy4vLi4vY29tbW9uL3ByaXNtaWMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlyZWJhc2UtZnVuY3Rpb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJpc21pYy1kb21cIiIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYmFiZWwtcG9seWZpbGxcIiIsIndlYnBhY2s6Ly8vLi9zcmMvc2l0ZW1hcC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzaXRlbWFwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJpc21pYy1qYXZhc2NyaXB0XCIiLCJ3ZWJwYWNrOi8vLy4vLi4vc3JjL2FjdGlvbnMvY29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi8uLi9jb21tb24vdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nlb1ByZXAuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvb2tpZS1wYXJzZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJib2R5LXBhcnNlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInB1Z1wiIiwid2VicGFjazovLy8uL3NyYy9zZW8vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nlby9iYXNpYy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JzXCIiLCJ3ZWJwYWNrOi8vLy4vLi4vc3JjL3NlbGVjdG9ycy9jb250ZW50LmpzIl0sIm5hbWVzIjpbIkNPTlRFTlRfRk9STUFUUyIsIkxJU1QiLCJTSU5HTEUiLCJSRVBFQVRBQkxFIiwiYXBpRW5kcG9pbnQiLCJnZXRBcGkiLCJsaW5rUmVzb2x2ZXIiLCJkb2MiLCJ0eXBlIiwidWlkIiwibG9hZFNldHRpbmdzIiwic3RvcmUiLCJnZXRDb250ZW50Iiwic2V0dGluZ3MiLCJkaXNwYXRjaCIsInBhZ2UiLCJhcGkiLCJnZXRCeVVJRCIsIm9wdGlvbnMiLCJwYWdlU2l6ZSIsIlBSSVNNSUNfU0VUVElOR1MiLCJOVU1fUEVSX1BBR0UiLCJxdWVyeSIsIlByZWRpY2F0ZXMiLCJhdCIsInJlc3BvbnNlIiwicmVzdWx0cyIsImxlbmd0aCIsImdldEZvcm1hdCIsImNvbnRlbnQiLCJnZXRUeXBlVGl0bGUiLCJ0eXBlU3BhY2VzIiwicmVwbGFjZSIsImV4cG9ydHMiLCJzZW9QcmVwIiwic2l0ZU1hcCIsImZ1bmN0aW9ucyIsInNtIiwiZmV0Y2hBbGxQYWdlcyIsImFsbFJlc3VsdHMiLCJpbml0aWFsIiwiY3VycmVudFBhZ2UiLCJ0b3RhbF9wYWdlcyIsImdldFVSTHNGcm9tUGFnZXMiLCJwYWdlcyIsInVybHMiLCJtYXAiLCJkb2N1bWVudCIsInB1c2giLCJ1cmwiLCJodHRwcyIsIm9uUmVxdWVzdCIsInJlcSIsInJlcyIsInNpdGVtYXAiLCJjcmVhdGVTaXRlbWFwIiwiaG9zdG5hbWUiLCJwcm90b2NvbCIsImNhY2hlVGltZSIsInRvWE1MIiwiZXJyIiwieG1sIiwic3RhdHVzIiwiZW5kIiwiaGVhZGVyIiwic2V0Iiwic2VuZCIsIkNPTlRFTlRfTE9BREVEIiwiQ09OVEVOVF9GRVRDSElORyIsIkNPTlRFTlRfU0VUX1BBR0UiLCJjb250ZW50RmV0Y2hpbmciLCJjb250ZW50TG9hZGVkIiwicGF5bG9hZCIsImNvbnRlbnRUeXBlU2V0UGFnZSIsImNvbnNvbGUiLCJ3YXJuIiwibG9hZE1vcmVDb250ZW50IiwiZ2V0U3RhdGUiLCJudW1iZXIiLCJ0aXRsZUNhc2UiLCJzdHIiLCJuZXdzdHIiLCJzcGxpdCIsImkiLCJjb3B5Iiwic3Vic3RyaW5nIiwidG9Mb3dlckNhc2UiLCJ0b1VwcGVyQ2FzZSIsImpvaW4iLCJpc0VtcHR5T2JqZWN0Iiwib2JqIiwiT2JqZWN0Iiwia2V5cyIsImNvbnN0cnVjdG9yIiwicHVnIiwiUHJpc21pYyIsImNvcnMiLCJyZXF1aXJlIiwib3JpZ2luIiwiYXBwIiwidXNlIiwianNvbiIsImJ1aWxkU3RhdGUiLCJzdGF0ZSIsImhhbmRsZXIiLCJwYXJhbXMiLCJyZW5kZXJJbmRleCIsImNvbXBpbGVGaWxlIiwicmVuZGVyNDA0IiwiY29udGV4dCIsImRhdGEiLCJKU09OIiwic3RyaW5naWZ5IiwiZ2V0IiwiU0VPQmFzaWNzIiwiYnVpbGRTRU9EYXRhIiwidGl0bGUiLCJnZXRUaXRsZSIsInNpbXBsZVRpdGxlIiwiZ2V0U2ltcGxlVGl0bGUiLCJmZWF0dXJlZEltYWdlIiwiZ2V0SW1hZ2UiLCJQcmlzbWljRE9NIiwiUHJpc21pY1V0aWxzIiwic2V0dGluZ3NEYXRhIiwidHlwZVRpdGxlIiwic2l0ZV90aXRsZSIsIlJpY2hUZXh0IiwiYXNUZXh0IiwiaGFzRmVhdHVyZWRJbWFnZUZpZWxkIiwiZmVhdHVyZWRfaW1hZ2UiLCJoYXNGZWF0dXJlZEltYWdlIiwiZ2V0VHlwZVJvb3QiLCJnZXRUeXBlQ29udGVudCIsInJvb3QiLCJnZXRGb3JtYXR0ZWRDb250ZW50IiwiYmFzZUNvbnRlbnQiLCJnZXRUeXBlQnlVSUQiLCJnZXRUeXBlRm9ybWF0IiwiZ2V0T3JkZXJlZENvbnRlbnQiLCJnZXRUeXBlUGFnZSIsInByZWRpY2F0ZSIsIm9yZGVyIiwiZmlyc3RfcHVibGljYXRpb25fZGF0ZSIsImNvbnRlbnRBcnJheSIsInNvcnQiLCJwYWdlQSIsInBhZ2VCIiwiaWQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDN0RBOzs7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVPLElBQU1BLDRDQUFrQjtBQUM3QkMsUUFBTSxNQUR1QjtBQUU3QkMsVUFBUSxRQUZxQjtBQUc3QkMsY0FBWTtBQUhpQixDQUF4Qjs7QUFNQSxJQUFNQyxvQ0FBYyxxQ0FBcEI7O0FBRUEsSUFBTUM7QUFBQSxxRUFBUztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDUCw0QkFBUUEsTUFBUixDQUFlRCxXQUFmLENBRE87O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFUOztBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQU47O0FBSUEsSUFBTUUsc0NBQWUsU0FBZkEsWUFBZSxDQUFDQyxHQUFELEVBQVM7QUFDbkMsTUFBSUEsSUFBSUMsSUFBSixLQUFhLFVBQWpCLEVBQTZCO0FBQzNCLFdBQU8sR0FBUDtBQUNEO0FBQ0QsU0FBTyxNQUFJRCxJQUFJQyxJQUFSLFVBQW1CRCxJQUFJRSxHQUFKLElBQVcsRUFBOUIsQ0FBUDtBQUNELENBTE07O0FBT0EsSUFBTUM7QUFBQSxzRUFBZSxrQkFBT0MsS0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNMQyxXQUFXLFVBQVgsQ0FESzs7QUFBQTtBQUN0QkMsb0JBRHNCOztBQUUxQkYsa0JBQU1HLFFBQU4sQ0FBZSw0QkFBY0QsUUFBZCxFQUF3QixVQUF4QixDQUFmOztBQUYwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFmOztBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQU47O0FBS0EsSUFBTUQ7QUFBQSxzRUFBYSxrQkFBT0osSUFBUCxFQUFhQyxHQUFiLEVBQWtCTSxJQUFsQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDTlYsUUFETTs7QUFBQTtBQUNsQlcsZUFEa0I7O0FBQUEsa0JBR3BCLENBQUNSLElBQUQsSUFBUyxDQUFDQyxHQUhVO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsbUJBSVRHLFdBQVcsVUFBWCxDQUpTOztBQUFBO0FBQUE7O0FBQUE7QUFBQSxpQkFPcEJILEdBUG9CO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsbUJBUUhPLElBQUlDLFFBQUosQ0FBYVQsSUFBYixFQUFtQkMsR0FBbkIsQ0FSRzs7QUFBQTtBQVFoQk0saUJBUmdCOztBQUFBLGlCQVNsQkEsS0FUa0I7QUFBQTtBQUFBO0FBQUE7O0FBQUEsOENBVWJBLEtBVmE7O0FBQUE7QUFBQSw4Q0FhYixJQWJhOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQWlCbEJHLG1CQWpCa0IsR0FpQlI7QUFDWkMsd0JBQVVDLGlCQUFpQkM7QUFEZixhQWpCUTs7QUFvQnRCLGdCQUFHTixJQUFILEVBQVE7QUFDTkcsc0JBQVFILElBQVIsR0FBZUEsSUFBZjtBQUNEO0FBdEJxQjtBQUFBLG1CQXVCREMsSUFBSU0sS0FBSixDQUNuQiw0QkFBUUMsVUFBUixDQUFtQkMsRUFBbkIsQ0FBc0IsZUFBdEIsRUFBdUNoQixJQUF2QyxDQURtQixFQUVuQlUsT0FGbUIsQ0F2QkM7O0FBQUE7QUF1QmxCTyxvQkF2QmtCOztBQUFBLGtCQTRCbEJBLFNBQVNDLE9BQVQsQ0FBaUJDLE1BQWpCLEtBQTRCLENBNUJWO0FBQUE7QUFBQTtBQUFBOztBQUFBLDhDQTZCYixJQTdCYTs7QUFBQTtBQUFBLGdCQStCWixDQUFDRixTQUFTQyxPQUFULENBQWlCLENBQWpCLEVBQW9CakIsR0EvQlQ7QUFBQTtBQUFBO0FBQUE7O0FBQUEsOENBZ0NiZ0IsU0FBU0MsT0FoQ0k7O0FBQUE7QUFBQSw4Q0FtQ2JELFNBQVNDLE9BQVQsQ0FBaUIsQ0FBakIsQ0FuQ2E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBYjs7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFOOztBQXdDQSxJQUFNRSxnQ0FBWSxTQUFaQSxTQUFZLENBQUNDLE9BQUQsRUFBYTtBQUNwQyxNQUFJLE9BQU9BLFFBQVFGLE1BQWYsS0FBMEIsV0FBOUIsRUFBMkM7QUFDekMsV0FBTzNCLGdCQUFnQkMsSUFBdkI7QUFDRCxHQUZELE1BR0ssSUFBSTRCLFFBQVFwQixHQUFaLEVBQWlCO0FBQ3BCLFdBQU9ULGdCQUFnQkcsVUFBdkI7QUFDRCxHQUZJLE1BR0E7QUFDSCxXQUFPSCxnQkFBZ0JFLE1BQXZCO0FBQ0Q7QUFDRixDQVZNOztBQVlBLElBQU00QixzQ0FBZSxTQUFmQSxZQUFlLENBQUN0QixJQUFELEVBQVU7QUFDcEMsTUFBTXVCLGFBQWF2QixLQUFLd0IsT0FBTCxDQUFhLEdBQWIsRUFBa0IsR0FBbEIsQ0FBbkI7QUFDQSxTQUFPLHNCQUFVRCxVQUFWLENBQVA7QUFDRCxDQUhNOztBQUtBLElBQU1YLDhDQUFtQjtBQUM5QkMsZ0JBQWM7QUFEZ0IsQ0FBekIsQzs7Ozs7O0FDckZQLCtDOzs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7O0FDQUE7O0FBQ0E7O0FBQ0E7O0FBRUFZLFFBQVFDLE9BQVI7O0FBRUFELFFBQVFFLE9BQVIsb0I7Ozs7OztBQ05BLDJDOzs7Ozs7Ozs7Ozs7OztBQ0FBOztJQUFZQyxTOztBQUNaOztJQUFZQyxFOztBQUNaOzs7Ozs7OztBQUVBLElBQU1DO0FBQUEscUVBQWdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNkbkIsb0JBRGMsR0FDSCxFQURHO0FBQUE7QUFBQSxtQkFFRixzQkFGRTs7QUFBQTtBQUVkSCxlQUZjO0FBR2hCdUIsc0JBSGdCLEdBR0gsRUFIRztBQUFBO0FBQUEsbUJBSUV2QixJQUFJTSxLQUFKLENBQVUsRUFBVixFQUFjLEVBQUNILFVBQVVBLFFBQVgsRUFBcUJKLE1BQU0sQ0FBM0IsRUFBZCxDQUpGOztBQUFBO0FBSWR5QixtQkFKYzs7QUFLcEJELHNEQUFpQkEsVUFBakIsc0JBQWdDQyxRQUFRZCxPQUF4QztBQUNTZSx1QkFOVyxHQU1HLENBTkg7O0FBQUE7QUFBQSxrQkFNTUEsZUFBZUQsUUFBUUUsV0FON0I7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxtQkFPRzFCLElBQUlNLEtBQUosQ0FBVSxFQUFWLEVBQWMsRUFBQ0gsVUFBVUEsUUFBWCxFQUFxQkosTUFBTTBCLFdBQTNCLEVBQWQsQ0FQSDs7QUFBQTtBQU9kaEIsb0JBUGM7O0FBUWxCYyxzREFBaUJBLFVBQWpCLHNCQUFnQ2QsU0FBU0MsT0FBekM7O0FBUmtCO0FBTTBDZSx5QkFOMUM7QUFBQTtBQUFBOztBQUFBO0FBQUEsNkNBVWJGLFVBVmE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBaEI7O0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBTjs7QUFhQSxJQUFNSSxtQkFBbUIsU0FBbkJBLGdCQUFtQixDQUFDQyxLQUFELEVBQVc7QUFDbEMsTUFBSUMsT0FBTyxFQUFYO0FBQ0FELFFBQU1FLEdBQU4sQ0FBVSxVQUFDQyxRQUFELEVBQWM7QUFDdEJGLFNBQUtHLElBQUwsQ0FBVTtBQUNSQyxXQUFLLDJCQUFhRixRQUFiO0FBREcsS0FBVjtBQUdELEdBSkQ7QUFLQSxTQUFPRixJQUFQO0FBQ0QsQ0FSRDs7QUFVTyxJQUFNViw0QkFBVUMsVUFBVWMsS0FBVixDQUFnQkMsU0FBaEI7QUFBQSxzRUFBMEIsa0JBQU9DLEdBQVAsRUFBWUMsR0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUMzQmYsZUFEMkI7O0FBQUE7QUFDekNNLGlCQUR5QztBQUd6Q1UsbUJBSHlDLEdBRy9CakIsR0FBR2tCLGFBQUgsQ0FBaUI7QUFDL0JDLHdCQUFhSixJQUFJSyxRQUFqQixXQUErQkwsSUFBSUksUUFESjtBQUUvQkUseUJBQVcsTUFGb0I7QUFHL0JiLG9CQUFNRixpQkFBaUJDLEtBQWpCO0FBSHlCLGFBQWpCLENBSCtCOzs7QUFTL0NVLG9CQUFRSyxLQUFSLENBQWMsVUFBVUMsR0FBVixFQUFlQyxHQUFmLEVBQW9CO0FBQ2hDLGtCQUFJRCxHQUFKLEVBQVM7QUFDUCx1QkFBT1AsSUFBSVMsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLEdBQWhCLEVBQVA7QUFDRDtBQUNEVixrQkFBSVcsTUFBSixDQUFXLGNBQVgsRUFBMkIsaUJBQTNCO0FBQ0FYLGtCQUFJWSxHQUFKLENBQVEsZUFBUixFQUF5QixtQ0FBekI7QUFDQVosa0JBQUlhLElBQUosQ0FBU0wsR0FBVDtBQUNELGFBUEQ7O0FBVCtDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQTFCOztBQUFBO0FBQUE7QUFBQTtBQUFBLElBQWhCLEM7Ozs7OztBQzNCUCxvQzs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7Ozs7O0FDQUE7O0FBQ0E7Ozs7QUFDTyxJQUFNTSwwQ0FBaUIsZ0JBQXZCO0FBQ0EsSUFBTUMsOENBQW1CLGtCQUF6QjtBQUNBLElBQU1DLDhDQUFtQixrQkFBekI7O0FBRVA7Ozs7QUFJTyxJQUFNQyw0Q0FBa0IsU0FBbEJBLGVBQWtCLEdBQU07QUFDbkMsU0FBTztBQUNMOUQsVUFBTTREO0FBREQsR0FBUDtBQUdELENBSk07O0FBTVA7Ozs7Ozs7QUFPTyxJQUFNRyx3Q0FBZ0IsU0FBaEJBLGFBQWdCLENBQUMxQyxPQUFELEVBQVVyQixJQUFWLEVBQWdCQyxHQUFoQixFQUF3QjtBQUNuRCxTQUFPO0FBQ0xELFVBQU0yRCxjQUREO0FBRUxLLGFBQVM7QUFDUDNDLHNCQURPO0FBRVByQixnQkFGTztBQUdQQztBQUhPO0FBRkosR0FBUDtBQVFELENBVE07O0FBV1A7Ozs7OztBQU1PLElBQU1nRSxrREFBcUIsU0FBckJBLGtCQUFxQixDQUFDakUsSUFBRCxFQUFPTyxJQUFQLEVBQWdCO0FBQ2hEMkQsVUFBUUMsSUFBUix1QkFBaUNuRSxJQUFqQyxZQUE0Q08sSUFBNUM7QUFDQSxTQUFPO0FBQ0xQLFVBQU02RCxnQkFERDtBQUVMRyxhQUFTO0FBQ1BoRSxnQkFETztBQUVQTztBQUZPO0FBRkosR0FBUDtBQU9ELENBVE07O0FBV1A7Ozs7O0FBS08sSUFBTTZELDRDQUFrQixTQUFsQkEsZUFBa0IsQ0FBQ3BFLElBQUQsRUFBVTtBQUN2QztBQUFBLHVFQUFPLGlCQUFPTSxRQUFQLEVBQWlCK0QsUUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0NDLG9CQURELEdBQ1UsMEJBQVlELFVBQVosRUFBd0JyRSxJQUF4QixLQUFpQyxDQUQzQzs7QUFFTE0sdUJBQVN3RCxpQkFBVDtBQUZLO0FBQUEscUJBR2UseUJBQVc5RCxJQUFYLEVBQWlCLElBQWpCLEVBQXVCc0UsU0FBTyxDQUE5QixDQUhmOztBQUFBO0FBR0RqRCxxQkFIQzs7QUFBQSxvQkFJRixDQUFDQSxRQUFRRixNQUFULElBQW1CRSxRQUFRRixNQUFSLEtBQW1CLENBSnBDO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBT0xiLHVCQUFTMkQsbUJBQW1CakUsSUFBbkIsRUFBeUJzRSxTQUFPLENBQWhDLENBQVQ7QUFDQWpELHNCQUFRaUIsR0FBUixDQUFZLFVBQUMvQixJQUFELEVBQVU7QUFDcEJELHlCQUFTeUQsY0FBY3hELElBQWQsRUFBb0JBLEtBQUtQLElBQXpCLEVBQStCTyxLQUFLTixHQUFwQyxDQUFUO0FBQ0QsZUFGRDtBQVJLLCtDQVdFLDZCQUFlb0UsVUFBZixFQUEyQnJFLElBQTNCLENBWEY7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBUDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWFELENBZE0sQzs7Ozs7Ozs7Ozs7O0FDeERQO0FBQ08sSUFBTXVFLGdDQUFZLFNBQVpBLFNBQVksQ0FBQ0MsR0FBRCxFQUFTO0FBQ2hDLE1BQUlDLFNBQVNELElBQUlFLEtBQUosQ0FBVSxHQUFWLENBQWI7QUFDQSxPQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsSUFBSUYsT0FBT3RELE1BQTNCLEVBQW1Dd0QsR0FBbkMsRUFBd0M7QUFDdEMsUUFBSUYsT0FBT0UsQ0FBUCxNQUFjLEVBQWxCLEVBQXNCO0FBQ3RCLFFBQUlDLE9BQU9ILE9BQU9FLENBQVAsRUFBVUUsU0FBVixDQUFvQixDQUFwQixFQUF1QkMsV0FBdkIsRUFBWDtBQUNBTCxXQUFPRSxDQUFQLElBQVlGLE9BQU9FLENBQVAsRUFBVSxDQUFWLEVBQWFJLFdBQWIsS0FBNkJILElBQXpDO0FBQ0Q7QUFDREgsV0FBU0EsT0FBT08sSUFBUCxDQUFZLEdBQVosQ0FBVDtBQUNBLFNBQU9QLE1BQVA7QUFDRCxDQVRNOztBQVdQO0FBQ08sSUFBTVEsd0NBQWdCLFNBQWhCQSxhQUFnQixDQUFDQyxHQUFELEVBQVM7QUFDcEMsU0FBT0MsT0FBT0MsSUFBUCxDQUFZRixHQUFaLEVBQWlCL0QsTUFBakIsS0FBNEIsQ0FBNUIsSUFBaUMrRCxJQUFJRyxXQUFKLEtBQW9CRixNQUE1RDtBQUNELENBRk0sQzs7Ozs7Ozs7Ozs7Ozs7QUNiUDs7SUFBWXZELFM7O0FBQ1o7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0lBQVkwRCxHOztBQUVaOztJQUFZQyxPOztBQUNaOzs7Ozs7Ozs7O0FBRkEsSUFBTUMsT0FBTyxtQkFBQUMsQ0FBUSxFQUFSLEVBQWdCLEVBQUNDLFFBQVEsSUFBVCxFQUFoQixDQUFiOzs7QUFJQSxJQUFNQyxNQUFNLHdCQUFaOztBQUVBQSxJQUFJQyxHQUFKLENBQVFKLElBQVI7QUFDQUcsSUFBSUMsR0FBSixDQUFRLDZCQUFSO0FBQ0FELElBQUlDLEdBQUosQ0FBUSxxQkFBV0MsSUFBWCxFQUFSOztBQUVBLElBQU1DLGFBQWEsU0FBYkEsVUFBYSxDQUFDekYsUUFBRCxFQUFXZ0IsT0FBWCxFQUFvQnJCLElBQXBCLEVBQTZCO0FBQzlDLE1BQUkrRixRQUFRO0FBQ1YxRSxhQUFTO0FBQ1BoQixnQkFBVTtBQUNSZ0IsaUJBQVNoQjtBQUREO0FBREg7QUFEQyxHQUFaOztBQVFBLE1BQUcsd0JBQVVnQixPQUFWLE1BQXVCLHlCQUFnQjVCLElBQTFDLEVBQStDO0FBQzdDc0csVUFBTTFFLE9BQU4sQ0FBY3JCLElBQWQsSUFBc0IsRUFBQ3FCLFNBQVMsRUFBVixFQUF0QjtBQUNBQSxZQUFRaUIsR0FBUixDQUFZLFVBQUMvQixJQUFELEVBQVU7QUFDcEJ3RixZQUFNMUUsT0FBTixDQUFjckIsSUFBZCxFQUFvQnFCLE9BQXBCLENBQTRCZCxLQUFLTixHQUFqQyxJQUF3Q00sSUFBeEM7QUFDRCxLQUZEO0FBR0QsR0FMRCxNQU1LLElBQUcsd0JBQVVjLE9BQVYsTUFBdUIseUJBQWdCM0IsTUFBMUMsRUFBaUQ7QUFDcERxRyxVQUFNMUUsT0FBTixDQUFjQSxRQUFRckIsSUFBdEIsSUFBOEJxQixPQUE5QjtBQUNELEdBRkksTUFHQTtBQUNIMEUsVUFBTTFFLE9BQU4sQ0FBY0EsUUFBUXJCLElBQXRCLHdCQUNHcUIsUUFBUXBCLEdBRFgsRUFDaUJvQixPQURqQjtBQUdEOztBQUVELFNBQU8wRSxLQUFQO0FBQ0QsQ0F6QkQ7O0FBMkJBLElBQU1DO0FBQUEscUVBQVUsaUJBQU9wRCxHQUFQLEVBQVlDLEdBQVo7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUNNRCxJQUFJcUQsTUFEVixFQUNQakcsSUFETyxlQUNQQSxJQURPLEVBQ0RDLEdBREMsZUFDREEsR0FEQztBQUdSaUcsdUJBSFEsR0FHTVosSUFBSWEsV0FBSixDQUFnQixpQkFBaEIsQ0FITjtBQUlSQyxxQkFKUSxHQUlJZCxJQUFJYSxXQUFKLENBQWdCLGVBQWhCLENBSko7QUFBQTtBQUFBLG1CQU1TLHlCQUFXLFVBQVgsQ0FOVDs7QUFBQTtBQU1SOUYsb0JBTlE7QUFBQTtBQUFBLG1CQU9RLHlCQUFXTCxJQUFYLEVBQWlCQyxHQUFqQixDQVBSOztBQUFBO0FBT1JvQixtQkFQUTs7O0FBU2QsZ0JBQUcsQ0FBQ0EsT0FBSixFQUFZO0FBQ1Z3QixrQkFBSVMsTUFBSixDQUFXLEdBQVg7QUFDQVQsa0JBQUlZLEdBQUosQ0FBUSxjQUFSLEVBQXdCLFdBQXhCO0FBQ0FaLGtCQUFJYSxJQUFKLENBQVMwQyxXQUFUO0FBQ0Q7O0FBRUtDLG1CQWZRLEdBZUU7QUFDZEMsb0JBQU0seUJBQWFqRixPQUFiLEVBQXNCaEIsUUFBdEIsRUFBZ0NMLElBQWhDLEVBQXNDQyxHQUF0QyxDQURRO0FBRWQ4RixxQkFBT1EsS0FBS0MsU0FBTCxDQUFlVixXQUFXekYsUUFBWCxFQUFxQmdCLE9BQXJCLEVBQThCckIsSUFBOUIsQ0FBZixDQUZPO0FBR2R1Rix1QkFBU0E7QUFISyxhQWZGOzs7QUFxQmQxQyxnQkFBSVksR0FBSixDQUFRLGNBQVIsRUFBd0IsV0FBeEI7QUFDQVosZ0JBQUlZLEdBQUosQ0FBUSxlQUFSLEVBQXlCLG1DQUF6QjtBQUNBWixnQkFBSWEsSUFBSixDQUFTd0MsWUFBWUcsT0FBWixDQUFUOztBQXZCYztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFWOztBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQU47O0FBMEJBVixJQUFJYyxHQUFKLENBQVEsYUFBUixFQUF1QlQsT0FBdkI7QUFDQUwsSUFBSWMsR0FBSixDQUFRLFFBQVIsRUFBa0JULE9BQWxCO0FBQ0FMLElBQUljLEdBQUosQ0FBUSxHQUFSLEVBQWFULE9BQWI7O0FBRU8sSUFBTXRFLDRCQUFVRSxVQUFVYyxLQUFWLENBQWdCQyxTQUFoQixDQUEwQmdELEdBQTFCLENBQWhCLEM7Ozs7OztBQ3pFUCxvQzs7Ozs7O0FDQUEsMEM7Ozs7OztBQ0FBLHdDOzs7Ozs7QUNBQSxnQzs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7SUFBWWUsUzs7OztBQUVMLElBQU1DLHNDQUFlLFNBQWZBLFlBQWUsQ0FBQ3RGLE9BQUQsRUFBVWhCLFFBQVYsRUFBb0JMLElBQXBCLEVBQTBCQyxHQUExQixFQUFrQztBQUM1RCxTQUFPO0FBQ0wyRyxXQUFPRixVQUFVRyxRQUFWLENBQW1CeEYsT0FBbkIsRUFBNEJoQixRQUE1QixFQUFzQ0wsSUFBdEMsQ0FERjtBQUVMOEcsaUJBQWFKLFVBQVVLLGNBQVYsQ0FBeUIxRixPQUF6QixFQUFrQ3JCLElBQWxDLENBRlI7QUFHTGdILG1CQUFlTixVQUFVTyxRQUFWLENBQW1CNUYsT0FBbkI7QUFIVixHQUFQO0FBS0QsQ0FOTSxDOzs7Ozs7Ozs7Ozs7OztBQ0ZQOztJQUFZNkYsVTs7QUFDWjs7SUFBWUMsWTs7OztBQUVMLElBQU1OLDhCQUFXLFNBQVhBLFFBQVcsQ0FBQ3hGLE9BQUQsRUFBVWhCLFFBQVYsRUFBb0JMLElBQXBCLEVBQTZCO0FBQ25ELE1BQU1vSCxlQUFlL0csU0FBU2lHLElBQTlCO0FBQ0EsTUFBTWUsWUFBWXJILE9BQU9tSCxhQUFhN0YsWUFBYixDQUEwQnRCLElBQTFCLENBQVAsR0FBeUMsRUFBM0Q7QUFDQSxNQUFJbUgsYUFBYS9GLFNBQWIsQ0FBdUJDLE9BQXZCLE1BQW9DOEYsYUFBYTNILGVBQWIsQ0FBNkJDLElBQXJFLEVBQTJFO0FBQ3pFLFdBQVU0SCxTQUFWLGlCQUErQkQsYUFBYUUsVUFBNUM7QUFDRCxHQUZELE1BR0s7QUFDSCxRQUFNaEIsT0FBT2pGLFFBQVFpRixJQUFyQjtBQUNBLGlCQUFVQSxLQUFLTSxLQUFMLElBQWlCTSxXQUFXSyxRQUFYLENBQW9CQyxNQUFwQixDQUEyQmxCLEtBQUtNLEtBQWhDLENBQWpCLFdBQTZEUyxTQUE3RCxRQUFWLElBQXdGRCxhQUFhRSxVQUFyRztBQUNEO0FBQ0YsQ0FWTTs7QUFZQSxJQUFNUCwwQ0FBaUIsU0FBakJBLGNBQWlCLENBQUMxRixPQUFELEVBQVVyQixJQUFWLEVBQW1CO0FBQy9DLE1BQUdtSCxhQUFhL0YsU0FBYixDQUF1QkMsT0FBdkIsTUFBb0M4RixhQUFhM0gsZUFBYixDQUE2QkMsSUFBcEUsRUFBeUU7QUFDdkUsV0FBTzBILGFBQWE3RixZQUFiLENBQTBCdEIsSUFBMUIsQ0FBUDtBQUNELEdBRkQsTUFHSztBQUNILFdBQU9xQixRQUFRaUYsSUFBUixDQUFhTSxLQUFiLEdBQXFCTSxXQUFXSyxRQUFYLENBQW9CQyxNQUFwQixDQUEyQm5HLFFBQVFpRixJQUFSLENBQWFNLEtBQXhDLENBQXJCLEdBQXNFLElBQTdFO0FBQ0Q7QUFDRixDQVBNOztBQVNBLElBQU1LLDhCQUFXLFNBQVhBLFFBQVcsQ0FBQzVGLE9BQUQsRUFBYTtBQUNuQyxNQUFHOEYsYUFBYS9GLFNBQWIsQ0FBdUJDLE9BQXZCLE1BQW9DOEYsYUFBYTNILGVBQWIsQ0FBNkJDLElBQXBFLEVBQXlFO0FBQ3ZFNEIsY0FBVUEsUUFBUSxDQUFSLENBQVY7QUFDRDtBQUNELE1BQU1pRixPQUFPakYsUUFBUWlGLElBQXJCO0FBQ0EsTUFBTW1CLHdCQUF3QixDQUFDLENBQUNuQixLQUFLb0IsY0FBckM7QUFDQSxNQUFNQyxtQkFBbUJGLHlCQUF5QixDQUFDLENBQUNuQixLQUFLb0IsY0FBTCxDQUFvQmpGLEdBQXhFO0FBQ0EsU0FBT2tGLG9CQUFvQnJCLEtBQUtvQixjQUFMLENBQW9CakYsR0FBL0M7QUFDRCxDQVJNLEM7Ozs7OztBQ3hCUCxpQzs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7QUFDQTs7QUFFQTs7Ozs7QUFLTyxJQUFNbUYsb0NBQWMsU0FBZEEsV0FBYyxDQUFDN0IsS0FBRCxFQUFRL0YsSUFBUixFQUFpQjtBQUMxQyxNQUFNcUIsVUFBVTBFLE1BQU0xRSxPQUF0QjtBQUNBLFNBQU9BLFFBQVFyQixJQUFSLENBQVA7QUFDRCxDQUhNOztBQUtQOzs7Ozs7QUFNTyxJQUFNNkgsMENBQWlCLFNBQWpCQSxjQUFpQixDQUFDOUIsS0FBRCxFQUFRL0YsSUFBUixFQUFpQjtBQUM3QyxNQUFNOEgsT0FBT0YsWUFBWTdCLEtBQVosRUFBbUIvRixJQUFuQixDQUFiO0FBQ0EsTUFBSSxDQUFDOEgsSUFBTCxFQUFXO0FBQ1QsV0FBTyxJQUFQO0FBQ0Q7QUFDRCxTQUFPQSxLQUFLekcsT0FBWjtBQUNELENBTk07O0FBUVA7Ozs7Ozs7QUFPTyxJQUFNMEcsb0RBQXNCLFNBQXRCQSxtQkFBc0IsQ0FBQ2hDLEtBQUQsRUFBUS9GLElBQVIsRUFBY0MsR0FBZCxFQUFzQjtBQUN2RCxNQUFNK0gsY0FBY0gsZUFBZTlCLEtBQWYsRUFBc0IvRixJQUF0QixDQUFwQjtBQUNBLE1BQUcsQ0FBQ2dJLFdBQUosRUFBZ0I7QUFDZCxXQUFPLElBQVA7QUFDRDtBQUNELE1BQUkvSCxHQUFKLEVBQVM7QUFDUCxXQUFPZ0ksY0FBUDtBQUNELEdBRkQsTUFHSztBQUNILFdBQVFDLGNBQWNuQyxLQUFkLEVBQXFCL0YsSUFBckIsTUFBK0IseUJBQWdCTCxVQUFoRCxHQUNMd0ksa0JBQWtCcEMsS0FBbEIsRUFBeUIvRixJQUF6QixDQURLLEdBRUw2SCxlQUFlOUIsS0FBZixFQUFzQi9GLElBQXRCLENBRkY7QUFHRDtBQUNGLENBYk07O0FBZVA7Ozs7Ozs7QUFPTyxJQUFNaUksc0NBQWUsU0FBZkEsWUFBZSxDQUFDbEMsS0FBRCxFQUFRL0YsSUFBUixFQUFjQyxHQUFkLEVBQXNCO0FBQ2hELE1BQU1vQixVQUFVd0csZUFBZTlCLEtBQWYsRUFBc0IvRixJQUF0QixDQUFoQjtBQUNBLE1BQUksQ0FBQ3FCLE9BQUwsRUFBYztBQUNaLFdBQU8sSUFBUDtBQUNEO0FBQ0QsTUFBSUEsUUFBUXBCLEdBQVIsQ0FBSixFQUFrQjtBQUNoQixXQUFPb0IsUUFBUXBCLEdBQVIsQ0FBUDtBQUNELEdBRkQsTUFHSztBQUNILFdBQU8sSUFBUDtBQUNEO0FBQ0YsQ0FYTTs7QUFhUDs7Ozs7O0FBTU8sSUFBTW1JLG9DQUFjLFNBQWRBLFdBQWMsQ0FBQ3JDLEtBQUQsRUFBUS9GLElBQVIsRUFBaUI7QUFDMUMsTUFBTThILE9BQU9GLFlBQVk3QixLQUFaLEVBQW1CL0YsSUFBbkIsQ0FBYjtBQUNBLE1BQUk4SCxLQUFLdkgsSUFBVCxFQUFlO0FBQ2IsV0FBT3VILEtBQUt2SCxJQUFaO0FBQ0QsR0FGRCxNQUdLO0FBQ0gsV0FBTyxJQUFQO0FBQ0Q7QUFDRixDQVJNOztBQVVQOzs7Ozs7OztBQVFPLElBQU00SCxnREFBb0IsU0FBcEJBLGlCQUFvQixDQUFDcEMsS0FBRCxFQUFRL0YsSUFBUixFQUFjcUksU0FBZCxFQUF5QkMsS0FBekIsRUFBbUM7QUFDbEUsTUFBSSxDQUFDRCxTQUFMLEVBQWdCO0FBQ2RBLGdCQUFZLG1CQUFDOUgsSUFBRCxFQUFVO0FBQ3BCLGFBQU9BLEtBQUtnSSxzQkFBWjtBQUNELEtBRkQ7QUFHRDtBQUNELE1BQUksQ0FBQ0QsS0FBTCxFQUFZO0FBQ1ZBLFlBQVEsTUFBUjtBQUNEO0FBQ0QsTUFBTWpILFVBQVV3RyxlQUFlOUIsS0FBZixFQUFzQi9GLElBQXRCLENBQWhCO0FBQ0EsTUFBTXdJLGVBQWVyRCxPQUFPQyxJQUFQLENBQVkvRCxPQUFaLEVBQXFCaUIsR0FBckIsQ0FBeUIsVUFBQy9CLElBQUQ7QUFBQSxXQUFVYyxRQUFRZCxJQUFSLENBQVY7QUFBQSxHQUF6QixDQUFyQjtBQUNBLFNBQU9pSSxhQUFhQyxJQUFiLENBQWtCLFVBQUNDLEtBQUQsRUFBUUMsS0FBUixFQUFrQjtBQUN6QyxRQUFJTCxVQUFVLEtBQWQsRUFBcUI7QUFDbkIsYUFBT0QsVUFBVUssS0FBVixJQUFtQkwsVUFBVU0sS0FBVixDQUExQjtBQUNELEtBRkQsTUFHSztBQUNILGFBQU9OLFVBQVVLLEtBQVYsSUFBbUJMLFVBQVVNLEtBQVYsQ0FBMUI7QUFDRDtBQUNGLEdBUE0sQ0FBUDtBQVFELENBbkJNOztBQXFCUDs7Ozs7O0FBTU8sSUFBTVQsd0NBQWdCLFNBQWhCQSxhQUFnQixDQUFDbkMsS0FBRCxFQUFRL0YsSUFBUixFQUFpQjtBQUM1QyxNQUFNcUIsVUFBVXdHLGVBQWU5QixLQUFmLEVBQXNCL0YsSUFBdEIsQ0FBaEI7QUFDQSxNQUFJLENBQUNxQixPQUFELElBQVksMEJBQWNBLE9BQWQsQ0FBaEIsRUFBd0M7QUFDdEMsV0FBTyxJQUFQO0FBQ0Q7QUFDRCxNQUFHQSxRQUFRdUgsRUFBWCxFQUFjO0FBQ1osV0FBTyx5QkFBZ0JsSixNQUF2QjtBQUNELEdBRkQsTUFHSztBQUNILFdBQU8seUJBQWdCQyxVQUF2QjtBQUNEO0FBQ0YsQ0FYTSxDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNjY3ZTQ0MDVjZDk5NjY1NDM1YmUiLCJpbXBvcnQgUHJpc21pYyBmcm9tIFwicHJpc21pYy1qYXZhc2NyaXB0XCI7XHJcbmltcG9ydCB7Y29udGVudExvYWRlZH0gZnJvbSBcIi4uL3NyYy9hY3Rpb25zL2NvbnRlbnRcIjtcclxuaW1wb3J0IHt0aXRsZUNhc2V9IGZyb20gXCIuL3V0aWxzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQ09OVEVOVF9GT1JNQVRTID0ge1xyXG4gIExJU1Q6ICdMSVNUJyxcclxuICBTSU5HTEU6ICdTSU5HTEUnLFxyXG4gIFJFUEVBVEFCTEU6ICdSRVBFQVRBQkxFJyxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBhcGlFbmRwb2ludCA9IFwiaHR0cHM6Ly9yYXBoYWVsdG0ucHJpc21pYy5pby9hcGkvdjJcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRBcGkgPSBhc3luYyAoKSA9PiB7XHJcbiAgcmV0dXJuIGF3YWl0IFByaXNtaWMuZ2V0QXBpKGFwaUVuZHBvaW50KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBsaW5rUmVzb2x2ZXIgPSAoZG9jKSA9PiB7XHJcbiAgaWYgKGRvYy50eXBlID09PSBcImhvbWVwYWdlXCIpIHtcclxuICAgIHJldHVybiAnLyc7XHJcbiAgfVxyXG4gIHJldHVybiBgLyR7ZG9jLnR5cGV9L2AgKyAoZG9jLnVpZCB8fCAnJyk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbG9hZFNldHRpbmdzID0gYXN5bmMgKHN0b3JlKSA9PiB7XHJcbiAgbGV0IHNldHRpbmdzID0gYXdhaXQgZ2V0Q29udGVudCgnc2V0dGluZ3MnKTtcclxuICBzdG9yZS5kaXNwYXRjaChjb250ZW50TG9hZGVkKHNldHRpbmdzLCAnc2V0dGluZ3MnKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Q29udGVudCA9IGFzeW5jICh0eXBlLCB1aWQsIHBhZ2UpID0+IHtcclxuICBjb25zdCBhcGkgPSBhd2FpdCBnZXRBcGkoKTtcclxuXHJcbiAgaWYgKCF0eXBlICYmICF1aWQpIHtcclxuICAgIHJldHVybiBhd2FpdCBnZXRDb250ZW50KCdob21lcGFnZScpO1xyXG4gIH1cclxuXHJcbiAgaWYgKHVpZCkge1xyXG4gICAgY29uc3QgcGFnZSA9IGF3YWl0IGFwaS5nZXRCeVVJRCh0eXBlLCB1aWQpO1xyXG4gICAgaWYgKHBhZ2UpIHtcclxuICAgICAgcmV0dXJuIHBhZ2U7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGVsc2Uge1xyXG4gICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgIHBhZ2VTaXplOiBQUklTTUlDX1NFVFRJTkdTLk5VTV9QRVJfUEFHRVxyXG4gICAgfTtcclxuICAgIGlmKHBhZ2Upe1xyXG4gICAgICBvcHRpb25zLnBhZ2UgPSBwYWdlO1xyXG4gICAgfVxyXG4gICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgYXBpLnF1ZXJ5KFxyXG4gICAgICBQcmlzbWljLlByZWRpY2F0ZXMuYXQoJ2RvY3VtZW50LnR5cGUnLCB0eXBlKSxcclxuICAgICAgb3B0aW9uc1xyXG4gICAgKTtcclxuXHJcbiAgICBpZiAocmVzcG9uc2UucmVzdWx0cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICghIXJlc3BvbnNlLnJlc3VsdHNbMF0udWlkKSB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5yZXN1bHRzO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5yZXN1bHRzWzBdO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRGb3JtYXQgPSAoY29udGVudCkgPT4ge1xyXG4gIGlmICh0eXBlb2YgY29udGVudC5sZW5ndGggIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICByZXR1cm4gQ09OVEVOVF9GT1JNQVRTLkxJU1Q7XHJcbiAgfVxyXG4gIGVsc2UgaWYgKGNvbnRlbnQudWlkKSB7XHJcbiAgICByZXR1cm4gQ09OVEVOVF9GT1JNQVRTLlJFUEVBVEFCTEU7XHJcbiAgfVxyXG4gIGVsc2Uge1xyXG4gICAgcmV0dXJuIENPTlRFTlRfRk9STUFUUy5TSU5HTEU7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFR5cGVUaXRsZSA9ICh0eXBlKSA9PiB7XHJcbiAgY29uc3QgdHlwZVNwYWNlcyA9IHR5cGUucmVwbGFjZSgnLScsICcgJyk7XHJcbiAgcmV0dXJuIHRpdGxlQ2FzZSh0eXBlU3BhY2VzKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBQUklTTUlDX1NFVFRJTkdTID0ge1xyXG4gIE5VTV9QRVJfUEFHRTogMVxyXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLy4uL2NvbW1vbi9wcmlzbWljLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UtZnVuY3Rpb25zXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZmlyZWJhc2UtZnVuY3Rpb25zXCJcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJpc21pYy1kb21cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJwcmlzbWljLWRvbVwiXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBcImJhYmVsLXBvbHlmaWxsXCI7XG5pbXBvcnQge3NpdGVNYXB9IGZyb20gXCIuL3NpdGVtYXBcIjtcbmltcG9ydCB7c2VvUHJlcH0gZnJvbSBcIi4vc2VvUHJlcFwiO1xuXG5leHBvcnRzLnNlb1ByZXAgPSBzZW9QcmVwO1xuXG5leHBvcnRzLnNpdGVNYXAgPSBzaXRlTWFwO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmFiZWwtcG9seWZpbGxcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJiYWJlbC1wb2x5ZmlsbFwiXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCAqIGFzIGZ1bmN0aW9ucyBmcm9tIFwiZmlyZWJhc2UtZnVuY3Rpb25zXCI7XG5pbXBvcnQgKiBhcyBzbSBmcm9tIFwic2l0ZW1hcFwiO1xuaW1wb3J0IHtnZXRBcGksIGxpbmtSZXNvbHZlcn0gZnJvbSBcIi4uLy4uL2NvbW1vbi9wcmlzbWljXCI7XG5cbmNvbnN0IGZldGNoQWxsUGFnZXMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHBhZ2VTaXplID0gNTA7XG4gIGNvbnN0IGFwaSA9IGF3YWl0IGdldEFwaSgpO1xuICBsZXQgYWxsUmVzdWx0cyA9IFtdO1xuICBjb25zdCBpbml0aWFsID0gYXdhaXQgYXBpLnF1ZXJ5KFtdLCB7cGFnZVNpemU6IHBhZ2VTaXplLCBwYWdlOiAxfSk7XG4gIGFsbFJlc3VsdHMgPSBbLi4uYWxsUmVzdWx0cywgLi4uaW5pdGlhbC5yZXN1bHRzXTtcbiAgZm9yIChsZXQgY3VycmVudFBhZ2UgPSAyOyBjdXJyZW50UGFnZSA8PSBpbml0aWFsLnRvdGFsX3BhZ2VzOyBjdXJyZW50UGFnZSsrKSB7XG4gICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgYXBpLnF1ZXJ5KFtdLCB7cGFnZVNpemU6IHBhZ2VTaXplLCBwYWdlOiBjdXJyZW50UGFnZX0pO1xuICAgIGFsbFJlc3VsdHMgPSBbLi4uYWxsUmVzdWx0cywgLi4ucmVzcG9uc2UucmVzdWx0c107XG4gIH1cbiAgcmV0dXJuIGFsbFJlc3VsdHM7XG59O1xuXG5jb25zdCBnZXRVUkxzRnJvbVBhZ2VzID0gKHBhZ2VzKSA9PiB7XG4gIGxldCB1cmxzID0gW107XG4gIHBhZ2VzLm1hcCgoZG9jdW1lbnQpID0+IHtcbiAgICB1cmxzLnB1c2goe1xuICAgICAgdXJsOiBsaW5rUmVzb2x2ZXIoZG9jdW1lbnQpXG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gdXJscztcbn07XG5cbmV4cG9ydCBjb25zdCBzaXRlTWFwID0gZnVuY3Rpb25zLmh0dHBzLm9uUmVxdWVzdChhc3luYyAocmVxLCByZXMpID0+IHtcbiAgY29uc3QgcGFnZXMgPSBhd2FpdCBmZXRjaEFsbFBhZ2VzKCk7XG5cbiAgY29uc3Qgc2l0ZW1hcCA9IHNtLmNyZWF0ZVNpdGVtYXAoe1xuICAgIGhvc3RuYW1lOiBgJHtyZXEucHJvdG9jb2x9Oi8vJHtyZXEuaG9zdG5hbWV9YCxcbiAgICBjYWNoZVRpbWU6IDYwMDAwMCxcbiAgICB1cmxzOiBnZXRVUkxzRnJvbVBhZ2VzKHBhZ2VzKVxuICB9KTtcblxuICBzaXRlbWFwLnRvWE1MKGZ1bmN0aW9uIChlcnIsIHhtbCkge1xuICAgIGlmIChlcnIpIHtcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuZW5kKCk7XG4gICAgfVxuICAgIHJlcy5oZWFkZXIoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi94bWwnKTtcbiAgICByZXMuc2V0KCdDYWNoZS1Db250cm9sJywgJ3B1YmxpYywgbWF4LWFnZT0zMDAsIHMtbWF4YWdlPTYwMCcpO1xuICAgIHJlcy5zZW5kKHhtbCk7XG4gIH0pO1xufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NpdGVtYXAuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzaXRlbWFwXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwic2l0ZW1hcFwiXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByaXNtaWMtamF2YXNjcmlwdFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInByaXNtaWMtamF2YXNjcmlwdFwiXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7Z2V0Q29udGVudH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9wcmlzbWljXCI7XG5pbXBvcnQge2dldFR5cGVDb250ZW50LCBnZXRUeXBlUGFnZSwgZ2V0VHlwZVJvb3R9IGZyb20gXCIuLi9zZWxlY3RvcnMvY29udGVudFwiO1xuZXhwb3J0IGNvbnN0IENPTlRFTlRfTE9BREVEID0gXCJDT05URU5UX0xPQURFRFwiO1xuZXhwb3J0IGNvbnN0IENPTlRFTlRfRkVUQ0hJTkcgPSBcIkNPTlRFTlRfRkVUQ0hJTkdcIjtcbmV4cG9ydCBjb25zdCBDT05URU5UX1NFVF9QQUdFID0gXCJDT05URU5UX1NFVF9QQUdFXCI7XG5cbi8qKlxuICogU2V0IHRoZSBjb250ZW50IGZldGNoaW5nIHN0YXR1cyB0byB0cnVlLlxuICogQHJldHVybnMge3t0eXBlOiBzdHJpbmd9fVxuICovXG5leHBvcnQgY29uc3QgY29udGVudEZldGNoaW5nID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IENPTlRFTlRfRkVUQ0hJTkdcbiAgfVxufTtcblxuLyoqXG4gKiBEaXNwYXRjaGVkIHVwb24gY29tcGxldGlvbiBvZiBjb250ZW50IGxvYWQuXG4gKiBAcGFyYW0gY29udGVudFxuICogQHBhcmFtIHR5cGVcbiAqIEBwYXJhbSB1aWRcbiAqIEByZXR1cm5zIHt7dHlwZTogc3RyaW5nLCBwYXlsb2FkOiB7Y29udGVudDogKiwgdHlwZTogKiwgdWlkOiAqfX19XG4gKi9cbmV4cG9ydCBjb25zdCBjb250ZW50TG9hZGVkID0gKGNvbnRlbnQsIHR5cGUsIHVpZCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IENPTlRFTlRfTE9BREVELFxuICAgIHBheWxvYWQ6IHtcbiAgICAgIGNvbnRlbnQsXG4gICAgICB0eXBlLFxuICAgICAgdWlkLFxuICAgIH1cbiAgfTtcbn07XG5cbi8qKlxuICogU2V0IHRoZSBjdXJyZW50bHkgbG9hZGVkIG51bWJlciBvZiBwYWdlcyBmb3IgYSBnaXZlbiB0eXBlLlxuICogQHBhcmFtIHR5cGVcbiAqIEBwYXJhbSBwYWdlXG4gKiBAcmV0dXJucyB7e3R5cGU6IHN0cmluZywgcGF5bG9hZDoge3R5cGU6ICosIHBhZ2U6ICp9fX1cbiAqL1xuZXhwb3J0IGNvbnN0IGNvbnRlbnRUeXBlU2V0UGFnZSA9ICh0eXBlLCBwYWdlKSA9PiB7XG4gIGNvbnNvbGUud2FybihgU2V0dGluZyBwYWdlIGZvciAke3R5cGV9IHRvICR7cGFnZX1gKTtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBDT05URU5UX1NFVF9QQUdFLFxuICAgIHBheWxvYWQ6IHtcbiAgICAgIHR5cGUsXG4gICAgICBwYWdlLFxuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBMb2FkIHRoZSBuZXh0IHBhZ2Ugb2YgY29udGVudCBmb3IgYSBnaXZlbiB0eXBlLlxuICogQHBhcmFtIHR5cGVcbiAqIEByZXR1cm5zIHtmdW5jdGlvbigqLCAqKX1cbiAqL1xuZXhwb3J0IGNvbnN0IGxvYWRNb3JlQ29udGVudCA9ICh0eXBlKSA9PiB7XG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gICAgY29uc3QgbnVtYmVyID0gZ2V0VHlwZVBhZ2UoZ2V0U3RhdGUoKSwgdHlwZSkgfHwgMTtcbiAgICBkaXNwYXRjaChjb250ZW50RmV0Y2hpbmcoKSk7XG4gICAgbGV0IGNvbnRlbnQgPSBhd2FpdCBnZXRDb250ZW50KHR5cGUsIG51bGwsIG51bWJlcisxKTtcbiAgICBpZighY29udGVudC5sZW5ndGggfHwgY29udGVudC5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZGlzcGF0Y2goY29udGVudFR5cGVTZXRQYWdlKHR5cGUsIG51bWJlcisxKSk7XG4gICAgY29udGVudC5tYXAoKHBhZ2UpID0+IHtcbiAgICAgIGRpc3BhdGNoKGNvbnRlbnRMb2FkZWQocGFnZSwgcGFnZS50eXBlLCBwYWdlLnVpZCkpO1xuICAgIH0pO1xuICAgIHJldHVybiBnZXRUeXBlQ29udGVudChnZXRTdGF0ZSgpLCB0eXBlKTtcbiAgfTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vLi4vc3JjL2FjdGlvbnMvY29udGVudC5qcyIsIi8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzMxNDk1MjM5L3RpdGxlLWNhc2UtYS1zZW50ZW5jZVxuZXhwb3J0IGNvbnN0IHRpdGxlQ2FzZSA9IChzdHIpID0+IHtcbiAgbGV0IG5ld3N0ciA9IHN0ci5zcGxpdChcIiBcIik7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbmV3c3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKG5ld3N0cltpXSA9PT0gXCJcIikgY29udGludWU7XG4gICAgbGV0IGNvcHkgPSBuZXdzdHJbaV0uc3Vic3RyaW5nKDEpLnRvTG93ZXJDYXNlKCk7XG4gICAgbmV3c3RyW2ldID0gbmV3c3RyW2ldWzBdLnRvVXBwZXJDYXNlKCkgKyBjb3B5O1xuICB9XG4gIG5ld3N0ciA9IG5ld3N0ci5qb2luKFwiIFwiKTtcbiAgcmV0dXJuIG5ld3N0cjtcbn07XG5cbi8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzY3OTkxNS9ob3ctZG8taS10ZXN0LWZvci1hbi1lbXB0eS1qYXZhc2NyaXB0LW9iamVjdFxuZXhwb3J0IGNvbnN0IGlzRW1wdHlPYmplY3QgPSAob2JqKSA9PiB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhvYmopLmxlbmd0aCA9PT0gMCAmJiBvYmouY29uc3RydWN0b3IgPT09IE9iamVjdDtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vLi4vY29tbW9uL3V0aWxzLmpzIiwiaW1wb3J0ICogYXMgZnVuY3Rpb25zIGZyb20gXCJmaXJlYmFzZS1mdW5jdGlvbnNcIjtcbmltcG9ydCBleHByZXNzIGZyb20gXCJleHByZXNzXCI7XG5pbXBvcnQgY29va2llUGFyc2VyIGZyb20gXCJjb29raWUtcGFyc2VyXCI7XG5pbXBvcnQgYm9keVBhcnNlciBmcm9tIFwiYm9keS1wYXJzZXJcIjtcbmltcG9ydCB7Z2V0Q29udGVudCwgZ2V0Rm9ybWF0LCBDT05URU5UX0ZPUk1BVFN9IGZyb20gXCIuLi8uLi9jb21tb24vcHJpc21pY1wiO1xuaW1wb3J0ICogYXMgcHVnIGZyb20gXCJwdWdcIjtcbmNvbnN0IGNvcnMgPSByZXF1aXJlKCdjb3JzJykoe29yaWdpbjogdHJ1ZX0pO1xuaW1wb3J0ICogYXMgUHJpc21pYyBmcm9tIFwicHJpc21pYy1kb21cIjtcbmltcG9ydCB7YnVpbGRTRU9EYXRhfSBmcm9tIFwiLi9zZW8vaW5kZXhcIjtcblxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuXG5hcHAudXNlKGNvcnMpO1xuYXBwLnVzZShjb29raWVQYXJzZXIoKSk7XG5hcHAudXNlKGJvZHlQYXJzZXIuanNvbigpKTtcblxuY29uc3QgYnVpbGRTdGF0ZSA9IChzZXR0aW5ncywgY29udGVudCwgdHlwZSkgPT4ge1xuICBsZXQgc3RhdGUgPSB7XG4gICAgY29udGVudDoge1xuICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgY29udGVudDogc2V0dGluZ3NcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgaWYoZ2V0Rm9ybWF0KGNvbnRlbnQpID09PSBDT05URU5UX0ZPUk1BVFMuTElTVCl7XG4gICAgc3RhdGUuY29udGVudFt0eXBlXSA9IHtjb250ZW50OiB7fX07XG4gICAgY29udGVudC5tYXAoKHBhZ2UpID0+IHtcbiAgICAgIHN0YXRlLmNvbnRlbnRbdHlwZV0uY29udGVudFtwYWdlLnVpZF0gPSBwYWdlO1xuICAgIH0pO1xuICB9XG4gIGVsc2UgaWYoZ2V0Rm9ybWF0KGNvbnRlbnQpID09PSBDT05URU5UX0ZPUk1BVFMuU0lOR0xFKXtcbiAgICBzdGF0ZS5jb250ZW50W2NvbnRlbnQudHlwZV0gPSBjb250ZW50O1xuICB9XG4gIGVsc2Uge1xuICAgIHN0YXRlLmNvbnRlbnRbY29udGVudC50eXBlXSA9IHtcbiAgICAgIFtjb250ZW50LnVpZF06IGNvbnRlbnRcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGU7XG59O1xuXG5jb25zdCBoYW5kbGVyID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIGNvbnN0IHt0eXBlLCB1aWR9ID0gcmVxLnBhcmFtcztcblxuICBjb25zdCByZW5kZXJJbmRleCA9IHB1Zy5jb21waWxlRmlsZSgnLi9zcmMvaW5kZXgucHVnJyk7XG4gIGNvbnN0IHJlbmRlcjQwNCA9IHB1Zy5jb21waWxlRmlsZSgnLi9zcmMvNDA0LnB1ZycpO1xuXG4gIGNvbnN0IHNldHRpbmdzID0gYXdhaXQgZ2V0Q29udGVudCgnc2V0dGluZ3MnKTtcbiAgY29uc3QgY29udGVudCA9IGF3YWl0IGdldENvbnRlbnQodHlwZSwgdWlkKTtcblxuICBpZighY29udGVudCl7XG4gICAgcmVzLnN0YXR1cyg0MDQpO1xuICAgIHJlcy5zZXQoJ0NvbnRlbnQtVHlwZScsICd0ZXh0L2h0bWwnKTtcbiAgICByZXMuc2VuZChyZW5kZXI0MDQoKSk7XG4gIH1cblxuICBjb25zdCBjb250ZXh0ID0ge1xuICAgIGRhdGE6IGJ1aWxkU0VPRGF0YShjb250ZW50LCBzZXR0aW5ncywgdHlwZSwgdWlkKSxcbiAgICBzdGF0ZTogSlNPTi5zdHJpbmdpZnkoYnVpbGRTdGF0ZShzZXR0aW5ncywgY29udGVudCwgdHlwZSkpLFxuICAgIFByaXNtaWM6IFByaXNtaWMsXG4gIH07XG5cbiAgcmVzLnNldCgnQ29udGVudC1UeXBlJywgJ3RleHQvaHRtbCcpO1xuICByZXMuc2V0KCdDYWNoZS1Db250cm9sJywgJ3B1YmxpYywgbWF4LWFnZT0zMDAsIHMtbWF4YWdlPTYwMCcpO1xuICByZXMuc2VuZChyZW5kZXJJbmRleChjb250ZXh0KSk7XG59O1xuXG5hcHAuZ2V0KCcvOnR5cGUvOnVpZCcsIGhhbmRsZXIpO1xuYXBwLmdldCgnLzp0eXBlJywgaGFuZGxlcik7XG5hcHAuZ2V0KCcvJywgaGFuZGxlcik7XG5cbmV4cG9ydCBjb25zdCBzZW9QcmVwID0gZnVuY3Rpb25zLmh0dHBzLm9uUmVxdWVzdChhcHApO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZW9QcmVwLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImV4cHJlc3NcIlxuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29va2llLXBhcnNlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvb2tpZS1wYXJzZXJcIlxuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYm9keS1wYXJzZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJib2R5LXBhcnNlclwiXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwdWdcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJwdWdcIlxuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0ICogYXMgU0VPQmFzaWNzIGZyb20gXCIuL2Jhc2ljXCI7XG5cbmV4cG9ydCBjb25zdCBidWlsZFNFT0RhdGEgPSAoY29udGVudCwgc2V0dGluZ3MsIHR5cGUsIHVpZCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHRpdGxlOiBTRU9CYXNpY3MuZ2V0VGl0bGUoY29udGVudCwgc2V0dGluZ3MsIHR5cGUpLFxuICAgIHNpbXBsZVRpdGxlOiBTRU9CYXNpY3MuZ2V0U2ltcGxlVGl0bGUoY29udGVudCwgdHlwZSksXG4gICAgZmVhdHVyZWRJbWFnZTogU0VPQmFzaWNzLmdldEltYWdlKGNvbnRlbnQpLFxuICB9O1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2VvL2luZGV4LmpzIiwiaW1wb3J0ICogYXMgUHJpc21pY0RPTSBmcm9tIFwicHJpc21pYy1kb21cIjtcbmltcG9ydCAqIGFzIFByaXNtaWNVdGlscyBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL3ByaXNtaWNcIjtcblxuZXhwb3J0IGNvbnN0IGdldFRpdGxlID0gKGNvbnRlbnQsIHNldHRpbmdzLCB0eXBlKSA9PiB7XG4gIGNvbnN0IHNldHRpbmdzRGF0YSA9IHNldHRpbmdzLmRhdGE7XG4gIGNvbnN0IHR5cGVUaXRsZSA9IHR5cGUgPyBQcmlzbWljVXRpbHMuZ2V0VHlwZVRpdGxlKHR5cGUpIDogJyc7XG4gIGlmIChQcmlzbWljVXRpbHMuZ2V0Rm9ybWF0KGNvbnRlbnQpID09PSBQcmlzbWljVXRpbHMuQ09OVEVOVF9GT1JNQVRTLkxJU1QpIHtcbiAgICByZXR1cm4gYCR7dHlwZVRpdGxlfSBJbmRleCB8ICR7c2V0dGluZ3NEYXRhLnNpdGVfdGl0bGV9YDtcbiAgfVxuICBlbHNlIHtcbiAgICBjb25zdCBkYXRhID0gY29udGVudC5kYXRhO1xuICAgIHJldHVybiBgJHtkYXRhLnRpdGxlICYmIGAke1ByaXNtaWNET00uUmljaFRleHQuYXNUZXh0KGRhdGEudGl0bGUpfSB8ICR7dHlwZVRpdGxlfSB8IGB9JHtzZXR0aW5nc0RhdGEuc2l0ZV90aXRsZX1gXG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTaW1wbGVUaXRsZSA9IChjb250ZW50LCB0eXBlKSA9PiB7XG4gIGlmKFByaXNtaWNVdGlscy5nZXRGb3JtYXQoY29udGVudCkgPT09IFByaXNtaWNVdGlscy5DT05URU5UX0ZPUk1BVFMuTElTVCl7XG4gICAgcmV0dXJuIFByaXNtaWNVdGlscy5nZXRUeXBlVGl0bGUodHlwZSk7XG4gIH1cbiAgZWxzZSB7XG4gICAgcmV0dXJuIGNvbnRlbnQuZGF0YS50aXRsZSA/IFByaXNtaWNET00uUmljaFRleHQuYXNUZXh0KGNvbnRlbnQuZGF0YS50aXRsZSkgOiBudWxsO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0SW1hZ2UgPSAoY29udGVudCkgPT4ge1xuICBpZihQcmlzbWljVXRpbHMuZ2V0Rm9ybWF0KGNvbnRlbnQpID09PSBQcmlzbWljVXRpbHMuQ09OVEVOVF9GT1JNQVRTLkxJU1Qpe1xuICAgIGNvbnRlbnQgPSBjb250ZW50WzBdO1xuICB9XG4gIGNvbnN0IGRhdGEgPSBjb250ZW50LmRhdGE7XG4gIGNvbnN0IGhhc0ZlYXR1cmVkSW1hZ2VGaWVsZCA9ICEhZGF0YS5mZWF0dXJlZF9pbWFnZTtcbiAgY29uc3QgaGFzRmVhdHVyZWRJbWFnZSA9IGhhc0ZlYXR1cmVkSW1hZ2VGaWVsZCAmJiAhIWRhdGEuZmVhdHVyZWRfaW1hZ2UudXJsO1xuICByZXR1cm4gaGFzRmVhdHVyZWRJbWFnZSAmJiBkYXRhLmZlYXR1cmVkX2ltYWdlLnVybDtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Nlby9iYXNpYy5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcnNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JzXCJcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7aXNFbXB0eU9iamVjdH0gZnJvbSBcIi4uLy4uL2NvbW1vbi91dGlsc1wiO1xuaW1wb3J0IHtDT05URU5UX0ZPUk1BVFN9IGZyb20gXCIuLi8uLi9jb21tb24vcHJpc21pY1wiO1xuXG4vKipcbiAqIEdldCB0aGUgcm9vdCBmb3IgYSB0eXBlLlxuICogQHBhcmFtIHN0YXRlXG4gKiBAcGFyYW0gdHlwZVxuICovXG5leHBvcnQgY29uc3QgZ2V0VHlwZVJvb3QgPSAoc3RhdGUsIHR5cGUpID0+IHtcbiAgY29uc3QgY29udGVudCA9IHN0YXRlLmNvbnRlbnQ7XG4gIHJldHVybiBjb250ZW50W3R5cGVdO1xufTtcblxuLyoqXG4gKiBHZXQgdGhlIHJhdyBjb250ZW50IGZvciBhIHR5cGUuXG4gKiBAcGFyYW0gc3RhdGVcbiAqIEBwYXJhbSB0eXBlXG4gKiBAcmV0dXJucyB7bnVsbH1cbiAqL1xuZXhwb3J0IGNvbnN0IGdldFR5cGVDb250ZW50ID0gKHN0YXRlLCB0eXBlKSA9PiB7XG4gIGNvbnN0IHJvb3QgPSBnZXRUeXBlUm9vdChzdGF0ZSwgdHlwZSk7XG4gIGlmICghcm9vdCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHJldHVybiByb290LmNvbnRlbnQ7XG59O1xuXG4vKipcbiAqIEdldCB0aGUgY29udGVudCBmb3IgYSBnaXZlbiB0eXBlIChvcHRpb25hbCBVSUQpIGZvcm1hdHRlZCBhcHByb3ByaWF0ZWx5LlxuICogQHBhcmFtIHN0YXRlXG4gKiBAcGFyYW0gdHlwZVxuICogQHBhcmFtIHVpZFxuICogQHJldHVybnMgeyp9XG4gKi9cbmV4cG9ydCBjb25zdCBnZXRGb3JtYXR0ZWRDb250ZW50ID0gKHN0YXRlLCB0eXBlLCB1aWQpID0+IHtcbiAgY29uc3QgYmFzZUNvbnRlbnQgPSBnZXRUeXBlQ29udGVudChzdGF0ZSwgdHlwZSk7XG4gIGlmKCFiYXNlQ29udGVudCl7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgaWYgKHVpZCkge1xuICAgIHJldHVybiBnZXRUeXBlQnlVSUQoKVxuICB9XG4gIGVsc2Uge1xuICAgIHJldHVybiAoZ2V0VHlwZUZvcm1hdChzdGF0ZSwgdHlwZSkgPT09IENPTlRFTlRfRk9STUFUUy5SRVBFQVRBQkxFKSA/XG4gICAgICBnZXRPcmRlcmVkQ29udGVudChzdGF0ZSwgdHlwZSkgOlxuICAgICAgZ2V0VHlwZUNvbnRlbnQoc3RhdGUsIHR5cGUpXG4gIH1cbn07XG5cbi8qKlxuICogR2V0IGEgcGFnZSBieSB0eXBlIGFuZCB1aWQuXG4gKiBAcGFyYW0gc3RhdGVcbiAqIEBwYXJhbSB0eXBlXG4gKiBAcGFyYW0gdWlkXG4gKiBAcmV0dXJucyB7bnVsbH1cbiAqL1xuZXhwb3J0IGNvbnN0IGdldFR5cGVCeVVJRCA9IChzdGF0ZSwgdHlwZSwgdWlkKSA9PiB7XG4gIGNvbnN0IGNvbnRlbnQgPSBnZXRUeXBlQ29udGVudChzdGF0ZSwgdHlwZSk7XG4gIGlmICghY29udGVudCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGlmIChjb250ZW50W3VpZF0pIHtcbiAgICByZXR1cm4gY29udGVudFt1aWRdO1xuICB9XG4gIGVsc2Uge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59O1xuXG4vKipcbiAqIEdldCB0aGUgY3VycmVudCBsb2FkZWQgcGFnZS5cbiAqIEBwYXJhbSBzdGF0ZVxuICogQHBhcmFtIHR5cGVcbiAqIEByZXR1cm5zIHtudWxsfVxuICovXG5leHBvcnQgY29uc3QgZ2V0VHlwZVBhZ2UgPSAoc3RhdGUsIHR5cGUpID0+IHtcbiAgY29uc3Qgcm9vdCA9IGdldFR5cGVSb290KHN0YXRlLCB0eXBlKTtcbiAgaWYgKHJvb3QucGFnZSkge1xuICAgIHJldHVybiByb290LnBhZ2U7XG4gIH1cbiAgZWxzZSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn07XG5cbi8qKlxuICogRm9yIHJlcGVhdGFibGUgdHlwZXMsIGdldCBjb250ZW50IGluIG9yZGVyLlxuICogQHBhcmFtIHN0YXRlXG4gKiBAcGFyYW0gdHlwZVxuICogQHBhcmFtIHByZWRpY2F0ZVxuICogQHBhcmFtIG9yZGVyXG4gKiBAcmV0dXJucyB7QXJyYXkuPCo+fVxuICovXG5leHBvcnQgY29uc3QgZ2V0T3JkZXJlZENvbnRlbnQgPSAoc3RhdGUsIHR5cGUsIHByZWRpY2F0ZSwgb3JkZXIpID0+IHtcbiAgaWYgKCFwcmVkaWNhdGUpIHtcbiAgICBwcmVkaWNhdGUgPSAocGFnZSkgPT4ge1xuICAgICAgcmV0dXJuIHBhZ2UuZmlyc3RfcHVibGljYXRpb25fZGF0ZTtcbiAgICB9O1xuICB9XG4gIGlmICghb3JkZXIpIHtcbiAgICBvcmRlciA9ICdERVNDJztcbiAgfVxuICBjb25zdCBjb250ZW50ID0gZ2V0VHlwZUNvbnRlbnQoc3RhdGUsIHR5cGUpO1xuICBjb25zdCBjb250ZW50QXJyYXkgPSBPYmplY3Qua2V5cyhjb250ZW50KS5tYXAoKHBhZ2UpID0+IGNvbnRlbnRbcGFnZV0pO1xuICByZXR1cm4gY29udGVudEFycmF5LnNvcnQoKHBhZ2VBLCBwYWdlQikgPT4ge1xuICAgIGlmIChvcmRlciA9PT0gJ0FTQycpIHtcbiAgICAgIHJldHVybiBwcmVkaWNhdGUocGFnZUEpID4gcHJlZGljYXRlKHBhZ2VCKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gcHJlZGljYXRlKHBhZ2VBKSA8IHByZWRpY2F0ZShwYWdlQik7XG4gICAgfVxuICB9KTtcbn07XG5cbi8qKlxuICogR2V0IHRoZSBmb3JtYXQgb2YgdGhlIHR5cGUgYmFzZWQgb24gbG9hZGVkIGNvbnRlbnQuXG4gKiBAcGFyYW0gc3RhdGVcbiAqIEBwYXJhbSB0eXBlXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuZXhwb3J0IGNvbnN0IGdldFR5cGVGb3JtYXQgPSAoc3RhdGUsIHR5cGUpID0+IHtcbiAgY29uc3QgY29udGVudCA9IGdldFR5cGVDb250ZW50KHN0YXRlLCB0eXBlKTtcbiAgaWYgKCFjb250ZW50IHx8IGlzRW1wdHlPYmplY3QoY29udGVudCkpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBpZihjb250ZW50LmlkKXtcbiAgICByZXR1cm4gQ09OVEVOVF9GT1JNQVRTLlNJTkdMRTtcbiAgfVxuICBlbHNlIHtcbiAgICByZXR1cm4gQ09OVEVOVF9GT1JNQVRTLlJFUEVBVEFCTEU7XG4gIH1cbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vLi4vc3JjL3NlbGVjdG9ycy9jb250ZW50LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==
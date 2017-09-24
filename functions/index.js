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
exports.getTypeOptions = exports.PRISMIC_SETTINGS = exports.getTypeTitle = exports.getFormat = exports.getContent = exports.loadSettings = exports.linkResolver = exports.getApi = exports.apiEndpoint = exports.CONTENT_FORMATS = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _prismicJavascript = __webpack_require__(7);

var _prismicJavascript2 = _interopRequireDefault(_prismicJavascript);

var _content = __webpack_require__(8);

var _utils = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * The formats of the content that can be returned from a getContent call.
 * @type {{LIST: string, SINGLE: string, REPEATABLE: string}}
 */
var CONTENT_FORMATS = exports.CONTENT_FORMATS = {
  LIST: 'LIST',
  SINGLE: 'SINGLE',
  REPEATABLE: 'REPEATABLE'
};

/**
 * Endpoint for your Prismic project.
 * @type {string}
 */
var apiEndpoint = exports.apiEndpoint = "https://raphaeltm.prismic.io/api/v2";

/**
 * Get the Prismic API.
 * @returns {Promise.<*>}
 */
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

/**
 * Link resolver takes a page and returns the appropriate url.
 * @param doc
 * @returns {*}
 */
var linkResolver = exports.linkResolver = function linkResolver(doc) {
  if (doc.type === "homepage") {
    return '/';
  }
  return "/" + doc.type + "/" + (doc.uid || '');
};

/**
 * Load the settings page into store.
 * @param store
 * @returns {Promise.<void>}
 */
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

            store.dispatch((0, _content.contentLoaded)(settings, 'settings', null));

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

/**
 * Get content from Prismic given a type, a uid (or not), and a page (or not).
 * If a UID is provided, or the type is Single, this will return the identified page.
 * If the type is repeatable and there is no UID, an array will be returned.
 * @param type
 * @param uid
 * @param page
 * @returns {Promise.<*>}
 */
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
            options = getTypeOptions(type);

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

/**
 * Returns the format of the content returned from a getContent call.
 * @param content
 * @returns {*}
 */
var getFormat = exports.getFormat = function getFormat(content) {
  if (typeof content.length !== 'undefined') {
    return CONTENT_FORMATS.LIST;
  } else if (content.uid) {
    return CONTENT_FORMATS.REPEATABLE;
  } else {
    return CONTENT_FORMATS.SINGLE;
  }
};

/**
 * Returns the type's API ID, titlecased and with hyphens replaced with spaces.
 * @param type
 */
var getTypeTitle = exports.getTypeTitle = function getTypeTitle(type) {
  var typeSpaces = type.replace('-', ' ');
  return (0, _utils.titleCase)(typeSpaces);
};

/**
 * Configure prismic settings here.
 */
var PRISMIC_SETTINGS = exports.PRISMIC_SETTINGS = {
  GLOBAL: {
    pageSize: 25,
    orderings: [{
      on: 'document',
      field: 'first_publication_date',
      order: 'desc'
    }],
    lang: null
  },
  TYPES: {
    blog: {
      pageSize: 2
    }
  }
};

var generateOrderingText = function generateOrderingText(obj) {
  var last = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  return obj.on + "." + obj.field + " " + obj.order + (last ? '' : ',');
};

var getTypeOptions = exports.getTypeOptions = function getTypeOptions(type) {
  var raw = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var settings = _extends({}, PRISMIC_SETTINGS.GLOBAL, PRISMIC_SETTINGS.TYPES[type] || {});
  if (raw) {
    return settings;
  }
  var final = {
    pageSize: settings.pageSize,
    orderings: "[" + settings.orderings.map(function (ordering, index) {
      return generateOrderingText(ordering, index + 1 === settings.orderings.length);
    }) + "]",
    lang: settings.lang
  };
  console.log(final);
  return final;
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

              if (!(!content || !content.length)) {
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
exports.getTypeFormat = exports.getContentOrderedForType = exports.getOrderedContent = exports.getTypePage = exports.getTypeByUID = exports.getFormattedContent = exports.getTypeContent = exports.getTypeRoot = undefined;

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
    return getTypeByUID(state, type, uid);
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
 * @param filter
 * @param order
 * @returns {Array.<*>}
 */
var getOrderedContent = exports.getOrderedContent = function getOrderedContent(state, type, filter, order) {
  if (!filter) {
    filter = function filter(page) {
      return page.first_publication_date;
    };
  }
  if (!order) {
    order = 'desc';
  }
  var content = getTypeContent(state, type);
  var contentArray = Object.keys(content).map(function (page) {
    return content[page];
  });
  return contentArray.sort(function (pageA, pageB) {
    if (order === 'asc') {
      return filter(pageA) > filter(pageB);
    } else {
      return filter(pageA) < filter(pageB);
    }
  });
};

var getContentOrderedForType = exports.getContentOrderedForType = function getContentOrderedForType(state, type) {
  var opts = (0, _prismic.getTypeOptions)(type, true);
  var filter = function filter(page) {
    // let dataQuery =
  };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOTAxZjYwZjQxYjYxYzYxYzVjNDkiLCJ3ZWJwYWNrOi8vLy4vLi4vY29tbW9uL3ByaXNtaWMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlyZWJhc2UtZnVuY3Rpb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJpc21pYy1kb21cIiIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYmFiZWwtcG9seWZpbGxcIiIsIndlYnBhY2s6Ly8vLi9zcmMvc2l0ZW1hcC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzaXRlbWFwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJpc21pYy1qYXZhc2NyaXB0XCIiLCJ3ZWJwYWNrOi8vLy4vLi4vc3JjL2FjdGlvbnMvY29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi8uLi9jb21tb24vdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nlb1ByZXAuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvb2tpZS1wYXJzZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJib2R5LXBhcnNlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInB1Z1wiIiwid2VicGFjazovLy8uL3NyYy9zZW8vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nlby9iYXNpYy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JzXCIiLCJ3ZWJwYWNrOi8vLy4vLi4vc3JjL3NlbGVjdG9ycy9jb250ZW50LmpzIl0sIm5hbWVzIjpbIkNPTlRFTlRfRk9STUFUUyIsIkxJU1QiLCJTSU5HTEUiLCJSRVBFQVRBQkxFIiwiYXBpRW5kcG9pbnQiLCJnZXRBcGkiLCJsaW5rUmVzb2x2ZXIiLCJkb2MiLCJ0eXBlIiwidWlkIiwibG9hZFNldHRpbmdzIiwic3RvcmUiLCJnZXRDb250ZW50Iiwic2V0dGluZ3MiLCJkaXNwYXRjaCIsInBhZ2UiLCJhcGkiLCJnZXRCeVVJRCIsIm9wdGlvbnMiLCJnZXRUeXBlT3B0aW9ucyIsInF1ZXJ5IiwiUHJlZGljYXRlcyIsImF0IiwicmVzcG9uc2UiLCJyZXN1bHRzIiwibGVuZ3RoIiwiZ2V0Rm9ybWF0IiwiY29udGVudCIsImdldFR5cGVUaXRsZSIsInR5cGVTcGFjZXMiLCJyZXBsYWNlIiwiUFJJU01JQ19TRVRUSU5HUyIsIkdMT0JBTCIsInBhZ2VTaXplIiwib3JkZXJpbmdzIiwib24iLCJmaWVsZCIsIm9yZGVyIiwibGFuZyIsIlRZUEVTIiwiYmxvZyIsImdlbmVyYXRlT3JkZXJpbmdUZXh0Iiwib2JqIiwibGFzdCIsInJhdyIsImZpbmFsIiwibWFwIiwib3JkZXJpbmciLCJpbmRleCIsImNvbnNvbGUiLCJsb2ciLCJleHBvcnRzIiwic2VvUHJlcCIsInNpdGVNYXAiLCJmdW5jdGlvbnMiLCJzbSIsImZldGNoQWxsUGFnZXMiLCJhbGxSZXN1bHRzIiwiaW5pdGlhbCIsImN1cnJlbnRQYWdlIiwidG90YWxfcGFnZXMiLCJnZXRVUkxzRnJvbVBhZ2VzIiwicGFnZXMiLCJ1cmxzIiwiZG9jdW1lbnQiLCJwdXNoIiwidXJsIiwiaHR0cHMiLCJvblJlcXVlc3QiLCJyZXEiLCJyZXMiLCJzaXRlbWFwIiwiY3JlYXRlU2l0ZW1hcCIsImhvc3RuYW1lIiwicHJvdG9jb2wiLCJjYWNoZVRpbWUiLCJ0b1hNTCIsImVyciIsInhtbCIsInN0YXR1cyIsImVuZCIsImhlYWRlciIsInNldCIsInNlbmQiLCJDT05URU5UX0xPQURFRCIsIkNPTlRFTlRfRkVUQ0hJTkciLCJDT05URU5UX1NFVF9QQUdFIiwiY29udGVudEZldGNoaW5nIiwiY29udGVudExvYWRlZCIsInBheWxvYWQiLCJjb250ZW50VHlwZVNldFBhZ2UiLCJ3YXJuIiwibG9hZE1vcmVDb250ZW50IiwiZ2V0U3RhdGUiLCJudW1iZXIiLCJ0aXRsZUNhc2UiLCJzdHIiLCJuZXdzdHIiLCJzcGxpdCIsImkiLCJjb3B5Iiwic3Vic3RyaW5nIiwidG9Mb3dlckNhc2UiLCJ0b1VwcGVyQ2FzZSIsImpvaW4iLCJpc0VtcHR5T2JqZWN0IiwiT2JqZWN0Iiwia2V5cyIsImNvbnN0cnVjdG9yIiwicHVnIiwiUHJpc21pYyIsImNvcnMiLCJyZXF1aXJlIiwib3JpZ2luIiwiYXBwIiwidXNlIiwianNvbiIsImJ1aWxkU3RhdGUiLCJzdGF0ZSIsImhhbmRsZXIiLCJwYXJhbXMiLCJyZW5kZXJJbmRleCIsImNvbXBpbGVGaWxlIiwicmVuZGVyNDA0IiwiY29udGV4dCIsImRhdGEiLCJKU09OIiwic3RyaW5naWZ5IiwiZ2V0IiwiU0VPQmFzaWNzIiwiYnVpbGRTRU9EYXRhIiwidGl0bGUiLCJnZXRUaXRsZSIsInNpbXBsZVRpdGxlIiwiZ2V0U2ltcGxlVGl0bGUiLCJmZWF0dXJlZEltYWdlIiwiZ2V0SW1hZ2UiLCJQcmlzbWljRE9NIiwiUHJpc21pY1V0aWxzIiwic2V0dGluZ3NEYXRhIiwidHlwZVRpdGxlIiwic2l0ZV90aXRsZSIsIlJpY2hUZXh0IiwiYXNUZXh0IiwiaGFzRmVhdHVyZWRJbWFnZUZpZWxkIiwiZmVhdHVyZWRfaW1hZ2UiLCJoYXNGZWF0dXJlZEltYWdlIiwiZ2V0VHlwZVJvb3QiLCJnZXRUeXBlQ29udGVudCIsInJvb3QiLCJnZXRGb3JtYXR0ZWRDb250ZW50IiwiYmFzZUNvbnRlbnQiLCJnZXRUeXBlQnlVSUQiLCJnZXRUeXBlRm9ybWF0IiwiZ2V0T3JkZXJlZENvbnRlbnQiLCJnZXRUeXBlUGFnZSIsImZpbHRlciIsImZpcnN0X3B1YmxpY2F0aW9uX2RhdGUiLCJjb250ZW50QXJyYXkiLCJzb3J0IiwicGFnZUEiLCJwYWdlQiIsImdldENvbnRlbnRPcmRlcmVkRm9yVHlwZSIsIm9wdHMiLCJpZCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7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LElBQVA7QUFDRDtBQUNELE1BQUdBLFFBQVF5SSxFQUFYLEVBQWM7QUFDWixXQUFPLHlCQUFnQmxLLE1BQXZCO0FBQ0QsR0FGRCxNQUdLO0FBQ0gsV0FBTyx5QkFBZ0JDLFVBQXZCO0FBQ0Q7QUFDRixDQVhNLEMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA5MDFmNjBmNDFiNjFjNjFjNWM0OSIsImltcG9ydCBQcmlzbWljIGZyb20gXCJwcmlzbWljLWphdmFzY3JpcHRcIjtcclxuaW1wb3J0IHtjb250ZW50TG9hZGVkfSBmcm9tIFwiLi4vc3JjL2FjdGlvbnMvY29udGVudFwiO1xyXG5pbXBvcnQge3RpdGxlQ2FzZX0gZnJvbSBcIi4vdXRpbHNcIjtcclxuXHJcbi8qKlxyXG4gKiBUaGUgZm9ybWF0cyBvZiB0aGUgY29udGVudCB0aGF0IGNhbiBiZSByZXR1cm5lZCBmcm9tIGEgZ2V0Q29udGVudCBjYWxsLlxyXG4gKiBAdHlwZSB7e0xJU1Q6IHN0cmluZywgU0lOR0xFOiBzdHJpbmcsIFJFUEVBVEFCTEU6IHN0cmluZ319XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgQ09OVEVOVF9GT1JNQVRTID0ge1xyXG4gIExJU1Q6ICdMSVNUJyxcclxuICBTSU5HTEU6ICdTSU5HTEUnLFxyXG4gIFJFUEVBVEFCTEU6ICdSRVBFQVRBQkxFJyxcclxufTtcclxuXHJcbi8qKlxyXG4gKiBFbmRwb2ludCBmb3IgeW91ciBQcmlzbWljIHByb2plY3QuXHJcbiAqIEB0eXBlIHtzdHJpbmd9XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgYXBpRW5kcG9pbnQgPSBcImh0dHBzOi8vcmFwaGFlbHRtLnByaXNtaWMuaW8vYXBpL3YyXCI7XHJcblxyXG4vKipcclxuICogR2V0IHRoZSBQcmlzbWljIEFQSS5cclxuICogQHJldHVybnMge1Byb21pc2UuPCo+fVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGdldEFwaSA9IGFzeW5jICgpID0+IHtcclxuICByZXR1cm4gYXdhaXQgUHJpc21pYy5nZXRBcGkoYXBpRW5kcG9pbnQpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIExpbmsgcmVzb2x2ZXIgdGFrZXMgYSBwYWdlIGFuZCByZXR1cm5zIHRoZSBhcHByb3ByaWF0ZSB1cmwuXHJcbiAqIEBwYXJhbSBkb2NcclxuICogQHJldHVybnMgeyp9XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgbGlua1Jlc29sdmVyID0gKGRvYykgPT4ge1xyXG4gIGlmIChkb2MudHlwZSA9PT0gXCJob21lcGFnZVwiKSB7XHJcbiAgICByZXR1cm4gJy8nO1xyXG4gIH1cclxuICByZXR1cm4gYC8ke2RvYy50eXBlfS9gICsgKGRvYy51aWQgfHwgJycpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIExvYWQgdGhlIHNldHRpbmdzIHBhZ2UgaW50byBzdG9yZS5cclxuICogQHBhcmFtIHN0b3JlXHJcbiAqIEByZXR1cm5zIHtQcm9taXNlLjx2b2lkPn1cclxuICovXHJcbmV4cG9ydCBjb25zdCBsb2FkU2V0dGluZ3MgPSBhc3luYyAoc3RvcmUpID0+IHtcclxuICBsZXQgc2V0dGluZ3MgPSBhd2FpdCBnZXRDb250ZW50KCdzZXR0aW5ncycpO1xyXG4gIHN0b3JlLmRpc3BhdGNoKGNvbnRlbnRMb2FkZWQoc2V0dGluZ3MsICdzZXR0aW5ncycsIG51bGwpKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBHZXQgY29udGVudCBmcm9tIFByaXNtaWMgZ2l2ZW4gYSB0eXBlLCBhIHVpZCAob3Igbm90KSwgYW5kIGEgcGFnZSAob3Igbm90KS5cclxuICogSWYgYSBVSUQgaXMgcHJvdmlkZWQsIG9yIHRoZSB0eXBlIGlzIFNpbmdsZSwgdGhpcyB3aWxsIHJldHVybiB0aGUgaWRlbnRpZmllZCBwYWdlLlxyXG4gKiBJZiB0aGUgdHlwZSBpcyByZXBlYXRhYmxlIGFuZCB0aGVyZSBpcyBubyBVSUQsIGFuIGFycmF5IHdpbGwgYmUgcmV0dXJuZWQuXHJcbiAqIEBwYXJhbSB0eXBlXHJcbiAqIEBwYXJhbSB1aWRcclxuICogQHBhcmFtIHBhZ2VcclxuICogQHJldHVybnMge1Byb21pc2UuPCo+fVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGdldENvbnRlbnQgPSBhc3luYyAodHlwZSwgdWlkLCBwYWdlKSA9PiB7XHJcbiAgY29uc3QgYXBpID0gYXdhaXQgZ2V0QXBpKCk7XHJcblxyXG4gIGlmICghdHlwZSAmJiAhdWlkKSB7XHJcbiAgICByZXR1cm4gYXdhaXQgZ2V0Q29udGVudCgnaG9tZXBhZ2UnKTtcclxuICB9XHJcblxyXG4gIGlmICh1aWQpIHtcclxuICAgIGNvbnN0IHBhZ2UgPSBhd2FpdCBhcGkuZ2V0QnlVSUQodHlwZSwgdWlkKTtcclxuICAgIGlmIChwYWdlKSB7XHJcbiAgICAgIHJldHVybiBwYWdlO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxuICBlbHNlIHtcclxuICAgIGxldCBvcHRpb25zID0gZ2V0VHlwZU9wdGlvbnModHlwZSk7XHJcbiAgICBpZihwYWdlKXtcclxuICAgICAgb3B0aW9ucy5wYWdlID0gcGFnZTtcclxuICAgIH1cclxuICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGFwaS5xdWVyeShcclxuICAgICAgUHJpc21pYy5QcmVkaWNhdGVzLmF0KCdkb2N1bWVudC50eXBlJywgdHlwZSksXHJcbiAgICAgIG9wdGlvbnNcclxuICAgICk7XHJcblxyXG4gICAgaWYgKHJlc3BvbnNlLnJlc3VsdHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoISFyZXNwb25zZS5yZXN1bHRzWzBdLnVpZCkge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UucmVzdWx0cztcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UucmVzdWx0c1swXTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG4vKipcclxuICogUmV0dXJucyB0aGUgZm9ybWF0IG9mIHRoZSBjb250ZW50IHJldHVybmVkIGZyb20gYSBnZXRDb250ZW50IGNhbGwuXHJcbiAqIEBwYXJhbSBjb250ZW50XHJcbiAqIEByZXR1cm5zIHsqfVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGdldEZvcm1hdCA9IChjb250ZW50KSA9PiB7XHJcbiAgaWYgKHR5cGVvZiBjb250ZW50Lmxlbmd0aCAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIHJldHVybiBDT05URU5UX0ZPUk1BVFMuTElTVDtcclxuICB9XHJcbiAgZWxzZSBpZiAoY29udGVudC51aWQpIHtcclxuICAgIHJldHVybiBDT05URU5UX0ZPUk1BVFMuUkVQRUFUQUJMRTtcclxuICB9XHJcbiAgZWxzZSB7XHJcbiAgICByZXR1cm4gQ09OVEVOVF9GT1JNQVRTLlNJTkdMRTtcclxuICB9XHJcbn07XHJcblxyXG4vKipcclxuICogUmV0dXJucyB0aGUgdHlwZSdzIEFQSSBJRCwgdGl0bGVjYXNlZCBhbmQgd2l0aCBoeXBoZW5zIHJlcGxhY2VkIHdpdGggc3BhY2VzLlxyXG4gKiBAcGFyYW0gdHlwZVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGdldFR5cGVUaXRsZSA9ICh0eXBlKSA9PiB7XHJcbiAgY29uc3QgdHlwZVNwYWNlcyA9IHR5cGUucmVwbGFjZSgnLScsICcgJyk7XHJcbiAgcmV0dXJuIHRpdGxlQ2FzZSh0eXBlU3BhY2VzKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBDb25maWd1cmUgcHJpc21pYyBzZXR0aW5ncyBoZXJlLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFBSSVNNSUNfU0VUVElOR1MgPSB7XHJcbiAgR0xPQkFMOiB7XHJcbiAgICBwYWdlU2l6ZTogMjUsXHJcbiAgICBvcmRlcmluZ3M6IFtcclxuICAgICAge1xyXG4gICAgICAgIG9uOiAnZG9jdW1lbnQnLFxyXG4gICAgICAgIGZpZWxkOiAnZmlyc3RfcHVibGljYXRpb25fZGF0ZScsXHJcbiAgICAgICAgb3JkZXI6ICdkZXNjJ1xyXG4gICAgICB9XHJcbiAgICBdLFxyXG4gICAgbGFuZzogbnVsbCxcclxuICB9LFxyXG4gIFRZUEVTOiB7XHJcbiAgICBibG9nOiB7XHJcbiAgICAgIHBhZ2VTaXplOiAyLFxyXG4gICAgfVxyXG4gIH0sXHJcbn07XHJcblxyXG5jb25zdCBnZW5lcmF0ZU9yZGVyaW5nVGV4dCA9IChvYmosIGxhc3Q9ZmFsc2UpID0+IHtcclxuICByZXR1cm4gYCR7b2JqLm9ufS4ke29iai5maWVsZH0gJHtvYmoub3JkZXJ9JHtsYXN0ID8gJycgOiAnLCd9YDtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRUeXBlT3B0aW9ucyA9ICh0eXBlLCByYXc9ZmFsc2UpID0+IHtcclxuICBsZXQgc2V0dGluZ3MgPSB7XHJcbiAgICAuLi5QUklTTUlDX1NFVFRJTkdTLkdMT0JBTCxcclxuICAgIC4uLihQUklTTUlDX1NFVFRJTkdTLlRZUEVTW3R5cGVdIHx8IHt9KVxyXG4gIH07XHJcbiAgaWYocmF3KXtcclxuICAgIHJldHVybiBzZXR0aW5ncztcclxuICB9XHJcbiAgY29uc3QgZmluYWwgPSB7XHJcbiAgICBwYWdlU2l6ZTogc2V0dGluZ3MucGFnZVNpemUsXHJcbiAgICBvcmRlcmluZ3M6IGBbJHtzZXR0aW5ncy5vcmRlcmluZ3MubWFwKChvcmRlcmluZywgaW5kZXgpPT57XHJcbiAgICAgIHJldHVybiBnZW5lcmF0ZU9yZGVyaW5nVGV4dChvcmRlcmluZywgaW5kZXgrMSA9PT0gc2V0dGluZ3Mub3JkZXJpbmdzLmxlbmd0aCk7XHJcbiAgICB9KX1dYCxcclxuICAgIGxhbmc6IHNldHRpbmdzLmxhbmcsXHJcbiAgfTtcclxuICBjb25zb2xlLmxvZyhmaW5hbCk7XHJcbiAgcmV0dXJuIGZpbmFsO1xyXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLy4uL2NvbW1vbi9wcmlzbWljLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UtZnVuY3Rpb25zXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZmlyZWJhc2UtZnVuY3Rpb25zXCJcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJpc21pYy1kb21cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJwcmlzbWljLWRvbVwiXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBcImJhYmVsLXBvbHlmaWxsXCI7XG5pbXBvcnQge3NpdGVNYXB9IGZyb20gXCIuL3NpdGVtYXBcIjtcbmltcG9ydCB7c2VvUHJlcH0gZnJvbSBcIi4vc2VvUHJlcFwiO1xuXG5leHBvcnRzLnNlb1ByZXAgPSBzZW9QcmVwO1xuXG5leHBvcnRzLnNpdGVNYXAgPSBzaXRlTWFwO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmFiZWwtcG9seWZpbGxcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJiYWJlbC1wb2x5ZmlsbFwiXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCAqIGFzIGZ1bmN0aW9ucyBmcm9tIFwiZmlyZWJhc2UtZnVuY3Rpb25zXCI7XG5pbXBvcnQgKiBhcyBzbSBmcm9tIFwic2l0ZW1hcFwiO1xuaW1wb3J0IHtnZXRBcGksIGxpbmtSZXNvbHZlcn0gZnJvbSBcIi4uLy4uL2NvbW1vbi9wcmlzbWljXCI7XG5cbmNvbnN0IGZldGNoQWxsUGFnZXMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHBhZ2VTaXplID0gNTA7XG4gIGNvbnN0IGFwaSA9IGF3YWl0IGdldEFwaSgpO1xuICBsZXQgYWxsUmVzdWx0cyA9IFtdO1xuICBjb25zdCBpbml0aWFsID0gYXdhaXQgYXBpLnF1ZXJ5KFtdLCB7cGFnZVNpemU6IHBhZ2VTaXplLCBwYWdlOiAxfSk7XG4gIGFsbFJlc3VsdHMgPSBbLi4uYWxsUmVzdWx0cywgLi4uaW5pdGlhbC5yZXN1bHRzXTtcbiAgZm9yIChsZXQgY3VycmVudFBhZ2UgPSAyOyBjdXJyZW50UGFnZSA8PSBpbml0aWFsLnRvdGFsX3BhZ2VzOyBjdXJyZW50UGFnZSsrKSB7XG4gICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgYXBpLnF1ZXJ5KFtdLCB7cGFnZVNpemU6IHBhZ2VTaXplLCBwYWdlOiBjdXJyZW50UGFnZX0pO1xuICAgIGFsbFJlc3VsdHMgPSBbLi4uYWxsUmVzdWx0cywgLi4ucmVzcG9uc2UucmVzdWx0c107XG4gIH1cbiAgcmV0dXJuIGFsbFJlc3VsdHM7XG59O1xuXG5jb25zdCBnZXRVUkxzRnJvbVBhZ2VzID0gKHBhZ2VzKSA9PiB7XG4gIGxldCB1cmxzID0gW107XG4gIHBhZ2VzLm1hcCgoZG9jdW1lbnQpID0+IHtcbiAgICB1cmxzLnB1c2goe1xuICAgICAgdXJsOiBsaW5rUmVzb2x2ZXIoZG9jdW1lbnQpXG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gdXJscztcbn07XG5cbmV4cG9ydCBjb25zdCBzaXRlTWFwID0gZnVuY3Rpb25zLmh0dHBzLm9uUmVxdWVzdChhc3luYyAocmVxLCByZXMpID0+IHtcbiAgY29uc3QgcGFnZXMgPSBhd2FpdCBmZXRjaEFsbFBhZ2VzKCk7XG5cbiAgY29uc3Qgc2l0ZW1hcCA9IHNtLmNyZWF0ZVNpdGVtYXAoe1xuICAgIGhvc3RuYW1lOiBgJHtyZXEucHJvdG9jb2x9Oi8vJHtyZXEuaG9zdG5hbWV9YCxcbiAgICBjYWNoZVRpbWU6IDYwMDAwMCxcbiAgICB1cmxzOiBnZXRVUkxzRnJvbVBhZ2VzKHBhZ2VzKVxuICB9KTtcblxuICBzaXRlbWFwLnRvWE1MKGZ1bmN0aW9uIChlcnIsIHhtbCkge1xuICAgIGlmIChlcnIpIHtcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuZW5kKCk7XG4gICAgfVxuICAgIHJlcy5oZWFkZXIoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi94bWwnKTtcbiAgICByZXMuc2V0KCdDYWNoZS1Db250cm9sJywgJ3B1YmxpYywgbWF4LWFnZT0zMDAsIHMtbWF4YWdlPTYwMCcpO1xuICAgIHJlcy5zZW5kKHhtbCk7XG4gIH0pO1xufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NpdGVtYXAuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzaXRlbWFwXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwic2l0ZW1hcFwiXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByaXNtaWMtamF2YXNjcmlwdFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInByaXNtaWMtamF2YXNjcmlwdFwiXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7Z2V0Q29udGVudH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9wcmlzbWljXCI7XG5pbXBvcnQge2dldFR5cGVDb250ZW50LCBnZXRUeXBlUGFnZSwgZ2V0VHlwZVJvb3R9IGZyb20gXCIuLi9zZWxlY3RvcnMvY29udGVudFwiO1xuXG5leHBvcnQgY29uc3QgQ09OVEVOVF9MT0FERUQgPSBcIkNPTlRFTlRfTE9BREVEXCI7XG5leHBvcnQgY29uc3QgQ09OVEVOVF9GRVRDSElORyA9IFwiQ09OVEVOVF9GRVRDSElOR1wiO1xuZXhwb3J0IGNvbnN0IENPTlRFTlRfU0VUX1BBR0UgPSBcIkNPTlRFTlRfU0VUX1BBR0VcIjtcblxuLyoqXG4gKiBTZXQgdGhlIGNvbnRlbnQgZmV0Y2hpbmcgc3RhdHVzIHRvIHRydWUuXG4gKiBAcmV0dXJucyB7e3R5cGU6IHN0cmluZ319XG4gKi9cbmV4cG9ydCBjb25zdCBjb250ZW50RmV0Y2hpbmcgPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQ09OVEVOVF9GRVRDSElOR1xuICB9XG59O1xuXG4vKipcbiAqIERpc3BhdGNoZWQgdXBvbiBjb21wbGV0aW9uIG9mIGNvbnRlbnQgbG9hZC5cbiAqIEBwYXJhbSBjb250ZW50XG4gKiBAcGFyYW0gdHlwZVxuICogQHBhcmFtIHVpZFxuICogQHJldHVybnMge3t0eXBlOiBzdHJpbmcsIHBheWxvYWQ6IHtjb250ZW50OiAqLCB0eXBlOiAqLCB1aWQ6ICp9fX1cbiAqL1xuZXhwb3J0IGNvbnN0IGNvbnRlbnRMb2FkZWQgPSAoY29udGVudCwgdHlwZSwgdWlkKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQ09OVEVOVF9MT0FERUQsXG4gICAgcGF5bG9hZDoge1xuICAgICAgY29udGVudCxcbiAgICAgIHR5cGUsXG4gICAgICB1aWQsXG4gICAgfVxuICB9O1xufTtcblxuLyoqXG4gKiBTZXQgdGhlIGN1cnJlbnRseSBsb2FkZWQgbnVtYmVyIG9mIHBhZ2VzIGZvciBhIGdpdmVuIHR5cGUuXG4gKiBAcGFyYW0gdHlwZVxuICogQHBhcmFtIHBhZ2VcbiAqIEByZXR1cm5zIHt7dHlwZTogc3RyaW5nLCBwYXlsb2FkOiB7dHlwZTogKiwgcGFnZTogKn19fVxuICovXG5leHBvcnQgY29uc3QgY29udGVudFR5cGVTZXRQYWdlID0gKHR5cGUsIHBhZ2UpID0+IHtcbiAgY29uc29sZS53YXJuKGBTZXR0aW5nIHBhZ2UgZm9yICR7dHlwZX0gdG8gJHtwYWdlfWApO1xuICByZXR1cm4ge1xuICAgIHR5cGU6IENPTlRFTlRfU0VUX1BBR0UsXG4gICAgcGF5bG9hZDoge1xuICAgICAgdHlwZSxcbiAgICAgIHBhZ2UsXG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIExvYWQgdGhlIG5leHQgcGFnZSBvZiBjb250ZW50IGZvciBhIGdpdmVuIHR5cGUuXG4gKiBAcGFyYW0gdHlwZVxuICogQHJldHVybnMge2Z1bmN0aW9uKCosICopfVxuICovXG5leHBvcnQgY29uc3QgbG9hZE1vcmVDb250ZW50ID0gKHR5cGUpID0+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICBjb25zdCBudW1iZXIgPSBnZXRUeXBlUGFnZShnZXRTdGF0ZSgpLCB0eXBlKSB8fCAxO1xuICAgIGRpc3BhdGNoKGNvbnRlbnRGZXRjaGluZygpKTtcbiAgICBsZXQgY29udGVudCA9IGF3YWl0IGdldENvbnRlbnQodHlwZSwgbnVsbCwgbnVtYmVyKzEpO1xuICAgIGlmKCFjb250ZW50IHx8ICFjb250ZW50Lmxlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkaXNwYXRjaChjb250ZW50VHlwZVNldFBhZ2UodHlwZSwgbnVtYmVyKzEpKTtcbiAgICBjb250ZW50Lm1hcCgocGFnZSkgPT4ge1xuICAgICAgZGlzcGF0Y2goY29udGVudExvYWRlZChwYWdlLCBwYWdlLnR5cGUsIHBhZ2UudWlkKSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGdldFR5cGVDb250ZW50KGdldFN0YXRlKCksIHR5cGUpO1xuICB9O1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi8uLi9zcmMvYWN0aW9ucy9jb250ZW50LmpzIiwiLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMzE0OTUyMzkvdGl0bGUtY2FzZS1hLXNlbnRlbmNlXG5leHBvcnQgY29uc3QgdGl0bGVDYXNlID0gKHN0cikgPT4ge1xuICBsZXQgbmV3c3RyID0gc3RyLnNwbGl0KFwiIFwiKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuZXdzdHIubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAobmV3c3RyW2ldID09PSBcIlwiKSBjb250aW51ZTtcbiAgICBsZXQgY29weSA9IG5ld3N0cltpXS5zdWJzdHJpbmcoMSkudG9Mb3dlckNhc2UoKTtcbiAgICBuZXdzdHJbaV0gPSBuZXdzdHJbaV1bMF0udG9VcHBlckNhc2UoKSArIGNvcHk7XG4gIH1cbiAgbmV3c3RyID0gbmV3c3RyLmpvaW4oXCIgXCIpO1xuICByZXR1cm4gbmV3c3RyO1xufTtcblxuLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNjc5OTE1L2hvdy1kby1pLXRlc3QtZm9yLWFuLWVtcHR5LWphdmFzY3JpcHQtb2JqZWN0XG5leHBvcnQgY29uc3QgaXNFbXB0eU9iamVjdCA9IChvYmopID0+IHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaikubGVuZ3RoID09PSAwICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0O1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi8uLi9jb21tb24vdXRpbHMuanMiLCJpbXBvcnQgKiBhcyBmdW5jdGlvbnMgZnJvbSBcImZpcmViYXNlLWZ1bmN0aW9uc1wiO1xuaW1wb3J0IGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcbmltcG9ydCBjb29raWVQYXJzZXIgZnJvbSBcImNvb2tpZS1wYXJzZXJcIjtcbmltcG9ydCBib2R5UGFyc2VyIGZyb20gXCJib2R5LXBhcnNlclwiO1xuaW1wb3J0IHtnZXRDb250ZW50LCBnZXRGb3JtYXQsIENPTlRFTlRfRk9STUFUU30gZnJvbSBcIi4uLy4uL2NvbW1vbi9wcmlzbWljXCI7XG5pbXBvcnQgKiBhcyBwdWcgZnJvbSBcInB1Z1wiO1xuY29uc3QgY29ycyA9IHJlcXVpcmUoJ2NvcnMnKSh7b3JpZ2luOiB0cnVlfSk7XG5pbXBvcnQgKiBhcyBQcmlzbWljIGZyb20gXCJwcmlzbWljLWRvbVwiO1xuaW1wb3J0IHtidWlsZFNFT0RhdGF9IGZyb20gXCIuL3Nlby9pbmRleFwiO1xuXG5jb25zdCBhcHAgPSBleHByZXNzKCk7XG5cbmFwcC51c2UoY29ycyk7XG5hcHAudXNlKGNvb2tpZVBhcnNlcigpKTtcbmFwcC51c2UoYm9keVBhcnNlci5qc29uKCkpO1xuXG5jb25zdCBidWlsZFN0YXRlID0gKHNldHRpbmdzLCBjb250ZW50LCB0eXBlKSA9PiB7XG4gIGxldCBzdGF0ZSA9IHtcbiAgICBjb250ZW50OiB7XG4gICAgICBzZXR0aW5nczoge1xuICAgICAgICBjb250ZW50OiBzZXR0aW5nc1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBpZihnZXRGb3JtYXQoY29udGVudCkgPT09IENPTlRFTlRfRk9STUFUUy5MSVNUKXtcbiAgICBzdGF0ZS5jb250ZW50W3R5cGVdID0ge2NvbnRlbnQ6IHt9fTtcbiAgICBjb250ZW50Lm1hcCgocGFnZSkgPT4ge1xuICAgICAgc3RhdGUuY29udGVudFt0eXBlXS5jb250ZW50W3BhZ2UudWlkXSA9IHBhZ2U7XG4gICAgfSk7XG4gIH1cbiAgZWxzZSBpZihnZXRGb3JtYXQoY29udGVudCkgPT09IENPTlRFTlRfRk9STUFUUy5TSU5HTEUpe1xuICAgIHN0YXRlLmNvbnRlbnRbY29udGVudC50eXBlXSA9IGNvbnRlbnQ7XG4gIH1cbiAgZWxzZSB7XG4gICAgc3RhdGUuY29udGVudFtjb250ZW50LnR5cGVdID0ge1xuICAgICAgW2NvbnRlbnQudWlkXTogY29udGVudFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZTtcbn07XG5cbmNvbnN0IGhhbmRsZXIgPSBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgY29uc3Qge3R5cGUsIHVpZH0gPSByZXEucGFyYW1zO1xuXG4gIGNvbnN0IHJlbmRlckluZGV4ID0gcHVnLmNvbXBpbGVGaWxlKCcuL3NyYy9pbmRleC5wdWcnKTtcbiAgY29uc3QgcmVuZGVyNDA0ID0gcHVnLmNvbXBpbGVGaWxlKCcuL3NyYy80MDQucHVnJyk7XG5cbiAgY29uc3Qgc2V0dGluZ3MgPSBhd2FpdCBnZXRDb250ZW50KCdzZXR0aW5ncycpO1xuICBjb25zdCBjb250ZW50ID0gYXdhaXQgZ2V0Q29udGVudCh0eXBlLCB1aWQpO1xuXG4gIGlmKCFjb250ZW50KXtcbiAgICByZXMuc3RhdHVzKDQwNCk7XG4gICAgcmVzLnNldCgnQ29udGVudC1UeXBlJywgJ3RleHQvaHRtbCcpO1xuICAgIHJlcy5zZW5kKHJlbmRlcjQwNCgpKTtcbiAgfVxuXG4gIGNvbnN0IGNvbnRleHQgPSB7XG4gICAgZGF0YTogYnVpbGRTRU9EYXRhKGNvbnRlbnQsIHNldHRpbmdzLCB0eXBlLCB1aWQpLFxuICAgIHN0YXRlOiBKU09OLnN0cmluZ2lmeShidWlsZFN0YXRlKHNldHRpbmdzLCBjb250ZW50LCB0eXBlKSksXG4gICAgUHJpc21pYzogUHJpc21pYyxcbiAgfTtcblxuICByZXMuc2V0KCdDb250ZW50LVR5cGUnLCAndGV4dC9odG1sJyk7XG4gIHJlcy5zZXQoJ0NhY2hlLUNvbnRyb2wnLCAncHVibGljLCBtYXgtYWdlPTMwMCwgcy1tYXhhZ2U9NjAwJyk7XG4gIHJlcy5zZW5kKHJlbmRlckluZGV4KGNvbnRleHQpKTtcbn07XG5cbmFwcC5nZXQoJy86dHlwZS86dWlkJywgaGFuZGxlcik7XG5hcHAuZ2V0KCcvOnR5cGUnLCBoYW5kbGVyKTtcbmFwcC5nZXQoJy8nLCBoYW5kbGVyKTtcblxuZXhwb3J0IGNvbnN0IHNlb1ByZXAgPSBmdW5jdGlvbnMuaHR0cHMub25SZXF1ZXN0KGFwcCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Nlb1ByZXAuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZXhwcmVzc1wiXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb29raWUtcGFyc2VyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29va2llLXBhcnNlclwiXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJib2R5LXBhcnNlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImJvZHktcGFyc2VyXCJcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInB1Z1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInB1Z1wiXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgKiBhcyBTRU9CYXNpY3MgZnJvbSBcIi4vYmFzaWNcIjtcblxuZXhwb3J0IGNvbnN0IGJ1aWxkU0VPRGF0YSA9IChjb250ZW50LCBzZXR0aW5ncywgdHlwZSwgdWlkKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdGl0bGU6IFNFT0Jhc2ljcy5nZXRUaXRsZShjb250ZW50LCBzZXR0aW5ncywgdHlwZSksXG4gICAgc2ltcGxlVGl0bGU6IFNFT0Jhc2ljcy5nZXRTaW1wbGVUaXRsZShjb250ZW50LCB0eXBlKSxcbiAgICBmZWF0dXJlZEltYWdlOiBTRU9CYXNpY3MuZ2V0SW1hZ2UoY29udGVudCksXG4gIH07XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZW8vaW5kZXguanMiLCJpbXBvcnQgKiBhcyBQcmlzbWljRE9NIGZyb20gXCJwcmlzbWljLWRvbVwiO1xuaW1wb3J0ICogYXMgUHJpc21pY1V0aWxzIGZyb20gXCIuLi8uLi8uLi9jb21tb24vcHJpc21pY1wiO1xuXG5leHBvcnQgY29uc3QgZ2V0VGl0bGUgPSAoY29udGVudCwgc2V0dGluZ3MsIHR5cGUpID0+IHtcbiAgY29uc3Qgc2V0dGluZ3NEYXRhID0gc2V0dGluZ3MuZGF0YTtcbiAgY29uc3QgdHlwZVRpdGxlID0gdHlwZSA/IFByaXNtaWNVdGlscy5nZXRUeXBlVGl0bGUodHlwZSkgOiAnJztcbiAgaWYgKFByaXNtaWNVdGlscy5nZXRGb3JtYXQoY29udGVudCkgPT09IFByaXNtaWNVdGlscy5DT05URU5UX0ZPUk1BVFMuTElTVCkge1xuICAgIHJldHVybiBgJHt0eXBlVGl0bGV9IEluZGV4IHwgJHtzZXR0aW5nc0RhdGEuc2l0ZV90aXRsZX1gO1xuICB9XG4gIGVsc2Uge1xuICAgIGNvbnN0IGRhdGEgPSBjb250ZW50LmRhdGE7XG4gICAgcmV0dXJuIGAke2RhdGEudGl0bGUgJiYgYCR7UHJpc21pY0RPTS5SaWNoVGV4dC5hc1RleHQoZGF0YS50aXRsZSl9IHwgJHt0eXBlVGl0bGV9IHwgYH0ke3NldHRpbmdzRGF0YS5zaXRlX3RpdGxlfWBcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGdldFNpbXBsZVRpdGxlID0gKGNvbnRlbnQsIHR5cGUpID0+IHtcbiAgaWYoUHJpc21pY1V0aWxzLmdldEZvcm1hdChjb250ZW50KSA9PT0gUHJpc21pY1V0aWxzLkNPTlRFTlRfRk9STUFUUy5MSVNUKXtcbiAgICByZXR1cm4gUHJpc21pY1V0aWxzLmdldFR5cGVUaXRsZSh0eXBlKTtcbiAgfVxuICBlbHNlIHtcbiAgICByZXR1cm4gY29udGVudC5kYXRhLnRpdGxlID8gUHJpc21pY0RPTS5SaWNoVGV4dC5hc1RleHQoY29udGVudC5kYXRhLnRpdGxlKSA6IG51bGw7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBnZXRJbWFnZSA9IChjb250ZW50KSA9PiB7XG4gIGlmKFByaXNtaWNVdGlscy5nZXRGb3JtYXQoY29udGVudCkgPT09IFByaXNtaWNVdGlscy5DT05URU5UX0ZPUk1BVFMuTElTVCl7XG4gICAgY29udGVudCA9IGNvbnRlbnRbMF07XG4gIH1cbiAgY29uc3QgZGF0YSA9IGNvbnRlbnQuZGF0YTtcbiAgY29uc3QgaGFzRmVhdHVyZWRJbWFnZUZpZWxkID0gISFkYXRhLmZlYXR1cmVkX2ltYWdlO1xuICBjb25zdCBoYXNGZWF0dXJlZEltYWdlID0gaGFzRmVhdHVyZWRJbWFnZUZpZWxkICYmICEhZGF0YS5mZWF0dXJlZF9pbWFnZS51cmw7XG4gIHJldHVybiBoYXNGZWF0dXJlZEltYWdlICYmIGRhdGEuZmVhdHVyZWRfaW1hZ2UudXJsO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2VvL2Jhc2ljLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcnNcIlxuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBHZXQgdGhlIHJvb3QgZm9yIGEgdHlwZS5cbiAqIEBwYXJhbSBzdGF0ZVxuICogQHBhcmFtIHR5cGVcbiAqL1xuaW1wb3J0IHtpc0VtcHR5T2JqZWN0fSBmcm9tIFwiLi4vLi4vY29tbW9uL3V0aWxzXCI7XG5pbXBvcnQge0NPTlRFTlRfRk9STUFUUywgZ2V0VHlwZU9wdGlvbnN9IGZyb20gXCIuLi8uLi9jb21tb24vcHJpc21pY1wiO1xuXG5leHBvcnQgY29uc3QgZ2V0VHlwZVJvb3QgPSAoc3RhdGUsIHR5cGUpID0+IHtcbiAgY29uc3QgY29udGVudCA9IHN0YXRlLmNvbnRlbnQ7XG4gIHJldHVybiBjb250ZW50W3R5cGVdO1xufTtcblxuLyoqXG4gKiBHZXQgdGhlIHJhdyBjb250ZW50IGZvciBhIHR5cGUuXG4gKiBAcGFyYW0gc3RhdGVcbiAqIEBwYXJhbSB0eXBlXG4gKiBAcmV0dXJucyB7bnVsbH1cbiAqL1xuZXhwb3J0IGNvbnN0IGdldFR5cGVDb250ZW50ID0gKHN0YXRlLCB0eXBlKSA9PiB7XG4gIGNvbnN0IHJvb3QgPSBnZXRUeXBlUm9vdChzdGF0ZSwgdHlwZSk7XG4gIGlmICghcm9vdCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHJldHVybiByb290LmNvbnRlbnQ7XG59O1xuXG4vKipcbiAqIEdldCB0aGUgY29udGVudCBmb3IgYSBnaXZlbiB0eXBlIChvcHRpb25hbCBVSUQpIGZvcm1hdHRlZCBhcHByb3ByaWF0ZWx5LlxuICogQHBhcmFtIHN0YXRlXG4gKiBAcGFyYW0gdHlwZVxuICogQHBhcmFtIHVpZFxuICogQHJldHVybnMgeyp9XG4gKi9cbmV4cG9ydCBjb25zdCBnZXRGb3JtYXR0ZWRDb250ZW50ID0gKHN0YXRlLCB0eXBlLCB1aWQpID0+IHtcbiAgY29uc3QgYmFzZUNvbnRlbnQgPSBnZXRUeXBlQ29udGVudChzdGF0ZSwgdHlwZSk7XG4gIGlmKCFiYXNlQ29udGVudCl7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgaWYgKHVpZCkge1xuICAgIHJldHVybiBnZXRUeXBlQnlVSUQoc3RhdGUsIHR5cGUsIHVpZCk7XG4gIH1cbiAgZWxzZSB7XG4gICAgcmV0dXJuIChnZXRUeXBlRm9ybWF0KHN0YXRlLCB0eXBlKSA9PT0gQ09OVEVOVF9GT1JNQVRTLlJFUEVBVEFCTEUpID9cbiAgICAgIGdldE9yZGVyZWRDb250ZW50KHN0YXRlLCB0eXBlKSA6XG4gICAgICBnZXRUeXBlQ29udGVudChzdGF0ZSwgdHlwZSk7XG4gIH1cbn07XG5cbi8qKlxuICogR2V0IGEgcGFnZSBieSB0eXBlIGFuZCB1aWQuXG4gKiBAcGFyYW0gc3RhdGVcbiAqIEBwYXJhbSB0eXBlXG4gKiBAcGFyYW0gdWlkXG4gKiBAcmV0dXJucyB7bnVsbH1cbiAqL1xuZXhwb3J0IGNvbnN0IGdldFR5cGVCeVVJRCA9IChzdGF0ZSwgdHlwZSwgdWlkKSA9PiB7XG4gIGNvbnN0IGNvbnRlbnQgPSBnZXRUeXBlQ29udGVudChzdGF0ZSwgdHlwZSk7XG4gIGlmICghY29udGVudCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGlmIChjb250ZW50W3VpZF0pIHtcbiAgICByZXR1cm4gY29udGVudFt1aWRdO1xuICB9XG4gIGVsc2Uge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59O1xuXG4vKipcbiAqIEdldCB0aGUgY3VycmVudCBsb2FkZWQgcGFnZS5cbiAqIEBwYXJhbSBzdGF0ZVxuICogQHBhcmFtIHR5cGVcbiAqIEByZXR1cm5zIHtudWxsfVxuICovXG5leHBvcnQgY29uc3QgZ2V0VHlwZVBhZ2UgPSAoc3RhdGUsIHR5cGUpID0+IHtcbiAgY29uc3Qgcm9vdCA9IGdldFR5cGVSb290KHN0YXRlLCB0eXBlKTtcbiAgaWYgKHJvb3QucGFnZSkge1xuICAgIHJldHVybiByb290LnBhZ2U7XG4gIH1cbiAgZWxzZSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn07XG5cbi8qKlxuICogRm9yIHJlcGVhdGFibGUgdHlwZXMsIGdldCBjb250ZW50IGluIG9yZGVyLlxuICogQHBhcmFtIHN0YXRlXG4gKiBAcGFyYW0gdHlwZVxuICogQHBhcmFtIGZpbHRlclxuICogQHBhcmFtIG9yZGVyXG4gKiBAcmV0dXJucyB7QXJyYXkuPCo+fVxuICovXG5leHBvcnQgY29uc3QgZ2V0T3JkZXJlZENvbnRlbnQgPSAoc3RhdGUsIHR5cGUsIGZpbHRlciwgb3JkZXIpID0+IHtcbiAgaWYgKCFmaWx0ZXIpIHtcbiAgICBmaWx0ZXIgPSAocGFnZSkgPT4ge1xuICAgICAgcmV0dXJuIHBhZ2UuZmlyc3RfcHVibGljYXRpb25fZGF0ZTtcbiAgICB9O1xuICB9XG4gIGlmICghb3JkZXIpIHtcbiAgICBvcmRlciA9ICdkZXNjJztcbiAgfVxuICBjb25zdCBjb250ZW50ID0gZ2V0VHlwZUNvbnRlbnQoc3RhdGUsIHR5cGUpO1xuICBjb25zdCBjb250ZW50QXJyYXkgPSBPYmplY3Qua2V5cyhjb250ZW50KS5tYXAoKHBhZ2UpID0+IGNvbnRlbnRbcGFnZV0pO1xuICByZXR1cm4gY29udGVudEFycmF5LnNvcnQoKHBhZ2VBLCBwYWdlQikgPT4ge1xuICAgIGlmIChvcmRlciA9PT0gJ2FzYycpIHtcbiAgICAgIHJldHVybiBmaWx0ZXIocGFnZUEpID4gZmlsdGVyKHBhZ2VCKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gZmlsdGVyKHBhZ2VBKSA8IGZpbHRlcihwYWdlQik7XG4gICAgfVxuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRDb250ZW50T3JkZXJlZEZvclR5cGUgPSAoc3RhdGUsIHR5cGUpID0+IHtcbiAgY29uc3Qgb3B0cyA9IGdldFR5cGVPcHRpb25zKHR5cGUsIHRydWUpO1xuICBjb25zdCBmaWx0ZXIgPSAocGFnZSkgPT4ge1xuICAgIC8vIGxldCBkYXRhUXVlcnkgPVxuICB9O1xufTtcblxuLyoqXG4gKiBHZXQgdGhlIGZvcm1hdCBvZiB0aGUgdHlwZSBiYXNlZCBvbiBsb2FkZWQgY29udGVudC5cbiAqIEBwYXJhbSBzdGF0ZVxuICogQHBhcmFtIHR5cGVcbiAqIEByZXR1cm5zIHsqfVxuICovXG5leHBvcnQgY29uc3QgZ2V0VHlwZUZvcm1hdCA9IChzdGF0ZSwgdHlwZSkgPT4ge1xuICBjb25zdCBjb250ZW50ID0gZ2V0VHlwZUNvbnRlbnQoc3RhdGUsIHR5cGUpO1xuICBpZiAoIWNvbnRlbnQgfHwgaXNFbXB0eU9iamVjdChjb250ZW50KSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGlmKGNvbnRlbnQuaWQpe1xuICAgIHJldHVybiBDT05URU5UX0ZPUk1BVFMuU0lOR0xFO1xuICB9XG4gIGVsc2Uge1xuICAgIHJldHVybiBDT05URU5UX0ZPUk1BVFMuUkVQRUFUQUJMRTtcbiAgfVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi8uLi9zcmMvc2VsZWN0b3JzL2NvbnRlbnQuanMiXSwic291cmNlUm9vdCI6IiJ9
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************!*\
  !*** ./js_src/app.js ***!
  \***********************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _router = __webpack_require__(/*! ./router */ 1);
	
	var _router2 = _interopRequireDefault(_router);
	
	var _menusNav = __webpack_require__(/*! ./menus/nav */ 58);
	
	var _menusNav2 = _interopRequireDefault(_menusNav);
	
	var _core = __webpack_require__(/*! ./core */ 27);
	
	var core = _interopRequireWildcard(_core);
	
	var _menusIntro = __webpack_require__(/*! ./menus/intro */ 61);
	
	var _menusIntro2 = _interopRequireDefault(_menusIntro);
	
	/**
	 *
	 * @public
	 * @class App
	 * @classdesc Load the App application Class to handle it ALL.
	 *
	 */
	
	var App = (function () {
	  function App() {
	    _classCallCheck(this, App);
	
	    this.nav = _menusNav2["default"];
	    this.core = core;
	    this.intro = _menusIntro2["default"];
	    this.router = _router2["default"];
	
	    this.initEvents();
	    this.initModules();
	  }
	
	  /******************************************************************************
	   * Expose
	  *******************************************************************************/
	
	  /**
	   *
	   * @public
	   * @instance
	   * @method initModules
	   * @memberof App
	   * @description Initialize application modules.
	   *
	   */
	
	  _createClass(App, [{
	    key: "initModules",
	    value: function initModules() {
	      this.core.detect.init(this);
	      this.core.resizes.init(this);
	      this.core.scrolls.init(this);
	      this.router.init(this);
	      this.nav.init(this);
	
	      this.analytics = new this.core.Analytics();
	    }
	
	    /**
	     *
	     * @public
	     * @instance
	     * @method initEvents
	     * @memberof App
	     * @description Initialize application events.
	     *
	     */
	  }, {
	    key: "initEvents",
	    value: function initEvents() {
	      this._onPreloadDone = this.onPreloadDone.bind(this);
	
	      this.core.emitter.on("app--preload-done", this._onPreloadDone);
	    }
	
	    /**
	     *
	     * @public
	     * @instance
	     * @method onPreloadDone
	     * @memberof App
	     * @description Handle the event for initializing the app.
	     *
	     */
	  }, {
	    key: "onPreloadDone",
	    value: function onPreloadDone() {
	      this.core.emitter.off("app--preload-done", this._onPreloadDone);
	
	      this.core.dom.html.removeClass("is-clipped");
	      this.core.dom.body.removeClass("is-clipped");
	
	      this.intro.teardown();
	    }
	  }]);
	
	  return App;
	})();
	
	window.app = new App();
	
	/******************************************************************************
	 * Export
	*******************************************************************************/
	exports["default"] = window.app;
	module.exports = exports["default"];

/***/ },
/* 1 */
/*!**************************!*\
  !*** ./js_src/router.js ***!
  \**************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _js_libsHoboDistHoboBuild = __webpack_require__(/*! js_libs/hobo/dist/hobo.build */ 2);
	
	var _js_libsHoboDistHoboBuild2 = _interopRequireDefault(_js_libsHoboDistHoboBuild);
	
	var _properjsPagecontroller = __webpack_require__(/*! properjs-pagecontroller */ 20);
	
	var _properjsPagecontroller2 = _interopRequireDefault(_properjsPagecontroller);
	
	var _core = __webpack_require__(/*! ./core */ 27);
	
	var core = _interopRequireWildcard(_core);
	
	var _cover = __webpack_require__(/*! ./cover */ 57);
	
	var _cover2 = _interopRequireDefault(_cover);
	
	var _menusNav = __webpack_require__(/*! ./menus/nav */ 58);
	
	var _menusNav2 = _interopRequireDefault(_menusNav);
	
	var _animate = __webpack_require__(/*! ./animate */ 60);
	
	var _animate2 = _interopRequireDefault(_animate);
	
	/**
	 *
	 * @public
	 * @namespace router
	 * @description Handles async web app routing for nice transitions.
	 *
	 */
	var router = {
	    /**
	     *
	     * @public
	     * @method init
	     * @memberof router
	     * @description Initialize the router module.
	     *
	     */
	    init: function init() {
	        this.state = {};
	        this.pageDuration = core.util.getTransitionDuration(core.dom.page[0]);
	        this.bindEmptyHashLinks();
	        this.initPageController();
	
	        core.log("router initialized");
	    },
	
	    /**
	     *
	     * @public
	     * @method setState
	     * @memberof router
	     * @param {string} name The access key
	     * @param {mixed} value The storage value
	     * @description Non-persistent state.
	     *              This state object will persist for one router cycle.
	     *              The next router cycle will delete this state object.
	     *
	     */
	    setState: function setState(name, value) {
	        this.state[name] = {
	            checked: false,
	            name: name,
	            value: value
	        };
	    },
	
	    /**
	     *
	     * @public
	     * @method getState
	     * @memberof router
	     * @param {string} name The access key
	     * @description Access a state object ref by its name.
	     * @returns {mixed}
	     *
	     */
	    getState: function getState(name) {
	        var id = null;
	        var ret = null;
	
	        for (id in this.state) {
	            if (this.state.hasOwnProperty(id)) {
	                if (this.state[id].name === name) {
	                    ret = this.state[id].value;
	                    break;
	                }
	            }
	        }
	
	        return ret;
	    },
	
	    /**
	     *
	     * @public
	     * @method checkState
	     * @memberof router
	     * @description Process state objects.
	     *              Objects that have already been `checked` are deleted.
	     *
	     */
	    checkState: function checkState() {
	        var id = null;
	
	        for (id in this.state) {
	            if (this.state.hasOwnProperty(id)) {
	                if (this.state[id].checked) {
	                    delete this.state[id];
	                } else {
	                    this.state[id].checked = true;
	                }
	            }
	        }
	    },
	
	    /**
	     *
	     * @public
	     * @method route
	     * @param {string} path The uri to route to
	     * @memberof router
	     * @description Trigger app to route a specific page. [Reference]{@link https://github.com/ProperJS/Router/blob/master/Router.js#L222}
	     *
	     */
	    route: function route(path) {
	        this.controller.getRouter().trigger(path);
	    },
	
	    /**
	     *
	     * @public
	     * @method push
	     * @param {string} path The uri to route to
	     * @param {function} cb Optional callback to fire
	     * @memberof router
	     * @description Trigger a silent route with a supplied callback.
	     *
	     */
	    push: function push(path, cb) {
	        this.controller.routeSilently(path, cb || core.util.noop);
	        this.checkState();
	    },
	
	    /**
	     *
	     * @public
	     * @method initPageController
	     * @memberof router
	     * @description Create the PageController instance.
	     *
	     */
	    initPageController: function initPageController() {
	        this.controller = new _properjsPagecontroller2["default"]({
	            transitionTime: this.pageDuration
	        });
	
	        this.controller.setConfig(["*"]);
	
	        this.controller.setModules([core.images, _cover2["default"], _animate2["default"]]);
	
	        this.controller.on("page-controller-router-samepage", function () {
	            return _menusNav2["default"].close();
	        });
	        this.controller.on("page-controller-router-transition-out", this.changePageOut.bind(this));
	        this.controller.on("page-controller-router-refresh-document", this.changeContent.bind(this));
	        this.controller.on("page-controller-router-transition-in", this.changePageIn.bind(this));
	        this.controller.on("page-controller-initialized-page", this.initPage.bind(this));
	
	        this.controller.initPage();
	    },
	
	    /**
	     *
	     * @public
	     * @method initPage
	     * @param {string} html The responseText to parse out
	     * @memberof router
	     * @description Cache the initial page load.
	     *
	     */
	    initPage: function initPage(html) {
	        var cache = this.parseDoc(html);
	
	        this.cachePage(cache.$object, cache.response);
	
	        _menusNav2["default"].padPage();
	    },
	
	    /**
	     *
	     * @public
	     * @method parseDoc
	     * @param {string} html The responseText to parse out
	     * @memberof router
	     * @description Get the DOM information to cache for a request.
	     * @returns {object}
	     *
	     */
	    parseDoc: function parseDoc(html) {
	        var doc = document.createElement("html");
	
	        doc.innerHTML = html;
	
	        doc = (0, _js_libsHoboDistHoboBuild2["default"])(doc);
	
	        return {
	            $object: doc,
	            response: doc.find(".js-page")[0].innerHTML
	        };
	    },
	
	    /**
	     *
	     * @public
	     * @method cachePage
	     * @param {Hobo} $object The node for use
	     * @param {string} response The XHR responseText
	     * @memberof router
	     * @description Cache the DOM content for a page once its parsed out.
	     *
	     */
	    cachePage: function cachePage($object, response) {
	        core.cache.set(core.util.getPageKey(), {
	            $object: $object,
	            response: response
	        });
	    },
	
	    /**
	     *
	     * @public
	     * @method bindEmptyHashLinks
	     * @memberof router
	     * @description Suppress #hash links.
	     *
	     */
	    bindEmptyHashLinks: function bindEmptyHashLinks() {
	        core.dom.body.on("click", "[href^='#']", function (e) {
	            return e.preventDefault();
	        });
	    },
	
	    /**
	     *
	     * @public
	     * @method onPreloadDone
	     * @memberof router
	     * @description Finish routing sequence when image pre-loading is done.
	     *
	     */
	    onPreloadDone: function onPreloadDone() {
	        core.util.disableMouseWheel(false);
	        core.util.disableTouchMove(false);
	
	        core.dom.html.removeClass("is-routing");
	        core.dom.page.removeClass("is-inactive");
	
	        core.scrolls.topout(0);
	        core.scrolls.clearStates();
	
	        setTimeout(function () {
	            core.emitter.fire("app--intro-art");
	        }, this.pageDuration);
	
	        core.emitter.off("app--preload-done", this.onPreloadDone);
	    },
	
	    /**
	     *
	     * @public
	     * @method changePageOut
	     * @memberof router
	     * @description Trigger transition-out animation.
	     *
	     */
	    changePageOut: function changePageOut() {
	        core.util.disableMouseWheel(true);
	        core.util.disableTouchMove(true);
	
	        core.dom.html.addClass("is-routing");
	        core.dom.page.addClass("is-inactive");
	
	        setTimeout(function () {
	            return _menusNav2["default"].close();
	        }, this.pageDuration);
	
	        core.emitter.on("app--preload-done", this.onPreloadDone);
	    },
	
	    /**
	     *
	     * @public
	     * @method changeContent
	     * @param {string} html The responseText as an HTML string
	     * @memberof router
	     * @description Swap the new content into the DOM.
	     *
	     */
	    changeContent: function changeContent(html) {
	        var cached = core.cache.get(core.util.getPageKey());
	
	        if (!cached) {
	            cached = this.parseDoc(html);
	
	            this.cachePage(cached.$object, cached.response);
	        }
	
	        core.dom.page[0].innerHTML = cached.response;
	
	        core.emitter.fire("app--analytics-push", html, cached.$object);
	
	        // Check state before cycle finishes so `checked` state can be deleted
	        this.checkState();
	    },
	
	    /**
	     *
	     * @public
	     * @method changePageIn
	     * @param {object} data The data object supplied by PageController from PushState
	     * @memberof router
	     * @description Trigger transition-in animation.
	     *
	     */
	    changePageIn: function changePageIn(data) {
	        var collection = data.request.uri.split("/")[0];
	
	        _menusNav2["default"].toggleActive(collection);
	    }
	};
	
	/******************************************************************************
	 * Export
	*******************************************************************************/
	exports["default"] = router;
	module.exports = exports["default"];

/***/ },
/* 2 */
/*!*****************************************!*\
  !*** ./js_libs/hobo/dist/hobo.build.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["hobo"] = __webpack_require__(/*! -!./js_libs/hobo/dist/hobo.build.js */ 3);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 3 */
/*!*****************************************!*\
  !*** ./js_libs/hobo/dist/hobo.build.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	/*!
	 *
	 *
	 * @method hobo
	 * @author kitajchuk
	 * @hobo-dist npm run build -- eq not filter detach append remove
	 *
	 * @links
	 * https://developer.mozilla.org/en-US/docs/Web/API/Node
	 * https://developer.mozilla.org/en-US/docs/Web/API/Element
	 * https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
	 *
	 * https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
	 *
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
	 * https://github.com/jakearchibald/es6-promise
	 * http://www.html5rocks.com/en/tutorials/es6/promises/
	 *
	 *
	 */
	(function ( factory ) {
	
	    if ( true ) {
	        module.exports = factory();
	
	    } else if ( typeof window !== "undefined" ) {
	        window.hobo = factory();
	    }
	
	})(function () {
	
	    var Hobo = __webpack_require__( /*! ../lib/Hobo */ 4 ),
	        utils = __webpack_require__( /*! ../lib/utils */ 5 );
	
	
	    // Core Hobo methods:
	    Hobo.prototype.on = __webpack_require__( /*! ../lib/core/on */ 6 );
	    Hobo.prototype.off = __webpack_require__( /*! ../lib/core/off */ 8 );
	    Hobo.prototype.data = __webpack_require__( /*! ../lib/core/data */ 9 );
	    Hobo.prototype.find = __webpack_require__( /*! ../lib/core/find */ 10 );
	    Hobo.prototype.addClass = __webpack_require__( /*! ../lib/core/addClass */ 11 );
	    Hobo.prototype.removeClass = __webpack_require__( /*! ../lib/core/removeClass */ 12 );
	
	
	    // Extended Hobo methods:
	    Hobo.prototype.eq = __webpack_require__( /*! ../lib/extended/eq */ 13 );
	    Hobo.prototype.not = __webpack_require__( /*! ../lib/extended/not */ 14 );
	    Hobo.prototype.filter = __webpack_require__( /*! ../lib/extended/filter */ 15 );
	    Hobo.prototype.detach = __webpack_require__( /*! ../lib/extended/detach */ 16 );
	    Hobo.prototype.append = __webpack_require__( /*! ../lib/extended/append */ 17 );
	    Hobo.prototype.remove = __webpack_require__( /*! ../lib/extended/remove */ 18 );
	
	
	    /**
	     *
	     * @public
	     * @method hobo
	     * @description Wrapper for `Hobo` instances.
	     * @param {string} selector The parameter passed to `querySelectorAll`
	     * @param {element} context The Element used to call `querySelectorAll`
	     *
	     */
	    hobo = function ( selector, context ) {
	        return new Hobo( selector, context );
	    };
	
	
	    // Attach Hobo utilities to `wrapper` method
	    hobo.ajax = __webpack_require__( /*! ../lib/core/ajax */ 19 );
	
	
	    return hobo;
	
	});

/***/ },
/* 4 */
/*!**********************************!*\
  !*** ./js_libs/hobo/lib/Hobo.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	/*!
	 *
	 * 
	 * @Hobo
	 * @author: kitajchuk
	 *
	 *
	 */
	var utils = __webpack_require__( /*! ./utils */ 5 ),
	    array = [];
	
	
	/**
	 *
	 * @class Hobo
	 * @classdesc A very small, modular DOM utility for modern web apps.
	 * @param {string} selector The goods - String, Element, Collection.
	 * @param {element} context The Element used to call `querySelectorAll`
	 *
	 */
	var Hobo = function ( selector, context ) {
	    // Hobo version?
	    this._hobo = utils.version;
	
	    // Hobo context
	    this._context = (context && context.nodeType && context.nodeType === 1 ? context : document);
	
	    // Hobo selector / elements
	    // Hobo supports a mixed selector argument
	
	    // Handle Window
	    // Handle Document
	    // Handle DOMElement
	    if ( selector === window || selector === document || (selector.nodeType && selector.nodeType === 1) ) {
	        this._selector = "";
	        selector = [ selector ];
	
	    // Handle String
	    } else if ( typeof selector === "string" ) {
	        // Trim trailing whitespace from the string
	        selector = utils.trimString( selector );
	
	        // Handle string html => Element creation
	        if ( utils.rTag.test( selector ) ) {
	            // Then remove the doctype - `<!DOCTYPE html>`
	            selector = selector.replace( utils.rDocType, "" );
	
	            // Create a dummy `hobo` element
	            // Dump the HTML payload in the `hobo` element
	            // Extract the elements from the `hobo` element
	            var el = document.createElement( "hobo" );
	                el.innerHTML = selector;
	
	            // Format elements as a true Array
	            selector = utils.makeArray( el.children );
	
	            el = null;
	
	        // Handle string selector
	        } else {
	            this._selector = selector;
	            selector = utils.makeArray( this._context.querySelectorAll( selector ) );
	        }
	
	    // Handle Collection: NodeList, HTMLCollection, Array
	    } else if ( selector.length !== undefined ) {
	        this._selector = "";
	        selector = utils.makeArray( selector );
	    }
	
	    // Hobo events?
	    this._events = {};
	
	    // Hobo length?
	    this.length = selector.length;
	
	    // Hobo elements?
	    for ( var i = this.length; i--; ) {
	        this[ i ] = selector[ i ];
	    }
	
	    // Initial mapping of each nodes data.
	    // Transfer {DOMStringMap} => {hoboDataMap}
	    this.forEach( utils.makeData );
	};
	
	
	// Shim Array-like presentation in console
	Hobo.prototype.splice = array.splice;
	
	
	/**
	 *
	 * @instance
	 * @method forEach
	 * @param {function} callback The method called on each iteration
	 * @memberof Hobo
	 * @description Make sure Hobo is iterable like an Array
	 *
	 */
	Hobo.prototype.each = array.forEach;
	Hobo.prototype.forEach = array.forEach;
	
	
	/**
	 *
	 * @instance
	 * @method push
	 * @param {?} element element1, ..., elementN
	 * @memberof Hobo
	 * @description Make sure Hobo is pushable like an Array
	 *
	 */
	Hobo.prototype.push = array.push;
	
	
	/**
	 *
	 * @instance
	 * @method map
	 * @param {function} callback The method called for each element
	 * @memberof Hobo
	 * @description Make sure Hobo is mappable like an Array
	 *
	 */
	Hobo.prototype.map = array.map;
	
	
	// Export the main Hobo Class :D
	module.exports = Hobo;

/***/ },
/* 5 */
/*!***********************************!*\
  !*** ./js_libs/hobo/lib/utils.js ***!
  \***********************************/
/***/ function(module, exports) {

	/*!
	 *
	 *
	 * @Hobo-utils
	 * @author: kitajchuk
	 *
	 *
	 */
	var version = "0.3.6",
	
	
	    rData = /^data-/,
	
	
	    rDigit = /\D/g,
	
	
	    rDashAlpha = /-([\da-z])/gi,
	
	
	    rTag = /^</,
	
	
	    rJson = /^\[|\{/,
	
	
	    rDocType = /^<\!DOCTYPE\shtml>/i,
	
	
	    rFront2Back = /^\s+|\s+$/g,
	
	
	    trimString = function ( str ) {
	        return str.replace( rFront2Back, "" );
	    },
	
	
	    camelCase = function ( string ) {
	        return string.replace( rDashAlpha, function ( all, letter ) {
	            return letter.toUpperCase();
	        });
	    },
	
	
	    makeId = function () {
	        return ("hobo" + ( version + Math.random() ).replace( rDigit, "" ));
	    },
	
	
	    makeArray = function ( nodes ) {
	        return [].slice.call( nodes );
	    },
	
	
	    makeData = function ( node ) {
	        if ( !node.hoboDataMap ) {
	            node.hoboDataMap = {};
	        }
	
	        if ( node.dataset ) {
	            _mapDataset( node );
	
	        } else if ( node.attributes ) {
	            _mapAttributes( node );
	        }
	    },
	
	
	    storeData = function ( data, node ) {
	        var id,
	            i;
	
	        for ( i in data ) {
	            if ( data.hasOwnProperty( i ) ) {
	                id = camelCase( i );
	
	                node.hoboDataMap[ id ] = data[ i ];
	            }
	        }
	    },
	
	
	    mergeData = function ( data, node ) {
	        for ( var i in node.hoboDataMap ) {
	            if ( node.hoboDataMap.hasOwnProperty( i ) && !data[ i ] ) {
	                data[ i ] = node.hoboDataMap[ i ];
	            }
	        }
	    },
	
	
	    retrieveData = function ( key, node ) {
	        var ret = null;
	
	        // All data mapped into Hobo will be camel-cased
	        key = camelCase( key );
	
	        if ( node.hoboDataMap && node.hoboDataMap[ key ] ) {
	            ret = node.hoboDataMap[ key ];
	        }
	
	        return ret;
	    },
	
	
	    removeData = function ( key, node ) {
	        // All data mapped into Hobo will be camel-cased
	        key = camelCase( key );
	
	        if ( node.hoboDataMap && node.hoboDataMap[ key ] ) {
	            delete node.hoboDataMap[ key ];
	        }
	    },
	
	
	    serializeData = function ( data, prefix ) {
	        var str = [],
	            key,
	            val,
	            i;
	
	        for ( i in data ) {
	            if ( data.hasOwnProperty( i ) ) {
	                key = prefix ? (prefix + "[" + i + "]") : i;
	                val = data[ i ];
	
	                if ( typeof val === "object" ) {
	                    str.push( serializeData( val, key ) );
	
	                } else {
	                    str.push( (encodeURIComponent( key ) + "=" + encodeURIComponent( val )) );
	                }
	            }
	        }
	
	        return str.join( "&" );
	    },
	
	
	    // DOMStringMap camel-cases data- attributes.
	    // NamedNodeMap is a fallback which supports IE 10.
	    // Data mapped through Hobo must camel-case as well.
	
	
	    _getDataValue = function ( data ) {
	        if ( rJson.test( data ) ) {
	            try {
	                data = JSON.parse( data );
	
	            } catch ( error ) {
	                throw error;
	            }
	        }
	
	        return data;
	    },
	
	
	    // Use {NamedNodeMap}
	    _mapAttributes = function ( node ) {
	        var i = node.attributes.length;
	
	        for ( i; i--; ) {
	            if ( rData.test( node.attributes[ i ].name ) ) {
	                var key = camelCase( node.attributes[ i ].name.replace( rData, "" ) );
	
	                node.hoboDataMap[ key ] = _getDataValue( node.attributes[ i ].value );
	            }
	        }
	    },
	
	
	    // Use {DOMStringMap}
	    _mapDataset = function ( node ) {
	        for ( var i in node.dataset ) {
	            if ( node.dataset.hasOwnProperty( i ) ) {
	                node.hoboDataMap[ i ] = _getDataValue( node.dataset[ i ] );
	            }
	        }
	    };
	
	
	module.exports = {
	    version: version,
	    rData: rData,
	    rDigit: rDigit,
	    rTag: rTag,
	    rJson: rJson,
	    rDocType: rDocType,
	    rFront2Back: rFront2Back,
	    trimString: trimString,
	    camelCase: camelCase,
	    makeId: makeId,
	    makeArray: makeArray,
	    makeData: makeData,
	    storeData: storeData,
	    retrieveData: retrieveData,
	    mergeData: mergeData,
	    removeData: removeData,
	    serializeData: serializeData
	};

/***/ },
/* 6 */
/*!*************************************!*\
  !*** ./js_libs/hobo/lib/core/on.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	var matchElement = __webpack_require__( /*! properjs-matchelement */ 7 ),
	    utils = __webpack_require__( /*! ../utils */ 5 );
	
	
	/**
	 *
	 * @private
	 * @method bind
	 * @description Bind a standard DOM Event.
	 * @param {element} node
	 * @param {string} event
	 * @param {string} selector
	 * @param {function} callback
	 * @this {Hobo}
	 *
	 */
	var bind = function ( node, event, selector, callback ) {
	    // Unique ID for each node event
	    var eventId = (utils.makeId() + "EVENT"),
	
	        // The true event name
	        eventType = event,
	
	        // Normalize event handler with a small wrapper function
	        eventHandler = function ( e ) {
	            // Default context is `this` element
	            var context = (selector ? matchElement( e.target, selector, true ) : this);
	
	            // Handle `mouseenter` and `mouseleave`
	            if ( event === "mouseenter" || event === "mouseleave" ) {
	                var relatedElement = (event === "mouseenter" ? e.fromElement : e.toElement);
	
	                if ( context && ( relatedElement !== context && !context.contains( relatedElement ) ) ) {
	                    callback.call( context, e );
	                }
	
	            // Fire callback if context element
	            } else if ( context ) {
	                callback.call( context, e );
	            }
	        };
	
	    // Support `mouseenter` and `mouseleave`
	    if ( event === "mouseenter" ) {
	        eventType = "mouseover";
	
	    } else if ( event === "mouseleave" ) {
	        eventType = "mouseout";
	    }
	
	    // Each handler/callback pair gets stored in an `events` index
	    this._events[ event ][ eventId ] = {
	        id: eventId,
	        type: eventType,
	        node: node,
	        handler: eventHandler,
	        callback: callback
	    };
	
	    node.addEventListener( eventType, eventHandler, false );
	};
	
	
	/**
	 *
	 * @instance
	 * @memberof Hobo
	 * @method on
	 * @description Bind a standard DOM Event. Honor delegation as a primary.
	 * @param {string} events 
	 * @param {string} selector 
	 * @param {function} callback
	 * @returns {Hobo}
	 *
	 */
	module.exports = function ( events, selector, callback ) {
	    var self = this;
	
	    // Normalize `selector` and `callback`
	    if ( !callback ) {
	        callback = selector;
	        selector = this._selector;
	    }
	
	    // Iterate over event(s)
	    // Space separated event list is supported
	    // Example: "DOMMouseScroll mousewheel"
	    events.split( " " ).forEach(function ( event ) {
	        // Does this event type have an index yet
	        if ( !self._events[ event ] ) {
	            self._events[ event ] = {};
	        }
	
	        self.forEach(function ( node ) {
	            bind.call( self, node, event, selector, callback );
	        });
	    });
	
	    return this;
	};

/***/ },
/* 7 */
/*!**************************************************************!*\
  !*** ./js_libs/hobo/~/properjs-matchelement/matchElement.js ***!
  \**************************************************************/
/***/ function(module, exports, __webpack_require__) {

	/*!
	 *
	 * Use native element selector matching
	 *
	 * @matchElement
	 * @author: kitajchuk
	 *
	 */
	(function ( factory ) {
	    
	    if ( true ) {
	        module.exports = factory();
	
	    } else if ( typeof window !== "undefined" ) {
	        window.matchElement = factory();
	    }
	    
	})(function () {
	
	    /**
	     *
	     * Use native element selector matching
	     * @memberof! <global>
	     * @method matchElement
	     * @param {object} el the element
	     * @param {string} selector the selector to match
	     * @param {boolean} walk should we walk the tree if el is not a match?
	     * @returns element OR null
	     *
	     */
	    var matchElement = function ( el, selector, walk ) {
	        var method = ( el.matches ) ? "matches" : ( el.webkitMatchesSelector ) ? 
	                                      "webkitMatchesSelector" : ( el.mozMatchesSelector ) ? 
	                                      "mozMatchesSelector" : ( el.msMatchesSelector ) ? 
	                                      "msMatchesSelector" : ( el.oMatchesSelector ) ? 
	                                      "oMatchesSelector" : null;
	
	        // Try testing the element against the selector
	        // 0.1 => Method is not undefined
	        // 0.2 => Element passes method call
	        if ( method && el[ method ].call( el, selector ) ) {
	            return el;
	
	        // Keep walking up the DOM if we can - only if `walk` flag is `true`
	        } else if ( walk && el !== document.documentElement && el.parentNode ) {
	            return matchElement( el.parentNode, selector, walk );
	
	        // Otherwise we should not execute an event
	        } else {
	            return null;
	        }
	    };
	
	
	    return matchElement;
	
	});

/***/ },
/* 8 */
/*!**************************************!*\
  !*** ./js_libs/hobo/lib/core/off.js ***!
  \**************************************/
/***/ function(module, exports) {

	/**
	 *
	 * @private
	 * @method unbind
	 * @description Unbind a standard DOM Event.
	 * @param {element} node
	 * @param {string} event
	 * @param {function} callback
	 * @this {Hobo}
	 *
	 */
	var unbind = function ( node, event, callback ) {
	    var type,
	        evo,
	        id;
	
	    // Remove a single handler for an event type
	    if ( callback ) {
	        for ( id in this._events[ event ] ) {
	            if ( this._events[ event ].hasOwnProperty( id ) ) {
	                evo = this._events[ event ][ id ];
	
	                // Match the nodes, Match the callback
	                if ( evo.node === node && evo.callback === callback ) {
	                    node.removeEventListener( evo.type, evo.handler, false );
	
	                    delete this._events[ event ][ id ];
	                }
	            }
	        }
	
	    // Remove all handlers for an event type
	    } else {
	        for ( id in this._events[ event ] ) {
	            if ( this._events[ event ].hasOwnProperty( id ) ) {
	                evo = this._events[ event ][ id ];
	
	                // Match the nodes
	                if ( evo.node === node ) {
	                    node.removeEventListener( evo.type, evo.handler, false );
	
	                    delete this._events[ event ][ id ];
	                }
	            }
	        }
	    }
	};
	
	
	/**
	 *
	 * @private
	 * @method teardown
	 * @description Unbind all events for instance.
	 * @param {element} node
	 * @this {Hobo}
	 *
	 */
	var teardown = function ( node ) {
	    var type,
	        evo,
	        id;
	
	    for ( type in this._events ) {
	        if ( this._events.hasOwnProperty( type ) ) {
	            for ( id in this._events[ type ] ) {
	                if ( this._events[ type ].hasOwnProperty( id ) ) {
	                    evo = this._events[ type ][ id ];
	
	                    // Match the nodes
	                    if ( evo.node === node ) {
	                        node.removeEventListener( evo.type, evo.handler, false );
	
	                        delete this._events[ type ][ id ];
	                    }
	                }
	            }
	        }
	    }
	};
	
	
	/**
	 *
	 * @instance
	 * @memberof Hobo
	 * @method off
	 * @description Un-Bind a standard DOM Event.
	 * @param {string} events The event type
	 * @param {function} callback The supplied callback
	 * @returns {Hobo}
	 *
	 */
	module.exports = function ( events, callback ) {
	    var self = this;
	
	    // Iterate over event(s)
	    // Space separated event list is supported
	    // Example: "DOMMouseScroll mousewheel"
	    // off() can be called with no args, account for this and remove ALL events
	    (events ? events.split( " " ) : [null]).forEach(function ( event ) {
	        self.forEach(function ( node ) {
	            // Explicit `null` check for teardown
	            if ( event === null ) {
	                teardown.call( self, node );
	
	            } else {
	                unbind.call( self, node, event, callback );
	            }
	        });
	    });
	
	    return this;
	};

/***/ },
/* 9 */
/*!***************************************!*\
  !*** ./js_libs/hobo/lib/core/data.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	var utils = __webpack_require__( /*! ../utils */ 5 );
	
	
	/**
	 *
	 * @instance
	 * @memberof Hobo
	 * @method data
	 * @description Get / set data values with nodes.
	 * @param {string} key The access key
	 * @param {string} value The value to be stored
	 * @returns {mixed}
	 *
	 */
	module.exports = function ( key, value ) {
	    // Any `non-unique` data keys resolve to the first unique occurrence
	    // Exactly how jQuery handles `.data( ... )` on multi-node collections
	
	    var ret = this,
	        obj = null;
	
	    // Storing data from an Object
	    if ( typeof key === "object" ) {
	        obj = key;
	
	        this.forEach(function ( node ) {
	            utils.storeData( obj, node );
	        });
	
	    // Storing data as a `key:value` pair
	    } else if ( value ) {
	        obj = {};
	        obj[ key ] = value;
	
	        this.forEach(function ( node ) {
	            utils.storeData( obj, node );
	        });
	
	    // Accessing data by `key`
	    } else if ( key ) {
	        this.forEach(function ( node ) {
	            if ( obj !== null ) {
	                return;
	            }
	
	            obj = utils.retrieveData( key, node );
	
	        });
	
	        ret = obj;
	
	    // Accessing all data
	    // Merges all `unique` data for a Hobo set
	    } else {
	        obj = {};
	
	        // Object is mutated here by `mergeData`
	        this.forEach(function ( node ) {
	            utils.mergeData( obj, node );
	        });
	
	        ret = obj;
	    }
	
	    return ret;
	};

/***/ },
/* 10 */
/*!***************************************!*\
  !*** ./js_libs/hobo/lib/core/find.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	var Hobo = __webpack_require__( /*! ../Hobo */ 4 ),
	    utils = __webpack_require__( /*! ../utils */ 5 );
	
	
	/**
	 *
	 * @instance
	 * @memberof Hobo
	 * @method find
	 * @description Query into a Hobo instance for new nodes.
	 * @param {string} selector The selector to query for
	 * @returns {Hobo}
	 *
	 */
	module.exports = function ( selector ) {
	    var ret = this;
	
	    // If we are `finding` within a multi-node collection...
	    // Here its probably faster to grab the nodes within each Node
	    // and then just let the context be the document for the new instance. 
	    if ( this.length > 1 ) {
	        ret = [];
	
	        this.forEach(function ( node ) {
	            ret = ret.concat( utils.makeArray( node.querySelectorAll( selector ) ) );
	        });
	
	        ret = new Hobo( ret, null );
	
	    // Single node collection
	    // Empty node collection
	    } else {
	        ret = new Hobo( (this.length ? selector : []), (this.length ? this[ 0 ] : null) );
	    }
	
	    return ret;
	};

/***/ },
/* 11 */
/*!*******************************************!*\
  !*** ./js_libs/hobo/lib/core/addClass.js ***!
  \*******************************************/
/***/ function(module, exports) {

	/**
	 *
	 * @instance
	 * @memberof Hobo
	 * @method addClass
	 * @description Add one or more classNames to the nodes.
	 * @param {string} classes The space-separated classNames
	 * @returns {Hobo}
	 *
	 */
	module.exports = function ( classes ) {
	    this.forEach(function ( element ) {
	        var newClass = classes.split( " " ),
	            elsClass = element.className.split( " " );
	
	        newClass.forEach(function ( klass ) {
	            if ( elsClass.indexOf( klass ) === -1 ) {
	                elsClass.push( klass );
	            }
	        });
	
	        element.className = elsClass.join( " " );
	    });
	
	    return this;
	};

/***/ },
/* 12 */
/*!**********************************************!*\
  !*** ./js_libs/hobo/lib/core/removeClass.js ***!
  \**********************************************/
/***/ function(module, exports) {

	/**
	 *
	 * @instance
	 * @memberof Hobo
	 * @method removeClass
	 * @description Remove one or more classNames from the nodes.
	 * @param {string} classes The space-separated classNames
	 * @returns {Hobo}
	 *
	 */
	module.exports = function ( classes ) {
	    this.forEach(function ( element ) {
	        // Explicit check for `undefined`
	        // Using `!classes` would be bad in this case
	        // Calling `removeClass( "" )` should not wipe the entire className
	        if ( classes === undefined ) {
	            element.className = "";
	
	        } else {
	            var oldClass = classes.split( " " ),
	                elsClass = element.className.split( " " );
	
	            oldClass.forEach(function ( klass ) {
	                if ( elsClass.indexOf( klass ) !== -1 ) {
	                    elsClass.splice( elsClass.indexOf( klass ), 1 );
	                }
	            });
	
	            element.className = elsClass.join( " " );
	        }
	    });
	
	    return this;
	};

/***/ },
/* 13 */
/*!*****************************************!*\
  !*** ./js_libs/hobo/lib/extended/eq.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	var Hobo = __webpack_require__( /*! ../Hobo */ 4 );
	
	
	/**
	 *
	 * @instance
	 * @memberof Hobo
	 * @method eq
	 * @param {number} i The indexOf the element
	 * @description Get the element at the index as a Hobo instance.
	 * @returns {Hobo}
	 *
	 */
	module.exports = function ( i ) {
	    return i < this.length 
	            ? new Hobo(
	                this[ i ],
	                this._context
	            ) 
	            : this;
	};

/***/ },
/* 14 */
/*!******************************************!*\
  !*** ./js_libs/hobo/lib/extended/not.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	var matchElement = __webpack_require__( /*! properjs-matchelement */ 7 ),
	    Hobo = __webpack_require__( /*! ../Hobo */ 4 );
	
	
	/**
	 *
	 * @instance
	 * @memberof Hobo
	 * @method not
	 * @param {string} selector The selector to filter out elements
	 * @description Filter out elements that are NOT this selector
	 * @returns {Hobo}
	 *
	 */
	module.exports = function ( selector ) {
	    var keepers = new Hobo( [], this._context );
	
	    // Hobo instance
	    if ( selector instanceof Hobo ) {
	        this.forEach(function ( node ) {
	            var pushNode = true;
	
	            selector.forEach(function ( elem ) {
	                if ( node === elem ) {
	                    pushNode = false;
	                }
	            });
	
	            if ( pushNode ) {
	                keepers.push( node );
	            }
	        });
	
	    } else {
	        this.forEach(function ( node, i ) {
	            if ( typeof selector === "function" && selector( i, node ) ) {
	                keepers.push( node );
	
	            } else if ( !matchElement( node, selector ) ) {
	                keepers.push( node );
	            }
	        });
	    }
	
	    return keepers;
	};

/***/ },
/* 15 */
/*!*********************************************!*\
  !*** ./js_libs/hobo/lib/extended/filter.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	var Hobo = __webpack_require__( /*! ../Hobo */ 4 ),
	    matchElement = __webpack_require__( /*! properjs-matchelement */ 7 );
	
	
	/**
	 *
	 * @instance
	 * @memberof Hobo
	 * @method filter
	 * @param {string} selector The selector to match elements against
	 * @description Filter out the elements that match the selector.
	 * @returns {Hobo}
	 *
	 */
	module.exports = function ( selector ) {
	    var filtered = [];
	
	    this.forEach(function ( node ) {
	        if ( matchElement( node, selector ) ) {
	            filtered.push( node );
	        }
	    });
	
	    return new Hobo( filtered, null );
	};

/***/ },
/* 16 */
/*!*********************************************!*\
  !*** ./js_libs/hobo/lib/extended/detach.js ***!
  \*********************************************/
/***/ function(module, exports) {

	/**
	 *
	 * @instance
	 * @memberof Hobo
	 * @method detach
	 * @description Detach the nodes from the DOM
	 *              This method does NOT remove events or data.
	 * @returns {Hobo}
	 *
	 */
	module.exports = function () {
	    this.forEach(function ( node ) {
	        if ( node.parentNode ) {
	            node.parentNode.removeChild( node );
	        }
	    });
	
	    return this;
	};

/***/ },
/* 17 */
/*!*********************************************!*\
  !*** ./js_libs/hobo/lib/extended/append.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	var Hobo = __webpack_require__( /*! ../Hobo */ 4 );
	
	
	/**
	 *
	 * @instance
	 * @memberof Hobo
	 * @method append
	 * @param {mixed} appendage What to append? Hobo, Element...
	 * @description Append the nodes to the DOM
	 * @returns {Hobo}
	 *
	 */
	module.exports = function ( appendage ) {
	    // Selector string, wrap in new Hobo instance
	    if ( typeof appendage === "string" ) {
	        appendage = new Hobo( appendage );
	    }
	
	    this.forEach(function ( node ) {
	        // Hobo instance OR Array OR Array-like object with forEach
	        if ( appendage instanceof Hobo || (appendage.length && typeof appendage.forEach === "function") ) {
	            appendage.forEach(function ( append ) {
	                if ( append.nodeType && append.nodeType === 1 ) {
	                    node.appendChild( append );
	                }
	            });
	
	        } else if ( appendage.nodeType ) {
	            node.appendChild( appendage );
	        }
	    });
	
	    return this;
	};

/***/ },
/* 18 */
/*!*********************************************!*\
  !*** ./js_libs/hobo/lib/extended/remove.js ***!
  \*********************************************/
/***/ function(module, exports) {

	/**
	 *
	 * @instance
	 * @memberof Hobo
	 * @method remove
	 * @description Remove the nodes from the DOM
	 *              This method will remove events and data.
	 * @returns {Hobo}
	 *
	 */
	module.exports = function () {
	    // Remove Events
	    this.off();
	
	    this.forEach(function ( node ) {
	        // Remove Data
	        // Could this cause issues ?
	        delete node.hoboDataMap;
	
	        if ( node.parentNode ) {
	            node.parentNode.removeChild( node );
	        }
	    });
	
	    return this;
	};

/***/ },
/* 19 */
/*!***************************************!*\
  !*** ./js_libs/hobo/lib/core/ajax.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	var utils = __webpack_require__( /*! ../utils */ 5 );
	
	
	/**
	 *
	 * @static
	 * @memberof Hobo
	 * @method ajax
	 * @description Perform standar XHR with a native Promise.
	 *              dataType can be `html`, `json`, `jsonp`.
	 * @param {object} config The ajax config object
	 *                        url       => string, default: window.location.href
	 *                        data      => object, default: null
	 *                        dataType  => string, default: "html"
	 *                        method    => string, default: "GET"
	 *                        jsonp     => string, default: "callback"
	 *                        headers   => object, default: null
	 * @returns {Promise}
	 *
	 */
	module.exports = function ( config ) {
	    var params = (config.data ? utils.serializeData( config.data ) : null),
	        dataType = (config.dataType || "html"),
	        method = (config.method || "get").toUpperCase(),
	        url = (config.url || window.location.href),
	        headers = (config.headers || null);
	
	    if ( method === "GET" && params ) {
	        url += ("?" + params);
	    }
	
	    return new Promise(function ( resolve, reject ) {
	        var handleResponse = function ( response ) {
	            if ( dataType === "json" ) {
	                try {
	                    response = JSON.parse( response );
	
	                } catch ( error ) {
	                    reject( ("Rejecting on JSON.parse error : " + error) );
	                }
	            }
	
	            resolve( response );
	        };
	
	        // JSONP
	        if ( dataType === "jsonp" ) {
	            var jsonpCallbackValue = (utils.makeId() + "JSONP"),
	                jsonpCallbackKey = (config.jsonp || "callback"),
	                jsonpScript = document.createElement( "script" );
	
	            jsonpScript.src = (url + (/\?/.test( url ) ? "&" : "?") + jsonpCallbackKey + "=" + jsonpCallbackValue);
	
	            window[ jsonpCallbackValue ] = function ( response ) {
	                document.getElementsByTagName( "head" )[ 0 ].removeChild( jsonpScript );
	                jsonpScript = null;
	                delete window[ jsonpCallbackValue ];
	
	                handleResponse( response );
	            };
	
	            document.getElementsByTagName( "head" )[ 0 ].appendChild( jsonpScript );
	
	        // XHR
	        } else {
	            var xhr = new XMLHttpRequest();
	
	            xhr.open( method, url, true );
	
	            if ( headers ) {
	                for ( var header in headers ) {
	                    if ( headers.hasOwnProperty( header ) ) {
	                        xhr.setRequestHeader( header, headers[ header ] );
	                    }
	                }
	            }
	
	            xhr.onreadystatechange = function ( e ) {
	                if ( this.readyState === 4 ) {
	                    // Two-Hundo's are A-Okay with Hobo
	                    if ( /^20/.test( this.status ) ) {
	                        handleResponse( this.responseText );
	
	                    } else {
	                        reject( ("Rejecting on server status code : " + this.status) );
	                    }
	                }
	            };
	
	            xhr.send( ((method === "POST" && params) ? params : null) );
	        }
	    });
	};

/***/ },
/* 20 */
/*!*****************************************************!*\
  !*** ./~/properjs-pagecontroller/PageController.js ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

	/*!
	 *
	 * Asynchronous webpage transitioning with pushstate management.
	 *
	 * @PageController
	 * @author: kitajchuk
	 *
	 * @module
	 * - init
	 * - isActive
	 * - onload
	 * - unload
	 *
	 *
	 */
	(function ( factory ) {
	
	    if ( true ) {
	        module.exports = factory();
	
	    } else if ( typeof window !== "undefined" ) {
	        window.PageController = factory();
	    }
	
	})(function () {
	
	    // Useful stuff
	    var Router = __webpack_require__( /*! properjs-router */ 21 ),
	        Controller = __webpack_require__( /*! properjs-controller */ 26 ),
	
	        _router = null,
	        _config = [],
	        _modules = [],
	        _synced = {
	            active: [],
	            inactive: []
	        },
	        _initialized = false,
	        _timeBefore = null,
	        _timeDelay = 600,
	        _eventPrefix = "page-controller-",
	        _currentRoute = null,
	        _isFirstRoute = true,
	        _currentQuery = null,
	        _currentToString = null,
	        _isSamePage = false,
	        _silentMode = false,
	        _silentCallback = null,
	        _isRoutingActive = false,
	
	        // Singleton
	        _instance = null,
	
	
	    // Private functions
	    fire = function ( event, arg ) {
	        if ( !_silentMode ) {
	            _instance.fire( (_eventPrefix + event), arg );
	        }
	    },
	
	
	    isFunction = function ( fn ) {
	        return (typeof fn === "function");
	    },
	
	
	    isSameObject = function ( o1, o2 ) {
	        return (JSON.stringify( o1 ) === JSON.stringify( o2 ));
	    },
	
	
	    execInit = function ( method ) {
	        // One time module initialization
	        for ( var i = _modules.length; i--; ) {
	            if ( !_modules[ i ].__initialized && isFunction( _modules[ i ].init ) ) {
	                _modules[ i ].__initialized = true;
	                _modules[ i ].init();
	            }
	        }
	    },
	
	
	    execUnload = function () {
	        if ( _silentMode ) {
	            return;
	        }
	
	        // Unload currently active modules only
	        for ( var i = _synced.active.length; i--; ) {
	            if ( isFunction( _synced.active[ i ].unload ) ) {
	                _synced.active[ i ].unload();
	            }
	        }
	    },
	
	
	    execOnload = function () {
	        if ( _silentMode ) {
	            return;
	        }
	
	        // Unload newly active modules only
	        for ( var i = _synced.active.length; i--; ) {
	            if ( isFunction( _synced.active[ i ].onload ) ) {
	                _synced.active[ i ].onload();
	            }
	        }
	    },
	
	
	    getRouteDataToString = function ( data ) {
	        var ret = data.uri,
	            i;
	
	        for ( i in data.query ) {
	            ret += "-" + i + "-" + data.query[ i ];
	        }
	
	        for ( i in data.params ) {
	            ret += "-" + i + "-" + data.params[ i ];
	        }
	
	        return ret;
	    },
	
	
	    /**
	     * @fires page-controller-router-synced-modules
	     */
	    syncModules = function () {
	        if ( _silentMode ) {
	            return;
	        }
	
	        _synced.active = [];
	        _synced.inactive = [];
	
	        for ( var i = _modules.length; i--; ) {
	            var module = _modules[ i ];
	
	            if ( isFunction( module.isActive ) ) {
	                // isActive method should rebuild module variables
	                if ( module.isActive() ) {
	                    _synced.active.push( module );
	
	                } else {
	                    _synced.inactive.push( module );
	                }
	            }
	        }
	
	        fire( "router-synced-modules", _synced );
	    },
	
	
	    onRouterResponse = function ( data ) {
	        if ( _isRoutingActive ) {
	            return;
	        }
	
	        _isRoutingActive = true;
	
	        function __route() {
	            if ( (Date.now() - _timeBefore) >= _instance._transitionTime ) {
	                _instance.stop();
	
	                handleRouterResponse( data );
	            }
	        }
	
	        _instance.go( __route );
	    },
	
	
	    onPopGetRouter = function ( data ) {
	        if ( _isRoutingActive ) {
	            return;
	        }
	
	        onPreGetRouter( data.request );
	    
	        setTimeout( function () {
	            handleRouterResponse( data );
	
	        }, _instance._transitionTime );
	    },
	
	
	    /**
	     * @fires page-controller-router-transition-out
	     * @fires page-controller-router-samepage
	     */
	    onPreGetRouter = function ( data ) {
	        if ( _isRoutingActive ) {
	            return;
	        }
	
	        var isSameRequest = (_currentToString === getRouteDataToString( data ));
	
	        if ( isSameRequest ) {
	            fire( "router-samepage", data );
	            _isSamePage = true;
	            return;
	        }
	
	        _timeBefore = Date.now();
	
	        if ( !_isFirstRoute ) {
	            fire( "router-transition-out", data );
	        }
	    },
	
	
	    /**
	     * @fires page-controller-router-refresh-document
	     * @fires page-controller-router-transition-in
	     */
	    handleRouterResponse = function ( res ) {
	        if ( _isSamePage ) {
	            _isSamePage = false;
	            _isRoutingActive = false;
	            return;
	        }
	
	        var data = {
	            response: res.response.responseText,
	            request: res.request,
	            status: res.status
	        };
	
	        _currentRoute = data.request.uri;
	        _currentQuery = data.request.query;
	        _currentToString = getRouteDataToString( data.request );
	
	        // Think of this as window.onload, happens once
	        if ( _isFirstRoute ) {
	            _isFirstRoute = false;
	            _isRoutingActive = false;
	            syncModules();
	            execOnload();
	
	            fire( "initialized-page", data.response );
	
	        // All other Router sequences fall here
	        } else {
	            // Allow transition duration to take place
	            setTimeout(function () {
	                // 0.1 Sync modules and unload active ones
	                syncModules();
	                execUnload();
	
	                // 0.2 Refresh the document content
	                fire( "router-refresh-document", data.response );
	
	                // 0.3 Sync modules and onload newly active ones
	                syncModules();
	                execOnload();
	
	                // 0.4 Trigger transition of content to come back in
	                fire( "router-transition-in", data );
	
	                _isRoutingActive = false;
	
	                // 0.5 Check `silent` mode
	                if ( _silentMode ) {
	                    _silentMode = false;
	
	                    if ( isFunction( _silentCallback ) ) {
	                        _silentCallback( data );
	                        _silentCallback = null;
	                    }
	                }
	
	            }, _instance._transitionTime );
	        }
	    };
	
	
	    /**
	     *
	     * Page transition manager
	     * @constructor PageController
	     * @augments Controller
	     * @requires Controller
	     * @requires Router
	     * @memberof! <global>
	     * @param {object} options Settings for control features
	     * <ul>
	     * <li>transitionTime - Number</li>
	     * <li>routerOptions - Object</li>
	     * </ul>
	     *
	     */
	    var PageController = function ( options ) {
	        // Singleton
	        if ( !_instance ) {
	            _instance = this;
	
	            options = (options || {});
	
	            /**
	             *
	             * The duration of your transition for page content
	             * @memberof PageController
	             * @member _transitionTime
	             * @private
	             *
	             */
	            this._transitionTime = (options.transitionTime || _timeDelay);
	
	            /**
	             *
	             * The flag to anchor to top of page on transitions
	             * @memberof PageController
	             * @member _routerOptions
	             * @private
	             *
	             */
	            this._routerOptions = (options.routerOptions || {
	                async: true,
	                caching: true,
	                preventDefault: true
	            });
	        }
	
	        return _instance;
	    };
	
	    PageController.prototype = new Controller();
	
	    /**
	     *
	     * Initialize controller on page
	     * @memberof PageController
	     * @method initPage
	     *
	     */
	    PageController.prototype.initPage = function () {
	        if ( _initialized ) {
	            return;
	        }
	
	        _initialized = true;
	
	        /**
	         *
	         * Instance of Router
	         * @private
	         *
	         */
	        _router = new Router( this._routerOptions );
	
	        if ( _router._matcher.parse( window.location.href, _config ).matched ) {
	            _router.bind();
	
	            for ( var i = _config.length; i--; ) {
	                _router.get( _config[ i ], onRouterResponse );
	            }
	
	            _router.on( "preget", onPreGetRouter );
	            _router.on( "popget", onPopGetRouter );
	
	            execInit();
	        }
	    };
	
	    /**
	     *
	     * Trigger the router on a uri and run PageController `silently`, so no events fire.
	     * @memberof PageController
	     * @method routeSilently
	     * @param {string} uri The route to trigger
	     * @param {function} cb The optional callback to fire when done
	     *
	     */
	    PageController.prototype.routeSilently = function ( uri, cb ) {
	        _silentMode = true;
	        _silentCallback = cb;
	        _router.trigger( uri );
	    };
	
	    /**
	     *
	     * Set the Router configuration
	     * @memberof PageController
	     * @method setConfig
	     * @param {object} config The config for MatchRoute
	     *
	     */
	    PageController.prototype.setConfig = function ( config ) {
	        _config = config;
	    };
	
	    /**
	     *
	     * Set the module configuration
	     * @memberof PageController
	     * @method setModules
	     * @param {object} modules The array of module objects
	     *
	     */
	    PageController.prototype.setModules = function ( modules ) {
	        if ( !modules ) {
	            return;
	        }
	
	        for ( var i = modules.length; i--; ) {
	            this.addModule( modules[ i ] );
	        }
	    };
	
	    /**
	     *
	     * Add to the module configuration
	     * @memberof PageController
	     * @method addModule
	     * @param {object} module The module object to add
	     *
	     */
	    PageController.prototype.addModule = function ( module ) {
	        if ( _modules.indexOf( module ) === -1 && isFunction( module.isActive ) && isFunction( module.onload ) && isFunction( module.unload ) ) {
	            _modules.push( module );
	
	        } else {
	            throw new Error( "PageController ERROR - All registered modules require isActive, onload and unload methods." );
	        }
	    };
	
	    /**
	     *
	     * Returns the array of modules
	     * @memberof PageController
	     * @method getModules
	     * @returns array
	     *
	     */
	    PageController.prototype.getModules = function () {
	        return _modules;
	    };
	
	    /**
	     *
	     * Returns the MatchRoute config
	     * @memberof PageController
	     * @method getConfig
	     * @returns array
	     *
	     */
	    PageController.prototype.getConfig = function () {
	        return _config;
	    };
	
	    /**
	     *
	     * Returns the instances Router
	     * @memberof PageController
	     * @method getRouter
	     * @returns Router
	     *
	     */
	    PageController.prototype.getRouter = function () {
	        return _router;
	    };
	
	    /**
	     *
	     * Returns the instances PushState
	     * @memberof PageController
	     * @method getPusher
	     * @returns PushState
	     *
	     */
	    PageController.prototype.getPusher = function () {
	        return _router._pusher;
	    };
	
	    /**
	     *
	     * Returns the instances MatchRoute
	     * @memberof PageController
	     * @method getMatcher
	     * @returns MatchRoute
	     *
	     */
	    PageController.prototype.getMatcher = function () {
	        return _router._matcher;
	    };
	
	    /**
	     *
	     * Returns the current route pathed
	     * @memberof PageController
	     * @method getRoute
	     * @returns string
	     *
	     */
	    PageController.prototype.getRoute = function () {
	        return _currentRoute;
	    };
	
	    /**
	     *
	     * Returns the current query params object
	     * @memberof PageController
	     * @method getQuery
	     * @returns string
	     *
	     */
	    PageController.prototype.getQuery = function () {
	        return _currentQuery;
	    };
	
	    /**
	     *
	     * Returns true if current page path equals slug
	     * Loose match if no second parameter is passed
	     * @memberof PageController
	     * @method is
	     * @param {string} slug The page slug to check
	     * @param {boolean} looseMatch Perform a less strict match
	     * @returns boolean
	     *
	     */
	    PageController.prototype.is = function ( slug, looseMatch ) {
	        var ret = false,
	            reg;
	
	        reg = new RegExp( looseMatch ? ("^" + slug) : ("^" + slug + "$") );
	        ret = reg.test( _currentRoute );
	
	        return ret;
	    };
	
	    /**
	     *
	     * Flushes the current route known as `active`
	     * @memberof PageController
	     * @method flushRoute
	     *
	     */
	    PageController.prototype.flushRoute = function () {
	        _currentToString = "";
	    };
	
	    return PageController;
	
	});

/***/ },
/* 21 */
/*!*************************************!*\
  !*** ./~/properjs-router/Router.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	/*!
	 *
	 * Handles basic get routing
	 *
	 * @Router
	 * @author: kitajchuk
	 *
	 */
	(function ( factory ) {
	    
	    if ( true ) {
	        module.exports = factory();
	
	    } else if ( typeof window !== "undefined" ) {
	        window.Router = factory();
	    }
	    
	})(function () {
	
	    var PushState = __webpack_require__( /*! properjs-pushstate */ 22 ),
	        MatchRoute = __webpack_require__( /*! properjs-matchroute */ 23 ),
	        matchElement = __webpack_require__( /*! properjs-matchelement */ 25 ),
	        _isRouting = false,
	        _rSameDomain = new RegExp( document.domain ),
	        _initDelay = 200,
	        _triggerEl;
	    
	    
	    /**
	     *
	     * A simple router Class
	     * @constructor Router
	     * @requires PushState
	     * @requires MatchRoute
	     * @requires matchElement
	     * @memberof! <global>
	     *
	     */
	    var Router = function () {
	        return this.init.apply( this, arguments );
	    };
	    
	    Router.prototype = {
	        constructor: Router,
	        
	        /**
	         *
	         * Router init constructor method
	         * @memberof Router
	         * @method init
	         * @param {object} options Settings for PushState
	         * <ul>
	         * <li>options.async</li>
	         * <li>options.caching</li>
	         * </ul>
	         *
	         * @fires beforeget
	         * @fires afterget
	         * @fires get
	         *
	         */
	        init: function ( options ) {
	            /**
	             *
	             * Internal MatchRoute instance
	             * @memberof Router
	             * @member _matcher
	             * @private
	             *
	             */
	            this._matcher = new MatchRoute();
	            
	            /**
	             *
	             * Internal PushState instance
	             * @memberof Router
	             * @member _pusher
	             * @private
	             *
	             */
	            this._pusher = null;
	            
	            /**
	             *
	             * Event handling callbacks
	             * @memberof Router
	             * @member _callbacks
	             * @private
	             *
	             */
	            this._callbacks = {};
	            
	            /**
	             *
	             * Router Store user options
	             * @memberof Router
	             * @member _options
	             * @private
	             *
	             */
	            this._options = options;
	            
	            /**
	             *
	             * Router unique ID
	             * @memberof Router
	             * @member _uid
	             * @private
	             *
	             */
	            this._uid = 0;
	        },
	        
	        /**
	         *
	         * Create PushState instance and add event listener
	         * @memberof Router
	         * @method bind
	         *
	         */
	        bind: function () {
	            var self = this,
	                isReady = false;
	            
	            // Bind GET requests to links
	            if ( document.addEventListener ) {
	                document.addEventListener( "click", function ( e ) {
	                    self._handler( this, e );
	                    
	                }, false );
	                
	            } else if ( document.attachEvent ) {
	                document.attachEvent( "onclick", function ( e ) {
	                    self._handler( this, e );
	                });
	            }
	            
	            /**
	             *
	             * Instantiate PushState
	             *
	             */
	            this._pusher = new PushState( this._options );
	            
	            /**
	             *
	             * @event popstate
	             *
	             */
	            this._pusher.on( "popstate", function ( url, data, status ) {
	                // Hook around browsers firing popstate on pageload
	                if ( isReady ) {
	                    for ( var i = self._callbacks.get.length; i--; ) {
	                        var dat = self._matcher.parse( url, self._callbacks.get[ i ]._routerRoutes );
	                        
	                        if ( dat.matched ) {
	                            break;
	                        }
	                    }
	                    
	                    data = {
	                        route: self._matcher._cleanRoute( url ),
	                        response: data,
	                        request: dat,
	                        status: status || data.status
	                    };
	                    
	                    self._fire( "popget", url, data, status );
	                    
	                } else {
	                    isReady = true;
	                }
	            });
	            
	            // Manually fire first GET
	            // Async this in order to allow .get() to work after instantiation
	            setTimeout(function () {
	                self._pusher.push( window.location.href, function ( response, status ) {
	                    self._fire( "get", window.location.href, response, status );
	                    
	                    isReady = true;
	                });
	                
	            }, _initDelay );
	        },
	        
	        /**
	         *
	         * Add an event listener
	         * Binding "beforeget" and "afterget" is a wrapper
	         * to hook into the PushState classes "beforestate" and "afterstate".
	         * @memberof Router
	         * @method on
	         * @param {string} event The event to bind to
	         * @param {function} callback The function to call
	         *
	         */
	        on: function ( event, callback ) {
	            this._bind( event, callback );
	        },
	    
	        /**
	         *
	         * Remove an event listener
	         * @memberof Router
	         * @method off
	         * @param {string} event The event to unbind
	         * @param {function} callback The function to reference
	         *
	         */
	        off: function ( event, callback ) {
	            this._unbind( event, callback );
	        },
	    
	        /**
	         *
	         * Support router triggers by url
	         * @memberof Router
	         * @method trigger
	         * @param {string} url The url to route to
	         *
	         */
	        trigger: function ( url ) {
	            if ( !_triggerEl ) {
	                _triggerEl = document.createElement( "a" );
	            }
	    
	            _triggerEl.href = url;
	    
	            this._handler( _triggerEl, {
	                target: _triggerEl
	            });
	        },
	        
	        /**
	         *
	         * Bind a GET request route
	         * @memberof Router
	         * @method get
	         * @param {string} route route to match
	         * @param {function} callback function to call when route is requested
	         *
	         */
	        get: function ( route, callback ) {
	            // Add route to matcher
	            this._matcher.config( [route] );
	            
	            // Bind the route to the callback
	            if ( callback._routerRoutes ) {
	                callback._routerRoutes.push( route );
	                
	            } else {
	                callback._routerRoutes = [route];
	            }
	            
	            // When binding multiple routes to a single
	            // callback, we need to make sure the callbacks
	            // routes array is updated above but the callback
	            // only gets added to the list once.
	            if ( callback._routerRoutes.length === 1 ) {
	                this._bind( "get", callback );
	            }
	        },
	    
	        /**
	         *
	         * Get a sanitized route for a url
	         * @memberof Router
	         * @method getRouteForUrl
	         * @param {string} url The url to use
	         * @returns {string}
	         *
	         */
	        getRouteForUrl: function ( url ) {
	            return this._matcher._cleanRoute( url );
	        },
	    
	        /**
	         *
	         * Get the match data for a url against the routes config
	         * @memberof Router
	         * @method getRouteDataForUrl
	         * @param {string} url The url to use
	         * @returns {object}
	         *
	         */
	        getRouteDataForUrl: function ( url ) {
	            return this._matcher.parse( url, this._matcher.getRoutes() ).params;
	        },
	        
	        /**
	         *
	         * Get a unique ID
	         * @memberof Router
	         * @method getUID
	         * @returns number
	         *
	         */
	        getUID: function () {
	            this._uid = (this._uid + 1);
	            
	            return this._uid;
	        },
	        
	        /**
	         * Compatible event preventDefault
	         * @memberof Router
	         * @method _preventDefault
	         * @param {object} e The event object
	         * @private
	         *
	         */
	        _preventDefault: function ( e ) {
	            if ( !this._options.preventDefault ) {
	                return this;
	            }
	            
	            if ( e.preventDefault ) {
	                e.preventDefault();
	                
	            } else {
	                e.returnValue = false;
	            }
	        },
	        
	        /**
	         * GET click event handler
	         * @memberof Router
	         * @method _handler
	         * @param {object} el The event context element
	         * @param {object} e The event object
	         * @private
	         *
	         * @fires get
	         *
	         */
	        _handler: function ( el, e ) {
	            var elem = (matchElement( el, "a" ) || matchElement( e.target, "a" )),
	                isDomain = elem && _rSameDomain.test( elem.href ),
	                isHashed = elem && elem.href.indexOf( "#" ) !== -1,
	                isMatched = elem && this._matcher.test( elem.href ),
	                isIgnore = elem && elem.className.indexOf( "js-router--ignore" ) !== -1,
	                isMetaKey = elem && e.metaKey,
	                isBlank = elem && elem.target === "_blank";
	            
	            // 0.1 => Ensure url passes MatchRoute config
	            // 0.2 => Ensure url is on the Document's Domain
	            // 0.3 => Ensure url is not a #hash
	            // 0.4 => Ensure the element does not contain a `js-router--ignore` className
	            // 0.5 => Ensure the Event.metaKey is not TRUE - Command+click
	            // 0.6 => Ensure the element target is not for a new tab
	            if ( isMatched && isDomain && !isHashed && !isIgnore && !isMetaKey && !isBlank ) {
	                this._preventDefault( e );
	                
	                if ( !_isRouting ) {
	                    this._route( elem );
	                }
	            }
	        },
	        
	        
	        /**
	         * Execute the route
	         * @memberof Router
	         * @method _handler
	         * @param {object} elem The event context element
	         * @private
	         *
	         */
	        _route: function ( elem ) {
	            var self = this;
	            
	            _isRouting = true;
	            
	            for ( var i = this._callbacks.get.length; i--; ) {
	                var data = this._matcher.parse( elem.href, this._callbacks.get[ i ]._routerRoutes );
	                
	                if ( data.matched ) {
	                    this._fire( "preget", elem.href, data );
	                    break;
	                }
	            }
	            
	            this._pusher.push( elem.href, function ( response, status ) {
	                _isRouting = false;
	                self._fire( "get", elem.href, response, status );
	            });
	        },
	        
	        /**
	         *
	         * Bind an event to a callback
	         * @memberof Router
	         * @method _bind
	         * @param {string} event what to bind on
	         * @param {function} callback fired on event
	         * @private
	         *
	         */
	        _bind: function ( event, callback ) {
	            if ( typeof callback === "function" ) {
	                if ( !this._callbacks[ event ] ) {
	                    this._callbacks[ event ] = [];
	                }
	                
	                callback._jsRouterID = this.getUID();
	                
	                this._callbacks[ event ].push( callback );
	            }
	        },
	    
	        /**
	         *
	         * Unbind an event to a callback(s)
	         * @memberof Router
	         * @method _bind
	         * @param {string} event what to bind on
	         * @param {function} callback fired on event
	         * @private
	         *
	         */
	        _unbind: function ( event, callback ) {
	            if ( !this._callbacks[ event ] ) {
	                return this;
	            }
	    
	            // Remove a single callback
	            if ( callback ) {
	                for ( var i = 0, len = this._callbacks[ event ].length; i < len; i++ ) {
	                    if ( callback._jsRouterID === this._callbacks[ event ][ i ]._jsRouterID ) {
	                        this._callbacks[ event ].splice( i, 1 );
	        
	                        break;
	                    }
	                }
	    
	            // Remove all callbacks for event
	            } else {
	                for ( var j = this._callbacks[ event ].length; j--; ) {
	                    this._callbacks[ event ][ j ] = null;
	                }
	        
	                delete this._callbacks[ event ];
	            }
	        },
	        
	        /**
	         *
	         * Fire an event to a callback
	         * @memberof Router
	         * @method _fire
	         * @param {string} event what to bind on
	         * @param {string} url fired on event
	         * @param {string} response html from responseText
	         * @param {number} status The request status
	         * @private
	         *
	         */
	        _fire: function ( event, url, response, status ) {
	            var i;
	            
	            // GET events have routes and are special ;-P
	            if ( event === "get" ) {
	                for ( i = this._callbacks[ event ].length; i--; ) {
	                    var data = this._matcher.parse( url, this._callbacks[ event ][ i ]._routerRoutes );
	                    
	                    if ( data.matched ) {
	                        this._callbacks[ event ][ i ].call( this, {
	                            route: this._matcher._cleanRoute( url ),
	                            response: response,
	                            request: data,
	                            status: status
	                        });
	                    }
	                }
	            
	            // Fires basic timing events "beforeget" / "afterget"    
	            } else if ( this._callbacks[ event ] ) {
	                for ( i = this._callbacks[ event ].length; i--; ) {
	                    this._callbacks[ event ][ i ].call( this, response );
	                }
	            }
	        }
	    };
	    
	    
	    return Router;
	
	});

/***/ },
/* 22 */
/*!*******************************************!*\
  !*** ./~/properjs-pushstate/PushState.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	/*!
	 *
	 * Handles history pushstate/popstate with async option
	 * If history is not supported, falls back to hashbang!
	 *
	 * @PushState
	 * @author: kitajchuk
	 *
	 */
	(function ( factory ) {
	    
	    if ( true ) {
	        module.exports = factory();
	
	    } else if ( typeof window !== "undefined" ) {
	        window.PushState = factory();
	    }
	    
	})(function () {
	
	    /**
	     *
	     * A simple pushState Class
	     * Supported events with .on():
	     * <ul>
	     * <li>popstate</li>
	     * <li>beforestate</li>
	     * <li>afterstate</li>
	     * </ul>
	     * @constructor PushState
	     * @memberof! <global>
	     *
	     */
	    var PushState = function () {
	        return this.init.apply( this, arguments );
	    };
	    
	    PushState.prototype = {
	        constructor: PushState,
	        
	        /**
	         *
	         * Expression match #
	         * @memberof PushState
	         * @member _rHash
	         * @private
	         *
	         */
	        _rHash: /#/,
	        
	        /**
	         *
	         * Expression match http/https
	         * @memberof PushState
	         * @member _rHTTPs
	         * @private
	         *
	         */
	        _rHTTPs: /^http[s]?:\/\/.*?\//,
	        
	        /**
	         *
	         * Flag whether pushState is enabled
	         * @memberof PushState
	         * @member _pushable
	         * @private
	         *
	         */
	        _pushable: ("history" in window && "pushState" in window.history),
	        
	        /**
	         *
	         * Fallback to hashchange if needed. Support:
	         * <ul>
	         * <li>Internet Explorer 8</li>
	         * <li>Firefox 3.6</li>
	         * <li>Chrome 5</li>
	         * <li>Safari 5</li>
	         * <li>Opera 10.6</li>
	         * </ul>
	         * @memberof PushState
	         * @member _hashable
	         * @private
	         *
	         */
	        _hashable: ("onhashchange" in window),
	        
	        /**
	         *
	         * PushState init constructor method
	         * @memberof PushState
	         * @method PushState.init
	         * @param {object} options Settings for PushState
	         * <ul>
	         * <li>options.async</li>
	         * <li>options.caching</li>
	         * <li>options.handle404</li>
	         * <li>options.handle500</li>
	         * </ul>
	         *
	         */
	        init: function ( options ) {
	            var url = window.location.href;
	            
	            /**
	             *
	             * Flag whether state is enabled
	             * @memberof PushState
	             * @member _enabled
	             * @private
	             *
	             */
	            this._enabled = false;
	            
	            /**
	             *
	             * Flag when hash is changed by PushState
	             * This allows appropriate replication of popstate
	             * @memberof PushState
	             * @member _ishashpushed
	             * @private
	             *
	             */
	            this._ishashpushed = false;
	            
	            /**
	             *
	             * Unique ID ticker
	             * @memberof PushState
	             * @member _uid
	             * @private
	             *
	             */
	            this._uid = 0;
	            
	            /**
	             *
	             * Stored state objects
	             * @memberof PushState
	             * @member _states
	             * @private
	             *
	             */
	            this._states = {};
	            
	            /**
	             *
	             * Stored response objects
	             * @memberof PushState
	             * @member _responses
	             * @private
	             *
	             */
	            this._responses = {};
	            
	            /**
	             *
	             * Event callbacks
	             * @memberof PushState
	             * @member _callbacks
	             * @private
	             *
	             */
	            this._callbacks = {};
	            
	            /**
	             *
	             * Flag whether to use ajax
	             * @memberof PushState
	             * @member _async
	             * @private
	             *
	             */
	            this._async = ( options && options.async !== undefined ) ? options.async : true;
	            
	            /**
	             *
	             * Flag whether to use cached responses
	             * @memberof PushState
	             * @member _caching
	             * @private
	             *
	             */
	            this._caching = ( options && options.caching !== undefined ) ? options.caching : true;
	            
	            /**
	             *
	             * Flag whether to handle 404 pages
	             * @memberof PushState
	             * @member _handle404
	             * @private
	             *
	             */
	            this._handle404 = ( options && options.handle404 !== undefined ) ? options.handle404 : true;
	            
	            /**
	             *
	             * Flag whether to handle 500 pages
	             * @memberof PushState
	             * @member _handle500
	             * @private
	             *
	             */
	            this._handle500 = ( options && options.handle500 !== undefined ) ? options.handle500 : true;
	            
	            // Set initial state
	            this._states[ url ] = {
	                uid: this.getUID(),
	                cached: false
	            };
	    
	            // Enable the popstate event
	            this._stateEnable();
	        },
	        
	        /**
	         *
	         * Bind a callback to an event
	         * @memberof PushState
	         * @method on
	         * @param {string} event The event to bind to
	         * @param {function} callback The function to call
	         *
	         */
	        on: function ( event, callback ) {
	            if ( typeof callback === "function" ) {
	                if ( !this._callbacks[ event ] ) {
	                    this._callbacks[ event ] = [];
	                }
	                
	                callback._pushstateID = this.getUID();
	                callback._pushstateType = event;
	                
	                this._callbacks[ event ].push( callback );
	            }
	        },
	        
	        /**
	         *
	         * Unbind a callback to an event
	         * @memberof PushState
	         * @method off
	         * @param {string} event The event that was bound
	         * @param {function} callback The function to remove
	         *
	         */
	        off: function ( event, callback ) {
	            if ( this._callbacks[ event ] ) {
	                for ( var i = this._callbacks[ event ].length; i--; ) {
	                    if ( this._callbacks[ event ][ i ]._pushstateID === callback._pushstateID ) {
	                        this._callbacks[ event ].splice( i, 1 );
	                        break;
	                    }
	                }
	            }
	        },
	        
	        /**
	         *
	         * Push onto the History state
	         * @memberof PushState
	         * @method push
	         * @param {string} url address to push to history
	         * @param {function} callback function to call when done
	         *
	         * @fires beforestate
	         * @fires afterstate
	         *
	         */
	        push: function ( url, callback ) {
	            var self = this;
	            
	            // Break on pushing current url
	            if ( url === window.location.href && this._stateCached( url ) ) {
	                callback( this._responses[ url ], 200 );
	                
	                return;
	            }
	            
	            this._fire( "beforestate" );
	            
	            // Break on cached
	            if ( this._stateCached( url ) ) {
	                this._push( url );
	                        
	                callback( this._responses[ url ], 200 );
	            
	            // Push new state    
	            } else {
	                this._states[ url ] = {
	                    uid: this.getUID(),
	                    cached: false
	                };
	                
	                if ( this._async ) {
	                    this._getUrl( url, function ( response, status ) {
	                        self._push( url );
	        
	                        self._fire( "afterstate", response, status );
	                        
	                        if ( typeof callback === "function" ) {
	                            callback( response, status );
	                        }
	                    });
	        
	                } else {
	                    this._push( url );
	    
	                    this._fire( "afterstate" );
	                    
	                    if ( typeof callback === "function" ) {
	                        callback();
	                    }
	                }
	            }
	        },
	        
	        /**
	         *
	         * Manually go back in history state
	         * @memberof PushState
	         * @method goBack
	         *
	         * @fires backstate
	         *
	         */
	        goBack: function () {
	            window.history.back();
	            
	            this._fire( "backstate" );
	        },
	        
	        /**
	         *
	         * Manually go forward in history state
	         * @memberof PushState
	         * @method goForward
	         *
	         * @fires forwardstate
	         *
	         */
	        goForward: function () {
	            window.history.forward();
	            
	            this._fire( "forwardstate" );
	        },
	        
	        /**
	         *
	         * Get a unique ID
	         * @memberof PushState
	         * @method getUID
	         * @returns number
	         *
	         */
	        getUID: function () {
	            this._uid = (this._uid + 1);
	            
	            return this._uid;
	        },
	        
	        /**
	         *
	         * Calls window.history.pushState
	         * @memberof PushState
	         * @method _push
	         * @param {string} url The url to push
	         * @private
	         *
	         */
	        _push: function ( url ) {
	            if ( this._pushable ) {
	                window.history.pushState( this._states[ url ], "", url );
	                
	            } else {
	                this._ishashpushed = true;
	                
	                window.location.hash = url.replace( this._rHTTPs, "" );
	            }
	        },
	        
	        /**
	         *
	         * Check if state has been cached for a url
	         * @memberof PushState
	         * @method _stateCached
	         * @param {string} url The url to check
	         * @private
	         *
	         */
	        _stateCached: function ( url ) {
	            var ret = false;
	            
	            if ( this._caching && this._states[ url ] && this._states[ url ].cached && this._responses[ url ] ) {
	                ret = true;
	            }
	            
	            return ret;
	        },
	        
	        /**
	         *
	         * Cache the response for a url
	         * @memberof PushState
	         * @method _cacheState
	         * @param {string} url The url to cache for
	         * @param {object} response The XMLHttpRequest response object
	         * @private
	         *
	         */
	        _cacheState: function ( url, response ) {
	            if ( this._caching ) {
	                this._states[ url ].cached = true;
	                this._responses[ url ] = response;
	            }
	        },
	        
	        /**
	         *
	         * Request a url with an XMLHttpRequest
	         * @memberof PushState
	         * @method _getUrl
	         * @param {string} url The url to request
	         * @param {function} callback The function to call when done
	         * @private
	         *
	         */
	        _getUrl: function ( url, callback ) {
	            var handler = function ( res, stat ) {
	                    try {
	                        // Cache if option enabled
	                        self._cacheState( url, res );
	                        
	                        if ( typeof callback === "function" ) {
	                            callback( res, (stat ? stat : undefined) );
	                        }
	                        
	                    } catch ( error ) {}
	                },
	                xhr = new XMLHttpRequest(),
	                self = this;
	            
	            xhr.open( "GET", url, true );
	            
	            xhr.onreadystatechange = function ( e ) {
	                if ( this.readyState === 4 ) {
	                    if ( this.status === 200 ) {
	                        handler( this, 200 );
	                        
	                    } else if ( this.status === 404 && self._handle404 ) {
	                        handler( this, 404 );
	                        
	                    } else if ( this.status === 500 && self._handle500 ) {
	                        handler( this, 500 );
	                    }
	                }
	            };
	            
	            xhr.send();
	        },
	        
	        /**
	         *
	         * Fire an events callbacks
	         * @memberof PushState
	         * @method _fire
	         * @param {string} event The event to fire
	         * @param {string} url The current url
	         * @private
	         *
	         */
	        _fire: function ( event, url ) {
	            if ( this._callbacks[ event ] ) {
	                for ( var i = this._callbacks[ event ].length; i--; ) {
	                    this._callbacks[ event ][ i ].apply( this, [].slice.call( arguments, 1 ) );
	                }
	            }
	        },
	        
	        /**
	         *
	         * Bind this instances state handler
	         * @memberof PushState
	         * @method _stateEnabled
	         * @private
	         *
	         * @fires popstate
	         *
	         */
	        _stateEnable: function () {
	            if ( this._enabled ) {
	                return this;
	            }
	    
	            var self = this,
	                handler = function () {
	                    var url = window.location.href.replace( self._rHash, "/" );
	                    
	                    if ( self._stateCached( url ) ) {
	                        self._fire( "popstate", url, self._responses[ url ] );
	                        
	                    } else {
	                        self._getUrl( url, function ( response, status ) {
	                            self._fire( "popstate", url, response, status );
	                        });
	                    }
	                };
	    
	            this._enabled = true;
	            
	            if ( this._pushable ) {
	                window.addEventListener( "popstate", function ( e ) {
	                    handler();
	                    
	                }, false );
	                
	            } else if ( this._hashable ) {
	                window.addEventListener( "hashchange", function ( e ) {
	                    if ( !self._ishashpushed ) {
	                        handler();
	                        
	                    } else {
	                        self._ishashpushed = false;
	                    }
	                    
	                }, false );
	            }
	        }
	    };
	    
	    return PushState;
	
	});

/***/ },
/* 23 */
/*!*********************************************!*\
  !*** ./~/properjs-matchroute/MatchRoute.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	/*!
	 *
	 * Handles wildcard route matching against urls with !num and !slug condition testing
	 *
	 * @MatchRoute
	 * @author: kitajchuk
	 *
	 */
	(function ( factory ) {
	    
	    if ( true ) {
	        module.exports = factory();
	
	    } else if ( typeof window !== "undefined" ) {
	        window.MatchRoute = factory();
	    }
	    
	})(function () {
	
	    var paramalama = __webpack_require__( /*! paramalama */ 24 ),
	
	    /**
	     *
	     * Handles wildcard route matching against urls with !num and !slug condition testing
	     * <ul>
	     * <li>route = "/some/random/path/:myvar"</li>
	     * <li>route = "/some/random/path/:myvar!num"</li>
	     * <li>route = "/some/random/path/:myvar!slug"</li>
	     * </ul>
	     * @constructor MatchRoute
	     * @memberof! <global>
	     * @requires paramalama
	     *
	     */
	    MatchRoute = function () {
	        return this.init.apply( this, arguments );
	    };
	    
	    MatchRoute.prototype = {
	        constructor: MatchRoute,
	        
	        /**
	         *
	         * Expression match http/https
	         * @memberof MatchRoute
	         * @member _rHTTPs
	         * @private
	         *
	         */
	        _rHTTPs: /^http[s]?:\/\/.*?\//,
	        
	        /**
	         *
	         * Expression match trail slashes
	         * @memberof MatchRoute
	         * @member _rTrails
	         * @private
	         *
	         */
	        _rTrails: /^\/|\/$/g,
	        
	        /**
	         *
	         * Expression match hashbang/querystring
	         * @memberof MatchRoute
	         * @member _rHashQuery
	         * @private
	         *
	         */
	        _rHashQuery: /#.*$|\?.*$/g,
	        
	        /**
	         *
	         * Expression match wildcards
	         * @memberof MatchRoute
	         * @member _rWild
	         * @private
	         *
	         */
	        _rWild: /^:/,
	        
	        /**
	         *
	         * Expressions to match wildcards with supported conditions
	         * @memberof MatchRoute
	         * @member _wilders
	         * @private
	         *
	         */
	        _wilders: {
	            num: /^[0-9]+$/,
	            slug: /^[A-Za-z]+[A-Za-z0-9-_.]*$/
	        },
	        
	        
	        /**
	         *
	         * MatchRoute init constructor method
	         * @memberof MatchRoute
	         * @method init
	         * @param {array} routes Config routes can be passed on instantiation
	         *
	         */
	        init: function ( routes ) {
	            /**
	             *
	             * The routes config array
	             * @memberof MatchRoute
	             * @member _routes
	             * @private
	             *
	             */
	            this._routes = ( routes ) ? this._cleanRoutes( routes ) : [];
	        },
	    
	        /**
	         *
	         * Get the internal route array
	         * @memberof MatchRoute
	         * @method MatchRoute.getRoutes
	         * @returns {array}
	         *
	         */
	        getRoutes: function () {
	            return this._routes;
	        },
	        
	        /**
	         *
	         * Update routes config array
	         * @memberof MatchRoute
	         * @method config
	         * @param {array} routes to match against
	         *
	         */
	        config: function ( routes ) {
	            // Force array on routes
	            routes = ( typeof routes === "string" ) ? [ routes ] : routes;
	    
	            this._routes = this._routes.concat( this._cleanRoutes( routes ) );
	            
	            return this;
	        },
	        
	        /**
	         *
	         * Test a url against a routes config for match validation
	         * @memberof MatchRoute
	         * @method test
	         * @param {string} url to test against routes
	         * @returns True or False
	         *
	         */
	        test: function ( url ) {
	            return this.parse( url, this._routes ).matched;
	        },
	        
	        /**
	         *
	         * Match a url against a routes config for matches
	         * @memberof MatchRoute
	         * @method params
	         * @param {string} url to test against routes
	         * @returns Array of matching routes
	         *
	         */
	        params: function ( url ) {
	            return this.parse( url, this._routes ).params;
	        },
	        
	        /**
	         *
	         * Compare a url against a specific route
	         * @memberof MatchRoute
	         * @method compare
	         * @param {string} route compare route
	         * @param {string} url compare url
	         * @returns MatchRoute.parse()
	         *
	         */
	        compare: function ( route, url ) {
	            return this.parse( url, [route] );
	        },
	        
	        /**
	         *
	         * Parse a url for matches against config array
	         * @memberof MatchRoute
	         * @method parse
	         * @param {string} url to test against routes
	         * @param {array} routes The routes to test against
	         * @returns Object witch match bool and matches array
	         *
	         */
	        parse: function ( url, routes ) {
	            var segMatches,
	                isStar,
	                params,
	                match,
	                route = this._cleanRoute( url ),
	                ruris,
	                regex,
	                cond,
	                uris = route.split( "/" ),
	                uLen = uris.length,
	                iLen = routes.length,
	                ret;
	            
	            for ( var i = 0; i < iLen; i++ ) {
	                // Flag "*" route
	                isStar = (routes[ i ] === "*");
	                
	                // Start fresh each iteration
	                // Only one matched route allowed
	                ret = {
	                    matched: false,
	                    route: null,
	                    uri: [],
	                    params: {},
	                    query: paramalama( url )
	                };
	                
	                ruris = routes[ i ].split( "/" );
	                
	                // Handle route === "/"
	                if ( route === "/" && routes[ i ] === "/" ) {
	                    ret.matched = true;
	                    ret.route = routes[ i ];
	                    ret.uri = "/";
	                    
	                    break;
	                }
	                
	                // If the actual url doesn't match the route in segment length,
	                // it cannot possibly be considered for matching so just skip it
	                if ( ruris.length !== uris.length && !isStar ) {
	                    continue;
	                }
	                
	                segMatches = 0;
	                
	                for ( var j = 0; j < uLen; j++ ) {
	                    // Matched a variable uri segment
	                    if ( this._rWild.test( ruris[ j ] ) ) {
	                        // Try to split on conditions
	                        params = ruris[ j ].split( "!" );
	                        
	                        // The variable segment
	                        match = params[ 0 ];
	                        
	                        // The match condition
	                        cond = params[ 1 ];
	                        
	                        // With conditions
	                        if ( cond ) {
	                            // We support this condition
	                            if ( this._wilders[ cond ] ) {
	                                regex = this._wilders[ cond ];
	                            }
	                            
	                            // Test against the condition
	                            if ( regex && regex.test( uris[ j ] ) ) {
	                                segMatches++;
	                                
	                                // Add the match to the config data
	                                ret.params[ match.replace( this._rWild, "" ) ] = uris[ j ];
	                                ret.uri.push( uris[ j ] );
	                            }
	                        
	                        // No conditions, anything goes   
	                        } else {
	                            segMatches++;
	                            
	                            // Add the match to the config data
	                            ret.params[ match.replace( this._rWild, "" ) ] = uris[ j ];
	                            ret.uri.push( uris[ j ] );
	                        }
	                    
	                    // Defined segment always goes   
	                    } else {
	                        if ( uris[ j ] === ruris[ j ] ) {
	                            segMatches++;
	                            
	                            ret.uri.push( uris[ j ] );
	                        }
	                    }
	                }
	                
	                // Handle a uri segment match OR "*" wildcard everything
	                if ( segMatches === uris.length || isStar ) {
	                    ret.matched = true;
	                    ret.route = routes[ i ];
	                    ret.uri = ( isStar ) ? route : ret.uri.join( "/" );
	                    
	                    break;
	                }
	            }
	            
	            return ret;
	        },
	        
	        /**
	         *
	         * Clean a route string
	         * If the route === "/" then it is returned as is
	         * @memberof MatchRoute
	         * @method _cleanRoute
	         * @param {string} route the route to clean
	         * @returns cleaned route string
	         * @private
	         *
	         */
	        _cleanRoute: function ( route ) {
	            if ( route !== "/" ) {
	                route = route.replace( this._rHTTPs, "" );
	                route = route.replace( this._rTrails, "" );
	                route = route.replace( this._rHashQuery, "" );
	                route = route.replace( this._rTrails, "" );
	            }
	            
	            if ( route === "" ) {
	                route = "/";
	            }
	            
	            return route;
	        },
	        
	        /**
	         *
	         * Clean an array of route strings
	         * @memberof MatchRoute
	         * @method _cleanRoutes
	         * @param {array} routes the routes to clean
	         * @returns cleaned routes array
	         * @private
	         *
	         */
	        _cleanRoutes: function ( routes ) {
	            for ( var i = routes.length; i--; ) {
	                routes[ i ] = this._cleanRoute( routes[ i ] );
	            }
	            
	            return routes;
	        }
	    };
	    
	    
	    return MatchRoute;
	
	
	});

/***/ },
/* 24 */
/*!************************************!*\
  !*** ./~/paramalama/paramalama.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	/*!
	 *
	 * Parse query string into object literal representation
	 *
	 * @compat: jQuery, Ender, Zepto
	 * @author: @kitajchuk
	 *
	 *
	 */
	(function ( factory ) {
	    
	    if ( true ) {
	        module.exports = factory();
	
	    } else if ( typeof window !== "undefined" ) {
	        window.paramalama = factory();
	    }
	    
	})(function () {
	    
	    var paramalama = function ( str ) {
	        var query = decodeURIComponent( str ).match( /[#|?].*$/g ),
	            ret = {};
	        
	        if ( query ) {
	            query = query[ 0 ].replace( /^\?|^#|^\/|\/$|\[|\]/g, "" );
	            query = query.split( "&" );
	            
	            for ( var i = query.length; i--; ) {
	                var pair = query[ i ].split( "=" ),
	                    key = pair[ 0 ],
	                    val = pair[ 1 ];
	                
	                if ( ret[ key ] ) {
	                    // #2 https://github.com/kitajchuk/paramalama/issues/2
	                    // This supposedly will work as of ECMA-262
	                    // This works since we are not passing objects across frame boundaries
	                    // and we are not considering Array-like objects. This WILL be an Array.
	                    if ( {}.toString.call( ret[ key ] ) !== "[object Array]" ) {
	                        ret[ key ] = [ ret[ key ] ];
	                    }
	                    
	                    ret[ key ].push( val );
	                    
	                } else {
	                    ret[ key ] = val;
	                }
	            }
	        }
	        
	        return ret;
	    };
	    
	    if ( typeof $ !== "undefined" ) {
	        $.paramalama = paramalama;
	    }
	
	    return paramalama;
	    
	});


/***/ },
/* 25 */
/*!*************************************************!*\
  !*** ./~/properjs-matchelement/matchElement.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	/*!
	 *
	 * Use native element selector matching
	 *
	 * @matchElement
	 * @author: kitajchuk
	 *
	 */
	(function ( factory ) {
	    
	    if ( true ) {
	        module.exports = factory();
	
	    } else if ( typeof window !== "undefined" ) {
	        window.matchElement = factory();
	    }
	    
	})(function () {
	
	    /**
	     *
	     * Use native element selector matching
	     * @memberof! <global>
	     * @method matchElement
	     * @param {object} el the element
	     * @param {string} selector the selector to match
	     * @returns element OR null
	     *
	     */
	    var matchElement = function ( el, selector ) {
	        var method = ( el.matches ) ? "matches" : ( el.webkitMatchesSelector ) ? 
	                                      "webkitMatchesSelector" : ( el.mozMatchesSelector ) ? 
	                                      "mozMatchesSelector" : ( el.msMatchesSelector ) ? 
	                                      "msMatchesSelector" : ( el.oMatchesSelector ) ? 
	                                      "oMatchesSelector" : null;
	        
	        // Try testing the element agains the selector
	        if ( method && el[ method ].call( el, selector ) ) {
	            return el;
	        
	        // Keep walking up the DOM if we can
	        } else if ( el !== document.documentElement && el.parentNode ) {
	            return matchElement( el.parentNode, selector );
	        
	        // Otherwise we should not execute an event
	        } else {
	            return null;
	        }
	    };
	    
	    
	    return matchElement;
	
	});

/***/ },
/* 26 */
/*!*********************************************!*\
  !*** ./~/properjs-controller/Controller.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	/*!
	 *
	 * Event / Animation cycle manager
	 *
	 * @Controller
	 * @author: kitajchuk
	 *
	 *
	 */
	(function ( factory ) {
	    
	    if ( true ) {
	        module.exports = factory();
	
	    } else if ( typeof window !== "undefined" ) {
	        window.Controller = factory();
	    }
	    
	})(function () {
	    // Private animation functions
	    var raf = window.requestAnimationFrame,
	        caf = window.cancelAnimationFrame,
	    
	    
	    /**
	     *
	     * Event / Animation cycle manager
	     * @constructor Controller
	     * @requires raf
	     * @memberof! <global>
	     *
	     */
	    Controller = function () {
	        return this.init.apply( this, arguments );
	    };
	    
	    Controller.prototype = {
	        constructor: Controller,
	    
	        /**
	         *
	         * Controller constructor method
	         * @memberof Controller
	         * @method Controller.init
	         *
	         */
	        init: function () {
	            /**
	             *
	             * Controller event handlers object
	             * @memberof Controller
	             * @member _handlers
	             * @private
	             *
	             */
	            this._handlers = {};
	    
	            /**
	             *
	             * Controller unique ID
	             * @memberof Controller
	             * @member _uid
	             * @private
	             *
	             */
	            this._uid = 0;
	    
	            /**
	             *
	             * Started iteration flag
	             * @memberof Controller
	             * @member _started
	             * @private
	             *
	             */
	            this._started = false;
	    
	            /**
	             *
	             * Paused flag
	             * @memberof Controller
	             * @member _paused
	             * @private
	             *
	             */
	            this._paused = false;
	    
	            /**
	             *
	             * Timeout reference
	             * @memberof Controller
	             * @member _cycle
	             * @private
	             *
	             */
	            this._cycle = null;
	        },
	    
	        /**
	         *
	         * Controller go method to start frames
	         * @memberof Controller
	         * @method go
	         *
	         */
	        go: function ( fn ) {
	            if ( this._started && this._cycle ) {
	                return this;
	            }
	    
	            this._started = true;
	    
	            var self = this,
	                anim = function () {
	                    self._cycle = raf( anim );
	    
	                    if ( self._started ) {
	                        if ( typeof fn === "function" ) {
	                            fn();
	                        }
	                    }
	                };
	    
	            anim();
	        },
	    
	        /**
	         *
	         * Pause the cycle
	         * @memberof Controller
	         * @method pause
	         *
	         */
	        pause: function () {
	            this._paused = true;
	    
	            return this;
	        },
	    
	        /**
	         *
	         * Play the cycle
	         * @memberof Controller
	         * @method play
	         *
	         */
	        play: function () {
	            this._paused = false;
	    
	            return this;
	        },
	    
	        /**
	         *
	         * Stop the cycle
	         * @memberof Controller
	         * @method stop
	         *
	         */
	        stop: function () {
	            caf( this._cycle );
	    
	            this._paused = false;
	            this._started = false;
	            this._cycle = null;
	    
	            return this;
	        },
	    
	        /**
	         *
	         * Controller add event handler
	         * @memberof Controller
	         * @method on
	         * @param {string} event the event to listen for
	         * @param {function} handler the handler to call
	         *
	         */
	        on: function ( event, handler ) {
	            var events = event.split( " " );
	    
	            // One unique ID per handler
	            handler._jsControllerID = this.getUID();
	    
	            for ( var i = events.length; i--; ) {
	                if ( typeof handler === "function" ) {
	                    if ( !this._handlers[ events[ i ] ] ) {
	                        this._handlers[ events[ i ] ] = [];
	                    }
	    
	                    // Handler can be stored with multiple events
	                    this._handlers[ events[ i ] ].push( handler );
	                }
	            }
	    
	            return this;
	        },
	    
	        /**
	         *
	         * Controller remove event handler
	         * @memberof Controller
	         * @method off
	         * @param {string} event the event to remove handler for
	         * @param {function} handler the handler to remove
	         *
	         */
	        off: function ( event, handler ) {
	            if ( !this._handlers[ event ] ) {
	                return this;
	            }
	    
	            // Remove a single handler
	            if ( handler ) {
	                this._off( event, handler );
	    
	            // Remove all handlers for event
	            } else {
	                this._offed( event );
	            }
	    
	            return this;
	        },
	    
	        /**
	         *
	         * Controller fire an event
	         * @memberof Controller
	         * @method fire
	         * @param {string} event the event to fire
	         *
	         */
	        fire: function ( event ) {
	            if ( !this._handlers[ event ] ) {
	                return this;
	            }
	    
	            var args = [].slice.call( arguments, 1 );
	    
	            for ( var i = this._handlers[ event ].length; i--; ) {
	                this._handlers[ event ][ i ].apply( this, args );
	            }
	    
	            return this;
	        },
	    
	        /**
	         *
	         * Get a unique ID
	         * @memberof Controller
	         * @method getUID
	         * @returns number
	         *
	         */
	        getUID: function () {
	            this._uid = (this._uid + 1);
	    
	            return this._uid;
	        },
	    
	        /**
	         *
	         * Controller internal off method assumes event AND handler are good
	         * @memberof Controller
	         * @method _off
	         * @param {string} event the event to remove handler for
	         * @param {function} handler the handler to remove
	         * @private
	         *
	         */
	        _off: function ( event, handler ) {
	            for ( var i = 0, len = this._handlers[ event ].length; i < len; i++ ) {
	                if ( handler._jsControllerID === this._handlers[ event ][ i ]._jsControllerID ) {
	                    this._handlers[ event ].splice( i, 1 );
	    
	                    break;
	                }
	            }
	        },
	    
	        /**
	         *
	         * Controller completely remove all handlers and an event type
	         * @memberof Controller
	         * @method _offed
	         * @param {string} event the event to remove handler for
	         * @private
	         *
	         */
	        _offed: function ( event ) {
	            for ( var i = this._handlers[ event ].length; i--; ) {
	                this._handlers[ event ][ i ] = null;
	            }
	    
	            delete this._handlers[ event ];
	        }
	    };
	
	    return Controller;
	});

/***/ },
/* 27 */
/*!******************************!*\
  !*** ./js_src/core/index.js ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 *
	 * @public
	 * @namespace core
	 * @description Holds the different core modules.
	 *
	 */
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _api = __webpack_require__(/*! ./api */ 28);
	
	var _api2 = _interopRequireDefault(_api);
	
	var _detect = __webpack_require__(/*! ./detect */ 36);
	
	var _detect2 = _interopRequireDefault(_detect);
	
	var _dom = __webpack_require__(/*! ./dom */ 33);
	
	var _dom2 = _interopRequireDefault(_dom);
	
	var _images = __webpack_require__(/*! ./images */ 40);
	
	var _images2 = _interopRequireDefault(_images);
	
	var _resizes = __webpack_require__(/*! ./resizes */ 42);
	
	var _resizes2 = _interopRequireDefault(_resizes);
	
	var _scrolls = __webpack_require__(/*! ./scrolls */ 47);
	
	var _scrolls2 = _interopRequireDefault(_scrolls);
	
	var _util = __webpack_require__(/*! ./util */ 29);
	
	var util = _interopRequireWildcard(_util);
	
	var _config = __webpack_require__(/*! ./config */ 34);
	
	var _config2 = _interopRequireDefault(_config);
	
	var _env = __webpack_require__(/*! ./env */ 38);
	
	var _env2 = _interopRequireDefault(_env);
	
	var _log = __webpack_require__(/*! ./log */ 37);
	
	var _log2 = _interopRequireDefault(_log);
	
	var _Waypoints = __webpack_require__(/*! ./Waypoints */ 50);
	
	var _Waypoints2 = _interopRequireDefault(_Waypoints);
	
	var _cache = __webpack_require__(/*! ./cache */ 51);
	
	var _cache2 = _interopRequireDefault(_cache);
	
	var _Analytics = __webpack_require__(/*! ./Analytics */ 53);
	
	var _Analytics2 = _interopRequireDefault(_Analytics);
	
	var _emitter = __webpack_require__(/*! ./emitter */ 39);
	
	var _emitter2 = _interopRequireDefault(_emitter);
	
	var _mediabox = __webpack_require__(/*! ./mediabox */ 54);
	
	var _mediabox2 = _interopRequireDefault(_mediabox);
	
	var _scroller = __webpack_require__(/*! ./scroller */ 48);
	
	var _scroller2 = _interopRequireDefault(_scroller);
	
	var _resizer = __webpack_require__(/*! ./resizer */ 43);
	
	var _resizer2 = _interopRequireDefault(_resizer);
	
	exports.api = _api2["default"];
	exports.detect = _detect2["default"];
	exports.dom = _dom2["default"];
	exports.images = _images2["default"];
	exports.resizes = _resizes2["default"];
	exports.scrolls = _scrolls2["default"];
	exports.util = util;
	exports.config = _config2["default"];
	exports.env = _env2["default"];
	exports.log = _log2["default"];
	exports.Waypoints = _Waypoints2["default"];
	exports.cache = _cache2["default"];
	exports.Analytics = _Analytics2["default"];
	exports.emitter = _emitter2["default"];
	exports.mediabox = _mediabox2["default"];
	exports.scroller = _scroller2["default"];
	exports.resizer = _resizer2["default"];

/***/ },
/* 28 */
/*!****************************!*\
  !*** ./js_src/core/api.js ***!
  \****************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _js_libsHoboDistHoboBuild = __webpack_require__(/*! js_libs/hobo/dist/hobo.build */ 2);
	
	var _js_libsHoboDistHoboBuild2 = _interopRequireDefault(_js_libsHoboDistHoboBuild);
	
	var _util = __webpack_require__(/*! ./util */ 29);
	
	var util = _interopRequireWildcard(_util);
	
	var _rSlash = /^\/|\/$/g;
	
	/**
	 *
	 * @public
	 * @namespace api
	 * @memberof core
	 * @description Provide some api methods for accessing content via JS.
	 *
	 */
	var api = {
	    /**
	     *
	     * @public
	     * @member data
	     * @memberof core.api
	     * @description URLs this little api needs to use.
	     *
	     */
	    data: {
	        site: {
	            url: location.origin,
	            api: [location.origin, "api"].join("/")
	        }
	    },
	
	    /**
	     *
	     * @public
	     * @member dataType
	     * @memberof core.api
	     * @description Default dataType for the `request` api method.
	     *
	     */
	    dataType: "json",
	
	    /**
	     *
	     * @public
	     * @member method
	     * @memberof core.api
	     * @description Default method for the `request` api method.
	     *
	     */
	    method: "GET",
	
	    /**
	     *
	     * @public
	     * @method urify
	     * @param {string} uri The collection uri
	     * @memberof core.api
	     * @description Ensures a leading/trailing slash.
	     * @returns {string}
	     *
	     */
	    urify: function urify(uri) {
	        return ["/", uri.replace(_rSlash, ""), "/"].join("");
	    },
	
	    /**
	     *
	     * @public
	     * @method endpoint
	     * @param {string} uri The collection uri
	     * @memberof core.api
	     * @description Creates the fullUrl from a collection uri.
	     * @returns {string}
	     *
	     */
	    endpoint: function endpoint(uri) {
	        return [this.data.site.url, uri.replace(_rSlash, "")].join("/");
	    },
	
	    /**
	     *
	     * @public
	     * @method apipoint
	     * @param {string} uri The API uri
	     * @memberof core.api
	     * @description Creates the fullUrl from an API uri.
	     * @returns {string}
	     *
	     */
	    apipoint: function apipoint(uri) {
	        return [this.data.site.api, uri.replace(_rSlash, "")].join("/");
	    },
	
	    /**
	     *
	     * @public
	     * @method request
	     * @param {string} url The API URL
	     * @param {object} params Merge params to send
	     * @param {object} options Merge config to pass to $.ajax()
	     * @memberof core.api
	     * @description Creates the fullUrl from an API uri.
	     * @returns {Promise}
	     *
	     */
	    request: function request(url, params, options) {
	        var data = util.extendObject({
	            format: this.format,
	            nocache: true
	        }, params);
	        var opts = util.extendObject({
	            url: url,
	            data: data,
	            dataType: this.dataType,
	            method: this.method
	        }, options);
	
	        return _js_libsHoboDistHoboBuild2["default"].ajax(opts);
	    }
	};
	
	/******************************************************************************
	 * Export
	*******************************************************************************/
	exports["default"] = api;
	module.exports = exports["default"];

/***/ },
/* 29 */
/*!*****************************!*\
  !*** ./js_src/core/util.js ***!
  \*****************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 *
	 * @public
	 * @namespace util
	 * @memberof core
	 * @description Houses app-wide utility methods.
	 *
	 */
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _js_libsHoboDistHoboBuild = __webpack_require__(/*! js_libs/hobo/dist/hobo.build */ 2);
	
	var _js_libsHoboDistHoboBuild2 = _interopRequireDefault(_js_libsHoboDistHoboBuild);
	
	var _properjsImageloader = __webpack_require__(/*! properjs-imageloader */ 30);
	
	var _properjsImageloader2 = _interopRequireDefault(_properjsImageloader);
	
	var _fgLoadcss = __webpack_require__(/*! fg-loadcss */ 31);
	
	var _fgLoadcss2 = _interopRequireDefault(_fgLoadcss);
	
	var _fgLoadjs = __webpack_require__(/*! fg-loadjs */ 32);
	
	var _fgLoadjs2 = _interopRequireDefault(_fgLoadjs);
	
	var _dom = __webpack_require__(/*! ./dom */ 33);
	
	var _dom2 = _interopRequireDefault(_dom);
	
	var _config = __webpack_require__(/*! ./config */ 34);
	
	var _config2 = _interopRequireDefault(_config);
	
	var _detect = __webpack_require__(/*! ./detect */ 36);
	
	var _detect2 = _interopRequireDefault(_detect);
	
	var _emitter = __webpack_require__(/*! ./emitter */ 39);
	
	var _emitter2 = _interopRequireDefault(_emitter);
	
	/**
	 *
	 * @description Add pixel units when inline styling
	 * @method px
	 * @param {string} str The value to pixel-ify
	 * @memberof core.util
	 * @returns {string}
	 *
	 */
	var px = function px(str) {
	    return str + "px";
	};
	
	/**
	 *
	 * @description Apply a translate3d transform
	 * @method translate3d
	 * @param {object} el The element to transform
	 * @param {string|number} x The x value
	 * @param {string|number} y The y value
	 * @param {string|number} z The z value
	 * @memberof core.util
	 *
	 */
	var translate3d = function translate3d(el, x, y, z) {
	    el.style[_detect2["default"].getPrefixed("transform")] = "translate3d( " + x + ", " + y + ", " + z + " )";
	};
	
	/**
	 *
	 * @description Look-ahead method for pre-loading elements
	 * @method isElementLoadable
	 * @param {object} el The DOMElement to check the offset of
	 * @memberof core.util
	 * @returns {boolean}
	 *
	 */
	var isElementLoadable = function isElementLoadable(el) {
	    if (el) {
	        var bounds = el.getBoundingClientRect();
	
	        return bounds.top < window.innerHeight * 2;
	    }
	};
	
	/**
	 *
	 * @description Look at elements in the current viewport, vertically
	 * @method isElementVisibleVert
	 * @param {object} el The DOMElement to check the offsets of
	 * @memberof core.util
	 * @returns {boolean}
	 *
	 */
	var isElementVisibleVert = function isElementVisibleVert(el) {
	    if (el) {
	        var bounds = el.getBoundingClientRect();
	
	        return bounds.top < window.innerHeight && bounds.bottom > 0;
	    }
	};
	
	/**
	 *
	 * @description Look at elements in the current viewport, horizontally
	 * @method isElementVisibleHorz
	 * @param {object} el The DOMElement to check the offsets of
	 * @memberof core.util
	 * @returns {boolean}
	 *
	 */
	var isElementVisibleHorz = function isElementVisibleHorz(el) {
	    if (el) {
	        var bounds = el.getBoundingClientRect();
	
	        return bounds.left < window.innerWidth && bounds.right > 0;
	    }
	};
	
	/**
	 *
	 * @method getElementsInView
	 * @memberof core.util
	 * @param {Hobo} $nodes The collection to process
	 * @param {function} executor Optional method to determin `in view`
	 * @description Get elements within a loadable position on the page
	 * @returns {Hobo}
	 *
	 */
	var getElementsInView = function getElementsInView($nodes, executor) {
	    var i = $nodes.length;
	    var ret = [];
	
	    executor = executor || isElementLoadable;
	
	    for (i; i--;) {
	        if (executor($nodes[i])) {
	            ret.push($nodes[i]);
	        }
	    }
	
	    return (0, _js_libsHoboDistHoboBuild2["default"])(ret);
	};
	
	/**
	 *
	 * @description Fresh query to lazyload images on page
	 * @method loadImages
	 * @param {object} images Optional collection of images to load
	 * @param {function} handler Optional handler for load conditions
	 * @memberof core.util
	 * @returns {ImageLoader}
	 *
	 */
	var loadImages = function loadImages(images, handler) {
	    // Normalize the handler
	    handler = handler || isElementLoadable;
	
	    // Normalize the images
	    images = images || (0, _js_libsHoboDistHoboBuild2["default"])(_config2["default"].lazyImageSelector);
	
	    // Hook here to determine image variant sizes to load ?
	    _emitter2["default"].fire("app--util--load-images", images);
	
	    return new _properjsImageloader2["default"]({
	        elements: images,
	        property: _config2["default"].lazyImageAttr,
	        transitionDelay: 0
	
	    }).on("data", handler);
	};
	
	/**
	 *
	 * @description Load all deps for a module
	 * @method loadDependencies
	 * @param {object} data The dependency data
	 * @param {function} callback Function to call when all deps are loaded
	 * @memberof core.util
	 *
	 */
	var loadDependencies = function loadDependencies(data, callback) {
	    var i = 0;
	    var total = data.sources.length;
	    var onload = function onload() {
	        i++;
	
	        if (i === total) {
	            if (typeof data.callback === "function") {
	                data.callback();
	            }
	
	            if (typeof callback === "function") {
	                callback();
	            }
	        }
	    };
	
	    data.sources.forEach(function (source) {
	        if (source.type === "script") {
	            (0, _fgLoadjs2["default"])(_config2["default"].asyncScriptPath + source.file, onload);
	        } else if (source.type === "style") {
	            (0, _fgLoadcss2["default"])(_config2["default"].asyncStylePath + source.file).onloadcssdefined(onload);
	        }
	    });
	};
	
	/**
	 *
	 * @description Toggle on/off scrollability
	 * @method disableMouseWheel
	 * @param {boolean} enable Flag to enable/disable
	 * @memberof core.util
	 *
	 */
	var disableMouseWheel = function disableMouseWheel(enable) {
	    if (enable) {
	        _dom2["default"].doc.on("DOMMouseScroll mousewheel", preNoop);
	    } else {
	        _dom2["default"].doc.off("DOMMouseScroll mousewheel");
	    }
	};
	
	/**
	 *
	 * @description Toggle on/off touch movement
	 * @method disableTouchMove
	 * @param {boolean} enable Flag to enable/disable
	 * @memberof core.util
	 *
	 */
	var disableTouchMove = function disableTouchMove(enable) {
	    if (enable) {
	        _dom2["default"].doc.on("touchmove", preNoop);
	    } else {
	        _dom2["default"].doc.off("touchmove");
	    }
	};
	
	/**
	 *
	 * @description Get the applied transition duration from CSS
	 * @method getTransitionDuration
	 * @param {object} el The DOMElement
	 * @memberof core.util
	 * @returns {number}
	 *
	 */
	var getTransitionDuration = function getTransitionDuration(el) {
	    var ret = 0;
	    var duration = null;
	    var isSeconds = false;
	    var multiplyBy = 1000;
	
	    if (el) {
	        duration = getComputedStyle(el)["transition-duration"];
	        isSeconds = String(duration).indexOf("ms") === -1;
	        multiplyBy = isSeconds ? 1000 : 1;
	
	        ret = parseFloat(duration) * multiplyBy;
	    }
	
	    return ret;
	};
	
	/**
	 *
	 * @description All true all the time
	 * @method noop
	 * @memberof core.util
	 * @returns {boolean}
	 *
	 */
	var noop = function noop() {
	    return true;
	};
	
	/**
	 *
	 * @description Noop a preventDefault() for event handlers
	 * @method preNoop
	 * @memberof core.util
	 * @param {object} e The event object
	 * @returns {boolean}
	 *
	 */
	var preNoop = function preNoop(e) {
	    e.preventDefault();
	    return false;
	};
	
	/**
	 *
	 * @description Randomize array element order in-place.
	 * Using Fisher-Yates shuffle algorithm.
	 * @method shuffle
	 * @param {object} arr The array to shuffle
	 * @memberof core.util
	 * @returns {array}
	 *
	 */
	var shuffle = function shuffle(arr) {
	    var i = arr.length - 1;
	    var j = 0;
	    var temp = arr[i];
	
	    for (i; i > 0; i--) {
	        j = Math.floor(Math.random() * (i + 1));
	        temp = arr[i];
	
	        arr[i] = arr[j];
	        arr[j] = temp;
	    }
	
	    return arr;
	};
	
	/**
	 *
	 * @method calculateAspectRatioFit
	 * @memberof core.util
	 * @param {number} srcWidth The node width
	 * @param {number} srcHeight The node height
	 * @param {number} maxWidth The bounds width
	 * @param {number} maxHeight The bounds height
	 * @description Get optimum size for the given bounds and node dimensions
	 * @returns {object}
	 *
	 */
	var calculateAspectRatioFit = function calculateAspectRatioFit(srcWidth, srcHeight, maxWidth, maxHeight) {
	    var ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);
	
	    return {
	        width: srcWidth * ratio,
	        height: srcHeight * ratio
	    };
	};
	
	/**
	 *
	 * @public
	 * @method getPageKey
	 * @memberof util
	 * @description Determine the key for local page cache storage.
	 * @returns {string}
	 *
	 */
	var getPageKey = function getPageKey() {
	    return "" + window.location.pathname + window.location.search;
	};
	
	/**
	 *
	 * @public
	 * @method extendObject
	 * @memberof util
	 * @param {object} target The target object/array
	 * @param {object} arrow The incoming object/array
	 * @description Merge or clone objects and arrays
	 * @returns {object}
	 *
	 */
	var extendObject = function extendObject(target, arrow) {
	    var i = null;
	    var ret = target;
	
	    // Merge Arrays
	    // This is really just used as a `cloning` mechanism
	    if (Array.isArray(arrow)) {
	        i = arrow.length;
	
	        for (i; i--;) {
	            ret[i] = arrow[i];
	        }
	
	        // Merge Objects
	        // This could `clone` as well, but is better for merging 2 objects
	    } else {
	            for (i in arrow) {
	                if (arrow.hasOwnProperty(i)) {
	                    ret[i] = arrow[i];
	                }
	            }
	        }
	
	    return ret;
	};
	
	/******************************************************************************
	 * Export
	*******************************************************************************/
	exports["default"] = {
	    // Loading
	    loadImages: loadImages,
	    loadDependencies: loadDependencies,
	    getElementsInView: getElementsInView,
	    isElementLoadable: isElementLoadable,
	    isElementVisibleVert: isElementVisibleVert,
	    isElementVisibleHorz: isElementVisibleHorz,
	
	    // Disabling
	    disableTouchMove: disableTouchMove,
	    disableMouseWheel: disableMouseWheel,
	
	    // Random
	    px: px,
	    noop: noop,
	    shuffle: shuffle,
	    getPageKey: getPageKey,
	    translate3d: translate3d,
	    extendObject: extendObject,
	    getTransitionDuration: getTransitionDuration,
	    calculateAspectRatioFit: calculateAspectRatioFit
	};
	module.exports = exports["default"];

/***/ },
/* 30 */
/*!***********************************************!*\
  !*** ./~/properjs-imageloader/ImageLoader.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	/*!
	 *
	 * Handle lazy-loading images with contextual load conditions.
	 *
	 * @ImageLoader
	 * @author: kitajchuk
	 *
	 *
	 */
	(function ( factory ) {
	    
	    if ( true ) {
	        module.exports = factory();
	
	    } else if ( typeof window !== "undefined" ) {
	        window.ImageLoader = factory();
	    }
	    
	})(function () {
	
	    var raf = window.requestAnimationFrame,
	        caf = window.cancelAnimationFrame,
	    
	        _i,
	        _all = 0,
	        _num = 0,
	        _raf = null,
	        _ini = false,
	    
	        // Holds all "instances"
	        // This way we can use a single animator
	        _instances = [];
	    
	    
	    // Should support elements as null, undefined, DOMElement, HTMLCollection, string selector
	    function setElements( elements ) {
	        // Handles string selector
	        if ( typeof elements === "string" ) {
	            elements = document.querySelectorAll( elements );
	    
	        // Handles DOMElement
	        } else if ( elements && elements.nodeType === 1 ) {
	            elements = [ elements ];
	        
	        } else if ( !elements ) {
	            elements = [];
	        }
	    
	        // Default:
	        // HTMLCollection / Array
	        return elements;
	    }
	    
	    
	    // Called when instances are created
	    function initializer( instance ) {
	        // Increment ALL
	        _all = _all + instance._num2Load;
	    
	        // Private instances array
	        _instances.push( instance );
	    
	        // One stop shopping
	        if ( !_ini ) {
	            _ini = true;
	            animate();
	        }
	    }
	    
	    
	    // Called on each iteration of the animation cycle
	    function animate() {
	        if ( _num !== _all ) {
	            _raf = raf( animate );
	    
	            for ( _i = _instances.length; _i--; ) {
	                if ( _instances[ _i ]._numLoaded !== _instances[ _i ]._num2Load && _instances[ _i ]._loadType === "async" ) {
	                    _instances[ _i ].handle();
	                }
	            }
	    
	        } else {
	            stop();
	        }
	    }
	    
	    
	    // Stops the animation cycle queue for loading images
	    function stop () {
	        caf( _raf );
	    
	        _raf = null;
	        _ini = false;
	    }
	    
	    
	    // Simple add class polyfill
	    function addClass( el, str ) {
	        var newClass = str.split( " " ),
	            elsClass = el.className.split( " " );
	    
	        for ( var i = 0, len = newClass.length; i < len; i++ ) {
	            if ( elsClass.indexOf( newClass[ i ] ) === -1 ) {
	                elsClass.push( newClass[ i ] );
	            }
	        }
	    
	        el.className = elsClass.join( " " );
	    }
	    
	    
	    // Simple remove class polyfill
	    function removeClass( el, str ) {
	        var oldClass = str.split( " " ),
	            elsClass = el.className.split( " " );
	    
	        for ( var i = 0, len = oldClass.length; i < len; i++ ) {
	            if ( elsClass.indexOf( oldClass[ i ] ) !== -1 ) {
	                elsClass.splice( elsClass.indexOf( oldClass[ i ] ), 1 );
	            }
	        }
	    
	        el.className = elsClass.join( " " );
	    }
	    
	    
	    /**
	     *
	     * Handle lazy-loading images with unique callback conditions
	     * @memberof! <global>
	     * @requires raf
	     * @constructor ImageLoader
	     * @param {object} options Controller settings
	     * <ul>
	     * <li>elements - The collection of elements to load against</li>
	     * <li>property - The property to pull the image source from</li>
	     * <li>transitionDelay - The timeout before transition starts</li>
	     * <li>transitionDuration - The length of the animation</li>
	     * </ul>
	     *
	     */
	    var ImageLoader = function () {
	        return this.init.apply( this, arguments );
	    };
	    
	    
	    /**
	     *
	     * Stop all instances and reset the stack for EVERYTHING
	     * @method killInstances
	     * @memberof ImageLoader
	     *
	     */
	    ImageLoader.killInstances = function () {
	        stop();
	        
	        _all = 0;
	        _num = 0;
	        _instances = [];
	    };
	    
	    
	    /**
	     *
	     * ClassName for the element loading state
	     * @member IS_LOADING
	     * @memberof ImageLoader
	     *
	     */
	    ImageLoader.IS_LOADING = "-is-lazy-loading";
	    
	    
	    /**
	     *
	     * ClassName for the element transitioning state
	     * @member IS_TRANSITION
	     * @memberof ImageLoader
	     *
	     */
	    ImageLoader.IS_TRANSITION = "-is-lazy-transition";
	    
	    
	    /**
	     *
	     * ClassName for the elements loaded state
	     * @member IS_LOADED
	     * @memberof ImageLoader
	     *
	     */
	    ImageLoader.IS_LOADED = "-is-lazy-loaded";
	    
	    
	    /**
	     *
	     * ClassName to define the element as having been loaded
	     * @member IS_HANDLED
	     * @memberof ImageLoader
	     *
	     */
	    ImageLoader.IS_HANDLED = "-is-lazy-handled";
	    
	    
	    ImageLoader.prototype = {
	        constructor: ImageLoader,
	    
	        init: function ( options ) {
	            var self = this;
	    
	            if ( !options ) {
	                throw new Error( "ImageLoader Class requires options to be passed" );
	            }
	    
	            /**
	             *
	             * The Collection to load against
	             * @memberof ImageLoader
	             * @member _elements
	             * @private
	             *
	             */
	            this._elements = setElements( options.elements );
	    
	            /**
	             *
	             * The property to get image source from
	             * @memberof ImageLoader
	             * @member _property
	             * @private
	             *
	             */
	            this._property = (options.property || "data-src");
	    
	            /**
	             *
	             * The way to load, async or sync
	             * Using "sync" loading requires calling .start() on the instance
	             * and the "handle" event will not be utilized, rather each image
	             * will be loaded in succession as the previous finishes loading
	             * @memberof ImageLoader
	             * @member _loadType
	             * @private
	             *
	             */
	            this._loadType = (options.loadType || "async");
	    
	            /**
	             *
	             * The current amount of elements lazy loaded
	             * @memberof ImageLoader
	             * @member _numLoaded
	             * @private
	             *
	             */
	            this._numLoaded = 0;
	    
	            /**
	             *
	             * The total amount of elements to lazy load
	             * @memberof ImageLoader
	             * @member _num2Load
	             * @private
	             *
	             */
	            this._num2Load = (this._elements ? this._elements.length : 0);
	    
	            /**
	             *
	             * The delay to execute lazy loading on an element in ms
	             * @memberof ImageLoader
	             * @member _transitionDelay
	             * @default 100
	             * @private
	             *
	             */
	            this._transitionDelay = (options.transitionDelay || 100);
	    
	            /**
	             *
	             * The duration on a lazy loaded elements fade in in ms
	             * @memberof ImageLoader
	             * @member _transitionDuration
	             * @default 600
	             * @private
	             *
	             */
	            this._transitionDuration = (options.transitionDuration || 600);
	    
	            /**
	             *
	             * This flags that all elements have been loaded
	             * @memberof ImageLoader
	             * @member _resolved
	             * @private
	             *
	             */
	            this._resolved = false;
	    
	            /**
	             *
	             * Defined event namespaced handlers
	             * @memberof ImageLoader
	             * @member _handlers
	             * @private
	             *
	             */
	            this._handlers = {
	                data: null,
	                load: null,
	                done: null,
	                error: null,
	                update: null
	            };
	    
	            // Break out if no elements in collection
	            if ( !this._elements.length ) {
	                return this;
	            }
	    
	            // Only run animation frame for async loading
	            if ( this._loadType === "async" ) {
	                initializer( this );
	    
	            } else {
	                this._syncLoad();
	            }
	        },
	    
	        /**
	         *
	         * Add a callback handler for the specified event name
	         * @memberof ImageLoader
	         * @method on
	         * @param {string} event The event name to listen for
	         * @param {function} handler The handler callback to be fired
	         *
	         */
	        on: function ( event, handler ) {
	            this._handlers[ event ] = handler;
	    
	            return this;
	        },
	        
	        /**
	         *
	         * Fire the given event for the loaded element
	         * @memberof ImageLoader
	         * @method fire
	         * @returns bool
	         *
	         */
	        fire: function ( event, element ) {
	            var ret = false;
	    
	            if ( typeof this._handlers[ event ] === "function" ) {
	                ret = this._handlers[ event ].call( this, element );
	            }
	    
	            return ret;
	        },
	    
	        /**
	         *
	         * Iterate over elements and fire the update handler
	         * @memberof ImageLoader
	         * @method update
	         *
	         * @fires update
	         *
	         */
	        update: function () {
	            var self = this;
	    
	            for ( var i = 0, len = this._elements.length; i < len; i++ ) {
	                var element = this._elements[ i ];
	    
	                this.fire( "update", element );
	            }
	        },
	        
	        /**
	         *
	         * Perform the image loading and set correct values on element
	         * @method load
	         * @memberof ImageLoader
	         * @param {object} $elem element object
	         * @param {function} callback optional callback for each load
	         *
	         * @fires done
	         *
	         */
	        load: function ( element, callback ) {
	            var self = this,
	                image = null,
	                timeout = null,
	                isImage = (element.nodeName.toLowerCase() === "img"),
	                source = element.getAttribute( this._property );
	    
	            element.setAttribute( "data-imageloader", true );
	    
	            addClass( element, ImageLoader.IS_LOADING );
	    
	            if ( isImage ) {
	                image = element;
	    
	            } else {
	                image = new Image();
	            }
	    
	            timeout = setTimeout(function () {
	                clearTimeout( timeout );
	    
	                addClass( element, ImageLoader.IS_TRANSITION );
	    
	                image.onload = function () {
	                    self.fire( "load", element );
	    
	                    if ( !isImage ) {
	                        element.style.backgroundImage = ("url(" + source + ")");
	    
	                        image = null;
	                    }
	    
	                    addClass( element, ImageLoader.IS_LOADED );
	    
	                    timeout = setTimeout(function () {
	                        clearTimeout( timeout );
	    
	                        removeClass( element, ImageLoader.IS_LOADING + " " + ImageLoader.IS_TRANSITION + " " + ImageLoader.IS_LOADED )
	                        addClass( element, ImageLoader.IS_HANDLED );
	    
	                        if ( (self._numLoaded === self._num2Load) && !self._resolved ) {
	                            self._resolveInstance( true );
	    
	                        } else if ( typeof callback === "function" ) {
	                            // Errors first
	                            callback( false );
	                        }
	    
	                    }, self._transitionDuration );
	                };
	    
	                image.onerror = function () {
	                    self.fire( "error", element );
	    
	                    if ( (self._numLoaded === self._num2Load) && !self._resolved ) {
	                        self._resolveInstance( true );
	    
	                    } else if ( typeof callback === "function" ) {
	                        // Errors first
	                        callback( true );
	                    }
	                };
	    
	                image.src = source;
	    
	            }, this._transitionDelay );
	    
	            return this;
	        },
	    
	        /**
	         *
	         * Handles element iterations and loading based on callbacks
	         * @memberof ImageLoader
	         * @method handle
	         *
	         * @fires handle
	         *
	         */
	        handle: function () {
	            var elems = this._getNotLoaded(),
	                self = this;
	    
	            for ( var i = 0, len = elems.length; i < len; i++ ) {
	                var elem = elems[ i ];
	    
	                // Fires the predefined "data" event
	                if ( self.fire( "data", elem ) ) {
	                    _num++;
	    
	                    self._numLoaded++;
	    
	                    self.load( elem );
	                }
	            }
	        },
	        
	        /**
	         *
	         * Resolve an instance and remove it from the stack
	         * @memberof ImageLoader
	         * @method _resolveInstance
	         *
	         */
	        _resolveInstance: function () {
	            // Resolved state
	            this._resolved = true;
	            
	            // Fires the predefined "done" event
	            this.fire( "done" );
	            
	            // Purge the instance from the stack
	            _instances.splice( _instances.indexOf( this ), 1 );
	        },
	    
	        /**
	         *
	         * Get all images in the set that have yet to be loaded
	         * @memberof ImageLoader
	         * @method _getNotLoaded
	         * @private
	         *
	         */
	        _getNotLoaded: function () {
	            var elems = [];
	    
	            for ( var i = 0, len = this._elements.length; i < len; i++ ) {
	                if ( !this._elements[ i ].getAttribute( "data-imageloader" ) ) {
	                    elems.push( this._elements[ i ] );
	                }
	            }
	    
	            return elems;
	        },
	    
	        /**
	         *
	         * Support batch synchronous loading of a set of images
	         * @memberof ImageLoader
	         * @method _syncLoad
	         * @private
	         *
	         */
	        _syncLoad: function () {
	            var self = this;
	    
	            function syncLoad() {
	                var elem = self._elements[ self._numLoaded ];
	    
	                self._numLoaded++;
	    
	                self.load( elem, function ( error ) {
	                    if ( !error && !self._resolved ) {
	                        syncLoad();
	                    }
	                });
	            }
	    
	            syncLoad();
	        }
	    };
	    
	    
	    return ImageLoader;
	
	
	});

/***/ },
/* 31 */
/*!*********************************!*\
  !*** ./~/fg-loadcss/loadCSS.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/*!
	loadCSS: load a CSS file asynchronously.
	[c]2015 @scottjehl, Filament Group, Inc.
	Licensed MIT
	*/
	(function(w){
		"use strict";
		/* exported loadCSS */
		var loadCSS = function( href, before, media ){
			// Arguments explained:
			// `href` [REQUIRED] is the URL for your CSS file.
			// `before` [OPTIONAL] is the element the script should use as a reference for injecting our stylesheet <link> before
				// By default, loadCSS attempts to inject the link after the last stylesheet or script in the DOM. However, you might desire a more specific location in your document.
			// `media` [OPTIONAL] is the media type or query of the stylesheet. By default it will be 'all'
			var doc = w.document;
			var ss = doc.createElement( "link" );
			var ref;
			if( before ){
				ref = before;
			}
			else {
				var refs = ( doc.body || doc.getElementsByTagName( "head" )[ 0 ] ).childNodes;
				ref = refs[ refs.length - 1];
			}
	
			var sheets = doc.styleSheets;
			ss.rel = "stylesheet";
			ss.href = href;
			// temporarily set media to something inapplicable to ensure it'll fetch without blocking render
			ss.media = "only x";
	
			// Inject link
				// Note: the ternary preserves the existing behavior of "before" argument, but we could choose to change the argument to "after" in a later release and standardize on ref.nextSibling for all refs
				// Note: `insertBefore` is used instead of `appendChild`, for safety re: http://www.paulirish.com/2011/surefire-dom-element-insertion/
			ref.parentNode.insertBefore( ss, ( before ? ref : ref.nextSibling ) );
			// A method (exposed on return object for external use) that mimics onload by polling until document.styleSheets until it includes the new sheet.
			var onloadcssdefined = function( cb ){
				var resolvedHref = ss.href;
				var i = sheets.length;
				while( i-- ){
					if( sheets[ i ].href === resolvedHref ){
						return cb();
					}
				}
				setTimeout(function() {
					onloadcssdefined( cb );
				});
			};
	
			// once loaded, set link's media back to `all` so that the stylesheet applies once it loads
			ss.onloadcssdefined = onloadcssdefined;
			onloadcssdefined(function() {
				ss.media = media || "all";
			});
			return ss;
		};
		// commonjs
		if( true ){
			module.exports = loadCSS;
		}
		else {
			w.loadCSS = loadCSS;
		}
	}( typeof global !== "undefined" ? global : this ));
	
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 32 */
/*!*******************************!*\
  !*** ./~/fg-loadjs/loadJS.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/*! loadJS: load a JS file asynchronously. [c]2014 @scottjehl, Filament Group, Inc. (Based on http://goo.gl/REQGQ by Paul Irish). Licensed MIT */
	(function( w ){
		var loadJS = function( src, cb ){
			"use strict";
			var ref = w.document.getElementsByTagName( "script" )[ 0 ];
			var script = w.document.createElement( "script" );
			script.src = src;
			script.async = true;
			ref.parentNode.insertBefore( script, ref );
			if (cb && typeof(cb) === "function") {
				script.onload = cb;
			}
			return script;
		};
		// commonjs
		if( true ){
			module.exports = loadJS;
		}
		else {
			w.loadJS = loadJS;
		}
	}( typeof global !== "undefined" ? global : this ));
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 33 */
/*!****************************!*\
  !*** ./js_src/core/dom.js ***!
  \****************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _js_libsHoboDistHoboBuild = __webpack_require__(/*! js_libs/hobo/dist/hobo.build */ 2);
	
	var _js_libsHoboDistHoboBuild2 = _interopRequireDefault(_js_libsHoboDistHoboBuild);
	
	/**
	 *
	 * @public
	 * @namespace dom
	 * @memberof core
	 * @description Holds high-level cached Nodes.
	 *
	 */
	var dom = {
	  /**
	   *
	   * @public
	   * @member doc
	   * @memberof core.dom
	   * @description The cached document.
	   *
	   */
	  doc: (0, _js_libsHoboDistHoboBuild2["default"])(document),
	
	  /**
	   *
	   * @public
	   * @member html
	   * @memberof core.dom
	   * @description The cached documentElement node.
	   *
	   */
	  html: (0, _js_libsHoboDistHoboBuild2["default"])(document.documentElement),
	
	  /**
	   *
	   * @public
	   * @member body
	   * @memberof core.dom
	   * @description The cached body node.
	   *
	   */
	  body: (0, _js_libsHoboDistHoboBuild2["default"])(document.body),
	
	  /**
	   *
	   * @public
	   * @member page
	   * @memberof core.dom
	   * @description The cached page container node.
	   *
	   */
	  page: (0, _js_libsHoboDistHoboBuild2["default"])(".js-page"),
	
	  /**
	   *
	   * @public
	   * @member nav
	   * @memberof core.dom
	   * @description The cached nav node.
	   *
	   */
	  nav: (0, _js_libsHoboDistHoboBuild2["default"])(".js-nav"),
	
	  /**
	   *
	   * @public
	   * @member header
	   * @memberof core.dom
	   * @description The cached header node.
	   *
	   */
	  header: (0, _js_libsHoboDistHoboBuild2["default"])(".js-header"),
	
	  /**
	   *
	   * @public
	   * @member intro
	   * @memberof core.dom
	   * @description The cached intro node.
	   *
	   */
	  intro: (0, _js_libsHoboDistHoboBuild2["default"])(".js-intro")
	};
	
	/******************************************************************************
	 * Export
	*******************************************************************************/
	exports["default"] = dom;
	module.exports = exports["default"];

/***/ },
/* 34 */
/*!*******************************!*\
  !*** ./js_src/core/config.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _properjsEasing = __webpack_require__(/*! properjs-easing */ 35);
	
	var _properjsEasing2 = _interopRequireDefault(_properjsEasing);
	
	/**
	 *
	 * @public
	 * @namespace config
	 * @memberof core
	 * @description Stores app-wide config values.
	 *
	 */
	var config = {
	  /**
	   *
	   * @public
	   * @member defaultEasing
	   * @memberof core.config
	   * @description The default easing function for javascript Tweens.
	   *
	   */
	  defaultEasing: _properjsEasing2["default"].easeInOutCubic,
	
	  /**
	   *
	   * @public
	   * @member defaultDuration
	   * @memberof core.config
	   * @description The default duration for javascript Tweens.
	   *
	   */
	  defaultDuration: 400,
	
	  /**
	   *
	   * @public
	   * @member defaultVideoChannel
	   * @memberof core.config
	   * @description The [MediaBox]{@link https://github.com/ProperJS/MediaBox} channel used for video.
	   *
	   */
	  defaultVideoChannel: "vid",
	
	  /**
	   *
	   * @public
	   * @member defaultAudioChannel
	   * @memberof core.config
	   * @description The [MediaBox]{@link https://github.com/ProperJS/MediaBox} channel used for audio.
	   *
	   */
	  defaultAudioChannel: "bgm",
	
	  /**
	   *
	   * @public
	   * @member lazyImageSelector
	   * @memberof core.config
	   * @description The string selector used for images deemed lazy-loadable.
	   *
	   */
	  lazyImageSelector: ".js-lazy-image",
	
	  /**
	   *
	   * @public
	   * @member lazyImageAttr
	   * @memberof core.config
	   * @description The string attribute for lazy image source URLs.
	   *
	   */
	  lazyImageAttr: "data-img-src",
	
	  /**
	   *
	   * @public
	   * @member imageLoaderAttr
	   * @memberof core.config
	   * @description The string attribute ImageLoader gives loaded images.
	   *
	   */
	  imageLoaderAttr: "data-imageloader",
	
	  /**
	   *
	   * @public
	   * @member asyncScriptPath
	   * @memberof core.config
	   * @description The string path where async scripts are kept.
	   *
	   */
	  asyncScriptPath: "/assets/async/scripts/",
	
	  /**
	   *
	   * @public
	   * @member asyncStylePath
	   * @memberof core.config
	   * @description The string path where async styles are kept.
	   *
	   */
	  asyncStylePath: "/assets/async/styles/"
	};
	
	/******************************************************************************
	 * Export
	*******************************************************************************/
	exports["default"] = config;
	module.exports = exports["default"];

/***/ },
/* 35 */
/*!*************************************!*\
  !*** ./~/properjs-easing/Easing.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	/*!
	 *
	 * A base set of easing methods
	 * Most of which were found here:
	 * https://gist.github.com/gre/1650294
	 *
	 * @Easing
	 * @author: kitajchuk
	 *
	 */
	(function ( factory ) {
	    
	    if ( true ) {
	        module.exports = factory();
	
	    } else if ( typeof window !== "undefined" ) {
	        window.Easing = factory();
	    }
	    
	})(function () {
	
	    /**
	     *
	     * Easing functions
	     * @namespace Easing
	     * @memberof! <global>
	     *
	     */
	    var Easing = {
	        /**
	         *
	         * Produce a linear ease
	         * @method linear
	         * @param {number} t Difference in time
	         * @memberof Easing
	         * @returns a new t value
	         *
	         */
	        linear: function ( t ) { return t; },
	        
	        /**
	         *
	         * Produce a swing ease like in jQuery
	         * @method swing
	         * @param {number} t Difference in time
	         * @memberof Easing
	         * @returns a new t value
	         *
	         */
	        swing: function ( t ) { return (1-Math.cos( t*Math.PI ))/2; },
	        
	        /**
	         *
	         * Accelerating from zero velocity
	         * @method easeInQuad
	         * @param {number} t Difference in time
	         * @memberof Easing
	         * @returns a new t value
	         *
	         */
	        easeInQuad: function ( t ) { return t*t; },
	        
	        /**
	         *
	         * Decelerating to zero velocity
	         * @method easeOutQuad
	         * @param {number} t Difference in time
	         * @memberof Easing
	         * @returns a new t value
	         *
	         */
	        easeOutQuad: function ( t ) { return t*(2-t); },
	        
	        /**
	         *
	         * Acceleration until halfway, then deceleration
	         * @method easeInOutQuad
	         * @param {number} t Difference in time
	         * @memberof Easing
	         * @returns a new t value
	         *
	         */
	        easeInOutQuad: function ( t ) { return t<0.5 ? 2*t*t : -1+(4-2*t)*t; },
	        
	        /**
	         *
	         * Accelerating from zero velocity
	         * @method easeInCubic
	         * @param {number} t Difference in time
	         * @memberof Easing
	         * @returns a new t value
	         *
	         */
	        easeInCubic: function ( t ) { return t*t*t; },
	        
	        /**
	         *
	         * Decelerating to zero velocity
	         * @method easeOutCubic
	         * @param {number} t Difference in time
	         * @memberof Easing
	         * @returns a new t value
	         *
	         */
	        easeOutCubic: function ( t ) { return (--t)*t*t+1; },
	        
	        /**
	         *
	         * Acceleration until halfway, then deceleration
	         * @method easeInOutCubic
	         * @param {number} t Difference in time
	         * @memberof Easing
	         * @returns a new t value
	         *
	         */
	        easeInOutCubic: function ( t ) { return t<0.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1; },
	        
	        /**
	         *
	         * Accelerating from zero velocity
	         * @method easeInQuart
	         * @param {number} t Difference in time
	         * @memberof Easing
	         * @returns a new t value
	         *
	         */
	        easeInQuart: function ( t ) { return t*t*t*t; },
	        
	        /**
	         *
	         * Decelerating to zero velocity
	         * @method easeOutQuart
	         * @param {number} t Difference in time
	         * @memberof Easing
	         * @returns a new t value
	         *
	         */
	        easeOutQuart: function ( t ) { return 1-(--t)*t*t*t; },
	        
	        /**
	         *
	         * Acceleration until halfway, then deceleration
	         * @method easeInOutQuart
	         * @param {number} t Difference in time
	         * @memberof Easing
	         * @returns a new t value
	         *
	         */
	        easeInOutQuart: function ( t ) { return t<0.5 ? 8*t*t*t*t : 1-8*(--t)*t*t*t; },
	        
	        /**
	         *
	         * Accelerating from zero velocity
	         * @method easeInQuint
	         * @param {number} t Difference in time
	         * @memberof Easing
	         * @returns a new t value
	         *
	         */
	        easeInQuint: function ( t ) { return t*t*t*t*t; },
	        
	        /**
	         *
	         * Decelerating to zero velocity
	         * @method easeOutQuint
	         * @param {number} t Difference in time
	         * @memberof Easing
	         * @returns a new t value
	         *
	         */
	        easeOutQuint: function ( t ) { return 1+(--t)*t*t*t*t; },
	        
	        /**
	         *
	         * Acceleration until halfway, then deceleration
	         * @method easeInOutQuint
	         * @param {number} t Difference in time
	         * @memberof Easing
	         * @returns a new t value
	         *
	         */
	        easeInOutQuint: function ( t ) { return t<0.5 ? 16*t*t*t*t*t : 1+16*(--t)*t*t*t*t; }
	    };
	    
	    
	    return Easing;
	
	
	});

/***/ },
/* 36 */
/*!*******************************!*\
  !*** ./js_src/core/detect.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _dom = __webpack_require__(/*! ./dom */ 33);
	
	var _dom2 = _interopRequireDefault(_dom);
	
	var _log = __webpack_require__(/*! ./log */ 37);
	
	var _log2 = _interopRequireDefault(_log);
	
	var vendors = ["Webkit", "Moz", "ms"];
	
	/**
	 *
	 * @public
	 * @namespace detect
	 * @memberof core
	 * @description Handles basic detection of touch devices.
	 *
	 */
	var detect = {
	    /**
	     *
	     * @public
	     * @method init
	     * @memberof core.detect
	     * @description Initializes the detect module.
	     *
	     */
	    init: function init() {
	        this._isTouch = "ontouchstart" in window || "DocumentTouch" in window;
	        this._isMobile = /Android|BlackBerry|iPhone|iPad|iPod|IEMobile|Opera Mini/gi.test(window.navigator.userAgent);
	        this._isSurface = "onmouseover" in document && /Windows NT/.test(window.navigator.userAgent) && /Touch/.test(window.navigator.userAgent);
	        this._isStandalone = "standalone" in window;
	        this._prefix = this.getPrefix();
	
	        // iOS Standalone mode
	        if ("standalone" in window) {
	            _dom2["default"].html.addClass("is-standalone");
	        }
	
	        // Windows Surface mode
	        if (this._isSurface) {
	            _dom2["default"].html.addClass("is-surface");
	        }
	
	        // Touch support mode
	        if (this._isTouch) {
	            _dom2["default"].html.addClass("is-touchable");
	
	            // Mouse support mode
	        } else {
	                _dom2["default"].html.addClass("is-hoverable");
	            }
	
	        (0, _log2["default"])("detect initialized");
	    },
	
	    /**
	     *
	     * @public
	     * @method getPrefix
	     * @memberof core.detect
	     * @description Get the vendor prefix.
	     * @returns {string}
	     *
	     */
	    getPrefix: function getPrefix() {
	        var i = vendors.length;
	
	        if (document.body.style.transform === null) {
	            for (i; i--;) {
	                if (document.body.style[vendors[i] + "Transform"]) {
	                    return vendors[i];
	                }
	            }
	        }
	
	        return "";
	    },
	
	    /**
	     *
	     * @public
	     * @method getPrefixed
	     * @param {string} property The property to be prefixed
	     * @memberof core.detect
	     * @description Get the vendor prefixed property.
	     * @returns {string}
	     *
	     */
	    getPrefixed: function getPrefixed(property) {
	        var camelProp = property[0].toUpperCase() + property.slice(1);
	
	        return this._prefix ? this._prefix + camelProp : property;
	    },
	
	    /**
	     *
	     * @public
	     * @method isMobile
	     * @memberof core.detect
	     * @description Check for high-end mobile device user agents.
	     * @returns {boolean}
	     *
	     */
	    isMobile: function isMobile() {
	        return this._isMobile;
	    },
	
	    /**
	     *
	     * @public
	     * @method isTouch
	     * @memberof core.detect
	     * @description Check whether this is a touch device or not.
	     * [See Modernizr]{@link https://github.com/Modernizr/Modernizr/blob/master/feature-detects/touchevents.js}
	     * @returns {boolean}
	     *
	     */
	    isTouch: function isTouch() {
	        return this._isTouch;
	    },
	
	    /**
	     *
	     * @public
	     * @method isDevice
	     * @memberof core.detect
	     * @description Must be `isMobile` and `isTouch`.
	     * @returns {boolean}
	     *
	     */
	    isDevice: function isDevice() {
	        return this._isTouch && this._isMobile;
	    },
	
	    /**
	     *
	     * @public
	     * @method isStandalone
	     * @memberof core.detect
	     * @description Must be window.standalone.
	     * @returns {boolean}
	     *
	     */
	    isStandalone: function isStandalone() {
	        return this._isStandalone;
	    }
	};
	
	/******************************************************************************
	 * Export
	*******************************************************************************/
	exports["default"] = detect;
	module.exports = exports["default"];

/***/ },
/* 37 */
/*!****************************!*\
  !*** ./js_src/core/log.js ***!
  \****************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _env = __webpack_require__(/*! ./env */ 38);
	
	var _env2 = _interopRequireDefault(_env);
	
	/**
	 *
	 * @public
	 * @method log
	 * @memberof core
	 * @description Normalized app console logger.
	 *              If you want to use another console method like `info` or `warn`
	 *              you can pass it as the first argument to the `log` method here.
	 *              The default method that will be assumed is `console.log`.
	 *
	 *              Examples:
	 *              log( "info", ...args )
	 *              log( "warn", ...args )
	 *              log( "trace", ...args )
	 *              log( "debug", ...args )
	 *
	 */
	var log = function log() {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	    }
	
	    // Only log for development environments
	    if (!_env2["default"].isDev() || !("console" in window)) {
	        return;
	    }
	
	    var method = "log";
	
	    // First arg can be another `console` method to call ?
	    if (typeof console[args[0]] === "function") {
	        method = args[0];
	        args = args.slice(1, args.length);
	    }
	
	    window.console[method](args);
	};
	
	/******************************************************************************
	 * Export
	*******************************************************************************/
	exports["default"] = log;
	module.exports = exports["default"];

/***/ },
/* 38 */
/*!****************************!*\
  !*** ./js_src/core/env.js ***!
  \****************************/
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var DEV = "development";
	var PROD = "production";
	
	/**
	 *
	 * @public
	 * @namespace env
	 * @memberof core
	 * @description Set the app environment.
	 *
	 */
	var env = {
	  /**
	   *
	   * @member DEV
	   * @memberof core.env
	   * @description The development environment CONST.
	   *
	   */
	  DEV: DEV,
	
	  /**
	   *
	   * @member PROD
	   * @memberof core.env
	   * @description The production environment CONST.
	   *
	   */
	  PROD: PROD,
	
	  /**
	   *
	   * @member ENV
	   * @memberof core.env
	   * @description The applied environment ref.
	   *
	   */
	  ENV: /^localhost|^[0-9]{0,3}\.[0-9]{0,3}\.[0-9]{0,3}\.[0-9]{0,3}/g.test(document.domain) ? DEV : PROD,
	
	  /**
	   *
	   * @method get
	   * @memberof core.isDev
	   * @description Returns the dev mode status.
	   * @returns {boolean}
	   *
	   */
	  isDev: function isDev() {
	    return this.ENV === DEV;
	  }
	};
	
	/******************************************************************************
	 * Export
	*******************************************************************************/
	exports["default"] = env;
	module.exports = exports["default"];

/***/ },
/* 39 */
/*!********************************!*\
  !*** ./js_src/core/emitter.js ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _properjsController = __webpack_require__(/*! properjs-controller */ 26);
	
	var _properjsController2 = _interopRequireDefault(_properjsController);
	
	/**
	 *
	 * @description Single app instanceof [Controller]{@link https://github.com/ProperJS/Controller} for arbitrary event emitting
	 * @member emitter
	 * @memberof core
	 *
	 */
	var emitter = new _properjsController2["default"]();
	
	/******************************************************************************
	 * Export
	*******************************************************************************/
	exports["default"] = emitter;
	module.exports = exports["default"];

/***/ },
/* 40 */
/*!*******************************!*\
  !*** ./js_src/core/images.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _dom = __webpack_require__(/*! ./dom */ 33);
	
	var _dom2 = _interopRequireDefault(_dom);
	
	var _util = __webpack_require__(/*! ./util */ 29);
	
	var util = _interopRequireWildcard(_util);
	
	var _log = __webpack_require__(/*! ./log */ 37);
	
	var _log2 = _interopRequireDefault(_log);
	
	var _config = __webpack_require__(/*! ./config */ 34);
	
	var _config2 = _interopRequireDefault(_config);
	
	var _properjsImageloader = __webpack_require__(/*! properjs-imageloader */ 30);
	
	var _properjsImageloader2 = _interopRequireDefault(_properjsImageloader);
	
	var _ImageController = __webpack_require__(/*! ./ImageController */ 41);
	
	var _ImageController2 = _interopRequireDefault(_ImageController);
	
	var _emitter = __webpack_require__(/*! ./emitter */ 39);
	
	var _emitter2 = _interopRequireDefault(_emitter);
	
	/**
	 *
	 * @public
	 * @namespace images
	 * @memberof core
	 * @description Handles separation of image pre-loading and image lazy-loading.
	 *
	 */
	var images = {
	    /**
	     *
	     * @public
	     * @method init
	     * @memberof core.images
	     * @description Method runs once when window loads.
	     *
	     */
	    init: function init() {
	        (0, _log2["default"])("images initialized");
	    },
	
	    /**
	     *
	     * @public
	     * @method isActive
	     * @memberof core.images
	     * @description Method informs PageController of active status.
	     * @returns {boolean}
	     *
	     */
	    isActive: util.noop,
	
	    /**
	     *
	     * @public
	     * @method onload
	     * @memberof core.images
	     * @description Method performs onloading actions for this module.
	     *
	     */
	    onload: function onload() {
	        this.handleImages();
	    },
	
	    /**
	     *
	     * @public
	     * @method unload
	     * @memberof core.images
	     * @description Method performs unloading actions for this module.
	     *
	     */
	    unload: function unload() {
	        _properjsImageloader2["default"].killInstances();
	    },
	
	    /**
	     *
	     * @public
	     * @method handlePreload
	     * @memberof core.images
	     * @param {function} callback The passed callback from `handleImages`
	     * @description Method handles the `done` preloading event cycle.
	     *
	     */
	    handlePreload: function handlePreload(callback) {
	        if (typeof callback === "function") {
	            callback();
	        }
	
	        _emitter2["default"].fire("app--preload-done");
	    },
	
	    /**
	     *
	     * @public
	     * @method handleImages
	     * @memberof core.images
	     * @param {object} $images Optionally, the image collection to load
	     * @param {function} callback Optionally, a callback to fire when loading is done
	     * @description Method handles separation of pre-load and lazy-load.
	     *
	     */
	    handleImages: function handleImages($images, callback) {
	        $images = $images || _dom2["default"].page.find(_config2["default"].lazyImageSelector);
	
	        if ($images.length) {
	            var imageController = new _ImageController2["default"]($images);
	
	            imageController.on("preload", this.handlePreload.bind(this, callback));
	
	            imageController.on("lazyload", function () {
	                _emitter2["default"].fire("app--lazyload-done");
	            });
	        } else {
	            this.handlePreload(callback);
	        }
	    }
	};
	
	/******************************************************************************
	 * Export
	*******************************************************************************/
	exports["default"] = images;
	module.exports = exports["default"];

/***/ },
/* 41 */
/*!****************************************!*\
  !*** ./js_src/core/ImageController.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _util = __webpack_require__(/*! ./util */ 29);
	
	var util = _interopRequireWildcard(_util);
	
	var _log = __webpack_require__(/*! ./log */ 37);
	
	var _log2 = _interopRequireDefault(_log);
	
	var _properjsController = __webpack_require__(/*! properjs-controller */ 26);
	
	var _properjsController2 = _interopRequireDefault(_properjsController);
	
	/**
	 *
	 * @public
	 * @class ImageController
	 * @param {Hobo} $images The image collection to load
	 * @classdesc Handles breaking out the preload vs lazyload batches
	 * @memberof core
	 *
	 */
	
	var ImageController = (function (_Controller) {
	    _inherits(ImageController, _Controller);
	
	    function ImageController($images) {
	        _classCallCheck(this, ImageController);
	
	        _get(Object.getPrototypeOf(ImageController.prototype), "constructor", this).call(this);
	
	        this.$preload = util.getElementsInView($images);
	        this.$lazyload = $images.not(this.$preload);
	
	        if (this.$preload.length) {
	            this.handlePreload();
	        } else {
	            this.fire("preload");
	        }
	
	        if (this.$lazyload.length) {
	            this.handleLazyload();
	        }
	    }
	
	    /******************************************************************************
	     * Export
	    *******************************************************************************/
	
	    /**
	     *
	     * @public
	     * @method handlePreload
	     * @memberof core.ImageController
	     * @description ImageLoader instance for preload batch.
	     *
	     */
	
	    _createClass(ImageController, [{
	        key: "handlePreload",
	        value: function handlePreload() {
	            var _this = this;
	
	            (0, _log2["default"])("ImageController preload queue:", this.$preload.length);
	
	            this.preLoader = util.loadImages(this.$preload, util.noop);
	            this.preLoader.on("done", function () {
	                (0, _log2["default"])("ImageController preloaded:", _this.$preload.length);
	
	                _this.fire("preload");
	            });
	        }
	
	        /**
	         *
	         * @public
	         * @method handleLazyload
	         * @memberof core.ImageController
	         * @description ImageLoader instance for lazyload batch.
	         *
	         */
	    }, {
	        key: "handleLazyload",
	        value: function handleLazyload() {
	            var _this2 = this;
	
	            (0, _log2["default"])("ImageController lazyload queue:", this.$lazyload.length);
	
	            this.lazyLoader = util.loadImages(this.$lazyload, util.isElementLoadable);
	            this.lazyLoader.on("done", function () {
	                (0, _log2["default"])("ImageController lazyloaded:", _this2.$lazyload.length);
	
	                _this2.fire("lazyload");
	            });
	        }
	    }]);
	
	    return ImageController;
	})(_properjsController2["default"]);
	
	exports["default"] = ImageController;
	module.exports = exports["default"];

/***/ },
/* 42 */
/*!********************************!*\
  !*** ./js_src/core/resizes.js ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _log = __webpack_require__(/*! ./log */ 37);
	
	var _log2 = _interopRequireDefault(_log);
	
	var _emitter = __webpack_require__(/*! ./emitter */ 39);
	
	var _emitter2 = _interopRequireDefault(_emitter);
	
	var _resizer = __webpack_require__(/*! ./resizer */ 43);
	
	var _resizer2 = _interopRequireDefault(_resizer);
	
	var _properjsThrottle = __webpack_require__(/*! properjs-throttle */ 45);
	
	var _properjsThrottle2 = _interopRequireDefault(_properjsThrottle);
	
	var _properjsDebounce = __webpack_require__(/*! properjs-debounce */ 46);
	
	var _properjsDebounce2 = _interopRequireDefault(_properjsDebounce);
	
	var _throttled = 50;
	var _debounced = 300;
	
	/**
	 *
	 * @public
	 * @namespace resizes
	 * @memberof core
	 * @description Handles app-wide emission of various resize detection events.
	 *
	 */
	var resizes = {
	  /**
	   *
	   * @public
	   * @method init
	   * @memberof core.resizes
	   * @description Method binds event listeners for resize controller.
	   *
	   */
	  init: function init() {
	    _resizer2["default"].on("resize", (0, _properjsThrottle2["default"])(onThrottle, _throttled));
	
	    // Hook into resize of `width` only for this handler
	    // @bug: iOS window size changes when Safari's chrome switches between full and minimal-ui.
	    _resizer2["default"].on("resizewidth", (0, _properjsDebounce2["default"])(onDebounce, _debounced));
	
	    (0, _log2["default"])("resizes initialized");
	  }
	};
	
	/**
	 *
	 * @private
	 * @method onDebounce
	 * @memberof core.resizes
	 * @description Debounced resize events.
	 *
	 */
	var onDebounce = function onDebounce() {
	  _emitter2["default"].fire("app--resize-debounced");
	};
	
	/**
	 *
	 * @private
	 * @method onThrottle
	 * @memberof core.resizes
	 * @description Method handles the window resize event via [ResizeController]{@link https://github.com/ProperJS/ResizeController}.
	 *
	 */
	var onThrottle = function onThrottle() {
	  _emitter2["default"].fire("app--resize");
	};
	
	/******************************************************************************
	 * Export
	*******************************************************************************/
	exports["default"] = resizes;
	module.exports = exports["default"];

/***/ },
/* 43 */
/*!********************************!*\
  !*** ./js_src/core/resizer.js ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _properjsResizecontroller = __webpack_require__(/*! properjs-resizecontroller */ 44);
	
	var _properjsResizecontroller2 = _interopRequireDefault(_properjsResizecontroller);
	
	/**
	 *
	 * @description Single app instanceof [ResizeController]{@link https://github.com/ProperJS/ResizeController} for raf resize handling
	 * @member resizer
	 * @memberof core
	 *
	 */
	var resizer = new _properjsResizecontroller2["default"]();
	
	/******************************************************************************
	 * Export
	*******************************************************************************/
	exports["default"] = resizer;
	module.exports = exports["default"];

/***/ },
/* 44 */
/*!*********************************************************!*\
  !*** ./~/properjs-resizecontroller/ResizeController.js ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	/*!
	 *
	 * Window resize / orientationchange event controller
	 *
	 * @ResizeController
	 * @author: kitajchuk
	 *
	 *
	 */
	(function ( factory ) {
	    
	    if ( true ) {
	        module.exports = factory();
	
	    } else if ( typeof window !== "undefined" ) {
	        window.ResizeController = factory();
	    }
	    
	})(function () {
	
	    var Controller = __webpack_require__( /*! properjs-controller */ 26 ),
	
	        // Orientation?
	        _hasOrientation = ("orientation" in window),
	
	        // Current window viewport
	        _currentView = null,
	
	        // Singleton
	        _instance = null;
	
	    /**
	     *
	     * Window resize / orientationchange event controller
	     * @constructor ResizeController
	     * @augments Controller
	     * @requires Controller
	     * @memberof! <global>
	     *
	     * @fires resize
	     * @fires resizedown
	     * @fires resizeup
	     * @fires resizewidth
	     * @fires resizeheight
	     * @fires orientationchange
	     * @fires orientationportrait
	     * @fires orientationlandscape
	     *
	     */
	    var ResizeController = function () {
	        // Singleton
	        if ( !_instance ) {
	            _instance = this;
	
	            // Initial viewport settings
	            _currentView = _instance.getViewport();
	
	            // Call on parent cycle
	            this.go(function () {
	                var currentView = _instance.getViewport(),
	                    isStill = (currentView.width === _currentView.width && currentView.height === _currentView.height),
	                    isResize = (currentView.width !== _currentView.width || currentView.height !== _currentView.height),
	                    isResizeUp = (currentView.width > _currentView.width || currentView.height > _currentView.height),
	                    isResizeDown = (currentView.width < _currentView.width || currentView.height < _currentView.height),
	                    isResizeWidth = (currentView.width !== _currentView.width),
	                    isResizeHeight = (currentView.height !== _currentView.height),
	                    isOrientation = (currentView.orient !== _currentView.orient),
	                    isOrientationPortrait = (currentView.orient !== _currentView.orient && currentView.orient !== 90),
	                    isOrientationLandscape = (currentView.orient !== _currentView.orient && currentView.orient === 90);
	
	                // Fire blanket resize event
	                if ( isResize ) {
	                    /**
	                     *
	                     * @event resize
	                     *
	                     */
	                    _instance.fire( "resize" );
	                }
	
	                // Fire resizeup and resizedown
	                if ( isResizeDown ) {
	                    /**
	                     *
	                     * @event resizedown
	                     *
	                     */
	                    _instance.fire( "resizedown" );
	
	                } else if ( isResizeUp ) {
	                    /**
	                     *
	                     * @event resizeup
	                     *
	                     */
	                    _instance.fire( "resizeup" );
	                }
	
	                // Fire resizewidth and resizeheight
	                if ( isResizeWidth ) {
	                    /**
	                     *
	                     * @event resizewidth
	                     *
	                     */
	                    _instance.fire( "resizewidth" );
	
	                } else if ( isResizeHeight ) {
	                    /**
	                     *
	                     * @event resizeheight
	                     *
	                     */
	                    _instance.fire( "resizeheight" );
	                }
	
	                // Fire blanket orientationchange event
	                if ( isOrientation ) {
	                    /**
	                     *
	                     * @event orientationchange
	                     *
	                     */
	                    _instance.fire( "orientationchange" );
	                }
	
	                // Fire orientationportrait and orientationlandscape
	                if ( isOrientationPortrait ) {
	                    /**
	                     *
	                     * @event orientationportrait
	                     *
	                     */
	                    _instance.fire( "orientationportrait" );
	
	                } else if ( isOrientationLandscape ) {
	                    /**
	                     *
	                     * @event orientationlandscape
	                     *
	                     */
	                    _instance.fire( "orientationlandscape" );
	                }
	
	                _currentView = currentView;
	            });
	        }
	
	        return _instance;
	    };
	
	    ResizeController.prototype = new Controller();
	
	    /**
	     *
	     * Returns the current window viewport specs
	     * @memberof ResizeController
	     * @method getViewport
	     * @returns object
	     *
	     */
	    ResizeController.prototype.getViewport = function () {
	        return {
	            width: window.innerWidth,
	            height: window.innerHeight,
	            orient: _hasOrientation ? Math.abs( window.orientation ) : null
	        };
	    };
	
	    /**
	     *
	     * Tells if the viewport is in protrait mode
	     * @memberof ResizeController
	     * @method isPortrait
	     * @returns boolean
	     *
	     */
	    ResizeController.prototype.isPortrait = function () {
	        var orient = this.getViewport().orient;
	
	        return (orient !== null && orient !== 90);
	    };
	
	    /**
	     *
	     * Tells if the viewport is in landscape mode
	     * @memberof ResizeController
	     * @method isLandscape
	     * @returns boolean
	     *
	     */
	    ResizeController.prototype.isLandscape = function () {
	        var orient = this.getViewport().orient;
	
	        return (orient !== null && orient === 90);
	    };
	
	
	    return ResizeController;
	
	});

/***/ },
/* 45 */
/*!*****************************************!*\
  !*** ./~/properjs-throttle/throttle.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	/*!
	 *
	 * Throttle callbacks
	 *
	 * @throttle
	 * @author: kitajchuk
	 *
	 */
	(function ( factory ) {
	    
	    if ( true ) {
	        module.exports = factory();
	
	    } else if ( typeof window !== "undefined" ) {
	        window.throttle = factory();
	    }
	    
	})(function () {
	
	
	    /**
	     *
	     * Rev limit your method calls
	     * @requires debounce
	     * @memberof! <global>
	     * @method throttle
	     * @param {function} callback The method handler
	     * @param {number} threshold The timeout delay in ms
	     *
	     */
	    var throttle = function ( callback, threshold ) {
	        var wait = false;
	
	        return function () {
	            if ( !wait ) {
	                callback.call();
	                wait = true;
	
	                setTimeout(function () {
	                    wait = false;
	
	                }, (threshold || 100) );
	            }
	        };
	    };
	    
	    
	    return throttle;
	
	
	});

/***/ },
/* 46 */
/*!*****************************************!*\
  !*** ./~/properjs-debounce/debounce.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	/*!
	 *
	 * Debounce methods
	 * Sourced from here:
	 * http://unscriptable.com/2009/03/20/debouncing-javascript-methods/
	 *
	 * @debounce
	 * @author: kitajchuk
	 *
	 */
	(function ( factory ) {
	    
	    if ( true ) {
	        module.exports = factory();
	
	    } else if ( typeof window !== "undefined" ) {
	        window.debounce = factory();
	    }
	    
	})(function () {
	
	
	    /**
	     *
	     * Limit method calls
	     * @memberof! <global>
	     * @method debounce
	     * @param {function} callback The method handler
	     * @param {number} threshold The timeout delay in ms
	     * @param {boolean} execAsap Call function at beginning or end of detection period
	     *
	     */
	    var debounce = function ( callback, threshold, execAsap ) {
	        var timeout = null;
	        
	        return function debounced() {
	            var args = arguments,
	                context = this;
	            
	            function delayed() {
	                if ( !execAsap ) {
	                    callback.apply( context, args );
	                }
	                
	                timeout = null;
	            }
	            
	            if ( timeout ) {
	                clearTimeout( timeout );
	                
	            } else if ( execAsap ) {
	                callback.apply( context, args );
	            }
	            
	            timeout = setTimeout( delayed, (threshold || 100) );
	        };
	    };
	    
	    
	    return debounce;
	
	
	});

/***/ },
/* 47 */
/*!********************************!*\
  !*** ./js_src/core/scrolls.js ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _dom = __webpack_require__(/*! ./dom */ 33);
	
	var _dom2 = _interopRequireDefault(_dom);
	
	var _log = __webpack_require__(/*! ./log */ 37);
	
	var _log2 = _interopRequireDefault(_log);
	
	var _detect = __webpack_require__(/*! ./detect */ 36);
	
	var _detect2 = _interopRequireDefault(_detect);
	
	var _emitter = __webpack_require__(/*! ./emitter */ 39);
	
	var _emitter2 = _interopRequireDefault(_emitter);
	
	var _scroller = __webpack_require__(/*! ./scroller */ 48);
	
	var _scroller2 = _interopRequireDefault(_scroller);
	
	var _timeout = null;
	var _isSuppressed = false;
	var _isSuppressedEvents = false;
	var _idleout = 300;
	
	/**
	 *
	 * @public
	 * @namespace scrolls
	 * @memberof core
	 * @description Handles app-wide emission of various scroll detection events.
	 *
	 */
	var scrolls = {
	    /**
	     *
	     * @public
	     * @method init
	     * @memberof core.scrolls
	     * @description Method runs once when window loads.
	     *
	     */
	    init: function init() {
	        _scroller2["default"].on("scroll", onScroller);
	        _scroller2["default"].on("scrollup", onScrollerUp);
	        _scroller2["default"].on("scrolldown", onScrollerDown);
	
	        onScroller();
	
	        this.topout();
	
	        (0, _log2["default"])("scrolls initialized");
	    },
	
	    /**
	     *
	     * @public
	     * @method topout
	     * @param {number} top Optionally, the scroll position to apply
	     * @memberof core.scrolls
	     * @description Method set scroll position to argument value or zero.
	     *
	     */
	    topout: function topout(top) {
	        top = top || 0;
	
	        window.scrollTo(0, top);
	    },
	
	    /**
	     *
	     * @public
	     * @method suppress
	     * @param {boolean} bool Whether or not to suppress
	     * @memberof core.scrolls
	     * @description Method will suppress scroll position broadcasting.
	     *
	     */
	    suppress: function suppress(bool) {
	        _isSuppressed = bool;
	    },
	
	    /**
	     *
	     * @public
	     * @method clearStates
	     * @memberof core.scrolls
	     * @description Method removes all applied classNames from this module
	     *
	     */
	    clearStates: function clearStates() {
	        _dom2["default"].html.removeClass("is-scrolling-up is-scrolling-down is-scrolling");
	    },
	
	    /**
	     *
	     * @public
	     * @method isScrollInRange
	     * @memberof core.scrolls
	     * @description Method determines if scroll is within range
	     * @returns {boolean}
	     *
	     */
	    isScrollInRange: function isScrollInRange() {
	        var scrollPos = _scroller2["default"].getScrollY();
	
	        return scrollPos > 0 || scrollPos < _scroller2["default"].getScrollMax();
	    },
	
	    /**
	     *
	     * @public
	     * @method isScrollOutOfRange
	     * @memberof core.scrolls
	     * @description Method determines if scroll is out of range
	     * @returns {boolean}
	     *
	     */
	    isScrollOutOfRange: function isScrollOutOfRange() {
	        var scrollPos = _scroller2["default"].getScrollY();
	
	        return scrollPos <= 0 || scrollPos >= _scroller2["default"].getScrollMax();
	    }
	};
	
	/**
	 *
	 * @private
	 * @method broadcast
	 * @param {string} event The scroll event to emit
	 * @param {number} position The current scroll position
	 * @memberof core.scrolls
	 * @description Method will emit scroll position information.
	 *
	 */
	var broadcast = function broadcast(event, position) {
	    if (_isSuppressed) {
	        return;
	    }
	
	    _emitter2["default"].fire(event, position);
	};
	
	/**
	 *
	 * @private
	 * @method suppressEvents
	 * @param {number} scrollPos The current scrollY position
	 * @memberof core.scrolls
	 * @description Method applies className to disable events while scrolling
	 *
	 */
	var suppressEvents = function suppressEvents(scrollPos) {
	    if (_detect2["default"].isStandalone()) {
	        return;
	    }
	
	    try {
	        clearTimeout(_timeout);
	    } catch (error) {
	        (0, _log2["default"])(error);
	    }
	
	    if (!_isSuppressedEvents) {
	        _isSuppressedEvents = true;
	
	        _dom2["default"].html.addClass("is-scrolling");
	
	        broadcast("app--scroll-start", scrollPos);
	    }
	
	    _timeout = setTimeout(function () {
	        if (scrollPos === _scroller2["default"].getScrollY()) {
	            _isSuppressedEvents = false;
	
	            _dom2["default"].html.removeClass("is-scrolling");
	
	            broadcast("app--scroll-end", scrollPos);
	        }
	    }, _idleout);
	};
	
	/**
	 *
	 * @private
	 * @method onScrollerUp
	 * @memberof core.scrolls
	 * @description Method handles upward scroll event
	 *
	 */
	var onScrollerUp = function onScrollerUp() {
	    if (!scrolls.isScrollInRange() || _detect2["default"].isStandalone()) {
	        return;
	    }
	
	    var scrollPos = _scroller2["default"].getScrollY();
	
	    broadcast("app--scroll-up", scrollPos);
	
	    _dom2["default"].html.removeClass("is-scrolling-down").addClass("is-scrolling-up");
	};
	
	/**
	 *
	 * @private
	 * @method onScrollerDown
	 * @memberof core.scrolls
	 * @description Method handles downward scroll event
	 *
	 */
	var onScrollerDown = function onScrollerDown() {
	    if (!scrolls.isScrollInRange() || _detect2["default"].isStandalone()) {
	        return;
	    }
	
	    var scrollPos = _scroller2["default"].getScrollY();
	
	    broadcast("app--scroll-down", scrollPos);
	
	    _dom2["default"].html.removeClass("is-scrolling-up").addClass("is-scrolling-down");
	};
	
	/**
	 *
	 * @private
	 * @method onScroller
	 * @memberof core.scrolls
	 * @description Method handles regular scroll event via [ScrollController]{@link https://github.com/ProperJS/ScrollController}
	 *
	 */
	var onScroller = function onScroller() {
	    if (!scrolls.isScrollInRange() || _detect2["default"].isStandalone()) {
	        return;
	    }
	
	    var scrollPos = _scroller2["default"].getScrollY();
	
	    suppressEvents(scrollPos);
	
	    broadcast("app--scroll", scrollPos);
	};
	
	/******************************************************************************
	 * Export
	*******************************************************************************/
	exports["default"] = scrolls;
	module.exports = exports["default"];

/***/ },
/* 48 */
/*!*********************************!*\
  !*** ./js_src/core/scroller.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _properjsScrollcontroller = __webpack_require__(/*! properjs-scrollcontroller */ 49);
	
	var _properjsScrollcontroller2 = _interopRequireDefault(_properjsScrollcontroller);
	
	/**
	 *
	 * @description Single app instanceof [ScrollController]{@link https://github.com/ProperJS/ScrollController} for raf scroll handling
	 * @member scroller
	 * @memberof core
	 *
	 */
	var scroller = new _properjsScrollcontroller2["default"]();
	
	/******************************************************************************
	 * Export
	*******************************************************************************/
	exports["default"] = scroller;
	module.exports = exports["default"];

/***/ },
/* 49 */
/*!*********************************************************!*\
  !*** ./~/properjs-scrollcontroller/ScrollController.js ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	/*!
	 *
	 * Window scroll event controller
	 *
	 * @ScrollController
	 * @author: kitajchuk
	 *
	 *
	 */
	(function ( factory ) {
	    
	    if ( true ) {
	        module.exports = factory();
	
	    } else if ( typeof window !== "undefined" ) {
	        window.ScrollController = factory();
	    }
	    
	})(function () {
	
	    var Controller = __webpack_require__( /*! properjs-controller */ 26 ),
	        
	        // Current scroll position
	        _currentY = null,
	    
	        // Singleton
	        _instance = null;
	    
	    /**
	     *
	     * Window scroll event controller
	     * @constructor ScrollController
	     * @augments Controller
	     * @requires Controller
	     * @memberof! <global>
	     *
	     * @fires scroll
	     * @fires scrolldown
	     * @fires scrollup
	     * @fires scrollmax
	     * @fires scrollmin
	     *
	     */
	    var ScrollController = function () {
	        // Singleton
	        if ( !_instance ) {
	            _instance = this;
	    
	            // Call on parent cycle
	            this.go(function () {
	                var currentY = _instance.getScrollY(),
	                    isStill = (currentY === _currentY),
	                    isScroll = (currentY !== _currentY),
	                    isScrollUp = (currentY < _currentY),
	                    isScrollDown = (currentY > _currentY),
	                    isScrollMax = (currentY !== _currentY && _instance.isScrollMax()),
	                    isScrollMin = (currentY !== _currentY && _instance.isScrollMin());
	    
	                // Fire blanket scroll event
	                if ( isScroll ) {
	                    /**
	                     *
	                     * @event scroll
	                     *
	                     */
	                    _instance.fire( "scroll" );
	                }
	    
	                // Fire scrollup and scrolldown
	                if ( isScrollDown ) {
	                    /**
	                     *
	                     * @event scrolldown
	                     *
	                     */
	                    _instance.fire( "scrolldown" );
	    
	                } else if ( isScrollUp ) {
	                    /**
	                     *
	                     * @event scrollup
	                     *
	                     */
	                    _instance.fire( "scrollup" );
	                }
	    
	                // Fire scrollmax and scrollmin
	                if ( isScrollMax ) {
	                    /**
	                     *
	                     * @event scrollmax
	                     *
	                     */
	                    _instance.fire( "scrollmax" );
	    
	                } else if ( isScrollMin ) {
	                    /**
	                     *
	                     * @event scrollmin
	                     *
	                     */
	                    _instance.fire( "scrollmin" );
	                }
	    
	                _currentY = currentY;
	            });
	        }
	    
	        return _instance;
	    };
	    
	    ScrollController.prototype = new Controller();
	    
	    /**
	     *
	     * Returns the current window vertical scroll position
	     * @memberof ScrollController
	     * @method getScrollY
	     * @returns number
	     *
	     */
	    ScrollController.prototype.getScrollY = function () {
	        return (window.scrollY || document.documentElement.scrollTop);
	    };
	    
	    /**
	     *
	     * Get the max document scrollable height
	     * @memberof ScrollController
	     * @method getScrollMax
	     * @returns number
	     *
	     */
	    ScrollController.prototype.getScrollMax = function () {
	        return Math.max(
	            document.body.scrollHeight, document.documentElement.scrollHeight,
	            document.body.offsetHeight, document.documentElement.offsetHeight,
	            document.documentElement.clientHeight
	
	        ) - window.innerHeight;
	    };
	    
	    /**
	     *
	     * Determines if scroll position is at maximum for document
	     * @memberof ScrollController
	     * @method isScrollMax
	     * @returns boolean
	     *
	     */
	    ScrollController.prototype.isScrollMax = function () {
	        return (this.getScrollY() >= this.getScrollMax());
	    };
	    
	    /**
	     *
	     * Determines if scroll position is at minimum for document
	     * @memberof ScrollController
	     * @method isScrollMin
	     * @returns boolean
	     *
	     */
	    ScrollController.prototype.isScrollMin = function () {
	        return (this.getScrollY() <= 0);
	    };
	    
	    
	    return ScrollController;
	
	});

/***/ },
/* 50 */
/*!**********************************!*\
  !*** ./js_src/core/Waypoints.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _util = __webpack_require__(/*! ./util */ 29);
	
	var util = _interopRequireWildcard(_util);
	
	var _log = __webpack_require__(/*! ./log */ 37);
	
	var _log2 = _interopRequireDefault(_log);
	
	var _emitter = __webpack_require__(/*! ./emitter */ 39);
	
	var _emitter2 = _interopRequireDefault(_emitter);
	
	/**
	 *
	 * @public
	 * @class Waypoints
	 * @memberof core
	 * @param {Hobo} elements The element collection to iterate over
	 * @param {function} callback The function to pass the elements to
	 * @param {function} executor The function that determines a waypoint element is found
	 * @classdesc Handles one time notification when Elements enter the viewport.
	 *
	 */
	
	var Waypoints = (function () {
	    function Waypoints(elements, callback, executor) {
	        _classCallCheck(this, Waypoints);
	
	        this.elements = elements;
	        this.callback = callback;
	        this.executor = executor || util.isElementLoadable;
	
	        if (!this.elements || !this.callback) {
	            (0, _log2["default"])("warn", "Waypoints needs `elements` and a `callback` method!");
	        }
	
	        this._onScroller = this.onScroller.bind(this);
	
	        this._onScroller();
	
	        _emitter2["default"].on("app--scroll", this._onScroller);
	    }
	
	    /******************************************************************************
	     * Export
	    *******************************************************************************/
	
	    /**
	     *
	     * @public
	     * @instance
	     * @method onScroller
	     * @memberof core.Waypoints
	     * @description Listen for the scroll event.
	     *
	     */
	
	    _createClass(Waypoints, [{
	        key: "onScroller",
	        value: function onScroller() {
	            var $queued = this.elements.not(".is-waypoint");
	            var i = $queued.length;
	            var $elem = null;
	
	            if (!$queued.length) {
	                this.destroy();
	            }
	
	            for (i; i--;) {
	                $elem = $queued.eq(i);
	
	                if (this.executor($elem[0])) {
	                    $elem.addClass("is-waypoint");
	
	                    this.callback($elem);
	                }
	            }
	        }
	
	        /**
	         *
	         * @public
	         * @instance
	         * @method destroy
	         * @memberof core.Waypoints
	         * @description Undo event bindings for this instance.
	         *
	         */
	    }, {
	        key: "destroy",
	        value: function destroy() {
	            _emitter2["default"].off("app--scroll", this._onScroller);
	        }
	    }]);
	
	    return Waypoints;
	})();
	
	exports["default"] = Waypoints;
	module.exports = exports["default"];

/***/ },
/* 51 */
/*!******************************!*\
  !*** ./js_src/core/cache.js ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _Store = __webpack_require__(/*! ./Store */ 52);
	
	var _Store2 = _interopRequireDefault(_Store);
	
	/**
	 *
	 * @public
	 * @namespace cache
	 * @memberof core
	 * @see {@link Store}
	 * @description Return Singleton instances of the cache Store.
	 *
	 */
	exports["default"] = new _Store2["default"]({
	  // If TRUE the Store will use LocalStorage...
	  enableStorage: false
	});
	module.exports = exports["default"];

/***/ },
/* 52 */
/*!******************************!*\
  !*** ./js_src/core/Store.js ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _log = __webpack_require__(/*! ./log */ 37);
	
	var _log2 = _interopRequireDefault(_log);
	
	// Singleton
	var _instance = null;
	var _initialized = false;
	
	// Session Storage
	var _cache = {};
	var _access = "app-cache";
	var _session = window.sessionStorage;
	
	/**
	 *
	 * @public
	 * @class Store
	 * @param {object} options The Store settings
	 * @classdesc Handles how data / content is cached and stored for webapp.
	 *
	 */
	
	var Store = (function () {
	    function Store(options) {
	        _classCallCheck(this, Store);
	
	        if (!_instance) {
	            _instance = this;
	
	            this._opts = options;
	            this._init();
	        }
	
	        return _instance;
	    }
	
	    /**
	     *
	     * @public
	     * @static
	     * @member isStorageSupported
	     * @memberof Store
	     * @description Boolean to test local/session storage support
	     *
	     */
	
	    /**
	     *
	     * @private
	     * @instance
	     * @method _init
	     * @memberof Store
	     * @description One time Store initialization
	     *
	     */
	
	    _createClass(Store, [{
	        key: "_init",
	        value: function _init() {
	            if (_initialized) {
	                return;
	            }
	
	            _initialized = true;
	
	            this.flush();
	
	            (0, _log2["default"])("Singleton Store initialized", this);
	        }
	
	        /**
	         *
	         * @public
	         * @instance
	         * @method flush
	         * @memberof Store
	         * @description Manually flush the Local Storage cache
	         *
	         */
	    }, {
	        key: "flush",
	        value: function flush() {
	            // New empty cache
	            _cache = {};
	
	            // Store the new cache object
	            this.save();
	        }
	
	        /**
	         *
	         * @public
	         * @instance
	         * @method save
	         * @memberof Store
	         * @description Perform the actual synchronous write to Local Storage
	         *
	         */
	    }, {
	        key: "save",
	        value: function save() {
	            if (!this._opts.enableStorage || !Store.isStorageSupported) {
	                (0, _log2["default"])("Cache Storage disabled - Not writing to SessionStorage");
	                return;
	            }
	
	            _session.setItem(_access, JSON.stringify(_cache));
	        }
	
	        /**
	         *
	         * @public
	         * @instance
	         * @method slug
	         * @param {string} uri The string to slugify
	         * @memberof Store
	         * @description Slug a uri string
	         * @returns {string}
	         *
	         */
	    }, {
	        key: "slug",
	        value: function slug(uri) {
	            uri = uri.replace(/^\/|\/$/g, "").replace(/\/|\?|\&|=|\s/g, "-").toLowerCase();
	            uri = uri === "" ? "homepage" : uri;
	
	            return uri;
	        }
	
	        /**
	         *
	         * @public
	         * @instance
	         * @method set
	         * @param {string} id The index key
	         * @param {mixed} val The value to store
	         * @memberof Store
	         * @description Set a key's value in the cache
	         *
	         */
	    }, {
	        key: "set",
	        value: function set(id, val) {
	            id = this.slug(id);
	
	            _cache[id] = val;
	
	            this.save();
	        }
	
	        /**
	         *
	         * @public
	         * @instance
	         * @method get
	         * @param {string} id The index key
	         * @memberof Store
	         * @description Get a key's value from the cache
	         * @returns {mixed}
	         *
	         */
	    }, {
	        key: "get",
	        value: function get(id) {
	            id = id && this.slug(id);
	
	            return id ? this.getValue(_cache[id]) : _cache;
	        }
	
	        /**
	         *
	         * @public
	         * @instance
	         * @method getValue
	         * @param {mixed} val The accessed value
	         * @memberof Store
	         * @description Get a value so cache is non-mutable from outside
	         * @returns {mixed}
	         *
	         */
	    }, {
	        key: "getValue",
	        value: function getValue(val) {
	            var ret = val;
	
	            return ret;
	        }
	
	        /**
	         *
	         * @public
	         * @instance
	         * @method remove
	         * @param {string} id The index key
	         * @memberof Store
	         * @description Remove a key/val pair from the cache
	         *
	         */
	    }, {
	        key: "remove",
	        value: function remove(id) {
	            delete _cache[id];
	        }
	    }]);
	
	    return Store;
	})();
	
	Store.isStorageSupported = (function () {
	    var ret = true;
	
	    try {
	        _session.setItem("app-test", 1);
	        _session.removeItem("app-test");
	    } catch (err) {
	        ret = false;
	    }
	
	    return ret;
	})();
	
	/******************************************************************************
	 * Export
	*******************************************************************************/
	exports["default"] = Store;
	module.exports = exports["default"];

/***/ },
/* 53 */
/*!**********************************!*\
  !*** ./js_src/core/Analytics.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _js_libsHoboDistHoboBuild = __webpack_require__(/*! js_libs/hobo/dist/hobo.build */ 2);
	
	var _js_libsHoboDistHoboBuild2 = _interopRequireDefault(_js_libsHoboDistHoboBuild);
	
	var _log = __webpack_require__(/*! ./log */ 37);
	
	var _log2 = _interopRequireDefault(_log);
	
	var _env = __webpack_require__(/*! ./env */ 38);
	
	var _env2 = _interopRequireDefault(_env);
	
	var _fgLoadjs = __webpack_require__(/*! fg-loadjs */ 32);
	
	var _fgLoadjs2 = _interopRequireDefault(_fgLoadjs);
	
	var _emitter = __webpack_require__(/*! ./emitter */ 39);
	
	var _emitter2 = _interopRequireDefault(_emitter);
	
	// Singleton
	var _instance = null;
	
	/**
	 *
	 * @public
	 * @class Analytics
	 * @classdesc Handles Google Analytics.
	 *            @see {@link https://developers.google.com/analytics/devguides/collection/analyticsjs/}
	 * @memberof core
	 *
	 */
	
	var Analytics = (function () {
	    function Analytics() {
	        _classCallCheck(this, Analytics);
	
	        if (!_instance) {
	            this.devUA = "";
	            this.prodUA = "";
	            this.GAScript = "//www.google-analytics.com/analytics.js";
	            this.GAUATag = _env2["default"].isDev() ? this.devUA : this.prodUA;
	
	            this.initGoogleAnalytics();
	
	            _emitter2["default"].on("app--analytics-push", this.pushTrack.bind(this));
	
	            (0, _log2["default"])("Analytics initialized", this);
	
	            _instance = this;
	        }
	
	        return _instance;
	    }
	
	    /******************************************************************************
	     * Export
	    *******************************************************************************/
	
	    /**
	     *
	     * @public
	     * @method initGoogleAnalytics
	     * @memberof core.Analytics
	     * @description Build GA interface and load analytics.js.
	     *
	     */
	
	    _createClass(Analytics, [{
	        key: "initGoogleAnalytics",
	        value: function initGoogleAnalytics() {
	            var _this = this;
	
	            if (_instance) {
	                return;
	            }
	
	            // Setup GA Interface
	            window.GoogleAnalyticsObject = "ga";
	            window.ga = window.ga || function () {
	                // Blockers like `Privacy Badger` will blow GA up here
	                // https://www.eff.org/privacybadger
	                try {
	                    window.ga.q = (window.ga.q || []).push(arguments);
	                } catch (error) {
	                    (0, _log2["default"])("warn", "GA Error", error);
	                }
	            };
	            window.ga.l = Number(new Date());
	
	            // Load GA Javascript
	            (0, _fgLoadjs2["default"])(this.GAScript, function () {
	                (0, _log2["default"])("Analytics GA loaded");
	
	                window.ga("create", _this.GAUATag, "auto");
	                window.ga("send", "pageview");
	            });
	        }
	
	        /**
	         *
	         * @public
	         * @method track
	         * @memberof core.Analytics
	         * @description Track Squarespace Metrics since we are ajax-routing.
	         *
	         */
	    }, {
	        key: "track",
	        value: function track() {
	            (0, _log2["default"])("Analytics track pageview");
	
	            // Google Analytics
	            window.ga("send", "pageview", window.location.href);
	        }
	
	        /**
	         *
	         * @public
	         * @method pushTrack
	         * @param {string} html The full responseText from an XHR request
	         * @param {Hobo} $doc Optional document node to receive and work with
	         * @memberof core.Analytics
	         * @description Parse static context from responseText and track it.
	         *
	         */
	    }, {
	        key: "pushTrack",
	        value: function pushTrack(html, $doc) {
	            var $title = null;
	
	            $doc = $doc || (0, _js_libsHoboDistHoboBuild2["default"])(html);
	            $title = $doc.find("title");
	
	            if (!$title.length) {
	                $title = $doc.filter("title");
	            }
	
	            this.track();
	
	            this.setDocumentTitle($title[0].innerText);
	        }
	
	        /**
	         *
	         * @public
	         * @method setDocumentTitle
	         * @param {string} title The new title for the document
	         * @memberof core.Analytics
	         * @description Update the documents title.
	         *
	         */
	    }, {
	        key: "setDocumentTitle",
	        value: function setDocumentTitle(title) {
	            document.title = title;
	        }
	    }]);
	
	    return Analytics;
	})();
	
	exports["default"] = Analytics;
	module.exports = exports["default"];

/***/ },
/* 54 */
/*!*********************************!*\
  !*** ./js_src/core/mediabox.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _properjsMediabox = __webpack_require__(/*! properjs-mediabox */ 55);
	
	var _properjsMediabox2 = _interopRequireDefault(_properjsMediabox);
	
	/**
	 *
	 * @description Single app instanceof [MediaBox]{@link https://github.com/ProperJS/MediaBox} for custom audio/video
	 * @member mediabox
	 * @memberof core
	 *
	 */
	var mediabox = new _properjsMediabox2["default"]();
	
	/******************************************************************************
	 * Export
	*******************************************************************************/
	exports["default"] = mediabox;
	module.exports = exports["default"];

/***/ },
/* 55 */
/*!*****************************************!*\
  !*** ./~/properjs-mediabox/MediaBox.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	/*!
	 *
	 * A lightweight manager for HTML5 audio and video.
	 *
	 * @MediaBox
	 * @singleton
	 * @author: kitajchuk
	 *
	 * @useful web pages with information on this stuffs
	 * https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Media_events
	 * https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement
	 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video
	 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio
	 * https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement
	 *
	 */
	(function ( factory ) {
	    
	    if ( true ) {
	        module.exports = factory();
	
	    } else if ( typeof window !== "undefined" ) {
	        window.MediaBox = factory();
	    }
	    
	})(function () {
	
	
	    var Easing = __webpack_require__( /*! properjs-easing */ 35 ),
	        Tween = __webpack_require__( /*! properjs-tween */ 56 ),
	        raf = window.requestAnimationFrame,
	        caf = window.cancelAnimationFrame,
	
	    /******************************************************************************
	     * @Private API
	    *******************************************************************************/
	    
	    /**
	     *
	     * Expression match hashbang/querystring
	     * @member rHashQuery
	     * @private
	     *
	     */
	    rHashQuery = /[#|?].*$/g,
	    
	    
	    /**
	     *
	     * Replace "no" in canPlayType strings
	     * @member rNos
	     * @private
	     *
	     */
	    rNos = /^no$/,
	    
	    
	    /**
	     *
	     * Clean up all those typeof's
	     * @method isFunction
	     * @returns boolean
	     * @private
	     *
	     */
	    isFunction = function ( fn ) {
	        return (typeof fn === "function");
	    },
	    
	    
	    /**
	     *
	     * Test that an object is an Element
	     * @method isElement
	     * @returns boolean
	     * @private
	     *
	     */
	    isElement = function ( el ) {
	        return (el instanceof HTMLElement);
	    },
	    
	    
	    /**
	     *
	     * Borrowed(ish)
	     * Modernizr v3.0.0-alpha.4 on master branch
	     * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/audio.js
	     * @method getAudioSupport
	     * @returns object
	     * @private
	     *
	     */
	    getAudioSupport = function () {
	        var elem = document.createElement( "audio" ),
	            ret = {};
	    
	        try {
	            if ( elem.canPlayType ) {
	                ret.ogg = elem.canPlayType( 'audio/ogg; codecs="vorbis"' ).replace( rNos, "" );
	                ret.mp3 = elem.canPlayType( 'audio/mpeg;' ).replace( rNos, "" );
	                ret.opus = elem.canPlayType( 'audio/ogg; codecs="opus"' ).replace( rNos, "" );
	    
	                // Mimetypes accepted:
	                // developer.mozilla.org/En/Media_formats_supported_by_the_audio_and_video_elements
	                // bit.ly/iphoneoscodecs
	                ret.wav = elem.canPlayType( 'audio/wav; codecs="1"' ).replace( rNos, "" );
	                ret.m4a = (elem.canPlayType( 'audio/x-m4a;' ) || elem.canPlayType( 'audio/aac;' )).replace( rNos, "" );
	            }
	    
	        } catch ( e ) {}
	    
	        return ret;
	    },
	    
	    
	    /**
	     *
	     * Borrowed(ish)
	     * Modernizr v3.0.0-alpha.4 on master branch
	     * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/video.js
	     * @method getVideoSupport
	     * @returns object
	     * @private
	     *
	     */
	    getVideoSupport = function () {
	        var elem = document.createElement( "video" ),
	            ret = {};
	    
	        try {
	            if ( elem.canPlayType ) {
	                ret.ogg = elem.canPlayType( 'video/ogg; codecs="theora"' ).replace( rNos, "" );
	    
	                // Without QuickTime, this value will be `undefined`. github.com/Modernizr/Modernizr/issues/546
	                ret.h264 = elem.canPlayType( 'video/mp4; codecs="avc1.42E01E"' ).replace( rNos, "" );
	                ret.webm = elem.canPlayType( 'video/webm; codecs="vp8, vorbis"' ).replace( rNos, "" );
	                ret.vp9 = elem.canPlayType( 'video/webm; codecs="vp9"' ).replace( rNos, "" );
	                ret.hls = elem.canPlayType( 'application/x-mpegURL; codecs="avc1.42E01E"' ).replace( rNos, "" );
	            }
	    
	        } catch ( e ) {}
	    
	        return ret;
	    },
	    
	    
	    /**
	     *
	     * Get mimetype string from media source
	     * @method getMimeForMedia
	     * @param {string} src media file source
	     * @private
	     *
	     */
	    getMimeForMedia = function ( type, src ) {
	        var ext = src.split( "." ).pop().toLowerCase().replace( rHashQuery, "" ),
	            ret;
	    
	        if ( type === "video" ) {
	            switch ( ext ) {
	                case "webm":
	                    ret = "video/webm";
	                    break;
	                case "mp4":
	                case "m4v":
	                    ret = "video/mp4";
	                    break;
	                case "ogv":
	                    ret = "video/ogg";
	                    break;
	            }
	    
	        } else {
	            switch ( ext ) {
	                case "aac":
	                    ret = "audio/aac";
	                    break;
	                case "m4a":
	                    ret = "audio/x-m4a";
	                    break;
	                case "mp4":
	                    ret = "audio/mp4";
	                    break;
	                case "mp1":
	                case "mp2":
	                case "mp3":
	                case "mpg":
	                case "mpeg":
	                    ret = "audio/mpeg";
	                    break;
	                case "oga":
	                case "ogg":
	                    ret = "audio/ogg";
	                    break;
	                case "wav":
	                    ret = "audio/wav";
	                    break;
	            }
	        }
	    
	        return ret;
	    },
	    
	    
	    /**
	     *
	     * Get the audio source that should be used
	     * @method getCanPlaySource
	     * @param {string} media the media type to check
	     * @param {array} sources Array of media sources
	     * @returns object
	     * @private
	     *
	     */
	    getCanPlaySource = function ( media, sources ) {
	        var source, canPlay;
	    
	        for ( var i = 0, len = sources.length; i < len; i++ ) {
	            var src = sources[ i ].split( "." ).pop().toLowerCase().replace( rHashQuery, "" );
	    
	    
	            // The only time we break, this honors webm > mp4
	            if ( src === "webm" && MediaBox.support[ media ][ src ] === "probably" ) {
	                source = sources[ i ];
	                canPlay = MediaBox.support[ media ][ src ];
	                break;
	            }
	    
	            if ( MediaBox.support[ media ][ src ] === "probably" || MediaBox.support[ media ][ src ] === "maybe" ) {
	                source = sources[ i ];
	                canPlay = MediaBox.support[ media ][ src ];
	            }
	    
	            if ( (src === "ogv" || src === "oga") && (MediaBox.support[ media ].ogg === "probably" || MediaBox.support[ media ].ogg === "maybe") ) {
	                source = sources[ i ];
	                canPlay = MediaBox.support[ media ].ogg;
	            }
	    
	            if ( (src === "mp4" || src === "m4v") && (MediaBox.support[ media ].h264 === "probably" || MediaBox.support[ media ].h264 === "maybe") ) {
	                source = sources[ i ];
	                canPlay = MediaBox.support[ media ].h264;
	            }
	    
	            if ( src === "aac" && (MediaBox.support[ media ].m4a === "probably" || MediaBox.support[ media ].m4a === "maybe") ) {
	                source = sources[ i ];
	                canPlay = MediaBox.support[ media ].m4a;
	            }
	    
	            if ( (src === "mp1" || src === "mp2" || src === "mpg" || src === "mpeg") && (MediaBox.support[ media ].mp3 === "probably" || MediaBox.support[ media ].mp3 === "maybe") ) {
	                source = sources[ i ];
	                canPlay = MediaBox.support[ media ].mp3;
	            }
	    
	/*
	            if ( source ) {
	                break;
	            }
	*/
	        }
	    
	        return {
	            source: source,
	            canPlay: canPlay
	        };
	    },
	    
	    
	    /**
	     *
	     * MediaBox clear a timeupdate interval for audio/video tracks
	     * @method clearPlaybackUpdate
	     * @param {object} track The media object
	     *
	     */
	    clearPlaybackUpdate = function ( track ) {
	        if ( track._updateId ) {
	            caf( track._updateId );
	    
	            track._updateId = null;
	            track._updateFn = null;
	        }
	    },
	    
	    
	    /**
	     *
	     * MediaBox crossbrowser create audio context
	     * @method createAudioContext
	     * @returns instance of audio context
	     *
	     */
	    createAudioContext = function () {
	        var AudioContext;
	    
	        if ( window.AudioContext ) {
	            AudioContext = window.AudioContext;
	    
	        } else if ( window.webkitAudioContext ) {
	            AudioContext = window.webkitAudioContext;
	        }
	    
	        return ( AudioContext ) ? new AudioContext() : AudioContext;
	    },
	    
	    
	    /**
	     *
	     * MediaBox Open a new XMLHttpRequest
	     * @method createRequest
	     * @returns instance of audio context
	     *
	     */
	    createRequest = function ( url, config, callback ) {
	        var xhr = new XMLHttpRequest();
	    
	        xhr.open( "GET", url, true );
	    
	        if ( config ) {
	            for ( var i in config ) {
	                xhr[ i ] = config[ i ];
	            }
	        }
	    
	        xhr.onreadystatechange = function ( e ) {
	            if ( this.readyState === 4 ) {
	                if ( this.status === 200 ) {
	                    try {
	                        if ( !config.responseType ) {
	                            this.responseJSON = JSON.parse( this.responseText );
	                        }
	    
	                        if ( isFunction( callback ) ) {
	                            callback( this );
	                        }
	    
	                    } catch ( error ) {
	                        throw new Error([
	                            error.name,
	                            error.message
	    
	                        ].join( " : " ));
	                    }
	                }
	            }
	        };
	    
	        xhr.send();
	    
	        return xhr;
	    },
	    
	    
	    /**
	     *
	     * MediaBox init constructor for singleton
	     * @method init
	     * @private
	     *
	     */
	    init = function () {
	        _instance = this;
	    },
	    
	    
	    /**
	     *
	     * MediaBox default volume setting
	     * @member _volume
	     * @private
	     *
	     */
	    _volume = 1,
	    
	    
	    /**
	     *
	     * MediaBox information for each channel.
	     * These are default channels you can use.
	     * <ul>
	     * <li>bgm - background music channel</li>
	     * <li>sfx - sound effects channel</li>
	     * <li>vid - video channel</li>
	     * </ul>
	     * @member _channels
	     * @private
	     *
	     */
	    _channels = {
	        bgm: {
	            volume: _volume,
	            _builtIn: true
	        },
	        sfx: {
	            volume: _volume,
	            _builtIn: true
	        },
	        vid: {
	            volume: _volume,
	            _builtIn: true
	        }
	    },
	    
	    /**
	     *
	     * MediaBox holds all audio tracks
	     * @member _audio
	     * @private
	     *
	     */
	    _audio = {},
	    
	    /**
	     *
	     * MediaBox holds all video tracks
	     * @member _video
	     * @private
	     *
	     */
	    _video = {},
	    
	    
	    /**
	     *
	     * The singleton instance for MediaBox
	     * @member _instance
	     * @private
	     *
	     */
	    _instance = null,
	    
	    
	    /**
	     *
	     * Master audio context instance
	     * @member _context
	     * @private
	     *
	     */
	    _context = createAudioContext(),
	    
	    
	    /******************************************************************************
	     * @Public API
	    *******************************************************************************/
	    
	    /**
	     *
	     * A complete management tool for html5 video and audio context
	     * @constructor MediaBox
	     * @requires Tween
	     * @memberof! <global>
	     *
	     */
	    MediaBox = function () {
	        return (_instance || init.apply( this, arguments ));
	    };
	    
	    
	    /**
	     *
	     * MediaBox types object
	     * @memberof MediaBox
	     * @member types
	     *
	     */
	    MediaBox.types = {
	        AUDIO: "audio",
	        VIDEO: "video"
	    };
	    
	    
	    /**
	     *
	     * MediaBox support object
	     * @memberof MediaBox
	     * @member support
	     *
	     */
	    MediaBox.support = {
	        audio: getAudioSupport(),
	        video: getVideoSupport()
	    };
	    
	    
	    /**
	     *
	     * MediaBox stopped state constant
	     * @memberof MediaBox
	     * @member STATE_STOPPED
	     *
	     */
	    MediaBox.STATE_STOPPED = 0;
	    
	    
	    /**
	     *
	     * MediaBox stopping state constant
	     * @memberof MediaBox
	     * @member STATE_STOPPING
	     *
	     */
	    MediaBox.STATE_STOPPING = 1;
	    
	    
	    /**
	     *
	     * MediaBox paused state constant
	     * @memberof MediaBox
	     * @member STATE_PAUSED
	     *
	     */
	    MediaBox.STATE_PAUSED = 2;
	    
	    
	    /**
	     *
	     * MediaBox playing state constant
	     * @memberof MediaBox
	     * @member STATE_PLAYING
	     *
	     */
	    MediaBox.STATE_PLAYING = 3;
	    
	    
	    /**
	     *
	     * MediaBox prototype
	     *
	     */
	    MediaBox.prototype = {
	        constructor: MediaBox,
	    
	        /**
	         *
	         * MediaBox check if media is loaded via ajax
	         * @memberof MediaBox
	         * @method isLoaded
	         * @param {string} id reference id for media
	         * @returns boolean
	         *
	         */
	        isLoaded: function ( id ) {
	            var obj = this.getMedia( id );
	    
	            return (obj.loaded === true);
	        },
	    
	        /**
	         *
	         * MediaBox check stopped/paused status for audio/video
	         * @memberof MediaBox
	         * @method isStopped
	         * @param {string} id reference id for media
	         * @returns boolean
	         *
	         */
	        isStopped: function ( id ) {
	            var obj = this.getMedia( id );
	    
	            return (obj.state === MediaBox.STATE_STOPPED);
	        },
	    
	        /**
	         *
	         * MediaBox check stopped/paused status for audio/video
	         * @memberof MediaBox
	         * @method isPaused
	         * @param {string} id reference id for media
	         * @returns boolean
	         *
	         */
	        isPaused: function ( id ) {
	            var obj = this.getMedia( id );
	    
	            return (obj.state === MediaBox.STATE_PAUSED);
	        },
	    
	        /**
	         *
	         * MediaBox check playing status for audio/video
	         * @memberof MediaBox
	         * @method isPlaying
	         * @param {string} id reference id for media
	         * @returns boolean
	         *
	         */
	        isPlaying: function ( id ) {
	            var obj = this.getMedia( id );
	    
	            return (obj.state === MediaBox.STATE_PLAYING || obj.state === MediaBox.STATE_STOPPING);
	        },
	    
	        /**
	         *
	         * MediaBox set volume for audio OR video
	         * @memberof MediaBox
	         * @method setVolume
	         * @param {string} id reference id for media
	         * @param {number} volume the volume to set to
	         *
	         */
	        setVolume: function ( id, volume ) {
	            var obj = this.getMedia( id );
	    
	            obj._node.volume = volume;
	    
	            return _instance;
	        },
	    
	        /**
	         *
	         * MediaBox set volume for audio OR video
	         * @memberof MediaBox
	         * @method getVolume
	         * @param {string} id reference id for media
	         * @returns number
	         *
	         */
	        getVolume: function ( id ) {
	            var obj = this.getMedia( id );
	    
	            return obj._node.volume;
	        },
	    
	        /**
	         *
	         * MediaBox get an audio nodes property
	         * @memberof MediaBox
	         * @method getAudioProp
	         * @param {string} id Audio id
	         * @param {string} prop The property to access
	         *
	         */
	        getMediaProp: function ( id, prop ) {
	            var obj = this.getMedia( id );
	    
	            if ( obj ) {
	                return obj._node[ prop ];
	            }
	        },
	    
	        /**
	         *
	         * MediaBox set an audio nodes property/attribute
	         * @memberof MediaBox
	         * @method setAudioProp
	         * @param {string} id Audio id
	         * @param {string} prop The property to set
	         * @param {mixed} value The value to assign
	         *
	         */
	        setMediaProp: function ( id, prop, value ) {
	            var obj = this.getMedia( id );
	    
	            if ( obj ) {
	                obj._node[ prop ] = value;
	            }
	    
	            return _instance;
	        },
	    
	        /**
	         *
	         * MediaBox get an audio nodes attribute
	         * @memberof MediaBox
	         * @method getAudioAttr
	         * @param {string} id Audio id
	         * @param {string} prop The property to access
	         *
	         */
	        getMediaAttr: function ( id, prop ) {
	            var obj = this.getMedia( id );
	    
	            if ( obj ) {
	                return obj._node.getAttribute( prop );
	            }
	        },
	    
	        /**
	         *
	         * MediaBox set an audio nodes attribute
	         * @memberof MediaBox
	         * @method setAudioAttr
	         * @param {string} id Audio id
	         * @param {string} prop The property to set
	         * @param {mixed} value The value to assign
	         *
	         */
	        setMediaAttr: function ( id, prop, value ) {
	            var obj = this.getMedia( id );
	    
	            if ( obj ) {
	                obj._node.setAttribute( prop, value );
	            }
	    
	            return _instance;
	        },
	    
	        /**
	         *
	         * MediaBox add an audio nodes event listener
	         * @memberof MediaBox
	         * @method addAudioEvent
	         * @param {string} id Audio id to add event for
	         * @param {string} event Event to add
	         * @param {function} callback The event handler to call
	         *
	         */
	        addMediaEvent: function ( id, event, callback ) {
	            var obj = this.getMedia( id );
	    
	            if ( obj ) {
	                // Capture timeupdate to run at 60fps instead
	                if ( event === "timeupdate" ) {
	                    obj._events.timeupdate = callback;
	    
	                    return _instance;
	                }
	    
	                obj._events[ event ] = function () {
	                    if ( isFunction( callback ) ) {
	                        callback.apply( this, arguments );
	                    }
	                };
	    
	                obj._node.addEventListener( event, obj._events[ event ], false );
	            }
	    
	            return _instance;
	        },
	    
	        /**
	         *
	         * MediaBox remove an audio nodes event listener
	         * @memberof MediaBox
	         * @method removeAudioEvent
	         * @param {string} id Audio id to remove event for
	         * @param {string} event Event to remove
	         *
	         */
	        removeMediaEvent: function ( id, event ) {
	            var obj = this.getMedia( id );
	    
	            if ( obj ) {
	                // Capture timeupdate to run at 60fps instead
	                if ( event === "timeupdate" ) {
	                    clearPlaybackUpdate( obj );
	                }
	    
	                obj._node.removeEventListener( event, obj._events[ event ], false );
	    
	                obj._events[ event ] = null;
	            }
	    
	            return _instance;
	        },
	    
	        /**
	         *
	         * MediaBox play audio node by id
	         * @memberof MediaBox
	         * @method playAudio
	         * @param {string} id reference id for media
	         *
	         */
	        playMedia: function ( id ) {
	            var obj = this.getMedia( id );
	    
	            if ( obj && this.isLoaded( id ) && (this.isStopped( id ) || this.isPaused( id )) ) {
	                obj._node.volume = _channels[ obj.channel ].volume;
	                obj._node.play();
	                obj.state = MediaBox.STATE_PLAYING;
	    
	                if ( !obj._updateId && isFunction( obj._events.timeupdate ) ) {
	                    obj._updateFn = function () {
	                        obj._events.timeupdate.call( obj._node, null );
	                        
	                        obj._updateId = raf( obj._updateFn );
	                    };
	                    
	                    obj._updateId = raf( obj._updateFn );
	                }
	            }
	    
	            return _instance;
	        },
	    
	        /**
	         *
	         * MediaBox stop audio node by id with a paused state
	         * @memberof MediaBox
	         * @method pauseAudio
	         * @param {string} id reference id for media
	         *
	         */
	        pauseMedia: function ( id ) {
	            var obj = this.getMedia( id );
	    
	            if ( obj && this.isLoaded( id ) && this.isPlaying( id ) ) {
	                obj._node.pause();
	                obj.state = MediaBox.STATE_PAUSED;
	    
	                clearPlaybackUpdate( obj );
	            }
	    
	            return _instance;
	        },
	    
	        /**
	         *
	         * MediaBox stop audio node by id with a stopped state
	         * @memberof MediaBox
	         * @method stopAudio
	         * @param {string} id reference id for media
	         *
	         */
	        stopMedia: function ( id ) {
	            var obj = this.getMedia( id );
	    
	            if ( obj && this.isLoaded( id ) && this.isPlaying( id ) ) {
	                obj._node.pause();
	                obj.state = MediaBox.STATE_STOPPED;
	    
	                clearPlaybackUpdate( obj );
	            }
	    
	            return _instance;
	        },
	    
	        /**
	         *
	         * MediaBox get audio object by id
	         * @memberof getMedia
	         * @method getAudio
	         * @param {string} id reference id for media
	         * @returns object
	         *
	         */
	        getMedia: function ( id ) {
	            return _video[ id ] ? _video[ id ] : _audio[ id ];
	        },
	    
	        /**
	         *
	         * MediaBox get all audio objects
	         * @memberof MediaBox
	         * @method getAudios
	         * @returns object
	         *
	         */
	        getAudios: function () {
	            return _audio;
	        },
	    
	        /**
	         *
	         * MediaBox get all video objects
	         * @memberof MediaBox
	         * @method getVideos
	         * @returns object
	         *
	         */
	        getVideos: function () {
	            return _video;
	        },
	    
	        /**
	         *
	         * MediaBox kill a media object abstractly
	         * @memberof MediaBox
	         * @method destroyMedia
	         * @param {string} id reference id for media
	         *
	         */
	        destroyMedia: function ( id ) {
	            var obj = this.getMedia( id );
	    
	            this.stopMedia( id );
	    
	            if ( obj.type === MediaBox.types.AUDIO ) {
	                delete _audio[ id ];
	    
	            } else {
	                delete _video[ id ];
	            }
	    
	            return _instance;
	        },
	    
	        /**
	         *
	         * MediaBox load media config JSON formatted in a json bundle
	         * @memberof MediaBox
	         * @method loadMedia
	         * @param {string} url The url to the JSON config
	         * @param {function} callback The function to fire when done loading
	         *
	         */
	        loadMedia: function ( url, callback ) {
	            var self = this;
	    
	            createRequest( url, null, function ( xhr ) {
	                self.addMedia( xhr.responseJSON );
	    
	                if ( isFunction( callback ) ) {
	                    callback();
	                }
	            });
	    
	            return _instance;
	        },
	    
	        /**
	         *
	         * MediaBox add media from bundle json
	         * @memberof MediaBox
	         * @method addMedia
	         * @param {object} bundle Formatted media bundle JSON
	         *
	         */
	        addMedia: function ( bundle ) {
	            for ( var m in bundle ) {
	                for ( var i = bundle[ m ].length; i--; ) {
	                    // this.addVideo() / this.addAudio()
	                    if ( isFunction( this[ m ] ) ) {
	                        this[ m ]( bundle[ m ][ i ] );
	                    }
	                }
	            }
	    
	            return _instance;
	        },
	    
	        /**
	         *
	         * MediaBox add a video element
	         * @memberof MediaBox
	         * @method addVideo
	         * @param {object} obj Formatted media bundle
	         *
	         */
	        addVideo: function ( obj ) {
	            var id = obj.id,
	                src = obj.src,
	                props = {
	                    element: obj.element,
	                    channel: obj.channel
	                };
	    
	            // Disallow overrides / Require id and src props
	            if ( _video[ id ] || !id || !src ) {
	                return _instance;
	            }
	    
	            // Allow new channels to exist
	            if ( !_channels[ props.channel ] ) {
	                _channels[ props.channel ] = {
	                    volume: _volume
	                };
	            }
	    
	            // Create video object
	            _video[ id ] = {};
	            _video[ id ].type = MediaBox.types.VIDEO;
	            _video[ id ].state = MediaBox.STATE_STOPPED;
	            _video[ id ].loaded = true;
	            _video[ id ].channel = props.channel;
	            _video[ id ].sources = src;
	            _video[ id ]._source = getCanPlaySource( MediaBox.types.VIDEO, src );
	            _video[ id ]._events = {};
	            _video[ id ]._updateId = null;
	            _video[ id ]._updateFn = null;
	            _video[ id ]._node = (props.element || document.createElement( "video" ));
	            _video[ id ]._nodeSource = document.createElement( "source" );
	            _video[ id ]._nodeSource.src = _video[ id ]._source.source;
	            _video[ id ]._nodeSource.type = getMimeForMedia( MediaBox.types.VIDEO, _video[ id ]._source.source );
	            _video[ id ]._node.appendChild( _video[ id ]._nodeSource );
	    
	            return _instance;
	        },
	    
	        /**
	         *
	         * MediaBox add an audio context
	         * @memberof MediaBox
	         * @method addAudio
	         * @param {object} obj Formatted media bundle
	         *
	         */
	        addAudio: function ( obj ) {
	            var id = obj.id,
	                src = obj.src,
	                props = {
	                    channel: obj.channel,
	                    CORS: (obj.CORS || false)
	                };
	    
	            // Disallow overrides / Require id and src props
	            if ( _audio[ id ] || !id || !src ) {
	                return _instance;
	            }
	            
	            // Allow new channels to exist
	            if ( !_channels[ props.channel ] ) {
	                _channels[ props.channel ] = {
	                    volume: _volume
	                };
	            }
	    
	            // Create audio object
	            _audio[ id ] = {};
	            _audio[ id ].type = MediaBox.types.AUDIO;
	            _audio[ id ].state = MediaBox.STATE_STOPPED;
	            _audio[ id ].loaded = true;
	            _audio[ id ].channel = props.channel;
	            _audio[ id ].sources = src;
	            _audio[ id ]._source = getCanPlaySource( MediaBox.types.AUDIO, src );
	            _audio[ id ]._events = {};
	            _audio[ id ]._updateId = null;
	            _audio[ id ]._updateFn = null;
	            _audio[ id ]._node = new Audio( _audio[ id ]._source.source );
	    
	            // Get the media as a buffer
	            if ( isFunction( obj.onloaded ) && !props.CORS ) {
	                createRequest( _audio[ id ]._source.source, {responseType: "arraybuffer"}, function ( xhr ) {
	                    _context.decodeAudioData( xhr.response, obj.onloaded );
	                });
	            }
	    
	            return _instance;
	        },
	    
	        /**
	         *
	         * MediaBox fade in audio/video volume
	         * @memberof MediaBox
	         * @method fadeMediaIn
	         * @param {string} id string reference id for audio
	         * @param {number} duration tween time in ms
	         * @param {function} easing optional easing to use
	         *
	         */
	        fadeMediaIn: function ( id, duration, easing ) {
	            var obj = this.getMedia( id ),
	                self = this,
	                volume;
	    
	            if ( obj && obj.state === MediaBox.STATE_PLAYING ) {
	                return _instance;
	            }
	    
	            if ( obj ) {
	                volume = _channels[ obj.channel ].volume;
	    
	                // Only reset volume and play if object is stopped
	                // Object state could be STATE_STOPPING at this point
	                if ( obj.state === MediaBox.STATE_STOPPED ) {
	                    this.playMedia( id );
	                    this.setVolume( id, 0 );
	    
	                } else if ( obj.state === MediaBox.STATE_STOPPING ) {
	                    obj.state = MediaBox.STATE_PLAYING;
	                }
	    
	                new Tween({
	                    to: volume,
	                    from: 0,
	                    ease: ( isFunction( easing ) ) ? easing : Easing.linear,
	                    duration: (duration || 1000),
	                    update: function ( v ) {
	                        self.setVolume( id, (v > volume) ? volume : v );
	                    },
	                    complete: function () {
	                        self.setVolume( id, volume );
	                    }
	                });
	            }
	    
	            return _instance;
	        },
	    
	        /**
	         *
	         * MediaBox fade out audio/video volume
	         * @memberof MediaBox
	         * @method fadeMediaOut
	         * @param {string} id string reference id for audio
	         * @param {number} duration tween time in ms
	         * @param {function} easing optional easing to use
	         *
	         */
	        fadeMediaOut: function ( id, duration, easing ) {
	            var obj = this.getMedia( id );
	    
	            if ( obj && obj.state === MediaBox.STATE_STOPPING ) {
	                return _instance;
	            }
	    
	            var self = this,
	                handler = function ( v ) {
	                    // Check audio state on fadeout in case it is started again
	                    // before the duration of the fadeout is complete.
	                    if ( obj.state === MediaBox.STATE_STOPPING ) {
	                        self.setVolume( id, (v < 0) ? 0 : v );
	    
	                        if ( self.getVolume( id ) === 0 ) {
	                            self.stopMedia( id );
	                        }
	                    }
	                };
	    
	            if ( obj ) {
	                obj.state = MediaBox.STATE_STOPPING;
	    
	                new Tween({
	                    to: 0,
	                    from: self.getVolume( id ),
	                    ease: ( isFunction( easing ) ) ? easing : Easing.linear,
	                    duration: (duration || 1000),
	                    update: handler,
	                    complete: handler
	                });
	            }
	    
	            return _instance;
	        },
	    
	        /**
	         *
	         * MediaBox pause all playing audio for a given channel id
	         * @memberof MediaBox
	         * @method stopChannel
	         * @param {string} channel string reference id for channel
	         *
	         */
	        stopChannel: function ( channel ) {
	            var id;
	    
	            // Look at video index
	            for ( id in _video ) {
	                if ( _video[ id ].channel === channel && _video[ id ].state === MediaBox.STATE_PLAYING ) {
	                    this.pauseMedia( id );
	                }
	            }
	    
	            // Look at audio index
	            for ( id in _audio ) {
	                if ( _audio[ id ].channel === channel && _audio[ id ].state === MediaBox.STATE_PLAYING ) {
	                    this.pauseMedia( id );
	                }
	            }
	    
	            return _instance;
	        },
	    
	        /**
	         *
	         * MediaBox resume all playing audio for a given channel id
	         * @memberof MediaBox
	         * @method playChannel
	         * @param {string} channel string reference id for channel
	         *
	         */
	        playChannel: function ( channel ) {
	            var id;
	    
	            // Look at video index
	            for ( id in _video ) {
	                if ( _video[ id ].channel === channel && _video[ id ].state === MediaBox.STATE_PAUSED ) {
	                    this.playMedia( id );
	                }
	            }
	    
	            // Look at audio index
	            for ( id in _audio ) {
	                if ( _audio[ id ].channel === channel && _audio[ id ].state === MediaBox.STATE_PAUSED ) {
	                    this.playMedia( id );
	                }
	            }
	    
	            return _instance;
	        },
	    
	        /**
	         *
	         * MediaBox fade out all playing audio/video for a given channel id
	         * @memberof MediaBox
	         * @method fadeChannelOut
	         * @param {string} channel string reference id for channel
	         * @param {number} duration tween time in ms
	         *
	         */
	        fadeChannelOut: function ( channel, duration ) {
	            var id;
	    
	            // Look at video index
	            for ( id in _video ) {
	                if ( _video[ id ].channel === channel && _video[ id ].state === MediaBox.STATE_PLAYING ) {
	                    this.fadeMediaOut( id, duration );
	                }
	            }
	    
	            // Look at audio index
	            for ( id in _audio ) {
	                if ( _audio[ id ].channel === channel && _audio[ id ].state === MediaBox.STATE_PLAYING ) {
	                    this.fadeMediaOut( id, duration );
	                }
	            }
	    
	            return _instance;
	        },
	    
	        /**
	         *
	         * MediaBox fade in all playing audio/video for a given channel id
	         * @memberof MediaBox
	         * @method fadeChannelIn
	         * @param {string} channel string reference id for channel
	         * @param {number} duration tween time in ms
	         *
	         */
	        fadeChannelIn: function ( channel, duration ) {
	            var id;
	    
	            // Look at video index
	            for ( id in _video ) {
	                if ( _video[ id ].channel === channel && _video[ id ].state === MediaBox.STATE_STOPPED ) {
	                    this.fadeMediaIn( id, duration );
	                }
	            }
	    
	            // Look at audio index
	            for ( id in _audio ) {
	                if ( _audio[ id ].channel === channel && _audio[ id ].state === MediaBox.STATE_STOPPED ) {
	                    this.fadeMediaIn( id, duration );
	                }
	            }
	    
	            return _instance;
	        },
	    
	        /**
	         *
	         * MediaBox crossfade volume between multiple channels
	         * @memberof MediaBox
	         * @method crossFadeChannel
	         * @param {string} channel string reference id for channel
	         * @param {string} objId string reference id for object to fade in
	         * @param {number} duration tween time in ms
	         *
	         */
	        crossFadeChannel: function ( channel, objId, duration ) {
	            var id;
	            
	            // Look at video index
	            for ( id in _video ) {
	                if ( _video[ id ].channel === channel && _video[ id ].state === MediaBox.STATE_PLAYING ) {
	                    this.fadeMediaOut( id, duration );
	                }
	            }
	    
	            // Look at audio index
	            for ( id in _audio ) {
	                if ( _audio[ id ].channel === channel && _audio[ id ].state === MediaBox.STATE_PLAYING ) {
	                    this.fadeMediaOut( id, duration );
	                }
	            }
	    
	            return this.fadeMediaIn( objId, duration );
	        },
	    
	        /**
	         *
	         * MediaBox set the property for a channel
	         * @memberof MediaBox
	         * @method setChannelProp
	         * @param {string} id string id reference to channel
	         * @param {string} key string prop key
	         * @param {string} val prop val
	         *
	         */
	        setChannelProp: function ( id, key, val ) {
	            if ( _channels[ id ] ) {
	                _channels[ id ][ key ] = val;
	            }
	    
	            return _instance;
	        },
	    
	        /**
	         *
	         * MediaBox get the property for a channel
	         * @memberof MediaBox
	         * @method getChannelProp
	         * @param {string} id string id reference to channel
	         * @param {string} key string prop key
	         *
	         */
	        getChannelProp: function ( id, key ) {
	            if ( _channels[ id ] ) {
	                return _channels[ id ][ key ];
	            }
	        },
	        
	        
	        /**
	         *
	         * MediaBox get the channels config
	         * @memberof MediaBox
	         * @method _channels
	         *
	         */
	        getChannels: function () {
	            return _channels;
	        }
	    };
	    
	    
	    return MediaBox;
	
	
	});

/***/ },
/* 56 */
/*!***********************************!*\
  !*** ./~/properjs-tween/Tween.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	/*!
	 *
	 * A simple tween class using requestAnimationFrame
	 *
	 * @Tween
	 * @author: kitajchuk
	 *
	 */
	(function ( factory ) {
	    
	    if ( true ) {
	        module.exports = factory();
	
	    } else if ( typeof window !== "undefined" ) {
	        window.Tween = factory();
	    }
	    
	})(function () {
	
	    var Easing = __webpack_require__( /*! properjs-easing */ 35 ),
	        defaults = {
	            ease: Easing.linear,
	            duration: 600,
	            from: 0,
	            to: 0,
	            delay: 0,
	            update: function () {},
	            complete: function () {}
	        };
	    
	    
	    /**
	     *
	     * Tween function
	     * @constructor Tween
	     * @requires raf
	     * @requires Easing
	     * @param {object} options Tween animation settings
	     * <ul>
	     * <li>duration - How long the tween will last</li>
	     * <li>from - Where to start the tween</li>
	     * <li>to - When to end the tween</li>
	     * <li>update - The callback on each iteration</li>
	     * <li>complete - The callback on end of animation</li>
	     * <li>ease - The easing function to use</li>
	     * <li>delay - How long to wait before animation</li>
	     * </ul>
	     * @memberof! <global>
	     *
	     */
	    var Tween = function ( options ) {
	        // Normalize options
	        options = (options || {});
	    
	        // Normalize options
	        for ( var i in defaults ) {
	            if ( options[ i ] === undefined ) {
	                options[ i ] = defaults[ i ];
	            }
	        }
	    
	        var tweenDiff = (options.to - options.from),
	            startTime = null,
	            rafTimer = null,
	            isStopped = false;
	    
	        function animate( rafTimeStamp ) {
	            if ( isStopped ) {
	                return;
	            }
	    
	            if ( startTime === null ) {
	                startTime = rafTimeStamp;
	            }
	    
	            var animDiff = (rafTimeStamp - startTime),
	                tweenTo = (tweenDiff * options.ease( animDiff / options.duration )) + options.from;
	    
	            if ( typeof options.update === "function" ) {
	                options.update( tweenTo );
	            }
	    
	            if ( animDiff > options.duration ) {
	                if ( typeof options.complete === "function" ) {
	                    options.complete( options.to );
	                }
	    
	                cancelAnimationFrame( rafTimer );
	    
	                rafTimer = null;
	    
	                return false;
	            }
	    
	            rafTimer = requestAnimationFrame( animate );
	        }
	    
	        setTimeout(function () {
	            rafTimer = requestAnimationFrame( animate );
	    
	        }, options.delay );
	    
	        this.stop = function () {
	            isStopped = true;
	    
	            cancelAnimationFrame( rafTimer );
	    
	            rafTimer = null;
	        };
	    };
	    
	    
	    return Tween;
	
	
	});

/***/ },
/* 57 */
/*!*************************!*\
  !*** ./js_src/cover.js ***!
  \*************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }
	
	var _core = __webpack_require__(/*! ./core */ 27);
	
	var core = _interopRequireWildcard(_core);
	
	var $_jsElement = null;
	
	/**
	 *
	 * @public
	 * @namespace cover
	 * @description A nice description of what this module does...
	 *
	 */
	var cover = {
	    /**
	     *
	     * @public
	     * @method init
	     * @memberof cover
	     * @description Method runs once when window loads.
	     *
	     */
	    init: function init() {
	        core.log("cover initialized");
	    },
	
	    /**
	     *
	     * @public
	     * @method isActive
	     * @memberof cover
	     * @description Method informs PageController of active status.
	     * @returns {boolean}
	     *
	     */
	    isActive: function isActive() {
	        return this.getElements() > 0;
	    },
	
	    /**
	     *
	     * @public
	     * @method onload
	     * @memberof cover
	     * @description Method performs onloading actions for this module.
	     *
	     */
	    onload: function onload() {
	        var data = $_jsElement.data();
	
	        // data
	        //      type - page?, cover?
	        //      tone - light?
	
	        // 0.1 => Handle the `type` option
	        if (data.type === "page") {
	            core.dom.html.addClass("is-cover-page");
	
	            // Default `type` is "poster"
	        } else {
	                core.dom.html.addClass("is-cover-poster");
	            }
	
	        // 0.2 => Handle the `tone` option
	        //        This changes to contrast of the list icon and page label
	        //        Cover pages persist tone change, cover posters adjust between poster and page
	        //        The default is to have a `dark` ui tone
	        if (data.tone === "light") {
	            core.dom.html.addClass("is-cover-light");
	        }
	
	        // 0.3 => Handle the `bg` option
	        if (data.bg === "dark") {
	            core.dom.html.addClass("is-cover-page--dark");
	        }
	
	        core.emitter.on("app--scroll", onScroller);
	
	        onScroller(window.scrollY);
	    },
	
	    /**
	     *
	     * @public
	     * @method unload
	     * @memberof cover
	     * @description Method performs unloading actions for this module.
	     *
	     */
	    unload: function unload() {
	        this.teardown();
	    },
	
	    /**
	     *
	     * @public
	     * @method teardown
	     * @memberof cover
	     * @description Method performs cleanup after this module. Remmoves events, null vars etc...
	     *
	     */
	    teardown: function teardown() {
	        $_jsElement = null;
	
	        core.emitter.off("app--scroll", onScroller);
	
	        core.dom.html.removeClass("is-cover-page is-cover-page--dark is-cover-poster is-cover-light is-cover-moment");
	    },
	
	    /**
	     *
	     * @public
	     * @method getElements
	     * @memberof cover
	     * @description Method queries DOM for this modules node.
	     * @returns {number}
	     *
	     */
	    getElements: function getElements() {
	        $_jsElement = core.dom.page.find(".js-cover");
	
	        return $_jsElement.length;
	    },
	
	    /**
	     *
	     * @public
	     * @method setElement
	     * @memberof cover
	     * @param {Hobo} $element The new element this module will use
	     * @description Method updates this modules node.
	     *
	     */
	    setElement: function setElement($element) {
	        $_jsElement = $element;
	    }
	};
	
	/**
	 *
	 * @private
	 * @method onScroller
	 * @memberof cover
	 * @description Handle scroll event to toggle `cover-moment` className.
	 *
	 */
	var onScroller = function onScroller() {
	    if (core.util.isElementVisibleVert($_jsElement[0])) {
	        core.dom.html.addClass("is-cover-moment");
	    } else {
	        core.dom.html.removeClass("is-cover-moment");
	    }
	};
	
	/******************************************************************************
	 * Export
	*******************************************************************************/
	exports["default"] = cover;
	module.exports = exports["default"];

/***/ },
/* 58 */
/*!*****************************!*\
  !*** ./js_src/menus/nav.js ***!
  \*****************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }
	
	var _core = __webpack_require__(/*! ../core */ 27);
	
	var core = _interopRequireWildcard(_core);
	
	var _Menu = __webpack_require__(/*! ./Menu */ 59);
	
	var _Menu2 = _interopRequireDefault(_Menu);
	
	var $_jsItems = core.dom.nav.find(".js-menu-nav-item");
	
	/**
	 *
	 * @public
	 * @namespace nav
	 * @description Handles opening / closing the main nav menu.
	 * @memberof menus
	 *
	 */
	var nav = {
	  /**
	   *
	   * @public
	   * @method init
	   * @memberof menus.nav
	   * @description Initializes navmenu interactions.
	   *
	   */
	  init: function init() {
	    this.bindMainEvents();
	
	    this.menu = new _Menu2["default"](core.dom.nav);
	
	    core.log("nav initialized");
	  },
	
	  /**
	   *
	   * @public
	   * @method open
	   * @memberof menus.nav
	   * @description Opens the navmenu.
	   *
	   */
	  open: function open() {
	    this.menu.open();
	  },
	
	  /**
	   *
	   * @public
	   * @method close
	   * @memberof menus.nav
	   * @description Closes the navmenu.
	   *
	   */
	  close: function close() {
	    this.menu.close();
	  },
	
	  /**
	   *
	   * @public
	   * @method toggleActive
	   * @param {string} id The unique nav identifier
	   * @memberof menus.nav
	   * @description Toggle the active nav menu item by id.
	   *
	   */
	  toggleActive: function toggleActive(id) {
	    var $navi = $_jsItems.find(".js-nav__" + id);
	
	    if ($navi.length) {
	      $_jsItems.removeClass("is-active");
	      $navi[0].className += " is-active";
	    }
	  },
	
	  /**
	   *
	   * @public
	   * @method bindMainEvents
	   * @memberof menus.nav
	   * @description Setup main interaction events for nav/header.
	   *
	   */
	  bindMainEvents: function bindMainEvents() {
	    core.dom.nav.on("click", ".js-menu-nav", onTapNavMenu);
	    core.dom.header.on("click", ".js-controller--nav", onTapNavIcon);
	  }
	};
	
	/**
	 *
	 * @private
	 * @method onTapNavMenu
	 * @memberof menus.nav
	 * @description Handles list icon event.
	 *
	 */
	var onTapNavMenu = function onTapNavMenu() {
	  nav.close();
	};
	
	/**
	 *
	 * @private
	 * @method onTapNavIcon
	 * @memberof menus.nav
	 * @description Handles list icon event.
	 *
	 */
	var onTapNavIcon = function onTapNavIcon() {
	  nav.open();
	};
	
	/******************************************************************************
	 * Export
	*******************************************************************************/
	exports["default"] = nav;
	module.exports = exports["default"];

/***/ },
/* 59 */
/*!******************************!*\
  !*** ./js_src/menus/Menu.js ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _core = __webpack_require__(/*! ../core */ 27);
	
	var core = _interopRequireWildcard(_core);
	
	/**
	 *
	 * @public
	 * @class Menu
	 * @classdesc Handle normalized open/close for overlay menus.
	 * @param {Hobo} $node The menu element
	 *
	 */
	
	var Menu = (function () {
	    function Menu($node) {
	        _classCallCheck(this, Menu);
	
	        this.$node = $node;
	        this.tDuration = core.util.getTransitionDuration(this.$node[0]);
	        this.isOpen = false;
	
	        this.$node.detach();
	    }
	
	    /******************************************************************************
	     * Export
	    *******************************************************************************/
	
	    /**
	     *
	     * @public
	     * @instance
	     * @method open
	     * @memberof menus.Menu
	     * @description Open the menu.
	     *
	     */
	
	    _createClass(Menu, [{
	        key: "open",
	        value: function open() {
	            var _this = this;
	
	            this.isOpen = true;
	
	            core.dom.html.addClass("is-neverflow is-menu-open");
	            core.dom.body.append(this.$node);
	
	            setTimeout(function () {
	                return _this.$node.addClass("is-active");
	            }, 100);
	            setTimeout(function () {
	                return _this.$node.addClass("is-active-events");
	            }, this.tDuration * 2);
	        }
	
	        /**
	         *
	         * @public
	         * @instance
	         * @method close
	         * @memberof menus.Menu
	         * @description Close the menu.
	         *
	         */
	    }, {
	        key: "close",
	        value: function close() {
	            var _this2 = this;
	
	            this.isOpen = false;
	
	            this.$node.removeClass("is-active");
	            core.dom.html.removeClass("is-neverflow");
	
	            setTimeout(function () {
	                core.dom.html.removeClass("is-menu-open");
	                _this2.$node.detach().removeClass("is-active-events");
	            }, this.tDuration * 2);
	        }
	
	        /**
	         *
	         * @public
	         * @instance
	         * @method toggle
	         * @memberof menus.Menu
	         * @description Open or Close the menu.
	         *
	         */
	    }, {
	        key: "toggle",
	        value: function toggle() {
	            if (this.isOpen) {
	                this.close();
	            } else {
	                this.open();
	            }
	        }
	
	        /**
	         *
	         * @public
	         * @instance
	         * @method isActive
	         * @memberof menus.Menu
	         * @description Check the state of the menu.
	         * @returns {boolean}
	         *
	         */
	    }, {
	        key: "isActive",
	        value: function isActive() {
	            return this.isOpen;
	        }
	    }]);
	
	    return Menu;
	})();
	
	exports["default"] = Menu;
	module.exports = exports["default"];

/***/ },
/* 60 */
/*!***************************!*\
  !*** ./js_src/animate.js ***!
  \***************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }
	
	var _core = __webpack_require__(/*! ./core */ 27);
	
	var core = _interopRequireWildcard(_core);
	
	var $_jsElements = null;
	var _isActive = false;
	
	/**
	 *
	 * @public
	 * @namespace animate
	 * @description Handle a site-wide default animation style for elements in view.
	 *
	 */
	var animate = {
	    /**
	     *
	     * @public
	     * @method init
	     * @memberof animate
	     * @description Method runs once when window loads.
	     *
	     */
	    init: function init() {
	        core.log("animate initialized");
	
	        core.emitter.on("app--intro-art", this.onIntroArt.bind(this));
	        core.emitter.on("app--update-animate", this.onUpdateAnimate.bind(this));
	        core.emitter.on("app--pushed-route", this.onUpdateAnimate.bind(this));
	    },
	
	    /**
	     *
	     * @public
	     * @method isActive
	     * @memberof animate
	     * @description Method informs PageController of active status.
	     * @returns {boolean}
	     *
	     */
	    isActive: function isActive() {
	        return this.getElements() > 0;
	    },
	
	    /**
	     *
	     * @public
	     * @method onload
	     * @memberof animate
	     * @description Method performs onloading actions for this module.
	     *
	     */
	    onload: function onload() {
	        _isActive = true;
	
	        core.emitter.on("app--scroll", updateAnimate);
	        core.emitter.on("app--resize", updateAnimate);
	
	        updateAnimate();
	    },
	
	    /**
	     *
	     * @public
	     * @method unload
	     * @memberof animate
	     * @description Method performs unloading actions for this module.
	     *
	     */
	    unload: function unload() {
	        this.teardown();
	    },
	
	    /**
	     *
	     * @public
	     * @method teardown
	     * @memberof animate
	     * @description Method performs cleanup after this module. Remmoves events, null vars etc...
	     *
	     */
	    teardown: function teardown() {
	        $_jsElements = null;
	        _isActive = false;
	    },
	
	    /**
	     *
	     * @public
	     * @method getElements
	     * @memberof animate
	     * @description Method queries DOM for this modules node.
	     * @returns {number}
	     *
	     */
	    getElements: function getElements() {
	        $_jsElements = core.dom.page.find(".js-animate");
	
	        return $_jsElements.length;
	    },
	
	    /**
	     *
	     * @public
	     * @method onUpdateAnimate
	     * @memberof animate
	     * @description Handle updating node list and activating elements.
	     *
	     */
	    onUpdateAnimate: function onUpdateAnimate() {
	        this.getElements();
	
	        if (!_isActive) {
	            this.onload();
	        }
	
	        updateAnimate();
	    },
	
	    /**
	     *
	     * @public
	     * @method onIntroArt
	     * @memberof animate
	     * @description Animate elements on the intro-art event.
	     *
	     */
	    onIntroArt: function onIntroArt() {
	        var $elems = $_jsElements.filter(".js-animate--intro-art");
	
	        if ($elems.length) {
	            $elems.addClass("is-active");
	        }
	    }
	};
	
	/**
	 *
	 * @private
	 * @method updateAnimate
	 * @memberof animate
	 * @description Update animation nodes.
	 *
	 */
	var updateAnimate = function updateAnimate() {
	    var $elems = $_jsElements.not(".js-animate--intro-art");
	    var $elem = null;
	    var i = $elems.length;
	
	    for (i; i--;) {
	        $elem = $elems.eq(i);
	
	        if (core.util.isElementVisibleVert($elem[0])) {
	            $elem.addClass("is-active");
	        } else {
	            $elem.removeClass("is-active");
	        }
	    }
	};
	
	/******************************************************************************
	 * Export
	*******************************************************************************/
	exports["default"] = animate;
	module.exports = exports["default"];

/***/ },
/* 61 */
/*!*******************************!*\
  !*** ./js_src/menus/intro.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }
	
	var _core = __webpack_require__(/*! ../core */ 27);
	
	var core = _interopRequireWildcard(_core);
	
	var _transTime = core.util.getTransitionDuration(core.dom.intro[0]);
	
	/**
	 *
	 * @public
	 * @namespace intro
	 * @description Performs the branded load-in screen sequence.
	 * @memberof menus
	 *
	 */
	var intro = {
	    /**
	     *
	     * @public
	     * @method teardown
	     * @memberof menus.intro
	     * @description Method removes intro node from DOM.
	     *
	     */
	    teardown: function teardown() {
	        core.dom.intro.removeClass("is-active");
	
	        setTimeout(function () {
	            core.dom.intro.remove();
	
	            setTimeout(function () {
	                core.emitter.fire("app--intro-art");
	            }, 0);
	        }, _transTime);
	    }
	};
	
	/******************************************************************************
	 * Export
	*******************************************************************************/
	exports["default"] = intro;
	module.exports = exports["default"];

/***/ }
/******/ ]);
//# sourceMappingURL=app.js.map
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
	
	var _menusNav = __webpack_require__(/*! ./menus/nav */ 40);
	
	var _menusNav2 = _interopRequireDefault(_menusNav);
	
	var _core = __webpack_require__(/*! ./core */ 10);
	
	var core = _interopRequireWildcard(_core);
	
	// import intro from "./menus/intro";
	// import weather from "./weather";
	
	var _filterlist = __webpack_require__(/*! ./filterlist */ 43);
	
	var _filterlist2 = _interopRequireDefault(_filterlist);
	
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
	    // this.intro = intro;
	    this.router = _router2["default"];
	    this.filterlist = _filterlist2["default"];
	    // this.weather = weather;
	
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
	      this.filterlist.init(this);
	      // this.weather.init( this );
	
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
	
	      // this.intro.teardown();
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
	
	var _js_libsJqueryDistJqueryJs = __webpack_require__(/*! js_libs/jquery/dist/jquery.js */ 2);
	
	var _js_libsJqueryDistJqueryJs2 = _interopRequireDefault(_js_libsJqueryDistJqueryJs);
	
	var _properjsPagecontroller = __webpack_require__(/*! properjs-pagecontroller */ 3);
	
	var _properjsPagecontroller2 = _interopRequireDefault(_properjsPagecontroller);
	
	var _core = __webpack_require__(/*! ./core */ 10);
	
	var core = _interopRequireWildcard(_core);
	
	var _menusNav = __webpack_require__(/*! ./menus/nav */ 40);
	
	var _menusNav2 = _interopRequireDefault(_menusNav);
	
	var _animate = __webpack_require__(/*! ./animate */ 42);
	
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
	
	        this.controller.setModules([core.images, _animate2["default"]]);
	
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
	
	        doc = (0, _js_libsJqueryDistJqueryJs2["default"])(doc);
	
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
/*!***************************************!*\
  !*** ./js_libs/jquery/dist/jquery.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * jQuery JavaScript Library v3.1.1-pre
	 * https://jquery.com/
	 *
	 * Includes Sizzle.js
	 * https://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * https://jquery.org/license
	 *
	 * Date: 2016-09-05T02:56Z
	 */
	( function( global, factory ) {
	
		"use strict";
	
		if ( typeof module === "object" && typeof module.exports === "object" ) {
	
			// For CommonJS and CommonJS-like environments where a proper `window`
			// is present, execute the factory and get jQuery.
			// For environments that do not have a `window` with a `document`
			// (such as Node.js), expose a factory as module.exports.
			// This accentuates the need for the creation of a real `window`.
			// e.g. var jQuery = require("jquery")(window);
			// See ticket #14549 for more info.
			module.exports = global.document ?
				factory( global, true ) :
				function( w ) {
					if ( !w.document ) {
						throw new Error( "jQuery requires a window with a document" );
					}
					return factory( w );
				};
		} else {
			factory( global );
		}
	
	// Pass this if window is not defined yet
	} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {
	
	// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
	// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
	// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
	// enough that all such attempts are guarded in a try block.
	"use strict";
	
	var arr = [];
	
	var document = window.document;
	
	var getProto = Object.getPrototypeOf;
	
	var slice = arr.slice;
	
	var concat = arr.concat;
	
	var push = arr.push;
	
	var indexOf = arr.indexOf;
	
	var class2type = {};
	
	var toString = class2type.toString;
	
	var hasOwn = class2type.hasOwnProperty;
	
	var fnToString = hasOwn.toString;
	
	var ObjectFunctionString = fnToString.call( Object );
	
	var support = {};
	
	
	
		function DOMEval( code, doc ) {
			doc = doc || document;
	
			var script = doc.createElement( "script" );
	
			script.text = code;
			doc.head.appendChild( script ).parentNode.removeChild( script );
		}
	/* global Symbol */
	// Defining this global in .eslintrc.json would create a danger of using the global
	// unguarded in another place, it seems safer to define global only for this module
	
	
	
	var
		version = "3.1.1-pre",
	
		// Define a local copy of jQuery
		jQuery = function( selector, context ) {
	
			// The jQuery object is actually just the init constructor 'enhanced'
			// Need init if jQuery is called (just allow error to be thrown if not included)
			return new jQuery.fn.init( selector, context );
		},
	
		// Support: Android <=4.0 only
		// Make sure we trim BOM and NBSP
		rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
	
		// Matches dashed string for camelizing
		rmsPrefix = /^-ms-/,
		rdashAlpha = /-([a-z])/g,
	
		// Used by jQuery.camelCase as callback to replace()
		fcamelCase = function( all, letter ) {
			return letter.toUpperCase();
		};
	
	jQuery.fn = jQuery.prototype = {
	
		// The current version of jQuery being used
		jquery: version,
	
		constructor: jQuery,
	
		// The default length of a jQuery object is 0
		length: 0,
	
		toArray: function() {
			return slice.call( this );
		},
	
		// Get the Nth element in the matched element set OR
		// Get the whole matched element set as a clean array
		get: function( num ) {
	
			// Return all the elements in a clean array
			if ( num == null ) {
				return slice.call( this );
			}
	
			// Return just the one element from the set
			return num < 0 ? this[ num + this.length ] : this[ num ];
		},
	
		// Take an array of elements and push it onto the stack
		// (returning the new matched element set)
		pushStack: function( elems ) {
	
			// Build a new jQuery matched element set
			var ret = jQuery.merge( this.constructor(), elems );
	
			// Add the old object onto the stack (as a reference)
			ret.prevObject = this;
	
			// Return the newly-formed element set
			return ret;
		},
	
		// Execute a callback for every element in the matched set.
		each: function( callback ) {
			return jQuery.each( this, callback );
		},
	
		map: function( callback ) {
			return this.pushStack( jQuery.map( this, function( elem, i ) {
				return callback.call( elem, i, elem );
			} ) );
		},
	
		slice: function() {
			return this.pushStack( slice.apply( this, arguments ) );
		},
	
		first: function() {
			return this.eq( 0 );
		},
	
		last: function() {
			return this.eq( -1 );
		},
	
		eq: function( i ) {
			var len = this.length,
				j = +i + ( i < 0 ? len : 0 );
			return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
		},
	
		end: function() {
			return this.prevObject || this.constructor();
		},
	
		// For internal use only.
		// Behaves like an Array's method, not like a jQuery method.
		push: push,
		sort: arr.sort,
		splice: arr.splice
	};
	
	jQuery.extend = jQuery.fn.extend = function() {
		var options, name, src, copy, copyIsArray, clone,
			target = arguments[ 0 ] || {},
			i = 1,
			length = arguments.length,
			deep = false;
	
		// Handle a deep copy situation
		if ( typeof target === "boolean" ) {
			deep = target;
	
			// Skip the boolean and the target
			target = arguments[ i ] || {};
			i++;
		}
	
		// Handle case when target is a string or something (possible in deep copy)
		if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
			target = {};
		}
	
		// Extend jQuery itself if only one argument is passed
		if ( i === length ) {
			target = this;
			i--;
		}
	
		for ( ; i < length; i++ ) {
	
			// Only deal with non-null/undefined values
			if ( ( options = arguments[ i ] ) != null ) {
	
				// Extend the base object
				for ( name in options ) {
					src = target[ name ];
					copy = options[ name ];
	
					// Prevent never-ending loop
					if ( target === copy ) {
						continue;
					}
	
					// Recurse if we're merging plain objects or arrays
					if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
						( copyIsArray = jQuery.isArray( copy ) ) ) ) {
	
						if ( copyIsArray ) {
							copyIsArray = false;
							clone = src && jQuery.isArray( src ) ? src : [];
	
						} else {
							clone = src && jQuery.isPlainObject( src ) ? src : {};
						}
	
						// Never move original objects, clone them
						target[ name ] = jQuery.extend( deep, clone, copy );
	
					// Don't bring in undefined values
					} else if ( copy !== undefined ) {
						target[ name ] = copy;
					}
				}
			}
		}
	
		// Return the modified object
		return target;
	};
	
	jQuery.extend( {
	
		// Unique for each copy of jQuery on the page
		expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),
	
		// Assume jQuery is ready without the ready module
		isReady: true,
	
		error: function( msg ) {
			throw new Error( msg );
		},
	
		noop: function() {},
	
		isFunction: function( obj ) {
			return jQuery.type( obj ) === "function";
		},
	
		isArray: Array.isArray,
	
		isWindow: function( obj ) {
			return obj != null && obj === obj.window;
		},
	
		isNumeric: function( obj ) {
	
			// As of jQuery 3.0, isNumeric is limited to
			// strings and numbers (primitives or objects)
			// that can be coerced to finite numbers (gh-2662)
			var type = jQuery.type( obj );
			return ( type === "number" || type === "string" ) &&
	
				// parseFloat NaNs numeric-cast false positives ("")
				// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
				// subtraction forces infinities to NaN
				!isNaN( obj - parseFloat( obj ) );
		},
	
		isPlainObject: function( obj ) {
			var proto, Ctor;
	
			// Detect obvious negatives
			// Use toString instead of jQuery.type to catch host objects
			if ( !obj || toString.call( obj ) !== "[object Object]" ) {
				return false;
			}
	
			proto = getProto( obj );
	
			// Objects with no prototype (e.g., `Object.create( null )`) are plain
			if ( !proto ) {
				return true;
			}
	
			// Objects with prototype are plain iff they were constructed by a global Object function
			Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
			return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
		},
	
		isEmptyObject: function( obj ) {
	
			/* eslint-disable no-unused-vars */
			// See https://github.com/eslint/eslint/issues/6125
			var name;
	
			for ( name in obj ) {
				return false;
			}
			return true;
		},
	
		type: function( obj ) {
			if ( obj == null ) {
				return obj + "";
			}
	
			// Support: Android <=2.3 only (functionish RegExp)
			return typeof obj === "object" || typeof obj === "function" ?
				class2type[ toString.call( obj ) ] || "object" :
				typeof obj;
		},
	
		// Evaluates a script in a global context
		globalEval: function( code ) {
			DOMEval( code );
		},
	
		// Convert dashed to camelCase; used by the css and data modules
		// Support: IE <=9 - 11, Edge 12 - 13
		// Microsoft forgot to hump their vendor prefix (#9572)
		camelCase: function( string ) {
			return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
		},
	
		nodeName: function( elem, name ) {
			return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
		},
	
		each: function( obj, callback ) {
			var length, i = 0;
	
			if ( isArrayLike( obj ) ) {
				length = obj.length;
				for ( ; i < length; i++ ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			}
	
			return obj;
		},
	
		// Support: Android <=4.0 only
		trim: function( text ) {
			return text == null ?
				"" :
				( text + "" ).replace( rtrim, "" );
		},
	
		// results is for internal usage only
		makeArray: function( arr, results ) {
			var ret = results || [];
	
			if ( arr != null ) {
				if ( isArrayLike( Object( arr ) ) ) {
					jQuery.merge( ret,
						typeof arr === "string" ?
						[ arr ] : arr
					);
				} else {
					push.call( ret, arr );
				}
			}
	
			return ret;
		},
	
		inArray: function( elem, arr, i ) {
			return arr == null ? -1 : indexOf.call( arr, elem, i );
		},
	
		// Support: Android <=4.0 only, PhantomJS 1 only
		// push.apply(_, arraylike) throws on ancient WebKit
		merge: function( first, second ) {
			var len = +second.length,
				j = 0,
				i = first.length;
	
			for ( ; j < len; j++ ) {
				first[ i++ ] = second[ j ];
			}
	
			first.length = i;
	
			return first;
		},
	
		grep: function( elems, callback, invert ) {
			var callbackInverse,
				matches = [],
				i = 0,
				length = elems.length,
				callbackExpect = !invert;
	
			// Go through the array, only saving the items
			// that pass the validator function
			for ( ; i < length; i++ ) {
				callbackInverse = !callback( elems[ i ], i );
				if ( callbackInverse !== callbackExpect ) {
					matches.push( elems[ i ] );
				}
			}
	
			return matches;
		},
	
		// arg is for internal usage only
		map: function( elems, callback, arg ) {
			var length, value,
				i = 0,
				ret = [];
	
			// Go through the array, translating each of the items to their new values
			if ( isArrayLike( elems ) ) {
				length = elems.length;
				for ( ; i < length; i++ ) {
					value = callback( elems[ i ], i, arg );
	
					if ( value != null ) {
						ret.push( value );
					}
				}
	
			// Go through every key on the object,
			} else {
				for ( i in elems ) {
					value = callback( elems[ i ], i, arg );
	
					if ( value != null ) {
						ret.push( value );
					}
				}
			}
	
			// Flatten any nested arrays
			return concat.apply( [], ret );
		},
	
		// A global GUID counter for objects
		guid: 1,
	
		// Bind a function to a context, optionally partially applying any
		// arguments.
		proxy: function( fn, context ) {
			var tmp, args, proxy;
	
			if ( typeof context === "string" ) {
				tmp = fn[ context ];
				context = fn;
				fn = tmp;
			}
	
			// Quick check to determine if target is callable, in the spec
			// this throws a TypeError, but we will just return undefined.
			if ( !jQuery.isFunction( fn ) ) {
				return undefined;
			}
	
			// Simulated bind
			args = slice.call( arguments, 2 );
			proxy = function() {
				return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
			};
	
			// Set the guid of unique handler to the same of original handler, so it can be removed
			proxy.guid = fn.guid = fn.guid || jQuery.guid++;
	
			return proxy;
		},
	
		now: Date.now,
	
		// jQuery.support is not used in Core but other projects attach their
		// properties to it so it needs to exist.
		support: support
	} );
	
	if ( typeof Symbol === "function" ) {
		jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
	}
	
	// Populate the class2type map
	jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
	function( i, name ) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	} );
	
	function isArrayLike( obj ) {
	
		// Support: real iOS 8.2 only (not reproducible in simulator)
		// `in` check used to prevent JIT error (gh-2145)
		// hasOwn isn't used here due to false negatives
		// regarding Nodelist length in IE
		var length = !!obj && "length" in obj && obj.length,
			type = jQuery.type( obj );
	
		if ( type === "function" || jQuery.isWindow( obj ) ) {
			return false;
		}
	
		return type === "array" || length === 0 ||
			typeof length === "number" && length > 0 && ( length - 1 ) in obj;
	}
	var Sizzle =
	/*!
	 * Sizzle CSS Selector Engine v2.3.3
	 * https://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-08-08
	 */
	(function( window ) {
	
	var i,
		support,
		Expr,
		getText,
		isXML,
		tokenize,
		compile,
		select,
		outermostContext,
		sortInput,
		hasDuplicate,
	
		// Local document vars
		setDocument,
		document,
		docElem,
		documentIsHTML,
		rbuggyQSA,
		rbuggyMatches,
		matches,
		contains,
	
		// Instance-specific data
		expando = "sizzle" + 1 * new Date(),
		preferredDoc = window.document,
		dirruns = 0,
		done = 0,
		classCache = createCache(),
		tokenCache = createCache(),
		compilerCache = createCache(),
		sortOrder = function( a, b ) {
			if ( a === b ) {
				hasDuplicate = true;
			}
			return 0;
		},
	
		// Instance methods
		hasOwn = ({}).hasOwnProperty,
		arr = [],
		pop = arr.pop,
		push_native = arr.push,
		push = arr.push,
		slice = arr.slice,
		// Use a stripped-down indexOf as it's faster than native
		// https://jsperf.com/thor-indexof-vs-for/5
		indexOf = function( list, elem ) {
			var i = 0,
				len = list.length;
			for ( ; i < len; i++ ) {
				if ( list[i] === elem ) {
					return i;
				}
			}
			return -1;
		},
	
		booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
	
		// Regular expressions
	
		// http://www.w3.org/TR/css3-selectors/#whitespace
		whitespace = "[\\x20\\t\\r\\n\\f]",
	
		// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
		identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
	
		// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
		attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
			// Operator (capture 2)
			"*([*^$|!~]?=)" + whitespace +
			// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
			"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
			"*\\]",
	
		pseudos = ":(" + identifier + ")(?:\\((" +
			// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
			// 1. quoted (capture 3; capture 4 or capture 5)
			"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
			// 2. simple (capture 6)
			"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
			// 3. anything else (capture 2)
			".*" +
			")\\)|)",
	
		// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
		rwhitespace = new RegExp( whitespace + "+", "g" ),
		rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),
	
		rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
		rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),
	
		rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),
	
		rpseudo = new RegExp( pseudos ),
		ridentifier = new RegExp( "^" + identifier + "$" ),
	
		matchExpr = {
			"ID": new RegExp( "^#(" + identifier + ")" ),
			"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
			"TAG": new RegExp( "^(" + identifier + "|[*])" ),
			"ATTR": new RegExp( "^" + attributes ),
			"PSEUDO": new RegExp( "^" + pseudos ),
			"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
				"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
				"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
			"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
			// For use in libraries implementing .is()
			// We use this for POS matching in `select`
			"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
				whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
		},
	
		rinputs = /^(?:input|select|textarea|button)$/i,
		rheader = /^h\d$/i,
	
		rnative = /^[^{]+\{\s*\[native \w/,
	
		// Easily-parseable/retrievable ID or TAG or CLASS selectors
		rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
	
		rsibling = /[+~]/,
	
		// CSS escapes
		// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
		runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
		funescape = function( _, escaped, escapedWhitespace ) {
			var high = "0x" + escaped - 0x10000;
			// NaN means non-codepoint
			// Support: Firefox<24
			// Workaround erroneous numeric interpretation of +"0x"
			return high !== high || escapedWhitespace ?
				escaped :
				high < 0 ?
					// BMP codepoint
					String.fromCharCode( high + 0x10000 ) :
					// Supplemental Plane codepoint (surrogate pair)
					String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
		},
	
		// CSS string/identifier serialization
		// https://drafts.csswg.org/cssom/#common-serializing-idioms
		rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
		fcssescape = function( ch, asCodePoint ) {
			if ( asCodePoint ) {
	
				// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
				if ( ch === "\0" ) {
					return "\uFFFD";
				}
	
				// Control characters and (dependent upon position) numbers get escaped as code points
				return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
			}
	
			// Other potentially-special ASCII characters get backslash-escaped
			return "\\" + ch;
		},
	
		// Used for iframes
		// See setDocument()
		// Removing the function wrapper causes a "Permission Denied"
		// error in IE
		unloadHandler = function() {
			setDocument();
		},
	
		disabledAncestor = addCombinator(
			function( elem ) {
				return elem.disabled === true && ("form" in elem || "label" in elem);
			},
			{ dir: "parentNode", next: "legend" }
		);
	
	// Optimize for push.apply( _, NodeList )
	try {
		push.apply(
			(arr = slice.call( preferredDoc.childNodes )),
			preferredDoc.childNodes
		);
		// Support: Android<4.0
		// Detect silently failing push.apply
		arr[ preferredDoc.childNodes.length ].nodeType;
	} catch ( e ) {
		push = { apply: arr.length ?
	
			// Leverage slice if possible
			function( target, els ) {
				push_native.apply( target, slice.call(els) );
			} :
	
			// Support: IE<9
			// Otherwise append directly
			function( target, els ) {
				var j = target.length,
					i = 0;
				// Can't trust NodeList.length
				while ( (target[j++] = els[i++]) ) {}
				target.length = j - 1;
			}
		};
	}
	
	function Sizzle( selector, context, results, seed ) {
		var m, i, elem, nid, match, groups, newSelector,
			newContext = context && context.ownerDocument,
	
			// nodeType defaults to 9, since context defaults to document
			nodeType = context ? context.nodeType : 9;
	
		results = results || [];
	
		// Return early from calls with invalid selector or context
		if ( typeof selector !== "string" || !selector ||
			nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {
	
			return results;
		}
	
		// Try to shortcut find operations (as opposed to filters) in HTML documents
		if ( !seed ) {
	
			if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
				setDocument( context );
			}
			context = context || document;
	
			if ( documentIsHTML ) {
	
				// If the selector is sufficiently simple, try using a "get*By*" DOM method
				// (excepting DocumentFragment context, where the methods don't exist)
				if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {
	
					// ID selector
					if ( (m = match[1]) ) {
	
						// Document context
						if ( nodeType === 9 ) {
							if ( (elem = context.getElementById( m )) ) {
	
								// Support: IE, Opera, Webkit
								// TODO: identify versions
								// getElementById can match elements by name instead of ID
								if ( elem.id === m ) {
									results.push( elem );
									return results;
								}
							} else {
								return results;
							}
	
						// Element context
						} else {
	
							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( newContext && (elem = newContext.getElementById( m )) &&
								contains( context, elem ) &&
								elem.id === m ) {
	
								results.push( elem );
								return results;
							}
						}
	
					// Type selector
					} else if ( match[2] ) {
						push.apply( results, context.getElementsByTagName( selector ) );
						return results;
	
					// Class selector
					} else if ( (m = match[3]) && support.getElementsByClassName &&
						context.getElementsByClassName ) {
	
						push.apply( results, context.getElementsByClassName( m ) );
						return results;
					}
				}
	
				// Take advantage of querySelectorAll
				if ( support.qsa &&
					!compilerCache[ selector + " " ] &&
					(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {
	
					if ( nodeType !== 1 ) {
						newContext = context;
						newSelector = selector;
	
					// qSA looks outside Element context, which is not what we want
					// Thanks to Andrew Dupont for this workaround technique
					// Support: IE <=8
					// Exclude object elements
					} else if ( context.nodeName.toLowerCase() !== "object" ) {
	
						// Capture the context ID, setting it first if necessary
						if ( (nid = context.getAttribute( "id" )) ) {
							nid = nid.replace( rcssescape, fcssescape );
						} else {
							context.setAttribute( "id", (nid = expando) );
						}
	
						// Prefix every selector in the list
						groups = tokenize( selector );
						i = groups.length;
						while ( i-- ) {
							groups[i] = "#" + nid + " " + toSelector( groups[i] );
						}
						newSelector = groups.join( "," );
	
						// Expand context for sibling selectors
						newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
							context;
					}
	
					if ( newSelector ) {
						try {
							push.apply( results,
								newContext.querySelectorAll( newSelector )
							);
							return results;
						} catch ( qsaError ) {
						} finally {
							if ( nid === expando ) {
								context.removeAttribute( "id" );
							}
						}
					}
				}
			}
		}
	
		// All others
		return select( selector.replace( rtrim, "$1" ), context, results, seed );
	}
	
	/**
	 * Create key-value caches of limited size
	 * @returns {function(string, object)} Returns the Object data after storing it on itself with
	 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	 *	deleting the oldest entry
	 */
	function createCache() {
		var keys = [];
	
		function cache( key, value ) {
			// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
			if ( keys.push( key + " " ) > Expr.cacheLength ) {
				// Only keep the most recent entries
				delete cache[ keys.shift() ];
			}
			return (cache[ key + " " ] = value);
		}
		return cache;
	}
	
	/**
	 * Mark a function for special use by Sizzle
	 * @param {Function} fn The function to mark
	 */
	function markFunction( fn ) {
		fn[ expando ] = true;
		return fn;
	}
	
	/**
	 * Support testing using an element
	 * @param {Function} fn Passed the created element and returns a boolean result
	 */
	function assert( fn ) {
		var el = document.createElement("fieldset");
	
		try {
			return !!fn( el );
		} catch (e) {
			return false;
		} finally {
			// Remove from its parent by default
			if ( el.parentNode ) {
				el.parentNode.removeChild( el );
			}
			// release memory in IE
			el = null;
		}
	}
	
	/**
	 * Adds the same handler for all of the specified attrs
	 * @param {String} attrs Pipe-separated list of attributes
	 * @param {Function} handler The method that will be applied
	 */
	function addHandle( attrs, handler ) {
		var arr = attrs.split("|"),
			i = arr.length;
	
		while ( i-- ) {
			Expr.attrHandle[ arr[i] ] = handler;
		}
	}
	
	/**
	 * Checks document order of two siblings
	 * @param {Element} a
	 * @param {Element} b
	 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
	 */
	function siblingCheck( a, b ) {
		var cur = b && a,
			diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
				a.sourceIndex - b.sourceIndex;
	
		// Use IE sourceIndex if available on both nodes
		if ( diff ) {
			return diff;
		}
	
		// Check if b follows a
		if ( cur ) {
			while ( (cur = cur.nextSibling) ) {
				if ( cur === b ) {
					return -1;
				}
			}
		}
	
		return a ? 1 : -1;
	}
	
	/**
	 * Returns a function to use in pseudos for input types
	 * @param {String} type
	 */
	function createInputPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === type;
		};
	}
	
	/**
	 * Returns a function to use in pseudos for buttons
	 * @param {String} type
	 */
	function createButtonPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return (name === "input" || name === "button") && elem.type === type;
		};
	}
	
	/**
	 * Returns a function to use in pseudos for :enabled/:disabled
	 * @param {Boolean} disabled true for :disabled; false for :enabled
	 */
	function createDisabledPseudo( disabled ) {
	
		// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
		return function( elem ) {
	
			// Only certain elements can match :enabled or :disabled
			// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
			// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
			if ( "form" in elem ) {
	
				// Check for inherited disabledness on relevant non-disabled elements:
				// * listed form-associated elements in a disabled fieldset
				//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
				//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
				// * option elements in a disabled optgroup
				//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
				// All such elements have a "form" property.
				if ( elem.parentNode && elem.disabled === false ) {
	
					// Option elements defer to a parent optgroup if present
					if ( "label" in elem ) {
						if ( "label" in elem.parentNode ) {
							return elem.parentNode.disabled === disabled;
						} else {
							return elem.disabled === disabled;
						}
					}
	
					// Support: IE 6 - 11
					// Use the isDisabled shortcut property to check for disabled fieldset ancestors
					return elem.isDisabled === disabled ||
	
						// Where there is no isDisabled, check manually
						/* jshint -W018 */
						elem.isDisabled !== !disabled &&
							disabledAncestor( elem ) === disabled;
				}
	
				return elem.disabled === disabled;
	
			// Try to winnow out elements that can't be disabled before trusting the disabled property.
			// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
			// even exist on them, let alone have a boolean value.
			} else if ( "label" in elem ) {
				return elem.disabled === disabled;
			}
	
			// Remaining elements are neither :enabled nor :disabled
			return false;
		};
	}
	
	/**
	 * Returns a function to use in pseudos for positionals
	 * @param {Function} fn
	 */
	function createPositionalPseudo( fn ) {
		return markFunction(function( argument ) {
			argument = +argument;
			return markFunction(function( seed, matches ) {
				var j,
					matchIndexes = fn( [], seed.length, argument ),
					i = matchIndexes.length;
	
				// Match elements found at the specified indexes
				while ( i-- ) {
					if ( seed[ (j = matchIndexes[i]) ] ) {
						seed[j] = !(matches[j] = seed[j]);
					}
				}
			});
		});
	}
	
	/**
	 * Checks a node for validity as a Sizzle context
	 * @param {Element|Object=} context
	 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
	 */
	function testContext( context ) {
		return context && typeof context.getElementsByTagName !== "undefined" && context;
	}
	
	// Expose support vars for convenience
	support = Sizzle.support = {};
	
	/**
	 * Detects XML nodes
	 * @param {Element|Object} elem An element or a document
	 * @returns {Boolean} True iff elem is a non-HTML XML node
	 */
	isXML = Sizzle.isXML = function( elem ) {
		// documentElement is verified for cases where it doesn't yet exist
		// (such as loading iframes in IE - #4833)
		var documentElement = elem && (elem.ownerDocument || elem).documentElement;
		return documentElement ? documentElement.nodeName !== "HTML" : false;
	};
	
	/**
	 * Sets document-related variables once based on the current document
	 * @param {Element|Object} [doc] An element or document object to use to set the document
	 * @returns {Object} Returns the current document
	 */
	setDocument = Sizzle.setDocument = function( node ) {
		var hasCompare, subWindow,
			doc = node ? node.ownerDocument || node : preferredDoc;
	
		// Return early if doc is invalid or already selected
		if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
			return document;
		}
	
		// Update global variables
		document = doc;
		docElem = document.documentElement;
		documentIsHTML = !isXML( document );
	
		// Support: IE 9-11, Edge
		// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
		if ( preferredDoc !== document &&
			(subWindow = document.defaultView) && subWindow.top !== subWindow ) {
	
			// Support: IE 11, Edge
			if ( subWindow.addEventListener ) {
				subWindow.addEventListener( "unload", unloadHandler, false );
	
			// Support: IE 9 - 10 only
			} else if ( subWindow.attachEvent ) {
				subWindow.attachEvent( "onunload", unloadHandler );
			}
		}
	
		/* Attributes
		---------------------------------------------------------------------- */
	
		// Support: IE<8
		// Verify that getAttribute really returns attributes and not properties
		// (excepting IE8 booleans)
		support.attributes = assert(function( el ) {
			el.className = "i";
			return !el.getAttribute("className");
		});
	
		/* getElement(s)By*
		---------------------------------------------------------------------- */
	
		// Check if getElementsByTagName("*") returns only elements
		support.getElementsByTagName = assert(function( el ) {
			el.appendChild( document.createComment("") );
			return !el.getElementsByTagName("*").length;
		});
	
		// Support: IE<9
		support.getElementsByClassName = rnative.test( document.getElementsByClassName );
	
		// Support: IE<10
		// Check if getElementById returns elements by name
		// The broken getElementById methods don't pick up programmatically-set names,
		// so use a roundabout getElementsByName test
		support.getById = assert(function( el ) {
			docElem.appendChild( el ).id = expando;
			return !document.getElementsByName || !document.getElementsByName( expando ).length;
		});
	
		// ID filter and find
		if ( support.getById ) {
			Expr.filter["ID"] = function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					return elem.getAttribute("id") === attrId;
				};
			};
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var elem = context.getElementById( id );
					return elem ? [ elem ] : [];
				}
			};
		} else {
			Expr.filter["ID"] =  function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					var node = typeof elem.getAttributeNode !== "undefined" &&
						elem.getAttributeNode("id");
					return node && node.value === attrId;
				};
			};
	
			// Support: IE 6 - 7 only
			// getElementById is not reliable as a find shortcut
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var node, i, elems,
						elem = context.getElementById( id );
	
					if ( elem ) {
	
						// Verify the id attribute
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
	
						// Fall back on getElementsByName
						elems = context.getElementsByName( id );
						i = 0;
						while ( (elem = elems[i++]) ) {
							node = elem.getAttributeNode("id");
							if ( node && node.value === id ) {
								return [ elem ];
							}
						}
					}
	
					return [];
				}
			};
		}
	
		// Tag
		Expr.find["TAG"] = support.getElementsByTagName ?
			function( tag, context ) {
				if ( typeof context.getElementsByTagName !== "undefined" ) {
					return context.getElementsByTagName( tag );
	
				// DocumentFragment nodes don't have gEBTN
				} else if ( support.qsa ) {
					return context.querySelectorAll( tag );
				}
			} :
	
			function( tag, context ) {
				var elem,
					tmp = [],
					i = 0,
					// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
					results = context.getElementsByTagName( tag );
	
				// Filter out possible comments
				if ( tag === "*" ) {
					while ( (elem = results[i++]) ) {
						if ( elem.nodeType === 1 ) {
							tmp.push( elem );
						}
					}
	
					return tmp;
				}
				return results;
			};
	
		// Class
		Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
			if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
				return context.getElementsByClassName( className );
			}
		};
	
		/* QSA/matchesSelector
		---------------------------------------------------------------------- */
	
		// QSA and matchesSelector support
	
		// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
		rbuggyMatches = [];
	
		// qSa(:focus) reports false when true (Chrome 21)
		// We allow this because of a bug in IE8/9 that throws an error
		// whenever `document.activeElement` is accessed on an iframe
		// So, we allow :focus to pass through QSA all the time to avoid the IE error
		// See https://bugs.jquery.com/ticket/13378
		rbuggyQSA = [];
	
		if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
			// Build QSA regex
			// Regex strategy adopted from Diego Perini
			assert(function( el ) {
				// Select is set to empty string on purpose
				// This is to test IE's treatment of not explicitly
				// setting a boolean content attribute,
				// since its presence should be enough
				// https://bugs.jquery.com/ticket/12359
				docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
					"<select id='" + expando + "-\r\\' msallowcapture=''>" +
					"<option selected=''></option></select>";
	
				// Support: IE8, Opera 11-12.16
				// Nothing should be selected when empty strings follow ^= or $= or *=
				// The test attribute must be unknown in Opera but "safe" for WinRT
				// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
				if ( el.querySelectorAll("[msallowcapture^='']").length ) {
					rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
				}
	
				// Support: IE8
				// Boolean attributes and "value" are not treated correctly
				if ( !el.querySelectorAll("[selected]").length ) {
					rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
				}
	
				// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
				if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
					rbuggyQSA.push("~=");
				}
	
				// Webkit/Opera - :checked should return selected option elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				// IE8 throws error here and will not see later tests
				if ( !el.querySelectorAll(":checked").length ) {
					rbuggyQSA.push(":checked");
				}
	
				// Support: Safari 8+, iOS 8+
				// https://bugs.webkit.org/show_bug.cgi?id=136851
				// In-page `selector#id sibling-combinator selector` fails
				if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
					rbuggyQSA.push(".#.+[+~]");
				}
			});
	
			assert(function( el ) {
				el.innerHTML = "<a href='' disabled='disabled'></a>" +
					"<select disabled='disabled'><option/></select>";
	
				// Support: Windows 8 Native Apps
				// The type and name attributes are restricted during .innerHTML assignment
				var input = document.createElement("input");
				input.setAttribute( "type", "hidden" );
				el.appendChild( input ).setAttribute( "name", "D" );
	
				// Support: IE8
				// Enforce case-sensitivity of name attribute
				if ( el.querySelectorAll("[name=d]").length ) {
					rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
				}
	
				// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
				// IE8 throws error here and will not see later tests
				if ( el.querySelectorAll(":enabled").length !== 2 ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}
	
				// Support: IE9-11+
				// IE's :disabled selector does not pick up the children of disabled fieldsets
				docElem.appendChild( el ).disabled = true;
				if ( el.querySelectorAll(":disabled").length !== 2 ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}
	
				// Opera 10-11 does not throw on post-comma invalid pseudos
				el.querySelectorAll("*,:x");
				rbuggyQSA.push(",.*:");
			});
		}
	
		if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
			docElem.webkitMatchesSelector ||
			docElem.mozMatchesSelector ||
			docElem.oMatchesSelector ||
			docElem.msMatchesSelector) )) ) {
	
			assert(function( el ) {
				// Check to see if it's possible to do matchesSelector
				// on a disconnected node (IE 9)
				support.disconnectedMatch = matches.call( el, "*" );
	
				// This should fail with an exception
				// Gecko does not error, returns false instead
				matches.call( el, "[s!='']:x" );
				rbuggyMatches.push( "!=", pseudos );
			});
		}
	
		rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
		rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );
	
		/* Contains
		---------------------------------------------------------------------- */
		hasCompare = rnative.test( docElem.compareDocumentPosition );
	
		// Element contains another
		// Purposefully self-exclusive
		// As in, an element does not contain itself
		contains = hasCompare || rnative.test( docElem.contains ) ?
			function( a, b ) {
				var adown = a.nodeType === 9 ? a.documentElement : a,
					bup = b && b.parentNode;
				return a === bup || !!( bup && bup.nodeType === 1 && (
					adown.contains ?
						adown.contains( bup ) :
						a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
				));
			} :
			function( a, b ) {
				if ( b ) {
					while ( (b = b.parentNode) ) {
						if ( b === a ) {
							return true;
						}
					}
				}
				return false;
			};
	
		/* Sorting
		---------------------------------------------------------------------- */
	
		// Document order sorting
		sortOrder = hasCompare ?
		function( a, b ) {
	
			// Flag for duplicate removal
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}
	
			// Sort on method existence if only one input has compareDocumentPosition
			var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
			if ( compare ) {
				return compare;
			}
	
			// Calculate position if both inputs belong to the same document
			compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
				a.compareDocumentPosition( b ) :
	
				// Otherwise we know they are disconnected
				1;
	
			// Disconnected nodes
			if ( compare & 1 ||
				(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {
	
				// Choose the first element that is related to our preferred document
				if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
					return -1;
				}
				if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
					return 1;
				}
	
				// Maintain original order
				return sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;
			}
	
			return compare & 4 ? -1 : 1;
		} :
		function( a, b ) {
			// Exit early if the nodes are identical
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}
	
			var cur,
				i = 0,
				aup = a.parentNode,
				bup = b.parentNode,
				ap = [ a ],
				bp = [ b ];
	
			// Parentless nodes are either documents or disconnected
			if ( !aup || !bup ) {
				return a === document ? -1 :
					b === document ? 1 :
					aup ? -1 :
					bup ? 1 :
					sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;
	
			// If the nodes are siblings, we can do a quick check
			} else if ( aup === bup ) {
				return siblingCheck( a, b );
			}
	
			// Otherwise we need full lists of their ancestors for comparison
			cur = a;
			while ( (cur = cur.parentNode) ) {
				ap.unshift( cur );
			}
			cur = b;
			while ( (cur = cur.parentNode) ) {
				bp.unshift( cur );
			}
	
			// Walk down the tree looking for a discrepancy
			while ( ap[i] === bp[i] ) {
				i++;
			}
	
			return i ?
				// Do a sibling check if the nodes have a common ancestor
				siblingCheck( ap[i], bp[i] ) :
	
				// Otherwise nodes in our document sort first
				ap[i] === preferredDoc ? -1 :
				bp[i] === preferredDoc ? 1 :
				0;
		};
	
		return document;
	};
	
	Sizzle.matches = function( expr, elements ) {
		return Sizzle( expr, null, null, elements );
	};
	
	Sizzle.matchesSelector = function( elem, expr ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}
	
		// Make sure that attribute selectors are quoted
		expr = expr.replace( rattributeQuotes, "='$1']" );
	
		if ( support.matchesSelector && documentIsHTML &&
			!compilerCache[ expr + " " ] &&
			( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
			( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {
	
			try {
				var ret = matches.call( elem, expr );
	
				// IE 9's matchesSelector returns false on disconnected nodes
				if ( ret || support.disconnectedMatch ||
						// As well, disconnected nodes are said to be in a document
						// fragment in IE 9
						elem.document && elem.document.nodeType !== 11 ) {
					return ret;
				}
			} catch (e) {}
		}
	
		return Sizzle( expr, document, null, [ elem ] ).length > 0;
	};
	
	Sizzle.contains = function( context, elem ) {
		// Set document vars if needed
		if ( ( context.ownerDocument || context ) !== document ) {
			setDocument( context );
		}
		return contains( context, elem );
	};
	
	Sizzle.attr = function( elem, name ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}
	
		var fn = Expr.attrHandle[ name.toLowerCase() ],
			// Don't get fooled by Object.prototype properties (jQuery #13807)
			val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
				fn( elem, name, !documentIsHTML ) :
				undefined;
	
		return val !== undefined ?
			val :
			support.attributes || !documentIsHTML ?
				elem.getAttribute( name ) :
				(val = elem.getAttributeNode(name)) && val.specified ?
					val.value :
					null;
	};
	
	Sizzle.escape = function( sel ) {
		return (sel + "").replace( rcssescape, fcssescape );
	};
	
	Sizzle.error = function( msg ) {
		throw new Error( "Syntax error, unrecognized expression: " + msg );
	};
	
	/**
	 * Document sorting and removing duplicates
	 * @param {ArrayLike} results
	 */
	Sizzle.uniqueSort = function( results ) {
		var elem,
			duplicates = [],
			j = 0,
			i = 0;
	
		// Unless we *know* we can detect duplicates, assume their presence
		hasDuplicate = !support.detectDuplicates;
		sortInput = !support.sortStable && results.slice( 0 );
		results.sort( sortOrder );
	
		if ( hasDuplicate ) {
			while ( (elem = results[i++]) ) {
				if ( elem === results[ i ] ) {
					j = duplicates.push( i );
				}
			}
			while ( j-- ) {
				results.splice( duplicates[ j ], 1 );
			}
		}
	
		// Clear input after sorting to release objects
		// See https://github.com/jquery/sizzle/pull/225
		sortInput = null;
	
		return results;
	};
	
	/**
	 * Utility function for retrieving the text value of an array of DOM nodes
	 * @param {Array|Element} elem
	 */
	getText = Sizzle.getText = function( elem ) {
		var node,
			ret = "",
			i = 0,
			nodeType = elem.nodeType;
	
		if ( !nodeType ) {
			// If no nodeType, this is expected to be an array
			while ( (node = elem[i++]) ) {
				// Do not traverse comment nodes
				ret += getText( node );
			}
		} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
			// Use textContent for elements
			// innerText usage removed for consistency of new lines (jQuery #11153)
			if ( typeof elem.textContent === "string" ) {
				return elem.textContent;
			} else {
				// Traverse its children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					ret += getText( elem );
				}
			}
		} else if ( nodeType === 3 || nodeType === 4 ) {
			return elem.nodeValue;
		}
		// Do not include comment or processing instruction nodes
	
		return ret;
	};
	
	Expr = Sizzle.selectors = {
	
		// Can be adjusted by the user
		cacheLength: 50,
	
		createPseudo: markFunction,
	
		match: matchExpr,
	
		attrHandle: {},
	
		find: {},
	
		relative: {
			">": { dir: "parentNode", first: true },
			" ": { dir: "parentNode" },
			"+": { dir: "previousSibling", first: true },
			"~": { dir: "previousSibling" }
		},
	
		preFilter: {
			"ATTR": function( match ) {
				match[1] = match[1].replace( runescape, funescape );
	
				// Move the given value to match[3] whether quoted or unquoted
				match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );
	
				if ( match[2] === "~=" ) {
					match[3] = " " + match[3] + " ";
				}
	
				return match.slice( 0, 4 );
			},
	
			"CHILD": function( match ) {
				/* matches from matchExpr["CHILD"]
					1 type (only|nth|...)
					2 what (child|of-type)
					3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
					4 xn-component of xn+y argument ([+-]?\d*n|)
					5 sign of xn-component
					6 x of xn-component
					7 sign of y-component
					8 y of y-component
				*/
				match[1] = match[1].toLowerCase();
	
				if ( match[1].slice( 0, 3 ) === "nth" ) {
					// nth-* requires argument
					if ( !match[3] ) {
						Sizzle.error( match[0] );
					}
	
					// numeric x and y parameters for Expr.filter.CHILD
					// remember that false/true cast respectively to 0/1
					match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
					match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );
	
				// other types prohibit arguments
				} else if ( match[3] ) {
					Sizzle.error( match[0] );
				}
	
				return match;
			},
	
			"PSEUDO": function( match ) {
				var excess,
					unquoted = !match[6] && match[2];
	
				if ( matchExpr["CHILD"].test( match[0] ) ) {
					return null;
				}
	
				// Accept quoted arguments as-is
				if ( match[3] ) {
					match[2] = match[4] || match[5] || "";
	
				// Strip excess characters from unquoted arguments
				} else if ( unquoted && rpseudo.test( unquoted ) &&
					// Get excess from tokenize (recursively)
					(excess = tokenize( unquoted, true )) &&
					// advance to the next closing parenthesis
					(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {
	
					// excess is a negative index
					match[0] = match[0].slice( 0, excess );
					match[2] = unquoted.slice( 0, excess );
				}
	
				// Return only captures needed by the pseudo filter method (type and argument)
				return match.slice( 0, 3 );
			}
		},
	
		filter: {
	
			"TAG": function( nodeNameSelector ) {
				var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
				return nodeNameSelector === "*" ?
					function() { return true; } :
					function( elem ) {
						return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
					};
			},
	
			"CLASS": function( className ) {
				var pattern = classCache[ className + " " ];
	
				return pattern ||
					(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
					classCache( className, function( elem ) {
						return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
					});
			},
	
			"ATTR": function( name, operator, check ) {
				return function( elem ) {
					var result = Sizzle.attr( elem, name );
	
					if ( result == null ) {
						return operator === "!=";
					}
					if ( !operator ) {
						return true;
					}
	
					result += "";
	
					return operator === "=" ? result === check :
						operator === "!=" ? result !== check :
						operator === "^=" ? check && result.indexOf( check ) === 0 :
						operator === "*=" ? check && result.indexOf( check ) > -1 :
						operator === "$=" ? check && result.slice( -check.length ) === check :
						operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
						operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
						false;
				};
			},
	
			"CHILD": function( type, what, argument, first, last ) {
				var simple = type.slice( 0, 3 ) !== "nth",
					forward = type.slice( -4 ) !== "last",
					ofType = what === "of-type";
	
				return first === 1 && last === 0 ?
	
					// Shortcut for :nth-*(n)
					function( elem ) {
						return !!elem.parentNode;
					} :
	
					function( elem, context, xml ) {
						var cache, uniqueCache, outerCache, node, nodeIndex, start,
							dir = simple !== forward ? "nextSibling" : "previousSibling",
							parent = elem.parentNode,
							name = ofType && elem.nodeName.toLowerCase(),
							useCache = !xml && !ofType,
							diff = false;
	
						if ( parent ) {
	
							// :(first|last|only)-(child|of-type)
							if ( simple ) {
								while ( dir ) {
									node = elem;
									while ( (node = node[ dir ]) ) {
										if ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) {
	
											return false;
										}
									}
									// Reverse direction for :only-* (if we haven't yet done so)
									start = dir = type === "only" && !start && "nextSibling";
								}
								return true;
							}
	
							start = [ forward ? parent.firstChild : parent.lastChild ];
	
							// non-xml :nth-child(...) stores cache data on `parent`
							if ( forward && useCache ) {
	
								// Seek `elem` from a previously-cached index
	
								// ...in a gzip-friendly way
								node = parent;
								outerCache = node[ expando ] || (node[ expando ] = {});
	
								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});
	
								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex && cache[ 2 ];
								node = nodeIndex && parent.childNodes[ nodeIndex ];
	
								while ( (node = ++nodeIndex && node && node[ dir ] ||
	
									// Fallback to seeking `elem` from the start
									(diff = nodeIndex = 0) || start.pop()) ) {
	
									// When found, cache indexes on `parent` and break
									if ( node.nodeType === 1 && ++diff && node === elem ) {
										uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
										break;
									}
								}
	
							} else {
								// Use previously-cached element index if available
								if ( useCache ) {
									// ...in a gzip-friendly way
									node = elem;
									outerCache = node[ expando ] || (node[ expando ] = {});
	
									// Support: IE <9 only
									// Defend against cloned attroperties (jQuery gh-1709)
									uniqueCache = outerCache[ node.uniqueID ] ||
										(outerCache[ node.uniqueID ] = {});
	
									cache = uniqueCache[ type ] || [];
									nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
									diff = nodeIndex;
								}
	
								// xml :nth-child(...)
								// or :nth-last-child(...) or :nth(-last)?-of-type(...)
								if ( diff === false ) {
									// Use the same loop as above to seek `elem` from the start
									while ( (node = ++nodeIndex && node && node[ dir ] ||
										(diff = nodeIndex = 0) || start.pop()) ) {
	
										if ( ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) &&
											++diff ) {
	
											// Cache the index of each encountered element
											if ( useCache ) {
												outerCache = node[ expando ] || (node[ expando ] = {});
	
												// Support: IE <9 only
												// Defend against cloned attroperties (jQuery gh-1709)
												uniqueCache = outerCache[ node.uniqueID ] ||
													(outerCache[ node.uniqueID ] = {});
	
												uniqueCache[ type ] = [ dirruns, diff ];
											}
	
											if ( node === elem ) {
												break;
											}
										}
									}
								}
							}
	
							// Incorporate the offset, then check against cycle size
							diff -= last;
							return diff === first || ( diff % first === 0 && diff / first >= 0 );
						}
					};
			},
	
			"PSEUDO": function( pseudo, argument ) {
				// pseudo-class names are case-insensitive
				// http://www.w3.org/TR/selectors/#pseudo-classes
				// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
				// Remember that setFilters inherits from pseudos
				var args,
					fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
						Sizzle.error( "unsupported pseudo: " + pseudo );
	
				// The user may use createPseudo to indicate that
				// arguments are needed to create the filter function
				// just as Sizzle does
				if ( fn[ expando ] ) {
					return fn( argument );
				}
	
				// But maintain support for old signatures
				if ( fn.length > 1 ) {
					args = [ pseudo, pseudo, "", argument ];
					return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
						markFunction(function( seed, matches ) {
							var idx,
								matched = fn( seed, argument ),
								i = matched.length;
							while ( i-- ) {
								idx = indexOf( seed, matched[i] );
								seed[ idx ] = !( matches[ idx ] = matched[i] );
							}
						}) :
						function( elem ) {
							return fn( elem, 0, args );
						};
				}
	
				return fn;
			}
		},
	
		pseudos: {
			// Potentially complex pseudos
			"not": markFunction(function( selector ) {
				// Trim the selector passed to compile
				// to avoid treating leading and trailing
				// spaces as combinators
				var input = [],
					results = [],
					matcher = compile( selector.replace( rtrim, "$1" ) );
	
				return matcher[ expando ] ?
					markFunction(function( seed, matches, context, xml ) {
						var elem,
							unmatched = matcher( seed, null, xml, [] ),
							i = seed.length;
	
						// Match elements unmatched by `matcher`
						while ( i-- ) {
							if ( (elem = unmatched[i]) ) {
								seed[i] = !(matches[i] = elem);
							}
						}
					}) :
					function( elem, context, xml ) {
						input[0] = elem;
						matcher( input, null, xml, results );
						// Don't keep the element (issue #299)
						input[0] = null;
						return !results.pop();
					};
			}),
	
			"has": markFunction(function( selector ) {
				return function( elem ) {
					return Sizzle( selector, elem ).length > 0;
				};
			}),
	
			"contains": markFunction(function( text ) {
				text = text.replace( runescape, funescape );
				return function( elem ) {
					return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
				};
			}),
	
			// "Whether an element is represented by a :lang() selector
			// is based solely on the element's language value
			// being equal to the identifier C,
			// or beginning with the identifier C immediately followed by "-".
			// The matching of C against the element's language value is performed case-insensitively.
			// The identifier C does not have to be a valid language name."
			// http://www.w3.org/TR/selectors/#lang-pseudo
			"lang": markFunction( function( lang ) {
				// lang value must be a valid identifier
				if ( !ridentifier.test(lang || "") ) {
					Sizzle.error( "unsupported lang: " + lang );
				}
				lang = lang.replace( runescape, funescape ).toLowerCase();
				return function( elem ) {
					var elemLang;
					do {
						if ( (elemLang = documentIsHTML ?
							elem.lang :
							elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {
	
							elemLang = elemLang.toLowerCase();
							return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
						}
					} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
					return false;
				};
			}),
	
			// Miscellaneous
			"target": function( elem ) {
				var hash = window.location && window.location.hash;
				return hash && hash.slice( 1 ) === elem.id;
			},
	
			"root": function( elem ) {
				return elem === docElem;
			},
	
			"focus": function( elem ) {
				return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
			},
	
			// Boolean properties
			"enabled": createDisabledPseudo( false ),
			"disabled": createDisabledPseudo( true ),
	
			"checked": function( elem ) {
				// In CSS3, :checked should return both checked and selected elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				var nodeName = elem.nodeName.toLowerCase();
				return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
			},
	
			"selected": function( elem ) {
				// Accessing this property makes selected-by-default
				// options in Safari work properly
				if ( elem.parentNode ) {
					elem.parentNode.selectedIndex;
				}
	
				return elem.selected === true;
			},
	
			// Contents
			"empty": function( elem ) {
				// http://www.w3.org/TR/selectors/#empty-pseudo
				// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
				//   but not by others (comment: 8; processing instruction: 7; etc.)
				// nodeType < 6 works because attributes (2) do not appear as children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					if ( elem.nodeType < 6 ) {
						return false;
					}
				}
				return true;
			},
	
			"parent": function( elem ) {
				return !Expr.pseudos["empty"]( elem );
			},
	
			// Element/input types
			"header": function( elem ) {
				return rheader.test( elem.nodeName );
			},
	
			"input": function( elem ) {
				return rinputs.test( elem.nodeName );
			},
	
			"button": function( elem ) {
				var name = elem.nodeName.toLowerCase();
				return name === "input" && elem.type === "button" || name === "button";
			},
	
			"text": function( elem ) {
				var attr;
				return elem.nodeName.toLowerCase() === "input" &&
					elem.type === "text" &&
	
					// Support: IE<8
					// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
					( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
			},
	
			// Position-in-collection
			"first": createPositionalPseudo(function() {
				return [ 0 ];
			}),
	
			"last": createPositionalPseudo(function( matchIndexes, length ) {
				return [ length - 1 ];
			}),
	
			"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
				return [ argument < 0 ? argument + length : argument ];
			}),
	
			"even": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 0;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),
	
			"odd": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 1;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),
	
			"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; --i >= 0; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),
	
			"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; ++i < length; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			})
		}
	};
	
	Expr.pseudos["nth"] = Expr.pseudos["eq"];
	
	// Add button/input type pseudos
	for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
		Expr.pseudos[ i ] = createInputPseudo( i );
	}
	for ( i in { submit: true, reset: true } ) {
		Expr.pseudos[ i ] = createButtonPseudo( i );
	}
	
	// Easy API for creating new setFilters
	function setFilters() {}
	setFilters.prototype = Expr.filters = Expr.pseudos;
	Expr.setFilters = new setFilters();
	
	tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
		var matched, match, tokens, type,
			soFar, groups, preFilters,
			cached = tokenCache[ selector + " " ];
	
		if ( cached ) {
			return parseOnly ? 0 : cached.slice( 0 );
		}
	
		soFar = selector;
		groups = [];
		preFilters = Expr.preFilter;
	
		while ( soFar ) {
	
			// Comma and first run
			if ( !matched || (match = rcomma.exec( soFar )) ) {
				if ( match ) {
					// Don't consume trailing commas as valid
					soFar = soFar.slice( match[0].length ) || soFar;
				}
				groups.push( (tokens = []) );
			}
	
			matched = false;
	
			// Combinators
			if ( (match = rcombinators.exec( soFar )) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					// Cast descendant combinators to space
					type: match[0].replace( rtrim, " " )
				});
				soFar = soFar.slice( matched.length );
			}
	
			// Filters
			for ( type in Expr.filter ) {
				if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
					(match = preFilters[ type ]( match ))) ) {
					matched = match.shift();
					tokens.push({
						value: matched,
						type: type,
						matches: match
					});
					soFar = soFar.slice( matched.length );
				}
			}
	
			if ( !matched ) {
				break;
			}
		}
	
		// Return the length of the invalid excess
		// if we're just parsing
		// Otherwise, throw an error or return tokens
		return parseOnly ?
			soFar.length :
			soFar ?
				Sizzle.error( selector ) :
				// Cache the tokens
				tokenCache( selector, groups ).slice( 0 );
	};
	
	function toSelector( tokens ) {
		var i = 0,
			len = tokens.length,
			selector = "";
		for ( ; i < len; i++ ) {
			selector += tokens[i].value;
		}
		return selector;
	}
	
	function addCombinator( matcher, combinator, base ) {
		var dir = combinator.dir,
			skip = combinator.next,
			key = skip || dir,
			checkNonElements = base && key === "parentNode",
			doneName = done++;
	
		return combinator.first ?
			// Check against closest ancestor/preceding element
			function( elem, context, xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						return matcher( elem, context, xml );
					}
				}
				return false;
			} :
	
			// Check against all ancestor/preceding elements
			function( elem, context, xml ) {
				var oldCache, uniqueCache, outerCache,
					newCache = [ dirruns, doneName ];
	
				// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
				if ( xml ) {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							if ( matcher( elem, context, xml ) ) {
								return true;
							}
						}
					}
				} else {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							outerCache = elem[ expando ] || (elem[ expando ] = {});
	
							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});
	
							if ( skip && skip === elem.nodeName.toLowerCase() ) {
								elem = elem[ dir ] || elem;
							} else if ( (oldCache = uniqueCache[ key ]) &&
								oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {
	
								// Assign to newCache so results back-propagate to previous elements
								return (newCache[ 2 ] = oldCache[ 2 ]);
							} else {
								// Reuse newcache so results back-propagate to previous elements
								uniqueCache[ key ] = newCache;
	
								// A match means we're done; a fail means we have to keep checking
								if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
									return true;
								}
							}
						}
					}
				}
				return false;
			};
	}
	
	function elementMatcher( matchers ) {
		return matchers.length > 1 ?
			function( elem, context, xml ) {
				var i = matchers.length;
				while ( i-- ) {
					if ( !matchers[i]( elem, context, xml ) ) {
						return false;
					}
				}
				return true;
			} :
			matchers[0];
	}
	
	function multipleContexts( selector, contexts, results ) {
		var i = 0,
			len = contexts.length;
		for ( ; i < len; i++ ) {
			Sizzle( selector, contexts[i], results );
		}
		return results;
	}
	
	function condense( unmatched, map, filter, context, xml ) {
		var elem,
			newUnmatched = [],
			i = 0,
			len = unmatched.length,
			mapped = map != null;
	
		for ( ; i < len; i++ ) {
			if ( (elem = unmatched[i]) ) {
				if ( !filter || filter( elem, context, xml ) ) {
					newUnmatched.push( elem );
					if ( mapped ) {
						map.push( i );
					}
				}
			}
		}
	
		return newUnmatched;
	}
	
	function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
		if ( postFilter && !postFilter[ expando ] ) {
			postFilter = setMatcher( postFilter );
		}
		if ( postFinder && !postFinder[ expando ] ) {
			postFinder = setMatcher( postFinder, postSelector );
		}
		return markFunction(function( seed, results, context, xml ) {
			var temp, i, elem,
				preMap = [],
				postMap = [],
				preexisting = results.length,
	
				// Get initial elements from seed or context
				elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),
	
				// Prefilter to get matcher input, preserving a map for seed-results synchronization
				matcherIn = preFilter && ( seed || !selector ) ?
					condense( elems, preMap, preFilter, context, xml ) :
					elems,
	
				matcherOut = matcher ?
					// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
					postFinder || ( seed ? preFilter : preexisting || postFilter ) ?
	
						// ...intermediate processing is necessary
						[] :
	
						// ...otherwise use results directly
						results :
					matcherIn;
	
			// Find primary matches
			if ( matcher ) {
				matcher( matcherIn, matcherOut, context, xml );
			}
	
			// Apply postFilter
			if ( postFilter ) {
				temp = condense( matcherOut, postMap );
				postFilter( temp, [], context, xml );
	
				// Un-match failing elements by moving them back to matcherIn
				i = temp.length;
				while ( i-- ) {
					if ( (elem = temp[i]) ) {
						matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
					}
				}
			}
	
			if ( seed ) {
				if ( postFinder || preFilter ) {
					if ( postFinder ) {
						// Get the final matcherOut by condensing this intermediate into postFinder contexts
						temp = [];
						i = matcherOut.length;
						while ( i-- ) {
							if ( (elem = matcherOut[i]) ) {
								// Restore matcherIn since elem is not yet a final match
								temp.push( (matcherIn[i] = elem) );
							}
						}
						postFinder( null, (matcherOut = []), temp, xml );
					}
	
					// Move matched elements from seed to results to keep them synchronized
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) &&
							(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {
	
							seed[temp] = !(results[temp] = elem);
						}
					}
				}
	
			// Add elements to results, through postFinder if defined
			} else {
				matcherOut = condense(
					matcherOut === results ?
						matcherOut.splice( preexisting, matcherOut.length ) :
						matcherOut
				);
				if ( postFinder ) {
					postFinder( null, results, matcherOut, xml );
				} else {
					push.apply( results, matcherOut );
				}
			}
		});
	}
	
	function matcherFromTokens( tokens ) {
		var checkContext, matcher, j,
			len = tokens.length,
			leadingRelative = Expr.relative[ tokens[0].type ],
			implicitRelative = leadingRelative || Expr.relative[" "],
			i = leadingRelative ? 1 : 0,
	
			// The foundational matcher ensures that elements are reachable from top-level context(s)
			matchContext = addCombinator( function( elem ) {
				return elem === checkContext;
			}, implicitRelative, true ),
			matchAnyContext = addCombinator( function( elem ) {
				return indexOf( checkContext, elem ) > -1;
			}, implicitRelative, true ),
			matchers = [ function( elem, context, xml ) {
				var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
					(checkContext = context).nodeType ?
						matchContext( elem, context, xml ) :
						matchAnyContext( elem, context, xml ) );
				// Avoid hanging onto element (issue #299)
				checkContext = null;
				return ret;
			} ];
	
		for ( ; i < len; i++ ) {
			if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
				matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
			} else {
				matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );
	
				// Return special upon seeing a positional matcher
				if ( matcher[ expando ] ) {
					// Find the next relative operator (if any) for proper handling
					j = ++i;
					for ( ; j < len; j++ ) {
						if ( Expr.relative[ tokens[j].type ] ) {
							break;
						}
					}
					return setMatcher(
						i > 1 && elementMatcher( matchers ),
						i > 1 && toSelector(
							// If the preceding token was a descendant combinator, insert an implicit any-element `*`
							tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
						).replace( rtrim, "$1" ),
						matcher,
						i < j && matcherFromTokens( tokens.slice( i, j ) ),
						j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
						j < len && toSelector( tokens )
					);
				}
				matchers.push( matcher );
			}
		}
	
		return elementMatcher( matchers );
	}
	
	function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
		var bySet = setMatchers.length > 0,
			byElement = elementMatchers.length > 0,
			superMatcher = function( seed, context, xml, results, outermost ) {
				var elem, j, matcher,
					matchedCount = 0,
					i = "0",
					unmatched = seed && [],
					setMatched = [],
					contextBackup = outermostContext,
					// We must always have either seed elements or outermost context
					elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
					// Use integer dirruns iff this is the outermost matcher
					dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
					len = elems.length;
	
				if ( outermost ) {
					outermostContext = context === document || context || outermost;
				}
	
				// Add elements passing elementMatchers directly to results
				// Support: IE<9, Safari
				// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
				for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
					if ( byElement && elem ) {
						j = 0;
						if ( !context && elem.ownerDocument !== document ) {
							setDocument( elem );
							xml = !documentIsHTML;
						}
						while ( (matcher = elementMatchers[j++]) ) {
							if ( matcher( elem, context || document, xml) ) {
								results.push( elem );
								break;
							}
						}
						if ( outermost ) {
							dirruns = dirrunsUnique;
						}
					}
	
					// Track unmatched elements for set filters
					if ( bySet ) {
						// They will have gone through all possible matchers
						if ( (elem = !matcher && elem) ) {
							matchedCount--;
						}
	
						// Lengthen the array for every element, matched or not
						if ( seed ) {
							unmatched.push( elem );
						}
					}
				}
	
				// `i` is now the count of elements visited above, and adding it to `matchedCount`
				// makes the latter nonnegative.
				matchedCount += i;
	
				// Apply set filters to unmatched elements
				// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
				// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
				// no element matchers and no seed.
				// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
				// case, which will result in a "00" `matchedCount` that differs from `i` but is also
				// numerically zero.
				if ( bySet && i !== matchedCount ) {
					j = 0;
					while ( (matcher = setMatchers[j++]) ) {
						matcher( unmatched, setMatched, context, xml );
					}
	
					if ( seed ) {
						// Reintegrate element matches to eliminate the need for sorting
						if ( matchedCount > 0 ) {
							while ( i-- ) {
								if ( !(unmatched[i] || setMatched[i]) ) {
									setMatched[i] = pop.call( results );
								}
							}
						}
	
						// Discard index placeholder values to get only actual matches
						setMatched = condense( setMatched );
					}
	
					// Add matches to results
					push.apply( results, setMatched );
	
					// Seedless set matches succeeding multiple successful matchers stipulate sorting
					if ( outermost && !seed && setMatched.length > 0 &&
						( matchedCount + setMatchers.length ) > 1 ) {
	
						Sizzle.uniqueSort( results );
					}
				}
	
				// Override manipulation of globals by nested matchers
				if ( outermost ) {
					dirruns = dirrunsUnique;
					outermostContext = contextBackup;
				}
	
				return unmatched;
			};
	
		return bySet ?
			markFunction( superMatcher ) :
			superMatcher;
	}
	
	compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
		var i,
			setMatchers = [],
			elementMatchers = [],
			cached = compilerCache[ selector + " " ];
	
		if ( !cached ) {
			// Generate a function of recursive functions that can be used to check each element
			if ( !match ) {
				match = tokenize( selector );
			}
			i = match.length;
			while ( i-- ) {
				cached = matcherFromTokens( match[i] );
				if ( cached[ expando ] ) {
					setMatchers.push( cached );
				} else {
					elementMatchers.push( cached );
				}
			}
	
			// Cache the compiled function
			cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );
	
			// Save selector and tokenization
			cached.selector = selector;
		}
		return cached;
	};
	
	/**
	 * A low-level selection function that works with Sizzle's compiled
	 *  selector functions
	 * @param {String|Function} selector A selector or a pre-compiled
	 *  selector function built with Sizzle.compile
	 * @param {Element} context
	 * @param {Array} [results]
	 * @param {Array} [seed] A set of elements to match against
	 */
	select = Sizzle.select = function( selector, context, results, seed ) {
		var i, tokens, token, type, find,
			compiled = typeof selector === "function" && selector,
			match = !seed && tokenize( (selector = compiled.selector || selector) );
	
		results = results || [];
	
		// Try to minimize operations if there is only one selector in the list and no seed
		// (the latter of which guarantees us context)
		if ( match.length === 1 ) {
	
			// Reduce context if the leading compound selector is an ID
			tokens = match[0] = match[0].slice( 0 );
			if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
					context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {
	
				context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
				if ( !context ) {
					return results;
	
				// Precompiled matchers will still verify ancestry, so step up a level
				} else if ( compiled ) {
					context = context.parentNode;
				}
	
				selector = selector.slice( tokens.shift().value.length );
			}
	
			// Fetch a seed set for right-to-left matching
			i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
			while ( i-- ) {
				token = tokens[i];
	
				// Abort if we hit a combinator
				if ( Expr.relative[ (type = token.type) ] ) {
					break;
				}
				if ( (find = Expr.find[ type ]) ) {
					// Search, expanding context for leading sibling combinators
					if ( (seed = find(
						token.matches[0].replace( runescape, funescape ),
						rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
					)) ) {
	
						// If seed is empty or no tokens remain, we can return early
						tokens.splice( i, 1 );
						selector = seed.length && toSelector( tokens );
						if ( !selector ) {
							push.apply( results, seed );
							return results;
						}
	
						break;
					}
				}
			}
		}
	
		// Compile and execute a filtering function if one is not provided
		// Provide `match` to avoid retokenization if we modified the selector above
		( compiled || compile( selector, match ) )(
			seed,
			context,
			!documentIsHTML,
			results,
			!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
		);
		return results;
	};
	
	// One-time assignments
	
	// Sort stability
	support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;
	
	// Support: Chrome 14-35+
	// Always assume duplicates if they aren't passed to the comparison function
	support.detectDuplicates = !!hasDuplicate;
	
	// Initialize against the default document
	setDocument();
	
	// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
	// Detached nodes confoundingly follow *each other*
	support.sortDetached = assert(function( el ) {
		// Should return 1, but returns 4 (following)
		return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
	});
	
	// Support: IE<8
	// Prevent attribute/property "interpolation"
	// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if ( !assert(function( el ) {
		el.innerHTML = "<a href='#'></a>";
		return el.firstChild.getAttribute("href") === "#" ;
	}) ) {
		addHandle( "type|href|height|width", function( elem, name, isXML ) {
			if ( !isXML ) {
				return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
			}
		});
	}
	
	// Support: IE<9
	// Use defaultValue in place of getAttribute("value")
	if ( !support.attributes || !assert(function( el ) {
		el.innerHTML = "<input/>";
		el.firstChild.setAttribute( "value", "" );
		return el.firstChild.getAttribute( "value" ) === "";
	}) ) {
		addHandle( "value", function( elem, name, isXML ) {
			if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
				return elem.defaultValue;
			}
		});
	}
	
	// Support: IE<9
	// Use getAttributeNode to fetch booleans when getAttribute lies
	if ( !assert(function( el ) {
		return el.getAttribute("disabled") == null;
	}) ) {
		addHandle( booleans, function( elem, name, isXML ) {
			var val;
			if ( !isXML ) {
				return elem[ name ] === true ? name.toLowerCase() :
						(val = elem.getAttributeNode( name )) && val.specified ?
						val.value :
					null;
			}
		});
	}
	
	return Sizzle;
	
	})( window );
	
	
	
	jQuery.find = Sizzle;
	jQuery.expr = Sizzle.selectors;
	
	// Deprecated
	jQuery.expr[ ":" ] = jQuery.expr.pseudos;
	jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
	jQuery.text = Sizzle.getText;
	jQuery.isXMLDoc = Sizzle.isXML;
	jQuery.contains = Sizzle.contains;
	jQuery.escapeSelector = Sizzle.escape;
	
	
	
	
	var dir = function( elem, dir, until ) {
		var matched = [],
			truncate = until !== undefined;
	
		while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
			if ( elem.nodeType === 1 ) {
				if ( truncate && jQuery( elem ).is( until ) ) {
					break;
				}
				matched.push( elem );
			}
		}
		return matched;
	};
	
	
	var siblings = function( n, elem ) {
		var matched = [];
	
		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				matched.push( n );
			}
		}
	
		return matched;
	};
	
	
	var rneedsContext = jQuery.expr.match.needsContext;
	
	var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );
	
	
	
	var risSimple = /^.[^:#\[\.,]*$/;
	
	// Implement the identical functionality for filter and not
	function winnow( elements, qualifier, not ) {
		if ( jQuery.isFunction( qualifier ) ) {
			return jQuery.grep( elements, function( elem, i ) {
				return !!qualifier.call( elem, i, elem ) !== not;
			} );
		}
	
		// Single element
		if ( qualifier.nodeType ) {
			return jQuery.grep( elements, function( elem ) {
				return ( elem === qualifier ) !== not;
			} );
		}
	
		// Arraylike of elements (jQuery, arguments, Array)
		if ( typeof qualifier !== "string" ) {
			return jQuery.grep( elements, function( elem ) {
				return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
			} );
		}
	
		// Simple selector that can be filtered directly, removing non-Elements
		if ( risSimple.test( qualifier ) ) {
			return jQuery.filter( qualifier, elements, not );
		}
	
		// Complex selector, compare the two sets, removing non-Elements
		qualifier = jQuery.filter( qualifier, elements );
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not && elem.nodeType === 1;
		} );
	}
	
	jQuery.filter = function( expr, elems, not ) {
		var elem = elems[ 0 ];
	
		if ( not ) {
			expr = ":not(" + expr + ")";
		}
	
		if ( elems.length === 1 && elem.nodeType === 1 ) {
			return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
		}
	
		return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
			return elem.nodeType === 1;
		} ) );
	};
	
	jQuery.fn.extend( {
		find: function( selector ) {
			var i, ret,
				len = this.length,
				self = this;
	
			if ( typeof selector !== "string" ) {
				return this.pushStack( jQuery( selector ).filter( function() {
					for ( i = 0; i < len; i++ ) {
						if ( jQuery.contains( self[ i ], this ) ) {
							return true;
						}
					}
				} ) );
			}
	
			ret = this.pushStack( [] );
	
			for ( i = 0; i < len; i++ ) {
				jQuery.find( selector, self[ i ], ret );
			}
	
			return len > 1 ? jQuery.uniqueSort( ret ) : ret;
		},
		filter: function( selector ) {
			return this.pushStack( winnow( this, selector || [], false ) );
		},
		not: function( selector ) {
			return this.pushStack( winnow( this, selector || [], true ) );
		},
		is: function( selector ) {
			return !!winnow(
				this,
	
				// If this is a positional/relative selector, check membership in the returned set
				// so $("p:first").is("p:last") won't return true for a doc with two "p".
				typeof selector === "string" && rneedsContext.test( selector ) ?
					jQuery( selector ) :
					selector || [],
				false
			).length;
		}
	} );
	
	
	// Initialize a jQuery object
	
	
	// A central reference to the root jQuery(document)
	var rootjQuery,
	
		// A simple way to check for HTML strings
		// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
		// Strict HTML recognition (#11290: must start with <)
		// Shortcut simple #id case for speed
		rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
	
		init = jQuery.fn.init = function( selector, context, root ) {
			var match, elem;
	
			// HANDLE: $(""), $(null), $(undefined), $(false)
			if ( !selector ) {
				return this;
			}
	
			// Method init() accepts an alternate rootjQuery
			// so migrate can support jQuery.sub (gh-2101)
			root = root || rootjQuery;
	
			// Handle HTML strings
			if ( typeof selector === "string" ) {
				if ( selector[ 0 ] === "<" &&
					selector[ selector.length - 1 ] === ">" &&
					selector.length >= 3 ) {
	
					// Assume that strings that start and end with <> are HTML and skip the regex check
					match = [ null, selector, null ];
	
				} else {
					match = rquickExpr.exec( selector );
				}
	
				// Match html or make sure no context is specified for #id
				if ( match && ( match[ 1 ] || !context ) ) {
	
					// HANDLE: $(html) -> $(array)
					if ( match[ 1 ] ) {
						context = context instanceof jQuery ? context[ 0 ] : context;
	
						// Option to run scripts is true for back-compat
						// Intentionally let the error be thrown if parseHTML is not present
						jQuery.merge( this, jQuery.parseHTML(
							match[ 1 ],
							context && context.nodeType ? context.ownerDocument || context : document,
							true
						) );
	
						// HANDLE: $(html, props)
						if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
							for ( match in context ) {
	
								// Properties of context are called as methods if possible
								if ( jQuery.isFunction( this[ match ] ) ) {
									this[ match ]( context[ match ] );
	
								// ...and otherwise set as attributes
								} else {
									this.attr( match, context[ match ] );
								}
							}
						}
	
						return this;
	
					// HANDLE: $(#id)
					} else {
						elem = document.getElementById( match[ 2 ] );
	
						if ( elem ) {
	
							// Inject the element directly into the jQuery object
							this[ 0 ] = elem;
							this.length = 1;
						}
						return this;
					}
	
				// HANDLE: $(expr, $(...))
				} else if ( !context || context.jquery ) {
					return ( context || root ).find( selector );
	
				// HANDLE: $(expr, context)
				// (which is just equivalent to: $(context).find(expr)
				} else {
					return this.constructor( context ).find( selector );
				}
	
			// HANDLE: $(DOMElement)
			} else if ( selector.nodeType ) {
				this[ 0 ] = selector;
				this.length = 1;
				return this;
	
			// HANDLE: $(function)
			// Shortcut for document ready
			} else if ( jQuery.isFunction( selector ) ) {
				return root.ready !== undefined ?
					root.ready( selector ) :
	
					// Execute immediately if ready is not present
					selector( jQuery );
			}
	
			return jQuery.makeArray( selector, this );
		};
	
	// Give the init function the jQuery prototype for later instantiation
	init.prototype = jQuery.fn;
	
	// Initialize central reference
	rootjQuery = jQuery( document );
	
	
	var rparentsprev = /^(?:parents|prev(?:Until|All))/,
	
		// Methods guaranteed to produce a unique set when starting from a unique set
		guaranteedUnique = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};
	
	jQuery.fn.extend( {
		has: function( target ) {
			var targets = jQuery( target, this ),
				l = targets.length;
	
			return this.filter( function() {
				var i = 0;
				for ( ; i < l; i++ ) {
					if ( jQuery.contains( this, targets[ i ] ) ) {
						return true;
					}
				}
			} );
		},
	
		closest: function( selectors, context ) {
			var cur,
				i = 0,
				l = this.length,
				matched = [],
				targets = typeof selectors !== "string" && jQuery( selectors );
	
			// Positional selectors never match, since there's no _selection_ context
			if ( !rneedsContext.test( selectors ) ) {
				for ( ; i < l; i++ ) {
					for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {
	
						// Always skip document fragments
						if ( cur.nodeType < 11 && ( targets ?
							targets.index( cur ) > -1 :
	
							// Don't pass non-elements to Sizzle
							cur.nodeType === 1 &&
								jQuery.find.matchesSelector( cur, selectors ) ) ) {
	
							matched.push( cur );
							break;
						}
					}
				}
			}
	
			return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
		},
	
		// Determine the position of an element within the set
		index: function( elem ) {
	
			// No argument, return index in parent
			if ( !elem ) {
				return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
			}
	
			// Index in selector
			if ( typeof elem === "string" ) {
				return indexOf.call( jQuery( elem ), this[ 0 ] );
			}
	
			// Locate the position of the desired element
			return indexOf.call( this,
	
				// If it receives a jQuery object, the first element is used
				elem.jquery ? elem[ 0 ] : elem
			);
		},
	
		add: function( selector, context ) {
			return this.pushStack(
				jQuery.uniqueSort(
					jQuery.merge( this.get(), jQuery( selector, context ) )
				)
			);
		},
	
		addBack: function( selector ) {
			return this.add( selector == null ?
				this.prevObject : this.prevObject.filter( selector )
			);
		}
	} );
	
	function sibling( cur, dir ) {
		while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
		return cur;
	}
	
	jQuery.each( {
		parent: function( elem ) {
			var parent = elem.parentNode;
			return parent && parent.nodeType !== 11 ? parent : null;
		},
		parents: function( elem ) {
			return dir( elem, "parentNode" );
		},
		parentsUntil: function( elem, i, until ) {
			return dir( elem, "parentNode", until );
		},
		next: function( elem ) {
			return sibling( elem, "nextSibling" );
		},
		prev: function( elem ) {
			return sibling( elem, "previousSibling" );
		},
		nextAll: function( elem ) {
			return dir( elem, "nextSibling" );
		},
		prevAll: function( elem ) {
			return dir( elem, "previousSibling" );
		},
		nextUntil: function( elem, i, until ) {
			return dir( elem, "nextSibling", until );
		},
		prevUntil: function( elem, i, until ) {
			return dir( elem, "previousSibling", until );
		},
		siblings: function( elem ) {
			return siblings( ( elem.parentNode || {} ).firstChild, elem );
		},
		children: function( elem ) {
			return siblings( elem.firstChild );
		},
		contents: function( elem ) {
			return elem.contentDocument || jQuery.merge( [], elem.childNodes );
		}
	}, function( name, fn ) {
		jQuery.fn[ name ] = function( until, selector ) {
			var matched = jQuery.map( this, fn, until );
	
			if ( name.slice( -5 ) !== "Until" ) {
				selector = until;
			}
	
			if ( selector && typeof selector === "string" ) {
				matched = jQuery.filter( selector, matched );
			}
	
			if ( this.length > 1 ) {
	
				// Remove duplicates
				if ( !guaranteedUnique[ name ] ) {
					jQuery.uniqueSort( matched );
				}
	
				// Reverse order for parents* and prev-derivatives
				if ( rparentsprev.test( name ) ) {
					matched.reverse();
				}
			}
	
			return this.pushStack( matched );
		};
	} );
	var rnotwhite = ( /\S+/g );
	
	
	
	// Convert String-formatted options into Object-formatted ones
	function createOptions( options ) {
		var object = {};
		jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
			object[ flag ] = true;
		} );
		return object;
	}
	
	/*
	 * Create a callback list using the following parameters:
	 *
	 *	options: an optional list of space-separated options that will change how
	 *			the callback list behaves or a more traditional option object
	 *
	 * By default a callback list will act like an event callback list and can be
	 * "fired" multiple times.
	 *
	 * Possible options:
	 *
	 *	once:			will ensure the callback list can only be fired once (like a Deferred)
	 *
	 *	memory:			will keep track of previous values and will call any callback added
	 *					after the list has been fired right away with the latest "memorized"
	 *					values (like a Deferred)
	 *
	 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	 *
	 *	stopOnFalse:	interrupt callings when a callback returns false
	 *
	 */
	jQuery.Callbacks = function( options ) {
	
		// Convert options from String-formatted to Object-formatted if needed
		// (we check in cache first)
		options = typeof options === "string" ?
			createOptions( options ) :
			jQuery.extend( {}, options );
	
		var // Flag to know if list is currently firing
			firing,
	
			// Last fire value for non-forgettable lists
			memory,
	
			// Flag to know if list was already fired
			fired,
	
			// Flag to prevent firing
			locked,
	
			// Actual callback list
			list = [],
	
			// Queue of execution data for repeatable lists
			queue = [],
	
			// Index of currently firing callback (modified by add/remove as needed)
			firingIndex = -1,
	
			// Fire callbacks
			fire = function() {
	
				// Enforce single-firing
				locked = options.once;
	
				// Execute callbacks for all pending executions,
				// respecting firingIndex overrides and runtime changes
				fired = firing = true;
				for ( ; queue.length; firingIndex = -1 ) {
					memory = queue.shift();
					while ( ++firingIndex < list.length ) {
	
						// Run callback and check for early termination
						if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
							options.stopOnFalse ) {
	
							// Jump to end and forget the data so .add doesn't re-fire
							firingIndex = list.length;
							memory = false;
						}
					}
				}
	
				// Forget the data if we're done with it
				if ( !options.memory ) {
					memory = false;
				}
	
				firing = false;
	
				// Clean up if we're done firing for good
				if ( locked ) {
	
					// Keep an empty list if we have data for future add calls
					if ( memory ) {
						list = [];
	
					// Otherwise, this object is spent
					} else {
						list = "";
					}
				}
			},
	
			// Actual Callbacks object
			self = {
	
				// Add a callback or a collection of callbacks to the list
				add: function() {
					if ( list ) {
	
						// If we have memory from a past run, we should fire after adding
						if ( memory && !firing ) {
							firingIndex = list.length - 1;
							queue.push( memory );
						}
	
						( function add( args ) {
							jQuery.each( args, function( _, arg ) {
								if ( jQuery.isFunction( arg ) ) {
									if ( !options.unique || !self.has( arg ) ) {
										list.push( arg );
									}
								} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {
	
									// Inspect recursively
									add( arg );
								}
							} );
						} )( arguments );
	
						if ( memory && !firing ) {
							fire();
						}
					}
					return this;
				},
	
				// Remove a callback from the list
				remove: function() {
					jQuery.each( arguments, function( _, arg ) {
						var index;
						while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
							list.splice( index, 1 );
	
							// Handle firing indexes
							if ( index <= firingIndex ) {
								firingIndex--;
							}
						}
					} );
					return this;
				},
	
				// Check if a given callback is in the list.
				// If no argument is given, return whether or not list has callbacks attached.
				has: function( fn ) {
					return fn ?
						jQuery.inArray( fn, list ) > -1 :
						list.length > 0;
				},
	
				// Remove all callbacks from the list
				empty: function() {
					if ( list ) {
						list = [];
					}
					return this;
				},
	
				// Disable .fire and .add
				// Abort any current/pending executions
				// Clear all callbacks and values
				disable: function() {
					locked = queue = [];
					list = memory = "";
					return this;
				},
				disabled: function() {
					return !list;
				},
	
				// Disable .fire
				// Also disable .add unless we have memory (since it would have no effect)
				// Abort any pending executions
				lock: function() {
					locked = queue = [];
					if ( !memory && !firing ) {
						list = memory = "";
					}
					return this;
				},
				locked: function() {
					return !!locked;
				},
	
				// Call all callbacks with the given context and arguments
				fireWith: function( context, args ) {
					if ( !locked ) {
						args = args || [];
						args = [ context, args.slice ? args.slice() : args ];
						queue.push( args );
						if ( !firing ) {
							fire();
						}
					}
					return this;
				},
	
				// Call all the callbacks with the given arguments
				fire: function() {
					self.fireWith( this, arguments );
					return this;
				},
	
				// To know if the callbacks have already been called at least once
				fired: function() {
					return !!fired;
				}
			};
	
		return self;
	};
	
	
	function Identity( v ) {
		return v;
	}
	function Thrower( ex ) {
		throw ex;
	}
	
	function adoptValue( value, resolve, reject ) {
		var method;
	
		try {
	
			// Check for promise aspect first to privilege synchronous behavior
			if ( value && jQuery.isFunction( ( method = value.promise ) ) ) {
				method.call( value ).done( resolve ).fail( reject );
	
			// Other thenables
			} else if ( value && jQuery.isFunction( ( method = value.then ) ) ) {
				method.call( value, resolve, reject );
	
			// Other non-thenables
			} else {
	
				// Support: Android 4.0 only
				// Strict mode functions invoked without .call/.apply get global-object context
				resolve.call( undefined, value );
			}
	
		// For Promises/A+, convert exceptions into rejections
		// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
		// Deferred#then to conditionally suppress rejection.
		} catch ( value ) {
	
			// Support: Android 4.0 only
			// Strict mode functions invoked without .call/.apply get global-object context
			reject.call( undefined, value );
		}
	}
	
	jQuery.extend( {
	
		Deferred: function( func ) {
			var tuples = [
	
					// action, add listener, callbacks,
					// ... .then handlers, argument index, [final state]
					[ "notify", "progress", jQuery.Callbacks( "memory" ),
						jQuery.Callbacks( "memory" ), 2 ],
					[ "resolve", "done", jQuery.Callbacks( "once memory" ),
						jQuery.Callbacks( "once memory" ), 0, "resolved" ],
					[ "reject", "fail", jQuery.Callbacks( "once memory" ),
						jQuery.Callbacks( "once memory" ), 1, "rejected" ]
				],
				state = "pending",
				promise = {
					state: function() {
						return state;
					},
					always: function() {
						deferred.done( arguments ).fail( arguments );
						return this;
					},
					"catch": function( fn ) {
						return promise.then( null, fn );
					},
	
					// Keep pipe for back-compat
					pipe: function( /* fnDone, fnFail, fnProgress */ ) {
						var fns = arguments;
	
						return jQuery.Deferred( function( newDefer ) {
							jQuery.each( tuples, function( i, tuple ) {
	
								// Map tuples (progress, done, fail) to arguments (done, fail, progress)
								var fn = jQuery.isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];
	
								// deferred.progress(function() { bind to newDefer or newDefer.notify })
								// deferred.done(function() { bind to newDefer or newDefer.resolve })
								// deferred.fail(function() { bind to newDefer or newDefer.reject })
								deferred[ tuple[ 1 ] ]( function() {
									var returned = fn && fn.apply( this, arguments );
									if ( returned && jQuery.isFunction( returned.promise ) ) {
										returned.promise()
											.progress( newDefer.notify )
											.done( newDefer.resolve )
											.fail( newDefer.reject );
									} else {
										newDefer[ tuple[ 0 ] + "With" ](
											this,
											fn ? [ returned ] : arguments
										);
									}
								} );
							} );
							fns = null;
						} ).promise();
					},
					then: function( onFulfilled, onRejected, onProgress ) {
						var maxDepth = 0;
						function resolve( depth, deferred, handler, special ) {
							return function() {
								var that = this,
									args = arguments,
									mightThrow = function() {
										var returned, then;
	
										// Support: Promises/A+ section 2.3.3.3.3
										// https://promisesaplus.com/#point-59
										// Ignore double-resolution attempts
										if ( depth < maxDepth ) {
											return;
										}
	
										returned = handler.apply( that, args );
	
										// Support: Promises/A+ section 2.3.1
										// https://promisesaplus.com/#point-48
										if ( returned === deferred.promise() ) {
											throw new TypeError( "Thenable self-resolution" );
										}
	
										// Support: Promises/A+ sections 2.3.3.1, 3.5
										// https://promisesaplus.com/#point-54
										// https://promisesaplus.com/#point-75
										// Retrieve `then` only once
										then = returned &&
	
											// Support: Promises/A+ section 2.3.4
											// https://promisesaplus.com/#point-64
											// Only check objects and functions for thenability
											( typeof returned === "object" ||
												typeof returned === "function" ) &&
											returned.then;
	
										// Handle a returned thenable
										if ( jQuery.isFunction( then ) ) {
	
											// Special processors (notify) just wait for resolution
											if ( special ) {
												then.call(
													returned,
													resolve( maxDepth, deferred, Identity, special ),
													resolve( maxDepth, deferred, Thrower, special )
												);
	
											// Normal processors (resolve) also hook into progress
											} else {
	
												// ...and disregard older resolution values
												maxDepth++;
	
												then.call(
													returned,
													resolve( maxDepth, deferred, Identity, special ),
													resolve( maxDepth, deferred, Thrower, special ),
													resolve( maxDepth, deferred, Identity,
														deferred.notifyWith )
												);
											}
	
										// Handle all other returned values
										} else {
	
											// Only substitute handlers pass on context
											// and multiple values (non-spec behavior)
											if ( handler !== Identity ) {
												that = undefined;
												args = [ returned ];
											}
	
											// Process the value(s)
											// Default process is resolve
											( special || deferred.resolveWith )( that, args );
										}
									},
	
									// Only normal processors (resolve) catch and reject exceptions
									process = special ?
										mightThrow :
										function() {
											try {
												mightThrow();
											} catch ( e ) {
	
												if ( jQuery.Deferred.exceptionHook ) {
													jQuery.Deferred.exceptionHook( e,
														process.stackTrace );
												}
	
												// Support: Promises/A+ section 2.3.3.3.4.1
												// https://promisesaplus.com/#point-61
												// Ignore post-resolution exceptions
												if ( depth + 1 >= maxDepth ) {
	
													// Only substitute handlers pass on context
													// and multiple values (non-spec behavior)
													if ( handler !== Thrower ) {
														that = undefined;
														args = [ e ];
													}
	
													deferred.rejectWith( that, args );
												}
											}
										};
	
								// Support: Promises/A+ section 2.3.3.3.1
								// https://promisesaplus.com/#point-57
								// Re-resolve promises immediately to dodge false rejection from
								// subsequent errors
								if ( depth ) {
									process();
								} else {
	
									// Call an optional hook to record the stack, in case of exception
									// since it's otherwise lost when execution goes async
									if ( jQuery.Deferred.getStackHook ) {
										process.stackTrace = jQuery.Deferred.getStackHook();
									}
									window.setTimeout( process );
								}
							};
						}
	
						return jQuery.Deferred( function( newDefer ) {
	
							// progress_handlers.add( ... )
							tuples[ 0 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									jQuery.isFunction( onProgress ) ?
										onProgress :
										Identity,
									newDefer.notifyWith
								)
							);
	
							// fulfilled_handlers.add( ... )
							tuples[ 1 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									jQuery.isFunction( onFulfilled ) ?
										onFulfilled :
										Identity
								)
							);
	
							// rejected_handlers.add( ... )
							tuples[ 2 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									jQuery.isFunction( onRejected ) ?
										onRejected :
										Thrower
								)
							);
						} ).promise();
					},
	
					// Get a promise for this deferred
					// If obj is provided, the promise aspect is added to the object
					promise: function( obj ) {
						return obj != null ? jQuery.extend( obj, promise ) : promise;
					}
				},
				deferred = {};
	
			// Add list-specific methods
			jQuery.each( tuples, function( i, tuple ) {
				var list = tuple[ 2 ],
					stateString = tuple[ 5 ];
	
				// promise.progress = list.add
				// promise.done = list.add
				// promise.fail = list.add
				promise[ tuple[ 1 ] ] = list.add;
	
				// Handle state
				if ( stateString ) {
					list.add(
						function() {
	
							// state = "resolved" (i.e., fulfilled)
							// state = "rejected"
							state = stateString;
						},
	
						// rejected_callbacks.disable
						// fulfilled_callbacks.disable
						tuples[ 3 - i ][ 2 ].disable,
	
						// progress_callbacks.lock
						tuples[ 0 ][ 2 ].lock
					);
				}
	
				// progress_handlers.fire
				// fulfilled_handlers.fire
				// rejected_handlers.fire
				list.add( tuple[ 3 ].fire );
	
				// deferred.notify = function() { deferred.notifyWith(...) }
				// deferred.resolve = function() { deferred.resolveWith(...) }
				// deferred.reject = function() { deferred.rejectWith(...) }
				deferred[ tuple[ 0 ] ] = function() {
					deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
					return this;
				};
	
				// deferred.notifyWith = list.fireWith
				// deferred.resolveWith = list.fireWith
				// deferred.rejectWith = list.fireWith
				deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
			} );
	
			// Make the deferred a promise
			promise.promise( deferred );
	
			// Call given func if any
			if ( func ) {
				func.call( deferred, deferred );
			}
	
			// All done!
			return deferred;
		},
	
		// Deferred helper
		when: function( singleValue ) {
			var
	
				// count of uncompleted subordinates
				remaining = arguments.length,
	
				// count of unprocessed arguments
				i = remaining,
	
				// subordinate fulfillment data
				resolveContexts = Array( i ),
				resolveValues = slice.call( arguments ),
	
				// the master Deferred
				master = jQuery.Deferred(),
	
				// subordinate callback factory
				updateFunc = function( i ) {
					return function( value ) {
						resolveContexts[ i ] = this;
						resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
						if ( !( --remaining ) ) {
							master.resolveWith( resolveContexts, resolveValues );
						}
					};
				};
	
			// Single- and empty arguments are adopted like Promise.resolve
			if ( remaining <= 1 ) {
				adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject );
	
				// Use .then() to unwrap secondary thenables (cf. gh-3000)
				if ( master.state() === "pending" ||
					jQuery.isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {
	
					return master.then();
				}
			}
	
			// Multiple arguments are aggregated like Promise.all array elements
			while ( i-- ) {
				adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
			}
	
			return master.promise();
		}
	} );
	
	
	// These usually indicate a programmer mistake during development,
	// warn about them ASAP rather than swallowing them by default.
	var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
	
	jQuery.Deferred.exceptionHook = function( error, stack ) {
	
		// Support: IE 8 - 9 only
		// Console exists when dev tools are open, which can happen at any time
		if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
			window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
		}
	};
	
	
	
	
	jQuery.readyException = function( error ) {
		window.setTimeout( function() {
			throw error;
		} );
	};
	
	
	
	
	// The deferred used on DOM ready
	var readyList = jQuery.Deferred();
	
	jQuery.fn.ready = function( fn ) {
	
		readyList
			.then( fn )
	
			// Wrap jQuery.readyException in a function so that the lookup
			// happens at the time of error handling instead of callback
			// registration.
			.catch( function( error ) {
				jQuery.readyException( error );
			} );
	
		return this;
	};
	
	jQuery.extend( {
	
		// Is the DOM ready to be used? Set to true once it occurs.
		isReady: false,
	
		// A counter to track how many items to wait for before
		// the ready event fires. See #6781
		readyWait: 1,
	
		// Hold (or release) the ready event
		holdReady: function( hold ) {
			if ( hold ) {
				jQuery.readyWait++;
			} else {
				jQuery.ready( true );
			}
		},
	
		// Handle when the DOM is ready
		ready: function( wait ) {
	
			// Abort if there are pending holds or we're already ready
			if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
				return;
			}
	
			// Remember that the DOM is ready
			jQuery.isReady = true;
	
			// If a normal DOM Ready event fired, decrement, and wait if need be
			if ( wait !== true && --jQuery.readyWait > 0 ) {
				return;
			}
	
			// If there are functions bound, to execute
			readyList.resolveWith( document, [ jQuery ] );
		}
	} );
	
	jQuery.ready.then = readyList.then;
	
	// The ready event handler and self cleanup method
	function completed() {
		document.removeEventListener( "DOMContentLoaded", completed );
		window.removeEventListener( "load", completed );
		jQuery.ready();
	}
	
	// Catch cases where $(document).ready() is called
	// after the browser event has already occurred.
	// Support: IE <=9 - 10 only
	// Older IE sometimes signals "interactive" too soon
	if ( document.readyState === "complete" ||
		( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {
	
		// Handle it asynchronously to allow scripts the opportunity to delay ready
		window.setTimeout( jQuery.ready );
	
	} else {
	
		// Use the handy event callback
		document.addEventListener( "DOMContentLoaded", completed );
	
		// A fallback to window.onload, that will always work
		window.addEventListener( "load", completed );
	}
	
	
	
	
	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
		var i = 0,
			len = elems.length,
			bulk = key == null;
	
		// Sets many values
		if ( jQuery.type( key ) === "object" ) {
			chainable = true;
			for ( i in key ) {
				access( elems, fn, i, key[ i ], true, emptyGet, raw );
			}
	
		// Sets one value
		} else if ( value !== undefined ) {
			chainable = true;
	
			if ( !jQuery.isFunction( value ) ) {
				raw = true;
			}
	
			if ( bulk ) {
	
				// Bulk operations run against the entire set
				if ( raw ) {
					fn.call( elems, value );
					fn = null;
	
				// ...except when executing function values
				} else {
					bulk = fn;
					fn = function( elem, key, value ) {
						return bulk.call( jQuery( elem ), value );
					};
				}
			}
	
			if ( fn ) {
				for ( ; i < len; i++ ) {
					fn(
						elems[ i ], key, raw ?
						value :
						value.call( elems[ i ], i, fn( elems[ i ], key ) )
					);
				}
			}
		}
	
		if ( chainable ) {
			return elems;
		}
	
		// Gets
		if ( bulk ) {
			return fn.call( elems );
		}
	
		return len ? fn( elems[ 0 ], key ) : emptyGet;
	};
	var acceptData = function( owner ) {
	
		// Accepts only:
		//  - Node
		//    - Node.ELEMENT_NODE
		//    - Node.DOCUMENT_NODE
		//  - Object
		//    - Any
		return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
	};
	
	
	
	
	function Data() {
		this.expando = jQuery.expando + Data.uid++;
	}
	
	Data.uid = 1;
	
	Data.prototype = {
	
		cache: function( owner ) {
	
			// Check if the owner object already has a cache
			var value = owner[ this.expando ];
	
			// If not, create one
			if ( !value ) {
				value = {};
	
				// We can accept data for non-element nodes in modern browsers,
				// but we should not, see #8335.
				// Always return an empty object.
				if ( acceptData( owner ) ) {
	
					// If it is a node unlikely to be stringify-ed or looped over
					// use plain assignment
					if ( owner.nodeType ) {
						owner[ this.expando ] = value;
	
					// Otherwise secure it in a non-enumerable property
					// configurable must be true to allow the property to be
					// deleted when data is removed
					} else {
						Object.defineProperty( owner, this.expando, {
							value: value,
							configurable: true
						} );
					}
				}
			}
	
			return value;
		},
		set: function( owner, data, value ) {
			var prop,
				cache = this.cache( owner );
	
			// Handle: [ owner, key, value ] args
			// Always use camelCase key (gh-2257)
			if ( typeof data === "string" ) {
				cache[ jQuery.camelCase( data ) ] = value;
	
			// Handle: [ owner, { properties } ] args
			} else {
	
				// Copy the properties one-by-one to the cache object
				for ( prop in data ) {
					cache[ jQuery.camelCase( prop ) ] = data[ prop ];
				}
			}
			return cache;
		},
		get: function( owner, key ) {
			return key === undefined ?
				this.cache( owner ) :
	
				// Always use camelCase key (gh-2257)
				owner[ this.expando ] && owner[ this.expando ][ jQuery.camelCase( key ) ];
		},
		access: function( owner, key, value ) {
	
			// In cases where either:
			//
			//   1. No key was specified
			//   2. A string key was specified, but no value provided
			//
			// Take the "read" path and allow the get method to determine
			// which value to return, respectively either:
			//
			//   1. The entire cache object
			//   2. The data stored at the key
			//
			if ( key === undefined ||
					( ( key && typeof key === "string" ) && value === undefined ) ) {
	
				return this.get( owner, key );
			}
	
			// When the key is not a string, or both a key and value
			// are specified, set or extend (existing objects) with either:
			//
			//   1. An object of properties
			//   2. A key and value
			//
			this.set( owner, key, value );
	
			// Since the "set" path can have two possible entry points
			// return the expected data based on which path was taken[*]
			return value !== undefined ? value : key;
		},
		remove: function( owner, key ) {
			var i,
				cache = owner[ this.expando ];
	
			if ( cache === undefined ) {
				return;
			}
	
			if ( key !== undefined ) {
	
				// Support array or space separated string of keys
				if ( jQuery.isArray( key ) ) {
	
					// If key is an array of keys...
					// We always set camelCase keys, so remove that.
					key = key.map( jQuery.camelCase );
				} else {
					key = jQuery.camelCase( key );
	
					// If a key with the spaces exists, use it.
					// Otherwise, create an array by matching non-whitespace
					key = key in cache ?
						[ key ] :
						( key.match( rnotwhite ) || [] );
				}
	
				i = key.length;
	
				while ( i-- ) {
					delete cache[ key[ i ] ];
				}
			}
	
			// Remove the expando if there's no more data
			if ( key === undefined || jQuery.isEmptyObject( cache ) ) {
	
				// Support: Chrome <=35 - 45
				// Webkit & Blink performance suffers when deleting properties
				// from DOM nodes, so set to undefined instead
				// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
				if ( owner.nodeType ) {
					owner[ this.expando ] = undefined;
				} else {
					delete owner[ this.expando ];
				}
			}
		},
		hasData: function( owner ) {
			var cache = owner[ this.expando ];
			return cache !== undefined && !jQuery.isEmptyObject( cache );
		}
	};
	var dataPriv = new Data();
	
	var dataUser = new Data();
	
	
	
	//	Implementation Summary
	//
	//	1. Enforce API surface and semantic compatibility with 1.9.x branch
	//	2. Improve the module's maintainability by reducing the storage
	//		paths to a single mechanism.
	//	3. Use the same single mechanism to support "private" and "user" data.
	//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
	//	5. Avoid exposing implementation details on user objects (eg. expando properties)
	//	6. Provide a clear path for implementation upgrade to WeakMap in 2014
	
	var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		rmultiDash = /[A-Z]/g;
	
	function getData( data ) {
		if ( data === "true" ) {
			return true;
		}
	
		if ( data === "false" ) {
			return false;
		}
	
		if ( data === "null" ) {
			return null;
		}
	
		// Only convert to a number if it doesn't change the string
		if ( data === +data + "" ) {
			return +data;
		}
	
		if ( rbrace.test( data ) ) {
			return JSON.parse( data );
		}
	
		return data;
	}
	
	function dataAttr( elem, key, data ) {
		var name;
	
		// If nothing was found internally, try to fetch any
		// data from the HTML5 data-* attribute
		if ( data === undefined && elem.nodeType === 1 ) {
			name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
			data = elem.getAttribute( name );
	
			if ( typeof data === "string" ) {
				try {
					data = getData( data );
				} catch ( e ) {}
	
				// Make sure we set the data so it isn't changed later
				dataUser.set( elem, key, data );
			} else {
				data = undefined;
			}
		}
		return data;
	}
	
	jQuery.extend( {
		hasData: function( elem ) {
			return dataUser.hasData( elem ) || dataPriv.hasData( elem );
		},
	
		data: function( elem, name, data ) {
			return dataUser.access( elem, name, data );
		},
	
		removeData: function( elem, name ) {
			dataUser.remove( elem, name );
		},
	
		// TODO: Now that all calls to _data and _removeData have been replaced
		// with direct calls to dataPriv methods, these can be deprecated.
		_data: function( elem, name, data ) {
			return dataPriv.access( elem, name, data );
		},
	
		_removeData: function( elem, name ) {
			dataPriv.remove( elem, name );
		}
	} );
	
	jQuery.fn.extend( {
		data: function( key, value ) {
			var i, name, data,
				elem = this[ 0 ],
				attrs = elem && elem.attributes;
	
			// Gets all values
			if ( key === undefined ) {
				if ( this.length ) {
					data = dataUser.get( elem );
	
					if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
						i = attrs.length;
						while ( i-- ) {
	
							// Support: IE 11 only
							// The attrs elements can be null (#14894)
							if ( attrs[ i ] ) {
								name = attrs[ i ].name;
								if ( name.indexOf( "data-" ) === 0 ) {
									name = jQuery.camelCase( name.slice( 5 ) );
									dataAttr( elem, name, data[ name ] );
								}
							}
						}
						dataPriv.set( elem, "hasDataAttrs", true );
					}
				}
	
				return data;
			}
	
			// Sets multiple values
			if ( typeof key === "object" ) {
				return this.each( function() {
					dataUser.set( this, key );
				} );
			}
	
			return access( this, function( value ) {
				var data;
	
				// The calling jQuery object (element matches) is not empty
				// (and therefore has an element appears at this[ 0 ]) and the
				// `value` parameter was not undefined. An empty jQuery object
				// will result in `undefined` for elem = this[ 0 ] which will
				// throw an exception if an attempt to read a data cache is made.
				if ( elem && value === undefined ) {
	
					// Attempt to get data from the cache
					// The key will always be camelCased in Data
					data = dataUser.get( elem, key );
					if ( data !== undefined ) {
						return data;
					}
	
					// Attempt to "discover" the data in
					// HTML5 custom data-* attrs
					data = dataAttr( elem, key );
					if ( data !== undefined ) {
						return data;
					}
	
					// We tried really hard, but the data doesn't exist.
					return;
				}
	
				// Set the data...
				this.each( function() {
	
					// We always store the camelCased key
					dataUser.set( this, key, value );
				} );
			}, null, value, arguments.length > 1, null, true );
		},
	
		removeData: function( key ) {
			return this.each( function() {
				dataUser.remove( this, key );
			} );
		}
	} );
	
	
	jQuery.extend( {
		queue: function( elem, type, data ) {
			var queue;
	
			if ( elem ) {
				type = ( type || "fx" ) + "queue";
				queue = dataPriv.get( elem, type );
	
				// Speed up dequeue by getting out quickly if this is just a lookup
				if ( data ) {
					if ( !queue || jQuery.isArray( data ) ) {
						queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
					} else {
						queue.push( data );
					}
				}
				return queue || [];
			}
		},
	
		dequeue: function( elem, type ) {
			type = type || "fx";
	
			var queue = jQuery.queue( elem, type ),
				startLength = queue.length,
				fn = queue.shift(),
				hooks = jQuery._queueHooks( elem, type ),
				next = function() {
					jQuery.dequeue( elem, type );
				};
	
			// If the fx queue is dequeued, always remove the progress sentinel
			if ( fn === "inprogress" ) {
				fn = queue.shift();
				startLength--;
			}
	
			if ( fn ) {
	
				// Add a progress sentinel to prevent the fx queue from being
				// automatically dequeued
				if ( type === "fx" ) {
					queue.unshift( "inprogress" );
				}
	
				// Clear up the last queue stop function
				delete hooks.stop;
				fn.call( elem, next, hooks );
			}
	
			if ( !startLength && hooks ) {
				hooks.empty.fire();
			}
		},
	
		// Not public - generate a queueHooks object, or return the current one
		_queueHooks: function( elem, type ) {
			var key = type + "queueHooks";
			return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
				empty: jQuery.Callbacks( "once memory" ).add( function() {
					dataPriv.remove( elem, [ type + "queue", key ] );
				} )
			} );
		}
	} );
	
	jQuery.fn.extend( {
		queue: function( type, data ) {
			var setter = 2;
	
			if ( typeof type !== "string" ) {
				data = type;
				type = "fx";
				setter--;
			}
	
			if ( arguments.length < setter ) {
				return jQuery.queue( this[ 0 ], type );
			}
	
			return data === undefined ?
				this :
				this.each( function() {
					var queue = jQuery.queue( this, type, data );
	
					// Ensure a hooks for this queue
					jQuery._queueHooks( this, type );
	
					if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
						jQuery.dequeue( this, type );
					}
				} );
		},
		dequeue: function( type ) {
			return this.each( function() {
				jQuery.dequeue( this, type );
			} );
		},
		clearQueue: function( type ) {
			return this.queue( type || "fx", [] );
		},
	
		// Get a promise resolved when queues of a certain type
		// are emptied (fx is the type by default)
		promise: function( type, obj ) {
			var tmp,
				count = 1,
				defer = jQuery.Deferred(),
				elements = this,
				i = this.length,
				resolve = function() {
					if ( !( --count ) ) {
						defer.resolveWith( elements, [ elements ] );
					}
				};
	
			if ( typeof type !== "string" ) {
				obj = type;
				type = undefined;
			}
			type = type || "fx";
	
			while ( i-- ) {
				tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
				if ( tmp && tmp.empty ) {
					count++;
					tmp.empty.add( resolve );
				}
			}
			resolve();
			return defer.promise( obj );
		}
	} );
	var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;
	
	var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );
	
	
	var cssExpand = [ "Top", "Right", "Bottom", "Left" ];
	
	var isHiddenWithinTree = function( elem, el ) {
	
			// isHiddenWithinTree might be called from jQuery#filter function;
			// in that case, element will be second argument
			elem = el || elem;
	
			// Inline style trumps all
			return elem.style.display === "none" ||
				elem.style.display === "" &&
	
				// Otherwise, check computed style
				// Support: Firefox <=43 - 45
				// Disconnected elements can have computed display: none, so first confirm that elem is
				// in the document.
				jQuery.contains( elem.ownerDocument, elem ) &&
	
				jQuery.css( elem, "display" ) === "none";
		};
	
	var swap = function( elem, options, callback, args ) {
		var ret, name,
			old = {};
	
		// Remember the old values, and insert the new ones
		for ( name in options ) {
			old[ name ] = elem.style[ name ];
			elem.style[ name ] = options[ name ];
		}
	
		ret = callback.apply( elem, args || [] );
	
		// Revert the old values
		for ( name in options ) {
			elem.style[ name ] = old[ name ];
		}
	
		return ret;
	};
	
	
	
	
	function adjustCSS( elem, prop, valueParts, tween ) {
		var adjusted,
			scale = 1,
			maxIterations = 20,
			currentValue = tween ?
				function() {
					return tween.cur();
				} :
				function() {
					return jQuery.css( elem, prop, "" );
				},
			initial = currentValue(),
			unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),
	
			// Starting value computation is required for potential unit mismatches
			initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
				rcssNum.exec( jQuery.css( elem, prop ) );
	
		if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {
	
			// Trust units reported by jQuery.css
			unit = unit || initialInUnit[ 3 ];
	
			// Make sure we update the tween properties later on
			valueParts = valueParts || [];
	
			// Iteratively approximate from a nonzero starting point
			initialInUnit = +initial || 1;
	
			do {
	
				// If previous iteration zeroed out, double until we get *something*.
				// Use string for doubling so we don't accidentally see scale as unchanged below
				scale = scale || ".5";
	
				// Adjust and apply
				initialInUnit = initialInUnit / scale;
				jQuery.style( elem, prop, initialInUnit + unit );
	
			// Update scale, tolerating zero or NaN from tween.cur()
			// Break the loop if scale is unchanged or perfect, or if we've just had enough.
			} while (
				scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
			);
		}
	
		if ( valueParts ) {
			initialInUnit = +initialInUnit || +initial || 0;
	
			// Apply relative offset (+=/-=) if specified
			adjusted = valueParts[ 1 ] ?
				initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
				+valueParts[ 2 ];
			if ( tween ) {
				tween.unit = unit;
				tween.start = initialInUnit;
				tween.end = adjusted;
			}
		}
		return adjusted;
	}
	
	
	var defaultDisplayMap = {};
	
	function getDefaultDisplay( elem ) {
		var temp,
			doc = elem.ownerDocument,
			nodeName = elem.nodeName,
			display = defaultDisplayMap[ nodeName ];
	
		if ( display ) {
			return display;
		}
	
		temp = doc.body.appendChild( doc.createElement( nodeName ) );
		display = jQuery.css( temp, "display" );
	
		temp.parentNode.removeChild( temp );
	
		if ( display === "none" ) {
			display = "block";
		}
		defaultDisplayMap[ nodeName ] = display;
	
		return display;
	}
	
	function showHide( elements, show ) {
		var display, elem,
			values = [],
			index = 0,
			length = elements.length;
	
		// Determine new display value for elements that need to change
		for ( ; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}
	
			display = elem.style.display;
			if ( show ) {
	
				// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
				// check is required in this first loop unless we have a nonempty display value (either
				// inline or about-to-be-restored)
				if ( display === "none" ) {
					values[ index ] = dataPriv.get( elem, "display" ) || null;
					if ( !values[ index ] ) {
						elem.style.display = "";
					}
				}
				if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
					values[ index ] = getDefaultDisplay( elem );
				}
			} else {
				if ( display !== "none" ) {
					values[ index ] = "none";
	
					// Remember what we're overwriting
					dataPriv.set( elem, "display", display );
				}
			}
		}
	
		// Set the display of the elements in a second loop to avoid constant reflow
		for ( index = 0; index < length; index++ ) {
			if ( values[ index ] != null ) {
				elements[ index ].style.display = values[ index ];
			}
		}
	
		return elements;
	}
	
	jQuery.fn.extend( {
		show: function() {
			return showHide( this, true );
		},
		hide: function() {
			return showHide( this );
		},
		toggle: function( state ) {
			if ( typeof state === "boolean" ) {
				return state ? this.show() : this.hide();
			}
	
			return this.each( function() {
				if ( isHiddenWithinTree( this ) ) {
					jQuery( this ).show();
				} else {
					jQuery( this ).hide();
				}
			} );
		}
	} );
	var rcheckableType = ( /^(?:checkbox|radio)$/i );
	
	var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );
	
	var rscriptType = ( /^$|\/(?:java|ecma)script/i );
	
	
	
	// We have to close these tags to support XHTML (#13200)
	var wrapMap = {
	
		// Support: IE <=9 only
		option: [ 1, "<select multiple='multiple'>", "</select>" ],
	
		// XHTML parsers do not magically insert elements in the
		// same way that tag soup parsers do. So we cannot shorten
		// this by omitting <tbody> or other required elements.
		thead: [ 1, "<table>", "</table>" ],
		col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
	
		_default: [ 0, "", "" ]
	};
	
	// Support: IE <=9 only
	wrapMap.optgroup = wrapMap.option;
	
	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	wrapMap.th = wrapMap.td;
	
	
	function getAll( context, tag ) {
	
		// Support: IE <=9 - 11 only
		// Use typeof to avoid zero-argument method invocation on host objects (#15151)
		var ret;
	
		if ( typeof context.getElementsByTagName !== "undefined" ) {
			ret = context.getElementsByTagName( tag || "*" );
	
		} else if ( typeof context.querySelectorAll !== "undefined" ) {
			ret = context.querySelectorAll( tag || "*" );
	
		} else {
			ret = [];
		}
	
		if ( tag === undefined || tag && jQuery.nodeName( context, tag ) ) {
			return jQuery.merge( [ context ], ret );
		}
	
		return ret;
	}
	
	
	// Mark scripts as having already been evaluated
	function setGlobalEval( elems, refElements ) {
		var i = 0,
			l = elems.length;
	
		for ( ; i < l; i++ ) {
			dataPriv.set(
				elems[ i ],
				"globalEval",
				!refElements || dataPriv.get( refElements[ i ], "globalEval" )
			);
		}
	}
	
	
	var rhtml = /<|&#?\w+;/;
	
	function buildFragment( elems, context, scripts, selection, ignored ) {
		var elem, tmp, tag, wrap, contains, j,
			fragment = context.createDocumentFragment(),
			nodes = [],
			i = 0,
			l = elems.length;
	
		for ( ; i < l; i++ ) {
			elem = elems[ i ];
	
			if ( elem || elem === 0 ) {
	
				// Add nodes directly
				if ( jQuery.type( elem ) === "object" ) {
	
					// Support: Android <=4.0 only, PhantomJS 1 only
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );
	
				// Convert non-html into a text node
				} else if ( !rhtml.test( elem ) ) {
					nodes.push( context.createTextNode( elem ) );
	
				// Convert html into DOM nodes
				} else {
					tmp = tmp || fragment.appendChild( context.createElement( "div" ) );
	
					// Deserialize a standard representation
					tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;
					tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];
	
					// Descend through wrappers to the right content
					j = wrap[ 0 ];
					while ( j-- ) {
						tmp = tmp.lastChild;
					}
	
					// Support: Android <=4.0 only, PhantomJS 1 only
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, tmp.childNodes );
	
					// Remember the top-level container
					tmp = fragment.firstChild;
	
					// Ensure the created nodes are orphaned (#12392)
					tmp.textContent = "";
				}
			}
		}
	
		// Remove wrapper from fragment
		fragment.textContent = "";
	
		i = 0;
		while ( ( elem = nodes[ i++ ] ) ) {
	
			// Skip elements already in the context collection (trac-4087)
			if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
				if ( ignored ) {
					ignored.push( elem );
				}
				continue;
			}
	
			contains = jQuery.contains( elem.ownerDocument, elem );
	
			// Append to fragment
			tmp = getAll( fragment.appendChild( elem ), "script" );
	
			// Preserve script evaluation history
			if ( contains ) {
				setGlobalEval( tmp );
			}
	
			// Capture executables
			if ( scripts ) {
				j = 0;
				while ( ( elem = tmp[ j++ ] ) ) {
					if ( rscriptType.test( elem.type || "" ) ) {
						scripts.push( elem );
					}
				}
			}
		}
	
		return fragment;
	}
	
	
	( function() {
		var fragment = document.createDocumentFragment(),
			div = fragment.appendChild( document.createElement( "div" ) ),
			input = document.createElement( "input" );
	
		// Support: Android 4.0 - 4.3 only
		// Check state lost if the name is set (#11217)
		// Support: Windows Web Apps (WWA)
		// `name` and `type` must use .setAttribute for WWA (#14901)
		input.setAttribute( "type", "radio" );
		input.setAttribute( "checked", "checked" );
		input.setAttribute( "name", "t" );
	
		div.appendChild( input );
	
		// Support: Android <=4.1 only
		// Older WebKit doesn't clone checked state correctly in fragments
		support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;
	
		// Support: IE <=11 only
		// Make sure textarea (and checkbox) defaultValue is properly cloned
		div.innerHTML = "<textarea>x</textarea>";
		support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
	} )();
	var documentElement = document.documentElement;
	
	
	
	var
		rkeyEvent = /^key/,
		rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
	
	function returnTrue() {
		return true;
	}
	
	function returnFalse() {
		return false;
	}
	
	// Support: IE <=9 only
	// See #13393 for more info
	function safeActiveElement() {
		try {
			return document.activeElement;
		} catch ( err ) { }
	}
	
	function on( elem, types, selector, data, fn, one ) {
		var origFn, type;
	
		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {
	
			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) {
	
				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for ( type in types ) {
				on( elem, type, selector, data, types[ type ], one );
			}
			return elem;
		}
	
		if ( data == null && fn == null ) {
	
			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {
	
				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {
	
				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return elem;
		}
	
		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {
	
				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};
	
			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return elem.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		} );
	}
	
	/*
	 * Helper functions for managing events -- not part of the public interface.
	 * Props to Dean Edwards' addEvent library for many of the ideas.
	 */
	jQuery.event = {
	
		global: {},
	
		add: function( elem, types, handler, data, selector ) {
	
			var handleObjIn, eventHandle, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.get( elem );
	
			// Don't attach events to noData or text/comment nodes (but allow plain objects)
			if ( !elemData ) {
				return;
			}
	
			// Caller can pass in an object of custom data in lieu of the handler
			if ( handler.handler ) {
				handleObjIn = handler;
				handler = handleObjIn.handler;
				selector = handleObjIn.selector;
			}
	
			// Ensure that invalid selectors throw exceptions at attach time
			// Evaluate against documentElement in case elem is a non-element node (e.g., document)
			if ( selector ) {
				jQuery.find.matchesSelector( documentElement, selector );
			}
	
			// Make sure that the handler has a unique ID, used to find/remove it later
			if ( !handler.guid ) {
				handler.guid = jQuery.guid++;
			}
	
			// Init the element's event structure and main handler, if this is the first
			if ( !( events = elemData.events ) ) {
				events = elemData.events = {};
			}
			if ( !( eventHandle = elemData.handle ) ) {
				eventHandle = elemData.handle = function( e ) {
	
					// Discard the second event of a jQuery.event.trigger() and
					// when an event is called after a page has unloaded
					return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
						jQuery.event.dispatch.apply( elem, arguments ) : undefined;
				};
			}
	
			// Handle multiple events separated by a space
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();
	
				// There *must* be a type, no attaching namespace-only handlers
				if ( !type ) {
					continue;
				}
	
				// If event changes its type, use the special event handlers for the changed type
				special = jQuery.event.special[ type ] || {};
	
				// If selector defined, determine special event api type, otherwise given type
				type = ( selector ? special.delegateType : special.bindType ) || type;
	
				// Update special based on newly reset type
				special = jQuery.event.special[ type ] || {};
	
				// handleObj is passed to all event handlers
				handleObj = jQuery.extend( {
					type: type,
					origType: origType,
					data: data,
					handler: handler,
					guid: handler.guid,
					selector: selector,
					needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
					namespace: namespaces.join( "." )
				}, handleObjIn );
	
				// Init the event handler queue if we're the first
				if ( !( handlers = events[ type ] ) ) {
					handlers = events[ type ] = [];
					handlers.delegateCount = 0;
	
					// Only use addEventListener if the special events handler returns false
					if ( !special.setup ||
						special.setup.call( elem, data, namespaces, eventHandle ) === false ) {
	
						if ( elem.addEventListener ) {
							elem.addEventListener( type, eventHandle );
						}
					}
				}
	
				if ( special.add ) {
					special.add.call( elem, handleObj );
	
					if ( !handleObj.handler.guid ) {
						handleObj.handler.guid = handler.guid;
					}
				}
	
				// Add to the element's handler list, delegates in front
				if ( selector ) {
					handlers.splice( handlers.delegateCount++, 0, handleObj );
				} else {
					handlers.push( handleObj );
				}
	
				// Keep track of which events have ever been used, for event optimization
				jQuery.event.global[ type ] = true;
			}
	
		},
	
		// Detach an event or set of events from an element
		remove: function( elem, types, handler, selector, mappedTypes ) {
	
			var j, origCount, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );
	
			if ( !elemData || !( events = elemData.events ) ) {
				return;
			}
	
			// Once for each type.namespace in types; type may be omitted
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();
	
				// Unbind all events (on this namespace, if provided) for the element
				if ( !type ) {
					for ( type in events ) {
						jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
					}
					continue;
				}
	
				special = jQuery.event.special[ type ] || {};
				type = ( selector ? special.delegateType : special.bindType ) || type;
				handlers = events[ type ] || [];
				tmp = tmp[ 2 ] &&
					new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );
	
				// Remove matching events
				origCount = j = handlers.length;
				while ( j-- ) {
					handleObj = handlers[ j ];
	
					if ( ( mappedTypes || origType === handleObj.origType ) &&
						( !handler || handler.guid === handleObj.guid ) &&
						( !tmp || tmp.test( handleObj.namespace ) ) &&
						( !selector || selector === handleObj.selector ||
							selector === "**" && handleObj.selector ) ) {
						handlers.splice( j, 1 );
	
						if ( handleObj.selector ) {
							handlers.delegateCount--;
						}
						if ( special.remove ) {
							special.remove.call( elem, handleObj );
						}
					}
				}
	
				// Remove generic event handler if we removed something and no more handlers exist
				// (avoids potential for endless recursion during removal of special event handlers)
				if ( origCount && !handlers.length ) {
					if ( !special.teardown ||
						special.teardown.call( elem, namespaces, elemData.handle ) === false ) {
	
						jQuery.removeEvent( elem, type, elemData.handle );
					}
	
					delete events[ type ];
				}
			}
	
			// Remove data and the expando if it's no longer used
			if ( jQuery.isEmptyObject( events ) ) {
				dataPriv.remove( elem, "handle events" );
			}
		},
	
		dispatch: function( nativeEvent ) {
	
			// Make a writable jQuery.Event from the native event object
			var event = jQuery.event.fix( nativeEvent );
	
			var i, j, ret, matched, handleObj, handlerQueue,
				args = new Array( arguments.length ),
				handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
				special = jQuery.event.special[ event.type ] || {};
	
			// Use the fix-ed jQuery.Event rather than the (read-only) native event
			args[ 0 ] = event;
	
			for ( i = 1; i < arguments.length; i++ ) {
				args[ i ] = arguments[ i ];
			}
	
			event.delegateTarget = this;
	
			// Call the preDispatch hook for the mapped type, and let it bail if desired
			if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
				return;
			}
	
			// Determine handlers
			handlerQueue = jQuery.event.handlers.call( this, event, handlers );
	
			// Run delegates first; they may want to stop propagation beneath us
			i = 0;
			while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
				event.currentTarget = matched.elem;
	
				j = 0;
				while ( ( handleObj = matched.handlers[ j++ ] ) &&
					!event.isImmediatePropagationStopped() ) {
	
					// Triggered event must either 1) have no namespace, or 2) have namespace(s)
					// a subset or equal to those in the bound event (both can have no namespace).
					if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {
	
						event.handleObj = handleObj;
						event.data = handleObj.data;
	
						ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
							handleObj.handler ).apply( matched.elem, args );
	
						if ( ret !== undefined ) {
							if ( ( event.result = ret ) === false ) {
								event.preventDefault();
								event.stopPropagation();
							}
						}
					}
				}
			}
	
			// Call the postDispatch hook for the mapped type
			if ( special.postDispatch ) {
				special.postDispatch.call( this, event );
			}
	
			return event.result;
		},
	
		handlers: function( event, handlers ) {
			var i, handleObj, sel, matchedHandlers, matchedSelectors,
				handlerQueue = [],
				delegateCount = handlers.delegateCount,
				cur = event.target;
	
			// Find delegate handlers
			if ( delegateCount &&
	
				// Support: IE <=9
				// Black-hole SVG <use> instance trees (trac-13180)
				cur.nodeType &&
	
				// Support: Firefox <=42
				// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
				// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
				// Support: IE 11 only
				// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
				!( event.type === "click" && event.button >= 1 ) ) {
	
				for ( ; cur !== this; cur = cur.parentNode || this ) {
	
					// Don't check non-elements (#13208)
					// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
					if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
						matchedHandlers = [];
						matchedSelectors = {};
						for ( i = 0; i < delegateCount; i++ ) {
							handleObj = handlers[ i ];
	
							// Don't conflict with Object.prototype properties (#13203)
							sel = handleObj.selector + " ";
	
							if ( matchedSelectors[ sel ] === undefined ) {
								matchedSelectors[ sel ] = handleObj.needsContext ?
									jQuery( sel, this ).index( cur ) > -1 :
									jQuery.find( sel, this, null, [ cur ] ).length;
							}
							if ( matchedSelectors[ sel ] ) {
								matchedHandlers.push( handleObj );
							}
						}
						if ( matchedHandlers.length ) {
							handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
						}
					}
				}
			}
	
			// Add the remaining (directly-bound) handlers
			cur = this;
			if ( delegateCount < handlers.length ) {
				handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
			}
	
			return handlerQueue;
		},
	
		addProp: function( name, hook ) {
			Object.defineProperty( jQuery.Event.prototype, name, {
				enumerable: true,
				configurable: true,
	
				get: jQuery.isFunction( hook ) ?
					function() {
						if ( this.originalEvent ) {
								return hook( this.originalEvent );
						}
					} :
					function() {
						if ( this.originalEvent ) {
								return this.originalEvent[ name ];
						}
					},
	
				set: function( value ) {
					Object.defineProperty( this, name, {
						enumerable: true,
						configurable: true,
						writable: true,
						value: value
					} );
				}
			} );
		},
	
		fix: function( originalEvent ) {
			return originalEvent[ jQuery.expando ] ?
				originalEvent :
				new jQuery.Event( originalEvent );
		},
	
		special: {
			load: {
	
				// Prevent triggered image.load events from bubbling to window.load
				noBubble: true
			},
			focus: {
	
				// Fire native event if possible so blur/focus sequence is correct
				trigger: function() {
					if ( this !== safeActiveElement() && this.focus ) {
						this.focus();
						return false;
					}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					if ( this === safeActiveElement() && this.blur ) {
						this.blur();
						return false;
					}
				},
				delegateType: "focusout"
			},
			click: {
	
				// For checkbox, fire native event so checked state will be right
				trigger: function() {
					if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
						this.click();
						return false;
					}
				},
	
				// For cross-browser consistency, don't fire native .click() on links
				_default: function( event ) {
					return jQuery.nodeName( event.target, "a" );
				}
			},
	
			beforeunload: {
				postDispatch: function( event ) {
	
					// Support: Firefox 20+
					// Firefox doesn't alert if the returnValue field is not set.
					if ( event.result !== undefined && event.originalEvent ) {
						event.originalEvent.returnValue = event.result;
					}
				}
			}
		}
	};
	
	jQuery.removeEvent = function( elem, type, handle ) {
	
		// This "if" is needed for plain objects
		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle );
		}
	};
	
	jQuery.Event = function( src, props ) {
	
		// Allow instantiation without the 'new' keyword
		if ( !( this instanceof jQuery.Event ) ) {
			return new jQuery.Event( src, props );
		}
	
		// Event object
		if ( src && src.type ) {
			this.originalEvent = src;
			this.type = src.type;
	
			// Events bubbling up the document may have been marked as prevented
			// by a handler lower down the tree; reflect the correct value.
			this.isDefaultPrevented = src.defaultPrevented ||
					src.defaultPrevented === undefined &&
	
					// Support: Android <=2.3 only
					src.returnValue === false ?
				returnTrue :
				returnFalse;
	
			// Create target properties
			// Support: Safari <=6 - 7 only
			// Target should not be a text node (#504, #13143)
			this.target = ( src.target && src.target.nodeType === 3 ) ?
				src.target.parentNode :
				src.target;
	
			this.currentTarget = src.currentTarget;
			this.relatedTarget = src.relatedTarget;
	
		// Event type
		} else {
			this.type = src;
		}
	
		// Put explicitly provided properties onto the event object
		if ( props ) {
			jQuery.extend( this, props );
		}
	
		// Create a timestamp if incoming event doesn't have one
		this.timeStamp = src && src.timeStamp || jQuery.now();
	
		// Mark it as fixed
		this[ jQuery.expando ] = true;
	};
	
	// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype = {
		constructor: jQuery.Event,
		isDefaultPrevented: returnFalse,
		isPropagationStopped: returnFalse,
		isImmediatePropagationStopped: returnFalse,
		isSimulated: false,
	
		preventDefault: function() {
			var e = this.originalEvent;
	
			this.isDefaultPrevented = returnTrue;
	
			if ( e && !this.isSimulated ) {
				e.preventDefault();
			}
		},
		stopPropagation: function() {
			var e = this.originalEvent;
	
			this.isPropagationStopped = returnTrue;
	
			if ( e && !this.isSimulated ) {
				e.stopPropagation();
			}
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;
	
			this.isImmediatePropagationStopped = returnTrue;
	
			if ( e && !this.isSimulated ) {
				e.stopImmediatePropagation();
			}
	
			this.stopPropagation();
		}
	};
	
	// Includes all common event props including KeyEvent and MouseEvent specific props
	jQuery.each( {
		altKey: true,
		bubbles: true,
		cancelable: true,
		changedTouches: true,
		ctrlKey: true,
		detail: true,
		eventPhase: true,
		metaKey: true,
		pageX: true,
		pageY: true,
		shiftKey: true,
		view: true,
		"char": true,
		charCode: true,
		key: true,
		keyCode: true,
		button: true,
		buttons: true,
		clientX: true,
		clientY: true,
		offsetX: true,
		offsetY: true,
		pointerId: true,
		pointerType: true,
		screenX: true,
		screenY: true,
		targetTouches: true,
		toElement: true,
		touches: true,
	
		which: function( event ) {
			var button = event.button;
	
			// Add which for key events
			if ( event.which == null && rkeyEvent.test( event.type ) ) {
				return event.charCode != null ? event.charCode : event.keyCode;
			}
	
			// Add which for click: 1 === left; 2 === middle; 3 === right
			if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
				if ( button & 1 ) {
					return 1;
				}
	
				if ( button & 2 ) {
					return 3;
				}
	
				if ( button & 4 ) {
					return 2;
				}
	
				return 0;
			}
	
			return event.which;
		}
	}, jQuery.event.addProp );
	
	// Create mouseenter/leave events using mouseover/out and event-time checks
	// so that event delegation works in jQuery.
	// Do the same for pointerenter/pointerleave and pointerover/pointerout
	//
	// Support: Safari 7 only
	// Safari sends mouseenter too often; see:
	// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
	// for the description of the bug (it existed in older Chrome versions as well).
	jQuery.each( {
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function( orig, fix ) {
		jQuery.event.special[ orig ] = {
			delegateType: fix,
			bindType: fix,
	
			handle: function( event ) {
				var ret,
					target = this,
					related = event.relatedTarget,
					handleObj = event.handleObj;
	
				// For mouseenter/leave call the handler if related is outside the target.
				// NB: No relatedTarget if the mouse left/entered the browser window
				if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
					event.type = handleObj.origType;
					ret = handleObj.handler.apply( this, arguments );
					event.type = fix;
				}
				return ret;
			}
		};
	} );
	
	jQuery.fn.extend( {
	
		on: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn );
		},
		one: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn, 1 );
		},
		off: function( types, selector, fn ) {
			var handleObj, type;
			if ( types && types.preventDefault && types.handleObj ) {
	
				// ( event )  dispatched jQuery.Event
				handleObj = types.handleObj;
				jQuery( types.delegateTarget ).off(
					handleObj.namespace ?
						handleObj.origType + "." + handleObj.namespace :
						handleObj.origType,
					handleObj.selector,
					handleObj.handler
				);
				return this;
			}
			if ( typeof types === "object" ) {
	
				// ( types-object [, selector] )
				for ( type in types ) {
					this.off( type, selector, types[ type ] );
				}
				return this;
			}
			if ( selector === false || typeof selector === "function" ) {
	
				// ( types [, fn] )
				fn = selector;
				selector = undefined;
			}
			if ( fn === false ) {
				fn = returnFalse;
			}
			return this.each( function() {
				jQuery.event.remove( this, types, fn, selector );
			} );
		}
	} );
	
	
	var
	
		/* eslint-disable max-len */
	
		// See https://github.com/eslint/eslint/issues/3229
		rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
	
		/* eslint-enable */
	
		// Support: IE <=10 - 11, Edge 12 - 13
		// In IE/Edge using regex groups here causes severe slowdowns.
		// See https://connect.microsoft.com/IE/feedback/details/1736512/
		rnoInnerhtml = /<script|<style|<link/i,
	
		// checked="checked" or checked
		rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
		rscriptTypeMasked = /^true\/(.*)/,
		rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
	
	function manipulationTarget( elem, content ) {
		if ( jQuery.nodeName( elem, "table" ) &&
			jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {
	
			return elem.getElementsByTagName( "tbody" )[ 0 ] || elem;
		}
	
		return elem;
	}
	
	// Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript( elem ) {
		elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
		return elem;
	}
	function restoreScript( elem ) {
		var match = rscriptTypeMasked.exec( elem.type );
	
		if ( match ) {
			elem.type = match[ 1 ];
		} else {
			elem.removeAttribute( "type" );
		}
	
		return elem;
	}
	
	function cloneCopyEvent( src, dest ) {
		var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;
	
		if ( dest.nodeType !== 1 ) {
			return;
		}
	
		// 1. Copy private data: events, handlers, etc.
		if ( dataPriv.hasData( src ) ) {
			pdataOld = dataPriv.access( src );
			pdataCur = dataPriv.set( dest, pdataOld );
			events = pdataOld.events;
	
			if ( events ) {
				delete pdataCur.handle;
				pdataCur.events = {};
	
				for ( type in events ) {
					for ( i = 0, l = events[ type ].length; i < l; i++ ) {
						jQuery.event.add( dest, type, events[ type ][ i ] );
					}
				}
			}
		}
	
		// 2. Copy user data
		if ( dataUser.hasData( src ) ) {
			udataOld = dataUser.access( src );
			udataCur = jQuery.extend( {}, udataOld );
	
			dataUser.set( dest, udataCur );
		}
	}
	
	// Fix IE bugs, see support tests
	function fixInput( src, dest ) {
		var nodeName = dest.nodeName.toLowerCase();
	
		// Fails to persist the checked state of a cloned checkbox or radio button.
		if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
			dest.checked = src.checked;
	
		// Fails to return the selected option to the default selected state when cloning options
		} else if ( nodeName === "input" || nodeName === "textarea" ) {
			dest.defaultValue = src.defaultValue;
		}
	}
	
	function domManip( collection, args, callback, ignored ) {
	
		// Flatten any nested arrays
		args = concat.apply( [], args );
	
		var fragment, first, scripts, hasScripts, node, doc,
			i = 0,
			l = collection.length,
			iNoClone = l - 1,
			value = args[ 0 ],
			isFunction = jQuery.isFunction( value );
	
		// We can't cloneNode fragments that contain checked, in WebKit
		if ( isFunction ||
				( l > 1 && typeof value === "string" &&
					!support.checkClone && rchecked.test( value ) ) ) {
			return collection.each( function( index ) {
				var self = collection.eq( index );
				if ( isFunction ) {
					args[ 0 ] = value.call( this, index, self.html() );
				}
				domManip( self, args, callback, ignored );
			} );
		}
	
		if ( l ) {
			fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
			first = fragment.firstChild;
	
			if ( fragment.childNodes.length === 1 ) {
				fragment = first;
			}
	
			// Require either new content or an interest in ignored elements to invoke the callback
			if ( first || ignored ) {
				scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
				hasScripts = scripts.length;
	
				// Use the original fragment for the last item
				// instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for ( ; i < l; i++ ) {
					node = fragment;
	
					if ( i !== iNoClone ) {
						node = jQuery.clone( node, true, true );
	
						// Keep references to cloned scripts for later restoration
						if ( hasScripts ) {
	
							// Support: Android <=4.0 only, PhantomJS 1 only
							// push.apply(_, arraylike) throws on ancient WebKit
							jQuery.merge( scripts, getAll( node, "script" ) );
						}
					}
	
					callback.call( collection[ i ], node, i );
				}
	
				if ( hasScripts ) {
					doc = scripts[ scripts.length - 1 ].ownerDocument;
	
					// Reenable scripts
					jQuery.map( scripts, restoreScript );
	
					// Evaluate executable scripts on first document insertion
					for ( i = 0; i < hasScripts; i++ ) {
						node = scripts[ i ];
						if ( rscriptType.test( node.type || "" ) &&
							!dataPriv.access( node, "globalEval" ) &&
							jQuery.contains( doc, node ) ) {
	
							if ( node.src ) {
	
								// Optional AJAX dependency, but won't run scripts if not present
								if ( jQuery._evalUrl ) {
									jQuery._evalUrl( node.src );
								}
							} else {
								DOMEval( node.textContent.replace( rcleanScript, "" ), doc );
							}
						}
					}
				}
			}
		}
	
		return collection;
	}
	
	function remove( elem, selector, keepData ) {
		var node,
			nodes = selector ? jQuery.filter( selector, elem ) : elem,
			i = 0;
	
		for ( ; ( node = nodes[ i ] ) != null; i++ ) {
			if ( !keepData && node.nodeType === 1 ) {
				jQuery.cleanData( getAll( node ) );
			}
	
			if ( node.parentNode ) {
				if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
					setGlobalEval( getAll( node, "script" ) );
				}
				node.parentNode.removeChild( node );
			}
		}
	
		return elem;
	}
	
	jQuery.extend( {
		htmlPrefilter: function( html ) {
			return html.replace( rxhtmlTag, "<$1></$2>" );
		},
	
		clone: function( elem, dataAndEvents, deepDataAndEvents ) {
			var i, l, srcElements, destElements,
				clone = elem.cloneNode( true ),
				inPage = jQuery.contains( elem.ownerDocument, elem );
	
			// Fix IE cloning issues
			if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
					!jQuery.isXMLDoc( elem ) ) {
	
				// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
				destElements = getAll( clone );
				srcElements = getAll( elem );
	
				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					fixInput( srcElements[ i ], destElements[ i ] );
				}
			}
	
			// Copy the events from the original to the clone
			if ( dataAndEvents ) {
				if ( deepDataAndEvents ) {
					srcElements = srcElements || getAll( elem );
					destElements = destElements || getAll( clone );
	
					for ( i = 0, l = srcElements.length; i < l; i++ ) {
						cloneCopyEvent( srcElements[ i ], destElements[ i ] );
					}
				} else {
					cloneCopyEvent( elem, clone );
				}
			}
	
			// Preserve script evaluation history
			destElements = getAll( clone, "script" );
			if ( destElements.length > 0 ) {
				setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
			}
	
			// Return the cloned set
			return clone;
		},
	
		cleanData: function( elems ) {
			var data, elem, type,
				special = jQuery.event.special,
				i = 0;
	
			for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
				if ( acceptData( elem ) ) {
					if ( ( data = elem[ dataPriv.expando ] ) ) {
						if ( data.events ) {
							for ( type in data.events ) {
								if ( special[ type ] ) {
									jQuery.event.remove( elem, type );
	
								// This is a shortcut to avoid jQuery.event.remove's overhead
								} else {
									jQuery.removeEvent( elem, type, data.handle );
								}
							}
						}
	
						// Support: Chrome <=35 - 45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataPriv.expando ] = undefined;
					}
					if ( elem[ dataUser.expando ] ) {
	
						// Support: Chrome <=35 - 45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataUser.expando ] = undefined;
					}
				}
			}
		}
	} );
	
	jQuery.fn.extend( {
		detach: function( selector ) {
			return remove( this, selector, true );
		},
	
		remove: function( selector ) {
			return remove( this, selector );
		},
	
		text: function( value ) {
			return access( this, function( value ) {
				return value === undefined ?
					jQuery.text( this ) :
					this.empty().each( function() {
						if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
							this.textContent = value;
						}
					} );
			}, null, value, arguments.length );
		},
	
		append: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.appendChild( elem );
				}
			} );
		},
	
		prepend: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.insertBefore( elem, target.firstChild );
				}
			} );
		},
	
		before: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this );
				}
			} );
		},
	
		after: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this.nextSibling );
				}
			} );
		},
	
		empty: function() {
			var elem,
				i = 0;
	
			for ( ; ( elem = this[ i ] ) != null; i++ ) {
				if ( elem.nodeType === 1 ) {
	
					// Prevent memory leaks
					jQuery.cleanData( getAll( elem, false ) );
	
					// Remove any remaining nodes
					elem.textContent = "";
				}
			}
	
			return this;
		},
	
		clone: function( dataAndEvents, deepDataAndEvents ) {
			dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
			deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
	
			return this.map( function() {
				return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
			} );
		},
	
		html: function( value ) {
			return access( this, function( value ) {
				var elem = this[ 0 ] || {},
					i = 0,
					l = this.length;
	
				if ( value === undefined && elem.nodeType === 1 ) {
					return elem.innerHTML;
				}
	
				// See if we can take a shortcut and just use innerHTML
				if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
					!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {
	
					value = jQuery.htmlPrefilter( value );
	
					try {
						for ( ; i < l; i++ ) {
							elem = this[ i ] || {};
	
							// Remove element nodes and prevent memory leaks
							if ( elem.nodeType === 1 ) {
								jQuery.cleanData( getAll( elem, false ) );
								elem.innerHTML = value;
							}
						}
	
						elem = 0;
	
					// If using innerHTML throws an exception, use the fallback method
					} catch ( e ) {}
				}
	
				if ( elem ) {
					this.empty().append( value );
				}
			}, null, value, arguments.length );
		},
	
		replaceWith: function() {
			var ignored = [];
	
			// Make the changes, replacing each non-ignored context element with the new content
			return domManip( this, arguments, function( elem ) {
				var parent = this.parentNode;
	
				if ( jQuery.inArray( this, ignored ) < 0 ) {
					jQuery.cleanData( getAll( this ) );
					if ( parent ) {
						parent.replaceChild( elem, this );
					}
				}
	
			// Force callback invocation
			}, ignored );
		}
	} );
	
	jQuery.each( {
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function( name, original ) {
		jQuery.fn[ name ] = function( selector ) {
			var elems,
				ret = [],
				insert = jQuery( selector ),
				last = insert.length - 1,
				i = 0;
	
			for ( ; i <= last; i++ ) {
				elems = i === last ? this : this.clone( true );
				jQuery( insert[ i ] )[ original ]( elems );
	
				// Support: Android <=4.0 only, PhantomJS 1 only
				// .get() because push.apply(_, arraylike) throws on ancient WebKit
				push.apply( ret, elems.get() );
			}
	
			return this.pushStack( ret );
		};
	} );
	var rmargin = ( /^margin/ );
	
	var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );
	
	var getStyles = function( elem ) {
	
			// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
			// IE throws on elements created in popups
			// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
			var view = elem.ownerDocument.defaultView;
	
			if ( !view || !view.opener ) {
				view = window;
			}
	
			return view.getComputedStyle( elem );
		};
	
	
	
	( function() {
	
		// Executing both pixelPosition & boxSizingReliable tests require only one layout
		// so they're executed at the same time to save the second computation.
		function computeStyleTests() {
	
			// This is a singleton, we need to execute it only once
			if ( !div ) {
				return;
			}
	
			div.style.cssText =
				"box-sizing:border-box;" +
				"position:relative;display:block;" +
				"margin:auto;border:1px;padding:1px;" +
				"top:1%;width:50%";
			div.innerHTML = "";
			documentElement.appendChild( container );
	
			var divStyle = window.getComputedStyle( div );
			pixelPositionVal = divStyle.top !== "1%";
	
			// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
			reliableMarginLeftVal = divStyle.marginLeft === "2px";
			boxSizingReliableVal = divStyle.width === "4px";
	
			// Support: Android 4.0 - 4.3 only
			// Some styles come back with percentage values, even though they shouldn't
			div.style.marginRight = "50%";
			pixelMarginRightVal = divStyle.marginRight === "4px";
	
			documentElement.removeChild( container );
	
			// Nullify the div so it wouldn't be stored in the memory and
			// it will also be a sign that checks already performed
			div = null;
		}
	
		var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
			container = document.createElement( "div" ),
			div = document.createElement( "div" );
	
		// Finish early in limited (non-browser) environments
		if ( !div.style ) {
			return;
		}
	
		// Support: IE <=9 - 11 only
		// Style of cloned element affects source element cloned (#8908)
		div.style.backgroundClip = "content-box";
		div.cloneNode( true ).style.backgroundClip = "";
		support.clearCloneStyle = div.style.backgroundClip === "content-box";
	
		container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
			"padding:0;margin-top:1px;position:absolute";
		container.appendChild( div );
	
		jQuery.extend( support, {
			pixelPosition: function() {
				computeStyleTests();
				return pixelPositionVal;
			},
			boxSizingReliable: function() {
				computeStyleTests();
				return boxSizingReliableVal;
			},
			pixelMarginRight: function() {
				computeStyleTests();
				return pixelMarginRightVal;
			},
			reliableMarginLeft: function() {
				computeStyleTests();
				return reliableMarginLeftVal;
			}
		} );
	} )();
	
	
	function curCSS( elem, name, computed ) {
		var width, minWidth, maxWidth, ret,
			style = elem.style;
	
		computed = computed || getStyles( elem );
	
		// Support: IE <=9 only
		// getPropertyValue is only needed for .css('filter') (#12537)
		if ( computed ) {
			ret = computed.getPropertyValue( name ) || computed[ name ];
	
			if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
				ret = jQuery.style( elem, name );
			}
	
			// A tribute to the "awesome hack by Dean Edwards"
			// Android Browser returns percentage for some values,
			// but width seems to be reliably pixels.
			// This is against the CSSOM draft spec:
			// https://drafts.csswg.org/cssom/#resolved-values
			if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {
	
				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;
	
				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;
	
				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}
	
		return ret !== undefined ?
	
			// Support: IE <=9 - 11 only
			// IE returns zIndex value as an integer.
			ret + "" :
			ret;
	}
	
	
	function addGetHookIf( conditionFn, hookFn ) {
	
		// Define the hook, we'll check on the first run if it's really needed.
		return {
			get: function() {
				if ( conditionFn() ) {
	
					// Hook not needed (or it's not possible to use it due
					// to missing dependency), remove it.
					delete this.get;
					return;
				}
	
				// Hook needed; redefine it so that the support test is not executed again.
				return ( this.get = hookFn ).apply( this, arguments );
			}
		};
	}
	
	
	var
	
		// Swappable if display is none or starts with table
		// except "table", "table-cell", or "table-caption"
		// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
		rdisplayswap = /^(none|table(?!-c[ea]).+)/,
		cssShow = { position: "absolute", visibility: "hidden", display: "block" },
		cssNormalTransform = {
			letterSpacing: "0",
			fontWeight: "400"
		},
	
		cssPrefixes = [ "Webkit", "Moz", "ms" ],
		emptyStyle = document.createElement( "div" ).style;
	
	// Return a css property mapped to a potentially vendor prefixed property
	function vendorPropName( name ) {
	
		// Shortcut for names that are not vendor prefixed
		if ( name in emptyStyle ) {
			return name;
		}
	
		// Check for vendor prefixed names
		var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
			i = cssPrefixes.length;
	
		while ( i-- ) {
			name = cssPrefixes[ i ] + capName;
			if ( name in emptyStyle ) {
				return name;
			}
		}
	}
	
	function setPositiveNumber( elem, value, subtract ) {
	
		// Any relative (+/-) values have already been
		// normalized at this point
		var matches = rcssNum.exec( value );
		return matches ?
	
			// Guard against undefined "subtract", e.g., when used as in cssHooks
			Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
			value;
	}
	
	function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
		var i,
			val = 0;
	
		// If we already have the right measurement, avoid augmentation
		if ( extra === ( isBorderBox ? "border" : "content" ) ) {
			i = 4;
	
		// Otherwise initialize for horizontal or vertical properties
		} else {
			i = name === "width" ? 1 : 0;
		}
	
		for ( ; i < 4; i += 2 ) {
	
			// Both box models exclude margin, so add it if we want it
			if ( extra === "margin" ) {
				val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
			}
	
			if ( isBorderBox ) {
	
				// border-box includes padding, so remove it if we want content
				if ( extra === "content" ) {
					val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
				}
	
				// At this point, extra isn't border nor margin, so remove border
				if ( extra !== "margin" ) {
					val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			} else {
	
				// At this point, extra isn't content, so add padding
				val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
	
				// At this point, extra isn't content nor padding, so add border
				if ( extra !== "padding" ) {
					val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			}
		}
	
		return val;
	}
	
	function getWidthOrHeight( elem, name, extra ) {
	
		// Start with offset property, which is equivalent to the border-box value
		var val,
			valueIsBorderBox = true,
			styles = getStyles( elem ),
			isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";
	
		// Support: IE <=11 only
		// Running getBoundingClientRect on a disconnected node
		// in IE throws an error.
		if ( elem.getClientRects().length ) {
			val = elem.getBoundingClientRect()[ name ];
		}
	
		// Some non-html elements return undefined for offsetWidth, so check for null/undefined
		// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
		// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
		if ( val <= 0 || val == null ) {
	
			// Fall back to computed then uncomputed css if necessary
			val = curCSS( elem, name, styles );
			if ( val < 0 || val == null ) {
				val = elem.style[ name ];
			}
	
			// Computed unit is not pixels. Stop here and return.
			if ( rnumnonpx.test( val ) ) {
				return val;
			}
	
			// Check for style in case a browser which returns unreliable values
			// for getComputedStyle silently falls back to the reliable elem.style
			valueIsBorderBox = isBorderBox &&
				( support.boxSizingReliable() || val === elem.style[ name ] );
	
			// Normalize "", auto, and prepare for extra
			val = parseFloat( val ) || 0;
		}
	
		// Use the active box-sizing model to add/subtract irrelevant styles
		return ( val +
			augmentWidthOrHeight(
				elem,
				name,
				extra || ( isBorderBox ? "border" : "content" ),
				valueIsBorderBox,
				styles
			)
		) + "px";
	}
	
	jQuery.extend( {
	
		// Add in style property hooks for overriding the default
		// behavior of getting and setting a style property
		cssHooks: {
			opacity: {
				get: function( elem, computed ) {
					if ( computed ) {
	
						// We should always get a number back from opacity
						var ret = curCSS( elem, "opacity" );
						return ret === "" ? "1" : ret;
					}
				}
			}
		},
	
		// Don't automatically add "px" to these possibly-unitless properties
		cssNumber: {
			"animationIterationCount": true,
			"columnCount": true,
			"fillOpacity": true,
			"flexGrow": true,
			"flexShrink": true,
			"fontWeight": true,
			"lineHeight": true,
			"opacity": true,
			"order": true,
			"orphans": true,
			"widows": true,
			"zIndex": true,
			"zoom": true
		},
	
		// Add in properties whose names you wish to fix before
		// setting or getting the value
		cssProps: {
			"float": "cssFloat"
		},
	
		// Get and set the style property on a DOM Node
		style: function( elem, name, value, extra ) {
	
			// Don't set styles on text and comment nodes
			if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
				return;
			}
	
			// Make sure that we're working with the right name
			var ret, type, hooks,
				origName = jQuery.camelCase( name ),
				style = elem.style;
	
			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );
	
			// Gets hook for the prefixed version, then unprefixed version
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];
	
			// Check if we're setting a value
			if ( value !== undefined ) {
				type = typeof value;
	
				// Convert "+=" or "-=" to relative numbers (#7345)
				if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
					value = adjustCSS( elem, name, ret );
	
					// Fixes bug #9237
					type = "number";
				}
	
				// Make sure that null and NaN values aren't set (#7116)
				if ( value == null || value !== value ) {
					return;
				}
	
				// If a number was passed in, add the unit (except for certain CSS properties)
				if ( type === "number" ) {
					value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
				}
	
				// background-* props affect original clone's values
				if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
					style[ name ] = "inherit";
				}
	
				// If a hook was provided, use that value, otherwise just set the specified value
				if ( !hooks || !( "set" in hooks ) ||
					( value = hooks.set( elem, value, extra ) ) !== undefined ) {
	
					style[ name ] = value;
				}
	
			} else {
	
				// If a hook was provided get the non-computed value from there
				if ( hooks && "get" in hooks &&
					( ret = hooks.get( elem, false, extra ) ) !== undefined ) {
	
					return ret;
				}
	
				// Otherwise just get the value from the style object
				return style[ name ];
			}
		},
	
		css: function( elem, name, extra, styles ) {
			var val, num, hooks,
				origName = jQuery.camelCase( name );
	
			// Make sure that we're working with the right name
			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );
	
			// Try prefixed name followed by the unprefixed name
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];
	
			// If a hook was provided get the computed value from there
			if ( hooks && "get" in hooks ) {
				val = hooks.get( elem, true, extra );
			}
	
			// Otherwise, if a way to get the computed value exists, use that
			if ( val === undefined ) {
				val = curCSS( elem, name, styles );
			}
	
			// Convert "normal" to computed value
			if ( val === "normal" && name in cssNormalTransform ) {
				val = cssNormalTransform[ name ];
			}
	
			// Make numeric if forced or a qualifier was provided and val looks numeric
			if ( extra === "" || extra ) {
				num = parseFloat( val );
				return extra === true || isFinite( num ) ? num || 0 : val;
			}
			return val;
		}
	} );
	
	jQuery.each( [ "height", "width" ], function( i, name ) {
		jQuery.cssHooks[ name ] = {
			get: function( elem, computed, extra ) {
				if ( computed ) {
	
					// Certain elements can have dimension info if we invisibly show them
					// but it must have a current display style that would benefit
					return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&
	
						// Support: Safari 8+
						// Table columns in Safari have non-zero offsetWidth & zero
						// getBoundingClientRect().width unless display is changed.
						// Support: IE <=11 only
						// Running getBoundingClientRect on a disconnected node
						// in IE throws an error.
						( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
							swap( elem, cssShow, function() {
								return getWidthOrHeight( elem, name, extra );
							} ) :
							getWidthOrHeight( elem, name, extra );
				}
			},
	
			set: function( elem, value, extra ) {
				var matches,
					styles = extra && getStyles( elem ),
					subtract = extra && augmentWidthOrHeight(
						elem,
						name,
						extra,
						jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
						styles
					);
	
				// Convert to pixels if value adjustment is needed
				if ( subtract && ( matches = rcssNum.exec( value ) ) &&
					( matches[ 3 ] || "px" ) !== "px" ) {
	
					elem.style[ name ] = value;
					value = jQuery.css( elem, name );
				}
	
				return setPositiveNumber( elem, value, subtract );
			}
		};
	} );
	
	jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
		function( elem, computed ) {
			if ( computed ) {
				return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
					elem.getBoundingClientRect().left -
						swap( elem, { marginLeft: 0 }, function() {
							return elem.getBoundingClientRect().left;
						} )
					) + "px";
			}
		}
	);
	
	// These hooks are used by animate to expand properties
	jQuery.each( {
		margin: "",
		padding: "",
		border: "Width"
	}, function( prefix, suffix ) {
		jQuery.cssHooks[ prefix + suffix ] = {
			expand: function( value ) {
				var i = 0,
					expanded = {},
	
					// Assumes a single number if not a string
					parts = typeof value === "string" ? value.split( " " ) : [ value ];
	
				for ( ; i < 4; i++ ) {
					expanded[ prefix + cssExpand[ i ] + suffix ] =
						parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
				}
	
				return expanded;
			}
		};
	
		if ( !rmargin.test( prefix ) ) {
			jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
		}
	} );
	
	jQuery.fn.extend( {
		css: function( name, value ) {
			return access( this, function( elem, name, value ) {
				var styles, len,
					map = {},
					i = 0;
	
				if ( jQuery.isArray( name ) ) {
					styles = getStyles( elem );
					len = name.length;
	
					for ( ; i < len; i++ ) {
						map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
					}
	
					return map;
				}
	
				return value !== undefined ?
					jQuery.style( elem, name, value ) :
					jQuery.css( elem, name );
			}, name, value, arguments.length > 1 );
		}
	} );
	
	
	function Tween( elem, options, prop, end, easing ) {
		return new Tween.prototype.init( elem, options, prop, end, easing );
	}
	jQuery.Tween = Tween;
	
	Tween.prototype = {
		constructor: Tween,
		init: function( elem, options, prop, end, easing, unit ) {
			this.elem = elem;
			this.prop = prop;
			this.easing = easing || jQuery.easing._default;
			this.options = options;
			this.start = this.now = this.cur();
			this.end = end;
			this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
		},
		cur: function() {
			var hooks = Tween.propHooks[ this.prop ];
	
			return hooks && hooks.get ?
				hooks.get( this ) :
				Tween.propHooks._default.get( this );
		},
		run: function( percent ) {
			var eased,
				hooks = Tween.propHooks[ this.prop ];
	
			if ( this.options.duration ) {
				this.pos = eased = jQuery.easing[ this.easing ](
					percent, this.options.duration * percent, 0, 1, this.options.duration
				);
			} else {
				this.pos = eased = percent;
			}
			this.now = ( this.end - this.start ) * eased + this.start;
	
			if ( this.options.step ) {
				this.options.step.call( this.elem, this.now, this );
			}
	
			if ( hooks && hooks.set ) {
				hooks.set( this );
			} else {
				Tween.propHooks._default.set( this );
			}
			return this;
		}
	};
	
	Tween.prototype.init.prototype = Tween.prototype;
	
	Tween.propHooks = {
		_default: {
			get: function( tween ) {
				var result;
	
				// Use a property on the element directly when it is not a DOM element,
				// or when there is no matching style property that exists.
				if ( tween.elem.nodeType !== 1 ||
					tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
					return tween.elem[ tween.prop ];
				}
	
				// Passing an empty string as a 3rd parameter to .css will automatically
				// attempt a parseFloat and fallback to a string if the parse fails.
				// Simple values such as "10px" are parsed to Float;
				// complex values such as "rotate(1rad)" are returned as-is.
				result = jQuery.css( tween.elem, tween.prop, "" );
	
				// Empty strings, null, undefined and "auto" are converted to 0.
				return !result || result === "auto" ? 0 : result;
			},
			set: function( tween ) {
	
				// Use step hook for back compat.
				// Use cssHook if its there.
				// Use .style if available and use plain properties where available.
				if ( jQuery.fx.step[ tween.prop ] ) {
					jQuery.fx.step[ tween.prop ]( tween );
				} else if ( tween.elem.nodeType === 1 &&
					( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
						jQuery.cssHooks[ tween.prop ] ) ) {
					jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
				} else {
					tween.elem[ tween.prop ] = tween.now;
				}
			}
		}
	};
	
	// Support: IE <=9 only
	// Panic based approach to setting things on disconnected nodes
	Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
		set: function( tween ) {
			if ( tween.elem.nodeType && tween.elem.parentNode ) {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	};
	
	jQuery.easing = {
		linear: function( p ) {
			return p;
		},
		swing: function( p ) {
			return 0.5 - Math.cos( p * Math.PI ) / 2;
		},
		_default: "swing"
	};
	
	jQuery.fx = Tween.prototype.init;
	
	// Back compat <1.8 extension point
	jQuery.fx.step = {};
	
	
	
	
	var
		fxNow, timerId,
		rfxtypes = /^(?:toggle|show|hide)$/,
		rrun = /queueHooks$/;
	
	function raf() {
		if ( timerId ) {
			window.requestAnimationFrame( raf );
			jQuery.fx.tick();
		}
	}
	
	// Animations created synchronously will run synchronously
	function createFxNow() {
		window.setTimeout( function() {
			fxNow = undefined;
		} );
		return ( fxNow = jQuery.now() );
	}
	
	// Generate parameters to create a standard animation
	function genFx( type, includeWidth ) {
		var which,
			i = 0,
			attrs = { height: type };
	
		// If we include width, step value is 1 to do all cssExpand values,
		// otherwise step value is 2 to skip over Left and Right
		includeWidth = includeWidth ? 1 : 0;
		for ( ; i < 4; i += 2 - includeWidth ) {
			which = cssExpand[ i ];
			attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
		}
	
		if ( includeWidth ) {
			attrs.opacity = attrs.width = type;
		}
	
		return attrs;
	}
	
	function createTween( value, prop, animation ) {
		var tween,
			collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
			index = 0,
			length = collection.length;
		for ( ; index < length; index++ ) {
			if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {
	
				// We're done with this property
				return tween;
			}
		}
	}
	
	function defaultPrefilter( elem, props, opts ) {
		var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
			isBox = "width" in props || "height" in props,
			anim = this,
			orig = {},
			style = elem.style,
			hidden = elem.nodeType && isHiddenWithinTree( elem ),
			dataShow = dataPriv.get( elem, "fxshow" );
	
		// Queue-skipping animations hijack the fx hooks
		if ( !opts.queue ) {
			hooks = jQuery._queueHooks( elem, "fx" );
			if ( hooks.unqueued == null ) {
				hooks.unqueued = 0;
				oldfire = hooks.empty.fire;
				hooks.empty.fire = function() {
					if ( !hooks.unqueued ) {
						oldfire();
					}
				};
			}
			hooks.unqueued++;
	
			anim.always( function() {
	
				// Ensure the complete handler is called before this completes
				anim.always( function() {
					hooks.unqueued--;
					if ( !jQuery.queue( elem, "fx" ).length ) {
						hooks.empty.fire();
					}
				} );
			} );
		}
	
		// Detect show/hide animations
		for ( prop in props ) {
			value = props[ prop ];
			if ( rfxtypes.test( value ) ) {
				delete props[ prop ];
				toggle = toggle || value === "toggle";
				if ( value === ( hidden ? "hide" : "show" ) ) {
	
					// Pretend to be hidden if this is a "show" and
					// there is still data from a stopped show/hide
					if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
						hidden = true;
	
					// Ignore all other no-op show/hide data
					} else {
						continue;
					}
				}
				orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
			}
		}
	
		// Bail out if this is a no-op like .hide().hide()
		propTween = !jQuery.isEmptyObject( props );
		if ( !propTween && jQuery.isEmptyObject( orig ) ) {
			return;
		}
	
		// Restrict "overflow" and "display" styles during box animations
		if ( isBox && elem.nodeType === 1 ) {
	
			// Support: IE <=9 - 11, Edge 12 - 13
			// Record all 3 overflow attributes because IE does not infer the shorthand
			// from identically-valued overflowX and overflowY
			opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];
	
			// Identify a display type, preferring old show/hide data over the CSS cascade
			restoreDisplay = dataShow && dataShow.display;
			if ( restoreDisplay == null ) {
				restoreDisplay = dataPriv.get( elem, "display" );
			}
			display = jQuery.css( elem, "display" );
			if ( display === "none" ) {
				if ( restoreDisplay ) {
					display = restoreDisplay;
				} else {
	
					// Get nonempty value(s) by temporarily forcing visibility
					showHide( [ elem ], true );
					restoreDisplay = elem.style.display || restoreDisplay;
					display = jQuery.css( elem, "display" );
					showHide( [ elem ] );
				}
			}
	
			// Animate inline elements as inline-block
			if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
				if ( jQuery.css( elem, "float" ) === "none" ) {
	
					// Restore the original display value at the end of pure show/hide animations
					if ( !propTween ) {
						anim.done( function() {
							style.display = restoreDisplay;
						} );
						if ( restoreDisplay == null ) {
							display = style.display;
							restoreDisplay = display === "none" ? "" : display;
						}
					}
					style.display = "inline-block";
				}
			}
		}
	
		if ( opts.overflow ) {
			style.overflow = "hidden";
			anim.always( function() {
				style.overflow = opts.overflow[ 0 ];
				style.overflowX = opts.overflow[ 1 ];
				style.overflowY = opts.overflow[ 2 ];
			} );
		}
	
		// Implement show/hide animations
		propTween = false;
		for ( prop in orig ) {
	
			// General show/hide setup for this element animation
			if ( !propTween ) {
				if ( dataShow ) {
					if ( "hidden" in dataShow ) {
						hidden = dataShow.hidden;
					}
				} else {
					dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
				}
	
				// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
				if ( toggle ) {
					dataShow.hidden = !hidden;
				}
	
				// Show elements before animating them
				if ( hidden ) {
					showHide( [ elem ], true );
				}
	
				/* eslint-disable no-loop-func */
	
				anim.done( function() {
	
				/* eslint-enable no-loop-func */
	
					// The final step of a "hide" animation is actually hiding the element
					if ( !hidden ) {
						showHide( [ elem ] );
					}
					dataPriv.remove( elem, "fxshow" );
					for ( prop in orig ) {
						jQuery.style( elem, prop, orig[ prop ] );
					}
				} );
			}
	
			// Per-property setup
			propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
			if ( !( prop in dataShow ) ) {
				dataShow[ prop ] = propTween.start;
				if ( hidden ) {
					propTween.end = propTween.start;
					propTween.start = 0;
				}
			}
		}
	}
	
	function propFilter( props, specialEasing ) {
		var index, name, easing, value, hooks;
	
		// camelCase, specialEasing and expand cssHook pass
		for ( index in props ) {
			name = jQuery.camelCase( index );
			easing = specialEasing[ name ];
			value = props[ index ];
			if ( jQuery.isArray( value ) ) {
				easing = value[ 1 ];
				value = props[ index ] = value[ 0 ];
			}
	
			if ( index !== name ) {
				props[ name ] = value;
				delete props[ index ];
			}
	
			hooks = jQuery.cssHooks[ name ];
			if ( hooks && "expand" in hooks ) {
				value = hooks.expand( value );
				delete props[ name ];
	
				// Not quite $.extend, this won't overwrite existing keys.
				// Reusing 'index' because we have the correct "name"
				for ( index in value ) {
					if ( !( index in props ) ) {
						props[ index ] = value[ index ];
						specialEasing[ index ] = easing;
					}
				}
			} else {
				specialEasing[ name ] = easing;
			}
		}
	}
	
	function Animation( elem, properties, options ) {
		var result,
			stopped,
			index = 0,
			length = Animation.prefilters.length,
			deferred = jQuery.Deferred().always( function() {
	
				// Don't match elem in the :animated selector
				delete tick.elem;
			} ),
			tick = function() {
				if ( stopped ) {
					return false;
				}
				var currentTime = fxNow || createFxNow(),
					remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),
	
					// Support: Android 2.3 only
					// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
					temp = remaining / animation.duration || 0,
					percent = 1 - temp,
					index = 0,
					length = animation.tweens.length;
	
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( percent );
				}
	
				deferred.notifyWith( elem, [ animation, percent, remaining ] );
	
				if ( percent < 1 && length ) {
					return remaining;
				} else {
					deferred.resolveWith( elem, [ animation ] );
					return false;
				}
			},
			animation = deferred.promise( {
				elem: elem,
				props: jQuery.extend( {}, properties ),
				opts: jQuery.extend( true, {
					specialEasing: {},
					easing: jQuery.easing._default
				}, options ),
				originalProperties: properties,
				originalOptions: options,
				startTime: fxNow || createFxNow(),
				duration: options.duration,
				tweens: [],
				createTween: function( prop, end ) {
					var tween = jQuery.Tween( elem, animation.opts, prop, end,
							animation.opts.specialEasing[ prop ] || animation.opts.easing );
					animation.tweens.push( tween );
					return tween;
				},
				stop: function( gotoEnd ) {
					var index = 0,
	
						// If we are going to the end, we want to run all the tweens
						// otherwise we skip this part
						length = gotoEnd ? animation.tweens.length : 0;
					if ( stopped ) {
						return this;
					}
					stopped = true;
					for ( ; index < length; index++ ) {
						animation.tweens[ index ].run( 1 );
					}
	
					// Resolve when we played the last frame; otherwise, reject
					if ( gotoEnd ) {
						deferred.notifyWith( elem, [ animation, 1, 0 ] );
						deferred.resolveWith( elem, [ animation, gotoEnd ] );
					} else {
						deferred.rejectWith( elem, [ animation, gotoEnd ] );
					}
					return this;
				}
			} ),
			props = animation.props;
	
		propFilter( props, animation.opts.specialEasing );
	
		for ( ; index < length; index++ ) {
			result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
			if ( result ) {
				if ( jQuery.isFunction( result.stop ) ) {
					jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
						jQuery.proxy( result.stop, result );
				}
				return result;
			}
		}
	
		jQuery.map( props, createTween, animation );
	
		if ( jQuery.isFunction( animation.opts.start ) ) {
			animation.opts.start.call( elem, animation );
		}
	
		jQuery.fx.timer(
			jQuery.extend( tick, {
				elem: elem,
				anim: animation,
				queue: animation.opts.queue
			} )
		);
	
		// attach callbacks from options
		return animation.progress( animation.opts.progress )
			.done( animation.opts.done, animation.opts.complete )
			.fail( animation.opts.fail )
			.always( animation.opts.always );
	}
	
	jQuery.Animation = jQuery.extend( Animation, {
	
		tweeners: {
			"*": [ function( prop, value ) {
				var tween = this.createTween( prop, value );
				adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
				return tween;
			} ]
		},
	
		tweener: function( props, callback ) {
			if ( jQuery.isFunction( props ) ) {
				callback = props;
				props = [ "*" ];
			} else {
				props = props.match( rnotwhite );
			}
	
			var prop,
				index = 0,
				length = props.length;
	
			for ( ; index < length; index++ ) {
				prop = props[ index ];
				Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
				Animation.tweeners[ prop ].unshift( callback );
			}
		},
	
		prefilters: [ defaultPrefilter ],
	
		prefilter: function( callback, prepend ) {
			if ( prepend ) {
				Animation.prefilters.unshift( callback );
			} else {
				Animation.prefilters.push( callback );
			}
		}
	} );
	
	jQuery.speed = function( speed, easing, fn ) {
		var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
			complete: fn || !fn && easing ||
				jQuery.isFunction( speed ) && speed,
			duration: speed,
			easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
		};
	
		// Go to the end state if fx are off or if document is hidden
		if ( jQuery.fx.off || document.hidden ) {
			opt.duration = 0;
	
		} else {
			if ( typeof opt.duration !== "number" ) {
				if ( opt.duration in jQuery.fx.speeds ) {
					opt.duration = jQuery.fx.speeds[ opt.duration ];
	
				} else {
					opt.duration = jQuery.fx.speeds._default;
				}
			}
		}
	
		// Normalize opt.queue - true/undefined/null -> "fx"
		if ( opt.queue == null || opt.queue === true ) {
			opt.queue = "fx";
		}
	
		// Queueing
		opt.old = opt.complete;
	
		opt.complete = function() {
			if ( jQuery.isFunction( opt.old ) ) {
				opt.old.call( this );
			}
	
			if ( opt.queue ) {
				jQuery.dequeue( this, opt.queue );
			}
		};
	
		return opt;
	};
	
	jQuery.fn.extend( {
		fadeTo: function( speed, to, easing, callback ) {
	
			// Show any hidden elements after setting opacity to 0
			return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()
	
				// Animate to the value specified
				.end().animate( { opacity: to }, speed, easing, callback );
		},
		animate: function( prop, speed, easing, callback ) {
			var empty = jQuery.isEmptyObject( prop ),
				optall = jQuery.speed( speed, easing, callback ),
				doAnimation = function() {
	
					// Operate on a copy of prop so per-property easing won't be lost
					var anim = Animation( this, jQuery.extend( {}, prop ), optall );
	
					// Empty animations, or finishing resolves immediately
					if ( empty || dataPriv.get( this, "finish" ) ) {
						anim.stop( true );
					}
				};
				doAnimation.finish = doAnimation;
	
			return empty || optall.queue === false ?
				this.each( doAnimation ) :
				this.queue( optall.queue, doAnimation );
		},
		stop: function( type, clearQueue, gotoEnd ) {
			var stopQueue = function( hooks ) {
				var stop = hooks.stop;
				delete hooks.stop;
				stop( gotoEnd );
			};
	
			if ( typeof type !== "string" ) {
				gotoEnd = clearQueue;
				clearQueue = type;
				type = undefined;
			}
			if ( clearQueue && type !== false ) {
				this.queue( type || "fx", [] );
			}
	
			return this.each( function() {
				var dequeue = true,
					index = type != null && type + "queueHooks",
					timers = jQuery.timers,
					data = dataPriv.get( this );
	
				if ( index ) {
					if ( data[ index ] && data[ index ].stop ) {
						stopQueue( data[ index ] );
					}
				} else {
					for ( index in data ) {
						if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
							stopQueue( data[ index ] );
						}
					}
				}
	
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this &&
						( type == null || timers[ index ].queue === type ) ) {
	
						timers[ index ].anim.stop( gotoEnd );
						dequeue = false;
						timers.splice( index, 1 );
					}
				}
	
				// Start the next in the queue if the last step wasn't forced.
				// Timers currently will call their complete callbacks, which
				// will dequeue but only if they were gotoEnd.
				if ( dequeue || !gotoEnd ) {
					jQuery.dequeue( this, type );
				}
			} );
		},
		finish: function( type ) {
			if ( type !== false ) {
				type = type || "fx";
			}
			return this.each( function() {
				var index,
					data = dataPriv.get( this ),
					queue = data[ type + "queue" ],
					hooks = data[ type + "queueHooks" ],
					timers = jQuery.timers,
					length = queue ? queue.length : 0;
	
				// Enable finishing flag on private data
				data.finish = true;
	
				// Empty the queue first
				jQuery.queue( this, type, [] );
	
				if ( hooks && hooks.stop ) {
					hooks.stop.call( this, true );
				}
	
				// Look for any active animations, and finish them
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
						timers[ index ].anim.stop( true );
						timers.splice( index, 1 );
					}
				}
	
				// Look for any animations in the old queue and finish them
				for ( index = 0; index < length; index++ ) {
					if ( queue[ index ] && queue[ index ].finish ) {
						queue[ index ].finish.call( this );
					}
				}
	
				// Turn off finishing flag
				delete data.finish;
			} );
		}
	} );
	
	jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
		var cssFn = jQuery.fn[ name ];
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return speed == null || typeof speed === "boolean" ?
				cssFn.apply( this, arguments ) :
				this.animate( genFx( name, true ), speed, easing, callback );
		};
	} );
	
	// Generate shortcuts for custom animations
	jQuery.each( {
		slideDown: genFx( "show" ),
		slideUp: genFx( "hide" ),
		slideToggle: genFx( "toggle" ),
		fadeIn: { opacity: "show" },
		fadeOut: { opacity: "hide" },
		fadeToggle: { opacity: "toggle" }
	}, function( name, props ) {
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return this.animate( props, speed, easing, callback );
		};
	} );
	
	jQuery.timers = [];
	jQuery.fx.tick = function() {
		var timer,
			i = 0,
			timers = jQuery.timers;
	
		fxNow = jQuery.now();
	
		for ( ; i < timers.length; i++ ) {
			timer = timers[ i ];
	
			// Checks the timer has not already been removed
			if ( !timer() && timers[ i ] === timer ) {
				timers.splice( i--, 1 );
			}
		}
	
		if ( !timers.length ) {
			jQuery.fx.stop();
		}
		fxNow = undefined;
	};
	
	jQuery.fx.timer = function( timer ) {
		jQuery.timers.push( timer );
		if ( timer() ) {
			jQuery.fx.start();
		} else {
			jQuery.timers.pop();
		}
	};
	
	jQuery.fx.interval = 13;
	jQuery.fx.start = function() {
		if ( !timerId ) {
			timerId = window.requestAnimationFrame ?
				window.requestAnimationFrame( raf ) :
				window.setInterval( jQuery.fx.tick, jQuery.fx.interval );
		}
	};
	
	jQuery.fx.stop = function() {
		if ( window.cancelAnimationFrame ) {
			window.cancelAnimationFrame( timerId );
		} else {
			window.clearInterval( timerId );
		}
	
		timerId = null;
	};
	
	jQuery.fx.speeds = {
		slow: 600,
		fast: 200,
	
		// Default speed
		_default: 400
	};
	
	
	// Based off of the plugin by Clint Helfers, with permission.
	// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
	jQuery.fn.delay = function( time, type ) {
		time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
		type = type || "fx";
	
		return this.queue( type, function( next, hooks ) {
			var timeout = window.setTimeout( next, time );
			hooks.stop = function() {
				window.clearTimeout( timeout );
			};
		} );
	};
	
	
	( function() {
		var input = document.createElement( "input" ),
			select = document.createElement( "select" ),
			opt = select.appendChild( document.createElement( "option" ) );
	
		input.type = "checkbox";
	
		// Support: Android <=4.3 only
		// Default value for a checkbox should be "on"
		support.checkOn = input.value !== "";
	
		// Support: IE <=11 only
		// Must access selectedIndex to make default options select
		support.optSelected = opt.selected;
	
		// Support: IE <=11 only
		// An input loses its value after becoming a radio
		input = document.createElement( "input" );
		input.value = "t";
		input.type = "radio";
		support.radioValue = input.value === "t";
	} )();
	
	
	var boolHook,
		attrHandle = jQuery.expr.attrHandle;
	
	jQuery.fn.extend( {
		attr: function( name, value ) {
			return access( this, jQuery.attr, name, value, arguments.length > 1 );
		},
	
		removeAttr: function( name ) {
			return this.each( function() {
				jQuery.removeAttr( this, name );
			} );
		}
	} );
	
	jQuery.extend( {
		attr: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;
	
			// Don't get/set attributes on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}
	
			// Fallback to prop when attributes are not supported
			if ( typeof elem.getAttribute === "undefined" ) {
				return jQuery.prop( elem, name, value );
			}
	
			// Attribute hooks are determined by the lowercase version
			// Grab necessary hook if one is defined
			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
				hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
					( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
			}
	
			if ( value !== undefined ) {
				if ( value === null ) {
					jQuery.removeAttr( elem, name );
					return;
				}
	
				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}
	
				elem.setAttribute( name, value + "" );
				return value;
			}
	
			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}
	
			ret = jQuery.find.attr( elem, name );
	
			// Non-existent attributes return null, we normalize to undefined
			return ret == null ? undefined : ret;
		},
	
		attrHooks: {
			type: {
				set: function( elem, value ) {
					if ( !support.radioValue && value === "radio" &&
						jQuery.nodeName( elem, "input" ) ) {
						var val = elem.value;
						elem.setAttribute( "type", value );
						if ( val ) {
							elem.value = val;
						}
						return value;
					}
				}
			}
		},
	
		removeAttr: function( elem, value ) {
			var name,
				i = 0,
				attrNames = value && value.match( rnotwhite );
	
			if ( attrNames && elem.nodeType === 1 ) {
				while ( ( name = attrNames[ i++ ] ) ) {
					elem.removeAttribute( name );
				}
			}
		}
	} );
	
	// Hooks for boolean attributes
	boolHook = {
		set: function( elem, value, name ) {
			if ( value === false ) {
	
				// Remove boolean attributes when set to false
				jQuery.removeAttr( elem, name );
			} else {
				elem.setAttribute( name, name );
			}
			return name;
		}
	};
	
	jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
		var getter = attrHandle[ name ] || jQuery.find.attr;
	
		attrHandle[ name ] = function( elem, name, isXML ) {
			var ret, handle,
				lowercaseName = name.toLowerCase();
	
			if ( !isXML ) {
	
				// Avoid an infinite loop by temporarily removing this function from the getter
				handle = attrHandle[ lowercaseName ];
				attrHandle[ lowercaseName ] = ret;
				ret = getter( elem, name, isXML ) != null ?
					lowercaseName :
					null;
				attrHandle[ lowercaseName ] = handle;
			}
			return ret;
		};
	} );
	
	
	
	
	var rfocusable = /^(?:input|select|textarea|button)$/i,
		rclickable = /^(?:a|area)$/i;
	
	jQuery.fn.extend( {
		prop: function( name, value ) {
			return access( this, jQuery.prop, name, value, arguments.length > 1 );
		},
	
		removeProp: function( name ) {
			return this.each( function() {
				delete this[ jQuery.propFix[ name ] || name ];
			} );
		}
	} );
	
	jQuery.extend( {
		prop: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;
	
			// Don't get/set properties on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}
	
			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
	
				// Fix name and attach hooks
				name = jQuery.propFix[ name ] || name;
				hooks = jQuery.propHooks[ name ];
			}
	
			if ( value !== undefined ) {
				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}
	
				return ( elem[ name ] = value );
			}
	
			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}
	
			return elem[ name ];
		},
	
		propHooks: {
			tabIndex: {
				get: function( elem ) {
	
					// Support: IE <=9 - 11 only
					// elem.tabIndex doesn't always return the
					// correct value when it hasn't been explicitly set
					// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
					// Use proper attribute retrieval(#12072)
					var tabindex = jQuery.find.attr( elem, "tabindex" );
	
					if ( tabindex ) {
						return parseInt( tabindex, 10 );
					}
	
					if (
						rfocusable.test( elem.nodeName ) ||
						rclickable.test( elem.nodeName ) &&
						elem.href
					) {
						return 0;
					}
	
					return -1;
				}
			}
		},
	
		propFix: {
			"for": "htmlFor",
			"class": "className"
		}
	} );
	
	// Support: IE <=11 only
	// Accessing the selectedIndex property
	// forces the browser to respect setting selected
	// on the option
	// The getter ensures a default option is selected
	// when in an optgroup
	// eslint rule "no-unused-expressions" is disabled for this code
	// since it considers such accessions noop
	if ( !support.optSelected ) {
		jQuery.propHooks.selected = {
			get: function( elem ) {
	
				/* eslint no-unused-expressions: "off" */
	
				var parent = elem.parentNode;
				if ( parent && parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
				return null;
			},
			set: function( elem ) {
	
				/* eslint no-unused-expressions: "off" */
	
				var parent = elem.parentNode;
				if ( parent ) {
					parent.selectedIndex;
	
					if ( parent.parentNode ) {
						parent.parentNode.selectedIndex;
					}
				}
			}
		};
	}
	
	jQuery.each( [
		"tabIndex",
		"readOnly",
		"maxLength",
		"cellSpacing",
		"cellPadding",
		"rowSpan",
		"colSpan",
		"useMap",
		"frameBorder",
		"contentEditable"
	], function() {
		jQuery.propFix[ this.toLowerCase() ] = this;
	} );
	
	
	
	
	var rclass = /[\t\r\n\f]/g;
	
	function getClass( elem ) {
		return elem.getAttribute && elem.getAttribute( "class" ) || "";
	}
	
	jQuery.fn.extend( {
		addClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;
	
			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
				} );
			}
	
			if ( typeof value === "string" && value ) {
				classes = value.match( rnotwhite ) || [];
	
				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );
					cur = elem.nodeType === 1 &&
						( " " + curValue + " " ).replace( rclass, " " );
	
					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {
							if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
								cur += clazz + " ";
							}
						}
	
						// Only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}
	
			return this;
		},
	
		removeClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;
	
			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
				} );
			}
	
			if ( !arguments.length ) {
				return this.attr( "class", "" );
			}
	
			if ( typeof value === "string" && value ) {
				classes = value.match( rnotwhite ) || [];
	
				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );
	
					// This expression is here for better compressibility (see addClass)
					cur = elem.nodeType === 1 &&
						( " " + curValue + " " ).replace( rclass, " " );
	
					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {
	
							// Remove *all* instances
							while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
								cur = cur.replace( " " + clazz + " ", " " );
							}
						}
	
						// Only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}
	
			return this;
		},
	
		toggleClass: function( value, stateVal ) {
			var type = typeof value;
	
			if ( typeof stateVal === "boolean" && type === "string" ) {
				return stateVal ? this.addClass( value ) : this.removeClass( value );
			}
	
			if ( jQuery.isFunction( value ) ) {
				return this.each( function( i ) {
					jQuery( this ).toggleClass(
						value.call( this, i, getClass( this ), stateVal ),
						stateVal
					);
				} );
			}
	
			return this.each( function() {
				var className, i, self, classNames;
	
				if ( type === "string" ) {
	
					// Toggle individual class names
					i = 0;
					self = jQuery( this );
					classNames = value.match( rnotwhite ) || [];
	
					while ( ( className = classNames[ i++ ] ) ) {
	
						// Check each className given, space separated list
						if ( self.hasClass( className ) ) {
							self.removeClass( className );
						} else {
							self.addClass( className );
						}
					}
	
				// Toggle whole class name
				} else if ( value === undefined || type === "boolean" ) {
					className = getClass( this );
					if ( className ) {
	
						// Store className if set
						dataPriv.set( this, "__className__", className );
					}
	
					// If the element has a class name or if we're passed `false`,
					// then remove the whole classname (if there was one, the above saved it).
					// Otherwise bring back whatever was previously saved (if anything),
					// falling back to the empty string if nothing was stored.
					if ( this.setAttribute ) {
						this.setAttribute( "class",
							className || value === false ?
							"" :
							dataPriv.get( this, "__className__" ) || ""
						);
					}
				}
			} );
		},
	
		hasClass: function( selector ) {
			var className, elem,
				i = 0;
	
			className = " " + selector + " ";
			while ( ( elem = this[ i++ ] ) ) {
				if ( elem.nodeType === 1 &&
					( " " + getClass( elem ) + " " ).replace( rclass, " " )
						.indexOf( className ) > -1
				) {
					return true;
				}
			}
	
			return false;
		}
	} );
	
	
	
	
	var rreturn = /\r/g,
		rspaces = /[\x20\t\r\n\f]+/g;
	
	jQuery.fn.extend( {
		val: function( value ) {
			var hooks, ret, isFunction,
				elem = this[ 0 ];
	
			if ( !arguments.length ) {
				if ( elem ) {
					hooks = jQuery.valHooks[ elem.type ] ||
						jQuery.valHooks[ elem.nodeName.toLowerCase() ];
	
					if ( hooks &&
						"get" in hooks &&
						( ret = hooks.get( elem, "value" ) ) !== undefined
					) {
						return ret;
					}
	
					ret = elem.value;
	
					// Handle most common string cases
					if ( typeof ret === "string" ) {
						return ret.replace( rreturn, "" );
					}
	
					// Handle cases where value is null/undef or number
					return ret == null ? "" : ret;
				}
	
				return;
			}
	
			isFunction = jQuery.isFunction( value );
	
			return this.each( function( i ) {
				var val;
	
				if ( this.nodeType !== 1 ) {
					return;
				}
	
				if ( isFunction ) {
					val = value.call( this, i, jQuery( this ).val() );
				} else {
					val = value;
				}
	
				// Treat null/undefined as ""; convert numbers to string
				if ( val == null ) {
					val = "";
	
				} else if ( typeof val === "number" ) {
					val += "";
	
				} else if ( jQuery.isArray( val ) ) {
					val = jQuery.map( val, function( value ) {
						return value == null ? "" : value + "";
					} );
				}
	
				hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];
	
				// If set returns undefined, fall back to normal setting
				if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
					this.value = val;
				}
			} );
		}
	} );
	
	jQuery.extend( {
		valHooks: {
			option: {
				get: function( elem ) {
	
					var val = jQuery.find.attr( elem, "value" );
					return val != null ?
						val :
	
						// Support: IE <=10 - 11 only
						// option.text throws exceptions (#14686, #14858)
						// Strip and collapse whitespace
						// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
						jQuery.trim( jQuery.text( elem ) ).replace( rspaces, " " );
				}
			},
			select: {
				get: function( elem ) {
					var value, option, i,
						options = elem.options,
						index = elem.selectedIndex,
						one = elem.type === "select-one",
						values = one ? null : [],
						max = one ? index + 1 : options.length;
	
					if ( index < 0 ) {
						i = max;
	
					} else {
						i = one ? index : 0;
					}
	
					// Loop through all the selected options
					for ( ; i < max; i++ ) {
						option = options[ i ];
	
						// Support: IE <=9 only
						// IE8-9 doesn't update selected after form reset (#2551)
						if ( ( option.selected || i === index ) &&
	
								// Don't return options that are disabled or in a disabled optgroup
								!option.disabled &&
								( !option.parentNode.disabled ||
									!jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {
	
							// Get the specific value for the option
							value = jQuery( option ).val();
	
							// We don't need an array for one selects
							if ( one ) {
								return value;
							}
	
							// Multi-Selects return an array
							values.push( value );
						}
					}
	
					return values;
				},
	
				set: function( elem, value ) {
					var optionSet, option,
						options = elem.options,
						values = jQuery.makeArray( value ),
						i = options.length;
	
					while ( i-- ) {
						option = options[ i ];
	
						/* eslint-disable no-cond-assign */
	
						if ( option.selected =
							jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
						) {
							optionSet = true;
						}
	
						/* eslint-enable no-cond-assign */
					}
	
					// Force browsers to behave consistently when non-matching value is set
					if ( !optionSet ) {
						elem.selectedIndex = -1;
					}
					return values;
				}
			}
		}
	} );
	
	// Radios and checkboxes getter/setter
	jQuery.each( [ "radio", "checkbox" ], function() {
		jQuery.valHooks[ this ] = {
			set: function( elem, value ) {
				if ( jQuery.isArray( value ) ) {
					return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
				}
			}
		};
		if ( !support.checkOn ) {
			jQuery.valHooks[ this ].get = function( elem ) {
				return elem.getAttribute( "value" ) === null ? "on" : elem.value;
			};
		}
	} );
	
	
	
	
	// Return jQuery for attributes-only inclusion
	
	
	var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;
	
	jQuery.extend( jQuery.event, {
	
		trigger: function( event, data, elem, onlyHandlers ) {
	
			var i, cur, tmp, bubbleType, ontype, handle, special,
				eventPath = [ elem || document ],
				type = hasOwn.call( event, "type" ) ? event.type : event,
				namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];
	
			cur = tmp = elem = elem || document;
	
			// Don't do events on text and comment nodes
			if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
				return;
			}
	
			// focus/blur morphs to focusin/out; ensure we're not firing them right now
			if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
				return;
			}
	
			if ( type.indexOf( "." ) > -1 ) {
	
				// Namespaced trigger; create a regexp to match event type in handle()
				namespaces = type.split( "." );
				type = namespaces.shift();
				namespaces.sort();
			}
			ontype = type.indexOf( ":" ) < 0 && "on" + type;
	
			// Caller can pass in a jQuery.Event object, Object, or just an event type string
			event = event[ jQuery.expando ] ?
				event :
				new jQuery.Event( type, typeof event === "object" && event );
	
			// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
			event.isTrigger = onlyHandlers ? 2 : 3;
			event.namespace = namespaces.join( "." );
			event.rnamespace = event.namespace ?
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
				null;
	
			// Clean up the event in case it is being reused
			event.result = undefined;
			if ( !event.target ) {
				event.target = elem;
			}
	
			// Clone any incoming data and prepend the event, creating the handler arg list
			data = data == null ?
				[ event ] :
				jQuery.makeArray( data, [ event ] );
	
			// Allow special events to draw outside the lines
			special = jQuery.event.special[ type ] || {};
			if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
				return;
			}
	
			// Determine event propagation path in advance, per W3C events spec (#9951)
			// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
			if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {
	
				bubbleType = special.delegateType || type;
				if ( !rfocusMorph.test( bubbleType + type ) ) {
					cur = cur.parentNode;
				}
				for ( ; cur; cur = cur.parentNode ) {
					eventPath.push( cur );
					tmp = cur;
				}
	
				// Only add window if we got to document (e.g., not plain obj or detached DOM)
				if ( tmp === ( elem.ownerDocument || document ) ) {
					eventPath.push( tmp.defaultView || tmp.parentWindow || window );
				}
			}
	
			// Fire handlers on the event path
			i = 0;
			while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
	
				event.type = i > 1 ?
					bubbleType :
					special.bindType || type;
	
				// jQuery handler
				handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
					dataPriv.get( cur, "handle" );
				if ( handle ) {
					handle.apply( cur, data );
				}
	
				// Native handler
				handle = ontype && cur[ ontype ];
				if ( handle && handle.apply && acceptData( cur ) ) {
					event.result = handle.apply( cur, data );
					if ( event.result === false ) {
						event.preventDefault();
					}
				}
			}
			event.type = type;
	
			// If nobody prevented the default action, do it now
			if ( !onlyHandlers && !event.isDefaultPrevented() ) {
	
				if ( ( !special._default ||
					special._default.apply( eventPath.pop(), data ) === false ) &&
					acceptData( elem ) ) {
	
					// Call a native DOM method on the target with the same name as the event.
					// Don't do default actions on window, that's where global variables be (#6170)
					if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {
	
						// Don't re-trigger an onFOO event when we call its FOO() method
						tmp = elem[ ontype ];
	
						if ( tmp ) {
							elem[ ontype ] = null;
						}
	
						// Prevent re-triggering of the same event, since we already bubbled it above
						jQuery.event.triggered = type;
						elem[ type ]();
						jQuery.event.triggered = undefined;
	
						if ( tmp ) {
							elem[ ontype ] = tmp;
						}
					}
				}
			}
	
			return event.result;
		},
	
		// Piggyback on a donor event to simulate a different one
		// Used only for `focus(in | out)` events
		simulate: function( type, elem, event ) {
			var e = jQuery.extend(
				new jQuery.Event(),
				event,
				{
					type: type,
					isSimulated: true
				}
			);
	
			jQuery.event.trigger( e, null, elem );
		}
	
	} );
	
	jQuery.fn.extend( {
	
		trigger: function( type, data ) {
			return this.each( function() {
				jQuery.event.trigger( type, data, this );
			} );
		},
		triggerHandler: function( type, data ) {
			var elem = this[ 0 ];
			if ( elem ) {
				return jQuery.event.trigger( type, data, elem, true );
			}
		}
	} );
	
	
	jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
		"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
		"change select submit keydown keypress keyup contextmenu" ).split( " " ),
		function( i, name ) {
	
		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	} );
	
	jQuery.fn.extend( {
		hover: function( fnOver, fnOut ) {
			return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
		}
	} );
	
	
	
	
	support.focusin = "onfocusin" in window;
	
	
	// Support: Firefox <=44
	// Firefox doesn't have focus(in | out) events
	// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
	//
	// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
	// focus(in | out) events fire after focus & blur events,
	// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
	// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
	if ( !support.focusin ) {
		jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {
	
			// Attach a single capturing handler on the document while someone wants focusin/focusout
			var handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
			};
	
			jQuery.event.special[ fix ] = {
				setup: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix );
	
					if ( !attaches ) {
						doc.addEventListener( orig, handler, true );
					}
					dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
				},
				teardown: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix ) - 1;
	
					if ( !attaches ) {
						doc.removeEventListener( orig, handler, true );
						dataPriv.remove( doc, fix );
	
					} else {
						dataPriv.access( doc, fix, attaches );
					}
				}
			};
		} );
	}
	var location = window.location;
	
	var nonce = jQuery.now();
	
	var rquery = ( /\?/ );
	
	
	
	// Cross-browser xml parsing
	jQuery.parseXML = function( data ) {
		var xml;
		if ( !data || typeof data !== "string" ) {
			return null;
		}
	
		// Support: IE 9 - 11 only
		// IE throws on parseFromString with invalid input.
		try {
			xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
		} catch ( e ) {
			xml = undefined;
		}
	
		if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
			jQuery.error( "Invalid XML: " + data );
		}
		return xml;
	};
	
	
	var
		rbracket = /\[\]$/,
		rCRLF = /\r?\n/g,
		rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
		rsubmittable = /^(?:input|select|textarea|keygen)/i;
	
	function buildParams( prefix, obj, traditional, add ) {
		var name;
	
		if ( jQuery.isArray( obj ) ) {
	
			// Serialize array item.
			jQuery.each( obj, function( i, v ) {
				if ( traditional || rbracket.test( prefix ) ) {
	
					// Treat each array item as a scalar.
					add( prefix, v );
	
				} else {
	
					// Item is non-scalar (array or object), encode its numeric index.
					buildParams(
						prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
						v,
						traditional,
						add
					);
				}
			} );
	
		} else if ( !traditional && jQuery.type( obj ) === "object" ) {
	
			// Serialize object item.
			for ( name in obj ) {
				buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
			}
	
		} else {
	
			// Serialize scalar item.
			add( prefix, obj );
		}
	}
	
	// Serialize an array of form elements or a set of
	// key/values into a query string
	jQuery.param = function( a, traditional ) {
		var prefix,
			s = [],
			add = function( key, valueOrFunction ) {
	
				// If value is a function, invoke it and use its return value
				var value = jQuery.isFunction( valueOrFunction ) ?
					valueOrFunction() :
					valueOrFunction;
	
				s[ s.length ] = encodeURIComponent( key ) + "=" +
					encodeURIComponent( value == null ? "" : value );
			};
	
		// If an array was passed in, assume that it is an array of form elements.
		if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {
	
			// Serialize the form elements
			jQuery.each( a, function() {
				add( this.name, this.value );
			} );
	
		} else {
	
			// If traditional, encode the "old" way (the way 1.3.2 or older
			// did it), otherwise encode params recursively.
			for ( prefix in a ) {
				buildParams( prefix, a[ prefix ], traditional, add );
			}
		}
	
		// Return the resulting serialization
		return s.join( "&" );
	};
	
	jQuery.fn.extend( {
		serialize: function() {
			return jQuery.param( this.serializeArray() );
		},
		serializeArray: function() {
			return this.map( function() {
	
				// Can add propHook for "elements" to filter or add form elements
				var elements = jQuery.prop( this, "elements" );
				return elements ? jQuery.makeArray( elements ) : this;
			} )
			.filter( function() {
				var type = this.type;
	
				// Use .is( ":disabled" ) so that fieldset[disabled] works
				return this.name && !jQuery( this ).is( ":disabled" ) &&
					rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
					( this.checked || !rcheckableType.test( type ) );
			} )
			.map( function( i, elem ) {
				var val = jQuery( this ).val();
	
				if ( val == null ) {
					return null;
				}
	
				if ( jQuery.isArray( val ) ) {
					return jQuery.map( val, function( val ) {
						return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
					} );
				}
	
				return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
			} ).get();
		}
	} );
	
	
	var
		r20 = /%20/g,
		rhash = /#.*$/,
		rantiCache = /([?&])_=[^&]*/,
		rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,
	
		// #7653, #8125, #8152: local protocol detection
		rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		rnoContent = /^(?:GET|HEAD)$/,
		rprotocol = /^\/\//,
	
		/* Prefilters
		 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
		 * 2) These are called:
		 *    - BEFORE asking for a transport
		 *    - AFTER param serialization (s.data is a string if s.processData is true)
		 * 3) key is the dataType
		 * 4) the catchall symbol "*" can be used
		 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
		 */
		prefilters = {},
	
		/* Transports bindings
		 * 1) key is the dataType
		 * 2) the catchall symbol "*" can be used
		 * 3) selection will start with transport dataType and THEN go to "*" if needed
		 */
		transports = {},
	
		// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
		allTypes = "*/".concat( "*" ),
	
		// Anchor tag for parsing the document origin
		originAnchor = document.createElement( "a" );
		originAnchor.href = location.href;
	
	// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports( structure ) {
	
		// dataTypeExpression is optional and defaults to "*"
		return function( dataTypeExpression, func ) {
	
			if ( typeof dataTypeExpression !== "string" ) {
				func = dataTypeExpression;
				dataTypeExpression = "*";
			}
	
			var dataType,
				i = 0,
				dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];
	
			if ( jQuery.isFunction( func ) ) {
	
				// For each dataType in the dataTypeExpression
				while ( ( dataType = dataTypes[ i++ ] ) ) {
	
					// Prepend if requested
					if ( dataType[ 0 ] === "+" ) {
						dataType = dataType.slice( 1 ) || "*";
						( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );
	
					// Otherwise append
					} else {
						( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
					}
				}
			}
		};
	}
	
	// Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {
	
		var inspected = {},
			seekingTransport = ( structure === transports );
	
		function inspect( dataType ) {
			var selected;
			inspected[ dataType ] = true;
			jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
				var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
				if ( typeof dataTypeOrTransport === "string" &&
					!seekingTransport && !inspected[ dataTypeOrTransport ] ) {
	
					options.dataTypes.unshift( dataTypeOrTransport );
					inspect( dataTypeOrTransport );
					return false;
				} else if ( seekingTransport ) {
					return !( selected = dataTypeOrTransport );
				}
			} );
			return selected;
		}
	
		return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
	}
	
	// A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend( target, src ) {
		var key, deep,
			flatOptions = jQuery.ajaxSettings.flatOptions || {};
	
		for ( key in src ) {
			if ( src[ key ] !== undefined ) {
				( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
			}
		}
		if ( deep ) {
			jQuery.extend( true, target, deep );
		}
	
		return target;
	}
	
	/* Handles responses to an ajax request:
	 * - finds the right dataType (mediates between content-type and expected dataType)
	 * - returns the corresponding response
	 */
	function ajaxHandleResponses( s, jqXHR, responses ) {
	
		var ct, type, finalDataType, firstDataType,
			contents = s.contents,
			dataTypes = s.dataTypes;
	
		// Remove auto dataType and get content-type in the process
		while ( dataTypes[ 0 ] === "*" ) {
			dataTypes.shift();
			if ( ct === undefined ) {
				ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
			}
		}
	
		// Check if we're dealing with a known content-type
		if ( ct ) {
			for ( type in contents ) {
				if ( contents[ type ] && contents[ type ].test( ct ) ) {
					dataTypes.unshift( type );
					break;
				}
			}
		}
	
		// Check to see if we have a response for the expected dataType
		if ( dataTypes[ 0 ] in responses ) {
			finalDataType = dataTypes[ 0 ];
		} else {
	
			// Try convertible dataTypes
			for ( type in responses ) {
				if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
					finalDataType = type;
					break;
				}
				if ( !firstDataType ) {
					firstDataType = type;
				}
			}
	
			// Or just use first one
			finalDataType = finalDataType || firstDataType;
		}
	
		// If we found a dataType
		// We add the dataType to the list if needed
		// and return the corresponding response
		if ( finalDataType ) {
			if ( finalDataType !== dataTypes[ 0 ] ) {
				dataTypes.unshift( finalDataType );
			}
			return responses[ finalDataType ];
		}
	}
	
	/* Chain conversions given the request and the original response
	 * Also sets the responseXXX fields on the jqXHR instance
	 */
	function ajaxConvert( s, response, jqXHR, isSuccess ) {
		var conv2, current, conv, tmp, prev,
			converters = {},
	
			// Work with a copy of dataTypes in case we need to modify it for conversion
			dataTypes = s.dataTypes.slice();
	
		// Create converters map with lowercased keys
		if ( dataTypes[ 1 ] ) {
			for ( conv in s.converters ) {
				converters[ conv.toLowerCase() ] = s.converters[ conv ];
			}
		}
	
		current = dataTypes.shift();
	
		// Convert to each sequential dataType
		while ( current ) {
	
			if ( s.responseFields[ current ] ) {
				jqXHR[ s.responseFields[ current ] ] = response;
			}
	
			// Apply the dataFilter if provided
			if ( !prev && isSuccess && s.dataFilter ) {
				response = s.dataFilter( response, s.dataType );
			}
	
			prev = current;
			current = dataTypes.shift();
	
			if ( current ) {
	
				// There's only work to do if current dataType is non-auto
				if ( current === "*" ) {
	
					current = prev;
	
				// Convert response if prev dataType is non-auto and differs from current
				} else if ( prev !== "*" && prev !== current ) {
	
					// Seek a direct converter
					conv = converters[ prev + " " + current ] || converters[ "* " + current ];
	
					// If none found, seek a pair
					if ( !conv ) {
						for ( conv2 in converters ) {
	
							// If conv2 outputs current
							tmp = conv2.split( " " );
							if ( tmp[ 1 ] === current ) {
	
								// If prev can be converted to accepted input
								conv = converters[ prev + " " + tmp[ 0 ] ] ||
									converters[ "* " + tmp[ 0 ] ];
								if ( conv ) {
	
									// Condense equivalence converters
									if ( conv === true ) {
										conv = converters[ conv2 ];
	
									// Otherwise, insert the intermediate dataType
									} else if ( converters[ conv2 ] !== true ) {
										current = tmp[ 0 ];
										dataTypes.unshift( tmp[ 1 ] );
									}
									break;
								}
							}
						}
					}
	
					// Apply converter (if not an equivalence)
					if ( conv !== true ) {
	
						// Unless errors are allowed to bubble, catch and return them
						if ( conv && s.throws ) {
							response = conv( response );
						} else {
							try {
								response = conv( response );
							} catch ( e ) {
								return {
									state: "parsererror",
									error: conv ? e : "No conversion from " + prev + " to " + current
								};
							}
						}
					}
				}
			}
		}
	
		return { state: "success", data: response };
	}
	
	jQuery.extend( {
	
		// Counter for holding the number of active queries
		active: 0,
	
		// Last-Modified header cache for next request
		lastModified: {},
		etag: {},
	
		ajaxSettings: {
			url: location.href,
			type: "GET",
			isLocal: rlocalProtocol.test( location.protocol ),
			global: true,
			processData: true,
			async: true,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
	
			/*
			timeout: 0,
			data: null,
			dataType: null,
			username: null,
			password: null,
			cache: null,
			throws: false,
			traditional: false,
			headers: {},
			*/
	
			accepts: {
				"*": allTypes,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
	
			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},
	
			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
	
			// Data converters
			// Keys separate source (or catchall "*") and destination types with a single space
			converters: {
	
				// Convert anything to text
				"* text": String,
	
				// Text to html (true = no transformation)
				"text html": true,
	
				// Evaluate text as a json expression
				"text json": JSON.parse,
	
				// Parse text as xml
				"text xml": jQuery.parseXML
			},
	
			// For options that shouldn't be deep extended:
			// you can add your own custom options here if
			// and when you create one that shouldn't be
			// deep extended (see ajaxExtend)
			flatOptions: {
				url: true,
				context: true
			}
		},
	
		// Creates a full fledged settings object into target
		// with both ajaxSettings and settings fields.
		// If target is omitted, writes into ajaxSettings.
		ajaxSetup: function( target, settings ) {
			return settings ?
	
				// Building a settings object
				ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :
	
				// Extending ajaxSettings
				ajaxExtend( jQuery.ajaxSettings, target );
		},
	
		ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
		ajaxTransport: addToPrefiltersOrTransports( transports ),
	
		// Main method
		ajax: function( url, options ) {
	
			// If url is an object, simulate pre-1.5 signature
			if ( typeof url === "object" ) {
				options = url;
				url = undefined;
			}
	
			// Force options to be an object
			options = options || {};
	
			var transport,
	
				// URL without anti-cache param
				cacheURL,
	
				// Response headers
				responseHeadersString,
				responseHeaders,
	
				// timeout handle
				timeoutTimer,
	
				// Url cleanup var
				urlAnchor,
	
				// Request state (becomes false upon send and true upon completion)
				completed,
	
				// To know if global events are to be dispatched
				fireGlobals,
	
				// Loop variable
				i,
	
				// uncached part of the url
				uncached,
	
				// Create the final options object
				s = jQuery.ajaxSetup( {}, options ),
	
				// Callbacks context
				callbackContext = s.context || s,
	
				// Context for global events is callbackContext if it is a DOM node or jQuery collection
				globalEventContext = s.context &&
					( callbackContext.nodeType || callbackContext.jquery ) ?
						jQuery( callbackContext ) :
						jQuery.event,
	
				// Deferreds
				deferred = jQuery.Deferred(),
				completeDeferred = jQuery.Callbacks( "once memory" ),
	
				// Status-dependent callbacks
				statusCode = s.statusCode || {},
	
				// Headers (they are sent all at once)
				requestHeaders = {},
				requestHeadersNames = {},
	
				// Default abort message
				strAbort = "canceled",
	
				// Fake xhr
				jqXHR = {
					readyState: 0,
	
					// Builds headers hashtable if needed
					getResponseHeader: function( key ) {
						var match;
						if ( completed ) {
							if ( !responseHeaders ) {
								responseHeaders = {};
								while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
									responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
								}
							}
							match = responseHeaders[ key.toLowerCase() ];
						}
						return match == null ? null : match;
					},
	
					// Raw string
					getAllResponseHeaders: function() {
						return completed ? responseHeadersString : null;
					},
	
					// Caches the header
					setRequestHeader: function( name, value ) {
						if ( completed == null ) {
							name = requestHeadersNames[ name.toLowerCase() ] =
								requestHeadersNames[ name.toLowerCase() ] || name;
							requestHeaders[ name ] = value;
						}
						return this;
					},
	
					// Overrides response content-type header
					overrideMimeType: function( type ) {
						if ( completed == null ) {
							s.mimeType = type;
						}
						return this;
					},
	
					// Status-dependent callbacks
					statusCode: function( map ) {
						var code;
						if ( map ) {
							if ( completed ) {
	
								// Execute the appropriate callbacks
								jqXHR.always( map[ jqXHR.status ] );
							} else {
	
								// Lazy-add the new callbacks in a way that preserves old ones
								for ( code in map ) {
									statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
								}
							}
						}
						return this;
					},
	
					// Cancel the request
					abort: function( statusText ) {
						var finalText = statusText || strAbort;
						if ( transport ) {
							transport.abort( finalText );
						}
						done( 0, finalText );
						return this;
					}
				};
	
			// Attach deferreds
			deferred.promise( jqXHR );
	
			// Add protocol if not provided (prefilters might expect it)
			// Handle falsy url in the settings object (#10093: consistency with old signature)
			// We also use the url parameter if available
			s.url = ( ( url || s.url || location.href ) + "" )
				.replace( rprotocol, location.protocol + "//" );
	
			// Alias method option to type as per ticket #12004
			s.type = options.method || options.type || s.method || s.type;
	
			// Extract dataTypes list
			s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];
	
			// A cross-domain request is in order when the origin doesn't match the current origin.
			if ( s.crossDomain == null ) {
				urlAnchor = document.createElement( "a" );
	
				// Support: IE <=8 - 11, Edge 12 - 13
				// IE throws exception on accessing the href property if url is malformed,
				// e.g. http://example.com:80x/
				try {
					urlAnchor.href = s.url;
	
					// Support: IE <=8 - 11 only
					// Anchor's host property isn't correctly set when s.url is relative
					urlAnchor.href = urlAnchor.href;
					s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
						urlAnchor.protocol + "//" + urlAnchor.host;
				} catch ( e ) {
	
					// If there is an error parsing the URL, assume it is crossDomain,
					// it can be rejected by the transport if it is invalid
					s.crossDomain = true;
				}
			}
	
			// Convert data if not already a string
			if ( s.data && s.processData && typeof s.data !== "string" ) {
				s.data = jQuery.param( s.data, s.traditional );
			}
	
			// Apply prefilters
			inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );
	
			// If request was aborted inside a prefilter, stop there
			if ( completed ) {
				return jqXHR;
			}
	
			// We can fire global events as of now if asked to
			// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
			fireGlobals = jQuery.event && s.global;
	
			// Watch for a new set of requests
			if ( fireGlobals && jQuery.active++ === 0 ) {
				jQuery.event.trigger( "ajaxStart" );
			}
	
			// Uppercase the type
			s.type = s.type.toUpperCase();
	
			// Determine if request has content
			s.hasContent = !rnoContent.test( s.type );
	
			// Save the URL in case we're toying with the If-Modified-Since
			// and/or If-None-Match header later on
			// Remove hash to simplify url manipulation
			cacheURL = s.url.replace( rhash, "" );
	
			// More options handling for requests with no content
			if ( !s.hasContent ) {
	
				// Remember the hash so we can put it back
				uncached = s.url.slice( cacheURL.length );
	
				// If data is available, append data to url
				if ( s.data ) {
					cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;
	
					// #9682: remove data so that it's not used in an eventual retry
					delete s.data;
				}
	
				// Add or update anti-cache param if needed
				if ( s.cache === false ) {
					cacheURL = cacheURL.replace( rantiCache, "$1" );
					uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
				}
	
				// Put hash and anti-cache on the URL that will be requested (gh-1732)
				s.url = cacheURL + uncached;
	
			// Change '%20' to '+' if this is encoded form body content (gh-2658)
			} else if ( s.data && s.processData &&
				( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
				s.data = s.data.replace( r20, "+" );
			}
	
			// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
			if ( s.ifModified ) {
				if ( jQuery.lastModified[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
				}
				if ( jQuery.etag[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
				}
			}
	
			// Set the correct header, if data is being sent
			if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
				jqXHR.setRequestHeader( "Content-Type", s.contentType );
			}
	
			// Set the Accepts header for the server, depending on the dataType
			jqXHR.setRequestHeader(
				"Accept",
				s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
					s.accepts[ s.dataTypes[ 0 ] ] +
						( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
					s.accepts[ "*" ]
			);
	
			// Check for headers option
			for ( i in s.headers ) {
				jqXHR.setRequestHeader( i, s.headers[ i ] );
			}
	
			// Allow custom headers/mimetypes and early abort
			if ( s.beforeSend &&
				( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {
	
				// Abort if not done already and return
				return jqXHR.abort();
			}
	
			// Aborting is no longer a cancellation
			strAbort = "abort";
	
			// Install callbacks on deferreds
			completeDeferred.add( s.complete );
			jqXHR.done( s.success );
			jqXHR.fail( s.error );
	
			// Get transport
			transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );
	
			// If no transport, we auto-abort
			if ( !transport ) {
				done( -1, "No Transport" );
			} else {
				jqXHR.readyState = 1;
	
				// Send global event
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
				}
	
				// If request was aborted inside ajaxSend, stop there
				if ( completed ) {
					return jqXHR;
				}
	
				// Timeout
				if ( s.async && s.timeout > 0 ) {
					timeoutTimer = window.setTimeout( function() {
						jqXHR.abort( "timeout" );
					}, s.timeout );
				}
	
				try {
					completed = false;
					transport.send( requestHeaders, done );
				} catch ( e ) {
	
					// Rethrow post-completion exceptions
					if ( completed ) {
						throw e;
					}
	
					// Propagate others as results
					done( -1, e );
				}
			}
	
			// Callback for when everything is done
			function done( status, nativeStatusText, responses, headers ) {
				var isSuccess, success, error, response, modified,
					statusText = nativeStatusText;
	
				// Ignore repeat invocations
				if ( completed ) {
					return;
				}
	
				completed = true;
	
				// Clear timeout if it exists
				if ( timeoutTimer ) {
					window.clearTimeout( timeoutTimer );
				}
	
				// Dereference transport for early garbage collection
				// (no matter how long the jqXHR object will be used)
				transport = undefined;
	
				// Cache response headers
				responseHeadersString = headers || "";
	
				// Set readyState
				jqXHR.readyState = status > 0 ? 4 : 0;
	
				// Determine if successful
				isSuccess = status >= 200 && status < 300 || status === 304;
	
				// Get response data
				if ( responses ) {
					response = ajaxHandleResponses( s, jqXHR, responses );
				}
	
				// Convert no matter what (that way responseXXX fields are always set)
				response = ajaxConvert( s, response, jqXHR, isSuccess );
	
				// If successful, handle type chaining
				if ( isSuccess ) {
	
					// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
					if ( s.ifModified ) {
						modified = jqXHR.getResponseHeader( "Last-Modified" );
						if ( modified ) {
							jQuery.lastModified[ cacheURL ] = modified;
						}
						modified = jqXHR.getResponseHeader( "etag" );
						if ( modified ) {
							jQuery.etag[ cacheURL ] = modified;
						}
					}
	
					// if no content
					if ( status === 204 || s.type === "HEAD" ) {
						statusText = "nocontent";
	
					// if not modified
					} else if ( status === 304 ) {
						statusText = "notmodified";
	
					// If we have data, let's convert it
					} else {
						statusText = response.state;
						success = response.data;
						error = response.error;
						isSuccess = !error;
					}
				} else {
	
					// Extract error from statusText and normalize for non-aborts
					error = statusText;
					if ( status || !statusText ) {
						statusText = "error";
						if ( status < 0 ) {
							status = 0;
						}
					}
				}
	
				// Set data for the fake xhr object
				jqXHR.status = status;
				jqXHR.statusText = ( nativeStatusText || statusText ) + "";
	
				// Success/Error
				if ( isSuccess ) {
					deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
				} else {
					deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
				}
	
				// Status-dependent callbacks
				jqXHR.statusCode( statusCode );
				statusCode = undefined;
	
				if ( fireGlobals ) {
					globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
						[ jqXHR, s, isSuccess ? success : error ] );
				}
	
				// Complete
				completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );
	
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );
	
					// Handle the global AJAX counter
					if ( !( --jQuery.active ) ) {
						jQuery.event.trigger( "ajaxStop" );
					}
				}
			}
	
			return jqXHR;
		},
	
		getJSON: function( url, data, callback ) {
			return jQuery.get( url, data, callback, "json" );
		},
	
		getScript: function( url, callback ) {
			return jQuery.get( url, undefined, callback, "script" );
		}
	} );
	
	jQuery.each( [ "get", "post" ], function( i, method ) {
		jQuery[ method ] = function( url, data, callback, type ) {
	
			// Shift arguments if data argument was omitted
			if ( jQuery.isFunction( data ) ) {
				type = type || callback;
				callback = data;
				data = undefined;
			}
	
			// The url can be an options object (which then must have .url)
			return jQuery.ajax( jQuery.extend( {
				url: url,
				type: method,
				dataType: type,
				data: data,
				success: callback
			}, jQuery.isPlainObject( url ) && url ) );
		};
	} );
	
	
	jQuery._evalUrl = function( url ) {
		return jQuery.ajax( {
			url: url,
	
			// Make this explicit, since user can override this through ajaxSetup (#11264)
			type: "GET",
			dataType: "script",
			cache: true,
			async: false,
			global: false,
			"throws": true
		} );
	};
	
	
	jQuery.fn.extend( {
		wrapAll: function( html ) {
			var wrap;
	
			if ( this[ 0 ] ) {
				if ( jQuery.isFunction( html ) ) {
					html = html.call( this[ 0 ] );
				}
	
				// The elements to wrap the target around
				wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );
	
				if ( this[ 0 ].parentNode ) {
					wrap.insertBefore( this[ 0 ] );
				}
	
				wrap.map( function() {
					var elem = this;
	
					while ( elem.firstElementChild ) {
						elem = elem.firstElementChild;
					}
	
					return elem;
				} ).append( this );
			}
	
			return this;
		},
	
		wrapInner: function( html ) {
			if ( jQuery.isFunction( html ) ) {
				return this.each( function( i ) {
					jQuery( this ).wrapInner( html.call( this, i ) );
				} );
			}
	
			return this.each( function() {
				var self = jQuery( this ),
					contents = self.contents();
	
				if ( contents.length ) {
					contents.wrapAll( html );
	
				} else {
					self.append( html );
				}
			} );
		},
	
		wrap: function( html ) {
			var isFunction = jQuery.isFunction( html );
	
			return this.each( function( i ) {
				jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
			} );
		},
	
		unwrap: function( selector ) {
			this.parent( selector ).not( "body" ).each( function() {
				jQuery( this ).replaceWith( this.childNodes );
			} );
			return this;
		}
	} );
	
	
	jQuery.expr.pseudos.hidden = function( elem ) {
		return !jQuery.expr.pseudos.visible( elem );
	};
	jQuery.expr.pseudos.visible = function( elem ) {
		return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
	};
	
	
	
	
	jQuery.ajaxSettings.xhr = function() {
		try {
			return new window.XMLHttpRequest();
		} catch ( e ) {}
	};
	
	var xhrSuccessStatus = {
	
			// File protocol always yields status code 0, assume 200
			0: 200,
	
			// Support: IE <=9 only
			// #1450: sometimes IE returns 1223 when it should be 204
			1223: 204
		},
		xhrSupported = jQuery.ajaxSettings.xhr();
	
	support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
	support.ajax = xhrSupported = !!xhrSupported;
	
	jQuery.ajaxTransport( function( options ) {
		var callback, errorCallback;
	
		// Cross domain only allowed if supported through XMLHttpRequest
		if ( support.cors || xhrSupported && !options.crossDomain ) {
			return {
				send: function( headers, complete ) {
					var i,
						xhr = options.xhr();
	
					xhr.open(
						options.type,
						options.url,
						options.async,
						options.username,
						options.password
					);
	
					// Apply custom fields if provided
					if ( options.xhrFields ) {
						for ( i in options.xhrFields ) {
							xhr[ i ] = options.xhrFields[ i ];
						}
					}
	
					// Override mime type if needed
					if ( options.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( options.mimeType );
					}
	
					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
						headers[ "X-Requested-With" ] = "XMLHttpRequest";
					}
	
					// Set headers
					for ( i in headers ) {
						xhr.setRequestHeader( i, headers[ i ] );
					}
	
					// Callback
					callback = function( type ) {
						return function() {
							if ( callback ) {
								callback = errorCallback = xhr.onload =
									xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;
	
								if ( type === "abort" ) {
									xhr.abort();
								} else if ( type === "error" ) {
	
									// Support: IE <=9 only
									// On a manual native abort, IE9 throws
									// errors on any property access that is not readyState
									if ( typeof xhr.status !== "number" ) {
										complete( 0, "error" );
									} else {
										complete(
	
											// File: protocol always yields status 0; see #8605, #14207
											xhr.status,
											xhr.statusText
										);
									}
								} else {
									complete(
										xhrSuccessStatus[ xhr.status ] || xhr.status,
										xhr.statusText,
	
										// Support: IE <=9 only
										// IE9 has no XHR2 but throws on binary (trac-11426)
										// For XHR2 non-text, let the caller handle it (gh-2498)
										( xhr.responseType || "text" ) !== "text"  ||
										typeof xhr.responseText !== "string" ?
											{ binary: xhr.response } :
											{ text: xhr.responseText },
										xhr.getAllResponseHeaders()
									);
								}
							}
						};
					};
	
					// Listen to events
					xhr.onload = callback();
					errorCallback = xhr.onerror = callback( "error" );
	
					// Support: IE 9 only
					// Use onreadystatechange to replace onabort
					// to handle uncaught aborts
					if ( xhr.onabort !== undefined ) {
						xhr.onabort = errorCallback;
					} else {
						xhr.onreadystatechange = function() {
	
							// Check readyState before timeout as it changes
							if ( xhr.readyState === 4 ) {
	
								// Allow onerror to be called first,
								// but that will not handle a native abort
								// Also, save errorCallback to a variable
								// as xhr.onerror cannot be accessed
								window.setTimeout( function() {
									if ( callback ) {
										errorCallback();
									}
								} );
							}
						};
					}
	
					// Create the abort callback
					callback = callback( "abort" );
	
					try {
	
						// Do send the request (this may raise an exception)
						xhr.send( options.hasContent && options.data || null );
					} catch ( e ) {
	
						// #14683: Only rethrow if this hasn't been notified as an error yet
						if ( callback ) {
							throw e;
						}
					}
				},
	
				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );
	
	
	
	
	// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
	jQuery.ajaxPrefilter( function( s ) {
		if ( s.crossDomain ) {
			s.contents.script = false;
		}
	} );
	
	// Install script dataType
	jQuery.ajaxSetup( {
		accepts: {
			script: "text/javascript, application/javascript, " +
				"application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function( text ) {
				jQuery.globalEval( text );
				return text;
			}
		}
	} );
	
	// Handle cache's special case and crossDomain
	jQuery.ajaxPrefilter( "script", function( s ) {
		if ( s.cache === undefined ) {
			s.cache = false;
		}
		if ( s.crossDomain ) {
			s.type = "GET";
		}
	} );
	
	// Bind script tag hack transport
	jQuery.ajaxTransport( "script", function( s ) {
	
		// This transport only deals with cross domain requests
		if ( s.crossDomain ) {
			var script, callback;
			return {
				send: function( _, complete ) {
					script = jQuery( "<script>" ).prop( {
						charset: s.scriptCharset,
						src: s.url
					} ).on(
						"load error",
						callback = function( evt ) {
							script.remove();
							callback = null;
							if ( evt ) {
								complete( evt.type === "error" ? 404 : 200, evt.type );
							}
						}
					);
	
					// Use native DOM manipulation to avoid our domManip AJAX trickery
					document.head.appendChild( script[ 0 ] );
				},
				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );
	
	
	
	
	var oldCallbacks = [],
		rjsonp = /(=)\?(?=&|$)|\?\?/;
	
	// Default jsonp settings
	jQuery.ajaxSetup( {
		jsonp: "callback",
		jsonpCallback: function() {
			var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
			this[ callback ] = true;
			return callback;
		}
	} );
	
	// Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {
	
		var callbackName, overwritten, responseContainer,
			jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
				"url" :
				typeof s.data === "string" &&
					( s.contentType || "" )
						.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
					rjsonp.test( s.data ) && "data"
			);
	
		// Handle iff the expected data type is "jsonp" or we have a parameter to set
		if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {
	
			// Get callback name, remembering preexisting value associated with it
			callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
				s.jsonpCallback() :
				s.jsonpCallback;
	
			// Insert callback into url or form data
			if ( jsonProp ) {
				s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
			} else if ( s.jsonp !== false ) {
				s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
			}
	
			// Use data converter to retrieve json after script execution
			s.converters[ "script json" ] = function() {
				if ( !responseContainer ) {
					jQuery.error( callbackName + " was not called" );
				}
				return responseContainer[ 0 ];
			};
	
			// Force json dataType
			s.dataTypes[ 0 ] = "json";
	
			// Install callback
			overwritten = window[ callbackName ];
			window[ callbackName ] = function() {
				responseContainer = arguments;
			};
	
			// Clean-up function (fires after converters)
			jqXHR.always( function() {
	
				// If previous value didn't exist - remove it
				if ( overwritten === undefined ) {
					jQuery( window ).removeProp( callbackName );
	
				// Otherwise restore preexisting value
				} else {
					window[ callbackName ] = overwritten;
				}
	
				// Save back as free
				if ( s[ callbackName ] ) {
	
					// Make sure that re-using the options doesn't screw things around
					s.jsonpCallback = originalSettings.jsonpCallback;
	
					// Save the callback name for future use
					oldCallbacks.push( callbackName );
				}
	
				// Call if it was a function and we have a response
				if ( responseContainer && jQuery.isFunction( overwritten ) ) {
					overwritten( responseContainer[ 0 ] );
				}
	
				responseContainer = overwritten = undefined;
			} );
	
			// Delegate to script
			return "script";
		}
	} );
	
	
	
	
	// Support: Safari 8 only
	// In Safari 8 documents created via document.implementation.createHTMLDocument
	// collapse sibling forms: the second one becomes a child of the first one.
	// Because of that, this security measure has to be disabled in Safari 8.
	// https://bugs.webkit.org/show_bug.cgi?id=137337
	support.createHTMLDocument = ( function() {
		var body = document.implementation.createHTMLDocument( "" ).body;
		body.innerHTML = "<form></form><form></form>";
		return body.childNodes.length === 2;
	} )();
	
	
	// Argument "data" should be string of html
	// context (optional): If specified, the fragment will be created in this context,
	// defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	jQuery.parseHTML = function( data, context, keepScripts ) {
		if ( typeof data !== "string" ) {
			return [];
		}
		if ( typeof context === "boolean" ) {
			keepScripts = context;
			context = false;
		}
	
		var base, parsed, scripts;
	
		if ( !context ) {
	
			// Stop scripts or inline event handlers from being executed immediately
			// by using document.implementation
			if ( support.createHTMLDocument ) {
				context = document.implementation.createHTMLDocument( "" );
	
				// Set the base href for the created document
				// so any parsed elements with URLs
				// are based on the document's URL (gh-2965)
				base = context.createElement( "base" );
				base.href = document.location.href;
				context.head.appendChild( base );
			} else {
				context = document;
			}
		}
	
		parsed = rsingleTag.exec( data );
		scripts = !keepScripts && [];
	
		// Single tag
		if ( parsed ) {
			return [ context.createElement( parsed[ 1 ] ) ];
		}
	
		parsed = buildFragment( [ data ], context, scripts );
	
		if ( scripts && scripts.length ) {
			jQuery( scripts ).remove();
		}
	
		return jQuery.merge( [], parsed.childNodes );
	};
	
	
	/**
	 * Load a url into a page
	 */
	jQuery.fn.load = function( url, params, callback ) {
		var selector, type, response,
			self = this,
			off = url.indexOf( " " );
	
		if ( off > -1 ) {
			selector = jQuery.trim( url.slice( off ) );
			url = url.slice( 0, off );
		}
	
		// If it's a function
		if ( jQuery.isFunction( params ) ) {
	
			// We assume that it's the callback
			callback = params;
			params = undefined;
	
		// Otherwise, build a param string
		} else if ( params && typeof params === "object" ) {
			type = "POST";
		}
	
		// If we have elements to modify, make the request
		if ( self.length > 0 ) {
			jQuery.ajax( {
				url: url,
	
				// If "type" variable is undefined, then "GET" method will be used.
				// Make value of this field explicit since
				// user can override it through ajaxSetup method
				type: type || "GET",
				dataType: "html",
				data: params
			} ).done( function( responseText ) {
	
				// Save response for use in complete callback
				response = arguments;
	
				self.html( selector ?
	
					// If a selector was specified, locate the right elements in a dummy div
					// Exclude scripts to avoid IE 'Permission Denied' errors
					jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :
	
					// Otherwise use the full result
					responseText );
	
			// If the request succeeds, this function gets "data", "status", "jqXHR"
			// but they are ignored because response was set above.
			// If it fails, this function gets "jqXHR", "status", "error"
			} ).always( callback && function( jqXHR, status ) {
				self.each( function() {
					callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
				} );
			} );
		}
	
		return this;
	};
	
	
	
	
	// Attach a bunch of functions for handling common AJAX events
	jQuery.each( [
		"ajaxStart",
		"ajaxStop",
		"ajaxComplete",
		"ajaxError",
		"ajaxSuccess",
		"ajaxSend"
	], function( i, type ) {
		jQuery.fn[ type ] = function( fn ) {
			return this.on( type, fn );
		};
	} );
	
	
	
	
	jQuery.expr.pseudos.animated = function( elem ) {
		return jQuery.grep( jQuery.timers, function( fn ) {
			return elem === fn.elem;
		} ).length;
	};
	
	
	
	
	/**
	 * Gets a window from an element
	 */
	function getWindow( elem ) {
		return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
	}
	
	jQuery.offset = {
		setOffset: function( elem, options, i ) {
			var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
				position = jQuery.css( elem, "position" ),
				curElem = jQuery( elem ),
				props = {};
	
			// Set position first, in-case top/left are set even on static elem
			if ( position === "static" ) {
				elem.style.position = "relative";
			}
	
			curOffset = curElem.offset();
			curCSSTop = jQuery.css( elem, "top" );
			curCSSLeft = jQuery.css( elem, "left" );
			calculatePosition = ( position === "absolute" || position === "fixed" ) &&
				( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;
	
			// Need to be able to calculate position if either
			// top or left is auto and position is either absolute or fixed
			if ( calculatePosition ) {
				curPosition = curElem.position();
				curTop = curPosition.top;
				curLeft = curPosition.left;
	
			} else {
				curTop = parseFloat( curCSSTop ) || 0;
				curLeft = parseFloat( curCSSLeft ) || 0;
			}
	
			if ( jQuery.isFunction( options ) ) {
	
				// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
				options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
			}
	
			if ( options.top != null ) {
				props.top = ( options.top - curOffset.top ) + curTop;
			}
			if ( options.left != null ) {
				props.left = ( options.left - curOffset.left ) + curLeft;
			}
	
			if ( "using" in options ) {
				options.using.call( elem, props );
	
			} else {
				curElem.css( props );
			}
		}
	};
	
	jQuery.fn.extend( {
		offset: function( options ) {
	
			// Preserve chaining for setter
			if ( arguments.length ) {
				return options === undefined ?
					this :
					this.each( function( i ) {
						jQuery.offset.setOffset( this, options, i );
					} );
			}
	
			var docElem, win, rect, doc,
				elem = this[ 0 ];
	
			if ( !elem ) {
				return;
			}
	
			// Support: IE <=11 only
			// Running getBoundingClientRect on a
			// disconnected node in IE throws an error
			if ( !elem.getClientRects().length ) {
				return { top: 0, left: 0 };
			}
	
			rect = elem.getBoundingClientRect();
	
			// Make sure element is not hidden (display: none)
			if ( rect.width || rect.height ) {
				doc = elem.ownerDocument;
				win = getWindow( doc );
				docElem = doc.documentElement;
	
				return {
					top: rect.top + win.pageYOffset - docElem.clientTop,
					left: rect.left + win.pageXOffset - docElem.clientLeft
				};
			}
	
			// Return zeros for disconnected and hidden elements (gh-2310)
			return rect;
		},
	
		position: function() {
			if ( !this[ 0 ] ) {
				return;
			}
	
			var offsetParent, offset,
				elem = this[ 0 ],
				parentOffset = { top: 0, left: 0 };
	
			// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
			// because it is its only offset parent
			if ( jQuery.css( elem, "position" ) === "fixed" ) {
	
				// Assume getBoundingClientRect is there when computed position is fixed
				offset = elem.getBoundingClientRect();
	
			} else {
	
				// Get *real* offsetParent
				offsetParent = this.offsetParent();
	
				// Get correct offsets
				offset = this.offset();
				if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
					parentOffset = offsetParent.offset();
				}
	
				// Add offsetParent borders
				parentOffset = {
					top: parentOffset.top + jQuery.css( offsetParent[ 0 ], "borderTopWidth", true ),
					left: parentOffset.left + jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true )
				};
			}
	
			// Subtract parent offsets and element margins
			return {
				top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
				left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
			};
		},
	
		// This method will return documentElement in the following cases:
		// 1) For the element inside the iframe without offsetParent, this method will return
		//    documentElement of the parent window
		// 2) For the hidden or detached element
		// 3) For body or html element, i.e. in case of the html node - it will return itself
		//
		// but those exceptions were never presented as a real life use-cases
		// and might be considered as more preferable results.
		//
		// This logic, however, is not guaranteed and can change at any point in the future
		offsetParent: function() {
			return this.map( function() {
				var offsetParent = this.offsetParent;
	
				while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
					offsetParent = offsetParent.offsetParent;
				}
	
				return offsetParent || documentElement;
			} );
		}
	} );
	
	// Create scrollLeft and scrollTop methods
	jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
		var top = "pageYOffset" === prop;
	
		jQuery.fn[ method ] = function( val ) {
			return access( this, function( elem, method, val ) {
				var win = getWindow( elem );
	
				if ( val === undefined ) {
					return win ? win[ prop ] : elem[ method ];
				}
	
				if ( win ) {
					win.scrollTo(
						!top ? val : win.pageXOffset,
						top ? val : win.pageYOffset
					);
	
				} else {
					elem[ method ] = val;
				}
			}, method, val, arguments.length );
		};
	} );
	
	// Support: Safari <=7 - 9.1, Chrome <=37 - 49
	// Add the top/left cssHooks using jQuery.fn.position
	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
	// getComputedStyle returns percent when specified for top/left/bottom/right;
	// rather than make the css module depend on the offset module, just check for it here
	jQuery.each( [ "top", "left" ], function( i, prop ) {
		jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
			function( elem, computed ) {
				if ( computed ) {
					computed = curCSS( elem, prop );
	
					// If curCSS returns percentage, fallback to offset
					return rnumnonpx.test( computed ) ?
						jQuery( elem ).position()[ prop ] + "px" :
						computed;
				}
			}
		);
	} );
	
	
	// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
		jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
			function( defaultExtra, funcName ) {
	
			// Margin is only for outerHeight, outerWidth
			jQuery.fn[ funcName ] = function( margin, value ) {
				var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
					extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );
	
				return access( this, function( elem, type, value ) {
					var doc;
	
					if ( jQuery.isWindow( elem ) ) {
	
						// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
						return funcName.indexOf( "outer" ) === 0 ?
							elem[ "inner" + name ] :
							elem.document.documentElement[ "client" + name ];
					}
	
					// Get document width or height
					if ( elem.nodeType === 9 ) {
						doc = elem.documentElement;
	
						// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
						// whichever is greatest
						return Math.max(
							elem.body[ "scroll" + name ], doc[ "scroll" + name ],
							elem.body[ "offset" + name ], doc[ "offset" + name ],
							doc[ "client" + name ]
						);
					}
	
					return value === undefined ?
	
						// Get width or height on the element, requesting but not forcing parseFloat
						jQuery.css( elem, type, extra ) :
	
						// Set width or height on the element
						jQuery.style( elem, type, value, extra );
				}, type, chainable ? margin : undefined, chainable );
			};
		} );
	} );
	
	
	jQuery.fn.extend( {
	
		bind: function( types, data, fn ) {
			return this.on( types, null, data, fn );
		},
		unbind: function( types, fn ) {
			return this.off( types, null, fn );
		},
	
		delegate: function( selector, types, data, fn ) {
			return this.on( types, selector, data, fn );
		},
		undelegate: function( selector, types, fn ) {
	
			// ( namespace ) or ( selector, types [, fn] )
			return arguments.length === 1 ?
				this.off( selector, "**" ) :
				this.off( types, selector || "**", fn );
		}
	} );
	
	jQuery.parseJSON = JSON.parse;
	
	
	
	
	// Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.
	
	// Note that for maximum portability, libraries that are not jQuery should
	// declare themselves as anonymous modules, and avoid setting a global if an
	// AMD loader is present. jQuery is a special case. For more information, see
	// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon
	
	if ( true ) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return jQuery;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}
	
	
	
	
	var
	
		// Map over jQuery in case of overwrite
		_jQuery = window.jQuery,
	
		// Map over the $ in case of overwrite
		_$ = window.$;
	
	jQuery.noConflict = function( deep ) {
		if ( window.$ === jQuery ) {
			window.$ = _$;
		}
	
		if ( deep && window.jQuery === jQuery ) {
			window.jQuery = _jQuery;
		}
	
		return jQuery;
	};
	
	// Expose jQuery and $ identifiers, even in AMD
	// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (#13566)
	if ( !noGlobal ) {
		window.jQuery = window.$ = jQuery;
	}
	
	
	
	
	
	return jQuery;
	} );


/***/ },
/* 3 */
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
	    var Router = __webpack_require__( /*! properjs-router */ 4 ),
	        Controller = __webpack_require__( /*! properjs-controller */ 9 ),
	
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
/* 4 */
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
	
	    var PushState = __webpack_require__( /*! properjs-pushstate */ 5 ),
	        MatchRoute = __webpack_require__( /*! properjs-matchroute */ 6 ),
	        matchElement = __webpack_require__( /*! properjs-matchelement */ 8 ),
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
/* 5 */
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
/* 6 */
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
	
	    var paramalama = __webpack_require__( /*! paramalama */ 7 ),
	
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
/* 7 */
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
/* 8 */
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
/* 9 */
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
/* 10 */
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
	
	var _api = __webpack_require__(/*! ./api */ 11);
	
	var _api2 = _interopRequireDefault(_api);
	
	var _detect = __webpack_require__(/*! ./detect */ 19);
	
	var _detect2 = _interopRequireDefault(_detect);
	
	var _dom = __webpack_require__(/*! ./dom */ 16);
	
	var _dom2 = _interopRequireDefault(_dom);
	
	var _images = __webpack_require__(/*! ./images */ 23);
	
	var _images2 = _interopRequireDefault(_images);
	
	var _resizes = __webpack_require__(/*! ./resizes */ 25);
	
	var _resizes2 = _interopRequireDefault(_resizes);
	
	var _scrolls = __webpack_require__(/*! ./scrolls */ 30);
	
	var _scrolls2 = _interopRequireDefault(_scrolls);
	
	var _util = __webpack_require__(/*! ./util */ 12);
	
	var util = _interopRequireWildcard(_util);
	
	var _config = __webpack_require__(/*! ./config */ 17);
	
	var _config2 = _interopRequireDefault(_config);
	
	var _env = __webpack_require__(/*! ./env */ 21);
	
	var _env2 = _interopRequireDefault(_env);
	
	var _log = __webpack_require__(/*! ./log */ 20);
	
	var _log2 = _interopRequireDefault(_log);
	
	var _Waypoints = __webpack_require__(/*! ./Waypoints */ 33);
	
	var _Waypoints2 = _interopRequireDefault(_Waypoints);
	
	var _cache = __webpack_require__(/*! ./cache */ 34);
	
	var _cache2 = _interopRequireDefault(_cache);
	
	var _Analytics = __webpack_require__(/*! ./Analytics */ 36);
	
	var _Analytics2 = _interopRequireDefault(_Analytics);
	
	var _emitter = __webpack_require__(/*! ./emitter */ 22);
	
	var _emitter2 = _interopRequireDefault(_emitter);
	
	var _mediabox = __webpack_require__(/*! ./mediabox */ 37);
	
	var _mediabox2 = _interopRequireDefault(_mediabox);
	
	var _scroller = __webpack_require__(/*! ./scroller */ 31);
	
	var _scroller2 = _interopRequireDefault(_scroller);
	
	var _resizer = __webpack_require__(/*! ./resizer */ 26);
	
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
/* 11 */
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
	
	var _js_libsJqueryDistJqueryJs = __webpack_require__(/*! js_libs/jquery/dist/jquery.js */ 2);
	
	var _js_libsJqueryDistJqueryJs2 = _interopRequireDefault(_js_libsJqueryDistJqueryJs);
	
	var _util = __webpack_require__(/*! ./util */ 12);
	
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
	
	        return _js_libsJqueryDistJqueryJs2["default"].ajax(opts);
	    }
	};
	
	/******************************************************************************
	 * Export
	*******************************************************************************/
	exports["default"] = api;
	module.exports = exports["default"];

/***/ },
/* 12 */
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
	
	var _js_libsJqueryDistJqueryJs = __webpack_require__(/*! js_libs/jquery/dist/jquery.js */ 2);
	
	var _js_libsJqueryDistJqueryJs2 = _interopRequireDefault(_js_libsJqueryDistJqueryJs);
	
	var _properjsImageloader = __webpack_require__(/*! properjs-imageloader */ 13);
	
	var _properjsImageloader2 = _interopRequireDefault(_properjsImageloader);
	
	var _fgLoadcss = __webpack_require__(/*! fg-loadcss */ 14);
	
	var _fgLoadcss2 = _interopRequireDefault(_fgLoadcss);
	
	var _fgLoadjs = __webpack_require__(/*! fg-loadjs */ 15);
	
	var _fgLoadjs2 = _interopRequireDefault(_fgLoadjs);
	
	var _dom = __webpack_require__(/*! ./dom */ 16);
	
	var _dom2 = _interopRequireDefault(_dom);
	
	var _config = __webpack_require__(/*! ./config */ 17);
	
	var _config2 = _interopRequireDefault(_config);
	
	var _detect = __webpack_require__(/*! ./detect */ 19);
	
	var _detect2 = _interopRequireDefault(_detect);
	
	var _emitter = __webpack_require__(/*! ./emitter */ 22);
	
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
	
	    return (0, _js_libsJqueryDistJqueryJs2["default"])(ret);
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
	    images = images || (0, _js_libsJqueryDistJqueryJs2["default"])(_config2["default"].lazyImageSelector);
	
	    // Hook here to determine image variant sizes to load ?
	    _emitter2["default"].fire("app--util--load-images", images);
	
	    return new _properjsImageloader2["default"]({
	        elements: images,
	        property: _config2["default"].lazyImageAttr,
	        transitionDelay: 200
	
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
/* 13 */
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
/* 14 */
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
/* 15 */
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
/* 16 */
/*!****************************!*\
  !*** ./js_src/core/dom.js ***!
  \****************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _js_libsJqueryDistJqueryJs = __webpack_require__(/*! js_libs/jquery/dist/jquery.js */ 2);
	
	var _js_libsJqueryDistJqueryJs2 = _interopRequireDefault(_js_libsJqueryDistJqueryJs);
	
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
	  doc: (0, _js_libsJqueryDistJqueryJs2["default"])(document),
	
	  /**
	   *
	   * @public
	   * @member html
	   * @memberof core.dom
	   * @description The cached documentElement node.
	   *
	   */
	  html: (0, _js_libsJqueryDistJqueryJs2["default"])(document.documentElement),
	
	  /**
	   *
	   * @public
	   * @member body
	   * @memberof core.dom
	   * @description The cached body node.
	   *
	   */
	  body: (0, _js_libsJqueryDistJqueryJs2["default"])(document.body),
	
	  /**
	   *
	   * @public
	   * @member page
	   * @memberof core.dom
	   * @description The cached page container node.
	   *
	   */
	  page: (0, _js_libsJqueryDistJqueryJs2["default"])(".js-page"),
	
	  /**
	   *
	   * @public
	   * @member nav
	   * @memberof core.dom
	   * @description The cached nav node.
	   *
	   */
	  nav: (0, _js_libsJqueryDistJqueryJs2["default"])(".js-nav"),
	
	  /**
	   *
	   * @public
	   * @member header
	   * @memberof core.dom
	   * @description The cached header node.
	   *
	   */
	  header: (0, _js_libsJqueryDistJqueryJs2["default"])(".js-header"),
	
	  /**
	   *
	   * Weather Info
	   */
	  weatherTool: (0, _js_libsJqueryDistJqueryJs2["default"])("#weatherTool"),
	
	  /**
	   *
	   * @public
	   * @member intro
	   * @memberof core.dom
	   * @description The cached intro node.
	   *
	   */
	  intro: (0, _js_libsJqueryDistJqueryJs2["default"])(".js-intro")
	};
	
	/******************************************************************************
	 * Export
	*******************************************************************************/
	exports["default"] = dom;
	module.exports = exports["default"];

/***/ },
/* 17 */
/*!*******************************!*\
  !*** ./js_src/core/config.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _properjsEasing = __webpack_require__(/*! properjs-easing */ 18);
	
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
/* 18 */
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
/* 19 */
/*!*******************************!*\
  !*** ./js_src/core/detect.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _dom = __webpack_require__(/*! ./dom */ 16);
	
	var _dom2 = _interopRequireDefault(_dom);
	
	var _log = __webpack_require__(/*! ./log */ 20);
	
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
/* 20 */
/*!****************************!*\
  !*** ./js_src/core/log.js ***!
  \****************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _env = __webpack_require__(/*! ./env */ 21);
	
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
/* 21 */
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
/* 22 */
/*!********************************!*\
  !*** ./js_src/core/emitter.js ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _properjsController = __webpack_require__(/*! properjs-controller */ 9);
	
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
/* 23 */
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
	
	var _dom = __webpack_require__(/*! ./dom */ 16);
	
	var _dom2 = _interopRequireDefault(_dom);
	
	var _util = __webpack_require__(/*! ./util */ 12);
	
	var util = _interopRequireWildcard(_util);
	
	var _log = __webpack_require__(/*! ./log */ 20);
	
	var _log2 = _interopRequireDefault(_log);
	
	var _config = __webpack_require__(/*! ./config */ 17);
	
	var _config2 = _interopRequireDefault(_config);
	
	var _properjsImageloader = __webpack_require__(/*! properjs-imageloader */ 13);
	
	var _properjsImageloader2 = _interopRequireDefault(_properjsImageloader);
	
	var _ImageController = __webpack_require__(/*! ./ImageController */ 24);
	
	var _ImageController2 = _interopRequireDefault(_ImageController);
	
	var _emitter = __webpack_require__(/*! ./emitter */ 22);
	
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
/* 24 */
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
	
	var _util = __webpack_require__(/*! ./util */ 12);
	
	var util = _interopRequireWildcard(_util);
	
	var _log = __webpack_require__(/*! ./log */ 20);
	
	var _log2 = _interopRequireDefault(_log);
	
	var _properjsController = __webpack_require__(/*! properjs-controller */ 9);
	
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
/* 25 */
/*!********************************!*\
  !*** ./js_src/core/resizes.js ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _log = __webpack_require__(/*! ./log */ 20);
	
	var _log2 = _interopRequireDefault(_log);
	
	var _emitter = __webpack_require__(/*! ./emitter */ 22);
	
	var _emitter2 = _interopRequireDefault(_emitter);
	
	var _resizer = __webpack_require__(/*! ./resizer */ 26);
	
	var _resizer2 = _interopRequireDefault(_resizer);
	
	var _properjsThrottle = __webpack_require__(/*! properjs-throttle */ 28);
	
	var _properjsThrottle2 = _interopRequireDefault(_properjsThrottle);
	
	var _properjsDebounce = __webpack_require__(/*! properjs-debounce */ 29);
	
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
/* 26 */
/*!********************************!*\
  !*** ./js_src/core/resizer.js ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _properjsResizecontroller = __webpack_require__(/*! properjs-resizecontroller */ 27);
	
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
/* 27 */
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
	
	    var Controller = __webpack_require__( /*! properjs-controller */ 9 ),
	
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
/* 28 */
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
/* 29 */
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
/* 30 */
/*!********************************!*\
  !*** ./js_src/core/scrolls.js ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _dom = __webpack_require__(/*! ./dom */ 16);
	
	var _dom2 = _interopRequireDefault(_dom);
	
	var _log = __webpack_require__(/*! ./log */ 20);
	
	var _log2 = _interopRequireDefault(_log);
	
	var _detect = __webpack_require__(/*! ./detect */ 19);
	
	var _detect2 = _interopRequireDefault(_detect);
	
	var _emitter = __webpack_require__(/*! ./emitter */ 22);
	
	var _emitter2 = _interopRequireDefault(_emitter);
	
	var _scroller = __webpack_require__(/*! ./scroller */ 31);
	
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
/* 31 */
/*!*********************************!*\
  !*** ./js_src/core/scroller.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _properjsScrollcontroller = __webpack_require__(/*! properjs-scrollcontroller */ 32);
	
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
/* 32 */
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
	
	    var Controller = __webpack_require__( /*! properjs-controller */ 9 ),
	        
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
/* 33 */
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
	
	var _util = __webpack_require__(/*! ./util */ 12);
	
	var util = _interopRequireWildcard(_util);
	
	var _log = __webpack_require__(/*! ./log */ 20);
	
	var _log2 = _interopRequireDefault(_log);
	
	var _emitter = __webpack_require__(/*! ./emitter */ 22);
	
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
/* 34 */
/*!******************************!*\
  !*** ./js_src/core/cache.js ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _Store = __webpack_require__(/*! ./Store */ 35);
	
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
/* 35 */
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
	
	var _log = __webpack_require__(/*! ./log */ 20);
	
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
/* 36 */
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
	
	var _js_libsJqueryDistJqueryJs = __webpack_require__(/*! js_libs/jquery/dist/jquery.js */ 2);
	
	var _js_libsJqueryDistJqueryJs2 = _interopRequireDefault(_js_libsJqueryDistJqueryJs);
	
	var _log = __webpack_require__(/*! ./log */ 20);
	
	var _log2 = _interopRequireDefault(_log);
	
	var _env = __webpack_require__(/*! ./env */ 21);
	
	var _env2 = _interopRequireDefault(_env);
	
	var _fgLoadjs = __webpack_require__(/*! fg-loadjs */ 15);
	
	var _fgLoadjs2 = _interopRequireDefault(_fgLoadjs);
	
	var _emitter = __webpack_require__(/*! ./emitter */ 22);
	
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
	
	            $doc = $doc || (0, _js_libsJqueryDistJqueryJs2["default"])(html);
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
/* 37 */
/*!*********************************!*\
  !*** ./js_src/core/mediabox.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _properjsMediabox = __webpack_require__(/*! properjs-mediabox */ 38);
	
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
/* 38 */
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
	
	
	    var Easing = __webpack_require__( /*! properjs-easing */ 18 ),
	        Tween = __webpack_require__( /*! properjs-tween */ 39 ),
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
/* 39 */
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
	
	    var Easing = __webpack_require__( /*! properjs-easing */ 18 ),
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
/* 40 */
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
	
	var _core = __webpack_require__(/*! ../core */ 10);
	
	var core = _interopRequireWildcard(_core);
	
	var _Menu = __webpack_require__(/*! ./Menu */ 41);
	
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
/* 41 */
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
	
	var _core = __webpack_require__(/*! ../core */ 10);
	
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
/* 42 */
/*!***************************!*\
  !*** ./js_src/animate.js ***!
  \***************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }
	
	var _core = __webpack_require__(/*! ./core */ 10);
	
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
/* 43 */
/*!******************************!*\
  !*** ./js_src/filterlist.js ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _js_libsJqueryDistJqueryJs = __webpack_require__(/*! js_libs/jquery/dist/jquery.js */ 2);
	
	var _js_libsJqueryDistJqueryJs2 = _interopRequireDefault(_js_libsJqueryDistJqueryJs);
	
	var filterlist = {
	    init: function init() {
	        this.toggleItems();
	    },
	    hideAll: function hideAll() {
	        (0, _js_libsJqueryDistJqueryJs2["default"])(".filterlist-item").addClass("-is-hidden");
	    },
	    showAll: function showAll() {
	        (0, _js_libsJqueryDistJqueryJs2["default"])(".filterlist-item").removeClass("-is-hidden");
	    },
	    toggleItems: function toggleItems() {
	        var _this = this;
	
	        (0, _js_libsJqueryDistJqueryJs2["default"])("#trigger--bee").on("click", function () {
	            _this.hideAll();
	            (0, _js_libsJqueryDistJqueryJs2["default"])(".category-bees").removeClass("-is-hidden");
	        });
	        (0, _js_libsJqueryDistJqueryJs2["default"])("#trigger--bloom").on("click", function () {
	            _this.hideAll();
	            (0, _js_libsJqueryDistJqueryJs2["default"])(".category-blooms").removeClass("-is-hidden");
	        });
	        (0, _js_libsJqueryDistJqueryJs2["default"])("#trigger--nom").on("click", function () {
	            _this.hideAll();
	            (0, _js_libsJqueryDistJqueryJs2["default"])(".category-noms").removeClass("-is-hidden");
	        });
	        (0, _js_libsJqueryDistJqueryJs2["default"])("#trigger--life").on("click", function () {
	            _this.hideAll();
	            (0, _js_libsJqueryDistJqueryJs2["default"])(".category-life").removeClass("-is-hidden");
	        });
	    }
	};
	
	/******************************************************************************
	 * Export
	*******************************************************************************/
	exports["default"] = filterlist;
	module.exports = exports["default"];

/***/ }
/******/ ]);
//# sourceMappingURL=app.js.map
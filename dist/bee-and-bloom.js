// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

require = (function (modules, cache, entry) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof require === "function" && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof require === "function" && require;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      function localRequire(x) {
        return newRequire(localRequire.resolve(x));
      }

      localRequire.resolve = function (x) {
        return modules[name][1][x] || x;
      };

      var module = cache[name] = new newRequire.Module;
      modules[name][0].call(module.exports, localRequire, module, module.exports);
    }

    return cache[name].exports;
  }

  function Module() {
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  // Override the current require with this new one
  return newRequire;
})({27:[function(require,module,exports) {
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
    
    if ( typeof exports === "object" && typeof module !== "undefined" ) {
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
},{}],29:[function(require,module,exports) {
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

    if ( typeof exports === "object" && typeof module !== "undefined" ) {
        module.exports = factory();

    } else if ( typeof window !== "undefined" ) {
        window.ImageLoader = factory();
    }

})(function () {

    var Controller = require( "properjs-controller" );


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
    var ImageLoader = function ( options ) {
        var self = this;

        if ( !options ) {
            throw new Error( "ImageLoader Class requires options to be passed" );
        }

        // Up, up and away...
        Controller.call( this );

        /**
         *
         * The method to determine if an image should load itself
         * @memberof ImageLoader
         * @member _executor
         * @private
         *
         */
        this._executor = (options.executor || function ( elem ) {
            return elem;
        });

        /**
         *
         * The Collection to load against
         * @memberof ImageLoader
         * @member _elements
         * @private
         *
         */
        this._elements = options.elements;

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
        this._transitionDelay = (options.transitionDelay || 0);

        /**
         *
         * The duration on a lazy loaded elements fade in in ms
         * @memberof ImageLoader
         * @member _transitionDuration
         * @default 600
         * @private
         *
         */
        this._transitionDuration = (options.transitionDuration || 400);

        /**
         *
         * This flags that all elements have been loaded
         * @memberof ImageLoader
         * @member _resolved
         * @private
         *
         */
        this._resolved = false;

        // Break out if no elements in collection
        if ( !this._elements.length ) {
            return this;
        }

        // Only run animation frame for async loading
        if ( this._loadType === "async" ) {
            this.initAsync();

        } else {
            this.initSync();
        }
    };


    /**
     *
     * @extends Controller
     *
     */
    ImageLoader.prototype = Object.create( Controller.prototype );


    /**
     *
     * Support asynchronous loading of a set of images
     * @memberof ImageLoader
     * @method initAsync
     *
     */
    ImageLoader.prototype.initAsync = function () {
        var self = this;

        this.go(function () {
            if ( self._resolved ) {
                self.stop();

            } else {
                self.handle();
            }
        });
    };

    /**
     *
     * Support batch synchronous loading of a set of images
     * @memberof ImageLoader
     * @method initSync
     *
     */
    ImageLoader.prototype.initSync = function () {
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
    };

    /**
     *
     * Perform the image loading and set correct values on element
     * @method load
     * @memberof ImageLoader
     * @param {object} $elem element object
     * @param {function} callback optional callback for each load
     * @fires done
     *
     */
    ImageLoader.prototype.load = function ( element, callback ) {
        var self = this,
            image = null,
            timeout = null,
            isImage = (element.nodeName === "IMG"),
            source = element.getAttribute( this._property );

        element.setAttribute( "data-imageloader", true );

        if ( isImage ) {
            image = element;

        } else {
            image = new Image();
        }

        timeout = setTimeout(function () {
            clearTimeout( timeout );

            image.onload = function () {
                self.fire( "load", element );

                if ( !isImage ) {
                    element.style.backgroundImage = ("url(" + source + ")");

                    image = null;
                }

                timeout = setTimeout(function () {
                    clearTimeout( timeout );

                    if ( (self._numLoaded === self._num2Load) && !self._resolved ) {
                        self._resolve( true );

                    } else if ( typeof callback === "function" ) {
                        // Errors first
                        callback( false );
                    }

                }, self._transitionDuration );
            };

            image.onerror = function () {
                self.fire( "error", element );

                if ( (self._numLoaded === self._num2Load) && !self._resolved ) {
                    self._resolve( true );

                } else if ( typeof callback === "function" ) {
                    // Errors first
                    callback( true );
                }
            };

            image.src = source;

        }, this._transitionDelay );

        return this;
    };

    /**
     *
     * Handles element iterations and loading based on callbacks
     * @memberof ImageLoader
     * @method handle
     *
     */
    ImageLoader.prototype.handle = function () {
        var elems = this.getNotLoaded(),
            self = this;

        for ( var i = 0, len = elems.length; i < len; i++ ) {
            if ( self._executor( elems[ i ] ) ) {
                self._numLoaded++;

                self.load( elems[ i ] );
            }
        }
    };

    /**
     *
     * Get all images in the set that have yet to be loaded
     * @memberof ImageLoader
     * @method getNotLoaded
     *
     */
    ImageLoader.prototype.getNotLoaded = function () {
        var elems = [];

        for ( var i = 0, len = this._elements.length; i < len; i++ ) {
            if ( !this._elements[ i ].getAttribute( "data-imageloader" ) ) {
                elems.push( this._elements[ i ] );
            }
        }

        return elems;
    };

    /**
     *
     * Resolve an instance and remove it from the stack
     * @memberof ImageLoader
     * @method _resolve
     *
     */
    ImageLoader.prototype._resolve = function () {
        // Resolved state
        this._resolved = true;

        // Fires the predefined "done" event
        this.fire( "done" );
    };


    return ImageLoader;


});
},{"properjs-controller":27}],8:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jquery = require("js_libs/jquery/dist/jquery.js");

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 * @public
 * @namespace dom
 * @memberof core
 * @description Holds high-level cached Nodes.
 *
 */
const dom = {
  /**
   *
   * @public
   * @member doc
   * @memberof core.dom
   * @description The cached document.
   *
   */
  doc: (0, _jquery2.default)(document),

  /**
   *
   * @public
   * @member html
   * @memberof core.dom
   * @description The cached documentElement node.
   *
   */
  html: (0, _jquery2.default)(document.documentElement),

  /**
   *
   * @public
   * @member body
   * @memberof core.dom
   * @description The cached body node.
   *
   */
  body: (0, _jquery2.default)(document.body),

  /**
   *
   * @public
   * @member page
   * @memberof core.dom
   * @description The cached page container node.
   *
   */
  page: (0, _jquery2.default)(".js-page"),

  /**
   *
   * @public
   * @member nav
   * @memberof core.dom
   * @description The cached nav node.
   *
   */
  nav: (0, _jquery2.default)(".js-nav"),

  /**
   *
   * @public
   * @member header
   * @memberof core.dom
   * @description The cached header node.
   *
   */
  header: (0, _jquery2.default)(".js-header"),

  /**
   *
   * @public
   * @member intro
   * @memberof core.dom
   * @description The cached intro node.
   *
   */
  intro: (0, _jquery2.default)(".js-intro"),

  /**
   *
   * @public
   * @member filterSort
   * @memberof core.dom
   * @description The filter node.
   *
   */
  filter: (0, _jquery2.default)(".js-filter")
};

/******************************************************************************
 * Export
*******************************************************************************/
exports.default = dom;
},{}],32:[function(require,module,exports) {
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
    
    if ( typeof exports === "object" && typeof module !== "undefined" ) {
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
},{}],11:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _properjsEasing = require("properjs-easing");

var _properjsEasing2 = _interopRequireDefault(_properjsEasing);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 * @public
 * @namespace config
 * @memberof core
 * @description Stores app-wide config values.
 *
 */
const config = {
  /**
   *
   * @public
   * @member defaultEasing
   * @memberof core.config
   * @description The default easing function for javascript Tweens.
   *
   */
  defaultEasing: _properjsEasing2.default.easeInOutCubic,

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
exports.default = config;
},{"properjs-easing":32}],15:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
const DEV = "development";
const PROD = "production";

/**
 *
 * @public
 * @namespace env
 * @memberof core
 * @description Set the app environment.
 *
 */
const env = {
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
  isDev() {
    return this.ENV === DEV;
  }
};

/******************************************************************************
 * Export
*******************************************************************************/
exports.default = env;
},{}],14:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _env = require("./env");

var _env2 = _interopRequireDefault(_env);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
const log = function (...args) {
  // Only log for development environments
  if (!_env2.default.isDev() || !("console" in window)) {
    return;
  }

  let method = "log";

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
exports.default = log;
},{"./env":15}],20:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dom = require("./dom");

var _dom2 = _interopRequireDefault(_dom);

var _log = require("./log");

var _log2 = _interopRequireDefault(_log);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const vendors = ["Webkit", "Moz", "ms"];

/**
 *
 * @public
 * @namespace detect
 * @memberof core
 * @description Handles basic detection of touch devices.
 *
 */
const detect = {
  /**
   *
   * @public
   * @method init
   * @memberof core.detect
   * @description Initializes the detect module.
   *
   */
  init() {
    this._isTouch = "ontouchstart" in window || "DocumentTouch" in window;
    this._isMobile = /Android|BlackBerry|iPhone|iPad|iPod|IEMobile|Opera Mini/gi.test(window.navigator.userAgent);
    this._isSurface = "onmouseover" in document && /Windows NT/.test(window.navigator.userAgent) && /Touch/.test(window.navigator.userAgent);
    this._isStandalone = "standalone" in window;
    this._prefix = this.getPrefix();

    // iOS Standalone mode
    if ("standalone" in window) {
      _dom2.default.html.addClass("is-standalone");
    }

    // Windows Surface mode
    if (this._isSurface) {
      _dom2.default.html.addClass("is-surface");
    }

    // Touch support mode
    if (this._isTouch) {
      _dom2.default.html.addClass("is-touchable");

      // Mouse support mode
    } else {
      _dom2.default.html.addClass("is-hoverable");
    }

    // log( "detect initialized" );
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
  getPrefix() {
    let i = vendors.length;

    if (document.body.style.transform === null) {
      for (i; i--;) {
        if (document.body.style[`${vendors[i]}Transform`]) {
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
  getPrefixed(property) {
    const camelProp = property[0].toUpperCase() + property.slice(1);

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
  isMobile() {
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
  isTouch() {
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
  isDevice() {
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
  isStandalone() {
    return this._isStandalone;
  }
};

/******************************************************************************
 * Export
*******************************************************************************/
exports.default = detect;
},{"./dom":8,"./log":14}],22:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _properjsController = require("properjs-controller");

var _properjsController2 = _interopRequireDefault(_properjsController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 * @description Single app instanceof [Controller]{@link https://github.com/ProperJS/Controller} for arbitrary event emitting
 * @member emitter
 * @memberof core
 *
 */
const emitter = new _properjsController2.default();

/******************************************************************************
 * Export
*******************************************************************************/
exports.default = emitter;
},{"properjs-controller":27}],13:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _properjsImageloader = require("properjs-imageloader");

var _properjsImageloader2 = _interopRequireDefault(_properjsImageloader);

var _dom = require("./dom");

var _dom2 = _interopRequireDefault(_dom);

var _config = require("./config");

var _config2 = _interopRequireDefault(_config);

var _detect = require("./detect");

var _detect2 = _interopRequireDefault(_detect);

var _emitter = require("./emitter");

var _emitter2 = _interopRequireDefault(_emitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 * @description Add pixel units when inline styling
 * @method px
 * @param {string} str The value to pixel-ify
 * @memberof core.util
 * @returns {string}
 *
 */

// import loadCSS from "fg-loadcss";
// import loadJS from "fg-loadjs";
const px = function (str) {
  return `${str}px`;
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
/**
 *
 * @public
 * @namespace util
 * @memberof core
 * @description Houses app-wide utility methods.
 *
 */
// import $ from "js_libs/jquery/dist/jquery.js";
const translate3d = function (el, x, y, z) {
  el.style[_detect2.default.getPrefixed("transform")] = `translate3d( ${x}, ${y}, ${z} )`;
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
const isElementLoadable = function (el) {
  if (el) {
    const bounds = el.getBoundingClientRect();

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
const isElementVisibleVert = function (el) {
  if (el) {
    const bounds = el.getBoundingClientRect();

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
const isElementVisibleHorz = function (el) {
  if (el) {
    const bounds = el.getBoundingClientRect();

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
const getElementsInView = function ($nodes, executor) {
  let i = $nodes.length;
  const ret = [];

  executor = executor || isElementLoadable;

  for (i; i--;) {
    if (executor($nodes[i])) {
      ret.push($nodes[i]);
    }
  }

  return $(ret);
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
const loadImages = function (images, handler) {
  // Normalize the handler
  handler = handler || isElementLoadable;

  // Normalize the images
  images = images || $(_config2.default.lazyImageSelector);

  // Hook here to determine image variant sizes to load ?
  _emitter2.default.fire("app--util--load-images", images);

  return new _properjsImageloader2.default({
    elements: images,
    property: _config2.default.lazyImageAttr,
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
const loadDependencies = function (data, callback) {
  let i = 0;
  const total = data.sources.length;
  const onload = function () {
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

  data.sources.forEach(source => {
    if (source.type === "script") {
      loadJS(_config2.default.asyncScriptPath + source.file, onload);
    } else if (source.type === "style") {
      loadCSS(_config2.default.asyncStylePath + source.file).onloadcssdefined(onload);
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
const disableMouseWheel = function (enable) {
  if (enable) {
    _dom2.default.doc.on("DOMMouseScroll mousewheel", preNoop);
  } else {
    _dom2.default.doc.off("DOMMouseScroll mousewheel");
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
const disableTouchMove = function (enable) {
  if (enable) {
    _dom2.default.doc.on("touchmove", preNoop);
  } else {
    _dom2.default.doc.off("touchmove");
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
const getTransitionDuration = function (el) {
  let ret = 0;
  let duration = null;
  let isSeconds = false;
  let multiplyBy = 1000;

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
const noop = function () {
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
const preNoop = function (e) {
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
const shuffle = function (arr) {
  let i = arr.length - 1;
  let j = 0;
  let temp = arr[i];

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
const calculateAspectRatioFit = function (srcWidth, srcHeight, maxWidth, maxHeight) {
  const ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);

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
const getPageKey = function () {
  return `${window.location.pathname}${window.location.search}`;
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
const extendObject = function (target, arrow) {
  let i = null;
  const ret = target;

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
exports.default = {
  // Loading
  loadImages,
  loadDependencies,
  getElementsInView,
  isElementLoadable,
  isElementVisibleVert,
  isElementVisibleHorz,

  // Disabling
  disableTouchMove,
  disableMouseWheel,

  // Random
  px,
  noop,
  shuffle,
  getPageKey,
  translate3d,
  extendObject,
  getTransitionDuration,
  calculateAspectRatioFit
};
},{"properjs-imageloader":29,"./dom":8,"./config":11,"./detect":20,"./emitter":22}],7:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jquery = require("js_libs/jquery/dist/jquery.js");

var _jquery2 = _interopRequireDefault(_jquery);

var _util = require("./util");

var util = _interopRequireWildcard(_util);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const _rSlash = /^\/|\/$/g;

/**
 *
 * @public
 * @namespace api
 * @memberof core
 * @description Provide some api methods for accessing content via JS.
 *
 */
const api = {
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
  urify(uri) {
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
  endpoint(uri) {
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
  apipoint(uri) {
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
  request(url, params, options) {
    const data = util.extendObject({
      format: this.format,
      nocache: true
    }, params);
    const opts = util.extendObject({
      url,
      data,
      dataType: this.dataType,
      method: this.method
    }, options);

    return _jquery2.default.ajax(opts);
  }
};

/******************************************************************************
 * Export
*******************************************************************************/
exports.default = api;
},{"./util":13}],24:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _util = require("./util");

var util = _interopRequireWildcard(_util);

var _log = require("./log");

var _log2 = _interopRequireDefault(_log);

var _properjsController = require("properjs-controller");

var _properjsController2 = _interopRequireDefault(_properjsController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 *
 * @public
 * @class ImageController
 * @param {Hobo} $images The image collection to load
 * @classdesc Handles breaking out the preload vs lazyload batches
 * @memberof core
 *
 */
class ImageController extends _properjsController2.default {
  constructor($images) {
    super();

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

  /**
   *
   * @public
   * @method handlePreload
   * @memberof core.ImageController
   * @description ImageLoader instance for preload batch.
   *
   */
  handlePreload() {
    // log( "ImageController preload queue:", this.$preload.length );

    this.preLoader = util.loadImages(this.$preload, util.noop);
    this.preLoader.on("done", () => {
      // log( "ImageController preloaded:", this.$preload.length );

      this.fire("preload");
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
  handleLazyload() {
    // log( "ImageController lazyload queue:", this.$lazyload.length );

    this.lazyLoader = util.loadImages(this.$lazyload, util.isElementLoadable);
    this.lazyLoader.on("done", () => {
      // log( "ImageController lazyloaded:", this.$lazyload.length );

      this.fire("lazyload");
    });
  }
}

/******************************************************************************
 * Export
*******************************************************************************/
exports.default = ImageController;
},{"./util":13,"./log":14,"properjs-controller":27}],9:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dom = require("./dom");

var _dom2 = _interopRequireDefault(_dom);

var _util = require("./util");

var util = _interopRequireWildcard(_util);

var _log = require("./log");

var _log2 = _interopRequireDefault(_log);

var _config = require("./config");

var _config2 = _interopRequireDefault(_config);

var _properjsImageloader = require("properjs-imageloader");

var _properjsImageloader2 = _interopRequireDefault(_properjsImageloader);

var _ImageController = require("./ImageController");

var _ImageController2 = _interopRequireDefault(_ImageController);

var _emitter = require("./emitter");

var _emitter2 = _interopRequireDefault(_emitter);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 * @public
 * @namespace images
 * @memberof core
 * @description Handles separation of image pre-loading and image lazy-loading.
 *
 */
const images = {
  /**
   *
   * @public
   * @method init
   * @memberof core.images
   * @description Method runs once when window loads.
   *
   */
  init() {
    // log( "images initialized" );
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
  onload() {
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
  unload() {
    _properjsImageloader2.default.killInstances();
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
  handlePreload(callback) {
    if (typeof callback === "function") {
      callback();
    }

    _emitter2.default.fire("app--preload-done");
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
  handleImages($images, callback) {
    $images = $images || _dom2.default.page.find(_config2.default.lazyImageSelector);

    if ($images.length) {
      const imageController = new _ImageController2.default($images);

      imageController.on("preload", this.handlePreload.bind(this, callback));

      imageController.on("lazyload", () => {
        _emitter2.default.fire("app--lazyload-done");
      });
    } else {
      this.handlePreload(callback);
    }
  }
};

/******************************************************************************
 * Export
*******************************************************************************/
exports.default = images;
},{"./dom":8,"./util":13,"./log":14,"./config":11,"./emitter":22,"./ImageController":24,"properjs-imageloader":29}],35:[function(require,module,exports) {
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

    if ( typeof exports === "object" && typeof module !== "undefined" ) {
        module.exports = factory();

    } else if ( typeof window !== "undefined" ) {
        window.ResizeController = factory();
    }

})(function () {

    var Controller = require( "properjs-controller" );

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
        Controller.call( this );

        this.currentView = this.getViewport();
        this.hasOrientation = ("orientation" in window);

        this.start();
    };

    ResizeController.prototype = Object.create( Controller.prototype );

    /**
     *
     * Starts the request animation frame cycle
     * @memberof ResizeController
     * @method destroy
     *
     */
    ResizeController.prototype.start = function () {
        var self = this;

        // Call on parent cycle
        this.go(function () {
            var currentView = self.getViewport(),
                isStill = (currentView.width === self.currentView.width && currentView.height === self.currentView.height),
                isResize = (currentView.width !== self.currentView.width || currentView.height !== self.currentView.height),
                isResizeUp = (currentView.width > self.currentView.width || currentView.height > self.currentView.height),
                isResizeDown = (currentView.width < self.currentView.width || currentView.height < self.currentView.height),
                isResizeWidth = (currentView.width !== self.currentView.width),
                isResizeHeight = (currentView.height !== self.currentView.height),
                isOrientation = (currentView.orient !== self.currentView.orient),
                isOrientationPortrait = (currentView.orient !== self.currentView.orient && currentView.orient !== 90),
                isOrientationLandscape = (currentView.orient !== self.currentView.orient && currentView.orient === 90);

            // Fire blanket resize event
            if ( isResize ) {
                /**
                 *
                 * @event resize
                 *
                 */
                self.fire( "resize" );
            }

            // Fire resizeup and resizedown
            if ( isResizeDown ) {
                /**
                 *
                 * @event resizedown
                 *
                 */
                self.fire( "resizedown" );

            } else if ( isResizeUp ) {
                /**
                 *
                 * @event resizeup
                 *
                 */
                self.fire( "resizeup" );
            }

            // Fire resizewidth and resizeheight
            if ( isResizeWidth ) {
                /**
                 *
                 * @event resizewidth
                 *
                 */
                self.fire( "resizewidth" );

            } else if ( isResizeHeight ) {
                /**
                 *
                 * @event resizeheight
                 *
                 */
                self.fire( "resizeheight" );
            }

            // Fire blanket orientationchange event
            if ( isOrientation ) {
                /**
                 *
                 * @event orientationchange
                 *
                 */
                self.fire( "orientationchange" );
            }

            // Fire orientationportrait and orientationlandscape
            if ( isOrientationPortrait ) {
                /**
                 *
                 * @event orientationportrait
                 *
                 */
                self.fire( "orientationportrait" );

            } else if ( isOrientationLandscape ) {
                /**
                 *
                 * @event orientationlandscape
                 *
                 */
                self.fire( "orientationlandscape" );
            }

            self.currentView = currentView;
        });
    };

    /**
     *
     * Stops the request animation frame cycle
     * @memberof ResizeController
     * @method destroy
     *
     */
    ResizeController.prototype.destroy = function () {
        this.stop();
    };

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
            orient: this.hasOrientation ? Math.abs( window.orientation ) : null
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

},{"properjs-controller":27}],21:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _properjsResizecontroller = require("properjs-resizecontroller");

var _properjsResizecontroller2 = _interopRequireDefault(_properjsResizecontroller);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 * @description Single app instanceof [ResizeController]{@link https://github.com/ProperJS/ResizeController} for raf resize handling
 * @member resizer
 * @memberof core
 *
 */
const resizer = new _properjsResizecontroller2.default();

/******************************************************************************
 * Export
*******************************************************************************/
exports.default = resizer;
},{"properjs-resizecontroller":35}],30:[function(require,module,exports) {
/*!
 *
 * Throttle callbacks
 *
 * @throttle
 * @author: kitajchuk
 *
 */
(function ( factory ) {
    
    if ( typeof exports === "object" && typeof module !== "undefined" ) {
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
},{}],31:[function(require,module,exports) {
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
    
    if ( typeof exports === "object" && typeof module !== "undefined" ) {
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
},{}],10:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _log = require("./log");

var _log2 = _interopRequireDefault(_log);

var _emitter = require("./emitter");

var _emitter2 = _interopRequireDefault(_emitter);

var _resizer = require("./resizer");

var _resizer2 = _interopRequireDefault(_resizer);

var _properjsThrottle = require("properjs-throttle");

var _properjsThrottle2 = _interopRequireDefault(_properjsThrottle);

var _properjsDebounce = require("properjs-debounce");

var _properjsDebounce2 = _interopRequireDefault(_properjsDebounce);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const _throttled = 50;
const _debounced = 300;

/**
 *
 * @public
 * @namespace resizes
 * @memberof core
 * @description Handles app-wide emission of various resize detection events.
 *
 */
const resizes = {
  /**
   *
   * @public
   * @method init
   * @memberof core.resizes
   * @description Method binds event listeners for resize controller.
   *
   */
  init() {
    _resizer2.default.on("resize", (0, _properjsThrottle2.default)(onThrottle, _throttled));

    // Hook into resize of `width` only for this handler
    // @bug: iOS window size changes when Safari's chrome switches between full and minimal-ui.
    _resizer2.default.on("resizewidth", (0, _properjsDebounce2.default)(onDebounce, _debounced));

    // log( "resizes initialized" );
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
const onDebounce = function () {
  _emitter2.default.fire("app--resize-debounced");
};

/**
 *
 * @private
 * @method onThrottle
 * @memberof core.resizes
 * @description Method handles the window resize event via [ResizeController]{@link https://github.com/ProperJS/ResizeController}.
 *
 */
const onThrottle = function () {
  _emitter2.default.fire("app--resize");
};

/******************************************************************************
 * Export
*******************************************************************************/
exports.default = resizes;
},{"./log":14,"./emitter":22,"./resizer":21,"properjs-throttle":30,"properjs-debounce":31}],34:[function(require,module,exports) {
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

    if ( typeof exports === "object" && typeof module !== "undefined" ) {
        module.exports = factory();

    } else if ( typeof window !== "undefined" ) {
        window.ScrollController = factory();
    }

})(function () {

    var Controller = require( "properjs-controller" );

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
    var ScrollController = function ( element ) {
        Controller.call( this );

        this.element = (element || window);
        this.current = null;
        this.isWindow = (this.element === window);

        this.start();
    };

    ScrollController.prototype = Object.create( Controller.prototype );

    /**
     *
     * Starts the request animation frame cycle
     * @memberof ScrollController
     * @method start
     *
     */
    ScrollController.prototype.start = function () {
        var self = this;

        // Call on parent cycle
        this.go(function () {
            var current = self.getScrollY(),
                isStill = (current === self.current),
                isScroll = (current !== self.current),
                isScrollUp = (current < self.current),
                isScrollDown = (current > self.current),
                isScrollMax = (current !== self.current && self.isScrollMax()),
                isScrollMin = (current !== self.current && self.isScrollMin());

            // Fire blanket scroll event
            if ( isScroll ) {
                /**
                 *
                 * @event scroll
                 *
                 */
                self.fire( "scroll" );
            }

            // Fire scrollup and scrolldown
            if ( isScrollDown ) {
                /**
                 *
                 * @event scrolldown
                 *
                 */
                self.fire( "scrolldown" );

            } else if ( isScrollUp ) {
                /**
                 *
                 * @event scrollup
                 *
                 */
                self.fire( "scrollup" );
            }

            // Fire scrollmax and scrollmin
            if ( isScrollMax ) {
                /**
                 *
                 * @event scrollmax
                 *
                 */
                self.fire( "scrollmax" );

            } else if ( isScrollMin ) {
                /**
                 *
                 * @event scrollmin
                 *
                 */
                self.fire( "scrollmin" );
            }

            self.current = current;
        });
    };

    /**
     *
     * Stops the request animation frame cycle
     * @memberof ScrollController
     * @method destroy
     *
     */
    ScrollController.prototype.destroy = function () {
        this.stop();
    };

    /**
     *
     * Returns the current window vertical scroll position
     * @memberof ScrollController
     * @method getScrollY
     * @returns number
     *
     */
    ScrollController.prototype.getScrollY = function () {
        return (this.isWindow ? window.scrollY : this.element.scrollTop);
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
        var max = null;

        if ( this.isWindow ) {
            max = Math.max(
                document.body.scrollHeight, document.documentElement.scrollHeight,
                document.body.offsetHeight, document.documentElement.offsetHeight,
                document.documentElement.clientHeight
            );

        } else {
            max = Math.max(
                this.element.scrollHeight,
                this.element.offsetHeight,
                this.element.clientHeight
            );
        }

        return (max - window.innerHeight);
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

},{"properjs-controller":27}],19:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _properjsScrollcontroller = require("properjs-scrollcontroller");

var _properjsScrollcontroller2 = _interopRequireDefault(_properjsScrollcontroller);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 * @description Single app instanceof [ScrollController]{@link https://github.com/ProperJS/ScrollController} for raf scroll handling
 * @member scroller
 * @memberof core
 *
 */
const scroller = new _properjsScrollcontroller2.default();

/******************************************************************************
 * Export
*******************************************************************************/
exports.default = scroller;
},{"properjs-scrollcontroller":34}],12:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dom = require("./dom");

var _dom2 = _interopRequireDefault(_dom);

var _log = require("./log");

var _log2 = _interopRequireDefault(_log);

var _detect = require("./detect");

var _detect2 = _interopRequireDefault(_detect);

var _emitter = require("./emitter");

var _emitter2 = _interopRequireDefault(_emitter);

var _scroller = require("./scroller");

var _scroller2 = _interopRequireDefault(_scroller);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let _timeout = null;
let _isSuppressed = false;
let _isSuppressedEvents = false;
const _idleout = 300;

/**
 *
 * @public
 * @namespace scrolls
 * @memberof core
 * @description Handles app-wide emission of various scroll detection events.
 *
 */
const scrolls = {
  /**
   *
   * @public
   * @method init
   * @memberof core.scrolls
   * @description Method runs once when window loads.
   *
   */
  init() {
    _scroller2.default.on("scroll", onScroller);
    _scroller2.default.on("scrollup", onScrollerUp);
    _scroller2.default.on("scrolldown", onScrollerDown);

    onScroller();

    this.topout();

    // log( "scrolls initialized" );
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
  topout(top) {
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
  suppress(bool) {
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
  clearStates() {
    _dom2.default.html.removeClass("is-scrolling-up is-scrolling-down is-scrolling");
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
  isScrollInRange() {
    const scrollPos = _scroller2.default.getScrollY();

    return scrollPos > 0 || scrollPos < _scroller2.default.getScrollMax();
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
  isScrollOutOfRange() {
    const scrollPos = _scroller2.default.getScrollY();

    return scrollPos <= 0 || scrollPos >= _scroller2.default.getScrollMax();
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
const broadcast = function (event, position) {
  if (_isSuppressed) {
    return;
  }

  _emitter2.default.fire(event, position);
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
const suppressEvents = function (scrollPos) {
  if (_detect2.default.isStandalone()) {
    return;
  }

  try {
    clearTimeout(_timeout);
  } catch (error) {
    // log( error );
  }

  if (!_isSuppressedEvents) {
    _isSuppressedEvents = true;

    _dom2.default.html.addClass("is-scrolling");

    broadcast("app--scroll-start", scrollPos);
  }

  _timeout = setTimeout(() => {
    if (scrollPos === _scroller2.default.getScrollY()) {
      _isSuppressedEvents = false;

      _dom2.default.html.removeClass("is-scrolling");

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
const onScrollerUp = function () {
  if (!scrolls.isScrollInRange() || _detect2.default.isStandalone()) {
    return;
  }

  const scrollPos = _scroller2.default.getScrollY();

  broadcast("app--scroll-up", scrollPos);

  _dom2.default.html.removeClass("is-scrolling-down").addClass("is-scrolling-up");
};

/**
 *
 * @private
 * @method onScrollerDown
 * @memberof core.scrolls
 * @description Method handles downward scroll event
 *
 */
const onScrollerDown = function () {
  if (!scrolls.isScrollInRange() || _detect2.default.isStandalone()) {
    return;
  }

  const scrollPos = _scroller2.default.getScrollY();

  broadcast("app--scroll-down", scrollPos);

  _dom2.default.html.removeClass("is-scrolling-up").addClass("is-scrolling-down");
};

/**
 *
 * @private
 * @method onScroller
 * @memberof core.scrolls
 * @description Method handles regular scroll event via [ScrollController]{@link https://github.com/ProperJS/ScrollController}
 *
 */
const onScroller = function () {
  if (!scrolls.isScrollInRange() || _detect2.default.isStandalone()) {
    return;
  }

  const scrollPos = _scroller2.default.getScrollY();

  suppressEvents(scrollPos);

  broadcast("app--scroll", scrollPos);
};

/******************************************************************************
 * Export
*******************************************************************************/
exports.default = scrolls;
},{"./dom":8,"./log":14,"./detect":20,"./emitter":22,"./scroller":19}],16:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _util = require("./util");

var util = _interopRequireWildcard(_util);

var _log = require("./log");

var _log2 = _interopRequireDefault(_log);

var _emitter = require("./emitter");

var _emitter2 = _interopRequireDefault(_emitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

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
class Waypoints {
  constructor(elements, callback, executor) {
    this.elements = elements;
    this.callback = callback;
    this.executor = executor || util.isElementLoadable;

    if (!this.elements || !this.callback) {
      // log( "warn", "Waypoints needs `elements` and a `callback` method!" );
    }

    this._onScroller = this.onScroller.bind(this);

    this._onScroller();

    _emitter2.default.on("app--scroll", this._onScroller);
  }

  /**
   *
   * @public
   * @instance
   * @method onScroller
   * @memberof core.Waypoints
   * @description Listen for the scroll event.
   *
   */
  onScroller() {
    const $queued = this.elements.not(".is-waypoint");
    let i = $queued.length;
    let $elem = null;

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
  destroy() {
    _emitter2.default.off("app--scroll", this._onScroller);
  }
}

/******************************************************************************
 * Export
*******************************************************************************/
exports.default = Waypoints;
},{"./util":13,"./log":14,"./emitter":22}],25:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _log = require("./log");

var _log2 = _interopRequireDefault(_log);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Singleton
let _instance = null;
let _initialized = false;

// Session Storage
let _cache = {};
const _access = "app-cache";
const _session = window.sessionStorage;

/**
 *
 * @public
 * @class Store
 * @param {object} options The Store settings
 * @classdesc Handles how data / content is cached and stored for webapp.
 *
 */
class Store {
  constructor(options) {
    if (!_instance) {
      _instance = this;

      this._opts = options;
      this._init();
    }

    return _instance;
  }

  /**
   *
   * @private
   * @instance
   * @method _init
   * @memberof Store
   * @description One time Store initialization
   *
   */
  _init() {
    if (_initialized) {
      return;
    }

    _initialized = true;

    this.flush();

    // log( "Singleton Store initialized", this );
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
  flush() {
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
  save() {
    if (!this._opts.enableStorage || !Store.isStorageSupported) {
      // log( "Cache Storage disabled - Not writing to SessionStorage" );
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
  slug(uri) {
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
  set(id, val) {
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
  get(id) {
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
  getValue(val) {
    const ret = val;

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
  remove(id) {
    delete _cache[id];
  }
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
Store.isStorageSupported = function () {
  let ret = true;

  try {
    _session.setItem("app-test", 1);
    _session.removeItem("app-test");
  } catch (err) {
    ret = false;
  }

  return ret;
}();

/******************************************************************************
 * Export
*******************************************************************************/
exports.default = Store;
},{"./log":14}],17:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Store = require("./Store");

var _Store2 = _interopRequireDefault(_Store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 * @public
 * @namespace cache
 * @memberof core
 * @see {@link Store}
 * @description Return Singleton instances of the cache Store.
 *
 */
exports.default = new _Store2.default({
  // If TRUE the Store will use LocalStorage...
  enableStorage: false
});
},{"./Store":25}],39:[function(require,module,exports) {
/*!
 *
 * A simple tween class using requestAnimationFrame
 *
 * @Tween
 * @author: kitajchuk
 *
 */
(function ( factory ) {
    
    if ( typeof exports === "object" && typeof module !== "undefined" ) {
        module.exports = factory();

    } else if ( typeof window !== "undefined" ) {
        window.Tween = factory();
    }
    
})(function () {

    var Easing = require( "properjs-easing" ),
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
},{"properjs-easing":32}],33:[function(require,module,exports) {
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
    
    if ( typeof exports === "object" && typeof module !== "undefined" ) {
        module.exports = factory();

    } else if ( typeof window !== "undefined" ) {
        window.MediaBox = factory();
    }
    
})(function () {


    var Easing = require( "properjs-easing" ),
        Tween = require( "properjs-tween" ),
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
},{"properjs-easing":32,"properjs-tween":39}],18:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _properjsMediabox = require("properjs-mediabox");

var _properjsMediabox2 = _interopRequireDefault(_properjsMediabox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 * @description Single app instanceof [MediaBox]{@link https://github.com/ProperJS/MediaBox} for custom audio/video
 * @member mediabox
 * @memberof core
 *
 */
const mediabox = new _properjsMediabox2.default();

/******************************************************************************
 * Export
*******************************************************************************/
exports.default = mediabox;
},{"properjs-mediabox":33}],23:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jquery = require("js_libs/jquery/dist/jquery.js");

var _jquery2 = _interopRequireDefault(_jquery);

var _log = require("./log");

var _log2 = _interopRequireDefault(_log);

var _env = require("./env");

var _env2 = _interopRequireDefault(_env);

var _fgLoadjs = require("fg-loadjs");

var _fgLoadjs2 = _interopRequireDefault(_fgLoadjs);

var _emitter = require("./emitter");

var _emitter2 = _interopRequireDefault(_emitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Singleton
let _instance = null;

/**
 *
 * @public
 * @class Analytics
 * @classdesc Handles Google Analytics.
 *            @see {@link https://developers.google.com/analytics/devguides/collection/analyticsjs/}
 * @memberof core
 *
 */
class Analytics {
  constructor() {
    if (!_instance) {
      this.devUA = "";
      this.prodUA = "";
      this.GAScript = "//www.google-analytics.com/analytics.js";
      this.GAUATag = _env2.default.isDev() ? this.devUA : this.prodUA;

      this.initGoogleAnalytics();

      _emitter2.default.on("app--analytics-push", this.pushTrack.bind(this));

      // log( "Analytics initialized", this );

      _instance = this;
    }

    return _instance;
  }

  /**
   *
   * @public
   * @method initGoogleAnalytics
   * @memberof core.Analytics
   * @description Build GA interface and load analytics.js.
   *
   */
  initGoogleAnalytics() {
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
        // log( "warn", "GA Error", error );
      }
    };
    window.ga.l = Number(new Date());

    // Load GA Javascript
    (0, _fgLoadjs2.default)(this.GAScript, () => {
      // log( "Analytics GA loaded" );

      window.ga("create", this.GAUATag, "auto");
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
  track() {
    // log( "Analytics track pageview" );

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
  pushTrack(html, $doc) {
    let $title = null;

    $doc = $doc || (0, _jquery2.default)(html);
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
  setDocumentTitle(title) {
    document.title = title;
  }
}

/******************************************************************************
 * Export
*******************************************************************************/
exports.default = Analytics;
},{"./log":14,"./env":15,"./emitter":22}],6:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resizer = exports.scroller = exports.mediabox = exports.emitter = exports.Analytics = exports.cache = exports.Waypoints = exports.log = exports.env = exports.config = exports.util = exports.scrolls = exports.resizes = exports.images = exports.dom = exports.detect = exports.api = undefined;

var _api = require("./api");

var _api2 = _interopRequireDefault(_api);

var _detect = require("./detect");

var _detect2 = _interopRequireDefault(_detect);

var _dom = require("./dom");

var _dom2 = _interopRequireDefault(_dom);

var _images = require("./images");

var _images2 = _interopRequireDefault(_images);

var _resizes = require("./resizes");

var _resizes2 = _interopRequireDefault(_resizes);

var _scrolls = require("./scrolls");

var _scrolls2 = _interopRequireDefault(_scrolls);

var _util = require("./util");

var util = _interopRequireWildcard(_util);

var _config = require("./config");

var _config2 = _interopRequireDefault(_config);

var _env = require("./env");

var _env2 = _interopRequireDefault(_env);

var _log = require("./log");

var _log2 = _interopRequireDefault(_log);

var _Waypoints = require("./Waypoints");

var _Waypoints2 = _interopRequireDefault(_Waypoints);

var _cache = require("./cache");

var _cache2 = _interopRequireDefault(_cache);

var _Analytics = require("./Analytics");

var _Analytics2 = _interopRequireDefault(_Analytics);

var _emitter = require("./emitter");

var _emitter2 = _interopRequireDefault(_emitter);

var _mediabox = require("./mediabox");

var _mediabox2 = _interopRequireDefault(_mediabox);

var _scroller = require("./scroller");

var _scroller2 = _interopRequireDefault(_scroller);

var _resizer = require("./resizer");

var _resizer2 = _interopRequireDefault(_resizer);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.api = _api2.default;
exports.detect = _detect2.default;
exports.dom = _dom2.default;
exports.images = _images2.default;
exports.resizes = _resizes2.default;
exports.scrolls = _scrolls2.default;
exports.util = util;
exports.config = _config2.default;
exports.env = _env2.default;
exports.log = _log2.default;
exports.Waypoints = _Waypoints2.default;
exports.cache = _cache2.default;
exports.Analytics = _Analytics2.default;
exports.emitter = _emitter2.default;
exports.mediabox = _mediabox2.default;
exports.scroller = _scroller2.default;
exports.resizer = _resizer2.default; /**
                                      *
                                      * @public
                                      * @namespace core
                                      * @description Holds the different core modules.
                                      *
                                      */
},{"./api":7,"./dom":8,"./images":9,"./resizes":10,"./config":11,"./scrolls":12,"./util":13,"./log":14,"./env":15,"./Waypoints":16,"./cache":17,"./mediabox":18,"./scroller":19,"./detect":20,"./resizer":21,"./emitter":22,"./Analytics":23}],4:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _core = require("./core");

var core = _interopRequireWildcard(_core);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

let $_jsElements = null;
let _isActive = false;

/**
 *
 * @public
 * @namespace animate
 * @description Handle a site-wide default animation style for elements in view.
 *
 */
const animate = {
  /**
   *
   * @public
   * @method init
   * @memberof animate
   * @description Method runs once when window loads.
   *
   */
  init() {
    // core.log( "animate initialized" );

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
  isActive() {
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
  onload() {
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
  unload() {
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
  teardown() {
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
  getElements() {
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
  onUpdateAnimate() {
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
  onIntroArt() {
    const $elems = $_jsElements.filter(".js-animate--intro-art");

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
const updateAnimate = function () {
  const $elems = $_jsElements.not(".js-animate--intro-art");
  let $elem = null;
  let i = $elems.length;

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
exports.default = animate;
},{"./core":6}],36:[function(require,module,exports) {
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

    if ( typeof exports === "object" && typeof module !== "undefined" ) {
        module.exports = factory();

    } else if ( typeof window !== "undefined" ) {
        window.PushState = factory();
    }

})(function () {

    /**
     *
     * A simple pushState Class
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
         * <li>options.forceHash</li>
         * </ul>
         *
         * @fires backstate
         * @fires forwardstate
         * @fires popstate
         *
         */
        init: function ( options ) {
            /**
             *
             * Ensure this first cache URL is clean as a whistle
             * @memberof PushState
             * @member _initUrl
             * @private
             *
             */
            this._initUrl = window.location.href.replace( window.location.hash, "" );

            /**
             *
             * User options for usage
             * @memberof PushState
             * @member _options
             * @private
             *
             */
            this._options = (options || {});

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
            this._ishashpushed = false;;

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
             * Event callbacks
             * @memberof PushState
             * @member _callbacks
             * @private
             *
             */
            this._callbacks = {};

            // Set initial state
            this._states[ this._initUrl ] = {
                uid: this.getUID()
            };

            // Enable popstate management
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
         *
         */
        push: function ( url ) {
            // Dont push current URL
            if ( url === window.location.href ) {
                return;
            }

            this._push( url );

            this._states[ url ] = {
                uid: this.getUID()
            };
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
            if ( this._pushable && !this._options.forceHash ) {
                window.history.pushState( this._states[ url ], "", url );

            } else {
                // This replace ensures we get the following:
                // "/":         root
                // "/foo/bar/": uri path
                var hashUri = url.replace( window.location.origin, "" );

                // Fix for root hash uri.
                // Ensure we dont get the following:
                // "/foo/bar/#/foo/bar/"
                // Rather we would get the following:
                // "/foo/bar/#/"
                if ( hashUri === window.location.pathname ) {
                    hashUri = "/";
                }

                this._ishashpushed = true;

                window.location.hash = hashUri;
            }
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
                    var url = window.location.href,
                        roots = ["#/", "#", ""];

                    // Ensure we clean out the hash for Router
                    // Example:
                    // Start:  http://localhost/foo/#/bar/
                    // Result: http://localhost/foo/bar/
                    if ( self._options.forceHash ) {
                        // Shave the hash from the end of the URL
                        url = url.replace( window.location.hash, "" );

                        // Shave the hash root from the end of the URL
                        url = url.replace( window.location.pathname, "" );

                        // Empty hash means we have gone back to root
                        if ( roots.indexOf( window.location.hash ) !== -1 ) {
                            // Append the hash root to the URL
                            url = (url + window.location.pathname);

                        } else {
                            // Append the applied hash pathname to the URL
                            url = (url + window.location.hash.replace( "#", "" ));
                        }
                    }

                    self._fire( "popstate", url, self._states[ url ] );
                };

            this._enabled = true;

            if ( this._pushable && !this._options.forceHash ) {
                window.addEventListener( "popstate", function ( e ) {
                    handler();

                }, false );

            } else if ( this._hashable ) {
                // For hashstate we should apply initial hash on page load
                this._push( this._initUrl );

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
},{}],37:[function(require,module,exports) {
/*!
 *
 * Use native element selector matching
 *
 * @matchElement
 * @author: kitajchuk
 *
 */
(function ( factory ) {
    
    if ( typeof exports === "object" && typeof module !== "undefined" ) {
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
},{}],40:[function(require,module,exports) {
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
    
    if ( typeof exports === "object" && typeof module !== "undefined" ) {
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

},{}],38:[function(require,module,exports) {
/*!
 *
 * Handles wildcard route matching against urls with !num and !slug condition testing
 *
 * @MatchRoute
 * @author: kitajchuk
 *
 */
(function ( factory ) {
    
    if ( typeof exports === "object" && typeof module !== "undefined" ) {
        module.exports = factory();

    } else if ( typeof window !== "undefined" ) {
        window.MatchRoute = factory();
    }
    
})(function () {

    var paramalama = require( "paramalama" ),

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
},{"paramalama":40}],28:[function(require,module,exports) {
/*!
 *
 * Handles basic get routing
 *
 * @Router
 * @author: kitajchuk
 *
 */
(function ( factory ) {

    if ( typeof exports === "object" && typeof module !== "undefined" ) {
        module.exports = factory();

    } else if ( typeof window !== "undefined" ) {
        window.Router = factory();
    }

})(function () {

    var PushState = require( "properjs-pushstate" ),
        MatchRoute = require( "properjs-matchroute" ),
        matchElement = require( "properjs-matchelement" ),
        _initDelay = 200,
        _triggerEl,
        _activeEl;


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
         * Expression match http/https
         * @memberof Router
         * @member _rHTTPs
         * @private
         *
         */
        _rHTTPs: /^http[s]?:\/\/.*?\//,

        /**
         *
         * Expression match common file types...
         * @memberof Router
         * @member _rFiles
         * @private
         *
         */
        _rFiles: /\.(jpg|jpeg|png|gif|pdf|csv|txt|md|doc|docx|xls|xlsx|webm|mp4|mp3)$/gi,

        /**
         *
         * Expression match this documents domain
         * @memberof Router
         * @member _rDomain
         * @private
         *
         */
        _rDomain: new RegExp( document.domain ),

        /**
         *
         * Flag routing state
         * @memberof Router
         * @member _isRouting
         * @private
         *
         */
        _isRouting: false,

        /**
         *
         * Router init constructor method
         * @memberof Router
         * @method init
         * @param {object} options Settings for PushState
         * <ul>
         * <li>options.caching</li>
         * <li>options.proxy</li>
         * <li>options.proxy.domain</li>
         * <li>options.handle404</li>
         * <li>options.handle500</li>
         * <li>options.pushStateOptions</li>
         * </ul>
         *
         * @fires preget
         * @fires popget
         * @fires get
         *
         */
        init: function ( options ) {
            /**
             *
             * Router Store user options
             * @memberof Router
             * @member _options
             * @private
             *
             */
            this._options = {
                async: true,
                proxy: false,
                caching: true,
                handle404: true,
                handle500: true,
                pushStateOptions: {}
            };

            // Normalize usage options passed in
            options = (options || {});

            // Merge usage options with defaults
            for ( var i in options ) {
                this._options[ i ] = options[ i ];
            }

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
            this._pusher = new PushState( this._options.pushStateOptions );

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
             * Stored XHR responses
             * @memberof Router
             * @member _responses
             * @private
             *
             */
            this._responses = {};

            /**
             *
             * Router unique ID
             * @memberof Router
             * @member _uid
             * @private
             *
             */
            this._uid = 0;

            /**
             *
             * Router is READY status ?
             * @memberof Router
             * @member _ready
             * @private
             *
             */
            this._ready = false;
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
                // Ensure this first cache URL is clean as a whistle
                url = window.location.href.replace( window.location.hash, "" );

            // Bind GET requests to links
            document.addEventListener( "click", function ( e ) {
                self._handleClick( this, e );

            }, false );

            // Bind popstate event for history
            this._pusher.on( "popstate", function ( url, state ) {
                self._handlePopstate( url, state );
            });

            // Fire first route
            // Async this in order to allow .get() to work after instantiation
            if ( this._options.async && this._options.handle404 ) {
                this._route( url, function ( response, status ) {
                    self._ready = true;
                });

            // Shim a little and bypass true XHR here if not handling 404s
            } else {
                setTimeout(function () {
                    // https://developer.mozilla.org/en-US/docs/Web/API/XMLSerializer
                    var doc = new XMLSerializer().serializeToString( document );
                    var xhr = {
                        status: 200,
                        responseText: doc
                    };

                    self._fire( "get", url, xhr, xhr.status );
                    self._cache( url, xhr );
                    self._ready = true;

                }, _initDelay );
            }
        },

        /**
         *
         * Add an event listener
         * Binding "beforeget" and "afterget" wraps the XHR request
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

            this._handleClick( _triggerEl, {
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

        getActiveEl: function () {
            return _activeEl;
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
            if ( e.preventDefault ) {
                e.preventDefault();

            } else {
                e.returnValue = false;
            }
        },

        /**
         * GET click event handler
         * @memberof Router
         * @method _handleClick
         * @param {object} el The event context element
         * @param {object} e The event object
         * @private
         *
         * @fires get
         *
         */
        _handleClick: function ( el, e ) {
            var elem = (matchElement( el, "a", true ) || matchElement( e.target, "a", true )),
                isMatched = elem && this._matcher.test( elem.href ),
                isDomain = elem && this._rDomain.test( elem.href ),
                isProxy = elem && this._options.proxy && this._options.proxy.domain,
                isHashed = elem && elem.href.indexOf( "#" ) !== -1,
                isIgnore = elem && elem.className.indexOf( "js-router--ignore" ) !== -1,
                isMetaKey = elem && e.metaKey,
                isBlank = elem && elem.target === "_blank",
                isFile = elem && isDomain && elem.href.match( this._rFiles );

            // 0.1 => Ensure url passes MatchRoute config
            // 0.2 => Ensure url is on the Document's Domain
            // 0.X => Allow proxy domain's to go through this checkpoint
            if ( (isMatched && isDomain) || isProxy ) {
                // 0.3 => Ensure url is not a #hash
                // 0.4 => Ensure the element does not contain a `js-router--ignore` className
                // 0.5 => Ensure the Event.metaKey is not TRUE - Command+click
                // 0.6 => Ensure the element target is not for a new tab
                // 0.7 => Ensure url is not a file link on the same document domain
                if ( !isHashed && !isIgnore && !isMetaKey && !isBlank && !isFile ) {
                    _activeEl = elem;

                    this._preventDefault( e );

                    if ( !this._isRouting ) {
                        this._route( elem.href );
                    }
                }
            }
        },

        /**
         * Handle history popstate event from PushState
         * @memberof Router
         * @method _handlePopstate
         * @param {string} url The url popped to
         * @param {object} state The PushState state object
         * @private
         *
         * @fires get
         *
         */
        _handlePopstate: function ( url, state ) {
            // Hook around browsers firing popstate on pageload
            if ( this._ready ) {
                for ( var i = this._callbacks.get.length; i--; ) {
                    var dat = this._matcher.parse( url, this._callbacks.get[ i ]._routerRoutes );

                    if ( dat.matched ) {
                        break;
                    }
                }

                data = {
                    route: this._matcher._cleanRoute( url ),
                    response: this._responses[ url ],
                    request: dat,
                    status: this._responses[ url ].status
                };

                this._fire( "popget", url, data );

            } else {
                this._ready = true;
            }
        },

        /**
         * Execute the route
         * @memberof Router
         * @method _route
         * @param {string} url The url in question
         * @param {function} callback Optional, fired with done
         * @private
         *
         */
        _route: function ( url, callback ) {
            var self = this,
                urls = {
                    // For XHR
                    request: url,

                    // For pushState and Cache
                    original: url
                };

            this._isRouting = true;

            this._matchUrl( urls.original );

            // Handle proxy first since we modify the request URL
            // Basically, just piece together a URL that swaps this domain with proxy domain
            if ( this._options.proxy && this._options.proxy.domain ) {
                // Use window.location.host so it includes port for localhost
                urls.request = (this._options.proxy.domain + "/" + urls.request.replace( this._rHTTPs, "" ));
            }

            this._getUrl( urls, function ( response, status ) {
                self._isRouting = false;

                // Push the URL to window History
                self._pusher.push( urls.original );

                // Fire event for routing
                self._fire( "get", urls.original, response, status );

                if ( typeof callback === "function" ) {
                    callback( response, status );
                }
            });
        },

        /**
         * Match a URL and fire "preget"
         * @memberof Router
         * @method _matchUrl
         * @param {string} url The url in question
         * @private
         *
         */
        _matchUrl: function ( url ) {
            if ( !this._ready ) {
                return;
            }

            for ( var i = this._callbacks.get.length; i--; ) {
                var data = this._matcher.parse( url, this._callbacks.get[ i ]._routerRoutes );

                if ( data.matched ) {
                    this._fire( "preget", url, data );
                    break;
                }
            }
        },

        /**
         *
         * Request a url with an XMLHttpRequest
         * @memberof Router
         * @method _getUrl
         * @param {object} urls The urls to request / push / cache
         * @param {function} callback The function to call when done
         * @private
         *
         */
        _getUrl: function ( urls, callback ) {
            var handler = function ( res, stat ) {
                    try {
                        // Cache if option enabled
                        self._cache( urls.original, res );

                        if ( typeof callback === "function" ) {
                            callback( res, stat );
                        }

                    } catch ( error ) {}
                },
                xhr = null,
                self = this;

            // Cached response ?
            if ( this._responses[ urls.original ] ) {
                handler( this._responses[ urls.original ], this._responses[ urls.original ].status );

            // Fresh request ?
            } else if ( this._options.async ) {
                xhr = new XMLHttpRequest();

                xhr.open( "GET", urls.request, true );

                xhr.onreadystatechange = function ( e ) {
                    if ( this.readyState === 4 ) {
                        if ( this.status === 200 ) {
                            handler( this, 200 );

                        } else if ( this.status === 404 && self._options.handle404 ) {
                            handler( this, 404 );

                        } else if ( this.status === 500 && self._options.handle500 ) {
                            handler( this, 500 );
                        }
                    }
                };

                xhr.send();

            } else {
                handler( { responseText: "" }, 200 );
            }
        },

        /**
         *
         * Cache an XHR response object
         * @memberof Router
         * @method _cache
         * @param {string} url The url to cache for
         * @param {object} res The XHR object
         * @private
         *
         */
        _cache: function ( url, res ) {
            // Caching is enabled, Not currently cached yet
            if ( this._options.caching && !this._responses[ url ] ) {
                this._responses[ url ] = res;
            }
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

            // Fires basic timing events "preget", "popget"
            } else if ( this._callbacks[ event ] ) {
                for ( i = this._callbacks[ event ].length; i--; ) {
                    this._callbacks[ event ][ i ].call( this, response );
                }
            }
        }
    };


    return Router;

});

},{"properjs-pushstate":36,"properjs-matchelement":37,"properjs-matchroute":38}],26:[function(require,module,exports) {
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

    if ( typeof exports === "object" && typeof module !== "undefined" ) {
        module.exports = factory();

    } else if ( typeof window !== "undefined" ) {
        window.PageController = factory();
    }

})(function () {

    // Useful stuff
    var Router = require( "properjs-router" ),
        Controller = require( "properjs-controller" ),

        _router = null,
        _config = [],
        _modules = [],
        _synced = {
            active: [],
            inactive: []
        },
        _initialized = false,
        _timeBefore = null,
        _timeDelay = 0,
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
            if ( (Date.now() - _timeBefore) >= _instance._options.transitionTime ) {
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

        }, _instance._options.transitionTime );
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
            fire( "router-samepage", {
                request: data
            });
            _isSamePage = true;
            return;
        }

        _timeBefore = Date.now();

        if ( !_isFirstRoute ) {
            fire( "router-transition-out", {
                request: data
            });
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

            fire( "initialized-page", data );

        // All other Router sequences fall here
        } else {
            // Allow transition duration to take place
            setTimeout(function () {
                // 0.1 Sync modules and unload active ones
                syncModules();
                execUnload();

                // 0.2 Refresh the document content
                fire( "router-refresh-document", data );

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

            }, _instance._options.transitionTime );
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
     * <li>transitionTime</li>
     * <li>routerOptions</li>
     * </ul>
     *
     */
    var PageController = function ( options ) {
        // Singleton
        if ( !_instance ) {
            _instance = this;

            /**
             *
             * The default options
             * @memberof _options
             * @member _routerOptions
             * @private
             *
             */
            this._options = {
                transitionTime: _timeDelay,
                routerOptions: {
                    pushStateOptions: {}
                }
            };

            // Normalize usage options passed in
            options = (options || {});

            // Merge usage options with defaults
            if ( options.transitionTime ) {
                this._options.transitionTime = options.transitionTime;
            }

            if ( options.routerOptions ) {
                for ( var i in options.routerOptions ) {
                    this._options.routerOptions[ i ] = options.routerOptions[ i ];
                }
            }
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
        _router = new Router( this._options.routerOptions );

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

    return PageController;

});
},{"properjs-controller":27,"properjs-router":28}],2:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jquery = require("js_libs/jquery/dist/jquery.js");

var _jquery2 = _interopRequireDefault(_jquery);

var _properjsPagecontroller = require("properjs-pagecontroller");

var _properjsPagecontroller2 = _interopRequireDefault(_properjsPagecontroller);

var _core = require("./core");

var core = _interopRequireWildcard(_core);

var _animate = require("./animate");

var _animate2 = _interopRequireDefault(_animate);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 * @public
 * @namespace router
 * @description Handles async web app routing for nice transitions.
 *
 */
const router = {
  /**
   *
   * @public
   * @method init
   * @memberof router
   * @description Initialize the router module.
   *
   */
  init() {
    this.state = {};
    this.pageDuration = core.util.getTransitionDuration(core.dom.page[0]);
    this.bindEmptyHashLinks();
    this.initPageController();

    // core.log( "router initialized" );
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
  setState(name, value) {
    this.state[name] = {
      checked: false,
      name,
      value
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
  getState(name) {
    let id = null;
    let ret = null;

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
  checkState() {
    let id = null;

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
  route(path) {
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
  push(path, cb) {
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
  initPageController() {
    this.controller = new _properjsPagecontroller2.default({
      transitionTime: this.pageDuration
    });

    this.controller.setConfig(["*"]);

    this.controller.setModules([core.images, _animate2.default]);

    // this.controller.on( "page-controller-router-samepage", () => mobileNav.close() );
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
  initPage(html) {
    const cache = this.parseDoc(html);

    this.cachePage(cache.$object, cache.response);

    nav.padPage();
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
  parseDoc(html) {
    let doc = document.createElement("html");

    doc.innerHTML = html;

    doc = (0, _jquery2.default)(doc);

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
  cachePage($object, response) {
    core.cache.set(core.util.getPageKey(), {
      $object,
      response
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
  bindEmptyHashLinks() {
    core.dom.body.on("click", "[href^='#']", e => e.preventDefault());
  },

  /**
   *
   * @public
   * @method onPreloadDone
   * @memberof router
   * @description Finish routing sequence when image pre-loading is done.
   *
   */
  onPreloadDone() {
    core.util.disableMouseWheel(false);
    core.util.disableTouchMove(false);

    core.dom.html.removeClass("is-routing");
    core.dom.page.removeClass("is-inactive");

    core.scrolls.topout(0);
    core.scrolls.clearStates();

    setTimeout(() => {
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
  changePageOut() {
    core.util.disableMouseWheel(true);
    core.util.disableTouchMove(true);

    core.dom.html.addClass("is-routing");
    core.dom.page.addClass("is-inactive");

    // setTimeout( () => mobileNav.close(), this.pageDuration );

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
  changeContent(html) {
    let cached = core.cache.get(core.util.getPageKey());

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
  changePageIn(data) {
    const collection = data.request.uri.split("/")[0];

    // nav.toggleActive( collection );
  }
};

/******************************************************************************
 * Export
*******************************************************************************/

// import nav from "./menus/nav";
// import mobileNav from "./nav-mobile";
exports.default = router;
},{"./animate":4,"./core":6,"properjs-pagecontroller":26}],5:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _core = require("../core");

var core = _interopRequireWildcard(_core);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 *
 * @public
 * @class Menu
 * @classdesc Handle normalized open/close for overlay menus.
 * @param {Hobo} $node The menu element
 *
 */
class Menu {
  constructor($node) {
    this.$node = $node;
    this.tDuration = core.util.getTransitionDuration(this.$node[0]);
    this.isOpen = false;

    this.$node.detach();
  }

  /**
   *
   * @public
   * @instance
   * @method open
   * @memberof menus.Menu
   * @description Open the menu.
   *
   */
  open() {
    this.isOpen = true;

    core.dom.html.addClass("is-neverflow is-menu-open");
    core.dom.body.append(this.$node);

    setTimeout(() => this.$node.addClass("is-active"), 100);
    setTimeout(() => this.$node.addClass("is-active-events"), this.tDuration * 2);
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
  close() {
    this.isOpen = false;

    this.$node.removeClass("is-active");
    core.dom.html.removeClass("is-neverflow");

    setTimeout(() => {
      core.dom.html.removeClass("is-menu-open");
      this.$node.detach().removeClass("is-active-events");
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
  toggle() {
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
  isActive() {
    return this.isOpen;
  }
}

/******************************************************************************
 * Export
*******************************************************************************/
exports.default = Menu;
},{"../core":6}],3:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _core = require("../core");

var core = _interopRequireWildcard(_core);

var _Menu = require("./Menu");

var _Menu2 = _interopRequireDefault(_Menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

const $_jsItems = core.dom.nav.find(".js-menu-nav-item");

/**
 *
 * @public
 * @namespace nav
 * @description Handles opening / closing the main nav menu.
 * @memberof menus
 *
 */
const nav = {
  /**
   *
   * @public
   * @method init
   * @memberof menus.nav
   * @description Initializes navmenu interactions.
   *
   */
  init() {
    this.bindMainEvents();

    this.menu = new _Menu2.default(core.dom.nav);

    // core.log( "nav initialized" );
  },

  /**
   *
   * @public
   * @method open
   * @memberof menus.nav
   * @description Opens the navmenu.
   *
   */
  open() {
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
  close() {
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
  toggleActive(id) {
    const $navi = $_jsItems.find(`.js-nav__${id}`);

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
  bindMainEvents() {
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
const onTapNavMenu = function () {
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
const onTapNavIcon = function () {
  nav.open();
};

/******************************************************************************
 * Export
*******************************************************************************/
exports.default = nav;
},{"./Menu":5,"../core":6}],1:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _router = require("./router");

var _router2 = _interopRequireDefault(_router);

var _core = require("./core");

var core = _interopRequireWildcard(_core);

var _nav = require("./menus/nav");

var _nav2 = _interopRequireDefault(_nav);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import textBar from "./comp-textbar";
// import filterSort from "./filtersort";


/**
 *
 * @public
 * @class App
 * @classdesc Load the App application Class to handle it ALL.
 *
 */
class App {
  constructor() {
    // this.nav = nav;
    this.core = core;
    // this.textBar = textBar;
    // this.router = router;
    // this.filterSort = filterSort;

    this.initEvents();
    this.initModules();
  }

  /**
   *
   * @public
   * @instance
   * @method initModules
   * @memberof App
   * @description Initialize application modules.
   *
   */
  initModules() {
    // add device classes to htmle (touch, hover, surface classes)
    this.core.detect.init(this);
    this.core.scrolls.init(this);
    // this.textBar.init( this );
    // this.core.resizes.init( this );
    // this.router.init( this );
    // this.nav.init( this );
    // this.filterSort.init( this );

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
  initEvents() {
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
  onPreloadDone() {
    this.core.emitter.off("app--preload-done", this._onPreloadDone);

    this.core.dom.html.removeClass("is-clipped");
    this.core.dom.body.removeClass("is-clipped");
  }
}

/******************************************************************************
 * Expose
*******************************************************************************/
window.app = new App();

/******************************************************************************
 * Export
*******************************************************************************/
exports.default = window.app;
},{"./router":2,"./core":6,"./menus/nav":3}],0:[function(require,module,exports) {
var global = (1, eval)('this');
var OldModule = module.bundle.Module;
function Module() {
  OldModule.call(this);
  this.hot = {
    accept: function (fn) {
      this._acceptCallback = fn || function () {};
    },
    dispose: function (fn) {
      this._disposeCallback = fn;
    }
  };
}

module.bundle.Module = Module;

if (!module.bundle.parent) {
  var ws = new WebSocket('ws://localhost:51562/');
  ws.onmessage = function(event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      data.assets.forEach(function (asset) {
        hmrApply(global.require, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.require, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = () => {
        window.location.reload();
      }
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + 'data.error.stack');
    }
  };
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || (Array.isArray(dep) && dep[dep.length - 1] === id)) {
        parents.push(+k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  if (cached && cached.hot._disposeCallback) {
    cached.hot._disposeCallback();
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallback) {
    cached.hot._acceptCallback();
    return true;
  }

  return getParents(global.require, id).some(function (id) {
    return hmrAccept(global.require, id)
  });
}
},{}]},{},[0,1])
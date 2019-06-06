/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 25);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(18);
var isBuffer = __webpack_require__(39);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogLevel; });
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
// These values are designed to match the ASP.NET Log Levels since that's the pattern we're emulating here.
/** Indicates the severity of a log message.
 *
 * Log Levels are ordered in increasing severity. So `Debug` is more severe than `Trace`, etc.
 */
var LogLevel;
(function (LogLevel) {
    /** Log level for very low severity diagnostic messages. */
    LogLevel[LogLevel["Trace"] = 0] = "Trace";
    /** Log level for low severity diagnostic messages. */
    LogLevel[LogLevel["Debug"] = 1] = "Debug";
    /** Log level for informational diagnostic messages. */
    LogLevel[LogLevel["Information"] = 2] = "Information";
    /** Log level for diagnostic messages that indicate a non-fatal problem. */
    LogLevel[LogLevel["Warning"] = 3] = "Warning";
    /** Log level for diagnostic messages that indicate a failure in the current operation. */
    LogLevel[LogLevel["Error"] = 4] = "Error";
    /** Log level for diagnostic messages that indicate a failure that will terminate the entire application. */
    LogLevel[LogLevel["Critical"] = 5] = "Critical";
    /** The highest possible log level. Used when configuring logging to indicate that no log messages should be emitted. */
    LogLevel[LogLevel["None"] = 6] = "None";
})(LogLevel || (LogLevel = {}));
//# sourceMappingURL=ILogger.js.map

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Arg; });
/* harmony export (immutable) */ __webpack_exports__["e"] = getDataDetail;
/* unused harmony export formatArrayBuffer */
/* harmony export (immutable) */ __webpack_exports__["f"] = sendMessage;
/* harmony export (immutable) */ __webpack_exports__["d"] = createLogger;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Subject; });
/* unused harmony export SubjectSubscription */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ConsoleLogger; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ILogger__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Loggers__ = __webpack_require__(4);
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


/** @private */
var Arg = /** @class */ (function () {
    function Arg() {
    }
    Arg.isRequired = function (val, name) {
        if (val === null || val === undefined) {
            throw new Error("The '" + name + "' argument is required.");
        }
    };
    Arg.isIn = function (val, values, name) {
        // TypeScript enums have keys for **both** the name and the value of each enum member on the type itself.
        if (!(val in values)) {
            throw new Error("Unknown " + name + " value: " + val + ".");
        }
    };
    return Arg;
}());

/** @private */
function getDataDetail(data, includeContent) {
    var length = null;
    if (data instanceof ArrayBuffer) {
        length = "Binary data of length " + data.byteLength;
        if (includeContent) {
            length += ". Content: '" + formatArrayBuffer(data) + "'";
        }
    }
    else if (typeof data === "string") {
        length = "String data of length " + data.length;
        if (includeContent) {
            length += ". Content: '" + data + "'.";
        }
    }
    return length;
}
/** @private */
function formatArrayBuffer(data) {
    var view = new Uint8Array(data);
    // Uint8Array.map only supports returning another Uint8Array?
    var str = "";
    view.forEach(function (num) {
        var pad = num < 16 ? "0" : "";
        str += "0x" + pad + num.toString(16) + " ";
    });
    // Trim of trailing space.
    return str.substr(0, str.length - 1);
}
/** @private */
function sendMessage(logger, transportName, httpClient, url, accessTokenFactory, content, logMessageContent) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, headers, token, response;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, accessTokenFactory()];
                case 1:
                    token = _b.sent();
                    if (token) {
                        headers = (_a = {},
                            _a["Authorization"] = "Bearer " + token,
                            _a);
                    }
                    logger.log(__WEBPACK_IMPORTED_MODULE_0__ILogger__["a" /* LogLevel */].Trace, "(" + transportName + " transport) sending data. " + getDataDetail(content, logMessageContent) + ".");
                    return [4 /*yield*/, httpClient.post(url, {
                            content: content,
                            headers: headers,
                        })];
                case 2:
                    response = _b.sent();
                    logger.log(__WEBPACK_IMPORTED_MODULE_0__ILogger__["a" /* LogLevel */].Trace, "(" + transportName + " transport) request complete. Response status: " + response.statusCode + ".");
                    return [2 /*return*/];
            }
        });
    });
}
/** @private */
function createLogger(logger) {
    if (logger === undefined) {
        return new ConsoleLogger(__WEBPACK_IMPORTED_MODULE_0__ILogger__["a" /* LogLevel */].Information);
    }
    if (logger === null) {
        return __WEBPACK_IMPORTED_MODULE_1__Loggers__["a" /* NullLogger */].instance;
    }
    if (logger.log) {
        return logger;
    }
    return new ConsoleLogger(logger);
}
/** @private */
var Subject = /** @class */ (function () {
    function Subject(cancelCallback) {
        this.observers = [];
        this.cancelCallback = cancelCallback;
    }
    Subject.prototype.next = function (item) {
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var observer = _a[_i];
            observer.next(item);
        }
    };
    Subject.prototype.error = function (err) {
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var observer = _a[_i];
            if (observer.error) {
                observer.error(err);
            }
        }
    };
    Subject.prototype.complete = function () {
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var observer = _a[_i];
            if (observer.complete) {
                observer.complete();
            }
        }
    };
    Subject.prototype.subscribe = function (observer) {
        this.observers.push(observer);
        return new SubjectSubscription(this, observer);
    };
    return Subject;
}());

/** @private */
var SubjectSubscription = /** @class */ (function () {
    function SubjectSubscription(subject, observer) {
        this.subject = subject;
        this.observer = observer;
    }
    SubjectSubscription.prototype.dispose = function () {
        var index = this.subject.observers.indexOf(this.observer);
        if (index > -1) {
            this.subject.observers.splice(index, 1);
        }
        if (this.subject.observers.length === 0) {
            this.subject.cancelCallback().catch(function (_) { });
        }
    };
    return SubjectSubscription;
}());

/** @private */
var ConsoleLogger = /** @class */ (function () {
    function ConsoleLogger(minimumLogLevel) {
        this.minimumLogLevel = minimumLogLevel;
    }
    ConsoleLogger.prototype.log = function (logLevel, message) {
        if (logLevel >= this.minimumLogLevel) {
            switch (logLevel) {
                case __WEBPACK_IMPORTED_MODULE_0__ILogger__["a" /* LogLevel */].Critical:
                case __WEBPACK_IMPORTED_MODULE_0__ILogger__["a" /* LogLevel */].Error:
                    console.error(__WEBPACK_IMPORTED_MODULE_0__ILogger__["a" /* LogLevel */][logLevel] + ": " + message);
                    break;
                case __WEBPACK_IMPORTED_MODULE_0__ILogger__["a" /* LogLevel */].Warning:
                    console.warn(__WEBPACK_IMPORTED_MODULE_0__ILogger__["a" /* LogLevel */][logLevel] + ": " + message);
                    break;
                case __WEBPACK_IMPORTED_MODULE_0__ILogger__["a" /* LogLevel */].Information:
                    console.info(__WEBPACK_IMPORTED_MODULE_0__ILogger__["a" /* LogLevel */][logLevel] + ": " + message);
                    break;
                default:
                    // console.debug only goes to attached debuggers in Node, so we use console.log for Trace and Debug
                    console.log(__WEBPACK_IMPORTED_MODULE_0__ILogger__["a" /* LogLevel */][logLevel] + ": " + message);
                    break;
            }
        }
    };
    return ConsoleLogger;
}());

//# sourceMappingURL=Utils.js.map

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpTransportType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TransferFormat; });
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
// This will be treated as a bit flag in the future, so we keep it using power-of-two values.
/** Specifies a specific HTTP transport type. */
var HttpTransportType;
(function (HttpTransportType) {
    /** Specifies no transport preference. */
    HttpTransportType[HttpTransportType["None"] = 0] = "None";
    /** Specifies the WebSockets transport. */
    HttpTransportType[HttpTransportType["WebSockets"] = 1] = "WebSockets";
    /** Specifies the Server-Sent Events transport. */
    HttpTransportType[HttpTransportType["ServerSentEvents"] = 2] = "ServerSentEvents";
    /** Specifies the Long Polling transport. */
    HttpTransportType[HttpTransportType["LongPolling"] = 4] = "LongPolling";
})(HttpTransportType || (HttpTransportType = {}));
/** Specifies the transfer format for a connection. */
var TransferFormat;
(function (TransferFormat) {
    /** Specifies that only text data will be transmitted over the connection. */
    TransferFormat[TransferFormat["Text"] = 1] = "Text";
    /** Specifies that binary data will be transmitted over the connection. */
    TransferFormat[TransferFormat["Binary"] = 2] = "Binary";
})(TransferFormat || (TransferFormat = {}));
//# sourceMappingURL=ITransport.js.map

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NullLogger; });
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
/** A logger that does nothing when log messages are sent to it. */
var NullLogger = /** @class */ (function () {
    function NullLogger() {
    }
    /** @inheritDoc */
    // tslint:disable-next-line
    NullLogger.prototype.log = function (_logLevel, _message) {
    };
    /** The singleton instance of the {@link @aspnet/signalr.NullLogger}. */
    NullLogger.instance = new NullLogger();
    return NullLogger;
}());

//# sourceMappingURL=Loggers.js.map

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TimeoutError; });
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/** Error thrown when an HTTP request fails. */
var HttpError = /** @class */ (function (_super) {
    __extends(HttpError, _super);
    /** Constructs a new instance of {@link @aspnet/signalr.HttpError}.
     *
     * @param {string} errorMessage A descriptive error message.
     * @param {number} statusCode The HTTP status code represented by this error.
     */
    function HttpError(errorMessage, statusCode) {
        var _newTarget = this.constructor;
        var _this = this;
        var trueProto = _newTarget.prototype;
        _this = _super.call(this, errorMessage) || this;
        _this.statusCode = statusCode;
        // Workaround issue in Typescript compiler
        // https://github.com/Microsoft/TypeScript/issues/13965#issuecomment-278570200
        _this.__proto__ = trueProto;
        return _this;
    }
    return HttpError;
}(Error));

/** Error thrown when a timeout elapses. */
var TimeoutError = /** @class */ (function (_super) {
    __extends(TimeoutError, _super);
    /** Constructs a new instance of {@link @aspnet/signalr.TimeoutError}.
     *
     * @param {string} errorMessage A descriptive error message.
     */
    function TimeoutError(errorMessage) {
        var _newTarget = this.constructor;
        if (errorMessage === void 0) { errorMessage = "A timeout occurred."; }
        var _this = this;
        var trueProto = _newTarget.prototype;
        _this = _super.call(this, errorMessage) || this;
        // Workaround issue in Typescript compiler
        // https://github.com/Microsoft/TypeScript/issues/13965#issuecomment-278570200
        _this.__proto__ = trueProto;
        return _this;
    }
    return TimeoutError;
}(Error));

//# sourceMappingURL=Errors.js.map

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageType; });
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
/** Defines the type of a Hub Message. */
var MessageType;
(function (MessageType) {
    /** Indicates the message is an Invocation message and implements the {@link @aspnet/signalr.InvocationMessage} interface. */
    MessageType[MessageType["Invocation"] = 1] = "Invocation";
    /** Indicates the message is a StreamItem message and implements the {@link @aspnet/signalr.StreamItemMessage} interface. */
    MessageType[MessageType["StreamItem"] = 2] = "StreamItem";
    /** Indicates the message is a Completion message and implements the {@link @aspnet/signalr.CompletionMessage} interface. */
    MessageType[MessageType["Completion"] = 3] = "Completion";
    /** Indicates the message is a Stream Invocation message and implements the {@link @aspnet/signalr.StreamInvocationMessage} interface. */
    MessageType[MessageType["StreamInvocation"] = 4] = "StreamInvocation";
    /** Indicates the message is a Cancel Invocation message and implements the {@link @aspnet/signalr.CancelInvocationMessage} interface. */
    MessageType[MessageType["CancelInvocation"] = 5] = "CancelInvocation";
    /** Indicates the message is a Ping message and implements the {@link @aspnet/signalr.PingMessage} interface. */
    MessageType[MessageType["Ping"] = 6] = "Ping";
    /** Indicates the message is a Close message and implements the {@link @aspnet/signalr.CloseMessage} interface. */
    MessageType[MessageType["Close"] = 7] = "Close";
})(MessageType || (MessageType = {}));
//# sourceMappingURL=IHubProtocol.js.map

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(0);
var normalizeHeaderName = __webpack_require__(41);

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(20);
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(20);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(19)))

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user__ = __webpack_require__(9);


/**
 * Manager class presents your employee who talks with website visitors
 *
 * @extends {User}
 * @property {string|null} avatarUrl URL for visitor avatar image
 */
class Manager extends __WEBPACK_IMPORTED_MODULE_0__user__["a" /* default */] {

    /**
	 * Getter for manager avatar.
     * @return {string|null}
     */
	getAvatarUrl() {
        return this.avatarUrl;
    }

    /**
	 * Getter for manager role (admin or manager)
     * @returns {string}
     */
	getRole() {
		return this.role;
	}
}

/**
 * Static builder for manager instance
 *
 * @param data
 * @return {Manager}
 */
Manager.buildFromInfo = (data) => {
	let manager = new Manager();
	manager.setUuid(data.uuid);
	manager.setEmail(data.email);
	manager.setName(data.name);
	manager.avatarUrl = data.avatarUrl;

	return manager;
};

/* harmony default export */ __webpack_exports__["a"] = (Manager);


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Class User represents conversation member (visitor or manager).
 * @see Visitor for detailed information about visitor
 * @see Manager for detailed information about manager
 * @property {string} uuid UUID is unique identifier for user. UUID for visitor sets automatically on starting.
 * Managers have UUID in their account.
 * @property {string} name
 * @property {string} email
 */
class User {

    /**
     * Setter for UUID
     * @param {string} uuid
     */
	setUuid(uuid) {
		this.uuid = uuid;
	}

    /**
     * Getter for UUID
     *
     * @return {string|*}
     */
	getUuid() {
		return this.uuid;
	}

    /**
     * Setter for name
     * @param {string} name
     */
    setName(name) {
        this.name = name;
    }

    /**
     * Getter for name
     * @return {string}
     */
    getName() {
        return this.name;
    }

    /**
     * Setter for email
     * @param {string} email
     */
    setEmail(email) {
        this.email = email;
    }

    /**
     * Getter for email
     * @return {string|*}
     */
    getEmail() {
        return this.email;
    }

}

/* harmony default export */ __webpack_exports__["a"] = (User);


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__field__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user__ = __webpack_require__(9);



/**
 * Visitor class represents information about current website visitor.
 * @extends User
 * @property {Field[]} fields custom fiels defined for user
 */
class Visitor extends __WEBPACK_IMPORTED_MODULE_1__user__["a" /* default */] {

    /**
     * Visitor constructor
     * @param {Chat} chat
     */
    constructor(chat) {
        super();
        // this.chat = chat;
        this.fields = [];
    }

    getFields() {
        return this.fields;
    }

    // setField(newField) {
    //     if (this.fields.length > 0) {
    //         this.fields.forEach((field) => {
    //             if (field.name === newField.name) {
    //                 field.value = newField.value;
    //                 this.chat.sendVisitorInfo(this);
    //                 return;
    //             }
    //         });
    //     } else {
    //      this.fields.push(newField);
    //      this.chat.sendVisitorInfo(this);
    //     }
    // }

    getIsOnline() {
        return this.isOnline;
    }

    setIsOnline(isOnline) {
        this.isOnline = isOnline;
    }

}

/**
 * Static builder for visitor instance
 *
 * @param {object} data Visitor representation received from API
 * @return {Visitor}
 */
Visitor.buildFromInfo = (data) => {
    let visitor = new Visitor();
    visitor.setUuid(data.uuid);
    visitor.setName(data.name);
    visitor.setEmail(data.email);
    visitor.setIsOnline(data.isOnline);
    if (data.fields.length > 0) {
        data.field.forEach((field) => {
            f = __WEBPACK_IMPORTED_MODULE_0__field__["a" /* default */].buildFromInfo(field);
            visitor.setField(field);
        });
    }
    return visitor;
};

/* harmony default export */ __webpack_exports__["a"] = (Visitor);


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Fields are key=>value pairs representing some useful information about visitor for your managers.
 * With Fields you can tell your manaters whom they are speaking to:
 * name, email, address, CRM status, internal ID etc.
 *
 * @see Visitor
 * @see ChatixCore
 * @property {string} name Unique text identifier for Field. Visitor can't have multiple Fields with equal names
 * @property {string} value Field payload.
 */
class Field {

    /**
	 * Field constructor
	 *
     * @param {string} name unique name for Visitor field
     * @param {string} value field payload
     */
	constructor(name, value){
		this.name = name;
		this.value = value;
	}

}

/* harmony default export */ __webpack_exports__["a"] = (Field);


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__aspnet_signalr__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__manager__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__visitor__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lz_string__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lz_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lz_string__);
// import {HubConnection} from '@aspnet/signalr-client';







// const API_URL = process.env.API_URL + ':' + process.env.API_PORT + '/' + process.env.API_PATH;
const API_URL = 'https://app1.chatix.io:5003/v1';

/**
 * @class Connection implements Chatix protocol implementation.
 * This class is private and is used inside ChatixCore.
 */
class Connection {

	/**
	* Connection constructor
	* @param {Chat} chat Chat instance is required to start.
     * Chat instance **MUST be already configured** (websiteId has to be set)
	*/
    constructor(chat) {
        this.chat = chat;
        this.websiteId = chat.websiteId;
        this.visitorId = chat.visitor.getUuid();
    }

    /**
	 * SignalR connection start
	 *
     * @returns {*|Promise<void>}
     */
	start(customVisitorId) {
      let hubUrl;
      if (Boolean(customVisitorId)) {
         hubUrl = API_URL + '/chat' + '?visitorId=' + customVisitorId + '&websiteId=' + this.websiteId;
         localStorage.setItem('chatix__visitorId_v1', customVisitorId);
      }
      else {
         hubUrl = API_URL + '/chat' + '?visitorId=' + this.visitorId + '&websiteId=' + this.websiteId;
      }

      this.hubConnection = new __WEBPACK_IMPORTED_MODULE_0__aspnet_signalr__["a" /* HubConnectionBuilder */]()
         .withUrl(hubUrl)
         .configureLogging(__WEBPACK_IMPORTED_MODULE_0__aspnet_signalr__["b" /* LogLevel */].None)
         .build();

        let thiss = this;
        // this.hubConnection.onclose(() => {
        //     // console.error(new Error("Connection closed unexpectedly!"))
        //     let interval = setInterval(function(){
        //        thiss.hubConnection.start().then(function(){
        //           thiss.chat.callbackSignalrConnected();
        //           clearInterval(interval);
        //        }).catch(function(){
        //           console.log('Attempted reconnection signalR');
        //        });
        //     }, 1000);
        // });

        this.hubConnection.on('ApplyErrorMessage', function (message, method) {
            // console.log('Ошибка ' + message + ' в методе ' + method);
            this.chat.receivedErrorMessage(method, message);
        }.bind({chat: this.chat}));

         this.hubConnection.on('OnInvalidVisitorIdConnected', function (message, method) {
            // если уже есть ошибка связанная с неправильным visitorId
            if (!localStorage.getItem('visitorId_invalid_error')) {
               localStorage.setItem('visitorId_invalid_error', true);

               __WEBPACK_IMPORTED_MODULE_3_axios___default.a.get(API_URL + '/visitor/get-id?websiteId=' + this.chat.websiteId)
                  .then((res) => {
                     if (localStorage.getItem('chatix__visitorId_v0')) {
                        localStorage.removeItem('chatix__visitorId_v0')
                     }
                     localStorage.setItem('chatix__visitorId_v1', res.data);


                     hubUrl = API_URL + '/chat' + '?visitorId=' + res.data + '&websiteId=' + thiss.websiteId;
                     thiss.hubConnection = new __WEBPACK_IMPORTED_MODULE_0__aspnet_signalr__["a" /* HubConnectionBuilder */]()
                        .withUrl(hubUrl)
                        .configureLogging(__WEBPACK_IMPORTED_MODULE_0__aspnet_signalr__["b" /* LogLevel */].None)
                        .build();

                     thiss.hubConnection.stop();
                     localStorage.removeItem('visitorId_invalid_error');

                     thiss.hubConnection.start().then(
                        function(){
                           thiss.hubConnection.invoke('getManagers').then(
                              function(managers) {
                                 thiss.chat.callbackGetManagers(managers);
                              }
                           )

                           thiss.hubConnection.invoke('GetVisitorInfo', null).then(
                              function(visitor) {
                                 let newId = true;
                                 thiss.chat.visitor = visitor;
                                 thiss.chat.callbackSignalrConnected(visitor, newId);
                              }
                           );
                        }
                     ).catch(
                        function(err){
                           console.log(err);
                        }
                     );
                  }
               );
            }
            else {
               // console.log('ОШИБКА ' + message + ' В МЕТОДЕ ' + method);
            }
         }.bind({chat: this.chat}));

         function slideWidget(){
            if (screen.width > 667) {
               let chatHeight = document.querySelectorAll('.chatixWindow')[0].offsetHeight;
           		let headHeight = document.querySelectorAll('.chatHead')[0].offsetHeight;
           		if (document.querySelectorAll('.chatixWindow')[0].classList.contains('chatixWindow__hidden')) {
                  document.querySelectorAll('.chatixWindow')[0].style.bottom = (chatHeight - headHeight)*(-1) + 'px';
           		}
           		else {
           			document.querySelectorAll('.chatixWindow')[0].style.bottom = 0 + 'px';
           		}
            }
        	}

        this.hubConnection.on("ApplyMessage", function (data) {
           this.chat.receivedNewMessages(data);
           // разворачиваем виджет при входящем сообщении
           document.querySelectorAll('.chatixWindow')[0].style.bottom = 0 + 'px';
        }.bind({chat: this.chat}));

        this.hubConnection.on("ApplyManagerInfo", function (manager) {
            let m = __WEBPACK_IMPORTED_MODULE_1__manager__["a" /* default */].buildFromInfo(manager);
            this.chat.managers.push(m);
        }.bind({chat: this.chat}));

        this.hubConnection.on("OnConnectManagerToConversation", function (manager) {
            let m = __WEBPACK_IMPORTED_MODULE_1__manager__["a" /* default */].buildFromInfo(manager);
            this.chat.addManager(manager);
            this.chat.onManagerConnect(manager);
        }.bind({chat: this.chat}));

        this.hubConnection.on("OnDisconnectManagerFromConversation", function (manager) {
            let m = __WEBPACK_IMPORTED_MODULE_1__manager__["a" /* default */].buildFromInfo(manager);
            this.chat.removeManager(manager);
            this.chat.onManagerDisconnect(manager);

            slideWidget();
        }.bind({chat: this.chat}));

        this.hubConnection.on("ApplyVisitorInfo", function (visitor) {
            let v = __WEBPACK_IMPORTED_MODULE_2__visitor__["a" /* default */].buildFromInfo(visitor);
            this.chat.setVisitor(v);
        }.bind({chat: this.chat}));














      // запрос на разрешение просмотра экрана
      this.hubConnection.on("OnRequestScreenCast", function () {
         // console.log('Запрос на просмотр экрана');
         // если браузер edge, то отправляем менеджеру инфу что трансляция невозможна
         if (document.documentMode || /Edge/.test(navigator.userAgent)) {
            // console.log('bad browser');
            this.hubConnection.invoke('AllowScreenCast', false).then(function(){});
         }
         else {
            document.querySelectorAll('.broadcastBlock')[0].classList.remove('hidden');
            document.querySelectorAll('.broadcastBlock__allow')[0].classList.remove('hidden');
            slideWidget();

            // визитор разрешает просмотр
            document.getElementById('broadcastBlock__allowBtn').addEventListener('click', function(){
               localStorage.setItem('screenBroadcast', true);
               document.querySelectorAll('.broadcastBlock__allow')[0].classList.add('hidden');
               this.hubConnection.invoke('AllowScreenCast', true).then(function(){});
               document.querySelectorAll('.broadcastBlock__broadcasting')[0].classList.remove('hidden');

               slideWidget();
            }.bind(this));

            // визитор НЕ разрешает просмотр
            document.getElementById('broadcastBlock__disallowBtn').addEventListener('click', function(){
               localStorage.removeItem('screenBroadcast');
               document.querySelectorAll('.broadcastBlock__allow')[0].classList.add('hidden');
               document.querySelectorAll('.broadcastBlock')[0].classList.add('hidden');
               this.hubConnection.invoke('AllowScreenCast', false).then(function(){});

               slideWidget();
            }.bind(this));

            // визитор выключил просмотр
            document.getElementById('broadcastBlock__disconectBtn').addEventListener('click', function(){
               localStorage.removeItem('screenBroadcast');
               document.querySelectorAll('.broadcastBlock')[0].classList.add('hidden');
               document.querySelectorAll('.broadcastBlock__allow')[0].classList.add('hidden');
               document.querySelectorAll('.broadcastBlock__broadcasting')[0].classList.add('hidden');
               this.hubConnection.invoke('InterruptScreenCast').then(function(){});

               slideWidget();
            }.bind(this));
         }
      }.bind(this));

      // отключение менеджера от просмотра экрана
      this.hubConnection.on("OnDisconnectManagerFromScreenCast", function () {
         // console.log('Менеджер отключился от трансляции');
         localStorage.removeItem('screenBroadcast');
         document.querySelectorAll('.broadcastBlock')[0].classList.add('hidden');
         document.querySelectorAll('.broadcastBlock__allow')[0].classList.add('hidden');
         document.querySelectorAll('.broadcastBlock__broadcasting')[0].classList.add('hidden');

         slideWidget();
      }.bind(this));

      // менеджер запрашивает базовую информацию (html, начальное положение скроллов, курсора и т.д.)
      this.hubConnection.on("OnGetScreenData", function (data) {
         localStorage.setItem('screenBroadcast', true);
         // console.log('Отправляем базовую информацию');

         // создаем новый div с копией innerHTML для того, что бы в нем скрыть не транслируемые эллементы не затрагивая основную страницу
         // let innerHTML = document.getElementsByTagName('html')[0].innerHTML;
         // let correctHTML = document.createElement('html');
         // correctHTML.innerHTML = innerHTML;
         let correctHTML = document.getElementsByTagName('html')[0].cloneNode(true);
         let scrolledElems = [];

         // let baseTag = document.createElement('base');
         // baseTag.setAttribute('href', location.origin + '/');
         // correctHTML.querySelectorAll('head')[0].appendChild(baseTag);
         //
         // console.log(correctHTML);

         document.querySelectorAll('*').forEach(function(item, i){
            // находим все эллементы с не транслируемым классом
   			if (item.classList.contains('ym-disable-keys')) {
   				if (item.nodeName.toLowerCase() === 'input') {
   					// IE Браузеры и Edge не корректно работают с evlutr  если в начале xPath нет html
                  let relativePath;
                  // Если edge браузер
                  if (document.documentMode || /Edge/.test(navigator.userAgent)) {
            			relativePath = getDomPath(item);
            		}
                  else {
                     relativePath = getDomPath(item).split('/');
      					relativePath = relativePath.slice(2);
      					relativePath = '/' + relativePath.join('/');
                  }

   					let hiddenElem = document.evaluate(relativePath, correctHTML, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
   					hiddenElem.setAttribute('value', 'Содержимое поля недоступно');
   				}
   				else {
                  // IE Браузеры и Edge не корректно работают с evlutr  если в начале xPath нет html
                  let relativePath;
                  // Если edge браузер
                  if (document.documentMode || /Edge/.test(navigator.userAgent)) {
            			relativePath = getDomPath(item);
            		}
                  else {
                     relativePath = getDomPath(item).split('/');
      					relativePath = relativePath.slice(2);
      					relativePath = '/' + relativePath.join('/');
                  }

   					let subElem = "<div style='width:" + item.offsetWidth + "px; height:" + item.offsetHeight + "px; background: url(https://223421.selcdn.ru/chatix-dev/assets/img/chatix_hidden_elem.png);'></div>";
   					let hiddenElem = document.evaluate(relativePath, correctHTML, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
   					// hiddenElem.remove();

   					hiddenElem.innerHTML = subElem;
   				}
   			}
            // находим все поля с паролем что бы скрыть их от трансляции
            else if (item.getAttribute('type') === 'password') {
               // IE Браузеры и Edge не корректно работают с evlutr  если в начале xPath нет html
               let relativePath;
               // Если edge браузер
               if (document.documentMode || /Edge/.test(navigator.userAgent)) {
                  relativePath = getDomPath(item);
               }
               else {
                  relativePath = getDomPath(item).split('/');
                  relativePath = relativePath.slice(2);
                  relativePath = '/' + relativePath.join('/');
               }

               let hiddenElem = document.evaluate(relativePath, correctHTML, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
               hiddenElem.setAttribute('value', 'Содержимое поля недоступно');
            }

            // находим все элементы со скроллом отличным от 0 в момент начала трансляции
            if (item.scrollTop || item.scrollLeft) {
   				let scrollElem = {
   					target: getDomPath(item),
   					scrollTop: item.scrollTop,
   					scrollLeft: item.scrollLeft
   				}
   				scrolledElems.push(scrollElem);
   			}
   		});

         // удаляем все скрипты из HTML Отправляемой страницы
   		correctHTML.querySelectorAll('script').forEach(function(item, i){
   			item.removeAttribute("src");
            item.innerHTML = '';
   		});

         // console.log(correctHTML.innerHTML);
         // console.log(lzString.compressToUTF16(correctHTML.innerHTML));

         // определяем ширину скролла в браузере визитора
         function widthScroll(){
            var div = document.createElement('div');
            div.style.overflowY = 'scroll';
            div.style.width = '50px';
            div.style.height = '50px';
            div.style.visibility = 'hidden';
            document.querySelectorAll('#chatixContainer')[0].appendChild(div);
            var scrollWidth = div.offsetWidth - div.clientWidth;
            document.querySelectorAll('#chatixContainer')[0].removeChild(div);
            return scrollWidth;
         }

         let broadcastData = {};
      	broadcastData.screenWidth = document.body.clientWidth + widthScroll();
      	broadcastData.screenHeight = window.innerHeight;
         broadcastData.domain = location.origin + '/';
         broadcastData.scrolledElems = scrolledElems;
         broadcastData.visitorId = this.visitorId;
         broadcastData.htmlId = document.getElementsByTagName('html')[0].getAttribute('id');
         broadcastData.htmlClass = document.getElementsByTagName('html')[0].getAttribute('class');

         // console.log(lzString.decompressFromUTF16(lzString.compressToUTF16(correctHTML.innerHTML)));
         // console.log(correctHTML);

         this.hubConnection.invoke('PostScreenData', __WEBPACK_IMPORTED_MODULE_4_lz_string___default.a.compressToUTF16(correctHTML.innerHTML), broadcastData)
         .then(function(result){
            // console.log('Базовая информация отправлена');
         })
         .catch(function(err){
            console.log(err);
         });
      }.bind(this));


      // получение событий от менеджера
      let areaRemoveTimeout;
      this.hubConnection.on("OnPostScreenEventByManager", function (data) {
         clearTimeout(areaRemoveTimeout);
         if (data === 'removeSelectedArea') {
            let selectedBlock = document.querySelectorAll('#managerSelected')[0];
            if (selectedBlock) {
               selectedBlock.style.display = 'none';
            }
         }
         else if(data === 'endSelectedArea'){
            areaRemoveTimeout = setTimeout(function(){
               let selectedBlock = document.querySelectorAll('#managerSelected')[0];
               if (selectedBlock) {
                  selectedBlock.style.display = 'none';
               }
            }, 3500);
         }
         else {
            let selectedBlock = document.querySelectorAll('#managerSelected')[0];
            if (selectedBlock) {
               selectedBlock.style.display = 'block';
               selectedBlock.style.position = 'absolute';
               selectedBlock.style.boxShadow = '0px 0px 0px 100000px rgba(0, 0, 0, 0.6)';
               selectedBlock.style.zIndex = 1060;
               // условия для чтого что бы выделение работало не только по направления слева-направо, сверху-вниз, а в любую сторону
               selectedBlock.style.width = Math.abs(data.end.x - data.start.x) + 'px';
               selectedBlock.style.height = Math.abs(data.end.y - data.start.y) + 'px';
               if (data.start.y <= data.end.y) {
                  selectedBlock.style.top = data.start.y + -document.documentElement.getBoundingClientRect().top + 'px';
               }
               else {
                  selectedBlock.style.top = data.end.y + -document.documentElement.getBoundingClientRect().top + 'px';
               }

               if (data.start.x <= data.end.x) {
                  selectedBlock.style.left = data.start.x + -document.documentElement.getBoundingClientRect().left + 'px';
               }
               else {
                  selectedBlock.style.left = data.end.x + -document.documentElement.getBoundingClientRect().left + 'px';
               }
            }
         }
      });
















         let managers = {
            connectedManagers: [],
            allManagers: []
         };
        return this.hubConnection.start().then(function(){
           thiss.hubConnection.invoke('getManagers').then(
              function(connectedManagers) {
                 // только подключенные менеджеры
                 managers.connectedManagers = connectedManagers;

                 thiss.hubConnection.invoke('GetWebChatManagers').then(
                    function(allManagers) {
                       // все менеджеры
                       managers.allManagers = allManagers;
                       thiss.chat.callbackGetManagers(managers);
                    }
                 )
              }
           )

           thiss.hubConnection.invoke('GetVisitorInfo', null).then(
              function(visitor) {
                 thiss.chat.visitor = visitor;
                 thiss.chat.callbackSignalrConnected(visitor);
              }
           )
        }).catch(function(){
           console.error('signalR NO start');
        });
    }

    /**
	 * Sends current user input to managers
	 *
     * @param {string} text what user is typing
     * @returns {*|Promise<*>}
     */
   sendVisitorTypedText(text) {
		return this.hubConnection.invoke('VisitorType', text);
	}

    /**
	 * Sends visitor details update to manager
	 *
     * @param {Visitor} visitor
     * @returns {*|Promise<*>}
     */
	sendVisitorInfo(visitor) {
		return this.hubConnection.invoke('SaveVisitorInfo', visitor);
	}

   getWebChatInfo(){
      return this.hubConnection.invoke('GetWebChatInfo').then(
         function(data){
            this.chat.receivedChatInfo(data);
         }.bind({chat: this.chat})
      );
   }

    /**
	 * Requests server to send visitor details
	 *
     * @returns {*|Promise<*>}
     */
	getVisitorInfo() {
		return this.hubConnection.invoke('GetVisitorInfo', null).then(
         function(data) {
            this.chat.addField(data.fields);
         }.bind({chat: this.chat})
      )
	}

    /**
	 * Requests server to send manager details
	 *
     * @param {string} managerId
     * @returns {*|Promise<*>}
     */
	getManagerInfo(managerId) {
		return this.hubConnection.invoke('GetManagerInfo', managerId);
	}

    /**
	 * Requests server to send conversation history
	 *
     * @param {string|null} lastKnownMessageId
     * @param {number} count
	 * @returns {*|Promise<*>}
	 * @throws {Error}
     */
    getHistory(lastKnownMessageId = null, count = 30) {
        if (count < 1 || count > 100) {
            throw new Error("Count param is invalid. Valid values are between 1 and 100");
        }
         return this.hubConnection.invoke('GetHistory', null, lastKnownMessageId, count).then(function(result){
            if (result) {
               this.chat.receivedNewMessages(result.items);
            }
         }.bind({chat: this.chat}));
        // return this.hubConnection.invoke('GetHistory', null, lastKnownMessageId, count);
    }

    /**
	 * Returns current connection state as **INT**
	 *
     * @return {number}
     */
	getConnectionState() {
		switch (this.hubConnection.connection.connectionState) {
			case 2:
				return Connection.STATE_CONNECTING;
			case 1:
				return Connection.STATE_CONNECTED;
			default:
				return Connection.STATE_DISCONNECTED;
		}
	}

    /**
	 * Returns current connection state as **STRING**
     ** @return {string}
     */
	getConnectionStateDescription() {
        switch (this.hubConnection.connection.connectionState) {
            case 1:
                return "Connecting";
            case 2:
                return "Connected";
            default:
                return "Disconnected";
        }
    }

    /**
	 * Sends message in conversation
	 *
     * @param {Message} message
     * @return {*|Promise<*>}
     */
	sendMessage(message) {
      return this.hubConnection.invoke('SaveMessage', message, null).then(function(result){
         this.chat.receivedNewMessages(result);
      }.bind({chat: this.chat}));
	}

    /**
	 * Sends user navigation thought pages
	 *
     * @param url Адрес страницы
     * @param title Заголовк страницы
     * @return {*|Promise<*>}
     */
	sendPage(url, title) {
      return this.hubConnection.invoke('SavePageInfo', url, title);
	}

   sendBroadcastData(innerHTML, broadcastData){
      this.hubConnection.invoke('PostScreenData', __WEBPACK_IMPORTED_MODULE_4_lz_string___default.a.compressToUTF16(innerHTML), broadcastData)
      .then(function(result){
      })
      .catch(function(err){
         console.log(err);
      });
   }

   sendBroadcastEvent(broadcastEvent){
      let broadcastEventData = broadcastEvent;
      if (broadcastEventData.mutations) {
         if (broadcastEventData.mutations.length > 0) {
            broadcastEventData.mutations.forEach(function(item, i){
               if (item.target) {
                  item.target = __WEBPACK_IMPORTED_MODULE_4_lz_string___default.a.compressToUTF16(item.target);
               }
            });
         }
      }

      this.hubConnection.invoke('PostScreenEvent', broadcastEventData, null, null)
      .then(function(result){
      })
      .catch(function(err){
         // console.log(err);
      });
   }


}

function getDomPath(el) {
   var stack = [];
   while (el.parentNode != null) {
      var sibCount = 0;
      var sibIndex = 0;
      for (var i = 0; i < el.parentNode.childNodes.length; i++) {
         var sib = el.parentNode.childNodes[i];
         if (sib.nodeName == el.nodeName) {
            if (sib === el) {
               sibIndex = sibCount;
            }
            sibCount++;
         }
      }
      if (el.hasAttribute) {
         if (el.hasAttribute('id') && el.id != '') {
            stack.unshift(el.nodeName.toLowerCase() + "[@id='" + el.id + "']");
         } else if (sibCount > 1) {
            // потому что eq начинается с 0, а индекс xPath с 1
            sibIndex = sibIndex + 1;
            stack.unshift(el.nodeName.toLowerCase() + '[' + sibIndex + ']');
         } else {
            stack.unshift(el.nodeName.toLowerCase());
         }
      }
      el = el.parentNode;
   }

   let path = stack.slice(1);

   path = '/html/' + path.join('/')

   return path;
}

Connection.STATE_CONNECTING = 1;
Connection.STATE_CONNECTED = 2;
Connection.STATE_DISCONNECTED = 3;

/* harmony default export */ __webpack_exports__["a"] = (Connection);


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export HttpResponse */
/* unused harmony export HttpClient */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DefaultHttpClient; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Errors__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ILogger__ = __webpack_require__(1);
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};


/** Represents an HTTP response. */
var HttpResponse = /** @class */ (function () {
    function HttpResponse(statusCode, statusText, content) {
        this.statusCode = statusCode;
        this.statusText = statusText;
        this.content = content;
    }
    return HttpResponse;
}());

/** Abstraction over an HTTP client.
 *
 * This class provides an abstraction over an HTTP client so that a different implementation can be provided on different platforms.
 */
var HttpClient = /** @class */ (function () {
    function HttpClient() {
    }
    HttpClient.prototype.get = function (url, options) {
        return this.send(__assign({}, options, { method: "GET", url: url }));
    };
    HttpClient.prototype.post = function (url, options) {
        return this.send(__assign({}, options, { method: "POST", url: url }));
    };
    HttpClient.prototype.delete = function (url, options) {
        return this.send(__assign({}, options, { method: "DELETE", url: url }));
    };
    return HttpClient;
}());

/** Default implementation of {@link @aspnet/signalr.HttpClient}. */
var DefaultHttpClient = /** @class */ (function (_super) {
    __extends(DefaultHttpClient, _super);
    /** Creates a new instance of the {@link @aspnet/signalr.DefaultHttpClient}, using the provided {@link @aspnet/signalr.ILogger} to log messages. */
    function DefaultHttpClient(logger) {
        var _this = _super.call(this) || this;
        _this.logger = logger;
        return _this;
    }
    /** @inheritDoc */
    DefaultHttpClient.prototype.send = function (request) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open(request.method, request.url, true);
            xhr.withCredentials = true;
            xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
            // Explicitly setting the Content-Type header for React Native on Android platform.
            xhr.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
            if (request.headers) {
                Object.keys(request.headers)
                    .forEach(function (header) { return xhr.setRequestHeader(header, request.headers[header]); });
            }
            if (request.responseType) {
                xhr.responseType = request.responseType;
            }
            if (request.abortSignal) {
                request.abortSignal.onabort = function () {
                    xhr.abort();
                };
            }
            if (request.timeout) {
                xhr.timeout = request.timeout;
            }
            xhr.onload = function () {
                if (request.abortSignal) {
                    request.abortSignal.onabort = null;
                }
                if (xhr.status >= 200 && xhr.status < 300) {
                    resolve(new HttpResponse(xhr.status, xhr.statusText, xhr.response || xhr.responseText));
                }
                else {
                    reject(new __WEBPACK_IMPORTED_MODULE_0__Errors__["a" /* HttpError */](xhr.statusText, xhr.status));
                }
            };
            xhr.onerror = function () {
                _this.logger.log(__WEBPACK_IMPORTED_MODULE_1__ILogger__["a" /* LogLevel */].Warning, "Error from HTTP request. " + xhr.status + ": " + xhr.statusText);
                reject(new __WEBPACK_IMPORTED_MODULE_0__Errors__["a" /* HttpError */](xhr.statusText, xhr.status));
            };
            xhr.ontimeout = function () {
                _this.logger.log(__WEBPACK_IMPORTED_MODULE_1__ILogger__["a" /* LogLevel */].Warning, "Timeout from HTTP request.");
                reject(new __WEBPACK_IMPORTED_MODULE_0__Errors__["b" /* TimeoutError */]());
            };
            xhr.send(request.content || "");
        });
    };
    return DefaultHttpClient;
}(HttpClient));

//# sourceMappingURL=HttpClient.js.map

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HubConnection; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__HandshakeProtocol__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__IHubProtocol__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ILogger__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Utils__ = __webpack_require__(2);
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var DEFAULT_TIMEOUT_IN_MS = 30 * 1000;
/** Represents a connection to a SignalR Hub. */
var HubConnection = /** @class */ (function () {
    function HubConnection(connection, logger, protocol) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_3__Utils__["a" /* Arg */].isRequired(connection, "connection");
        __WEBPACK_IMPORTED_MODULE_3__Utils__["a" /* Arg */].isRequired(logger, "logger");
        __WEBPACK_IMPORTED_MODULE_3__Utils__["a" /* Arg */].isRequired(protocol, "protocol");
        this.serverTimeoutInMilliseconds = DEFAULT_TIMEOUT_IN_MS;
        this.logger = logger;
        this.protocol = protocol;
        this.connection = connection;
        this.handshakeProtocol = new __WEBPACK_IMPORTED_MODULE_0__HandshakeProtocol__["a" /* HandshakeProtocol */]();
        this.connection.onreceive = function (data) { return _this.processIncomingData(data); };
        this.connection.onclose = function (error) { return _this.connectionClosed(error); };
        this.callbacks = {};
        this.methods = {};
        this.closedCallbacks = [];
        this.id = 0;
    }
    /** @internal */
    // Using a public static factory method means we can have a private constructor and an _internal_
    // create method that can be used by HubConnectionBuilder. An "internal" constructor would just
    // be stripped away and the '.d.ts' file would have no constructor, which is interpreted as a
    // public parameter-less constructor.
    HubConnection.create = function (connection, logger, protocol) {
        return new HubConnection(connection, logger, protocol);
    };
    /** Starts the connection.
     *
     * @returns {Promise<void>} A Promise that resolves when the connection has been successfully established, or rejects with an error.
     */
    HubConnection.prototype.start = function () {
        return __awaiter(this, void 0, void 0, function () {
            var handshakeRequest;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        handshakeRequest = {
                            protocol: this.protocol.name,
                            version: this.protocol.version,
                        };
                        this.logger.log(__WEBPACK_IMPORTED_MODULE_2__ILogger__["a" /* LogLevel */].Debug, "Starting HubConnection.");
                        this.receivedHandshakeResponse = false;
                        return [4 /*yield*/, this.connection.start(this.protocol.transferFormat)];
                    case 1:
                        _a.sent();
                        this.logger.log(__WEBPACK_IMPORTED_MODULE_2__ILogger__["a" /* LogLevel */].Debug, "Sending handshake request.");
                        return [4 /*yield*/, this.connection.send(this.handshakeProtocol.writeHandshakeRequest(handshakeRequest))];
                    case 2:
                        _a.sent();
                        this.logger.log(__WEBPACK_IMPORTED_MODULE_2__ILogger__["a" /* LogLevel */].Information, "Using HubProtocol '" + this.protocol.name + "'.");
                        // defensively cleanup timeout in case we receive a message from the server before we finish start
                        this.cleanupTimeout();
                        this.configureTimeout();
                        return [2 /*return*/];
                }
            });
        });
    };
    /** Stops the connection.
     *
     * @returns {Promise<void>} A Promise that resolves when the connection has been successfully terminated, or rejects with an error.
     */
    HubConnection.prototype.stop = function () {
        this.logger.log(__WEBPACK_IMPORTED_MODULE_2__ILogger__["a" /* LogLevel */].Debug, "Stopping HubConnection.");
        this.cleanupTimeout();
        return this.connection.stop();
    };
    /** Invokes a streaming hub method on the server using the specified name and arguments.
     *
     * @typeparam T The type of the items returned by the server.
     * @param {string} methodName The name of the server method to invoke.
     * @param {any[]} args The arguments used to invoke the server method.
     * @returns {IStreamResult<T>} An object that yields results from the server as they are received.
     */
    HubConnection.prototype.stream = function (methodName) {
        var _this = this;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var invocationDescriptor = this.createStreamInvocation(methodName, args);
        var subject = new __WEBPACK_IMPORTED_MODULE_3__Utils__["c" /* Subject */](function () {
            var cancelInvocation = _this.createCancelInvocation(invocationDescriptor.invocationId);
            var cancelMessage = _this.protocol.writeMessage(cancelInvocation);
            delete _this.callbacks[invocationDescriptor.invocationId];
            return _this.connection.send(cancelMessage);
        });
        this.callbacks[invocationDescriptor.invocationId] = function (invocationEvent, error) {
            if (error) {
                subject.error(error);
                return;
            }
            if (invocationEvent.type === __WEBPACK_IMPORTED_MODULE_1__IHubProtocol__["a" /* MessageType */].Completion) {
                if (invocationEvent.error) {
                    subject.error(new Error(invocationEvent.error));
                }
                else {
                    subject.complete();
                }
            }
            else {
                subject.next((invocationEvent.item));
            }
        };
        var message = this.protocol.writeMessage(invocationDescriptor);
        this.connection.send(message)
            .catch(function (e) {
            subject.error(e);
            delete _this.callbacks[invocationDescriptor.invocationId];
        });
        return subject;
    };
    /** Invokes a hub method on the server using the specified name and arguments. Does not wait for a response from the receiver.
     *
     * The Promise returned by this method resolves when the client has sent the invocation to the server. The server may still
     * be processing the invocation.
     *
     * @param {string} methodName The name of the server method to invoke.
     * @param {any[]} args The arguments used to invoke the server method.
     * @returns {Promise<void>} A Promise that resolves when the invocation has been successfully sent, or rejects with an error.
     */
    HubConnection.prototype.send = function (methodName) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var invocationDescriptor = this.createInvocation(methodName, args, true);
        var message = this.protocol.writeMessage(invocationDescriptor);
        return this.connection.send(message);
    };
    /** Invokes a hub method on the server using the specified name and arguments.
     *
     * The Promise returned by this method resolves when the server indicates it has finished invoking the method. When the promise
     * resolves, the server has finished invoking the method. If the server method returns a result, it is produced as the result of
     * resolving the Promise.
     *
     * @typeparam T The expected return type.
     * @param {string} methodName The name of the server method to invoke.
     * @param {any[]} args The arguments used to invoke the server method.
     * @returns {Promise<T>} A Promise that resolves with the result of the server method (if any), or rejects with an error.
     */
    HubConnection.prototype.invoke = function (methodName) {
        var _this = this;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var invocationDescriptor = this.createInvocation(methodName, args, false);
        var p = new Promise(function (resolve, reject) {
            _this.callbacks[invocationDescriptor.invocationId] = function (invocationEvent, error) {
                if (error) {
                    reject(error);
                    return;
                }
                if (invocationEvent.type === __WEBPACK_IMPORTED_MODULE_1__IHubProtocol__["a" /* MessageType */].Completion) {
                    var completionMessage = invocationEvent;
                    if (completionMessage.error) {
                        reject(new Error(completionMessage.error));
                    }
                    else {
                        resolve(completionMessage.result);
                    }
                }
                else {
                    reject(new Error("Unexpected message type: " + invocationEvent.type));
                }
            };
            var message = _this.protocol.writeMessage(invocationDescriptor);
            _this.connection.send(message)
                .catch(function (e) {
                reject(e);
                delete _this.callbacks[invocationDescriptor.invocationId];
            });
        });
        return p;
    };
    /** Registers a handler that will be invoked when the hub method with the specified method name is invoked.
     *
     * @param {string} methodName The name of the hub method to define.
     * @param {Function} newMethod The handler that will be raised when the hub method is invoked.
     */
    HubConnection.prototype.on = function (methodName, newMethod) {
        if (!methodName || !newMethod) {
            return;
        }
        methodName = methodName.toLowerCase();
        if (!this.methods[methodName]) {
            this.methods[methodName] = [];
        }
        // Preventing adding the same handler multiple times.
        if (this.methods[methodName].indexOf(newMethod) !== -1) {
            return;
        }
        this.methods[methodName].push(newMethod);
    };
    HubConnection.prototype.off = function (methodName, method) {
        if (!methodName) {
            return;
        }
        methodName = methodName.toLowerCase();
        var handlers = this.methods[methodName];
        if (!handlers) {
            return;
        }
        if (method) {
            var removeIdx = handlers.indexOf(method);
            if (removeIdx !== -1) {
                handlers.splice(removeIdx, 1);
                if (handlers.length === 0) {
                    delete this.methods[methodName];
                }
            }
        }
        else {
            delete this.methods[methodName];
        }
    };
    /** Registers a handler that will be invoked when the connection is closed.
     *
     * @param {Function} callback The handler that will be invoked when the connection is closed. Optionally receives a single argument containing the error that caused the connection to close (if any).
     */
    HubConnection.prototype.onclose = function (callback) {
        if (callback) {
            this.closedCallbacks.push(callback);
        }
    };
    HubConnection.prototype.processIncomingData = function (data) {
        this.cleanupTimeout();
        if (!this.receivedHandshakeResponse) {
            data = this.processHandshakeResponse(data);
            this.receivedHandshakeResponse = true;
        }
        // Data may have all been read when processing handshake response
        if (data) {
            // Parse the messages
            var messages = this.protocol.parseMessages(data, this.logger);
            for (var _i = 0, messages_1 = messages; _i < messages_1.length; _i++) {
                var message = messages_1[_i];
                switch (message.type) {
                    case __WEBPACK_IMPORTED_MODULE_1__IHubProtocol__["a" /* MessageType */].Invocation:
                        this.invokeClientMethod(message);
                        break;
                    case __WEBPACK_IMPORTED_MODULE_1__IHubProtocol__["a" /* MessageType */].StreamItem:
                    case __WEBPACK_IMPORTED_MODULE_1__IHubProtocol__["a" /* MessageType */].Completion:
                        var callback = this.callbacks[message.invocationId];
                        if (callback != null) {
                            if (message.type === __WEBPACK_IMPORTED_MODULE_1__IHubProtocol__["a" /* MessageType */].Completion) {
                                delete this.callbacks[message.invocationId];
                            }
                            callback(message);
                        }
                        break;
                    case __WEBPACK_IMPORTED_MODULE_1__IHubProtocol__["a" /* MessageType */].Ping:
                        // Don't care about pings
                        break;
                    case __WEBPACK_IMPORTED_MODULE_1__IHubProtocol__["a" /* MessageType */].Close:
                        this.logger.log(__WEBPACK_IMPORTED_MODULE_2__ILogger__["a" /* LogLevel */].Information, "Close message received from server.");
                        // We don't want to wait on the stop itself.
                        // tslint:disable-next-line:no-floating-promises
                        this.connection.stop(message.error ? new Error("Server returned an error on close: " + message.error) : null);
                        break;
                    default:
                        this.logger.log(__WEBPACK_IMPORTED_MODULE_2__ILogger__["a" /* LogLevel */].Warning, "Invalid message type: " + message.type);
                        break;
                }
            }
        }
        this.configureTimeout();
    };
    HubConnection.prototype.processHandshakeResponse = function (data) {
        var _a;
        var responseMessage;
        var remainingData;
        try {
            _a = this.handshakeProtocol.parseHandshakeResponse(data), remainingData = _a[0], responseMessage = _a[1];
        }
        catch (e) {
            var message = "Error parsing handshake response: " + e;
            this.logger.log(__WEBPACK_IMPORTED_MODULE_2__ILogger__["a" /* LogLevel */].Error, message);
            var error = new Error(message);
            // We don't want to wait on the stop itself.
            // tslint:disable-next-line:no-floating-promises
            this.connection.stop(error);
            throw error;
        }
        if (responseMessage.error) {
            var message = "Server returned handshake error: " + responseMessage.error;
            this.logger.log(__WEBPACK_IMPORTED_MODULE_2__ILogger__["a" /* LogLevel */].Error, message);
            // We don't want to wait on the stop itself.
            // tslint:disable-next-line:no-floating-promises
            this.connection.stop(new Error(message));
        }
        else {
            this.logger.log(__WEBPACK_IMPORTED_MODULE_2__ILogger__["a" /* LogLevel */].Debug, "Server handshake complete.");
        }
        return remainingData;
    };
    HubConnection.prototype.configureTimeout = function () {
        var _this = this;
        if (!this.connection.features || !this.connection.features.inherentKeepAlive) {
            // Set the timeout timer
            this.timeoutHandle = setTimeout(function () { return _this.serverTimeout(); }, this.serverTimeoutInMilliseconds);
        }
    };
    HubConnection.prototype.serverTimeout = function () {
        // The server hasn't talked to us in a while. It doesn't like us anymore ... :(
        // Terminate the connection, but we don't need to wait on the promise.
        // tslint:disable-next-line:no-floating-promises
        this.connection.stop(new Error("Server timeout elapsed without receiving a message from the server."));
    };
    HubConnection.prototype.invokeClientMethod = function (invocationMessage) {
        var _this = this;
        var methods = this.methods[invocationMessage.target.toLowerCase()];
        if (methods) {
            methods.forEach(function (m) { return m.apply(_this, invocationMessage.arguments); });
            if (invocationMessage.invocationId) {
                // This is not supported in v1. So we return an error to avoid blocking the server waiting for the response.
                var message = "Server requested a response, which is not supported in this version of the client.";
                this.logger.log(__WEBPACK_IMPORTED_MODULE_2__ILogger__["a" /* LogLevel */].Error, message);
                // We don't need to wait on this Promise.
                // tslint:disable-next-line:no-floating-promises
                this.connection.stop(new Error(message));
            }
        }
        else {
            this.logger.log(__WEBPACK_IMPORTED_MODULE_2__ILogger__["a" /* LogLevel */].Warning, "No client method with the name '" + invocationMessage.target + "' found.");
        }
    };
    HubConnection.prototype.connectionClosed = function (error) {
        var _this = this;
        var callbacks = this.callbacks;
        this.callbacks = {};
        Object.keys(callbacks)
            .forEach(function (key) {
            var callback = callbacks[key];
            callback(undefined, error ? error : new Error("Invocation canceled due to connection being closed."));
        });
        this.cleanupTimeout();
        this.closedCallbacks.forEach(function (c) { return c.apply(_this, [error]); });
    };
    HubConnection.prototype.cleanupTimeout = function () {
        if (this.timeoutHandle) {
            clearTimeout(this.timeoutHandle);
        }
    };
    HubConnection.prototype.createInvocation = function (methodName, args, nonblocking) {
        if (nonblocking) {
            return {
                arguments: args,
                target: methodName,
                type: __WEBPACK_IMPORTED_MODULE_1__IHubProtocol__["a" /* MessageType */].Invocation,
            };
        }
        else {
            var id = this.id;
            this.id++;
            return {
                arguments: args,
                invocationId: id.toString(),
                target: methodName,
                type: __WEBPACK_IMPORTED_MODULE_1__IHubProtocol__["a" /* MessageType */].Invocation,
            };
        }
    };
    HubConnection.prototype.createStreamInvocation = function (methodName, args) {
        var id = this.id;
        this.id++;
        return {
            arguments: args,
            invocationId: id.toString(),
            target: methodName,
            type: __WEBPACK_IMPORTED_MODULE_1__IHubProtocol__["a" /* MessageType */].StreamInvocation,
        };
    };
    HubConnection.prototype.createCancelInvocation = function (id) {
        return {
            invocationId: id,
            type: __WEBPACK_IMPORTED_MODULE_1__IHubProtocol__["a" /* MessageType */].CancelInvocation,
        };
    };
    return HubConnection;
}());

//# sourceMappingURL=HubConnection.js.map

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextMessageFormat; });
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
// Not exported from index
/** @private */
var TextMessageFormat = /** @class */ (function () {
    function TextMessageFormat() {
    }
    TextMessageFormat.write = function (output) {
        return "" + output + TextMessageFormat.RecordSeparator;
    };
    TextMessageFormat.parse = function (input) {
        if (input[input.length - 1] !== TextMessageFormat.RecordSeparator) {
            throw new Error("Message is incomplete.");
        }
        var messages = input.split(TextMessageFormat.RecordSeparator);
        messages.pop();
        return messages;
    };
    TextMessageFormat.RecordSeparatorCode = 0x1e;
    TextMessageFormat.RecordSeparator = String.fromCharCode(TextMessageFormat.RecordSeparatorCode);
    return TextMessageFormat;
}());

//# sourceMappingURL=TextMessageFormat.js.map

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JsonHubProtocol; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__IHubProtocol__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ILogger__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ITransport__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Loggers__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__TextMessageFormat__ = __webpack_require__(15);
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.





var JSON_HUB_PROTOCOL_NAME = "json";
/** Implements the JSON Hub Protocol. */
var JsonHubProtocol = /** @class */ (function () {
    function JsonHubProtocol() {
        /** @inheritDoc */
        this.name = JSON_HUB_PROTOCOL_NAME;
        /** @inheritDoc */
        this.version = 1;
        /** @inheritDoc */
        this.transferFormat = __WEBPACK_IMPORTED_MODULE_2__ITransport__["b" /* TransferFormat */].Text;
    }
    /** Creates an array of {@link @aspnet/signalr.HubMessage} objects from the specified serialized representation.
     *
     * @param {string} input A string containing the serialized representation.
     * @param {ILogger} logger A logger that will be used to log messages that occur during parsing.
     */
    JsonHubProtocol.prototype.parseMessages = function (input, logger) {
        // The interface does allow "ArrayBuffer" to be passed in, but this implementation does not. So let's throw a useful error.
        if (typeof input !== "string") {
            throw new Error("Invalid input for JSON hub protocol. Expected a string.");
        }
        if (!input) {
            return [];
        }
        if (logger === null) {
            logger = __WEBPACK_IMPORTED_MODULE_3__Loggers__["a" /* NullLogger */].instance;
        }
        // Parse the messages
        var messages = __WEBPACK_IMPORTED_MODULE_4__TextMessageFormat__["a" /* TextMessageFormat */].parse(input);
        var hubMessages = [];
        for (var _i = 0, messages_1 = messages; _i < messages_1.length; _i++) {
            var message = messages_1[_i];
            var parsedMessage = JSON.parse(message);
            if (typeof parsedMessage.type !== "number") {
                throw new Error("Invalid payload.");
            }
            switch (parsedMessage.type) {
                case __WEBPACK_IMPORTED_MODULE_0__IHubProtocol__["a" /* MessageType */].Invocation:
                    this.isInvocationMessage(parsedMessage);
                    break;
                case __WEBPACK_IMPORTED_MODULE_0__IHubProtocol__["a" /* MessageType */].StreamItem:
                    this.isStreamItemMessage(parsedMessage);
                    break;
                case __WEBPACK_IMPORTED_MODULE_0__IHubProtocol__["a" /* MessageType */].Completion:
                    this.isCompletionMessage(parsedMessage);
                    break;
                case __WEBPACK_IMPORTED_MODULE_0__IHubProtocol__["a" /* MessageType */].Ping:
                    // Single value, no need to validate
                    break;
                case __WEBPACK_IMPORTED_MODULE_0__IHubProtocol__["a" /* MessageType */].Close:
                    // All optional values, no need to validate
                    break;
                default:
                    // Future protocol changes can add message types, old clients can ignore them
                    logger.log(__WEBPACK_IMPORTED_MODULE_1__ILogger__["a" /* LogLevel */].Information, "Unknown message type '" + parsedMessage.type + "' ignored.");
                    continue;
            }
            hubMessages.push(parsedMessage);
        }
        return hubMessages;
    };
    /** Writes the specified {@link @aspnet/signalr.HubMessage} to a string and returns it.
     *
     * @param {HubMessage} message The message to write.
     * @returns {string} A string containing the serialized representation of the message.
     */
    JsonHubProtocol.prototype.writeMessage = function (message) {
        return __WEBPACK_IMPORTED_MODULE_4__TextMessageFormat__["a" /* TextMessageFormat */].write(JSON.stringify(message));
    };
    JsonHubProtocol.prototype.isInvocationMessage = function (message) {
        this.assertNotEmptyString(message.target, "Invalid payload for Invocation message.");
        if (message.invocationId !== undefined) {
            this.assertNotEmptyString(message.invocationId, "Invalid payload for Invocation message.");
        }
    };
    JsonHubProtocol.prototype.isStreamItemMessage = function (message) {
        this.assertNotEmptyString(message.invocationId, "Invalid payload for StreamItem message.");
        if (message.item === undefined) {
            throw new Error("Invalid payload for StreamItem message.");
        }
    };
    JsonHubProtocol.prototype.isCompletionMessage = function (message) {
        if (message.result && message.error) {
            throw new Error("Invalid payload for Completion message.");
        }
        if (!message.result && message.error) {
            this.assertNotEmptyString(message.error, "Invalid payload for Completion message.");
        }
        this.assertNotEmptyString(message.invocationId, "Invalid payload for Completion message.");
    };
    JsonHubProtocol.prototype.assertNotEmptyString = function (value, errorMessage) {
        if (typeof value !== "string" || value === "") {
            throw new Error(errorMessage);
        }
    };
    return JsonHubProtocol;
}());

//# sourceMappingURL=JsonHubProtocol.js.map

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(38);

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),
/* 19 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(0);
var settle = __webpack_require__(42);
var buildURL = __webpack_require__(44);
var parseHeaders = __webpack_require__(45);
var isURLSameOrigin = __webpack_require__(46);
var createError = __webpack_require__(21);
var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(47);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if (process.env.NODE_ENV !== 'test' &&
        typeof window !== 'undefined' &&
        window.XDomainRequest && !('withCredentials' in request) &&
        !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request[loadEvent] = function handleLoad() {
      if (!request || (request.readyState !== 4 && !xDomain)) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/axios/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(48);

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
          cookies.read(config.xsrfCookieName) :
          undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(19)))

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(43);

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class ScreenBroadcast {
   constructor(chat){
      // console.log('BROADCAST SCREEN');

      let connectionInterval = setInterval(function(){
         if (chat.connection.hubConnection.connection.connectionState) {
            clearInterval(connectionInterval);

            // Добавляем обработчик скролла к странице
      		document.addEventListener('scroll', function(event){
      			if (localStorage.getItem('screenBroadcast')) {
      				let scrollTop;
      				if (document.documentElement.scrollTop > document.body.scrollTop) {
      					scrollTop = document.documentElement.scrollTop;
      				}
      				else {
      					scrollTop = document.body.scrollTop;
      				}

      				let elemScroll = {
      					name: 'scrollBody',
      					scrollTop: scrollTop,
      					scrollLeft: document.documentElement.scrollLeft
      				};

      				chat.sendBroadcastEvent(elemScroll);
      			}
      		});


            // ТРАНСЛЯЦИЯ ЭКРАНА ВИЗИТОРА
      		// клик на кнопку "Подробнее" при запросе разрешения на трансляцию
      		document.querySelectorAll('.broadcastBlock__moreBtn')[0].addEventListener('click', function(){
      			document.querySelectorAll('.broadcastBlock__moreText')[0].classList.toggle('broadcastBlock__moreText-active');

      			headHeight = document.querySelectorAll('.chatHead')[0].offsetHeight;
      			slideWidget();
      		});

      		// объект со всеми параметрами трансляции
      		let broadcastData = {};

      		// создаем новый div с копией innerHTML для того, что бы в нем скрыть не транслируемые эллементы не затрагивая основную страницу
      		let correctHTML = document.getElementsByTagName('html')[0].cloneNode(true);
      		let scrolledElems = [];



      		// Получаем позицию курсора при перемещении
      		window.addEventListener('mousemove', function(event){
      			if (localStorage.getItem('screenBroadcast')) {
      				let broadcastData = {
      					name: 'mousemove',
      					posX: event.clientX,
      					posY: event.clientY
      				};

      				chat.sendBroadcastEvent(broadcastData);
      			}
      		});

      		// Добавляем обработчик скролла ко всем div на странице
      		document.querySelectorAll('div').forEach(function(item){
      			item.addEventListener('scroll', function(event){
      				if (localStorage.getItem('screenBroadcast')) {
      					let elemScroll = {
      						name: 'scroll',
      						target: getDomPath(event.target),
      						scrollTop: event.target.scrollTop,
      						scrollLeft: event.target.scrollLeft
      					};

      					chat.sendBroadcastEvent(elemScroll);
      				}
      			});
      		});

      		// Отслеживаем событие клика
      		document.addEventListener('click', function(event){
      			if (localStorage.getItem('screenBroadcast')) {
      				let broadcastData = {
      					name: 'click'
      				};

      				chat.sendBroadcastEvent(broadcastData);
      			}
      		}.bind(this));

      		// Обрабатываем событие изменения размера экрана
      		window.addEventListener('resize', function(event){
      			if (localStorage.getItem('screenBroadcast')) {
      				let broadcastData = {
      					name: 'resizeWindow',
      					width: document.body.clientWidth,
      					height: window.innerHeight
      				};

      				chat.sendBroadcastEvent(broadcastData);
      			}
      		}.bind(this));

      		// Обрабатываем событие изменения текста в инпутах
      		document.body.addEventListener('input', function(e){
      			if (localStorage.getItem('screenBroadcast')) {
      				if (e.target.getAttribute('type') !== 'password') {
      					let broadcastData = {
      						name: 'inputChange',
      						target: getDomPath(e.target),
      						value: e.target.value
      					};

      					chat.sendBroadcastEvent(broadcastData);
      				}
      			}
      		});

      		// Следим за изменениями в DOM дереве
      		// выбираем целевой элемент
      		let observTarget = document.body;

      		let mutationsArray = {
      			name: 'mutation',
      			mutations: []
      		};


      		// отправляем массив с мутациями через интервал времени
      		setInterval(function(){
      			if (mutationsArray.mutations.length > 0) {
      				chat.sendBroadcastEvent(mutationsArray);
      				mutationsArray.mutations = [];
      			}
      		}, 250);

      		// создаём экземпляр MutationObserver
      		let observer = new MutationObserver(function(mutations) {
      			if (localStorage.getItem('screenBroadcast')) {
      				mutations.forEach(function(mutation) {
      					if (mutation.target.tagName) {
      						if (mutation.target.tagName.toLowerCase() != 'ymaps') {
      							let elemMutation;
      							// if (mutation.type === 'childList' && mutation.target.tagName.toLowerCase() === 'body') {
                           if (false) {
      								let mutationAddRemove = {};

      								if (mutation.addedNodes.length > 0) {
      									// Удаляем из добавленного узла data атрибуты
      									let copyMutationTarget = mutation.addedNodes[0].cloneNode(true)
      									let muationAttrs = mutation.addedNodes[0].attributes;
      									for (var i = 0; i < muationAttrs.length; i++) {
      										if (muationAttrs[i].name.indexOf('data-') === 0) {
      											copyMutationTarget.removeAttribute(muationAttrs[i].name);
      										}
      									}

      									// удаляем из добавленного узла скрипты
      									copyMutationTarget.querySelectorAll('*').forEach(function(item, i){
      										if (item.tagName.toLowerCase() === 'script') {
      											item.remove();
      										}
      									});

      									mutationAddRemove.name = 'addElemMutation';
      									mutationAddRemove.target = copyMutationTarget.outerHTML;

      									if (mutation.nextSibling) {
      										if (mutation.nextSibling.nodeName === '#text') {
      											if (mutation.nextSibling.nextElementSibling) {
      												mutationAddRemove.nextElemXPath = getDomPath(mutation.nextSibling.nextElementSibling);
      											}
      										}
      										else {
      											mutationAddRemove.nextElemXPath = getDomPath(mutation.nextSibling);
      										}
      									}
      									if (mutation.previousSibling) {
      										if (mutation.previousSibling) {
      											mutationAddRemove.prevElemXPath = getDomPath(mutation.previousSibling);
      										}
      									}
      								}

      								else if (mutation.removedNodes.length > 0) {
      									mutationAddRemove.name = 'removeElemMutation';
      									if (mutation.nextSibling) {
      										if (mutation.nextSibling.nextElementSibling) {
      											mutationAddRemove.nextElemXPath = getDomPath(mutation.nextSibling.nextElementSibling);
      										}
      										else {
      											mutationAddRemove.nextElemXPath = null;
      										}
      									}
      									else {
      										mutationAddRemove.nextElemXPath = null;
      									}

      									if (mutation.previousSibling) {
      										if (mutation.previousSibling.previousElementSibling) {
      											mutationAddRemove.prevElemXPath = getDomPath(mutation.previousSibling);
      										}
      										else {
      											mutationAddRemove.nextElemXPath = getDomPath(mutation.previousSibling);
      										}
      									}
      									else {
      										mutationAddRemove.prevElemXPath = null;
      									}
      								}

      								chat.sendBroadcastEvent(mutationAddRemove);
      							}
      							else {
      								if (mutation.target.outerHTML) {
      									let copyMutation = mutation.target.cloneNode(true);
      									let mutationId = mutation.target.getAttribute('id');
      									// не отправляем мутации связанные с блоком выделения менеджера
      									if (mutationId != 'managerSelected') {
      										// если мутировало изображения и у него в src base64, то ставим вместо него заглушку
      										if (copyMutation.tagName.toLowerCase() === 'img') {
      											let base64Width = mutation.target.clientWidth;
      											let base64Height = mutation.target.clientHeight;
      											let imgSrc = copyMutation.getAttribute('src');
      											if (imgSrc.indexOf('base64') >= 0) {
      												copyMutation.setAttribute('src', 'http://www.wxrl.com/uploads/3/4/7/1/34713038/nyc_orig.jpg');
      												copyMutation.style.width = base64Width + 'px';
      												copyMutation.style.height = base64Height + 'px';
      											}

      											elemMutation = {
      												name: 'mutation',
      												target: copyMutation.outerHTML,
      												xPath: getDomPath(mutation.target)
      											};

      											// вырезаем лишние пробелы из мутации
      											elemMutation.target = elemMutation.target.replace(/\s{2,}/g, ' ');
      											// формируем массив с мутациями
      											mutationsArray.mutations.push(elemMutation);
      										}
      										else if (copyMutation.tagName.toLowerCase() === 'ymaps'){
      											// console.log(copyMutation);
      										}
      										else {
      											// ищем внутри мутации все изображения и если у них в src base64 то выпиливаем его и ставим заглушку
      											let imgInMutation = mutation.target.querySelectorAll('img');
      											let imgSizes = [];
      											// перебираем все изображения и создаем массих с их размерами
      											// для того что бы подставить эти размеры для заглушки изображений с base64 в мутации
      											imgInMutation.forEach(function(item, i){
      												let imgSrc = item.getAttribute('src');
      												let itemSize = {
      													width: item.clientWidth,
      													height: item.clientHeight
      												}
      												imgSizes.push(itemSize);
      											});

      											// перебираем все изображения в копии мутировавшего элемента и заменяем все изображения с base64 на заглушку и устанавливаем ей корректные размеры
      											let imgCopyMutation = copyMutation.querySelectorAll('img');
      											imgCopyMutation.forEach(function(item, i){
      												let imgSrc = item.getAttribute('src');
      												if (imgSrc.indexOf('base64') >= 0) {
      													item.setAttribute('src', 'http://www.wxrl.com/uploads/3/4/7/1/34713038/nyc_orig.jpg');
      													item.style.width = imgSizes[i].width + 'px';
      													item.style.height = imgSizes[i].height + 'px';
      												}
      											});

      											elemMutation = {
      												name: 'mutation',
      												target: copyMutation.outerHTML,
      												xPath: getDomPath(mutation.target)
      											};

      											// вырезаем лишние пробелы из мутации
      											elemMutation.target = elemMutation.target.replace(/\s{2,}/g, ' ');
      											// формируем массив с мутациями
      											mutationsArray.mutations.push(elemMutation);
      										}
      									}
      								}
      							}
      						}
      					}
      				});

      				// Добавляем обработчик скролла ко всем div на странице после мутации (для динамически добавленных элементов)
      				document.querySelectorAll('div').forEach(function(item){
      					item.addEventListener('scroll', function(event){
      						if (localStorage.getItem('screenBroadcast')) {
      							let elemScroll = {
      								name: 'scroll',
      								target: getDomPath(event.target),
      								scrollTop: event.target.scrollTop,
      								scrollLeft: event.target.scrollLeft
      							};

      							chat.sendBroadcastEvent(elemScroll);
      						}
      					});
      				});
      			}
      		});


      		// конфигурация observer:
      		let observConfig = {
      			attributes: true,
      			childList: true,
      			characterData: true,
      			subtree: true
      		};

      		// передаём в качестве аргументов целевой элемент и его конфигурацию
      		observer.observe(observTarget, observConfig);

      		document.querySelectorAll('*').forEach(function(item, i){
      			// находим все эллементы с не транслируемым классом
      			if (item.classList.contains('ym-disable-keys')) {
      				if (item.nodeName.toLowerCase() === 'input') {
      					// IE Браузеры и Edge не корректно работают с evlutr  если в начале xPath нет html
                     let relativePath;
                     // Если edge браузер
                     if (document.documentMode || /Edge/.test(navigator.userAgent)) {
                        relativePath = getDomPath(item);
                     }
                     else {
                        relativePath = getDomPath(item).split('/');
                        relativePath = relativePath.slice(2);
                        relativePath = '/' + relativePath.join('/');
                     }

      					let hiddenElem = document.evaluate(relativePath, correctHTML, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
      					hiddenElem.setAttribute('value', 'Содержимое поля недоступно');
      				}
      				else {
      					// IE Браузеры и Edge не корректно работают с evlutr  если в начале xPath нет html
                     let relativePath;
                     // Если edge браузер
                     if (document.documentMode || /Edge/.test(navigator.userAgent)) {
                        relativePath = getDomPath(item);
                     }
                     else {
                        relativePath = getDomPath(item).split('/');
                        relativePath = relativePath.slice(2);
                        relativePath = '/' + relativePath.join('/');
                     }

      					let subElem = "<div style='width:" + item.offsetWidth + "px; height:" + item.offsetHeight + "px; background: url(https://223421.selcdn.ru/chatix-dev/assets/img/chatix_hidden_elem.png);'></div>";
      					let hiddenElem = document.evaluate(relativePath, correctHTML, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

      					hiddenElem.innerHTML = subElem;
      				}
      			}
      			// находим все поля с паролем что бы скрыть их от трансляции
      			else if (item.getAttribute('type') === 'password') {
      				// IE Браузеры и Edge не корректно работают с evlutr  если в начале xPath нет html
      				let relativePath;
      				// Если edge браузер
      				if (document.documentMode || /Edge/.test(navigator.userAgent)) {
      					relativePath = getDomPath(item);
      				}
      				else {
      					relativePath = getDomPath(item).split('/');
      					relativePath = relativePath.slice(2);
      					relativePath = '/' + relativePath.join('/');
      				}

      				let hiddenElem = document.evaluate(relativePath, correctHTML, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
      				hiddenElem.setAttribute('value', 'pass_was_hidden');
      			}

      			// находим все элементы со скроллом отличным от 0 в момент начала трансляции
      			if (item.scrollTop || item.scrollLeft) {
      				let scrollElem = {
      					target: getDomPath(item),
      					scrollTop: item.scrollTop,
      					scrollLeft: item.scrollLeft
      				}
      				scrolledElems.push(scrollElem);
      			}
      		});

      		// удаляем все скрипты из HTML Отправляемой страницы
      		correctHTML.querySelectorAll('script').forEach(function(item, i){
      			item.removeAttribute('src');
      			item.innerHTML = '';
      		});

      		function widthScroll(){
      			var div = document.createElement('div');
      			div.style.overflowY = 'scroll';
      			div.style.width = '50px';
      			div.style.height = '50px';
      			div.style.visibility = 'hidden';
      			document.body.appendChild(div);
      			var scrollWidth = div.offsetWidth - div.clientWidth;
      			document.body.removeChild(div);
      			return scrollWidth;
      		}

      		// broadcastData.innerHTML = document.getElementsByTagName('html')[0].innerHTML;
      		broadcastData.screenWidth = document.body.clientWidth + widthScroll();
      		broadcastData.screenHeight = window.innerHeight;
      		broadcastData.domain = location.origin + '/';
      		broadcastData.mousePosition = {};
      		broadcastData.scrolledElems = scrolledElems;
      		broadcastData.visitorId = chat.visitor.uuid;
      		broadcastData.htmlId = document.getElementsByTagName('html')[0].getAttribute('id');
      		broadcastData.htmlClass = document.getElementsByTagName('html')[0].getAttribute('class');

      		// если трансляция запущена, то при каждом обновлении или смене страницы отправляем данные
      		if (localStorage.getItem('screenBroadcast')) {
      				if (chat.connection) {
      					if (chat.connection.getConnectionState() === 2) {
      						chat.sendBroadcastData(correctHTML.innerHTML, broadcastData);
      					}
      				}
      		}


      		function getDomPath(el) {
      			var stack = [];
      			while (el.parentNode != null) {
      				var sibCount = 0;
      				var sibIndex = 0;
      				for (var i = 0; i < el.parentNode.childNodes.length; i++) {
      					var sib = el.parentNode.childNodes[i];
      					if (sib.nodeName == el.nodeName) {
      						if (sib === el) {
      							sibIndex = sibCount;
      						}
      						sibCount++;
      					}
      				}
      				if (el.hasAttribute) {
      					if (el.hasAttribute('id') && el.id != '') {
      						stack.unshift(el.nodeName.toLowerCase() + "[@id='" + el.id + "']");
      					} else if (sibCount > 1) {
      						// потому что eq начинается с 0, а индекс xPath с 1
      						sibIndex = sibIndex + 1;
      						stack.unshift(el.nodeName.toLowerCase() + '[' + sibIndex + ']');
      					} else {
      						stack.unshift(el.nodeName.toLowerCase());
      					}
      				}

      				el = el.parentNode;
      			}

      			let path = stack.slice(1);

      			if (path.length > 0) {
      				path = '/html/' + path.join('/')

      				return path;
      			}
      		}
      		// КОНЕЦ ТРАНСЛЯЦИИ ЭКРАНА ВИЗИТОРА
         }
      }, 50);
   }
}

/* harmony default export */ __webpack_exports__["a"] = (ScreenBroadcast);


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _chatixCore = __webpack_require__(26);

var _chatixCore2 = _interopRequireDefault(_chatixCore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var chatixInit = document.getElementById("chatix_init");
var websiteId = chatixInit.getAttribute("data-websiteid");
var visitorId = chatixInit.getAttribute("data-visitorid");

var chatixPath = chatixInit.getAttribute("src");
var arrchatixPath = chatixPath.split('/');
var fileName = arrchatixPath[arrchatixPath.length - 1];
chatixPath = chatixPath.substr(0, chatixPath.length - fileName.length);

// полключаем ядро
// var script = document.createElement('script');
// script.src = chatixPath + 'chatix_core.js';
// script.src = 'http://localhost:8081/chatix_core.js';
// document.getElementsByTagName('head')[0].appendChild(script);

// подключаем шаблон
var script = document.createElement('script');
script.src = chatixPath + 'chatix_widget_template.js';
document.getElementsByTagName('head')[0].appendChild(script);

// подключаем css
var css = document.createElement('link');
css.href = chatixPath + 'style.css';
css.rel = 'stylesheet';
document.getElementsByTagName('head')[0].appendChild(css);

// Нужна что бы не показывать сообщение о нерабочем времени, если менеджер все таки онлайн
var managerOnline = false;

// let chatixWidgetProxy;
// var visitorId;

// проверка на наличие глобального объекта с визитором
// if (typeof chatixVisitor !== 'undefined') {
// 	visitorId = chatixVisitor.visitorId;
// }
// else {
// 	chatixVisitor = {
// 	   visitorId: '',
// 	   name: '',
// 	   email: '',
// 	   fields: []
// 	};
// }

var chatixWidget = {
	visitor: {},
	onConnect: function onConnect() {},
	onNewMessageReceived: function onNewMessageReceived() {},
	onNewMessageSent: function onNewMessageSent() {},
	onManagerConnected: function onManagerConnected() {},
	onManagerDisconnected: function onManagerDisconnected() {},
	onVisitorOpenedWindow: function onVisitorOpenedWindow() {},
	onVisitorClosedWindow: function onVisitorClosedWindow() {}
};

window.onload = function () {
	var core = new _chatixCore2.default(websiteId, applyMessages, connectManager, disconnectManager, chatInfo, visitorId, signalrConnected, getManagers, receivedMessage);
	core.start();

	// колбэк при подключении signalR
	function signalrConnected(visitor, newId) {
		// console.log('SIGNALR CONNECTED');
		if (newId) {
			console.log('Визитор переподключился с новым ID');
		}

		chatixWidget.visitor = Object.assign({}, visitor); // присваиваем пустому объекту свойства old
		chatixWidget.setVisitor = function (updateVisitor) {
			chatixWidget.visitor = Object.assign(chatixWidget.visitor, updateVisitor);
			if (updateVisitor.uuid) {
				if (updateVisitor.uuid != visitor.uuid) {
					core = new _chatixCore2.default(websiteId, applyMessages, connectManager, disconnectManager, chatInfo, chatixWidget.visitor.uuid, signalrConnected, getManagers, receivedMessage);
					core.start();
				}
			}
			core.setVisitor(updateVisitor);
		};

		// запрашиваем информацию о чате
		core.getWebChatInfo();

		// колбэк который вызывается на сайте
		chatixWidget.onConnect();
	}

	// перевод цвета из HEX в HSL
	function hexToHSL(hex) {
		var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
		var r = parseInt(result[1], 16);
		var g = parseInt(result[2], 16);
		var b = parseInt(result[3], 16);
		r /= 255, g /= 255, b /= 255;
		var max = Math.max(r, g, b),
		    min = Math.min(r, g, b);
		var h,
		    s,
		    l = (max + min) / 2;
		if (max == min) {
			h = s = 0; // achromatic
		} else {
			var d = max - min;
			s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
			switch (max) {
				case r:
					h = (g - b) / d + (g < b ? 6 : 0);break;
				case g:
					h = (b - r) / d + 2;break;
				case b:
					h = (r - g) / d + 4;break;
			}
			h /= 6;
		}
		var HSL = new Object();
		HSL['h'] = h;
		HSL['s'] = s;
		HSL['l'] = l;

		return HSL;
	}

	// функция осветляет\затемняет цвет
	function lightenDarkenColor(col, amt) {
		var usePound = false;
		if (col[0] == "#") {
			col = col.slice(1);
			usePound = true;
		}
		var num = parseInt(col, 16);
		var r = (num >> 16) + amt;
		if (r > 255) {
			r = 255;
		} else if (r < 0) {
			r = 0;
		}
		var b = (num >> 8 & 0x00FF) + amt;
		if (b > 255) {
			b = 255;
		} else if (b < 0) {
			b = 0;
		}
		var g = (num & 0x0000FF) + amt;
		if (g > 255) {
			g = 255;
		} else if (g < 0) {
			g = 0;
		}

		return (usePound ? "#" : "") + (g | b << 8 | r << 16).toString(16);
	}

	// перменная нужна для анимации сворачивания\разворачивания чата
	var chatHeight = void 0;
	var headHeight = void 0;

	// колбэк на получение объекта конверсации. Устанавливаем стили и общие настройки чата
	function chatInfo(chat) {
		document.getElementById('chatixContainer').style.display = 'block';
		if (chat) {
			// стили шапки виджета, кнопки открытия\закрытия и блока трансляции экрана
			if (chat.style.header_type === 0) {
				document.querySelectorAll('.chatHead')[0].style.backgroundColor = chat.style.header_color;
				document.querySelectorAll('.broadcastBlock')[0].style.backgroundColor = chat.style.header_color;
				document.querySelectorAll('.broadcastBtn').forEach(function (item, i) {
					item.style.borderRadius = chat.style.corner_radius[0] / 2 + 'px';
				});
				// document.querySelectorAll('.showChatBtn')[0].style.backgroundColor = chat.style.header_color;


				// если цвет фона шапки светлый, то текст в шапке и градиенты делаем темным и наоборот
				var managerNameColor = hexToHSL(chat.style.header_color);
				if (managerNameColor.l < 0.7) {
					var managerNameColor = document.createElement('style');
					managerNameColor.innerHTML = ".chatHead__info, .broadcastBlock {color: #fff !important;} .broadcastBtn:hover {color: #000 !important; background: #fff; border-color: #fff !important}";
					document.querySelector('head').appendChild(managerNameColor);

					document.querySelectorAll('.broadcastBlock__broadcastingGradient')[0].style.background = "-webkit-linear-gradient(left, " + chat.style.header_color + " 0%, #fff 50%, " + chat.style.header_color + " 100%)";
				} else {
					var managerNameColor = document.createElement('style');
					managerNameColor.innerHTML = ".chatHead__info, .broadcastBlock {color: #000 !important;} .broadcastBtn:hover {color: #fff !important; background: #000; border-color: #000 !important}";
					document.querySelector('head').appendChild(managerNameColor);

					document.querySelectorAll('.broadcastBlock__broadcastingGradient')[0].style.background = "-webkit-linear-gradient(left, " + chat.style.header_color + " 0%, #000 50%, " + chat.style.header_color + " 100%)";
				}

				// добаляем стиль бордера для аватаров менеджеров
				var managers_ava_border = document.createElement('style');
				managers_ava_border.innerHTML = ".chatHead__avatar-wrap, .chatHead__avatar-online {border: 2px solid " + chat.style.header_color + "}";
				document.querySelector('head').appendChild(managers_ava_border);
			} else if (chat.style.header_type === 1) {
				document.querySelectorAll('.chatHead')[0].style.backgroundImage = 'url(' + chat.style.header_image + ')';
				document.querySelectorAll('.chatHead')[0].style.backgroundSize = 'cover';
			}

			// стили тела виджета и поля ввода сообщения
			if (chat.style.background_type === 0) {
				document.querySelectorAll('.chatBody__viewport')[0].style.backgroundColor = chat.style.background_color;
				var newMessageFieldColor = lightenDarkenColor(chat.style.background_color, 50);
				document.querySelectorAll('.newMessage')[0].style.backgroundColor = newMessageFieldColor;
				// плейсхолдер поля ввода сообщения
				var placeholerHSL = hexToHSL(chat.style.background_color);
				if (placeholerHSL.l < 0.7) {
					var newMessPlaceholder = document.createElement('style');
					newMessPlaceholder.innerHTML = ".newMessage__placeholder:after {color: #fff !important;}";
					document.querySelector('head').appendChild(newMessPlaceholder);
				} else {
					var newMessPlaceholder = document.createElement('style');
					newMessPlaceholder.innerHTML = ".newMessage__placeholder:after {color: #868686 !important;}";
					document.querySelector('head').appendChild(newMessPlaceholder);
				}
			} else if (chat.style.background_type === 1) {
				document.querySelectorAll('.chatBody__viewport')[0].style.backgroundImage = 'url(' + chat.style.background_image + ')';
				document.querySelectorAll('.chatBody__viewport')[0].style.backgroundSize = 'cover';
			}

			// общие стили виджета
			document.querySelectorAll('.chatixWindow')[0].style.width = chat.style.width + 'px';
			document.querySelectorAll('.chatixWindow')[0].style.height = chat.style.height + 'px';
			document.querySelectorAll('.chatixWindow')[0].style.borderTopLeftRadius = chat.style.corner_radius[0] + 'px';
			document.querySelectorAll('.chatixWindow')[0].style.borderTopRightRadius = chat.style.corner_radius[1] + 'px';
			document.querySelectorAll('.chatixWindow')[0].style.borderBottomLeftRadius = chat.style.corner_radius[2] + 'px';
			document.querySelectorAll('.chatixWindow')[0].style.borderBottomRightRadius = chat.style.corner_radius[3] + 'px';
			chatHeight = chat.style.height;
			headHeight = document.querySelectorAll('.chatHead')[0].offsetHeight;

			document.querySelectorAll('.chatixWindow')[0].style.bottom = (chatHeight - headHeight) * -1 + 'px';
			setTimeout(function () {
				document.querySelectorAll('.chatixWindow')[0].classList.add('chatixWindow-animate');
			}, 500);

			// стили сообщений
			var messgesInStyle = document.createElement('style');
			var messgesOutStyle = document.createElement('style');
			var managerMessBg = chat.style.manager_message_bg_color;
			var managerMessageBorder = chat.style.manager_message_outline_width;
			var managerMessBorderColor = chat.style.manager_message_outline_color;
			var managerMessTextColor = chat.style.manager_message_text_color;
			var visitorMessBg = chat.style.visitor_message_bg_color;
			var visitorMessageBorder = chat.style.visitor_message_outline_width;
			var visitorMessBorderColor = chat.style.visitor_message_outline_color;
			var visitorMessTextColor = chat.style.visitor_message_text_color;
			messgesInStyle.innerHTML = ".chatBody__inMessage {background: " + managerMessBg + " !important; border: " + managerMessageBorder + "px solid" + managerMessBorderColor + " !important; color: " + managerMessTextColor + " !important;}";
			messgesOutStyle.innerHTML = ".chatBody__outMessage {background: " + visitorMessBg + " !important; border: " + visitorMessageBorder + "px solid" + visitorMessBorderColor + " !important; color: " + visitorMessTextColor + " !important;}";
			document.querySelector('head').appendChild(messgesInStyle);
			document.querySelector('head').appendChild(messgesOutStyle);
		}

		// установка название чата
		if (chat.organisation_name) {
			document.getElementById('chat_name').innerHTML = chat.organisation_name;
		}

		// установка статуса чата
		var date = new Date();

		var managerTimeDiff = core.chat.chatInfo.time_zone_utc_offset * 60 * -1;
		var localOffest = date.getTimezoneOffset();
		var managerOffest = (managerTimeDiff * -1 + localOffest) * 60 * 1000;
		var managerDate = new Date(date.getTime() + managerOffest);

		var managerHour = managerDate.getHours();

		var day = date.getDay() - 1;
		if (day === -1) {
			day = 6;
		}

		var workDay = core.chat.chatInfo.schedule[day].is_work;
		var workHourStart = +core.chat.chatInfo.schedule[day].start;
		var workHourEnd = +core.chat.chatInfo.schedule[day].end;

		function getWidgetStatus() {
			var status = void 0;
			if (chat.schedule[day].is_work) {
				var hour = void 0;
				var minute = void 0;
				var visitorUTC = Math.floor(date.getTime() / 1000);
				var timeDiff = date.getTimezoneOffset() / 60 * -1 - chat.time_zone_utc_offset;
				var workStart = chat.schedule[day].start + timeDiff;
				var workEnd = chat.schedule[day].end + timeDiff;
				var dateStart = new Date(date.getFullYear(), date.getMonth(), date.getDate(), workStart, 0, 0);
				var dateEnd = new Date(date.getFullYear(), date.getMonth(), date.getDate(), workEnd, 0, 0);

				if (dateStart > date && dateEnd < date) {
					// console.log('Рабочее время');
				} else {
					var comperableHour = void 0;
					var dayOfset = 0;
					if (dateEnd < date) {
						dayOfset = 1;
						if (chat.schedule[day + dayOfset]) {
							comperableHour = chat.schedule[day + dayOfset].start + timeDiff;
						} else {
							comperableHour = chat.schedule[0].start + timeDiff;
						}
					} else if (dateStart > date) {
						var dateManager = new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours() - timeDiff, 0, 0);
						if (date.getDate() > dateManager.getDate()) {
							dayOfset = -1;
						}

						if (chat.schedule[day + dayOfset]) {
							comperableHour = chat.schedule[day + dayOfset].start + timeDiff;
						} else {
							comperableHour = chat.schedule[6].start + timeDiff;
						}
					}

					var comperableHourDate = new Date(date.getFullYear(), date.getMonth(), date.getDate() + dayOfset, comperableHour, 0, 0);
					var hourToStart = (comperableHourDate - date) / 1000 / 60 / 60;
					hour = Math.abs(Math.trunc(hourToStart));
					minute = Math.abs(Math.floor(hourToStart * 60 - hour * 60));
					// console.log(Math.trunc(60 * Math.abs(hourToStart - Math.trunc(hourToStart))));
				}

				if (hour < 1) {
					status = 'Будет в сети через' + minute + 'м.';
				} else {
					status = 'Будет в сети через ' + hour + 'ч. и ' + minute + 'м.';
				}
			} else {
				status = 'Сегодня выходной';
			}

			return status;
		}

		// устанавливаем статус
		var status = [];
		allManagers.allManagers.forEach(function (item, i) {
			status.push(item.isOnline);
		});
		status = status.indexOf(true);
		if (status < 0) {
			if (workDay) {
				// если текущий час попадает в диапазон рабочего, то считаем время рабочим
				if (managerHour >= workHourStart & managerHour < workHourEnd) {
					document.querySelectorAll('.chatHead__info_status')[0].innerHTML = 'Консультант ответит в ближайшее время';
				} else {
					document.querySelectorAll('.chatHead__info_status')[0].innerHTML = getWidgetStatus();
				}
			} else {
				document.querySelectorAll('.chatHead__info_status')[0].innerHTML = getWidgetStatus();
			}
		} else {
			document.querySelectorAll('.chatHead__info_status')[0].innerHTML = 'Консультант в сети';
		}
	}

	// получение и установка первоначального списка подключенных менеджеров
	var allManagers = void 0;
	function getManagers(managers) {
		allManagers = managers;
		document.getElementById('manager_avas').innerHTML = '';

		if (managers.connectedManagers.length > 0) {
			// показываем блок с подключенными менеджерами
			document.querySelectorAll('.chatHead__top-connected')[0].classList.remove('hidden');

			// отображаем менеджеров
			for (var i = 0; i < 3; i++) {
				if (managers.connectedManagers[i]) {
					// установка имен менеджеров
					var manager_name = document.createElement('span');
					manager_name.setAttribute('id', 'name-' + managers.connectedManagers[i].uuid);
					manager_name.classList.add('chatHead__manager-name');
					if (i + 1 === managers.connectedManagers.length) {
						manager_name.innerHTML = managers.connectedManagers[i].name;
					} else {
						manager_name.innerHTML = managers.connectedManagers[i].name + ', ';
					}
					document.querySelectorAll('.chatHead__info_consult_name')[0].appendChild(manager_name);

					// установка аватарок менеджеров
					document.getElementById('manager_ava').appendChild(buildManagerAva(managers.connectedManagers[i]));
				}
			}
		} else if (managers.allManagers.length > 0) {
			// показываем блок с НЕ подключенными менеджерами
			document.querySelectorAll('.chatHead__top-noConnected')[0].classList.remove('hidden');

			// сортируем менеджеров (сначала пол полю isOnline, затем по наличию аватара)
			var sortManagers = void 0;

			sortManagers = managers.allManagers.sort(function (prev, next) {
				if (prev.isOnline) {
					return -1;
				}
				// else if (!prev.isOnline) {
				// 	if (prev.avatar_thumb300_url) {
				// 		return -1
				// 	}
				// 	else {
				// 		return 1;
				// 	}
				// }
				else {
						return 1;
					}
			});

			// отображаем менеджеров
			for (var i = 0; i < 3; i++) {
				if (sortManagers[i]) {
					// установка аватарок менеджеров
					document.getElementById('manager_avas').appendChild(buildManagerAva(sortManagers[i]));
				}
			}
		}

		headHeight = document.querySelectorAll('.chatHead')[0].offsetHeight;
	}

	// колбэк на подключение менеджера к диалогу
	function connectManager(manager) {
		// показываем блок с подключенными менеджерами
		document.querySelectorAll('.chatHead__top-noConnected')[0].classList.add('hidden');
		document.querySelectorAll('.chatHead__top-connected')[0].classList.remove('hidden');

		// колбэк который вызывается на сайте
		chatixWidget.onManagerConnected(manager);
		var countManagers = document.getElementsByClassName('chatHead__avatar-img').length;

		// установка аватара подключившегося менеджера
		document.getElementById('manager_ava').appendChild(buildManagerAva(manager));

		// установка имени подключившегося менеджера
		var manager_name = document.createElement('span');
		manager_name.setAttribute('id', 'name-' + manager.uuid);
		manager_name.classList.add('chatHead__manager-name');

		// если подключается первый мнеджер, то ему запятую не ставим
		if (document.querySelectorAll('#manager_ava > div').length === 1) {
			manager_name.innerHTML = manager.name;
		} else {
			manager_name.innerHTML = ', ' + manager.name;
		}
		document.querySelectorAll('.chatHead__info_consult_name')[0].appendChild(manager_name);

		// удаляем дефолтные значения (нужно при подключении первого менеджера)
		if (document.getElementById('name-default')) {
			document.getElementById('name-default').remove();
		}

		resizeManagerNames();
		headHeight = document.querySelectorAll('.chatHead')[0].offsetHeight;
	}

	// колбэк на отключение менеджера от диалога
	function disconnectManager(manager) {
		// колбэк который вызывается на сайте
		chatixWidget.onManagerDisconnected(manager);
		var countManagers = document.querySelectorAll('.chatHead__top-connected .chatHead__avatar-img').length;

		// при отключении последнего менеджера удаляем его данные и ставим дефолтные
		if (countManagers === 1) {
			getManagers(allManagers);
			// показываем блок с подключенными менеджерами
			document.querySelectorAll('.chatHead__top-noConnected')[0].classList.remove('hidden');
			document.querySelectorAll('.chatHead__top-connected')[0].classList.add('hidden');

			// удалеие аватара отключившегося менеджера
			var managerAva = document.getElementById('ava-' + manager.uuid);
			if (managerAva) {
				managerAva.remove();
			}

			// удаление имени отключившегося менеджера
			var managerName = document.getElementById('name-' + manager.uuid);
			if (managerName) {
				managerName.remove();
			}
		} else if (countManagers === 2) {
			// удалеие аватара отключившегося менеджера
			var _managerAva = document.getElementById('ava-' + manager.uuid);
			if (_managerAva) {
				_managerAva.remove();
			}

			// удаление имени отключившегося менеджера
			var _managerName = document.getElementById('name-' + manager.uuid);
			if (_managerName) {
				_managerName.remove();
			}

			// при отклюении предпоследнего менеджера, у оставшегося убираем запятую
			var lastManagerName = document.querySelectorAll('.chatHead__manager-name')[0].innerText;
			lastManagerName = lastManagerName.split(',');
			if (lastManagerName[1]) {
				document.querySelectorAll('.chatHead__manager-name')[0].innerText = lastManagerName[1];
			}
		} else {
			// удалеие аватара отключившегося менеджера
			var _managerAva2 = document.getElementById('ava-' + manager.uuid);
			if (_managerAva2) {
				_managerAva2.remove();
			}

			// удаление имени отключившегося менеджера
			var _managerName2 = document.getElementById('name-' + manager.uuid);
			if (_managerName2) {
				_managerName2.remove();
			}
		}

		resizeManagerNames();
		headHeight = document.querySelectorAll('.chatHead')[0].offsetHeight;
	}

	function buildManagerAva(manager) {
		var manager_ava = document.createElement('div');
		manager_ava.setAttribute('id', 'ava-' + manager.uuid);
		manager_ava.classList.add('chatHead__avatar-img');
		if (manager.avatar_thumb300_url !== null) {
			manager_ava.innerHTML = "<div class='chatHead__avatar-wrap'><img src='" + manager.avatar_thumb300_url + "' /></div>";
		} else {
			manager_ava.innerHTML = "<div class='chatHead__avatar-wrap'><img src='" + chatixPath + "img/default_avatar.png'></div>";
		}

		if (manager.isOnline) {
			var onlineIndicator = document.createElement('div');
			onlineIndicator.classList.add('chatHead__avatar-online');
			manager_ava.appendChild(onlineIndicator);
		}

		headHeight = document.querySelectorAll('.chatHead')[0].offsetHeight;

		return manager_ava;
	}

	// функция получает новые входящие и отправляенные сообщения
	function receivedMessage(message) {
		// колбэк который вызывается на сайте
		if (!Array.isArray(message)) {
			if (message.sender_flag === 0) {
				chatixWidget.onNewMessageSent(message);
			} else if (message.sender_flag === 1) {
				chatixWidget.onNewMessageReceived(message);
			}
		}
	}

	//функция принимает все отсротированные по времени сообщения из ядра
	function applyMessages(messages) {
		// звук при новом сообщении
		var newMessAudio = new Audio();
		newMessAudio.preload = 'auto';
		newMessAudio.src = 'https://223421.selcdn.ru/chatix-dev/assets/audio/new_message.wav';
		var messagesLength = 0;
		var messageSound = false;

		// проигрываем звук при новых сообщениях
		if (messages.length > messagesLength && messageSound) {
			if (messages[messages.length - 1].sender_id != core.chat.visitor.uuid) {
				newMessAudio.play();
				// показываем индикатор нового сообщения
				document.getElementById('showChatBtn__newMessage').style.opacity = '1';
			}
		}
		messageSound = true;
		messagesLength = messages.length;

		if (messages.length === 0 && core.chat.chatInfo) {
			var onlineGreeting = {
				content: core.chat.chatInfo.online_greeting_text,
				sender_flag: 1,
				type: 0,
				uuid: ''
			};
			messages.push(onlineGreeting);
		}
		document.getElementById('messages_list').innerHTML = '';
		// при новом или новых сообщениях добавляем в чат
		messages.forEach(function (message, i) {
			// сообщение с текстом
			if (message.type == 0) {
				var mes = document.createElement('div');
				mes.innerHTML = getLink(message.content);
				mes.classList.add('chatBody__message');
				mes.setAttribute('id', message.uuid);

				if (message.sender_flag === 0) {
					mes.classList.add('chatBody__outMessage');
				} else if (message.sender_flag === 1) {
					mes.classList.add('chatBody__inMessage');
				}
				document.getElementById('messages_list').appendChild(mes);
			}
			// сообщение с изображением (старое и новое)
			else if (message.type === 1 || message.type === 4) {
					var uploads_files = document.createElement('img');
					var popupImg = document.createElement('img');
					// проверкана доступность изображения в сообщении
					// если изображения по ссылке нет, то показываем заглушку
					var img = new Image();
					img.src = message.thumb_300_url ? message.thumb_300_url : message.content;
					img.onload = function () {
						uploads_files.setAttribute('src', message.thumb_300_url ? message.thumb_300_url : message.content);
						popupImg.setAttribute('src', message.original_url ? message.original_url : message.content);
					};
					img.onerror = function () {
						uploads_files.setAttribute('src', 'https://223421.selcdn.ru/chatix-dev/assets/img/message_no_image.png');
						popupImg.setAttribute('src', 'https://223421.selcdn.ru/chatix-dev/assets/img/message_no_image.png');
					};

					uploads_files.classList.add('message__uploadImg');
					var file_in_message = document.createElement('div');
					file_in_message.appendChild(uploads_files);

					// создаем блок с сообщением
					var new_message = document.createElement('div');
					new_message.classList.add('chatBody__message');
					new_message.setAttribute('id', message.uuid);
					new_message.appendChild(file_in_message);
					if (message.sender_flag == 0) {
						new_message.classList.add('chatBody__outMessage');
					} else if (message.sender_flag == 1) {
						new_message.classList.add('chatBody__inMessage');
					}

					document.getElementById('messages_list').appendChild(new_message);

					new_message.addEventListener('click', popup.bind('windowname', 'popupContent', popupImg));
				}
				// сообщение с файлом (старое и новое)
				else if (message.type === 2 || message.type === 5) {
						var fileUrl = message.file_url ? message.file_url : message.content;
						var uploads_files = "<a class='chatBody__fileLink' target='_blank' href='" + fileUrl + "'><img class='chatBody__fileIcon' src='" + chatixPath + "img/upload_icon.png' /> Скачать файл</a>";
						var file_in_message = document.createElement('div');
						file_in_message.innerHTML = uploads_files;

						// создаем блок с сообщением
						var new_message = document.createElement('div');
						new_message.classList.add('chatBody__message');
						new_message.setAttribute('id', message.uuid);
						new_message.appendChild(file_in_message);
						if (message.sender_flag == 0) {
							new_message.classList.add('chatBody__outMessage');
						} else if (message.sender_flag == 1) {
							new_message.classList.add('chatBody__inMessage');
						}
						document.getElementById('messages_list').appendChild(new_message);
					}

			// если data-scrolled не установлен (первоначальная загрузка сообщений), то скролим вниз при загрузке сообщений
			// а если установлен (был скролл до самого верха) то при подгрузке новых осталяем скорлл у самого верхнего сообщения на момент подгрузки
			var dialogBody = document.getElementById('wrap_messages');
			if (dialogBody.getAttribute('data-scrolled') !== 'scrolledTop') {
				document.getElementById('wrap_messages').scrollTop = document.getElementById('wrap_messages').scrollHeight + 200;
			} else {
				if (document.getElementById(lastMess)) {
					document.getElementById(lastMess).scrollIntoView(true);
				}
			}
		});
	};

	chatix_template();
	chatScrollBottom();
	window.setTimeout(function () {
		resizeMessagesList();
	}, 100);

	// ВЫЧИСЛЕНИЕ РАЗМЕРА БЛОКА С СООБЩЕНИЯМИ
	function resizeMessagesList() {
		document.getElementById('wrap_messages').scrollTop = document.getElementById('wrap_messages').scrollHeight + 200;
	}
	// КОНЕЦ ВЫЧИСЛЕНИЯ РАЗМЕРА БЛОКА С СООБЩЕНИЯМИ


	// УБИРАЕМ ПЛЭЙСХОЛДЕР У ПОЛЯ ВВОДА СООБЩЕНИЯ
	var entry_message_field = document.getElementById('entry_message_field');
	function placeholder() {
		if (entry_message_field.innerText.length > 0) {
			entry_message_field.classList.remove('newMessage__placeholder');
		} else {
			entry_message_field.classList.add('newMessage__placeholder');
		}
	};

	entry_message_field.addEventListener("blur", placeholder);
	// КОНЕЦ ПЛЕЙСХОЛДЕРА


	// ОТПРАВКА ПЕЧАТАЕМОГО ТЕКСТА МЕНЕДЖЕРУ
	entry_message_field.addEventListener("input", function (e) {
		placeholder();
		core.visitorType(e.target.innerText);
	});

	// функция парсинга ссыллок в сообщениях
	function getLink(str) {
		var reg = str.match(/(http|https|ftp|ftps)\:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(\/\S*)?/g);
		for (key in reg) {
			str = str.replace(reg[key], ' <a href="' + reg[key] + '" target="_blank"> ' + reg[key] + '</a> ');
		}
		return str;
	}

	entry_message_field.addEventListener("paste", function (e) {
		// отменяем вставку изображения в поле ввода
		// e.preventDefault();
		// e.stopPropagation();

		// удаляем изображения из поля ввода сразу после вставки
		var imgsInText = e.target.getElementsByTagName('img');

		for (var i = 0; i < imgsInText.length; i++) {
			imgsInText[i].remove();
		}

		// получаем содержимое буфера обмена
		var items = e.clipboardData.items;
		if (items) {
			for (var _i = 0; _i < items.length; _i++) {
				if (items[_i].type.indexOf("image") !== -1) {
					// представляем изображение в виде файла
					var clipboardImg = items[_i].getAsFile();
					// Преобразуем изображение в base64
					var fileReader = new FileReader();

					fileReader.onload = function (fileLoadedEvent) {
						img_base64 = fileLoadedEvent.target.result; // изображение в base64

						// создаем блок с доавленными файлами
						var uploads_files = "<img src='" + img_base64 + "' class='message__uploadImg' />";
						var file_in_message = document.createElement('div');
						file_in_message.innerHTML = uploads_files;

						// создаем блок с сообщением и помещаем в него блок с временем
						var new_message = document.createElement('div');
						new_message.classList.add('chatBody__message');
						new_message.classList.add('chatBody__outMessage');
						new_message.innerHTML = '<div class="chatBody__spin"></div>';
						new_message.appendChild(file_in_message);

						// добавляем сообщение в список сообщений
						document.getElementById('messages_list').appendChild(new_message);
						chatScrollBottom();
					};
					fileReader.readAsDataURL(clipboardImg);

					// отправляем сообщение с файлом
					core.sendFileMessage(clipboardImg);
				}
			}
		}
	});

	// ОТПРАВКА ПО ENTER
	entry_message_field.addEventListener("keydown", function (e) {
		if (e.key === 'Enter') {
			e.preventDefault();
			sendMessage(e);
			chatScrollBottom();
		}
	});

	// ПОДГРУЗКА СООБЩЕНИЙ ПРИ СКРОЛЛЕ
	var dialogBody = document.getElementById('wrap_messages');
	var lastMess = null;
	dialogBody.onscroll = function () {
		dialogBody.setAttribute('data-scrolled', '');

		if (dialogBody.scrollTop === 0) {
			dialogBody.setAttribute('data-scrolled', 'scrolledTop');
			lastMess = dialogBody.getElementsByClassName('chatBody__message')[0].getAttribute('id');
			core.getHistory(lastMess);
		}
	};

	// ОТКРЫТИЕ\ЗАКРЫТИЕ ЧАТА
	var show_chat_btn = document.getElementById('show_chat_btn');
	function openChat() {
		// скрываем индикатор нового сообщения
		document.getElementById('showChatBtn__newMessage').style.opacity = '0';
		// проверяем в рабочее ли время отправлено сообщение, если нет, отправляем встречное о информации о рабочем расписании
		var currentData = new Date();
		var managerTimeDiff = core.chat.chatInfo.time_zone_utc_offset * 60 * -1;
		var localOffest = currentData.getTimezoneOffset();
		var managerOffest = (managerTimeDiff * -1 + localOffest) * 60 * 1000;
		var managerDate = new Date(currentData.getTime() + managerOffest);

		var hour = managerDate.getHours();

		var date = new Date();
		date = date.getDay() - 1;
		if (date === -1) {
			date = 6;
		}

		var workDay = core.chat.chatInfo.schedule[date].is_work;
		var workHourStart = +core.chat.chatInfo.schedule[date].start;
		var workHourEnd = +core.chat.chatInfo.schedule[date].end;

		function sendofflineGreeting() {
			var messList = document.getElementById('messages_list');
			var notWorkingMes = messList.getElementsByClassName('not_working_time');
			if (!notWorkingMes.length && managerOnline.length === 0) {
				var mes = document.createElement('div');
				mes.innerHTML = core.chat.chatInfo.offline_greeting_text;
				mes.classList.add('chatBody__message');
				mes.classList.add('chatBody__inMessage');
				mes.classList.add('not_working_time');
				document.getElementById('messages_list').appendChild(mes);
			}
		}

		if (workDay) {
			// если текущий час попадает в диапазон рабочего, то считаем время рабочим
			if (hour >= workHourStart & hour < workHourEnd) {
				// sessionStorage.setItem("chatix_v1__workTime", 1);
			} else {
				sendofflineGreeting();
				// sessionStorage.setItem("chatix_v1__workTime", 0);
			}
		} else {
			sendofflineGreeting();
			// sessionStorage.setItem("chatix_v1__workTime", 0);
		}

		var chat = document.getElementById('wrap_chat');

		// колбэки на открытие\закрытие чата
		if (chat.classList.contains('chatixWindow__hidden')) {
			chatixWidget.onVisitorOpenedWindow();
		} else {
			chatixWidget.onVisitorClosedWindow();
		}

		chat.classList.toggle('chatixWindow__hidden');
		show_chat_btn.classList.toggle('chat_active');

		entry_message_field.focus();

		resizeManagerNames();
		resizeMessagesList();
		chatScrollBottom();
	}

	// show_chat_btn.addEventListener("click", openChat);
	show_chat_btn.addEventListener("click", function () {
		document.querySelectorAll('.chatixWindow')[0].style.display = 'flex';
		document.querySelectorAll('.chatixWindow')[0].classList.remove('chatixWindow__hidden');
	});

	document.getElementById('chatHead').addEventListener("click", function () {
		// скрываем индикатор нового сообщения
		document.getElementById('showChatBtn__newMessage').style.opacity = '0';
		// проверяем в рабочее ли время отправлено сообщение, если нет, отправляем встречное о информации о рабочем расписании
		var currentData = new Date();
		var managerTimeDiff = core.chat.chatInfo.time_zone_utc_offset * 60 * -1;
		var localOffest = currentData.getTimezoneOffset();
		var managerOffest = (managerTimeDiff * -1 + localOffest) * 60 * 1000;
		var managerDate = new Date(currentData.getTime() + managerOffest);

		var hour = managerDate.getHours();

		var date = new Date();
		date = date.getDay() - 1;
		if (date === -1) {
			date = 6;
		}

		var workDay = core.chat.chatInfo.schedule[date].is_work;
		var workHourStart = +core.chat.chatInfo.schedule[date].start;
		var workHourEnd = +core.chat.chatInfo.schedule[date].end;

		function sendofflineGreeting() {
			var messList = document.getElementById('messages_list');
			var notWorkingMes = messList.getElementsByClassName('not_working_time');
			if (!notWorkingMes.length && managerOnline.length === 0) {
				var mes = document.createElement('div');
				mes.innerHTML = core.chat.chatInfo.offline_greeting_text;
				mes.classList.add('chatBody__message');
				mes.classList.add('chatBody__inMessage');
				mes.classList.add('not_working_time');
				document.getElementById('messages_list').appendChild(mes);
			}
		}

		if (workDay) {
			// если текущий час попадает в диапазон рабочего, то считаем время рабочим
			if (hour >= workHourStart & hour < workHourEnd) {
				// sessionStorage.setItem("chatix_v1__workTime", 1);
			} else {
				sendofflineGreeting();
				// sessionStorage.setItem("chatix_v1__workTime", 0);
			}
		} else {
			sendofflineGreeting();
			// sessionStorage.setItem("chatix_v1__workTime", 0);
		}

		var chat = document.getElementById('wrap_chat');

		// колбэки на открытие\закрытие чата
		if (chat.classList.contains('chatixWindow__hidden')) {
			chatixWidget.onVisitorOpenedWindow();
		} else {
			chatixWidget.onVisitorClosedWindow();
		}

		entry_message_field.focus();

		resizeManagerNames();
		resizeMessagesList();
		chatScrollBottom();
		slideWidget();

		document.querySelectorAll('.chatixWindow')[0].classList.toggle('chatixWindow__hidden');
	});
	// КОНЕЦ ОТКРЫТИЯ\ЗАКРЫТИЯ ЧАТА

	function slideWidget() {
		if (screen.width > 667) {
			if (document.querySelectorAll('.chatixWindow')[0].classList.contains('chatixWindow__hidden')) {
				document.querySelectorAll('.chatixWindow')[0].style.bottom = 0 + 'px';
			} else {
				document.querySelectorAll('.chatixWindow')[0].style.bottom = (chatHeight - headHeight) * -1 + 'px';
			}
		} else {
			document.querySelectorAll('.chatixWindow')[0].style.display = 'none';
			document.querySelectorAll('.chatixWindow')[0].classList.add('chatixWindow__hidden');
		}
	}

	function resizeManagerNames() {
		// устанавливаем развер блока с именами менеджеров,
		// что бы обрезать по краю шапки и поставить многоточие
		var managerNames = document.querySelectorAll('#manager_name')[0];
		var chatHead = document.querySelectorAll('.chatHead')[0];
		var managerAvatars = document.querySelectorAll('#manager_ava')[0];
		managerNames.style.width = chatHead.offsetWidth - managerAvatars.offsetWidth - 50;
	}

	// ОТПРАВКА СООБЩЕНИЯ
	function sendMessage(e) {
		e.preventDefault();

		// отправка сообщения
		var text_message = entry_message_field.innerText;

		if (text_message.length > 0) {
			// очищаем поле ввода сообщения
			entry_message_field.innerHTML = '';
			core.sendTextMessage(text_message);
			core.visitorType('');

			chatScrollBottom();
			resizeMessagesList();
			placeholder();
		} else {
			console.log('Введите сообщение');
		}
		chatScrollBottom();

		var dialogBody = document.getElementById('wrap_messages');
		dialogBody.setAttribute('data-scrolled', '');
	}
	// КОНЕЦ ОТПРАВКИ СООБЩЕНИЯ


	// СКРОЛЛ ВНИЗ ПРИ ДОБАВЛЕНИИ НОВОГО СООБЩЕНИЯ
	function chatScrollBottom() {
		document.getElementById('wrap_messages').scrollTop = document.getElementById('wrap_messages').scrollHeight + 400;
	}
	// КОНЕЦ СКРОЛЛА ВНИЗ ПРИ ДОБАВЛЕНИИ НОВОГО СООБЩЕНИЯ


	// DRAG AND DROP ФАЙЛА В ПОЛЕ ВВОДЕ СООБЩЕНИЯ
	// файл поднесли
	var file_drop_zone = document.getElementById('wrap_chat');
	var chat_body = document.getElementById('wrap_messages_pos');
	function fileOver(event) {
		event.preventDefault();
		chat_body.classList.add('file_drop_hover');
	}

	// файл убрали
	function fileLeave(event) {
		event.preventDefault();
		chat_body.classList.remove('file_drop_hover');
	}

	// файл бросили в поле
	function overDrop(event) {
		event.preventDefault();
		chat_body.classList.remove('file_drop_hover');
		var output = [];
		var files = event.dataTransfer.files;

		var fileType = files[0].name.split('.');
		var fileExt = void 0;
		if (fileType.length) {
			fileExt = fileType[fileType.length - 1].toLowerCase();
		}

		if (fileExt === 'png' || fileExt === 'jpg' || fileExt === 'jpeg') {
			// Преобразуем изображение в base64
			var fileReader = new FileReader();

			fileReader.onload = function (fileLoadedEvent) {
				img_base64 = fileLoadedEvent.target.result; // изображение в base64

				// создаем блок с доавленными файлами
				var uploads_files = "<img src='" + img_base64 + "' class='message__uploadImg' />";
				var file_in_message = document.createElement('div');
				file_in_message.innerHTML = uploads_files;

				// создаем блок с сообщением и помещаем в него блок с временем
				var new_message = document.createElement('div');
				new_message.classList.add('chatBody__message');
				new_message.classList.add('chatBody__outMessage');
				new_message.innerHTML = '<div class="chatBody__spin"></div>';
				new_message.appendChild(file_in_message);

				// добавляем сообщение в список сообщений
				document.getElementById('messages_list').appendChild(new_message);
			};
			fileReader.readAsDataURL(files[0]);
		} else {
			// создаем блок с сообщением и помещаем в него блок с временем
			var new_message = document.createElement('div');
			new_message.classList.add('chatBody__message');
			new_message.classList.add('chatBody__outMessage');
			new_message.innerHTML = '<div class="chatBody__spin"></div> <div><a class="chatBody__fileLink" target="_blank" href="#"><img class="chatBody__fileIcon" src="img/upload_icon.png"> Скачать файл</a></div>';

			// добавляем сообщение в список сообщений
			document.getElementById('messages_list').appendChild(new_message);
		}

		// отправляем сообщение с файлом
		core.sendFileMessage(files);

		chatScrollBottom();
	}

	file_drop_zone.addEventListener("dragover", fileOver, false);
	file_drop_zone.addEventListener("dragleave", fileLeave, false);
	file_drop_zone.addEventListener("drop", overDrop, false);
	// КОНЕЦ DRAG AND DROP ФАЙЛА В ПОЛЕ ВВОДЕ СООБЩЕНИЯ


	// ПОПАП ИЗОБРАЖЕНИЙ
	function toggle(div_id) {
		var el = document.getElementById(div_id);

		if (el.style.display === 'none') {
			el.style.display = 'block';
		} else {
			el.style.display = 'none';
		}
	}
	function blanket_size(popUpDivVar) {
		if (typeof window.innerWidth != 'undefined') {
			viewportheight = window.innerHeight;
		} else {
			viewportheight = document.documentElement.clientHeight;
		}

		if (viewportheight > document.body.parentNode.scrollHeight && viewportheight > document.body.parentNode.clientHeight) {
			blanket_height = viewportheight;
		} else {
			if (document.body.parentNode.clientHeight > document.body.parentNode.scrollHeight) {
				blanket_height = document.body.parentNode.clientHeight;
			} else {
				blanket_height = document.body.parentNode.scrollHeight;
			}
		}

		var blanket = document.querySelectorAll('.popupContainer_bg')[0];
		blanket.style.height = blanket_height + 'px';
		var popUpDiv = document.getElementById(popUpDivVar);
		popUpDiv_height = blanket_height / 2 - 200;
	}

	function popup(windowname, img) {
		blanket_size(windowname);
		toggle('popupContainer_bg');
		toggle(windowname);
		var popupImg = document.createElement('img');
		popupImg.setAttribute('src', img.getAttribute('src'));
		popupImg.setAttribute('id', 'imgInPopup');
		document.getElementById('popupContent').appendChild(popupImg);

		var popUpDiv = document.getElementById(windowname);
	}

	function closePopup(windowname) {
		blanket_size(windowname);
		toggle('popupContainer_bg');
		toggle(windowname);
		if (document.getElementById('imgInPopup') != null) {
			document.getElementById('imgInPopup').remove();
		}
	}

	// ЗАКРЫТИЕ ПОПАПА ПРИ КЛИКЕ НА ФОН
	var blanket = document.querySelectorAll('.popupContainer_bg')[0];
	blanket.addEventListener('click', closePopup.bind('windowname', 'popupContent'));
	// КОНЕЦ ПОПАП ИЗОБРАЖЕНИЙ
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(27).default;


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__chat__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__connection__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__field__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__screenBroadcast__ = __webpack_require__(24);






/**
 * Base ChatixCore class.
 * Provides public interface to Chatix API. All you need is here
 *
 *
 * @property {Chat} chat Internal class that does all dirty work. **Please ignore this class because all Chatix public
 * methods are in this class**. We can't guarantee that structure and behavior will not change in future. Use stable
 * public API instead. Thank you!
 */
class ChatixCore {

    /**
	 * @constructor
     * @param {string} websiteId Website Unique identifier. You can see it in the dashboard.
	  * @param {function} onNewMessageReceived
     */

	  // onNewMessageReceived принимает массив со всеми отсортированными сообщениями
	  // receivedMessage принимает только новые сообщения. Используется для вызова колбэков
	constructor(websiteId, onNewMessageReceived, onManagerConnect, onManagerDisconnect, onChatInfo, customVisitorId, signalrConnected, getManagers, receivedMessage){
		// customVisitorId это ID визитора который можно передать напрямую из скрипта подключения ядра.
		// Если он явно не задан, тогда visitorID берется из localStorage
		this.customVisitorId = customVisitorId;
		this.chat = new __WEBPACK_IMPORTED_MODULE_0__chat__["a" /* default */](websiteId);
      const screenBroadcast = new __WEBPACK_IMPORTED_MODULE_3__screenBroadcast__["a" /* default */](this.chat);

		if (typeof(onNewMessageReceived) === 'function') {
			this.chat.onNewMessageReceived = onNewMessageReceived;
		} else {
			throw Error("onNewMessageReceived has to be function");
		}

		if (typeof(onManagerConnect) === 'function') {
			this.chat.onManagerConnect = onManagerConnect;
		} else {
			throw Error("onManagerConnect has to be function");
		}

		if (typeof(onManagerDisconnect) === 'function') {
			this.chat.onManagerDisconnect = onManagerDisconnect;
		} else {
			throw Error("onManagerDisconnect has to be function");
		}

		if (typeof(onChatInfo) === 'function') {
			this.chat.onChatInfo = onChatInfo;
		} else {
			throw Error("onChatInfo has to be function");
		}

		if (typeof(signalrConnected) === 'function') {
			this.chat.signalrConnected = signalrConnected;
		} else {
			throw Error("signalrConnected has to be function");
		}

		if (typeof(getManagers) === 'function') {
			this.chat.getManagers = getManagers;
		} else {
			throw Error("getManagers has to be function");
		}

		if (typeof(receivedMessage) === 'function') {
			this.chat.receivedMessage = receivedMessage;
		} else {
			throw Error("receivedMessage has to be function");
		}


      // функция парсинга UTM меток
		function getUtm(name){
			let utm = decodeURIComponent(location.search);
			utm = utm.substr(1).split('&');
			let objUtm = {};
			utm.forEach(function(item, i){
				let arrItem = item.split('=');
				objUtm[arrItem[0]] = arrItem[1];
			});

			return objUtm[name];
		}

		let date = new Date();
		let time_zone_offset = date.getTimezoneOffset();

		// установка полей визитора
		let visitorUpdate = {
			browser_language: window.navigator.languages[0],
			time_zone_offset: time_zone_offset
		};

		if (getUtm('utm_campaign') || getUtm('utm_content') || getUtm('utm_medium') || getUtm('utm_source') || getUtm('utm_term')) {
			visitorUpdate.utm_campaign = getUtm('utm_campaign');
			visitorUpdate.utm_content = getUtm('utm_content');
			visitorUpdate.utm_medium = getUtm('utm_medium');
			visitorUpdate.utm_source = getUtm('utm_source');
			visitorUpdate.utm_term = getUtm('utm_term');
		}

		this.setVisitor(visitorUpdate);
	}

	/**
	 * Starts connection.
	 * This method is **required** for launch connection.
	 * @return {Promise}
	 */
	start() {
        return this.chat.chatixStart(this.customVisitorId)
            .catch((err) => console.error(err))
	}

	/**
	* Sending text message in conversation
	* @param {string} messageText text to send in conversation
	*/
	sendTextMessage(messageText) {
		if (this.chat.connection.getConnectionState() !== __WEBPACK_IMPORTED_MODULE_1__connection__["a" /* default */].STATE_CONNECTED) {
			console.error(
				new Error("Connection did not established yet. Current state is: "
					+ this.chat.connection.getConnectionStateDescription())
			);
		} else {
			this.chat.sendTextMessage(messageText);
		}
	}

	sendFileMessage(file) {
		if (this.chat.connection.getConnectionState() !== __WEBPACK_IMPORTED_MODULE_1__connection__["a" /* default */].STATE_CONNECTED) {
			console.error(
				new Error("Connection did not established yet. Current state is: "
					+ this.chat.connection.getConnectionStateDescription())
			);
		} else {
			this.chat.sendFileMessage(file);
		}
	}

	getWebChatInfo(){
		// return this.chat.connection.getWebChatInfo();
		let thiss = this;

		let chatInfoOnterval = setInterval(function(){
			if (thiss.chat.connection) {
				if (thiss.chat.connection.getConnectionState() === __WEBPACK_IMPORTED_MODULE_1__connection__["a" /* default */].STATE_CONNECTED) {
					thiss.chat.connection.getWebChatInfo()
					clearInterval(chatInfoOnterval);
				}
			}
		}, 10);
	}

	visitorType(text){
		this.chat.connection.sendVisitorTypedText(text);
	}

	/**
	* Receiving visitor custom fields.
	* @see {Field}
	* @see {setField}
	* @return {Field[]} Current visitor custom fields, that were defined by your scripts and available for your
	* managers in dashboard
	*/
    getFields() {
        return this.chat.visitor.fields;
    }

	/**
	  * Getting current conversation messages
	  * @return {Message[]}
	  */
	getMessages() {
		return this.chat.messages;
	}

	getHistory(lastMess){
		this.chat.connection.getHistory(lastMess);
	}

	getManager(){
		return this.chat.managers[0];
	}

	setName(name){
		let thiss = this;

		delete this.chat.visitor.chat;
		// this.chat.visitor.name = name;

		// if (this.chat.connection == undefined) {
			let setNameInterval = setInterval(function(){
				if (thiss.chat.connection.getConnectionState() !== __WEBPACK_IMPORTED_MODULE_1__connection__["a" /* default */].STATE_CONNECTED) {
					console.error(
						new Error("Connection did not established yet. Current state is: "
							+ thiss.chat.connection.getConnectionStateDescription())
					);
				} else {
					thiss.chat.visitor.name = name;
					thiss.chat.connection.sendVisitorInfo(thiss.chat.visitor);
					clearInterval(setNameInterval);
				}
			}, 500);
		// }
		// else {
		// 	thiss.chat.connection.sendVisitorInfo(thiss.chat.visitor);
		// }
	}

	setEmail(email){
		let thiss = this;

		delete this.chat.visitor.chat;
		// this.chat.visitor.email = email;

		// if (this.chat.connection == undefined) {
			let setNameInterval = setInterval(function(){
				if (thiss.chat.connection.getConnectionState() !== __WEBPACK_IMPORTED_MODULE_1__connection__["a" /* default */].STATE_CONNECTED) {
					console.error(
						new Error("Connection did not established yet. Current state is: "
							+ thiss.chat.connection.getConnectionStateDescription())
					);
				} else {
					thiss.chat.visitor.email = email;
					thiss.chat.connection.sendVisitorInfo(thiss.chat.visitor);
					clearInterval(setNameInterval);
				}
			}, 500);
		// }
		// else {
		// 	thiss.chat.connection.sendVisitorInfo(thiss.chat.visitor);
		// }
	}

	setVisitor(visitor){
		let thiss = this;

		let setNameInterval = setInterval(function(){
			if (thiss.chat.connection.getConnectionState() !== __WEBPACK_IMPORTED_MODULE_1__connection__["a" /* default */].STATE_CONNECTED) {
				// console.error(
				// 	new Error("Connection did not established yet. Current state is: "
				// 		+ thiss.chat.connection.getConnectionStateDescription())
				// );
			} else {
				if (thiss.chat.visitor && visitor) {
					let updateVisitor = Object.assign(thiss.chat.visitor, visitor);
					thiss.chat.connection.sendVisitorInfo(updateVisitor);
				}

				// if (thiss.chat.visitor.name !== visitor.name || thiss.chat.visitor.email !== visitor.email || thiss.chat.visitor.fields !== visitor.fields) {
				// 	thiss.chat.visitor.name = visitor.name;
				// 	thiss.chat.visitor.email = visitor.email;
				// 	thiss.chat.visitor.fields = visitor.fields;
				// 	thiss.chat.connection.sendVisitorInfo(visitor);
				// }

				clearInterval(setNameInterval);
			}
		}, 500);
	}

	/**
	  * Getting current visitor details
	  * @return {Visitor}
	  */
	getVisitor() {
		return this.chat.visitor;
	}

	/**
	 * Getting current visitor custom fields
	 *
	 * @return {Field[]}
	 */
	getVisitorFields() {
		return this.getFields();
	}

    /**
	 * Getting current user online status
	 *
     * @returns {bool}
     */
	getVisitorIsOnline() {
		return this.chat.visitor.isOnline;
	}

    /**
     * Adding or updating visitor's custom field. To learn more info about what Field is, please read
     * docs about Field class
     * Method will add new field or update existing.
     * Field's name is identifier, visitor can have only 1 for 1 name.
     *
     *
     * @param {string} name Field name
     * @param {string|number} value Field value
     */
	setVisitorField(fields) {
		let thiss = this;
		// this.chat.connection.getVisitorInfo();
		fields.map(function(field, i){
			let fieldObj = new __WEBPACK_IMPORTED_MODULE_2__field__["a" /* default */](field.name, field.value);
			thiss.setField(fieldObj);
		});
	}

    /**
     * Adds or updates passed field to user set. Create {newField} using {Field} constructor
     * @see {setVisitorField} another implementation
     * @param {Field} newField Field you need to add or update
     */
	setField(newField) {
		let thiss = this;
		let interval = setInterval(function(){
			if (thiss.chat.visitor.fields) {
				clearInterval(interval);
				// проверяем филды, если с таким названием уже есть, то изменяем его, если нет, то пушим новыц
				let fieldPresent = thiss.chat.visitor.fields.find(field => field.name === newField.name);

				if (fieldPresent === undefined) {
					thiss.chat.visitor.fields.push(newField);
				}
				else {
					fieldPresent = thiss.chat.visitor.fields.indexOf(fieldPresent);
					thiss.chat.visitor.fields[fieldPresent].value =  newField.value;
				}

				thiss.chat.connection.sendVisitorInfo(thiss.chat.visitor);
			}
		}, 50);
	}

   sendBroadcastData(innerHTML, broadcastData){
      this.chat.sendBroadcastData(innerHTML, broadcastData)
   }

   sendBroadcastEvent(broadcastEvent){
      this.chat.sendBroadcastEvent(broadcastEvent)
   }
}

/* harmony default export */ __webpack_exports__["default"] = (ChatixCore);


/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__manager__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__message__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__visitor__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__connection__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__screenBroadcast__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_axios__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_axios__);







// const API_URL = process.env.API_URL + ':' + process.env.API_PORT + '/' + process.env.API_PATH;
const API_URL = 'https://app1.chatix.io:5003/v1';

/**
 * Chat class represents conversation between visitor and managers. This is main private class for all actions inside
 * library.
 * @property {Manager[]} managers people who are connected to current conversation in dashboard
 * @property {Visitor} visitor user who visits current page
 * @property {Connection} connection class provides protocol implementation
 */
class Chat {
    constructor(websiteId) {
        this.websiteId = websiteId;
        this.messages = [];
        this.managers = [];
    }

    /**
	 * Configures connection and call launch
	 ** @public
     * @returns {Promise}
     */
	chatixStart(customVisitorId){
		return this.applyVisitor()
			.then(() => this.startConnection(customVisitorId))
			.then(() => this.sendPage())
			.then(() => this.getHistory());
	}

    /**
	 * Find or request visitor UUID
	 * @return {*}
     */
     applyVisitor() {
           if (localStorage.getItem('chatix__visitorId') != null) {
              localStorage.removeItem('chatix__visitorId')
           }
           if (!this.visitor) {
               let storageValue = localStorage.getItem('chatix__visitorId_v1');
               if (storageValue) {
                   this.visitor = new __WEBPACK_IMPORTED_MODULE_2__visitor__["a" /* default */](this);
                   this.visitor.uuid = storageValue;
                   return Promise.resolve();
               } else {
                   return __WEBPACK_IMPORTED_MODULE_5_axios___default.a.get(API_URL + '/visitor/get-id?websiteId=' + this.websiteId)
                       .then((res) => {
                          if (localStorage.getItem('chatix__visitorId_v0')) {
                             localStorage.removeItem('chatix__visitorId_v0')
                          }
                           localStorage.setItem('chatix__visitorId_v1', res.data);
                           this.visitor = new __WEBPACK_IMPORTED_MODULE_2__visitor__["a" /* default */]();
                           this.visitor.uuid = res.data;
                       });
               }
           } else {
               return Promise.resolve();
           }
     }

     getVisitorId(){
        console.log('VISITOR ID');
     }


    /**
	 * Starts SignalR connection to server
	 * @returns {Promise}
     */
    startConnection(customVisitorId) {
		this.connection = new __WEBPACK_IMPORTED_MODULE_3__connection__["a" /* default */](this);
		return this.connection.start(customVisitorId);
	}

    /**
	 * Sends data to server about user navigation
	 * @returns {Promise}
     */
	sendPage(){
		let url = window.location.href;
		let title = null;
		let titleTag = document.getElementsByTagName("title")[0];
		if(titleTag) {
			title = titleTag.innerHTML;
		}
		return this.connection.sendPage(url, title);
	}

    /**
     * Sends request for current conversation messages
     *
     * @return {*|Promise.<*>}
     */
   getHistory() {
      return this.connection.getHistory();
   }

   addField(fields) {
      this.visitor.fields = fields;
   }


   setField(){
      // let visitor = new Visitor();
      // visitor.setField('name', 'NewName');
   }

   getManagerInfo(managerId){
      this.connection.getManagerInfo(managerId);
   }

	/**
	* Sends text message to current conversation
     *
	* @param {text} text new message text
	*/
	sendTextMessage(text){
		let message = __WEBPACK_IMPORTED_MODULE_1__message__["a" /* default */].buildText(text);
		this.connection.sendMessage(message);
	}

   uploadFile(file){
      const data = new FormData();
      data.append('formFile', file);

      // отправка файла на сервер
      __WEBPACK_IMPORTED_MODULE_5_axios___default.a.post(API_URL + '/file/save?visitorId=' + localStorage.getItem("chatix__visitorId_v1") + '&websiteId=' + this.websiteId, data)
      .then((res) => {
            if (file.type == 'image/jpeg' || file.type == 'image/png') {
               let message = __WEBPACK_IMPORTED_MODULE_1__message__["a" /* default */].buildImg(res.data);
               this.connection.sendMessage(message);
            }
            else {
               let message = __WEBPACK_IMPORTED_MODULE_1__message__["a" /* default */].buildFile(res.data);
               this.connection.sendMessage(message);
            }
         }
      )
      .catch(
         (err) => {
            console.log(err.response);
         }
      );
   }

	sendFileMessage(files){
      if (files.length) {
   		for (var i = 0; i < files.length; i++) {
   			let file = files[i];
            this.uploadFile(file);
   		}
      }
      else {
         this.uploadFile(files);
      }
	}/**
	* Protocol error handler. Trggered when {@link Connection} receives error message
     *
	* @param {string} method Метод с ошибкой
	* @param {string} message Текст ошибки
	*/
	receivedErrorMessage(method, message) {
      console.log(message);
      // console.error(new Error("(hubConnection) Ошибка в методе " + method + ": " + message));
   }

    /**
     * Receiving new messages in conversation
     *
     * @param {Message[]} data new messages array
     */
    receivedNewMessages(data) {
      function sortMessages(messages){
         return messages.sort(function(a, b){
            var a_date = new Date(a.sended_at);
            var b_date = new Date(b.sended_at);
            if (a_date < b_date) {
               return -1;
            }
            else if (a_date > b_date) {
               return 1;
            }
            else {
               return 0;
            }
         });
      }

      var allData = [];
      allData = allData.concat(this.messages, data);

      var sortMess = sortMessages(allData);

      this.messages = sortMess;

      // передаем в виджет массив со всеми отсортированными сообщениями
      this.onNewMessageReceived(sortMess);
      // передеаем в виджет только полученное сообщение для вызова колбэка
      this.receivedMessage(data);
   }

   receivedChatInfo(chatInfo){
      this.chatInfo = chatInfo;
      this.onChatInfo(chatInfo);
   }

   callbackSignalrConnected(data, newId){
      this.signalrConnected(data, newId);
   }

   callbackGetManagers(managers){
      this.getManagers(managers);
   }


    /**
     * Getter for current conversation visitor
     *
     * @return {Visitor|*}
     */
    getVisitor() {
        return this.visitor;
    }

    /**
     * Setter for current conversation visitor
     * @param {Visitor} visitor
     */
    setVisitor(visitor) {
        this.visitor = visitor;
    }

    /**
     * Sends updated visitor info to server
     *
     * @param {Visitor} visitor
     */
    sendVisitorInfo(visitor) {
        this.connection.sendVisitorInfo(visitor);
    }

    /**
     * Getter for current conversation managers
     *
     * @return {Manager[]|*}
     */
    getManagers() {
        return this.managers;
    }

    /**
     * Adds manager to conversation
     * @param {Manager} manager
     */
   addManager(manager) {
      this.managers.push(manager);
   }

    /**
     * Removes manager from connected
     * @param {Manager} manager
     */
    removeManager(manager) {
        if (this.managers.length === 0) {
            // throw new Error("No managers are connected. Cant remove manager from nothing.");
        }
        else {
         this.managers = this.managers.filter(function (item) {
            // return item.getUuid() !== manager.getUuid();
         });
        }
    }

   sendBroadcastData(innerHTML, broadcastData){
         this.connection.sendBroadcastData(innerHTML, broadcastData);
   }

   sendBroadcastEvent(broadcastEvent){
         this.connection.sendBroadcastEvent(broadcastEvent);
   }
}


/* harmony default export */ __webpack_exports__["a"] = (Chat);


/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
* Message class represents one message in conversation
* @property {int} type Type identifier for message. Possible values are: {@link Message#TYPE_TEXT}

*/
class Message {

}

/**
 * Message type for text messages.
 * @type {number}
 */
Message.TYPE_TEXT = 0;
Message.TYPE_IMG = 4;
Message.TYPE_FILE = 5;

/**
 * Static constructor for building text messages
 *
 * @param text
 * @return {Message}
 */
Message.buildText = (text) => {
	let message = new Message();
	message.type = Message.TYPE_TEXT;
	message.content = text;
	return message;
};

Message.buildImg = (imgUrl) => {
	let message = new Message();
	message.type = Message.TYPE_IMG;
	message.content = '';
	message.thumb_300_url = imgUrl.thumb300Url;
	message.thumb_100_url = imgUrl.thumb100Url;
	message.original_url = imgUrl.fileUrl;
	return message;
};

Message.buildFile = (fileUrl) => {
	let message = new Message();
	message.type = Message.TYPE_FILE;
	message.content = '';
	message.file_url = fileUrl.fileUrl
	return message;
};



/* harmony default export */ __webpack_exports__["a"] = (Message);


/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export VERSION */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Errors__ = __webpack_require__(5);
/* unused harmony reexport HttpError */
/* unused harmony reexport TimeoutError */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__HttpClient__ = __webpack_require__(13);
/* unused harmony reexport DefaultHttpClient */
/* unused harmony reexport HttpClient */
/* unused harmony reexport HttpResponse */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__HubConnection__ = __webpack_require__(14);
/* unused harmony reexport HubConnection */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__HubConnectionBuilder__ = __webpack_require__(32);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__HubConnectionBuilder__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__IHubProtocol__ = __webpack_require__(6);
/* unused harmony reexport MessageType */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ILogger__ = __webpack_require__(1);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_5__ILogger__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ITransport__ = __webpack_require__(3);
/* unused harmony reexport HttpTransportType */
/* unused harmony reexport TransferFormat */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Loggers__ = __webpack_require__(4);
/* unused harmony reexport NullLogger */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__JsonHubProtocol__ = __webpack_require__(16);
/* unused harmony reexport JsonHubProtocol */
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
// Version token that will be replaced by the prepack command
/** The version of the SignalR client. */
var VERSION = "1.0.4";









//# sourceMappingURL=index.js.map

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HandshakeProtocol; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__TextMessageFormat__ = __webpack_require__(15);
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

/** @private */
var HandshakeProtocol = /** @class */ (function () {
    function HandshakeProtocol() {
    }
    // Handshake request is always JSON
    HandshakeProtocol.prototype.writeHandshakeRequest = function (handshakeRequest) {
        return __WEBPACK_IMPORTED_MODULE_0__TextMessageFormat__["a" /* TextMessageFormat */].write(JSON.stringify(handshakeRequest));
    };
    HandshakeProtocol.prototype.parseHandshakeResponse = function (data) {
        var responseMessage;
        var messageData;
        var remainingData;
        if (data instanceof ArrayBuffer) {
            // Format is binary but still need to read JSON text from handshake response
            var binaryData = new Uint8Array(data);
            var separatorIndex = binaryData.indexOf(__WEBPACK_IMPORTED_MODULE_0__TextMessageFormat__["a" /* TextMessageFormat */].RecordSeparatorCode);
            if (separatorIndex === -1) {
                throw new Error("Message is incomplete.");
            }
            // content before separator is handshake response
            // optional content after is additional messages
            var responseLength = separatorIndex + 1;
            messageData = String.fromCharCode.apply(null, binaryData.slice(0, responseLength));
            remainingData = (binaryData.byteLength > responseLength) ? binaryData.slice(responseLength).buffer : null;
        }
        else {
            var textData = data;
            var separatorIndex = textData.indexOf(__WEBPACK_IMPORTED_MODULE_0__TextMessageFormat__["a" /* TextMessageFormat */].RecordSeparator);
            if (separatorIndex === -1) {
                throw new Error("Message is incomplete.");
            }
            // content before separator is handshake response
            // optional content after is additional messages
            var responseLength = separatorIndex + 1;
            messageData = textData.substring(0, responseLength);
            remainingData = (textData.length > responseLength) ? textData.substring(responseLength) : null;
        }
        // At this point we should have just the single handshake message
        var messages = __WEBPACK_IMPORTED_MODULE_0__TextMessageFormat__["a" /* TextMessageFormat */].parse(messageData);
        responseMessage = JSON.parse(messages[0]);
        // multiple messages could have arrived with handshake
        // return additional data to be parsed as usual, or null if all parsed
        return [remainingData, responseMessage];
    };
    return HandshakeProtocol;
}());

//# sourceMappingURL=HandshakeProtocol.js.map

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HubConnectionBuilder; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__HttpConnection__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__HubConnection__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__JsonHubProtocol__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Loggers__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Utils__ = __webpack_require__(2);
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.





/** A builder for configuring {@link @aspnet/signalr.HubConnection} instances. */
var HubConnectionBuilder = /** @class */ (function () {
    function HubConnectionBuilder() {
    }
    HubConnectionBuilder.prototype.configureLogging = function (logging) {
        __WEBPACK_IMPORTED_MODULE_4__Utils__["a" /* Arg */].isRequired(logging, "logging");
        if (isLogger(logging)) {
            this.logger = logging;
        }
        else {
            this.logger = new __WEBPACK_IMPORTED_MODULE_4__Utils__["b" /* ConsoleLogger */](logging);
        }
        return this;
    };
    HubConnectionBuilder.prototype.withUrl = function (url, transportTypeOrOptions) {
        __WEBPACK_IMPORTED_MODULE_4__Utils__["a" /* Arg */].isRequired(url, "url");
        this.url = url;
        // Flow-typing knows where it's at. Since HttpTransportType is a number and IHttpConnectionOptions is guaranteed
        // to be an object, we know (as does TypeScript) this comparison is all we need to figure out which overload was called.
        if (typeof transportTypeOrOptions === "object") {
            this.httpConnectionOptions = transportTypeOrOptions;
        }
        else {
            this.httpConnectionOptions = {
                transport: transportTypeOrOptions,
            };
        }
        return this;
    };
    /** Configures the {@link @aspnet/signalr.HubConnection} to use the specified Hub Protocol.
     *
     * @param {IHubProtocol} protocol The {@link @aspnet/signalr.IHubProtocol} implementation to use.
     */
    HubConnectionBuilder.prototype.withHubProtocol = function (protocol) {
        __WEBPACK_IMPORTED_MODULE_4__Utils__["a" /* Arg */].isRequired(protocol, "protocol");
        this.protocol = protocol;
        return this;
    };
    /** Creates a {@link @aspnet/signalr.HubConnection} from the configuration options specified in this builder.
     *
     * @returns {HubConnection} The configured {@link @aspnet/signalr.HubConnection}.
     */
    HubConnectionBuilder.prototype.build = function () {
        // If httpConnectionOptions has a logger, use it. Otherwise, override it with the one
        // provided to configureLogger
        var httpConnectionOptions = this.httpConnectionOptions || {};
        // If it's 'null', the user **explicitly** asked for null, don't mess with it.
        if (httpConnectionOptions.logger === undefined) {
            // If our logger is undefined or null, that's OK, the HttpConnection constructor will handle it.
            httpConnectionOptions.logger = this.logger;
        }
        // Now create the connection
        if (!this.url) {
            throw new Error("The 'HubConnectionBuilder.withUrl' method must be called before building the connection.");
        }
        var connection = new __WEBPACK_IMPORTED_MODULE_0__HttpConnection__["a" /* HttpConnection */](this.url, httpConnectionOptions);
        return __WEBPACK_IMPORTED_MODULE_1__HubConnection__["a" /* HubConnection */].create(connection, this.logger || __WEBPACK_IMPORTED_MODULE_3__Loggers__["a" /* NullLogger */].instance, this.protocol || new __WEBPACK_IMPORTED_MODULE_2__JsonHubProtocol__["a" /* JsonHubProtocol */]());
    };
    return HubConnectionBuilder;
}());

function isLogger(logger) {
    return logger.log !== undefined;
}
//# sourceMappingURL=HubConnectionBuilder.js.map

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpConnection; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__HttpClient__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ILogger__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ITransport__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__LongPollingTransport__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ServerSentEventsTransport__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Utils__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__WebSocketTransport__ = __webpack_require__(37);
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var MAX_REDIRECTS = 100;
/** @private */
var HttpConnection = /** @class */ (function () {
    function HttpConnection(url, options) {
        if (options === void 0) { options = {}; }
        this.features = {};
        __WEBPACK_IMPORTED_MODULE_5__Utils__["a" /* Arg */].isRequired(url, "url");
        this.logger = Object(__WEBPACK_IMPORTED_MODULE_5__Utils__["d" /* createLogger */])(options.logger);
        this.baseUrl = this.resolveUrl(url);
        options = options || {};
        options.accessTokenFactory = options.accessTokenFactory || (function () { return null; });
        options.logMessageContent = options.logMessageContent || false;
        this.httpClient = options.httpClient || new __WEBPACK_IMPORTED_MODULE_0__HttpClient__["a" /* DefaultHttpClient */](this.logger);
        this.connectionState = 2 /* Disconnected */;
        this.options = options;
    }
    HttpConnection.prototype.start = function (transferFormat) {
        transferFormat = transferFormat || __WEBPACK_IMPORTED_MODULE_2__ITransport__["b" /* TransferFormat */].Binary;
        __WEBPACK_IMPORTED_MODULE_5__Utils__["a" /* Arg */].isIn(transferFormat, __WEBPACK_IMPORTED_MODULE_2__ITransport__["b" /* TransferFormat */], "transferFormat");
        this.logger.log(__WEBPACK_IMPORTED_MODULE_1__ILogger__["a" /* LogLevel */].Debug, "Starting connection with transfer format '" + __WEBPACK_IMPORTED_MODULE_2__ITransport__["b" /* TransferFormat */][transferFormat] + "'.");
        if (this.connectionState !== 2 /* Disconnected */) {
            return Promise.reject(new Error("Cannot start a connection that is not in the 'Disconnected' state."));
        }
        this.connectionState = 0 /* Connecting */;
        this.startPromise = this.startInternal(transferFormat);
        return this.startPromise;
    };
    HttpConnection.prototype.send = function (data) {
        if (this.connectionState !== 1 /* Connected */) {
            throw new Error("Cannot send data if the connection is not in the 'Connected' State.");
        }
        return this.transport.send(data);
    };
    HttpConnection.prototype.stop = function (error) {
        return __awaiter(this, void 0, void 0, function () {
            var e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.connectionState = 2 /* Disconnected */;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.startPromise];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        return [3 /*break*/, 4];
                    case 4:
                        if (!this.transport) return [3 /*break*/, 6];
                        this.stopError = error;
                        return [4 /*yield*/, this.transport.stop()];
                    case 5:
                        _a.sent();
                        this.transport = null;
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    HttpConnection.prototype.startInternal = function (transferFormat) {
        return __awaiter(this, void 0, void 0, function () {
            var url, negotiateResponse, redirects, _loop_1, this_1, state_1, e_2;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = this.baseUrl;
                        this.accessTokenFactory = this.options.accessTokenFactory;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 12, , 13]);
                        if (!this.options.skipNegotiation) return [3 /*break*/, 5];
                        if (!(this.options.transport === __WEBPACK_IMPORTED_MODULE_2__ITransport__["a" /* HttpTransportType */].WebSockets)) return [3 /*break*/, 3];
                        // No need to add a connection ID in this case
                        this.transport = this.constructTransport(__WEBPACK_IMPORTED_MODULE_2__ITransport__["a" /* HttpTransportType */].WebSockets);
                        // We should just call connect directly in this case.
                        // No fallback or negotiate in this case.
                        return [4 /*yield*/, this.transport.connect(url, transferFormat)];
                    case 2:
                        // We should just call connect directly in this case.
                        // No fallback or negotiate in this case.
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3: throw Error("Negotiation can only be skipped when using the WebSocket transport directly.");
                    case 4: return [3 /*break*/, 11];
                    case 5:
                        negotiateResponse = null;
                        redirects = 0;
                        _loop_1 = function () {
                            var accessToken_1;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this_1.getNegotiationResponse(url)];
                                    case 1:
                                        negotiateResponse = _a.sent();
                                        // the user tries to stop the connection when it is being started
                                        if (this_1.connectionState === 2 /* Disconnected */) {
                                            return [2 /*return*/, { value: void 0 }];
                                        }
                                        if (negotiateResponse.url) {
                                            url = negotiateResponse.url;
                                        }
                                        if (negotiateResponse.accessToken) {
                                            accessToken_1 = negotiateResponse.accessToken;
                                            this_1.accessTokenFactory = function () { return accessToken_1; };
                                        }
                                        redirects++;
                                        return [2 /*return*/];
                                }
                            });
                        };
                        this_1 = this;
                        _a.label = 6;
                    case 6: return [5 /*yield**/, _loop_1()];
                    case 7:
                        state_1 = _a.sent();
                        if (typeof state_1 === "object")
                            return [2 /*return*/, state_1.value];
                        _a.label = 8;
                    case 8:
                        if (negotiateResponse.url && redirects < MAX_REDIRECTS) return [3 /*break*/, 6];
                        _a.label = 9;
                    case 9:
                        if (redirects === MAX_REDIRECTS && negotiateResponse.url) {
                            throw Error("Negotiate redirection limit exceeded.");
                        }
                        return [4 /*yield*/, this.createTransport(url, this.options.transport, negotiateResponse, transferFormat)];
                    case 10:
                        _a.sent();
                        _a.label = 11;
                    case 11:
                        if (this.transport instanceof __WEBPACK_IMPORTED_MODULE_3__LongPollingTransport__["a" /* LongPollingTransport */]) {
                            this.features.inherentKeepAlive = true;
                        }
                        this.transport.onreceive = this.onreceive;
                        this.transport.onclose = function (e) { return _this.stopConnection(e); };
                        // only change the state if we were connecting to not overwrite
                        // the state if the connection is already marked as Disconnected
                        this.changeState(0 /* Connecting */, 1 /* Connected */);
                        return [3 /*break*/, 13];
                    case 12:
                        e_2 = _a.sent();
                        this.logger.log(__WEBPACK_IMPORTED_MODULE_1__ILogger__["a" /* LogLevel */].Error, "Failed to start the connection: " + e_2);
                        this.connectionState = 2 /* Disconnected */;
                        this.transport = null;
                        throw e_2;
                    case 13: return [2 /*return*/];
                }
            });
        });
    };
    HttpConnection.prototype.getNegotiationResponse = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, token, headers, negotiateUrl, response, e_3;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.accessTokenFactory()];
                    case 1:
                        token = _b.sent();
                        if (token) {
                            headers = (_a = {},
                                _a["Authorization"] = "Bearer " + token,
                                _a);
                        }
                        negotiateUrl = this.resolveNegotiateUrl(url);
                        this.logger.log(__WEBPACK_IMPORTED_MODULE_1__ILogger__["a" /* LogLevel */].Debug, "Sending negotiation request: " + negotiateUrl);
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, this.httpClient.post(negotiateUrl, {
                                content: "",
                                headers: headers,
                            })];
                    case 3:
                        response = _b.sent();
                        if (response.statusCode !== 200) {
                            throw Error("Unexpected status code returned from negotiate " + response.statusCode);
                        }
                        return [2 /*return*/, JSON.parse(response.content)];
                    case 4:
                        e_3 = _b.sent();
                        this.logger.log(__WEBPACK_IMPORTED_MODULE_1__ILogger__["a" /* LogLevel */].Error, "Failed to complete negotiation with the server: " + e_3);
                        throw e_3;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    HttpConnection.prototype.createConnectUrl = function (url, connectionId) {
        return url + (url.indexOf("?") === -1 ? "?" : "&") + ("id=" + connectionId);
    };
    HttpConnection.prototype.createTransport = function (url, requestedTransport, negotiateResponse, requestedTransferFormat) {
        return __awaiter(this, void 0, void 0, function () {
            var connectUrl, transports, _i, transports_1, endpoint, transport, ex_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        connectUrl = this.createConnectUrl(url, negotiateResponse.connectionId);
                        if (!this.isITransport(requestedTransport)) return [3 /*break*/, 2];
                        this.logger.log(__WEBPACK_IMPORTED_MODULE_1__ILogger__["a" /* LogLevel */].Debug, "Connection was provided an instance of ITransport, using that directly.");
                        this.transport = requestedTransport;
                        return [4 /*yield*/, this.transport.connect(connectUrl, requestedTransferFormat)];
                    case 1:
                        _a.sent();
                        // only change the state if we were connecting to not overwrite
                        // the state if the connection is already marked as Disconnected
                        this.changeState(0 /* Connecting */, 1 /* Connected */);
                        return [2 /*return*/];
                    case 2:
                        transports = negotiateResponse.availableTransports;
                        _i = 0, transports_1 = transports;
                        _a.label = 3;
                    case 3:
                        if (!(_i < transports_1.length)) return [3 /*break*/, 9];
                        endpoint = transports_1[_i];
                        this.connectionState = 0 /* Connecting */;
                        transport = this.resolveTransport(endpoint, requestedTransport, requestedTransferFormat);
                        if (!(typeof transport === "number")) return [3 /*break*/, 8];
                        this.transport = this.constructTransport(transport);
                        if (!(negotiateResponse.connectionId === null)) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.getNegotiationResponse(url)];
                    case 4:
                        negotiateResponse = _a.sent();
                        connectUrl = this.createConnectUrl(url, negotiateResponse.connectionId);
                        _a.label = 5;
                    case 5:
                        _a.trys.push([5, 7, , 8]);
                        return [4 /*yield*/, this.transport.connect(connectUrl, requestedTransferFormat)];
                    case 6:
                        _a.sent();
                        this.changeState(0 /* Connecting */, 1 /* Connected */);
                        return [2 /*return*/];
                    case 7:
                        ex_1 = _a.sent();
                        this.logger.log(__WEBPACK_IMPORTED_MODULE_1__ILogger__["a" /* LogLevel */].Error, "Failed to start the transport '" + __WEBPACK_IMPORTED_MODULE_2__ITransport__["a" /* HttpTransportType */][transport] + "': " + ex_1);
                        this.connectionState = 2 /* Disconnected */;
                        negotiateResponse.connectionId = null;
                        return [3 /*break*/, 8];
                    case 8:
                        _i++;
                        return [3 /*break*/, 3];
                    case 9: throw new Error("Unable to initialize any of the available transports.");
                }
            });
        });
    };
    HttpConnection.prototype.constructTransport = function (transport) {
        switch (transport) {
            case __WEBPACK_IMPORTED_MODULE_2__ITransport__["a" /* HttpTransportType */].WebSockets:
                return new __WEBPACK_IMPORTED_MODULE_6__WebSocketTransport__["a" /* WebSocketTransport */](this.accessTokenFactory, this.logger, this.options.logMessageContent);
            case __WEBPACK_IMPORTED_MODULE_2__ITransport__["a" /* HttpTransportType */].ServerSentEvents:
                return new __WEBPACK_IMPORTED_MODULE_4__ServerSentEventsTransport__["a" /* ServerSentEventsTransport */](this.httpClient, this.accessTokenFactory, this.logger, this.options.logMessageContent);
            case __WEBPACK_IMPORTED_MODULE_2__ITransport__["a" /* HttpTransportType */].LongPolling:
                return new __WEBPACK_IMPORTED_MODULE_3__LongPollingTransport__["a" /* LongPollingTransport */](this.httpClient, this.accessTokenFactory, this.logger, this.options.logMessageContent);
            default:
                throw new Error("Unknown transport: " + transport + ".");
        }
    };
    HttpConnection.prototype.resolveTransport = function (endpoint, requestedTransport, requestedTransferFormat) {
        var transport = __WEBPACK_IMPORTED_MODULE_2__ITransport__["a" /* HttpTransportType */][endpoint.transport];
        if (transport === null || transport === undefined) {
            this.logger.log(__WEBPACK_IMPORTED_MODULE_1__ILogger__["a" /* LogLevel */].Debug, "Skipping transport '" + endpoint.transport + "' because it is not supported by this client.");
        }
        else {
            var transferFormats = endpoint.transferFormats.map(function (s) { return __WEBPACK_IMPORTED_MODULE_2__ITransport__["b" /* TransferFormat */][s]; });
            if (transportMatches(requestedTransport, transport)) {
                if (transferFormats.indexOf(requestedTransferFormat) >= 0) {
                    if ((transport === __WEBPACK_IMPORTED_MODULE_2__ITransport__["a" /* HttpTransportType */].WebSockets && typeof WebSocket === "undefined") ||
                        (transport === __WEBPACK_IMPORTED_MODULE_2__ITransport__["a" /* HttpTransportType */].ServerSentEvents && typeof EventSource === "undefined")) {
                        this.logger.log(__WEBPACK_IMPORTED_MODULE_1__ILogger__["a" /* LogLevel */].Debug, "Skipping transport '" + __WEBPACK_IMPORTED_MODULE_2__ITransport__["a" /* HttpTransportType */][transport] + "' because it is not supported in your environment.'");
                    }
                    else {
                        this.logger.log(__WEBPACK_IMPORTED_MODULE_1__ILogger__["a" /* LogLevel */].Debug, "Selecting transport '" + __WEBPACK_IMPORTED_MODULE_2__ITransport__["a" /* HttpTransportType */][transport] + "'");
                        return transport;
                    }
                }
                else {
                    this.logger.log(__WEBPACK_IMPORTED_MODULE_1__ILogger__["a" /* LogLevel */].Debug, "Skipping transport '" + __WEBPACK_IMPORTED_MODULE_2__ITransport__["a" /* HttpTransportType */][transport] + "' because it does not support the requested transfer format '" + __WEBPACK_IMPORTED_MODULE_2__ITransport__["b" /* TransferFormat */][requestedTransferFormat] + "'.");
                }
            }
            else {
                this.logger.log(__WEBPACK_IMPORTED_MODULE_1__ILogger__["a" /* LogLevel */].Debug, "Skipping transport '" + __WEBPACK_IMPORTED_MODULE_2__ITransport__["a" /* HttpTransportType */][transport] + "' because it was disabled by the client.");
            }
        }
        return null;
    };
    HttpConnection.prototype.isITransport = function (transport) {
        return transport && typeof (transport) === "object" && "connect" in transport;
    };
    HttpConnection.prototype.changeState = function (from, to) {
        if (this.connectionState === from) {
            this.connectionState = to;
            return true;
        }
        return false;
    };
    HttpConnection.prototype.stopConnection = function (error) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.transport = null;
                // If we have a stopError, it takes precedence over the error from the transport
                error = this.stopError || error;
                if (error) {
                    this.logger.log(__WEBPACK_IMPORTED_MODULE_1__ILogger__["a" /* LogLevel */].Error, "Connection disconnected with error '" + error + "'.");
                }
                else {
                    this.logger.log(__WEBPACK_IMPORTED_MODULE_1__ILogger__["a" /* LogLevel */].Information, "Connection disconnected.");
                }
                this.connectionState = 2 /* Disconnected */;
                if (this.onclose) {
                    this.onclose(error);
                }
                return [2 /*return*/];
            });
        });
    };
    HttpConnection.prototype.resolveUrl = function (url) {
        // startsWith is not supported in IE
        if (url.lastIndexOf("https://", 0) === 0 || url.lastIndexOf("http://", 0) === 0) {
            return url;
        }
        if (typeof window === "undefined" || !window || !window.document) {
            throw new Error("Cannot resolve '" + url + "'.");
        }
        // Setting the url to the href propery of an anchor tag handles normalization
        // for us. There are 3 main cases.
        // 1. Relative  path normalization e.g "b" -> "http://localhost:5000/a/b"
        // 2. Absolute path normalization e.g "/a/b" -> "http://localhost:5000/a/b"
        // 3. Networkpath reference normalization e.g "//localhost:5000/a/b" -> "http://localhost:5000/a/b"
        var aTag = window.document.createElement("a");
        aTag.href = url;
        this.logger.log(__WEBPACK_IMPORTED_MODULE_1__ILogger__["a" /* LogLevel */].Information, "Normalizing '" + url + "' to '" + aTag.href + "'.");
        return aTag.href;
    };
    HttpConnection.prototype.resolveNegotiateUrl = function (url) {
        var index = url.indexOf("?");
        var negotiateUrl = url.substring(0, index === -1 ? url.length : index);
        if (negotiateUrl[negotiateUrl.length - 1] !== "/") {
            negotiateUrl += "/";
        }
        negotiateUrl += "negotiate";
        negotiateUrl += index === -1 ? "" : url.substring(index);
        return negotiateUrl;
    };
    return HttpConnection;
}());

function transportMatches(requestedTransport, actualTransport) {
    return !requestedTransport || ((actualTransport & requestedTransport) !== 0);
}
//# sourceMappingURL=HttpConnection.js.map

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LongPollingTransport; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AbortController__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Errors__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ILogger__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ITransport__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Utils__ = __webpack_require__(2);
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var SHUTDOWN_TIMEOUT = 5 * 1000;
// Not exported from 'index', this type is internal.
/** @private */
var LongPollingTransport = /** @class */ (function () {
    function LongPollingTransport(httpClient, accessTokenFactory, logger, logMessageContent, shutdownTimeout) {
        this.httpClient = httpClient;
        this.accessTokenFactory = accessTokenFactory || (function () { return null; });
        this.logger = logger;
        this.pollAbort = new __WEBPACK_IMPORTED_MODULE_0__AbortController__["a" /* AbortController */]();
        this.logMessageContent = logMessageContent;
        this.shutdownTimeout = shutdownTimeout || SHUTDOWN_TIMEOUT;
    }
    Object.defineProperty(LongPollingTransport.prototype, "pollAborted", {
        // This is an internal type, not exported from 'index' so this is really just internal.
        get: function () {
            return this.pollAbort.aborted;
        },
        enumerable: true,
        configurable: true
    });
    LongPollingTransport.prototype.connect = function (url, transferFormat) {
        return __awaiter(this, void 0, void 0, function () {
            var pollOptions, token, closeError, pollUrl, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        __WEBPACK_IMPORTED_MODULE_4__Utils__["a" /* Arg */].isRequired(url, "url");
                        __WEBPACK_IMPORTED_MODULE_4__Utils__["a" /* Arg */].isRequired(transferFormat, "transferFormat");
                        __WEBPACK_IMPORTED_MODULE_4__Utils__["a" /* Arg */].isIn(transferFormat, __WEBPACK_IMPORTED_MODULE_3__ITransport__["b" /* TransferFormat */], "transferFormat");
                        this.url = url;
                        this.logger.log(__WEBPACK_IMPORTED_MODULE_2__ILogger__["a" /* LogLevel */].Trace, "(LongPolling transport) Connecting");
                        if (transferFormat === __WEBPACK_IMPORTED_MODULE_3__ITransport__["b" /* TransferFormat */].Binary && (typeof new XMLHttpRequest().responseType !== "string")) {
                            // This will work if we fix: https://github.com/aspnet/SignalR/issues/742
                            throw new Error("Binary protocols over XmlHttpRequest not implementing advanced features are not supported.");
                        }
                        pollOptions = {
                            abortSignal: this.pollAbort.signal,
                            headers: {},
                            timeout: 90000,
                        };
                        if (transferFormat === __WEBPACK_IMPORTED_MODULE_3__ITransport__["b" /* TransferFormat */].Binary) {
                            pollOptions.responseType = "arraybuffer";
                        }
                        return [4 /*yield*/, this.accessTokenFactory()];
                    case 1:
                        token = _a.sent();
                        this.updateHeaderToken(pollOptions, token);
                        pollUrl = url + "&_=" + Date.now();
                        this.logger.log(__WEBPACK_IMPORTED_MODULE_2__ILogger__["a" /* LogLevel */].Trace, "(LongPolling transport) polling: " + pollUrl);
                        return [4 /*yield*/, this.httpClient.get(pollUrl, pollOptions)];
                    case 2:
                        response = _a.sent();
                        if (response.statusCode !== 200) {
                            this.logger.log(__WEBPACK_IMPORTED_MODULE_2__ILogger__["a" /* LogLevel */].Error, "(LongPolling transport) Unexpected response code: " + response.statusCode);
                            // Mark running as false so that the poll immediately ends and runs the close logic
                            closeError = new __WEBPACK_IMPORTED_MODULE_1__Errors__["a" /* HttpError */](response.statusText, response.statusCode);
                            this.running = false;
                        }
                        else {
                            this.running = true;
                        }
                        // tslint:disable-next-line:no-floating-promises
                        this.poll(this.url, pollOptions, closeError);
                        return [2 /*return*/, Promise.resolve()];
                }
            });
        });
    };
    LongPollingTransport.prototype.updateHeaderToken = function (request, token) {
        if (token) {
            // tslint:disable-next-line:no-string-literal
            request.headers["Authorization"] = "Bearer " + token;
            return;
        }
        // tslint:disable-next-line:no-string-literal
        if (request.headers["Authorization"]) {
            // tslint:disable-next-line:no-string-literal
            delete request.headers["Authorization"];
        }
    };
    LongPollingTransport.prototype.poll = function (url, pollOptions, closeError) {
        return __awaiter(this, void 0, void 0, function () {
            var token, pollUrl, response, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, , 8, 9]);
                        _a.label = 1;
                    case 1:
                        if (!this.running) return [3 /*break*/, 7];
                        return [4 /*yield*/, this.accessTokenFactory()];
                    case 2:
                        token = _a.sent();
                        this.updateHeaderToken(pollOptions, token);
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 5, , 6]);
                        pollUrl = url + "&_=" + Date.now();
                        this.logger.log(__WEBPACK_IMPORTED_MODULE_2__ILogger__["a" /* LogLevel */].Trace, "(LongPolling transport) polling: " + pollUrl);
                        return [4 /*yield*/, this.httpClient.get(pollUrl, pollOptions)];
                    case 4:
                        response = _a.sent();
                        if (response.statusCode === 204) {
                            this.logger.log(__WEBPACK_IMPORTED_MODULE_2__ILogger__["a" /* LogLevel */].Information, "(LongPolling transport) Poll terminated by server");
                            this.running = false;
                        }
                        else if (response.statusCode !== 200) {
                            this.logger.log(__WEBPACK_IMPORTED_MODULE_2__ILogger__["a" /* LogLevel */].Error, "(LongPolling transport) Unexpected response code: " + response.statusCode);
                            // Unexpected status code
                            closeError = new __WEBPACK_IMPORTED_MODULE_1__Errors__["a" /* HttpError */](response.statusText, response.statusCode);
                            this.running = false;
                        }
                        else {
                            // Process the response
                            if (response.content) {
                                this.logger.log(__WEBPACK_IMPORTED_MODULE_2__ILogger__["a" /* LogLevel */].Trace, "(LongPolling transport) data received. " + Object(__WEBPACK_IMPORTED_MODULE_4__Utils__["e" /* getDataDetail */])(response.content, this.logMessageContent));
                                if (this.onreceive) {
                                    this.onreceive(response.content);
                                }
                            }
                            else {
                                // This is another way timeout manifest.
                                this.logger.log(__WEBPACK_IMPORTED_MODULE_2__ILogger__["a" /* LogLevel */].Trace, "(LongPolling transport) Poll timed out, reissuing.");
                            }
                        }
                        return [3 /*break*/, 6];
                    case 5:
                        e_1 = _a.sent();
                        if (!this.running) {
                            // Log but disregard errors that occur after we were stopped by DELETE
                            this.logger.log(__WEBPACK_IMPORTED_MODULE_2__ILogger__["a" /* LogLevel */].Trace, "(LongPolling transport) Poll errored after shutdown: " + e_1.message);
                        }
                        else {
                            if (e_1 instanceof __WEBPACK_IMPORTED_MODULE_1__Errors__["b" /* TimeoutError */]) {
                                // Ignore timeouts and reissue the poll.
                                this.logger.log(__WEBPACK_IMPORTED_MODULE_2__ILogger__["a" /* LogLevel */].Trace, "(LongPolling transport) Poll timed out, reissuing.");
                            }
                            else {
                                // Close the connection with the error as the result.
                                closeError = e_1;
                                this.running = false;
                            }
                        }
                        return [3 /*break*/, 6];
                    case 6: return [3 /*break*/, 1];
                    case 7: return [3 /*break*/, 9];
                    case 8:
                        // Indicate that we've stopped so the shutdown timer doesn't get registered.
                        this.stopped = true;
                        // Clean up the shutdown timer if it was registered
                        if (this.shutdownTimer) {
                            clearTimeout(this.shutdownTimer);
                        }
                        // Fire our onclosed event
                        if (this.onclose) {
                            this.logger.log(__WEBPACK_IMPORTED_MODULE_2__ILogger__["a" /* LogLevel */].Trace, "(LongPolling transport) Firing onclose event. Error: " + (closeError || "<undefined>"));
                            this.onclose(closeError);
                        }
                        this.logger.log(__WEBPACK_IMPORTED_MODULE_2__ILogger__["a" /* LogLevel */].Trace, "(LongPolling transport) Transport finished.");
                        return [7 /*endfinally*/];
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    LongPollingTransport.prototype.send = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (!this.running) {
                    return [2 /*return*/, Promise.reject(new Error("Cannot send until the transport is connected"))];
                }
                return [2 /*return*/, Object(__WEBPACK_IMPORTED_MODULE_4__Utils__["f" /* sendMessage */])(this.logger, "LongPolling", this.httpClient, this.url, this.accessTokenFactory, data, this.logMessageContent)];
            });
        });
    };
    LongPollingTransport.prototype.stop = function () {
        return __awaiter(this, void 0, void 0, function () {
            var deleteOptions, token;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, , 3, 4]);
                        this.running = false;
                        this.logger.log(__WEBPACK_IMPORTED_MODULE_2__ILogger__["a" /* LogLevel */].Trace, "(LongPolling transport) sending DELETE request to " + this.url + ".");
                        deleteOptions = {
                            headers: {},
                        };
                        return [4 /*yield*/, this.accessTokenFactory()];
                    case 1:
                        token = _a.sent();
                        this.updateHeaderToken(deleteOptions, token);
                        return [4 /*yield*/, this.httpClient.delete(this.url, deleteOptions)];
                    case 2:
                        _a.sent();
                        this.logger.log(__WEBPACK_IMPORTED_MODULE_2__ILogger__["a" /* LogLevel */].Trace, "(LongPolling transport) DELETE request accepted.");
                        return [3 /*break*/, 4];
                    case 3:
                        // Abort the poll after the shutdown timeout if the server doesn't stop the poll.
                        if (!this.stopped) {
                            this.shutdownTimer = setTimeout(function () {
                                _this.logger.log(__WEBPACK_IMPORTED_MODULE_2__ILogger__["a" /* LogLevel */].Warning, "(LongPolling transport) server did not terminate after DELETE request, canceling poll.");
                                // Abort any outstanding poll
                                _this.pollAbort.abort();
                            }, this.shutdownTimeout);
                        }
                        return [7 /*endfinally*/];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return LongPollingTransport;
}());

//# sourceMappingURL=LongPollingTransport.js.map

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbortController; });
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
// Rough polyfill of https://developer.mozilla.org/en-US/docs/Web/API/AbortController
// We don't actually ever use the API being polyfilled, we always use the polyfill because
// it's a very new API right now.
// Not exported from index.
/** @private */
var AbortController = /** @class */ (function () {
    function AbortController() {
        this.isAborted = false;
    }
    AbortController.prototype.abort = function () {
        if (!this.isAborted) {
            this.isAborted = true;
            if (this.onabort) {
                this.onabort();
            }
        }
    };
    Object.defineProperty(AbortController.prototype, "signal", {
        get: function () {
            return this;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbortController.prototype, "aborted", {
        get: function () {
            return this.isAborted;
        },
        enumerable: true,
        configurable: true
    });
    return AbortController;
}());

//# sourceMappingURL=AbortController.js.map

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServerSentEventsTransport; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ILogger__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ITransport__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Utils__ = __webpack_require__(2);
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



/** @private */
var ServerSentEventsTransport = /** @class */ (function () {
    function ServerSentEventsTransport(httpClient, accessTokenFactory, logger, logMessageContent) {
        this.httpClient = httpClient;
        this.accessTokenFactory = accessTokenFactory || (function () { return null; });
        this.logger = logger;
        this.logMessageContent = logMessageContent;
    }
    ServerSentEventsTransport.prototype.connect = function (url, transferFormat) {
        return __awaiter(this, void 0, void 0, function () {
            var token;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        __WEBPACK_IMPORTED_MODULE_2__Utils__["a" /* Arg */].isRequired(url, "url");
                        __WEBPACK_IMPORTED_MODULE_2__Utils__["a" /* Arg */].isRequired(transferFormat, "transferFormat");
                        __WEBPACK_IMPORTED_MODULE_2__Utils__["a" /* Arg */].isIn(transferFormat, __WEBPACK_IMPORTED_MODULE_1__ITransport__["b" /* TransferFormat */], "transferFormat");
                        if (typeof (EventSource) === "undefined") {
                            throw new Error("'EventSource' is not supported in your environment.");
                        }
                        this.logger.log(__WEBPACK_IMPORTED_MODULE_0__ILogger__["a" /* LogLevel */].Trace, "(SSE transport) Connecting");
                        return [4 /*yield*/, this.accessTokenFactory()];
                    case 1:
                        token = _a.sent();
                        if (token) {
                            url += (url.indexOf("?") < 0 ? "?" : "&") + ("access_token=" + encodeURIComponent(token));
                        }
                        this.url = url;
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                var opened = false;
                                if (transferFormat !== __WEBPACK_IMPORTED_MODULE_1__ITransport__["b" /* TransferFormat */].Text) {
                                    reject(new Error("The Server-Sent Events transport only supports the 'Text' transfer format"));
                                }
                                var eventSource = new EventSource(url, { withCredentials: true });
                                try {
                                    eventSource.onmessage = function (e) {
                                        if (_this.onreceive) {
                                            try {
                                                _this.logger.log(__WEBPACK_IMPORTED_MODULE_0__ILogger__["a" /* LogLevel */].Trace, "(SSE transport) data received. " + Object(__WEBPACK_IMPORTED_MODULE_2__Utils__["e" /* getDataDetail */])(e.data, _this.logMessageContent) + ".");
                                                _this.onreceive(e.data);
                                            }
                                            catch (error) {
                                                if (_this.onclose) {
                                                    _this.onclose(error);
                                                }
                                                return;
                                            }
                                        }
                                    };
                                    eventSource.onerror = function (e) {
                                        var error = new Error(e.message || "Error occurred");
                                        if (opened) {
                                            _this.close(error);
                                        }
                                        else {
                                            reject(error);
                                        }
                                    };
                                    eventSource.onopen = function () {
                                        _this.logger.log(__WEBPACK_IMPORTED_MODULE_0__ILogger__["a" /* LogLevel */].Information, "SSE connected to " + _this.url);
                                        _this.eventSource = eventSource;
                                        opened = true;
                                        resolve();
                                    };
                                }
                                catch (e) {
                                    return Promise.reject(e);
                                }
                            })];
                }
            });
        });
    };
    ServerSentEventsTransport.prototype.send = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (!this.eventSource) {
                    return [2 /*return*/, Promise.reject(new Error("Cannot send until the transport is connected"))];
                }
                return [2 /*return*/, Object(__WEBPACK_IMPORTED_MODULE_2__Utils__["f" /* sendMessage */])(this.logger, "SSE", this.httpClient, this.url, this.accessTokenFactory, data, this.logMessageContent)];
            });
        });
    };
    ServerSentEventsTransport.prototype.stop = function () {
        this.close();
        return Promise.resolve();
    };
    ServerSentEventsTransport.prototype.close = function (e) {
        if (this.eventSource) {
            this.eventSource.close();
            this.eventSource = null;
            if (this.onclose) {
                this.onclose(e);
            }
        }
    };
    return ServerSentEventsTransport;
}());

//# sourceMappingURL=ServerSentEventsTransport.js.map

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebSocketTransport; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ILogger__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ITransport__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Utils__ = __webpack_require__(2);
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



/** @private */
var WebSocketTransport = /** @class */ (function () {
    function WebSocketTransport(accessTokenFactory, logger, logMessageContent) {
        this.logger = logger;
        this.accessTokenFactory = accessTokenFactory || (function () { return null; });
        this.logMessageContent = logMessageContent;
    }
    WebSocketTransport.prototype.connect = function (url, transferFormat) {
        return __awaiter(this, void 0, void 0, function () {
            var token;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        __WEBPACK_IMPORTED_MODULE_2__Utils__["a" /* Arg */].isRequired(url, "url");
                        __WEBPACK_IMPORTED_MODULE_2__Utils__["a" /* Arg */].isRequired(transferFormat, "transferFormat");
                        __WEBPACK_IMPORTED_MODULE_2__Utils__["a" /* Arg */].isIn(transferFormat, __WEBPACK_IMPORTED_MODULE_1__ITransport__["b" /* TransferFormat */], "transferFormat");
                        if (typeof (WebSocket) === "undefined") {
                            throw new Error("'WebSocket' is not supported in your environment.");
                        }
                        this.logger.log(__WEBPACK_IMPORTED_MODULE_0__ILogger__["a" /* LogLevel */].Trace, "(WebSockets transport) Connecting");
                        return [4 /*yield*/, this.accessTokenFactory()];
                    case 1:
                        token = _a.sent();
                        if (token) {
                            url += (url.indexOf("?") < 0 ? "?" : "&") + ("access_token=" + encodeURIComponent(token));
                        }
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                url = url.replace(/^http/, "ws");
                                var webSocket = new WebSocket(url);
                                if (transferFormat === __WEBPACK_IMPORTED_MODULE_1__ITransport__["b" /* TransferFormat */].Binary) {
                                    webSocket.binaryType = "arraybuffer";
                                }
                                // tslint:disable-next-line:variable-name
                                webSocket.onopen = function (_event) {
                                    _this.logger.log(__WEBPACK_IMPORTED_MODULE_0__ILogger__["a" /* LogLevel */].Information, "WebSocket connected to " + url);
                                    _this.webSocket = webSocket;
                                    resolve();
                                };
                                webSocket.onerror = function (event) {
                                    reject(event.error);
                                };
                                webSocket.onmessage = function (message) {
                                    _this.logger.log(__WEBPACK_IMPORTED_MODULE_0__ILogger__["a" /* LogLevel */].Trace, "(WebSockets transport) data received. " + Object(__WEBPACK_IMPORTED_MODULE_2__Utils__["e" /* getDataDetail */])(message.data, _this.logMessageContent) + ".");
                                    if (_this.onreceive) {
                                        _this.onreceive(message.data);
                                    }
                                };
                                webSocket.onclose = function (event) {
                                    // webSocket will be null if the transport did not start successfully
                                    _this.logger.log(__WEBPACK_IMPORTED_MODULE_0__ILogger__["a" /* LogLevel */].Trace, "(WebSockets transport) socket closed.");
                                    if (_this.onclose) {
                                        if (event.wasClean === false || event.code !== 1000) {
                                            _this.onclose(new Error("Websocket closed with status code: " + event.code + " (" + event.reason + ")"));
                                        }
                                        else {
                                            _this.onclose();
                                        }
                                    }
                                };
                            })];
                }
            });
        });
    };
    WebSocketTransport.prototype.send = function (data) {
        if (this.webSocket && this.webSocket.readyState === WebSocket.OPEN) {
            this.logger.log(__WEBPACK_IMPORTED_MODULE_0__ILogger__["a" /* LogLevel */].Trace, "(WebSockets transport) sending data. " + Object(__WEBPACK_IMPORTED_MODULE_2__Utils__["e" /* getDataDetail */])(data, this.logMessageContent) + ".");
            this.webSocket.send(data);
            return Promise.resolve();
        }
        return Promise.reject("WebSocket is not in the OPEN state");
    };
    WebSocketTransport.prototype.stop = function () {
        if (this.webSocket) {
            this.webSocket.close();
            this.webSocket = null;
        }
        return Promise.resolve();
    };
    return WebSocketTransport;
}());

//# sourceMappingURL=WebSocketTransport.js.map

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var bind = __webpack_require__(18);
var Axios = __webpack_require__(40);
var defaults = __webpack_require__(7);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(23);
axios.CancelToken = __webpack_require__(54);
axios.isCancel = __webpack_require__(22);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(55);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),
/* 39 */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__(7);
var utils = __webpack_require__(0);
var InterceptorManager = __webpack_require__(49);
var dispatchRequest = __webpack_require__(50);

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, this.defaults, { method: 'get' }, config);
  config.method = config.method.toLowerCase();

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(21);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.request = request;
  error.response = response;
  return error;
};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      }

      if (!utils.isArray(val)) {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      var href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                  urlParsingNode.pathname :
                  '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })()
);


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error;
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
    // initialize result and counter
    var block, charCode, idx = 0, map = chars;
    // if the next str index does not exist:
    //   change the mapping table to "="
    //   check if d has no fractional digits
    str.charAt(idx | 0) || (map = '=', idx % 1);
    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
  ) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

  // Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })()
);


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var transformData = __webpack_require__(51);
var isCancel = __webpack_require__(22);
var defaults = __webpack_require__(7);
var isAbsoluteURL = __webpack_require__(52);
var combineURLs = __webpack_require__(53);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(23);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;// Copyright (c) 2013 Pieroxy <pieroxy@pieroxy.net>
// This work is free. You can redistribute it and/or modify it
// under the terms of the WTFPL, Version 2
// For more information see LICENSE.txt or http://www.wtfpl.net/
//
// For more information, the home page:
// http://pieroxy.net/blog/pages/lz-string/testing.html
//
// LZ-based compression algorithm, version 1.4.4
var LZString = (function() {

// private property
var f = String.fromCharCode;
var keyStrBase64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
var keyStrUriSafe = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$";
var baseReverseDic = {};

function getBaseValue(alphabet, character) {
  if (!baseReverseDic[alphabet]) {
    baseReverseDic[alphabet] = {};
    for (var i=0 ; i<alphabet.length ; i++) {
      baseReverseDic[alphabet][alphabet.charAt(i)] = i;
    }
  }
  return baseReverseDic[alphabet][character];
}

var LZString = {
  compressToBase64 : function (input) {
    if (input == null) return "";
    var res = LZString._compress(input, 6, function(a){return keyStrBase64.charAt(a);});
    switch (res.length % 4) { // To produce valid Base64
    default: // When could this happen ?
    case 0 : return res;
    case 1 : return res+"===";
    case 2 : return res+"==";
    case 3 : return res+"=";
    }
  },

  decompressFromBase64 : function (input) {
    if (input == null) return "";
    if (input == "") return null;
    return LZString._decompress(input.length, 32, function(index) { return getBaseValue(keyStrBase64, input.charAt(index)); });
  },

  compressToUTF16 : function (input) {
    if (input == null) return "";
    return LZString._compress(input, 15, function(a){return f(a+32);}) + " ";
  },

  decompressFromUTF16: function (compressed) {
    if (compressed == null) return "";
    if (compressed == "") return null;
    return LZString._decompress(compressed.length, 16384, function(index) { return compressed.charCodeAt(index) - 32; });
  },

  //compress into uint8array (UCS-2 big endian format)
  compressToUint8Array: function (uncompressed) {
    var compressed = LZString.compress(uncompressed);
    var buf=new Uint8Array(compressed.length*2); // 2 bytes per character

    for (var i=0, TotalLen=compressed.length; i<TotalLen; i++) {
      var current_value = compressed.charCodeAt(i);
      buf[i*2] = current_value >>> 8;
      buf[i*2+1] = current_value % 256;
    }
    return buf;
  },

  //decompress from uint8array (UCS-2 big endian format)
  decompressFromUint8Array:function (compressed) {
    if (compressed===null || compressed===undefined){
        return LZString.decompress(compressed);
    } else {
        var buf=new Array(compressed.length/2); // 2 bytes per character
        for (var i=0, TotalLen=buf.length; i<TotalLen; i++) {
          buf[i]=compressed[i*2]*256+compressed[i*2+1];
        }

        var result = [];
        buf.forEach(function (c) {
          result.push(f(c));
        });
        return LZString.decompress(result.join(''));

    }

  },


  //compress into a string that is already URI encoded
  compressToEncodedURIComponent: function (input) {
    if (input == null) return "";
    return LZString._compress(input, 6, function(a){return keyStrUriSafe.charAt(a);});
  },

  //decompress from an output of compressToEncodedURIComponent
  decompressFromEncodedURIComponent:function (input) {
    if (input == null) return "";
    if (input == "") return null;
    input = input.replace(/ /g, "+");
    return LZString._decompress(input.length, 32, function(index) { return getBaseValue(keyStrUriSafe, input.charAt(index)); });
  },

  compress: function (uncompressed) {
    return LZString._compress(uncompressed, 16, function(a){return f(a);});
  },
  _compress: function (uncompressed, bitsPerChar, getCharFromInt) {
    if (uncompressed == null) return "";
    var i, value,
        context_dictionary= {},
        context_dictionaryToCreate= {},
        context_c="",
        context_wc="",
        context_w="",
        context_enlargeIn= 2, // Compensate for the first entry which should not count
        context_dictSize= 3,
        context_numBits= 2,
        context_data=[],
        context_data_val=0,
        context_data_position=0,
        ii;

    for (ii = 0; ii < uncompressed.length; ii += 1) {
      context_c = uncompressed.charAt(ii);
      if (!Object.prototype.hasOwnProperty.call(context_dictionary,context_c)) {
        context_dictionary[context_c] = context_dictSize++;
        context_dictionaryToCreate[context_c] = true;
      }

      context_wc = context_w + context_c;
      if (Object.prototype.hasOwnProperty.call(context_dictionary,context_wc)) {
        context_w = context_wc;
      } else {
        if (Object.prototype.hasOwnProperty.call(context_dictionaryToCreate,context_w)) {
          if (context_w.charCodeAt(0)<256) {
            for (i=0 ; i<context_numBits ; i++) {
              context_data_val = (context_data_val << 1);
              if (context_data_position == bitsPerChar-1) {
                context_data_position = 0;
                context_data.push(getCharFromInt(context_data_val));
                context_data_val = 0;
              } else {
                context_data_position++;
              }
            }
            value = context_w.charCodeAt(0);
            for (i=0 ; i<8 ; i++) {
              context_data_val = (context_data_val << 1) | (value&1);
              if (context_data_position == bitsPerChar-1) {
                context_data_position = 0;
                context_data.push(getCharFromInt(context_data_val));
                context_data_val = 0;
              } else {
                context_data_position++;
              }
              value = value >> 1;
            }
          } else {
            value = 1;
            for (i=0 ; i<context_numBits ; i++) {
              context_data_val = (context_data_val << 1) | value;
              if (context_data_position ==bitsPerChar-1) {
                context_data_position = 0;
                context_data.push(getCharFromInt(context_data_val));
                context_data_val = 0;
              } else {
                context_data_position++;
              }
              value = 0;
            }
            value = context_w.charCodeAt(0);
            for (i=0 ; i<16 ; i++) {
              context_data_val = (context_data_val << 1) | (value&1);
              if (context_data_position == bitsPerChar-1) {
                context_data_position = 0;
                context_data.push(getCharFromInt(context_data_val));
                context_data_val = 0;
              } else {
                context_data_position++;
              }
              value = value >> 1;
            }
          }
          context_enlargeIn--;
          if (context_enlargeIn == 0) {
            context_enlargeIn = Math.pow(2, context_numBits);
            context_numBits++;
          }
          delete context_dictionaryToCreate[context_w];
        } else {
          value = context_dictionary[context_w];
          for (i=0 ; i<context_numBits ; i++) {
            context_data_val = (context_data_val << 1) | (value&1);
            if (context_data_position == bitsPerChar-1) {
              context_data_position = 0;
              context_data.push(getCharFromInt(context_data_val));
              context_data_val = 0;
            } else {
              context_data_position++;
            }
            value = value >> 1;
          }


        }
        context_enlargeIn--;
        if (context_enlargeIn == 0) {
          context_enlargeIn = Math.pow(2, context_numBits);
          context_numBits++;
        }
        // Add wc to the dictionary.
        context_dictionary[context_wc] = context_dictSize++;
        context_w = String(context_c);
      }
    }

    // Output the code for w.
    if (context_w !== "") {
      if (Object.prototype.hasOwnProperty.call(context_dictionaryToCreate,context_w)) {
        if (context_w.charCodeAt(0)<256) {
          for (i=0 ; i<context_numBits ; i++) {
            context_data_val = (context_data_val << 1);
            if (context_data_position == bitsPerChar-1) {
              context_data_position = 0;
              context_data.push(getCharFromInt(context_data_val));
              context_data_val = 0;
            } else {
              context_data_position++;
            }
          }
          value = context_w.charCodeAt(0);
          for (i=0 ; i<8 ; i++) {
            context_data_val = (context_data_val << 1) | (value&1);
            if (context_data_position == bitsPerChar-1) {
              context_data_position = 0;
              context_data.push(getCharFromInt(context_data_val));
              context_data_val = 0;
            } else {
              context_data_position++;
            }
            value = value >> 1;
          }
        } else {
          value = 1;
          for (i=0 ; i<context_numBits ; i++) {
            context_data_val = (context_data_val << 1) | value;
            if (context_data_position == bitsPerChar-1) {
              context_data_position = 0;
              context_data.push(getCharFromInt(context_data_val));
              context_data_val = 0;
            } else {
              context_data_position++;
            }
            value = 0;
          }
          value = context_w.charCodeAt(0);
          for (i=0 ; i<16 ; i++) {
            context_data_val = (context_data_val << 1) | (value&1);
            if (context_data_position == bitsPerChar-1) {
              context_data_position = 0;
              context_data.push(getCharFromInt(context_data_val));
              context_data_val = 0;
            } else {
              context_data_position++;
            }
            value = value >> 1;
          }
        }
        context_enlargeIn--;
        if (context_enlargeIn == 0) {
          context_enlargeIn = Math.pow(2, context_numBits);
          context_numBits++;
        }
        delete context_dictionaryToCreate[context_w];
      } else {
        value = context_dictionary[context_w];
        for (i=0 ; i<context_numBits ; i++) {
          context_data_val = (context_data_val << 1) | (value&1);
          if (context_data_position == bitsPerChar-1) {
            context_data_position = 0;
            context_data.push(getCharFromInt(context_data_val));
            context_data_val = 0;
          } else {
            context_data_position++;
          }
          value = value >> 1;
        }


      }
      context_enlargeIn--;
      if (context_enlargeIn == 0) {
        context_enlargeIn = Math.pow(2, context_numBits);
        context_numBits++;
      }
    }

    // Mark the end of the stream
    value = 2;
    for (i=0 ; i<context_numBits ; i++) {
      context_data_val = (context_data_val << 1) | (value&1);
      if (context_data_position == bitsPerChar-1) {
        context_data_position = 0;
        context_data.push(getCharFromInt(context_data_val));
        context_data_val = 0;
      } else {
        context_data_position++;
      }
      value = value >> 1;
    }

    // Flush the last char
    while (true) {
      context_data_val = (context_data_val << 1);
      if (context_data_position == bitsPerChar-1) {
        context_data.push(getCharFromInt(context_data_val));
        break;
      }
      else context_data_position++;
    }
    return context_data.join('');
  },

  decompress: function (compressed) {
    if (compressed == null) return "";
    if (compressed == "") return null;
    return LZString._decompress(compressed.length, 32768, function(index) { return compressed.charCodeAt(index); });
  },

  _decompress: function (length, resetValue, getNextValue) {
    var dictionary = [],
        next,
        enlargeIn = 4,
        dictSize = 4,
        numBits = 3,
        entry = "",
        result = [],
        i,
        w,
        bits, resb, maxpower, power,
        c,
        data = {val:getNextValue(0), position:resetValue, index:1};

    for (i = 0; i < 3; i += 1) {
      dictionary[i] = i;
    }

    bits = 0;
    maxpower = Math.pow(2,2);
    power=1;
    while (power!=maxpower) {
      resb = data.val & data.position;
      data.position >>= 1;
      if (data.position == 0) {
        data.position = resetValue;
        data.val = getNextValue(data.index++);
      }
      bits |= (resb>0 ? 1 : 0) * power;
      power <<= 1;
    }

    switch (next = bits) {
      case 0:
          bits = 0;
          maxpower = Math.pow(2,8);
          power=1;
          while (power!=maxpower) {
            resb = data.val & data.position;
            data.position >>= 1;
            if (data.position == 0) {
              data.position = resetValue;
              data.val = getNextValue(data.index++);
            }
            bits |= (resb>0 ? 1 : 0) * power;
            power <<= 1;
          }
        c = f(bits);
        break;
      case 1:
          bits = 0;
          maxpower = Math.pow(2,16);
          power=1;
          while (power!=maxpower) {
            resb = data.val & data.position;
            data.position >>= 1;
            if (data.position == 0) {
              data.position = resetValue;
              data.val = getNextValue(data.index++);
            }
            bits |= (resb>0 ? 1 : 0) * power;
            power <<= 1;
          }
        c = f(bits);
        break;
      case 2:
        return "";
    }
    dictionary[3] = c;
    w = c;
    result.push(c);
    while (true) {
      if (data.index > length) {
        return "";
      }

      bits = 0;
      maxpower = Math.pow(2,numBits);
      power=1;
      while (power!=maxpower) {
        resb = data.val & data.position;
        data.position >>= 1;
        if (data.position == 0) {
          data.position = resetValue;
          data.val = getNextValue(data.index++);
        }
        bits |= (resb>0 ? 1 : 0) * power;
        power <<= 1;
      }

      switch (c = bits) {
        case 0:
          bits = 0;
          maxpower = Math.pow(2,8);
          power=1;
          while (power!=maxpower) {
            resb = data.val & data.position;
            data.position >>= 1;
            if (data.position == 0) {
              data.position = resetValue;
              data.val = getNextValue(data.index++);
            }
            bits |= (resb>0 ? 1 : 0) * power;
            power <<= 1;
          }

          dictionary[dictSize++] = f(bits);
          c = dictSize-1;
          enlargeIn--;
          break;
        case 1:
          bits = 0;
          maxpower = Math.pow(2,16);
          power=1;
          while (power!=maxpower) {
            resb = data.val & data.position;
            data.position >>= 1;
            if (data.position == 0) {
              data.position = resetValue;
              data.val = getNextValue(data.index++);
            }
            bits |= (resb>0 ? 1 : 0) * power;
            power <<= 1;
          }
          dictionary[dictSize++] = f(bits);
          c = dictSize-1;
          enlargeIn--;
          break;
        case 2:
          return result.join('');
      }

      if (enlargeIn == 0) {
        enlargeIn = Math.pow(2, numBits);
        numBits++;
      }

      if (dictionary[c]) {
        entry = dictionary[c];
      } else {
        if (c === dictSize) {
          entry = w + w.charAt(0);
        } else {
          return null;
        }
      }
      result.push(entry);

      // Add w+entry[0] to the dictionary.
      dictionary[dictSize++] = w + entry.charAt(0);
      enlargeIn--;

      w = entry;

      if (enlargeIn == 0) {
        enlargeIn = Math.pow(2, numBits);
        numBits++;
      }

    }
  }
};
  return LZString;
})();

if (true) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () { return LZString; }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else if( typeof module !== 'undefined' && module != null ) {
  module.exports = LZString
}


/***/ })
/******/ ]);
/**
 * Generated by Apache Royale Compiler from org\apache\royale\utils\Language.as
 * org.apache.royale.utils.Language
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('org.apache.royale.utils.Language');
goog.require('org.apache.royale.utils.Language');



/**
 * @constructor
 */
org.apache.royale.utils.Language = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.utils.Language', org.apache.royale.utils.Language);


/**
 * @private
 * @type {Array}
 */
org.apache.royale.utils.Language.sortNames;


/**
 * @private
 * @type {Array}
 */
org.apache.royale.utils.Language.sortNamesOne = [];


/**
 * @private
 * @type {number}
 */
org.apache.royale.utils.Language.muler;


/**
 * @private
 * @type {string}
 */
org.apache.royale.utils.Language.zeroStr = String.fromCharCode(0);


/**
 * as()
 *
 * @asparam leftOperand The lefthand operand of the
 * binary as operator in AS3.
 * @asparam rightOperand The righthand operand of the
 * binary operator in AS3.
 * @asparam coercion The cast is a coercion,
 * throw exception if it fails.
 * @asreturn Returns the lefthand operand if it is of the
 * type of the righthand operand, otherwise null.
 * @export
 * @param {Object} leftOperand
 * @param {Object} rightOperand
 * @param {*=} coercion
 * @return {Object}
 */
org.apache.royale.utils.Language.as = function(leftOperand, rightOperand, coercion) {
  coercion = typeof coercion !== 'undefined' ? coercion : null;
  var /** @type {Error} */ error, /** @type {boolean} */ itIs, /** @type {string} */ message;
  coercion = (coercion !== undefined) ? coercion : false;
  itIs = org.apache.royale.utils.Language.is(leftOperand, rightOperand);
  if (!itIs && coercion && leftOperand) {
    message = 'Type Coercion failed';
    if (TypeError) {
      error = new TypeError(message);
    } else {
      error = new Error(message);
    }
    throw error;
  }
  return itIs ? leftOperand : null;
};


/**
 * int()
 *
 * @asparam value The value to be cast.
 * @asreturn {number}
 * @export
 * @param {number} value
 * @return {number}
 */
org.apache.royale.utils.Language._int = function(value) {
  return value >> 0;
};


/**
 * string()
 *
 * @asparam value The value to be cast.
 * @asreturn {string}
 * @export
 * @param {*} value
 * @return {string}
 */
org.apache.royale.utils.Language.string = function(value) {
  return value == null ? null : value.toString();
};


/**
 * is()
 *
 * @asparam leftOperand The lefthand operand of the
 * binary as operator in AS3.
 * @asparam rightOperand The righthand operand of the
 * binary operator in AS3.
 * @asreturn {boolean}
 * @export
 * @param {Object} leftOperand
 * @param {Object} rightOperand
 * @return {boolean}
 */
org.apache.royale.utils.Language.is = function(leftOperand, rightOperand) {
  var /** @type {Object} */ superClass;
  if (leftOperand == null || rightOperand == null)
    return false;
  if (leftOperand instanceof rightOperand)
    return true;
  if (rightOperand === Object)
    return true;
  var /** @type {string} */ theType = typeof(leftOperand);
  if (theType === 'string')
    return rightOperand === String;
  if (theType === 'number')
    return rightOperand === Number;
  if (theType === 'boolean')
    return rightOperand === Boolean;
  if (rightOperand === Array)
    return Array.isArray(leftOperand);
  if (leftOperand.ROYALE_CLASS_INFO === undefined)
    return false;
  if (leftOperand.ROYALE_CLASS_INFO.interfaces) {
    if (org.apache.royale.utils.Language.checkInterfaces(leftOperand, rightOperand)) {
      return true;
    }
  }
  superClass = leftOperand.constructor.superClass_;
  if (superClass) {
    while (superClass && superClass.ROYALE_CLASS_INFO) {
      if (superClass.ROYALE_CLASS_INFO.interfaces) {
        if (org.apache.royale.utils.Language.checkInterfaces(superClass, rightOperand)) {
          return true;
        }
      }
      superClass = superClass.constructor.superClass_;
    }
  }
  return false;
};


/**
 * Helper function for is()
 * @private
 * @param {*} leftOperand
 * @param {*} rightOperand
 * @return {boolean}
 */
org.apache.royale.utils.Language.checkInterfaces = function(leftOperand, rightOperand) {
  var /** @type {number} */ i = 0, /** @type {Array} */ interfaces;
  interfaces = leftOperand.ROYALE_CLASS_INFO.interfaces;
  for (i = interfaces.length - 1; i > -1; i--) {
    if (interfaces[i] === rightOperand) {
      return true;
    }
    if (interfaces[i].prototype.ROYALE_CLASS_INFO.interfaces) {
      var /** @type {boolean} */ isit = org.apache.royale.utils.Language.checkInterfaces(interfaces[i].prototype, rightOperand);
      if (isit)
        return true;
    }
  }
  return false;
};


/**
 * Implementation of "classDef is Class"
 * @export
 * @param {*} classDef
 * @return {boolean}
 */
org.apache.royale.utils.Language.prototype.isClass = function(classDef) {
  return typeof(classDef) === 'function' && classDef.prototype && classDef.prototype.constructor === classDef;
};


/**
 * Implementation of "classDef as Class"
 * @export
 * @param {*} classDef
 * @return {Object}
 */
org.apache.royale.utils.Language.prototype.asClass = function(classDef) {
  return this.isClass(classDef) ? classDef : null;
};


/**
 * @royaledebug
 * @export
 * @param {...} rest
 */
org.apache.royale.utils.Language.trace = function(rest) {
  rest = rest;if(!goog.DEBUG)return;
  rest = Array.prototype.slice.call(arguments, 0);
  var /** @type {*} */ theConsole;
  theConsole = goog.global["console"];
  if (theConsole === undefined) {
    if (typeof(window) !== "undefined") {
      theConsole = window.console;
    } else if (typeof(console) !== "undefined") {
      theConsole = console;
    }
  }
  try {
    if (theConsole && theConsole.log) {
      theConsole.log.apply(theConsole, rest);
    }
  } catch (e) {
  }
};


/**
 * uint()
 *
 * @asparam value The value to be cast.
 * @asreturn {number}
 * @export
 * @param {number} value
 * @return {number}
 */
org.apache.royale.utils.Language.uint = function(value) {
  return value >>> 0;
};


/**
 * caches closures and returns the one closure
 *
 * @asparam fn The method on the instance.
 * @asparam object The instance.
 * @asparam boundMethodName The name to use to cache the closure.
 * @asreturn The closure.
 * @export
 * @param {Function} fn
 * @param {Object} object
 * @param {string} boundMethodName
 * @return {Function}
 */
org.apache.royale.utils.Language.closure = function(fn, object, boundMethodName) {
  if (object.hasOwnProperty(boundMethodName)) {
    return object[boundMethodName];
  }
  var /** @type {Function} */ boundMethod = goog.bind(fn, object);
  Object.defineProperty(object, boundMethodName, {value:boundMethod});
  return boundMethod;
};


/**
 * @asparam	arr
 * @asparam	names
 * @asparam	opt
 * @export
 * @param {Array} arr
 * @param {...} args
 */
org.apache.royale.utils.Language.sort = function(arr, args) {
  args = Array.prototype.slice.call(arguments, 1);
  var /** @type {Function} */ compareFunction = null;
  var /** @type {number} */ opt = 0;
  if (args.length == 1) {
    if (typeof(args[0]) === "function")
      compareFunction = args[0];
    else
      opt = Number(args[0]);
  } else if (args.length == 2) {
    compareFunction = args[0];
    opt = Number(args[1]);
  }
  org.apache.royale.utils.Language.muler = (2 & opt) > 0 ? -1 : 1;
  if (compareFunction)
    arr.sort(compareFunction); else if (opt & 16) {
    arr.sort(org.apache.royale.utils.Language.compareAsNumber);
  } else if (opt & 1) {
    arr.sort(org.apache.royale.utils.Language.compareAsStringCaseinsensitive);
  } else {
    arr.sort(org.apache.royale.utils.Language.compareAsString);
  }
};


/**
 * @private
 * @param {Object} a
 * @param {Object} b
 * @return {number}
 */
org.apache.royale.utils.Language.compareAsStringCaseinsensitive = function(a, b) {
  var /** @type {number} */ v = Number((a || org.apache.royale.utils.Language.zeroStr).toString().toLowerCase().localeCompare((b || org.apache.royale.utils.Language.zeroStr).toString().toLowerCase()));
  if (v != 0) {
    return v * org.apache.royale.utils.Language.muler;
  }
  return 0;
};


/**
 * @private
 * @param {Object} a
 * @param {Object} b
 * @return {number}
 */
org.apache.royale.utils.Language.compareAsString = function(a, b) {
  var /** @type {number} */ v = Number((a || org.apache.royale.utils.Language.zeroStr).toString().localeCompare((b || org.apache.royale.utils.Language.zeroStr).toString()));
  if (v != 0) {
    return v * org.apache.royale.utils.Language.muler;
  }
  return 0;
};


/**
 * @private
 * @param {Object} a
 * @param {Object} b
 * @return {number}
 */
org.apache.royale.utils.Language.compareAsNumber = function(a, b) {
  if (a > b) {
    return org.apache.royale.utils.Language.muler;
  } else if (a < b) {
    return -org.apache.royale.utils.Language.muler;
  }
  return 0;
};


/**
 * @asparam	arr
 * @asparam	names
 * @asparam	opt
 * @export
 * @param {Array} arr
 * @param {Object} names
 * @param {Object=} opt
 */
org.apache.royale.utils.Language.sortOn = function(arr, names, opt) {
  opt = typeof opt !== 'undefined' ? opt : 0;
  if (org.apache.royale.utils.Language.is(names, Array)) {
    org.apache.royale.utils.Language.sortNames = org.apache.royale.utils.Language.as(names, Array);
  } else {
    org.apache.royale.utils.Language.sortNamesOne[0] = names;
    org.apache.royale.utils.Language.sortNames = org.apache.royale.utils.Language.sortNamesOne;
  }
  if (org.apache.royale.utils.Language.is(opt, Array)) {
    var /** @type {number} */ opt2 = 0;
    var foreachiter0_target = opt;
    for (var foreachiter0 in foreachiter0_target) 
    {
    var o = foreachiter0_target[foreachiter0];
    {
      opt2 = opt2 | o;
    }}
    
  } else {
    opt2 = org.apache.royale.utils.Language.as(opt, Number);
  }
  org.apache.royale.utils.Language.muler = (2 & opt2) > 0 ? -1 : 1;
  if (opt2 & 16) {
    arr.sort(org.apache.royale.utils.Language.compareNumber);
  } else if (opt2 & 1) {
    arr.sort(org.apache.royale.utils.Language.compareStringCaseinsensitive);
  } else {
    arr.sort(org.apache.royale.utils.Language.compareString);
  }
};


/**
 * @private
 * @param {Object} a
 * @param {Object} b
 * @return {number}
 */
org.apache.royale.utils.Language.compareStringCaseinsensitive = function(a, b) {
  var foreachiter1_target = org.apache.royale.utils.Language.sortNames;
  for (var foreachiter1 in foreachiter1_target) 
  {
  var n = foreachiter1_target[foreachiter1];
  {
    var /** @type {number} */ v = Number((a[n] || org.apache.royale.utils.Language.zeroStr).toString().toLowerCase().localeCompare((b[n] || org.apache.royale.utils.Language.zeroStr).toString().toLowerCase()));
    if (v != 0) {
      return v * org.apache.royale.utils.Language.muler;
    }
  }}
  
  return 0;
};


/**
 * @private
 * @param {Object} a
 * @param {Object} b
 * @return {number}
 */
org.apache.royale.utils.Language.compareString = function(a, b) {
  var foreachiter2_target = org.apache.royale.utils.Language.sortNames;
  for (var foreachiter2 in foreachiter2_target) 
  {
  var n = foreachiter2_target[foreachiter2];
  {
    var /** @type {number} */ v = Number((a[n] || org.apache.royale.utils.Language.zeroStr).toString().localeCompare((b[n] || org.apache.royale.utils.Language.zeroStr).toString()));
    if (v != 0) {
      return v * org.apache.royale.utils.Language.muler;
    }
  }}
  
  return 0;
};


/**
 * @private
 * @param {Object} a
 * @param {Object} b
 * @return {number}
 */
org.apache.royale.utils.Language.compareNumber = function(a, b) {
  var foreachiter3_target = org.apache.royale.utils.Language.sortNames;
  for (var foreachiter3 in foreachiter3_target) 
  {
  var n = foreachiter3_target[foreachiter3];
  {
    if (a[n] > b[n]) {
      return org.apache.royale.utils.Language.muler;
    } else if (a[n] < b[n]) {
      return -org.apache.royale.utils.Language.muler;
    }
  }}
  
  return 0;
};


/**
 * @export
 * @param {number=} size
 * @param {string=} basetype
 * @return {Array}
 */
org.apache.royale.utils.Language.Vector = function(size, basetype) {
  size = typeof size !== 'undefined' ? size : 0;
  basetype = typeof basetype !== 'undefined' ? basetype : null;
  var /** @type {Array} */ arr = [];
  var /** @type {Object} */ defValue = null;
  if (basetype == "int" || basetype == "uint" || basetype == "Number") {
    defValue = 0;
  } else if (basetype == "String") {
    defValue = "";
  }
  for (var /** @type {number} */ i = 0; i < size; i++)
    arr.push(defValue);
  return arr;
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.utils.Language.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'Language', qName: 'org.apache.royale.utils.Language', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.utils.Language.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {return {};},
    methods: function () {
      return {
        '|as': { type: 'Object', declaredBy: 'org.apache.royale.utils.Language', parameters: function () { return [  { index: 1, type: 'Object', optional: false },{ index: 2, type: 'Object', optional: false },{ index: 3, type: '*', optional: true } ]; }},
        '|_int': { type: 'Number', declaredBy: 'org.apache.royale.utils.Language', parameters: function () { return [  { index: 1, type: 'Number', optional: false } ]; }},
        '|string': { type: 'String', declaredBy: 'org.apache.royale.utils.Language', parameters: function () { return [  { index: 1, type: '*', optional: false } ]; }},
        '|is': { type: 'Boolean', declaredBy: 'org.apache.royale.utils.Language', parameters: function () { return [  { index: 1, type: 'Object', optional: false },{ index: 2, type: 'Object', optional: false } ]; }},
        'isClass': { type: 'Boolean', declaredBy: 'org.apache.royale.utils.Language', parameters: function () { return [  { index: 1, type: '*', optional: false } ]; }},
        'asClass': { type: 'Class', declaredBy: 'org.apache.royale.utils.Language', parameters: function () { return [  { index: 1, type: '*', optional: false } ]; }},
        '|trace': { type: 'void', declaredBy: 'org.apache.royale.utils.Language', parameters: function () { return [  { index: 1, type: 'Array', optional: false } ]; }},
        '|uint': { type: 'Number', declaredBy: 'org.apache.royale.utils.Language', parameters: function () { return [  { index: 1, type: 'Number', optional: false } ]; }},
        '|closure': { type: 'Function', declaredBy: 'org.apache.royale.utils.Language', parameters: function () { return [  { index: 1, type: 'Function', optional: false },{ index: 2, type: 'Object', optional: false },{ index: 3, type: 'String', optional: false } ]; }},
        '|sort': { type: 'void', declaredBy: 'org.apache.royale.utils.Language', parameters: function () { return [  { index: 1, type: 'Array', optional: false },{ index: 2, type: 'Array', optional: false } ]; }},
        '|sortOn': { type: 'void', declaredBy: 'org.apache.royale.utils.Language', parameters: function () { return [  { index: 1, type: 'Array', optional: false },{ index: 2, type: 'Object', optional: false },{ index: 3, type: 'Object', optional: true } ]; }},
        '|Vector': { type: 'Array', declaredBy: 'org.apache.royale.utils.Language', parameters: function () { return [  { index: 1, type: 'int', optional: true },{ index: 2, type: 'String', optional: true } ]; }}
      };
    }
  };
};

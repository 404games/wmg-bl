/**
 * Generated by Apache Royale Compiler from io/nfg/core/Tools.as
 * io.nfg.core.Tools
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('io.nfg.core.Tools');
/* Royale Static Dependency List: io.nfg.core.Tools*/
goog.require('org.apache.royale.utils.Language');



/**
 * @constructor
 */
io.nfg.core.Tools = function() {
  throw new Error('Static class, cannot be instanciated');
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('io.nfg.core.Tools', io.nfg.core.Tools);


/**
 * @export
 * @type {boolean}
 */
io.nfg.core.Tools.DEBUG = true;


/**
 * @export
 * @type {string}
 */
io.nfg.core.Tools.DEBUG_NS = '';


/**
 * @private
 * @type {Function}
 */
io.nfg.core.Tools._log;


/**
 * @export
 * @param {number} num
 * @param {Array} funcs
 * @param {Function} cb1
 * @param {Function=} cb2
 */
io.nfg.core.Tools.asyncSeries = function(num, funcs, cb1, cb2) {
  cb2 = typeof cb2 !== 'undefined' ? cb2 : null;
  var /** @type {Function} */ __localFn0__ = function(key, results, errors, cb4, cb5) {
    cb5 = typeof cb5 !== 'undefined' ? cb5 : null;
    var /** @type {Function} */ __localFn0__ = function(err, res) {
      err = typeof err !== 'undefined' ? err : null;
      res = typeof res !== 'undefined' ? res : null;
      io.nfg.core.Tools._log('Finish processing', key);
      if (keys.indexOf(key) < 0) {
        err ? errors.push([key, err]) : results.push([key, res]);
        keys.push(key);
        if (cb5)
          cb5(err, res);
        if (keys.length == l)
          cb4(errors, results);
        else if (++cursor < l)
          next(cursor);
      }
      else
        throw new Error('Index already finished loaded');
    }
    return __localFn0__;
  }
  var /** @type {Function} */ __localFn1__ = function(key) {
    params = funcs[key];
    fn = params.shift();
    io.nfg.core.Tools._log('Start processing', key, params);
    var /** @type {Function} */ cb3 = createFn(key, results, errors, cb1, cb2);
    params.push(cb3);
    try {
      fn.apply(fn, params);
    } catch (e) {
      cb3(e);
    }
  }
  var /** @type {number} */ l = funcs.length;
  var /** @type {Array} */ param;
  var /** @type {Function} */ fn;
  var /** @type {Array} */ params;
  var /** @type {number} */ k;
  var /** @type {number} */ cursor = 0;
  var /** @type {Array} */ keys = [];
  var /** @type {Array} */ results = [];
  var /** @type {Array} */ errors = [];
  num = l > num ? num : l;
  var /** @type {Function} */ createFn = __localFn0__;
  var /** @type {Function} */ next = __localFn1__;
  cursor = num - 1;
  for (k = 0; k < num; k++) {
    next(k);
  }
};


/**
 * @export
 * @param {Array} funcs
 * @param {Function} cb1
 * @param {Function=} cb2
 */
io.nfg.core.Tools.async = function(funcs, cb1, cb2) {
  cb2 = typeof cb2 !== 'undefined' ? cb2 : null;
  var /** @type {Function} */ __localFn0__ = function(key) {
    var /** @type {Function} */ __localFn0__ = function(err, res) {
      err = typeof err !== 'undefined' ? err : null;
      res = typeof res !== 'undefined' ? res : null;
      io.nfg.core.Tools._log('Finish processing', key);
      if (keys.indexOf(key) < 0) {
        err ? errors.push([key, err]) : results.push([key, res]);
        keys.push(key);
        if (cb2)
          cb2(err, res);
        if (keys.length == l)
          cb1(errors, results);
      }
      else
        throw new Error('Index already finished loaded');
    }
    return __localFn0__;
  }
  var /** @type {number} */ l = funcs.length;
  var /** @type {Array} */ param;
  var /** @type {Function} */ fn;
  var /** @type {Array} */ params;
  var /** @type {number} */ key;
  var /** @type {Array} */ keys = [];
  var /** @type {Array} */ results = [];
  var /** @type {Array} */ errors = [];
  var /** @type {Function} */ createFn = __localFn0__;
  for (key = 0; key < l; key++) {
    params = funcs[key];
    fn = params.shift();
    io.nfg.core.Tools._log('Start processing', key, params);
    var /** @type {Function} */ cb3 = createFn(key);
    params.push(cb3);
    try {
      fn.apply(fn, params);
    } catch (e) {
      cb3(e);
    }
  }
};


/**
 * @export
 * @type {string}
 */
io.nfg.core.Tools.previousNs;


/**
 * @export
 * @param {*} context
 * @param {string=} ns
 * @param {boolean=} displayContext
 * @return {Function}
 */
io.nfg.core.Tools.createLogger = function(context, ns, displayContext) {
  ns = typeof ns !== 'undefined' ? ns : '';
  displayContext = typeof displayContext !== 'undefined' ? displayContext : true;
  var /** @type {Function} */ __localFn0__ = function(args) {
    args = Array.prototype.slice.call(arguments, 0);
    if (io.nfg.core.Tools.DEBUG) {
      if (ns.length < 1)
        ns = "n/a";
      var /** @type {string} */ nsList = io.nfg.core.Tools.DEBUG_NS;
      if (nsList.indexOf("*") > -1 ? nsList.indexOf(ns) == -1 : nsList.indexOf(ns) > -1) {
        var /** @type {string} */ result = '';
        if (ns != io.nfg.core.Tools.previousNs) {
          io.nfg.core.Tools.previousNs = ns;
          result += "\n";
          result += ns;
          if (displayContext)
            result += ' (' + flash.utils.getQualifiedClassName(context) + ') ->';
          result += "\n";
        }
        result += "   ";
        for (var /** @type {number} */ i = 0; i < args.length; i++) {
          try {
            result += JSON.stringify(args[i]) + " ";
          } catch (e) {
            result += args[i] + " ";
          }
        }
        org.apache.royale.utils.Language.trace(result);
      }
    }
  }
  return __localFn0__;
};


/**
 * @export
 * @param {string} msg
 */
io.nfg.core.Tools.error = function(msg) {
  org.apache.royale.utils.Language.trace(msg);
};


/**
 * @export
 * @param {string} msg
 */
io.nfg.core.Tools.warning = function(msg) {
  org.apache.royale.utils.Language.trace(msg);
};


/**
 * @export
 * @param {*} data
 * @return {*}
 */
io.nfg.core.Tools.jsonParseSilent = function(data) {
  var /** @type {*} */ ret;
  try {
    ret = JSON.parse(data);
  } catch (e) {
    ret = data;
  }
  return ret;
};


/**
 * @export
 * @param {string} str
 * @return {string}
 */
io.nfg.core.Tools.ucFirst = function(str) {
  if (!str || str.length < 1)
    return '';
  return str.substr(0, 1).toUpperCase() + str.substr(1, str.length);
};

io.nfg.core.Tools._log = io.nfg.core.Tools.createLogger(io.nfg.core.Tools, 'tools');




/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
io.nfg.core.Tools.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'Tools', qName: 'io.nfg.core.Tools', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
io.nfg.core.Tools.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {
      return {
        '|DEBUG': { type: 'Boolean'},
        '|DEBUG_NS': { type: 'String'},
        '|previousNs': { type: 'String'}
      };
    },
    accessors: function () {return {};},
    methods: function () {
      return {
        'Tools': { type: '', declaredBy: 'io.nfg.core.Tools'},
        '|asyncSeries': { type: 'void', declaredBy: 'io.nfg.core.Tools', parameters: function () { return [  { index: 1, type: 'Number', optional: false },{ index: 2, type: 'Array', optional: false },{ index: 3, type: 'Function', optional: false },{ index: 4, type: 'Function', optional: true } ]; }},
        '|async': { type: 'void', declaredBy: 'io.nfg.core.Tools', parameters: function () { return [  { index: 1, type: 'Array', optional: false },{ index: 2, type: 'Function', optional: false },{ index: 3, type: 'Function', optional: true } ]; }},
        '|createLogger': { type: 'Function', declaredBy: 'io.nfg.core.Tools', parameters: function () { return [  { index: 1, type: '*', optional: false },{ index: 2, type: 'String', optional: true },{ index: 3, type: 'Boolean', optional: true } ]; }},
        '|error': { type: 'void', declaredBy: 'io.nfg.core.Tools', parameters: function () { return [  { index: 1, type: 'String', optional: false } ]; }},
        '|warning': { type: 'void', declaredBy: 'io.nfg.core.Tools', parameters: function () { return [  { index: 1, type: 'String', optional: false } ]; }},
        '|jsonParseSilent': { type: '*', declaredBy: 'io.nfg.core.Tools', parameters: function () { return [  { index: 1, type: '*', optional: false } ]; }},
        '|ucFirst': { type: 'String', declaredBy: 'io.nfg.core.Tools', parameters: function () { return [  { index: 1, type: 'String', optional: false } ]; }}
      };
    }
  };
};
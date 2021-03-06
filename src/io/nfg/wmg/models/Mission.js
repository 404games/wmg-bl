/**
 * Generated by Apache Royale Compiler from io/nfg/wmg/models/Mission.as
 * io.nfg.wmg.models.Mission
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('io.nfg.wmg.models.Mission');
/* Royale Static Dependency List: io.nfg.wmg.models.Map*/

goog.require('io.nfg.core.db.AModel');
goog.require('io.nfg.wmg.models.Actor');
goog.require('io.nfg.wmg.models.DeckUnit');
goog.require('io.nfg.wmg.models.Map');
goog.require('io.nfg.wmg.models.PlayerTypes');



/**
 * @constructor
 * @extends {io.nfg.core.db.AModel}
 * @param {Object} data
 */
io.nfg.wmg.models.Mission = function(data) {
  io.nfg.wmg.models.Mission.base(this, 'constructor', data, io.nfg.wmg.models.Mission.__schema, io.nfg.wmg.models.Mission.__defaults);
};
goog.inherits(io.nfg.wmg.models.Mission, io.nfg.core.db.AModel);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('io.nfg.wmg.models.Mission', io.nfg.wmg.models.Mission);


/**
 * @private
 * @const
 * @type {Object}
 */
io.nfg.wmg.models.Mission.__schema = {objectives:org.apache.royale.utils.Language.Vector, map:io.nfg.wmg.models.Map, actors:org.apache.royale.utils.Language.Vector, options:Object, pIndex:Number, tutorial:Array, title:String, desc:String, type:String, instructions:String, deploy:Boolean};


/**
 * @private
 * @return {Object}
 */
io.nfg.wmg.models.Mission.__defaults = function() {
  return {options:{}};
};


/**
 * @export
 * @override
 */
io.nfg.wmg.models.Mission.prototype.set = function(key, value) {
  if (key == 'actors')
    value = this.initActors(value);
  if (key == 'map')
    value = this.initMap(value);
  return io.nfg.wmg.models.Mission.superClass_.set.apply(this, [ key, value] );
};


/**
 * @export
 * @override
 */
io.nfg.wmg.models.Mission.prototype.get = function(key) {
  return io.nfg.wmg.models.Mission.superClass_.get.apply(this, [ key] );
};


/**
 * @export
 * @param {Object} data
 * @return {Array}
 */
io.nfg.wmg.models.Mission.prototype.initActors = function(data) {
  var /** @type {Array} */ actors = [];
  var /** @type {number} */ pIndex = 0;
  var /** @type {number} */ i;
  for (i in data) {
    actors.push(new io.nfg.wmg.models.Actor(data[i]));
    if (actors[i].get('type') == io.nfg.wmg.models.PlayerTypes.LOCAL)
      pIndex = i;
  }
  io.nfg.wmg.models.Mission.superClass_.set.apply(this, [ 'pIndex', pIndex] );
  return actors;
};


/**
 * @export
 * @param {Object} data
 * @return {io.nfg.wmg.models.Map}
 */
io.nfg.wmg.models.Mission.prototype.initMap = function(data) {
  return new io.nfg.wmg.models.Map(data);
};


/**
 * @export
 * @return {Array}
 */
io.nfg.wmg.models.Mission.prototype.getUnitList = function() {
  var self = this;
  var /** @type {Function} */ __localFn0__ = function(a, value) {
    if (a.indexOf(value) == -1)
      a.push(value);
  }
  var /** @type {Function} */ _push = __localFn0__;
  var /** @type {io.nfg.wmg.models.Actor} */ actor;
  var /** @type {io.nfg.wmg.models.DeckUnit} */ deckUnit;
  var /** @type {Array} */ units = [];
  var foreachiter0_target = this.get('actors');
  for (var foreachiter0 in foreachiter0_target) 
  {
  actor = foreachiter0_target[foreachiter0];
  {
    var foreachiter1_target = actor.get('deck');
    for (var foreachiter1 in foreachiter1_target) 
    {
    deckUnit = foreachiter1_target[foreachiter1];
    {
      _push(units, deckUnit.get('type'));
      switch (deckUnit.get('type')) {
        case 'priestess':
          _push(units, 'eagle');
          break;
        case 'evolutionist':
          _push(units, 'goliath');
          _push(units, 'swarm_queen');
          break;
        case 'swarm_queen':
          _push(units, 'stalker');
          break;
      }
    }}
    
  }}
  
  return units;
};


io.nfg.wmg.models.Mission.prototype.get__description = function() {
  return this.get('options')['hide_queue'];
};


io.nfg.wmg.models.Mission.prototype.get__hide_settings = function() {
  return this.get('options')['hide_settings'];
};


io.nfg.wmg.models.Mission.prototype.set__hide_settings = function(value) {
  this.get('options')['hide_settings'] = value;
};


io.nfg.wmg.models.Mission.prototype.get__hide_queue = function() {
  return this.get('options')['hide_queue'];
};


io.nfg.wmg.models.Mission.prototype.set__hide_queue = function(value) {
  this.get('options')['hide_queue'] = value;
};


io.nfg.wmg.models.Mission.prototype.get__hide_spells = function() {
  return this.get('options')['hide_spells'];
};


io.nfg.wmg.models.Mission.prototype.set__hide_spells = function(value) {
  this.get('options')['hide_spells'] = value;
};


Object.defineProperties(io.nfg.wmg.models.Mission.prototype, /** @lends {io.nfg.wmg.models.Mission.prototype} */ {
/**
  * @export
  * @type {string} */
description: {
get: io.nfg.wmg.models.Mission.prototype.get__description},
/**
  * @export
  * @type {boolean} */
hide_settings: {
get: io.nfg.wmg.models.Mission.prototype.get__hide_settings,
set: io.nfg.wmg.models.Mission.prototype.set__hide_settings},
/**
  * @export
  * @type {boolean} */
hide_queue: {
get: io.nfg.wmg.models.Mission.prototype.get__hide_queue,
set: io.nfg.wmg.models.Mission.prototype.set__hide_queue},
/**
  * @export
  * @type {boolean} */
hide_spells: {
get: io.nfg.wmg.models.Mission.prototype.get__hide_spells,
set: io.nfg.wmg.models.Mission.prototype.set__hide_spells}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
io.nfg.wmg.models.Mission.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'Mission', qName: 'io.nfg.wmg.models.Mission', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
io.nfg.wmg.models.Mission.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {
      return {
        'description': { type: 'String', access: 'readonly', declaredBy: 'io.nfg.wmg.models.Mission'},
        'hide_settings': { type: 'Boolean', access: 'readwrite', declaredBy: 'io.nfg.wmg.models.Mission'},
        'hide_queue': { type: 'Boolean', access: 'readwrite', declaredBy: 'io.nfg.wmg.models.Mission'},
        'hide_spells': { type: 'Boolean', access: 'readwrite', declaredBy: 'io.nfg.wmg.models.Mission'}
      };
    },
    methods: function () {
      return {
        'Mission': { type: '', declaredBy: 'io.nfg.wmg.models.Mission', parameters: function () { return [  { index: 1, type: 'Object', optional: false } ]; }},
        'set': { type: 'io.nfg.core.db.AModel', declaredBy: 'io.nfg.wmg.models.Mission', parameters: function () { return [  { index: 1, type: '*', optional: false },{ index: 2, type: '*', optional: false } ]; }},
        'get': { type: '*', declaredBy: 'io.nfg.wmg.models.Mission', parameters: function () { return [  { index: 1, type: '*', optional: false } ]; }},
        'initActors': { type: 'Vector.<io.nfg.wmg.models.Actor>', declaredBy: 'io.nfg.wmg.models.Mission', parameters: function () { return [  { index: 1, type: 'Object', optional: false } ]; }},
        'initMap': { type: 'io.nfg.wmg.models.Map', declaredBy: 'io.nfg.wmg.models.Mission', parameters: function () { return [  { index: 1, type: 'Object', optional: false } ]; }},
        'getUnitList': { type: 'Array', declaredBy: 'io.nfg.wmg.models.Mission'}
      };
    }
  };
};
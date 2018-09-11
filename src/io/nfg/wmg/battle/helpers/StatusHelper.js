/**
 * Generated by Apache Royale Compiler from io/nfg/wmg/battle/helpers/StatusHelper.as
 * io.nfg.wmg.battle.helpers.StatusHelper
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('io.nfg.wmg.battle.helpers.StatusHelper');
/* Royale Static Dependency List: io.nfg.core.Tools,io.nfg.wmg.battle.helpers.StatusHelper*/

goog.require('io.nfg.core.Tools');
goog.require('io.nfg.wmg.battle.components.UnitData');
goog.require('io.nfg.wmg.utils.Resources');
goog.require('org.incubatio.Entity');



/**
 * @constructor
 */
io.nfg.wmg.battle.helpers.StatusHelper = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('io.nfg.wmg.battle.helpers.StatusHelper', io.nfg.wmg.battle.helpers.StatusHelper);


/**
 * @private
 * @type {Function}
 */
io.nfg.wmg.battle.helpers.StatusHelper._log;


/**
 * @export
 * @param {string} status
 * @param {string} property
 * @return {number}
 */
io.nfg.wmg.battle.helpers.StatusHelper.getProperty = function(status, property) {
  return io.nfg.wmg.battle.helpers.StatusHelper["statusesConfig"][status][property] != null ? io.nfg.wmg.battle.helpers.StatusHelper["statusesConfig"][status][property] : 0;
};


/**
 * @export
 * @param {org.incubatio.Entity} targetEntity
 * @param {string} status
 * @param {org.incubatio.Entity=} originEntity
 * @return {Object}
 */
io.nfg.wmg.battle.helpers.StatusHelper.addStatus = function(targetEntity, status, originEntity) {
  originEntity = typeof originEntity !== 'undefined' ? originEntity : null;
  var /** @type {Function} */ __localFn0__ = function(a, b) {
    return a.priority > b.priority;
  }
  var /** @type {Object} */ statusObject;
  var /** @type {Object} */ statusConfig;
  var /** @type {io.nfg.wmg.battle.components.UnitData} */ unit = targetEntity.getComponent(io.nfg.wmg.battle.components.UnitData);
  statusObject = io.nfg.wmg.battle.helpers.StatusHelper.getStatus(unit, status);
  statusConfig = io.nfg.wmg.battle.helpers.StatusHelper["statusesConfig"][status] || {};
  if (statusObject != null) {
    io.nfg.wmg.battle.helpers.StatusHelper._log('updating status', unit.type, statusObject);
    statusObject.stacks++;
    statusObject.originEntity = originEntity;
  } else {
    var /** @type {number} */ priority = Number(statusConfig.priority != null ? statusConfig.priority : 0);
    statusObject = {name:status, priority:priority, stacks:1, originEntity:originEntity};
    var /** @type {Object} */ statuses = unit.get('statuses');
    statuses.push(statusObject);
    unit.set('statuses', statuses.sort(__localFn0__));
    io.nfg.wmg.battle.helpers.StatusHelper._log('add status', unit.type, statusObject);
  }
  statusObject.duration = statusConfig.duration;
  if (io.nfg.wmg.battle.helpers.StatusHelper["statusesConfig"].remove != null)
    io.nfg.wmg.battle.helpers.StatusHelper.removeStatusFromUnit(unit, statusConfig.remove);
  return statusObject;
};


/**
 * @export
 * @param {io.nfg.wmg.battle.components.UnitData} unit
 * @param {string} status
 * @return {boolean}
 */
io.nfg.wmg.battle.helpers.StatusHelper.hasStatus = function(unit, status) {
  return Boolean(io.nfg.wmg.battle.helpers.StatusHelper.getStatus(unit, status));
};


/**
 * @export
 * @param {io.nfg.wmg.battle.components.UnitData} unit
 * @param {string} status
 * @return {Object}
 */
io.nfg.wmg.battle.helpers.StatusHelper.getStatus = function(unit, status) {
  var /** @type {Object} */ ret = null;
  var /** @type {Object} */ statuses = unit.get('statuses');
  var /** @type {number} */ i, /** @type {number} */ l = Number(statuses.length);
  for (i = 0; i < l; i++) {
    if (statuses[i].name == status) {
      ret = statuses[i];
      break;
    }
  }
  return ret;
};


/**
 * @export
 * @param {io.nfg.wmg.battle.components.UnitData} unit
 * @param {string} status
 */
io.nfg.wmg.battle.helpers.StatusHelper.removeStatusFromUnit = function(unit, status) {
  io.nfg.wmg.battle.helpers.StatusHelper._log('remove status', unit.type, status);
  var /** @type {Object} */ statuses = unit.get('statuses');
  var /** @type {number} */ i, /** @type {number} */ l = Number(statuses.length);
  for (i = 0; i < l; i++) {
    if (statuses[i].name == status) {
      statuses.splice(i, 1);
      break;
    }
  }
};


/**
 * @export
 * @param {org.incubatio.Entity} entity
 * @param {string} statusName
 */
io.nfg.wmg.battle.helpers.StatusHelper.removeStatus = function(entity, statusName) {
  if (io.nfg.wmg.battle.helpers.StatusHelper.hasStatus(entity.getComponent(io.nfg.wmg.battle.components.UnitData), statusName))
    io.nfg.wmg.battle.helpers.StatusHelper.removeStatusFromUnit(entity.getComponent(io.nfg.wmg.battle.components.UnitData), statusName);
};


/**
 * @export
 * @param {string} name
 * @return {string}
 */
io.nfg.wmg.battle.helpers.StatusHelper.getStatusAddVFX = function(name) {
  if (name == null)
    return "";
  if (io.nfg.wmg.battle.helpers.StatusHelper["statusesGraphicsConfig"][name] == null)
    return "";
  return io.nfg.wmg.battle.helpers.StatusHelper["statusesGraphicsConfig"][name]['vfx_onAdd'] == null ? "" : io.nfg.wmg.battle.helpers.StatusHelper["statusesGraphicsConfig"][name]['vfx_onAdd'];
};


/**
 * @export
 * @param {string} name
 * @return {string}
 */
io.nfg.wmg.battle.helpers.StatusHelper.getStatusRemoveVFX = function(name) {
  if (name == null)
    return "";
  if (io.nfg.wmg.battle.helpers.StatusHelper["statusesGraphicsConfig"][name] == null)
    return "";
  return io.nfg.wmg.battle.helpers.StatusHelper["statusesGraphicsConfig"][name]['vfx_onRemove'] == null ? "" : io.nfg.wmg.battle.helpers.StatusHelper["statusesGraphicsConfig"][name]['vfx_onRemove'];
};


/**
 * @export
 * @param {string} name
 * @return {Object}
 */
io.nfg.wmg.battle.helpers.StatusHelper.getStatusGraphicConfig = function(name) {
  if (name == null)
    return {};
  return io.nfg.wmg.battle.helpers.StatusHelper["statusesGraphicsConfig"][name] == null ? {} : io.nfg.wmg.battle.helpers.StatusHelper["statusesGraphicsConfig"][name];
};


io.nfg.wmg.battle.helpers.StatusHelper.get__statusesConfig = function() {
  return io.nfg.wmg.utils.Resources.configs.logics.statuses;
};


io.nfg.wmg.battle.helpers.StatusHelper.get__statusesGraphicsConfig = function() {
  return io.nfg.wmg.utils.Resources.configs.graphics.statuses;
};


Object.defineProperties(io.nfg.wmg.battle.helpers.StatusHelper, /** @lends {io.nfg.wmg.battle.helpers.StatusHelper} */ {
/**
  * @export
  * @type {Object} */
statusesConfig: {
get: io.nfg.wmg.battle.helpers.StatusHelper.get__statusesConfig},
/**
  * @export
  * @type {Object} */
statusesGraphicsConfig: {
get: io.nfg.wmg.battle.helpers.StatusHelper.get__statusesGraphicsConfig}}
);

io.nfg.wmg.battle.helpers.StatusHelper._log = io.nfg.core.Tools.createLogger(io.nfg.wmg.battle.helpers.StatusHelper, "statuses");




/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
io.nfg.wmg.battle.helpers.StatusHelper.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'StatusHelper', qName: 'io.nfg.wmg.battle.helpers.StatusHelper', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
io.nfg.wmg.battle.helpers.StatusHelper.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {
      return {
        '|statusesConfig': { type: 'Object', access: 'readonly', declaredBy: 'io.nfg.wmg.battle.helpers.StatusHelper'},
        '|statusesGraphicsConfig': { type: 'Object', access: 'readonly', declaredBy: 'io.nfg.wmg.battle.helpers.StatusHelper'}
      };
    },
    methods: function () {
      return {
        '|getProperty': { type: 'Number', declaredBy: 'io.nfg.wmg.battle.helpers.StatusHelper', parameters: function () { return [  { index: 1, type: 'String', optional: false },{ index: 2, type: 'String', optional: false } ]; }},
        '|addStatus': { type: 'Object', declaredBy: 'io.nfg.wmg.battle.helpers.StatusHelper', parameters: function () { return [  { index: 1, type: 'org.incubatio.Entity', optional: false },{ index: 2, type: 'String', optional: false },{ index: 3, type: 'org.incubatio.Entity', optional: true } ]; }},
        '|hasStatus': { type: 'Boolean', declaredBy: 'io.nfg.wmg.battle.helpers.StatusHelper', parameters: function () { return [  { index: 1, type: 'io.nfg.wmg.battle.components.UnitData', optional: false },{ index: 2, type: 'String', optional: false } ]; }},
        '|getStatus': { type: 'Object', declaredBy: 'io.nfg.wmg.battle.helpers.StatusHelper', parameters: function () { return [  { index: 1, type: 'io.nfg.wmg.battle.components.UnitData', optional: false },{ index: 2, type: 'String', optional: false } ]; }},
        '|removeStatusFromUnit': { type: 'void', declaredBy: 'io.nfg.wmg.battle.helpers.StatusHelper', parameters: function () { return [  { index: 1, type: 'io.nfg.wmg.battle.components.UnitData', optional: false },{ index: 2, type: 'String', optional: false } ]; }},
        '|removeStatus': { type: 'void', declaredBy: 'io.nfg.wmg.battle.helpers.StatusHelper', parameters: function () { return [  { index: 1, type: 'org.incubatio.Entity', optional: false },{ index: 2, type: 'String', optional: false } ]; }},
        '|getStatusAddVFX': { type: 'String', declaredBy: 'io.nfg.wmg.battle.helpers.StatusHelper', parameters: function () { return [  { index: 1, type: 'String', optional: false } ]; }},
        '|getStatusRemoveVFX': { type: 'String', declaredBy: 'io.nfg.wmg.battle.helpers.StatusHelper', parameters: function () { return [  { index: 1, type: 'String', optional: false } ]; }},
        '|getStatusGraphicConfig': { type: 'Object', declaredBy: 'io.nfg.wmg.battle.helpers.StatusHelper', parameters: function () { return [  { index: 1, type: 'String', optional: false } ]; }}
      };
    }
  };
};
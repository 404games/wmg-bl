/**
 * Generated by Apache Royale Compiler from io/nfg/wmg/battle/CombatsLogic.as
 * io.nfg.wmg.battle.CombatsLogic
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('io.nfg.wmg.battle.CombatsLogic');
/* Royale Static Dependency List: io.nfg.core.Tools,io.nfg.wmg.battle.CombatsLogic*/

goog.require('io.nfg.core.Pos');
goog.require('io.nfg.core.Tools');
goog.require('io.nfg.wmg.battle.components.UnitData');
goog.require('io.nfg.wmg.battle.helpers.StatusHelper');
goog.require('io.nfg.wmg.battle.helpers.UnitHelper');
goog.require('io.nfg.wmg.utils.Resources');



/**
 * @constructor
 */
io.nfg.wmg.battle.CombatsLogic = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('io.nfg.wmg.battle.CombatsLogic', io.nfg.wmg.battle.CombatsLogic);


/**
 * @private
 * @type {Function}
 */
io.nfg.wmg.battle.CombatsLogic._log;


/**
 * @export
 * @param {io.nfg.wmg.battle.components.UnitData} attackerData
 * @param {io.nfg.wmg.battle.components.UnitData} targetData
 * @param {number=} randFactor
 * @return {number}
 */
io.nfg.wmg.battle.CombatsLogic.computeDamage = function(attackerData, targetData, randFactor) {
  randFactor = typeof randFactor !== 'undefined' ? randFactor : -1;
  io.nfg.wmg.battle.CombatsLogic._log();
  var /** @type {number} */ atkDamages = 0;
  var /** @type {number} */ intDamages = 0;
  if (io.nfg.wmg.battle.helpers.UnitHelper["unitsConfig"][attackerData.type].Number) {
    intDamages += io.nfg.wmg.battle.helpers.UnitHelper.applyModifiers(attackerData, "Number");
    io.nfg.wmg.battle.CombatsLogic._log('Number damage', intDamages);
  }
  if (io.nfg.wmg.battle.helpers.UnitHelper["unitsConfig"][attackerData.type].atk) {
    atkDamages += io.nfg.wmg.battle.helpers.UnitHelper.applyModifiers(attackerData, "atk");
    io.nfg.wmg.battle.CombatsLogic._log('atk damage', atkDamages);
    if (io.nfg.wmg.battle.CombatsLogic.isBackstabbing(attackerData, targetData)) {
      atkDamages += 1;
      io.nfg.wmg.battle.CombatsLogic._log('backstab', atkDamages);
    }
    atkDamages = Math.max(1, atkDamages - io.nfg.wmg.battle.helpers.UnitHelper.applyModifiers(targetData, "def"));
    io.nfg.wmg.battle.CombatsLogic._log('damage after applying armor', atkDamages);
  }
  io.nfg.wmg.battle.CombatsLogic._log(attackerData.type + " made", io.nfg.wmg.battle.helpers.UnitHelper.applyModifiers(attackerData, "dmg", Math.ceil(atkDamages + intDamages)), "dmg to", targetData.type);
  return Math.max(1, Math.ceil(io.nfg.wmg.battle.helpers.UnitHelper.applyModifiers(attackerData, "dmg", Math.ceil(atkDamages + intDamages))));
};


/**
 * @export
 * @param {io.nfg.wmg.battle.components.UnitData} attackerData
 * @param {io.nfg.wmg.battle.components.UnitData} targetData
 * @param {string} specialName
 * @param {number=} randFactor
 * @return {number}
 */
io.nfg.wmg.battle.CombatsLogic.computeSpecialDamage = function(attackerData, targetData, specialName, randFactor) {
  randFactor = typeof randFactor !== 'undefined' ? randFactor : -1;
  var /** @type {Object} */ config = io.nfg.wmg.utils.Resources.configs.logics.specials[specialName];
  var /** @type {number} */ atkDamages = 0;
  var /** @type {number} */ intDamages = 0;
  intDamages = Number(config.Number);
  if (!intDamages) {
    atkDamages = io.nfg.wmg.battle.helpers.UnitHelper.applyModifier(io.nfg.wmg.battle.helpers.UnitHelper["unitsConfig"][attackerData.type]['atk'], config.atk);
    atkDamages = Math.max(1, atkDamages - io.nfg.wmg.battle.helpers.UnitHelper.applyModifiers(targetData, "def"));
  }
  return atkDamages + intDamages;
};


/**
 * @private
 * @param {io.nfg.wmg.battle.components.UnitData} attackerData
 * @param {io.nfg.wmg.battle.components.UnitData} targetData
 * @return {boolean}
 */
io.nfg.wmg.battle.CombatsLogic.isBackstabbing = function(attackerData, targetData) {
  if (!io.nfg.wmg.battle.helpers.StatusHelper.hasStatus(attackerData, 'backstab'))
    return false;
  var /** @type {io.nfg.core.Pos} */ aDir = attackerData.get('direction');
  var /** @type {io.nfg.core.Pos} */ tDir = targetData.get('direction');
  var /** @type {number} */ angle = Math.atan2(tDir.x * aDir.y - tDir.y * aDir.x, tDir.x * aDir.x + tDir.y * aDir.y);
  angle = (angle < 0) ? -angle : angle;
  angle = angle * 180 / Math.PI;
  if (angle < 90)
    return true;
  return false;
};


/**
 * @export
 * @param {io.nfg.wmg.battle.components.UnitData} attackerData
 * @param {io.nfg.wmg.battle.components.UnitData} targetData
 * @return {Array}
 */
io.nfg.wmg.battle.CombatsLogic.computePossibleDamage = function(attackerData, targetData) {
  return [io.nfg.wmg.battle.CombatsLogic.computeDamage(attackerData, targetData, 0), io.nfg.wmg.battle.CombatsLogic.computeDamage(attackerData, targetData, 100)];
};

io.nfg.wmg.battle.CombatsLogic._log = io.nfg.core.Tools.createLogger(io.nfg.wmg.battle.CombatsLogic, 'combat-resolution');




/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
io.nfg.wmg.battle.CombatsLogic.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'CombatsLogic', qName: 'io.nfg.wmg.battle.CombatsLogic', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
io.nfg.wmg.battle.CombatsLogic.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {return {};},
    methods: function () {
      return {
        '|computeDamage': { type: 'Number', declaredBy: 'io.nfg.wmg.battle.CombatsLogic', parameters: function () { return [  { index: 1, type: 'io.nfg.wmg.battle.components.UnitData', optional: false },{ index: 2, type: 'io.nfg.wmg.battle.components.UnitData', optional: false },{ index: 3, type: 'Number', optional: true } ]; }},
        '|computeSpecialDamage': { type: 'Number', declaredBy: 'io.nfg.wmg.battle.CombatsLogic', parameters: function () { return [  { index: 1, type: 'io.nfg.wmg.battle.components.UnitData', optional: false },{ index: 2, type: 'io.nfg.wmg.battle.components.UnitData', optional: false },{ index: 3, type: 'String', optional: false },{ index: 4, type: 'Number', optional: true } ]; }},
        '|computePossibleDamage': { type: 'Array', declaredBy: 'io.nfg.wmg.battle.CombatsLogic', parameters: function () { return [  { index: 1, type: 'io.nfg.wmg.battle.components.UnitData', optional: false },{ index: 2, type: 'io.nfg.wmg.battle.components.UnitData', optional: false } ]; }}
      };
    }
  };
};
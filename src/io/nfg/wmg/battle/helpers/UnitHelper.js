/**
 * Generated by Apache Royale Compiler from io/nfg/wmg/battle/helpers/UnitHelper.as
 * io.nfg.wmg.battle.helpers.UnitHelper
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('io.nfg.wmg.battle.helpers.UnitHelper');

goog.require('io.nfg.wmg.battle.components.UnitData');
goog.require('io.nfg.wmg.battle.helpers.StatusHelper');
goog.require('io.nfg.wmg.utils.Resources');
goog.require('org.apache.royale.utils.Language');



/**
 * @constructor
 */
io.nfg.wmg.battle.helpers.UnitHelper = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('io.nfg.wmg.battle.helpers.UnitHelper', io.nfg.wmg.battle.helpers.UnitHelper);


/**
 * @export
 * @param {io.nfg.wmg.battle.components.UnitData} unit
 * @return {boolean}
 */
io.nfg.wmg.battle.helpers.UnitHelper.isAlive = function(unit) {
  return io.nfg.wmg.battle.helpers.UnitHelper["unitsConfig"][unit["type"]]["vit"] > unit.get('damageTaken');
};


/**
 * @export
 * @param {io.nfg.wmg.battle.components.UnitData} unit
 * @return {boolean}
 */
io.nfg.wmg.battle.helpers.UnitHelper.isDead = function(unit) {
  return !io.nfg.wmg.battle.helpers.UnitHelper.isAlive(unit);
};


/**
 * @export
 * @param {io.nfg.wmg.battle.components.UnitData} unit
 * @return {number}
 */
io.nfg.wmg.battle.helpers.UnitHelper.getRiposteNum = function(unit) {
  return io.nfg.wmg.battle.helpers.UnitHelper["unitsConfig"][unit.type]["riposte"] || 1;
};


/**
 * @export
 * @param {io.nfg.wmg.battle.components.UnitData} unit
 * @return {number}
 */
io.nfg.wmg.battle.helpers.UnitHelper.getDim = function(unit) {
  return io.nfg.wmg.battle.helpers.UnitHelper["unitsConfig"][unit.type]["size"];
};


/**
 * @export
 * @param {io.nfg.wmg.battle.components.UnitData} unit
 * @return {number}
 */
io.nfg.wmg.battle.helpers.UnitHelper.getHealth = function(unit) {
  return io.nfg.wmg.battle.helpers.UnitHelper["unitsConfig"][unit.type]["vit"] - unit.get('damageTaken');
};


/**
 * @export
 * @param {io.nfg.wmg.battle.components.UnitData} unit
 */
io.nfg.wmg.battle.helpers.UnitHelper.instaKill = function(unit) {
  unit.set('damageTaken', io.nfg.wmg.battle.helpers.UnitHelper["unitsConfig"][unit.type]["vit"]);
};


/**
 * @export
 * @param {io.nfg.wmg.battle.components.UnitData} unit
 * @return {number}
 */
io.nfg.wmg.battle.helpers.UnitHelper.getHealthInPercent = function(unit) {
  return io.nfg.wmg.battle.helpers.UnitHelper.getHealth(unit) * 100 / io.nfg.wmg.battle.helpers.UnitHelper.getMaxHealth(unit);
};


/**
 * @export
 * @param {io.nfg.wmg.battle.components.UnitData} unit
 * @return {number}
 */
io.nfg.wmg.battle.helpers.UnitHelper.getMaxHealth = function(unit) {
  return io.nfg.wmg.battle.helpers.UnitHelper["unitsConfig"][unit.type]["vit"];
};


/**
 * @export
 * @param {io.nfg.wmg.battle.components.UnitData} unit
 * @return {number}
 */
io.nfg.wmg.battle.helpers.UnitHelper.getMovementRange = function(unit) {
  return io.nfg.wmg.battle.helpers.UnitHelper.applyModifiers(unit, "spd");
};


/**
 * @export
 * @param {io.nfg.wmg.battle.components.UnitData} unit
 * @param {number} roundNumbers
 * @return {number}
 */
io.nfg.wmg.battle.helpers.UnitHelper.getInitiative = function(unit, roundNumbers) {
  return (io.nfg.wmg.battle.helpers.UnitHelper.applyModifiers(unit, 'spd') * 2 + (roundNumbers % 2 == unit.get('pIndex') ? 1 : 0)) * (unit.get('hasWaited') ? -1 : 1);
};


/**
 * @export
 * @param {io.nfg.wmg.battle.components.UnitData} unit
 * @return {number}
 */
io.nfg.wmg.battle.helpers.UnitHelper.getNumberOfProjectilse = function(unit) {
  return io.nfg.wmg.battle.helpers.UnitHelper["unitsConfig"][unit.type]["mun"];
};


/**
 * @export
 * @param {number} result
 * @param {number} value
 * @return {number}
 */
io.nfg.wmg.battle.helpers.UnitHelper.applyModifier = function(result, value) {
  if (value < 1 && value > -1)
    result += result * value;
  if (value < -99 || value > 99)
    result += result * value * 0.01;
  else
    result = result + value;
  return result < 0 ? Math.floor(result) : Math.ceil(result);
};


/**
 * Used for applying stat modifier that affect numeric value like health
 * @export
 * @param {io.nfg.wmg.battle.components.UnitData} unit
 * @param {string} statName
 * @param {number=} result
 * @return {number}
 */
io.nfg.wmg.battle.helpers.UnitHelper.applyModifiers = function(unit, statName, result) {
  result = typeof result !== 'undefined' ? result : -1;
  var /** @type {Object} */ status, /** @type {number} */ value;
  if (result < 0)
    result = Number(io.nfg.wmg.battle.helpers.UnitHelper["unitsConfig"][unit.type][statName]);
  var /** @type {Object} */ statusConfig;
  var foreachiter0_target = unit.get('statuses');
  for (var foreachiter0 in foreachiter0_target) 
  {
  status = foreachiter0_target[foreachiter0];
  {
    statusConfig = io.nfg.wmg.battle.helpers.StatusHelper["statusesConfig"][status.name];
    value = Number(statusConfig[statName]);
    if (value && value != 0) {
      result = io.nfg.wmg.battle.helpers.UnitHelper.applyModifier(result, value);
    }
  }}
  
  return result < 0 ? Math.floor(result) : Math.ceil(result);
};


/**
 * Changes the amount of damage the unit took. If checkForSleep is set to true the method is going to remove the sleep status when applying damage (not on healing)
 * @asparam unit
 * @asparam amount
 * @asparam checkForSleep
 * @export
 * @param {io.nfg.wmg.battle.components.UnitData} unit
 * @param {number} amount
 * @param {boolean=} checkForSleep
 */
io.nfg.wmg.battle.helpers.UnitHelper.changeDamageTaken = function(unit, amount, checkForSleep) {
  checkForSleep = typeof checkForSleep !== 'undefined' ? checkForSleep : true;
  unit.set('damageTaken', unit.get('damageTaken') + amount);
  if (checkForSleep && amount > 0) {
    if (io.nfg.wmg.battle.helpers.StatusHelper.hasStatus(unit, 'stunned'))
      io.nfg.wmg.battle.helpers.StatusHelper.removeStatusFromUnit(unit, 'stunned');
  }
};


/**
 * Used for AI calculations
 * @export
 * @param {io.nfg.wmg.battle.components.UnitData} unit
 * @return {boolean}
 */
io.nfg.wmg.battle.helpers.UnitHelper.isRanged = function(unit) {
  return unit.get('ammo') > 0 && !io.nfg.wmg.battle.helpers.StatusHelper.hasStatus(unit, 'forced_melee');
};


/**
 * @export
 * @param {io.nfg.wmg.battle.components.UnitData} unit
 * @return {boolean}
 */
io.nfg.wmg.battle.helpers.UnitHelper.isTraversingObstacle = function(unit) {
  return Boolean(io.nfg.wmg.battle.helpers.UnitHelper["unitsConfig"][unit.type]["traverse"]);
};


/**
 * @export
 * @param {io.nfg.wmg.battle.components.UnitData} unit
 * @return {boolean}
 */
io.nfg.wmg.battle.helpers.UnitHelper.isFlying = function(unit) {
  return Boolean(io.nfg.wmg.battle.helpers.UnitHelper["unitsConfig"][unit.type]["flying"]);
};


/**
 * @export
 * @param {io.nfg.wmg.battle.components.UnitData} unit
 * @param {string} specialName
 * @return {boolean}
 */
io.nfg.wmg.battle.helpers.UnitHelper.hasSpecial = function(unit, specialName) {
  var /** @type {Object} */ unitConfig = io.nfg.wmg.battle.helpers.UnitHelper["unitsConfig"][unit.type];
  var /** @type {number} */ specialIndex = Number(unitConfig.specials.indexOf(specialName));
  return specialIndex > -1 && unit.deckUnit.hasUpgrade(specialIndex);
};


/**
 * @export
 * @param {io.nfg.wmg.battle.components.UnitData} unit
 * @return {boolean}
 */
io.nfg.wmg.battle.helpers.UnitHelper.canReact = function(unit) {
  return unit.get('riposteDoneNum') < io.nfg.wmg.battle.helpers.UnitHelper.getRiposteNum(unit);
};


/**
 * @export
 * @param {io.nfg.wmg.battle.components.UnitData} unit
 */
io.nfg.wmg.battle.helpers.UnitHelper.reacted = function(unit) {
  unit.set('riposteDoneNum', unit.get('riposteDoneNum') + 1);
};


/**
 * @export
 * @param {io.nfg.wmg.battle.components.UnitData} unit1
 * @param {io.nfg.wmg.battle.components.UnitData} unit2
 * @return {boolean}
 */
io.nfg.wmg.battle.helpers.UnitHelper.isAlly = function(unit1, unit2) {
  return unit1.get('pIndex') == unit2.get('pIndex');
};


/** Estimate unit cost according to its stats
 * def scale exponentially as it reduce % of damage from atk.
 * spd scale with atk
 *
 * formula:
 *   vitPts = health * 2
 *   defPts = heath / (1 - x * .01) - health
 *   dmgPts = attack * UnitTypeModifier + inteligence * magicModifier * UnitTypeModifier
 *   spdPts = (3 * 0.2 * (dmgMin + dmgMax))
 *   S = vitPts + defPts + dmgPts + spdPts
 *
 * UnitTypeModifier:
 *   - ranged unit : 3
 *   - flying unit : 2 or 1.5 or 1 (YoU DeeCiddEEeee)
 *   - melee  unit : 1
 *   - magic atk : 1.2
 *
 * Examples:
 *   - pikeman pt:  (30 * 2) + (30 * 2 * 0.2 ) + (8  * 1) + ( .2 * 8  * 3) = 85
 *   - archer pt:   (20 * 2) + (20 * 2 * 0.05) + (6  * 4) + ( .2 * 6  * 3) = 70
 *   - eagle pt:    (25 * 2) + (25 * 2 * 0.1 ) + (12 * 2) + ( .2 * 12 * 5) = 91
 *
 * Balance:
 *   - melee > flying
 *   - flying > ranged
 *   - ranged > melee
 *
 * Balance bis:
 *   - atk > vit > mag > def > atk
 * @export
 * @param {string} unitType
 * @return {number}
 */
io.nfg.wmg.battle.helpers.UnitHelper.computeUnitCost = function(unitType) {
  var /** @type {Object} */ unit = io.nfg.wmg.battle.helpers.UnitHelper["unitsConfig"][unitType];
  var /** @type {number} */ atk;
  var /** @type {number} */ mag;
  var /** @type {number} */ raw_atk;
  var /** @type {number} */ raw_mag;
  raw_atk = atk = Number(org.apache.royale.utils.Language.is(unit.atk, Array) ? unit.atk[0] + unit.atk[1] : unit.atk * 2);
  raw_mag = mag = unit.mag * 2 || 0;
  atk *= 2;
  mag *= 2;
  if (unit.mag)
    mag *= 1.5;
  if (unit.mun) {
    atk *= 2;
    mag *= 2;
  }
  else if (unit.traverse)
    atk *= 1.5;
  return Math.round(unit.vit * 2 + (unit.vit / (1 - unit.def * 0.01) - unit.vit) + atk + mag + .4 * (raw_atk + raw_mag) * unit.spd);
};


io.nfg.wmg.battle.helpers.UnitHelper.get__unitsConfig = function() {
  return io.nfg.wmg.utils.Resources.configs.logics.units;
};


Object.defineProperties(io.nfg.wmg.battle.helpers.UnitHelper, /** @lends {io.nfg.wmg.battle.helpers.UnitHelper} */ {
/**
  * @export
  * @type {Object} */
unitsConfig: {
get: io.nfg.wmg.battle.helpers.UnitHelper.get__unitsConfig}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
io.nfg.wmg.battle.helpers.UnitHelper.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'UnitHelper', qName: 'io.nfg.wmg.battle.helpers.UnitHelper', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
io.nfg.wmg.battle.helpers.UnitHelper.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {
      return {
        '|unitsConfig': { type: 'Object', access: 'readonly', declaredBy: 'io.nfg.wmg.battle.helpers.UnitHelper'}
      };
    },
    methods: function () {
      return {
        '|isAlive': { type: 'Boolean', declaredBy: 'io.nfg.wmg.battle.helpers.UnitHelper', parameters: function () { return [  { index: 1, type: 'io.nfg.wmg.battle.components.UnitData', optional: false } ]; }},
        '|isDead': { type: 'Boolean', declaredBy: 'io.nfg.wmg.battle.helpers.UnitHelper', parameters: function () { return [  { index: 1, type: 'io.nfg.wmg.battle.components.UnitData', optional: false } ]; }},
        '|getRiposteNum': { type: 'Number', declaredBy: 'io.nfg.wmg.battle.helpers.UnitHelper', parameters: function () { return [  { index: 1, type: 'io.nfg.wmg.battle.components.UnitData', optional: false } ]; }},
        '|getDim': { type: 'Number', declaredBy: 'io.nfg.wmg.battle.helpers.UnitHelper', parameters: function () { return [  { index: 1, type: 'io.nfg.wmg.battle.components.UnitData', optional: false } ]; }},
        '|getHealth': { type: 'Number', declaredBy: 'io.nfg.wmg.battle.helpers.UnitHelper', parameters: function () { return [  { index: 1, type: 'io.nfg.wmg.battle.components.UnitData', optional: false } ]; }},
        '|instaKill': { type: 'void', declaredBy: 'io.nfg.wmg.battle.helpers.UnitHelper', parameters: function () { return [  { index: 1, type: 'io.nfg.wmg.battle.components.UnitData', optional: false } ]; }},
        '|getHealthInPercent': { type: 'Number', declaredBy: 'io.nfg.wmg.battle.helpers.UnitHelper', parameters: function () { return [  { index: 1, type: 'io.nfg.wmg.battle.components.UnitData', optional: false } ]; }},
        '|getMaxHealth': { type: 'Number', declaredBy: 'io.nfg.wmg.battle.helpers.UnitHelper', parameters: function () { return [  { index: 1, type: 'io.nfg.wmg.battle.components.UnitData', optional: false } ]; }},
        '|getMovementRange': { type: 'Number', declaredBy: 'io.nfg.wmg.battle.helpers.UnitHelper', parameters: function () { return [  { index: 1, type: 'io.nfg.wmg.battle.components.UnitData', optional: false } ]; }},
        '|getInitiative': { type: 'Number', declaredBy: 'io.nfg.wmg.battle.helpers.UnitHelper', parameters: function () { return [  { index: 1, type: 'io.nfg.wmg.battle.components.UnitData', optional: false },{ index: 2, type: 'Number', optional: false } ]; }},
        '|getNumberOfProjectilse': { type: 'Number', declaredBy: 'io.nfg.wmg.battle.helpers.UnitHelper', parameters: function () { return [  { index: 1, type: 'io.nfg.wmg.battle.components.UnitData', optional: false } ]; }},
        '|applyModifier': { type: 'Number', declaredBy: 'io.nfg.wmg.battle.helpers.UnitHelper', parameters: function () { return [  { index: 1, type: 'Number', optional: false },{ index: 2, type: 'Number', optional: false } ]; }},
        '|applyModifiers': { type: 'Number', declaredBy: 'io.nfg.wmg.battle.helpers.UnitHelper', parameters: function () { return [  { index: 1, type: 'io.nfg.wmg.battle.components.UnitData', optional: false },{ index: 2, type: 'String', optional: false },{ index: 3, type: 'Number', optional: true } ]; }},
        '|changeDamageTaken': { type: 'void', declaredBy: 'io.nfg.wmg.battle.helpers.UnitHelper', parameters: function () { return [  { index: 1, type: 'io.nfg.wmg.battle.components.UnitData', optional: false },{ index: 2, type: 'Number', optional: false },{ index: 3, type: 'Boolean', optional: true } ]; }},
        '|isRanged': { type: 'Boolean', declaredBy: 'io.nfg.wmg.battle.helpers.UnitHelper', parameters: function () { return [  { index: 1, type: 'io.nfg.wmg.battle.components.UnitData', optional: false } ]; }},
        '|isTraversingObstacle': { type: 'Boolean', declaredBy: 'io.nfg.wmg.battle.helpers.UnitHelper', parameters: function () { return [  { index: 1, type: 'io.nfg.wmg.battle.components.UnitData', optional: false } ]; }},
        '|isFlying': { type: 'Boolean', declaredBy: 'io.nfg.wmg.battle.helpers.UnitHelper', parameters: function () { return [  { index: 1, type: 'io.nfg.wmg.battle.components.UnitData', optional: false } ]; }},
        '|hasSpecial': { type: 'Boolean', declaredBy: 'io.nfg.wmg.battle.helpers.UnitHelper', parameters: function () { return [  { index: 1, type: 'io.nfg.wmg.battle.components.UnitData', optional: false },{ index: 2, type: 'String', optional: false } ]; }},
        '|canReact': { type: 'Boolean', declaredBy: 'io.nfg.wmg.battle.helpers.UnitHelper', parameters: function () { return [  { index: 1, type: 'io.nfg.wmg.battle.components.UnitData', optional: false } ]; }},
        '|reacted': { type: 'void', declaredBy: 'io.nfg.wmg.battle.helpers.UnitHelper', parameters: function () { return [  { index: 1, type: 'io.nfg.wmg.battle.components.UnitData', optional: false } ]; }},
        '|isAlly': { type: 'Boolean', declaredBy: 'io.nfg.wmg.battle.helpers.UnitHelper', parameters: function () { return [  { index: 1, type: 'io.nfg.wmg.battle.components.UnitData', optional: false },{ index: 2, type: 'io.nfg.wmg.battle.components.UnitData', optional: false } ]; }},
        '|computeUnitCost': { type: 'Number', declaredBy: 'io.nfg.wmg.battle.helpers.UnitHelper', parameters: function () { return [  { index: 1, type: 'String', optional: false } ]; }}
      };
    }
  };
};
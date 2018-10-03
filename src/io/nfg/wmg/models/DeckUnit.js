/**
 * Generated by Apache Royale Compiler from io/nfg/wmg/models/DeckUnit.as
 * io.nfg.wmg.models.DeckUnit
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('io.nfg.wmg.models.DeckUnit');

goog.require('io.nfg.core.Tools');
goog.require('io.nfg.core.db.AModel');
goog.require('io.nfg.wmg.helpers.DeckHelper');
goog.require('io.nfg.wmg.utils.Resources');
goog.require('org.apache.royale.utils.Language');



/**
 * @constructor
 * @extends {io.nfg.core.db.AModel}
 * @param {Object} data
 */
io.nfg.wmg.models.DeckUnit = function(data) {
  
  this._getters = {};
  io.nfg.wmg.models.DeckUnit.base(this, 'constructor', data, io.nfg.wmg.models.DeckUnit.__schema, io.nfg.wmg.models.DeckUnit.__defaults);
  this._getters = {typeIndex:org.apache.royale.utils.Language.closure(this.getUnitIndex, this, 'getUnitIndex'), armyIndex:org.apache.royale.utils.Language.closure(this.getSpecieIndex, this, 'getSpecieIndex'), type:org.apache.royale.utils.Language.closure(this.getType, this, 'getType'), level:org.apache.royale.utils.Language.closure(this.getLevel, this, 'getLevel'), name:org.apache.royale.utils.Language.closure(this.getName, this, 'getName')};
};
goog.inherits(io.nfg.wmg.models.DeckUnit, io.nfg.core.db.AModel);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('io.nfg.wmg.models.DeckUnit', io.nfg.wmg.models.DeckUnit);


/**
 * @private
 * @type {Object}
 */
io.nfg.wmg.models.DeckUnit.prototype._getters;


/**
 * @private
 * @const
 * @type {Object}
 */
io.nfg.wmg.models.DeckUnit.__schema = {id:Number, typeIndex:Number, armyIndex:Number, name:String, type:String, upgrades:String, fn:Number, ln:Number, pos:Array, xp:Number, applyStatuses:Array, dmg:Number, direction:Array};


/**
 * @private
 * @return {Object}
 */
io.nfg.wmg.models.DeckUnit.__defaults = function() {
  return {armyIndex:-1, typeIndex:-1, upgrades:'', fn:-1, ln:-1};
};


/**
 * @private
 * @type {Array}
 */
io.nfg.wmg.models.DeckUnit.prototype._specials;


/**
 * @private
 * @type {Object}
 */
io.nfg.wmg.models.DeckUnit.prototype._statModifiers;


/**
 * @export
 * @return {number}
 */
io.nfg.wmg.models.DeckUnit.prototype.getUnitIndex = function() {
  if (io.nfg.wmg.utils.Resources.configs && io.nfg.wmg.models.DeckUnit.superClass_.get.apply(this, [ 'typeIndex'] ) == -1 && io.nfg.wmg.models.DeckUnit.superClass_.get.apply(this, [ 'type'] ))
    io.nfg.wmg.models.DeckUnit.superClass_.set.apply(this, [ 'typeIndex', io.nfg.wmg.helpers.DeckHelper.getUnitIndexFromType(io.nfg.wmg.models.DeckUnit.superClass_.get.apply(this, [ 'type'] ))] );
  return io.nfg.wmg.models.DeckUnit.superClass_.get.apply(this, [ 'typeIndex'] );
};


/**
 * @export
 * @return {number}
 */
io.nfg.wmg.models.DeckUnit.prototype.getSpecieIndex = function() {
  if (io.nfg.wmg.utils.Resources.configs && io.nfg.wmg.models.DeckUnit.superClass_.get.apply(this, [ 'armyIndex'] ) == -1 && io.nfg.wmg.models.DeckUnit.superClass_.get.apply(this, [ 'type'] ))
    io.nfg.wmg.models.DeckUnit.superClass_.set.apply(this, [ 'armyIndex', io.nfg.wmg.helpers.DeckHelper.getSpecieIndexFromType(io.nfg.wmg.models.DeckUnit.superClass_.get.apply(this, [ 'type'] ))] );
  return io.nfg.wmg.models.DeckUnit.superClass_.get.apply(this, [ 'armyIndex'] );
};


/**
 * @export
 * @return {string}
 */
io.nfg.wmg.models.DeckUnit.prototype.getType = function() {
  if (io.nfg.wmg.utils.Resources.configs && io.nfg.wmg.models.DeckUnit.superClass_.get.apply(this, [ 'type'] ) == null && io.nfg.wmg.models.DeckUnit.superClass_.get.apply(this, [ 'typeIndex'] ) > -1 && io.nfg.wmg.models.DeckUnit.superClass_.get.apply(this, [ 'armyIndex'] ) > -1)
    io.nfg.wmg.models.DeckUnit.superClass_.set.apply(this, [ 'type', io.nfg.wmg.helpers.DeckHelper.getUnitTypeFromIndexes(io.nfg.wmg.models.DeckUnit.superClass_.get.apply(this, [ 'armyIndex'] ), io.nfg.wmg.models.DeckUnit.superClass_.get.apply(this, [ 'typeIndex'] ))] );
  return io.nfg.wmg.models.DeckUnit.superClass_.get.apply(this, [ 'type'] );
};


/**
 * @export
 * @return {number}
 */
io.nfg.wmg.models.DeckUnit.prototype.getLevel = function() {
  var /** @type {string} */ upgrades = org.apache.royale.utils.Language.string(this.get('upgrades') || '');
  return upgrades.length == 0 ? 1 : (upgrades.match(/-/g) || []).length + 2;
};


/**
 * @export
 * @return {string}
 */
io.nfg.wmg.models.DeckUnit.prototype.getFirstName = function() {
  var /** @type {number} */ rand1 = Number(this.get('fn'));
  var /** @type {number} */ armyIndex = Number(this.get('armyIndex'));
  var /** @type {number} */ typeIndex = Number(this.get('typeIndex'));
  var /** @type {Object} */ menusConfig = io.nfg.wmg.utils.Resources.configs.graphics.menus;
  var /** @type {string} */ armyName = org.apache.royale.utils.Language.string(menusConfig.armies[armyIndex]);
  var /** @type {string} */ unitType = org.apache.royale.utils.Language.string(menusConfig[armyName][typeIndex]);
  var /** @type {number} */ sex = Number(io.nfg.wmg.utils.Resources.configs.graphics.units[unitType].sex);
  var /** @type {Array} */ firstNames = sex > 0 ? menusConfig.female_fn : menusConfig.male_fn;
  return io.nfg.core.Tools.ucFirst(firstNames[armyIndex][rand1]);
};


/**
 * @export
 * @return {string}
 */
io.nfg.wmg.models.DeckUnit.prototype.getLastName = function() {
  var /** @type {number} */ rand2 = Number(this.get('ln'));
  var /** @type {number} */ armyIndex = Number(this.get('armyIndex'));
  var /** @type {Object} */ menusConfig = io.nfg.wmg.utils.Resources.configs.graphics.menus;
  return io.nfg.core.Tools.ucFirst(menusConfig.last_names[armyIndex][rand2]);
};


/**
 * @export
 * @return {string}
 */
io.nfg.wmg.models.DeckUnit.prototype.getName = function() {
  return io.nfg.wmg.models.DeckUnit.superClass_.get.apply(this, [ 'name'] ) || (io.nfg.wmg.utils.Resources.configs ? this.getFirstName() + ' ' + this.getLastName() : '');
};


/**
 * @export
 * @return {string}
 */
io.nfg.wmg.models.DeckUnit.prototype.getShortName = function() {
  return this.getFirstName() + ' ' + this.getLastName().substr(0, 1) + '.';
};


/**
 * @export
 * @return {number}
 */
io.nfg.wmg.models.DeckUnit.prototype.getTotalUpgrades = function() {
  var /** @type {number} */ availableUpgrades = 0;
  var /** @type {Array} */ xpLevels = io.nfg.wmg.utils.Resources.configs.logics.units.lvls;
  var /** @type {number} */ xpLevel;
  var /** @type {number} */ xpCounter = Number(this.get('xp'));
  var foreachiter0_target = xpLevels;
  for (var foreachiter0 in foreachiter0_target) 
  {
  xpLevel = foreachiter0_target[foreachiter0];
  {
    xpCounter -= xpLevel;
    if (xpCounter < 0)
      break;
    availableUpgrades++;
  }}
  
  return availableUpgrades;
};


/**
 * @export
 * @return {number}
 */
io.nfg.wmg.models.DeckUnit.prototype.getAvailableUpgrades = function() {
  return this.getTotalUpgrades() - this.getLevel();
};


/**
 * @export
 * @return {Object}
 */
io.nfg.wmg.models.DeckUnit.prototype.getXpThreshold = function() {
  var /** @type {number} */ availableUpgrades = 0;
  var /** @type {Array} */ xpLevels = io.nfg.wmg.utils.Resources.configs.logics.units.lvls;
  var /** @type {Object} */ result = {};
  var /** @type {number} */ i;
  result.xpCounter = this.get('xp');
  for (i in xpLevels) {
    result.threshold = xpLevels[i];
    if (result.xpCounter < xpLevels[i])
      return result;
    result.xpCounter -= xpLevels[i];
  }
  result.threshold = -1;
  return result;
};


/**
 * @export
 * @override
 */
io.nfg.wmg.models.DeckUnit.prototype.set = function(key, value) {
  if (key == 'upgrades' && org.apache.royale.utils.Language.is(value, String))
    this._upgradeInitialized = false;
  return io.nfg.wmg.models.DeckUnit.superClass_.set.apply(this, [ key, value] );
};


/**
 * @export
 * @override
 */
io.nfg.wmg.models.DeckUnit.prototype.get = function(key) {
  if (this._getters.hasOwnProperty(key))
    return this._getters[key]();
  return io.nfg.wmg.models.DeckUnit.superClass_.get.apply(this, [ key] );
};


/**
 * @export
 * @param {string} str
 * @return {io.nfg.wmg.models.DeckUnit}
 */
io.nfg.wmg.models.DeckUnit.fromString = function(str) {
  var /** @type {Array} */ d = str.split(',');
  return new io.nfg.wmg.models.DeckUnit({fn:d[0], ln:d[1], armyIndex:d[2], typeIndex:d[3], upgrades:d[4], xp:d[5]});
};


/**
 * @export
 * @return {Array}
 */
io.nfg.wmg.models.DeckUnit.prototype.toArray = function() {
  return [this.get('fn'), this.get('ln'), this.get('armyIndex'), this.get('typeIndex'), this.get('upgrades'), this.get('xp')];
};


/**
 * @export
 * @param {number} specialIndex
 * @return {boolean}
 */
io.nfg.wmg.models.DeckUnit.prototype.hasUpgrade = function(specialIndex) {
  var /** @type {string} */ upgradesStr = org.apache.royale.utils.Language.string(this.get('upgrades'));
  return upgradesStr && (upgradesStr.match(new RegExp('\\b' + specialIndex + '\\b')) || []).length > 0;
};


/**
 * @export
 * @param {number} specialIndex
 */
io.nfg.wmg.models.DeckUnit.prototype.lockSkill = function(specialIndex) {
  var /** @type {string} */ upgradesStr = org.apache.royale.utils.Language.string(this.get('upgrades'));
  var /** @type {Array} */ upgrades;
  var /** @type {string} */ type = org.apache.royale.utils.Language.string(this.get('type'));
  var /** @type {Object} */ unitConfig = io.nfg.wmg.utils.Resources.configs.logics.units[type];
  if (this.hasUpgrade(specialIndex) == false)
    throw 'can\'t cancel unexisting upgrade';
  upgrades = upgradesStr.split('-').slice();
  upgrades.splice(upgrades.indexOf(specialIndex), 1);
  upgradesStr = upgrades.join('-');
  org.apache.royale.utils.Language.trace('set upgrades2', upgradesStr);
  this.set('upgrades', upgradesStr);
};


/**
 * @export
 * @param {*} specialName
 * @return {boolean}
 */
io.nfg.wmg.models.DeckUnit.prototype.isUnlockable = function(specialName) {
  var /** @type {Object} */ unitConfig = io.nfg.wmg.utils.Resources.configs.logics.units[this.get('type')];
  var /** @type {number} */ specialLevel = Number(specialName.substr(-1, 1));
  var /** @type {string} */ specialNameReq = org.apache.royale.utils.Language.string(specialName.substr(0, specialName.length - 1) + (specialLevel - 1));
  var /** @type {number} */ specialIndexReq = Number(unitConfig.specials.indexOf(specialNameReq));
  return specialIndexReq == -1 || (specialIndexReq > -1 && this.hasUpgrade(specialIndexReq));
};


/**
 * @export
 * @param {number} specialIndex
 */
io.nfg.wmg.models.DeckUnit.prototype.unlockSkill = function(specialIndex) {
  var /** @type {string} */ type = org.apache.royale.utils.Language.string(this.get('type'));
  var /** @type {string} */ specialName = org.apache.royale.utils.Language.string(this.allSpecials[specialIndex]);
  var /** @type {Object} */ specialConfig = io.nfg.wmg.utils.Resources.configs.logics.specials[specialName];
  var /** @type {Object} */ unitConfig = io.nfg.wmg.utils.Resources.configs.logics.units[type];
  var /** @type {string} */ upgradesStr = org.apache.royale.utils.Language.string(this.get('upgrades'));
  if (specialIndex < 0)
    throw 'Special ' + specialName + ' is not available for ' + type;
  if (this.hasUpgrade(specialIndex))
    throw 'Special ' + specialName + ' has already been unlocked for ' + type;
  if (this.isUnlockable(specialName) == false)
    throw 'Special ' + specialName + ' requires previous level to be unlocked first';
  if (!upgradesStr)
    upgradesStr = '' + specialIndex;
  else
    upgradesStr += '-' + specialIndex;
  this.set('upgrades', upgradesStr);
  org.apache.royale.utils.Language.trace('set upgrades', upgradesStr);
};


/**
 * @export
 * @return {string}
 */
io.nfg.wmg.models.DeckUnit.prototype.toString = function() {
  return this.toArray().join(',');
};


/**
 * @private
 * @type {boolean}
 */
io.nfg.wmg.models.DeckUnit.prototype._upgradeInitialized = false;


/**
 * @private
 */
io.nfg.wmg.models.DeckUnit.prototype._initUpgrades = function() {
  if (this._upgradeInitialized)
    return;
  var /** @type {Array} */ specialIndexes = this.get('upgrades').split('-');
  var /** @type {string} */ special;
  var /** @type {string} */ specialType;
  var /** @type {Array} */ buffList = [];
  var /** @type {number} */ i, /** @type {number} */ index;
  var /** @type {Array} */ specials = org.apache.royale.utils.Language.Vector();
  var /** @type {Object} */ statModifiers = {atk:0, mag:0, vit:0, def:0, spd:0};
  var /** @type {number} */ statValue;
  var /** @type {string} */ statKey;
  for (i = specialIndexes.length - 1; i > -1; i--) {
    if (specialIndexes[i] && specialIndexes[i].length > 0) {
      index = Number(specialIndexes[i]);
      special = org.apache.royale.utils.Language.string(this.allSpecials[index]);
      specialType = special.substr(0, special.length - 1);
      statValue = Number(special.substr(0, 1));
      if (isNaN(statValue)) {
        if (buffList.indexOf(specialType) == -1) {
          buffList.push(specialType);
          specials.push(specialIndexes[i]);
        }
      } else {
        statKey = special.substr(1);
        statModifiers[statKey] += statValue;
      }
    }
  }
  this._specials = specials;
  this._statModifiers = statModifiers;
  this._upgradeInitialized = true;
};


/**
 * @export
 * @return {Array}
 */
io.nfg.wmg.models.DeckUnit.prototype.getSpecials = function() {
  this._initUpgrades();
  return this._specials;
};


/**
 * @export
 * @return {Object}
 */
io.nfg.wmg.models.DeckUnit.prototype.getStatModifiers = function() {
  this._initUpgrades();
  return this._statModifiers;
};


/**
 * @export
 * @param {string} statName
 * @return {number}
 */
io.nfg.wmg.models.DeckUnit.prototype.getStat = function(statName) {
  var /** @type {Object} */ unitConfs = io.nfg.wmg.utils.Resources.configs.logics.units;
  return unitConfs[this.get('type')][statName] + this.getStatModifiers()[statName];
};


io.nfg.wmg.models.DeckUnit.prototype.get__allSpecials = function() {
  return io.nfg.wmg.utils.Resources.configs.logics.units[this.get('type')].specials;
};


Object.defineProperties(io.nfg.wmg.models.DeckUnit.prototype, /** @lends {io.nfg.wmg.models.DeckUnit.prototype} */ {
/**
  * @export
  * @type {Object} */
allSpecials: {
get: io.nfg.wmg.models.DeckUnit.prototype.get__allSpecials}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
io.nfg.wmg.models.DeckUnit.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'DeckUnit', qName: 'io.nfg.wmg.models.DeckUnit', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
io.nfg.wmg.models.DeckUnit.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {
      return {
        'allSpecials': { type: 'Object', access: 'readonly', declaredBy: 'io.nfg.wmg.models.DeckUnit'}
      };
    },
    methods: function () {
      return {
        'DeckUnit': { type: '', declaredBy: 'io.nfg.wmg.models.DeckUnit', parameters: function () { return [  { index: 1, type: 'Object', optional: false } ]; }},
        'getUnitIndex': { type: 'Number', declaredBy: 'io.nfg.wmg.models.DeckUnit'},
        'getSpecieIndex': { type: 'Number', declaredBy: 'io.nfg.wmg.models.DeckUnit'},
        'getType': { type: 'String', declaredBy: 'io.nfg.wmg.models.DeckUnit'},
        'getLevel': { type: 'Number', declaredBy: 'io.nfg.wmg.models.DeckUnit'},
        'getFirstName': { type: 'String', declaredBy: 'io.nfg.wmg.models.DeckUnit'},
        'getLastName': { type: 'String', declaredBy: 'io.nfg.wmg.models.DeckUnit'},
        'getName': { type: 'String', declaredBy: 'io.nfg.wmg.models.DeckUnit'},
        'getShortName': { type: 'String', declaredBy: 'io.nfg.wmg.models.DeckUnit'},
        'getTotalUpgrades': { type: 'Number', declaredBy: 'io.nfg.wmg.models.DeckUnit'},
        'getAvailableUpgrades': { type: 'Number', declaredBy: 'io.nfg.wmg.models.DeckUnit'},
        'getXpThreshold': { type: 'Object', declaredBy: 'io.nfg.wmg.models.DeckUnit'},
        'set': { type: 'io.nfg.core.db.AModel', declaredBy: 'io.nfg.wmg.models.DeckUnit', parameters: function () { return [  { index: 1, type: '*', optional: false },{ index: 2, type: '*', optional: false } ]; }},
        'get': { type: '*', declaredBy: 'io.nfg.wmg.models.DeckUnit', parameters: function () { return [  { index: 1, type: '*', optional: false } ]; }},
        '|fromString': { type: 'io.nfg.wmg.models.DeckUnit', declaredBy: 'io.nfg.wmg.models.DeckUnit', parameters: function () { return [  { index: 1, type: 'String', optional: false } ]; }},
        'toArray': { type: 'Array', declaredBy: 'io.nfg.wmg.models.DeckUnit'},
        'hasUpgrade': { type: 'Boolean', declaredBy: 'io.nfg.wmg.models.DeckUnit', parameters: function () { return [  { index: 1, type: 'Number', optional: false } ]; }},
        'lockSkill': { type: 'void', declaredBy: 'io.nfg.wmg.models.DeckUnit', parameters: function () { return [  { index: 1, type: 'Number', optional: false } ]; }},
        'isUnlockable': { type: 'Boolean', declaredBy: 'io.nfg.wmg.models.DeckUnit', parameters: function () { return [  { index: 1, type: '*', optional: false } ]; }},
        'unlockSkill': { type: 'void', declaredBy: 'io.nfg.wmg.models.DeckUnit', parameters: function () { return [  { index: 1, type: 'Number', optional: false } ]; }},
        'toString': { type: 'String', declaredBy: 'io.nfg.wmg.models.DeckUnit'},
        'getSpecials': { type: 'Vector.<Number>', declaredBy: 'io.nfg.wmg.models.DeckUnit'},
        'getStatModifiers': { type: 'Object', declaredBy: 'io.nfg.wmg.models.DeckUnit'},
        'getStat': { type: 'Number', declaredBy: 'io.nfg.wmg.models.DeckUnit', parameters: function () { return [  { index: 1, type: 'String', optional: false } ]; }}
      };
    }
  };
};
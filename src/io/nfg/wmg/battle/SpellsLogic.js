/**
 * Generated by Apache Royale Compiler from io/nfg/wmg/battle/SpellsLogic.as
 * io.nfg.wmg.battle.SpellsLogic
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('io.nfg.wmg.battle.SpellsLogic');
/* Royale Static Dependency List: io.nfg.core.Tools,io.nfg.wmg.battle.SpellsLogic*/

goog.require('io.nfg.core.Pos');
goog.require('io.nfg.core.Tools');
goog.require('io.nfg.wmg.battle.BattleLogic');
goog.require('io.nfg.wmg.battle.Mechanics');
goog.require('io.nfg.wmg.battle.components.UnitData');
goog.require('io.nfg.wmg.battle.helpers.StatusHelper');
goog.require('io.nfg.wmg.battle.helpers.UnitHelper');
goog.require('org.incubatio.Entity');



/**
 * @constructor
 */
io.nfg.wmg.battle.SpellsLogic = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('io.nfg.wmg.battle.SpellsLogic', io.nfg.wmg.battle.SpellsLogic);


/**
 * @private
 * @type {Function}
 */
io.nfg.wmg.battle.SpellsLogic._log;


/**
 * @private
 * @type {Array}
 */
io.nfg.wmg.battle.SpellsLogic._auras = [];


/**
 * @export
 * @param {io.nfg.wmg.battle.BattleLogic} battle
 * @param {io.nfg.core.Pos} targetPos
 * @param {Array} targets
 * @param {Object} config
 * @return {Object}
 */
io.nfg.wmg.battle.SpellsLogic.__generic = function(battle, targetPos, targets, config) {
  io.nfg.wmg.battle.SpellsLogic._log('Spell:', config);
  var /** @type {string} */ status;
  var /** @type {org.incubatio.Entity} */ targetEntity;
  var /** @type {io.nfg.wmg.battle.components.UnitData} */ targetUnit;
  var /** @type {io.nfg.core.Pos} */ directionVector;
  var /** @type {number} */ distance;
  var /** @type {number} */ damage = 0;
  var /** @type {Object} */ options = {};
  options.targets = targets;
  options.targetEntity = targets[0];
  damage = Number(options.damage = config.dmg);
  var foreachiter0_target = targets;
  for (var foreachiter0 in foreachiter0_target) 
  {
  targetEntity = foreachiter0_target[foreachiter0];
  {
    targetUnit = targetEntity.getComponent(io.nfg.wmg.battle.components.UnitData);
    if (damage != 0) {
      io.nfg.wmg.battle.SpellsLogic._log('applying damages');
      io.nfg.wmg.battle.helpers.UnitHelper.changeDamageTaken(targetUnit, damage);
    }
    if (battle.removeIfDead(targetEntity) == false) {
      if (config['applyStatuses']) {
        io.nfg.wmg.battle.SpellsLogic._log('applying statuses');
        var foreachiter1_target = config['applyStatuses'];
        for (var foreachiter1 in foreachiter1_target) 
        {
        status = foreachiter1_target[foreachiter1];
        {
          io.nfg.wmg.battle.helpers.StatusHelper.addStatus(targetEntity, status);
        }}
        
      }
      if (config.push || config.pull) {
        var /** @type {io.nfg.core.Pos} */ start = targetUnit.tilePos.clone();
        options.pushConfig = io.nfg.wmg.battle.Mechanics.push(targetEntity, battle, start, targetPos, config.push || config.pull);
        io.nfg.wmg.battle.SpellsLogic._log('pushing or pulling', options.pushConfig, distance);
      }
    }
  }}
  
  return options;
};


/**
 * @export
 * @const
 * @type {Array}
 */
io.nfg.wmg.battle.SpellsLogic.EVO_OFFSETS = [[0, 0], [-1, -1], [-1, 1], [1, -1], [1, 1]];


/**
 * @export
 * @param {io.nfg.wmg.battle.BattleLogic} battle
 * @param {io.nfg.core.Pos} targetPos
 * @param {Array} targets
 * @param {Object} config
 * @return {Object}
 */
io.nfg.wmg.battle.SpellsLogic.evolve = function(battle, targetPos, targets, config) {
  var /** @type {Object} */ typeMap = {stalker:"goliath", goliath:"swarm_queen"};
  var /** @type {Object} */ options = {};
  options.targets = targets;
  options.targetEntity = targets[0];
  options.tileMap = battle.tileMap;
  var /** @type {io.nfg.wmg.battle.components.UnitData} */ targetUnit = options.targetEntity.getComponent(io.nfg.wmg.battle.components.UnitData);
  var /** @type {io.nfg.core.Pos} */ tilePos = new io.nfg.core.Pos();
  tilePos.copyFrom(targetUnit.tilePos);
  if (typeMap[targetUnit.type] == null)
    throw "SPELL_ERROR_INVALID_TARGET";
  if (targetUnit.type == "stalker") {
    battle.tileMap.setTileToFree(targetUnit.tilePos.x, targetUnit.tilePos.y, 1);
    var /** @type {io.nfg.core.Pos} */ evoPos;
    for (var /** @type {number} */ i = 0; i < io.nfg.wmg.battle.SpellsLogic.EVO_OFFSETS.length; i++) {
      if (!battle.tileMap.isOutOfUsableBounds(tilePos.x + io.nfg.wmg.battle.SpellsLogic.EVO_OFFSETS[i][0], tilePos.y + io.nfg.wmg.battle.SpellsLogic.EVO_OFFSETS[i][1]) && !battle.tileMap.isOccupied(tilePos.x + io.nfg.wmg.battle.SpellsLogic.EVO_OFFSETS[i][0], tilePos.y + io.nfg.wmg.battle.SpellsLogic.EVO_OFFSETS[i][1], 2)) {
        evoPos = new io.nfg.core.Pos(tilePos.x + io.nfg.wmg.battle.SpellsLogic.EVO_OFFSETS[i][0], tilePos.y + io.nfg.wmg.battle.SpellsLogic.EVO_OFFSETS[i][1]);
        break;
      }
    }
    if (evoPos == null) {
      battle.tileMap.setTileToOccupied(targetUnit.tilePos.x, targetUnit.tilePos.y, 1);
      throw "SPELL_ERROR_INSUFICIENT_SPACE_EVOLVE";
    }
    battle.tileMap.setTileToOccupied(evoPos.x, evoPos.y, 2);
    targetUnit.tilePos.copyFrom(evoPos);
  }
  targetUnit.type = org.apache.royale.utils.Language.string(typeMap[targetUnit.type]);
  return options;
};


/**
 * @export
 * @param {io.nfg.wmg.battle.BattleLogic} battle
 * @param {io.nfg.core.Pos} targetPos
 * @param {Array} targets
 * @param {Object} config
 * @return {Object}
 */
io.nfg.wmg.battle.SpellsLogic.energize = function(battle, targetPos, targets, config) {
  var /** @type {Object} */ options = {};
  options.targets = targets;
  options.targetEntity = targets[0];
  var /** @type {io.nfg.wmg.battle.components.UnitData} */ targetUnit = options.targetEntity.getComponent(io.nfg.wmg.battle.components.UnitData);
  var /** @type {string} */ key;
  for (key in targetUnit.get('specialCooldowns'))
    targetUnit.get('specialCooldowns')[key] = 0;
  return options;
};

io.nfg.wmg.battle.SpellsLogic._log = io.nfg.core.Tools.createLogger(io.nfg.wmg.battle.SpellsLogic, "spells");




/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
io.nfg.wmg.battle.SpellsLogic.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'SpellsLogic', qName: 'io.nfg.wmg.battle.SpellsLogic', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
io.nfg.wmg.battle.SpellsLogic.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {return {};},
    methods: function () {
      return {
        '|__generic': { type: 'Object', declaredBy: 'io.nfg.wmg.battle.SpellsLogic', parameters: function () { return [  { index: 1, type: 'io.nfg.wmg.battle.BattleLogic', optional: false },{ index: 2, type: 'io.nfg.core.Pos', optional: false },{ index: 3, type: 'Vector.<org.incubatio.Entity>', optional: false },{ index: 4, type: 'Object', optional: false } ]; }},
        '|evolve': { type: 'Object', declaredBy: 'io.nfg.wmg.battle.SpellsLogic', parameters: function () { return [  { index: 1, type: 'io.nfg.wmg.battle.BattleLogic', optional: false },{ index: 2, type: 'io.nfg.core.Pos', optional: false },{ index: 3, type: 'Vector.<org.incubatio.Entity>', optional: false },{ index: 4, type: 'Object', optional: false } ]; }},
        '|energize': { type: 'Object', declaredBy: 'io.nfg.wmg.battle.SpellsLogic', parameters: function () { return [  { index: 1, type: 'io.nfg.wmg.battle.BattleLogic', optional: false },{ index: 2, type: 'io.nfg.core.Pos', optional: false },{ index: 3, type: 'Vector.<org.incubatio.Entity>', optional: false },{ index: 4, type: 'Object', optional: false } ]; }}
      };
    }
  };
};
/**
 * Generated by Apache Royale Compiler from io/nfg/wmg/battle/Mechanics.as
 * io.nfg.wmg.battle.Mechanics
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('io.nfg.wmg.battle.Mechanics');
/* Royale Static Dependency List: io.nfg.core.Tools,io.nfg.wmg.battle.Mechanics*/

goog.require('io.nfg.core.Pos');
goog.require('io.nfg.core.Tools');
goog.require('io.nfg.core.pathfinding.Simple');
goog.require('io.nfg.wmg.battle.BattleLogic');
goog.require('io.nfg.wmg.battle.components.UnitData');
goog.require('io.nfg.wmg.battle.helpers.BattleHelper');
goog.require('io.nfg.wmg.battle.helpers.UnitHelper');
goog.require('io.nfg.wmg.models.SpecialTile');
goog.require('org.incubatio.Entity');



/**
 * @constructor
 */
io.nfg.wmg.battle.Mechanics = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('io.nfg.wmg.battle.Mechanics', io.nfg.wmg.battle.Mechanics);


/**
 * @private
 * @type {Function}
 */
io.nfg.wmg.battle.Mechanics._log;


/**
 * @export
 * @param {org.incubatio.Entity} entity
 * @param {io.nfg.wmg.battle.BattleLogic} battle
 * @param {io.nfg.core.Pos} start
 * @param {io.nfg.core.Pos} goal
 * @param {number} maxDistance
 * @return {Object}
 */
io.nfg.wmg.battle.Mechanics.push = function(entity, battle, start, goal, maxDistance) {
  var /** @type {io.nfg.wmg.battle.components.UnitData} */ unit = entity.getComponent(io.nfg.wmg.battle.components.UnitData);
  var /** @type {number} */ dim = unit.dim;
  var /** @type {number} */ distance = 0;
  var /** @type {io.nfg.core.Pos} */ dest = unit.tilePos.clone();
  var /** @type {io.nfg.core.Pos} */ pos = unit.tilePos;
  battle.tileMap.setTileToFree(pos.x, pos.y, dim);
  var /** @type {number} */ angle = Math.atan2(goal.y - start.y, goal.x - start.x);
  var /** @type {number} */ x;
  var /** @type {number} */ y;
  var /** @type {number} */ hyp;
  var /** @type {io.nfg.wmg.models.SpecialTile} */ specialTile;
  var /** @type {boolean} */ isNotFlying = io.nfg.wmg.battle.helpers.UnitHelper.isFlying(unit) == false;
  for (hyp = 0; hyp <= maxDistance; hyp++) {
    x = pos.x + Math.round(Math.cos(angle) * hyp);
    y = pos.y + Math.round(Math.sin(angle) * hyp);
    if (battle.tileMap.isOutOfUsableBounds(x, y) || battle.tileMap.isOccupied(x, y, dim)) {
      break;
    }
    specialTile = battle.tileMap.getSpecialTile(x, y, unit.dim);
    if (isNotFlying && specialTile && specialTile.type == io.nfg.wmg.models.SpecialTile.HOLE) {
      distance = hyp;
      dest.setTo(specialTile.x, specialTile.y);
      break;
    } else {
      specialTile = null;
      dest.setTo(x, y);
      dest.y = y;
      distance = hyp;
    }
  }
  battle.tileMap.setTileToOccupied(dest.x, dest.y, dim);
  io.nfg.wmg.battle.helpers.BattleHelper.moveUnitOnMap(entity, dest.x, dest.y, battle.unitMap, battle.tileMap.cols);
  if (isNotFlying && specialTile && specialTile.type == io.nfg.wmg.models.SpecialTile.HOLE)
    io.nfg.wmg.battle.Mechanics.hole(entity, battle, new io.nfg.core.Pos(specialTile.x, specialTile.y));
  return {distance:distance, targetPosition:dest, originPosition:start};
};


/**
 * @export
 * @param {org.incubatio.Entity} entity
 * @param {io.nfg.wmg.battle.BattleLogic} battle
 * @param {io.nfg.core.Pos} dest
 * @return {Object}
 */
io.nfg.wmg.battle.Mechanics.hole = function(entity, battle, dest) {
  var /** @type {io.nfg.wmg.battle.components.UnitData} */ unit = entity.getComponent(io.nfg.wmg.battle.components.UnitData);
  io.nfg.wmg.battle.helpers.UnitHelper.instaKill(unit);
  battle.removeIfDead(entity);
  unit.set('tilePos', dest);
  return null;
};


/**
 * @export
 * @param {io.nfg.wmg.battle.BattleLogic} battle
 * @param {org.incubatio.Entity} entity
 * @param {io.nfg.core.Pos} targetPos
 * @param {number=} range
 */
io.nfg.wmg.battle.Mechanics.teleport = function(battle, entity, targetPos, range) {
  range = typeof range !== 'undefined' ? range : 0;
  var /** @type {io.nfg.wmg.battle.components.UnitData} */ unit = entity.getComponent(io.nfg.wmg.battle.components.UnitData);
  var /** @type {number} */ dim = unit.dim;
  var /** @type {boolean} */ isNotFlying = io.nfg.wmg.battle.helpers.UnitHelper.isFlying(unit) == false;
  if (entity != battle.activeEntity) {
    battle.tileMap.setTileToFree(unit.tilePos.x, unit.tilePos.y, dim);
    battle.tileMap.setTileToOccupied(battle.activeUnit.tilePos.x, battle.activeUnit.tilePos.y, battle.activeUnit.dim);
  }
  if (battle.tileMap.isOccupied(targetPos.x, targetPos.y, dim))
    throw "SPECIAL_TILE_OCCUPIED";
  if (range > 0) {
    var /** @type {Array} */ rangeArea = io.nfg.core.pathfinding.Simple.explore(unit.tilePos, range, battle.tileMap.collisionGrid[dim - 1]);
    if (io.nfg.wmg.battle.helpers.BattleHelper.isTileInRange(targetPos, rangeArea) == false)
      throw "SPECIAL_TILE_NOT_IN_RANGE";
  }
  io.nfg.wmg.battle.Mechanics._log('teleport unit from', unit.tilePos, ' to', targetPos);
  io.nfg.wmg.battle.helpers.BattleHelper.moveUnitOnMap(entity, targetPos.x, targetPos.y, battle.unitMap, battle.tileMap.cols);
  if (entity != battle.activeEntity) {
    battle.tileMap.setTileToOccupied(targetPos.x, targetPos.y, dim);
    battle.tileMap.setTileToFree(battle.activeUnit.tilePos.x, battle.activeUnit.tilePos.y, battle.activeUnit.dim);
  }
  var /** @type {io.nfg.wmg.models.SpecialTile} */ specialTile = battle.tileMap.getSpecialTile(unit.tilePos.x, unit.tilePos.y, unit.dim);
  if (isNotFlying && specialTile && specialTile.type == io.nfg.wmg.models.SpecialTile.HOLE)
    io.nfg.wmg.battle.Mechanics.hole(entity, battle, new io.nfg.core.Pos(specialTile.x, specialTile.y));
  battle.updateMeleePenaltyStatus();
};

io.nfg.wmg.battle.Mechanics._log = io.nfg.core.Tools.createLogger(io.nfg.wmg.battle.Mechanics, 'mechanics');




/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
io.nfg.wmg.battle.Mechanics.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'Mechanics', qName: 'io.nfg.wmg.battle.Mechanics', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
io.nfg.wmg.battle.Mechanics.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {return {};},
    methods: function () {
      return {
        '|push': { type: 'Object', declaredBy: 'io.nfg.wmg.battle.Mechanics', parameters: function () { return [  { index: 1, type: 'org.incubatio.Entity', optional: false },{ index: 2, type: 'io.nfg.wmg.battle.BattleLogic', optional: false },{ index: 3, type: 'io.nfg.core.Pos', optional: false },{ index: 4, type: 'io.nfg.core.Pos', optional: false },{ index: 5, type: 'Number', optional: false } ]; }},
        '|hole': { type: 'Object', declaredBy: 'io.nfg.wmg.battle.Mechanics', parameters: function () { return [  { index: 1, type: 'org.incubatio.Entity', optional: false },{ index: 2, type: 'io.nfg.wmg.battle.BattleLogic', optional: false },{ index: 3, type: 'io.nfg.core.Pos', optional: false } ]; }},
        '|teleport': { type: 'void', declaredBy: 'io.nfg.wmg.battle.Mechanics', parameters: function () { return [  { index: 1, type: 'io.nfg.wmg.battle.BattleLogic', optional: false },{ index: 2, type: 'org.incubatio.Entity', optional: false },{ index: 3, type: 'io.nfg.core.Pos', optional: false },{ index: 4, type: 'Number', optional: true } ]; }}
      };
    }
  };
};

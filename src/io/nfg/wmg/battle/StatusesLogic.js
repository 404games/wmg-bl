/**
 * Generated by Apache Royale Compiler from io/nfg/wmg/battle/StatusesLogic.as
 * io.nfg.wmg.battle.StatusesLogic
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('io.nfg.wmg.battle.StatusesLogic');
/* Royale Static Dependency List: io.nfg.core.Tools,io.nfg.wmg.battle.StatusesLogic*/

goog.require('io.nfg.core.Tools');
goog.require('io.nfg.wmg.battle.BattleLogic');
goog.require('io.nfg.wmg.battle.helpers.StatusHelper');
goog.require('io.nfg.wmg.battle.helpers.UnitHelper');



/**
 * @constructor
 */
io.nfg.wmg.battle.StatusesLogic = function() {
  throw new Error('static class are not instanciable');
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('io.nfg.wmg.battle.StatusesLogic', io.nfg.wmg.battle.StatusesLogic);


/**
 * @private
 * @type {Function}
 */
io.nfg.wmg.battle.StatusesLogic._log;


/**
 * @export
 * @param {io.nfg.wmg.battle.BattleLogic} battle
 */
io.nfg.wmg.battle.StatusesLogic.play = function(battle) {
  var /** @type {Object} */ status;
  var /** @type {Object} */ statusConfig;
  var /** @type {number} */ targetGid = battle.tileMap.tilePos2Gid(battle.activeUnit.tilePos.x, battle.activeUnit.tilePos.y);
  var foreachiter0_target = battle.activeUnit.get('statuses');
  for (var foreachiter0 in foreachiter0_target) 
  {
  status = foreachiter0_target[foreachiter0];
  {
    if (status.incremented)
      continue;
    statusConfig = io.nfg.wmg.battle.helpers.StatusHelper["statusesConfig"][status.name] || {};
    if (io.nfg.wmg.battle.StatusesLogic['_' + status.name] != undefined) {
      io.nfg.wmg.battle.StatusesLogic['_' + status.name](battle);
    }
    if (statusConfig.end_stack != undefined && status.stacks >= statusConfig.end_stack) {
      io.nfg.wmg.battle.StatusesLogic._log('end_cast', statusConfig.end_cast);
      battle.spell(statusConfig.end_cast, targetGid, -1, false);
      io.nfg.wmg.battle.helpers.StatusHelper.removeStatus(battle.activeEntity, status.name);
    } else if (statusConfig.cast != undefined) {
      io.nfg.wmg.battle.StatusesLogic._log('cast', statusConfig.cast);
      battle.spell(statusConfig.cast, targetGid, -1, false);
    }
    if (statusConfig.vit != null)
      io.nfg.wmg.battle.helpers.UnitHelper.changeDamageTaken(battle.activeUnit, statusConfig.vit);
    status.incremented = true;
  }}
  
};


/**
 * @private
 * @param {io.nfg.wmg.battle.BattleLogic} battle
 */
io.nfg.wmg.battle.StatusesLogic._tuto_stunned = function(battle) {
  battle.play(io.nfg.wmg.battle.BattleLogic.SKIP, [battle.activeEntity.id, 'stunned']);
};


/**
 * @private
 * @param {io.nfg.wmg.battle.BattleLogic} battle
 */
io.nfg.wmg.battle.StatusesLogic._stunned = function(battle) {
  battle.play(io.nfg.wmg.battle.BattleLogic.SKIP, [battle.activeEntity.id, 'stunned']);
  io.nfg.wmg.battle.StatusesLogic._log("stunned");
};

io.nfg.wmg.battle.StatusesLogic._log = io.nfg.core.Tools.createLogger(io.nfg.wmg.battle.StatusesLogic, "status");




/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
io.nfg.wmg.battle.StatusesLogic.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'StatusesLogic', qName: 'io.nfg.wmg.battle.StatusesLogic', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
io.nfg.wmg.battle.StatusesLogic.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {return {};},
    methods: function () {
      return {
        'StatusesLogic': { type: '', declaredBy: 'io.nfg.wmg.battle.StatusesLogic'},
        '|play': { type: 'void', declaredBy: 'io.nfg.wmg.battle.StatusesLogic', parameters: function () { return [  { index: 1, type: 'io.nfg.wmg.battle.BattleLogic', optional: false } ]; }}
      };
    }
  };
};
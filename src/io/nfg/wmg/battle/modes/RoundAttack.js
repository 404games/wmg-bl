/**
 * Generated by Apache Royale Compiler from io/nfg/wmg/battle/modes/RoundAttack.as
 * io.nfg.wmg.battle.modes.RoundAttack
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('io.nfg.wmg.battle.modes.RoundAttack');

goog.require('io.nfg.wmg.battle.BattleLogic');
goog.require('io.nfg.wmg.battle.modes.AGameMode');
goog.require('io.nfg.wmg.battle.modes.IGameMode');



/**
 * @constructor
 * @extends {io.nfg.wmg.battle.modes.AGameMode}
 * @implements {io.nfg.wmg.battle.modes.IGameMode}
 * @param {Object} mode
 * @param {io.nfg.wmg.battle.BattleLogic} battle
 */
io.nfg.wmg.battle.modes.RoundAttack = function(mode, battle) {
  io.nfg.wmg.battle.modes.RoundAttack.base(this, 'constructor', mode, battle);
  this._roundLimit = Number(mode.hasOwnProperty('rounds') ? mode.rounds : 10);
  if (!mode.hasOwnProperty('pIndex'))
    throw new Error("RoundAttack > pindex has to be defined!");
  this._pIndex = Number(mode.pIndex);
};
goog.inherits(io.nfg.wmg.battle.modes.RoundAttack, io.nfg.wmg.battle.modes.AGameMode);


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('io.nfg.wmg.battle.modes.RoundAttack', io.nfg.wmg.battle.modes.RoundAttack);


/**
 * @private
 * @type {number}
 */
io.nfg.wmg.battle.modes.RoundAttack.prototype._roundLimit;


/**
 * @private
 * @type {number}
 */
io.nfg.wmg.battle.modes.RoundAttack.prototype._pIndex;


/**
 * @export
 * @override
 */
io.nfg.wmg.battle.modes.RoundAttack.prototype.didGameEnded = function(pIndex) {
  return this.battle.roundNumber > this._roundLimit;
};


/**
 * @export
 * @override
 */
io.nfg.wmg.battle.modes.RoundAttack.prototype.didPlayerWin = function(pIndex) {
  return (pIndex == this._pIndex && this.battle.roundNumber <= this._roundLimit || (pIndex != this._pIndex || this.battle.roundNumber > this._roundLimit));
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
io.nfg.wmg.battle.modes.RoundAttack.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'RoundAttack', qName: 'io.nfg.wmg.battle.modes.RoundAttack', kind: 'class' }], interfaces: [io.nfg.wmg.battle.modes.IGameMode] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
io.nfg.wmg.battle.modes.RoundAttack.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {return {};},
    methods: function () {
      return {
        'RoundAttack': { type: '', declaredBy: 'io.nfg.wmg.battle.modes.RoundAttack', parameters: function () { return [  { index: 1, type: 'Object', optional: false },{ index: 2, type: 'io.nfg.wmg.battle.BattleLogic', optional: false } ]; }},
        'didGameEnded': { type: 'Boolean', declaredBy: 'io.nfg.wmg.battle.modes.RoundAttack', parameters: function () { return [  { index: 1, type: 'Number', optional: false } ]; }},
        'didPlayerWin': { type: 'Boolean', declaredBy: 'io.nfg.wmg.battle.modes.RoundAttack', parameters: function () { return [  { index: 1, type: 'Number', optional: false } ]; }}
      };
    }
  };
};
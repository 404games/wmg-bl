/**
 * Generated by Apache Royale Compiler from io/nfg/wmg/battle/EntityFactory.as
 * io.nfg.wmg.battle.EntityFactory
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('io.nfg.wmg.battle.EntityFactory');
/* Royale Static Dependency List: io.nfg.core.Tools,io.nfg.wmg.battle.EntityFactory*/

goog.require('io.nfg.core.Pos');
goog.require('io.nfg.core.Tools');
goog.require('io.nfg.wmg.battle.components.UnitData');
goog.require('io.nfg.wmg.battle.helpers.StatusHelper');
goog.require('io.nfg.wmg.battle.helpers.UnitHelper');
goog.require('io.nfg.wmg.models.Actor');
goog.require('io.nfg.wmg.models.DeckUnit');
goog.require('org.incubatio.Entity');
goog.require('org.incubatio.TileMap');
goog.require('org.apache.royale.utils.Language');



/**
 * @constructor
 */
io.nfg.wmg.battle.EntityFactory = function() {
  throw new Error('Static class, cannot be instanciated');
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('io.nfg.wmg.battle.EntityFactory', io.nfg.wmg.battle.EntityFactory);


/**
 * @private
 * @type {Function}
 */
io.nfg.wmg.battle.EntityFactory._log;


/**
 * @export
 * @param {number} id
 * @param {io.nfg.wmg.models.DeckUnit} deckUnit
 * @param {number} pIndex
 * @return {org.incubatio.Entity}
 */
io.nfg.wmg.battle.EntityFactory.create = function(id, deckUnit, pIndex) {
  if (!io.nfg.wmg.battle.helpers.UnitHelper["unitsConfig"][deckUnit.get('type')])
    throw new Error("[Config] Unit type \"" + deckUnit.get('type') + "\" can NOT be found");
  var /** @type {org.incubatio.Entity} */ entity = new org.incubatio.Entity(id);
  var /** @type {io.nfg.wmg.battle.components.UnitData} */ unit = new io.nfg.wmg.battle.components.UnitData({deckUnit:deckUnit, pIndex:pIndex, direction:new io.nfg.core.Pos(pIndex == 0 ? 1 : -1, 0)});
  unit.set('ammo', io.nfg.wmg.battle.helpers.UnitHelper.getNumberOfProjectilse(unit));
  entity.addComponent(unit);
  if (org.apache.royale.utils.Language.is(deckUnit.get('applyStatuses'), Array)) {
    var /** @type {string} */ statusName;
    var foreachiter0_target = deckUnit.get('applyStatuses');
    for (var foreachiter0 in foreachiter0_target) 
    {
    statusName = foreachiter0_target[foreachiter0];
    {
      io.nfg.wmg.battle.helpers.StatusHelper.addStatus(entity, statusName);
    }}
    
  }
  if (deckUnit.get('dmg'))
    unit.set('damageTaken', deckUnit.get('dmg'));
  if (org.apache.royale.utils.Language.is(deckUnit.get('direction'), Array))
    unit.get('direction').setTo(deckUnit.get('direction')[0], deckUnit.get('direction')[1]);
  return entity;
};


/**
 * @export
 * @param {Object} actors
 * @param {org.incubatio.TileMap} tileMap
 * @return {Array}
 */
io.nfg.wmg.battle.EntityFactory.createEntitiesFromConfig = function(actors, tileMap) {
  var /** @type {org.incubatio.Entity} */ entity, /** @type {io.nfg.wmg.battle.components.UnitData} */ unitData, /** @type {io.nfg.wmg.models.Actor} */ actor, /** @type {io.nfg.wmg.models.DeckUnit} */ unitDesc, /** @type {string} */ name, /** @type {number} */ i, /** @type {number} */ j = 0, /** @type {number} */ xPos, /** @type {Array} */ entities = [];
  for (i in actors) {
    actor = actors[i];
    var foreachiter1_target = actor.get('deck');
    for (var foreachiter1 in foreachiter1_target) 
    {
    unitDesc = foreachiter1_target[foreachiter1];
    {
      io.nfg.wmg.battle.EntityFactory._log('unit', unitDesc);
      entity = io.nfg.wmg.battle.EntityFactory.create(entities.length, unitDesc, i);
      unitData = entity.getComponent(io.nfg.wmg.battle.components.UnitData);
      xPos = Number(i == 0 ? unitDesc.get('pos')[0] : tileMap.cols - unitData.dim - unitDesc.get('pos')[0]);
      unitData.set('tilePos', new io.nfg.core.Pos(xPos, unitDesc.get('pos')[1]));
      unitData.set('name', unitDesc.get('name') ? unitDesc.get('name') : actor.get('name') + i + '_' + j++);
      entities[entities.length] = entity;
    }}
    
  }
  return entities;
};

io.nfg.wmg.battle.EntityFactory._log = io.nfg.core.Tools.createLogger(io.nfg.wmg.battle.EntityFactory, "entity-creator");




/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
io.nfg.wmg.battle.EntityFactory.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'EntityFactory', qName: 'io.nfg.wmg.battle.EntityFactory', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
io.nfg.wmg.battle.EntityFactory.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {return {};},
    methods: function () {
      return {
        'EntityFactory': { type: '', declaredBy: 'io.nfg.wmg.battle.EntityFactory'},
        '|create': { type: 'org.incubatio.Entity', declaredBy: 'io.nfg.wmg.battle.EntityFactory', parameters: function () { return [  { index: 1, type: 'Number', optional: false },{ index: 2, type: 'io.nfg.wmg.models.DeckUnit', optional: false },{ index: 3, type: 'Number', optional: false } ]; }},
        '|createEntitiesFromConfig': { type: 'Vector.<org.incubatio.Entity>', declaredBy: 'io.nfg.wmg.battle.EntityFactory', parameters: function () { return [  { index: 1, type: 'Object', optional: false },{ index: 2, type: 'org.incubatio.TileMap', optional: false } ]; }}
      };
    }
  };
};

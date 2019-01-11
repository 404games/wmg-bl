require("google-closure-library");
bp = process.env.WMG_BL_PATH || '../../../wmg-bl/src/';
//bp = process.env.WMG_BL_PATH || '../../../../src/';
goog.addDependency(bp + 'io/nfg/wmg/battle/BattleLogic.js', ['io.nfg.wmg.battle.BattleLogic'], ['io.nfg.core.Pos', 'io.nfg.core.Tools', 'io.nfg.wmg.battle.CombatsLogic', 'io.nfg.wmg.battle.EntityFactory', 'io.nfg.wmg.battle.Mechanics', 'io.nfg.wmg.battle.SpecialsLogic', 'io.nfg.wmg.battle.SpellsLogic', 'io.nfg.wmg.battle.StatusesLogic', 'io.nfg.wmg.battle.components.UnitData', 'io.nfg.wmg.battle.helpers.BattleHelper', 'io.nfg.wmg.battle.helpers.StatusHelper', 'io.nfg.wmg.battle.helpers.UnitHelper', 'io.nfg.wmg.battle.modes.AGameMode', 'io.nfg.wmg.battle.modes.Annihilation', 'io.nfg.wmg.battle.modes.Assassination', 'io.nfg.wmg.battle.modes.Peace', 'io.nfg.wmg.battle.modes.RoundAttack', 'io.nfg.wmg.battle.modes.RunAway', 'io.nfg.wmg.battle.modes.StayAlive', 'io.nfg.wmg.models.Actor', 'io.nfg.wmg.models.DeckUnit', 'io.nfg.wmg.models.Map', 'io.nfg.wmg.models.Mission', 'io.nfg.wmg.models.PlayerTypes', 'io.nfg.wmg.models.SpecialTile', 'org.incubatio.Entity', 'org.incubatio.TileMap', 'org.apache.royale.utils.Language']);
goog.addDependency(bp + 'io/nfg/wmg/models/Mission.js', ['io.nfg.wmg.models.Mission'], ['io.nfg.core.db.AModel', 'io.nfg.wmg.models.Actor', 'io.nfg.wmg.models.DeckUnit', 'io.nfg.wmg.models.Map', 'io.nfg.wmg.models.PlayerTypes', 'org.apache.royale.utils.Language']);
goog.addDependency(bp + 'io/nfg/wmg/models/Map.js', ['io.nfg.wmg.models.Map'], ['io.nfg.core.db.AModel', 'org.apache.royale.utils.Language']);
goog.addDependency(bp + 'io/nfg/wmg/battle/modes/StayAlive.js', ['io.nfg.wmg.battle.modes.StayAlive'], ['io.nfg.wmg.battle.BattleLogic', 'io.nfg.wmg.battle.modes.AGameMode', 'io.nfg.wmg.battle.modes.IGameMode']);
goog.addDependency(bp + 'io/nfg/wmg/battle/modes/RunAway.js', ['io.nfg.wmg.battle.modes.RunAway'], ['io.nfg.wmg.battle.BattleLogic', 'io.nfg.wmg.battle.components.UnitData', 'io.nfg.wmg.battle.modes.AGameMode', 'org.incubatio.Entity', 'io.nfg.wmg.battle.modes.IGameMode']);
goog.addDependency(bp + 'io/nfg/wmg/battle/modes/RoundAttack.js', ['io.nfg.wmg.battle.modes.RoundAttack'], ['io.nfg.wmg.battle.BattleLogic', 'io.nfg.wmg.battle.modes.AGameMode', 'io.nfg.wmg.battle.modes.IGameMode']);
goog.addDependency(bp + 'io/nfg/wmg/battle/modes/Peace.js', ['io.nfg.wmg.battle.modes.Peace'], ['io.nfg.wmg.battle.BattleLogic', 'io.nfg.wmg.battle.modes.AGameMode', 'org.incubatio.Entity', 'io.nfg.wmg.battle.modes.IGameMode']);
goog.addDependency(bp + 'io/nfg/wmg/battle/modes/Assassination.js', ['io.nfg.wmg.battle.modes.Assassination'], ['io.nfg.wmg.battle.BattleLogic', 'io.nfg.wmg.battle.components.UnitData', 'io.nfg.wmg.battle.helpers.UnitHelper', 'io.nfg.wmg.battle.modes.AGameMode', 'org.incubatio.Entity', 'io.nfg.wmg.battle.modes.IGameMode']);
goog.addDependency(bp + 'io/nfg/wmg/battle/modes/Annihilation.js', ['io.nfg.wmg.battle.modes.Annihilation'], ['io.nfg.wmg.battle.BattleLogic', 'io.nfg.wmg.battle.modes.AGameMode', 'io.nfg.wmg.battle.modes.IGameMode']);
goog.addDependency(bp + 'io/nfg/wmg/battle/modes/AGameMode.js', ['io.nfg.wmg.battle.modes.AGameMode'], ['io.nfg.wmg.battle.BattleLogic', 'org.incubatio.Entity', 'io.nfg.wmg.battle.modes.IGameMode']);
goog.addDependency(bp + 'io/nfg/wmg/battle/modes/IGameMode.js', ['io.nfg.wmg.battle.modes.IGameMode'], []);
goog.addDependency(bp + 'io/nfg/wmg/battle/StatusesLogic.js', ['io.nfg.wmg.battle.StatusesLogic'], ['io.nfg.core.Tools', 'io.nfg.wmg.battle.BattleLogic', 'io.nfg.wmg.battle.helpers.StatusHelper', 'io.nfg.wmg.battle.helpers.UnitHelper']);
goog.addDependency(bp + 'io/nfg/wmg/battle/SpecialsLogic.js', ['io.nfg.wmg.battle.SpecialsLogic'], ['io.nfg.core.Pos', 'io.nfg.core.Tools', 'io.nfg.wmg.battle.BattleLogic', 'io.nfg.wmg.battle.CombatsLogic', 'io.nfg.wmg.battle.EntityFactory', 'io.nfg.wmg.battle.Mechanics', 'io.nfg.wmg.battle.SpellsLogic', 'io.nfg.wmg.battle.components.UnitData', 'io.nfg.wmg.battle.helpers.BattleHelper', 'io.nfg.wmg.battle.helpers.StatusHelper', 'io.nfg.wmg.battle.helpers.UnitHelper', 'io.nfg.wmg.models.DeckUnit', 'org.incubatio.Entity', 'org.apache.royale.utils.Language']);
goog.addDependency(bp + 'io/nfg/wmg/battle/SpellsLogic.js', ['io.nfg.wmg.battle.SpellsLogic'], ['io.nfg.core.Pos', 'io.nfg.core.Tools', 'io.nfg.wmg.battle.BattleLogic', 'io.nfg.wmg.battle.Mechanics', 'io.nfg.wmg.battle.components.UnitData', 'io.nfg.wmg.battle.helpers.StatusHelper', 'io.nfg.wmg.battle.helpers.UnitHelper', 'org.incubatio.Entity']);
goog.addDependency(bp + 'io/nfg/wmg/battle/Mechanics.js', ['io.nfg.wmg.battle.Mechanics'], ['io.nfg.core.Pos', 'io.nfg.core.Tools', 'io.nfg.core.pathfinding.Simple', 'io.nfg.wmg.battle.BattleLogic', 'io.nfg.wmg.battle.components.UnitData', 'io.nfg.wmg.battle.helpers.BattleHelper', 'io.nfg.wmg.battle.helpers.UnitHelper', 'io.nfg.wmg.models.SpecialTile', 'org.incubatio.Entity']);
goog.addDependency(bp + 'io/nfg/wmg/battle/helpers/BattleHelper.js', ['io.nfg.wmg.battle.helpers.BattleHelper'], ['io.nfg.core.Pos', 'io.nfg.core.pathfinding.AStar', 'io.nfg.core.pathfinding.Simple', 'io.nfg.wmg.battle.BattleLogic', 'io.nfg.wmg.battle.components.UnitData', 'io.nfg.wmg.battle.helpers.UnitHelper', 'io.nfg.wmg.models.SpecialTile', 'org.incubatio.Entity', 'org.incubatio.TileMap', 'org.apache.royale.utils.Language']);
goog.addDependency(bp + 'io/nfg/core/pathfinding/AStar.js', ['io.nfg.core.pathfinding.AStar'], ['io.nfg.core.Pos', 'io.nfg.core.pathfinding.AStarNode', 'io.nfg.core.pathfinding.PriorityQueue', 'org.apache.royale.utils.Language']);
goog.addDependency(bp + 'io/nfg/core/pathfinding/PriorityQueue.js', ['io.nfg.core.pathfinding.PriorityQueue'], ['io.nfg.core.pathfinding.Prioritizable', 'org.apache.royale.utils.Language']);
goog.addDependency(bp + 'io/nfg/core/pathfinding/AStarNode.js', ['io.nfg.core.pathfinding.AStarNode'], ['io.nfg.core.pathfinding.Prioritizable']);
goog.addDependency(bp + 'io/nfg/core/pathfinding/Prioritizable.js', ['io.nfg.core.pathfinding.Prioritizable'], ['io.nfg.core.Pos']);
goog.addDependency(bp + 'io/nfg/core/pathfinding/Simple.js', ['io.nfg.core.pathfinding.Simple'], ['io.nfg.core.Pos']);
goog.addDependency(bp + 'io/nfg/wmg/battle/EntityFactory.js', ['io.nfg.wmg.battle.EntityFactory'], ['io.nfg.core.Pos', 'io.nfg.core.Tools', 'io.nfg.wmg.battle.components.UnitData', 'io.nfg.wmg.battle.helpers.StatusHelper', 'io.nfg.wmg.battle.helpers.UnitHelper', 'io.nfg.wmg.models.Actor', 'io.nfg.wmg.models.DeckUnit', 'org.incubatio.Entity', 'org.incubatio.TileMap', 'org.apache.royale.utils.Language']);
goog.addDependency(bp + 'org/incubatio/TileMap.js', ['org.incubatio.TileMap'], ['io.nfg.core.Pos', 'io.nfg.wmg.models.SpecialTile', 'org.apache.royale.utils.Language']);
goog.addDependency(bp + 'io/nfg/wmg/models/SpecialTile.js', ['io.nfg.wmg.models.SpecialTile'], []);
goog.addDependency(bp + 'io/nfg/wmg/models/Actor.js', ['io.nfg.wmg.models.Actor'], ['io.nfg.core.db.AModel', 'io.nfg.wmg.models.DeckUnit', 'io.nfg.wmg.models.PlayerTypes', 'org.apache.royale.utils.Language']);
goog.addDependency(bp + 'io/nfg/wmg/models/PlayerTypes.js', ['io.nfg.wmg.models.PlayerTypes'], []);
goog.addDependency(bp + 'io/nfg/wmg/battle/CombatsLogic.js', ['io.nfg.wmg.battle.CombatsLogic'], ['io.nfg.core.Pos', 'io.nfg.core.Tools', 'io.nfg.wmg.battle.components.UnitData', 'io.nfg.wmg.battle.helpers.StatusHelper', 'io.nfg.wmg.battle.helpers.UnitHelper', 'io.nfg.wmg.utils.Resources']);
goog.addDependency(bp + 'io/nfg/wmg/battle/components/UnitData.js', ['io.nfg.wmg.battle.components.UnitData'], ['io.nfg.core.Pos', 'io.nfg.core.db.AModel', 'io.nfg.wmg.battle.helpers.UnitHelper', 'io.nfg.wmg.models.DeckUnit', 'org.incubatio.core.AComponent', 'org.apache.royale.utils.Language']);
goog.addDependency(bp + 'io/nfg/wmg/battle/helpers/UnitHelper.js', ['io.nfg.wmg.battle.helpers.UnitHelper'], ['io.nfg.wmg.battle.components.UnitData', 'io.nfg.wmg.battle.helpers.StatusHelper', 'io.nfg.wmg.utils.Resources', 'org.apache.royale.utils.Language']);
goog.addDependency(bp + 'io/nfg/wmg/battle/helpers/StatusHelper.js', ['io.nfg.wmg.battle.helpers.StatusHelper'], ['io.nfg.core.Tools', 'io.nfg.wmg.battle.components.UnitData', 'io.nfg.wmg.utils.Resources', 'org.incubatio.Entity']);
goog.addDependency(bp + 'org/incubatio/Entity.js', ['org.incubatio.Entity'], ['io.nfg.wmg.battle.components.UnitData', 'org.incubatio.EventObject', 'org.apache.royale.utils.Language']);
goog.addDependency(bp + 'org/incubatio/EventObject.js', ['org.incubatio.EventObject'], []);
goog.addDependency(bp + 'org/incubatio/core/AComponent.js', ['org.incubatio.core.AComponent'], []);
goog.addDependency(bp + 'io/nfg/core/Pos.js', ['io.nfg.core.Pos'], []);
goog.addDependency(bp + 'io/nfg/wmg/models/Quest.js', ['io.nfg.wmg.models.Quest'], ['io.nfg.core.db.AModel']);
goog.addDependency(bp + 'io/nfg/wmg/helpers/QuestHelper.js', ['io.nfg.wmg.helpers.QuestHelper'], ['io.nfg.wmg.models.DeckUnit', 'io.nfg.wmg.utils.Resources']);
goog.addDependency(bp + 'io/nfg/wmg/models/DeckUnit.js', ['io.nfg.wmg.models.DeckUnit'], ['io.nfg.core.Tools', 'io.nfg.core.db.AModel', 'io.nfg.wmg.helpers.DeckHelper', 'io.nfg.wmg.utils.Resources', 'org.apache.royale.utils.Language']);
goog.addDependency(bp + 'io/nfg/wmg/helpers/DeckHelper.js', ['io.nfg.wmg.helpers.DeckHelper'], ['io.nfg.wmg.models.DeckUnit', 'io.nfg.wmg.utils.Resources', 'org.apache.royale.utils.Language']);
goog.addDependency(bp + 'io/nfg/wmg/utils/Resources.js', ['io.nfg.wmg.utils.Resources'], []);
goog.addDependency(bp + 'io/nfg/core/db/AModel.js', ['io.nfg.core.db.AModel'], ['io.nfg.core.Tools', 'io.nfg.core.events.EventDispatcher', 'org.apache.royale.utils.Language']);
goog.addDependency(bp + 'io/nfg/core/Tools.js', ['io.nfg.core.Tools'], ['org.apache.royale.utils.Language']);
goog.addDependency(bp + 'io/nfg/core/events/EventDispatcher.js', ['io.nfg.core.events.EventDispatcher'], ['io.nfg.core.events.NFGEvent', 'org.apache.royale.utils.Language']);
goog.addDependency(bp + 'org/apache/royale/utils/Language.js', ['org.apache.royale.utils.Language'], ['org.apache.royale.utils.Language']);
goog.addDependency(bp + 'io/nfg/core/events/NFGEvent.js', ['io.nfg.core.events.NFGEvent'], ['io.nfg.core.events.EventDispatcher']);

goog.require('io.nfg.wmg.battle.helpers.BattleHelper');
goog.require('io.nfg.wmg.helpers.QuestHelper');

module.exports = {
  Resources: io.nfg.wmg.utils.Resources,
  BattleHelper: io.nfg.wmg.battle.helpers.BattleHelper,
  BattleLogic: io.nfg.wmg.battle.BattleLogic,
  Mission: io.nfg.wmg.models.Mission,
  UnitData: io.nfg.wmg.battle.components.UnitData,
  PlayerTypes: io.nfg.wmg.models.PlayerTypes,
  Actor: io.nfg.wmg.models.Actor,
  DeckUnit: io.nfg.wmg.models.DeckUnit,
  QuestHelper: io.nfg.wmg.helpers.QuestHelper,
  Quest: io.nfg.wmg.models.Quest
}

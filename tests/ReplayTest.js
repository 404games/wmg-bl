process.env.WMG_BL_PATH = '../../../../src/';
wmg = require('../src/index.js')
fs = require('fs');
configs = JSON.parse(fs.readFileSync(__dirname + '/data.json'));
wmg.Resources.initConfigs(configs);

renderBattleReport = function(battle, name) {
  console.log();
  console.log("SCENARIO - " + name);
  console.log("=======================================");
  console.log("  Battle Report :");
  var /** @type {Array} */ group;
  var /** @type {string} */ winner;
  var /** @type {org.incubatio.Entity} */ entity;
  var /** @type {io.nfg.wmg.battle.components.UnitData} */ unit;
  var /** @type {number} */ i = 0;
  for (i in battle.aliveGroups) {
    var foreachiter0_target = [battle.aliveGroups[i], battle.deadGroups[i]];
    for (var foreachiter0 in foreachiter0_target) {
    group = foreachiter0_target[foreachiter0];
    {
      var foreachiter1_target = group;
      for (var foreachiter1 in foreachiter1_target) {
      entity = foreachiter1_target[foreachiter1];
      {
        unit = entity.getComponent(wmg.UnitData);
        console.log("    " + i + " - " + unit.type + " ( " + io.nfg.wmg.battle.helpers.UnitHelper.getHealthInPercent(unit) + "% ) + " + unit.damageTaken + " dmgs");
      }}
    }}
  }
};


var logsStr = '[[1,[1,30]],[5,[1]],[2,[2,37]],[2,[0,22,37]],[1,[1,21]],[2,[1,22,21]]]';
var /** @type {string} */ missionName = 'test_replay';
var /** @type {Object} */ configs = wmg.Resources.configs;
var /** @type {io.nfg.wmg.models.Mission} */ mission;
var /** @type {io.nfg.wmg.battle.BattleLogic} */ battle;
mission = new wmg.Mission(configs.missions[missionName]);
battle = wmg.BattleLogic.fromMission(mission, configs);
wmg.BattleHelper.replay(battle, JSON.parse(logsStr));
renderBattleReport(battle, missionName);
console.log('player 0 xp bonus per unit:', wmg.BattleHelper.getXpBonus(battle, 0, configs.logics.units));
console.log('player 1 xp bonus per unit:', wmg.BattleHelper.getXpBonus(battle, 1, configs.logics.units));

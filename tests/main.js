process.env.WMG_BL_PATH = '../../../../src/';
myLib = require('../src/index.js')
fs = require('fs');
configs = JSON.parse(fs.readFileSync(__dirname + '/data.json'));
myLib.Resources.initConfigs(configs);

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
        unit = entity.getComponent(myLib.UnitData);
        console.log("    " + i + " - " + unit.type + " ( " + io.nfg.wmg.battle.helpers.UnitHelper.getHealthInPercent(unit) + "% ) + " + unit.damageTaken + " dmgs");
      }}
    }}
  }
};


var /** @type {string} */ logsStr = '[[3,[1,"wait1",null]],[1,[0,49]],[5,[0]],[1,[1,49]],[3,[1,"defend1",null]],[1,[1,50]],[2,[1,49]],[2,[0,50,49]]]';
var /** @type {string} */ missionName = 'full_example';
var /** @type {Object} */ configs = myLib.Resources.configs;
var /** @type {io.nfg.wmg.models.Mission} */ mission;
var /** @type {io.nfg.wmg.battle.BattleLogic} */ battle;
mission = new myLib.Mission(configs.missions[missionName]);
battle = myLib.BattleLogic.fromMission(mission, configs);
myLib.BattleHelper.replay(battle, JSON.parse(logsStr));
renderBattleReport(battle, missionName);
console.log('player 0 xp bonus per unit:', myLib.BattleHelper.getXpBonus(battle, 0, configs.logics.units));
console.log('player 1 xp bonus per unit:', myLib.BattleHelper.getXpBonus(battle, 1, configs.logics.units));

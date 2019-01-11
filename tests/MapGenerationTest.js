process.env.WMG_BL_PATH = '../../../../src/';
wmg = require('../src/index.js')
fs = require('fs');
configs = JSON.parse(fs.readFileSync(__dirname + '/data.json'));
wmg.Resources.initConfigs(configs);


/**
 * @constructor
 */
MapGenerationTest = function() {
};


/**
 * @export
 */
MapGenerationTest.testMissionGeneration = function() {
  var /** @type {number} */ i, /** @type {number} */ j, /** @type {number} */ questId;
  for (j = 0; j < 100; j++) {
    questId = 209376200 + j * 100 + j * 1000 + j * 10000 + j * 100000 + 50 + 1 + j % 9;
    console.log();
    console.log(j, questId);
    var /** @type {Object} */ mission = wmg.QuestHelper.generateMission(questId);
    for (i = 0; i < mission.actors[0].deck.length; i++) {
      console.log('unit', mission.actors[0].deck[i]);
    }
    console.log('env:', mission.map.environment);
    for (i = 0; i < mission.map.collisions.length; i++) {
      console.log('map', mission.map.collisions[i]);
    }
    console.log('prize', wmg.QuestHelper.getPrizeFromQuestId(questId, .3));
    console.log('prize', wmg.QuestHelper.getPrizeFromQuestId(questId, .5));
    console.log('prize', wmg.QuestHelper.getPrizeFromQuestId(questId, .9));
  }
};


/**
 * @export
 */
MapGenerationTest.testGetQuestId = function() {
  var /** @type {number} */ questId;
  questId = 511;
  console.log(questId, wmg.QuestHelper.getPrizeFromQuestId(questId, .5));
  questId = 220375151;
  console.log(questId, wmg.QuestHelper.getPrizeFromQuestId(questId, .3));
  console.log(questId, wmg.QuestHelper.getPrizeFromQuestId(questId, .5));
  console.log(questId, wmg.QuestHelper.getPrizeFromQuestId(questId, .9));
};


/**
 * @export
 */
MapGenerationTest.testTemplateRotations = function() {
  var /** @type {Array} */ template;
  var /** @type {number} */ i, /** @type {number} */ j;
  for (j = 0; j < wmg.QuestHelper["terrains"].templates.length; j++) {
    template = wmg.QuestHelper["terrains"].templates[j].concat();
    console.log();
    console.log();
    for (i = 0; i < template.length; i++) {
      console.log(110, template[i]);
    }
    template = wmg.QuestHelper.rotateTemplate(template);
    console.log();
    for (i = 0; i < template.length; i++) {
      console.log(111, template[i]);
    }
  }
};

//var /** @type {io.nfg.wmg.models.Quest} */ quest = new io.nfg.wmg.models.Quest({});
MapGenerationTest.testMissionGeneration();

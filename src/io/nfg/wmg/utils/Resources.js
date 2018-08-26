/**
 * Generated by Apache Royale Compiler from io/nfg/wmg/utils/Resources.as
 * io.nfg.wmg.utils.Resources
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('io.nfg.wmg.utils.Resources');



/**
 * @constructor
 */
io.nfg.wmg.utils.Resources = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('io.nfg.wmg.utils.Resources', io.nfg.wmg.utils.Resources);


/**
 * @export
 * @type {Object}
 */
io.nfg.wmg.utils.Resources.configs;


/**
 * @export
 * @param {Object} configs
 */
io.nfg.wmg.utils.Resources.initConfigs = function(configs) {
  io.nfg.wmg.utils.Resources.configs = configs;
  var /** @type {string} */ k;
  var /** @type {string} */ l;
  io.nfg.wmg.utils.Resources.configs.graphics.menus.unit_to_army = {};
  var foreachiter0_target = io.nfg.wmg.utils.Resources.configs.graphics.menus.armies;
  for (var foreachiter0 in foreachiter0_target) 
  {
  k = foreachiter0_target[foreachiter0];
  {
    var foreachiter1_target = io.nfg.wmg.utils.Resources.configs.graphics.menus[k];
    for (var foreachiter1 in foreachiter1_target) 
    {
    l = foreachiter1_target[foreachiter1];
    {
      io.nfg.wmg.utils.Resources.configs.graphics.menus.unit_to_army[l] = k;
    }}
    
  }}
  
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
io.nfg.wmg.utils.Resources.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'Resources', qName: 'io.nfg.wmg.utils.Resources', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
io.nfg.wmg.utils.Resources.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {
      return {
        '|configs': { type: 'Object'}
      };
    },
    accessors: function () {return {};},
    methods: function () {
      return {
        'Resources': { type: '', declaredBy: 'io.nfg.wmg.utils.Resources'},
        '|initConfigs': { type: 'void', declaredBy: 'io.nfg.wmg.utils.Resources', parameters: function () { return [  { index: 1, type: 'Object', optional: false } ]; }}
      };
    }
  };
};
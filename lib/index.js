/**
 * @fileoverview linting rules that promote functional programming practices
 * @author Dakota Murphy
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------
const createIndex = require('create-eslint-index');
const requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

const rules = requireIndex(__dirname + "/rules");
const recommendedRules = createIndex.createConfig({
  plugin: 'js-fp-linter', // Your plugin name, without the `eslint-plugin-` prefix
  field: 'meta.docs.recommended'
}, rules);
// import all rules in lib/rules
module.exports = {
  rules,
  configs: {
    recommended: {
      rules: recommendedRules
    }
  }
}




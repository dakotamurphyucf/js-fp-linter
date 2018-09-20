const createIndex = require('create-eslint-index');
const requireIndex = require("requireindex");
const index = require('./lib');

const rules = requireIndex(__dirname + "/lib/rules");

const settings = {
  descriptionField: 'meta.docs.description',
  docPath: 'docs/rules'
};

module.exports = {
  RULES: `\n${createIndex.createRulesDescription(settings, rules)}\n`
};
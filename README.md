# eslint-plugin-js-fp-linter

linting rules that promote functional programming practices

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-js-fp-linter`:

```
$ npm install eslint-plugin-js-fp-linter --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-js-fp-linter` globally.

## Usage

Add `js-fp-linter` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "js-fp-linter"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "js-fp-linter/rule-name": 2
    }
}
```

## Supported Rules
## Rules

<!-- RULES:START -->
- [no-arguments](docs/rules/no-arguments.md) - Forbid the use of `arguments`.
- [no-delete](docs/rules/no-delete.md) - Forbid the use of `delete`.
- [no-get-set](docs/rules/no-get-set.md) - Forbid the use of getters and setters.
- [no-loops](docs/rules/no-loops.md) - Forbid the use of loops.
- [no-mutating-assign](docs/rules/no-mutating-assign.md) - Forbid the use of [`Object.assign()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign) with a variable as first argument.
- [no-mutating-methods](docs/rules/no-mutating-methods.md) - Forbid the use of mutating methods.
- [no-mutation](docs/rules/no-mutation.md) - Forbid the use of mutating operators.
- [no-nil](docs/rules/no-nil.md) - Forbid the use of `null` and `undefined`.
- [no-proxy](docs/rules/no-proxy.md) - Forbid the use of `Proxy`.
- [no-rest-parameters](docs/rules/no-rest-parameters.md) - Forbid the use of rest parameters.
- [no-unused-expression](docs/rules/no-unused-expression.md) - Enforce that an expression gets used.
- [no-variable-declarations](docs/rules/no-variable-declarations.md) - Forbids variable declarations, no `var` or `let`.
<!-- RULES:END -->
## Recommended configuration

This plugin exports a [`recommended` configuration](lib/index.js) that enforces good practices.

To enable this configuration, use the `extends` property in your `package.json`.

```json
{
  "name": "my-awesome-project",
  "eslintConfig": {
    "plugins": [
      "fp"
    ],
    "extends": "plugin:js-fp-linter/recommended"
  }
}
```
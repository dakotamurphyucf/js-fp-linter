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

* Fill in provided rules here






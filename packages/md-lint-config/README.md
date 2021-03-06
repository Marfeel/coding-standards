---
title: Md linter
keywords: markdown linter lint md
---

# Markdown linting

In order to put MD linting into a project you have to:

## 1. Dependencies

`npm install markdownlint --save-dev`
`npm install markdownlint-cli --save-dev`

## 2. Create configuration

Create a .markdownlint.json file in the root of the project extending the one in here:

``` json
{
  "extends": "./node_modules/marfeel-coding-standards/md-lint/.markdownlint.json"
}
```

## 3. Create task in package.json

Add a task for the markdown-cli to execute on linting using our custom rule:

```json
"lint" : "markdownlint ./ -r /node_modules/@marfeel/md-lint-config/custom_linters/ -i node_modules
```

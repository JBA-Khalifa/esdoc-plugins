# ESDoc ECMAScript Proposal Plugin
## Install
```
npm install esdocs-ecmascript-proposal-plugin
```

## Config
```json
{
  "source": "./src",
  "destination": "./doc",
  "plugins": [
    {"name": "esdocs-ecmascript-proposal-plugin", "option": {"all": true}}
  ]
}
```

If you want to enable each proposals,
```json
{
  "source": "./src",
  "destination": "./doc",
  "plugins": [
    {
      "name": "esdocs-ecmascript-proposal-plugin",
      "option": {
        "classProperties": true,
        "objectRestSpread": true,
        "doExpressions": true,
        "functionBind": true,
        "functionSent": true,
        "asyncGenerators": true,
        "decorators": true,
        "exportExtensions": true,
        "dynamicImport": true
      }
    }
  ]
}
```

## LICENSE
MIT

## Authors
[Muhammad-Jibril B.A. @JBA-Khalifa](https://github.com/JBA-Khalifa)
[Ryo Maruyama@h13i32maru](https://github.com/h13i32maru)

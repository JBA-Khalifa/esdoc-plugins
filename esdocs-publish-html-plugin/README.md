# ESDoc Publish HTML Plugin
## Install
```bash
npm install esdocs-publish-html-plugin
```

## Config
```json
{
  "source": "./src",
  "destination": "./doc",
  "plugins": [
    {"name": "esdocs-publish-html-plugin"}
  ]
}
```

## Custom Template
To use a custom template (ex `my-template` placed in the working directory):
```json
    {"name": "esdocs-publish-html-plugin", "option": {"template": "my-template"}}
```

We recommend that you base on [the original template](https://github.com/esdocs/esdocs-plugins/tree/master/esdocs-publish-html-plugin/src/Builder/template).

## LICENSE
MIT

## Authors
[Muhammad-Jibril B.A. @JBA-Khalifa](https://github.com/JBA-Khalifa)
[Ryo Maruyama@h13i32maru](https://github.com/h13i32maru)

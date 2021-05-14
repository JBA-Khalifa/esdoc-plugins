# ESDoc Publish Markdown Plugin (PoC)
**This plugin is proof of concept.**
**So, the plugin has only minimum features.**
**We are waiting for your pull request!**

## Example
[example](https://github.com/esdocs/esdocs-plugins/tree/master/esdocs-publish-markdown-plugin/misc/index.md)

<img src="https://raw.githubusercontent.com/esdocs/esdocs-plugins/master/esdocs-publish-markdown-plugin/misc/ss.png" width="400px">

## Install
```bash
npm install esdocs-publish-markdown-plugin
```

## Config
```json
{
  "source": "./src",
  "destination": "./doc",
  "plugins": [
    {
      "name": "esdocs-publish-markdown-plugin",
      "option": {
        "filename":"README.md"
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

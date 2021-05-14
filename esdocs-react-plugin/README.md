# ESDoc React Plugin (PoC)
**This plugin is proof of concept.**
**So, the plugin has only minimum features.**
**We are waiting for your pull request!**

## Example
```js
/**
 * This is MyClass.
 * @reactProps {!number} prop1 - this is prop1
 * @reactProps {string} prop2 - this is prop2
 */
export default class MyClass extends React.Component {
}
```

<img src="https://raw.githubusercontent.com/esdocs/esdocs-plugins/master/esdocs-react-plugin/misc/ss.png" width="400px">

## Install
```bash
npm install esdocs-react-plugin
```

## Config
```json
{
  "source": "./src",
  "destination": "./doc",
  "plugins": [
    {"name": "esdocs-standard-plugin"},
    {"name": "esdocs-react-plugin"}
  ]
}
```

## Dependency
- esdocs-standard-plugin

## LICENSE
MIT

## Authors
[Muhammad-Jibril B.A. @JBA-Khalifa](https://github.com/JBA-Khalifa)
[Ryo Maruyama@h13i32maru](https://github.com/h13i32maru)

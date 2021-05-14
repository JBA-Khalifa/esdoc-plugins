# ESDoc Accessor Plugin
## Install
```bash
npm install esdocs-accessor-plugin
```

## Config
```json
{
  "source": "./src",
  "destination": "./doc",
  "plugins": [
    {"name": "esdocs-accessor-plugin", "option": {"access": ["public", "protected", "private"], "autoPrivate": true}}
  ]
}
```

- `access` is default `["public", "protected", "private"]`
- `autoPrivate` is default `true`

## LICENSE
MIT

## Authors
[Muhammad-Jibril B.A. @JBA-Khalifa](https://github.com/JBA-Khalifa)
[Ryo Maruyama@h13i32maru](https://github.com/h13i32maru)

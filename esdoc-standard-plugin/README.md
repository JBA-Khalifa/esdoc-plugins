# ESDoc Standard Plugin
## Install
```bash
npm install esdocs-standard-plugin
```

## Config
```json
{
  "source": "./src",
  "destination": "./doc",
  "plugins": [
    {
      "name": "esdocs-standard-plugin",
      "option": {
        "lint": {"enable": true},
        "coverage": {"enable": true},
        "accessor": {"access": ["public", "protected", "private"], "autoPrivate": true},
        "undocumentIdentifier": {"enable": true},
        "unexportedIdentifier": {"enable": false},
        "typeInference": {"enable": true},
        "brand": {
          "logo": "./logo.png",
          "title": "My Library",
          "description": "this is awesome library",
          "repository": "https://github.com/foo/bar",
          "site": "http://my-library.org",
          "author": "https://twitter.com/foo",
          "image": "http://my-library.org/logo.png"
        },
        "manual": {
          "index": "./manual/index.md",
          "globalIndex": true,
          "asset": "./manual/asset",
          "files": [
            "./manual/overview.md",
            "./manual/design.md",
            "./manual/installation.md",
            "./manual/usage1.md",
            "./manual/usage2.md",
            "./manual/tutorial.md",
            "./manual/configuration.md",
            "./manual/example.md",
            "./manual/advanced.md",
            "./manual/faq.md",
            "./CHANGELOG.md"
          ]
        },
        "test": {
          "source": "./test/",
          "interfaces": ["describe", "it", "context", "suite", "test"],
          "includes": ["(spec|Spec|test|Test)\\.js$"],
          "excludes": ["\\.config\\.js$"]
        }
      }
    }
  ]
}
```

The `esdocs-standard-plugin` is a glue plugin. The following plugins are used by this.
- [esdocs-lint-plugin](https://github.com/esdocs/esdocs-plugins/tree/master/esdocs-lint-plugin)
- [esdocs-coverage-plugin](https://github.com/esdocs/esdocs-plugins/tree/master/esdocs-coverage-plugin)
- [esdocs-accessor-plugin](https://github.com/esdocs/esdocs-plugins/tree/master/esdocs-accessor-plugin)
- [esdocs-type-inference-plugin](https://github.com/esdocs/esdocs-plugins/tree/master/esdocs-type-inference-plugin)
- [esdocs-external-ecmascript-plugin](https://github.com/esdocs/esdocs-plugins/tree/master/esdocs-external-ecmascript-plugin)
- [esdocs-brand-plugin](https://github.com/esdocs/esdocs-plugins/tree/master/esdocs-brand-plugin)
- [esdocs-undocumented-identifier-plugin](https://github.com/esdocs/esdocs-plugins/tree/master/esdocs-undocumented-identifier-plugin)
- [esdocs-unexported-identifier-plugin](https://github.com/esdocs/esdocs-plugins/tree/master/esdocs-unexported-identifier-plugin)
- [esdocs-integrate-manual-plugin](https://github.com/esdocs/esdocs-plugins/tree/master/esdocs-integrate-manual-plugin)
- [esdocs-integrate-test-plugin](https://github.com/esdocs/esdocs-plugins/tree/master/esdocs-integrate-test-plugin)
- [esdocs-publish-html-plugin](https://github.com/esdocs/esdocs-plugins/tree/master/esdocs-publish-html-plugin)

## LICENSE
MIT

## Authors
[Muhammad-Jibril B.A. @JBA-Khalifa](https://github.com/JBA-Khalifa)
[Ryo Maruyama@h13i32maru](https://github.com/h13i32maru)

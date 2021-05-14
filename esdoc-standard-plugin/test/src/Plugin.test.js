const assert = require('assert');
const path = require('path');

describe('test standard plugin:', ()=>{
  it('dynamically load plugins', ()=>{
    const plugins = require('../spy-plugin.js').testTargetPlugins;

    assert.deepEqual(plugins, [
      {name: './src/Plugin.js', option: {
        brand: {
          title: 'My Library'
        },
        manual: {
          files: ['./test/manual/overview.md']
        },
        test: {
          source: "./test/test",
          includes: ["Test.js$"]
        }
      }},
      {name: './test/spy-plugin.js'},
      {name: 'esdocs-lint-plugin'},
      {name: 'esdocs-coverage-plugin'},
      {name: 'esdocs-accessor-plugin'},
      {name: 'esdocs-type-inference-plugin'},
      {name: 'esdocs-external-ecmascript-plugin'},
      {name: 'esdocs-brand-plugin', option: {title: 'My Library'}},
      {name: 'esdocs-undocumented-identifier-plugin'},
      {name: 'esdocs-unexported-identifier-plugin'},
      {name: 'esdocs-integrate-manual-plugin', option: {
        coverage: true,
        files: ['./test/manual/overview.md']
      }},
      {name: 'esdocs-integrate-test-plugin', option: {
        source: "./test/test",
        interfaces: ["describe", "it", "context", "suite", "test"],
        includes: ["Test.js$"],
        excludes: ["\\.config\\.js$"]
      }},
      {name: 'esdocs-publish-html-plugin'},
    ]);

  });
});

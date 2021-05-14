class Plugin {
  onHandlePlugins(ev) {
    const option = ev.data.option || {};
    const plugins = [
      {name: 'esdocs-lint-plugin', option: option.lint},
      {name: 'esdocs-coverage-plugin', option: option.coverage},
      {name: 'esdocs-accessor-plugin', option: option.accessor},
      {name: 'esdocs-type-inference-plugin', option: option.typeInference},
      {name: 'esdocs-external-ecmascript-plugin'},
      {name: 'esdocs-brand-plugin', option: option.brand},
      {name: 'esdocs-undocumented-identifier-plugin', option: option.undocumentIdentifier},
      {name: 'esdocs-unexported-identifier-plugin', option: option.unexportedIdentifier},
      {name: 'esdocs-integrate-manual-plugin', option: option.manual},
      {name: 'esdocs-integrate-test-plugin', option: option.test},
      {name: 'esdocs-publish-html-plugin'}
    ];

    const existPluginNames = ev.data.plugins.map(plugin => plugin.name);
    for (const plugin of plugins) {
      if (existPluginNames.includes(plugin.name)) continue;
      if (plugin.option === undefined) delete plugin.option;
      ev.data.plugins.push(plugin);
    }
  }
}

module.exports = new Plugin();

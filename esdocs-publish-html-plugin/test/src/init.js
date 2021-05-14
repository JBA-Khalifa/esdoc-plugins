const path = require('path');
const ESDocCLI = require('esdocs/out/src/ESDocCLI.js').default;

function cli() {
  const cliPath = path.resolve('./node_modules/esdocs/out/ESDocCLI.js');
  const argv = ['node', cliPath, '-c', './test/fixture/esdocs.json'];
  const cli = new ESDocCLI(argv);
  cli.exec();
}

cli();

// hack: depends on esdocs internal class
const FileDoc = require('esdocs/out/src/Doc/FileDoc').default;

/**
 * Doc class for test code file.
 */
class TestFileDoc extends FileDoc {
  /** set ``testFile`` to kind. */
  _$kind() {
    this._value.kind = 'testFile';
  }
}

module.exports = TestFileDoc;

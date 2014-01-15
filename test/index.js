var redtape = require('redtape'),
    vanityKey = require('..');

var it = redtape({
  beforeEach: function (cb) {
    cb();
  },
  afterEach: function (cb) {
    cb();
  }
});

it('should say hello', function(t) {
  t.equal(vanityKey(), 'Hello, world');
  t.end();
});

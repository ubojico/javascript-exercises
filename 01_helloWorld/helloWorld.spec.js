const helloWorld = require('./helloWorld2');

describe('Hello World', function() {
  test('says "Hello, World!"', function() {
    expect(helloWorld()).toEqual('Hello, World!');
  });
});

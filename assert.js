var assert = {
  toEqual: function(expected, actual) {
    if (expected !== actual) {
      throw new Error(`Expected ${expected}, got ${actual}`);
    } else {
      console.log(`Test passed ${expected}, got ${actual}`);
    };
  },
  instanceOf: function(expected, actual) {
    if (!(expected instanceof actual)) {
      throw new Error("Test failed: it wasn't an instance")
    } else {
      console.log(`Test passed`)
    }
  }
}

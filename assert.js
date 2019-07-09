var assert = { 
  toEqual: function(expected, actual) {
    if (expected !== actual) {
      throw new Error(`Expected ${expected}, got ${actual}`);
    } else {
      console.log(`Test passed ${expected}, got ${actual}`);
    };
  }
}
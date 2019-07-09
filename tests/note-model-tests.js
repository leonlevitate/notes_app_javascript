(function() {
  function testCreateNote() {
    var string = "Hello World"
    var note = new Note(string);

    assert.toEqual("Hello World", note.text)
    }
  testCreateNote();
})(this);

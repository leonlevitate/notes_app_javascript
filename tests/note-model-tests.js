(function() {
  function testCreateNote() {
    var string = "Hello World"
    var note = new NoteModel(string);

    assert.toEqual("Hello World", note.text)
    }
  testCreateNote();
})(this);

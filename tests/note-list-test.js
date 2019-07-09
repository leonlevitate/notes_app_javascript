(function() {
  function testCreateNoteList() {
    var noteList = new NoteList()
    assert.instanceOf(noteList.notes, Array)
  }
  testCreateNoteList();
})(this);

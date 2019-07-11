(function() {
  function testCreateNoteList() {
    var noteList = new NoteList()
    assert.instanceOf(noteList.notes, Array)
  }
  function testAddNote() {
    var noteList = new NoteList()
    noteList.add
  }
  testCreateNoteList();
})(this);

(function() {
  function testCreateNotesView() {
    var notesView = new NotesView()
    assert.instanceOf(notesView.notes, Array)
  }
  function testAddNote() {
    var notesView = new NotesView()
    notesView.add
  }
  testCreateNotesView();
})(this);

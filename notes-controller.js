function NotesController(noteModel, notesView) {
  this.noteModel = noteModel
  this.notesView = notesView
// run only once, set up the submit event listener
  this._setup()
}

NotesController.prototype = {
  _setup: function() {
    // set up an event listener for submit events
    window.addEventListener('submit', function(event) {
      // stop the actual submission
      event.preventDefault()
      // create a note
      var note = new this.noteModel(??)
      // add the note into my list
      this.notesView.add(note)
      // update the DOM with the view
      this.updateDOM()
    })
  },

  updateDOM: function() {
    // grab the app element and insert html from the view
    document.getElementById('app').innerHTML = this.notesView.render()
  }
}
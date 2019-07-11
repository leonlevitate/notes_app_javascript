function NotesController(noteModel, notesView) {
  this.noteModel = noteModel
  this.notesView = notesView
// run only once, set up the submit event listener
  this._setup()
}

NotesController.prototype = {
  _setup: function() {
    var self = this
    // set up an event listener for submit events
    window.addEventListener('submit', function(event) {
      // stop the actual submission
      event.preventDefault()
      // create a note
      this.console.log(event)
      var note = new self.noteModel(event.target[0].value)
      // add the note into my list
      self.notesView.add(note)
      // update the DOM with the view
      self.updateDOM()
    })
  },

  updateDOM: function() {
    // grab the app element and insert html from the view
    document.getElementById('app').innerHTML = this.notesView.render()
  }
}
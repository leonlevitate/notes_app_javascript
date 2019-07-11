// add a note
// returns a string of html

function NotesView(notes) {
  this.notes = notes
}

NotesView.prototype = {
  add: function(note) {
    this.notes.push(note)
  },

  render: function() {
    return [
      "<form>",
        "<input type='text'></input>",
        "<input type='submit'></input>",
        "</form>",
        this.notes.map(function(note) {
          return "<p>" + note.text + "</p>"
        }).join('')
    ].join('')
  }
}


import { Note } from "./note-model";

// on load, create the app

window.addEventListener('load', function(){
  // understands the list of notes - and returns html string
  var notesView = new NotesView([])
  // understands what a note is
  var noteModel = NoteModel
  // controller listens to submit events (takes text), creates a note, adds it to the list, and updates the DOM
  var controller = new NotesController(noteModel, notesView)
  // create the app - updating the DOM
  controller.updateDOM()
})
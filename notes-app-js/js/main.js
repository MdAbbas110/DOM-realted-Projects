import NotesView from './NotesView.js';
import NotesAPI from './NotesAPI.js';

const app = document.querySelector('#app');

const view = new NotesView(app, {
  onNoteAdd() {
    // console.log('notes added');
  },

  onNoteSelect(id) {
    console.log('Notes selected' + id);
  },

  onNoteDelete(id) {
    console.log('note Deleted: ' + id);
  },

  onNoteEdit(newTitle, newBody) {
    console.log(newTitle);
    console.log(newBody);
  },
});

view.updateNoteList(NotesAPI.getAllNotes());

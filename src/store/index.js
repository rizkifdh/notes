import { createStore } from "vuex";

export default createStore({
  state: {
    notes: [],
  },
  mutations: {
    addNote(state, note) {
      state.notes.push(note);
    },
    deleteNote(state, noteId) {
      state.notes = state.notes.filter((note) => note.id !== noteId);
      localStorage.setItem("notes", JSON.stringify(state.notes));
    },
    updateNote(state, updatedNote) {
      const index = state.notes.findIndex((note) => note.id === updatedNote.id);
      if (index !== -1) {
        state.notes.splice(index, 1, updatedNote);
      }
      localStorage.setItem("notes", JSON.stringify(state.notes));
    },
    initializeStore(state) {
      const storedNotes = JSON.parse(localStorage.getItem("notes"));
      if (storedNotes) {
        state.notes = storedNotes;
      }
    },
  },
  actions: {
    addNote({ commit, state }, note) {
      commit("addNote", note);
      localStorage.setItem("notes", JSON.stringify(state.notes));
    },
    deleteNote({ commit, state }, noteId) {
      commit("deleteNote", noteId);
    },
    updateNote({ commit, state }, updatedNote) {
      commit("updateNote", updatedNote);
    },
  },
  modules: {},
});

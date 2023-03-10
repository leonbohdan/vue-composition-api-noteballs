import { defineStore, acceptHMRUpdate } from 'pinia';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/api/firebase';

export const useStoreNotes = defineStore('storeNotes', {
  state: () => {
    return {
      notes: [],
    };
  },

  getters: {
    getNoteContent: ({ notes }) => {
      return (id) => {
        return notes.filter((note) => note.id === id)[0].content;
      };
    },
    totalNotesCount: ({ notes }) => {
      return notes.length;
    },
    totalCharactersCount: ({ notes }) => {
      let counter = 0;

      notes.forEach(({ content }) => {
        counter += content.length;
      });

      return counter;
    },
  },

  actions: {
    async getNotes() {
      const querySnapshot = await getDocs(collection(db, 'notes'));

      querySnapshot.forEach((doc) => {
        const note = {
          id: doc.id,
          content: doc.data().content,
        };

        this.notes.push(note);
      });
    },
    addNote(content) {
      const note = {
        id: new Date().getTime().toString(),
        content,
      };

      this.notes.unshift(note);
    },
    deleteNote(id) {
      this.notes = this.notes.filter((note) => note.id !== id);
    },
    updateNote({ id, content }) {
      this.notes = this.notes.map((note) => {
        if (note.id === id) {
          return {
            ...note,
            content,
          };
        }

        return note;
      });
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useStoreNotes, import.meta.hot));
}

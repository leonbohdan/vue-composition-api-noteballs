import { defineStore, acceptHMRUpdate } from 'pinia';
import { collection, onSnapshot, addDoc, doc, deleteDoc, updateDoc, query, orderBy } from 'firebase/firestore';
import { db } from '@/api/firebase';
import { useStoreAuth } from '@/stores/storeAuth.js';

let notesCollectionRef;
let notesCollectionQuery;
let getNotesSnapshot = null;

export const useStoreNotes = defineStore('storeNotes', {
  state: () => {
    return {
      notes: [],
      isNotesLoading: false,
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
    init() {
      const storeAuth = useStoreAuth();

      notesCollectionRef = collection(db, 'users', storeAuth.user.uid, 'notes');
      notesCollectionQuery = query(notesCollectionRef, orderBy('date', 'desc'));

      this.getNotes();
    },
    async getNotes() {
      this.isNotesLoading = true;

      getNotesSnapshot = onSnapshot(notesCollectionQuery, (querySnapshot) => {
        const notes = [];

        querySnapshot.forEach((doc) => {
          const note = {
            id: doc.id,
            content: doc.data().content,
            date: doc.data().date,
          };

          notes.push(note);
        });

        this.notes = notes;
        this.isNotesLoading = false;
      }, (error) => {
        console.error(error.message);
      });
    },
    clearNotes() {
      this.notes = [];
      if (getNotesSnapshot) getNotesSnapshot(); // unsubscribe from any active listener
    },
    async addNote(content) {
      const date = new Date().getTime().toString();

      await addDoc(notesCollectionRef, {
        content,
        date,
      });
    },
    async deleteNote(id) {
      await deleteDoc(doc(notesCollectionRef, id));
    },
    async updateNote({ id, content }) {
      await updateDoc(doc(notesCollectionRef, id), { content });
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useStoreNotes, import.meta.hot));
}

import { defineStore, acceptHMRUpdate } from 'pinia';

export const useStoreNotes = defineStore('storeNotes', {
  state: () => {
    return {
      notes: [
        {
          id: 'id1',
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi, asperiores commodi cum dolor dolores, eligendi enim ipsa ipsum officiis pariatur possimus praesentium quas quos ratione repellat similique voluptas voluptatibus!',
        }, {
          id: 'id2',
          content: 'lores, eligendi enim ipsa ipsum officiis pariatur ellat similique voluptas voluptatibus!',
        },
      ],
    };
  },
  getters: {},
  actions: {
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
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useStoreNotes, import.meta.hot));
}

import { defineStore, acceptHMRUpdate } from 'pinia';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { auth } from '@/api/firebase';
import { useStoreNotes } from '@/stores/storeNotes.js';

export const useStoreAuth = defineStore('storeAuth', {
  state: () => {
    return {
      user: null,
    };
  },

  actions: {
    init() {
      const storeNotes = useStoreNotes();

      onAuthStateChanged(auth, (user) => {
        this.user = user;

        if (user) {
          this.router.push('/');
          storeNotes.init();
        } else {
          this.router.replace('/auth');
          storeNotes.clearNotes();
        }
      });
    },
    async registerUser({ email, password }) {
      try {
        const { user } = await createUserWithEmailAndPassword(auth, email, password);
      } catch (e) {
        console.error(e.message);
      }
    },
    async loginUser({ email, password }) {
      try {
        const { user } = await signInWithEmailAndPassword(auth, email, password);
      } catch (e) {
        console.error(e.message);
      }
    },
    async logoutUser() {
      try {
        await signOut(auth);
      } catch (e) {
        console.error(e.message);
      }
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useStoreAuth, import.meta.hot));
}
<script setup>
import { ref } from 'vue';
import Note from '@/components/Notes/Note.vue';
import AddEditNote from '@/components/Notes/AddEditNote.vue';
import { useStoreNotes } from '@/stores/storeNotes.js';
import { useWatchCharacters } from '@/use/useWatchCharacters';

const storeNotes = useStoreNotes();
const newNote = ref('');
const addEditNoteRef = ref(null);

useWatchCharacters(newNote);

const addNote = () => {
  storeNotes.addNote(newNote.value);

  newNote.value = '';

  addEditNoteRef.value.focusTextarea();
};
</script>

<template>
  <div class="notes">
    <AddEditNote
      ref="addEditNoteRef"
      v-model="newNote"
      placeholder="Add a new note"
    >
      <template #buttons>
        <button
          class="button is-link has-background-success"
          :disabled="!newNote"
          @click="addNote"
        >
          Add new notes
        </button>
      </template>
    </AddEditNote>

    <Note
      v-for="note in storeNotes.notes"
      :key="note.id"
      :note="note"
    />
  </div>
</template>

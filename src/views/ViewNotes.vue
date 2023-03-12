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

    <progress
      v-if="storeNotes.isNotesLoading"
      class="progress is-large is-success"
      max="100"
    ></progress>

    <template v-else>
      <Note
        v-for="note in storeNotes.notes"
        :key="note.id"
        :note="note"
      />

      <div
        v-if="!storeNotes.notes.length"
        class="is-size-4 has-text-centered has-text-grey-light is-family-monospace py-6"
      >
        No notes here yet...
      </div>
    </template>
  </div>
</template>

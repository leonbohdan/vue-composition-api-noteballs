<script setup>
import { ref } from 'vue';
import Note from '@/components/Notes/Note.vue';
import AddEditNote from '@/components/Notes/AddEditNote.vue';
import { useStoreNotes } from '@/stores/storeNotes.js';

const storeNotes = useStoreNotes();
const newNote = ref('note 1');
const newNoteRef = ref(null);

const addNote = () => {
  storeNotes.addNote(newNote.value);

  newNote.value = '';

  newNoteRef.value.focus();
};
</script>

<template>
  <div class="notes">
    <AddEditNote
      v-model="newNote"
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

<script setup>
import { ref } from 'vue';
import Note from '@/components/Notes/Note.vue';
import AddEditNote from '@/components/Notes/AddEditNote.vue';
import { useStoreNotes } from '@/stores/storeNotes.js';

const storeNotes = useStoreNotes();
const newNote = ref('asdfasdfasdf');
const newNoteRef = ref(null);

const addNote = () => {
  storeNotes.addNote(newNote.value);

  newNote.value = '';

  newNoteRef.value.focus();
};
</script>

<template>
  <div class="notes">
    <!--    v-model="newNote"-->
    <AddEditNote
      :new-note="newNote"
      @update:note-value="newNote.value = $event"
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

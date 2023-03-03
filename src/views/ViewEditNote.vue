<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import AddEditNote from '@/components/Notes/AddEditNote.vue';
import { useStoreNotes } from '@/stores/storeNotes.js';

const storeNotes = useStoreNotes();

const noteContent = ref('');

const route = useRoute();

noteContent.value = storeNotes.getNoteContent(route.params.id);

const handleSaveNote = () => {
  console.log('handleSaveNote');
  const payload = {
    id: route.params.id,
    content: noteContent.value,
  };

  storeNotes.updateNote(payload);
};
</script>

<template>
  <div class="edit-note">
    <AddEditNote
      v-model="noteContent"
      bg-color="link"
      placeholder="Edit note"
      label="Edit note"
    >
      <template #buttons>
        <button
          class="button is-link is-light mr-2"
          @click="$router.back()"
        >
          Cancel
        </button>

        <button
          class="button is-link has-background-link"
          :disabled="!noteContent"
          @click="handleSaveNote"
        >
          Save note
        </button>
      </template>
    </AddEditNote>
  </div>
</template>
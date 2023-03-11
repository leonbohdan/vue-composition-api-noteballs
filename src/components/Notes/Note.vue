<script setup>
import { computed, reactive } from 'vue';
import { useStoreNotes } from '@/stores/storeNotes.js';
import { useDateFormat } from '@vueuse/core';
import DeleteNoteModal from '@/components/Notes/DeleteNoteModal.vue';

const storeNotes = useStoreNotes();

const modals = reactive({
  deleteNote: false,
});

const props = defineProps({
  note: {
    type: Object,
    required: true,
  },
});

const characterLength = computed(() => {
  const description = props.note.content.length > 1 ? 'characters' : 'character';

  return `${props.note.content.length} ${description}`;
});

const formattedDate = computed(() => {
  return useDateFormat(new Date(parseInt(props.note.date)), 'YYYY-MM-DD HH:mm').value;
});
</script>

<template>
  <div class="card mb-4">
    <div class="card-content">
      <div class="content">
        {{ note.content }}

        <div class="columns is-mobile has-text-grey-light mt-2">
          <small class="column">{{ formattedDate }}</small>

          <small class="column has-text-right">{{ characterLength }}</small>
        </div>
      </div>
    </div>

    <footer class="card-footer">
      <RouterLink
        :to="`/edit-note/${note.id}`"
        class="card-footer-item"
      >
        Edit
      </RouterLink>

      <a
        href="#"
        class="card-footer-item"
        @click.prevent="modals.deleteNote = true"
      >
        Delete
      </a>
    </footer>
  </div>

  <DeleteNoteModal
    v-if="modals.deleteNote"
    v-model="modals.deleteNote"
    :note-id="note.id"
  />
</template>

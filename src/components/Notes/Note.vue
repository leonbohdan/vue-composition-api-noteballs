<script setup>
import { computed } from 'vue';

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

const deleteNote = (id) => {
  console.log('deleteNote', id);
};
</script>

<template>
  <div class="card mb-4">
    <div class="card-content">
      <div class="content">
        {{ note.content }}

        <div class="has-text-right has-text-grey-light mt-2">
          <small>{{ characterLength }}</small>
        </div>
      </div>
    </div>

    <footer class="card-footer">
      <a href="#" class="card-footer-item">Edit</a>

      <a href="#" class="card-footer-item" @click.prevent="deleteNote(note.id)">Delete</a>
    </footer>
  </div>
</template>

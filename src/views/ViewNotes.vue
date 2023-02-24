<script setup>
import { ref } from 'vue';
import Note from '@/components/Notes/Note.vue';

const notes = ref([
  {
    id: 'id1',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi, asperiores commodi cum dolor dolores, eligendi enim ipsa ipsum officiis pariatur possimus praesentium quas quos ratione repellat similique voluptas voluptatibus!',
  }, {
    id: 'id2',
    content: 'lores, eligendi enim ipsa ipsum officiis pariatur ellat similique voluptas voluptatibus!',
  },
]);

const newNote = ref('');
const newNoteRef = ref(null);

const addNote = () => {
  const note = {
    id: new Date().getTime().toString(),
    content: newNote.value,
  };

  notes.value.unshift(note);

  newNote.value = '';

  newNoteRef.value.focus();
};
</script>

<template>
  <div class="notes">
    <div class="card has-background-success-dark p-4 mb-5">
      <div class="field">
        <div class="control">
          <textarea
            ref="newNoteRef"
            v-model.trim="newNote"
            class="textarea"
            placeholder="Add a new note"
          ></textarea>
        </div>
      </div>

      <div class="field is-grouped is-grouped-right">
        <p class="control">
          <button
            class="button is-link has-background-success"
            :disabled="!newNote"
            @click="addNote"
          >
            Add new notes
          </button>
        </p>
      </div>
    </div>

    <Note
      v-for="note in notes"
      :key="note.id"
      :note="note"
    />
  </div>
</template>

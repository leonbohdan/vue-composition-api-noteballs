<script setup>
import { ref } from 'vue';

const props = defineProps({
  // modelValue: {
  //   type: String,
  //   required: true,
  // },
  newNote: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(['update:model-value', 'update:note-value']);
</script>

<template>
  <div class="card has-background-success-dark p-4 mb-5">
    <div class="field">
      <div class="control">
        <!--        v-model.trim="newNote"-->
        <textarea
          ref="newNoteRef"
          :value="newNote"
          class="textarea"
          placeholder="Add a new note"
          @input="emit('update:note-value', newNote)"
        ></textarea>
      </div>
    </div>

    <div class="field is-grouped is-grouped-right">
      <p class="control">
        <slot name="buttons"></slot>
      </p>
    </div>
  </div>
</template>

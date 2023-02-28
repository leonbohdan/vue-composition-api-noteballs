<script setup>
import { ref, onMounted, watch } from 'vue';

const props = defineProps({
  modelValue: {
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
        <textarea
          ref="newNoteRef"
          :value="modelValue"
          class="textarea"
          placeholder="Add a new note"
          @input="emit('update:model-value', $event.target.value)"
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

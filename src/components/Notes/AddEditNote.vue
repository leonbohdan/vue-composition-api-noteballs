<script setup>
import { ref } from 'vue';
import { vAutofocus } from '@/directives/vAutofocus';

const textareaRef = ref(null);

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },

  bgColor: {
    type: String,
    default: 'success',
  },

  placeholder: {
    type: String,
    default: 'Type something...',
  },

  label: {
    type: String,
  },
});

const emit = defineEmits(['update:model-value']);

const focusTextarea = () => {
  textareaRef.value.focus();
};

defineExpose({
  focusTextarea,
});
</script>

<template>
  <div :class="`card has-background-${bgColor}-dark p-4 mb-5`">
    <label
      v-if="label"
      class="label has-text-white"
    >
      {{ label }}
    </label>

    <div class="field">
      <div class="control">
        <textarea
          ref="textareaRef"
          v-autofocus
          :value="modelValue"
          class="textarea"
          :placeholder="placeholder"
          maxlength="100"
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

import { watch } from 'vue';

export function useWatchCharacters(valueToWatch, maxChars = 100) {
  watch(valueToWatch, (value) => {
    if (value.length === maxChars) {
      alert(`Only ${maxChars} characters allowed gosh darnit!`);
    }
  });
}

<script setup>
import { onMounted } from 'vue';
import { useStoreAuth } from '@/stores/storeAuth.js';
import NavBar from '@/components/Layout/NavBar.vue';

const storeAuth = useStoreAuth();

onMounted(() => {
  storeAuth.init();
});
</script>

<template>
  <NavBar />

  <div class="container is-max-desktop px-2 py-4">
    <RouterView/>
  </div>
</template>

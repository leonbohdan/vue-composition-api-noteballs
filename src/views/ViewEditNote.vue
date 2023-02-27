<script setup>
// import AddEditNote from '@/components/Notes/AddEditNote.vue';

</script>

<template>
  <div class="edit-note">
    <h1>
      Edit Note with an id of: {{ $route.params.id }}
    </h1>

    <!--    <AddEditNote-->
    <!--      v-model="newNote"-->
    <!--    >-->
    <!--      <template #buttons>-->
    <!--        <button-->
    <!--          class="button is-link has-background-success"-->
    <!--          :disabled="!newNote"-->
    <!--          @click="addNote"-->
    <!--        >-->
    <!--          Add new notes-->
    <!--        </button>-->
    <!--      </template>-->
    <!--    </AddEditNote>-->
  </div>
</template>
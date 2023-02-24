<script setup></script>

<template>
  <div class="notes">
    <div class="card has-background-success-dark p-4 mb-5">
      <div class="field">
        <div class="control">
          <textarea class="textarea" placeholder="Add a new note"></textarea>
        </div>
      </div>

      <div class="field is-grouped is-grouped-right">
        <p class="control">
          <button class="button is-link has-background-success">
            Add new notes
          </button>
        </p>
      </div>
    </div>

    <div
      v-for="i in 3"
      :key="i"
      class="card mb-4"
    >
      <div class="card-content">
        <div class="content">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi, asperiores commodi cum dolor dolores, eligendi enim ipsa ipsum officiis pariatur possimus praesentium quas quos ratione repellat similique voluptas voluptatibus!
        </div>
      </div>

      <footer class="card-footer">
        <a href="#" class="card-footer-item">Edit</a>
        <a href="#" class="card-footer-item">Delete</a>
      </footer>
    </div>
  </div>
</template>

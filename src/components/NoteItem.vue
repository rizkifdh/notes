<template>
    <div class="note-item" @click="goToDetail">
      <h2>{{ note.title }}</h2>
      <p>{{ note.createdAt }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      note: Object
    },
    methods: {
      goToDetail() {
        this.$router.push(`/note/${this.note.id}`);
      }
    }
  };
  </script>
  
  <style scoped>
  .note-item {
    cursor: pointer;
    border: 1px solid #ccc;
    padding: 10px;
    margin-bottom: 10px;
  }
  </style>
  
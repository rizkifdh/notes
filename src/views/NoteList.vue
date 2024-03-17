<template>
    <div class="note-list">
      <h1 class="title">Note List</h1>
      <el-button type="primary" plain="primary" @click="goToAddNotePage" style="margin-bottom: 20px;">Add Note</el-button>
      <div class="note-item" v-for="note in notes" :key="note.id">
        <NoteItem :note="note" @delete="deleteNote" />
      </div>
    </div>
  </template>
  
  <script>
  import { mapState, mapMutations } from 'vuex';
  import NoteItem from '../components/NoteItem.vue';
  
  export default {
    components: {
      NoteItem
    },
    computed: {
      ...mapState(['notes'])
    },
    methods: {
      ...mapMutations(['deleteNote']),
      goToAddNotePage() {
        this.$router.push('/note/add');
      }
    }
  };
  </script>
  
  <style scoped>
  .note-list {
    max-width: 600px;
    margin: 0 auto;
  }
  
  .title {
    font-size: 24px;
    margin-bottom: 20px;
  }
  
  .note-item {
    padding: 10px;
    margin-bottom: 10px;
  }
  </style>
  
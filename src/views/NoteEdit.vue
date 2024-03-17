<template>
    <div class="note-edit">
      <h1>Edit Note</h1>
      <el-form @submit.prevent="editNote" :model="editedNote" label-position="top">
        <el-form-item label="Title">
          <el-input v-model="editedNote.title" placeholder="Title"></el-input>
        </el-form-item>
        <el-form-item label="Content">
          <el-input type="textarea" v-model="editedNote.content" placeholder="Content"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" plain="primary" native-type="submit">Save</el-button>
          <el-button type="info" plain="info" @click="goBack">Back</el-button>
        </el-form-item>
      </el-form>
    </div>
  </template>
  
  <script>
  import { mapState, mapActions } from 'vuex';
  
  export default {
    data() {
      return {
        editedNote: {}
      };
    },
    computed: {
      ...mapState(['notes']),
      note() {
        return this.notes.find(note => note.id === this.$route.params.id);
      }
    },
    mounted() {
      this.editedNote = { ...this.note };
    },
    methods: {
      ...mapActions(['updateNote']),
      editNote() {
        this.updateNote(this.editedNote);
        this.$router.push('/');
      },
      goBack() {
        this.$router.go(-1);
      }
    }
  };
  </script>
  
  <style scoped>
  .note-edit {
    max-width: 600px;
    margin: 0 auto;
  }
  </style>
  
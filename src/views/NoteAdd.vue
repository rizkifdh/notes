<template>
  <div class="note-add">
    <h1>Add Note</h1>
    <el-form @submit.prevent="saveNote" :model="newNote" label-position="top">
      <el-form-item label="Title">
        <el-input v-model="newNote.title" placeholder="Title"></el-input>
      </el-form-item>
      <el-form-item label="Content">
        <el-input type="textarea" v-model="newNote.content" placeholder="Content"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" plain="primary" native-type="submit">Save</el-button>
        <el-button type="info" plain="info" @click="goBack">Back</el-button>

      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      newNote: {
        title: '',
        content: ''
      }
    };
  },
  methods: {
    ...mapActions(['addNote']),
    saveNote() {
      this.addNote({
        id: Math.random().toString(36).substr(2, 9),
        ...this.newNote,
        createdAt: new Date().toLocaleString()
      });
      this.$router.push('/');
    },
    goBack() {
        this.$router.go(-1);
      }
  }
};
</script>

<style scoped>
.note-add {
  max-width: 600px;
  margin: 0 auto;
}
</style>

<template>
    <div>
      <el-button class="button-back" type="info" plain="info" @click="goBack">Back</el-button>
    </div>
    <div class="note-detail">
      <h2 v-if="note" class="title">{{ note.title }}</h2>
      <p v-if="note" class="content">{{ note.content }}</p>
      <p v-if="note" class="created-at">{{ note.createdAt }}</p>
      <el-button type="primary" plain="primary" @click="editNote" v-if="note">Edit</el-button>
      <el-button type="danger" plain="danger" @click="deleteNote" v-if="note">Delete</el-button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      note: Object
    },
    methods: {
      editNote() {
        this.$router.push(`/note/${this.note.id}/edit`);
      },
      deleteNote() {
        this.$emit('delete', this.note.id);
        this.$router.push('/');
      },
      goBack() {
      this.$router.push('/');
    }
    }
  };
  </script>
  
  <style scoped>
  .button-back {
    position: absolute;
    top: -30px;
    left: 20px;
  }

  .note-detail {
    border: 1px solid #ccc;
    padding: 10px;
  }
  
  .title {
    font-size: 24px;
    margin-bottom: 10px;
  }
  
  .content {
    margin-bottom: 10px;
  }
  
  .created-at {
    margin-bottom: 10px;
  }
  
  .el-button {
    margin-right: 10px;
  }
  </style>
  
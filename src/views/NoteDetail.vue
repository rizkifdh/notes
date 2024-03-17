<template>
  <div class="note-detail">
    <NoteDetail :note="note" @delete="confirmDelete" />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import NoteDetail from '../components/NoteDetail.vue';

export default {
  components: {
    NoteDetail
  },
  computed: {
    ...mapState(['notes']),
    note() {
      return this.notes.find(note => note.id === this.$route.params.id);
    }
  },
  methods: {
    ...mapActions(['deleteNote']),
    confirmDelete() {
      if (confirm('Are you sure you want to delete this note?')) {
        this.deleteNote(this.note.id);
      }
    }
  }
};
</script>

<style scoped>
.note-detail {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 600px;
  width: 100%;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 5px;
}
</style>

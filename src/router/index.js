import { createRouter, createWebHistory } from "vue-router";
import NoteList from "../views/NoteList.vue";
import NoteDetail from "../views/NoteDetail.vue";
import NoteEdit from "../views/NoteEdit.vue";
import NoteAdd from "../views/NoteAdd.vue";

const routes = [
  {
    path: "/",
    name: "NoteList",
    component: NoteList,
  },
  {
    path: "/note/add",
    name: "NoteAdd",
    component: NoteAdd,
  },
  {
    path: "/note/:id",
    name: "NoteDetail",
    component: NoteDetail,
  },
  {
    path: "/note/:id/edit",
    name: "NoteEdit",
    component: NoteEdit,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

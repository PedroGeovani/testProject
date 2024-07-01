import { createRouter, createWebHistory } from 'vue-router'
import ListContactView from '../views/ListContacts.vue'
import AddContactView from '../views/AddContatc.vue'
import DetailContactView from '../views/DetailContact.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/', name: 'Contatos', component: ListContactView},
    {path: '/addContatc', name: 'AddContact', component: AddContactView},
    {path: '/detailContatc/:id', name: 'DetailContact', component: DetailContactView},

  ]
})

export default router

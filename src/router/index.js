import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Consultar from '../views/Consultar.vue'
import Cadastrar from '../views/Cadastrar.vue'
import Editar from '../views/Editar.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/Consultar',
      name: 'consultar',
      component: Consultar
    },
    {
      path: '/Cadastrar',
      name: 'cadastrar',
      component: Cadastrar
    },
    {
      path: '/Editar',
      name: 'editar',
      component: Editar
    }
  ]
})

export default router

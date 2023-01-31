import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ()=>import('../components/Inicio.vue')
    },
    {
      path: '/temas',
      name: 'temas',
      component: ()=>import('../components/temas/ListadoTemas.vue')
    },
    {
      path: '/registrartema',
      name: 'registrartema',
      component: ()=>import('../components/temas/MantenimientoTemas.vue')
    },
    {
      path:'/evaluaciones',
      name: 'evaluaciones',
      component:()=>import('../components/evaluaciones/ListadoEvaluaciones.vue')
    },
    {
      path:'/registrarevaluacion',
      name:'registrarevaluacion',
      component:()=>import('../components/evaluaciones/MantenimientoEvaluaciones.vue')
    },
    {
      path:'/textos',
      name:'textos',
      component:()=>import('../components/textos/ListadoTextos.vue')
    },
    {
      path:'/registrartexto',
      name:'registrartexto',
      component:()=>import('../components/textos/MantenimientoTextos.vue')
    },
    {
      path:'/perfil',
      name:'perfil',
      component:()=>import('../components/Perfil.vue')
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router

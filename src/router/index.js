import Vue from 'vue'
import VueRouter from 'vue-router'
import Categoria from '../views/Categoria.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/:categoria',
    name: 'categoria',
    component: Categoria,
    props: true
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  console.log(to);
  if (to.path == "/") next("/geral");
  else next()

});

export default router

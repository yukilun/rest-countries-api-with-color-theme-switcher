import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CountryView from '../views/CountryView.vue';
import NotFoundView from '../views/NotFoundView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/country/:countryName',
      name: 'country',
      component: CountryView
    },
    { path: '/:pathMatch(.*)*', 
      name: 'notFound', 
      component: NotFoundView 
    },
  ]
})

export default router

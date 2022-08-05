import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

import HomePage from './pages/HomePage.vue';
import AboutPage from './pages/AboutPage.vue';

const routes = [
  { path: '/', component: HomePage},
  { path: '/about', component: AboutPage},

]

const router = createRouter({
  history: createWebHistory(),
  routes, 
})

const app = createApp(App)
app.use(router)

app.mount('#app')

import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import App from './App.vue';

import './assets/main.css';
import VueNotes from '@/views/VueNotes.vue'; 

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'notes',
      component: VueNotes,
    },
  ],
});

createApp(App)
  .use(router)
  .mount('#app');

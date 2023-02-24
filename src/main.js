import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from '@/App.vue';

import './assets/main.css';

const pinia = createPinia();

import router from '@/router';

createApp(App)
  .use(pinia)
  .use(router)
  .mount('#app');

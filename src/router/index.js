import { createRouter, createWebHashHistory } from 'vue-router';

import VueNotes from '@/views/VueNotes.vue';
import ViewStats from '@/views/ViewStats.vue';

const routes = [
  {
    path: '/',
    name: 'notes',
    component: VueNotes,
  }, {
    path: '/stats',
    name: 'stats',
    component: ViewStats,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

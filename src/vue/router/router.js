import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@views/HomeView.vue';
import PersonalStatsView from '@views/PersonalStatsView.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/personal',
        name: 'personal',
        component: PersonalStatsView,
    },
];

const router = createRouter({
    mode: 'history',
    history: createWebHistory('/'),
    linkActiveClass: 'link-active',
    routes,
});

export default router;

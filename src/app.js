import '@css/index.css';
import '@scss/index.scss';
import { createApp } from 'vue';
import App from '@/vue/App.vue';
import router from '@router/router.js';
import store from '@store/store.js';
import clickOutside from '@directives/clickOutside.js';

const app = createApp(App);

app.directive('click-outside', clickOutside);
app.use(store);
app.use(router);
app.mount('#app');

import { createApp } from 'vue';
import App from './App.vue';
import './index.css';
import router from './router.js';
import AppLayout from './layouts/AppLayout.vue';

const app = createApp(App);
    app.use(router);
    app.component('AppLayout', AppLayout);
    app.mount('#app');

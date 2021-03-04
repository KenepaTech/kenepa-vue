import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router.js'
import AppLayout from './layouts/AppLayout.vue'

createApp(App)
    .use(router)
    .component('AppLayout', AppLayout)
    .mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import NavBar from '@/components/organisms/NavBar.vue'
import FooterBar from '@/components/atoms/FooterBar.vue'
import Echo from 'laravel-echo'

(window as any).Pusher = require('pusher-js');

(window as any).Echo = new Echo({
    broadcaster: 'pusher',
    key: 'f942672eba3c8745418f',
    cluster: 'ap3',
    forceTLS: true,
    disableStats: true
});

const app = createApp(App);
app.use(store);
app.use(router);
app.component('NavBar', NavBar);
app.component('FooterBar', FooterBar);
app.mount('#app');
import "bootstrap/dist/css/bootstrap.css"

import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHashHistory} from 'vue-router';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import Help from './components/Help.vue';
import UserAdd from './components/UserAdd.vue';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
      { path: '/test', component: UserAdd }, // our-domain.com/teams => TeamsList
      { path: '/help', component: Help },
    ]
  });
const app=createApp(App)
app.use(router);

app.use(VueSweetalert2);
app.mount('#app')
import "bootstrap/dist/js/bootstrap.js"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "vue-toastification/dist/index.css";

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Toast from "vue-toastification";

import App from './App.vue'
import router from './router'

const app = createApp(App)

const options = {
    position: "top-right",
    timeout: 5000,
    closeOnClick: true
};

app.use(createPinia())
app.use(router)
app.use(Toast, options)

app.mount('#app')

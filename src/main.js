import { createApp } from 'vue'
import App from './App.vue'
import vuetify from "./plugins/vuetify";
import { loadFonts } from './plugins/webfontloader';
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './router' 

loadFonts()

createApp(App)
  .use(vuetify)
  .use(router)
  .mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import vuetify from "./plugins/vuetify";
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './router' 
import { createStore } from "vuex";

export const store = createStore({
  /* state, actions, mutations */
  state: {
    yazilanValue:""
  }
});


createApp(App)
  .use(vuetify)
  .use(router)
  .use(store)
  .mount('#app')

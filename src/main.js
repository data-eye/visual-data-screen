import { createApp } from "vue";
import App from "./App.vue";
// import router from "./router";
import store from "./store";
import VueCountTo from "./components/VueCountTo/index.vue";

createApp(App)
  .use(store)
  .component("CountTo", VueCountTo)
  // .use(router)
  .mount("#app");

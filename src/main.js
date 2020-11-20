import { createApp } from "vue";
import App from "./App.vue";
// import router from "./router";
import store from "./store";
import dataV from "@jiaminghi/data-view";

import VueCountTo from "./components/VueCountTo/index.vue";

createApp(App)
  .use(store)
  .use(dataV)
  .component("CountTo", VueCountTo)
  // .use(router)
  .mount("#app");

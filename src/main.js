import { createApp } from "vue";
import PrimeVue from "primevue/config";
import "./assets/theme.css";
import "primeicons/primeicons.css";
import App from "./App.vue";

const app = createApp(App);
app.use(PrimeVue);
app.mount("#app");

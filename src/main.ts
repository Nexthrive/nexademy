import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes";
import "./style.css";
import PrimeVue from "primevue/config";
import ToastService from "primevue/toastservice";
import ConfirmService from "primevue/confirmationservice";
import "primevue/resources/themes/aura-light-indigo/theme.css";

const app = createApp(App);

// Use PrimeVue
app.use(PrimeVue, { ripple: true });
app.use(ToastService as any);
app.use(ConfirmService);
app.use(router);

app.mount("#app");

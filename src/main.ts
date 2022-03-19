import { createApp } from 'vue'
import App from './App.vue'
import { setupStore } from "./store";
import { setupRouter } from "./router";


async function bootstrap() {
    const app = createApp(App);

    // configure store
    setupStore(app);

    // configure routing
    setupRouter(app);

    app.mount("#app")

}

bootstrap();
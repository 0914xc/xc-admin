import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import type { App } from "vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Index',
        component: () => import('../views/Index.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export function setupRouter(app: App<Element>) {
    app.use(router);
}
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import type { App } from "vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: () => import('../layout/BasicLayout.vue'),
        redirect: '/index',
        children: [
            {
                path: '/index',
                name: 'index',
                component: () => import('../views/Home.vue')
            }, {
                path: '/genshin',
                name: 'genshin',
                component: () => import('../views/Genshin.vue')
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export function setupRouter(app: App<Element>) {
    app.use(router);
}
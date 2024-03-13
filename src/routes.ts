import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import Dashboard from "./views/Dashboard.vue";
import Login from "./views/pages/auth/Login.vue";

const routes: Array<RouteRecordRaw> = [
	{
		path: "/",
		component: Dashboard,
		// meta: { requiresAuth: true },
	},
	{
		path: "/login",
		component: Login,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;

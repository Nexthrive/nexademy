import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import Dashboard from "./views/Dashboard.vue";
import Login from "./views/pages/auth/Login.vue";
import Cookies from "cookies-ts";

const cookies = new Cookies();

const routes: Array<RouteRecordRaw> = [
	{
		path: "/",
		name: "dashboard",
		component: Dashboard,
		meta: { requiresAuth: true },
	},
	{
		path: "/login",
		name: "login",
		component: Login,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

router.beforeEach((to, from, next) => {
	if (to.meta.requiresAuth) {
		const token = cookies.get("token");
		if (token) {
			next();
		} else {
			next("/login");
		}
	} else {
		next();
	}
});

export default router;

import Vue from "vue";
import VueRouter from "vue-router";

const Index = () => import("../pages/shengdianyunqi/Index.vue");
const Shengdian = () => import("../pages/shengdianyunqi/shengdian/index.vue");

Vue.use(VueRouter);

const routes = [
	{ name: "index", path: "/", component: Index },
	{ name: "shengdian", path: "/shengdian", component: Shengdian },
];

const router = new VueRouter({
	routes,
});

export default router;

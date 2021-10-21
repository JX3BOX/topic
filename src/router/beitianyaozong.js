import Vue from "vue";
import VueRouter from "vue-router";

const Index = () => import("../pages/beitianyaozong/Index.vue");
const Yaozong = () => import("../pages/beitianyaozong/Yaozong.vue");
const Index_old = () => import("../pages/beitianyaozong/Index_old.vue");

Vue.use(VueRouter);

const routes = [
    { name: "index", path: "/", component: Index },
    { name: "yaozong", path: "/yaozong", component: Yaozong },
    { name: "old", path: "/old", component: Index_old },
];

const router = new VueRouter({
    routes,
});

export default router;

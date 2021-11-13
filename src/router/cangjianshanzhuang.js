import Vue from "vue";
import VueRouter from "vue-router";

const Index = () => import("../pages/cangjianshanzhuang/Index.vue");
const Detail = () => import("../pages/cangjianshanzhuang/Detail.vue");
// const Cangjian = () => import("../pages/cangjianshanzhuang/index.vue");


Vue.use(VueRouter);

const routes = [
    { name: "index", path: "/", component: Index },
    { name: "detail", path: "/detail", component: Detail },
    // { name: "cangjian", path: "/cangjian", component: Cangjian }
];

const router = new VueRouter({
    routes,
});

export default router;

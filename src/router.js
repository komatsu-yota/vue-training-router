import Vue from "vue";
import Router from "vue-router";

import Top from "./pages/Top";
import About from "./pages/About";
import Members from "./pages/Members";
import MemberDetails from "./pages/MemberDetails";
import notFound404 from "./pages/notFound404";

//routerを使うという宣言
Vue.use(Router);

//routingの設定をする
const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Top
    },
    {
      path: "/about",
      component: About
    },
    {
      path: "/members",
      component: Members
    },
    {
      path: "/member/:id",
      component: MemberDetails
    },
    {
      path: "*",
      component: notFound404
    }
  ]
});

export default router;

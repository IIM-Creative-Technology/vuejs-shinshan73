import { createRouter, createWebHashHistory } from 'vue-router'
import ManagePage from "@/components/managePage.vue"
import Blog from "@/components/Blog";
import CreationPage from "@/components/CreationPage";
import DetailPost from "@/components/DetailPost";

const routes = [
  {
    path: '/admin',
    name: 'Admin',
    component: ManagePage
  },
  {
    path: '/createNewPAge',
    name: 'CreateNewPage',
    component: CreationPage
  },
  {
    path: '/blog',
    name: 'blog',
    component: Blog
  },
  {
    path: '/post/{{ item.metaTitle }}',
    name: 'post',
    component: DetailPost
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

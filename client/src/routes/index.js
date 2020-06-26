import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/views/Home.vue';
import Login from '@/views/auth/Login.vue';
import Register from '@/views/auth/Register.vue';
import Blog from '@/views/blog/Blog.vue';

Vue.use(Router);

const NotFound = () => import('@/components/errors/NotFound.vue');
const Profile = () => import('@/views/Profile.vue');
const AddArticle = () => import('@/views/blog/AddArticle.vue');
const TermsAndConditions = () => import('@/components/TermsAndConditions.vue');

export default new Router({
  mode: 'history',
  // base: '',
  routes: [{
    path: '/',
    component: Home,
    name: 'home',
  }, {
    path: '/login',
    component: Login,
    name: 'login',
  }, {
    path: '/register',
    component: Register,
    name: 'register',
  }, {
    path: '/blog',
    component: Blog,
    name: 'blog',
  }, {
    path: '/blog/add',
    component: AddArticle,
    name: 'add-article',
  }, {
    path: '/profile',
    component: Profile,
    name: 'profile',
  }, {
    path: '/terms-and-conditions',
    component: TermsAndConditions,
    name: 'terms-and-conditions',
  }, {
    path: '*',
    component: NotFound,
    name: 'notfound',
  }],
});

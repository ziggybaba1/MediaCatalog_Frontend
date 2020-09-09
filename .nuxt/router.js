import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4a056696 = () => interopDefault(import('../pages/dashboard.vue' /* webpackChunkName: "pages/dashboard" */))
const _48de3deb = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _7cd88f11 = () => interopDefault(import('../pages/register.vue' /* webpackChunkName: "pages/register" */))
const _056a9efa = () => interopDefault(import('../pages/songs/index.vue' /* webpackChunkName: "pages/songs/index" */))
const _782baba8 = () => interopDefault(import('../pages/songs/edit/index.vue' /* webpackChunkName: "pages/songs/edit/index" */))
const _7eeb2ea8 = () => interopDefault(import('../pages/songs/posts/edit/index.vue' /* webpackChunkName: "pages/songs/posts/edit/index" */))
const _7681d1ee = () => interopDefault(import('../pages/songs/_id/index.vue' /* webpackChunkName: "pages/songs/_id/index" */))
const _7f369ad4 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/dashboard",
    component: _4a056696,
    name: "dashboard"
  }, {
    path: "/login",
    component: _48de3deb,
    name: "login"
  }, {
    path: "/register",
    component: _7cd88f11,
    name: "register"
  }, {
    path: "/songs",
    component: _056a9efa,
    name: "songs"
  }, {
    path: "/songs/edit",
    component: _782baba8,
    name: "songs-edit"
  }, {
    path: "/songs/posts/edit",
    component: _7eeb2ea8,
    name: "songs-posts-edit"
  }, {
    path: "/songs/:id",
    component: _7681d1ee,
    name: "songs-id"
  }, {
    path: "/",
    component: _7f369ad4,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}

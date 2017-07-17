'use strict'

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


const _237b8bc5 = () => import('/Users/jeremieaubut/nuxt-start/pages/index.vue' /* webpackChunkName: "pages/index" */)

const _e294a87c = () => import('/Users/jeremieaubut/nuxt-start/pages/blog/index.vue' /* webpackChunkName: "pages/blog" */)

const _106e3e16 = () => import('/Users/jeremieaubut/nuxt-start/pages/shop/index.vue' /* webpackChunkName: "pages/shop" */)

const _7eff8146 = () => import('/Users/jeremieaubut/nuxt-start/pages/blog/first-post.vue' /* webpackChunkName: "pages/blog-first-post" */)

const _069023c9 = () => import('/Users/jeremieaubut/nuxt-start/pages/blog/second-post.vue' /* webpackChunkName: "pages/blog-second-post" */)

const _da094012 = () => import('/Users/jeremieaubut/nuxt-start/pages/shop/users/_id.vue' /* webpackChunkName: "pages/shop-users-id" */)



const scrollBehavior = (to, from, savedPosition) => {
  // savedPosition is only available for popstate navigations.
  if (savedPosition) {
    return savedPosition
  } else {
    let position = {}
    // if no children detected
    if (to.matched.length < 2) {
      // scroll to the top of the page
      position = { x: 0, y: 0 }
    }
    else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
      // if one of the children has scrollToTop option set to true
      position = { x: 0, y: 0 }
    }
    // if link has anchor,  scroll to anchor by returning the selector
    if (to.hash) {
      position = { selector: to.hash }
    }
    return position
  }
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
  		{
			path: "/",
			component: _237b8bc5,
			name: "index"
		},
		{
			path: "/blog",
			component: _e294a87c,
			name: "blog"
		},
		{
			path: "/shop",
			component: _106e3e16,
			name: "shop"
		},
		{
			path: "/blog/first-post",
			component: _7eff8146,
			name: "blog-first-post"
		},
		{
			path: "/blog/second-post",
			component: _069023c9,
			name: "blog-second-post"
		},
		{
			path: "/shop/users/:id?",
			component: _da094012,
			name: "shop-users-id"
		}
    ]
  })
}

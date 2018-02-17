import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/About.vue'
import Projects from '@/components/Projects.vue'
import Contact from '@/components/Contact.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'About',
      component: About
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})

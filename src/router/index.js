import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import Services from '../pages/Services.vue'
import CaseStudies from '../pages/CaseStudies.vue'
import About from '../pages/About.vue'
import Contact from '../pages/Contact.vue'
import BookCall from '../pages/BookCall.vue'
import AIAudit from '../pages/AIAudit.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/services', name: 'Services', component: Services },
  { path: '/case-studies', name: 'CaseStudies', component: CaseStudies },
  { path: '/about', name: 'About', component: About },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/book', name: 'BookCall', component: BookCall },
  { path: '/ai-audit', name: 'AIAudit', component: AIAudit },
  { path: '/:catchAll(.*)', redirect: '/' } // redirect any unknown route to Home
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router


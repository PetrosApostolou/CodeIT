import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Services from '../pages/Services.vue'
import CaseStudies from '../pages/CaseStudies.vue'
import About from '../pages/About.vue'
import Contact from '../pages/Contact.vue'
import BookCall from '../pages/BookCall.vue'
import AIAuditOffer from '../pages/AIAudit.vue'  // <-- Import your new page

const routes = [
  { path: '/', component: Home },
  { path: '/services', component: Services },
  { path: '/case-studies', component: CaseStudies },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
  { path: '/book', component: BookCall },
  { path: '/ai-audit', component: AIAuditOffer },     // <-- Add your new route
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

<template>
  <section class="max-w-6xl mx-auto px-6 py-12 space-y-12 bg-white rounded-lg shadow-lg">
    <h2 class="text-4xl font-extrabold text-center text-gray-900 mb-6">Get in Touch</h2>
    <p class="text-center max-w-xl mx-auto text-gray-700 text-lg">
      Whether you need a small proof-of-concept or a full-scale AI strategy, I’d love to discuss your goals and how we can work together.
    </p>

    <div class="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12">
      <!-- Contact Form -->
      <div class="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
        <ContactForm />
      </div>

      <!-- Contact Info & Booking -->
      <aside class="space-y-10 text-gray-800 flex flex-col justify-between">
        <div>
          <h4 class="text-2xl font-semibold mb-6 border-b border-gray-300 pb-2">Contact Info</h4>
          <ul class="space-y-4 text-lg">
            <li class="flex items-center space-x-3">
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" ><path d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4 8 5.79 8 8s1.79 4 4 4z"/><path d="M12 14c-4.418 0-8 1.79-8 4v2h16v-2c0-2.21-3.582-4-8-4z"/></svg>
              <span><strong>{{ config.contact.name }}</strong></span>
            </li>
            <li class="flex items-center space-x-3">
              <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M4 4h16v16H4z"/></svg>
              <a :href="`mailto:${config.contact.email}`" class="hover:underline text-blue-600">{{ config.contact.email }}</a>
            </li>
            <li class="flex items-center space-x-3">
              <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.73 19.73 0 0 1-8.63-3.07 19.34 19.34 0 0 1-6-6 19.73 19.73 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13 1.21.43 2.39.9 3.5a2 2 0 0 1-.45 2.11L8.09 10a16 16 0 0 0 6 6l.67-.67a2 2 0 0 1 2.11-.45c1.11.47 2.29.77 3.5.9a2 2 0 0 1 1.72 2z"/></svg>
              <span>{{ config.contact.phone }}</span>
            </li>
            <li class="flex items-center space-x-3">
              <svg class="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.2c-.97 0-1.75-.78-1.75-1.75S5.53 4.3 6.5 4.3s1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.2h-3v-5.6c0-1.34-1.06-2.4-2.4-2.4s-2.4 1.06-2.4 2.4v5.6h-3v-10h3v1.28c.8-1.04 2.25-1.61 3.66-1.28 2.19.5 3.74 2.69 3.74 5.03v4.97z"/></svg>
              <a
                :href="config.contact.linkedin"
                target="_blank"
                rel="noopener noreferrer"
                class="hover:underline text-blue-600"
              >
                LinkedIn Profile
              </a>
            </li>
          </ul>
        </div>

        <div class="text-center">
          <h4 class="text-2xl font-semibold mb-4 border-b border-gray-300 pb-2">Quick Booking</h4>
          <router-link
            to="/book"
            class="inline-block bg-gradient-to-r from-yellow-400 to-yellow-500 text-primary px-6 py-3 rounded-md font-semibold shadow-md hover:from-yellow-500 hover:to-yellow-600 transition"
          >
            Pick a time on my calendar
          </router-link>
        </div>
      </aside>
    </div>
  </section>
</template>

<script>
import ContactForm from '../components/ContactForm.vue'
import config from '../data/siteConfig'

export default {
  components: { ContactForm },
  data() {
    return { config }
  },
}
</script>

<style scoped>
/* Add subtle hover to contact info links */
a:hover {
  text-decoration: underline;
}

/* Responsive tweak for smaller screens */
@media (max-width: 1024px) {
  section > div.grid {
    grid-template-columns: 1fr !important;
  }
}
</style>

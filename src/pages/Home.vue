<template>
  <section class="space-y-12 px-4">
    <div class="bg-gradient-to-b from-primary to-[#0a1a2f] text-white rounded-lg p-6 sm:p-12 max-w-4xl mx-auto">
      <h2 class="text-2xl sm:text-3xl font-semibold mb-4">{{ config.tagline }}</h2>
      <p class="mb-6 text-sm sm:text-base">
        Custom AI & Data Science Solutions for Businesses, Startups, and Small Teams.
        <span class="block mt-2 bg-yellow-500 text-black px-3 py-1 rounded font-bold inline-block">
          Limited Offer: Get 20% Off Your First AI Audit!
        </span>
      </p>

      <div class="flex flex-col sm:flex-row gap-4">
        <router-link to="/book" class="bg-accent text-primary px-6 py-3 rounded-md font-semibold hover:bg-yellow-400 transition text-center">
          Book a Free 20‑Min Consultation
        </router-link>
        <router-link to="/case-studies" class="text-white underline hover:text-accent transition self-center text-center">
          View Case Studies
        </router-link>
      </div>
    </div>

    <!-- Services Grid -->
    <section class="gap-8 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      <ServiceCard v-for="(s, i) in config.services" :key="i" :s="s" />
    </section>

    <!-- Selected Results -->
    <section class="max-w-6xl mx-auto">
      <h3 class="text-2xl font-semibold mb-6">Selected Results</h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <article v-for="cs in config.caseStudies" :key="cs.id" class="bg-white rounded-lg p-6 shadow-md">
          <h4 class="text-lg font-semibold mb-2">{{ cs.title }}</h4>
          <p class="text-gray-700 mb-4">{{ cs.results[0] }}</p>
          <router-link to="/case-studies" class="text-primary underline hover:text-accent transition">
            Read more
          </router-link>
        </article>
      </div>
    </section>

    <section class="text-center mt-12 max-w-3xl mx-auto bg-gradient-to-r from-[#081226] via-[#0a1a2f] to-[#081a2f] rounded-lg py-3 shadow-md px-4">
      <h3 class="text-sm sm:text-base font-medium text-white tracking-tight select-none">
        Driving Innovation, Empowering Growth — Reliable, Scalable Solutions Backed by Unmatched Expertise.
      </h3>
    </section>
  </section>
</template>

<script>
import config from '../data/siteConfig'
import ServiceCard from '../components/ServiceCard.vue'

export default {
  components: { ServiceCard },
  data() {
    return { config }
  }
}
</script>

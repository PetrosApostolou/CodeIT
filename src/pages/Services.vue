<template>
  <section class="max-w-6xl mx-auto px-4 space-y-6">
    <h2 class="text-3xl font-semibold">Services</h2>
    <p>
      We offer AI and analytics consulting that’s flexible, results-driven, and tailored to
      your industry.
    </p>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <ServiceCard v-for="(s, i) in config.services" :key="i" :s="s" />
    </div>
  </section>
</template>

<script>
import ServiceCard from '../components/ServiceCard.vue'
import config from '../data/siteConfig'

export default {
  components: { ServiceCard },
  data() {
    return { config }
  },
}
</script>

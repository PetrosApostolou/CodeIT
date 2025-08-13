<template>
  <section class="max-w-4xl mx-auto px-4 space-y-6">
    <h2 class="text-3xl font-semibold">Book a Free Consultation</h2>
   
    <div class="bg-white p-6 rounded-lg shadow-md">
      <iframe
        :src="calendlyEmbedUrl"
        frameborder="0"
        width="100%"
        height="700"
        class="rounded-md"
      ></iframe>
    </div>
  </section>
</template>

<script>
import config from '../data/siteConfig'

export default {
  data() {
    return { config }
  },
  computed: {
    calendlyEmbedUrl() {
      // You can change this if you embed differently
      return config.calendlyUrl
    },
  },
}
</script>

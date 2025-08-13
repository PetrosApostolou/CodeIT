<template>
  <footer class="bg-primary text-white py-6 mt-12">
    <div
      class="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm"
    >
      <div>
        <strong>{{ config.siteName }}</strong><br />
        <span>{{ config.contact.email }} • {{ config.contact.phone }}</span>
      </div>
      <div class="mt-4 md:mt-0 opacity-70">&copy; {{ new Date().getFullYear() }} {{ config.siteName }}. All rights reserved.</div>
    </div>
  </footer>
</template>

<script>
import config from '../data/siteConfig'

export default {
  data() {
    return { config }
  }
}
</script>

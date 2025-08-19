<template>
  <header class="site-header">
    <div class="wrap flex flex-col sm:flex-row items-start sm:items-center justify-between max-w-6xl mx-auto px-4 py-4">
      <div class="brand mb-4 sm:mb-0">
        <h1 class="site-title text-2xl sm:text-3xl font-bold text-white">{{ config.siteName }}</h1>
        <p class="tagline text-sm sm:text-base text-white/90">{{ config.tagline }}</p>
      </div>

      <nav class="nav flex flex-col sm:flex-row gap-2 sm:gap-4">
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/services" class="nav-link">Services</router-link>
        <router-link to="/case-studies" class="nav-link">Case Studies</router-link>
        <router-link to="/about" class="nav-link">About</router-link>
        <router-link to="/contact" class="nav-link">Contact</router-link>
        <router-link to="/book" class="cta nav-link">Book a Call</router-link>
      </nav>
    </div>
  </header>
</template>

<script>
import config from '../data/siteConfig'
export default {
  data() {
    return { config }
  },
}
</script>

<style>
.site-header {
  background: linear-gradient(90deg,#081226,#0a1a2f);
}

.nav-link {
  color: white;
  font-weight: bold;
  text-decoration: none;
  padding: 6px 10px;
  border-radius: 4px;
}

.nav-link:hover {
  color: #d4af37;
}

.cta {
  background: #d4af37;
  color: #0a1a2f;
  font-weight: bold;
}
</style>

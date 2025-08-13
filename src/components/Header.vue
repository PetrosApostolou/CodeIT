<template>
  <header class="site-header">
    <div class="wrap">
      <div class="brand">
        <h1 class="site-title">{{ config.siteName }}</h1>
        <p class="tagline">{{ config.tagline }}</p>
      </div>

      <nav class="nav">
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/services" class="nav-link">Services</router-link>
        <router-link to="/case-studies" class="nav-link">Case Studies</router-link>
        <router-link to="/about" class="nav-link">About</router-link>
        <router-link to="/contact" class="nav-link">Contact</router-link>
        <router-link to="/ai-audit" class="nav-link">AI Audit Offer</router-link>
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
  padding: 18px 0;
}

.wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 16px;
}

.brand {
  line-height: 1;
}

.site-title {
  margin: 0;
  font-size: 20px;
  color: white;
  font-weight: bold;
}

.tagline {
  margin: 0;
  font-size: 14px; /* slightly bigger than before */
  font-weight: 500; /* medium weight */
  opacity: 0.8;     /* subtle but visible */
  color: #cbd5e1;   /* a soft light color, lighter than white */
  max-width: 400px; /* keeps the tagline from stretching too far */
  line-height: 1.4;
  font-style: italic; /* optional, for elegance */
}

.nav {
  display: flex;
  align-items: center;
}

.nav-link {
  color: white;
  font-weight: bold;
  margin-left: 16px;
  text-decoration: none;
}

.nav-link:hover {
  color: #d4af37;
}

.cta {
  background: #d4af37;
  color: #0a1a2f;
  padding: 8px 12px;
  border-radius: 6px;
  font-weight: bold;
  margin-left: 16px;
}
@media (max-width:720px) {
  .wrap {
    flex-direction: column;
    align-items: flex-start;
  }
  .nav {
    margin-top: 10px;
  }
}
</style>

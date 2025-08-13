<template>
  <section class="space-y-12">
    <div
      class="bg-gradient-to-b from-primary to-[#0a1a2f] text-white rounded-lg p-12 max-w-4xl mx-auto"
    >
      <h2 class="text-3xl font-semibold mb-4">{{ config.tagline }}</h2>
      <p class="max-w-xl mb-6">
        Custom AI & Data Science Solutions for Businesses, Startups, and Small Teams.
        <span
          class="audit-offer mt-4 block p-3 rounded-md font-semibold cursor-pointer flex items-center gap-2"
          @click="goToBooking"
          role="button"
          tabindex="0"
          @keyup.enter="goToBooking"
        >
          <span>
            🚀 Limited Time Offer: <span class="underline">20% Discount</span> on our <strong>AI Audit</strong> — Unlock your business’s AI potential! Book your free consultation today.
          </span>
        </span>
      </p>

      <div class="flex flex-wrap gap-4">
        <router-link
          to="/book"
          class="bg-accent text-primary px-6 py-3 rounded-md font-semibold hover:bg-yellow-400 transition"
          >Book a Free 20‑Min Consultation</router-link
        >
        <router-link
          to="/case-studies"
          class="text-white underline hover:text-accent transition self-center"
          >View Case Studies</router-link
        >
      </div>
    </div>

    <!-- Services Grid with dynamic & responsive columns -->
    <section
      class="gap-8 px-4 max-w-6xl mx-auto grid"
      :style="gridTemplateColumnsStyle"
    >
      <ServiceCard v-for="(s, i) in config.services" :key="i" :s="s" />
    </section>

    <section class="max-w-6xl mx-auto px-4">
      <h3 class="text-2xl font-semibold mb-6">Selected Results</h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <article
          v-for="cs in config.caseStudies"
          :key="cs.id"
          class="bg-white rounded-lg p-6 shadow-md"
        >
          <h4 class="text-lg font-semibold mb-2">{{ cs.title }}</h4>
          <p class="text-gray-700 mb-4">{{ cs.results[0] }}</p>
          <router-link
            to="/case-studies"
            class="text-primary underline hover:text-accent transition"
            >Read more</router-link
          >
        </article>
      </div>
    </section>

    <section
      class="text-center mt-12 px-4 max-w-3xl mx-auto bg-gradient-to-r from-[#081226] via-[#0a1a2f] to-[#081a2f] rounded-lg py-3 shadow-md"
    >
      <h3 class="text-sm font-medium text-white tracking-tight select-none">
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
  },
  methods: {
    goToBooking() {
      this.$router.push('/book')
    }
  },
  computed: {
    gridTemplateColumnsStyle() {
      const n = this.config.services.length
      let colsLarge

      if (n <= 2) {
        colsLarge = n // 1 or 2 columns for few items
      } else if (n <= 4) {
        colsLarge = 2
      } else if (n <= 6) {
        colsLarge = 3
      } else {
        colsLarge = 4
      }

      return {
        display: 'grid',
        gap: '2rem',
        gridTemplateColumns: `repeat(1, minmax(0, 1fr))`, // default for mobile, overridden in mounted()
      }
    }
  },
  mounted() {
    // Add responsive grid styles via JS for more control
    const updateGridColumns = () => {
      const n = this.config.services.length
      let colsLarge
      if (n <= 2) {
        colsLarge = n
      } else if (n <= 4) {
        colsLarge = 2
      } else if (n <= 6) {
        colsLarge = 3
      } else {
        colsLarge = 4
      }

      if (window.innerWidth < 640) {
        this.$el.querySelector('section').style.gridTemplateColumns =
          'repeat(1, minmax(0, 1fr))'
      } else if (window.innerWidth < 1024) {
        this.$el.querySelector('section').style.gridTemplateColumns =
          'repeat(2, minmax(0, 1fr))'
      } else {
        this.$el.querySelector('section').style.gridTemplateColumns = `repeat(${colsLarge}, minmax(0, 1fr))`
      }
    }

    updateGridColumns()
    window.addEventListener('resize', updateGridColumns)
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.updateGridColumns)
  }
}
</script>

<style scoped>
.audit-offer {
  background-color: #d4af37;
  color: #0a1a2f;
  box-shadow: 0 0 12px #d4af37;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  user-select: none;
  animation: fadeIn 1s ease forwards;
  font-size: 1.1rem;
  padding-left: 0.6rem;
}
.audit-offer:hover,
.audit-offer:focus {
  background-color: #f6e27d;
  box-shadow: 0 0 20px #d4af37;
  outline: none;
  text-decoration: underline;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(8px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>

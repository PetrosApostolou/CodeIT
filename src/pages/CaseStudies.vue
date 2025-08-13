<template>
  <section class="max-w-6xl mx-auto px-4 space-y-6">
    <h2 class="text-3xl font-semibold text-center">Case Studies</h2>

    <!-- Filter Tabs -->
    <div class="flex justify-center space-x-4 mb-6 flex-wrap">
      <button
        v-for="cat in categories"
        :key="cat"
        @click="selectedCategory = cat"
        :class="[
          'px-4 py-2 rounded-full border transition',
          selectedCategory === cat
            ? 'bg-blue-600 text-white border-blue-600'
            : 'bg-white text-blue-600 border-blue-600 hover:bg-blue-50'
        ]"
      >
        {{ cat }}
      </button>
    </div>

    <!-- Case Study Cards Grid -->
    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
      <div
        v-for="caseItem in filteredCaseStudies"
        :key="caseItem.id"
        class="group bg-white border border-gray-100 rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
      >
        <div class="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 text-sm font-semibold">
          {{ caseItem.client }}
        </div>

        <div class="p-5 space-y-3">
          <h3 class="text-lg font-bold group-hover:text-blue-600 transition-colors">
            {{ caseItem.title }}
          </h3>

          <div class="flex items-start space-x-2">
            <span class="text-red-500 mt-1">⚠️</span>
            <p class="text-sm text-gray-600">{{ caseItem.challenge }}</p>
          </div>

          <div class="flex items-start space-x-2">
            <span class="text-green-500 mt-1">💡</span>
            <p class="text-sm text-gray-600">{{ caseItem.solution }}</p>
          </div>

          <div class="flex flex-wrap gap-2 mt-3">
            <span
              v-for="result in caseItem.results"
              :key="result"
              class="bg-blue-50 text-blue-600 text-xs font-medium px-3 py-1 rounded-full border border-blue-100"
            >
              {{ result }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <p v-if="filteredCaseStudies.length === 0" class="text-center text-gray-500 mt-8">
      No case studies found for "{{ selectedCategory }}".
    </p>
  </section>
</template>

<script>
import config from '../data/siteConfig'

export default {
  data() {
    return {
      caseStudies: config.caseStudies,
      selectedCategory: 'All',
    }
  },
  computed: {
    categories() {
      const cats = new Set(['All'])
      this.caseStudies.forEach(cs => {
        if (cs.category) cats.add(cs.category)
      })
      return Array.from(cats)
    },
    filteredCaseStudies() {
      if (this.selectedCategory === 'All') return this.caseStudies
      return this.caseStudies.filter(cs => cs.category === this.selectedCategory)
    },
  },
}
</script>

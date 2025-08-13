<template>
  <div
    class="group bg-white border border-gray-100 rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative"
  >
    <!-- Top Bar with Client Name -->
    <div
      class="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 text-sm font-semibold"
    >
      {{ caseStudy.client }}
    </div>

    <!-- Category Badge -->
    <div
      class="absolute top-12 right-4 bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full shadow"
      :title="category"
    >
      {{ category }}
    </div>

    <!-- Case Content -->
    <div class="p-5 space-y-3">
      <h3 class="text-lg font-bold group-hover:text-blue-600 transition-colors">
        {{ caseStudy.title }}
      </h3>

      <!-- Challenge -->
      <div class="flex items-start space-x-2">
        <span class="text-red-500 mt-1">⚠️</span>
        <p class="text-sm text-gray-600">{{ caseStudy.challenge }}</p>
      </div>

      <!-- Solution -->
      <div class="flex items-start space-x-2">
        <span class="text-green-500 mt-1">💡</span>
        <p class="text-sm text-gray-600">{{ caseStudy.solution }}</p>
      </div>

      <!-- Results Badges -->
      <div class="flex flex-wrap gap-2 mt-3">
        <span
          v-for="result in caseStudy.results"
          :key="result"
          class="bg-blue-50 text-blue-600 text-xs font-medium px-3 py-1 rounded-full border border-blue-100"
        >
          {{ result }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CaseStudyCard',
  props: {
    caseStudy: {
      type: Object,
      required: true,
    },
  },
  computed: {
    category() {
      const title = this.caseStudy.title.toLowerCase()
      const solution = this.caseStudy.solution.toLowerCase()

      if (title.includes('sports')) return 'Sports & Rehabilitation'
      if (title.includes('surgical')) return 'Medical Devices'
      if (title.includes('food')) return 'Food Processing'
      if (title.includes('workflow') || solution.includes('workflow'))
        return 'Operational Workflows'
      return 'Other'
    },
  },
}
</script>

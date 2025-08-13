<template>
  <section class="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg space-y-8">
    <h1 class="text-4xl font-extrabold text-center text-blue-700">
      AI Audit - Special Discount Offer for First-Time Clients
    </h1>

    <p class="text-lg text-gray-700 leading-relaxed">
      Unlock the full potential of your AI initiatives with a comprehensive <strong>AI Audit</strong>.  
      We evaluate your existing AI tools, data quality, compliance, and ROI to help you optimize performance and minimize risks.
    </p>

    <ul class="list-disc list-inside text-gray-700 space-y-2">
      <li><strong>Assessment of current AI models</strong> and performance analysis</li>
      <li><strong>Data quality and readiness check</strong> to ensure accuracy</li>
      <li><strong>Compliance and ethical evaluation</strong> aligned with regulations</li>
      <li><strong>Security and privacy review</strong> to protect your data</li>
      <li><strong>Risk identification and mitigation</strong> recommendations</li>
    </ul>

    <p class="text-lg text-gray-700 font-semibold">
      For a limited time, get your <strong>AI Audit at a 30% discount</strong> — a perfect low-risk way to understand your AI’s current state and discover improvement opportunities.
    </p>

    <form @submit.prevent="submitForm" class="space-y-6 max-w-xl mx-auto">
      <div>
        <label for="name" class="block text-gray-700 font-medium mb-1">Name</label>
        <input
          v-model="form.name"
          id="name"
          type="text"
          required
          placeholder="Your full name"
          class="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label for="email" class="block text-gray-700 font-medium mb-1">Email</label>
        <input
          v-model="form.email"
          id="email"
          type="email"
          required
          placeholder="you@example.com"
          class="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label for="company" class="block text-gray-700 font-medium mb-1">Company (optional)</label>
        <input
          v-model="form.company"
          id="company"
          type="text"
          placeholder="Your company name"
          class="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label for="message" class="block text-gray-700 font-medium mb-1">How can we help you?</label>
        <textarea
          v-model="form.message"
          id="message"
          rows="4"
          placeholder="Briefly describe your AI challenges or questions"
          class="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
      </div>

      <button
        type="submit"
        class="w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition"
      >
        Request Your Discounted AI Audit
      </button>
    </form>

    <p v-if="successMessage" class="text-center text-green-600 font-semibold mt-4">
      {{ successMessage }}
    </p>
  </section>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        company: '',
        message: '',
      },
      successMessage: '',
    }
  },
  methods: {
    submitForm() {
      // Here you’d integrate your backend API or email service to send the form data
      // For demo, just simulate success:
      this.successMessage = `Thanks, ${this.form.name}! We received your request and will get back to you soon.`
      // Reset form fields
      this.form.name = ''
      this.form.email = ''
      this.form.company = ''
      this.form.message = ''
    },
  },
}
</script>

<style scoped>
section {
  background: #f9fafb;
}
</style>

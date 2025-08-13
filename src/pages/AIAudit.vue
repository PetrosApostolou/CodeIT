<template>
  <section
    class="min-h-screen flex items-center justify-center px-6 py-12 bg-blue-50 text-gray-900"
  >
    <div
      class="max-w-3xl bg-white rounded-3xl shadow-2xl p-10 sm:p-16 text-center transform transition hover:scale-105 duration-300"
    >
      <h2
        class="text-4xl font-extrabold text-indigo-900 mb-6 tracking-tight drop-shadow-md"
      >
        🚀 AI Audit Special Offer
      </h2>
      <p class="text-indigo-800 text-lg mb-8">
        Unlock the power of AI for your business with our
        <span class="font-bold text-yellow-500">comprehensive AI Audit</span>.
        We evaluate your current capabilities and deliver a custom roadmap tailored to your needs.
      </p>

      <div
        class="inline-block bg-yellow-400 text-indigo-900 font-extrabold text-2xl rounded-full px-6 py-3 mb-8 shadow-lg animate-pulse"
        aria-label="Discount rate"
      >
        <span>20% OFF</span> for First-Time Clients!
      </div>

      <ul class="text-left text-indigo-700 text-lg mb-10 space-y-4">
        <li
          class="flex items-center gap-3 hover:text-indigo-900 transition cursor-default"
        >
          <svg
            class="w-6 h-6 text-yellow-400 flex-shrink-0"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            viewBox="0 0 24 24"
          >
            <path d="M5 13l4 4L19 7" />
          </svg>
          Comprehensive AI readiness evaluation
        </li>
        <li
          class="flex items-center gap-3 hover:text-indigo-900 transition cursor-default"
        >
          <svg
            class="w-6 h-6 text-yellow-400 flex-shrink-0"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            viewBox="0 0 24 24"
          >
            <path d="M5 13l4 4L19 7" />
          </svg>
          Identify cost-saving & automation opportunities
        </li>
        <li
          class="flex items-center gap-3 hover:text-indigo-900 transition cursor-default"
        >
          <svg
            class="w-6 h-6 text-yellow-400 flex-shrink-0"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            viewBox="0 0 24 24"
          >
            <path d="M5 13l4 4L19 7" />
          </svg>
          Customized actionable AI roadmap and report
        </li>
        <li
          class="flex items-center gap-3 hover:text-indigo-900 transition cursor-default"
        >
          <svg
            class="w-6 h-6 text-yellow-400 flex-shrink-0"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            viewBox="0 0 24 24"
          >
            <path d="M5 13l4 4L19 7" />
          </svg>
          Personalized consultation session to discuss findings
        </li>
      </ul>

      <router-link
        to="/book"
        class="inline-block bg-indigo-900 text-yellow-400 font-extrabold text-xl px-10 py-4 rounded-full shadow-lg hover:bg-indigo-700 transition"
        >Claim Your Discounted AI Audit</router-link
      >
    </div>
  </section>
</template>

<script>
export default {
  name: "AIAudit",
};
</script>

<style scoped>
/* Make sure to support responsiveness nicely */
@media (max-width: 640px) {
  section {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
  div {
    padding: 2.5rem 2rem;
  }
}
</style>


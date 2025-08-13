<template>
  <div
    class="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition cursor-default flex flex-col"
  >
    <h3 class="text-lg font-semibold mb-3">{{ s.title }}</h3>
   <ul class="space-y-2 mt-2">
  <li
    v-for="(b, i) in s.bullets"
    :key="i"
    class="flex items-center gap-3 p-2 rounded-md cursor-default hover:bg-accent/20 transition-colors"
  >
    <svg
      class="w-5 h-5 text-accent flex-shrink-0 transition-transform group-hover:scale-110"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
    </svg>
    <span class="text-primary font-medium">{{ b }}</span>
  </li>
</ul>

  </div>
</template>

<script>
export default {
  props: {
    s: Object,
  },
}
</script>

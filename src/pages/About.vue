<template>
  <section class="max-w-6xl mx-auto px-4 space-y-10">
    <!-- Section Title -->
    <h2 class="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-500 text-transparent bg-clip-text">
      About
    </h2>

    <div class="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10 items-start">
      <!-- Left Content -->
      <div>
        <h3 class="text-2xl font-semibold mb-4">
          Hi, I’m 
          <span class="text-blue-600">{{ config.contact.name }}</span>.
        </h3>

        <p class="mb-6 text-gray-700 leading-relaxed">
          I’m an AI specialist, data scientist, and computational modeling expert with a passion
          for turning ideas into working systems. With two master’s degrees in Computer Science – AI and Computational
          Mechanics, and deep hands-on industrial experience across artificial intelligence & machine learning, computer vision,
          high-performance computing, and technical grant writing, I help companies, startups, and research teams bring AI to life.
        </p>

        <!-- Education & Experience -->
        <ul class="space-y-3">
          <li class="flex items-center space-x-3 group">
            <span class="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition">
              🎓
            </span>
            <span>M.S. Computer Science | Robotics/AI/ML/Computer Vision | University of Minnesota</span>
          </li>
          <li class="flex items-center space-x-3 group">
            <span class="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition">
              🎓
            </span>
            <span>M.S. Mechanical Engineering | Scientific Computing/HPC | University of Pittsburgh</span>
          </li>
          <li class="flex items-center space-x-3 group">
            <span class="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-600 group-hover:bg-green-600 group-hover:text-white transition">
              💼
            </span>
            <span>Over 8 years in AI, Data Science, System Automation & Optimization and Scientific Computing</span>
          </li>
        </ul>
      </div>

      <!-- Right Headshot -->
      <div class="relative group">
        <img
          src="../assets/images/Petros.jpg"
          alt="Petros Apostolou"
          class="rounded-2xl shadow-xl w-full h-auto object-cover transform transition group-hover:scale-105 group-hover:shadow-2xl"
        />
        <!-- Decorative Frame -->
        <div class="absolute inset-0 rounded-2xl border-4 border-transparent group-hover:border-blue-500 transition"></div>
      </div>
    </div>

    <!-- Other Activities -->
    <div class="mt-10 border-t border-gray-200 pt-6">
      <h3 class="text-xl font-semibold text-gray-800 mb-4">Other Activities</h3>
      <div class="grid sm:grid-cols-2 gap-4">
        <div class="p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg shadow hover:shadow-md transition">
          <span class="text-blue-600 text-lg">🤝</span>
          <p class="mt-2 text-gray-700 text-sm">Mentoring early-stage tech entrepreneurs</p>
        </div>
        <div class="p-4 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-lg shadow hover:shadow-md transition">
          <span class="text-indigo-600 text-lg">🎤</span>
          <p class="mt-2 text-gray-700 text-sm">Speaking at AI & data science meetups</p>
        </div>
        <div class="p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-lg shadow hover:shadow-md transition">
          <span class="text-green-600 text-lg">📄</span>
          <p class="mt-2 text-gray-700 text-sm">Publishing research on machine learning applications</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import config from '../data/siteConfig'

export default {
  data() {
    return { config }
  },
}
</script>

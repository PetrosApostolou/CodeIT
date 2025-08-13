<template>
  <div class="min-h-screen flex flex-col bg-blue-50 text-gray-900">
    <Header />
    <main class="container mx-auto px-4 py-8 flex-grow">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  components: { Header, Footer }
}
</script>

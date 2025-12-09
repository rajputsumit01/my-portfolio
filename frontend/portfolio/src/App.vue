
<template>
  <div class="min-h-screen neon-bg">
    <NavBar />
    <main class="pt-24 pb-10">
      <RouterView />
    </main>

    <!-- WhatsApp floating button -->
    <a
      href="https://wa.me/917876778254"
      target="_blank"
      class="fixed bottom-6 right-6 bg-blue-500 text-black px-4 py-2 rounded-full shadow-lg hover:shadow-blue-500/70 hover:scale-110 transition z-40"
    >
      WhatsApp 💬
    </a>

    <footer class="border-t border-blue-500/30 text-center text-xs text-gray-400 py-4 mt-10">
      © 2025 Sumit — All Rights Reserved
    </footer>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
</script>

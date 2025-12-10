
<template>
  <nav class="fixed top-0 left-0 w-full bg-[#212529]/80 backdrop-blur-md flex items-center justify-between px-6 md:px-12 py-3 z-50 border-b border-blue-500/20 light:bg-white/90 light:border-gray-200/50">
    <!-- Logo -->
    <div class="flex items-center gap-2">
      <div class="w-8 h-8 rounded-full border border-blue-500 flex items-center justify-center text-blue-500 light:text-blue-600 text-sm font-bold">
        <img src="https://i.pinimg.com/1200x/4c/fd/f7/4cfdf7af9800b97abb98ad04478e7d28.jpg" alt="" class="w-8 h-8 rounded-full border border-blue-500 flex items-center justify-center text-blue-500 light:text-blue-600 text-sm font-bold">
      </div>
      <span class="text-lg md:text-xl font-semibold text-blue-400 light:text-blue-600">Sumit</span>
    </div>

    <!-- Desktop Menu -->
    <ul class="hidden md:flex gap-6 text-sm font-medium text-[#F8F9FA] light:text-gray-800 items-center">
      <RouterLink to="/" class="hover:text-blue-400 light:hover:text-blue-600 transition">Home</RouterLink>
      <RouterLink to="/projects" class="hover:text-blue-400 light:hover:text-blue-600 transition">Projects</RouterLink>
      <RouterLink to="/experience" class="hover:text-blue-400 light:hover:text-blue-600 transition">Experience</RouterLink>
      <RouterLink to="/blog" class="hover:text-blue-400 light:hover:text-blue-600 transition">Blog</RouterLink>
      <RouterLink to="/contact" class="hover:text-blue-400 light:hover:text-blue-600 transition">Contact</RouterLink>

      <button
        @click="toggleTheme"
        class="p-2 rounded-lg hover:bg-blue-500/20 transition text-xl ml-2"
        :title="isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'"
      >
        {{ isDark ? '☀️' : '🌙' }}
      </button>
    </ul>

    <!-- Mobile Hamburger Button -->
    <button
      @click="mobileMenuOpen = !mobileMenuOpen"
      class="md:hidden flex flex-col gap-1.5 w-6 h-6 cursor-pointer"
      aria-label="Toggle menu"
    >
      <span :class="['h-0.5 bg-blue-400 light:bg-blue-600 transition-all duration-300', mobileMenuOpen ? 'rotate-45 translate-y-2' : '']"></span>
      <span :class="['h-0.5 bg-blue-400 light:bg-blue-600 transition-all duration-300', mobileMenuOpen ? 'opacity-0' : '']"></span>
      <span :class="['h-0.5 bg-blue-400 light:bg-blue-600 transition-all duration-300', mobileMenuOpen ? '-rotate-45 -translate-y-2' : '']"></span>
    </button>

    <!-- Mobile Menu -->
    <transition
      enter-active-class="transition-all duration-300"
      leave-active-class="transition-all duration-300"
      enter-from-class="opacity-0 -translate-y-2"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="mobileMenuOpen"
        class="absolute top-full left-0 w-full bg-[#212529]/95 light:bg-white/95 backdrop-blur-md border-b border-blue-500/20 light:border-gray-200/50 md:hidden"
      >
        <ul class="flex flex-col gap-4 p-6 text-sm font-medium text-[#F8F9FA] light:text-gray-800">
          <RouterLink
            to="/"
            class="hover:text-blue-400 light:hover:text-blue-600 transition"
            @click="mobileMenuOpen = false"
          >
            Home
          </RouterLink>
          <RouterLink
            to="/projects"
            class="hover:text-blue-400 light:hover:text-blue-600 transition"
            @click="mobileMenuOpen = false"
          >
            Projects
          </RouterLink>
          <RouterLink
            to="/experience"
            class="hover:text-blue-400 light:hover:text-blue-600 transition"
            @click="mobileMenuOpen = false"
          >
            Experience
          </RouterLink>
          <RouterLink
            to="/blog"
            class="hover:text-blue-400 light:hover:text-blue-600 transition"
            @click="mobileMenuOpen = false"
          >
            Blog
          </RouterLink>
          <RouterLink
            to="/contact"
            class="hover:text-blue-400 light:hover:text-blue-600 transition"
            @click="mobileMenuOpen = false"
          >
            Contact
          </RouterLink>
          <div class="flex gap-2">
            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener"
              class="bg-blue-500 text-black px-4 py-2 rounded-lg font-semibold hover:bg-blue-600 transition magnetic inline-block"
            >
              View CV
            </a>
            <a
              href="/Resume.pdf"
              download="Sumit_Resume.pdf"
              class="bg-white text-black px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition magnetic inline-block"
            >
              ↓ Download
            </a>
          </div>
          <button
            @click="toggleTheme"
            class="p-2 rounded-lg hover:bg-blue-500/20 transition text-xl"
            :title="isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'"
          >
            {{ isDark ? '☀️' : '🌙' }}
          </button>
        </ul>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'

const mobileMenuOpen = ref(false)
const isDark = ref(true)

const toggleTheme = () => {
  isDark.value = !isDark.value
  const html = document.documentElement
  if (isDark.value) {
    html.classList.remove('light')
    localStorage.setItem('theme', 'dark')
  } else {
    html.classList.add('light')
    localStorage.setItem('theme', 'light')
  }
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme') || 'dark'
  isDark.value = savedTheme === 'dark'
  const html = document.documentElement
  if (savedTheme === 'light') {
    html.classList.add('light')
  } else {
    html.classList.remove('light')
  }
})
</script>

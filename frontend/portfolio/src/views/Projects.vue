
<template>
  <div class="px-6 md:px-16 space-y-8">
    <section class="mt-4">
      <h1 class="text-4xl font-semibold mb-2 text-[#F8F9FA]">Projects</h1>
      <p class="text-[#F8F9FA] max-w-2xl">
        A collection of UI clones and practice projects I've built to improve frontend skills.
      </p>
    </section>

    <!-- Filter tabs -->
    <section class="flex flex-wrap gap-3">
      <button
        v-for="c in categories"
        :key="c"
        @click="activeCategory = c"
        :class="[
          'px-4 py-2 rounded-full text-xs font-semibold border',
          activeCategory === c
            ? 'bg-blue-500 text-black border-blue-500'
            : 'bg-black/40 text-blue-400 border-blue-500/40'
        ]"
      >
        {{ c }}
      </button>
    </section>

    <!-- Projects grid -->
    <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-10">
      <RouterLink
        v-for="p in filtered"
        :key="p.id"
        :to="`/projects/${p.id}`"
        class="glass rounded-xl p-4 block hover:scale-105 transition"
      >
        <div class="w-full h-48 bg-gray-700/50 rounded-lg mb-3 overflow-hidden">
          <img :src="p.img" :alt="p.title" class="w-full h-full object-cover" />
        </div>
        <h2 class="text-lg font-semibold text-blue-400 mb-1">
          {{ p.title }}
        </h2>
        <p class="text-xs text-gray-400 mb-1">{{ p.category }}</p>
        <p class="text-sm text-[#F8F9FA]">{{ p.short }}</p>
      </RouterLink>
    </section>

    <!-- Debug: Show filtered projects count -->
    <div v-if="filtered.length === 0" class="text-center text-gray-400">
      No projects found
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'
import { projects } from '../data/projects'

const categories = ['All', 'Clone', 'Ecommerce', 'Fashion']
const activeCategory = ref('All')

const filtered = computed(() => {
  if (activeCategory.value === 'All') return projects
  return projects.filter((p) => p.category === activeCategory.value)
})
</script>

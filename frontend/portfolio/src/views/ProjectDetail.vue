<template>
  <div class="px-6 md:px-16 pb-10">

    <!-- Project Found -->
    <div v-if="project" class="glass mt-6 p-6 md:p-8 rounded-2xl max-w-4xl mx-auto">

      <!-- Back Link -->
      <RouterLink
        to="/projects"
        class="inline-block text-blue-400 text-sm hover:text-blue-300 mb-4"
      >
        ← Back to all projects
      </RouterLink>

      <!-- Header -->
      <h1 class="text-4xl font-bold text-blue-400 mb-2">{{ project.title }}</h1>
      <p class="text-xs text-gray-400 mb-6">
        Category: {{ project.category }}
      </p>

      <!-- Featured Image with Zoom + Popup -->
      <div
        class="w-full rounded-lg overflow-hidden bg-black/20 p-2 cursor-pointer group"
        @click="openPopup"
      >
        <img
          :src="project.img"
          :alt="project.title"
          class="rounded-lg w-full max-h-[430px] object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <!-- Short Description -->
      <p class="text-lg text-[#F8F9FA] mb-6 leading-relaxed">
        {{ project.description }}
      </p>

      <!-- Full Description -->
      <div class="mb-8 border-l-4 border-blue-500 pl-6">
        <h2 class="text-xl font-semibold text-blue-400 mb-2">About This Project</h2>
        <p class="text-[#F8F9FA] leading-relaxed">
          {{ project.fullDescription }}
        </p>
      </div>

      <!-- Features -->
      <div v-if="project.features" class="mb-8">
        <h2 class="text-xl font-semibold text-blue-400 mb-4">Key Features</h2>
        <ul class="grid grid-cols-1 md:grid-cols-2 gap-3">
          <li
            v-for="feature in project.features"
            :key="feature"
            class="flex items-center gap-2"
          >
            <span class="text-blue-400">✓</span>
            <span class="text-[#F8F9FA]">{{ feature }}</span>
          </li>
        </ul>
      </div>

      <!-- Tech Stack -->
      <div>
        <h2 class="text-xl font-semibold text-blue-400 mb-4">Technologies Used</h2>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="t in project.tech"
            :key="t"
            class="px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500 text-sm text-blue-300"
          >
            {{ t }}
          </span>
        </div>
      </div>
    </div>

    <!-- Project Not Found -->
    <div v-else class="mt-10 text-center text-[#F8F9FA]">
      <p class="mb-4">Project not found.</p>
      <RouterLink to="/projects" class="text-blue-400 hover:text-blue-300">
        Go back to projects
      </RouterLink>
    </div>

    <!-- POPUP VIEWER -->
    <div
      v-if="showPopup"
      class="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
      @click.self="closePopup"
    >
      <!-- Close Button -->
      <button
        class="absolute top-6 right-6 text-white text-3xl p-2"
        @click="closePopup"
      >
        ✖
      </button>

      <!-- Image -->
      <img
        :src="project.img"
        class="max-h-[90vh] max-w-[95vw] object-contain rounded-xl shadow-2xl animate-popup"
      />
    </div>
  </div>
</template>

<script setup>
import { computed, ref, onMounted, onBeforeUnmount } from "vue";
import { useRoute, RouterLink } from "vue-router";
import { projects } from "../data/projects";

const route = useRoute();

const project = computed(() =>
  projects.find((p) => p.id === route.params.id)
);

// POPUP VIEWER LOGIC
const showPopup = ref(false);

const openPopup = () => {
  showPopup.value = true;
  document.body.style.overflow = "hidden"; // disable scroll
};

const closePopup = () => {
  showPopup.value = false;
  document.body.style.overflow = "auto"; // enable scroll
};

// ESC key closes popup
const handleKey = (e) => {
  if (e.key === "Escape") closePopup();
};

onMounted(() => window.addEventListener("keydown", handleKey));
onBeforeUnmount(() => window.removeEventListener("keydown", handleKey));
</script>

<style scoped>
.glass {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

/* Popup animation */
@keyframes popup {
  from {
    transform: scale(0.9);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
.animate-popup {
  animation: popup 0.25s ease-out;
}
</style>

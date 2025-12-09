<template>
  <div class="px-6 md:px-16 pb-10">
    <!-- Header Section -->
    <section class="mt-4 mb-8 text-center md:text-left">
      <h1 class="text-4xl font-bold mb-3 text-[#F8F9FA]">Blog & Case Studies</h1>
      <p class="text-[#F8F9FA] max-w-2xl mx-auto md:mx-0 text-lg">
        Learn from my UI/UX projects, coding experiments, and real-world frontend case studies.
      </p>
    </section>

    <!-- Posts Grid -->
    <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <article
        v-for="post in posts"
        :key="post.id"
        class="glass rounded-xl p-6 hover:scale-[1.03] transition-transform cursor-pointer shadow-lg hover:shadow-2xl flex flex-col justify-between"
      >
        <div>
          <h2 class="text-2xl text-blue-400 font-semibold mb-1">{{ post.title }}</h2>
          <div class="flex items-center justify-between text-gray-400 text-xs mb-2">
            <span>{{ post.date }}</span>
            <span>{{ post.readTime }} min read</span>
          </div>
          <div class="flex gap-2 mb-3">
            <span
              v-for="category in post.categories"
              :key="category"
              class="bg-blue-200 text-blue-800 text-xs px-2 py-1 rounded-full"
            >
              {{ category }}
            </span>
          </div>
          <p class="text-[#F8F9FA] text-sm mb-4">
            {{ post.excerpt }}
          </p>
        </div>

        <!-- Tags and Read More Button -->
        <div class="flex justify-between items-center mt-auto">
          <div class="flex gap-2">
            <span
              v-for="tag in post.tags"
              :key="tag"
              class="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
            >
              {{ tag }}
            </span>
          </div>

          <button
            @click="openModal(post)"
            class="text-blue-500 text-xs font-medium hover:underline"
          >
            Read More →
          </button>
        </div>
      </article>
    </section>

    <!-- Modal -->
    <transition name="fade">
      <div
        v-if="selectedPost"
        class="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center p-4"
      >
        <div class="bg-[#1F2937] rounded-xl max-w-2xl w-full p-6 relative">
          <button
            @click="closeModal"
            class="absolute top-4 right-4 text-white text-xl font-bold hover:text-red-400"
          >
            &times;
          </button>
          <h2 class="text-2xl text-blue-400 font-bold mb-2">{{ selectedPost.title }}</h2>
          <div class="flex items-center justify-between text-gray-400 text-xs mb-4">
            <span>{{ selectedPost.date }}</span>
            <span>{{ selectedPost.readTime }} min read</span>
          </div>
          <div class="flex gap-2 mb-4">
            <span
              v-for="category in selectedPost.categories"
              :key="category"
              class="bg-blue-200 text-blue-800 text-xs px-2 py-1 rounded-full"
            >
              {{ category }}
            </span>
          </div>
          <p class="text-[#F8F9FA] text-sm mb-4">{{ selectedPost.content }}</p>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="tag in selectedPost.tags"
              :key="tag"
              class="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
            >
              {{ tag }}
            </span>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

const posts = reactive([
  {
    id: 1,
    title: 'Building a Netflix Clone UI',
    date: 'Dec 2025',
    readTime: 5,
    categories: ['UI', 'Frontend'],
    excerpt: 'Recreating Netflix taught me hero banners, horizontal scrolling sections, and hover effects.',
    content:
      'In this project, I recreated the Netflix UI to practice hero banners, responsive layouts, and horizontal scroll sections. I focused on hover effects, grid alignment, and reusable components. It was a great way to strengthen responsive design skills while mimicking a real-world app.',
    tags: ['Netflix', 'UI', 'Clone']
  },
  {
    id: 2,
    title: 'E-commerce Layouts with Amazon & Flipkart',
    date: 'Nov 2025',
    readTime: 6,
    categories: ['E-commerce', 'UI'],
    excerpt: 'Cloning Amazon & Flipkart improved my understanding of product grids and responsive structure.',
    content:
      'I built clones of Amazon and Flipkart to practice product grids, cards, headers, and responsive structures. The project helped me understand spacing, hierarchy, and how to make layouts look clean and functional across devices.',
    tags: ['Amazon', 'Flipkart', 'E-commerce']
  },
  {
    id: 3,
    title: 'StreetStyleStore – Fashion UI Clone',
    date: 'Oct 2025',
    readTime: 4,
    categories: ['Fashion', 'UI'],
    excerpt: 'A fashion UI clone focusing on imagery, spacing, and product emphasis.',
    content:
      'This project involved cloning a fashion e-commerce UI. I focused on product presentation, spacing, imagery, and typography. The aim was to make the store visually appealing while maintaining usability and responsiveness.',
    tags: ['Fashion', 'UI', 'Clone']
  }
])

const selectedPost = ref(null)

const openModal = (post) => {
  selectedPost.value = post
}

const closeModal = () => {
  selectedPost.value = null
}
</script>

<style>
/* Fade transition for modal */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>

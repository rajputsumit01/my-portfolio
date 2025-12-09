<template>
  <div class="px-6 md:px-16 space-y-10 pb-20">

    <!-- EXPERIENCE -->
    <section>
      <h1 class="flex items-center gap-3 text-4xl font-semibold mb-6 text-[#F8F9FA]">
        Experience
      </h1>

      <div class="space-y-6">
        <!-- StreetStyleStore -->
        <div class="glass p-6 rounded-xl border-l-[5px] border-blue-500 hover:scale-[1.01] transition-all">
          <div class="flex items-start gap-4">
            <div class="text-3xl text-blue-400">💼</div>
            <div class="flex-1">
              <div class="flex items-center justify-between gap-4 mb-1">
                <h2 class="text-blue-400 font-bold text-lg">Frontend Developer – StreetStyleStore</h2>
                <div class="text-sm text-gray-300">2023 — Present</div>
              </div>
              <p class="text-gray-300 text-sm leading-relaxed">
                Built responsive e-commerce UI components (product cards, listings, checkout pages),
                improved layouts for mobile & desktop, and implemented accessible interactions following SSS
                brand guidelines.
              </p>
            </div>
          </div>
        </div>

        <!-- Excellence Technology training -->
        <div class="glass p-6 rounded-xl border-l-[5px] border-cyan-400 hover:scale-[1.01] transition-all">
          <div class="flex items-start gap-4">
            <div class="text-3xl text-cyan-400">🎓</div>
            <div class="flex-1">
              <div class="flex items-center justify-between gap-4 mb-1">
                <h2 class="text-cyan-300 font-bold text-lg">Web Development Training – Excellence Technology</h2>
                <div class="text-sm text-gray-300">2023</div>
              </div>
              <p class="text-gray-300 text-sm leading-relaxed">
                Completed intensive hands-on training covering HTML, CSS, Java, responsive layouts, and
                practical project builds (site clones and small apps). Focused on fundamentals and real-world
                implementation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- EDUCATION -->
    <section>
      <h2 class="flex items-center gap-3 text-3xl font-semibold mb-6 text-[#F8F9FA]">
        <img src="https://img.icons8.com/fluency/96/graduation-cap.png" class="w-9 h-9" alt="education icon" />
        Education
      </h2>

      <div class="space-y-5">
        <div class="glass p-6 rounded-xl border-l-[5px] border-green-500">
          <div class="flex items-center gap-3 mb-1">
            <div class="text-2xl text-green-400">🎓</div>
            <h3 class="text-green-400 font-bold text-lg">BCA – SPU University, Mandi</h3>
          </div>
          <p class="text-gray-400 text-sm">2022 – 2025</p>
        </div>

        <div class="glass p-6 rounded-xl border-l-[5px] border-yellow-500">
          <div class="flex items-center gap-3 mb-1">
            <div class="text-2xl text-yellow-400">🏫</div>
            <h3 class="text-yellow-400 font-bold text-lg">12th – HP Board</h3>
          </div>
          <p class="text-gray-400 text-sm">Completed senior secondary education.</p>
        </div>

        <div class="glass p-6 rounded-xl border-l-[5px] border-purple-500">
          <div class="flex items-center gap-3 mb-1">
            <div class="text-2xl text-purple-400">📘</div>
            <h3 class="text-purple-400 font-bold text-lg">10th – HP Board</h3>
          </div>
          <p class="text-gray-400 text-sm">Completed secondary education.</p>
        </div>
      </div>
    </section>

    <!-- CERTIFICATES SHOWCASE (Carousel + Grid + Popup) -->
    <section>
      <h2 class="flex items-center gap-3 text-3xl font-semibold mb-4 text-[#F8F9FA]">
        <img src="https://img.icons8.com/fluency/96/certificate.png" class="w-9 h-9" alt="certificates icon" />
        Certificates
      </h2>

      <!-- controls -->
      <div class="flex items-center gap-3 mb-6">
        <button
          :class="['px-3 py-2 rounded-lg font-medium transition', activeView === 'carousel' ? 'bg-purple-400 text-black' : 'bg-[#0b1114] text-gray-300']"
          @click="activeView = 'carousel'"
        >
          Carousel
        </button>
        <button
          :class="['px-3 py-2 rounded-lg font-medium transition', activeView === 'grid' ? 'bg-purple-400 text-black' : 'bg-[#0b1114] text-gray-300']"
          @click="activeView = 'grid'"
        >
          Grid
        </button>

        <div class="ml-auto flex items-center gap-3">
          <label class="text-sm text-gray-300 select-none">Autoplay</label>
          <button
            class="w-10 h-8 rounded-md bg-[#0b1114] text-gray-300 flex items-center justify-center"
            @click="toggleAutoplay"
            :title="autoplay ? 'Pause' : 'Play'"
          >
            <span v-if="autoplay">❚❚</span>
            <span v-else>▶</span>
          </button>
        </div>
      </div>

      <!-- CAROUSEL -->
      <div v-if="activeView === 'carousel'">
        <div
          class="relative w-full overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-br from-[#071018] to-[#24132a] border border-white/6"
          @mouseenter="pauseAutoplay"
          @mouseleave="resumeAutoplay"
        >
          <div class="flex transition-transform duration-700 ease-out" :style="{ transform: `translateX(-${carouselIndex * 100}%)` }">
            <div v-for="(c, i) in certificates" :key="c.id" class="min-w-full flex justify-center p-6">
              <div class="premium-card group rounded-2xl overflow-hidden shadow-xl transform transition relative cursor-pointer" @click="openPopup(i)">
                <img :src="c.image" :alt="c.title" class="rounded-2xl max-h-[520px] object-contain bg-[#0b0f12]" />

                <!-- info bar -->
                <div class="absolute left-4 bottom-6 right-4 p-4 rounded-xl flex items-center justify-between"
                  :style="{ background: 'linear-gradient(90deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))', borderLeft: '4px solid ' + neon }">
                  <div>
                    <div class="text-sm text-purple-200 font-semibold">{{ c.title }}</div>
                    <div class="text-xs text-gray-300">{{ c.issuer }} • {{ c.year }}</div>
                  </div>

                  <div class="flex items-center gap-3">
                    <a :href="c.download" target="_blank" rel="noreferrer" class="px-3 py-2 rounded-md bg-purple-400 text-black font-semibold shadow hover:scale-105 transition" @click.stop>
                      Download
                    </a>
                    <button class="w-10 h-10 rounded-md bg-white/6 text-gray-200 flex items-center justify-center hover:scale-105 transition" @click.stop="openPopup(i)" title="Preview">🔍</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- arrows -->
          <button @click.stop="prevSlide" class="absolute left-4 top-1/2 -translate-y-1/2 bg-white/6 p-3 rounded-full hover:bg-white/12 transition" aria-label="Previous">◀</button>
          <button @click.stop="nextSlide" class="absolute right-4 top-1/2 -translate-y-1/2 bg-white/6 p-3 rounded-full hover:bg-white/12 transition" aria-label="Next">▶</button>

          <!-- dots -->
          <div class="flex items-center justify-between gap-4 p-4">
            <div class="flex gap-3">
              <span v-for="(_, i) in certificates" :key="'dot-'+i" @click="goTo(i)"
                class="w-3 h-3 rounded-full cursor-pointer border border-purple-400/40"
                :class="carouselIndex === i ? 'bg-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.85)]' : 'bg-gray-700'"></span>
            </div>
            <div class="text-sm text-gray-300">{{ carouselIndex + 1 }} / {{ certificates.length }}</div>
          </div>
        </div>
      </div>

      <!-- GRID -->
      <div v-if="activeView === 'grid'">
        <div class="mb-4 text-gray-300">Grid preview — click any card to open the carousel viewer.</div>
        <div class="masonry-columns">
          <div v-for="(c, idx) in certificates" :key="c.id" class="masonry-item glass rounded-xl overflow-hidden premium-card p-3" @click="openPopup(idx)" role="button" tabindex="0" @keyup.enter="openPopup(idx)">
            <div class="relative">
              <img :src="c.image" :alt="c.title" class="w-full rounded-lg object-cover" />
              <div class="absolute left-3 top-3 px-3 py-1 rounded-md text-xs font-semibold" :style="{ background: 'rgba(0,0,0,0.5)', color: neon }">{{ c.issuer }}</div>
            </div>

            <div class="mt-3 flex items-center justify-between">
              <div>
                <div class="text-sm font-semibold text-purple-200">{{ c.title }}</div>
                <div class="text-xs text-gray-300">{{ c.year }}</div>
              </div>
              <a :href="c.download" target="_blank" rel="noreferrer" class="text-xs px-3 py-1 rounded bg-purple-400 text-black font-semibold">Download</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- POPUP VIEWER -->
    <div v-if="showPopup" class="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4" @keydown.esc="closePopup" tabindex="0">
      <button class="absolute top-6 right-6 text-white text-3xl p-2" @click="closePopup">✖</button>
      <button class="absolute left-6 text-white text-4xl p-2" @click="prevPopup">◀</button>
      <div class="max-w-[95vw] max-h-[90vh] flex items-center justify-center">
        <div class="relative">
          <img :src="certificates[popupIndex].image" class="max-h-[85vh] max-w-[85vw] rounded-xl shadow-2xl object-contain" :alt="certificates[popupIndex].title" />
          <div class="absolute left-4 bottom-4 right-4 p-4 rounded-xl flex items-center justify-between" :style="{ background: 'linear-gradient(90deg, rgba(0,0,0,0.45), rgba(255,255,255,0.02))', borderLeft: '4px solid ' + neon }">
            <div class="text-left">
              <div class="text-lg text-purple-200 font-semibold">{{ certificates[popupIndex].title }}</div>
              <div class="text-xs text-gray-300">{{ certificates[popupIndex].issuer }} • {{ certificates[popupIndex].year }}</div>
            </div>
            <div class="flex items-center gap-3">
              <a :href="certificates[popupIndex].download" class="px-3 py-2 bg-purple-400 text-black rounded font-semibold" target="_blank" rel="noreferrer">Download</a>
              <a :href="certificates[popupIndex].image" class="px-3 py-2 bg-white/6 text-gray-200 rounded" target="_blank" rel="noreferrer">Open in new tab</a>
            </div>
          </div>
        </div>
      </div>
      <button class="absolute right-6 text-white text-4xl p-2" @click="nextPopup">▶</button>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'

const neon = '#a855f7'

/* Certificates data: adjust image URLs or downloads as needed */
const certificates = ref([
  { id: 1, image: 'https://i.imgur.com/YdKz2cV.png', title: 'HTML5 Professional Certificate', issuer: 'Excellence Technology', year: '2023', download: 'https://i.imgur.com/YdKz2cV.png' },
  { id: 2, image: 'https://i.imgur.com/vjtF4tV.png', title: 'Advanced CSS & Layouts', issuer: 'Excellence Technology', year: '2023', download: 'https://i.imgur.com/vjtF4tV.png' },
  { id: 3, image: 'https://i.imgur.com/XqKXwW2.png', title: 'Java Programming Essentials', issuer: 'Excellence Technology', year: '2023', download: 'https://i.imgur.com/XqKXwW2.png' },
  { id: 4, image: 'https://i.imgur.com/3c3540P.png', title: 'Frontend Web Development', issuer: 'Excellence Technology', year: '2024', download: 'https://i.imgur.com/3c3540P.png' },
  { id: 5, image: 'https://i.imgur.com/wqEo7nS.png', title: 'Programming Foundations', issuer: 'Excellence Technology', year: '2024', download: 'https://i.imgur.com/wqEo7nS.png' },
  { id: 6, image: 'https://i.imgur.com/0N2eY9C.png', title: 'Frontend Advanced Projects', issuer: 'Excellence Technology', year: '2024', download: 'https://i.imgur.com/0N2eY9C.png' }
])

/* View & carousel state */
const activeView = ref('carousel') // 'carousel' | 'grid'
const carouselIndex = ref(0)

/* autoplay */
const autoplay = ref(true)
let autoplayTimer = null
const autoplayDelay = 3500

const startAutoplay = () => {
  clearInterval(autoplayTimer)
  if (!autoplay.value) return
  autoplayTimer = setInterval(() => {
    carouselIndex.value = (carouselIndex.value + 1) % certificates.value.length
  }, autoplayDelay)
}
const stopAutoplay = () => { clearInterval(autoplayTimer); autoplayTimer = null }
const pauseAutoplay = () => stopAutoplay()
const resumeAutoplay = () => { if (autoplay.value) startAutoplay() }
const toggleAutoplay = () => { autoplay.value = !autoplay.value; if (autoplay.value) startAutoplay(); else stopAutoplay() }

onMounted(() => {
  if (autoplay.value) startAutoplay()
  window.addEventListener('keydown', onKeydown)
})
onBeforeUnmount(() => {
  stopAutoplay()
  window.removeEventListener('keydown', onKeydown)
})
watch(autoplay, (v) => { if (v) startAutoplay(); else stopAutoplay() })

function onKeydown(e) {
  if (e.key === 'ArrowLeft') prevSlide()
  if (e.key === 'ArrowRight') nextSlide()
  if (e.key === 'Escape' && showPopup.value) closePopup()
}

/* carousel controls */
function prevSlide() { carouselIndex.value = carouselIndex.value === 0 ? certificates.value.length - 1 : carouselIndex.value - 1 }
function nextSlide() { carouselIndex.value = (carouselIndex.value + 1) % certificates.value.length }
function goTo(i) { carouselIndex.value = i }

/* popup viewer */
const showPopup = ref(false)
const popupIndex = ref(0)
function openPopup(i) { popupIndex.value = i; showPopup.value = true; stopAutoplay(); setTimeout(() => { const el = document.querySelector('[tabindex="0"]'); if (el) el.focus() }, 50) }
function closePopup() { showPopup.value = false; if (autoplay.value) startAutoplay() }
function prevPopup() { popupIndex.value = popupIndex.value === 0 ? certificates.value.length - 1 : popupIndex.value - 1 }
function nextPopup() { popupIndex.value = (popupIndex.value + 1) % certificates.value.length }

</script>

<style scoped>
/* glass base */
.glass {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.04);
}

/* premium hover */
.premium-card { transition: transform 0.35s ease, box-shadow 0.35s ease; }
.premium-card:hover { transform: perspective(900px) rotateY(4deg) scale(1.02); box-shadow: 0 20px 50px rgba(168,85,247,0.18); }

/* masonry */
.masonry-columns { column-count: 3; column-gap: 1rem; }
@media (max-width: 1024px) { .masonry-columns { column-count: 2; } }
@media (max-width: 640px) { .masonry-columns { column-count: 1; } }
.masonry-item { display: inline-block; width: 100%; margin: 0 0 1rem; break-inside: avoid; cursor: pointer; }

/* buttons focus */
button:focus { outline: none; box-shadow: 0 0 0 3px rgba(168,85,247,0.18); }

/* popup animation */
@keyframes popupIn { from { transform: scale(0.92); opacity: 0 } to { transform: scale(1); opacity: 1 } }
.fixed img { animation: popupIn 220ms ease-out; }

/* small responsive tweaks */
@media (max-width: 640px) {
  .premium-card .absolute { left: 8px; right: 8px; bottom: 8px; }
}
</style>

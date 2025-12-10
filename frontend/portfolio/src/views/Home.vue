
<template>
  <div class="px-6 md:px-16 space-y-16">

    <!-- HERO -->
    <section class=" mt-4 p-8 md:p-10 rounded-3xl flex flex-col md:flex-row items-center gap-10">
      <div class="space-y-4 max-w-xl">
        <h1 class="text-4xl md:text-5xl font-bold text-[#F8F9FA]">Hi, I'm Sumit 👋</h1>
        <p class="text-lg text-blue-400 font-medium">
          I'm a <span class="text-blue-500 font-bold">{{ currentRole }}</span>
        </p>
        <p class="text-[#F8F9FA]">
          I build modern, responsive front-end experiences and practice by cloning real-world websites like Netflix,
          Amazon, Flipkart and StreetStyleStore.
        </p>
        <div class="flex flex-wrap gap-4 mt-4">
          <RouterLink
            to="/projects"
            class="bg-emerald-500 text-black px-6 py-2 rounded-lg font-semibold magnetic"
          >
            View My Work
          </RouterLink>
          <RouterLink
            to="/contact"
            class="border border-blue-500 px-6 py-2 rounded-lg font-semibold text-blue-400 hover:bg-blue-500 hover:text-black transition"
          >
            Contact Me
          </RouterLink>
          <div class="flex gap-4">
            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener"
              class="bg-emerald-500 text-black px-6 py-2 rounded-lg font-semibold hover:bg-emerald-600 transition magnetic"
            >
              View CV
            </a>
            <a
              href="/Resume.pdf"
              download="Sumit_Resume.pdf"
              class="bg-blue-500 text-black px-6 py-2 rounded-lg font-semibold hover:bg-blue-600 transition magnetic"
            >
              ↓ Download CV
            </a>
          </div>
        </div>
      </div>

      <div class="flex flex-col items-center">
        <div class="w-60 h-60  border border-blue-400/70 shadow-[0_0_30px_rgba(59,130,246,0.7)] flex items-center justify-center text-3xl">
      <img src="https://i.pinimg.com/1200x/4c/fd/f7/4cfdf7af9800b97abb98ad04478e7d28.jpg" alt="" class="">
        </div>
        
      </div>
    </section>

    <!-- SKILLS -->
    <section class="skills-section">
      <h2 class="text-3xl font-semibold mb-6 text-[#F8F9FA] light:text-gray-900">Skills</h2>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-4">
        <div
          v-for="s in skills"
          :key="s.name"
          class="skill-card glass rounded-xl p-4 flex flex-col items-center text-center"
        >
          <img :src="s.icon" :alt="s.name" class="w-10 h-10 mb-2" />
          <p class="text-blue-400 light:text-blue-600 text-xs md:text-sm">{{ s.name }}</p>
        </div>
      </div>

      <!-- Skill proficiency bars -->
      <div class="mt-8 space-y-3" ref="progressBarsContainer">
        <div v-for="(bar, idx) in progress" :key="bar.name">
          <div class="flex justify-between text-xs text-[#F8F9FA] light:text-gray-800 mb-1">
            <span>{{ bar.name }}</span>
            <span>{{ bar.value }}%</span>
          </div>
          <div class="w-full bg-black/40 light:bg-gray-300 rounded-full h-2">
            <div
              :ref="`progressBar${idx}`"
              class="bg-blue-500 h-2 rounded-full transition-all duration-3000 ease-out progress-bar"
              :style="{ width: progressWidths[idx] + '%' }"
            ></div>
          </div>
        </div>
      </div>
    </section>

    <!-- SOFT SKILLS -->
    <section class="soft-skills-section">
      <h2 class="text-3xl font-semibold mb-6 text-[#F8F9FA] light:text-gray-900">Soft Skills</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="skill in softSkills"
          :key="skill.name"
          class="soft-skill-card glass rounded-xl p-6 flex items-center gap-4 border-l-4 border-cyan-400 light:border-cyan-500"
        >
          <img :src="skill.icon" :alt="skill.name" class="w-12 h-12 flex-shrink-0" />
          <div class="flex-1">
            <h3 class="text-lg font-semibold text-cyan-400 light:text-cyan-600 mb-1">{{ skill.name }}</h3>
            <p class="text-sm text-gray-300 light:text-gray-700">{{ skill.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- LANGUAGES -->
    <section class="languages-section">
      <h2 class="text-3xl font-semibold mb-6 text-[#F8F9FA] light:text-gray-900">Languages</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-2xl">
        <div
          v-for="lang in languages"
          :key="lang.name"
          class="language-card glass rounded-xl p-6 flex items-center gap-4 border-l-4 border-green-400 light:border-green-500"
        >
          <img :src="lang.icon" :alt="lang.name" class="w-12 h-12 flex-shrink-0" />
          <div class="flex-1">
            <h3 class="text-lg font-semibold text-green-400 light:text-green-600 mb-1">{{ lang.name }}</h3>
            <p class="text-sm text-gray-300 light:text-gray-700">{{ lang.level }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- SERVICES -->
    <section>
  <h2 class="text-3xl font-semibold mb-6 text-[#F8F9FA]">Services</h2>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div
      v-for="s in services"
      :key="s.title"
      class="glass rounded-xl p-6 text-center flex flex-col items-center gap-2 hover:shadow-lg hover:shadow-blue-500/20 transition"
    >
      <!-- IMAGE ICON -->
      <img
        :src="s.icon"
        alt="service icon"
        class="w-14 h-14 object-contain mb-2"
      />

      <h3 class="text-lg font-semibold text-blue-400">{{ s.title }}</h3>
      <p class="text-sm text-[#F8F9FA]">{{ s.desc }}</p>
    </div>
  </div>

  <div class="text-center mt-8">
    <RouterLink
      to="/projects"
      class="inline-block bg-blue-500 text-black px-6 py-2 rounded-lg font-semibold hover:bg-blue-600 transition"
    >
      View Projects →
    </RouterLink>
  </div>
</section>


    <!-- TECH STACK -->
    <section class="tech-stack-section py-8 px-6">
      <h2 class="text-3xl font-semibold mb-6 text-[#F8F9FA] light:text-gray-900">Tech Stack</h2>
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        <div v-for="(tech, idx) in techStack" :key="tech.name" class="tech-card group cursor-pointer">
          <div class="tech-card-inner rounded-xl p-6 text-center flex flex-col items-center gap-3 bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-400/30 light:border-purple-400/40 light:bg-purple-50 hover:border-purple-400/60 light:hover:border-purple-400/80 transition-all duration-300 transform hover:scale-110 hover:-rotate-3"
            :style="{ transitionDelay: `${idx * 50}ms` }">
            <img :src="tech.icon" :alt="tech.name" class="w-12 h-12 group-hover:animate-bounce transition-transform" />
            <p class="text-sm font-semibold text-purple-300 light:text-purple-700">{{ tech.name }}</p>
            <p class="text-xs text-gray-400 light:text-gray-600">{{ tech.category }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ACHIEVEMENTS -->
    <section>
      <h2 class="text-3xl font-semibold mb-6 text-[#F8F9FA]">Highlights</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs md:text-sm">
        <div class="glass rounded-xl p-4 text-center">✔ Netflix UI Clone</div>
        <div class="glass rounded-xl p-4 text-center">✔ Amazon UI Clone</div>
        <div class="glass rounded-xl p-4 text-center">✔ Flipkart UI Clone</div>
        <div class="glass rounded-xl p-4 text-center">✔ StreetStyleStore UI Clone</div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'

const roles = ['Web Developer', 'Frontend Creator', 'UI Learner', 'Website Builder']
const currentRole = ref('')
let roleIndex = 0
let charIndex = 0

const type = () => {
  currentRole.value = roles[roleIndex].slice(0, charIndex)
  charIndex++
  if (charIndex > roles[roleIndex].length) {
    charIndex = 0
    roleIndex = (roleIndex + 1) % roles.length
    setTimeout(type, 1200)
  } else {
    setTimeout(type, 100)
  }
}

const progressBarsContainer = ref(null)
const progressWidths = ref([0, 0, 0, 0, 0, 0])

const animateProgressBars = () => {
  progressWidths.value = progress.map(p => p.value)
}

const resetProgressBars = () => {
  progressWidths.value = [0, 0, 0, 0, 0, 0]
}

onMounted(() => {
  type()

  // Intersection Observer for progress bars
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          resetProgressBars()
          setTimeout(animateProgressBars, 50)
        }
      })
    },
    { threshold: 0.3 }
  )

  if (progressBarsContainer.value) {
    observer.observe(progressBarsContainer.value)
  }

  return () => {
    if (progressBarsContainer.value) {
      observer.unobserve(progressBarsContainer.value)
    }
  }
})

const skills = [
  { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' }
]

const progress = [
  { name: 'HTML', value: 90, delay: 0 },
  { name: 'CSS', value: 85, delay: 0.1 },
  { name: 'Vue.js', value: 80, delay: 0.2 },
  { name: 'Tailwind', value: 80, delay: 0.3 },
  { name: 'JavaScript', value: 85, delay: 0.4 },
  { name: 'MySQL', value: 70, delay: 0.5 }
]

const softSkills = [
  { icon: 'https://img.icons8.com/color/96/000000/light-on.png', name: 'Problem Solving', desc: 'Ability to analyze complex problems and find creative, efficient solutions.' },
  { icon: 'https://img.icons8.com/color/96/000000/handshake.png', name: 'Collaboration', desc: 'Strong teamwork skills and ability to work effectively with diverse teams.' },
  { icon: 'https://img.icons8.com/color/96/000000/chat.png', name: 'Communication', desc: 'Clear and effective communication of ideas and technical concepts. Languages: Hindi, English' },
  { icon: 'https://img.icons8.com/color/96/000000/clock.png', name: 'Time Management', desc: 'Well-organized and skilled at prioritizing tasks and meeting deadlines.' },
  { icon: 'https://img.icons8.com/color/96/000000/checked.png', name: 'Attention to Detail', desc: 'Meticulous approach to code quality and pixel-perfect UI design.' },
  { icon: 'https://img.icons8.com/color/96/000000/rocket.png', name: 'Adaptability', desc: 'Quick learner who adapts to new technologies and environments.' },
  { icon: 'https://img.icons8.com/color/96/000000/paint-palette.png', name: 'Creativity', desc: 'Creative thinking and innovative solutions to design and development challenges.' }
]

const languages = [
  { icon: 'https://storage.googleapis.com/kaggle-datasets-images/3553479/6190858/cb8561b297d89afb85c0db0758bdc0c5/dataset-card.png?t=2023-07-25-14-23-14', name: 'Hindi', level: 'Native Speaker' },
  { icon: 'https://img.icons8.com/?size=80&id=10lwQw8Al1lP&format=png', name: 'English', level: 'Fluent (Professional)' }
]

const techStack = [
  { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', name: 'HTML', category: 'Markup' },
  { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', name: 'CSS', category: 'Styling' },
  { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', name: 'Tailwind', category: 'Framework' },
  { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', name: 'JavaScript', category: 'Logic' },
  { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg', name: 'Vue.js', category: 'Framework' },
  { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', name: 'Git', category: 'Version Control' },
  { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', name: 'React', category: 'Framework' },
  { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', name: 'Node.js', category: 'Runtime' },
  { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', name: 'MySQL', category: 'Database' },
  { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg', name: 'Bootstrap', category: 'Framework' },
  { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', name: 'VS Code', category: 'Editor' },
  { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', name: 'Figma', category: 'Design' }
]


const services = [
  {
    title: 'Landing Page Creation',
    icon: 'https://img.icons8.com/fluency/96/rocket.png',
    desc: 'Building modern, conversion-focused landing pages that engage visitors.'
  },
  {
    title: 'Website Maintenance',
    icon: 'https://img.icons8.com/color/96/maintenance.png',
    desc: 'Ongoing support, updates, and optimization for your web properties.'
  },
  {
    title: 'Basic Data Handling',
    icon: 'https://img.icons8.com/color/96/database.png',
    desc: 'Form handling, API integration, and database connectivity solutions.'
  },
  {
  title: 'Responsive UI Design',
  icon: 'https://static.vecteezy.com/system/resources/previews/059/096/702/non_2x/stunning-creative-responsive-design-ui-kit-isolated-for-web-design-original-png.png',
  desc: 'Mobile-first designs that work perfectly on all devices and screen sizes.'
},

  {
    title: 'Frontend Web Development',
    icon: 'https://img.icons8.com/color/96/source-code.png',
    desc: 'Modern frontend development using Vue.js, Tailwind CSS, and JavaScript.'
  }
];

</script>


<template>
  <div class="px-6 md:px-16 pb-10">
    <!-- Social Links Section -->
    <section class="mt-6 mb-12">
      <h1 class="text-4xl font-semibold mb-8 text-center text-[#F8F9FA]">Get In Touch</h1>
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
        <!-- Email -->
        <a
          href="mailto:sumitk87138@gmail.com"
          class="glass p-6 rounded-2xl text-center hover:scale-105 transition"
        >
          <img src="https://img.icons8.com/color/96/000000/gmail-new.png" alt="Email" class="w-12 h-12 mx-auto mb-3" />
          <h2 class="text-lg font-semibold text-blue-400 mb-2">Email</h2>
          <p class="text-[#F8F9FA] text-sm">sumitk87138@gmail.com</p>
        </a>

        <!-- Instagram -->
        <a
          href="https://instagram.com/your-profile"
          target="_blank"
          rel="noopener noreferrer"
          class="glass p-6 rounded-2xl text-center hover:scale-105 transition"
        >
          <img src="https://img.icons8.com/color/96/000000/instagram-new.png" alt="Instagram" class="w-12 h-12 mx-auto mb-3" />
          <h2 class="text-lg font-semibold text-blue-400 mb-2">Instagram</h2>
          <p class="text-[#F8F9FA] text-sm">Follow me</p>
        </a>

        <!-- Facebook -->
        <a
          href="https://facebook.com/your-profile"
          target="_blank"
          rel="noopener noreferrer"
          class="glass p-6 rounded-2xl text-center hover:scale-105 transition"
        >
          <img src="https://img.icons8.com/color/96/000000/facebook-new.png" alt="Facebook" class="w-12 h-12 mx-auto mb-3" />
          <h2 class="text-lg font-semibold text-blue-400 mb-2">Facebook</h2>
          <p class="text-[#F8F9FA] text-sm">Connect on Facebook</p>
        </a>

        <!-- Telegram -->
        <a
          href="https://t.me/your-telegram-username"
          target="_blank"
          rel="noopener noreferrer"
          class="glass p-6 rounded-2xl text-center hover:scale-105 transition"
        >
          <img src="https://img.icons8.com/color/96/000000/telegram-app.png" alt="Telegram" class="w-12 h-12 mx-auto mb-3" />
          <h2 class="text-lg font-semibold text-blue-400 mb-2">Telegram</h2>
          <p class="text-[#F8F9FA] text-sm">Message me</p>
        </a>
      </div>
    </section>

    <!-- Contact Form Section -->
    <section class="max-w-xl mx-auto">
      <h2 class="text-2xl font-semibold mb-6 text-center text-[#F8F9FA]">Or Send Me a Message</h2>
      <div class="glass p-8 rounded-2xl">
        <form @submit.prevent="handleSubmit" class="space-y-4">
          <input 
            v-model="form.name"
            type="text" 
            placeholder="Your Name" 
            class="input-dark w-full" 
            required
          />
          <input 
            v-model="form.email"
            type="email" 
            placeholder="Your Email" 
            class="input-dark w-full" 
            required
          />
          <textarea 
            v-model="form.message"
            placeholder="Your Message" 
            class="input-dark w-full h-28 resize-none"
            required
          ></textarea>
          <button
            type="submit"
            :disabled="sending"
            class="w-full bg-blue-500 text-black px-6 py-2 rounded-lg font-semibold hover:bg-blue-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {{ sending ? 'Sending...' : (submitted ? '✓ Message Sent!' : 'Send Message') }}
          </button>

          <p v-if="error" class="text-red-400 text-sm mt-2">{{ error }}</p>
        </form>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Form state
const form = ref({ name: '', email: '', message: '' })
const submitted = ref(false)
const sending = ref(false)
const error = ref('')

// Your backend endpoint
const endpoint = "http://localhost:5000/send-email"

const handleSubmit = async () => {
  if (sending.value) return
  sending.value = true
  error.value = ''

  try {
    const payload = {
      name: form.value.name,
      email: form.value.email,
      message: form.value.message
    }

    const res = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(payload)
    })

    if (!res.ok) {
      let body = null
      try { body = await res.json() } catch (e) { }
      throw new Error((body && (body.error || body.message)) || res.statusText)
    }

    // SUCCESS
    submitted.value = true
    form.value = { name: '', email: '', message: '' }

    // Allow user to click again
    sending.value = false

    setTimeout(() => (submitted.value = false), 3000)

  } catch (err) {
    console.error('Contact send error:', err)
    error.value = 'Unable to send message. Please try again later or email me directly at sumitk87138@gmail.com'

    // Allow user to click again after error
    sending.value = false
  }
}
</script>


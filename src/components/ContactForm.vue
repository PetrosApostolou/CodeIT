<template>
  <form @submit.prevent="onSubmit" class="bg-white p-6 rounded-lg shadow-md flex flex-col gap-4 max-w-lg">
    <label class="font-semibold">Name</label>
    <input
      v-model="form.name"
      required
      class="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
    />

    <label class="font-semibold">Email</label>
    <input
      v-model="form.email"
      type="email"
      required
      class="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
    />

    <label class="font-semibold">Company (optional)</label>
    <input
      v-model="form.company"
      class="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
    />

    <label class="font-semibold">How can I help you?</label>
    <select
      v-model="form.need"
      class="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
    >
      <option>AI Development</option>
      <option>Data Analytics</option>
      <option>Proposal Writing</option>
      <option>HPC Consulting</option>
      <option>Other</option>
    </select>

    <label class="font-semibold">Message</label>
    <textarea
      v-model="form.message"
      rows="5"
      required
      class="border border-gray-300 rounded-md px-3 py-2 resize-y focus:outline-none focus:ring-2 focus:ring-accent"
    ></textarea>

    <label class="font-semibold">Attach a brief (optional)</label>
    <input type="file" @change="onFile" class="border border-gray-300 rounded-md p-1" />

    <button
      type="submit"
      class="bg-accent text-primary font-semibold rounded-md px-4 py-2 hover:bg-yellow-400 transition"
    >
      Send Message
    </button>

    <p v-if="sent" class="text-green-600 mt-2">
      Thanks — your message was captured locally. In the static demo, messages are not
      sent. Replace the onSubmit handler to post to your backend or form service.
    </p>
  </form>
</template>

<script>
export default {
  data() {
    return {
      form: { name: '', email: '', company: '', need: 'AI Development', message: '' },
      file: null,
      sent: false,
    }
  },
  methods: {
    onFile(e) {
      this.file = e.target.files[0]
    },
    onSubmit() {
      console.log('FORM SUBMIT', { ...this.form, file: this.file })
      this.sent = true
    },
  },
}
</script>

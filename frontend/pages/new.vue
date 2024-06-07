<template>
  <div class="max-w-xl mx-auto mt-10">
    <h1 class="text-2xl font-bold mb-6">Feedback Form</h1>
    <form @submit.prevent="validateAndSubmit">
      <Input v-model="form.name" id="name" label="Name" :error="errors.name" />
      <Input v-model="form.email" id="email" label="Email" type="email" :error="errors.email" />
      <Select v-model="form.feedbackType" id="feedbackType" label="Feedback Type" :options="feedbackOptions" :error="errors.feedbackType" />
      <Textarea v-model="form.message" id="message" label="Message" :error="errors.message" />
      <Button type="submit">Submit</Button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Input from '@/components/form/input.vue'
import Button from '@/components/form/button.vue'
import Select from '@/components/form/select.vue'
import Textarea from '@/components/form/textarea.vue'
import useFeedbackForm from '@/composables/use-feedback-form'

export default defineComponent({
  components: {
    Input,
    Button,
    Select,
    Textarea
  },
  setup() {
    const { form, errors, feedbackOptions, validateAndSubmit } = useFeedbackForm()

    return {
      form,
      errors,
      feedbackOptions,
      validateAndSubmit
    }
  }
})
</script>

<style scoped>
/* Your scoped styles here */
</style>

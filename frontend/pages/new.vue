<template>
  <section
    class="mx-auto my-2 border border-slate-200 rounded select-none shadow-lg max-w-xs sm:max-w-lg md:max-w-screen-sm lg:max-w-screen-md md:mx-auto">
    <h1 class="text-xl md:text-2xl font-medium px-4 md:px-10 py-3 md:py-5 border-b border-slate-200">
      Add new feedback {{ form.name }}
    </h1>
    <form @submit.prevent="validateAndSubmit" class="px-4 md:px-10 py-4 md:py-8 flex flex-col flex-wrap gap-4 md:gap-7">
      <FormInput v-model="form.name" id="name" label="Name" :error="errors.name" autocomplete="name"
        containerClass="max-w-xs" />
      <FormInput v-model="form.email" id="email" label="Email" type="email" :error="errors.email" autocomplete="email"
        containerClass="max-w-xs" />
      <FormSelect v-model="form.type" id="type" label="Type" :options="feedbackTypes" :error="errors.type"
        containerClass="max-w-xs" />
      <FormInput v-model="form.title" id="title" label="Title" :error="errors.title" />
      <FormTextarea v-model="form.message" id="message" label="Message" :error="errors.message" :required="true" />
      <div class="flex gap-4 justify-end">
        <FormButton type="reset" ButtonStyleType="secondary" :onClick="resetForm">
          Discard
        </FormButton>
        <FormButton type="submit">
          Send feedback
        </FormButton>
      </div>
    </form>
  </section>
</template>

<script lang="ts">
import { feedbackTypes } from '@/interfaces/feedback-types';

export default defineComponent({
  setup() {
    const { form, errors, resetForm, validateAndSubmit } = useFeedbackForm();

    return {
      form,
      errors,
      feedbackTypes,
      resetForm,
      validateAndSubmit
    }
  }
})
</script>

<style scoped>
/* Custom style */
</style>

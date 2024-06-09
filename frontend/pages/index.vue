<script setup lang="ts">
import type { IFeedbackResponse } from '~/interfaces/i-feedback-response';
import { fetchFeedbackById } from '~/utils/feedback/fetch-feedback-by-id';
let selectedFeedback = ref<IFeedbackResponse | undefined>(undefined);
let activeFeedbackId = ref<string | null>(null);
const { feedbacksList, feedbacksMeta } = useFeedbacksList();

const route = useRoute();
watch(() => route.query.id, async (selectedId) => {
  if (typeof selectedId === 'string') {
    activeFeedbackId.value = selectedId;
    try {
      const apiResponse = await fetchFeedbackById(selectedId);
      selectedFeedback.value = apiResponse.result;
    } catch (error) {
      console.error('Error fetching feedback by ID:', error);
    }
  }
  else {
    activeFeedbackId.value = null;
    selectedFeedback.value = undefined;
  }
}, { deep: true, immediate: true });


</script>

<template>
  <div v-if="feedbacksList" class="grid grid-cols-1 sm:grid-cols-7 lg:grid-cols-7 gap-4 h-full bg-white">
    <aside class="sm:col-span-3 lg:col-span-2 h-full bg-slate-50">
      <ul v-if="feedbacksList" id="feedback-list" class="flex flex-col gap-2 p-1">
        <FeedbackItem v-for="feedback in feedbacksList" :key="feedback.id" :data="feedback"
          :isActive="feedback.id === activeFeedbackId" />
      </ul>
    </aside>
    <section
      class="sm:col-span-4 lg:col-span-5 bg-white flex items-center1 justify-center p-4 md:p-6 py-10 md:py-14 lg:py-16 xl:py-20">
      <FeedbackPreview v-if="selectedFeedback" :data="selectedFeedback" />
      <FeedbackPreviewUnselected v-else-if="feedbacksList" />
      <FeedbackPreviewUnselected v-else />
    </section>
  </div>
  <FeedbackWelcome v-else />
</template>

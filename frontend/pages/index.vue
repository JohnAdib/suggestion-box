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
}, { deep: true, immediate: true });


</script>

<template>
  <div class="grid grid-cols-7 gap-4 h-full">
    <aside class="col-span-2 h-full">
      <ul id="feedback-list" class="flex flex-col gap-2 p-1">
        <FeedbackItem v-for="feedback in feedbacksList" :key="feedback.id" :data="feedback"
          :isActive="feedback.id === activeFeedbackId" />
      </ul>
    </aside>
    <section class="col-span-5 bg-white flex items-center1 justify-center p-4 md:p-6 pt-10 md:pt-14 lg:pt-16 xl:pt-20">
      <FeedbackPreview v-if="selectedFeedback" :data="selectedFeedback" />
      <FeedbackPreviewEmpty v-else />
    </section>
  </div>
</template>

<script setup lang="ts">
import type { IFeedbackResponse } from '~/interfaces/i-feedback-response';
// const params = {
//   page: 1,
//   limit: 10,
//   sort: 'date',
//   filter: 'all'
// };
let selectedFeedback = ref<IFeedbackResponse | undefined>({
  id: "1",
  name: "Reporter name",
  email: "reporter email",
  type: "bug",
  title: "Feedback title",
  message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  createdAt: new Date(),
});
const { feedbacksList, feedbacksMeta } = useFeedbacksList();
console.log("feedbacksMeta", feedbacksMeta);

</script>

<template>
  <div class="grid grid-cols-7 gap-4 h-full">
    <aside class="col-span-2 h-full overflow-y-scroll">
      <ul id="feedback-list" class="flex flex-col gap-2 p-1">
        <FeedbackItem v-for="feedback in feedbacksList" :key="feedback.id" :data="feedback" />
      </ul>
    </aside>
    <section class="col-span-5 bg-white flex items-center1 justify-center p-4 md:p-6 pt-10 md:pt-14 lg:pt-16 xl:pt-20">
      <FeedbackPreview v-if="selectedFeedback" :data="selectedFeedback" />
      <FeedbackPreviewEmpty v-else />
    </section>
  </div>
</template>

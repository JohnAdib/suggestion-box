<script setup lang="ts">

// const params = {
//   page: 1,
//   limit: 10,
//   sort: 'date',
//   filter: 'all'
// };

const { feedbacksList, feedbacksMeta } = useFeedbacksList();
console.log("feedbacksMeta", feedbacksMeta);

</script>

<template>
  <div class="grid grid-cols-7 gap-4 h-full">
    <aside class="col-span-2">
      <h1>List of feedbacks</h1>
      <ul id="feedback-list" class="">
        <li v-for="feedback in feedbacksList" :key="feedback.id">
          {{ feedback.message }}
        </li>
      </ul>
    </aside>
    <section class="col-span-5 bg-white flex items-center1 justify-center p-4 md:p-6 pt-10 md:pt-14 lg:pt-16 xl:pt-20">
      <div class="max-w-prose">
        <time class="text-xs text-slate-500 font-medium mb-1.5" datetime="2021-09-01T00:00:00Z">
          4min ago
        </time>
        <h2 class="font-medium text-2xl mb-2 text-slate-800 leading-tight">
          Feedback title
        </h2>
        <div class="text-xs text-slate-500 font-medium mb-7 flex gap-1">
          <span>Reporter name</span>
          <span>(reporter email)</span>
        </div>
        <div class="font-normal text-slate-800 leading-normal">
          Hi Team,

          I encountered a bug in [software/product name] version [version number]. When I try to save a file, the
          application crashes. Here’s what happens:

          I was [describe the activity, e.g., “editing a document”] and clicked on save. Instead of saving, the app
          crashed immediately.

          Here’s how you can reproduce the issue:

          1. Open [feature or section].
          2. Make changes.
          3. Click on the save button.

          I expected it to save my work, but instead, it crashes every time.

          I’m using [operating system] on [basic hardware info]. If relevant, I’m on [browser name and version].

          I’ve attached screenshots and logs that might help.

          Thanks for looking into this!

          Best,
        </div>
      </div>
    </section>
  </div>
</template>

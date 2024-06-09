<template>
  <div class="max-w-prose w-full pl-10 md:px-10">
    <div class="text-xs text-slate-500 font-medium mb-1.5">
      {{ timeAgo(data?.createdAt) }}
    </div>
    <div class="relative">
      <span class="absolute -left-8 top-1">
        <FeedbackIcon :type="data?.type" />
      </span>
      <h2 class="font-medium text-2xl mb-2 text-slate-800 leading-tight">
        {{ data?.title }}
      </h2>
    </div>
    <div class="text-xs text-slate-500 font-medium mb-7 flex gap-1">
      <template v-if="data?.name || data?.email">
        <span v-if="data?.name">{{ data?.name }}</span>
        <span v-if="data?.email">({{ data?.email }})</span>
      </template>
      <span v-else class="text-stone-500">[Anonymous Feedback]</span>
    </div>
    <div class="font-normal text-slate-800 leading-normal overflow-hidden whitespace-pre-wrap">
      {{ data?.message }}
    </div>
  </div>
</template>

<script lang="ts">
import type { IFeedbackResponse } from '@/interfaces/i-feedback-response';
import { timeAgo } from '@/utils/datetime/time-ago';


export default defineComponent({
  props: {
    data: {
      type: Object as PropType<IFeedbackResponse> | undefined,
    },
  },
  methods: {
    timeAgo,
  },

})
</script>

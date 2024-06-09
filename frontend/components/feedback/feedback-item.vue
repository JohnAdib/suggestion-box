<template>
  <li :id="data?.id" class="flex gap-2 p-2 py-3 rounded transition hover:bg-slate-200 cursor-pointer select-none">
    <div class="flex-none">
      <FeedbackIcon :type="data?.type" />
    </div>
    <div class="grow flex flex-col gap-1.5">
      <h3 class="font-medium text-slate-800 leading-tight line-clamp-1">
        {{ displayTitle }}
      </h3>
      <div class="flex items-center justify-between">
        <div class="text-xs text-slate-500 font-medium">
          <span v-if="data?.name">{{ data?.name }}</span>
          <span v-else-if="data?.email">({{ data?.email }})</span>
          <span v-else class="text-stone-500">[Anonymous Feedback]</span>
        </div>
        <time class="text-xs text-slate-500 font-medium" :datetime="data?.createdAt.toString()">
          {{ timeAgo(data?.createdAt) }}
        </time>
      </div>
    </div>
  </li>
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
  computed: {
    displayTitle(): string {
      if (this.data?.title) {
        return this.data.title;
      } else if (this.data?.message) {
        const displayLimit = 30;
        const msg = this.data.message;
        const messageExcerpt = '[' + msg.substring(0, displayLimit) + '...]';
        return messageExcerpt;
      }
      return '';
    },
  },
})
</script>
<template>
  <li :class="{ 'bg-[#EAF0F6]': isActive }"
    class="flex gap-2 p-2 py-3 rounded transition hover:bg-stone-200 cursor-pointer select-none"
    @click="navigateToFeedback(data?.id)">
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
        <div class="text-xs text-slate-500 font-medium">
          {{ timeAgo(data?.createdAt) }}
        </div>
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
    isActive: Boolean
  },
  setup() {
    const router = useRouter();
    return { router };
  },
  methods: {
    timeAgo,
    navigateToFeedback(id: string | undefined) {
      if (id) {
        this.router.push({ path: '/', query: { id: id } });
      }
    },
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
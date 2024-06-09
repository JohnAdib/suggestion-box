import type { IResponseJsonMeta } from '@/interfaces/i-response-json-meta';
import { fetchFeedbacksList } from '@/utils/feedback/fetch-feedbacks-list';
import type { IFeedbackResponse } from '~/interfaces/i-feedback-response';

export interface IUseFeedbacksList {
  feedbacksList: Ref<IFeedbackResponse[]>;
  feedbacksMeta: Ref<IResponseJsonMeta | undefined>;
}

export function useFeedbacksList(): IUseFeedbacksList {
  let feedbacksList = ref<IFeedbackResponse[]>([]);
  let feedbacksMeta = ref<IResponseJsonMeta | undefined>({});

  onMounted(async () => {
    const apiResponse = await fetchFeedbacksList();
    feedbacksList.value = apiResponse.result;
    feedbacksMeta.value = apiResponse.meta;
  });

  return { feedbacksList, feedbacksMeta } as IUseFeedbacksList;
}
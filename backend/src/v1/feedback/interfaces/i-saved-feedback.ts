import type { ICreateFeedback } from "./index.js";

export interface ISavedFeedback extends ICreateFeedback {
  _id: string;
  createdAt: Date;
}

import { ReactElement } from "react";

export type FeedbacksProp = {
  name: string;
  feedback: string;
  duration: string;
  playerProfile: ReactElement;
  before?: string;
  after?: string;
}[];

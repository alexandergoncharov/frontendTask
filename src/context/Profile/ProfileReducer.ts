import { PromiseCancelable } from "../../utils/types";

export interface ProfileState {
  isLoadingAuthor: boolean;
  authorPromise: PromiseCancelable<unknown> | undefined;
  isLoadingQuotes: boolean;
  quotesPromise: PromiseCancelable<unknown> | undefined;
  authorName: string;
  quoteText: string;
}

export const initialState: ProfileState = {
  isLoadingAuthor: false,
  authorPromise: undefined,
  isLoadingQuotes: false,
  quotesPromise: undefined,
  authorName: "",
  quoteText: "",
};

type LoadingPayload = {
  authorPromise: PromiseCancelable<unknown>;
  quotesPromise: PromiseCancelable<unknown>;
};

type ProfileAction =
  | { type: "loading_content"; payload: LoadingPayload }
  | { type: "cancel_update" }
  | { type: "author_loaded"; authorName: string }
  | { type: "quote_loaded"; quoteText: string };

export function reducer(state: ProfileState, action: ProfileAction) {
  switch (action.type) {
    case "loading_content":
      return {
        ...state,
        isLoadingAuthor: true,
        isLoadingQuotes: true,
        ...action.payload,
      };
    case "author_loaded":
      return {
        ...state,
        isLoadingAuthor: false,
        authorName: action.authorName,
      };
    case "quote_loaded":
      return {
        ...state,
        isLoadingAuthor: false,
        isLoadingQuotes: false,
        quoteText: action.quoteText,
      };
    case "cancel_update":
      return { ...state, isLoadingAuthor: false, isLoadingQuotes: false };
    default:
      throw new Error();
  }
}

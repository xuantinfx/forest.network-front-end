import { CLOSE_TWEET_DETAILS_MODAL, SEE_TWEET_DETAILS } from "./actionType";

export const closeTweetDetailsModal = () => ({
  type: CLOSE_TWEET_DETAILS_MODAL
})

export const seeTweetDetails = (index) => ({
  type: SEE_TWEET_DETAILS,
  payload: index
})


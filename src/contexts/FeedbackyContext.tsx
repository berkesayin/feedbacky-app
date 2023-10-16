import { createContext, useContext } from "react";
import { ContextValue } from "../types";

const initialContextValue = {
  feedbackSavedSuccessfully: false,
  setFeedbackSavedSuccessfully: () => {},
  feedbackPostRequestLoading: false,
  setFeedbackPostRequestLoading: () => {},
  form: {
    name: "",
    setName: () => {},
    surname: "",
    setSurname: () => {},
    comment: "",
    setComment: () => {},
  },
  feedbackyProps: {
    googleSheetId: "",
    modalSuccessTitle: "",
    sendButtonText: "",
    nameInputPlaceholder: "",
    surnameInputPlaceholder: "",
    modalSuccessIconSize: 0,
    feedbackyButtonIconSize: 0,
    modalSuccessIconColor: "",
    feedbackInputPlaceholder: "",
    modalTitle: "",
  },
};

export const FeedbackyContext =
  createContext<ContextValue>(initialContextValue);

export const useFeedbackyContext = () => useContext(FeedbackyContext);

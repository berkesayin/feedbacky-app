export interface ContextValue {
  form: FormContext;
  feedbackyProps: FeedbackyProps;
  feedbackSavedSuccessfully: boolean;
  setFeedbackSavedSuccessfully: React.Dispatch<React.SetStateAction<boolean>>;
  feedbackPostRequestLoading: boolean;
  setFeedbackPostRequestLoading: React.Dispatch<React.SetStateAction<boolean>>;
}
export interface FormContext {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  surname: string;
  setSurname: React.Dispatch<React.SetStateAction<string>>;
  comment: string;
  setComment: React.Dispatch<React.SetStateAction<string>>;
}
export interface FeedbackyProps {
  googleSheetId: string;
  modalSuccessTitle?: string;
  sendButtonText?: string;
  nameInputPlaceholder?: string;
  surnameInputPlaceholder?: string;
  modalSuccessIconSize?: number;
  feedbackyButtonIconSize?: number;
  modalSuccessIconColor?: string;
  feedbackInputPlaceholder?: string;
  modalTitle?: string;
}

export interface FeedbackyModalProps {
  show: boolean;
  onClose: () => void;
}

export interface FeedbackyModalButtonProps {
  loading: boolean;
}

export interface FeedbackyButtonProps {
  onClick: () => void;
}

export interface FeedbackyModalInputProps {
  placeholder: string;
  value: string;
  onChange: (arg: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface PostFeedbackProps {
  googleSheetId: string;
  data: {
    Name: string;
    Surname: string;
    Comment: string;
  };
}

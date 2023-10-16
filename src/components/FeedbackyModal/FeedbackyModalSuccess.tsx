import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { useFeedbackyContext } from "../../contexts/FeedbackyContext";
import {
  FEEDBACKY_MODAL_SUCCESS_ICON_DEFAULT_COLOR,
  FEEDBACKY_MODAL_SUCCESS_ICON_DEFAULT_SIZE,
  MODAL_SUCCESS_DEFAULT_TEXT,
} from "../../constants";

export const FeedbackyModalSuccess = () => {
  const {
    feedbackyProps: {
      modalSuccessTitle,
      modalSuccessIconSize,
      modalSuccessIconColor,
    },
  } = useFeedbackyContext();

  return (
    <div className="flex items-center flex-col gap-3">
      <IoCheckmarkCircleOutline
        size={modalSuccessIconSize || FEEDBACKY_MODAL_SUCCESS_ICON_DEFAULT_SIZE}
        color={
          modalSuccessIconColor || FEEDBACKY_MODAL_SUCCESS_ICON_DEFAULT_COLOR
        }
      />
      {modalSuccessTitle || MODAL_SUCCESS_DEFAULT_TEXT}
    </div>
  );
};

import { FEEDBACKY_MODAL_TITLE_DEFAULT_TEXT } from "../../constants";
import { useFeedbackyContext } from "../../contexts/FeedbackyContext";

export const FeedbackyModalTitle = () => {
  const {
    feedbackyProps: { modalTitle },
  } = useFeedbackyContext();

  return (
    <div>
      <h1 className="font-semibold text-center text-xl text-gray-700 mb-7">
        {modalTitle || FEEDBACKY_MODAL_TITLE_DEFAULT_TEXT}
      </h1>
    </div>
  );
};

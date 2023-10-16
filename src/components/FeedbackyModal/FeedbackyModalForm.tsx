import { FeedbackyModalButton } from "./FeedbackyModalButton";
import { FeedbackyModalInputs } from "./FeedbackyModalInputs";
import { FeedbackyModalTextArea } from "./FeedbackyModalTextArea";
import { FeedbackyModalTitle } from "./FeedbackyModalTitle";
import { useFeedbackyContext } from "../../contexts/FeedbackyContext";

export const FeedbackyModalForm = () => {
  const { feedbackPostRequestLoading } = useFeedbackyContext();

  return (
    <>
      <FeedbackyModalTitle />
      <FeedbackyModalInputs />
      <FeedbackyModalTextArea />
      <FeedbackyModalButton loading={feedbackPostRequestLoading} />
    </>
  );
};

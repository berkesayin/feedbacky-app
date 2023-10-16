import { FeedbackyModalSuccess } from "./FeedbackyModalSuccess";
import { FeedbackyModalForm } from "./FeedbackyModalForm";
import { FeedbackyModalProps } from "../../types";
import { useFeedbackyContext } from "../../contexts/FeedbackyContext";

export const FeedbackyModal = ({ show, onClose }: FeedbackyModalProps) => {
  const { feedbackSavedSuccessfully } = useFeedbackyContext();

  const handleClose = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  if (!show) {
    return null;
  }

  return (
    <form
      onClick={handleClose}
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center"
    >
      <div className="bg-blue-200 p-10 rounded w-96 h-144">
        {feedbackSavedSuccessfully ? (
          <FeedbackyModalSuccess />
        ) : (
          <FeedbackyModalForm />
        )}
      </div>
    </form>
  );
};

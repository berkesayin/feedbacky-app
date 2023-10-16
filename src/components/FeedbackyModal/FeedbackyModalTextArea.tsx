import { useFeedbackyContext } from "../../contexts/FeedbackyContext";
import { FEEDBACKY_MODAL_FEEDBACK_INPUT_DEFAULT_PLACEHOLDER } from "../../constants";

export const FeedbackyModalTextArea = () => {
  const {
    form: { comment, setComment },
    feedbackyProps: { feedbackInputPlaceholder },
  } = useFeedbackyContext();

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  return (
    <div className="flex flex-col">
      <textarea
        className="bg-sky-100 border border-gray-700 p-2 rounded mb-5 h-24 resize-none"
        placeholder={
          feedbackInputPlaceholder ||
          FEEDBACKY_MODAL_FEEDBACK_INPUT_DEFAULT_PLACEHOLDER
        }
        value={comment}
        onChange={handleCommentChange}
      ></textarea>
    </div>
  );
};

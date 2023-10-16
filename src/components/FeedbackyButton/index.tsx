import { BiCommentDetail } from "react-icons/bi";
import { FeedbackyButtonProps } from "../../types";
import { useFeedbackyContext } from "../../contexts/FeedbackyContext";
import { FEEDBACKY_BUTTON_DEFAULT_SIZE } from "../../constants";

export const FeedbackyButton = ({ onClick }: FeedbackyButtonProps) => {
  const {
    feedbackyProps: { feedbackyButtonIconSize },
  } = useFeedbackyContext();
  return (
    <div
      className="inline-block rounded-full cursor-pointer p-3 text-center mx-auto bg-sky-700 text-white 
        hover:scale-95 transition absolute bottom-7 right-7"
      onClick={onClick}
    >
      <BiCommentDetail
        size={feedbackyButtonIconSize || FEEDBACKY_BUTTON_DEFAULT_SIZE}
      />
    </div>
  );
};

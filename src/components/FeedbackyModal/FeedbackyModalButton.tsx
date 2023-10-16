import { FeedbackyButtonLoading } from "../FeedbackyButton/FeedbackyButtonLoading";
import { SEND_FEEDBACKY_BUTTON_DEFAULT_TEXT } from "../../constants";
import { useFeedbackyContext } from "../../contexts/FeedbackyContext";
import { FeedbackyModalButtonProps } from "../../types";
import { postFeedback } from "../../services/googleSheetService";
import { HTTP_STATUS } from "../../enums";

export const FeedbackyModalButton = ({
  loading,
}: FeedbackyModalButtonProps) => {
  const {
    form: { name, setName, surname, setSurname, comment, setComment },
    feedbackyProps: { googleSheetId, sendButtonText },
    setFeedbackSavedSuccessfully,
    setFeedbackPostRequestLoading,
  } = useFeedbackyContext();

  const handleClick = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = {
      Name: name,
      Surname: surname,
      Comment: comment,
    };

    setFeedbackPostRequestLoading(true);
    const response = await postFeedback({ googleSheetId, data });

    setName("");
    setSurname("");
    setComment("");

    if (response.status === HTTP_STATUS.OK) {
      setFeedbackSavedSuccessfully(true);
      setFeedbackPostRequestLoading(true);
    }
  };

  return (
    <button
      className="flex items-center gap-3 px-5 py-2 bg-sky-700 text-white rounded mx-auto"
      onClick={handleClick}
    >
      {sendButtonText || SEND_FEEDBACKY_BUTTON_DEFAULT_TEXT}
      {loading && <FeedbackyButtonLoading />}
    </button>
  );
};

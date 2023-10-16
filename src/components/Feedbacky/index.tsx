import { useState } from "react";
import { FeedbackyButton } from "../FeedbackyButton";
import { FeedbackyContext } from "../../contexts/FeedbackyContext";
import { ContextValue, FeedbackyProps } from "../../types";
import { FeedbackyModal } from "../FeedbackyModal";
import "../../index.css";

export const Feedbacky = (feedbackyProps: FeedbackyProps) => {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [comment, setComment] = useState("");
  const [feedbackSavedSuccessfully, setFeedbackSavedSuccessfully] =
    useState(false);
  const [feedbackPostRequestLoading, setFeedbackPostRequestLoading] =
    useState(false);

  const contextValue: ContextValue = {
    form: {
      name,
      setName,
      surname,
      setSurname,
      comment,
      setComment,
    },
    feedbackyProps,
    feedbackSavedSuccessfully,
    setFeedbackSavedSuccessfully,
    feedbackPostRequestLoading,
    setFeedbackPostRequestLoading,
  };

  const handleOnClose = () => {
    setShowModal(false);
    setFeedbackSavedSuccessfully(false);
    setFeedbackPostRequestLoading(false);
  };

  const handleFeedbackyButtonClick = () => {
    setShowModal(!showModal);
  };

  return (
    <FeedbackyContext.Provider value={contextValue}>
      <FeedbackyButton onClick={handleFeedbackyButtonClick} />
      {showModal && <FeedbackyModal show={showModal} onClose={handleOnClose} />}
    </FeedbackyContext.Provider>
  );
};

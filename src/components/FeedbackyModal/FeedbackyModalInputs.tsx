import { FeedbackyModalInput } from "./FeedbackyModalInput";
import { useFeedbackyContext } from "../../contexts/FeedbackyContext";
import {
  FEEDBACKY_MODAL_NAME_INPUT_DEFAULT_PLACEHOLDER,
  FEEDBACKY_MODAL_SURNAME_INPUT_DEFAULT_PLACEHOLDER,
} from "../../constants";

export const FeedbackyModalInputs = () => {
  const {
    form: { name, surname, setName, setSurname },
    feedbackyProps: { nameInputPlaceholder, surnameInputPlaceholder },
  } = useFeedbackyContext();

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleChangeSurname = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSurname(e.target.value);
  };

  return (
    <div className="flex flex-col">
      <FeedbackyModalInput
        placeholder={
          nameInputPlaceholder || FEEDBACKY_MODAL_NAME_INPUT_DEFAULT_PLACEHOLDER
        }
        value={name}
        onChange={handleChangeName}
      />
      <FeedbackyModalInput
        placeholder={
          surnameInputPlaceholder ||
          FEEDBACKY_MODAL_SURNAME_INPUT_DEFAULT_PLACEHOLDER
        }
        value={surname}
        onChange={handleChangeSurname}
      />
    </div>
  );
};

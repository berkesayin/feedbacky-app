import { FeedbackyModalInputProps } from "../../types";

export const FeedbackyModalInput = ({
  placeholder,
  value,
  onChange,
}: FeedbackyModalInputProps) => {
  return (
    <input
      type="text"
      className="bg-sky-100 border border-gray-700 p-2 rounded mb-5 resize-none"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

import axios from "axios";
import { PostFeedbackProps } from "../../types";
import { GOOGLE_SHEET_SERVICE_BASE_URL } from "../../constants";

export const postFeedback = ({ googleSheetId, data }: PostFeedbackProps) => {
  return axios.post(`${GOOGLE_SHEET_SERVICE_BASE_URL}${googleSheetId}`, data);
};

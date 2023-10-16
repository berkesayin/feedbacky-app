import axios from "axios";
import { postFeedback } from ".";
import { GOOGLE_SHEET_SERVICE_BASE_URL } from "../../constants";

jest.mock("axios");

describe("Post feedback", () => {
  it("Post feedback", () => {
    const googleSheetId = "1234";
    const data = { Name: "Berke", Surname: "Sayin", Comment: "Good product" };
    postFeedback({ googleSheetId, data });
    expect(axios.post).toBeCalledWith(
      `${GOOGLE_SHEET_SERVICE_BASE_URL}${googleSheetId}`,
      data
    );
  });
});

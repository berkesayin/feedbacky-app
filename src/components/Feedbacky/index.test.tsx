import { useEffect } from "react";
import { Feedbacky } from "./index";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

jest.mock("../FeedbackyButton", () => {
  return {
    FeedbackyButton: ({ onClick }: { onClick: () => void }) => {
      useEffect(() => {
        onClick();
      }, []);
      return <div>FeedbackyButton</div>;
    },
  };
});

jest.mock("../FeedbackyModal", () => {
  return {
    FeedbackyModal: ({ onClose }: { onClose: () => void }) => {
      useEffect(() => {
        onClose();
      }, []);
      return <div>FeedbackyModal</div>;
    },
  };
});

describe("Feedbacky", () => {
  it("renders successfully", () => {
    const googleSheetId = "1234567";
    render(<Feedbacky googleSheetId={googleSheetId} />);
    expect(screen.getByText("FeedbackyButton")).toBeInTheDocument();
    expect(screen.queryByText("FeedbackyModal")).not.toBeInTheDocument();
  });
});

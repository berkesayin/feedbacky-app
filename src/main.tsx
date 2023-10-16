import ReactDOM from "react-dom/client";
import { Feedbacky } from "./components/Feedbacky";
import { FeedbackyProps } from "./types";

const feedbacky = {
  run: (feedbackyProps: FeedbackyProps) => {
    ReactDOM.createRoot(document.getElementById("feedbacky-container")!).render(
      <Feedbacky {...feedbackyProps} />
    );
  },
};
// If feedbacky object is not used here, the bundler sees it as a dead code,
// And so it doesn't put it in bundle file.
console.log(feedbacky);

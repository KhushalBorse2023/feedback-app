import { useState } from "react";
import FeedbackList from "./Component/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./Component/FeedbackStats";
import FeedbackForm from "./Component/FeedbackForm";
import Header from "./Component/Header";

function App() {
  const [feedback, setFeedBack] = useState(FeedbackData);

  const deleteFeedBack = (id) => {
    if (window.confirm("Are u sure to delete !")) {
      setFeedBack(feedback.filter((item) => item.id !== id));
    }
  };
  return (
    <>
      <Header />
      <div className="container">
        <FeedbackForm></FeedbackForm>
        <FeedbackStats feedback={feedback}></FeedbackStats>
        <FeedbackList feedback={feedback} handleDelete={deleteFeedBack} />
      </div>
    </>
  );
}
export default App;

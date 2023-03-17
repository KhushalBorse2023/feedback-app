import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route ,Routes} from "react-router-dom";
import FeedbackList from "./Component/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./Component/FeedbackStats";
import FeedbackForm from "./Component/FeedbackForm";
import Header from "./Component/Header";
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./Component/AboutIconLink";
function App() {
  const [feedback, setFeedBack] = useState(FeedbackData);

  const deleteFeedBack = (id) => {
    if (window.confirm("Are u sure to delete ?")) {
      setFeedBack(feedback.filter((item) => item.id !== id));
    }
  };
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedBack([newFeedback, ...feedback]);
  };
  return (
    <Router>
    <Header />
    <div className="container">
      <Routes>
        <Route path="/" element={
          <>
            <FeedbackForm handleAdd={addFeedback} />
            <FeedbackStats feedback={feedback} />
            <FeedbackList feedback={feedback} handleDelete={deleteFeedBack} />
          </>
        }/>
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <AboutIconLink/>
    </div>
  </Router>
  
  );
}
export default App;

import { useState } from "react";
import {v4 as uuidv4} from 'uuid'
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
  const addFeedback=(newFeedback)=>{
    newFeedback.id=uuidv4()
setFeedBack([newFeedback,...feedback]) 
 }
  return (

    <>
      <Header />
      <div className="container">
        <FeedbackForm handleAdd={addFeedback}></FeedbackForm>
        <FeedbackStats feedback={feedback}></FeedbackStats>
        <FeedbackList feedback={feedback} handleDelete={deleteFeedBack} />
      </div>
    </>
  );
}
export default App;

import logo from "./logo.svg";
import "./App.css";
import { Question } from "./components/Question";

function App() {
  return (
    <>
      <Question
        title="Is React really important?"
        description="Let me know all the advantages of using React."
      />
      <Question title="How are you?" description="Tell me how you feel" />
    </>
  );
}

export default App;

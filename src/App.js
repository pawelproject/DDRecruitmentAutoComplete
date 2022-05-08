import React from "react";

import SubmissionInfo from "./components/SubmissionInfo";
import UserForm from "./components/UserForm";

const App = () => {
  return (
    <div className="App">
      <UserForm />
      <SubmissionInfo />
    </div>
  );
};

export default App;

import React from "react";
import { useSelector } from "react-redux";

const SubmissionInfo = () => {
  const user = useSelector((state) => state.user);

  return (
    <div>
      <h3>Submission Info</h3>
      {!user.name && <span>nothing submitted yet</span>}
      {user.name && <strong>{user.name}</strong>}
    </div>
  );
};

export default SubmissionInfo;

import React, { useEffect, useState } from "react";
import AutoCompleteInput from "./AutoCompleteInput";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "../store/actions/user";

const UserForm = () => {
  const [userList, setUserList] = useState([]);
  const dispatch = useDispatch();

  const fetchUserList = async () => {
    const response = await axios
      .get("https://jsonplaceholder.typicode.com/users")
      .catch((err) => {
        console.log("Err: ", err);
      });
    const data = response.data.map((user) => user.username).sort();
    setUserList(data);
  };

  useEffect(() => {
    fetchUserList();
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(setUser(e.target[0].value));
  };

  return (
    <form autoComplete="off" onSubmit={submitHandler}>
      <AutoCompleteInput options={userList} label="username" name="username" />
      <br />
      <button type="submit">demo submit</button>
    </form>
  );
};

export default UserForm;

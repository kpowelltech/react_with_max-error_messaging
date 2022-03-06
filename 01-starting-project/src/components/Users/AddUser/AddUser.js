import React, { useState } from "react";

import styles from "./AddUser.module.css";
import Card from "../../UI/Card/Card";
import Button from "../../UI/Button/Button";
import ErrorModal from "../../UI/ErrorModal/ErrorModal";

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredUserAge, setEnteredUserAge] = useState("");
  const [errorState, setErrorState] = useState({});
  const [errorCaught, setErrorCaught] = useState(false);

  // Input handlers
  const userNameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };

  const userAgeChangeHandler = (event) => {
    setEnteredUserAge(event.target.value);
  };


  // onSubmit Handler
  const addUserHandler = (event) => {
    event.preventDefault();

    if (enteredUserName.trim().length === 0) {
      setErrorCaught(true);
      setErrorState({
        title: "Username error occurred!",
        message: "Username must be at least 1 character long",
      });
      return;
    }

    if (+enteredUserAge < 1) {
      setErrorCaught(true);
      setErrorState({
        title: "Age entry error occurred!",
        message: "User Age must be >= 1",
      });
      return;
    }

    //Calling the addUserHandler function from Apps.js.  Do not create the function, call it.
    props.onAddUser(enteredUserName, enteredUserAge);

    setEnteredUserAge("");
    setEnteredUserName("");
  };

  //When clicking off the modal handler
  const clickErrorModalHandler = () => {
      setErrorCaught(false)
  }

  return (
    <div>
      {errorCaught ? (
        <ErrorModal
          errorTitle={errorState.title}
          errorMessage={errorState.message}
          onClickErrorModal={clickErrorModalHandler}
        />
      ) : (
        <Card className={styles.input}>
          <form onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              onChange={userNameChangeHandler}
              value={enteredUserName}
            />

            <label htmlFor="age">Age (Years)</label>
            <input
              type="number"
              id="age"
              onChange={userAgeChangeHandler}
              value={enteredUserAge}
            />

            <Button type="submit" onChange={userAgeChangeHandler}>
              Add User
            </Button>
          </form>
        </Card>
      )}
    </div>
  );
};

export default AddUser;

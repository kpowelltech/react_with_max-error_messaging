import React, { useState } from "react";

import AddUser from "./components/Users/AddUser/AddUser";
import UsersList from "./components/Users/UsersList/UsersList";

function App() {
  const [listOfUsers, setListOfUsers] = useState([]);

  const addUserHandler = (userName, userAge) => {
    setListOfUsers((prevListOfUsers) => {
      return [
        ...prevListOfUsers,
        { id: Math.random().toString(), name: userName, age: +userAge },
      ];
    });

    console.log(listOfUsers);
  };

  return (
    <React.Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={listOfUsers} />
    </React.Fragment>
  );
}

export default App;

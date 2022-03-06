import React from "react";

import styles from "./UsersList.module.css";

import Card from "../../UI/Card/Card";

const UsersList = (props) => {
  console.log(props.users);
  return (
    <Card className={styles.users}>
      <ul>
        {props.users.length >= 1 ? (
          props.users.map((userItem) => {
            return (
              <li>
                {userItem.name} ({userItem.age} Years old)
              </li>
            );
          })
        ) : (
          <li>No Users</li>
        )}
      </ul>
    </Card>
  );
};

export default UsersList;

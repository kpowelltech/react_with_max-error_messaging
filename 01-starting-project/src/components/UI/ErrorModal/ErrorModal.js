import React from "react";

import styles from "./ErrorModal.module.css";
import Card from "../Card/Card";
import Button from "../Button/Button";

const ErrorModal = (props) => {
  return (
    <div>
      <div className={styles.backdrop} onClick={props.onClickErrorModal}></div>
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.errorTitle}</h2>
        </header>

        <div className={styles.content}>
          <p>{props.errorMessage}</p>
        </div>

        <footer className={styles.actions}>
          <Button onClick={props.onClickErrorModal}>OK</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;

import React from "react";
import ReactDOM from "react-dom";

import styles from "./ErrorModal.module.css";
import Card from "../Card/Card";
import Button from "../Button/Button";

const Backdrop = (props) => {
  return (
    <div className={styles.backdrop} onClick={props.onClickErrorModal}></div>
  );
};

const ModalOverlay = (props) => {
  return (
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
  );
};

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClickErrorModal={props.onClickErrorModal} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          errorTitle={props.errorTitle}
          errorMessage={props.errorMessage}
          onClickErrorModal={props.onClickErrorModal}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default ErrorModal;

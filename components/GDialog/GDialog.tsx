"use client";

import { useDialogContext } from "../../context";
import { GButton } from "../GButton";
import styles from "./GDialog.module.css";

interface Props {
  children: React.ReactNode;
}

function GDialog({ children }: Props) {
  const { dialogState, setDialogState } = useDialogContext();
  const closeDialog = () => {
    setDialogState(false);
  };

  return (
    <div
      className={`${dialogState ? styles.open : ""} ${
        styles["dialog-background"]
      }`}
    >
      <dialog open={dialogState} className={styles["dialog-container"]}>
        {children}
        <GButton callBack={closeDialog}>Close</GButton>
      </dialog>
    </div>
  );
}
export default GDialog;

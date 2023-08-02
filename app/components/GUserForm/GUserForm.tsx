"use client";

import { User } from "app/models";
import { useState } from "react";
import { GButton } from "../../../components";
import {
  emptyUserState,
  useDialogContext,
  useUserContext,
} from "../../../context";
import styles from "./GUserForm.module.css";
import { ButtonTypes } from "../../../components/GButton/GButton";

function GUserForm() {
  const { setUserState } = useUserContext();
  const { setDialogState } = useDialogContext();
  const [formState, setFormState] = useState<User>(emptyUserState);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setFormState((prevState) => ({ ...prevState, [fieldName]: fieldValue }));
  };

  const submit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (formState.name) {
      setUserState(formState);
      setDialogState(false);
    }
  };

  return (
    <form className={styles.form}>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" onChange={handleInputChange} />
      <GButton callBack={submit} type={ButtonTypes.SUBMIT}>
        Submit
      </GButton>
    </form>
  );
}
export default GUserForm;

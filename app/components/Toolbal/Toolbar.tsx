"use client";

import { GButton } from "../../../components";
import GDialog from "../../../components/GDialog/GDialog";
import { useDialogContext } from "../../../context";
import { GUserForm } from "../GUserForm";
import styles from "./Toolbar.module.css";

function Toolbar() {
  const { setDialogState } = useDialogContext();

  const openDialog = () => {
    setDialogState(true);
  };

  return (
    <div>
      <div className={styles.toolbar}>
        <p>
          Framework BattleRoyale: <strong>NextJS 13</strong>
        </p>
        <GButton callBack={openDialog}>Open Dialog</GButton>
      </div>
      <GDialog>
        <GUserForm />
      </GDialog>
    </div>
  );
}
export default Toolbar;

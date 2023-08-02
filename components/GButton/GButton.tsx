import styles from "./GButton.module.css";

export enum ButtonTypes {
  "SUBMIT" = "submit",
  "RESET" = "reset",
  "BUTTON" = "button",
}

interface Props {
  children: React.ReactNode;
  callBack: (e: any) => void;
  type?: ButtonTypes;
}

function GButton({ children, callBack, type = ButtonTypes.BUTTON }: Props) {
  const handleOnClick = (e: any) => {
    e.preventDefault();
    callBack(e);
  }

  return (
    <button className={styles.button} onClick={handleOnClick} type={type}>
      {children}
    </button>
  );
}

export default GButton;

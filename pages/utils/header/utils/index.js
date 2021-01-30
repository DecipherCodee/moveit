import { useEffect, useState } from "react";
import { useMainStore } from "../..";
import styles from "./style.module.scss";

let initShown;
let putShow = () => {};

function useStyles({ isShown }) {
  return `${styles.header} ${isShown && styles.show}`;
}

export const useStore = () => {
  const { initScene, unmount } = useMainStore();

  const [isShown, show] = useState(false);
  initShown = isShown;
  putShow = show;
  useEffect(() => unmount({ set: show, value: false }), [unmount]);
  useEffect(() => {
    initShown = isShown;
  }, [isShown]);

  return {
    styles,
    scene: initScene,
    className: useStyles({ isShown: initShown }),
  };
};
export const useHeaderStore = () => ({
  initShown,
  putShow,
});

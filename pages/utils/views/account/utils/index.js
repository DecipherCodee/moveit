import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useMainStore as MainStore } from "../../..";
import styles from "./style.module.scss";
import { useAuth } from "./auth";

let initBack;
let putBack = () => {};
let initAuthenticated;
let putAuthenticate = () => {};

const Contents = dynamic(
  () => import("./contents").then((mod) => mod.useContents),
  { ssr: false }
);

function useStyles({ isBack }) {
  return `${styles.account} ${isBack && styles.moveBack}`;
}
function onAnimationEnd() {
  if (!initAuthenticated) {
    return;
  }
  const { putLogIn } = MainStore();
  putLogIn(true);
}
function useSetup() {
  const { initLoggedIn } = MainStore();
  const Auth = useAuth;

  return !initLoggedIn ? <Auth /> : <Contents />;
}

export const useStore = () => {
  const { unmount } = MainStore();

  const [isBack, moveBack] = useState(false);
  initBack = isBack;
  putBack = moveBack;
  useEffect(() => unmount({ set: moveBack, value: false }), [unmount]);
  useEffect(() => {
    initBack = isBack;
  }, [isBack]);

  const [isAuthenticated, authenticate] = useState(false);
  initAuthenticated = isAuthenticated;
  putAuthenticate = authenticate;
  useEffect(() => unmount({ set: authenticate, value: false }), [unmount]);
  useEffect(() => {
    initAuthenticated = isAuthenticated;
  }, [isAuthenticated]);

  return {
    onAnimationEnd,
    Setup: useSetup,
    className: useStyles({ isBack: initBack }),
  };
};
export const useAccountStore = () => ({
  isAccountBack: initBack,
  moveAccountBack: putBack,
  putAuthenticate,
});

import { useEffect, useState } from "react";
import { usePasswordField } from "..";
import { useAuthStore as AuthStore } from "../..";
import { useMainStore } from "../../../../../../..";
import styles from "./style.module.scss";

let initMounted;
let putMount = () => {};
let initShown;
let putShow = () => {};

function useField() {
  const { initUser, changeInput } = AuthStore();
  const { password } = initUser;

  return (
    initMounted && (
      <input
        className={`${styles.password} ${initShown && styles.show}`}
        type="password"
        name="password"
        defaultValue={password}
        onChange={changeInput}
        onTransitionEnd={() => {
          if (initShown) {
            return;
          }
          putMount(false);
        }}
        security="true"
        placeholder="Password"
      />
    )
  );
}

export const useStore = () => {
  const { unmount } = useMainStore();

  const [isMounted, mount] = useState(false);
  initMounted = isMounted;
  putMount = mount;
  useEffect(() => unmount({ set: mount, value: false }), [unmount]);
  useEffect(() => {
    initMounted = isMounted;
  }, [isMounted]);

  const [isShown, show] = useState(false);
  initShown = isShown;
  putShow = show;
  useEffect(() => unmount({ set: show, value: false }), [unmount]);
  useEffect(() => {
    initShown = isShown;
  }, [isShown]);

  useEffect(() => {
    if (!isMounted) {
      return;
    }
    show(true);
  }, [isMounted]);

  return { Field: useField };
};
export const usePasswordFieldStore = () => ({
  initMounted,
  putMount,
  initShown,
  putShow,
  usePasswordField,
});

import { useEffect, useState } from "react";
import { useSignUp } from "..";
import { useAuthStore as AuthStore } from "../..";
import { useMainStore } from "../../../../../../..";
import styles from "./style.module.scss";

let initMounted;
let putMount = () => {};
let initShown;
let putShow = () => {};

function useStyles() {
  return `${styles.signUp} ${initShown && styles.show}`;
}
function onTransitionEnd() {
  if (initShown) {
    return;
  }
  putMount(false);
}
function useField() {
  const { initUser, changeInput } = AuthStore();
  const { email, address, city, postcode, phone } = initUser;
  const className = useStyles();

  return (
    initMounted && (
      <main className={className} onTransitionEnd={onTransitionEnd}>
        <input
          className={styles.email}
          type="email"
          name="email"
          defaultValue={email}
          onChange={changeInput}
          required
          placeholder="Email"
        />
        <input
          className={styles.address}
          type="text"
          name="address"
          defaultValue={address}
          onChange={changeInput}
          required
          placeholder="Address"
        />

        <aside className={styles.group}>
          <input
            className={styles.city}
            type="text"
            name="city"
            defaultValue={city}
            onChange={changeInput}
            required
            placeholder="City"
          />
          <input
            type="text"
            name="postcode"
            defaultValue={postcode}
            onChange={changeInput}
            required
            placeholder="Postcode"
          />
        </aside>

        <input
          type="number"
          name="phone"
          defaultValue={phone}
          onChange={changeInput}
          required
          placeholder="Phone"
        />
      </main>
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

  return { styles, Field: useField };
};
export const useSignUpStore = () => ({
  initMounted,
  putMount,
  initShown,
  putShow,
  useSignUp,
});

import { useEffect, useState } from "react";
import { useAccountStore as AccountStore } from "../..";
import { usePasswordFieldStore as PasswordFieldStore } from "./password-field/utils";
import { useSignUpStore as SignUpStore } from "./sign-up/utils";
import styles from "./style.module.scss";
import profiles from "../../../../../../../public/data/profiles.json";
import { useLogoIconStore as LogoIconStore } from "../../../../../../../public/svgs/logo-icon/utils";
import { useMainStore } from "../../../../..";

let initUser;
let putUser = () => {};
let initButtonTitle;
let putButtonTitle = () => {};

const initProfile = {
  username: "",
  password: "",
  email: "",
  address: "",
  city: "",
  postcode: "",
  phone: "",
};

function submit(event) {
  event.preventDefault();

  const { username: dataName, password: dataPassword } = profiles[0];
  const { putAuthenticate } = AccountStore();
  const { username, password } = initUser;
  const {
    initMounted: isPasswordMounted,
    putMount: mountPassword,
    putShow: showPassword,
  } = PasswordFieldStore();

  if (dataName === username && !isPasswordMounted) {
    putButtonTitle("Sign in");
  } else if (dataName !== username && !isPasswordMounted) {
    const { putMount: mountSignUp } = SignUpStore();
    putButtonTitle("Sign up");
    mountSignUp(true);
  }
  if (dataName === username && dataPassword === password) {
    const { toggleMenu } = LogoIconStore();
    const { putShow: showSignUp } = SignUpStore();

    toggleMenu();
    putUser((old) => ({
      username: old.username,
    }));
    putButtonTitle("Check");
    showSignUp(false);
    showPassword(false);
    putAuthenticate(true);
  }
  mountPassword((old) => {
    if (!old) {
      return true;
    }
    return old;
  });
}
function changeInput({ target: { value, name } }) {
  if (name === "username") {
    const { putShow: showPassword } = PasswordFieldStore();
    const { putShow: showSignUp } = SignUpStore();

    putButtonTitle("Check");
    showPassword(false);
    showSignUp(false);

    putUser((old) => ({
      [name]: old.username,
    }));
  }
  putUser((old) => ({
    ...old,
    [name]: value,
  }));
}

export const useStore = () => {
  const { unmount } = useMainStore();

  const [buttonTitle, setButtonTitle] = useState("Check");
  initButtonTitle = buttonTitle;
  putButtonTitle = setButtonTitle;
  useEffect(() => unmount({ set: setButtonTitle, value: "Check" }), [unmount]);
  useEffect(() => {
    initButtonTitle = buttonTitle;
  }, [buttonTitle]);

  const [user, setUser] = useState(initProfile);
  initUser = user;
  putUser = setUser;
  useEffect(() => unmount({ set: setUser, value: initProfile }), [unmount]);
  useEffect(() => {
    initUser = user;
  }, [user]);

  const { usePasswordField: Password } = PasswordFieldStore();
  const { useSignUp: SignUp } = SignUpStore();

  const { username } = initUser;

  return {
    styles,
    username,
    changeInput,
    Password,
    SignUp,
    submit,
    initButtonTitle,
  };
};
export const useAuthStore = () => ({
  initUser,
  putUser,
  changeInput,
});

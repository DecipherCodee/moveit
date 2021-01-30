import { useStore } from "./utils";

export const useAuth = () => {
  const {
    styles,
    username,
    changeInput,
    Password,
    SignUp,
    submit,
    initButtonTitle,
  } = useStore();

  return (
    <main className={styles.auth}>
      <input
        className={styles.username}
        type="text"
        name="username"
        placeholder="Username"
        required
        defaultValue={username}
        onChange={changeInput}
      />

      <Password />
      <SignUp />

      <button type="submit" className={styles.submit} onClick={submit}>
        {initButtonTitle}
      </button>
    </main>
  );
};

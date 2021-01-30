import { useStore } from "./utils";

export const useSignUp = () => {
  const { Field } = useStore();

  return <Field />;
};

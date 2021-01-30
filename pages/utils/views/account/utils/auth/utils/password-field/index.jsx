import { useStore } from "./utils";

export const usePasswordField = () => {
  const { Field } = useStore();

  return <Field />;
};

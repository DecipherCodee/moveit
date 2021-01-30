import { useStore } from "./utils";

export const useMenu = () => {
  const { contents, className } = useStore();

  return <main className={className}>{contents}</main>;
};

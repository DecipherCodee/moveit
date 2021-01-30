import { useLogoIconStore } from "../../../../../../public/svgs/logo-icon/utils";
import styles from "./style.module.scss";

export const useStore = () => {
  const { useMenuContents, getMenuStyles } = useLogoIconStore();

  return {
    contents: useMenuContents({ styles }),
    className: getMenuStyles({ styles }),
  };
};

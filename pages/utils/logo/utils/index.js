import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useLogo } from "..";
import { useSVGs } from "../../../../public/svgs";
import styles from "./style.module.scss";

let initResized;
let putResize = () => {};

const Menu = dynamic(() => import("./menu").then((mod) => mod.useMenu), {
  ssr: false,
});

function getStyles({ isResized }) {
  return `${styles.logo} ${isResized && styles.resize}`;
}

export const useStore = () => {
  const [isResized, resize] = useState(false);
  initResized = isResized;
  putResize = resize;
  useEffect(() => {
    initResized = isResized;
  }, [isResized]);

  const { useLogoName, useLogoIconStore } = useSVGs();
  const { useLogoIcon } = useLogoIconStore();

  return {
    className: getStyles({ isResized: initResized }),
    styles,
    Name: useLogoName,
    icon: useLogoIcon(),
    Menu,
  };
};
export const useLogoStore = () => ({
  useLogo,
  initResized,
  putResize,
});

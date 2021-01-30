import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLogoIcon } from "..";
import { useSVGs } from "../..";
import { useMainStore as MainStore } from "../../../../pages/utils";
import { useLogoStore as LogoStore } from "../../../../pages/utils/logo/utils";
import { useAccountStore as AccountStore } from "../../../../pages/utils/views/account/utils";
import { useStorageStore as StorageStore } from "../../../../pages/utils/views/storage/utils";
import { useWindowSize } from "../../../../pages/utils/tools/window-size";

import styles from "./style.module.scss";
import { useHeaderStore as HeaderStore } from "../../../../pages/utils/header/utils";
import { usePricingStore as PricingStore } from "../../../../pages/utils/views/pricing/utils";

const iconVariants = {
  normal: {
    scale: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.2, ease: "easeInOut" },
  },
  resized: {
    scale: 0.6,
    filter: "drop-shadow(0 4px 8px rgba(0, 0, 0, 0.4))",
    transition: { duration: 0.4, ease: "easeInOut" },
  },
};

let initDragged;
let putDrag = () => {};
let initResized;
let putResize = () => {};

function useMenuContents({ styles: menuStyles }) {
  const {
    useUserIcon: User,
    useBoxStore,
    useDollarIcon: Pricing,
    useTruckStore,
  } = useSVGs();
  const { useBoxIcon: Store } = useBoxStore();
  const { useTruckIcon: Collect } = useTruckStore();

  return (
    initResized && (
      <>
        <div className={menuStyles.separator} />
        <User />
        <div className={menuStyles.separator} />
        <Pricing />
        <div className={menuStyles.separator} />
        <Store />
        <div className={menuStyles.separator} />
        <Collect />
        <div className={menuStyles.separator} />
      </>
    )
  );
}
function getMenuStyles({ styles: menuStyles }) {
  return `${menuStyles.menu} ${initResized && menuStyles.show}`;
}
function useFrame() {
  const { frame } = styles;

  return (
    <svg
      className={frame}
      viewBox="0 0 430 449"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m255.066871 10.5200092c16.226679 9.3066741 27.280021 25.0133533 36.506695 40.8400327 10.133342 18.2133479 18.200015 37.4933633 25.786688 56.8800451 30.773358 80.160064 60.813382 160.600129 91.200073 240.90686 4.400003 11.706676 9.066674 23.746685 8.760007 36.480029-.013334 15.973346-7.986673 32.426692-22.080018 40.546699-9.106674 5.453338-19.386682 9.506674-30.160024 9.333341-80.773398 1.306667-161.573463.866667-242.360194.466667-24.0400191-.2-48.0800383-.440001-72.1200575-.960001-24.3600195-.2-47.06670434-20.186683-49.78670652-44.520036-.94666742-7.333339.25333354-14.746678 2.56000205-21.706684 7.37333927-22.773351 15.98667947-45.120036 24.30668607-67.560054 20.0800161-53.733376 39.6666984-107.653419 59.9067146-161.333462 11.6533427-29.640024 21.6533503-60.1600481 37.4533633-87.946737 7.053339-12.3866766 15.493346-24.226686 26.413354-33.5200268 11.52001-9.80000784 26.080021-15.70667923 41.0667-17.40001391 21.05335-2.13333504 43.746702-1.30666771 62.546717 9.49334091z"
        fillRule="evenodd"
        strokeWidth={12}
        transform="translate(6 6)"
      />
    </svg>
  );
}
function useDrone() {
  const { drone } = styles;

  return (
    <svg
      className={drone}
      viewBox="216.48 194.1 157.37 154.57"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m220.73 194.1c2.31 1.01 4.72 1.89 6.77 3.4 4.12 3.29 6.72 8 10.27 11.82 2.23 2.48 6.09 2.68 9.11 1.82 5.77-4.88 10.08-12.16 17.84-14.2.38.28 1.15.83 1.53 1.1-2.51 6.11-7.6 10.52-12.44 14.77-1.79 1.7-4.23 3.8-3.39 6.58 1.28 4.54 5.33 7.47 8.64 10.54 6.3 5.48 13.02 10.5 20.08 14.97 5.36 3.83 11.86-.44 17.74.78 4.34.24 9.15 3.46 13.17.53 8.01-5.2 15.87-10.71 23.07-17.01 1.91-1.76 3.93-3.55 5.13-5.9.94-2.6.85-5.43 1.12-8.14-6.76-5.14-14.04-10.54-17.19-18.75 4.74 1.59 9.26 3.96 12.89 7.46 3.81 3.26 7.46 7.88 12.96 7.8 5.44 0 8.51-5.23 12.31-8.32 3.08-3.22 7.27-4.85 11.53-5.82-1.64 3.01-3.13 6.19-5.54 8.68-2.78 2.98-6.15 5.32-8.99 8.22-3.31 2.86-1.96 8.44 1.28 10.84 5.76 4.8 12.17 9.3 15.23 16.44-3.79-1.08-7.68-2.28-10.73-4.89-3.85-2.84-6.85-6.86-11.24-8.91-4.6-1.27-8.53 2.34-11.59 5.28-7.14 7.28-14.09 14.93-19.45 23.65-2.84 4.34-.04 9.41-.06 14.09.58 5.68-2.82 11.72.32 17.04 4.61 8.03 10.66 15.14 16.65 22.16 3.01 3.53 7.28 6.99 12.24 6.05 4.53-1.82 7.27-6.2 10.8-9.36 2.89-3.08 6.77-4.88 10.61-6.46-1.41 3.14-2.82 6.35-5.03 9.04-2.89 3.72-6.75 6.54-9.71 10.21-2.32 2.61-2.51 7.06.02 9.6 2.74 2.98 6.13 5.27 8.92 8.21 2.57 2.61 4.36 5.85 6.16 9.02-5.22-1.66-10.45-3.84-14.34-7.82-3.04-2.65-5.78-7.02-10.42-6.24-5.42.12-8.79 4.86-12.29 8.33-3.1 3.51-7.11 6.01-11.34 7.96 1.13-3.65 2.34-7.43 5.02-10.26 2.99-3.7 7.33-6.22 9.77-10.36 1.15-3.53-1.48-6.95-3.62-9.52-5.84-6.24-12.43-11.75-19.28-16.86-2.56-1.73-5.11-3.89-8.25-4.39-5.7.18-11.3 2.54-17.04 1.31-4.04-.41-8.57-2.58-12.28.05-5.5 3.41-10.43 7.65-15.55 11.58-4.12 3.46-8.92 6.73-11.03 11.89-.76 2.24-1.5 5.34.52 7.16 3.41 3.31 7.5 5.9 10.58 9.55 2.07 2.38 3.26 5.34 4.62 8.14-3.92-1.33-7.8-3.05-10.84-5.94-4.38-3.75-8.63-9.08-15.02-8.69-3.97-.35-6.51 3.14-9.14 5.51-3.98 3.72-8.35 8.01-14.14 8.19 2.3-7.16 8.85-11.5 14.04-16.47 2.58-2.17 3.26-6.13 2.06-9.18-2.27-2.82-5.43-4.72-8.04-7.19-3.8-3.31-6.74-7.45-9.27-11.77 2.31.67 4.72 1.1 6.9 2.15 5.49 3.04 9.13 8.39 14.13 12.05 2.72 2.09 6.09-.1 8.42-1.75 7.09-5.63 12.51-13.03 17.63-20.42 1.92-3.04 4.28-6.07 4.76-9.72-.02-3.62-1.08-7.14-1.14-10.75-.26-5.17 1.56-10.1 3.04-14.96-5.74-8.81-12.1-17.23-19.47-24.76-3.12-3.44-7.71-6.87-12.62-5.14-3.8 2.05-6.31 5.75-9.48 8.59-3.11 3.19-7.17 5.14-11.27 6.72 1.69-4.03 3.67-8.06 6.96-11.05 3.95-4.21 9.8-7.95 9.93-14.36.47-4.39-3.32-7.39-5.81-10.46-3.65-3.78-6.08-8.51-7.73-13.46m20.55 23.94c-.4.74-1.19 2.21-1.59 2.95 1.9-.47 3.97-.8 5.32-2.37-.94-.15-2.8-.44-3.73-.58m103.84.87c.26.52.79 1.56 1.05 2.08.65-.06 1.95-.18 2.6-.25.01-.71.04-2.12.05-2.83-1.24.33-2.47.66-3.7 1m-104.42 106.98c.75 0 2.23.01 2.98.02-.01-1.66-.35-3.31-.67-4.92-.97 1.52-1.86 3.13-2.31 4.9m104.36-2.59c.02.6.06 1.8.08 2.39.7-.01 2.11-.05 2.81-.07 0-.58-.02-1.73-.02-2.31-.72 0-2.16-.01-2.87-.01z"
        fillRule="evenodd"
      />
    </svg>
  );
}
function getWrapperStyles({ isDragged }) {
  const { wrapper, drag } = styles;
  return `${wrapper} ${isDragged && drag}`;
}
function reduceSize({ isResized, isDragged, drag }) {
  if (!isResized || isDragged) {
    return;
  }
  drag(true);
}
function getNearestElement({ clientX, clientY }) {
  if (!initDragged) {
    return;
  }
  const nearestElements = document.elementsFromPoint(clientX, clientY);

  if (!nearestElements.length > 0) {
    return;
  }
  nearestElements.forEach((element) => {
    const { putScene } = MainStore();

    if (element.closest(".account")) {
      putScene("account");
    }
    if (element.closest(".storage")) {
      putScene("storage");
    }
    if (element.closest(".collection")) {
      putScene("collection");
    }
    if (element.closest(".pricing")) {
      putScene("pricing");
    }
  });
}
function toggleMenu() {
  const { moveAccountBack } = AccountStore();
  const { putBack: moveStorage } = StorageStore();
  const { putBack: movePricing } = PricingStore();
  const { initView, putView, initScene } = MainStore();
  const { putResize: resizeLogo } = LogoStore();
  const { putShow: showHeader } = HeaderStore();

  if (initResized) {
    moveAccountBack(true);
    moveStorage(true);
    movePricing(true);
  }
  if (initResized) {
    showHeader(true);
  }
  if (initScene === "home" || !initResized) {
    showHeader(false);
  }
  if (initView === "account") {
    moveAccountBack((old) => !old);
  } else if (initView === "storage") {
    moveStorage((old) => !old);
  } else if (initView === "pricing") {
    movePricing((old) => !old);
  }
  putResize((old) => {
    if (initScene === "home") {
      resizeLogo(false);
      return !old;
    }
    if (old) {
      resizeLogo(true);
    }
    if (!old) {
      resizeLogo(false);
    }
    return !old;
  });
  putView(initScene);
}
function increaseSize({ drag }) {
  drag(false);
}
function onMouseMove({ clientX, clientY }) {
  getNearestElement({ clientX, clientY });
}
function onTouchMove({ clientX, clientY }) {
  getNearestElement({ clientX, clientY });
}
function getIconAnimation({ isResized }) {
  return isResized ? "resized" : "normal";
}
function onDragEnd({ drag }) {
  drag(false);
}

export const useStore = () => {
  const [isResized, resize] = useState(false);
  initResized = isResized;
  putResize = resize;
  useEffect(() => {
    initResized = isResized;
  }, [isResized]);

  const [isDragged, drag] = useState(false);
  initDragged = isDragged;
  putDrag = drag;
  useEffect(() => {
    initDragged = isDragged;
  }, [isDragged]);

  const [appWidth] = useWindowSize();
  const { appRef } = MainStore();

  return {
    wrapperStyles: getWrapperStyles({ isDragged }),
    appRef,
    onDragEnd: onDragEnd.bind(null, { drag: putDrag }),
    reduceSize: reduceSize.bind(null, {
      isResized: initResized,
      isDragged: initDragged,
      drag: putDrag,
    }),
    animateIcon: getIconAnimation({ isResized: initResized }),
    styles,
    Frame: useFrame,
    Drone: useDrone,
    motion,
    onClick: toggleMenu,
    iconVariants,
    dragSetup: initResized && appWidth < 767 ? "x" : initResized && "y",
  };
};
export const useLogoIconStore = () => ({
  useLogoIcon,
  initResized,
  putResize,
  initDragged,
  putDrag,
  useMenuContents,
  getMenuStyles,
  onMouseMove,
  onTouchMove,
  toggleMenu,
});

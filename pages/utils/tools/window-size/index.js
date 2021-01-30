import { useEffect, useState } from "react";
import { useLogoIconStore as LogoIconStore } from "../../../../public/svgs/logo-icon/utils";

function updateSize({ setSize }) {
  setSize([window.innerWidth, window.innerHeight]);
}
function getListener({ event, setSize }) {
  window[event]("resize", () => {
    if (event === "addEventListener") {
      const { putResize } = LogoIconStore();
      putResize((old) => !old);
    }
    updateSize({ setSize });
  });
}
function getWindowSize({ setSize }) {
  getListener({ event: "addEventListener", setSize });

  updateSize({ setSize });

  return () => getListener({ event: "removeEventListener", setSize });
}

export const useWindowSize = () => {
  const [size, setSize] = useState([0, 0]);

  useEffect(() => getWindowSize({ setSize }), []);

  return size;
};

import { useEffect, useState } from "react";

function callObserver({ ref, observer, action }) {
  if (!ref?.current) {
    return;
  }
  observer[action](ref?.current);
}
function setDisplay({ setVisible }) {
  return ([entry]) => setVisible(entry.isIntersecting);
}
function getObserver({ setVisible, options, ref }) {
  const observer = new IntersectionObserver(
    setDisplay({ setVisible }),
    options
  );
  callObserver({ ref, observer, action: "observe" });

  return () => callObserver({ ref, observer, action: "unobserve" });
}

export const useViewport = ({ ref, options }) => {
  const [isVisible, setVisible] = useState(false);

  useEffect(() => getObserver({ setVisible, options, ref }), [
    setVisible,
    ref,
    options,
  ]);

  return { isVisible };
};

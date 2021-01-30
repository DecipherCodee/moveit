import { motion, useAnimation } from "framer-motion";
import dynamic from "next/dynamic";
import styles from "./style.module.scss";

let controls = () => {};
let children = { Header: () => <></>, Body: () => <></> };
const putChildren = ({ Header, Body }) => {
  const { Header: CHeader, Body: CBody } = children;

  children = {
    Header: !Header ? CHeader : Header,
    Body: !Body ? CBody : Body,
  };
};

const useBottomSheet = dynamic(
  () => import("..").then((mod) => mod.useBottomSheet),
  { ssr: false }
);
const dragConstraints = { top: 0, bottom: 0 };
const variants = {
  hidden: {
    top: "94%",
    y: 0,
    transition: { type: "spring", damping: 40, stiffness: 400 },
  },
  200: {
    top: "70vh",
    y: 0,
    transition: { type: "spring", damping: 40, stiffness: 400, ease: "easeIn" },
  },
  half: {
    top: "50vh",
    y: 0,
    transition: { type: "spring", damping: 40, stiffness: 400, ease: "easeIn" },
  },
  full: {
    top: "54px",
    y: 0,
    transition: { type: "spring", damping: 40, stiffness: 400, ease: "easeIn" },
  },
};

function onDragEnd(_, info) {
  const {
    point: { y },
  } = info;
  if (y < 250) {
    controls.start("full");
    return;
  }
  if (y < 600) {
    controls.start("half");
    return;
  }
  controls.start("hidden");
}

export const useStore = () => {
  const { Header, Body } = children;
  controls = useAnimation();

  return {
    Header,
    Body,
    onDragEnd,
    variants,
    controls,
    styles,
    motion,
    dragConstraints,
  };
};
export const useBottomSheetStore = () => ({
  putChildren,
  useBottomSheet,
});

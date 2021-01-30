import { createRef, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useLogoStore as LogoStore } from "./logo/utils";
import { useHeader } from "./header";

let initView;
let putView = () => {};
let initScene;
let putScene = () => {};
let initLoggedIn;
let putLogIn = () => {};

const appRef = createRef();
const Account = dynamic(
  () => import("./views/account").then((mod) => mod.useAccount),
  { ssr: false }
);
const Storage = dynamic(
  () => import("./views/storage").then((mod) => mod.useStorage),
  { ssr: false }
);
const Pricing = dynamic(
  () => import("./views/pricing").then((mod) => mod.usePricing),
  { ssr: false }
);

function getView({ query }) {
  const views = {
    account: <Account />,
    pricing: <Pricing />,
    storage: <Storage />,
  };
  return views[query];
}
function unmount({ set, value }) {
  return () => set(value);
}

export const useStore = () => ({
  view: getView({ query: String(initView).toLowerCase() }),
  Header: useHeader,
});
export const useAppStore = () => {
  const [view, setView] = useState("home");
  initView = view;
  putView = setView;
  useEffect(() => {
    initView = view;
  }, [view]);

  const [scene, setScene] = useState("home");
  initScene = scene;
  putScene = setScene;
  useEffect(() => {
    initScene = scene;
  }, [scene]);

  const [isLoggedIn, logIn] = useState(true);
  initLoggedIn = isLoggedIn;
  putLogIn = logIn;
  useEffect(() => unmount({ set: logIn, value: false }), []);
  useEffect(() => {
    initLoggedIn = isLoggedIn;
  }, [isLoggedIn]);

  const { useLogo } = LogoStore();

  return {
    appRef,
    Logo: useLogo,
  };
};
export const useMainStore = () => ({
  appRef,
  initView,
  putView,
  initScene,
  putScene,
  putLogIn,
  initLoggedIn,
  unmount,
});

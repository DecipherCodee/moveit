import "./style.scss";
import { useAppStore } from "./utils";

export const useApp = ({ Component, pageProps }) => {
  const { Logo, appRef } = useAppStore();

  return (
    <main id="app" ref={appRef}>
      <Logo />
      <Component {...pageProps} />
    </main>
  );
};

export default useApp;

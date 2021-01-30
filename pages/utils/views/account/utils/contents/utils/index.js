import { useSVGs as SVGs } from "../../../../../../../public/svgs";
import styles from "./style.module.scss";

function useSection({ className, header }) {
  let Contents = () => <></>;

  if (header === "Stored") {
    const { useBoxStore: BoxStore } = SVGs();
    const { useBoxShadow: BoxShadow } = BoxStore();
    Contents = BoxShadow;
  } else if (header === "Collected") {
    const { useTruckStore: TruckStore } = SVGs();
    const { useTruckShadow: TruckShadow } = TruckStore();
    Contents = TruckShadow;
  }

  return (
    <section className={`${styles.section} ${styles[className]}`}>
      <header className={styles.header}>{header}</header>

      <Contents />
    </section>
  );
}

export const useStore = () => {
  const { useDecipherCodeLogo } = SVGs();

  return { Section: useSection, styles, DecipherCodeLogo: useDecipherCodeLogo };
};

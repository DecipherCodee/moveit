import { useEffect, useState } from "react";
import { useMainStore } from "../../..";
import { useSVGs as SVGs } from "../../../../../public/svgs";
import { useBottomSheetStore } from "../../../bottom-sheet/utils";
import styles from "./style.module.scss";

let initBack;
let putBack = () => {};

function useStyles({ isBack }) {
  return `${styles.pricing} ${isBack && styles.moveBack}`;
}
function useCard({ buttonTitle, Icon, iconSize, cardName }) {
  return (
    <button type="button" className={styles.button}>
      <Icon size={iconSize} />
      <header className={styles.name}>{cardName}</header>
      <p className={styles.quote}>{buttonTitle}</p>
    </button>
  );
}
function useSection({ className, header, children }) {
  const Card = useCard;
  let Contents = () => <>{children}</>;
  const { cost } = styles;

  if (header === "Boxes") {
    const { useBoxStore: BoxStore } = SVGs();
    const { useBoxIcon: BoxIcon } = BoxStore();

    Contents = () => (
      <aside className={styles.aside}>
        <Card
          buttonTitle="From £15"
          iconSize="5rem"
          cardName="Small"
          Icon={BoxIcon}
        />
        <Card
          buttonTitle="From £20"
          iconSize="7rem"
          cardName="Medium"
          Icon={BoxIcon}
        />
        <Card
          buttonTitle="From £25"
          iconSize="9rem"
          cardName="Large"
          Icon={BoxIcon}
        />
      </aside>
    );
  } else if (header === "Suitcases") {
    const { useSuitcaseIcon: SuitcaseIcon } = SVGs();

    Contents = () => (
      <aside className={styles.aside}>
        <Card
          buttonTitle="From £15"
          iconSize="5rem"
          cardName="Small"
          Icon={SuitcaseIcon}
        />
        <Card
          buttonTitle="From £20"
          iconSize="7rem"
          cardName="Medium"
          Icon={SuitcaseIcon}
        />
        <Card
          buttonTitle="From £25"
          iconSize="9rem"
          cardName="Large"
          Icon={SuitcaseIcon}
        />
      </aside>
    );
  }

  return (
    <section className={!className ? cost : className}>
      <header className={styles.header}>{header}</header>

      <Contents />
    </section>
  );
}

export const useStore = () => {
  const { unmount } = useMainStore();
  const { putChildren, useBottomSheet } = useBottomSheetStore();

  putChildren({
    Body: () => (
      <main style={{ height: "80vh", overflowY: "scroll" }}>
        <div
          style={{
            height: "40vh",
            width: "100%",
            background: "green",
            marginBottom: "1rem",
          }}
        />
        <div
          style={{
            height: "40vh",
            width: "100%",
            background: "green",
            marginBottom: "1rem",
          }}
        />
        <div
          style={{
            height: "40vh",
            width: "100%",
            background: "green",
            marginBottom: "1rem",
          }}
        />
        <div
          style={{
            height: "40vh",
            width: "100%",
            background: "green",
            marginBottom: "1rem",
          }}
        />
      </main>
    ),
  });

  const [isBack, moveBack] = useState(false);
  initBack = isBack;
  putBack = moveBack;
  useEffect(() => unmount({ set: moveBack, value: false }), [unmount]);
  useEffect(() => {
    initBack = isBack;
  }, [isBack]);

  return {
    BottomSheet: useBottomSheet,
    className: useStyles({ isBack: initBack }),
    Section: useSection,
  };
};
export const usePricingStore = () => ({
  initBack,
  putBack,
});

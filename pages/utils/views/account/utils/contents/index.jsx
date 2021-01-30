import { useStore } from "./utils";

export const useContents = () => {
  const { Section, styles, DecipherCodeLogo } = useStore();

  return (
    <main className={styles.contents}>
      <Section header="Profile" />
      <Section header="Stored" />
      <Section header="Collected" />

      <DecipherCodeLogo />
    </main>
  );
};

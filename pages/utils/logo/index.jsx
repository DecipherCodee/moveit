import { useStore } from "./utils";

export const useLogo = () => {
  const { styles, Name, icon, Menu, className } = useStore();

  return (
    <main className={className}>
      <Name />

      <aside className={styles.menuWrapper}>
        {icon}
        <Menu />
      </aside>
    </main>
  );
};

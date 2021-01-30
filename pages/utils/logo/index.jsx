import { useStore } from "./utils";

export const useLogo = () => {
  const { styles, Name, icon, Menu, onMouseMove, className } = useStore();

  return (
    <main className={className}>
      <Name />

      <aside className={styles.menuWrapper} onMouseMove={onMouseMove}>
        {icon}
        <Menu />
      </aside>
    </main>
  );
};

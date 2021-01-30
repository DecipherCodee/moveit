import { useStore } from "./utils";

export const useLogoIcon = () => {
  const {
    styles,
    Frame,
    Drone,
    motion,
    onClick,
    iconVariants,
    onDragStart,
    onDragEnd,
    animateIcon,
    wrapperStyles,
    appRef,
    dragSetup,
    onDrag,
  } = useStore();

  return (
    <motion.main
      variants={iconVariants}
      drag={dragSetup}
      dragConstraints={appRef}
      initial="normal"
      animate={animateIcon}
      className={styles.logoIcon}
      onClick={onClick}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      onDrag={onDrag}
    >
      <aside className={wrapperStyles}>
        <Frame />
        <Drone />
      </aside>
    </motion.main>
  );
};

import { useStore } from "./utils";

export const useLogoIcon = () => {
  const {
    styles,
    Frame,
    Drone,
    motion,
    onClick,
    iconVariants,
    reduceSize,
    onDragEnd,
    animateIcon,
    wrapperStyles,
    appRef,
    dragSetup,
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
      onMouseDown={reduceSize}
      onDragEnd={onDragEnd}
      onTouchStart={reduceSize}
    >
      <aside className={wrapperStyles}>
        <Frame />
        <Drone />
      </aside>
    </motion.main>
  );
};

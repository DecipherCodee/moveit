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
    increaseSize,
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
      onMouseUp={increaseSize}
      onTouchStart={reduceSize}
      onTouchEnd={increaseSize}
    >
      <aside className={wrapperStyles}>
        <Frame />
        <Drone />
      </aside>
    </motion.main>
  );
};

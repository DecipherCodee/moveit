import { useStore } from "./utils";

export const useBottomSheet = () => {
  const {
    styles: { bottomSheet },
    motion,
    dragConstraints,
    controls,
    variants,
    onDragEnd,
    Header,
    Body,
  } = useStore();

  return (
    <motion.main
      className={bottomSheet}
      variants={variants}
      initial="hidden"
      animate={controls}
      drag="y"
      dragConstraints={dragConstraints}
      dragElastic={0.9}
      onDragEnd={onDragEnd}
    >
      <Header />
      <Body />
    </motion.main>
  );
};

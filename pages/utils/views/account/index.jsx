import { useStore } from "./utils";

export const useAccount = () => {
  const { className, Setup, onAnimationEnd } = useStore();

  return (
    <main className={className} onAnimationEnd={onAnimationEnd}>
      <Setup />
    </main>
  );
};

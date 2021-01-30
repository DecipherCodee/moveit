import { useStore } from "./utils";

export const usePricing = () => {
  const { className, Section, BottomSheet } = useStore();

  return (
    <main className={className}>
      <Section header="Boxes" />
      <Section header="Suitcases" />
      <BottomSheet />
    </main>
  );
};

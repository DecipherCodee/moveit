import { useStore } from "./utils";

export const useStorage = () => {
  const { className, Map, BottomSheet } = useStore();

  return (
    <main className={className}>
      <Map />
      <BottomSheet />
    </main>
  );
};

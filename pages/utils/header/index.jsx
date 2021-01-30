import { useStore } from "./utils";

export const useHeader = () => {
  const {
    className,
    scene,
    styles: { contents },
  } = useStore();

  return (
    <main className={className}>
      <div className={contents}>
        <p>{scene}</p>
      </div>
    </main>
  );
};

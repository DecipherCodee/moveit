import { useStore } from "./utils";

export const useView = () => {
  const { view, Header } = useStore();

  return (
    <>
      <Header />
      {view}
    </>
  );
};

export default useView;

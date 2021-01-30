import dynamic from "next/dynamic";
import { useLogoIconStore } from "./logo-icon/utils";

const useLogoName = dynamic(() =>
  import("./logo-name").then((mod) => mod.useLogoName)
);
const useSuitcaseIcon = dynamic(
  () => import("./suitcase-icon").then((mod) => mod.useSuitcase),
  { ssr: false }
);
const useUserIcon = dynamic(
  () => import("./user-icon").then((mod) => mod.useUserIcon),
  { ssr: false }
);
const useDollarIcon = dynamic(
  () => import("./dollar-icon").then((mod) => mod.useDollarIcon),
  { ssr: false }
);
const useSearch = dynamic(
  () => import("./search-icon").then((mod) => mod.useSearch),
  { ssr: false }
);
const useDecipherCodeLogo = dynamic(
  () => import("./DecipherCode-logo").then((mod) => mod.useDecipherCodeLogo),
  { ssr: false }
);
const useTruckIcon = dynamic(
  () => import("./truck-icon").then((mod) => mod.useTruckIcon),
  { ssr: false }
);
const useTruckShadow = dynamic(
  () => import("./truck-icon/utils/shadow").then((mod) => mod.useShadow),
  { ssr: false }
);
const useBoxIcon = dynamic(
  () => import("./box-icon").then((mod) => mod.useBoxIcon),
  { ssr: false }
);
const useBoxShadow = dynamic(
  () => import("./box-icon/utils/shadow").then((mod) => mod.useShadow),
  { ssr: false }
);

function useTruckStore() {
  return {
    useTruckIcon,
    useTruckShadow,
  };
}
function useBoxStore() {
  return {
    useBoxIcon,
    useBoxShadow,
  };
}

export const useSVGs = () => ({
  useSuitcaseIcon,
  useDecipherCodeLogo,
  useDollarIcon,
  useUserIcon,
  useLogoIconStore,
  useLogoName,
  useBoxStore,
  useTruckStore,
  useSearch,
});

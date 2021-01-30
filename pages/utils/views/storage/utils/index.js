import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import styles from "./style.module.scss";
import { useSVGs } from "../../../../../public/svgs";
import { useMainStore } from "../../..";
import { useBottomSheetStore } from "../../../bottom-sheet/utils";

let initBack;
let putBack = () => {};
let initMap;
const putMap = ({ map }) => {
  if (initMap) {
    return;
  }
  initMap = map;
};
let initSearched;
let putSearch = () => {};
let putValue = () => {};
let removeSuggestions = () => {};

const Map = dynamic(() => import("./map").then((mod) => mod.useMap), {
  ssr: false,
});

function getClassName({ isBack }) {
  return `${styles.storage}  ${isBack && styles.moveBack}`;
}
function changeLocation({ target: { value: inputValue } }) {
  putSearch(() => !!inputValue);
  putValue(inputValue);
}

async function locateAddress({ target: { innerText: address } }) {
  putValue(address, false);
  removeSuggestions();

  try {
    const result = await getGeocode({ address });
    const { lat, lng } = await getLatLng(result[0]);

    if (lat && lng) {
      initMap.setView([lat, lng], 14);
    }
  } catch (error) {
    alert("Error fecthing address -", error);
  }
}
function getAddresses({ status, isSearched, data }) {
  return (
    status === "OK" &&
    isSearched &&
    data.map(({ place_id: id, description }) => (
      <li
        aria-hidden="true"
        onClick={locateAddress}
        key={id + description}
        className={styles.address}
      >
        {description}
      </li>
    ))
  );
}

export const useStore = () => {
  const { unmount } = useMainStore();

  const [isBack, moveBack] = useState(false);
  initBack = isBack;
  putBack = moveBack;
  useEffect(() => unmount({ set: moveBack, value: false }), [unmount]);
  useEffect(() => {
    initBack = isBack;
  }, [isBack]);

  const [isSearched, search] = useState(false);
  initSearched = isSearched;
  putSearch = search;
  useEffect(() => unmount({ set: search, value: false }), [unmount]);
  useEffect(() => {
    initSearched = isSearched;
  }, [isSearched]);

  const {
    ready,
    value,
    suggestions: { status, data },
    clearSuggestions,
    setValue,
  } = usePlacesAutocomplete({
    requestOptions: {
      location: { lat: () => 52.3555, lng: () => -1.3 },
      radius: 200 * 1000,
    },
  });
  putValue = setValue;
  removeSuggestions = clearSuggestions;

  const {
    useSearch: SearchIcon,
    useDecipherCodeLogo: DecipherCodeLogo,
  } = useSVGs();

  const { useBottomSheet, putChildren } = useBottomSheetStore();

  putChildren({
    Body: () => (
      <section className={styles.sheet}>
        <SearchIcon />

        <ul className={styles.search}>
          <input
            className={styles.location}
            value={value}
            name="address"
            placeholder="Location"
            type="text"
            onChange={changeLocation}
            disabled={!ready}
          />

          <aside className={styles.lists}>
            <p className={styles.header}>Find Nearby</p>

            {getAddresses({ status, isSearched: initSearched, data })}

            <div className={styles.body}>
              <aside>
                <header>The Big Yellow Storage Company</header>
                <p>1 New Elm Road</p>
                <p>Open Now · 09:00 — 21:00</p>
              </aside>
            </div>
            <div className={styles.body}>
              <aside>
                <header>Safe Store</header>
                <p>1 Russell Street Kelham Island</p>
                <p>Open Now · 09:00 — 21:00</p>
              </aside>
            </div>

            <DecipherCodeLogo />
          </aside>
        </ul>
      </section>
    ),
  });

  return {
    BottomSheet: useBottomSheet,
    Map,
    className: getClassName({ isBack: initBack }),
  };
};
export const useStorageStore = () => ({
  initBack,
  putBack,
  initMap,
  putMap,
});

import { MapContainer, TileLayer, useMap as Map, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import styles from "./style.module.scss";
import { useStorageStore } from "../..";
import storageData from "../../../../../../../public/data/storage.json";

const icon = new Icon({
  iconUrl: "/svgs/package.svg",
  iconSize: [25, 25],
});
const maptilerApiKey = process.env.NEXT_PUBLIC_MAPTILER_API_KEY;
const url = `https://api.maptiler.com/maps/bright/256/{z}/{x}/{y}@2x.png?key=${maptilerApiKey}`;
const attribution =
  '&copy; <a href="https://www.maptiler.com/">MapTiler</a> &copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors';
const center = [52.3555, -1.3];
let map;

function MapEffect() {
  const { putMap } = useStorageStore();

  if (!map) {
    map = Map();
    putMap({ map });
  }
  return <></>;
}
function useMarker() {
  return storageData.map((store) =>
    store.location[0].places.map(
      ({ postcode, coordinates: { latitude, longitude } }) => (
        <Marker key={postcode} position={[latitude, longitude]} icon={icon} />
      )
    )
  );
}

export const useStore = () => ({
  MapEffect,
  url,
  attribution,
  styles,
  center,
  MapContainer,
  TileLayer,
  Marker: useMarker,
});

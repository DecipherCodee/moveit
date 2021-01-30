import { useStore } from "./utils";

export const useMap = () => {
  const {
    url,
    attribution,
    styles,
    center,
    MapContainer,
    TileLayer,
    MapEffect,
    Marker,
  } = useStore();

  return (
    <MapContainer
      className={styles.map}
      center={center}
      zoom={7}
      zoomControl={false}
      attributionControl={false}
      minZoom={6}
    >
      <MapEffect />
      <TileLayer url={url} attribution={attribution} />
      <Marker />
    </MapContainer>
  );
};

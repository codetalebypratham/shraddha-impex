import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MAP = () => {
  const position: [number, number] = [23.006491331804217, 72.60161645410862];

  return (
    <div className="w-full h-[500px]">
      <MapContainer
        center={position}
        zoom={16}
        scrollWheelZoom={false}
        className="w-full h-full"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={position}>
          <Popup>
            Our office is located here. <br /> 1234 Street Name, City, Country
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MAP;

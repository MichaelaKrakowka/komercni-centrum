import React from "react";
import "./Map.css";

import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const mapContainer = {
  width: "300px",
  height: "300px",
};

const komenskehoPointer = {
  lat: 49.90369,
  lng: 18.35689,
};

const kostelniPointer = {
  lat: 49.90416,
  lng: 18.35665,
};

export const Map = () => {
  return (
    <section id="map">
      <h2 className="secondary_heading">Kde nás najdete</h2>

      <div className="addressSection">
        <div>
          <p>Komenského 554</p>
          <p>735 81 Nový Bohumín 1</p>
        </div>

        <div>
          <p>Kostelní 336</p>
          <p>735 81 Bohumín 1</p>
        </div>
      </div>
      <div className="mapSection">
        <LoadScript
          googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
          <GoogleMap
            mapContainerStyle={mapContainer}
            center={kostelniPointer}
            zoom={16}>
            <Marker
              position={komenskehoPointer}
              onClick={() =>
                window.open(
                  `https://www.google.com/maps?q=${komenskehoPointer.lat},${komenskehoPointer.lng}`,
                  "_blank"
                )
              }
            />
            <Marker
              position={kostelniPointer}
              onClick={() =>
                window.open(
                  `https://www.google.com/maps?q=${kostelniPointer.lat},${kostelniPointer.lng}`,
                  "_blank"
                )
              }
            />
          </GoogleMap>
        </LoadScript>
      </div>
    </section>
  );
};

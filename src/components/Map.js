import "./Map.css";
import { RevealSection } from "./RevealSection";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const mapContainer = {
  width: "100%",
  height: "100%",
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
      <RevealSection>
        <h2 className="secondary_heading  fade_item delay_0">
          Kde nás najdete
        </h2>

        <div className="addressContainer">
          <div className="addressSection fade_item delay_1">
            <div className="address_paragraph">
              <p>KOMERČNÍ CENTRUM</p>
              <p>Komenského 554</p>
              <p>735 81 Bohumín 1</p>
            </div>

            <div className="address_paragraph">
              <p>KOMERČNÍ CENTRUM</p>
              <p>Kostelní 336</p>
              <p>735 81 Bohumín 1</p>
            </div>
          </div>
          <div className="mapSection fade_item delay_2">
            <LoadScript
              googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
              <GoogleMap
                mapContainerStyle={mapContainer}
                center={kostelniPointer}
                zoom={16}>
                <Marker
                  position={komenskehoPointer}
                  title="KOMERČNÍ CENTRUM Komenského 554"
                  onClick={() =>
                    window.open(
                      `https://www.google.com/maps?q=${komenskehoPointer.lat},${komenskehoPointer.lng}`,
                      "_blank"
                    )
                  }
                />
                <Marker
                  position={kostelniPointer}
                  title="KOMERČNÍ CENTRUM Kostelní 363"
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
        </div>
      </RevealSection>
    </section>
  );
};

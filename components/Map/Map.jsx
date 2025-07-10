import { GoogleMap, Marker } from "@react-google-maps/api";
import { useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 51.545, // Replace with Daydream's lat
  lng: -0.027, // Replace with Daydream's lng
};

const markerPosition = {
  lat: 51.545, // Replace with Daydream's lat
  lng: -0.022, // Replace with Daydream's lng
};

// Paste your Snazzy Maps style here:
const mapStyles = [
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [
      {
        hue: "#165c64",
      },
      {
        saturation: 34,
      },
      {
        lightness: -69,
      },
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "landscape",
    elementType: "geometry",
    stylers: [
      {
        hue: "#b7caaa",
      },
      {
        saturation: -14,
      },
      {
        lightness: -18,
      },
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "landscape.man_made",
    elementType: "all",
    stylers: [
      {
        hue: "#cbdac1",
      },
      {
        saturation: -6,
      },
      {
        lightness: -9,
      },
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [
      {
        hue: "#8d9b83",
      },
      {
        saturation: -89,
      },
      {
        lightness: -12,
      },
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [
      {
        hue: "#d4dad0",
      },
      {
        saturation: -88,
      },
      {
        lightness: 54,
      },
      {
        visibility: "simplified",
      },
    ],
  },
  {
    featureType: "road.arterial",
    elementType: "geometry",
    stylers: [
      {
        hue: "#bdc5b6",
      },
      {
        saturation: -89,
      },
      {
        lightness: -3,
      },
      {
        visibility: "simplified",
      },
    ],
  },
  {
    featureType: "road.local",
    elementType: "geometry",
    stylers: [
      {
        hue: "#bdc5b6",
      },
      {
        saturation: -89,
      },
      {
        lightness: -26,
      },
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "geometry",
    stylers: [
      {
        hue: "#c17118",
      },
      {
        saturation: 61,
      },
      {
        lightness: -45,
      },
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "all",
    stylers: [
      {
        hue: "#8ba975",
      },
      {
        saturation: -46,
      },
      {
        lightness: -28,
      },
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "transit",
    elementType: "geometry",
    stylers: [
      {
        hue: "#a43218",
      },
      {
        saturation: 74,
      },
      {
        lightness: -51,
      },
      {
        visibility: "simplified",
      },
    ],
  },
  {
    featureType: "administrative.province",
    elementType: "all",
    stylers: [
      {
        hue: "#ffffff",
      },
      {
        saturation: 0,
      },
      {
        lightness: 100,
      },
      {
        visibility: "simplified",
      },
    ],
  },
  {
    featureType: "administrative.neighborhood",
    elementType: "all",
    stylers: [
      {
        hue: "#ffffff",
      },
      {
        saturation: 0,
      },
      {
        lightness: 100,
      },
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "administrative.locality",
    elementType: "labels",
    stylers: [
      {
        hue: "#ffffff",
      },
      {
        saturation: 0,
      },
      {
        lightness: 100,
      },
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "administrative.land_parcel",
    elementType: "all",
    stylers: [
      {
        hue: "#ffffff",
      },
      {
        saturation: 0,
      },
      {
        lightness: 100,
      },
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "administrative",
    elementType: "all",
    stylers: [
      {
        hue: "#3a3935",
      },
      {
        saturation: 5,
      },
      {
        lightness: -57,
      },
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "poi.medical",
    elementType: "geometry",
    stylers: [
      {
        hue: "#cba923",
      },
      {
        saturation: 50,
      },
      {
        lightness: -46,
      },
      {
        visibility: "on",
      },
    ],
  },
];

export default function Map() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAq1P_NK87SeVgu9eeY3lzCmNALq7wP5eg",
    libraries: ["geometry", "drawing"],
  });
  return (
    <>
      {isLoaded && (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={14}
          options={{ styles: mapStyles, disableDefaultUI: true }}
        >
          {" "}
          <Marker
            position={markerPosition}
            icon={{
              url: "/logoCropped.png",
              scaledSize: new window.google.maps.Size(200, 80),
            }}
            animation={window.google.maps.Animation.DROP}
          />
        </GoogleMap>
      )}
    </>
  );
}

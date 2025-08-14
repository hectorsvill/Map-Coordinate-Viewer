import type { LatLngExpression, LeafletMouseEvent } from "leaflet";
import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap, useMapEvents } from "react-leaflet";

interface MapComponentProps {
    lat: number
    lng: number
    onMapClick: (lat: number, lng: number) => void
}

const RecenterMap = ({ lat, lng }: { lat: number; lng: number }) => {
    const map = useMap()

    useEffect(() => {
        if (map) {
            map.setView([lat, lng, map.getZoom()]);
        }
    }, [lat, lng, map]);
    return null;
};

const MapClickHandler = ({ onMapClick }: { onMapClick: (lat: number, lng: number) => void }) => {
    useMapEvents({
        click(e: LeafletMouseEvent) {
            console.log("Map clicked at:", e.latlng);
            onMapClick(e.latlng.lat, e.latlng.lng)
        },
    })
    return null
}

const MapComponent = ({ lat, lng, onMapClick }: MapComponentProps) => {
    const position: LatLngExpression = [lat, lng]
    const zoomLevel: number = 5

    return (
        <MapContainer 
        center={position} 
        zoom={zoomLevel} 
        style={{height: '100%', width: '100%'}}
        >
            <TileLayer 
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
                <Marker position={position}>
                    <Popup>
                    <p>Latitude: {lat.toFixed(4)} </p>
                    <p>Longitude: { lng.toFixed(4)} </p>
                    </Popup>
            </Marker>
            <MapClickHandler onMapClick={onMapClick} />
            <RecenterMap lat={lat} lng={lng} />
        </MapContainer>
  );
};

export default MapComponent;


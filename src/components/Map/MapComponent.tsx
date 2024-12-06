import { useCallback, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Ship } from '../../types/ship';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import shipIcon from '../../assets/ship-icon.svg';


interface MapComponentProps {
  ships: Ship[];
  center: { lat: number; lng: number };
}

const ShipIcon = new Icon({
  iconUrl: shipIcon,
  iconSize: [24, 24],
  iconAnchor: [12, 12],
  popupAnchor: [0, -12],
  className: 'ship-marker'
});

// Add CSS to rotate icon based on ship heading
const getRotatedIcon = (heading: number) => {
  return new Icon({
    ...ShipIcon.options,
    className: `ship-marker rotate-${Math.round(heading)}`
  });
};

const MapComponent = ({ ships, center }: MapComponentProps) => {
  const [selectedShip, setSelectedShip] = useState<Ship | null>(null);

  const onMarkerClick = useCallback((ship: Ship) => {
    setSelectedShip(ship);
  }, []);

  // Validate coordinates
  const isValidCoordinate = (lat?: number, lng?: number): boolean => {
    return typeof lat === 'number' && 
           typeof lng === 'number' &&
           !isNaN(lat) && 
           !isNaN(lng) &&
           lat >= -90 && lat <= 90 &&
           lng >= -180 && lng <= 180;
  };

  return (
    <MapContainer
      center={[center.lat, center.lng]}
      zoom={10}
      style={{ height: '600px', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {ships
        .filter(ship => isValidCoordinate(ship.latitude, ship.longitude))
        .map((ship) => (
          <Marker
            key={ship.id}
            position={[ship.latitude!, ship.longitude!]}
            icon={getRotatedIcon(ship.heading)}
            eventHandlers={{
              click: () => onMarkerClick(ship),
            }}
          >
            {selectedShip?.id === ship.id && (
              <Popup eventHandlers={{ remove: () => setSelectedShip(null) }}>
                <div>
                  <h3>{ship.name}</h3>
                  <p>MMSI: {ship.mmsi}</p>
                </div>
              </Popup>
            )}
          </Marker>
        ))}
    </MapContainer>
  );
};

export default MapComponent;
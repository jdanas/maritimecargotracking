import { useCallback, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Ship } from '../../types/ship';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';

// Fix for default marker icons
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import iconRetina from 'leaflet/dist/images/marker-icon-2x.png';

interface MapComponentProps {
  ships: Ship[];
  center: { lat: number; lng: number };
}

const DefaultIcon = new Icon({
  iconUrl: icon,
  iconRetinaUrl: iconRetina,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

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
            icon={DefaultIcon}
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
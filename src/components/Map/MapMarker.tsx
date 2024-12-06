import { Marker, InfoWindow } from '@react-google-maps/api';
import { Ship } from '../../types/ship';
import { ShipInfoWindow } from './ShipInfoWindow';

interface MapMarkerProps {
  ship: Ship;
  isSelected: boolean;
  onClick: (ship: Ship) => void;
  onClose: () => void;
}

export const MapMarker = ({ ship, isSelected, onClick, onClose }: MapMarkerProps) => {
  return (
    <>
      <Marker
        position={ship.position}
        onClick={() => onClick(ship)}
        icon={{
          path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
          rotation: ship.heading,
          scale: 5,
        }}
      />
      {isSelected && (
        <InfoWindow
          position={ship.position}
          onCloseClick={onClose}
        >
          <ShipInfoWindow ship={ship} />
        </InfoWindow>
      )}
    </>
  );
};
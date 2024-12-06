import { Ship } from '../../types/ship';

interface ShipInfoWindowProps {
  ship: Ship;
}

export const ShipInfoWindow = ({ ship }: ShipInfoWindowProps) => {
  return (
    <div className="p-2">
      <h3 className="font-bold">{ship.name}</h3>
      <p>Speed: {ship.speed} knots</p>
      <p>Status: {ship.status}</p>
      <p>Destination: {ship.destination}</p>
    </div>
  );
};
import { Ship } from '../../types/ship';
import { format } from 'date-fns';
import { ShipStatus } from './ShipStatus';
import { ShipDetails } from './ShipDetails';

interface ShipListItemProps {
  ship: Ship;
  onSelect: (ship: Ship) => void;
}

export const ShipListItem = ({ ship, onSelect }: ShipListItemProps) => {
  return (
    <div 
      className="p-4 border-b border-gray-200 hover:bg-gray-50 cursor-pointer"
      onClick={() => onSelect(ship)}
    >
      <h3 className="font-bold text-lg">{ship.name}</h3>
      <div className="grid grid-cols-2 gap-2 text-sm">
        <div>
          <ShipStatus status={ship.status} />
          <p>Speed: {ship.speed} knots</p>
        </div>
        <ShipDetails 
          destination={ship.destination}
          timestamp={ship.timestamp}
        />
      </div>
    </div>
  );
};
import { Ship } from '../../types/ship';
import { ShipListItem } from './ShipListItem';

interface ShipListProps {
  ships: Ship[];
  onSelectShip: (ship: Ship) => void;
}

export const ShipList = ({ ships, onSelectShip }: ShipListProps) => {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="p-4 bg-gray-50 border-b border-gray-200">
        <h2 className="text-xl font-bold">Active Vessels</h2>
      </div>
      <div className="divide-y divide-gray-200">
        {ships.map((ship) => (
          <ShipListItem
            key={ship.id}
            ship={ship}
            onSelect={onSelectShip}
          />
        ))}
      </div>
    </div>
  );
};

export default ShipList;
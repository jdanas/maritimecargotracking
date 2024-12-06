import { format } from 'date-fns';

interface ShipDetailsProps {
  destination: string;
  timestamp: string;
}

export const ShipDetails = ({ destination, timestamp }: ShipDetailsProps) => {
  return (
    <div>
      <p>Destination: {destination}</p>
      <p>Last Updated: {format(new Date(timestamp), 'PPp')}</p>
    </div>
  );
};
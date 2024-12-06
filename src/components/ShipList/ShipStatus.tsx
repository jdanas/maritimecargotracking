interface ShipStatusProps {
  status: 'underway' | 'anchored' | 'moored';
}

const statusColors = {
  underway: 'text-green-600',
  anchored: 'text-yellow-600',
  moored: 'text-blue-600'
};

export const ShipStatus = ({ status }: ShipStatusProps) => {
  return (
    <p className="flex items-center gap-2">
      <span className={`inline-block w-2 h-2 rounded-full ${statusColors[status]}`} />
      <span>Status: {status}</span>
    </p>
  );
};
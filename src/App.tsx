import { useEffect, useState } from 'react';
import { Ship } from './types/ship';
import { getShips } from './services/shipService';
import MapComponent from './components/Map/MapComponent';
import { ShipList } from './components/ShipList/ShipList';

function App() {
  const [ships, setShips] = useState<Ship[]>([]);
  const [selectedShip, setSelectedShip] = useState<Ship | null>(null);

  useEffect(() => {
    const fetchShips = async () => {
      const data = await getShips();
      setShips(data);
    };
  
    fetchShips();
    // Update every 2 seconds for visible movement
    const interval = setInterval(fetchShips, 2000);
    return () => clearInterval(interval);
  }, []);

  const mapCenter = selectedShip 
    ? selectedShip.position 
    : { lat: 25.7617, lng: -80.1918 }; // Default to Miami

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-bold">Maritime Cargo Tracking</h1>
      </header>
      
      <main className="container mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2">
            <MapComponent 
              ships={ships} 
              center={mapCenter}
            />
          </div>
          <div>
            <ShipList 
              ships={ships}
              onSelectShip={setSelectedShip}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
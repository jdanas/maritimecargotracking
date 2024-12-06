import { Ship } from '../types/ship';

const generateNewPosition = (ship: Ship) => {
  // Simulate ship movement based on heading and speed
  // ~0.00001 degree ≈ 1.1m, multiply by speed for movement scale
  const movementScale = 0.00001 * ship.speed;
  
  // Convert heading to radians
  const headingRad = (ship.heading * Math.PI) / 180;
  
  return {
    latitude: ship.latitude + (Math.cos(headingRad) * movementScale),
    longitude: ship.longitude + (Math.sin(headingRad) * movementScale)
  };
};

// Mock data for demonstration
const mockShips: Ship[] = [
  {
    id: '1',
    name: 'Cargo Vessel Alpha',
    position: { lat: 25.7617, lng: -80.1918 },
    speed: 15.5,
    heading: 90,
    timestamp: new Date().toISOString(),
    destination: 'Miami Port',
    vesselType: 'Container Ship',
    status: 'underway',
    latitude: 25.7617,
    longitude: -80.1918,
    mmsi: '311906000'
  },
  {
    id: '2',
    name: 'Maritime Beta',
    position: { lat: 25.8717, lng: -80.1318 },
    speed: 12.3,
    heading: 180,
    timestamp: new Date().toISOString(),
    destination: 'Port Everglades',
    vesselType: 'Bulk Carrier',
    status: 'anchored',
    latitude: 25.8717,
    longitude: -80.1318,
    mmsi: '325913002'
  }
];

let simulatedShips = [...mockShips];

export const getShips = async (): Promise<Ship[]> => {
  // Update positions
  simulatedShips = simulatedShips.map(ship => {
    const newPos = generateNewPosition(ship);
    return {
      ...ship,
      latitude: newPos.latitude,
      longitude: newPos.longitude,
      position: { lat: newPos.latitude, lng: newPos.longitude },
      timestamp: new Date().toISOString()
    };
  });
  
  return simulatedShips;
};


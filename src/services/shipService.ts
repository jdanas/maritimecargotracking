import { Ship } from '../types/ship';

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
    mmsi: ''
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
    mmsi: ''
  }
];

export const getShips = async (): Promise<Ship[]> => {
  // In a real application, you would fetch from an API
  // return axios.get<Ship[]>('/api/ships').then(response => response.data);
  return Promise.resolve(mockShips);
};
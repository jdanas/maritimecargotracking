export interface Ship {
  latitude: number;
  longitude: number;
  mmsi: string;
  id: string;
  name: string;
  position: {
    lat: number;
    lng: number;
  };
  speed: number;
  heading: number;
  timestamp: string;
  destination: string;
  vesselType: string;
  status: 'underway' | 'anchored' | 'moored';
}
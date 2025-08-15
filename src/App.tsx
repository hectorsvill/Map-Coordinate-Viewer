import { useState } from 'react'
import MapComponent from './components/MapComponent';
import CoordinateInput from './components/CoordinateInput';

type Coordinates = {
  lat: number
  lng: number
}

function App() {
  const initialCoordinates: Coordinates = { lat: 38.9072, lng: -77.0369 }
  const [coords, setCoords] = useState<Coordinates>(initialCoordinates)
  const handleCoordChange = (lat:number, lng: number) => {
    setCoords({lat, lng})
  }

  return (
    <div className="grid grid-cols-1 gap-2 md:grid-cols-3 h-screen w-screen flex-col items-center justify-center min-h-screen bg-gray-250">
      {/* <h1 className="text-4xl font-bold text-blue-600">Map Coordinate Viewer</h1> */}
      <div className="h-full rounded-lg md:col-span-1 overflow-y-auto">
        <CoordinateInput
          onGo={handleCoordChange}
          latitude={coords.lat}
          longitude={coords.lng}
        />
      </div>
      <div className="h-full rounded-lg md:col-span-2">
        <MapComponent
          lat={coords.lat}
          lng={coords.lng}
          onMapClick={handleCoordChange}
        />
      </div>
      
    </div>
  )
}

export default App

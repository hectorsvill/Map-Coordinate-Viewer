import { useState } from 'react'
import MapComponent from './components/MapComponent';

function App() {
  const defaultLatitude = 48.8584;
  const defaultLongitude = 2.2945;
  
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">Map Coordinate Viewer</h1>
      <MapComponent latitude={defaultLatitude} longitude={defaultLongitude} />
    </div>
  )
}

export default App

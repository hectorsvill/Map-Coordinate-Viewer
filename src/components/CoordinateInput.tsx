import React, {useEffect, useState} from 'react'

interface CoordinateInputProp {
    onGo: (lat: number, lng: number) => void;
    latitude: number
    longitude: number
}

const CoordinateInput = ({ onGo, latitude, longitude }: CoordinateInputProp) => {
    const [lat, setLat] = useState(latitude.toString())
    const [lng, setLng] = useState(longitude.toString())

    useEffect(() => {
        setLat(latitude.toString())
        setLng(longitude.toString())
    }, [latitude, longitude])

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        const latNum = parseFloat(lat)
        const lngNum = parseFloat(lng)
        if (!isNaN(latNum) && !isNaN(lngNum)) {
            onGo(latNum, lngNum)
        } else {
            alert("Pleas enter Valid Coordinates")
        }
    }

    return (
    <div className='bg-white p-4 rounded-md shadow-md z-[100] m-4'>
            <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                {/* <h2 className="text-lg font-bold">Coordinate Viewer</h2> */}
                <div className="flex flex-col">
                    <label htmlFor="latitude" className="mb-1 font-semi-bold text-gray-700">Latitude</label>
                    <input
                        id="latitude"
                        type="text"
                        value={lat}
                        onChange={(e) => setLat(e.target.value)}
                        className='px-2 py-1 border border-gray-300 rounded-md'
                        placeholder="e.g, 48.123 "
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="longitude" className="mb-1 font-semi-bold text-gray-700">Latitude</label>
                    <input
                        id="longitude"
                        type="text"
                        value={lng}
                        onChange={(e) => setLng(e.target.value)}
                        className='px-2 py-1 border border-gray-300 rounded-md'
                        placeholder="e.g, 12.123 "
                    />
                </div>
                <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
                    Go to Coordinates
                </button>
        </form>
    </div>
    );
}
 
export default CoordinateInput;
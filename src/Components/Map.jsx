import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

export const Map = () => {
    const mapContainerStyles = {
        width: '100%',
        height: '400px',
    }

    const center = {
        lat: 4.0435712,
        lng: 9.7353728,
    }

    const zoom = 12;

    return (
        <LoadScript googleMapsApiKey={'thekey'}>
            <GoogleMap
                mapContainerStyle={mapContainerStyles}
                zoom={zoom}
                center={center}
                >
                <Marker position={center} />
            </GoogleMap>
        </LoadScript>
    )
}

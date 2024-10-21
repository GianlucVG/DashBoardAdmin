import React, { useState, useCallback } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

interface MapProps {
  apiKey: string;
  center: { lat: number; lng: number };
  containerStyle: { width: string; height: string };
  zoom?: number;
  polygonOptions?: google.maps.PolygonOptions;
  onPolygonComplete?: (path: { lat: number; lng: number }[]) => void;
}

const Maps: React.FC<MapProps> = ({
  apiKey,
  center,
  containerStyle,
  zoom = 13,
  polygonOptions = {
    fillColor: '#2196F3',
    fillOpacity: 0.5,
    strokeWeight: 2,
    zIndex: 1,
    editable: true, // Permitir que el polígono sea editable
    draggable: true, // Permitir que el polígono sea movible
  },
  onPolygonComplete,
}) => {
  const [, setShapes] = useState<any[]>([]);

  const handlePolygonComplete = useCallback(
    (polygon: google.maps.Polygon) => {
      const path = polygon.getPath().getArray().map(latLng => ({
        lat: latLng.lat(),
        lng: latLng.lng(),
      }));

      setShapes(prevShapes => [...prevShapes, path]);

      if (onPolygonComplete) {
        onPolygonComplete(path);
      }

      // Configura el polígono para ser editable y movible
      polygon.setOptions(polygonOptions);
    },
    [onPolygonComplete, polygonOptions]
  );

  const onLoad = useCallback(
    (map: google.maps.Map) => {
      if (!google || !google.maps || !google.maps.drawing) {
        console.error('Google Maps API no está cargada correctamente.');
        return;
      }

      const drawingManager = new google.maps.drawing.DrawingManager({
        drawingControl: true,
        drawingControlOptions: {
          position: google.maps.ControlPosition.TOP_CENTER,
          drawingModes: [google.maps.drawing.OverlayType.POLYGON], // Solo polígonos
        },
        polygonOptions,
      });

      drawingManager.setMap(map);

      google.maps.event.addListener(drawingManager, 'polygoncomplete', handlePolygonComplete);
    },
    [handlePolygonComplete, polygonOptions]
  );

  return (
    <LoadScript googleMapsApiKey={apiKey} libraries={['drawing']}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={zoom}
        onLoad={onLoad}
      />
    </LoadScript>
  );
};

export default Maps;
import React, { useEffect, useRef, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';

const StavangerMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<any>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [isTokenSet, setIsTokenSet] = useState(false);

  const initializeMap = async (token: string) => {
    if (!mapContainer.current || !token) return;

    try {
      // Dynamic import to avoid issues if mapbox-gl is not available
      const mapboxgl = await import('mapbox-gl');
      await import('mapbox-gl/dist/mapbox-gl.css');

      mapboxgl.default.accessToken = token;
      
      map.current = new mapboxgl.default.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/light-v11',
        center: [5.7331, 58.9700], // Stavanger coordinates
        zoom: 12,
      });

      // Add navigation controls
      map.current.addControl(new mapboxgl.default.NavigationControl(), 'top-right');

      // Add marker for Stavanger location
      new mapboxgl.default.Marker({
        color: '#D4AF37' // Gold color to match design
      })
        .setLngLat([5.7331, 58.9700])
        .setPopup(
          new mapboxgl.default.Popup({ offset: 25 })
            .setHTML('<div class="p-2"><h3 class="font-semibold">Zouq Stavanger</h3><p class="text-sm">Øvre Holmegate 22, 4006 Stavanger</p></div>')
        )
        .addTo(map.current);

      setIsTokenSet(true);
    } catch (error) {
      console.error('Error initializing map:', error);
    }
  };

  const handleTokenSubmit = () => {
    if (mapboxToken.trim()) {
      initializeMap(mapboxToken.trim());
    }
  };

  useEffect(() => {
    return () => {
      if (map.current) {
        map.current.remove();
      }
    };
  }, []);

  if (!isTokenSet) {
    return (
      <div className="h-96 bg-secondary/50 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-6">
          <MapPin className="h-16 w-16 mx-auto mb-4 text-primary/50" />
          <h3 className="text-lg font-semibold mb-2 text-foreground">Stavanger Kart</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Legg inn din Mapbox token for å vise interaktivt kart
          </p>
          <div className="flex gap-2">
            <Input
              type="text"
              placeholder="Mapbox Public Token"
              value={mapboxToken}
              onChange={(e) => setMapboxToken(e.target.value)}
              className="flex-1"
            />
            <Button onClick={handleTokenSubmit} size="sm">
              Last inn
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            Få din token på{' '}
            <a 
              href="https://mapbox.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              mapbox.com
            </a>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-96 overflow-hidden rounded-lg">
      <div ref={mapContainer} className="absolute inset-0" />
    </div>
  );
};

export default StavangerMap;
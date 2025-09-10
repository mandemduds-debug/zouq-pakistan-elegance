import React, { useEffect, useRef, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Navigation } from 'lucide-react';

interface Location {
  name: string;
  address: string;
  phone: string;
  hours: string;
  coordinates: [number, number];
}

const locations: Location[] = [
  {
    name: 'Zouq Sandvika',
    address: 'Sandvika Storsenter, Storsenteret 2, 1338 Sandvika',
    phone: '+47 67 12 34 56',
    hours: 'Man-Søn: 16:00-23:00',
    coordinates: [10.2248, 59.8909] // Sandvika coordinates
  },
  {
    name: 'Zouq Stavanger',
    address: 'Øvre Holmegate 22, 4006 Stavanger',
    phone: '+47 51 12 34 56',
    hours: 'Man-Søn: 17:00-22:00',
    coordinates: [5.7331, 58.9700] // Stavanger coordinates
  },
  {
    name: 'Zouq Sandnes',
    address: 'Kvadrat Storsenter, Kvadrat 4, 4306 Sandnes',
    phone: '+47 51 65 43 21',
    hours: 'Man-Søn: 16:30-22:30',
    coordinates: [5.7356, 58.8516] // Sandnes coordinates
  }
];

const LocationMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<any>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [isTokenSet, setIsTokenSet] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<string>('');
  const [userLocation, setUserLocation] = useState<[number, number] | null>(null);
  const [isGettingLocation, setIsGettingLocation] = useState(false);

  const initializeMap = async (token: string) => {
    if (!mapContainer.current || !token) return;

    try {
      const mapboxgl = await import('mapbox-gl');
      await import('mapbox-gl/dist/mapbox-gl.css');

      mapboxgl.default.accessToken = token;
      
      map.current = new mapboxgl.default.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [8.0, 59.0], // Norway center
        zoom: 6,
      });

      map.current.addControl(new mapboxgl.default.NavigationControl(), 'top-right');

      // Add markers for all locations
      locations.forEach((location) => {
        new mapboxgl.default.Marker({
          color: '#D4AF37'
        })
          .setLngLat(location.coordinates)
          .setPopup(
            new mapboxgl.default.Popup({ offset: 25 })
              .setHTML(`
                <div class="p-3">
                  <h3 class="font-semibold text-lg mb-1">${location.name}</h3>
                  <p class="text-sm text-gray-600 mb-2">${location.address}</p>
                  <p class="text-sm text-gray-600 mb-1">${location.phone}</p>
                  <p class="text-sm text-gray-600">${location.hours}</p>
                </div>
              `)
          )
          .addTo(map.current);
      });

      setIsTokenSet(true);
    } catch (error) {
      console.error('Error initializing map:', error);
    }
  };

  const getCurrentLocation = () => {
    setIsGettingLocation(true);
    
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const coords: [number, number] = [position.coords.longitude, position.coords.latitude];
          setUserLocation(coords);
          setIsGettingLocation(false);

          if (map.current) {
            // Add user location marker
            try {
              const mapboxgl = await import('mapbox-gl');
              new mapboxgl.default.Marker({
                color: '#3B82F6'
              })
                .setLngLat(coords)
                .setPopup(
                  new mapboxgl.default.Popup({ offset: 25 })
                    .setHTML('<div class="p-2"><p class="text-sm font-medium">Din posisjon</p></div>')
                )
                .addTo(map.current);
            } catch (error) {
              console.error('Error adding user marker:', error);
            }
          }
        },
        (error) => {
          console.error('Error getting location:', error);
          setIsGettingLocation(false);
          alert('Kunne ikke hente din posisjon. Sjekk at stedsbaserte tjenester er aktivert.');
        }
      );
    } else {
      setIsGettingLocation(false);
      alert('Stedsbaserte tjenester er ikke støttet av din nettleser.');
    }
  };

  const showDirections = async (locationName: string) => {
    if (!userLocation || !map.current || !mapboxToken) return;

    const location = locations.find(loc => loc.name === locationName);
    if (!location) return;

    try {
      const directionsUrl = `https://api.mapbox.com/directions/v5/mapbox/driving/${userLocation[0]},${userLocation[1]};${location.coordinates[0]},${location.coordinates[1]}?geometries=geojson&access_token=${mapboxToken}`;
      
      const response = await fetch(directionsUrl);
      const data = await response.json();

      if (data.routes && data.routes[0]) {
        const route = data.routes[0];
        
        // Remove existing route
        if (map.current.getSource('route')) {
          map.current.removeLayer('route');
          map.current.removeSource('route');
        }

        // Add route to map
        map.current.addSource('route', {
          type: 'geojson',
          data: {
            type: 'Feature',
            properties: {},
            geometry: route.geometry
          }
        });

        map.current.addLayer({
          id: 'route',
          type: 'line',
          source: 'route',
          layout: {
            'line-join': 'round',
            'line-cap': 'round'
          },
          paint: {
            'line-color': '#D4AF37',
            'line-width': 5,
            'line-opacity': 0.8
          }
        });

        // Fit map to show the route
        const coordinates = route.geometry.coordinates;
        const mapboxgl = await import('mapbox-gl');
        const bounds = coordinates.reduce((bounds: any, coord: any) => {
          return bounds.extend(coord);
        }, new mapboxgl.default.LngLatBounds(coordinates[0], coordinates[0]));

        map.current.fitBounds(bounds, {
          padding: 50
        });

        // Calculate duration and distance
        const duration = Math.round(route.duration / 60);
        const distance = (route.distance / 1000).toFixed(1);
        
        alert(`Rute til ${location.name}: ${distance} km, ca. ${duration} minutter`);
      }
    } catch (error) {
      console.error('Error getting directions:', error);
      alert('Kunne ikke hente rute. Prøv igjen senere.');
    }
  };

  const handleTokenSubmit = () => {
    if (mapboxToken.trim()) {
      initializeMap(mapboxToken.trim());
    }
  };

  const handleLocationSelect = (locationName: string) => {
    setSelectedLocation(locationName);
    if (userLocation) {
      showDirections(locationName);
    } else {
      alert('Du må først hente din posisjon for å få veibeskrivelse.');
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
          <h3 className="text-lg font-semibold mb-2 text-foreground">Våre Lokasjoner</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Legg inn din Mapbox token for å vise kart og få veibeskrivelser
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
    <div className="space-y-4">
      {/* Location Selection */}
      <div className="flex gap-4 p-4 bg-background border rounded-lg">
        <div className="flex-1">
          <Select value={selectedLocation} onValueChange={handleLocationSelect}>
            <SelectTrigger>
              <SelectValue placeholder="Velg avdeling for veibeskrivelse" />
            </SelectTrigger>
            <SelectContent>
              {locations.map((location) => (
                <SelectItem key={location.name} value={location.name}>
                  {location.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <Button
          onClick={getCurrentLocation}
          disabled={isGettingLocation}
          variant="outline"
          size="sm"
        >
          <Navigation className="h-4 w-4 mr-2" />
          {isGettingLocation ? 'Henter...' : 'Min posisjon'}
        </Button>
      </div>

      {/* Map */}
      <div className="relative h-96 overflow-hidden rounded-lg">
        <div ref={mapContainer} className="absolute inset-0" />
      </div>
    </div>
  );
};

export default LocationMap;
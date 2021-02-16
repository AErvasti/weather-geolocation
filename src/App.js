import {useState, useEffect} from 'react';
import './App.css';
import Weather from './konponentti/Weather'

function App() {
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
      }, (error) => {
        alert(error);
      })
      setIsLoaded(true);
    }
    else {
      alert('Your browser does not support geolocation!')
    }
    
  }, [])

  
    if (!isLoaded) {
      return <p>Loading...</p>;
    } else {
    return (
      <div className="content">
        <h3>Your position is</h3>
        <p>
          Position:&nbsp;
          {lat.toFixed(3)},
          {lng.toFixed(3)}
        </p>
          <Weather lat={lat} lng={lng} />
      </div>
    );
    }

}

export default App;

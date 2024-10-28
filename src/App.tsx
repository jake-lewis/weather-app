import { useState } from "react";
import "./App.css"
import { useLazyGetLatLongQuery } from "./features/location/locationApi";

const App = () => {
  const [location, setLocation] = useState<string>();
  const [trigger, result] = useLazyGetLatLongQuery();

  const placeholderText = "Enter a location...";
  
  const handleSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && location !== undefined) {
        trigger(location);
    }
  };

  return (
    <div className="App">
      { (result.isUninitialized || result.isError) &&
        <>
          <header>5-day Forecast</header><search>
            <input id="location" aria-placeholder={placeholderText} placeholder={placeholderText} onChange={(e) => setLocation(e.target.value)} onKeyDown={handleSubmit} />
            {result.isError && <label htmlFor="location">Could not find location "{location}", try a name or a postcode</label>}
          </search>
        </>
      }
      { result.isSuccess && 
        <>
          {result.currentData?.latitude}, {result.currentData?.longitude}
        </>
      }
    </div>
  )
}

export default App

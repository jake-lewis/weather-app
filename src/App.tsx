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
      { result.isUninitialized &&
        <>
          <header>5-day Forecast</header><search>
            <input aria-placeholder={placeholderText} placeholder={placeholderText} onChange={(e) => setLocation(e.target.value)} onKeyDown={handleSubmit} />
          </search>
        </>
      }
    </div>
  )
}

export default App

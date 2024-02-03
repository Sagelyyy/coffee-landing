import { useState } from "react";
import "./App.css";
import Cta from "./components/cta/Cta";
import Navigation from "./components/header/Navigation";
import Hero from "./components/hero/Hero";
import Products from "./components/products/Products";

function App() {
  const [interStatus, setInterStatus] = useState(true);
  return (
    <div className="bg-white">
      <Navigation interStatus={interStatus} setInterStatus={setInterStatus} />
      <Hero interStatus={interStatus} setInterStatus={setInterStatus} />
      <Cta />
      <Products />
    </div>
  );
}

export default App;

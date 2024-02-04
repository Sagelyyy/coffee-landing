import { useState } from "react";
import "./App.css";
import Cta from "./components/cta/Cta";
import Navigation from "./components/header/Navigation";
import Hero from "./components/hero/Hero";
import Products from "./components/products/Products";
import Contact from "./components/contact/Contact";

function App() {
  const [interStatus, setInterStatus] = useState(true);
  return (
    <div className="bg-white">
      <Navigation interStatus={interStatus} />
      <Hero setInterStatus={setInterStatus} />
      <Cta />
      <Products />
      <Contact />
    </div>
  );
}

export default App;

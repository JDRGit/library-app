import React from "react";
import "./App.css";
import { Carousel } from "./layout/HomePage/Carousel";
import { ExploreTopBooks } from "./layout/HomePage/ExploreTopBooks";
import { Footer } from "./layout/HomePage/Footer";
import { Heros } from "./layout/HomePage/Heros";
import { LibraryServices } from "./layout/HomePage/LibraryServices";
import { Navbar } from "./layout/NavbarAndFooter/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ExploreTopBooks />
      <Carousel />
      <Heros />
      <LibraryServices />
      <Footer />
    </div>
  );
}

export default App;

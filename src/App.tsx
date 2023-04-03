import React from "react";
import "./App.css";
import { Carousel } from "./layout/HomePage/Carousel";
import { ExploreTopBooks } from "./layout/HomePage/ExploreTopBooks";
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
    </div>
  );
}

export default App;

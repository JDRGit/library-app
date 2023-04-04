import "./App.css";
import { Footer } from "./layout/HomePage/components/Footer";
import { HomePage } from "./layout/HomePage/HomePage";
import { Navbar } from "./layout/NavbarAndFooter/Navbar";

export const App = () => {
  return (
    <div>
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  );
};

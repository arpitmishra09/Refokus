import Navbar from "./Components/Navbar";
import Work from "./Components/Work";
import Stripes from "./Components/Stripes";
import Products from "./Components/Products";
import Marquees from "./Components/Marquees";
import Cards from "./Components/Cards";
import Footer from "./Components/Footer";
import LocomotiveScroll from 'locomotive-scroll';
import Cursor from "./Components/Cursor";
import ErrorBoundary from "./Components/ErrorBoundary";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
    return () => {
      locomotiveScroll.destroy();
    };
  }, []);
  return (
    <ErrorBoundary>
      <div className="w-full h-full bg-black text-white">
        <Cursor />
        <Navbar />
        <Work />
        <Stripes />
        <Products />
        <Marquees />
        <Cards />
        <Footer />
      </div>
    </ErrorBoundary>
  );
}

export default App;

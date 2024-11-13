import "./App.css";
import Home from "./pages/Home";
import { Routes, Route, BrowserRouter, useLocation } from "react-router-dom";
import Offert from "./pages/Offert";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import NoMatch from "./pages/NoMatch";
import Footer from "./pages/Footer";
import TopMenu from "./pages/TopMenu";

function App() {
  const location = useLocation();
  const shouldDisplayNavbar = location.pathname !== "/";

  return (
    <div>
      {shouldDisplayNavbar && <TopMenu />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offert" element={<Offert />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>

      <div className="w-full h-[200px] bg-black">
        <Footer />
      </div>
    </div>
  );
}

// Wrapping App with BrowserRouter to use `useLocation` hook
function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default AppWrapper;

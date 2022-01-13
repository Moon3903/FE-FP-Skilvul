import "./styles.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./Routes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AOS from "aos";
import 'aos/dist/aos.css'; 
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    AOS.init();
  })
  return (
    <div className="App">
      <Router>
        <Navbar />
        <AppRoutes />
        <Footer />
      </Router>
    </div>
  );
}

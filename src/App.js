import "./styles.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./Routes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
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

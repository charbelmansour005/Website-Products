import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import NavigationPage from "./Pages/NavigationPage";
import ErrorPage from "./Pages/ErrorPage";
import Dishes from "./Pages/Dishes";
import Starters from "./Pages/Starters";
import Hotdrinks from "./Pages/Hotdrinks";
import Colddrinks from "./Pages/Colddrinks";
import Arguileh from "./Pages/Arguileh";
import Sandwhiches from "./Pages/Sandwhiches";

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <Router>
        <nav>
          <Link to="/"> Home </Link>
          <Link to="/navigationpage"> NavigationPage </Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/navigationpage" element={<NavigationPage />} />
          <Route path="/dishes" element={<Dishes />} />
          <Route path="/starters" element={<Starters />} />
          <Route path="/hotdrinks" element={<Hotdrinks />} />
          <Route path="/colddrinks" element={<Colddrinks />} />
          <Route path="/arguileh" element={<Arguileh />} />
          <Route path="/sandwhiches" element={<Sandwhiches />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import Login from "./pages/Login";
import CandidatesDashboard from "./pages/CandidatesDashboard";

// CSS
import "primereact/resources/themes/lara-light-teal/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "./styles/App.css";
import Candidatedetail from "./pages/CandidateDetail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<CandidatesDashboard />} />
          <Route
            path="/dashboard/candidate/:id"
            element={<Candidatedetail />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

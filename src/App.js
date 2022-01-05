import "./styles/App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import LoginForm from "./components/containers/LoginForm";

function App() {
  return <div className="App">
    <BrowserRouter>
  <Routes>

    <Route path="/" element={<LoginForm/>}/>
  </Routes>
  </BrowserRouter>
</div>;
}

export default App;

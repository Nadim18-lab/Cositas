import './App.css';
import Home from "./Components/Home-Component/Home";
import NavBar from "./Components/NavBar-Component/NavBar";
import Contact from "./Components/Contact-Component/Contact";
import Service from "./Components/Service-Component/Service";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

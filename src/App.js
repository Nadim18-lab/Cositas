<<<<<<< HEAD
import Service from './Components/Service-Component/Service'
=======
>>>>>>> 78422980dee3ed9e4acff5ccf7a1532ed4248d08
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
<<<<<<< HEAD
      <Service/>
=======
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
>>>>>>> 78422980dee3ed9e4acff5ccf7a1532ed4248d08
    </div>
  );
}

export default App;

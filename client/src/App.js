import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Specialities from "./components/Specialities";
import Doctors from "./components/Doctors";
import DoctorB from "./components/DoctorB";
import DoctorD from "./components/DoctorD";
import DoctorS1 from "./components/DoctorS1";
function App() {
  return (
    <Router>
      <div>
        <Routes>
        <Route exact path = '/' element={<Home/>}/>
        <Route exact path = '/specialities' element={<Specialities/>}/>
        <Route exact path = '/doctors' element={<Doctors/>}/>
        <Route exact path = '/doctors/dr-b-ramesh' element={<DoctorB/>}/>
        <Route exact path = '/doctors/dr-dinesh' element={<DoctorD/>}/>
        <Route exact path = '/doctors/dr-sayed' element={<DoctorS1/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

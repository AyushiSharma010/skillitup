import React from "react";

import { Router, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Loginpage from "./Pages/Loginpage";
import Signpage from "./Pages/Signpage";
import Workpage from "./Pages/Workpage";
import Profpage from "./Pages/Profpage";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/login" element={<Loginpage />}></Route>
      <Route path="/signup" element={<Signpage/>}></Route>
      <Route path="/work" element={<Workpage/>}></Route>
      <Route path="/profile" element={<Profpage/>}></Route>

    </Routes>
  );
};

export default App;

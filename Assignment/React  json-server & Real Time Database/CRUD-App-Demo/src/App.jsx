import React from "react";
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Creat from "./components/Create";
import Home from "./components/Home";
import Edit from "./components/Edit";
import Data from "./components/Data";
const App=()=>{
  return (
  <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-data" element={<Creat />} />
        <Route path="/edit-data" element={<Edit />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>

  </>
  )
}
export default App
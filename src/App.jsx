import Home from "./screens/Home";
import SignUp from "./screens/SignUp";
import "./App.css";
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Routes>
      {/* <Route path="/" element={Home}/> */}
      <Route path="/" element={<Home />} />
      <Route path="/SignUp" element={<SignUp/>}/>
      {/* <Route path="/" element={Home}/> */}
    </Routes>
  )
}

export default App

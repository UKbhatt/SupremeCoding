import Home from "./screens/Home";
import ProblemTable from "./screens/problems";
import "./App.css";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/problems" element={<ProblemTable />} />
    </Routes>
  )
}

export default App

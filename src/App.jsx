import Home from "./screens/Home";
import ProblemTable from "./screens/ProblemsTable";
import SolutionScreen from "./screens/solutionScreen";
import { Toaster } from 'react-hot-toast';
import { Routes, Route } from 'react-router-dom';

import "./App.css";

function App() {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/problems" element={<ProblemTable />} />
        <Route path="/solve/:slug" element={<SolutionScreen />} />
      </Routes>
    </>
  )
}

export default App

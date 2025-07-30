import Home from "./screens/Home";
import ProblemTable from "./screens/ProblemsTable";
import SolutionScreen from "./screens/solutionScreen";
import "./App.css";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/problems" element={<ProblemTable />} />
      <Route path="/solve/:slug" element={<SolutionScreen />} />
    </Routes>
  )
}

export default App

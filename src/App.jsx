import Home from "./screens/Home";
import ProblemTable from "./screens/ProblemsTable";
import SolutionScreen from "./screens/solutionScreen";
import Roomlogin from "./screens/roomlogin";
import RoomEditor from "./screens/roomEditor"
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
        <Route path="/roomlogin" element={<Roomlogin />} />
        <Route path="/editor/:roomId" element={<RoomEditor />} />
      </Routes>
    </>
  )
}

export default App

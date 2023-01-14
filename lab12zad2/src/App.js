import './App.css';
import { Routes, Route } from "react-router-dom";
import { Add, Sub, Mul, Div } from "./Calculator";

export default function App() {
  return (
    <Routes>
      <Route path="add" element={<Add />}/>
      <Route path="sub" element={<Sub />}/>
      <Route path="mul" element={<Mul />}/>
      <Route path="div" element={<Div />}/>
    </Routes>
  );
}
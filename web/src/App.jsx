import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import StudentDetails from "./pages/StudentDetails";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aluno/:id" element={<StudentDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
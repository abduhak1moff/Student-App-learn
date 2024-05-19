import { BrowserRouter, Route, Routes } from "react-router-dom";
import CounterPage from "./pages/CounterPage";
// import StudentsPage from "./pages/StudentsPage";
import StudentsPageWithHook from "./pages/StudentsPageWithHook";
import TeacherPages from "./pages/TeacherPages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StudentsPageWithHook />} />
        <Route path="counter" element={<CounterPage />} />
        <Route path="teacher" element={<TeacherPages />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

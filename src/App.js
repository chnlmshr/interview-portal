import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { ScheduleInterview } from "./components/ScheduleInterview";
import { UpdateInterview } from "./components/UpdateInterview";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/schedule" element={<ScheduleInterview />} />
        <Route path="/update" element={<UpdateInterview />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

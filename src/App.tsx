import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import About from "./pages/About";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route index element={<About />} />
            <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

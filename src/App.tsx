import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import NavBar from "./components/NavBar";
import About from "./pages/About";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";

function App() {
  return (
    <div className="App">
      <Layout>
        <Content>
          <NavBar />
            <Routes>
              <Route index element={<About />} />
              <Route path="login" element={<Login />} />
              <Route path="profile" element={<Profile />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
        </Content>
      </Layout>
    </div>
  );
}

export default App;

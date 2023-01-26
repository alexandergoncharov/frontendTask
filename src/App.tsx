import { Layout } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import About from "./pages/About";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <Layout>
        <Content>
          <div>
            topbar
          </div>
          <BrowserRouter>
            <Routes>
              <Route index element={<About />} />
              <Route path="login" element={<Login />} />
            </Routes>
          </BrowserRouter>
        </Content>
      </Layout>
    </div>
  );
}

export default App;

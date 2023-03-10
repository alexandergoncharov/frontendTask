import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import { Routes, Route } from "react-router-dom";
import './App.css';
import NavBar from "./components/NavBar";
import ProfileContextProvider from "./context/Profile/ProfileProvider";
import UserContextProvider from "./context/User/UserContextProvider";
import About from "./pages/About";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <Layout>
          <Content className="content">
            <NavBar />
            <Routes>
              <Route index element={<About />} />
              <Route path="login" element={<Login />} />
              <Route path="profile" element={<ProfileContextProvider><Profile /></ProfileContextProvider>} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Content>
        </Layout>
      </UserContextProvider>
    </div>
  );
}

export default App;

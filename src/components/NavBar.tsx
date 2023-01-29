import { Space, Button } from "antd";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { removeLoginToken } from "../service/User";

const NavBar = () => {
  let navigate = useNavigate();
  const { userToken, logoutUser } = useContext(UserContext);
  const signOut = () => {
    removeLoginToken(userToken!);
    logoutUser();
    navigate("/");
  };

  return (
    <div className="navbar">
      <Space size={"small"}>
        <Button onClick={() => navigate("/")}>About us</Button>
        {!userToken && (
          <Button onClick={() => navigate("/login")}>Sign in</Button>
        )}
        {userToken && (
          <Button onClick={() => navigate("/profile")}>Profile</Button>
        )}
        {userToken && <Button onClick={signOut}>Sign out</Button>}
      </Space>
    </div>
  );
};

export default NavBar;

import { Space, Button } from 'antd';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const NavBar = () => {
    let navigate = useNavigate();
    const { userToken } = useContext(UserContext);

    return <Space size={"small"}>
        <Button onClick={() => navigate("/")}>About us</Button>
        {!userToken && <Button onClick={() => navigate("/login")}>Sign in</Button>}
        {userToken && <Button onClick={() => navigate("/profile")}>Profile</Button>}
        {userToken && <Button>Sign out</Button>}
    </Space>
};

export default NavBar;
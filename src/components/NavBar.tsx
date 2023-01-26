import { Space, Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
    let navigate = useNavigate();
    return <Space size={"small"}>
        <Button onClick={() => navigate("/")}>About us</Button>
        <Button onClick={() => navigate("/login")}>Sign in</Button>
        <Button onClick={() => navigate("/profile")}>Profile</Button>
        <Button>Sign out</Button>
    </Space>
};

export default NavBar;
import { Avatar, Button, Typography } from "antd";
import userLogo from "../assets/userLogo.png";

const { Title } = Typography;

const Profile = () => {
  const name = "Alexey";
  return (
    <div className="profile">
      <Avatar size={100} src={userLogo} />
      <div className="welcome">
        <Title className="welcome-title">Welcome, {name}</Title>
        <Button type="primary">Update</Button>
      </div>
    </div>
  );
};

export default Profile;

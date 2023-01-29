import { Avatar, Button, Typography } from "antd";
import { useEffect, useState } from "react";
import userLogo from "../assets/userLogo.png";
import { getProfileInfo } from "../service/Profile";

const { Title } = Typography;

const Profile = () => {
    const [name, setName] = useState("Little story about company");

    useEffect(() => {
        const token = localStorage.getItem("userToken");
        getProfileInfo(token!).then((profile: any) => {
            const name = profile.fullname.split(" ")[0];
            setName(name);
        });
    });

    return (
        <div className="profile">
            <Avatar size={100} src={userLogo} />
            <div className="welcome">
                <Title className="welcome-title">Welcome, {name}!</Title>
                <Button type="primary">Update</Button>
            </div>
        </div>
    );
};

export default Profile;

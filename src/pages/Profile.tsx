import { Avatar, Button, Typography } from "antd";
import { useContext, useEffect, useState } from "react";
import userLogo from "../assets/userLogo.png";
import LoadingModal from "../components/LoadingModal";
import { ProfileContext } from "../context/Profile/ProfileContext";
import { getProfileInfo } from "../service/Profile";
import { ProfileResponse } from "../utils/types";

const { Title } = Typography;

const Profile = () => {
    const { loadContent, cancelLoad, ...state } = useContext(ProfileContext);

    const [name, setName] = useState("");
    const [statuses, setLoadStatuses] = useState({ isAuthorLoaded: false, isQuoteLoaded: false });
    const isLoading: boolean = state.isLoadingAuthor || state.isLoadingQuotes;

    useEffect(() => {
        const token = localStorage.getItem("userToken");
        getProfileInfo(token!).then((profile: ProfileResponse) => {
            const name = profile.fullname.split(" ")[0];
            setName(name);
        });
    });

    useEffect(() => {
        setLoadStatuses({ isAuthorLoaded: !state.isLoadingAuthor, isQuoteLoaded: !state.isLoadingQuotes });
    }, [state.isLoadingAuthor, state.isLoadingQuotes]);

    const quote = <div>
        <Typography.Text italic>{state.quoteText}</Typography.Text> (c) <Typography.Text>{state.authorName}</Typography.Text>
    </div>;
    const modal = <LoadingModal statuses={statuses} cancel={cancelLoad}></LoadingModal>;

    return (
        <>
            <div className="profile">
                <Avatar size={100} src={userLogo} />
                <div className="welcome">
                    <Title className="welcome-title">Welcome, {name}!</Title>
                    <Button type="primary" onClick={loadContent}>Update</Button>
                </div>
            </div>

            {isLoading && modal}
            {state.quoteText && quote}
        </>
    );
};

export default Profile;

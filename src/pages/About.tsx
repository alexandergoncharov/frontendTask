import { useEffect, useState } from "react";
import { getAboutInfo } from "../service/about";

const About = () => {
  const [aboutInfo, setAboutInfo] = useState('Little story about company');

  useEffect(() => {
    getAboutInfo().then((aboutInfo: string) => {
      setAboutInfo(aboutInfo);
    });
  });

  return <div className="about-info" dangerouslySetInnerHTML={{ __html: aboutInfo }} />;
};

export default About;
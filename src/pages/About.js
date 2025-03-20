import React, { useEffect } from "react";
import "./About.less";

const About = () => {
  if (true) {
    useEffect(() => {
      console.log("gaggag");
    }, []);
  }

  return (
    <div className="about">
      <h1>About Page</h1>
    </div>
  );
};

export default About;

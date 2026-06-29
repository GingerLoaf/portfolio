import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import zack from '../assets/images/zack.jpg';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={zack} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://www.linkedin.com/in/zack-sheppard-ab61617" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Zachary Sheppard</h1>
          <p>Cross functional Full Stack Game Developer</p>

          <div className="mobile_social_icons">
            <a href="https://www.linkedin.com/in/zack-sheppard-ab61617" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
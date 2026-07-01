import React from "react";
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://www.linkedin.com/in/zack-sheppard-ab61617" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
        <a href="http://www.soundcloud.com/zack-sheppard" target="_blank" rel="noreferrer"><LibraryMusicIcon/></a>
      </div>
    </footer>
  );
}

export default Footer;
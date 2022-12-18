import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import "../styles/Footer.css"

function Footer() {
    return (
        <div className="footer">
            <div className="socialMedia">
                <a href="https://www.linkedin.com/in/maxwell-colby-b70484241/"><LinkedInIcon></LinkedInIcon></a>
                <a href="https://github.com/maxwellc2003"><GitHubIcon></GitHubIcon></a>
                <a href="mailto:maxwellc2003@gmail.com"><EmailIcon></EmailIcon></a>
            </div>
            <p>&copy; 2022 maxwellcolbyportfolio.com</p>
        </div>
    )
}

export default Footer;
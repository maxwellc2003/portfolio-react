import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import "../styles/Home.css"

function Home() {
    return <div className="home">
        <div className="about">
            <h2>Hi, My Name is Max</h2>
            <div className="prompt">
                <p>Full-Stack Web Developer with a background in computer science and very passionate for using my skills and tools to solve real world problems, as well as help people.</p>
                <a href="https://www.linkedin.com/in/maxwell-colby-b70484241/"><LinkedInIcon></LinkedInIcon></a>
                <a href="https://github.com/maxwellc2003"><GitHubIcon></GitHubIcon></a>
                <a href="mailto:maxwellc2003@gmail.com"><EmailIcon></EmailIcon></a>
            </div>
        </div>
        <div className="skills">
            <h1>Skills</h1>
            <ol className="list">
                <li className="item">
                    <h2>Front-End</h2>
                    <span>
                        HTML, CSS, React, NPM
                    </span>
                </li>
            </ol>
            <ol className="list">
                <li className="item">
                    <h2>Back-End</h2>
                    <span>
                        NodeJS, ExpressJS, GraphQL, ApolloServer, MySQL, MongoDB, SQL, NoSQL
                    </span>
                </li>
            </ol>
            <ol className="list">
                <li className="item">
                    <h2>Languages</h2>
                    <span>JavaScript, C++</span>
                </li>
            </ol>
        </div>
    </div>;
}

export default Home;
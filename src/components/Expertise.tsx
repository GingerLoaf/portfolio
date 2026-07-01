import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad, faStar, faUserAstronaut } from '@fortawesome/free-solid-svg-icons';
import '../assets/styles/Expertise.scss';

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faGamepad} size="3x"/>
                    <h3>Cross Functional Game Dev</h3>
                    <p>
                        I bring a hybrid skill set that spans individual contributor coding, technical leadership, cross-team project planning, and Agile process management, having guided teams of up to 10 engineers through full feature cycles while conducting code reviews and providing ongoing mentorship. 
                    </p>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faStar} size="3x"/>
                    <h3>Iteration & Quality</h3>
                    <p>
                        I care about the quality of the product, and I want the team focused on moving forward with both speed and quality.
                        I am deeply motivated to build tools and processes that help everyone stay on top of performance, avoid regressions, and build new features.
                        I have a love for test driven practices and automated testing that can happen overnight or per submit.
                    </p>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faUserAstronaut} size="3x"/>
                    <h3>Culture & Clarity</h3>
                    <p>
                        I am a fan of keeping the team coordinated and reducing redundancy & misinformation wherever possible.
                        I bring a unique culture to my teams where I try to facilitate bonding, sharing, and growth using open and honest communication. I love hosting my own prototyping or sharing/learning sessions to help the team share or experiment in a safe space.
                    </p>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;
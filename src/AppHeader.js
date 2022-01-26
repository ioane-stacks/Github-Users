import React from "react";
import githubLogo from './images/githubLogo.png';

const AppHeader = () => {

    return (
        <div className="app-header">
            <h2>GitHub Typeahead</h2>
            <img className="github-logo" src={githubLogo} alt="nope" />
        </div>
    );
}

export default AppHeader;
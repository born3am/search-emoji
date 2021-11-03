import React from 'react'
import GitHubButton from "react-github-btn"

export default function Header() {
    return (
        <div style={{ textAlign: "center" }} >
            <h1>React Search Emoji <span>&#x1F984;</span></h1>
            <p>Simple tool for search emoji with React</p>
            <p>
                <GitHubButton
                    href="https://github.com/born3am" data-show-count={true} data-size="large" data-text="Star" data-icon="octicon-star"  ></GitHubButton>

                <GitHubButton
                    href="https://github.com/born3am" data-show-count={true}
                    data-size="large" data-text="Fork"
                    data-icon="octicon-repo-forked"
                ></GitHubButton>


            </p>


        </div>
    )
}

import React from 'react'
import GitHubButton from "react-github-btn"

export default function Header() {
    return (
        <div style={{ textAlign: "center" }} >
            <h1>Personal Emojis <span>&#x1F984;</span></h1>
            <p>Simple tool for search emoji with React</p>
            <p>

                <GitHubButton href="https://github.com/born3am/search-emoji/archive/HEAD.zip" data-color-scheme="no-preference: light; light: light; dark: light;" data-icon="octicon-download" data-size="large" aria-label="Download born3am/search-emoji on GitHub">Download</GitHubButton>

                <GitHubButton
                    href="https://github.com/born3am" data-color-scheme="no-preference: light; light: light; dark: light;" data-size="large" data-show-count="true" aria-label="Follow @born3am on GitHub">Follow @born3am</GitHubButton>





            </p>


        </div >
    )
}

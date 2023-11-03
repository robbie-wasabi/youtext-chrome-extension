/* eslint-disable react/no-deprecated */
import React from 'react'
import ReactDOM from 'react-dom'

const YouTubeButton = () => {
    const handleClick = async () => {
        const videoId = new URLSearchParams(window.location.search).get('v')
        if (videoId) {
            window.open(
                `https://youtext.io/${videoId}/interpretation?view=1`,
                '_blank'
            )
        }
    }

    return (
        <button id="youtext-button" onClick={handleClick}>
            Summarize
        </button>
    )
}

const videoContainer = document.querySelector('.ytp-chrome-bottom')
if (!videoContainer) {
    alert(`YouText: Couldn't find video container`)
} else {
    videoContainer.classList.add('relative')

    // Create a container for your button
    const buttonContainer = document.createElement('div')
    buttonContainer.id = 'youtext-button-container'
    buttonContainer.style.position = 'absolute'
    buttonContainer.style.top = '13px'
    buttonContainer.style.right = '266px'
    buttonContainer.style.zIndex = '1000' // Ensure it's above other elements

    // Append your buttonContainer as a child of the videoContainer
    videoContainer.appendChild(buttonContainer)

    // Render your button into the new buttonContainer
    ReactDOM.render(<YouTubeButton />, buttonContainer)
}

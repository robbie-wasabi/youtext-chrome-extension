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

    return <button onClick={handleClick}>Summarize Video</button>
}

// Render the button into the YouTube page
const videoContainer = document.querySelector('.ytp-chrome-bottom')
if (videoContainer) {
    // eslint-disable-next-line react/no-deprecated
    ReactDOM.render(<YouTubeButton />, videoContainer)
}

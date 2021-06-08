import React from 'react'
import YouTube from 'react-youtube'
import MediaQuery from "react-responsive"

const Movie = (props) => {
    const { videoId, name } = props

    const opts = {
        height: '200px',
        width: '100%',
    }

    return (
        <>
            <MediaQuery query="(min-width: 480px)">
                <YouTube
                    videoId={videoId}
                />
                <p className='movie-box-text'>{name}</p>
            </MediaQuery>
            <MediaQuery query="(max-width: 480px)">
                <YouTube
                    videoId={videoId}
                    opts={opts}
                />
                <p className='movie-box-text'>{name}</p>
            </MediaQuery>
        </>
    )
}

export default Movie

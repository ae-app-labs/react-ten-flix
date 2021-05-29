import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube'
import { API_KEY, IMAGE_URL } from '../../constants/constants'
import service from '../../service'
import "./Row.css"

function Row(props) {

    const [results, setResults] = useState([])
    const [showTrailer, setShowTrailer] = useState(false)
    const [videoId, setVideoId] = useState("")

    useEffect(() => {
        service.get(props.url).then( response => {
            console.log(response.data.results[0])
            setResults(response.data.results)
        })
        .catch(error => {
            alert(error)
        })
    }, [])

    const options = {
        width: '100%'
    }

    const showMovieTrailer = (movieId) => {
        const url = `/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`
        service.get(url)
            .then( response => {
                if(response.data.results.length > 0){
                    //console.log(response.data.results[0].key)
                    setVideoId(response.data.results[0].key)
                    setShowTrailer(true)
                } else {
                    setShowTrailer(false)
                }
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className="row">
            <h2>{props.title}</h2>
            <div className="posters">
            {
                results.map( result => {
                    return (
                        <div>
<img 
    className={ props.isSmall? 'poster-small' : 'poster'} 
    src={`${IMAGE_URL+result.backdrop_path}`} 
    onClick={ () => showMovieTrailer(result.id)}
    alt="poster"/>
                        <h3>{result.name?result.name:result.original_title}</h3>
                        </div>
                    )
                })
            }
            </div>
            
            { 
                showTrailer && 
                    <YouTube 
                        opts={options}
                        videoId={videoId}/>
            }
                
        </div>
    )
}

export default Row

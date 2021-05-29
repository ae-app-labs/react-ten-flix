import React, { useEffect, useState } from 'react'
import service from '../../service'
import { IMAGE_URL } from '../../constants/constants'
import { URL_TRENDING } from '../../constants/urls'
import "./Banner.css"

function Banner() {

    const [movie, setMovie] = useState("")

    // Use only once when this component is mounted
    useEffect(() => {
        service.get(URL_TRENDING)
            .then (response => {
                let index = Math.round(Math.random() * response.data.results.length)
                console.log(index)
                setMovie(response.data.results[index])
            })
    }, [])

    return (
        <div className="banner" 
        style={{backgroundImage:`url(${movie ? IMAGE_URL + movie.backdrop_path : ""})`}}>
            <div className="contentWrapper">
                <div className="content">
                    <h1 className="title">{movie ? movie.title : ''}</h1>
                    <div className="buttons">
                        <button className="button">Play</button>
                        <button className="button">My List</button>
                    </div>
                    <h1 className="description">{movie ? movie.overview : ''}</h1>
                </div>
            </div>
        </div>
    )
}

export default Banner

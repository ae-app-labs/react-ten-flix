import React from 'react'
import "./Banner.css"

function Banner() {
    return (
        <div className="banner">
            <div className="content">
                <h1 className="title">Movie Name</h1>
                <div className="buttons">
                    <button className="button">Play</button>
                    <button className="button">My List</button>
                </div>
                <h1 className="description">
                    Fugiat in ipsum officia nulla adipisicing. Magna esse culpa et dolor veniam laboris anim excepteur ex aute. Labore irure et minim occaecat eu laborum duis labore ullamco nisi ex Lorem nulla. In commodo anim consectetur in culpa elit dolor deserunt. Dolore esse excepteur adipisicing id. Labore ullamco ut pariatur qui labore.
                </h1>
            </div>
            <div className="fade"></div>
        </div>
    )
}

export default Banner

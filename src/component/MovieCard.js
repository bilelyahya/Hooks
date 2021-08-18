import React from 'react'
import { Link } from 'react-router-dom'
import StarRating from './StarRating'

const MovieCard = ({card}) => {
    return (
        <div className="card">
            <StarRating rate={card.rating} />
            <div className="image"><img src={card.image} alt=""/></div>
            <h1>{card.name}</h1>
            <p>{card.date}</p>
            <Link to= {`/description/${card.name}
            `}>
            <button className="button">See descreiption</button>
            </Link>
        </div>
    )
}

export default MovieCard

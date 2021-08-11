import React from 'react'
import StarRating from './StarRating'

const MovieCard = ({card}) => {
    return (
        <div className="card">
            <StarRating rate={card.rating} />
            <div className="image"><img src={card.image} alt=""/></div>
            <h1>{card.name}</h1>
            <p>{card.date}</p>
        </div>
    )
}

export default MovieCard

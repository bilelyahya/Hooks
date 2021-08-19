import React from "react";
import { Link } from "react-router-dom";

const Description = ({ movies, match }) => {
  return (
    <div>
      {movies
        .filter((movie) => movie.name === match.params.name)
        .map((el, i) => (
          <div key={i} className="card-description">
            <h1>{el.name}</h1>
            <p>{el.desc}</p>
            <span>
              <iframe
                width= "90%" 
                height="315"
                src={el.trailer}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </span><br></br>
            <Link to="/">
              <button className="button">Go back</button>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default Description;

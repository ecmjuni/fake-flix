import React from "react";
import './MovieRow.css'

const MovieRow = ({title, items}) => {

    const jsonFilterPosterPath = () => {
        return items.results.filter(item => {
            return item.poster_path != null
        })
    }

    return (
        <div className="movieRow">
            <h2>{title}</h2>
            <div className="movieRow--listarea">
                {items.results.length > 0 && jsonFilterPosterPath().map((item, key) => (
                        <img key={key} alt="N/A" src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} />
                    )
                )
                }
            </div>
        </div>
    );
}

export default MovieRow;
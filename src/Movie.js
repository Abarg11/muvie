import React from "react";
import PropTypes from "prop-types"
import "./muvie.css"
function Movie({ id, year, title, summary, poster, genres, }) {
    return <div className="muvie">
        <img src={poster} alt={title} title={title} />
        <div className="muvie_column">
            <h3 className="muvie_title"> {title}</h3>
            <h5 className="muvie_title">{year}</h5>
            <ul className="muvie_genres">
                {genres.map((genre , index) => {
                    return <li key={index} className="genres_genre">{genre}</li>
                })}
            </ul>
            <p className="muvie_summery">{summary.slice(0, 250)}...</p>

        </div>


    </div>
}

Movie.prototype = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,


}
export default Movie
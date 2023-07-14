import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const TrendMovies = ({ data }) => {
    const location = useLocation();
    const url = 'movies/';

    return (
        <ul>
            {data.map(movie => (
                <li key={movie.id}>
                    <Link to={`${url}${movie.id}`} state={{ from: location }} >
                        {movie.title}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default TrendMovies;

TrendMovies.propTypes = {
    data: PropTypes.array.isRequired,
};
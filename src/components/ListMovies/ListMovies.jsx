import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const ListMovies = ({ data }) => {
    const location = useLocation();

    return (
        <ul>
            {data.map(movie => (
                <li key={movie.id}>
                    <Link to={`${movie.id}`} state={{ from: location }} >
                        {movie.title}
                    </Link>
                </li>
            ))}
        </ul>
    )
};

export default ListMovies;

ListMovies.propTypes = {
    data: PropTypes.array.isRequired,
};
import { useRef, useEffect, useState, Suspense, Outlet } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import api from "utils/api";

const MovieDetails = () => {
    const [details, setDetails] = useState([]);
    const { id } = useParams();
    const location = useLocation();
    const locRef = useRef(location.state?.from ?? '/');

    useEffect(() => {
        const getMovieDetails = async id => {
            const movie = await api.id(id);
            setDetails(movie);
        };
        getMovieDetails(id);
    }, [id]);

    const { path, title, genres, vote, overview } = details;

    return (
        <div>
            <div>
                <Link to={locRef.current}>
                    Go back
                </Link>
                <div>
                    <img
                        src={
                            path
                                ? `https://www.themoviedb.org/t/p/w500/${path}`
                                : 'https://www.freeiconspng.com/uploads/no-image-icon-6.png'
                        }
                        alt={title}
                        width="240"
                    />
                    <div>
                        <h3>{title}</h3>
                        <h5>User Score: {vote}</h5>
                        <div>
                            <h5>Overview</h5>
                            <p>{overview}</p>
                        </div>
                        <div>
                            <h5>Genres</h5>
                            <p>
                                {genres && genres.map(genre => genre.name).join(', ')}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h3>Additional information</h3>
                <ul>
                    <li>
                        <Link to="cast">
                            Cast
                        </Link>
                    </li>
                    <li>
                        <Link to="reviews">
                            Reviews
                        </Link>
                    </li>
                </ul>
            </div>
            <Suspense fallback={"Loading..."}>
                <Outlet />
            </Suspense>
        </div>
    );
};

export default MovieDetails;
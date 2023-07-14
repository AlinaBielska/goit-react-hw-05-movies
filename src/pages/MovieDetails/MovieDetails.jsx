import { useEffect, useState, Suspense } from "react";
import { useParams, useLocation, Link, Outlet } from "react-router-dom";
import api from "utils/api";
import BackLink from "components/BackLink/BackLink";

const MovieDetails = () => {
    const [details, setDetails] = useState([]);
    const { movieID } = useParams();
    const location = useLocation();
    const backLinkHref = location.state?.from ?? "/";

    useEffect(() => {
        const dataConversion = obj => {
            const genres = obj.genres.map(genre => genre.name).join(', ');
            const score = Math.ceil(obj['vote_average'] * 10);
            const newDetails = {
                img: `https://image.tmdb.org/t/p/w500/${obj['poster_path']}`,
                title: obj.title,
                genres,
                score,
                overview: obj.overview,
            };
            setDetails(newDetails);
        };

        const fetch = async () => {
            try {
                const response = await api.id(movieID);
                dataConversion(response);
            } catch (error) {
                console.log(error);
            }
        };
        fetch();

        // eslint-disable-next-line
    }, []);

    const { img, title, genres, score, overview } = details;

    return (
        <>
            <div>
                <BackLink to={backLinkHref}>Back to products</BackLink>
                <div>
                    <img
                        src={
                            img
                                ? `https://www.themoviedb.org/t/p/w500/${img}`
                                : 'https://www.freeiconspng.com/uploads/no-image-icon-6.png'
                        }
                        alt={title}
                        width="240"
                    />
                    <div>
                        <h3>{title}</h3>
                        <h5>User Score: {score}</h5>
                        <div>
                            <h5>Overview</h5>
                            <p>{overview}</p>
                        </div>
                        <div>
                            <h5>Genres</h5>
                            <p>{genres}</p>
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
        </>
    );
};

export default MovieDetails;
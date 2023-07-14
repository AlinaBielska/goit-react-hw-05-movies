import { useState, useEffect } from "react";
import api from "utils/api";
import TrendMovies from "components/TrendMovies/TrendMovies";

const Home = () => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        const trendMovies = async () => {
            try {
                const response = await api.trend(page);
                setData(response);
            } catch (error) {
                console.log(error);
            }
        };
        trendMovies();
    }, []);

    return (
        <div>
            <h1>Trending today</h1>
            <TrendMovies data={data} />
        </div>
    );
};

export default Home;
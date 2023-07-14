import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import api from "utils/api";
import FormSearch from "components/FormSearch/FormSearch";
import ListMovies from "components/ListMovies/ListMovies";

const Movies = () => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get("query") ?? "";

    useEffect(() => {
        if (query === "") return;
        const searchMovie = async () => {
            try {
                const response = await api.search(query, page);
                setData(response.results);
            } catch (error) {
                console.log(error);
            }
        };
        searchMovie();
        // eslint-disable-next-line
    }, [query]);

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        const input = form.elements.query.value.trim();

        if (input === '') {
            alert(`Please type anything`);
            return;
        }

        setSearchParams({ query: input });
        form.reset();
    };

    return (
        <div>
            <FormSearch onSubmit={handleSubmit} />
            {data && <ListMovies data={data} />}
        </div>
    );
};

export default Movies;
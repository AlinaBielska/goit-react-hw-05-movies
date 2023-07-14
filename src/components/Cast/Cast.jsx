import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "utils/api";

const Cast = () => {
    const [data, setData] = useState([]);
    const { movieID } = useParams();

    useEffect(() => {
        const getCast = async () => {
            try {
                const response = await api.cast(movieID);
                setData(response);
            } catch (error) {
                console.log(error);
            }
        }
        getCast();
        // eslint-disable-next-line
    }, []);

    return (
        <ul>
            {data.map(character => (
                <li key={character.id}>
                    {character['profile_path'] ? (
                        <img
                            src={`https://image.tmdb.org/t/p/w500${character['profile_path']}`}
                            alt={character.name}
                            width="200px"
                            height="300px"
                        />
                    ) : (
                        <img
                            src="https://dummyimage.com/200x300/faebd7/000000.jpg&text=photo+not+found"
                            alt="notPhoto"
                            width="200px"
                            height="300px"
                        />
                    )}
                    <div>
                        <p>
                            <b>Name: </b> {character.name}
                        </p>
                        <p>
                            <b>Character: </b> {character.character}
                        </p>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default Cast;
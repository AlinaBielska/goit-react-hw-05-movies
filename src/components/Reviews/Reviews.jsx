import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "utils/api";

const Reviews = () => {
    const [data, setData] = useState([]);
    const { movieID } = useParams();

    useEffect(() => {
        const getReviews = async () => {
            try {
                const response = await api.reviews(movieID);
                setData(response);
            } catch (error) {
                console.log(error);
            }
        }
        getReviews();
        // eslint-disable-next-line
    }, []);

    if (data.length === 0) {
        return <p>We don't have any reviews for this movie</p>
    } else {
        return (
        <ul>
          {data.map((review, idx) => (
            <li key={idx}>
              <p>
                <b>Author: </b> {review.author}
              </p>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      );
    }
};

export default Reviews;
import axios from 'axios';

class apiFetch {
  
  trend = async page => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=41e82972d79cb88ec6adf4cd9cbe70d2&page=${page}`
    );
    return response.data.results;
  };

  search = async (query, page) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=41e82972d79cb88ec6adf4cd9cbe70d2&query=${query}&page=${page}`
    );
    return response.data;
  };

  id = async id => {
    const response = await axios.get(`https://api.themoviedb.org/3/movie//${id}?api_key=41e82972d79cb88ec6adf4cd9cbe70d2`);
    return response.data;
  };

  cast = async id => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie//${id}/credits?api_key=41e82972d79cb88ec6adf4cd9cbe70d2`
    );
    return response.data.cast;
  };

  reviews = async id => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie//${id}/reviews?api_key=41e82972d79cb88ec6adf4cd9cbe70d2`
    );
    return response.data.results;
  };
}

const api = new apiFetch();
export default api;
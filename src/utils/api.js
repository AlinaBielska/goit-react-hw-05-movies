import axios from 'axios';

class apiFetch {
  #BASE_URL = 'https://api.themoviedb.org/3/';
  #API_KEY = '0a4aab5daca4d3b8b09b771948ad9265';
  #SEARCH = 'search/movie';
  #TRAND = 'trending/movie/day';
  #ALL = 'movie/';

  /* Запрос на ТРЕНДЫ */
  trend = async page => {
    const respons = await axios.get(
      `${this.#BASE_URL}${this.#TRAND}?api_key=${this.#API_KEY}&page=${page}`
    );
    return respons.data.results;
  };

  /* Запрос ПОИСК ИНПУТ */
  search = async (query, page) => {
    const respons = await axios.get(
      `${this.#BASE_URL}${this.#SEARCH}?api_key=${this.#API_KEY}&query=${query}&page=${page}`
    );
    return respons.data;
  };

  /* Запрос id */
  id = async id => {
    const respons = await axios.get(`${this.#BASE_URL}${this.#ALL}/${id}?api_key=${this.#API_KEY}`);
    return respons.data;
  };

  /* Запрос Cast */
  cast = async id => {
    const respons = await axios.get(
      `${this.#BASE_URL}${this.#ALL}/${id}/credits?api_key=${this.#API_KEY}`
    );
    return respons.data.cast;
  };

  /* Запрос Reviews */
  reviews = async id => {
    const respons = await axios.get(
      `${this.#BASE_URL}${this.#ALL}/${id}/reviews?api_key=${this.#API_KEY}`
    );
    return respons.data.results;
  };
}

const api = new apiFetch();
export default api;
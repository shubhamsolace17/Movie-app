import { LOGIN_API_URL, GET_MOVIE_LIST_API_URL, ADD_MOVIE_API_URL, UPDATE_MOVIE_API_URL } from '../constants/ApiUrl';
import serviceV1 from './base/';

export const _login = data => {
    return serviceV1.post(`${LOGIN_API_URL}`, data);
};

export const _getMovies = data => {
    return serviceV1.get(`${GET_MOVIE_LIST_API_URL}`)
}

export const _AddMovies = data => {
    return serviceV1.get(`${ADD_MOVIE_API_URL}`, data)
}

export const _upadteMovies = data => {
    return serviceV1.patch(`${UPDATE_MOVIE_API_URL}`, data)
}
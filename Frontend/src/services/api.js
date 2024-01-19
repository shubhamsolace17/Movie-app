import { LOGIN_API_URL, GET_MOVIE_LIST_API_URL, ADD_MOVIE_API_URL, UPDATE_MOVIE_API_URL, GET_SINGLE_MOVIE_API_URL } from '../constants/ApiUrl';
import serviceV1 from './base/';

export const _login = data => {
    return serviceV1.post(`${LOGIN_API_URL}`, data);
};

// export const _getMovies = data => {
//     return serviceV1.get(`${GET_MOVIE_LIST_API_URL}`)
// }

export const _AddMovies = data => {
    return serviceV1.post(`${ADD_MOVIE_API_URL}`, data)
}

export const _upadteMovies = (id,data) => {
    return serviceV1.post(`${UPDATE_MOVIE_API_URL}${id}`, data)
}

export const _getAllMovies = (page,limit) => {
    return serviceV1.post(`${GET_MOVIE_LIST_API_URL}?page=${page}&limit=${limit}`)
}

export const _getSingleMovie = (id) => {
    return serviceV1.get(`${GET_SINGLE_MOVIE_API_URL}${id}`)
}
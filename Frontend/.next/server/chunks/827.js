"use strict";
exports.id = 827;
exports.ids = [827];
exports.modules = {

/***/ 7465:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Aj": () => (/* binding */ ADD_MOVIE_API_URL),
/* harmony export */   "Hw": () => (/* binding */ LOGIN_API_URL),
/* harmony export */   "QP": () => (/* binding */ GET_MOVIE_LIST_API_URL),
/* harmony export */   "_V": () => (/* binding */ GET_SINGLE_MOVIE_API_URL),
/* harmony export */   "_n": () => (/* binding */ BASE_URL),
/* harmony export */   "qi": () => (/* binding */ UPDATE_MOVIE_API_URL)
/* harmony export */ });
let BASE_URL = "http://34.230.50.80/api/";
// export let BASE_URL = "";
// export const GET_MOVIE_LIST_API_URL = `${BASE_URL}/Auth/get_banners`;
const LOGIN_API_URL = `${BASE_URL}user/user-signin`;
const ADD_MOVIE_API_URL = `${BASE_URL}movie/create-movie`;
const UPDATE_MOVIE_API_URL = `${BASE_URL}movie/update-movie/`;
const GET_MOVIE_LIST_API_URL = `${BASE_URL}movie/movie-list`;
const GET_SINGLE_MOVIE_API_URL = `${BASE_URL}movie/movie-by-id/`;


/***/ }),

/***/ 3827:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "M6": () => (/* binding */ _AddMovies),
  "sm": () => (/* binding */ _getAllMovies),
  "Hw": () => (/* binding */ _getSingleMovie),
  "o": () => (/* binding */ _login),
  "Pk": () => (/* binding */ _upadteMovies)
});

// EXTERNAL MODULE: ./src/constants/ApiUrl.js
var ApiUrl = __webpack_require__(7465);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: ./src/services/base/index.js

// import {BASE_URL} from  '../../enviroment'

const serviceConfig = {
    timeout: 45000
};
const getServiceInstance = (baseURL)=>{
    const serviceInstance = external_axios_default().create({
        ...serviceConfig,
        ...{
            baseURL
        }
    });
    serviceInstance.CancelToken = (external_axios_default()).CancelToken;
    serviceInstance.isCancel = (external_axios_default()).isCancel;
    serviceInstance.interceptors.request.use(async (config)=>{
        const accessToken = localStorage.getItem("token");
        console.log("acc", accessToken);
        const modifiedConfig = {
            ...config
        };
        if (accessToken) {
            modifiedConfig.headers["Authorization"] = `${accessToken}`;
        // modifiedConfig.headers['Token'] = `Bearer ${token}`
        }
        return modifiedConfig;
    });
    serviceInstance.interceptors.response.use((response)=>{
        if (response.status == 200 || response.status == 201) {
            return response.data;
        }
        return [];
    }, (error)=>{
        if (error.toJSON().message === "Network Error") {
            alert("Network Error", "Please Check Network connection");
        }
        if (error.config.url.includes("logout")) {
            return;
        }
        if (serviceInstance.isCancel(error)) {
            return;
        }
        if (error.response && error.response.status === 401) {
            console.warn("---", error);
            return error;
        } else {
            return error;
        }
    });
    return serviceInstance;
};
const serviceV1 = getServiceInstance(ApiUrl/* BASE_URL */._n);
/* harmony default export */ const base = (serviceV1);

;// CONCATENATED MODULE: ./src/services/api.js


const _login = (data)=>{
    return base.post(`${ApiUrl/* LOGIN_API_URL */.Hw}`, data);
};
// export const _getMovies = data => {
//     return serviceV1.get(`${GET_MOVIE_LIST_API_URL}`)
// }
const _AddMovies = (data)=>{
    return base.post(`${ApiUrl/* ADD_MOVIE_API_URL */.Aj}`, data);
};
const _upadteMovies = (id, data)=>{
    return base.post(`${ApiUrl/* UPDATE_MOVIE_API_URL */.qi}${id}`, data);
};
const _getAllMovies = (page, limit)=>{
    return base.post(`${ApiUrl/* GET_MOVIE_LIST_API_URL */.QP}?page=${page}&limit=${limit}`);
};
const _getSingleMovie = (id)=>{
    return base.get(`${ApiUrl/* GET_SINGLE_MOVIE_API_URL */._V}${id}`);
};


/***/ })

};
;
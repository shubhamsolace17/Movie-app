import axios from "axios";
// import {BASE_URL} from  '../../enviroment'
import {  BASE_URL } from "../../constants/ApiUrl";

const serviceConfig = {
  timeout: 45000,
  headers: {
    'Content-Type': 'application/json',
  },
};


const getServiceInstance = (baseURL) => {
  const serviceInstance = axios.create({
    ...serviceConfig,
    ...{
      baseURL,
    },
  });

  serviceInstance.CancelToken = axios.CancelToken;
  serviceInstance.isCancel = axios.isCancel;

  serviceInstance.interceptors.request.use(async (config) => {
    const accessToken = JSON.parse(localStorage.getItem("token"));

    const modifiedConfig = {
      ...config,
    };
    if (accessToken) {
      modifiedConfig.headers['Authorization'] = `Token ${token}`;
      // modifiedConfig.headers['Token'] = `Bearer ${token}`
    } 
    return modifiedConfig;
  });

  serviceInstance.interceptors.response.use(
    (response) => {
      if (response.status == 200) {
        return response.data;
      }
      return [];
    },
    (error) => {
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
    }
  );
  return serviceInstance;
};

export const serviceV1 = getServiceInstance(BASE_URL);

export default serviceV1;

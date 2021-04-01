import configuration from "../config-env";
import url from "../url";

export const BASE_URL = "https://api.themoviedb.org/3/";
export const API_KEY = "89b66df8496904cb038e556b4de7d088";
export const IMG_BASE_URL = "https://image.tmdb.org/t/p/w500/";

const env = process.env.REACT_APP_ENV || "development";
let config = configuration[env];

const f2pBaseUrl = config.baseurl.f2pAPI;

config.f2pApi = {
    login: f2pBaseUrl + url.f2pApi.LOGIN,
}
export function getConfig() {
    return config;
}


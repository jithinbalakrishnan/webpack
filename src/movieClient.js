//f2p Clint

import { getConfig, getBaseUrl } from "../src/config/config";

const login = () => {
    const loginUrl = getConfig().f2pApi.login;
    return  loginUrl;
};

export {
    login
}
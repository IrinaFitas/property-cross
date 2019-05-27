import axios from "axios-jsonp-pro";
import { BASE_URL } from "./../utils/constants.js";
import { SUCCESS_CODE } from "./../utils/constants.js";
import { LOCATION_ERROR_MESSAGE } from "./../utils/constants.js";
import { ERROR_MESSAGE } from "./../utils/constants.js";
import { pick } from "./../utils/functions.js";
import { save } from "./../utils/functions.js";
import { state } from "./state.js";
import { router } from "./../main.js";
import { API_KEY } from "./../utils/constants.js";
import { BASE_AUTH_URL } from "./../utils/constants.js";

export const updateListOfResult = ( {commit}, payload) => {
    commit("updateListOfResult", payload);
    router.push("/list");
    save(state);
};

export const updateCurrentProperty = ( {commit}, payload) => {
    commit("updateCurrentProperty", payload);
    router.push("/current");
};

export const updateFavouritesList = ( {commit}, payload) => {
    commit("updateFavouritesList", payload);
    router.push("/favourites");
    save(state);
};

export const removeFromFavouritesList = ( {commit}, payload) => {
    commit("removeFromFavouritesList", payload);
    router.push("/favourites");
    save(state);
};

export const updateSearchList = async ( {commit}, payload) => {
    try {
        const res = await axios.jsonp(`${BASE_URL}place_name=${payload}`, { timeout: 5000});
        const listings = pick(["response", "listings"], res);
        const locations = pick(["response", "locations"], res);
        const code = pick(["response", "application_response_code"], res);     

        if (locations.length > 1) {
            commit("updateLocations", locations);
            router("/locations");
        }
        if (listings.length) {
            commit("updateSearchList", listings);
            router.push("/result");
        } 
        if (code === SUCCESS_CODE) {
            commit("updateErrorText", LOCATION_ERROR_MESSAGE);
            router.push("/error");
        }
        save(state);
    } catch(error) {
        commit("updateErrorText", ERROR_MESSAGE);
        router.push("/error");
    }
};

export const updateWithGeo = async ( {commit} ) => {
    const position = {};

    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition( (pos) => {
            ({ coords: { latitude: position.a, longitude: position.b } } = pos);
        });
    }
    try {
        const res = await axios.jsonp(`${BASE_URL}centre_point=${position.a},${position.b}`, { timeout: 5000});
        const listings = pick(["response", "listings"], res);
        const code = pick(["response", "application_response_code"], res);

        if (listings.length) {
            commit("updateSearchList", listings);
            router.push("/result");
        }
        if (code === SUCCESS_CODE) {
            commit("updateErrorText", LOCATION_ERROR_MESSAGE);
            router.push("/error");
        }
        save(state);
    } catch(error) {
        commit("updateErrorText", ERROR_MESSAGE);
        router.push("/error");
    }
};

export const register = async ({ commit, dispatch }, payload) => {

    try {
        const { email, password } = payload;
        const res = await axios.post(`${BASE_AUTH_URL}signupNewUser?key=${API_KEY}`, {
                email,
                password,
                returnSecureToken: true
            });
        
        commit("authUser", {
            token: res.data.idToken,
            userId: res.data.localId
        });
        dispatch("storeUser", payload);
        save(state);
        router.push("/");
    } catch(error) {
        console.log(error);
    }
};

export const login = async ({ commit, dispatch }, payload) => {
    try {
        const { email, password } = payload;
        const res = await axios.post(`${BASE_AUTH_URL}verifyPassword?key=${API_KEY}`, {
            email,
            password,
            returnSecureToken: true
        });

        commit("authUser", {
            token: res.data.idToken,
            userId: res.data.localId
        });
        commit("initialiseStore", res.data.localId);
        router.push("/");
    } catch(error) {
        console.log(error);
    }
};

export const storeUser = async ({ commit, state }, payload) => {
    if (!state.idToken) {
        return;
    }

    try {
        const res = axios.post("https://property-cross-5b8de.firebaseio.com/users.json" + "?auth=" + state.idToken, payload);
    } catch(error) {
        console.log(error);
    }
};

export const logout = ({ commit }) => {
    commit("logout");
    router.replace("/login");
};
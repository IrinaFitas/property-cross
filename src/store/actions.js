import axios from "axios-jsonp-pro";
import { BASE_URL } from "./../utils/constants.js";
import { SUCCESS_CODE } from "./../utils/constants.js";
import { LOCATION_ERROR_MESSAGE } from "./../utils/constants.js";
import { ERROR_MESSAGE } from "./../utils/constants.js";
import { pick } from "./../utils/functions.js";
import { save } from "./../utils/functions.js";
import { state } from "./state.js";
import { router } from "./../main.js";

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

export const updateWithGeo = async ( {commit}, payload) => {
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
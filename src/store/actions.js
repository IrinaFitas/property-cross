import axios from "axios-jsonp-pro";
import { BASE_URL } from "./../utils/constants.js";
import { SUCCESS_CODE } from "./../utils/constants.js";
import { vm } from "./../main.js";
import { pick } from "./../utils/functions.js";

export const updateInputValue = ( {commit}, payload) => {
    commit("updateInputValue", payload);
};

export const updateListOfResult = ( {commit}, payload) => {
    commit("updateListOfResult", payload);
    vm.$router.push("/list");
};

export const updateCurrentProperty = ( {commit}, payload) => {
    commit("updateCurrentProperty", payload);
    vm.$router.push("/current");
};

export const updateFavouritesList = ( {commit}, payload) => {
    commit("updateFavouritesList", payload);
    vm.$router.push("/favourites");
};

export const updateSearchList = async ( {commit}, payload) => {
    try {
        const res = await axios.jsonp(`${BASE_URL}place_name=${payload}`, { timeout: 5000});
        const listings = pick(["response", "listings"], res);
        const locations = pick(["response", "locations"], res);
        const code = pick(["response", "application_response_code"], res);     
                         
        if (locations.length > 1) {
            commit("updateLocations", locations);
            vm.$router("/locations");
        }
        if (listings.length) {
            commit("updateSearchList", listings);
            vm.$router.push("/result");
        } 
        if (code === SUCCESS_CODE) {
            commit("updateErrorText", "The location given was not recognised.");
            vm.$router.push("/error");
        } 
    } catch(error) {
        commit("updateErrorText", "An error occurred while searching. Please check your network connection and try again");
        vm.$router.push("/error");
    }
};

export const updateWithGeo = async ( {commit}, payload) => {
    try {
        const res = await axios.jsonp(`${BASE_URL}centre_point=51.684183,-3.431481`, { timeout: 5000});
        const listings = pick(["response", "listings"], res);
        const code = pick(["response", "application_response_code"], res);

        if (listings.length) {
            commit("updateSearchList", listings);
            vm.$router.push("/result");
        }
        if (code === SUCCESS_CODE) {
            commit("updateErrorText", "The location given was not recognised.");
            vm.$router.push("/error");
        }
    } catch(error) {
        commit("updateErrorText", "An error occurred while searching. Please check your network connection and try again");
        vm.$router.push("/error");
    }
};
import axios from "axios-jsonp-pro";
import { BASE_URL } from "./../utils/constants.js";
import { vm } from "./../main.js";

export const updateInputValue = ( {commit}, payload) => {
    commit("updateInputValue", payload);
};

export const updateSearchList = ( {commit}, payload) => {
    axios.jsonp(`${BASE_URL}place_name=${payload}`, { timeout: 5000})
            .then( res => {
                if (res.response.locations.length > 1) {
                    commit("updateLocations", [...res.response.locations])
                    vm.$router("/locations");
                }
                if (res.response.listings.length) {
                    commit("updateSearchList", res.response.listings);
                    console.log(res);
                    vm.$router.push("/result");
                } else {
                    console.log(res);
                    if (res.response.application_response_code === "200") {
                        commit("updateErrorText", "The location given was not recognised.");
                        vm.$router.push("/error");
                    } 
                }
            })
            .catch(error => {
                commit("updateErrorText", "An error occurred while searching. Please check your network connection and try again");
                vm.$router.push("/error");
            });
};

export const updateWithGeo = ( {commit}, payload) => {
    axios.jsonp(`${BASE_URL}centre_point=51.684183,-3.431481`, { timeout: 5000})
        .then( response => {
            if (response.response.listings.length) {
                commit("updateSearchList", response.response.listings);
                vm.$router.push("/result");
            } else {
                if (res.response.application_response_code === "200") {
                    commit("updateErrorText", "The location given was not recognised.");
                    vm.$router.push("/error");
                }
            }
        })
        .catch(error => {
            commit("updateErrorText", "An error occurred while searching. Please check your network connection and try again");
            vm.$router.push("/error");
        });
};








// updateSearchList: async ( context, payload) => {
//     let response = await axios.jsonp(`http://api.nestoria.co.uk/api?country=uk&pretty=1&action=search_listings&encoding=json&listing_type=buy&page=1&place_name=leeds`);
//     let data = await response.response.listings;
//     context.commit("updateSearchList", data);
// }

import axios from "axios-jsonp-pro";
import { BASE_URL } from "./../utils/constants.js";
import { vm } from "./../main.js";
import { pick } from "./../utils/functions.js";

export const updateInputValue = ( {commit}, payload) => {
    commit("updateInputValue", payload);
};

export const updateSearchList = ( {commit}, payload) => {
    axios.jsonp(`${BASE_URL}place_name=${payload}`, { timeout: 5000})
            .then( res => {
                let listings = pick(["response", "listings"], res);
                let locations = pick(["response", "locations"], res);
                let code = pick(["response", "application_response_code"], res);
                
                if (locations.length > 1) {
                    commit("updateLocations", [...locations]);
                    vm.$router("/locations");
                }
                if (listings.length) {
                    commit("updateSearchList", listings);
                    console.log(res);
                    vm.$router.push("/result");
                } else {
                    if (code === "200") {
                        commit("updateErrorText", "The location given was not recognised.");
                        vm.$router.push("/error");
                    } 
                }
            })
            .catch(error => {
                console.log(error);
                commit("updateErrorText", "An error occurred while searching. Please check your network connection and try again");
                vm.$router.push("/error");
            });
};

export const updateWithGeo = ( {commit}, payload) => {
    axios.jsonp(`${BASE_URL}centre_point=51.684183,-3.431481`, { timeout: 5000})
        .then( res => {
            let listings = pick(["response", "listings"], res);
            let code = pick(["response", "application_response_code"], res);
            
            if (listings.length) {
                commit("updateSearchList", listings);
                vm.$router.push("/result");
            } else {
                if (code === "200") {
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

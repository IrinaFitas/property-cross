import Vue from "vue";
import Vuex from "vuex";
import axios from "axios-jsonp-pro";
import { BASE_URL } from "./../utils/constants.js";
import { pick } from "./../utils/functions.js";
import { vm } from "./../main.js";
Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        inputValue: "",
        searchList: [],
        errorText: ""
    },
    getters: {
        inputValue: state => {
            return state.inputValue;
        },
        searchList: state => {
            return state.searchList;
        },
        errorText: state => {
            return state.errorText;
        }
    },
    mutations: {
        updateInputValue: (state, payload) => {
            state.inputValue = payload;
        },
        updateSearchList: (state, payload) => {
            state.searchList.push(payload);
        },
        updateErrorText: (state, payload) => {
            state.errorText = payload;
        }
    },
    actions: {
        updateInputValue: ( {commit}, payload) => {
            commit("updateInputValue", payload);
        },
        // updateSearchList: async ( context, payload) => {
        //     let response = await axios.jsonp(`http://api.nestoria.co.uk/api?country=uk&pretty=1&action=search_listings&encoding=json&listing_type=buy&page=1&place_name=leeds`);
        //     let data = await response.response.listings;
        //     context.commit("updateSearchList", data);
        // }
        updateSearchList: ( {commit}, payload) => {
            axios.jsonp(`${BASE_URL}place_name=${payload}`)
                .then( res => {
                    if (res.response.listings.length) {
                        commit("updateSearchList", res.response.listings);
                        console.log(res);
                        vm.$router.push("/result");
                    } else {
                        console.log(res);
                        if (res.response.application_response_text === "unknown location") {
                            commit("updateErrorText", "The location given was not recognised.");
                        } 
                        vm.$router.push("/error");
                    }
                })
                .catch(error => commit("updateErrorText", "An error occurred while searching. Please check your network connection and try again"));
        },
        updateWithGeo: ( {commit}, payload) => {
            axios.jsonp(`${BASE_URL}centre_point=51.684183,-3.431481`)
                .then( response => {
                    if (response.response.listings.length) {
                        commit("updateSearchList", response.response.listings);
                        vm.$router.push("/result");
                    } else {
                        if (res.response.application_response_text === "unknown location") {
                            commit("updateErrorText", "The location given was not recognised.");
                        }
                        vm.$router.push("/error");
                    }
                })
                .catch(error => commit("updateErrorText", "An error occurred while searching. Please check your network connection and try again"));
        }
    }
});
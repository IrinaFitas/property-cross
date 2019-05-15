import Vue from "vue";
import Vuex from "vuex";
import axios from "axios-jsonp-pro";
// import router from "./../main.js";


Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        inputValue: "",
        searchList: []
    },
    getters: {
        inputValue: state => {
            return state.inputValue;
        },
        searchList: state => {
            return state.searchList;
        }
    },
    mutations: {
        updateInputValue: (state, payload) => {
            state.inputValue = payload;
        },
        updateSearchList: (state, payload) => {
            state.searchList.push(payload);
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
            axios.jsonp(`http://api.nestoria.co.uk/api?country=uk&pretty=1&action=search_listings&encoding=json&listing_type=buy&page=1&place_name=${payload}`)
                .then( response => {
                    if (response.response.listings.length) {
                        commit("updateSearchList", response.response.listings);
                        this.$router.push("some");
                    } else {
                        console.log("No home");
                        this.$router.push("error");
                    }
                })
                .catch(error => console.log(error));
        },
        updateWithGeo: ( {commit}, payload) => {
            axios.jsonp('http://api.nestoria.co.uk/api?country=uk&pretty=1&action=search_listings&encoding=json&listing_type=buy&page=1&centre_point=51.684183,-3.431481')
                .then( response => {
                    if (response.response.listings.length) {
                        commit("updateSearchList", response.response.listings);
                    } else {
                        console.log("No home");
                    }
                })
                .catch(error => console.log(error));
        }
    }
});
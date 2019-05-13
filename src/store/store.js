import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        inputValue: ""
    },
    getters: {
        inputValue: state => {
            return state.inputValue;
        }
    },
    mutations: {
        updateInputValue: (state, payload) => {
            state.inputValue = payload;
        }
    },
    actions: {
        updateInputValue: ( {commit}, payload) => {
            commit("updateInputValue", payload);
        }
    }
});
import Vue from "vue";
import Vuex from "vuex";
import { pick } from "./../utils/functions.js";
import { state } from "./state.js";
import * as getters from "./getters.js";
import * as mutations from "./mutations.js";
import * as actions from "./actions.js";
Vue.use(Vuex);

export const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions
});

import { save } from "./../utils/functions.js";
import { store } from "./store.js";

export const updateInputValue = (state, payload) => {
    state.inputValue = payload;
};

export const updateSearchList = (state, payload) => {
    state.searchList.push(payload);
    save(state);
};

export const updateErrorText = (state, payload) => {
    state.errorText = payload;
};

export const updateLocations = (state, payload) => {
    state.locations.push(payload);
    save(state);
};

export const updateListOfResult = (state, payload) => {
    state.listOfResult = payload;
    save(state);
};

export const updateCurrentProperty = (state, payload) => {
    state.currentProperty = payload;
};

export const updateFavouritesList = (state, payload) => {
    state.favouritesList.push(payload);
    save(state);
};

export const initialiseStore = (state) => {
    console.log(store);
    if (localStorage.getItem("state")) {
        // Object.assign(state, JSON.parse(localStorage.getItem("state")));
        store.replaceState(Object.assign(state, JSON.parse(localStorage.getItem("state"))));
    }
};
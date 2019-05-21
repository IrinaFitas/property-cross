export const updateSearchList = (state, payload) => {
    state.searchList.unshift(payload);
};

export const updateErrorText = (state, payload) => {
    state.errorText = payload;
};

export const updateLocations = (state, payload) => {
    state.locations.push(payload);
};

export const updateListOfResult = (state, payload) => {
    state.listOfResult = payload;
};

export const updateCurrentProperty = (state, payload) => {
    state.currentProperty = payload;
};

export const updateFavouritesList = (state, payload) => {
    state.favouritesList.push(payload);
};

export const initialiseStore = (state) => {
    const savedState = localStorage.getItem("state");
    if (savedState) {
        const initialState = JSON.parse(savedState);
        Object.assign(state, initialState);
    }
};
export const updateInputValue = (state, payload) => {
    state.inputValue = payload;
};

export const updateSearchList = (state, payload) => {
    state.searchList.push(payload);
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
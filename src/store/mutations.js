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
    state.favourite.push(payload);
};

export const removeFromFavouritesList = (state, payload) => {
    const ind = state.favourite.findIndex( elem => {
        return elem.title === payload.title;
    });
    state.favourite.splice(ind, 1);
};

export const initialiseStore = (state, payload) => {
    console.log('INITIAL STORE');
    const savedState = localStorage.getItem(payload);
    if (savedState) {
        const initialState = JSON.parse(savedState);
        Object.assign(state, initialState);
    }
};

export const authUser = (state, payload) => {
    console.log(payload);
    state.idToken = payload.token;
    state.userId = payload.userId;
};

export const storeUser = (state, payload) => {
    console.log(payload);
    state.user = payload;
};

export const logout = (state) => {
    state.idToken = null;
    state.userId = null;
};

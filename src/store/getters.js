export const searchList = state => {
    return state.searchList;
};

export const errorText = state => {
    return state.errorText;
};

export const locations = state => {
    return state.locations;
};

export const listOfResult = state => {
    return state.listOfResult;
};

export const currentProperty = state => {
    return state.currentProperty;
};

export const favourite = state => {
    return state.favourite;
};

export const checkInFavourite = state => title => {
    return state.favourite.some(elem => elem.title === title);
}
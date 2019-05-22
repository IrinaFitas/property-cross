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

export const favouritesList = state => {
    return state.favouritesList;
};

export const checkInFavourite = state => title => {
    return !!state.favouritesList.find(elem => elem.title === title);
}
import InitialPage from "./components/InitialPage.vue";
import SuccsessfulSearches from "./components/SuccsessfulSearches.vue";
import ErrorSearch from "./components/ErrorSearch.vue";
import ListOfResult from "./components/ListOfResult.vue";
import ListOfLocation from "./components/ListOfLocation.vue";
import CurrentProperty from "./components/CurrentProperty.vue";

export const routes = [
    { path: "", component: InitialPage, children: [
        { path: "/result", component: SuccsessfulSearches},
        { path: "/error", component: ErrorSearch},
        { path: "/list", component: ListOfResult},
        { path: "/locations", component: ListOfLocation},
        { path: "/current", component: CurrentProperty}
    ]},
    { path: "*", redirect: "/"}
];
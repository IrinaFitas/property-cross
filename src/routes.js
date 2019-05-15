import InitialPage from "./components/InitialPage.vue";
import SuccsessfulSearches from "./components/SuccsessfulSearches.vue";
import ErrorSearch from "./components/ErrorSearch.vue";

export const routes = [
    { path: "", component: InitialPage, children: [
        { path: "/result", component: SuccsessfulSearches},
        { path: "/error", component: ErrorSearch},
        { path: "/list", component: ErrorSearch}
    ]},
    { path: "*", redirect: "/"}
];
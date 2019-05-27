import InitialPage from "./components/InitialPage.vue";
import SuccsessfulSearches from "./components/SuccsessfulSearches.vue";
import ErrorSearch from "./components/ErrorSearch.vue";
import ListOfResult from "./components/ListOfResult.vue";
import ListOfLocation from "./components/ListOfLocation.vue";
import CurrentProperty from "./components/CurrentProperty.vue";
import Favourites from "./components/Favourites.vue";
import RegistrationForm from "./components/RegistrationForm.vue";
import Login from "./components/Login.vue";
import Header from "./components/Header.vue";
import { state } from "./store/state";

export const routes = [
    { path: "", component: InitialPage,
        children: [
           { path: "result", component: SuccsessfulSearches},
           { path: "error", component: ErrorSearch}
       ],
        beforeEnter(to, from, next) {
            console.log('asdasdasd');
            if (state.idToken) {
                next();
            } else {
                next("/form");
            }
        }
    },
    { path: "/list", component: ListOfResult},
    { path: "/locations", component: ListOfLocation},
    { path: "/current", component: CurrentProperty},
    { path: "/favourites", component: Favourites},
    { path: "/form", component: RegistrationForm},
    { path: "/login", component: Login},
    { path: "*", redirect: "/"}
];
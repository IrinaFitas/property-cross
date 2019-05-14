<template>
    <div id="container">
        <div class="top-bar">
            <h1>PropertyCross</h1>
            <app-favourite-button></app-favourite-button>
        </div>
        <p class="instruction-text">
            Use the form below to search for houses to buy. You can search by place-name, postcode, or click 'My location', to search in your current location!
        </p>
        <app-search-field></app-search-field>
        <app-go-button></app-go-button>
        <app-my-location-button></app-my-location-button>

        <p>Recent searches:</p>
    </div>
</template>

<script>
import GoButton from "./buttons/GoButton.vue";
import FavouriteButton from "./buttons/FavouriteButton.vue";
import MyLocationButton from "./buttons/MyLocationButton.vue";
import SearchField from "./buttons/SearchField.vue";
import { mapGetters } from "vuex";
export default {
    components: {
        appGoButton: GoButton,
        appFavouriteButton: FavouriteButton,
        appMyLocationButton: MyLocationButton,
        appSearchField: SearchField
    },
    computed: {
        ...mapGetters([
            "searchList"
        ])
    },
    mounted() {
        console.log(this.searchList);
    }
}
</script>

<style>
    #container {
        width: 90%;
        margin: 0 auto;
    }

    .top-bar {
        display: flex;
    }

    h1 {
        margin-left: auto;
    }
</style>




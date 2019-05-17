<template>
    <div id="container">
        <div class="top-bar">
            <h1>PropertyCross</h1>
            <button class="btn faves-btn" type="button" @click="showFavourite">Faves</button>
        </div>
        <p class="instruction-text">
            Use the form below to search for houses to buy. You can search by place-name, postcode, or click 'My location', to search in your current location!
        </p>
        <div>
            <input class="btn search-field" 
                type="search" placeholder="newcastle"
                v-model="input"
                @keyup.enter="updateValue">
        </div>
        <button class="btn" type="button" @click="updateValue">Go</button>
        <button class="btn" type="button" @click="updateWithGeo">My Location</button>

        <router-view></router-view>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
    data () {
        return {
            input: ""
        }
    },
    computed: {
        ...mapGetters([
            "searchList"
        ])
    },
    methods: {
        ...mapActions([
            "updateWithGeo",
            "updateSearchList"
        ]),
        updateValue() {
            this.updateSearchList(this.input);
        },
        showFavourite() {
            this.$router.push("/favourites");
        }
    }
}
</script>

<style scoped>
    @import "../css/constants.css";

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
    .btn {
        padding: 10px 15px;
        margin: 5px;
        border: 2px solid var(--main-color);
        background-color: transparent;
        font-size: var(--font-size);
        text-transform: uppercase;
        color: var(--main-color);
        font-weight: bold;
        outline: none;
        cursor: pointer;
    }

    .faves-btn {
        margin-left: auto;
        flex-shrink: 0;
        align-self: center;
        width: 150px;
        height: 40px;
        padding: 0;
    }

    .search-field {
        width: 300px;
    }
</style>




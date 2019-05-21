<template>
    <div id="container">
        <div class="top-bar">
            <h1>PropertyCross</h1>
            <a-button class="faves-btn" @click="showFavourite">Faves</a-button>
        </div>
        <p class="instruction-text">
            Use the form below to search for houses to buy. You can search by place-name, postcode, or click 'My location', to search in your current location!
        </p>        
        <div class="search-field">
            <a-input size="large" type="search" placeholder="newcastle" v-model="input" @keyup.enter="updateValue"/>
        </div>
        <a-button class="btn" @click="updateValue">Go</a-button>
        <a-button class="btn" @click="updateWithGeo">My Location</a-button>

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
        line-height: 0.5;
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
        font-size: var(--font-size);
        border: 2px solid var(--main-color);
        color: var(--main-color);
    }

    .search-field {
        margin: 0 auto;
        width: 300px;        
    }

    .search-field input {
        border: 2px solid var(--main-color);
        font-size: var(--font-size);
        outline: none;
        cursor: pointer;
    }
</style>
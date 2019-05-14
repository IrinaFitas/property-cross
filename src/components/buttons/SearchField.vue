<template>
    <div>
        <input class="btn search-field" 
            type="search" placeholder="newcastle" 
            :value="value" 
            @input="updateValue"
            @keyup.enter="showTheHouses">
        <p>{{ value }}</p>
    </div>
</template>

<script>
import axios from "axios-jsonp-pro";

export default {
    computed: {
        value() {
            return this.$store.getters.inputValue;
        }
    },
    methods: {
        updateValue(event) {
            this.$store.dispatch("updateInputValue", event.target.value)
        },
        showTheHouses() {
            axios.jsonp("http://api.nestoria.co.uk/api?country=uk&pretty=1&action=search_listings&encoding=json&listing_type=buy&page=1&place_name=leeds")
                .then( response => {
                    console.log(response);
                })
                .catch(error => console.log(error));
        }
    }
}
</script>

<style>
    .search-field {
        width: 300px;
    }
</style>

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
            this.$http.get("http://api.nestoria.co.uk/api?country=uk&pretty=1&action=search_listings&encoding=json&listing_type=buy&page=1&place_name=albury")
                .then( response => response.json())
                .then(data => console.log(data));
        }
    }
}
</script>

<style>
    .search-field {
        width: 300px;
    }
</style>

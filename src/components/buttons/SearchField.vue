<template>
    <div>
        <input class="btn search-field" type="search" placeholder="newcastle" :value="value" @input="updateValue">
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
        }
    }
}
</script>

<style>
    .search-field {
        width: 300px;
    }
</style>

<template>
    <div id="container">
        <div class="top-bar">
            <h3>Property Details</h3>
            <button type="btn" class="add-btn" @click="updateFavouritesList(currentProperty)">+</button>
        </div>
        <div class="content">
            <p>{{ currentProperty.price_formatted }}</p>
            <p>{{ currentProperty.title }}</p>
            <img :src="currentProperty.img_url" alt="">
            <p>{{ currentProperty.bedroom_number }} bed, {{ currentProperty.bathroom_number }} baths</p>
            <p>{{ currentProperty.summary }}</p>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
    computed: {
        ...mapGetters(["currentProperty"])
    },
    methods: {
        ...mapActions(["updateFavouritesList"])
    }
}
</script>

<style scoped>
    @import "../css/constants.css";

    #container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .add-btn {
        height: 25px;
        align-self: center;
        background-color: transparent;
        padding: 0px 15px;
        margin-left: 20px;
        outline: none;
        cursor: pointer;
        font-weight: bold;
        font-size: 20px;
        color: var(--main-color);
        box-shadow: 2px 2px 5px 0 rgba(92, 92, 138, 0.5);
    }
</style>




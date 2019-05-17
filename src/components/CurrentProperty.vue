<template>
    <div id="container">
        <div class="top-bar">
            <h3>Property Details</h3>
            <button type="btn">+</button>
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
import { mapGetters } from "vuex";
export default {
    computed: {
        ...mapGetters(["currentProperty"])
    },
    mounted() {
        console.log(this.currentProperty);
    }
}
</script>


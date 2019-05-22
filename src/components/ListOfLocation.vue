<template>
    <div class="container">
        <app-navigation></app-navigation>
        <p>Locations</p>
        <p 
            v-for="(item, index) in locations" 
            :key="index"
            @click="some">
            Location #{{ index + 1 }} ({{ item.length }})
        </p>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import Navigation from "./Navigation.vue";

export default {
    components: {
        appNavigation: Navigation
    },
    computed: {
        ...mapGetters([
            "locations"
        ])
    }
}
</script>

<style scoped>
.container {
    position: relative;
}</style>
<template>
    <div class="container">
        <app-navigation></app-navigation>
        <p>{{ listOfResult.length }} of {{ listOfResult.length }} matches</p>
        <ul>
            <li v-for="(item, index) in listOfResult" :key="index" @click="updateCurrentProperty(item)">
                <div class="box">
                    <img :src="item.thumb_url" alt="">
                    <p>{{ item.price_formatted }}</p>
                    <p>{{ item.title }}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Navigation from "./Navigation.vue";

export default {
    components: {
        appNavigation: Navigation
    },
    computed: {
        ...mapGetters(["listOfResult"])
    },
    methods: {
        ...mapActions(["updateCurrentProperty"])
    }
}
</script>


<style scoped>
@import "../css/constants.css";
.container {
    position: relative;
}
ul {
    list-style: none;
    margin: 0;
    padding: 0;
}
li {
    padding: 0;
}
.box {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    border: 1px solid var(--main-color);
    margin: 5px;
    cursor: pointer;
}
.box:hover {
    background-color: var(--main-color-hover);
}
.picture {
    width: 80px;
    height: 60px;
    margin: 0 10px;
}
</style>
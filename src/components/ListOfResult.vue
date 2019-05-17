<template>
    <div class="container">
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

export default {
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
    
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
    .box {
        display: flex;
        align-items: center;
        width: 100%;
        border: 1px solid var(--main-color);
        margin: 5px;
    }
    .picture {
        width: 80px;
        height: 60px;
        margin: 0 10px;
    }
</style>


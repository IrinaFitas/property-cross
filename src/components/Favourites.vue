<template>
    <div class="container">
        <h3>Favourites</h3>
        <p v-if="!favouritesList.length">You have not added any properties to your favourites</p>
        <ul>
            <li v-for="(item, index) in favouritesList" :key="index">
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
import { mapGetters } from "vuex";

export default {
    computed: {
        ...mapGetters(["favouritesList"])
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
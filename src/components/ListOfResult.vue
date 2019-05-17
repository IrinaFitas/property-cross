<template>
    <div class="container">
        <ul>
            <li v-for="(item, index) in listOfResult" :key="index">
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
        ...mapGetters(["listOfResult"])
    },
    mounted() {
        console.log(this.listOfResult);
    }
}
</script>


<style scoped>
.container {
}
ul {
    list-style: none;
    margin: 0;
    padding: 0;
}
.box {
    display: flex;
    align-items: center;
    width: 100%;
    border: 1px solid #2c3e50;
    margin: 5px;
}
.picture {
    width: 80px;
    height: 60px;
    margin: 0 10px;
}
</style>


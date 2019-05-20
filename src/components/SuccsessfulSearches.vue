<template>
    <div>
    <p>Recent searches:</p>
        <div class="box">
            <p v-for="(item, index) in searchList" :key="index" @click="updateListOfResult(item)">Search #{{ index + 1 }} ({{ item.length }})</p>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
    computed: {
        ...mapGetters([
            "searchList"
        ])
    },
    methods: {
        ...mapActions([
            "updateSearchList",
            "updateListOfResult"
        ]) 
    }
    // ,
    // mounted() {
    //     if (JSON.parse(localStorage.getItem("state")).searchList) {
    //         console.log("Some");
    //     }
    // }
}
</script>
<style scoped>
    @import "../css/constants.css";
    .box {
        width: 50%;
        margin: 0 auto;
        border: 2px solid var(--main-color);
    }
    .box p {
        padding: 16px;
        margin: 0;
        cursor: pointer;
    }
</style>
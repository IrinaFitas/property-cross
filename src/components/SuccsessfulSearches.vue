<template>
    <div>
    <p>Recent searches:</p>
        <div class="box">
            <p v-for="(item, index) in searchList" :key="index">Search #{{ index + 1 }} ({{ item.length }})</p>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
    computed: {
        ...mapGetters([
            "searchList"
        ])
    },
    methods: {
        ...mapActions([
            "updateSearchList"
        ])
    }
}
</script>
<style>
    .box {
        width: 50%;
        margin: 0 auto;
        border: 2px solid #2c3e50;
    }
</style>



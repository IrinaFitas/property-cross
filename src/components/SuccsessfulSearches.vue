<template>
    <div>
    <p>Recent searches:</p>
        <div>
            <p v-for="(item, index) in searchList" :key="index">Search #{{ index }} ({{ item.length }})</p>
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


<template>
    <div>
        <input class="btn search-field" 
            type="search" placeholder="newcastle" 
            v-model="input"
            @keyup.enter="updateValue">
        <!-- <p>{{ inputValue }}</p> -->
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
    data () {
        return {
            input: ""
        }
    },
    // computed: {
    //     ...mapGetters([
    //         "inputValue"
    //     ])
    // },
    methods: {
        ...mapActions([
            "updateSearchList"
        ]),
        updateValue() {
            this.updateSearchList(this.input);
        }
    }
}
</script>

<style>
    .search-field {
        width: 300px;
    }
</style>

<template>
    <div class="box">
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

export default {
    computed: {
        ...mapGetters([
            "locations"
        ])
    }
}
</script>

<style scoped>

</style>




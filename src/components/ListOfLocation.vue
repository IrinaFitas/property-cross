<template>
    <div class="box">
        <p v-for="(item, index) in locations" :key="index">Location #{{ index + 1 }} ({{ item.length }})</p>
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
</script>


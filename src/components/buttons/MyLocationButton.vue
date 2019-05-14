<template>
    <button class="btn" type="button" @click="updateWithGeo">My Location</button>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    methods: {
        ...mapActions([
            "updateWithGeo"
        ])
    }
}
</script>


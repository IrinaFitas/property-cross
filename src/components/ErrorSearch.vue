<template>
    <p>{{ errorText }}</p>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    computed: {
        ...mapGetters(["errorText"])
    }
}
</script>


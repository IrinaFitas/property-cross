<template>
    <a-radio-group class="nav">
        <a-radio-button class="nav-btn" @click="goPrev">Previous</a-radio-button>
        <a-radio-button class="nav-btn" @click="goMain">Main</a-radio-button>
    </a-radio-group>
</template>

<script>
export default {
    methods: {
        goPrev() {
            console.log("prev");
            this.$router.go(-1);
        },
        goMain() {
            console.log("main");
            this.$router.push("/result");
        }
    }
}
</script>

<style scoped>
    .nav {
        border: none;
        font-size: 16px;
        color: var(--main-color);
        position: absolute;
        top: 0;
        left: 15px;
    }
    .nav-btn {
        border: 1px solid var(--main-color);
        box-shadow: none;
        color: var(--main-color);
    }
    .nav-btn:first-child {
        border: 1px solid var(--main-color);
        color: var(--main-color);
    }
    .nav-btn:first-child:hover {
        color: #1890ff;
        border-color: #1890ff;
    }
</style>



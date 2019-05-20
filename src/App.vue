<template>
  <div id="app">
	  <router-view></router-view>
  </div>
</template>

<script>
import InitialPage from "./components/InitialPage.vue";
export default {
	components: {
		appInitialPage: InitialPage
	}
}
</script>

<style>
@import "./css/constants.css";
#app {
	display: flex;
	flex-direction: column;
	align-content: center;
	font-family: Courier, sans-serif, monospace;
	font-size: var(--font-size);
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: var(--main-color);
	margin-top: 60px;
}
</style>
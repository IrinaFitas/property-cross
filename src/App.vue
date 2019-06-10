<template>
  <div id="app">
	<app-header></app-header>
	<router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
export default {
	components: {
		"app-header": Header
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
<template>
  <div id="app">
	  <!-- <app-initial-page></app-initial-page> -->
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
#app {
	font-family: Courier, sans-serif, monospace;
	font-size: 16px;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>

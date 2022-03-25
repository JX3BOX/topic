<template>
	<div id="app">
		<Header></Header>
		<div class="p-topic-container">
			<div class="m-topic-index">
				<Nav />
			</div>
		</div>
		<Footer class="p-topic-footer"></Footer>
	</div>
</template>

<script>
import Nav from "@/components/index/Nav.vue";
export default {
	name: "App",
	components: { Nav },
};
</script>

<style lang="less">
@import "~@/assets/css/index/index.less";
</style>

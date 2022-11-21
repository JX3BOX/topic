<template>
	<!-- 专题页 -->
	<div class="p-topic" :class="'v-' + page_name">
		<Header :overlayEnable="true"></Header>
		<router-view></router-view>
		<div class="p-topic-footer">
			<div class="wp">
				<Footer></Footer>
			</div>
		</div>
	</div>
</template>

<script>
import { postStat } from "@jx3box/jx3box-common/js/stat";
import { __imgPath } from "@jx3box/jx3box-common/data/jx3box.json";
export default {
	name: "App",
	props: [],
	components: {},
	data: function () {
		return {};
	},
	provide: {
		__imgRoot: __imgPath + "topic/demo/",
	},
	computed: {
		page_name: function () {
			return this.$route.name;
		},
	},
	watch: {},
	methods: {},
	filters: {},
	created: function () {
		postStat("topic", "hengdaoduanlang");
	},
	mounted: function () {},
};
</script>

<style lang="less">
@import "../../assets/css/common/common.less";
//滚动条美化
::-webkit-scrollbar {
    width: 2px;
    height: 7px;
    background-color: #f5f5f5;
}
::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #f5f5f5;
}
::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
    background-color: #c8c8c8;
}
</style>

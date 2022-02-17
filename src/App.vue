<template>
    <div id="app">
        <Header></Header>
        <div class="p-topic-container">
            <div class="m-topic-index">

                资料片导航

            </div>
        </div>
        <Footer class="p-topic-footer"></Footer>
    </div>
</template>

<script>
import { getAppIcon } from "@jx3box/jx3box-common/js/utils";
export default {
    name: "App",
    props: [],
    data: function () {
        return {};
    },
    computed: {},
    methods: { getAppIcon },
    components: {},
};
</script>

<style lang="less">
@import "~@/assets/css/index/index.less";
</style>

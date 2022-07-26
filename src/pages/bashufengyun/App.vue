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
export default {
    name: "App",
    data: function() {
        return {};
    },
    computed: {
        page_name: function() {
            return this.$route.name;
        },
    },
    created: function() {
        postStat("topic", "bashufengyun");
    },
    mounted: function() {},
};
</script>
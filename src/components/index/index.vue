<template>
    <div class="m-navigation">
        <!-- 第一屏 -->
        <div class="m-first">
            <div class="u-bg-line p-animation" :class="logoAnimation"></div>
            <div class="u-navigation">
                <span class="u-button u-std p-animation" :class="stdAnimation" @click="addAnimation('std')"></span>
                <span class="u-logo p-animation" :class="logoAnimation"></span>
                <span
                    class="u-button u-origin p-animation"
                    :class="originAnimation"
                    @click="addAnimation('origin')"
                ></span>
            </div>
        </div>
        <!-- 点击后显示第二屏 -->
        <div class="m-list p-animation" :class="listShow">
            <div class="m-content">
                <div class="u-list-client" v-if="client == 'std'">
                    <span class="u-button u-std"></span>
                </div>
                <div class="m-scroll" v-dragscroll>
                    <div class="u-list" v-for="item in 5" :key="item">
                        <a href="http://" target="_blank" class="u-link"><img src="../../assets/img/home/normal.png" /></a>
                        <img src="../../assets/img/home/circle.png">
                        <span class="u-title">未知</span>
                        <span class="u-time">2022</span>
                    </div>
                </div>

                <div class="u-list-client" v-if="client == 'origin'">
                    <span class="u-button u-origin"></span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Index",
    data: function () {
        return {
            loading: false,
            stdAnimation: "",
            logoAnimation: "",
            originAnimation: "",
            listShow: "",
            client: "",
        };
    },
    computed: {},
    watch: {},
    methods: {
        addAnimation(type) {
            if (type == "std") {
                this.stdAnimation = "fadeOutLeft";
                this.logoAnimation = "fadeOut";
                this.originAnimation = "fadeOut";
                this.client = "std";
            } else {
                this.stdAnimation = "fadeOut";
                this.logoAnimation = "fadeOut";
                this.originAnimation = "fadeOutRight";
                this.client = "origin";
            }
            setTimeout(() => {
                this.listShow = "show fadeIn";
            }, 500);
        },
    },
    created: function () {},
    mounted: function () {},
};
</script>
<style lang="less">
@import "~@/assets/css/common/animation.less";
@import "~@/assets/css/index/navigation.less";
</style>

<template>
    <div class="m-bashufengyun" ref="fullPage" :style="height">
        <div
            class="fullPageContainer"
            ref="fullPageContainer"
            @mousewheel="mouseWheelHandle"
            @DOMMouseScroll="mouseWheelHandle"
        >
            <template v-for="item in 6">
                <div
                    class="section"
                    :class="`section${item}`"
                    :style="[background(item), height]"
                    v-if="item == 1 || item == 6"
                    :key="item"
                ></div>
                <el-carousel arrow="always" :autoplay="false" :loop="false" :key="`${item}`" v-else height="800px">
                    <el-carousel-item
                        class="child"
                        v-for="k in imgLen[item]"
                        :key="k"
                        :style="childBackground(item, k)"
                    >
                    </el-carousel-item>
                </el-carousel>
            </template>
        </div>
    </div>
</template>
<script>
export default {
    name: "Index",

    data() {
        return {
            current: 1,
            isScrolling: false,
            deltaY: 0,
            imgLen: {
                2: 3,
                3: 5,
                4: 4,
                5: 6,
            },
        };
    },
    computed: {
        height() {
            return this.current == 1 ? { height: "1066px" } : { height: "800px" };
        },
        mobileImg() {
            let arr = [];
            for (let index = 1; index < 7; index++) {
                if (index == 1 || index == 6) {
                    arr.push(index);
                } else {
                    for (let k = 0; k < this.imgLen[index]; k++) {
                        arr.push(`${index}_0${k + 1}`);
                    }
                }
            }
            return arr;
        },
    },
    methods: {
        background(i) {
            return { backgroundImage: `url(https://img.jx3box.com/topic/bashufengyun/home_0${i}.png)` };
        },
        childBackground(i, k) {
            return { backgroundImage: `url(https://img.jx3box.com/topic/bashufengyun/home_0${i}_0${k}.png)` };
        },
        // 往下切换
        next() {
            let len = 6; // 页面的个数
            if (this.current + 1 <= len) {
                this.current += 1;
                this.move(this.current);
            }
        },
        // 往上切换
        pre() {
            if (this.current - 1 > 0) {
                this.current -= 1;
                this.move(this.current);
            }
        },
        // 移动
        move(index) {
            this.isScrolling = true;
            this.directToMove(index);
            setTimeout(() => {
                //这里的动画是1s执行完，使用setTimeout延迟1s后解锁
                this.isScrolling = false;
            }, 1010);
        },
        // 滚动
        directToMove(index) {
            const section1H = 800;
            let height = this.$refs["fullPage"].clientHeight;
            let scrollPage = this.$refs["fullPageContainer"];
            let scrollHeight;
            scrollHeight =
                index == 1 ? -(index - 1) * height + "px" : -(index - 1) * height - (section1H - height) + "px";
            console.log(scrollHeight);
            scrollPage.style.transform = `translateY(${scrollHeight})`;
            this.current = index;
        },
        // 鼠标移动
        mouseWheelHandle(event) {
            let evt = event || window.event;
            if (evt.stopPropagation) {
                evt.stopPropagation();
            } else {
                evt.returnValue = false;
            }
            if (this.isScrolling) return false;
            let e = event.originalEvent || event;
            this.deltaY = e.deltaY || e.detail;
            if (this.deltaY > 0) {
                this.next();
            } else if (this.deltaY < 0) {
                this.pre();
            }
        },
    },
    mounted: function () {},
};
</script>

<style lang="less">
@import "../../assets/css/bashufengyun/index.less";
</style>

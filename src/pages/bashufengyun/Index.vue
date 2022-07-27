<template>
    <div class="m-index">
        <div class="m-bashufengyun" ref="fullPage" :style="height" v-if="!mobile">
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
        
        <div v-else @touchstart="handleTouchstart" @touchend="handleTouchend">
            <slider :height="mobileHeight" :autoplay="false" animation="fade" :indicators="false" v-model="sliderIndex">
                <slider-item class="child" v-for="index in mobileList" :key="index" :style="background(index)">
                </slider-item>
            </slider>
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
            mobile: false,
            imgLen: {
                2: 3,
                3: 5,
                4: 4,
                5: 6,
            },
            mobileHeight: "",
            sliderIndex: 0,
            startTime: "",
            startX: "",
            startY: "",
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
        mobileList() {
            let list = [];
            for (let i = 1; i < 7; i++) {
                if (i == 1 || i == 6) {
                    list.push(i + "");
                } else {
                    for (let k = 0; k < this.imgLen[i]; k++) {
                        list.push(i + "_0" + (k + 1));
                    }
                }
            }
            return list;
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
        //屏幕滑动
        //手指按下屏幕
        handleTouchstart(event) {
            this.startTime = Date.now();
            this.startX = event.changedTouches[0].clientX;
            this.startY = event.changedTouches[0].clientY;
        },
        //手指离开屏幕
        handleTouchend(event) {
            const endTime = Date.now();
            const endX = event.changedTouches[0].clientX;
            const endY = event.changedTouches[0].clientY;
            //判断按下的时长
            if (endTime - this.startTime > 2000) {
                return;
            }
            //滑动的方向
            let direction = "";
            //先判断用户滑动的距离，是否合法，合法:判断滑动的方向 注意 距离要加上绝对值
            if (Math.abs(endY - this.startY) > 10) {
                // Math.abs(endX - this.startX) > 10
                //滑动方向
                if (Math.abs(endX - this.startX) > 100) {
                    // Math.abs(endY - this.startY) > 30
                    // console.log( "y方向偏移太多，不让你滑了")
                    return;
                } else {
                    direction = endY - this.startY > 0 ? "right" : "left";
                    // direction = endX - this.startX > 0 ? "right" : "left";
                }
            } else {
                return;
            }
            //用户做了合法的滑动操作
            if (direction === "left") {
                if (this.sliderIndex + 1 === this.mobileList.length) {
                    this.sliderIndex = 0;
                    return;
                } else {
                    this.sliderIndex++;
                }
            }
            if (direction === "right") {
                if (this.sliderIndex === 0) {
                    this.sliderIndex = this.mobileList.length;
                    return;
                } else {
                    this.sliderIndex--;
                }
            }
        },
    },
    created() {
        const width = document.documentElement.clientWidth;
        const height = document.documentElement.clientHeight;
        if (width < height) {
            this.mobile = true;
            this.mobileHeight = width + "px";
        }
    },
    mounted() {
        document.addEventListener(
            "touchmove",
            function (ev) {
                ev.preventDefault();
            },
            { passive: false }
        );
    },
};
</script>

<style lang="less">
@import "../../assets/css/bashufengyun/index.less";
</style>

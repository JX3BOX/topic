<template>
    <div class="m-box">
        <div class="m-index">
            <!--        第一屏-->
            <div class="m-p1 p-animation fadeIn">
                <div class="m-title">
                    <img :src="imgurl + 'jyxd.png'" class="p-animation fadeIn" />
                    <div class="u-ljcq p-animation fadeIn">
                        <a href="#p2">
                            <img :src="imgurl + 'ljxq.png'" @click="ljxqclick" class="u-img" />
                        </a>
                    </div>
                </div>
                <div class="m-tips p-animation fadeIn">
                    注：本桌游建议5-10人参与游戏，建议使用Excel或记录纸，以获得更好的游戏体验。<br />
                    本桌游虽由魔盒百强赛奖励20面骰子而生，但并不强制要求使用同骰子。
                </div>
                <div class="m-qrcode">
                    <img :src="imgurl + 'qrcode.jpg'" />
                </div>
            </div>
            <!--        第二屏-->
            <div class="m-p2 p-animation fadeIn" id="p2">
                <div class="m-p2-content">
                    <img :src="imgurl + 'p2-title.png'" class="p-animation fadeIn" />
                    <div class="u-text p-animation fadeIn">
                        每位玩家建立一个侠客角色，指定其门派、体型。每个玩家自选加点，确定侠客各项属性数值。<br />
                        每个门派拥有1-2个属性类型，属性类型永久恒定，不因后期属性数值变化而变化。<br />
                        注：所有玩家属性永久公开。<br /><br />

                        本游戏一共有5个属性类型，4个条件类型。<br />
                        自选属性单位为5，自选属性点数必须马上使用，自选后每一属性均不可超过50。<br />
                        自选条件单位为5，自选条件点数必须马上使用，自选后每一条件均不可超过40。<br /><br />
                    </div>
                </div>
            </div>
            <!-- 第三屏-->
            <div class="m-p3 p-animation fadeIn">
                <div class="m-p3-content p-animation fadeIn">
                    <img :src="imgurl + 'p3-title.png'" class="p-animation fadeIn" />
                    <div class="u-text p-animation fadeIn">
                        所有玩家选择一个棋子单位代表自身，置于地图初始位置稻香村。而后向长安方向前进。<br />
                        以-掷骰-抽牌-前进的顺序，掷得同属性门派获得前进1-2步资格，掷得其余门派获得前进1步资格，<br />
                        掷得剑网三logo或魔盒logo获得前进1-3步资格。抽牌后玩家自由决定卡牌效果在侠客行动之前或之后生效。<br />
                        牌库不可翻动，牌库抽完后重新洗牌。<br /><br />

                        注：在江湖游历阶段，某玩家任一属性达到100点或达成其他胜利条件即获得胜利，其他玩家可继续游戏。<br />
                        若某玩家任一属性类型降为0，则该玩家重伤。若某玩家任一条件降为0，则该玩家重伤。重伤玩家被淘汰。<br /><br />
                    </div>
                </div>
            </div>
            <!--        第四屏-->
            <div class="m-p4 p-animation fadeIn">
                <div class="m-p4-title">
                    <img :src="imgurl + 'jyxd.png'" class="p-animation fadeIn" />
                    <div class="u-btn p-animation fadeIn">
                        <img :src="imgurl + 'download.png'" @click="toastMsg" />
                        <span class="u-text" @click="goHome">返回主页</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
const KEY = "jianyuxiadao";
import { __imgPath } from "@jx3box/jx3box-common/data/jx3box.json";
export default {
    name: "Index",
    props: [],
    components: {},
    data: function () {
        return {
            imgurl: __imgPath + "/topic/jianyuxiadao/",
        };
    },
    directives: {
        animate: {
            inserted: function (el, binding) {
                binding.addClass = () => {
                    const { top } = el.getBoundingClientRect();
                    const h = document.documentElement.clientHeight || document.body.clientHeight;
                    if (top < h) {
                        if (el.className.indexOf(binding.value) == -1) {
                            // 初次还未绑定过，则新增类名(注意：下面单引号中间是一个空格！！！)
                            el.className = binding.value + " " + el.className;
                        }
                        if (binding.addClass) {
                            window.removeEventListener("scroll", binding.addClass);
                        }
                    }
                };
                window.addEventListener("scroll", binding.addClass, true);
                binding.addClass();
            },
            unbind: function (el, binding) {
                if (binding.addClass) {
                    window.removeEventListener("scroll", binding.addClass);
                }
            },
        },
    },
    computed: {
        data: function () {
            let _data = {};
            this.raw.forEach((item) => {
                if (!_data[item.subtype]) {
                    _data[item.subtype] = [];
                }
                _data[item.subtype].push(item);
            });
            return _data;
        },
    },
    watch: {},
    methods: {
        ljxqclick() {},
        goHome() {
            this.ljxqclass = "fadeIn";
            setTimeout(() => {
                this.active = 1;
            }, 200);
        },
        toastMsg() {
            alert("百强结榜后放出，敬请期待");
        },
    },
    filters: {},
    created: function () {},
    mounted: function () {
        // this.init();
    },
};
</script>
<style>
body {
    /*background-color: #000000;*/
}
</style>
<style lang="less" scoped>
@import "../../assets/css/jianyuxiadao/index.less";
</style>

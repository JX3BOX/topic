<template>
    <div class="m-index">
        <!-- 第一屏：人物&标题 -->
        <div class="m-first m-screen">
            <div class="people"></div>
            <div class="title pa"></div>
            <div class="fish-1 pa"></div>
        </div>
        <!-- 第二屏：视频&鱼 -->
        <div class="m-two m-screen">
            <div class="u-title pa">序</div>
            <div class="video pa"></div>
            <div class="lantern pa"></div>
            <div class="fish-2 pa"></div>
        </div>
        <!-- 第三屏：门派 -->
        <div class="m-three m-screen">
            <div class="u-title pa">
                <span class="label">PART <b>01</b></span>
                <span class="value">侠</span>
            </div>
            <div class="m-content pa">
                <div class="mark" :class="`mark-${active}`"></div>
                <div :class="`people-${active} pa`"></div>
                <div :class="`text-${active} pa`">
                    <img :src="`${__imgRoot}school/${active}-text.png`" />
                    <div class="txt">
                        {{ mp[active] }}
                    </div>
                </div>
            </div>
            <div class="m-name pa">
                <span
                    class="u-name"
                    v-for="(item, key) in mp"
                    :key="key"
                    :class="{ active: key == active, [`u-${key}`]: true }"
                    @click="change(key)"
                ></span>
            </div>
        </div>
    </div>
</template>

<script>
const KEY = "welcome";
import { getTopic } from "@/service/topic";
export default {
    name: "Index",
    inject: ["__imgRoot"],
    components: {},
    data: function () {
        return {
            active: "wh",
            mp: {
                wh: "万花武学最精妙之处乃是点穴截脉，可控人生死于一线。通过将精湛医术与点穴手法结合起来，既可为伙伴疗伤续命，稳定战局，也可挺身而出，用精妙手法制敌控场，实乃掌控全局第一武学",
                qx: "七秀招式华丽而不繁琐，曼华绝伦的舞姿当中暗藏种种玄机，或者弱敌于无形之处，或者助友于转瞬之间，眼花缭乱让人防不胜防，常常能在出人意料之时决定战局的倾覆。",
                sl: "少林武学讲究以禅入武，禅武结合。招式大开大阖，稳重而不迟滞，一招一式之间无不充斥佛光普照之意，修行到后期更可将气劲运于全身，金刚护体，即便被打中，对手也会受到极大损伤。",
                tc: "天策武学不同于其他门派，从不强调招式或是原则，天策武功往往直接由战争中的技击演化而来，实用性极强，招招致命，没有一丁点花哨之处。再配合天策府独有的兵书阵法和马上战斗，进退自如，威力惊人，霸道无比。",
                cy: "纯阳武学融合了道家真谛，万法自然，随心所欲之间不但可将自身内力如意运转，更可构造出一片太极气场，攻守如一，进退自如。随他敌强敌弱，顺其自然，以不变应万变。",
                cj: "藏剑武学深谙剑之极意，藏剑弟子配轻重二剑，运使如意，可快速切换不同运剑心法。大巧似拙，举轻若重，令敌手迷惑于深奥剑法之中无以应对。剑有锋而形不露，以心为剑，是为藏剑。",
                wd: "五毒武学融合苗疆蛊术、五毒毒术与控虫之术。通过对毒和蛊的神秘运用，能以各样奇诡之剧毒攻敌，以蛊术疗伤续命，更可操控五种毒虫：圣蝎，玉蟾，灵蛇，风蜈，天蛛，为苗疆不传秘技。",
                tm: "唐门武学以暗器和机关闻名江湖。善于利用可变形的千机匣和神出鬼没的身法，悄无声息地布置各种机关陷阱，再配合各种远程的淬毒暗器、弓箭，变幻莫测，威力惊人。",
                mj: "明教武学出招之时如有日月之威，往往能从敌人意想不到的地方发动摧枯拉朽般之攻击，常常令敌人难以捉摸，攻击落空，防不胜防。坚定的信仰则可令信徒受到明尊护佑，身化琉璃妙相，即便遭受攻击，也能从敌人身上获取新生的活力。",
                gb: `丐帮武学以"降龙十八掌"与"打狗棒法"闻名天下。降龙掌乃尹天赐所创，后被现任帮主郭岩完善，一旦施展起来便如行云流水一般，以连续的进攻逼退敌人。打狗棒法是极高深的一门武学，心思玲珑之人方可达到深湛境界。`,
                cyun: "苍云武学主要由昙宗大师传下，演化出《铁骨衣》。《分山劲》乃李靖以刀盾结合，经历代高手琢磨而成的外家功夫。",
                cg: "长歌门将古圣贤研究天地自然之道的著述引入到长歌门武学当中，形成了“气与曲合、琴音鸣剑”等核心武学特点。并且掌握了娴熟的以内力催发琴音之术，轻者可以迷惑心性，重则伤人于无形，武林中甚少有人对内力与音律之间的关联修习上能超过长歌门。",
                bd: "霸刀武学源自本门悠久的历史传承和背景，设计思路与门派精神相互统一。秀明尘身、松烟竹雾、雪絮金屏三种体态，让霸刀弟子能在任何局势中找到突击的可能。双刀一鞘的武器设定，结合全新的透支武学机制，让霸刀即使身处困境，亦能迎难而上，发起连绵不绝的攻势。",
                pl: "蓬莱武学“凌海决”，乃方乾以鬼谷一门的捭阖剑术为根基，融汇苍天君一脉武学与天竺迦兰僧的伞击之术衍化而来。飘逸伞舞配合灵动掌法，又以蓬莱祖传的驭雕之技回护辅助自身，形成了独创一派的传奇武学。",
                lx: `隐雪藏峰从不语，潜龙出渊卫河山。”隐龙诀”乃凌雪阁绝密心法，以可变换多重形态的链刃为兵器，精准控制自己与敌人的距离，兼顾控制与爆发，取敌人首级于无声中，瞬息间颠覆战局。`,
                yt: `衍天宗武学心法为太玄经，以符咒对目标进行远程攻击为主要输出手段。以魂灯为器布局“奇门”武学，通过灵活的布局运用凸显衍天武学运筹帷幄的战斗特色，不停变换布局形态，步步为营即可蚕食敌人。`,
                yz: `药宗武学以鬼谷子《本经阴符七术》中“盛神”、“养志”之法为吐纳调息、运转内力之根基。其所携百草卷，更是药、器兼具，与人交手时或药，或针，或刀，皆出于转瞬，医人伤人不过一念之间。`,
                dz: `刀宗武器为唐横刀。刀宗武学注重实用，追求“一招必中，一击必杀”。刀宗弟子尚武崇德，直来直去，一生都在探求武技极限。`,
            },
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
    computed: {},
    watch: {},
    methods: {
        change(name) {
            this.active = name;
        },
    },
    filters: {},
    created: function () {},
    mounted: function () {},
};
</script>

<style lang="less">
@import "../../assets/css/welcome/index.less";
</style>

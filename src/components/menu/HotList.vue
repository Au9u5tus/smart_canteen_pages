<template>
  <div class="hot-content">
    <div class="hot-title">
      <div class="hot-title-label">热门菜品</div>
    </div>
    <div class="hot-list">
      <dish-card v-for="item in hostList" :image-url="item.imageUrl" :name="item.name" :description="item.description" :price="item.price"></dish-card>
    </div>
  </div>
</template>

<script>
import DishCard from "./DishCard";
export default {
  name: "HotList",
  components:{
    DishCard
  },
  data(){
    return {
      hostList:[
        {imageUrl:require('@/assets/card1.jpg'),name:'鱼香肉丝',description:'一道色香味俱全的菜肴XXXXXXXXX。',price:18.5},
        {imageUrl:require('@/assets/card2.jpg'),name:'宫保鸡丁',description:'一道色香味俱全的菜肴XXXXXXXXX。',price:19.5},
        {imageUrl:require('@/assets/card3.jpg'),name:'北京烤鸭',description:'一道色香味俱全的菜肴XXXXXXXXX。',price:34.5},
        {imageUrl:require('@/assets/card4.jpg'),name:'酸菜鱼',description:'一道色香味俱全的菜肴XXXXXXXXX。',price:15.5},
        {imageUrl:require('@/assets/card5.jpg'),name:'牛肉炒饭',description:'一道色香味俱全的菜肴XXXXXXXXX。',price:14.5},
        {imageUrl:require('@/assets/card1.jpg'),name:'鱼香肉丝',description:'鱼香肉丝是经典川菜。相传源于民国，由烹鱼调味法演变而来。其选猪里脊肉切丝，搭配木耳、胡萝卜、青椒等。先将肉丝用盐、料酒等腌制。再调鱼香汁，以泡辣椒、糖、醋等混合。炒制时，先滑炒肉丝盛出，另起锅爆香葱姜蒜与泡辣椒，下配菜炒至断生，倒入肉丝，淋上鱼香汁翻炒均匀。成菜色泽红亮，口感咸、甜、酸、辣、鲜、香兼具，肉丝滑嫩，配菜脆爽，深受大众喜爱，是家庭和餐馆的常见佳肴。',price:18.5},
        {imageUrl:require('@/assets/card2.jpg'),name:'宫保鸡丁',description:'宫保鸡丁是闻名中外的特色传统名菜，属川菜系。它与晚清官员丁宝桢关联紧密，丁宝桢喜食此菜，因其曾被封 “太子少保”，人称 “丁宫保”，此菜便得名宫保鸡丁。',price:19.5},
        {imageUrl:require('@/assets/card3.jpg'),name:'北京烤鸭',description:'北京烤鸭是闻名遐迩的北京名菜，历史悠久，享誉全球。它起源于南北朝时期，在明清时成为宫廷御膳。制作北京烤鸭十分考究，一般选用优质的填鸭，经过打气、掏膛、洗膛、挂钩、烫皮、打糖、晾皮等多道复杂工序处理后，用果木炭火烤制。烤出的鸭子色泽红润，外皮酥脆，肉质鲜嫩。食用时，将薄饼摊开，抹上甜面酱，夹上鸭肉、葱丝、黄瓜条等，卷起来一口咬下，口感丰富，香味四溢。北京烤鸭不仅是美食，更承载着深厚的文化底蕴，是来京游客必尝的特色佳肴。',price:34.5},
        {imageUrl:require('@/assets/card4.jpg'),name:'酸菜鱼',description:'酸菜鱼是一道经典川菜，以其酸辣爽口的独特风味闻名遐迩。它以鲜鱼为主料，草鱼、黑鱼等皆可，搭配泡青菜、泡辣椒等四川泡菜。制作时，先将鱼切片码味，酸菜切段。接着热油炒香酸菜，加汤熬煮出味，捞出酸菜铺底。再将鱼片放入汤中煮熟，连汤带鱼倒入盛有酸菜的碗里。最后撒上辣椒、花椒等，淋上热油激发出香味。此菜鱼肉鲜嫩爽滑，酸菜开胃解腻，汤汁酸辣醇厚。一口鱼肉，酸爽在舌尖散开；一勺鱼汤，暖身又开胃。无论是家庭聚餐还是餐馆小聚，酸菜鱼都是备受青睐的佳肴。',price:15.5},
        {imageUrl:require('@/assets/card5.jpg'),name:'牛肉炒饭',description:'牛肉炒饭是一道经典又美味的家常美食，它将米饭的软糯与牛肉的鲜香完美融合。其主要食材是牛肉和米饭。牛肉通常选用牛里脊等鲜嫩部位，切成小丁后用生抽、料酒等调料腌制入味，使其口感更嫩滑。米饭建议选用隔夜饭，颗粒分明，炒出来口感更佳。烹饪时，先将牛肉丁炒熟盛出，再炒香葱花、鸡蛋，加入米饭翻炒均匀。接着放入牛肉丁和青菜等配菜，加入适量盐、黑胡椒等调料调味。炒好的牛肉炒饭色泽丰富，牛肉鲜嫩多汁，米饭裹满了香味，配菜爽口解腻，口感层次丰富，香气扑鼻，既饱腹又营养，深受大众喜爱。',price:14.5},
      ]
    }
  }
}
</script>

<style scoped>

</style>
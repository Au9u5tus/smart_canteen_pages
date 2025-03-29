<template>
  <div class="dish-content">
    <div class="dish-title">
       <div class="dish-title-label">菜品分类</div>
       <div class="dish-title-button">
          <el-button v-for="(item,index) in btns" :class="{'el-button--primary':btnActive===index+1}" @click="selectBtn(item)">{{item.name}}</el-button>
       </div>
      <div class="dish-title-input">
        <el-input v-model="keyword" prefix-icon="el-icon-search" placeholder="请输入关键词，搜索菜品，按Enter查询"></el-input>
      </div>
    </div>
    <div class="dish-list">
      <dish-card v-for="item in cardList" :image-url="item.imageUrl" :name="item.name" :description="item.description" :price="item.price"></dish-card>
    </div>
    <div class="dish-pager">
      <el-pagination
          background
          layout="prev, pager, next"
          :total="1000">
      </el-pagination>
    </div>

  </div>

</template>

<script>
import DishCard from "./DishCard";
export default {
  name: "CardList",
  components:{
    DishCard
  },
  data(){
    return{
      btnActive:1,
      keyword:'',
      cardList:[
        {imageUrl:require('@/assets/card1.jpg'),name:'鱼香肉丝',description:'一道色香味俱全的菜肴XXXXXXXXX。',price:18.5},
        {imageUrl:require('@/assets/card2.jpg'),name:'宫保鸡丁',description:'一道色香味俱全的菜肴XXXXXXXXX。',price:19.5},
        {imageUrl:require('@/assets/card3.jpg'),name:'北京烤鸭',description:'一道色香味俱全的菜肴XXXXXXXXX。',price:34.5},
        {imageUrl:require('@/assets/card4.jpg'),name:'酸菜鱼',description:'一道色香味俱全的菜肴XXXXXXXXX。',price:15.5},
        {imageUrl:require('@/assets/card5.jpg'),name:'牛肉炒饭',description:'一道色香味俱全的菜肴XXXXXXXXX。',price:14.5},
      ],
      btns:[
        {name:'全部',index:1},
        {name:'主食',index:2},
        {name:'小吃',index:3},
        {name:'甜品',index:4},
        {name:'套餐',index:5}
      ]
    }
  },
  methods:{
    selectBtn(item){
      this.btnActive=item.index
    }
  }
}
</script>

<style scoped>

</style>
<template>
  <el-card :body-style="{ padding: '0px' }">
    <img :src="imageUrl" class="image">
    <div style="padding: 14px;">
      <span class="name">{{name}}</span>
      <div class="bottom clearfix">
        <div class="desc">{{description}}</div>
        <div class="price">￥{{price}}</div>
      </div>
    </div>
  </el-card>
</template>

<script>
export default {
  name: "DishCard",
  props:{
    imageUrl:{
      type:String,
      default:''
    },
    name:{
      type:String,
      default:''
    },
    description:{
      type:String,
      default:''
    },
    price:{
      type:Number,
      default:0
    }
  },
  data(){
    return{
      currentDate:''
    }
  }
}
</script>

<style scoped>

</style>
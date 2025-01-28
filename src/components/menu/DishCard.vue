<template>
  <el-card :body-style="{ padding: '0px' }">
    <img :src="imageUrl" class="image">
    <div style="padding: 14px;">
      <span>好吃的汉堡</span>
      <div class="bottom clearfix">
        <time class="time">{{ currentDate }}</time>
        <el-button type="text" class="button">操作按钮</el-button>
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
    description:{
      type:String,
      default:''
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
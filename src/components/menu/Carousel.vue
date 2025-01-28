<template>
  <div class="carousel-block">
    <el-carousel :interval="3000"  type="card" height="200px" indicator-position="none">
      <el-carousel-item v-for="(item,index) in imageList" :key="index">
        <img :src="item" alt="" style="width: 100%; height: 100%; object-fit:cover;"/>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  data(){
    return{
      imageList:[
        require('@/assets/carousel_1.jpg'),
        require('@/assets/carousel_2.jpg'),
        require('@/assets/carousel_3.jpg'),
        require('@/assets/carousel_4.jpg')
      ],
    }
  }
}
</script>

<style scoped>

</style>
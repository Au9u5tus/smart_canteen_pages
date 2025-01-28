<template>
    <div class="header-container">
      <div class="header-left">
        <div class="system-logo">

        </div>
        <div class="system-title">
          校园食堂点餐系统
        </div>
      </div>
      <div class="header-center">
          <slot name="menu"></slot>
      </div>
      <div class="header-right">
        <img :src="avatar" alt="" class="avatar">
        <div class="drop-downs">
          <slot name="drop"></slot>
        </div>
      </div>

<!--      <el-menu-->
<!--          :default-active="activeIndex"-->
<!--          class="el-menu-demo"-->
<!--          mode="horizontal"-->
<!--          @select="handleSelect"-->
<!--          background-color="#545c64"-->
<!--          text-color="#fff"-->
<!--          active-text-color="#ffd04b">-->
<!--        <el-menu-item index="1">处理中心</el-menu-item>-->
<!--        <el-menu-item index="2" disabled>消息中心</el-menu-item>-->
<!--        <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>-->
<!--      </el-menu>-->
    </div>
</template>

<script>
    export default {
        name: "Header",
        mounted() {

        },
        data() {
            return {
              activeIndex:"1",
              avatar:require('@/assets/avatar.jpg')
            }
        },
        methods: {
          handleSelect(){

            }
        }
    }
</script>

<style scoped>

</style>
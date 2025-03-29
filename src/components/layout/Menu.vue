<template>
    <div class="menu-container">
      <el-menu  class="el-menu-vertical-demo" @select="handleSelect">
        <el-menu-item index="1">我的信息</el-menu-item>
        <el-menu-item index="2">我的订单</el-menu-item>
        <el-menu-item index="3">我的统计</el-menu-item>
      </el-menu>
    </div>
</template>

<script>
    export default {
        name: "Menu",
        mounted() {
            //this.$router.push({name:'orderList'})
        },
        data() {
            return {
                activeIndex:'1'
            }
        },
        methods: {
          handleSelect(key,keyPath){
            if(key==this.activeIndex){
              return;
            }
            this.activeIndex=key;
            if(key==1){
              this.$router.push({path:'/adminPage'})
            }else if(key==2){
              this.$router.push({path:'/statistic'})
            }else{

            }
          }
        }
    }
</script>

<style scoped>

</style>
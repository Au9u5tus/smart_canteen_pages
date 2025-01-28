<template>
<div class="user-page-container">
  <Header>
    <template #menu>
      <div class="tabs">
        <div v-for="item in tabList" class="tab" :class="{'active':item.index===activeIndex}" @click="selectTab(item)">{{item.name}}</div>
      </div>
    </template>
    <template #drop>
        <el-dropdown>
           <span class="el-dropdown-link">
              张三<i class="el-icon-arrow-down el-icon--right"></i>
           </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>个人信息</el-dropdown-item>
                  <el-dropdown-item>我的点赞</el-dropdown-item>
                  <el-dropdown-item>我的收藏</el-dropdown-item>
                  <el-dropdown-item @click.native="loginOut">退出</el-dropdown-item>
                </el-dropdown-menu>
        </el-dropdown>
    </template>
  </Header>
  <div class="carousel-block">
    <el-carousel :interval="3000"  type="card" height="200px">
      <el-carousel-item v-for="(item,index) in imageList" :key="index">
        <img :src="item" alt="" style="width: 100%; height: 100%; object-fit:cover;"/>
      </el-carousel-item>
    </el-carousel>
  </div>
</div>
</template>

<script>
import Header from "@/components/layout/Header";
export default {
  name: "UserPage",
  components:{
    Header
  },
  data(){
    return {
      activeIndex:1,
      imageList:[
        require('@/assets/carousel_1.jpg'),
        require('@/assets/carousel_2.jpg'),
        require('@/assets/carousel_3.jpg'),
        require('@/assets/carousel_4.jpg')
      ],
      tabList:[
        {name:'首页',index:1},
        {name:'我的点单',index:2},
        {name:'我的订单',index:3}
      ]
    }
  },
  methods:{
    selectTab(item){
      this.activeIndex=item.index;
    },
    loginOut(){
      localStorage.removeItem('token');
      this.$router.push({path:'/login'})
    }
  }

}
</script>

<style scoped>

</style>
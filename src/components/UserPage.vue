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
              胡汉三<i class="el-icon-arrow-down el-icon--right"></i>
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
  <router-view></router-view>
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
      tabList:[
        {name:'首页',index:1,path:'/userPage'},
        {name:'我的点单',index:2,path:'/myorder'},
        {name:'我的订单',index:3,path:'/userOrder'}
      ]
    }
  },
  methods:{
    selectTab(item){
      if(this.activeIndex==item.index){
        return;
      }
      this.activeIndex=item.index;
      this.$router.push({path:item.path})
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
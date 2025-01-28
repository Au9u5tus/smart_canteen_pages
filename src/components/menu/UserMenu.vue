<!--用户菜单页面-->
<template>
  <div class="user-menu">
    <Carousel></Carousel>
    <CardList></CardList>
    <HotList></HotList>
  </div>
</template>

<script>
import Carousel from "./Carousel";
import CardList from "./DishList";
import HotList from "./HotList";
export default {
  name: "UserMenu",
  components:{
    CardList,
    Carousel,
    HotList
  },
  data(){
    return{

    }
  }
}
</script>

<style scoped>

</style>
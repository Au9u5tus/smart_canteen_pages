<template>
  <div class="dish-hits">
    <div v-for="item in hits">
      {{item.name}}
    </div>
  </div>
</template>

<script>
export default {
  name: "Hit",
  data(){
    return{
      hits:[
        {name:'鱼香肉丝',up:true},
        {name:'宫保鸡丁',up:false},
        {name:'青椒肉丝',up:true},
        {name:'蒜香鸡腿',up:true},
        {name:'回锅肉',up:true},
        {name:'佛跳墙',up:true},
        {name:'土豆牛肉',up:true},
        {name:'宫保鸡丁',up:false},
        {name:'里脊肉',up:true},
        {name:'风味茄子',up:true}]
    }
  },
  methods:{

  }
}
</script>

<style scoped>

</style>
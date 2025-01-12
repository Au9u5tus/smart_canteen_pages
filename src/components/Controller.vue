<template>
  <!--控制器页面-->
  <div class="controller">
    <el-button @click="sendMessage">发送</el-button>
  </div>
</template>

<script>
import Websocket from "@/websocket/websocket";
export default {
  name: 'n-controller',
  props: {
    msg: String
  },
  mounted(){
    // this.$axios.get('/api/test/test').then(data=>{
    //   alert(data.data.message)
    //this.ws=new Websocket("/websocket/controller")
    try{
      this.ws=new Websocket("ws://"+location.host+"/websocket/controller");
    }catch (e) {
      alert(e);
    }
  },
  data(){
    return {
      ws:null
    }
  },
  methods:{
    sendMessage(){
      this.ws.sendMessage('你好，世界');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

<template>
  <div class="introduce">
  <picture-wall @finish="finish" ref="pictureWall"></picture-wall>
  <video-player ref="videoPlayer"></video-player>
  <button class="player-button" v-show="!isStart" @click="start">开始</button>

<!--    <picture-fly></picture-fly>-->
  </div>
</template>

<script>
import Websocket from "@/websocket/websocket";
import WordTool from '../tool/WordTool'
import PictureWall from '../tool/PictureWall'
import PictureBar from '../tool/PictureBar'
import PictureCube from "../tool/PictureCube";
import VideoPlayer from "../tool/VideoPlayer";
import PictureFly from "../tool/PictureFly";
export default {
  name: 'HelloWorld',
  mounted(){
    this.ws=new Websocket("ws://localhost:9999/birthday/websocket/Introduce",this.listener)
  },
  props: {
    msg: String
  },
  components:{
      WordTool,PictureWall,PictureBar,PictureCube,VideoPlayer,PictureFly
  },
  data(){
    return{
      text:'',
      isStart:false,
    }
  },
  methods:{
    listener(data){
      console.log(data);
    },
    finish(){

    },
    start(){
      //视频延时播放
      this.isStart=true
      this.$refs.pictureWall.writeWord()
      setTimeout(()=>{
        this.$refs.videoPlayer.show()
        this.$refs.videoPlayer.play()
      },30000)

    }
  }
}
</script>


<style scoped lang="scss">


</style>

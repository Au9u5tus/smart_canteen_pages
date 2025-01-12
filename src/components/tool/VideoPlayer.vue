<template>
    <div class="video-container" :class="{'play':state}">
        <video id="video" class="video" ref="player" controls :src="require('@/assets/videos/birthday.mp4')"></video>
        <button id="playBtn"></button>
    </div>
</template>

<script>
    export default {
        name: "VideoPlayer",
        mounted() {

        },
        data() {
            return {
                state:false
            }
        },
        methods: {
            play(){
                let video=document.querySelector("#video")
                video.play();
                //this.$refs.player.play();
                //this.$refs.player.volumn=0
                // this.$refs.player.pause();

                // console.log(this.$refs.player.volume=0.5)
            },
            show(){
                this.state=true
                // this.$refs.player.play();
            }
        }
    }
</script>

<style scoped >




</style>
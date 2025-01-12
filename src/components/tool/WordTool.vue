<template>
  <div class="word-tool-container">
      <p class="origin">
          {{content}}
      </p>
      <p class="eraser">
          <span class="text">
                {{content}}
          </span>
      </p>

<!--      <p class="origin">qeqweqweqweqweqweqweqwqweqweqweqw</p>-->
<!--      <p class="eraser"><span class="text">qeqweqweqweqweqweqweqwqweqweqweqw</span></p>-->
    <p></p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  mounted(){
  },
  props: {
    content: {
        type:String,
        default:''
    }
  },
  data(){
    return{

    }
  },
  methods:{

  }
}
</script>


<style scoped lang="scss">
  .introduce{
    position: relative;
  }
  .origin{

  }
  .eraser{
    position: absolute;

  }


</style>

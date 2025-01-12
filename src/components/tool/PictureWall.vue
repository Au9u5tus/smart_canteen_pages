<template>
  <div class="picture-wall-container">

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  mounted(){
    this.move(7,4)
    this.generateWall();
    //setTimeout(()=>{this.show()},3000)
    //this.writeWord();
  },
  props: {
    content: {
        type:String,
        default:''
    }
  },
  data(){
    return{
      times:0,
      count:0,
      taskId:null,
      yu:[6,55,104,153,202,251,57,108,159,210,261,205,206,207,303,304,305,306,307,308,309,256,356,406,456,506,556,555,404,453,502,408,459,510],
      yi:[17,63,64,65,66,67,68,69,70,71,116,166,216,266,118,168,218,268,165,214,263,169,220,271,363,364,365,366,367,368,369,370,371,317,416,465,514,563,418,469,520,571],
      chen:[25,26,27,28,29,30,31,32,33,34,75,125,175,225,275,325,375,425,475,524,573,128,129,130,131,132,227,228,229,230,231,232,233,278,328,378,428,478,528,578,579,383,279,330,381,432,483,534],
      bai:[651,652,653,654,655, 656, 657, 658, 659, 660,661,706,752,802,852,902,952,1002,1052,1102,1152,753,754,755,756,757,758,759,760,810,860,910,960,1010,1060,1110,1160,953,954,955,956,957,958,959,1153,1154,1155,1156,1157,1158,1159],
      ri:[663,713,763,813,863,913,963,1013,1063,1113,1163,664,665,666,667,668,669,670,671,721,771,821,871,921,971,1021,1071,1121,1171,914,915,916,917,918,919,920,1164,1165,1166,1167,1168,1169,1170],
      li:[675,725,773,774,775,776,777,827,876,925,974,1023,975,1025,1075,1125,1175,976,1027,680,730,780,830,880,930,980,1030,1080,1130,1180,1181,1182,1183,1184,1134]
    }
  },
  computed:{
    words(){
      return [].concat(this.yu).concat(this.yi)
              .concat(this.chen).concat(this.bai)
              .concat(this.ri).concat(this.li)
    }
  },
  watch:{
    times(newVal,oldVal){
      while (newVal===50){
        clearInterval(this.taskId)
        this.$emit('finish')
        break
      }
    }
  },
  methods:{
       generateWall(){
           let wall=document.querySelector('.picture-wall-container')
           for(let i=0;i<2500;i++){
               let div=document.createElement("div");
               div.className='brick';
               //div.innerText=i;
               // if(this.words.includes(i)){
               //   div.classList.add('word')
               // }
               //div.style.setProperty('--i',(Math.ceil(i/100)+i%100))
               div.style.animationDelay=`${Math.random()*200+100}ms`
               wall.appendChild(div)
               // div.addEventListener('mouseover',(e)=>{
               //     div.classList.add('active')
               // })
               //this.bricks.push(div);
           }

       },
       show(){
         let bricks=document.querySelectorAll('.picture-wall-container .brick')
         this.taskId=setInterval(()=>{
           this.rangeAnimation(bricks,this.times*50,(this.times+1)*50);
           this.times++;
         },100)
       },
       rangeAnimation(bricks,start,end){
         for(let i=start;i<end;i++){
           if(!bricks[i]){
             break;
           }
           console.log(bricks[i]);
           bricks[i].classList.add('active')
         }
       },
       writeWord(){
         let bricks=document.querySelectorAll('.picture-wall-container .brick')
         let interval=setInterval(()=>{
            if(!this.words[this.count]){
              clearInterval(interval);
              this.show();
              return;
            }
            bricks[this.words[this.count]].classList.add('word')
            this.count++;
         },100)
       },
       move(right,down){
         this.yu=this.yu.map(item=>item+right+50*down);
         this.yi=this.yi.map(item=>item+right+50*down)
         this.chen=this.chen.map(item=>item+right+50*down)
         this.bai=this.bai.map(item=>item+right+50*down)
         this.ri=this.ri.map(item=>item+right+50*down)
         this.li=this.li.map(item=>item+right+50*down)
       }
  }
}
</script>


<style scoped lang="scss">


</style>

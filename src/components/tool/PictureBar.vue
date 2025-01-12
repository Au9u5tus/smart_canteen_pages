<template>
    <div class="picture-bar-container">
        <div class="pic-area">

        </div>
    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        mounted() {
            this.generate()
        },
        props: {
            content: {
                type: String,
                default: ''
            }
        },
        data() {
            return {}
        },
        methods: {
            generate() {
                //获取视口大小
                console.log(window.innerWidth)
                console.log(window.innerHeight)
                let height=window.innerHeight;
                let width=window.innerWidth;
                let container = document.querySelector('.pic-area')
                for (let i = 0; i < height; i++) {
                    let span = document.createElement('span');
                    span.className = 'pic-bar'
                    span.style.height = '1px'
                    span.style.top = `${i}px`
                    span.style.transitionDelay = `${Math.random()}s`
                    span.style.backgroundPositionY = `${-1 * i}px`
                    span.style.setProperty('--x', `${Math.random() * 400 - 200}px`);
                    span.style.setProperty('--r', `${Math.random() * 360 - 0}deg`);
                    span.style.setProperty('--h', `${height}px`);
                    span.style.setProperty('--w', `${width}px`);
                    container.appendChild(span);
                }
                // container.addEventListener('mouseover',()=>{
                //     container.classList.add('active');
                // })
                // container.addEventListener('mouseleave',()=>{
                //     container.classList.remove('active');
                // })
                container.addEventListener('click',()=>{
                    container.classList.toggle('active');
                })
            }
        }
    }
</script>


<style scoped lang="scss">


</style>

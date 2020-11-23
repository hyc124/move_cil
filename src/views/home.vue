<template>
    <div>
        <div class="box"></div>
        <van-grid :border="false" :column-num="3">
            <van-grid-item>
                <span>huhu</span>
            </van-grid-item>
            <van-grid-item>
                <span>huhu</span>
            </van-grid-item>
            <van-grid-item>
                <span>huhu</span>
            </van-grid-item>
        </van-grid>
    </div>
</template>
<script>
    import {getDocument} from '@/api/index.js'
    export default {
        name: "home",
        created() {
            this.init()
        },
        methods:{
          init(){
              getDocument({type: 1}).then(res => console.log(res)).catch(err => console.log(err))
          }
        }
    }
</script>

<style lang="less" scoped>
    .box{
        width: 100px ;
        height: 100px ;
        background-color: red;
    }
</style>
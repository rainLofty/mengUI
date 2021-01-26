<template>
     <ul>
         <li 
         v-for="(item,index) in datalist" :key="index" 
         :class="{active:curIndex==index}"
         @click="curIndex=index"
         >{{item}}</li>
     </ul>
</template>
<script>
export default {
    name: "meng-nav",
    props:{
        datalist:{
            type:Array,
            default:()=>[],
        }
    },
    data() {
        return {
            curIndex:0,
        };
    },
    created() {
       
    },
    methods: {
       
    },
   
};
</script>
<style lang="less" scoped>
ul{
    display: flex;
    flex-wrap: wrap;
    li{
        width: 120px;
        height: 40px;
        line-height:40px;
        font-size:14px;
        text-align: center;
        background:#eee;
        cursor: pointer;
        &.active{
            background:#f24b4b;
            color:#fff;
        }
    }
}
</style>
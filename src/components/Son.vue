<template>
  <div>
    <h3>我是儿子</h3>
    <sun></sun>
    <span>我是儿子：{{value}}</span>
  </div>
</template>

<script>
import Sun from './Sun'
export default {
  data(){
    return {
      value:''
    }
  },
  mounted() {
    this.value = this.$parent.value
  },
components:{
  Sun
}
}
</script>

<style>

</style>
<template>
  <div>
    <!--<button @click="notify">click me1</button>
     <son></son>-->
    
  </div>
</template>

<script>
// import Son from './Son'
export default {
  name:'Index',
  data(){
    return{
      // value:'我是爷爷'
    }
  },
methods: {
  // notify () {
  //     this.$notify({
  //       content: 'test $notify',
  //       btn: 'close'
  //     })
  //   }
},
components:{
  // Son
},
provide(){
  return {
    // yeye:this,
    // value:this.value
  }
}
}
</script>

<style>

</style>
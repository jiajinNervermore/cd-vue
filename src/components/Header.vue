<template>
  <div class="header">
    <head-title class="title"></head-title>
    <logo></logo>
    <head-input></head-input>
    <nav-bar></nav-bar>
  </div>
</template>

<script>
import HeadTitle from './header/HeadTitle'
import HeadInput from './header/HeadInput'
import NavBar from './header/NavBar'
import Logo from './header/Logo'
export default {
  components:{
    HeadTitle,HeadInput,NavBar,Logo
  }
}
</script>

<style lang="stylus" scope>
.header
  width 100%
  height 220px
  background-image url(../assets/images/index/top-bg1.png)

</style>
<template>
  <div class="headerinput">
    <div class="search-box">
      <input  class="input" type="text">
      <span class="search"></span>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scope>
.headerinput 
  position relative
  left 750px
  top 5px
  margin 30px 0
.search-box
  position relative
  width 400px
.input
  width: 320px;
  height: 32px;
  line-height: 32px;
  border-style: none;
  text-indent: 10px;
  color: #7D7D7D;
  font-size: 13px;
  padding-right: 80px;
.search
  position: absolute;
  right: 0px;
  top: 1px;
  width: 80px;
  height: 28px;
  cursor: pointer;
  background-image: url(../../assets/images/index/search-bg2.png);
  background-position: -230px 0;
</style>
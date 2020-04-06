<template>
  <div class="headtitle">
    <ul>
      <li>
        <a href="http://english.cqu.edu.cn/" target="_blank" class="first">ENGLISH</a>
      </li>
      <li><a href="http://i.cqu.edu.cn/" target="_blank">信息门户</a></li>
      <li><a href="http://mail.cqu.edu.cn/" target="_blank">重大邮件</a></li>
      <li><a href="http://oa.cqu.edu.cn/" target="_blank">电子公务</a></li>
      <li><a href="http://news.cqu.edu.cn/" target="_blank">新闻网</a></li>
      <li><a href="http://is.cqu.edu.cn/" target="_blank">信息化服务</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name:'HeadTitle'
}
</script>

<style lang="stylus" scoped>

a
  text-decoration none 
  color #212121
  font-size 12px
  letter-spacing 1px
.headtitle
  width 400px
  height 43px
  position relative
  left 715px
  top 10px
.first::before
  content ''
  display inline-block
  width 0
  height 0
  border-top 3px solid transparent
  border-left 5px solid #212121
  border-bottom 3px solid transparent
ul
  list-style none
  display flex
  align-items center
  width 400px
  margin 0
li:not(:last-child)::after
  content '|'
  margin 0 5px
</style>
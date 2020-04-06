<template>
  <div class="navbar">
    <ul>
      <li>
        <router-link to="news" class="item1">新闻资讯</router-link>
      </li>
      <li>
        <router-link to="news" class="item1">校情概况</router-link>
      </li>
      <li>
        <router-link to="news" class="item1">机构设置</router-link>
      </li>
      <li>
        <router-link to="news" class="item1">教育教学</router-link>
      </li>
      <li>
        <router-link to="news" class="item1">科学研究</router-link>
      </li>
      <li>
        <router-link to="news" class="item1">招生就业</router-link>
      </li>
      <li>
        <router-link to="news" class="item1">校园风采</router-link>
      </li>
      <li>
        <router-link to="news" class="item1">人才招聘</router-link>
      </li>
      <li>
        <router-link to="news" class="item1">国际交流</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scope>
.navbar
  width 963px
  height 40px
  background-color #3187d5
  border-top-right-radius 5px
  border-top-left-radius 5px
  margin 0 auto
.navbar ul
  list-style none 
  display flex
  justify-content space-between
  padding 0
.navbar li
  width 107px
  height 40px
  line-height 40px
  text-align center
.item1
  color #fff
  text-decoration none
  font-size 16px
  
</style>
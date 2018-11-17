<template>
   <div class="header">
     <div class="header-left">
       <!--引入iconfont，class设为iconfont，内容为iconfont里面该图标的名称-->
       <div class="iconfont back-icon">&#xe624;</div>
     </div>
     <div class="header-input">
       <span class="iconfont">&#xe632;</span>
       输入城市/景点/游玩主题
      </div>
      <router-link to='/city'>
        <div class="header-right">
          {{this.$store.state.city}}
          <span class="iconfont arrow-down">&#xe64a;</span>
        </div>
      </router-link>
   </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>
<style lang='stylus' scoped>
// 使用较多的样式，可以引用变量，样式里引入样式，需要加@，可以在build下webpack.base.conf.js配置别名，简化代码。配置后需要重启
  @import '~styles/variables.styl'
  .header
    line-height: $headerHeight
    display: flex
    background-color: $bgcolor
    color: #fff
    .header-left
      width: .64rem
      float: left
      .back-icon
        font-size: .4rem
    .header-input
      flex: 1
      height: .62rem
      line-height: .62rem
      margin-top: .12rem
      margin-left: .1rem
      padding-left: .1rem
      background-color: #fff
      border-radius: .1rem
      color: #ccc
    .header-right
      min-width: 1.04rem
      padding: 0 .1rem
      float: right
      text-align: center
      color: #fff
      .arrow-down
        font-size: .2rem
        margin-left: -.06rem
</style>

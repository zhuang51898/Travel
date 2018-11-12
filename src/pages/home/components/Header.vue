<template>
   <div class="header">
     <div class="header-left">
       <div class="iconfont back-icon">&#xe624;</div>
     </div>
     <div class="header-input">
       <span class="iconfont">&#xe632;</span>
       输入城市/景点/游玩主题
      </div>
     <div class="header-right">
       城市
       <span class="iconfont arrow-down">&#xe64a;</span>
      </div>
   </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>
<style lang='stylus' scoped>
  @import '~styles/variables.styl'
  .header
    line-height: .86rem
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
      width: 1.24rem
      float: right
      text-align: center
      .arrow-down
        font-size: .2rem
        margin-left: -.06rem
</style>

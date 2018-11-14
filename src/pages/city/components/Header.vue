<template>
  <div class="header">城市选择
    <router-link to='/'>
      <div class="iconfont back-icon">&#xe624;</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  .header
    position: relative
    height: $headerHeight
    line-height: $headerHeight
    text-align: center
    font-size: .32rem
    color: #fff
    background-color: $bgcolor
    .back-icon
      position:absolute
      top: 0
      left: 0
      color: #fff
      font-size: .4rem
</style>

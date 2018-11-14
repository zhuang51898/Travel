<template>
  <div class="search">
    <input class="search-input" placeholder='请输入城市名或拼音'/>
  </div>
</template>

<script>
export default {
  name: 'CitySearch'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  .search
    height: .72rem
    background-color: $bgcolor
    padding: 0 .1rem
    text-align: center
    .search-input
      box-sizing: border-box
      width: 100%
      height: .62rem
      line-height: .64rem
      text-align: center
      border-radius: .06rem
      padding: 0 .1rem
      color: #666
</style>

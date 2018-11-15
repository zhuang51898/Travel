<template>
  <ul class="list">
      <li>A</li>
      <li>A</li>
      <li>A</li>
      <li>A</li>
      <li>A</li>
      <li>A</li>
      <li>A</li>
      <li>A</li>
      <li>A</li>
      <li>A</li>
      <li>A</li>
      <li>A</li>
      <li>A</li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  .list
    display: flex
    flex-direction: column
    justify-content: center
    position: absolute
    top: 1.58rem
    right: 0
    bottom: 0
    background-color: red
    width: .4rem
    text-align: center
    line-height: .4rem
</style>

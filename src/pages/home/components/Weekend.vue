<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item-list border-bottom" v-for="item of weekendList" :key="item.id">
        <div class="item-img-wraper">
          <img class="item-img" :src="item.imgUrl"/>
        </div>
        <div class="item-info">
          <p class="item-info-p1" v-html="item.title"></p>
          <p class="item-info-p2" v-html="item.desc"></p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    weekendList: Array
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .title
    line-height: .8rem
    background-color: #eee
  .item-img-wraper
    overflow: hidden
    height: 0
    width: 100%
    padding-bottom:33.9%
  .item-info
    padding: .1rem
    .item-info-p1
      line-height: .54rem
      font-size: .32rem
      ellipsis()
    .item-info-p2
      line-height: .54rem
      color: #ccc
      ellipsis()
</style>

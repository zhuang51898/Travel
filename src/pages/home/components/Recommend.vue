<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item-list border-bottom" v-for="item of recommendList" :key="item.id">
        <img class="item-img" :src="item.imgUrl"/>
        <div class="item-info">
          <p class="item-info-p1" v-html="item.title"></p>
          <p class="item-info-p2" v-html="item.desc"></p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    recommendList: Array
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .title
    line-height: .8rem
    background-color: #eee
    margin-top: .1rem
  .item-list
    height: 2rem
    display: flex
    .item-img
      height: 1.8rem
      width: 1.8rem
      padding: .1rem
    .item-info
      flex 1
      padding: .1rem
      min-width: 0
      .item-info-p1
        line-height: .54rem
        font-size: .32rem
        ellipsis()
      .item-info-p2
        line-height: .54rem
        color: #ccc
        ellipsis()
      .item-button
        margin-top: .2rem
        background-color: #ff9300
        border-radius: .06rem
        color: #fff
</style>

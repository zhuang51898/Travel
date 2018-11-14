<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item-list border-bottom" v-for="item of itemList" :key="item.id">
        <img class="item-img" :src="item.itemSrc"/>
        <div class="item-info">
          <p class="item-info-p1" v-html="item.p1"></p>
          <p class="item-info-p2" v-html="item.p2"></p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      itemList: [
        {
          id: '000001',
          itemSrc: 'http://img1.qunarzz.com/sight/p0/1505/8d/8d1f6d86b2c5926e.water.jpg_200x200_3235712b.jpg',
          p1: '北京大观园',
          p2: '在帝都过周末，不仅仅是一日游!'
        },
        {
          id: '000002',
          itemSrc: 'http://img1.qunarzz.com/sight/p0/201308/08/41150dacc0e3a0c8c8d65eac.jpg_200x200_c62292e9.jpg',
          p1: '北京动物园',
          p2: '在帝都过周末，不仅仅是一日游!'
        },
        {
          id: '000003',
          itemSrc: 'http://img1.qunarzz.com/sight/p0/201303/04/50b65ba27d711f92c8d65eac.jpg_200x200_633f68b7.jpg',
          p1: '小汤山温泉度假日',
          p2: '在帝都过周末，不仅仅是一日游!'
        },
        {
          id: '000004',
          itemSrc: 'http://img1.qunarzz.com/sight/p0/1501/f4/f467729126949c3a.water.jpg_200x200_8e27de70.jpg',
          p1: '天安门广场',
          p2: '在帝都过周末，不仅仅是一日游!'
        }
      ]
    }
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

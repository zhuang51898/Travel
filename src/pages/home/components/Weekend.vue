<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item-list border-bottom" v-for="item of itemList" :key="item.id">
        <div class="item-img-wraper">
          <img class="item-img" :src="item.itemSrc"/>
        </div>
        <div class="item-info">
          <p class="item-info-p1" v-html="item.p1"></p>
          <p class="item-info-p2" v-html="item.p2"></p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      itemList: [
        {
          id: '000001',
          itemSrc: 'http://img1.qunarzz.com/sight/source/1507/ae/bf7adc6c9b80fe.jpg_r_640x214_8e68e99f.jpg',
          p1: '北京大观园',
          p2: '在帝都过周末，不仅仅是一日游在帝都过周末，不仅仅是一日游!'
        },
        {
          id: '000002',
          itemSrc: 'http://img1.qunarzz.com/sight/source/1507/ae/bf7adc6c9b80fe.jpg_r_640x214_8e68e99f.jpg',
          p1: '北京动物园',
          p2: '在帝都过周末，不仅仅是一日游!'
        },
        {
          id: '000003',
          itemSrc: 'http://img1.qunarzz.com/sight/source/1507/ae/bf7adc6c9b80fe.jpg_r_640x214_8e68e99f.jpg',
          p1: '小汤山温泉度假日',
          p2: '在帝都过周末，不仅仅是一日游!'
        },
        {
          id: '000004',
          itemSrc: 'http://img1.qunarzz.com/sight/source/1507/ae/bf7adc6c9b80fe.jpg_r_640x214_8e68e99f.jpg',
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

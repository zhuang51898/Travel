<template>
  <swiper :options="swiperOption" class="swiper">
    <swiper-slide v-for="(page, index) of pages" :key="index">
      <div class="icon-list">
        <div class="icon" v-for='item of page' :key='item.id'>
          <div class="icon-img">
            <img class="icon-i" :src='item.imgUrl'/>
          </div>
          <p class="icon-p" v-text="item.desc"></p>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    iconList: Array
  },
  data () {
    return {
      swiperOption:
      {
        autoplay: false
      }
    }
  },
  computed: {
    // 计算获得一个二维数组：pages[0]=[里面有8个],pages[1]=[里面时第8个之后的8个],以此类推。
    // 把每8个放在一个数组里，page of pages相当于遍历pages，而遍历的每一项page又是一个数组。再用item of page遍历page
    pages () {
      const pages = []
      this.iconList.forEach(function (item, index) {
        const page = Math.floor(index / 8)
        // 如果pages[下标]还不存在，就创建一个空数组，二维数组
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .icon-list
    width: 100%
    overflow: hidden
    height: 0
    padding-bottom: 50%
    border-bottom: 1px solid lightgray
    .icon
      position: relative
      width: 25%
      padding-bottom: 25%
      float: left
      text-align: center
      .icon-p
        position: absolute
        left: 0
        right: 0
        bottom: 15%
        line-height: .44rem
        ellipsis()
      .icon-img
        position: absolute
        left: 0
        top: .1rem
        right: 0
        bottom: .44rem
        .icon-i
          height: 80%
</style>

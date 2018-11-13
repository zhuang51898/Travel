<template>
  <swiper>
    <swiper-slide v-for="(page, index) of pages" :key="index">
      <div class="icon-list">
        <div class="icon" v-for='item of page' :key='item.id'>
          <div class="icon-img">
            <img class="icon-i" :src='item.iconsrc'/>
          </div>
          <p class="icon-p" v-text="item.icon_p"></p>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
export default {
  data () {
    return {
      iconList: [
        {
          id: '00001',
          iconsrc: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          icon_p: '景点门票'
        },
        {
          id: '00002',
          iconsrc: 'https://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
          icon_p: '打卡圣地'
        },
        {
          id: '00003',
          iconsrc: 'http://img1.qunarzz.com/piao/fusion/1803/f5/a963333e1fa802.png',
          icon_p: '本地玩乐'
        },
        {
          id: '00004',
          iconsrc: 'http://img1.qunarzz.com/piao/fusion/1803/96/c70f1e85ae4a4f02.png',
          icon_p: '自然风光'
        },
        {
          id: '00005',
          iconsrc: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
          icon_p: '一日游'
        },
        {
          id: '00006',
          iconsrc: 'http://img1.qunarzz.com/piao/fusion/1803/c1/6f15f887179fa002.png',
          icon_p: '夫子庙'
        },
        {
          id: '00007',
          iconsrc: 'http://img1.qunarzz.com/piao/fusion/1803/fa/2548667cb6e902.png',
          icon_p: '总统府'
        },
        {
          id: '00008',
          iconsrc: 'http://img1.qunarzz.com/piao/fusion/1803/97/02f5043b51b2102.png',
          icon_p: '牛首山'
        },
        {
          id: '00009',
          iconsrc: 'http://img1.qunarzz.com/piao/fusion/1803/97/02f5043b51b2102.png',
          icon_p: '牛首山'
        }
      ]
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
      .icon-img
        position: absolute
        left: 0
        top: 0
        right: 0
        bottom: .44rem
        .icon-i
          height: 80%
</style>

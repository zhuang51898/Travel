<template>
  <swiper :options="swiperOption" class="swiper" v-if='showImg'>
    <swiper-slide v-for='item of swiperList' :key='item.id'>
      <img class="swiper-img" :src="item.imgUrl">
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination">
    </div>
  </swiper>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    swiperList: Array
  },
  data () {
    return {
      swiperOption: {
        // 轮播图下面有页码
        pagination: '.swiper-pagination',
        // 使轮播图可以循环播放
        loop: true,
        // 自动轮播，速度
        autoplay: 1000,
        // 用户操作swiper后是否禁止自动播放
        autoplayDisableOnInteraction: false
      }
    }
  },
  computed: {
    showImg () {
      return this.swiperList.length
    }
  }
}
</script>

<style lang='stylus' scoped>
// 因为scoped的存在，此处css只能应用到本组件，所有需要穿透。让页码颜色为白色
  .swiper >>> .swiper-pagination-bullet-active
    background-color: #fff
  .swiper
  // 配合使用可以在图片未加载完成还未显示时就占据应有的空间
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 28.25%
    .swiper-img
      width: 100%
</style>

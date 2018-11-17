<template>
  <div>
    <div class="banner" @click='HandleGalleryShow'>
      <img
        class="banner-img"
        src="//img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_600x330_f922b488.jpg"
      />
      <div class="banner-info">
        <div class="banner-info-left">故宫，(AAAAA级景区)</div>
        <div class="banner-info-right"><span class="iconfont">&#xe617;</span>10</div>
      </div>
    </div>
    <common-gallery :imgs='imgs' v-show='GalleryShow' @close='closeGallery'></common-gallery>
  </div>
</template>

<script>
import CommonGallery from 'common/gallery/Gallery'
export default {
  name: 'DetailBanner',
  components: {
    CommonGallery
  },
  data () {
    return {
      imgs: ['http://img1.qunarzz.com/sight/p0/1708/2b/2b3b94de99c0a425a3.img.jpg_r_800x800_ae28174d.jpg', 'http://img1.qunarzz.com/sight/p0/1410/be/d44bb81ae3218a627a65ded451326b2c.water.jpg_r_800x800_389b4c2c.jpg'],
      GalleryShow: false
    }
  },
  methods: {
    HandleGalleryShow () {
      this.GalleryShow = true
    },
    closeGallery () {
      this.GalleryShow = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 55%
    .banner-img
      width: 100%
    .banner-info
      position: absolute
      left: 0
      right: 0
      bottom: 0
      display: flex
      color: #fff
      line-height: .6rem
      background-image: linear-gradient(top, rgba(0, 0, 0 ,0), rgba(0, 0, 0, .8))
      padding: 0 .1rem
      .banner-info-left
        flex: 1
        font-size: .32rem
      .banner-info-right
        height: .32rem
        line-height: .32rem
        padding: 0 .4rem
        margin-top: .14rem
        border-radius: .2rem
        font-size: .28rem
        background: rgba(0, 0, 0, .8)
</style>

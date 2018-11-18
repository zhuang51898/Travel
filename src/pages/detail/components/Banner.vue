<template>
  <div>
    <div class="banner" @click='HandleGalleryShow'>
      <img
        class="banner-img"
        :src="bannerImg"
      />
      <div class="banner-info">
        <div class="banner-info-left">{{sightName}}</div>
        <div class="banner-info-right"><span class="iconfont">&#xe617;</span>{{gallaryImgs.length}}</div>
      </div>
    </div>
    <common-fade>
      <common-gallery :imgs='gallaryImgs' v-show='GalleryShow' @close='closeGallery'></common-gallery>
    </common-fade>
  </div>
</template>

<script>
import CommonGallery from 'common/gallery/Gallery'
import CommonFade from 'common/fade/FadeAnimation'
export default {
  name: 'DetailBanner',
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  components: {
    CommonGallery,
    CommonFade
  },
  data () {
    return {
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

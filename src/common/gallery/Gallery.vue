<template>
  <div class="gallery" @click='handleHidder'>
    <div class="wraper">
      <swiper :options="swiperOption" class="swiper">
        <swiper-slide
          v-for='(item, index) of imgs'
          :key='index'
        >
          <img class="gallery-img" :src="item"/>
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination">
        </div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGallery',
  props: {
    imgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observer: true,
        observeParents: true
      }
    }
  },
  methods: {
    handleHidder () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wraper >>> .swiper-container-horizontal
    overflow: inherit
  .gallery
    z-index: 99
    position: fixed
    top: 0
    left: 0
    right: 0
    bottom: 0
    background-color: #000
    display: flex
    flex-direction: column
    justify-content: center
    .wraper
      height: 0
      padding-bottom: 100%
    .gallery-img
      width: 100%
    .swiper-pagination
      color: #fff
      bottom: -2rem
</style>

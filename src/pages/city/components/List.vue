<template>
  <div class="list" ref='wrapper'>
    <div class="content">
        <div class="area">
        <div class="list-title border-topbottom">
            您的位置
        </div>
        <div class="list-button">
            <div class="button-wraper">
            <div class="button">{{this.$store.state.city}}</div>
            </div>
        </div>
        </div>
        <div class="area">
        <div class="list-title border-topbottom">
            热门城市
        </div>
        <div class="list-button">
            <div class="button-wraper" v-for='item of hotCities' :key='item.id' @click='handleChangeCity(item.name)'>
              <div class="button" v-text="item.name"></div>
            </div>
        </div>
        </div>
        <div class="area" v-for='(item, key) of cities' :key='key' :ref='key'>
        <div class="list-title border-topbottom">
            {{key}}
        </div>
        <div class="item-list" v-for='iteminfo of item' :key='iteminfo.id' @click='handleChangeCity(iteminfo.name)'>
            <div class="item border-bottom" v-text="iteminfo.name"></div>
        </div>
        </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CityList',
  props: {
    cities: Object,
    hotCities: Array,
    letter: String
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper, {click: true})
  },
  methods: {
    handleChangeCity (city) {
      this.$store.dispatch('changeCity', city)
      this.$router.push('/')
    }
  },
  watch: {
    letter () {
      const el = this.$refs[this.letter][0]
      this.scroll.scrollToElement(el)
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  .border-topbottom
    &:before
      border-color: #ccc
    &:after
      border-color: #ccc
  .border-bottom
    &:before
      border-color: #ccc
  .list
    position: absolute
    overflow: hidden
    top: $headerSearchHight
    left: 0
    right: 0
    bottom: 0
    .list-title
      height: .64rem
      line-height: .64rem
      background-color: #eee
      padding: 0 .1rem
    .list-button
      overflow: hidden
      padding: .1rem .6rem .1rem .1rem
      .button-wraper
        float: left
        width: 33.33%
        .button
          margin: .1rem
          text-align:center
          border: .02rem solid green
          padding: .1rem
          border-radius: .06rem
    .item-list
      .item
        line-height: .76rem
        padding-left: .2rem
</style>

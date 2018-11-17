<template>
  <div>
    <div class="search">
      <input class="search-input" placeholder='请输入城市名或拼音' v-model="keyword"/>
    </div>
    <div class="search-mark" ref="search" v-show='keyword'>
      <ul>
        <li v-for='item of list' :key="item.id" v-text='item.name' class="search-item border-bottom" @click='handleChangeCity(item.name)'></li>
        <li v-show='!list.length' class="search-item">没有您要找的城市</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CitySearch',
  data () {
    return {
      list: [],
      keyword: ''
    }
  },
  props: {
    cities: Object
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.search, {click: true})
  },
  methods: {
    handleChangeCity (city) {
      this.$store.dispatch('changeCity', city)
      this.$router.push('/')
    }
  },
  watch: {
    keyword () {
      if (!this.keyword) {
        this.list = []
        return
      }
      const letters = []
      for (let i in this.cities) {
        this.cities[i].forEach(value => {
          if (value.name.indexOf(this.keyword) > -1 || value.spell.indexOf(this.keyword) > -1) {
            letters.push(value)
          }
        })
      }
      this.list = letters
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  .search
    height: .72rem
    background-color: $bgcolor
    padding: 0 .1rem
    text-align: center
    .search-input
      box-sizing: border-box
      width: 100%
      height: .62rem
      line-height: .64rem
      text-align: center
      border-radius: .06rem
      padding: 0 .1rem
      color: #666
  .search-mark
    z-index: 1
    position: absolute
    top: $headerSearchHight
    left: 0
    right: 0
    bottom: 0
    background-color: #eee
    .search-item
      background-color: #fff
      line-height: .54rem
</style>

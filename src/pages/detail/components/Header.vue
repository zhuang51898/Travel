<template>
  <div>
    <div class="header-left" v-show='show'>
       <!--引入iconfont，class设为iconfont，内容为iconfont里面该图标的名称-->
       <router-link tag="div" to='/' class="iconfont header-back">&#xe624;
       </router-link>
    </div>
    <div class="header" v-show='!show' :style="opacityStyle">故宫
      <router-link to='/'>
       <div class="iconfont back-icon">&#xe624;</div>
       </router-link>
     </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      show: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      const srcTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      if (srcTop > 60) {
        let opacity = srcTop / 140
        opacity = opacity >= 1 ? 1 : opacity
        this.opacityStyle = { opacity }
        this.show = false
      } else {
        this.show = true
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  .header-left
    position: absolute
    top: .1rem
    left: .1rem
    width: .64rem
    height: .64rem
    line-height: .64rem
    border-radius: .64rem
    background: rgba(0, 0, 0, .6)
    color: #fff
    text-align: center
    .header-back
        font-size: .4rem
  .header
    z-index: 2
    position: fixed
    height: $headerHeight
    line-height: $headerHeight
    top: 0
    left: 0
    right: 0
    text-align: center
    font-size: .32rem
    color: #fff
    background-color: $bgcolor
    .back-icon
      position:absolute
      top: 0
      left: 0
      color: #fff
      font-size: .4rem
</style>

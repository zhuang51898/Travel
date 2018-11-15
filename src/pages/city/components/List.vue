<template>
  <div class="list" ref='wrapper'>
    <div class="content">
        <div class="area">
        <div class="list-title border-topbottom">
            您的位置
        </div>
        <div class="list-button">
            <div class="button-wraper">
            <div class="button">北京</div>
            </div>
        </div>
        </div>
        <div class="area">
        <div class="list-title border-topbottom">
            热门城市
        </div>
        <div class="list-button">
            <div class="button-wraper">
            <div class="button">北京</div>
            </div>
            <div class="button-wraper">
            <div class="button">北京</div>
            </div>
            <div class="button-wraper">
            <div class="button">北京</div>
            </div>
            <div class="button-wraper">
            <div class="button">北京</div>
            </div>
            <div class="button-wraper">
            <div class="button">北京</div>
            </div>
            <div class="button-wraper">
            <div class="button">北京</div>
            </div>
            <div class="button-wraper">
            <div class="button">北京</div>
            </div>
        </div>
        </div>
        <div class="area">
        <div class="list-title border-topbottom">
            A
        </div>
        <div class="item-list">
            <div class="item border-bottom">阿拉尔</div>
            <div class="item border-bottom">阿拉尔</div>
            <div class="item border-bottom">阿拉尔</div>
            <div class="item border-bottom">阿拉尔</div>
            <div class="item border-bottom">阿拉尔</div>
        </div>
        <div class="list-title border-topbottom">
            A
        </div>
        <div class="item-list">
            <div class="item border-bottom">阿拉尔</div>
            <div class="item border-bottom">阿拉尔</div>
            <div class="item border-bottom">阿拉尔</div>
            <div class="item border-bottom">阿拉尔</div>
            <div class="item border-bottom">阿拉尔</div>
        </div>
        <div class="list-title border-topbottom">
            A
        </div>
        <div class="item-list">
            <div class="item border-bottom">阿拉尔</div>
            <div class="item border-bottom">阿拉尔</div>
            <div class="item border-bottom">阿拉尔</div>
            <div class="item border-bottom">阿拉尔</div>
            <div class="item border-bottom">阿拉尔</div>
        </div>
        </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CityList',
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  }
}
</script>

<style lang="stylus" scoped>
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
    top: 1.58rem
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

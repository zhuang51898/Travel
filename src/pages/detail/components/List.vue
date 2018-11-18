<template>
  <div>
    <div v-for='(item, index) of list'
      :key='index'
      class="list border-bottom"
    >
      <div class="item-title">
        <span class="item-span"></span>
        {{item.title}}
      </div>
      <div v-if='item.children'>
        <detail-list :list='item.children' class="children-list"></detail-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  .item-title
    height: .8rem
    line-height: .8rem
    padding: 0 .6rem
    font-size: .32rem
  .item-span
    display: inline-block;
    position: absolute;
    width: .36rem;
    height: .36rem;
    top: .26rem;
    left: .2rem;
    background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
    margin-right: .1rem;
    background-size: .4rem 3rem;
  .children-list
    margin-left: .4rem
</style>

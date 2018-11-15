<template>
  <ul class="list">
      <li
        v-for='(item, key) of cities'
        :key="key" v-text="key"
        @touchstart='handletouchStart'
        @touchmove='handletouchMove'
        @touchend='handletouchEnd'
        @click="handleClickLetter"
        :ref='key'
      ></li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  data () {
    return {
      touch: false
    }
  },
  methods: {
    handleClickLetter (e) {
      this.$emit('change', e.target.innerHTML)
    },
    handletouchStart () {
      this.touch = true
    },
    handletouchMove (e) {
      if (this.touch) {
        const startA = this.$refs['A'][0].offsetTop
        const elclientY = (e.touches[0].clientY)
        const index = Math.floor((elclientY - startA - 79) / 20)
        if (index >= 0 && index < this.letters.length) {
          this.$emit('change', this.letters[index])
        }
      }
    },
    handletouchEnd () {
      this.touch = false
    }
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  }
}
</script>

<style lang="stylus" scoped>
  .list
    display: flex
    flex-direction: column
    justify-content: center
    position: absolute
    top: 1.58rem
    right: 0
    bottom: 0
    width: .4rem
    text-align: center
    line-height: .4rem
</style>

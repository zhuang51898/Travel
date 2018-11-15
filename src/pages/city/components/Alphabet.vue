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
      touch: false,
      startA: '',
      timer: ''
    }
  },
  updated () {
    this.startA = this.$refs['A'][0].offsetTop
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
        if (this.timer) {
          clearTimeout(this.timer)
          this.timer = ''
        }
        this.timer = setTimeout(() => {
          const elclientY = (e.touches[0].clientY)
          const index = Math.floor((elclientY - this.startA - 79) / 20)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 10)
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

<template>
  <div id="app">
    <!--使用路由，控制显示哪个页面-->
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>

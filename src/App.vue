<template>
  <div id="app" class="flexColumnBetween">
      <div class="mainContainer">
        <router-view></router-view>
      </div>
      <vue-menu></vue-menu>
      <div v-if="showLayer">正在加载中...</div>
  </div>
</template>

<script>
import VueMenu from './components/VueMenu'

export default {
  name: 'app',
  data () {
    this.$on('loading', function (msg) {
      console.log(msg)
    })
    return {
      showLayer: false
    }
  },
  components: {
    VueMenu
  }
}
</script>

<style>
#app {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
.mainContainer{
  width: 100%;
  flex: 1;
  height: 100%;
  overflow-y: scroll;
}
</style>

<template>
  <div class="flexColumnCenter notFoundPage">
    <h1>404</h1>
    <h1>找不到页面</h1>
  </div>
</template>

<script>
export default {
  name: 'notFoundPage',
  data () {
    return {
      msg: 'Hello Vue.js!'
    }
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
.notFoundPage{
  background-color: #0a8acd;
  color: #ffffff;
  position: relative;
  h1{  
    font-weight: 500;
  }
}
</style>

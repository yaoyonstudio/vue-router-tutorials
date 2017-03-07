<template>
  <div>
    <h1>{{ msg }}</h1>
    <a v-on:click="goto(1)">跳转至关于页面</a>
    <a v-on:click="goto(2)">跳转至关于页面的第二个标签页面</a>
    <a v-on:click="goto(3)">跳转至服务页面的第3条服务信息</a>
    <a v-on:click="goto(4)">跳转至测试页面</a>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Home'
    }
  },
  methods: {
    goto (param) {
      console.log(this.$router)
      console.log(this.$route)
      switch (param) {
        case 1:
          this.$router.push('about')
          break
        case 2:
          this.$router.push('/about/abouttwo')
          break
        case 3:
          this.$router.push({name: 'servicedetail', params: {id: 3}})
          break
        case 4:
          this.$router.push({name: 'hello'})
          break
      }
    }
  }
}
</script>

<style scoped lang="scss">
$color: #dd3333;
h1 {
  text-align: center;
  font-weight: normal;
  color: $color;
}
div{
  padding: 10px;
}
a{
  font-size: 16px;
  color: #dd3333;
  padding: 10px 0;
}
</style>

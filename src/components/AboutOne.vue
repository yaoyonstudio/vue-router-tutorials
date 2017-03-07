<template>
  <transition name="slide-fade">
    <div>
      <h1>{{ msg }}</h1>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'AboutOne',
  data () {
    return {
      msg: 'About页面的第一个页面'
    }
  },
  methods: {
  },
  beforeRouteEnter (to, from, next) {
    console.log('这是一个组件内钩子：beforeRouteEnter，进入了about页面第一个子页面')
    console.log(to)
    console.log(from)
    console.log(next)
    next(true)
  },
  beforeRouteUpdate (to, from, next) {
    console.log('这是一个组件内钩子：beforeRouteUpdate，进入了about页面第一个子页面更新了')
    console.log(to)
    console.log(from)
    console.log(next)
    next(true)
  },
  beforeRouteLeave (to, from, next) {
    console.log('这是一个组件内钩子：beforeRouteLeave，离开了about页面第一个子页面')
    console.log(to)
    console.log(from)
    console.log(next)
    let sureClose = confirm('确定关闭吗？')
    next(sureClose)
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
</style>

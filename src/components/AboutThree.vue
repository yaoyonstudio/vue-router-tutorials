<template>
  <transition name="slide-fade">
    <div>
      <h1>{{ msg }}</h1>
      <div v-if="posts.length">{{posts}}</div>
    </div>
  </transition>
</template>

<script>
import axios from 'axios'
export default {
  name: 'AboutThree',
  data () {
    return {
      msg: 'About页面的第三个页面',
      posts: []
    }
  },
  methods: {
  },
  beforeRouteEnter (to, from, next) {
    axios.get('http://localhost:3000/posts')
      .then(function (response) {
        console.log(response)
        if (response.status === 200 && response.data.status) {
          next(vm => {
            vm.posts = response.data.data
          })
        } else {
          next(false)
        }
      })
      .catch(function (error) {
        console.log(error)
        next(false)
      })
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

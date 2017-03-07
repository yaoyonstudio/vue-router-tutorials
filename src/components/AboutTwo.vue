<template>
  <transition name="slide-fade">
    <div>
      <h1>{{ msg }}</h1>
      <p v-if="!posts.length">正在加载数据...</p>
      <div v-if="posts.length">{{posts}}</div>
    </div>
  </transition>
</template>

<script>
import axios from 'axios'
export default {
  name: 'AboutTwo',
  data () {
    return {
      msg: 'About页面的第二个页面',
      posts: []
    }
  },
  mounted () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      let that = this
      axios.get('http://localhost:3000/posts')
        .then(function (response) {
          console.log(response)
          that.posts = response.data.data
        })
        .catch(function (error) {
          console.log(error)
        })
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
</style>

<template>
  <div class="flexColumnBetween page aboutPage">
    <header>
      <h1>{{ msg }}</h1>
      <nav>
        <ul class="flexRowBetween">
          <li v-for="menu in menus" class="flexItem center">
            <router-link :to="menu.path" tag="a" exact v-bind:class="{ 'router-link-active': currentPage == '/about' && menu.path == '/about/aboutone'}">{{menu.title}}</router-link>
          </li>
        </ul>
      </nav>
    </header>
    <div class="mainContent">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      msg: 'About',
      menus: [
        {id: 1, path: '/about/aboutone', name: 'aboutone', title: 'AboutOne'},
        {id: 2, path: '/about/abouttwo', name: 'abouttwo', title: 'AboutTwo'},
        {id: 3, path: '/about/aboutthree', name: 'aboutthree', title: 'AboutThree'}
      ],
      currentPage: null
    }
  },
  watch: {
    '$route' (to, from) {
      this.currentPage = to.path
    }
  },
  mounted () {
    this.currentPage = this.$route.path
  }
}
</script>

<style scoped lang="scss">
.aboutPage{
  header{
    nav{
      ul{
        li{
          a{border-bottom: 2px solid #ddd;}
          .router-link-active{
            border-bottom: 2px solid #dd3333;
          }
        }
        li:not(:last-child){
          border-right: 1px solid #eee;
        }
        .active{color: #dd3333;}
      }
    }
  }
}
</style>

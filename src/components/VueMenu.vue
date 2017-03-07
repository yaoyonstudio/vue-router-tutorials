<template>
  <div class="menu">
    <ul class="flexRowBetween">
        <li v-for="menu in menus" class="flexItem">
          <router-link :to="menu.path" tag="a">{{menu.title}}</router-link>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'vueMenu',
  data () {
    return {
      msg: 'Menu',
      menus: [
        {id: 1, path: '/home', name: 'home', title: '首页'},
        {id: 2, path: '/about', name: 'about', title: '关于'},
        {id: 3, path: '/service', name: 'service', title: '服务'},
        {id: 4, path: '/hello', name: 'hello', title: '测试'}
      ]
    }
  },
  methods: {
  },
  mounted () {
  }
}
</script>

<style scoped lang="scss">
@import '../css/vars.scss';

.menu{
  width: 100%;
  background-color: $lightColor;
  border-top: 1px solid $borderColor;
  ul{
    width: 100%;
    li{
      text-align: center;
      height: 4rem;
      line-height: 4rem;
    }
    li:not(:last-child){
      border-right: 1px solid $borderColor;
    }
    .router-link-active{
      background-color: $mainColor;
      color: $lightColor;
      font-size: 1.5rem;
    }
  }
}
</style>

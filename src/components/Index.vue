<template>
  <div class="index">
    <div class="posts">
      <ul>
          <li v-for="post in posts" class="flexRowBetween">
            <section>
              <h4>{{post.title.rendered}}</h4>
              <h5>{{post.date}}</h5>
            </section>
            <img v-if="post.thumbnailurl" :src="post.thumbnailurl" />
          </li>
      </ul>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  name: 'index',
  data () {
    return {
      msg: 'Hello Vue.js!',
      errors: [],
      posts: [
        {
          'id': 512,
          'title': {
            'rendered': '手动搭建一个vue2.0项目工程框架'
          },
          'date': '2017-03-01T16:49:11',
          'thumbnailurl': null,
          'featuredimgurl': null
        },
        {
          'id': 506,
          'title': {
            'rendered': 'CSS3两个非常有用的新特性（CSS Variables &#038; calc）'
          },
          'date': '2017-03-01T14:21:25',
          'thumbnailurl': null,
          'featuredimgurl': null
        },
        {
          'id': 492,
          'title': {
            'rendered': 'Angular表单操作总结'
          },
          'date': '2017-02-25T23:58:37',
          'thumbnailurl': 'https://www.thatyou.cn/wp-content/uploads/2017/02/AngularJS-Form-150x150.jpg',
          'featuredimgurl': 'https://www.thatyou.cn/wp-content/uploads/2017/02/AngularJS-Form.jpg'
        },
        {
          'id': 488,
          'title': {
            'rendered': 'AngularJS调用百度地图API获取当前位置信息（$http.jsonp使用）'
          },
          'date': '2017-02-23T20:58:34',
          'thumbnailurl': null,
          'featuredimgurl': null
        },
        {
          'id': 485,
          'title': {
            'rendered': 'Webpack 2.0 实用配置指南'
          },
          'date': '2017-02-23T17:29:15',
          'thumbnailurl': 'https://www.thatyou.cn/wp-content/uploads/2017/02/webpack2-150x150.jpg',
          'featuredimgurl': 'https://www.thatyou.cn/wp-content/uploads/2017/02/webpack2.jpg'
        },
        {
          'id': 478,
          'title': {
            'rendered': '阿里云虚拟空间wordpress网站实现全站HTTPS'
          },
          'date': '2017-01-13T13:59:36',
          'thumbnailurl': 'https://www.thatyou.cn/wp-content/uploads/2017/01/wordpress-https-150x150.png',
          'featuredimgurl': 'https://www.thatyou.cn/wp-content/uploads/2017/01/wordpress-https.png'
        },
        {
          'id': 471,
          'title': {
            'rendered': 'Webpack教程及实用配置指南'
          },
          'date': '2016-12-20T13:31:20',
          'thumbnailurl': 'https://www.thatyou.cn/wp-content/uploads/2016/12/webpack-150x150.jpg',
          'featuredimgurl': 'https://www.thatyou.cn/wp-content/uploads/2016/12/webpack.jpg'
        },
        {
          'id': 467,
          'title': {
            'rendered': 'SASS基本用法指南'
          },
          'date': '2016-11-28T17:00:59',
          'thumbnailurl': 'https://www.thatyou.cn/wp-content/uploads/2016/11/SASS基本用法指南-150x150.png',
          'featuredimgurl': 'https://www.thatyou.cn/wp-content/uploads/2016/11/SASS基本用法指南.png'
        },
        {
          'id': 464,
          'title': {
            'rendered': '轻松上手Angular 2.0 (下)'
          },
          'date': '2016-11-06T22:16:06',
          'thumbnailurl': 'https://www.thatyou.cn/wp-content/uploads/2016/11/轻松上手Angular-2.0下-150x150.jpg',
          'featuredimgurl': 'https://www.thatyou.cn/wp-content/uploads/2016/11/轻松上手Angular-2.0下.jpg'
        },
        {
          'id': 448,
          'title': {
            'rendered': '轻松上手Angular 2.0 (上)'
          },
          'date': '2016-11-06T21:48:26',
          'thumbnailurl': 'https://www.thatyou.cn/wp-content/uploads/2016/11/轻松上手Angular-2.0上-150x150.jpg',
          'featuredimgurl': 'https://www.thatyou.cn/wp-content/uploads/2016/11/轻松上手Angular-2.0上.jpg'
        }
      ]
    }
  },
  methods: {
  },
  mounted () {
    // let that = this
    // let getPostApi = 'https://www.thatyou.cn/wp-json/wp/v2/posts'
    // let getPostApi = 'http://www.sameroad.cn/wp-json/wp/v2/posts'
    // axios.get(getPostApi)
    // .then(response => {
    //   console.log(response)
    //   that.posts = response.data
    // })
    // .catch(e => {
    //   console.log(e)
    //   that.errors.push(e)
    // })
  }
}
</script>

<style scoped lang="scss">
@import '../css/vars.scss';
.posts{
  ul{
    li{
      border-bottom: 1px solid $borderColor;
      padding: 1rem;
      min-height: 4rem;
      background-color: $lightColor;
      align-items: flex-start;
      img{
        width: 6rem;
        height: 6rem;
      }
      section{
        flex: 1;
        margin-right: 1rem;
      }
      h4{
        font-size: 1.5rem;
        font-weight: 600;
        color: $mainFontColor;
      }
      h5{
        margin-top: .6rem;
        font-weight: 500;
      }
    }
  }
}
</style>

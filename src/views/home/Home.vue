<template>
  <div id='home'>
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
// import Swiper from "components/common/swiper/Swiper"
// import SwiperItem from "components/common/swiper/SwiperItem"
// import {Swiper,SwiperItem} from 'components/common/swiper'
import HomeSwiper from './childrenCompos/homeSwiper'

import {getHomeMultidata} from 'network/home'
export default {
  name: 'Home',
  components: {
    NavBar,
    HomeSwiper
    },
    data() {
      return {
        banners: [],
        recommends: [],
      }
    },
    created() {
      // 1.请求多个数据
      getHomeMultidata().then(res => {
        this.banners = res.data.data.banner.list
        // this.recommends = res.data.data.recommend.list
        })
    },
}
</script>

<style>
/* 动态引用文件  这里不是require*/
/* @import './assets/css/base.css'; */
.home-nav {
  background-color: var(--color-tint);
  color: #fff
}
</style>

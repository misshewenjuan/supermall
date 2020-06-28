<template>
  <div id='home'>
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <feature-view></feature-view>
    <tab-control class="tab-control" :titles="['流行','新款','精选']"></tab-control>
   <ul>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
   </ul>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import TabControl from  'components/content/tabControl/TabControl'
// import Swipegit r from "components/common/swiper/Swiper"
// import SwiperItem from "components/common/swiper/SwiperItem"
// import {Swiper,SwiperItem} from 'components/common/swiper'
import HomeSwiper from './childrenCompos/homeSwiper'
import FeatureView from './childrenCompos/feature'

import {getHomeMultidata,getHomeGoods} from 'network/home'
export default {
  name: 'Home',
  components: {
    NavBar,
    TabControl,
    HomeSwiper,
    FeatureView,
    },
    data() {
      return {
        banners: [],
        recommends: [],
        goods: {
          'pop': {page:0,list:[]},
          'new': {page:0,list:[]},
          'sell': {page:0,list:[]}
      }
      }
    },
    created() {
      // 1.请求多个数据
      this.getHomeMultidata(),
      this.getHomeGoods('pop'),
      this.getHomeGoods('new'),
      this.getHomeGoods(''),
    },
    methods: {
      getHomeMultidata() {
         getHomeMultidata().then(res => {
        this.banners = res.data.data.banner.list
        // this.recommends = res.data.data.recommend.list
        })},

      getHomeGoods(type){
        const page = this.goods[type].page + 1
        getHomeGoods(type,page).then(res => {
        console.log(res)
      })
      }
    }
}
</script>

<style>
/* 动态引用文件  这里不是require*/
/* @import './assets/css/base.css'; */

#home {
  padding-top: 44px
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;

  position: fixed;
  top:0;
  left:0;
  right:0;
  z-index:5;
}

.tab-control { 
  /* 这个属性移动端支持的比较好   pc端还有一些浏览器不支持 */
  position: sticky;
  top: 44px;
}
</style>

<template>
  <div>
    
  </div>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper'

export default {
  name: 'HomeSwiper',
  components: {
    Swiper,
    SwiperItem
    },
  props: {
    banners: {
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style>
</style>

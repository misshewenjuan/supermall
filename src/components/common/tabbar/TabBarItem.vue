<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <!-- 插槽会被替换，所以给它添加类不会有想要的效果。-->
    <!-- :class="{active:isActive}" 这个类的方法很经典 -->

    <!-- 绑定样式很常用 要学会灵活使用   可以将后面的样式放在methods或者 computed中  等号后面如果是对象，前面记得加冒号-->
    <div :style='activeStyle'><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'TabBar',
  props:{
    path: String,
    activeColor: {
      type: String,
      default:'red'
    }
  },
  data() {
    return {
      // isActive: false,
    }
  },
  computed:
  {
    activeStyle() {
      return this.isActive?{}:{color:this.activeColor}
    },
    isActive() {
      // console.log(this.$route.path)
      // console.log(this.path)
      // console.log('########################')

      // 判断活跃路径下的path和传入的path是否相同
      return this.$route.path.indexOf(this.path) == -1//
    }
  },
  methods: {
    itemClick() {
      
      // console.log(this.path)
      this.$router.push(this.path)  //通过代码转换路径
    }
  }
}
</script>

<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}

.tab-bar-item img{
  /* 去掉图片下面的3个像素 */
  vertical-align: middle;
  margin-bottom:2px;
  margin-top: 3px;
  width: 24px;
  height: 24px;
}

</style>

<!--  -->
<template>
  <div class="navbar">
    <li><i class="icon icon-help"></i></li>
    <li><i class="icon icon-search"></i></li>
    <li><a href="javascript:;" class="car-button">选择车辆</a></li>
    <li><i class="icon icon-location"></i></li>
    <li><i class="icon icon-user"></i></li>
  </div>
</template>

<script>
export default {
  //import引入的组件需要注入到对象中才能使用
  name: "navbar",
  components: {},
  data() {
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  //方法集合
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  beforeCreate() {}, //生命周期 - 创建之前
  watch: {},
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后 refs可以取到
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
  deactivated() {},
};
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.navbar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 86px;
  text-align: center;
  z-index: 10;
  li {
    display: inline-block;
  }
  .icon {
    vertical-align: middle;
    margin: 0 17px;
    cursor: pointer;
  }
  .car-button {
    margin: 0 17px;
    display: inline-block;
    width: 240px;
    height: 84px;
    border-radius: 100px;
    line-height: 84px;
    text-align: center;
    color: #fff;
    font-size: 26px;
    background-color: $mainColor;
  }
}
</style>
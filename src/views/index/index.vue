<!--  -->
<template>
  <div>
    <div id="user" :class="{ open: show }">
      <!-- <div id="user" :class="[show ? 'open' : '']"> -->
      <router-view />
    </div>
    <Map />
    <!-- <Cars /> -->
    <Navbar />
  </div>
</template>

<script>
import Map from "../amap";
import Cars from "../cars";
import Navbar from "@c/navbar";
export default {
  //import引入的组件需要注入到对象中才能使用
  name: "index",
  components: { Map, Cars, Navbar },
  data() {
    //这里存放数据
    return {
      // show: false,
    };
  },
  //监听属性 类似于data概念
  computed: {
    show() {
      const router = this.$route;
      return router.name === "Index" ? false : true;
    },
  },
  //监控data中的数据变化
  //方法集合
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  beforeCreate() {}, //生命周期 - 创建之前
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    document.addEventListener("mouseup", (e) => {
      const userCon = document.getElementById("user");
      if (userCon && !userCon.contains(e.target)) {
        this.$router.push({
          name: "Index",
        });
      }
    });
  },
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
#user {
  position: fixed;
  top: 0;
  right: -600px;
  bottom: 0;
  width: 410px;
  background-color: #34393f;
  z-index: 200;
  transition: all 0.3s ease 0s;
  &.open {
    right: 0px;
  }
}
</style>
<!--  -->
<template>
  <div class="index-wrap">
    <section class="cars-item">
      <header>
        <h4 class="cars-logo">
          <img src="../../assets/images/ford.png" alt="Mustang 2019款" />
          <span class="name">Mustang 2019款</span>
        </h4>
        <p class="attr">新能源汽车 5座</p>
      </header>
      <div class="cars-content"></div>
      <footer></footer>
    </section>
    <span @click="user"></span>
  </div>
</template>

<script>
export default {
  //import引入的组件需要注入到对象中才能使用
  name: "cars",
  components: {},
  data() {
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  //方法集合
  methods: {
    user() {
      this.$router.push({
        name: "User",
      });
    },
  },
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
.index-wrap {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 94px;
  z-index: 11;
}
.cars-item {
  width: 505px;
  height: 257px;
  margin: auto;
  padding: 30px;
  background-color: #fff;
  border-radius: 24px;
  @include webkit(box-shadow, 0 0 18px 0 rgba(0, 0, 0, 0.2));
  @include webkit(box-sizing, border-box);
  header {
    display: flex;
    h4,
    p {
      flex: 1;
    }
  }
}
.cars-logo {
  img {
    display: inline-block;
    height: 60px;
    vertical-align: middle;
    margin-right: 10px;
  }
  .name {
    font-size: 16px;
  }
}
.attr {
  text-align: right;
  opacity: 0.5;
  line-height: 60px;
}
</style>
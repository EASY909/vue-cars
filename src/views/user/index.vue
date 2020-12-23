<!--  -->
<template>
  <div class="user-container">
    <div class="user-info">
      <img src="../../assets/images/face.jpg" alt="" />
      <div class="meta">
        <h4 class="name">17301274</h4>
        <span>
          文明驾驶分
          <strong>0</strong>
        </span>
      </div>
    </div>
    <ul class="group-links">
      <router-link to="/my" tag="a" class="arrow">
        <i class="icon icon-user-link-1"></i>
        我的帐户
      </router-link>
      <router-link to="/order" tag="a" class="arrow">
        <i class="icon icon-user-link-2"></i>
        租车订单
      </router-link>
      <router-link to="/authentication" tag="a" class="arrow">
        <i class="icon icon-user-link-3"></i>
        实名认证
      </router-link>
      <router-link to="/safe" tag="a" class="arrow">
        <i class="icon icon-user-link-4"></i>
        安全设置
      </router-link>
      <router-link to="aa" tag="a" class="arrow">
        <i class="icon icon-user-link-5"></i>
        帮助中心
      </router-link>
    </ul>
    <button class="logout" @click="logout">登出</button>
  </div>
</template>

<script>
export default {
  //import引入的组件需要注入到对象中才能使用
  name: "",
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
    logout() {},
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
.logout {
  position: absolute;
  left: 50%;
  bottom: 60px;
  width: 165px;
  height: 58px;
  margin-left: -82px;
  background-color: #2d3339;
  border-radius: 100px;
  text-align: center;
  line-height: 58px;
  color: #fff;
  font-size: 18px;
  border: none;
  outline: none;
}
.user-info {
  display: flex;
  padding: 84px 0 80px 10px; // 方向顺时针，4个边
  img {
    width: 80px;
    height: 80px;
    border-radius: 100%;
    border: 6px solid #2f343a;
  }
  .meta {
    flex: 1;
    padding-left: 17px;
  }
  .name {
    color: #909090;
    line-height: 43px;
    font-size: 18px;
  }
  span {
    display: inline-block;
    height: 27px;
    padding: 0 17px;
    background-color: #10a0f2;
    border-radius: 100px;
    line-height: 27px;
    color: #fff;
    font-size: 14px;
  }
}
</style>
<!--  -->
<template>
  <div class="user-container">
    <Back column="安全设置" />
    <ul class="group-links">
      <router-link to="/password" tag="a" class="arrow">
        修改登录密码
      </router-link>
      <router-link to="/capital" tag="a" class="arrow">
        设置资金密码
      </router-link>
      <router-link to="/phone" tag="a" class="arrow"> 绑定手机号 </router-link>
      <router-link to="/bank" tag="a" class="arrow"> 绑定银行号 </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  //import引入的组件需要注入到对象中才能使用
  name: "safe",
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
</style>
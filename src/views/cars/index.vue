<!--  -->
<template>
  <div class="cars-wrap">
    <div class="cars-swiper-wrap">
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide><CarsList height="600px" /></swiper-slide>
        <swiper-slide><CarsList /></swiper-slide>
        <swiper-slide><CarsList /></swiper-slide>
      </swiper>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </div>
    <span @click="user"></span>
  </div>
</template>

<script>
import CarsList from "@c/carsList";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";

export default {
  //import引入的组件需要注入到对象中才能使用
  name: "cars",
  components: { Swiper, SwiperSlide, CarsList },
  data() {
    //这里存放数据
    return {
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 50,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
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
.cars-wrap {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 94px;
  z-index: 11;
}
.cars-swiper-wrap {
  position: relative;
  padding: 0 155px;
  .swiper-container {
    overflow: initial;
  }
  .swiper-button-prev,
  .swiper-button-next {
    top: 50%;
    width: 60px;
    height: 100px;
    margin-top: -50px;
    border-radius: 100px;
    background-color: #fff;
    outline: none;
    @include webkit(box-shadow, 0 0 18px 0 rgba(0, 0, 0, 0.2));
    @include webkit(transition, all 0.3s ease 0s);
    &.swiper-button-disabled {
      opacity: 1;
    }
    &:hover {
      background-color: $color-main;
      &:after {
        border-top: 3px solid $color-blur;
      }
    }
    &:after {
      content: "";
      width: 14px;
      height: 14px;
      border-top: 3px solid #000;
    }
  }
  .swiper-button-prev {
    left: 53px;
    &:after {
      border-left: 3px solid #000;
      margin-left: 5px;
      @include webkit(transform, rotate(-45deg));
    }
    &:hover {
      &:after {
        border-left: 3px solid $color-blur;
      }
    }
  }
  .swiper-button-next {
    right: 53px;
    &:after {
      border-right: 3px solid #000;
      margin-right: 5px;
      @include webkit(transform, rotate(45deg));
    }
    &:hover {
      &:after {
        border-right: 3px solid $color-blur;
      }
    }
  }
}
</style>
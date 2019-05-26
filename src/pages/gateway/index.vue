<style lang="less" scoped>
.gateway {
  .swiper-slide {
    width: 100%;
    img{
      width: 100%;
      height: 300px;
    }
  }
}
</style>

<template>
  <div class="gateway">
    <!-- 顶部导航 -->
    <header-main></header-main>
    <!-- 轮播图 -->
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide>
        <img src="@/assets/banner-1.png" alt="">
      </swiper-slide>
      <swiper-slide>
        <img src="@/assets/banner-1.png" alt="">
      </swiper-slide>
      <swiper-slide>
        <img src="@/assets/banner-1.png" alt="">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <!-- <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div> -->
    </swiper>
    <!-- 底部 -->
    <footer-main></footer-main>
  </div>
</template>
<script>
export default {
  data() {
    return {
      swiperOption: {
        autoplay: {
          delay: 10000, //自动切换的时间间隔，单位ms
          disableOnInteraction: true //用户操作swiper之后，是否禁止autoplay。
        },
        navigation: {
          nextEl: ".swiper-button-next", //前进按钮的css选择器或HTML元素。
          prevEl: ".swiper-button-prev", //后退按钮的css选择器或HTML元素。
          // hideOnClick: true, //点击slide时显示/隐藏按钮
          disabledClass: "my-button-disabled", //前进后退按钮不可用时的类名。
          hiddenClass: "my-button-hidden" //按钮隐藏时的Class
        },
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          progressbarOpposite: true, //使进度条分页器与Swiper的direction参数相反
          bulletElement: "li", //设定分页器指示器（小点）的HTML标签。
          dynamicBullets: true, //动态分页器，当你的slide很多时，开启后，分页器小点的数量会部分隐藏。
          hideOnClick: true, //默认分页器会一直显示。这个选项设置为true时点击Swiper会隐藏/显示分页器。
          clickable: true //此参数设置为true时，点击分页器的指示点分页器会控制Swiper切换。
        }
      }
    };
  }
};
</script>

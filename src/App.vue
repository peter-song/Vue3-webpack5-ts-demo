<template>
  <div>
    <h2>webpack5-vue3-ts</h2>

    <img :src="smallImg" alt="小于10kb的图片">
    <img :src="bigImg" alt="大于10kb的图片">

    <!-- 小图片背景容器 -->
    <div className="smallImg"></div>
    <!-- 大图片背景容器 -->
    <div className="bigImg"></div>
  </div>
</template>

<script setup lang="ts">
  import smallImg from '@/assets/imgs/logo-4kb.png'
  import bigImg from '@/assets/imgs/ape-76kb.jpg'
  import './app.css';
  import './app.less';
</script>

<style scoped>

</style>
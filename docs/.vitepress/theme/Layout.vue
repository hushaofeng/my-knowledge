<script setup>
import DefaultTheme from 'vitepress/theme'
import Busuanzi from '../components/Busuanzi.vue'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <!-- layout-bottom 全站生效（含 layout: home 首页），doc-after 只在文章页生效 -->
    <template #layout-bottom>
      <Busuanzi />
    </template>
  </Layout>
</template>
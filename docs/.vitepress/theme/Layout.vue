<script setup>
import DefaultTheme from 'vitepress/theme'
import Busuanzi from '../components/Busuanzi.vue'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #doc-after>
      <Busuanzi />
    </template>
  </Layout>
</template>
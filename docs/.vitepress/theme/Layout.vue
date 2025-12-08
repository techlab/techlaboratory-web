<script setup>
import DefaultTheme from 'vitepress/theme'
import Footer from './components/Footer.vue'
// import Banner from './components/Banner.vue'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #doc-after>
    </template>
  </Layout>
  <Footer />
</template>
<script setup>
import { onMounted } from 'vue'
import DefaultTheme from 'vitepress/theme'
import Footer from './components/Footer.vue'
import VersionSwitcher from './components/VersionSwitcher.vue'

const { Layout } = DefaultTheme

// Inject Carbon Ads script dynamically with environment variables
onMounted(() => {
  // Only load in production
  if (!import.meta.env.PROD) return

  const serveId = import.meta.env.VITE_CARBON_SERVE_ID
  const placement = import.meta.env.VITE_CARBON_PLACEMENT

  // Only inject if both values are configured
  if (serveId && placement) {
    const container = document.getElementById('carbon-ads-container')
    if (container) {
      const script = document.createElement('script')
      script.async = true
      script.type = 'text/javascript'
      script.src = `//cdn.carbonads.com/carbon.js?serve=${serveId}&placement=${placement}`
      script.id = '_carbonads_js'
      container.appendChild(script)
    }
  }
})
</script>

<template>
  <div>
    <Layout>
      <template #doc-before>
        <div id="carbon-ads-container"></div>
      </template>
      <template #aside-outline-after>
        <VersionSwitcher />
      </template>
    </Layout>
    <Footer />
  </div>
</template>
<script setup lang="ts">
import { useData, useRouter, withBase } from 'vitepress'
import { computed } from 'vue'
const { page, site } = useData()
const router = useRouter()
const base = computed(() => site.value.base.replace('/', '').replace('/', ''))

const pagePath = computed(() => router.route.path);
const segments = computed(() => pagePath.value.split('/').filter((segment: string) => segment.length > 0 && segment != base.value));
const newPath = computed(() => `/${segments.value[0]}/${segments.value[1]}/`)

function goToPluginPage() {
  router.go(withBase(newPath.value))
}

</script>

<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 flex flex-row justify-between gap-4">
    <div>  
      <h1>
					<span class="text-3xl">
						{{ page.title }}
					</span>
			</h1>
      <p class="text-lg text-gray-600 dark:text-gray-300 py-2">
        {{ page.description }}
      </p>
    </div>  
    
    <!-- Back Link -->
    <div class="py-4 align-right">
      <button 
        @click="goToPluginPage"
        class="demo-btn bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
      >
        <span class="font-medium text-sky-500">< Back to Documentation</span>
      </button>
    </div>
  </div>
</template>


<style>
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.demo-btn:hover {
  opacity: 0.9;
  transform: translateY(-1px);
}

.demo-btn.active {
  background: var(--vp-c-brand-1) !important;
  color: white !important;
  border-color: var(--vp-c-brand-1) !important;
}
</style>
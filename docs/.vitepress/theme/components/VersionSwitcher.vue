<template>
  <div v-if="versions.length > 0" class="version-switcher">
    <span class="version-label">Version:</span>
    <select v-model="selected" @change="goToVersion">
      <option 
        v-for="v in versions" 
        :key="v"
        :value="v"
      >
        {{ getVersionLabel(v) }}
      </option>
    </select>
  </div>
</template>

<script setup>
import { useRouter, useData } from 'vitepress'
import { ref, computed, watch } from 'vue'
import { getVersions, getLatestVersion, isDeprecated } from '../versionConfig.js'

const router = useRouter()
const { page } = useData()

// Make these reactive using computed properties
const segments = computed(() => page.value.relativePath.split('/'))
const plugin = computed(() => segments.value[0])
const currentVersion = computed(() => segments.value[1])

// Get versions from centralized config
const versions = computed(() => getVersions(plugin.value))
const latestVersion = computed(() => getLatestVersion(plugin.value))
const selected = ref(currentVersion.value)

// Watch for page changes and update selected version
watch(currentVersion, (newVersion) => {
  selected.value = newVersion
})

// Format version label with indicators
function getVersionLabel(version) {
  let label = version
  
  if (version === latestVersion.value) {
    label += ' (latest)'
  } else if (isDeprecated(plugin.value, version)) {
    label += ' (deprecated)'
  }
  
  return label
}

function goToVersion() {
  const target = selected.value
  // Get path segments after version, excluding 'index.md'
  const rest = segments.value
    .slice(2)
    .filter(seg => seg && seg !== 'index.md')
    .join('/')
  
  // Construct clean URL
  const newPath = rest 
    ? `/${plugin.value}/${target}/${rest}` 
    : `/${plugin.value}/${target}/`
  
  router.go(newPath)
}
</script>

<style scoped>
.version-switcher {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 0;
  margin-top: 16px;
  border-top: 1px solid var(--vp-c-divider);
}

.version-label {
  font-size: 13px;
  font-weight: 600;
  color: var(--vp-c-text-2);
  white-space: nowrap;
}

.version-switcher select {
  flex: 1;
  padding: 6px 10px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-alt);
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;
}

.version-switcher select:hover {
  border-color: var(--vp-c-brand-1);
  background: var(--vp-c-bg);
}

.version-switcher select:focus {
  outline: none;
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 0 0 2px var(--vp-c-brand-soft);
}
</style>

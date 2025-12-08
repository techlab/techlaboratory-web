<template>
    <button @click="toggle" class="p-2 rounded focus:outline-none" :aria-label="ariaLabel">
        <span v-if="isDark">🌙</span>
        <span v-else>☀️</span>
    </button>
</template>


<script setup>
import { ref, onMounted } from 'vue'
const isDark = ref(false)
const ariaLabel = 'Toggle color theme'

function apply(dark) {
    const el = document.documentElement
    if (dark) el.classList.add('dark')
    else el.classList.remove('dark')
    localStorage.setItem('tl-theme', dark ? 'dark':'light')
}

function toggle(){ isDark.value = !isDark.value; apply(isDark.value) }

onMounted(()=>{
    const saved = localStorage.getItem('tl-theme')
    const prefers = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    const dark = saved ? saved==='dark' : prefers
    isDark.value = dark
    apply(dark)
})
</script>

<style scoped>
    button{ background:transparent }
</style>
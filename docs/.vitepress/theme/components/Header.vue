<template>
<header class="shadow-sm bg-gradient-to-r from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
<div class="container mx-auto px-4 py-4 flex items-center justify-between">
<div class="flex items-center gap-4">
<img src="../../../assets/logo.png" alt="logo" style="height: 32px;" class="h-9 w-9" />
<div>
<a href="/" class="text-lg font-semibold">TechLaboratory</a>
<div class="text-sm text-gray-500">
Open-source JavaScript Plugins
</div>
</div>
</div>


<nav class="flex items-center gap-4">
<a class="nav-link" href="/smartwizard/">SmartWizard</a>
<a class="nav-link" href="/copifyjs/">CopifyJS</a>
<a class="nav-link" href="https://github.com/techlab" target="_blank">GitHub</a>
<ThemeToggle />
</nav>
</div>
</header>
</template>


<script setup>
import ThemeToggle from './ThemeToggle.vue'
</script>


<style scoped>
.nav-link{ color:var(--accent); font-weight:500 }
</style>
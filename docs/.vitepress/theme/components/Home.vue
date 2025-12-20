<script setup lang="ts">
import { products } from '../siteConfig'
import { withBase } from 'vitepress'
</script>

<template>
	<div class="min-h-screen bg-gradient-to-b from-gray-50 dark:from-gray-900 dark:to-gray-800">
		<!-- Hero Section -->
		<section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
			<div class="text-center">
				<!-- Hero Badges -->
				<div class="flex justify-center gap-3 mb-8 flex-wrap">
					<div class="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm font-semibold shadow-lg">
						JavaScript
					</div>
					<div class="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm font-semibold shadow-lg">
						React
					</div>
					<div class="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm font-semibold shadow-lg">
						jQuery
					</div>
				</div>
				
				<!-- Hero Title -->
				<h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
					<span class="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 bg-clip-text text-transparent">
						Smart JavaScript Components for the web
					</span>
				</h1>
				
				<!-- Hero Tagline -->
				<p class="text-lg  sm:text-xl text-gray-600 dark:text-gray-300 mx-auto mb-12 leading-relaxed">
					Modern, flexible, and production-ready components with modern UI support.
					Built by developers, for developers.
				</p>

				<!-- Hero Stats -->
				<div class="flex justify-center gap-8 sm:gap-16 flex-wrap">
					<div class="text-center">
						<div class="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent mb-2">
							6+
						</div>
						<div class="text-sm text-gray-600 dark:text-gray-400 font-medium">Projects</div>
					</div>
					<div class="text-center">
						<div class="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent mb-2">
							100%
						</div>
						<div class="text-sm text-gray-600 dark:text-gray-400 font-medium">Open Source</div>
					</div>
					<div class="text-center">
						<div class="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent mb-2">
							MIT
						</div>
						<div class="text-sm text-gray-600 dark:text-gray-400 font-medium">Licensed</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Products Section -->
		<section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
			<!-- Section Header -->
			<div class="text-center mb-16">
				<h2 class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
					Our Projects
				</h2>
				<p class="text-lg text-gray-600 dark:text-gray-300">
					Explore our collection of modern, well-documented components
				</p>
			</div>

			<!-- Products Grid -->
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				<div 
					v-for="(product, index) in products" 
					:key="product.title"
					class="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700 hover:-translate-y-1"
				>
					<!-- Product Screenshot -->
					<div v-if="product.screenshot" class="p-4 bg-gray-50 dark:bg-gray-900">
						<img 
							:src="product.screenshot" 
							:alt="product.title + ' screenshot'" 
							class="w-full h-auto rounded-lg border border-gray-200 dark:border-gray-700"
						/>
					</div>

					<!-- Card Content -->
					<div class="p-6">
						<!-- Title -->
						<h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
							{{ product.title }}
						</h3>
						
						<!-- Description -->
						<p class="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
							{{ product.description }}
						</p>

						<!-- Features Preview -->
						<div class="space-y-2 mb-6">
							<div 
								v-for="(feature, idx) in product.features.slice(0, 3)" 
								:key="idx"
								class="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300"
							>
								<svg class="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
									<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
								</svg>
								<span>{{ feature }}</span>
							</div>
							<div 
								v-if="product.features.length > 3" 
								class="text-sm text-blue-600 dark:text-blue-400 font-medium pl-7"
							>
								+{{ product.features.length - 3 }} more features
							</div>
						</div>

						<!-- Card Footer -->
						<div class="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
							<!-- Explore Button -->
							<a 
								:href="withBase(product.pageLink)" 
								class="px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 no-underline"
							>
								Explore
							</a>

							<!-- Tags -->
							<div class="flex gap-2">
								<span v-for="(tag, index) in product.tags" :key="index" class="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs font-medium">
									{{ tag }}
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

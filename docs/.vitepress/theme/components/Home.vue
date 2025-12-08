<script setup lang="ts">
interface Product {
	title: string
	description: string
	features: string[]
	readMoreLink: string
	docsLink: string
	demoLink: string
}

const products: Product[] = [
	{
		title: 'Copify JS',
		description: 'A modern, cross-platform clipboard utility library for web',
		features: [
			'Support on all modern browsers',
			'TypeScript support with comprehensive type definitions',
			'Fallback mechanisms for different levels of browser support',
			'Comprehensive error handling with detailed results',
			'Standalone with zero dependencies',
			'Lightweight and fast'
		],
		readMoreLink: '/copify',
		docsLink: '/copify#documentation',
		demoLink: '/copify#demo'
	},
	{
		title: 'React Smart Tab',
		description: 'The awesome react tab component for ReactJS',
		features: [
			'Responsive design',
			'Standalone CSS',
			'Bootstrap compatible',
			'Various themes included',
			'Customizable CSS',
			'Easy to implement',
			'Supports all modern browsers'
		],
		readMoreLink: '/react-smarttab',
		docsLink: '/react-smarttab#documentation',
		demoLink: '/react-smarttab#demo'
	},
	{
		title: 'jQuery Smart Wizard',
		description: 'The awesome step wizard plugin for jQuery',
		features: [
			'Easy to implement and minimal HTML required',
			'Responsive CSS design',
			'Bootstrap compatible',
			'Cool themes included and can be easily customized',
			'Easy color customization using CSS variables',
			'Form validation support',
			'RTL (Right-to-left language) support',
			'Accessible controls',
			'External controls support',
			'Easy ajax content integration',
			'Auto content height adjustment',
			'Customizable toolbar and option to provide extra HTML'
		],
		readMoreLink: '/jquery-smartwizard',
		docsLink: '/jquery-smartwizard#documentation',
		demoLink: '/jquery-smartwizard#demo'
	},
	{
		title: 'jQuery Smart Cart',
		description: 'jQuery Shopping Cart plugin with PayPal payment support',
		features: [
			'In-built PayPal, Ajax and form submit methods',
			'Bootstrap support',
			'Compatible with latest jQuery versions',
			'Public methods for external function call',
			'Enhanced event support',
			'Clean and compact design'
		],
		readMoreLink: '/jquery-smartcart',
		docsLink: '/jquery-smartcart#documentation',
		demoLink: '/jquery-smartcart#demo'
	},
	{
		title: 'jQuery Smart Tab',
		description: 'The flexible jQuery tab control plugin',
		features: [
			'Responsive design',
			'Standalone CSS',
			'Bootstrap compatible',
			'Various themes included',
			'URL navigation and tab selection',
			'Ajax content loading support',
			'Keyboard navigation',
			'Auto content height adjustment',
			'Compatible with all jQuery versions',
			'Supports all modern browsers',
			'Auto Progress',
			'Cool transition animations'
		],
		readMoreLink: '/jquery-smarttab',
		docsLink: '/jquery-smarttab#documentation',
		demoLink: '/jquery-smarttab#demo'
	},
	{
		title: 'create-jquery-plugin',
		description: 'CLI for creating ready-to-start modern jQuery Plugins',
		features: [
			'Easy-to-use CLI',
			'CSS and SCSS templates',
			'Creates ready-to-start local development environment',
			'Unit testing with Jasmine and Karma'
		],
		readMoreLink: '/create-jquery-plugin',
		docsLink: '/create-jquery-plugin#usage',
		demoLink: '/create-jquery-plugin#usage'
	}
]
</script>

<template>
	<div>
		<!-- Hero Section -->
		<section class="hero-section">
			<h1 class="hero-title">React components and jQuery plugins</h1>
			<p class="hero-tagline">Beautiful, modern and flexible React components and jQuery plugins with Bootstrap support.</p>
		</section>

		<!-- Products Section -->
		<section class="products-section">
			<div class="products-grid">
				<div v-for="product in products" :key="product.title" class="product-card">
					<h2>{{ product.title }}</h2>
					<p class="description">{{ product.description }}</p>
					
					<ul>
						<li v-for="(feature, index) in product.features" :key="index">
							{{ feature }}
						</li>
					</ul>
					
					<div class="product-links">
						<a :href="product.readMoreLink" class="product-link">Read more</a>
						<a :href="product.docsLink" class="product-link secondary">Documentation</a>
						<a :href="product.demoLink" class="product-link secondary">Demo</a>
					</div>
				</div>
			</div>
		</section>

		<!-- About Section -->
		<section class="products-section">
			<div class="about-section">
				<h2>About TechLaboratory</h2>
				<p>
					We stands for creating and delivering free and open source projects. 
					Launched on September 2010 by <a href="http://dipu.me" target="_blank">Dipu Raj</a>, 
					we are still keep supporting the open-source world. We have developed amazing React components 
					and jQuery plugins, they are all open-source and available for free on this website.
				</p>
				<p class="thank-you">Thank you and Happy Coding!</p>
			</div>
		</section>
	</div>
</template>

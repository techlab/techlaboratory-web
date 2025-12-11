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
	<div class="home-container">
		<!-- Hero Section with Gradient -->
		<section class="hero-section">
			<div class="hero-content">
				<div class="hero-buttons">
					<div class="hero-badge">JavaScript</div>
					<div class="hero-badge">React</div>
					<div class="hero-badge">jQuery</div>
				</div>
				
				<h1 class="hero-title">
					<span class="gradient-text">Smart JavaScript Components for the web</span> 
				</h1>
				<p class="hero-tagline">
					Modern, flexible, and production-ready components with modern UI support.
					Built by developers, for developers.
				</p>

				<div class="hero-stats">
					<div class="stat-item">
						<div class="stat-number">6+</div>
						<div class="stat-label">Projects</div>
					</div>
					<div class="stat-item">
						<div class="stat-number">100%</div>
						<div class="stat-label">Open Source</div>
					</div>
					<div class="stat-item">
						<div class="stat-number">MIT</div>
						<div class="stat-label">Licensed</div>
					</div>
				</div>

				
			</div>
		</section>

		<!-- Products Section -->
		<section class="products-section">
			<div class="section-header">
				<h2 class="section-title">Our Projects</h2>
				<p class="section-subtitle">Explore our collection of modern, well-documented components</p>
			</div>

			<div class="products-grid">
				<div v-for="(product, index) in products" :key="product.title" 
				     class="product-card" 
				     :class="`card-${index % 3}`">
					<div class="card-header">
						<div class="card-icon">
							<span v-if="product.title.includes('React')">⚛️</span>
							<span v-else-if="product.title.includes('Wizard')">🧙</span>
							<span v-else-if="product.title.includes('Cart')">🛒</span>
							<span v-else-if="product.title.includes('Tab')">📑</span>
							<span v-else-if="product.title.includes('Copify')">📋</span>
							<span v-else>⚙️</span>
						</div>
						<div class="card-tags">
							<span v-if="product.title.includes('React')" class="tag tag-react">React</span>
							<span v-if="product.title.includes('jQuery')" class="tag tag-jquery">jQuery</span>
							<span v-if="product.title.includes('CLI')" class="tag tag-cli">CLI</span>
						</div>
					</div>

					<h3 class="card-title">{{ product.title }}</h3>
					<p class="card-description">{{ product.description }}</p>

					<div class="features-preview">
						<div v-for="(feature, idx) in product.features.slice(0, 3)" 
						     :key="idx" 
						     class="feature-item">
							<svg class="feature-icon" viewBox="0 0 20 20" fill="currentColor">
								<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
							</svg>
							<span>{{ feature }}</span>
						</div>
						<div v-if="product.features.length > 3" class="more-features">
							+{{ product.features.length - 3 }} more features
						</div>
					</div>

					<div class="card-footer">
						<a :href="product.readMoreLink" class="card-button">
							<span>Explore</span>
							<svg class="button-arrow" viewBox="0 0 20 20" fill="currentColor">
								<path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
							</svg>
						</a>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

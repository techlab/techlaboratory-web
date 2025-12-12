import { defineConfig } from 'vitepress'

// Get Google Analytics ID from environment variable
const GA_TAG_ID = process.env.VITE_GA_TAG_ID

// Build head array conditionally
const headConfig: any[] = [
    ['meta', { name: 'theme-color', content: '#0b69ff' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }]
]

// Only add Google Analytics if tag ID is provided
if (GA_TAG_ID) {
    headConfig.push(
        ['script', { async: '', src: `https://www.googletagmanager.com/gtag/js?id=${GA_TAG_ID}` }],
        [
            'script',
            {},
            `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_TAG_ID}');`
        ]
    )
}

export default defineConfig({
    title: 'TechLaboratory',
    description: 'Smart and open-source JavaScript plugins',
    // base: '/',
    base: '/techlaboratory-web/',
    cleanUrls: true,
    head: headConfig,
    themeConfig: {
        logo: './images/logo.png',
        nav: [
            { text: 'Home', link: '/' },
            {
                text: 'JavaScript',
                items: [
                    { text: 'Copify JS', link: '/copify/' }
                ]
            },
            {
                text: 'React Components',
                items: [
                    { text: 'React Smart Tab', link: '/react-smarttab/' }
                ]
            },
            {
                text: 'jQuery Plugins',
                items: [
                    { text: 'jQuery Smart Wizard', link: '/jquery-smartwizard/' },
                    { text: 'jQuery Smart Cart', link: '/jquery-smartcart/' },
                    { text: 'jQuery Smart Tab', link: '/jquery-smarttab/' },
                    { text: 'create-jquery-plugin', link: '/create-jquery-plugin/' }
                ]
            }
        ],
        socialLinks: [
            { icon: 'github', link: 'https://github.com/techlab' },
            { icon: 'npm', link: 'https://www.npmjs.com/~dipuraj' }
        ]
    },
    sitemap: {
        hostname: 'https://techlaboratory.net'
    },
    ignoreDeadLinks: true
})
import { defineConfig } from 'vitepress'

export default defineConfig({
    title: 'TechLaboratory',
    description: 'Smart and open-source JavaScript plugins',
    base: '/',
    head: [
        ['meta', { name: 'theme-color', content: '#0b69ff' }],
    ],
    themeConfig: {
        logo: './images/logo.png',
        nav: [
            { text: 'Home', link: '/' },
            {
                text: 'JavaScript',
                items: [
                    { text: 'Copify JS', link: '/copify' }
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
            },
            { text: 'About', link: '/about' }
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
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "graphium",
  description: "graphium docs",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/getting-started' }
    ],

    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Getting started', link: '/getting-started' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/canvaspads/graphium' }
    ]
  }
})

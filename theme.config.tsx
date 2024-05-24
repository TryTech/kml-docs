import { DocsThemeConfig } from 'nextra-theme-docs'
import Head from './components/head'

const config: DocsThemeConfig = {
  logo: <span>@trytech/kml</span>,
  project: {
    link: 'https://github.com/TryTech/kml',
  },
  chat: {
    link: 'https://discord.gg/BrTzTvnDaf',
  },
  docsRepositoryBase: 'https://github.com/TryTech/kml',
  footer: {
    text: 'kml © 2024 by TryTech',
  },
  sidebar: {
    defaultMenuCollapseLevel: 2,
    toggleButton: true
  },
  faviconGlyph: '📦',
  logoLink: 'https://trytech.app',
  head: Head
}

export default config

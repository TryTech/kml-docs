import remarkMdxDisableExplicitJsx from 'remark-mdx-disable-explicit-jsx'

const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  latex: true,
  mdxOptions: {
    remarkPlugins: [
      [
        remarkMdxDisableExplicitJsx,
        { whiteList: ['table', 'thead', 'tbody', 'tr', 'th', 'td'] }
      ]
    ]
  }
})

module.exports = withNextra()

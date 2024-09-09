/** @type {import('next').NextConfig} */

import nextra from 'nextra'

const withNextra = nextra({
  theme: "./layout.config.jsx",
  themeConfig: './theme.config.jsx',
})

export default withNextra({
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
})

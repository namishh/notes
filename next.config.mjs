/** @type {import('next').NextConfig} */

import nextra from "nextra";

const withNextra = nextra({
  theme: "./theme.config.jsx",
  latex: true,
});

export default withNextra({
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  transpilePackages: ["geist"],
});

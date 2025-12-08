// tailwind.config.js
module.exports = {
  content: [
    './.vitepress/theme/**/*.{vue,js,ts}',
    './.vitepress/components/**/*.{vue,js,ts}',
    './docs/**/*.md', // Adjust this path if your markdown files are in a different location
    // Add any other paths where you use Tailwind classes
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
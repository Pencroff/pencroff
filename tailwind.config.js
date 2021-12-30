const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./layouts/**/*.html", "./assets/css/**/*.css"],
  theme: {
    fontFamily: {
      'sans': ['Comfortaa', ...defaultTheme.fontFamily.sans],
      'serif': ['Vollkorn', ...defaultTheme.fontFamily.serif],
      'mono': ['JetBrains Mono', ...defaultTheme.fontFamily.mono]
    },
    extend: {}
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
  ]
}

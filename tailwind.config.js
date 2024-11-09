const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./layouts/**/*.{html,gohtml}", "./assets/css/**/*.css"],
  theme: {
    fontFamily: {
      'sans': ['"Montserrat"', ...defaultTheme.fontFamily.sans],
      'serif': ['"Vollkorn"', ...defaultTheme.fontFamily.serif],
      'mono': ['"JetBrains Mono"', ...defaultTheme.fontFamily.mono]
    },
    extend: {
      flexBasis: {
        'half': '45%',
        'main': '65%',
        'side': '30%',
      }

    }
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ]
}

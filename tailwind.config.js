/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#F1F0EC",
        ink: {
          DEFAULT: "#111111",
          secondary: "#666666",
          muted: "#888888",
        },
        surface: {
          DEFAULT: "#FAF9F6",
          dark: "#111111",
        },
        borderLine: "#D5D4CF",
        sage: {
          DEFAULT: "#B7C8B0",
          dark: "#8EA386",
          light: "#D8E4D3",
        },
      },
      fontFamily: {
        sans: [
          '"Inter"',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
        mono: [
          '"JetBrains Mono"',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'monospace',
        ],
      },
      letterSpacing: {
        widest: '0.22em',
        editorial: '0.15em',
      },
    },
  },
  plugins: [],
}

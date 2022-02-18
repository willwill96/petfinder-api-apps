module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    prefix: '@',
    theme: {
      extend: {
        keyframes: {
          'slidein': {
            '0%': { transform: 'translateY(-100vh)' },
            '100%': { transform: 'translateY(0px)' }
          }
        },
        animation: {
          slidein: 'slidein 1s ease-in-out'
        }
      },
    },
    plugins: [],
    important:true,
  }
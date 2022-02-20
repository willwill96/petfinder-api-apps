module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    prefix: 'tw-',
    theme: {
      extend: {
        keyframes: {
          'slidein': {
            '0%': { transform: 'translateY(-100vh)' },
            '100%': { transform: 'translateY(0px)' }
          },
          'fadein': { 
            '0%': { opacity: 0 },
            '100%': { opacity: 1 }
          }
        },
        animation: {
          slidein: 'slidein 1s ease-in-out',
          fadein: 'fadein 1s ease-in-out'
        }
      },
    },
    plugins: [],
    important:true,
  }
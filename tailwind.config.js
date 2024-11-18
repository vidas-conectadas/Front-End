/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      cor1: '#bd1717',
      cor2: '#5f0808',
      cor3: '#d31515',
      cor4: '#e93939',
      cor5: '#F01111',
      cor6: '#2D82C6',
      cor7: '#FFC8C3',
      cor8: '#D1E4F3',
      cor9: '#D9D9D9',
      white: '#fff',
      black: '#000',
      gray: '#eeeeee'
    },

    screens: {
      's': '320px',
      'm': '375px',
      'l': '425px',
      'tablet': '768px',
      'laptop': '1024px',
      'laptopL': '1440px',

      
      // => @media (min-width: 600px) { ... }
    },

    

    backgroundImage: {
      'Vermelho':"url('C:/Users/vai2ca/Desktop/vidas conectadas/src/assets/images/imgBeneficios.jpg')"
    },
  },
  plugins: [],
}


const config = {
  theme: {
    extend: {
      fontFamily: {
        mont: ['var(--font-montserrat)', 'sans-serif'],
      },
      colors: {
        dark: '#1b1b1b',
        light: '#f5f5f5',
        primary: '#B63E96', // 240,86,199
        primaryDark: '#58E6D9', // 80,230,217
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;

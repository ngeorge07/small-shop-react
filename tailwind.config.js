module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        responsive: "repeat(auto-fit, minmax(250px, 1fr))",

        // Complex site-specific column configuration
      },
    },
  },
  plugins: [],
};

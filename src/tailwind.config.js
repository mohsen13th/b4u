module.exports = {
  theme: {
    extend: {
      colors: {
        "my-test-color": "#ff00ff",
      },
      screens: {
        '3xl': '1600px',   
        '4xl': '2000px',
      },
      fontFamily: {
        iransans: ["var(--font-iransansx)"],
      },
      backgroundOpacity: {
        10: '0.1',
        20: '0.2',
        30: '0.3',
        40: '0.4',
        50: '0.5',
      },
      boxShadow: {
        updown: "0 4px 6px -1px rgba(0,0,0,0.1), 0 -4px 6px -1px rgba(0,0,0,0.1)",
        uplight: "0 -4px 6px -1px rgba(0,0,0,0.1)",
        insetupdown: "inset 0 1px 2px rgba(0,0,0,0.05), inset 0 -1px 2px rgba(0,0,0,0.05)",
      },
    },
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
};

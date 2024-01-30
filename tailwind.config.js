/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./blog.html"],
  theme: {
    extend: {
      colors: {
        Darkblue: "#282938",
        RoyalBlue: "#2405F2",
        Tintblue: "#1C1E53",
      },
      fontFamily: {
        Poppins: "url('/fonts/Poppins-Regular.ttf')",
        Poppins: "url('/fonts/Poppins-Regular.woff')",
        Poppins: "url('/fonts/Poppins-Regular.woff2')",
        Poppins: "url('/fonts/Poppins-Regular.eot')",
      },
      img:{
          blog1:"url('/images/blog/1.png')",
          blog2:"url('/images/blog/2.png')",
          blog3:"url('/images/blog/3.png')",
          blog4:"url('/images/blog/4.png')",
          blog5:"url('/images/blog/5.png')",
          blog6:"url('/images/blog/6.png')",
          blog7:"url('/images/blog/7.png')",
          blog8:"url('/images/blog/8.png')",
          blog9:"url('/images/blog/9.png')",
      },
    },
  },
  plugins: [],
};


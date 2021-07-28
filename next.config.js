module.exports = {
  trailingSlash: true,
  exportPathMap: function() {
    return {
      '/': { page: '/' }
    };
  },
  images: {
    loader: "imgix",
    path: "/",
  }
};

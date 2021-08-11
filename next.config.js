module.exports = {
  trailingSlash: true,
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/brand': { page: '/brand' }
    };
  },
  images: {
    loader: "imgix",
    path: "/",
  }
};

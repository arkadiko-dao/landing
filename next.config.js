module.exports = {
  trailingSlash: true,
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/brand': { page: '/brand' },
      '/press-review': { page: '/press-review' }
    };
  },
  images: {
    loader: "imgix",
    path: "/",
  }
};

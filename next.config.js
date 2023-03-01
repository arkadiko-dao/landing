module.exports = {
  trailingSlash: true,
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/brand': { page: '/brand' },
      '/roadmap': { page: '/roadmap' },
      '/press-review': { page: '/press-review' }
    };
  },
  images: {
    loader: "imgix",
    path: "/",
  }
};

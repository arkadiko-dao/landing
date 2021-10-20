module.exports = {
  webpack: (config, options) => {
    config.experiments = {
      topLevelAwait: true,
    };
    return config;
  },
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

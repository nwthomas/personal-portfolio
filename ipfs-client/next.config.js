module.exports = {
  exportTrailingSlash: true,
  exportPathMap() {
    return {
      '/': { page: '/' },
    };
  },
};

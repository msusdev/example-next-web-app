module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  exportPathMap: function () {
      return {
          '/': { page: '/' }
      };
  }
};
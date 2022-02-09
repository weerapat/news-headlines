module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/news-headlines/'
    : '/',
  transpileDependencies: [
    'vuetify',
  ],
};

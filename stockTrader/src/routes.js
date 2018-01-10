const Home = resolve => {
  require.ensure(['./components/Home.vue'], () => {
      resolve(require('./components/Home.vue'));
    });
};

const Stocks = resolve => {
  require.ensure(['./components/stocks/Stocks.vue'], () => {
    resolve(require('./components/stocks/Stocks.vue'));
  });
};

const Portfolio = resolve => {
  require.ensure(['./components/portfolio/Portfolio.vue'], () => {
    resolve(require('./components/portfolio/Portfolio.vue'));
  });
};

export const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/stocks',
    name: 'stocks',
    component: Stocks
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: Portfolio
  },

];

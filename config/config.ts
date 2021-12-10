import { defineConfig } from 'umi';
import routes from './routes';

const { NODE_ENV, REACT_APP_STAGE, APP_PUBLIC_PATH } = process.env;
console.log('process.env.NODE_ENV', NODE_ENV);

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  dva: {
    immer: true,
    hmr: true,
  },
  routes: routes,
  fastRefresh: {},
});

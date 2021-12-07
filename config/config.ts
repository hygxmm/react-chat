import { defineConfig } from 'umi';
import routes from './routes';

const { REACT_APP_ENV, REACT_APP_STAGE, APP_PUBLIC_PATH } = process.env;
console.log('????', REACT_APP_ENV, REACT_APP_STAGE, APP_PUBLIC_PATH);

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

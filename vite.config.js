import { resolve } from 'path';

/**
 * @type {import('vite').UserConfig}
 */
const config = {
    // en
    build:{
      lib:{
        entry:'./index',
        name:'happy-ui',
      },
      rollupOptions:{
        input:{
          main:resolve(__dirname,'index.tsx')
        },
      }
    },
    css: {
        preprocessorOptions: {
          scss: {
            // additionalData:'@import "./src/assets/style/main.scss";'
          }
        }
      }
    
};
export default config;
import { defineConfig } from 'vite';
import uni from '@dcloudio/vite-plugin-uni';
import Components from '@uni-helper/vite-plugin-uni-components';
import { NutResolver } from 'nutui-uniapp';
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		Components({
			resolvers: [NutResolver()]
		}),
		uni()
	],
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: '@import "nutui-uniapp/styles/variables.scss";'
			}
		}
	}
});

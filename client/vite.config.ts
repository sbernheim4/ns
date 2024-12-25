import { reactRouter } from "@react-router/dev/vite";
import autoprefixer from "autoprefixer";
import tailwindcss from "tailwindcss";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { cjsInterop } from "vite-plugin-cjs-interop";

export default defineConfig({
	server: {
		port: 3000,
	},
	css: {
		postcss: {
			plugins: [tailwindcss, autoprefixer],
		},
	},
	plugins: [
		reactRouter(),
		tsconfigPaths(),
		cjsInterop({
			dependencies: [
				'@apollo/client',
                'graphql',
			],
		}),
	],
});

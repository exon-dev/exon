import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"react-type-animation": "react-type-animation/dist/esm/index.es.js",
		},
	},
	build: {
		rollupOptions: {
			external: ["react-type-animation"],
			output: {
				globals: {
					"react-type-animation": "TypeAnimation",
				},
			},
		},
	},
	optimizeDeps: {
		include: ["react-type-animation"],
	},
});

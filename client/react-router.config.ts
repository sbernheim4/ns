import type { Config } from "@react-router/dev/config";

export default {
	future: {
		'unstable_optimizeDeps': true,
	},
	// Config options...
	// Server-side render by default, to enable SPA mode set this to `false`
	ssr: false,
} satisfies Config;

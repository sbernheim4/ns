import { PostGraphileAmberPreset } from "postgraphile/presets/amber";

const preset = {
	grafserv: {
		dangerouslyAllowAllCORSRequests: true,
	},
	extends: [PostGraphileAmberPreset],
};

export default preset;

import "graphile-config";
import "postgraphile";
import { PostGraphileAmberPreset } from "postgraphile/presets/amber";

const preset = {
  extends: [PostGraphileAmberPreset],
};

export default preset;

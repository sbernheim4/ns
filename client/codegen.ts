import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
    schema: './schema.gql',
    generates: {
        "./app/types.ts": {
            plugins: ["typescript", "typescript-resolvers"],
        },
    },
};

export default config;

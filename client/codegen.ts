import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
    schema: "http://localhost:5678/graphql",
    documents: "./app/queries/**/*.gql",
    generates: {
        "./app/generated/gqlQueries.ts": {
            presetConfig: {
                gqlTagName: 'gql',
            },
            plugins: [
                "typescript",
                "typescript-resolvers",
                "typescript-operations",
                "typescript-react-apollo",
            ],
            config: {
                gqlImport: 'graphql-tag#gql',
                useTypeImports: true,
                fetcher: {
                    endpoint: "http://localhost:5678/graphql"
                }
            }
        },
    },
};

export default config;

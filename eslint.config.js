import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
    {
        files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    },
    {
        languageOptions: {
            globals: globals.browser,
        },
    },
    ...tseslint.configs.recommended,
    {
        ...pluginReact.configs.flat.recommended,
        rules: {
            "react/react-in-jsx-scope": "off",
            "semi": [
                "error",
                "always"
            ],
            "eol-last": [
                "error",
                "always"
            ],
            "no-multiple-empty-lines": [
                "error",
                {
                    "max": 1,
                    "maxEOF": 1,
                }
            ],
        },
    },
];

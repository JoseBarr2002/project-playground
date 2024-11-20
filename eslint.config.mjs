import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from "eslint-config-prettier";

export default [...tseslint.config(
    eslint.configs.recommended,
    tseslint.configs.recommended,
    {
        rules: {
            "@typescript-eslint/no-empty-object-type": ['error', { allowInterfaces: 'with-single-extends' }]
        }
    }
), eslintConfigPrettier];
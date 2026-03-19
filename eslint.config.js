import { defineAtomazingConfig } from '@atomazing-org/eslint-config';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
	globalIgnores(['dist']),
	...defineAtomazingConfig({ dirname: import.meta.dirname }),
]);

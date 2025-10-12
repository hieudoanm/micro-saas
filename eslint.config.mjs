import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname,
});

const eslintConfig = [
	{
		ignores: [
			'.next/**',
			'build/**',
			'docs/**',
			'mobile/**',
			'node_modules/**',
			'out/**',
			'src-tauri/**',
			'next-env.d.ts',
		],
	},
	...compat.extends('next/core-web-vitals', 'next/typescript'),
];

export default eslintConfig;

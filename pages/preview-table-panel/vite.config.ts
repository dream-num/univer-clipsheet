import { resolve } from 'node:path';
import process from 'node:process';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { watchRebuildPlugin } from '@univer-clipsheet/hmr';

const rootDir = resolve(__dirname);
const srcDir = resolve(rootDir, 'src');

const isDev = process.env.__DEV__ === 'true';
const isProduction = !isDev;

export default defineConfig({
    resolve: {
        alias: {
            '@src': srcDir,
        },
    },
    base: '',
    plugins: [react(), isDev && watchRebuildPlugin({ refresh: true })],
    publicDir: resolve(rootDir, 'public'),
    build: {
        outDir: resolve(rootDir, '..', '..', 'dist', 'preview-table-panel'),
        sourcemap: isDev,
        minify: isProduction,
        reportCompressedSize: isProduction,
        rollupOptions: {
            external: ['chrome'],
        },
    },
    define: {
        'process.env.NODE_ENV': isDev ? '"development"' : '"production"',
    },
});

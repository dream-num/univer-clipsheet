import { resolve } from 'node:path';
import process from 'node:process';
import { defineConfig } from 'vite';
import { watchRebuildPlugin } from '@univer-clipsheet/hmr';

const rootDir = resolve(__dirname);
const libDir = resolve(rootDir, 'lib');

const isDev = process.env.__DEV__ === 'true';
const isProduction = !isDev;

export default defineConfig({
    resolve: {
        alias: {
            '@lib': libDir,
        },
    },
    plugins: [isDev && watchRebuildPlugin({ refresh: true })],
    publicDir: resolve(rootDir, 'public'),
    build: {
        lib: {
            formats: ['iife'],
            entry: resolve(__dirname, 'lib/index.ts'),
            name: 'AjaxInterceptor',
            fileName: 'index',
        },
        outDir: resolve(rootDir, '..', '..', 'dist', 'ajax-interceptor'),
        sourcemap: isDev,
        minify: isProduction,
        reportCompressedSize: isProduction,
        modulePreload: true,
        rollupOptions: {
            external: ['chrome'],
        },
    },
    define: {
        'process.env.NODE_ENV': isDev ? '"development"' : '"production"',
    },
});

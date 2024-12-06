import { resolve } from 'node:path';
import process from 'node:process';
import { defineConfig } from 'vite';
import { makeEntryPointPlugin, watchRebuildPlugin } from '@univer-clipsheet/hmr';

const rootDir = resolve(__dirname);
const libDir = resolve(rootDir, 'lib');
const e2eDir = resolve(rootDir, 'e2e');

const isDev = process.env.__DEV__ === 'true';
const isProduction = !isDev;

export default defineConfig({
    resolve: {
        alias: {
            '@lib': libDir,
            '@e2e': e2eDir,
        },
    },
    plugins: [isDev && watchRebuildPlugin({ refresh: true }), isDev && makeEntryPointPlugin()],
    publicDir: resolve(rootDir, 'public'),
    build: {
        lib: {
            formats: ['iife'],
            entry: resolve(__dirname, 'lib/index.ts'),
            name: 'ContentScript',
            fileName: 'index',
        },
        outDir: resolve(rootDir, '..', '..', 'dist', 'content'),
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
